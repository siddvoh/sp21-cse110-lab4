# Part 1

## 1a.

1. 20
2. 20

3. 20
4. ERROR due to block scope. This is becaause 'result' is declared with the 'let' keyword outside the scope of the command at line 13. 'result' is declare with let inside the scope of the 'if' statement which closes at line 11. So, line 13 would return an error as it can only be accessed within the block it is defined in (the if block).

5. ERROR. This is because the code will not be able to compute line 7 as line 7 is trying to re-define a const variable. const variables can not be re-defined once they have been declared and defined (which was done at line 5). Hence, the compiler will throw an error at line 7 and hence line 9 would not print anything (and return an error).
6.  ERROR. This is because the code will not be able to compute line 7 as line 7 is trying to re-define a const variable. const variables can not be re-defined once they have been declared and defined (which was done at line 5). Hence, the compiler will throw an error at line 7 and hence line 13 would not print anything (and return an error).

## 1b.
 
1. '3' will be printed to the concsole at line 12. This is because line 12 prints the value of i. i, during the for loop, starts from 0 then increments to 1 then to 2 and then to 3. When it increments to 3, the loop is exited as prince.length = 3 and i has to be less than 3. The condition for the loop is not fulfilled and the loop ends with i=3. This is why at line 12 we print i's value, 3 is printed.

2. '150' will be printed to the concsole at line 13. This is because line 13 prints the value of 'discountedPrice'. When the loop (above line 13) ends, the value of 'discountedPrice' is 150 due to the computational formula written. The formula at line 7 is applied for prices[i] and since the last value of i in the loop is 2, prices[i] = prices[2] = 300. When we assign the 'discountedPrice' var to it and use the formula (at line 7) on 300, we get 300 * (1-0.5) = 3400 * 0.5 = 150. Hence, when we print 'discountedPrice' at line 13, we can see 150 on the console.

3. '150' will be printed to the concsole at line 14. This is because line 14 prints the value of 'finalPrice'. When the loop (above line 14) ends, the value of 'finalPrice' is 150 due to the computational formula written. The formula at line 7 is applied for prices[i] and since the last value of i in the loop is 2, prices[i] = prices[2] = 300. When we assign the 'discountedPrice' var to it and use the formula (at line 7) on 300, we get 300 * (1-0.5) = 3400 * 0.5 = 150. Then when we update the value 'finalPrice' using the formula at line 8, we get Math.round(150 * 100)/100 = Math.round(15000)/100 = 15000/100 = 150. Hence, when we print 'finalPrice' at line 14, we can see 150 on the console.


