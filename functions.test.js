// test for stringLength function
// string length is >= 1 and <= 10
import Calculator from './Calculator.js';
import { stringLength, reverseString, capitalizeFirstLetter } from './functions.js';

const calc = new Calculator(1, 2);

test('string length is at least 1 and less than 10', () => {
  expect(stringLength).toBeDefined();
  expect(stringLength('test')).toBeTruthy();
  expect(stringLength('test')).toBe(4);
  expect(stringLength('test')).toBeLessThanOrEqual(10);
});

//test reverseString function
test('reverse string is correct', () => {
  expect(reverseString).toBeDefined();
  expect(reverseString('test')).toBeTruthy();
  expect(reverseString('test')).toBe('tset');
});

// test calculator class methods
describe('Calculator class', () => {
  describe('Add function', () => {
    test('should add two numbers', () => {
      expect(calc.add()).toBe(3);
    });
    test('Should be toBeTruthy', () => {
      expect(calc.add() === 3).toBeTruthy();
    });
    test('Should be falsy', () => {
      expect(calc.add() === 4).toBeFalsy();
    });
  });

  describe('Subtract function', () => {
    test('should subtract two numbers', () => {
      expect(calc.subtract()).toBe(-1);
    });
    test('Should be toBeTruthy', () => {
      expect(calc.subtract() === -1).toBeTruthy();
    });
    test('Should be falsy', () => {
      expect(calc.subtract() === 8).toBeFalsy();
    });
  });

  describe('Multiply function', () => {
    test('should multiply two numbers', () => {
      expect(calc.multiply()).toBe(2);
    });
    test('Should be toBeTruthy', () => {
      expect(calc.multiply() === 2).toBeTruthy();
    });
    test('Should be falsy', () => {
      expect(calc.multiply() === 5).toBeFalsy();
    });
  });

  describe('Divide function', () => {
    test('should divide two numbers', () => {
      expect(calc.divide()).toBe(0.5);
    });
    test('Should be toBeTruthy', () => {
      expect(calc.divide() === 0.5).toBeTruthy();
    });
    test('Should be falsy', () => {
      expect(calc.divide() === 0.6).toBeFalsy();
    });
  });
});

// Test: Capitalize a string
test('Capitalize the first character of a string', () => {  
  expect(capitalizeFirstLetter('test')).toBe('Test');
})