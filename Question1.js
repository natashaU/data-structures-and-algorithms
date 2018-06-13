/*Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the
 order they occur in the string t. You can assume t will not have
 repetitive characters. For s = “weather” and t = “therapyw”,
 the output should be sortByString(s, t) = “theeraw”. For s = “good”
 and t = “odg”, the output should be sortByString(s, t) = “oodg”.*/

 function sortByStrings(s,t) {
  let counter = {};
  let sortedStr = "";

  for (let char of s) {
    counter[char]? counter[char]++ : counter[char] = 1;
  }

  for (let char of t) {
    if (counter[char]){
      sortedStr+= char.repeat(counter[char])
    }
  }
  return sortedStr
}

 //console.log(sortByStrings("weather", "therapyw"))
//console.log(sortByStrings("good","odg"))
