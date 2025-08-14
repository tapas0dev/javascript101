

(function invokedFunction() {
    console.log("This function has been invoked!");
})();

(    (shortForm) =>{
        console.log(`this is an immediately invoked function expression ${shortForm}`)
    } ) ("IIEF");
