const express = require("express")
const router = express.Router()


router.get("/", ( req,res)=>{
   res.send("home sahifasidasiz")
})

router.get("/menu", (req,res)=>{
   res.send("menu sahifasidasiz")
})

router.get("/community", (req,res)=>{
   res.send("Jamiyat sahifasidasiz")
})

module.exports = router