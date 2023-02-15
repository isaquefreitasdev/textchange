let mai = document.getElementById("M");
let min = document.getElementById("m");


function M(){
    let entrada = document.getElementById("open_data").value;
    let out  = document.getElementById("output_data");
    
    let upper = entrada.toUpperCase();
    ApenasLetras();
    if(entrada.length < 1){
        alert("Preencha para executar")
    }else{
        out.value = upper

    }



}
function m(){
    let entrada = document.getElementById("open_data").value;
    let out  = document.getElementById("output_data");
    
    let lower = entrada.toLowerCase();
    ApenasLetras();
    if(entrada.length < 1){
        alert("Preencha para executar")
    }else{
        out.value = lower

    }
    


}
function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}