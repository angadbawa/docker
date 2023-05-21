const express = require('express')
const app = express();
app.get('/',(req,res)=>{
      res.send("This is ANgad_SE20UARI019 first app on docker");
});

app.listen(3000,function () {
     console.log("App is listening on port number 3000");
});
