# loar

Simple loading bar

## Installation

```
npm i loar
```

## Usage

```js
import loar, { Loar } from "loar";

loar.start();
```

Default export: `loar` - an instance of _Loar_ class

### Create new instance

```js
const loar = new Loar(options);
loar.start();
```

### Class init options / properties

| name     | type   | default | description                          |
| -------- | ------ | ------- | ------------------------------------ |
| color    | string | cyan    | Loading bar color (using picocolors) |
| symbol   | string | ▬       | Loading bar symbol                   |
| text     | string |         | Add text above loading bar           |
| width    | number | 20      | Loading bar width                    |
| interval | number | 10      | Loading bar interval                 |

## Example

```js
loar.start();
setTimeout(loar.stop.bind(loar), 6000);
```

![preview](https://github.com/renzbobz/loar/blob/main/preview.gif?raw=true)
