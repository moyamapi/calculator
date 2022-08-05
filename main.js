const result = document.getElementById("result")

function edit(value) {
    if (result.value.slice(1)==="0"){
        result.value = result.value + value;
    }
    else{result.value = result.value + value;}
  }
function calc() {
    result.value = new Function(
      "return " + result.value
    )();
  }
function reset() {
    result.value = "";
  }  
