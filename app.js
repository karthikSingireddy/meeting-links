javascript:(
    function() {
        let acct = 0;
        function getMeeting() {
            let val = window.prompt("Which meeting do you want to go to?");
            console.log(val);

            fetch("https://raw.githubusercontent.com/karthikSingireddy/meeting-links/master/links.json")
                .then(response => response.json())
                .then(data => {
                    if(!data[val]) {
                        getMeeting();
                    }
                    else {
                        window.location.href = data[val] + "?pli=1&authuser=" + acct;
                    }
                });
        }
        getMeeting();
    }
)();