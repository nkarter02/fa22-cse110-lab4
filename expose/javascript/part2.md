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