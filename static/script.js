let flag_model_upload = 0;

async function load() {
    const model = await tf.loadLayersModel('Model_js2/model.json');
    flag_model_upload = 1;
    return model;
};

function predict() {
    if (flag_model_upload == 1) {
    model.then(model => {
        var img1 = new Image();
        img1 = output;
        let tensor = tf.browser.fromPixels(img1).resizeNearestNeighbor([224, 224]).toFloat()
        let offset = tf.scalar(127.5)
        let batched = tensor.sub(offset).reverse(2).expandDims()
        const res = model.predict(batched);
        let tensor_value = parseFloat(res.dataSync()) * 100;
        document.getElementById("out_res").innerHTML = 'Originality: ' + String(tensor_value.toFixed(2)) + '%';
        /*if (tensor_value < 50) {
            document.getElementById("out_res_class").innerHTML = 'fake';
        } else if (tensor_value > 75) {
            document.getElementById("out_res_class").innerHTML = 'original';
        } else {
            document.getElementById("out_res_class").innerHTML = 'good replic or bad original';
        }*/
    });
    }
    if (flag_model_upload == 0) {
        document.getElementById("out_res").innerHTML = 'Wait for the model to load, please';
    }
};

const model = load();

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src)
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("green_upload").classList.add('upload_green');
        document.getElementById("icon_load").classList.remove('js-labelFile');
}

}

