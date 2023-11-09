function postClients(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    let client = {
        "email" : document.getElementById("email").value,
        "password" : document.getElementById("password").value
    };

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == "200"){
            console.log(xhttp.responseText);
            alert("Sucess!!");
        }
    }
    xhttp.send(JSON.stringify(client));
}

function getClients(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/clients",true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.onload = function(){
        if(xhttp.readyState == 4 && xhttp.status == "200"){
            var list = JSON.parse(xhttp.responseText);
            var table = document.getElementById("client");


            for(var i=0; i < list.length; i++){
                var client = list[i];
                var row = document.createElement("tr");

                var emailCell = document.createElement("td");
                emailCell.textContent = client.email;

                var passwordCell = document.createElement("td");
                passwordCell.textContent = client.password;

                row.appendChild(emailCell);
                row.appendChild(passwordCell);

            }
            
        }
    }
    xhttp.send();
}