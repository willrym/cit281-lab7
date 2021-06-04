// Lab 07
class CustomError extends Error {
    constructor(args) {
        super(args);
        this.message = "Custom Error";
    }
    throwGenericError() {
        throw new Error("Generic Error");
    }
    throwCustomError() {
        throw new CustomError().message;
    }
}
const myError = new CustomError();

console.log("Force Generic Error");
try {
    console.log("Generic Error Try Block");
    myError.throwGenericError();
} catch {
    console.log("Generic Error Catch Block");
    console.log(myError.throwGenericError());
} finally {
    console.log("Generic Error Finally Block");
}

console.log("Force Custom Error");
try {
    console.log("Custom Error Try Block");
    myError.throwCustomError();
} catch {
    console.log("Custom Error Catch Block");
    console.log(myError.throwCustomError());
} finally {
    console.log("Custom Error Finally Block");
}