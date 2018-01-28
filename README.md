# time-converter

> Conversions between milliseconds and days or anywhere in between.

_**Naming Convetion**_

* `ms` - millisecond
* `s` - second
* `m` - minute
* `h` - hour
* `d` - day

## Usage

```js
import timeConverter from '@mck-p/time-converter'

const milliseconds = 1000
timeConverter.ms.to.s(milliseconds) // 1

const seconds = 60
timeConverter.s.to.m(seconds) // 1

const minutes = 60
timeConverter.m.to.h(minutes) // 1

const hours = 24
timeConverter.h.to.d(hours) // 1

const days = 1
timeConverter.d.to.h(days) // 24
```

## API
 
* `ms`
  - `from`:
      * `ms` - `1 -> 1`
      * `s` - `1 -> 1000`
      * `m` - `1 -> 1000 * 60 `
      * `h` - `1 -> 1000 * 60 * 60`
      * `d` - `1 -> 1000 * 60 * 60 * 24`
  - `to`:
      * `ms` - `1 -> 1`
      * `s` - `1000 -> 1`
      * `m` - `1000 * 60 -> 1`
      * `h` - `1000 * 60 * 60 -> 1`
      * `d` - `1000 * 60 * 60 * 24 -> 1`

* `s`
  - `from`:
      * `ms` - `1 -> 1/1000`
      * `s` - `1 -> 1`
      * `m` - `1 -> 60 `
      * `h` - `1 -> 60 * 60`
      * `d` - `1 -> 60 * 60 * 24`
  - `to`:
      * `ms` - `1 -> 1000`
      * `s` - `1 -> 1`
      * `m` - `60 -> 1`
      * `h` - `60 * 60 -> 1`
      * `d` - `60 * 60 * 24 -> 1`

* `m`
  - `from`:
      * `ms` - `1 -> 1/(60 * 1000)`
      * `s` - `1 -> 1/60`
      * `m` - `1 -> 1 `
      * `h` - `1 -> 60`
      * `d` - `1 -> 60 * 24`
  - `to`:
      * `ms` - `1 -> 60 * 1000`
      * `s` - `1 -> 60`
      * `m` - `1 -> 1`
      * `h` - `60 -> 1`
      * `d` - `60 * 24 -> 1`

* `h`
  - `from`:
      * `ms` - `1 -> 1/(60 * 60 * 1000)`
      * `s` - `1 -> 1/(60 * 60)`
      * `m` - `1 -> 1/60 `
      * `h` - `1 -> 1`
      * `d` - `1 -> 24`
  - `to`:
      * `ms` - `1 -> 60 * 60 * 1000`
      * `s` - `1 -> 60 * 60`
      * `m` - `1 -> 60`
      * `h` - `1 -> 1`
      * `d` - `24 -> 1`

* `d`
  - `from`:
      * `ms` - `1 -> 1/(60 * 60 * 24 * 1000)`
      * `s` - `1 -> 1/(60 * 60 * 24)`
      * `m` - `1 -> 1/(60 * 24) `
      * `h` - `1 -> 1/24`
      * `d` - `1 -> 1`
  - `to`:
      * `ms` - `1 -> 60 * 60 * 24 * 1000`
      * `s` - `1 -> 60 * 60 * 24`
      * `m` - `1 -> 60 * 24`
      * `h` - `1 -> 24`
      * `d` - `1 -> 1`