async function load() {
    const model = await tf.loadLayersModel('Model_js2/model.json');
    alert("model loaded");
    return model;
};

function predict() {
    model.then(model => {
        //let selectedFile = document.getElementById("filePic").value
        //alert(document.getElementById("filePic").value);
        var img1 = new Image();
        img1 = output;
        //alert(img1.src);

        let tensor = tf.browser.fromPixels(img1).resizeNearestNeighbor([224, 224]).toFloat()
        let offset = tf.scalar(127.5)
        let batched = tensor.sub(offset).reverse(2).expandDims()
        const res = model.predict(batched)
        document.getElementById("out_res").innerHTML = res;
    });
};

const model = load();  // load model immediately to avoid delay when user clicks 'Predict'

var loadFile = function(event) {
var output = document.getElementById('output');
output.src = URL.createObjectURL(event.target.files[0]);
output.onload = function() {
    
URL.revokeObjectURL(output.src) // free memory
document.getElementById("output").style.visibility = "visible";
}

}

