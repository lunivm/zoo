export default class HttpError extends Error {
  constructor(status, message) {
    super();

    this.status = status;
    this.message = `${status} (${message})`;
  }
}
