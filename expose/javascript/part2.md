1. It prints out i's value of 3 since it just finished the for loop from [0,2]. Also, i is visible since it was declared using 'var'.
2. It prints out discountedPrice's value of 150.0 since it is in scope by the 'var' keyword.
3. It prints out finalPrices's value of 150 since it is in scope by the 'var' keyword.
4. The function will return the discounted array which is [50, 100, 150].
5. At line 12, the program will have a scope error since i is undefined at this point since it was declared with 'let'.
6. At line 13, the program will have a scope error since discountedPrice is undefined at this point since it was declared with 'let'.
7. The program will print out the most recent value of finalPrice, which is 150, as it is in scope (same block as declaration).
8. The function will return the discounted array which is [50, 100, 150].
9. There will be an error since i is not in scope.
10. It will print length's value of 3 since it was set to price's length of 3 and never changed (it is still in scope).
11. It will return the discounted array of [50, 100, 150].
12. 
    A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13. 
    A) '32', since the 2 is appending as a string to '3'.
    B) 1, since the '3' is converted to the number 3 before performing subtraction.
    C) 3, since null is treated as 0 in arithmetic.
    D) '3null', since null is converted into 'null' to match '3'.
    E) 4, since true is converted to 1 in arithmetic.
    F) 0, since both are converted to 0 in arithmetic.
    G) 3undefined, since undefined is converted to 'undefined' to match '3'.
    H) NaN, since undefined is converted to NaN in arithmetic.
14. 
    A) true, since '2' is converted to 2 for numerical comparisons.
    B) false, since '2' comes after '12' lexicographically.
    C) true, since '2' is converted to 2 for numerical comparisons.
    D) false, since 2 and '2' are different types (always false for ===).
    E) false, since true is converted to 1 for numerical comparisons.
    F) true, since all nonzero numbers are converted to true with the Boolean() function.

15. The main difference is that == will convert the types first to find equality, whereas === will immediately give false for different types.
16. (located in part2-question16.js)
17. The modifyArray function runs with the [1,2,3] array and doSomething function, which takes a number and doubles it. In modifyArray, we create a new array and push the elements of [1,2,3] after they have been changed by the callback function (which in this case is doSomething). Therefore, each element in the original input array is doubled, as expected by the doSomething function, then the entire array is returned.
18. (located in part2-question18.js)
19. The printNums function is executed, which immediately prints out 1 and then 4, since they have no delay. After this, it waits the needed time before printing 3 (which happens immediately since its timer is 0), then it prints 2 (which happens after a second).