const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Prepare Food", "Cook Food", "Eat Food"];

let workItems = ["Show Up"];

let funItems = ["Watch TV", "Read a Book"];

let weekendItems = ["Relax", "Watch TV"];

//Exam Items
let finalExamItems = ["ICS 385", "ICS 360", "ICS 171"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

    let day = date.getDate();
    
    res.render("list", {listTitle: day, newListItems: items});
    
});

app.post("/", function(req, res) {
    
    // code allows items to be added to the regular list and work list
    let item = req.body.newItem;
    
    // if route is /work, add to work list
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } 
    
    // if route is /fun, add to fun list
    else if (req.body.list === "Fun") {
        funItems.push(item);
        res.redirect("/fun");
    }

    //If Exam, push to Exam list
    if (req.body.list === "Finals") {
        finalExamItems.push(item);
        res.redirect("/finals");
    }

    // if route is /weekend, add to fun list
    else if (req.body.list === "Weekend") {
        weekendItems.push(item);
        res.redirect("/weekend");
    }

    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
  let day = date.getDate();
    res.render("list", {listTitle: "Work To Do List", newListItems: workItems})
});

app.get("/fun", function(req, res){
  let day = date.getDate();
    res.render("list", {listTitle: "Fun To Do List", newListItems: funItems})
});

app.get("/weekend", function(req, res){
    res.render("list", {listTitle: "Weekend To Do List", newListItems: weekendItems})
});

app.get("/finals", function(req, res){
    res.render("list", {listTitle: "Finals Exam List", newListItems: finalExamItems})
});

app.listen(3000, function() {
console.log ("Server is running on port 3000")
});
