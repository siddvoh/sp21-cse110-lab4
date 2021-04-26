# Part 3

The screenshot of the breakpoints is attached as 'part3-breakpoints.png' while the screenshot of watch expressions is attached as 'part3-watch.png' in this same folder.

1. The bug was that 'num1' and 'num2' were both being accepted as strings and hence result was also becoming a string variable which simply concatenated num1 and num2.  
2. The fix was that I changed explicity converted 'num1' and 'num2' to numbers using Number() function. Consequently, when result was then defined as num1+num2 (in line 9), result also became a number variable which resolved our bug and gave correct answers for our additions. The screenshot for this is attached in this folder as 'part3-question2.png'.

3. citylots.json
4. part2.js
5. 11.7 MB
6. 77.39 ms
7. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()
