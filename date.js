module.exports.getDate = function() {
    let today = new Date();
  
    let options = {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric"
    };
    
    return today.toLocaleDateString("en-US", options);
}s);
}
