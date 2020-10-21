/*!
 * @license serial
 * (c) 2019 tom
 * License: MIT
*/
export default class Serial {
    constructor();
    static number(length: number, start?: number): number[];
    static char: {
        lower(length: number, start?: number | undefined): string[];
        upper(length: number, start?: number | undefined): string[];
    };
}
