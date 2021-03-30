module.exports = ({
  body = '',
  contentType = 'text/html',
  status = '200 OK',
}) => {
  const size = body.length;
  // const bytes = body.bytes;

  return `HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${size}
Content-Type: ${contentType}\r
\r
${body}`;
};
