# @tomsd/serial

Serial generates the serial numbers or characters.

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
