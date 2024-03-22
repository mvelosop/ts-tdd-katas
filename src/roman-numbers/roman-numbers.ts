export function convert (num: number): string {
  const map = new Map<number, string>();
  map.set(1, 'I');
  map.set(5, 'V');
  map.set(10, 'X');

  if (num < 4) {
    return "I".repeat(num);    
  } else if (num === 4 ){
    return "IV";
  } else if (num < 9 ) {
    return "V" + "I".repeat(num - 5);    
  } else if (num === 9) {
    return "IX";
  } else {
    return "X" + "I".repeat(num - 10);    
  }
}