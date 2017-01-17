// TODO
// start vaguely with https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739

function addStage(tag, position){
    // initializes a new stage to draw on
}

function draw(Mat, tag) {
    // draw the Mat to the tag given, already initalized
    for (var x=0; x< Mat.data.length; x++){
        // linear color scale function (from 0 to 1)
        float_filter = function(val) { return (!(isNaN(val)||val==Infinity||val==-Infinity))};
        var filtered = Mat.data.filter(float_filter);
        lin_scale = function(val){
            return (val - Math.min.apply(Math, filtered))/(Math.max.apply(Math, filtered) - Math.min.apply(Math, filtered);
        };
        // draw the value on the square in field
        var color = lin_scale(Mat.data[x]);
        // special case for nan, as missing data
    }
}

// given a dimred object...
a = new MiniMat([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],4,5);
b = new DimRed(a);
// show initial on stage
draw(b.Mat);
// slider for paramater
// update stage with result of paramater
