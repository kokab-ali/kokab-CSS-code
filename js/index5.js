/*forloop*/

function loop(codeCraftLearning) {
    for(i = -1; i <= 3; i ++){
        console.log('codeCraftLearning');
        
    }
}


loop('codeCraftLearning')

function number(numbers) {
    for(i = 1; i <= 10; i ++){
        console.log(i);
        
    }
}
number()

/*JavaScript Assignment: Functions + AND/OR + Calculations
Q1. Write a function to check if a person is allowed to vote

Conditions:

Age must be 18 or older

AND the person must have a voter ID

Example:
canVote(20, true) → “Allowed”
canVote(16, true) → “Not allowed”

Q2. Write a function that checks if a number is between 10 and 50

Use the AND (&&) operator.

Example:
checkRange(25) → “In range”
checkRange(5) → “Not in range”

Q3. Write a function to check if a student passed

Student passes if:

Marks >= 40 OR

Has "extra credit"

Use the OR (||) operator.

Example:
isPassed(35, true) → “Passed”
isPassed(35, false) → “Failed”

Q4. Create a function that performs 4 calculations

Ask the user for two numbers, then print:
✔ addition
✔ subtraction
✔ multiplication
✔ division

Example:
calculate(10, 5)
→ 15, 5, 50, 2

Q5. Write a function that prints if a number is even AND positive

Use AND operator.

Example:
checkNumber(4) → “Even & Positive”
checkNumber(-2) → “Even but not positive”

Q6. Write a function that prints the largest of three numbers

Use multiple comparisons.

Q7. Write a function that checks login conditions

User is allowed if:

Username is "admin"

AND password is "1234"

Else print “Login failed”.

Q8. Write a function to calculate total bill

Inputs: price, quantity, discount.

Total = price * quantity
If discount is true, apply 10% off
Use OR: if discount is false, return normal total.

Q9. Write a function to print multiplication table for any number

Use a loop + function.

Q10. Write a function that checks weather conditions

Print “Good weather” if:

temp > 20 AND temp < 35
OR

it's cloudy

Example:
checkWeather(22, true) → Good
checkWeather(40, false) → Bad
*/



function vote(Age, VoterId) {
    if (Age >= 18 && VoterId === true) {
        return Allowed;
    }
    else{
        return NotAllowed;
        
    }
}
console.log(vote(20, true))
console.log(vote(16, false));

