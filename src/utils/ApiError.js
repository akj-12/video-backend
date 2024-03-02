// Define a class named ApiError that extends the built-in Error class
class ApiError extends Error {
  // Define a constructor method for the class
  constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
    // Call the constructor of the Error class with the provided message
    super(message);
    // Initialize class properties based on constructor arguments
    this.statusCode = statusCode; // Assign the provided statusCode to the statusCode property
    this.message = message; // Assign the provided message to the message property, defaulting to "Something went wrong" if not provided
    this.data = null; // Initialize the data property as null
    this.errors = errors; // Assign the provided errors array to the errors property, defaulting to an empty array if not provided
    this.success = false; // Initialize the success property as false

    // Check if a stack trace is provided
    if (stack) {
      // If provided, assign it to the stack property
      this.stack = stack;
    } else {
      // If not provided, capture the stack trace using Error.captureStackTrace()
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
