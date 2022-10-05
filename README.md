# @tomsd/serial

Serial generates the serial numbers or characters.

![npm](https://img.shields.io/npm/v/@tomsd/serial)
![NPM](https://img.shields.io/npm/l/@tomsd/serial)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@tomsd/serial)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@tomsd/serial)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

## Installation
``` sh
npm install @tomsd/serial
```

# Usage

``` typescript
import { Serial } from "@tomsd/serial";

console.log(Serial.number(3)); // [0, 1, 2]

console.log(Serial.number(3, 1)); // [1, 2, 3]

console.log(Serial.char.lower(3)); // ["a", "b", "c"]

console.log(Serial.char.upper(3)); // ["A", "B", "C"]

console.log(Serial.char.lower(3, 2)); // ["c", "d", "e"]

console.log(Serial.char.upper(3, 2)); // ["C", "D", "E"]

```
