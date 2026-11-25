const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url.startsWith('/api/items')) {
    res.end(JSON.stringify({
      service: 'free-api-smoke-test',
      items: [
        { id: 1, name: 'Synthetic Alpha', price: 120 },
        { id: 2, name: 'Synthetic Beta', price: 340 },
        { id: 3, name: 'Synthetic Gamma', price: 140 }
      ],
      note: 'dummy data, no personal info',
      servedAt: new Date().toISOString()
    }));
  } else {
    res.end(JSON.stringify({ status: 'ok', hint: '/api/items', servedAt: new Date().toISOString() }));
  }
});
server.listen(PORT, () => console.log('listening on ' + PORT));
