// Define a class named ApiResponse
class ApiResponse {
  // Define a constructor method for the class
  constructor(statusCode, data, message = "Success") {
    // Initialize class properties based on constructor arguments
    this.statusCode = statusCode; // Assign the provided statusCode to the statusCode property
    this.data = data; // Assign the provided data to the data property
    this.message = message; // Assign the provided message to the message property, defaulting to "Success" if not provided
    // Determine the success status based on the provided statusCode
    this.success = statusCode < 400; // If statusCode is less than 400, consider the response successful, otherwise unsuccessful
  }
}

export { ApiResponse };
