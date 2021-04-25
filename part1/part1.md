# Part 1

## 1a.

1. 20
2. 20

3. 20
4. ERROR due to block scope. This is becaause 'result' is declared with the 'let' keyword outside the scope of the command at line 13. 'result' is declared with let inside the scope of the 'if' statement which closes at line 11. So, line 13 would return an error as 'result' can only be accessed within the block it is defined in (the if block).

5. ERROR. This is because the code will not be able to compute line 7 as line 7 is trying to re-define a const variable. const variables can not be re-defined once they have been declared and defined (which was done at line 5). Hence, the compiler will throw an error at line 7 and hence line 9 would not print anything (and return an error).
6.  ERROR. This is because the code will not be able to compute line 7 as line 7 is trying to re-define a const variable. const variables can not be re-defined once they have been declared and defined (which was done at line 5). Hence, the compiler will throw an error at line 7 and hence line 13 would not print anything (and return an error).

## 1b.
 
1. 3 will be printed to the concsole at line 12. This is because line 12 prints the value of i. i, during the for loop, starts from 0 then increments to 1 then to 2 and then to 3. When it increments to 3, the loop is exited as prince.length = 3 and i has to be less than 3. The condition for the loop is not fulfilled and the loop ends with i=3. This is why at line 12 we print i's value, 3 is printed to the console.

2. 150 will be printed to the concsole at line 13. This is because line 13 prints the value of 'discountedPrice'. When the loop (above line 13) ends, the value of 'discountedPrice' is 150 due to the computational formula written. The formula at line 7 is applied for prices[i] and since the last value of i in the loop is 2, prices[i] = prices[2] = 300. When we assign the 'discountedPrice' var to it and use the formula (at line 7) on 300, we get 300 * (1-0.5) = 3400 * 0.5 = 150. Hence, when we print 'discountedPrice' at line 13, we can see 150 on the console.

3. 150 will be printed to the concsole at line 14. This is because line 14 prints the value of 'finalPrice'. When the loop (above line 14) ends, the value of 'finalPrice' is 150 due to the computational formula written. The formula at line 7 is applied for prices[i] and since the last value of i in the loop is 2, prices[i] = prices[2] = 300. When we assign the 'discountedPrice' var to it and use the formula (at line 7) on 300, we get 300 * (1-0.5) = 3400 * 0.5 = 150. Then when we update the value 'finalPrice' using the formula at line 8, we get Math.round(150 * 100)/100 = Math.round(15000)/100 = 15000/100 = 150. Hence, when we print 'finalPrice' at line 14, we can see 150 on the console.

4. The function returns [50, 100, 150]. An array containing the numbers 50,100 and 150 are returned at 0th,1st and 2nd indices respectively. This array 'discounted', which is returned, contains the value of 'finalPrice' for each of the iterations which have been pushed into this array for every iteration at line 9. When i=0, dicsountedPrice = 50, finalPrice = 50 and hence discounted[0] = 50.  When i=1, dicsountedPrice = 100, finalPrice = 100 and hence discounted[1] = 100.  When i=2, dicsountedPrice = 150, finalPrice = 150 and hence discounted[2] = 150.  So, the function returns 'discounted' array which is [50,100,150].

5. ERROR due to block scope. This is becaause 'i' is declared with the 'let' keyword outside the scope of the command at line 12. 'i' is declared with let inside the scope of the 'for' loop which ends at line 10. So, line 12 would return an error as 'i' can only be accessed within the block it is defined in (the for loop block).

6. ERROR due to block scope. This is becaause 'discountedPrice' is declared with the 'let' keyword outside the scope of the command at line 13. 'discountedPrice' is declared with let inside the scope of the 'for' loop which ends at line 10. So, line 13 would return an error as 'discountedPrice' can only be accessed within the block it is defined in (the for loop block).

