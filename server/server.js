const express = require('express');
const dotenv = require('dotenv');

//Load env variables
dotenv.config({ path: __dirname + '/config/config.env' });

// Require routes
const catRoutes = require('./routes/catRoutes');
const jsonPlaceholderRoutes = require('./routes/jsonPlaceholderRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

// Use Body Parser
app.use(express.json());

// Mount Routers
app.use('/cats', catRoutes);
app.use('/posts', jsonPlaceholderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
