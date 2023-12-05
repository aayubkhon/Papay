const assert = require("assert");
const Definer = require("../lib/mistake");
const Product = require("../models/Product");

let productController = module.exports;
// bu variablesga functionlarni yuklaymiz
productController.getAllProducts = async (req, res) => {
  try {
    console.log("POST: cont/getAllProducts");
    const product = new Product();
    const result = await product.getAllProductsData(req.member, req.body);
    res.json({ state: "succsed", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getAllProducts, ${err.message} `);
    res.json({ state: "fail", message: err.message });
  }
};

productController.getChosenProduct = async (req, res) => {
  try {
    console.log("GET: cont/getChosenProduct");
    const product = new Product();
    const id = req.params.id;
    const result = await product.getChosenProductData(req.member, id);
    res.json({ state: "succsed", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getChosenProduct, ${err.message} `);
    res.json({ state: "fail", message: err.message });
  }
};

/****************************************
 *     BSSR RELEATED METHODS       *
 ****************************************/

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    assert(req.files, Definer.general_err3);
    const product = new Product();
    let data = req.body; //req.bodyni ichida file path yoq. U reqfilesni ichida keladi.
    console.log(req.files);
    data.product_images = req.files.map((ele) => {
      return ele.path;
    });
    // yuqorida req fileni ichidagi filepathni array qilib request bodyga qo'shib beradi.
    const result = await product.addNewProductData(data, req.member);
    const html = `<script>
                    alert("new product ${data.product_name} added successfully");
                    window.location.replace('/resto/products/menu');
                  </script>`;
    res.end(html);
  } catch (err) {
    console.log(`ERROR, cont/addNewProduct, ${err.message} `);
  }
};

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
    const product = new Product();
    const id = req.params.id;
    const result = await product.updateChosenProductData(
      //await sababi javobni olgach keyingi kodga utadi. ungacha kutib turadi
      id,
      req.body,
      req.member._id
    );
    await res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/updateChosenProduct, ${err.message} `);
    res.json({ state: "fail", message: err.message });
  }
};
