import { convert } from "./roman-numbers";

describe("RomanNumbers", () => {

  const testCases = [
    {num: 1, expected: "I"},
    {num: 2, expected: "II"},
    {num: 3, expected: "III"},
    {num: 4, expected: "IV"},
    {num: 5, expected: "V"},
    {num: 6, expected: "VI"},
    {num: 7, expected: "VII"},
    {num: 8, expected: "VIII"},
    {num: 9, expected: "IX"},
    {num: 10, expected: "X"},
    {num: 11, expected: "XI"},
    {num: 12, expected: "XII"},
    {num: 13, expected: "XIII"},
    {num: 14, expected: "XIV"},
    {num: 15, expected: "XV"},
    {num: 16, expected: "XVI"},
    {num: 17, expected: "XVII"},
    {num: 18, expected: "XVIII"},
    {num: 19, expected: "XIX"},
  ]

  test.each(testCases)("Should convert $num to $expected", ({num, expected}) =>{
    const result = convert(num);
    expect(result).toBe(expected);
  });

});