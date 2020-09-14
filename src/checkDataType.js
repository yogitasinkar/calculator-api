module.exports = (req, res, next) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (typeof num1 === "string" || typeof num2 === "string") {
        res.json({
          status: "failure",
          message: "invalid data types",
          sum: ""
        });
        return 
    }

    if (req.url === "/add") {
      let result = num1+num2;
      if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        res.json({
          status: "error",
          message: "Overflow",
          sum: "",
        });
        return;
      }
    }

    if (req.url === "/multiply") {
      let result = num1 * num2;
      if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        res.json({
          status: "error",
          message: "Overflow",
          sum: "",
        });
        return;
      }
    }

    if(req.url === "/sub"){
        if (num1 < 1000000 || num2 < 1000000) {
            res.json({
                status: "error",
                message: "Underflow",
                sum: "",
            });
            return;
        }
    }

    if (req.url === "/division") {
      if (num2 === 0) {
        return res.json({
          status: "failure",
          message: "Cannot divide by zero",
          sum: "",
        });
      }
    }

    
    next()
} 