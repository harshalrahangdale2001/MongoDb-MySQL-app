const express = require('express');

const port = 3000;
const mongoose = require('mongoose');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('./handlers/productHandle');
const cors = require('cors');
const timeout = require('connect-timeout');
const bodyParser = require('body-parser');
const authRoutes = require('./handlers/auth');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.use(bodyParser.json());
app.use(timeout('60s'));
app.use(express.json());
app.use('/api', orderRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
})


const port2 = process.env.PORT || 4000;
app.listen(port2, () => {
  console.log(`Server running on port ${port2}`);
});

app.post('/products', async (req, res) => {
  let products = await addProduct(req.body)
  res.send(products);
})

app.get('/products', async (req, res) => {
  let products = await getProducts();
  res.send(products);
})

app.get('/products/:id', async (req, res) => {
  console.log("id", req.params["id"]);
  let product = await getProduct(req.params["id"])
  res.send(product);
})


app.put('/products/:id', async (req, res) => {
  console.log("id", req.params["id"]);
  await updateProduct(req.params["id"], req.body);
  res.send({});
})

app.delete('/products/:id', async (req, res) => {
  console.log("id", req.params["id"]);
  await deleteProduct(req.params["id"]);
  res.send({});
})


async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "ProductDb",
  })
}

connectDb().catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})