7. 150 will be printed to the concsole at line 14. This is because line 14 prints the value of 'finalPrice'. When the loop (above line 14) ends, the value of 'finalPrice' is 150 due to the computational formula written. The formula at line 7 is applied for prices[i] and since the last value of i in the loop is 2, prices[i] = prices[2] = 300. When we assign the 'discountedPrice' var to it and use the formula (at line 7) on 300, we get 300 * (1-0.5) = 3400 * 0.5 = 150. Then when we update the value 'finalPrice' using the formula at line 8, we get Math.round(150 * 100)/100 = Math.round(15000)/100 = 15000/100 = 150. Hence, when we print 'finalPrice' at line 14, we can see 150 on the console.

8. The function returns [50, 100, 150]. An array containing the numbers 50,100 and 150 are returned at 0th,1st and 2nd indices respectively. This array 'discounted', which is returned, contains the value of 'finalPrice' for each of the iterations which have been pushed into this array for every iteration at line 9. When i=0, dicsountedPrice = 50, finalPrice = 50 and hence discounted[0] = 50.  When i=1, dicsountedPrice = 100, finalPrice = 100 and hence discounted[1] = 100.  When i=2, dicsountedPrice = 150, finalPrice = 150 and hence discounted[2] = 150.  So, the function returns 'discounted' array which is [50,100,150].

9. ERROR due to block scope. This is becaause 'i' is declared with the 'let' keyword outside the scope of the command at line 11. 'i' is declared with let inside the scope of the 'for' loop which ends at line 9. So, line 11 would return an error as 'i' can only be accessed within the block it is defined in (the for loop block).

10. 3 will be printed to the concsole at line 12. This is because line 12 prints the value of length. 'length' has been defined as a constant which contains the length of the 'prices' array. The 'prices' array has 3 elements (100,200,300) and thus has a length of 3. 'length' is therefore set to 3 at line 4 and its value does not change during the running of the given function. Hence, at line 12, 3 is printed to the console.

11. The function returns a const array of [50, 100, 150]. A const array containing the numbers 50,100 and 150 are returned at 0th,1st and 2nd indices respectively. This const array 'discounted', which is returned, contains the value of 'discountedPrice' for each of the iterations which have been pushed into this array for every iteration at line 8. This is allowed because a const array can not be re-assigned but its elements may be changed. Hence,  When i=0, dicsountedPrice = 50 and hence discounted[0] = 50.  When i=1, dicsountedPrice = 100 and hence discounted[1] = 100.  When i=2, dicsountedPrice = 150 and hence discounted[2] = 150.  So, the function returns const 'discounted' array which is [50,100,150].

12. A. student['name']
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher']['name']
    E. student['courseLoad'][0]
 
 13. A. '32'. This is so because the integer(2) map to their exact string representation and then both the strings '3' and '2' are combined.
     B. 1 . This is so because '3' is converted into an integer and then 3-2=1 is calculated.
     C. 3 . This is so because null, on undergoing numeric conversion, changes to 0 and then 3+0=3 is calculated.
     D. 3null . This is so because null, on undergoing string conversion, changes to 'null' and then both the strings '3' and 'null' are combined.
     E. 4 . This is so because true, on undergoing numeric conversion, changes to 1 and then 1+3=4 is calculated.
     F. 0 . This is so because false and null, on undergoing numeric conversion, change to 0 and 0 respectively and then 0+0=0 is calculated.
     G. 3undefined . This is so because undefined, on undergoing string conversion, changes to 'undefined' and then both the strings '3' and 'undefined' are combined.
     H. NaN . This is so because undefined, on undergoing numeric conversion, changes to NaN and then no calculation is done and NaN is returned.
  
 14. A. true . This is so because the comparison operator '>' converts '2' to 2 and then returns true as 2 > 1.
     B. false . This is so because the comparison operator '<' compares the first 2 characters of both the strings and returns false as 2<1 is false.
     C. true . This is so because the equality checker '==' compares the two values after  numerically converting the '2' to 2 and returns true as 2 == 2 is true.
     D. false . This is so because '===' compares the types of '2' and 2  and returns false immediately as '2' is a string but 2 is an integer.
     E. false . This is so because the equality checker '==' compares the two values after numerically converting the true to 1 and returns false as 1 == 2 is false.
     F. true . This is so because compares the types of true and Boolean(2) first and returns true immediately as both true and Boolean(2) are both Booleans.
     
 15.
     
     
