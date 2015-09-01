var resultDiv;

document.addEventListener("deviceready", init, false)

function init() {
    document.querySelector("#scan").addEventListener("touchend", startScan, false)
    resultDiv = document.querySelector("#results")
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function(result) {
            var url = "http://fii.to:3000/mascotas?data=" + result.text
            var s = "Result: " + result.text + "<br/>" +
                "Format: " + result.format + "<br/>" +
                "Cancelled: " + result.cancelled

            var req = new XMLHttpRequest()
            req.open("GET", "http://fii.to:3000/mascotas?data=" + result.text, false)
            req.send(null)
            console.log(req.responseText)
            var r = req.responseText
            resultDiv.innerHTML = r
        },
        function(error) {
            alert("Scanning failed: " + error);
        }
    );

}
