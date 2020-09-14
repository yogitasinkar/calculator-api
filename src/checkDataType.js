module.exports = (req, res, next) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.status(400).json({
          status: "failure",
          message: "invalid data types",
          sum: ""
        });
        return 
    }
    if (num1 > 1000000 || num2 > 1000000) {
        res.status(400).json({
          status: "error",
          message: "Overflow",
          sum: "",
        });
        return;
    }
    
    next()
} 