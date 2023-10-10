class CustomApiError extends Error {
  constructor(message, statusCode) {
    Supper(message);
    this.statusCode = statusCode;
  }
}

const CreateCustomError = (msg, statusCode) => {
  return new CustomApiError(msg, statusCode);
};

module.exports = { CustomApiError, CreateCustomError };
