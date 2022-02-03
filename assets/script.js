// First, tell us your name
let yourName = "Lloyd Axibal" // HINT: Replace this with your own name!

// Select the element with an id of credit (moved to be grouped with my name)
const credit = document.querySelector('#credit')

// Code to update name display (moved to be grouped with my name)
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// Select element id "add-gb". Create an event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // Add 1 cookie to gingerbread count when clicked
    gb += 1

    // Update the gingerbread cookie total
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})


// TODO: Hook up event listeners for the rest of the buttons


// Repeat add process but with "minus-gb" to subtract Gingerbread Cookie total from quantity
document.getElementById('minus-gb').addEventListener('click', function() {
    // Subtract 1 cookie from gingerbread count when clicked
    gb -= 1

    // Used if statment so gingerbread count does not log below 0
    if (gb < 0) {
        gb = 0
    }

    // Update gingerbread cookie total
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Select element id "add-cc". Create event listener for clicks on the "+" button for Chocolate Chip Cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // Add 1 chocolate chip cookie to the quantity when clicked
    cc += 1
    
    // Update the chocolate chip cookie total
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Repeat add process but with "minus-cc" to subtract Chocolate Chip Cookies from quantity
document.getElementById('minus-cc').addEventListener('click', function() {
    // Subtract 1 chocolate chip cookie from the quantity when clicked
    cc -= 1

    // Use if statement so quantity does not log anything below 0
    if (cc < 0) {
        cc = 0
    }

    // Update the chocolate chip cookie total
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Select element id "add-sugar". Create event listener when the "+" button for Sugar Sprinkle Cookies are clicked
document.getElementById('add-sugar').addEventListener('click', function() {
    // Add one sugar sprinkle cookie
    sugar += 1

    // Update the sugar sprinkle cookie total
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})

// Repeat add process, but with "minus-sugar" to subtract Sugar Sprinkle Cookies from quantity
document.getElementById('minus-sugar').addEventListener('click', function() {
    // Subtract 1 sugar cookie sprinkle cookie
    sugar -= 1

    // Use if statement so quantity does not log anything below 0
    if (sugar < 0) {
        sugar = 0
    }

    // Update the sugar sprinkle cookie total
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})