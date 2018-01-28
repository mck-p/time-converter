const converter = require('./')

describe('Millisecond Converter', () => {
  describe('ms.to', () => {
    it('converts to milliseconds', () => {
      const ms = 1
      const expected = 1
      const actual = converter.ms.to.ms(ms)

      expect(actual).toBe(expected)
    })

    it('converts to seconds', () => {
      const ms = 1000
      const expected = 1
      const actual = converter.ms.to.s(ms)
      
      expect(actual).toBe(expected)
    })

    it('converts to minutes', () => {
      const ms = 60000
      const expected = 1
      const actual = converter.ms.to.m(ms)

      expect(actual).toBe(expected)
    })

    it('converts to hours', () => {
      const ms = 60000 * 60
      const expected = 1
      const actual = converter.ms.to.h(ms)

      expect(actual).toBe(expected)
    })

    it('converts to days', () => {
      const ms = 60000 * 60 * 24
      const expected = 1
      const actual = converter.ms.to.d(ms)

      expect(actual).toBe(expected)
    })
  })

  describe('ms.from', () => {
    it('converts from milliseconds', () => {
      const ms = 1
      const expected = 1
      const actual = converter.ms.from.ms(ms)

      expect(actual).toBe(expected)
    })

    it('converts from seconds', () => {
      const s = 1
      const expected = 1000
      const actual = converter.ms.from.s(s)
      
      expect(actual).toBe(expected)
    })

    it('converts from minutes', () => {
      const m = 1
      const expected = 60000
      const actual = converter.ms.from.m(m)

      expect(actual).toBe(expected)
    })

    it('converts from hours', () => {
      const h = 1
      const expected = 60000 * 60
      const actual = converter.ms.from.h(h)

      expect(actual).toBe(expected)
    })

    it('converts from days', () => {
      const d = 1
      const expected = 60000 * 60 * 24
      const actual = converter.ms.from.d(d)

      expect(actual).toBe(expected)
    })
  })

  describe('s.to', () => {
    it('converts to milliseconds', () => {
      const s = 1
      const expected = 1000
      const actual = converter.s.to.ms(s)

      expect(actual).toBe(expected)
    })

    it('converts to seconds', () => {
      const s = 1
      const expected = 1
      const actual = converter.s.to.s(s)
      
      expect(actual).toBe(expected)
    })

    it('converts to minutes', () => {
      const s = 60
      const expected = 1
      const actual = converter.s.to.m(s)

      expect(actual).toBe(expected)
    })

    it('converts to hours', () => {
      const s = 60 * 60
      const expected = 1
      const actual = converter.s.to.h(s)

      expect(actual).toBe(expected)
    })

    it('converts to days', () => {
      const s = 24 * 60 * 60
      const expected = 1
      const actual = converter.s.to.d(s)

      expect(actual).toBe(expected)
    })
  })

  describe('s.from', () => {
    it('converts from milliseconds', () => {
      const ms = 1000
      const expected = 1
      const actual = converter.s.from.ms(ms)

      expect(actual).toBe(expected)
    })

    it('converts from seconds', () => {
      const s = 1
      const expected = 1
      const actual = converter.s.from.s(s)
      
      expect(actual).toBe(expected)
    })

    it('converts from minutes', () => {
      const m = 1
      const expected = 60
      const actual = converter.s.from.m(m)

      expect(actual).toBe(expected)
    })

    it('converts from hours', () => {
      const h = 1
      const expected = 60 * 60
      const actual = converter.s.from.h(h)

      expect(actual).toBe(expected)
    })

    it('converts from days', () => {
      const d = 1
      const expected = 60 * 60 * 24
      const actual = converter.s.from.d(d)

      expect(actual).toBe(expected)
    })
  })

  describe('m.to', () => {
    it('converts to milliseconds', () => {
      const m = 1
      const expected = 60000
      const actual = converter.m.to.ms(m)

      expect(actual).toBe(expected)
    })

    it('converts to seconds', () => {
      const m = 1
      const expected = 60
      const actual = converter.m.to.s(m)
      
      expect(actual).toBe(expected)
    })

    it('converts to minutes', () => {
      const m = 1
      const expected = 1
      const actual = converter.m.to.m(m)

      expect(actual).toBe(expected)
    })

    it('converts to hours', () => {
      const m = 60
      const expected = 1
      const actual = converter.m.to.h(m)

      expect(actual).toBe(expected)
    })

    it('converts to days', () => {
      const m = 60 * 24
      const expected = 1
      const actual = converter.m.to.d(m)

      expect(actual).toBe(expected)
    })
  })

  describe('m.from', () => {
    it('converts from milliseconds', () => {
      const ms = 60000
      const expected = 1
      const actual = converter.m.from.ms(ms)

      expect(actual).toBe(expected)
    })

    it('converts from seconds', () => {
      const s = 60
      const expected = 1
      const actual = converter.m.from.s(s)
      
      expect(actual).toBe(expected)
    })

    it('converts from minutes', () => {
      const m = 1
      const expected = 1
      const actual = converter.m.from.m(m)

      expect(actual).toBe(expected)
    })

    it('converts from hours', () => {
      const h = 1
      const expected = 60
      const actual = converter.m.from.h(h)

      expect(actual).toBe(expected)
    })

    it('converts from days', () => {
      const d = 1
      const expected = 60 * 24
      const actual = converter.m.from.d(d)

      expect(actual).toBe(expected)
    })
  })

  describe('h.to', () => {
    it('converts to milliseconds', () => {
      const h = 1
      const expected = 1000 * 60 * 60
      const actual = converter.h.to.ms(h)

      expect(actual).toBe(expected)
    })

    it('converts to seconds', () => {
      const h = 1
      const expected = 60 * 60
      const actual = converter.h.to.s(h)
      
      expect(actual).toBe(expected)
    })

    it('converts to minutes', () => {
      const h = 1
      const expected = 60
      const actual = converter.h.to.m(h)

      expect(actual).toBe(expected)
    })

    it('converts to hours', () => {
      const h = 1
      const expected = 1
      const actual = converter.h.to.h(h)

      expect(actual).toBe(expected)
    })

    it('converts to days', () => {
      const h = 24
      const expected = 1
      const actual = converter.h.to.d(h)

      expect(actual).toBe(expected)
    })
  })

  describe('h.from', () => {
    it('converts from milliseconds', () => {
      const ms = 1000 * 60 * 60
      const expected = 1
      const actual = converter.h.from.ms(ms)

      expect(actual).toBe(expected)
    })

    it('converts from seconds', () => {
      const s = 60 * 60
      const expected = 1
      const actual = converter.h.from.s(s)
      
      expect(actual).toBe(expected)
    })

    it('converts from minutes', () => {
      const m = 60
      const expected = 1
      const actual = converter.h.from.m(m)

      expect(actual).toBe(expected)
    })

    it('converts from hours', () => {
      const h = 1
      const expected = 1
      const actual = converter.h.from.h(h)

      expect(actual).toBe(expected)
    })

    it('converts from days', () => {
      const d = 1
      const expected = 24
      const actual = converter.h.from.d(d)

      expect(actual).toBe(expected)
    })
  })

  describe('d.to', () => {
    it('converts to milliseconds', () => {
      const d = 1
      const expected = 1000 * 60 * 60 * 24
      const actual = converter.d.to.ms(d)

      expect(actual).toBe(expected)
    })

    it('converts to seconds', () => {
      const d = 1
      const expected = 60 * 60 * 24
      const actual = converter.d.to.s(d)
      
      expect(actual).toBe(expected)
    })

    it('converts to minutes', () => {
      const d = 1
      const expected = 60 * 24
      const actual = converter.d.to.m(d)

      expect(actual).toBe(expected)
    })

    it('converts to hours', () => {
      const d = 1
      const expected = 24
      const actual = converter.d.to.h(d)

      expect(actual).toBe(expected)
    })

    it('converts to days', () => {
      const d = 1
      const expected = 1
      const actual = converter.d.to.d(d)

      expect(actual).toBe(expected)
    })
  })

  describe('d.from', () => {
    it('converts from milliseconds', () => {
      const ms = 1000 * 60 * 60 * 24
      const expected = 1
      const actual = converter.d.from.ms(ms)

      expect(actual).toBe(expected)
    })

    it('converts from seconds', () => {
      const s = 60 * 60 * 24
      const expected = 1
      const actual = converter.d.from.s(s)
      
      expect(actual).toBe(expected)
    })

    it('converts from minutes', () => {
      const m = 60 * 24
      const expected = 1
      const actual = converter.d.from.m(m)

      expect(actual).toBe(expected)
    })

    it('converts from hours', () => {
      const h = 24
      const expected = 1
      const actual = converter.d.from.h(h)

      expect(actual).toBe(expected)
    })

    it('converts from days', () => {
      const d = 1
      const expected = 1
      const actual = converter.d.from.d(d)

      expect(actual).toBe(expected)
    })
  })

  describe('from', () => {
    it('takes a string as input and returns an object with a to method', () => {
      const from = '1 day'
      const expected = true
      const actual = 'to' in converter.from(from)

      expect(actual).toBe(expected)
    })

    describe('from().to', () => {
      it('returns the conversion for day to hours', () => {
        const from = '1 day'
        const to = 'hours'
        const expected = 24
        const actual = converter.from(from).to(to)

        expect(actual).toBe(expected)
      })

      it('returns the conversion for days to hours', () => {
        const from = '2 days'
        const to = 'hours'
        const expected = 48
        const actual = converter.from(from).to(to)

        expect(actual).toBe(expected)
      })

      it('returns the conversion for minutes to seconds', () => {
        const from = '1 minute'
        const to = 'seconds'
        const expected = 60
        const actual = converter.from(from).to(to)

        expect(actual).toBe(expected)
      })
    })
  })
})