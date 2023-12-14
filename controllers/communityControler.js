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

communityControler.getMemberArticles = async (req, res) => {
  try {
    console.log("GET: cont/getMemberArticles");
    const community = new Community();
    const mb_id =
      req.query.mb_id !== "none" ? req.query.mb_id : req.member?._id;
    assert.ok(mb_id, Definer.article_err1);
    const result = await community.getMemberArticlesData(
      req.member,
      mb_id,
      req.query
    );
    assert.ok(result, Definer.general_err3);
    res.json({ state: "succses", data: result });
  } catch (err) {
    console.log(`ERROR: cont/getMemberArticles,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

communityControler.getArticles = async (req, res) => {
  try {
    console.log("GET: cont/getArticles");
    const community = new Community();
    const result = await community.getArticlesData(req.member, req.query);
    assert.ok(result, Definer.general_err3);
    res.json({ state: "succses", data: result });
  } catch (err) {
    console.log(`ERROR: cont/getArticles,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

communityControler.getChosenArticle = async (req, res) => {
  try {
    console.log("GET: cont/getChosenArticle");
    const community = new Community();
    const art_id = req.params.art_id,
      result = await community.getChosenArticleData(req.member, art_id);
    assert.ok(result, Definer.general_err3);
    res.json({ state: "succses", data: result });
  } catch (err) {
    console.log(`ERROR: cont/getChosenArticle,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
