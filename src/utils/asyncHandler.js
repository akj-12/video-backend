// Define a higher-order function named asyncHandler
const asyncHandler = (requestHandler) => {
  // Define an anonymous function that takes req, res, and next as parameters
  (req, res, next) => {
    // Wrap the invocation of requestHandler in a Promise
    Promise.resolve(requestHandler(req, res, next))
      // If the promise resolves successfully, pass the result along
      .catch((error) => {
        // If an error occurs, pass it to the Express error handling middleware
        next(error);
      });
  };
};

export { asyncHandler };

/**

    const asyncHandlerAnother1 = () => {};
    const asyncHandlerAnother2 = (func) => () => {};
    const asyncHandlerAnother3 = (func) => async () => {};

    const asyncHandlerAnother = (func) => async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            res.status(err.code || 500).json({ success: false, message: err.message });
        }
    };
 */
