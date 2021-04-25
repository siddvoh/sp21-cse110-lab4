## Part 1

# 1a.

1. 20
2. 20

3. 20
4. ERROR due to block scope. This is becaause 'result' is declared with the 'let' keyword outside the scope of the command at line 13. 'result' is declare with let inside the scope of the 'if' statement which closes at line 11. So, line 13 would return an error as it can only be accessed within the block it is defined in (the if block).

5. ERROR. This is because the code will not be able to compute line 7 as line 7 is trying to re-define a const variable. const variables can not be re-defined once they have been declared and defined (which was done at line 5). Hence, the compiler will throw an error at line 7 and hence line 9 would not print anything (and return an error).
6.  ERROR. This is because the code will not be able to compute line 7 as line 7 is trying to re-define a const variable. const variables can not be re-defined once they have been declared and defined (which was done at line 5). Hence, the compiler will throw an error at line 7 and hence line 13 would not print anything (and return an error).
 



