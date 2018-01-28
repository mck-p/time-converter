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

const milliseconds = {
  to: {
    ms: id,
    s: msToS,
    m: msToM,
    h: msToH,
    d: msToD
  },
  from: {
    ms: id,
    s: sToMs,
    m: mToMs,
    h: hToMs,
    d: dToMs
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

const seconds = {
  to: {
    ms: sToMs,
    s: id,
    m: sToM,
    h: sToH,
    d: sToD
  },
  from: {
    ms: msToS,
    s: id,
    m: mToS,
    h: hToS,
    d: dToS,
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

const minutes = {
  to: {
    ms: mToMs,
    s: mToS,
    m: id,
    h: mToH,
    d: mToD
  },
  from: {
    ms: msToM,
    s: sToM,
    m: id,
    h: hToM,
    d: dToM
  }
}

const hours = {
  to: {
    ms: hToMs,
    s: hToS,
    m: hToM,
    h: id,
    d: hToD,
  },
  from: {
    ms: msToH,
    s: sToH,
    m: mToH,
    h: id,
    d: dToH
  }
}

const days = {
  to: {
    ms: dToMs,
    s: dToS,
    m: dToM,
    h: dToH,
    d: id
  },
  from: {
    ms: msToD,
    s: sToD,
    m: mToD,
    h: hToD,
    d: id,
  }
}

const converter = {
  ms: milliseconds,
  s: seconds,
  m: minutes,
  h: hours,
  d: days,
}

const tokenizeInput = input => input
  .split(/\s/)
  .slice(0, 2)

const getTypeFromTypes = types => types
  .lastIndexOf('s') === types.length - 1
  ? types.slice(0, -1)
  : types

const getConverterType = type => {
  const initials = {
    'millisecond': 'ms',
    'second': 's',
    'minute': 'm',
    'hour': 'h',
    'day': 'd' 
  }

  return initials[type]
}

const innerTo = from => to => {
  const toType = getTypeFromTypes(to)
  const [fromNum, fromType] = from

  const cFrom = getConverterType(fromType)
  const cTo = getConverterType(toType)

  return converter[cFrom].to[cTo](fromNum)
}

const from = str => {
  const [num, types] = tokenizeInput(str)
  const type = getTypeFromTypes(types)

  return {
    to: innerTo([num, type])
  }
}

module.exports = Object.assign({}, converter, {
  from
})