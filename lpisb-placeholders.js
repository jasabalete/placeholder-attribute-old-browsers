window.onload = function () {
    console.log("*PLACEHOLDER IE*")
    var inputs = document.getElementsByTagName("input");

    var placeholderAttributeName = "placeholder";

    for(var i = 0; i < inputs.length; i ++){
        var placeholder = inputs[i].getAttribute(placeholderAttributeName);
        if(placeholder) {
            if(inputs[i].value == "") {
                inputs[i].value = placeholder;

                inputs[i].onblur = function(){
                    if(this.value == "") {
                        this.value = this.getAttribute(placeholderAttributeName);
                    }
                };

                inputs[i].onclick = function(){
                    if(this.value == this.getAttribute(placeholderAttributeName)) {
                        this.value = "";
                    }
                };
            }
        }
    }
}