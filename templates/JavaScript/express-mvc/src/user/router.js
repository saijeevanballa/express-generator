const Router = require("express");
const userModule = require("./module");
const router = Router();

// User Get Method
router.get("/", (req, res, next)=>{
    try{
        res.status(200).send(userModule.userGet());
    }catch(error){
        next(error);
    }
});

// User Post Method
router.post("/", (req, res, next)=>{
    try{
        res.status(200).send(userModule.userPost());
    }catch(error){
        next(error);
    }
});

// User Delete Method
router.delete("/", (req, res, next)=>{
    try{
        res.status(200).send(userModule.userDelete());
    }catch(error){
        next(error);
    }
});

module.exports = router;