class Definer {
  //** general  errors */
  static general_err1 = "att: something went worng!";
  static general_err2 = "att: thre isno data with that params!";
  static general_err3 = "att: file upload error!";

  //** member auth related errors */
  static auth_err1 = "att: mongodb validation is failed!";
  static auth_err2 = "att: no memeber with that mb_nick!";
  static auth_err3 = "att: your credatials do not match!";
  //** product auth related errors */
  static product_err1 = "att: product cration is failed!";
}

module.exports = Definer;
