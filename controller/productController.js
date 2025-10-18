const Product = require('../models/productModels');


// get all products
const getProducts = async (req, res) => {
      try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get a product by id
const getProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// create a new product
const newProduct = async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);


    } catch (error) {
      res.status(500).json({message: error.message});  
    }
};

// update a product by id
const updateProduct = async (req, res) => {
     try {
     const { id } = req.params;
         const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!product) {
             return res.status(404).json({ message: "Product not found" })         }

         // const updatedProduct = await Product.findById(id);

         return res.status(200).json(product);


     } catch (error) {
         res.status(500).json({ message: error.message });
     };
};

// delete a product
const delProduct = async (req,res) =>{
   try {
         const { id } = req.params;

         const product = await Product.findByIdAndDelete(id);

         if (!product) {
             return res.status(404).json({ message: "product not found" });
         }

         res.status(200).json({ message: "Product deleted successfully!" });

     } catch (error) {
         res.status(500).json({ message: error.message });
    }
};



// export
module.exports = {
    getProducts,
    getProduct,
    newProduct,
    updateProduct,
    delProduct
};