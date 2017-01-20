// TODO
// start vaguely with https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739

function addStage(tag, position){
    // initializes a new stage to draw on
}

function lin_scale(val){
    // linear color scale function (from 0 to 1)
    if (isNaN(val) || val==Infinity || val==-Infinity){
        return NaN;
    }
    return (val - Math.min.apply(Math, filtered))/(Math.max.apply(Math, filtered) - Math.min.apply(Math, filtered);
};

function scale_color(value, scheme="redgreen"){
    // change depending on scheme
    // expects value between 0 and 1
    // return a hsla set in oder [hue, sat, luminence, alpha]
    // hue from 0 to 360, rest 0 to 1


    // deal with bad  values now so we don't mess up color
    if (isNaN(value)){
        // don't color in missing data
        return [0,0,0,0];
    } else if (value>1){
        value=0.99;
    } else if (value<0){
        value=0;
    }
    switch(scheme){
        case "blue":
            //change sauration and alpha value of blue-like
            return [249, (value*0.8+0.2), 255, (value/3+0.65)];
        case "grey":
            //keep in a greyscale range
            return [197, 0.11, (0.28*value+11), 0.9];
        case "rainbow":
            // change hue for rainbow
            return [(242*value), 0.84, 0.48, 0.9]
        case "redgreen":
            // split at 0.5, red less, green higher
            if (value > 0.5){
                return [350, 1, 0.5+(0.5-value), 0.9]
            } else {
                return [11, 1, 0.2+(0.4*value), 0.98]
            }
        default:
            // same as redgreen; kept because want to switch later
            // split at 0.5, red less, green higher
            if (value > 0.5){
                return [350, 1, 0.5+(0.5-value), 0.9]
            } else {
                return [11, 1, 0.2+(0.4*value), 0.98]
            }
    }
}

function draw(Mat, tag) {
    // draw the Mat to the tag given, already initalized
    for (var x=0; x< Mat.data.length; x++){

        float_filter = function(val) { return (!(isNaN(val)||val==Infinity||val==-Infinity))};
        var filtered = Mat.data.filter(float_filter);
        // draw the value on the square in field
        var color = scale_colorlin_scale(Mat.data[x]), "redgreen";
        // special case for nan, as missing data
    }
}

function filter

// given a dimred object...
a = new MiniMat([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],4,5);
b = new DimRed(a);
// show initial on stage
draw(b.Mat);
// pick a method
// slider for paramater
// on slider change, update stage with result of paramater
