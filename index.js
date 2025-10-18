//  console.log("Hello, Daniel");

// const { error } = require('console');
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const Product = require('./models/productModels');
const { error } = require('console');
const app = express();

// middleware configuration
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// mount routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});


// get all products
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// get a product by id
// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const products = await Product.findById(id);
//         console.log(`The item was`, products);
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// create a new product
// app.post('/api/products', async (req, res) => {
//     try {
//         await Product.create(req.body);
//         console.log(`Item was created`, req.body);
//         res.status(200).json(Product)
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// update a product
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // const updatedProduct = await Product.findById(id);

//         return res.status(200).json(product);


//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     };
// });


// delete product by id
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: "product not found" });
//         }

//         res.status(200).json({ message: "Product deleted successfully!" });

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("✅ Connected to the database successfully");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("❌ Connection failed!")
    });



