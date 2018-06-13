/*Question 2 -- decodeString(s): Given an encoded string, return its
corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside
the square brackets is repeated exactly k times. Note: k is guaranteed to
be a positive integer.

For s = “4[ab]“, the output should be decodeString(s) = “abababab”
For s = “2[b3[a]]“, the output should be decodeString(s) = “baaabaaa”*/

function decodeString(s) {

  // Tracker for Integer
  let numberBuffer = "";
  // Create "stack"/array data structure from input string
  const inputStack = s.split("");
  // keep track of repeat strings here
  const a = [""];

  let b;

  do {
    // pop the last element out of the stack
    b = inputStack.pop();
    // When a number is declared in NumberBuffer & the current popped element
    // from the inputStack is an alphabetic character, convert the NumberBuffer
    // to an Integer data type & multiply the current string (last element of 'a' array)
    // by the NumberBuffer, using the repeat method. Reset numberBuffer to empty string since
    // it has already been used to multiply the string.
    if (isNaN(b) && numberBuffer) {
      a.push(a.pop().repeat(parseInt(numberBuffer)) + a.pop());
        numberBuffer = "";
    }

    if (!b || b === "[") {
      continue; // do nothing
    } else if (b === "]") {
      a.push("")
    } else if (isNaN(b)) {
      // if b is an alphabetic character, concatenat it to the current string by popping out the last element
      // in the 'a' array and pushing it into the array as one string.
      a.push(b + a.pop())
    } else {
      // if b is a number, add it to the numberBuffer, since the numberBuffer can be more than one digit
      numberBuffer = b + numberBuffer;
    }

  } while (b); // while the stack exists.
  return a.join('');
  //return the "a" array as a string. This is the final string.

}

//console.log(decodeString('2[c2[4[a]x11[b]]]]'));
//console.log(decodeString('4[ab]'));
//console.log(decodeString('2[b3[a]]'));
