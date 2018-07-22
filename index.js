/* Helpers */
const compose = (...fns) => state => fns.reduceRight((s, fn) => fn(s), state)
const id = v => v

/* Milliseconds/Seconds */
const msToS = ms => ms / 1000
const sToMs = s => s * 1000

/* Seconds/Minutes */
const sToM = s => s / 60
const mToS = m => m * 60

/* Minutes/Hours */
const mToH = m => m / 60
const hToM = h => h * 60

/* Hours/Days */
const hToD = h => h / 24
const dToH = d => d * 24

/* Days/Weeks */
const dToW = d => d / 7
const wToD = w => w * 7

const mToMs = compose(
  sToMs,
  mToS
)

const msToM = compose(
  sToM,
  msToS
)

const msToH = compose(
  mToH,
  msToM
)

const hToMs = compose(
  mToMs,
  hToM
)

const msToD = compose(
  hToD,
  msToH
)

const dToMs = compose(
  hToMs,
  dToH
)

const msToW = compose(
  dToW,
  msToD
)

const wToMs = compose(
  dToMs,
  wToD
)

const milliseconds = {
  to: {
    ms: id,
    s: msToS,
    m: msToM,
    h: msToH,
    d: msToD,
    w: msToW,
  },
  from: {
    ms: id,
    s: sToMs,
    m: mToMs,
    h: hToMs,
    d: dToMs,
    w: wToMs
  }
}

const sToH = compose(
  mToH,
  sToM
)

const hToS = compose(
  mToS,
  hToM
)

const sToD = compose(
  hToD,
  sToH
)

const dToS = compose(
  hToS,
  dToH
)

const sToW = compose(
  dToW,
  sToD
)

const wToS = compose(
  dToS,
  wToD
)

const seconds = {
  to: {
    ms: sToMs,
    s: id,
    m: sToM,
    h: sToH,
    d: sToD,
    w: sToW
  },
  from: {
    ms: msToS,
    s: id,
    m: mToS,
    h: hToS,
    d: dToS,
    w: wToS
  }
}

const mToD = compose(
  hToD,
  mToH
)

const dToM = compose(
  hToM,
  dToH
)

const mToW = compose(
  dToW,
  mToD
)

const wToM = compose(
  dToM,
  wToD
)

const minutes = {
  to: {
    ms: mToMs,
    s: mToS,
    m: id,
    h: mToH,
    d: mToD,
    w: mToW,
  },
  from: {
    ms: msToM,
    s: sToM,
    m: id,
    h: hToM,
    d: dToM,
    w: wToM
  }
}

const wToH = compose(
  dToH,
  wToD
)

const hToW = compose(
  dToW,
  hToD
)

const hours = {
  to: {
    ms: hToMs,
    s: hToS,
    m: hToM,
    h: id,
    d: hToD,
    w: hToW,
  },
  from: {
    ms: msToH,
    s: sToH,
    m: mToH,
    h: id,
    d: dToH,
    w: wToH
  }
}

const days = {
  to: {
    ms: dToMs,
    s: dToS,
    m: dToM,
    h: dToH,
    d: id,
    w: dToW,
  },
  from: {
    ms: msToD,
    s: sToD,
    m: mToD,
    h: hToD,
    d: id,
    w: wToD,
  }
}

const weeks = {
  to: {
    ms: wToMs,
    s: wToS,
    m: wToM,
    h: wToH,
    d: wToD,
    w: id,
  },
  from: {
    ms: msToW,
    s: sToW,
    m: mToW,
    h: hToW,
    d: dToW,
    w: id,
  }
}

const converter = {
  ms: milliseconds,
  s: seconds,
  m: minutes,
  h: hours,
  d: days,
  w: weeks,
}

const initialMap = {
  ms: 'millisecond',
  s: 'second',
  m: 'minute',
  h: 'hour',
  d: 'day',
  w: 'week'
}

const wordMap = Object.keys(initialMap)
  .reduce((a, c) => Object.assign({}, a, {
    [initialMap[c]]: c
  }), {})

const unitFromInput = input => {
  // they used an initial!
  if (input in initialMap) {
    // so we return the initial!
    return input
  }

  const word = getTypeFromTypes(input)
  
  if (!(word in wordMap)) {
    throw new Error(`Cannot transfrom input ${input} into a unit`)
  }

  return wordMap[word]
}

const tokenizeInput = input => input
  .split(', ') // groups
  .map(group => {
    const [n, i] = group.split(/\s/)
    // Return the input number as a number
    return ([Number(n), unitFromInput(i)])
  })

const getTypeFromTypes = types => types
  .lastIndexOf('s') === types.length - 1
  ? types.slice(0, -1)
  : types

const innerTo = groups => to => {
  const toUnit = unitFromInput(to)
  return groups
    .reduce(
      (sum, [num, unit]) =>
        sum + converter[unit].to[toUnit](num),
      0
    )
}

const from = str => {
  const groups = tokenizeInput(str)

  return {
    to: innerTo(groups)
  }
}

const getExportKey = k => initialMap[k] + 's'

const wordifyExport = obj => Object.keys(obj).reduce((a, c) => ({
  ...a,
  [getExportKey(c)]: {
    from: Object.keys(obj[c].from).reduce((aa, cc) => ({
      ...aa,
      [getExportKey(cc)]: obj[c].from[cc]
    }), obj[c].from),
    to: Object.keys(obj[c].to).reduce((aa, cc) => ({
      ...aa,
      [getExportKey(cc)]: obj[c].to[cc]
    }), obj[c].to)
  }
}), obj)

module.exports = Object.assign({}, wordifyExport(converter), {
  from
})