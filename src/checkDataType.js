module.exports = (req, res, next) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.json({
          status: "failure",
          message: "Invalid data types",
        });
        return 
    }

    next()
} 