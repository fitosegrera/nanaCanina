var nameDiv, edadDiv, pesoDiv, planDiv, banoDiv, paseosDiv, infoBack, servicios, enviar;

document.addEventListener("deviceready", init, false)

function init() {
    document.querySelector("#scan").addEventListener("touchend", startScan, false)
    document.querySelector("#call").addEventListener("touchend", reqCall, false)
    nameDiv = document.querySelector("#name")
    edadDiv = document.querySelector("#edad")
    pesoDiv = document.querySelector("#peso")
    planDiv = document.querySelector("#plan")
    banosDiv = document.querySelector("#banos")
    paseosDiv = document.querySelector("#paseos")
    infoBack = document.querySelector("#infoBack")
    servicios = document.querySelector("#servicios")
}



function reqCall() {
    $.ajax({
        url: 'http://fii.to:3000/mascota',
        type: 'GET',
        data: 'data=m1',
        success: function(data) {
            //$('#nombre').html(data);
            nameDiv.innerHTML = "Nombre: " + data.nombre
            edadDiv.innerHTML = "Edad: " + data.edad
            pesoDiv.innerHTML = "Peso: " + data.peso
            planDiv.innerHTML = "Plan: " + data.plan
            banosDiv.innerHTML = "Banos: " + data.banos
            paseosDiv.innerHTML = "Paseos: " + data.paseos
            infoBack.style.backgroundColor = "#fffaeb"
                //console.log(JSON.stringify(data.nombre));

            enviar = document.createElement("BUTTON")
            var t = document.createTextNode("Registrar Baño");
            enviar.appendChild(t)
            enviar.className = "butt"
                // enviar.className += "show-page-loading-msg"
                // enviar.setAttribute("data-textonly", "false")
                // enviar.setAttribute("data-textvisible", "false")
            servicios.appendChild(enviar)

            //document.body.appendChild(x)
        },
        error: function(e) {
            console.log(e)
        }
    });
}

function startScan() {
    cordova.plugins.barcodeScanner.scan(
        function(result) {
            var url = "http://fii.to:3000/mascotas?data=" + result.text
            var s = "Result: " + result.text + "<br/>" +
                "Format: " + result.format + "<br/>" +
                "Cancelled: " + result.cancelled

            // var req = new XMLHttpRequest()
            // req.open("GET", "http://fii.to:3000/mascotas?data=" + result.text, true)
            // req.send(function() {
            //     console.log(req.responseText)
            //     var r = req.responseText
            //     resultDiv.innerHTML = JSON.stringify(r)
            // })

            $.ajax({
                url: 'http://fii.to:3000/mascota',
                type: 'GET',
                data: 'data=m1',
                success: function(data) {
                    //$('#nombre').html(data);
                    nameDiv.innerHTML = "Nombre: " + data.nombre
                    edadDiv.innerHTML = "Edad: " + data.edad
                    pesoDiv.innerHTML = "Peso: " + data.peso
                    planDiv.innerHTML = "Plan: " + data.plan
                    banosDiv.innerHTML = "Banos: " + data.banos
                    paseosDiv.innerHTML = "Paseos: " + data.paseos
                    infoBack.style.backgroundColor = "#fffaeb"
                        //console.log(JSON.stringify(data.nombre));

                    enviar = document.createElement("BUTTON")
                    var t = document.createTextNode("Registrar Baño");
                    enviar.appendChild(t)
                    enviar.className = "butt"
                        // enviar.className += "show-page-loading-msg"
                        // enviar.setAttribute("data-textonly", "false")
                        // enviar.setAttribute("data-textvisible", "false")
                    servicios.appendChild(enviar)

                    //document.body.appendChild(x)
                },
                error: function(e) {
                    console.log(e)
                }
            });
        },
        function(error) {
            alert("Scanning failed: " + error)
        }
    );

}
