const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./src/routes/auth');
const webhook = require('./src/routes/webhook');

app.use('/auth', authRoutes);
app.use('/webhook', webhook);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server runing on PORT'+' '+PORT)
})