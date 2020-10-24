javascript:(
    function() {
        let val = window.prompt("Which meeting do you want to go to?");
        console.log(val);

        window.location.href = val;
    }
)();