function findLargestHex() {
  let largestNumber = "3";
  let sum = 3n;
  let length = 1;
  while (length < 38) {
    let remainder = (sum + 1n) % BigInt(length + 1);
    let newDigit = remainder === 0n ? 0n : 16n - remainder;

    largestNumber = newDigit.toString(16) + largestNumber;
    sum += newDigit * 16n ** BigInt(length);
    length++;
  }

  return largestNumber;
}

let largestHexNumber = findLargestHex();
console.log("Наибольшее число в шестнадцатеричной системе:", largestHexNumber);
