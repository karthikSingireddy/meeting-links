javascript:(
    function() {
        let acct = 0;
        function getMeeting() {
            let val = window.prompt("Which meeting do you want to go to?");
            fetch("https://rawcdn.githack.com/karthikSingireddy/meeting-links/93fffa58fffb82fd3eb13220b96208446f843581/links.json")
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
