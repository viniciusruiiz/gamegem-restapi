export default (body) => {
    return typeof body === 'string' ? JSON.parse(body) : body;
}