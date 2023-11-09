const mongoose = require("mongoose");
const {
  member_type_enums,
  member_status_enums,
  member_ordernary_enums,
} = require("../lib/config");

const memberSchema = new mongoose.Schema(
  {
    mb_nick: {
      type: String,
      required: true,
      index: { unique: true, sparse: true },
    },
    mb_phone: {
      type: String,
      required: true,
    },
    mb_password: {
      type: String,
      required: true,
      select: false,
      index: { unique: true, sparse: true },
    },
    mb_type: {
      type: String,
      required: false,
      default: "USER",
      enum: {
        values: member_type_enums,
        message: "{VALUE} is not among prmitted lues",
      },
    },
    mb_status: {
      type: String,
      required: false,
      default: "ACTIVE",
      enum: {
        values: member_status_enums,
        message: "{VALUE} is not among prmitted lues",
      },
    },
    mb_adress: {
      type: String,
      required: false,
    },
    mb_description: {
      type: String,
      required: false,
    },
    mb_image: {
      type: String,
      required: false,
    },
    mb_point: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_top: {
      type: String,
      required: false,
      default: "N",
      enum: {
        values: member_ordernary_enums,
        message: "{VALUE} is not among prmitted lues",
      },
    },
    mb_views: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_likes: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_follow_cnt: {
      type: Number,
      required: false,
      default: 0,
    },
    mb_subscribe_cnt: {
      type: Number,
      required: false,
      default: 0,
    },
    // createdAt,updateAt
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member",memberSchema)
