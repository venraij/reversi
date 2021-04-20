"use strict";

let connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/gameHub").build(); //Disable send button until connection is established

connection.on("ReceiveMessage", function (spel) {
  
});

connection.start().then(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("Token");

    console.log(`Spel Token: ${token}`);
    
    $.ajax({
        method: "GET",
        url: "" +
            `https://localhost:5001/api/spel?token=${token}`,
        contentType: "application/json; charset=utf-8",
        success: function (spel) {
            const parsedSpel = JSON.parse(spel)[0];
            console.log(parsedSpel);
            parsedSpel["Bord"].forEach(row => {
                row.forEach(cel => {
                    const newCel = document.createElement("div");
                    newCel.className = "cel";
                    
                    if (cel !== 0) {
                        const newFiche = document.createElement("div");
                        newFiche.className = "fiche";

                        if (cel === 1) {
                            newFiche.classList.add("wit");
                        } else {
                            newFiche.classList.add("zwart");
                        }
                        
                        newCel.appendChild(newFiche)
                    }
                    
                    $(".bord").append(newCel);
                })
            });
        },
        error: function (xhr) {
            console.error(xhr.error)
        }
    })

})["catch"](function (err) {
  return console.error(err.toString());
});

const Game = (function() {
    'use strict';

    const Reversi = (function () {
        
        const doeZet = function () {
            console.log("doeZet");
        }

        return {
            doeZet: doeZet
        };
    })()

    return {
        Reversi: Reversi
    }
})();
