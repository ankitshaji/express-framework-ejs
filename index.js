const express = require("express"); //FunctionObject
const app = express(); //AppObject

//npm i ejs
//set() method takes 2 arguments
//("key","value") //sets key to value
app.set("view engine", "ejs"); //auto require("ejs")
//when view engine is used express assumes our views/templates
//exist in a (default)views directory //can change with app.set('views', process.cwd() + '/directoryName')

//adddress - localhost:3000
//execute callback
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//httpMethod-get,path-"/"(root)
//execute callback when http structure request arrives
//convert http request/response to jsObject
app.get("/", (req, res) => {
  console.log("HTTP structured request received");
  //res.send("test"); //content-type:text/plain + converted to httpStructued response
  res.render("home"); //object.method(fileName)
  //render() looks for default directory views to find file
  //send ejs file/template as (http structure)response //content-type:text/html
  //render() executes the js in ejs file - converts ejs file into pure html
});

//Templating-
//define single preset pattern for all webpages
//that we can dynamically modify by embedding info+logic/
//EJS(EmbeddedJavaScript) - templating language
//other templating languages - handlebar //jade //pug //nunjucks
//we add javascript into html with EJS
