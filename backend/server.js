const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use('/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
