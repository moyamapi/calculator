const result = document.getElementById("result")

function edit(value) {
　　　result.value = result.value + value;
  }
function calc() {
    result.value = new Function(
      "return " + result.value
    )();
  }
function reset() {
    result.value = "";
  }  
function operator(value){
    if (result.value.slice(-1)==='+'){
        return;
    } else if (result.value.slice(-1)==='-'){
        return;
    } else if (result.value.slice(-1)==='*'){
        return;
    } else if (result.value.slice(-1)==='/'){
        return;
    } else {result.value = result.value + value;}
}
