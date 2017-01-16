window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            var datamat;
            reader.onload = function(e) {
                // catch erorrs in matrix creation
                try {
                    var data = reader.result;
                    // convert to array, 1d
                    data = data.replace(/\n/g,',')
                    data = data.split(","); // TODO add other delimiters?
                    // map to float
                    data = data.map(parseFloat);
                    // get x and y sizes
                    var x_len;
                    var y_len;
                    // create matrix
                    datamat = new Minimat(data, x_len, y_len);
                    // display matrix out
                    // fileDisplayArea.innerText = datamat.toString();
                    fileDisplayArea.innerText = data;
                }
                catch (err) {
                    // print erorrs in matrix creation
                    fileDisplayArea.innerText = "ERROR LOADING: " + err.message;
                }
            }

            reader.readAsText(file);
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}
// this version from http://stackoverflow.com/questions/27522979/read-a-local-text-file-using-javascript
