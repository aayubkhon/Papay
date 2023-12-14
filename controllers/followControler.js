const assert = require("assert");
const Definer = require("../lib/mistake");
const Community = require("../models/Community");
const Follow = require("../models/Follow");
let followController = module.exports;

followController.subsCribe = async (req, res) => {
  try {
    console.log("POST: cont/subsCribe");
    assert.ok(req.member, Definer.auth_err5);
    const follow = new Follow();
    await follow.subsCribeData(req.member, req.body);
    res.json({ state: "succses", data: "subscribed" });
  } catch (err) {
    console.log(`ERROR: cont/subsCribe,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
