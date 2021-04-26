function function1(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    }
setInterval(function1, 1000);