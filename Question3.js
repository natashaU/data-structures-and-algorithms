/*Question 3 -- changePossibilities(amount,amount): Your quirky boss
collects rare, old coins. They found out you’re a programmer and asked
you to solve something they’ve been wondering for a long time.

Write a function that, given an amount of money and an array of coin
denominations, computes the number of ways to make the amount of money
with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
your program would output 4—the number of ways to make 4¢ with those
denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢  */


function memoize(fn) {
  const cache = {};
  // keep track of arguments and results

  return function (...args) {
    // if the arguments are in the cache, return the result of the cached
    // arguments rather running the function again
    if (cache[args]) {
      return cache[args];
    }
    // if the arguments are not in the cache, call function & store the arguments in the cache
    const result = fn.apply(this,args);
    cache[args] = result;
    return result;
  }
}

// a simple & clean way to solve this problem would be using recursion,
// however recursive calls can be called many times with identical arguments,
// increasing the runtime to exponential levels. To decrease runtime, it would make sense
// to pass to the memoize function.
function changePossibilities(amount, coins) {
  // terminal case if the amount value is zero
  if (amount === 0) {
    return 1;
    // terminal case if there is no more coins in the array
  } else if (amount < 0 || coins.length === 0) {
    return 0;
  } else {
    // the function calls itself while decreasing amount &
    // decreasing coins array
    return fasterRunTime(amount-coins[0], coins) +
    fasterRunTime(amount, coins.slice(1))
  }
}

// pass the function to the memoize function as an argument
const fasterRunTime = memoize(changePossibilities);
//console.log(fasterRunTime(1000, [1,2,3]))
//console.log(fasterRunTime(4, [1,2,3]))
