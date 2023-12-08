const Order = require("../models/Order");

const assert = require("assert");
const Definer = require("../lib/mistake");

let orderController = module.exports;
orderController.createOrder = async (req, res) => {
  try {
    console.log("POST: cont/sigcreateOrdernup");
    assert.ok(req.member, Definer.auth_err5);
    const order = new Order();
    const result = await order.createOrderData(req.member,req.body);
    console.log(req.body );
    res.json({ state: "succses", data: result });
  } catch (err) {
    console.log(`ERROR: cont/createOrder,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
