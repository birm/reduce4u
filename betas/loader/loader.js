data_clean = function(data){
  // convert to array, 1d
  data = data.replace(/\n/g,',')
  // replace missing (denoted ?) with infinity
  data = data.replace(/\?/g,"Infinity")
  data = data.split(","); // TODO add other delimiters?
  // map to float
  data = data.map(parseFloat);
  // remove nan from data format issues
  data = data.filter(function(v) { return (!!v || v==0); });
  // turn infinity back into NaN
  data = data.map(function(x){
    if (x==Infinity){
      return NaN;
    } else {
      return x;
    }
  });
  return data;
}

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
                    var data = data_clean(reader.result);
                    // get x and y sizes
                    var x_len = document.getElementById('x_len');
                    var y_len = document.getElementById('y_len');
                    // make sure x and y are ints
                    x_len = parseInt(x_len.value);
                    y_len = parseInt(y_len.value);
                    // create matrix
                    datamat = new MiniMat(data, x_len, y_len);
                    // display matrix out
                    fileDisplayArea.innerText = datamat.toString();
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
