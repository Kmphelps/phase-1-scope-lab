// Write your solution in this file!
var customerName = 'bob'; // declares a variable in global scope the bad way
const leastFavoriteCustomer = 'sally'; // declares a constant variable in global scope of which the value can not be overwritten

function upperCaseCustomerName() { // creates a function 
    customerName = customerName.toUpperCase(); // accesses the global variable and capitalizes it..didn't use const or let so that's bad.. don't do this
    return customerName; // returns the variable to the new value
}

function setBestCustomer() {
    bestCustomer = 'not bob'; //declares a global variable which is an example of what not to do within a function
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // overwrites a global variable (example of what not to do)
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'trying to change bob';
}