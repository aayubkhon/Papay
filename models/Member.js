const Definer = require("../lib/mistake");
const MemberModel = require("../schema/member.model");
const assert = require("assert");
<<<<<<< HEAD
=======
const bcrypt = require("bcrypt");
>>>>>>> develop
class Member {
  constructor() {
    this.memberModel = MemberModel;
  }

  async signupDate(input) {
    try {
<<<<<<< HEAD
=======
      const salt = await bcrypt.genSalt();
      input.mb_password = await bcrypt.hash(input.mb_password, salt);
>>>>>>> develop
      const new_member = new this.memberModel(input);

      let result;
      try {
        result = await new_member.save();
      } catch (mongo_err) {
        console.log(mongo_err);
        throw new Error(Definer.auth_err1);
      }

      result.mb_password = "";
      return result;
    } catch (err) {
      throw err;
    }
  }

  async loginData(input) {
    try {
      const member = await this.memberModel
        .findOne({ mb_nick: input.mb_nick }, { mb_nick: 1, mb_password: 1 })
        .exec();
      assert.ok(member, Definer.auth_err2);

<<<<<<< HEAD
      const isMatch = input.mb_password === member.mb_password;
      assert.ok(isMatch, Definer.auth_err3);

      return await this.memberModel.findOne({mb_nick: input.mb_nick,}).exec()
=======
      const isMatch = await bcrypt.compare(
        input.mb_password,
        member.mb_password
      );
      assert.ok(isMatch, Definer.auth_err3);

      return await this.memberModel.findOne({ mb_nick: input.mb_nick }).exec();
>>>>>>> develop
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Member;
