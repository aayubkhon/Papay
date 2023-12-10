const assert = require("assert");
const Definer = require("../lib/mistake");
const Community = require("../models/Community");
let communityControler = module.exports;

communityControler.imageInsertion = async (req, res) => {
  try {
    console.log("POST: cont/imageInsertion");
    assert.ok(req.file, Definer.general_err3);
    const img_url = req.file.path;
    res.json({ state: "succses", data: img_url });
  } catch (err) {
    console.log(`ERROR: cont/imageInsertion,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

communityControler.createArticle = async (req, res) => {
  try {
    console.log("POST: cont/imageInsertion");

    const community = new Community();
    const result = await community.createArticleData(req.member, req.body);
    assert.ok(result, Definer.general_err1);
    res.json({ state: "succses", data: result });
  } catch (err) {
    console.log(`ERROR: cont/imageInsertion,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
