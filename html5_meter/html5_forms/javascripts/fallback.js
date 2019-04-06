function hasColorSupport() {
    element = document.createElement("input");
    element.setAttribute("type", "color");
    var hasColorType = (element.type === "color");

    if(hasColorType) {
        var testString = "foo";
        element.value = testString;
        hasColorType = (element.value != testString);
    }
    return(hasColorType)
}

var applyColorPicker = function () {
    $('input[type=color]').simpleColor()
}

Modernizr.load(
    
)

if(!hasColorSupport()) {
    var script = document.createElement('script')
    script.src = "javascripts/jquery.simple.color.js"

    if(script.readyState) {
        script.onreadystatechange = function () {
            if(this.readyState === 'loaded' || this.readyState === 'complete'){
                script.onreadystatechange = null
                applyColorPicker()
            }
        }
    } else {
        script.onload = applyColorPicker
    }

    document.getElementsByTagName("head")[0].appendChild(script)
}

