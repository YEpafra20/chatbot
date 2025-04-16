const express = require('express');
const cors = require('cors'); // ✅ ONLY ONCE
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// import routes
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
