module.exports = (rawRequest) => {
  const [method, path] = rawRequest.split('\n')[0].split(' ');

  return {
    method,
    path,
  };
};
