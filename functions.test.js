import { calculator, capitalize, reverseString, caesarCipher, analyseArray } from "./functions";

test('capitalize', () => {
    expect(capitalize('example')).toMatch(/^[A-Z]/)
})

test('reverseString', () => {
    expect(reverseString('example')).toBe('elpmaxe')
})

test('calculator', () => {

    expect(calculator.add(3,6)).toBe(9)
    expect(calculator.add(-3,-6)).toBe(-9)
    expect(calculator.add(-3,6)).toBe(3)

    expect(calculator.subtract(10,7)).toBe(3)
    expect(calculator.subtract(7,10)).toBe(-3)
    expect(calculator.subtract(7,-10)).toBe(17)
    expect(calculator.subtract(-7,10)).toBe(-17)

    expect(calculator.multiply(4,8)).toBe(32)
    expect(calculator.multiply(4,-8)).toBe(-32)
    expect(calculator.multiply(5,0.5)).toBe(2.5)

    expect(calculator.divide(10,2)).toBe(5)
    expect(calculator.divide(10,-2)).toBe(-5)
    expect(calculator.divide(10,100)).toBe(0.1)

})

test('caesarCipher', () => {
    expect(caesarCipher('blue', 25)).toBe('aktd')
    expect(caesarCipher('BLUE', 25)).toBe('AKTD')
    expect(caesarCipher('!blue?', 25)).toBe('!aktd?')
})

test('analyseArray', () => {
    expect(analyseArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})