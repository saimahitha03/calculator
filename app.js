let output=document.getElementById('input')
function show(number){
    output.value=output.value+number
}

function cal(){
    try{
        output.value=eval(output.value)
    }
    catch{
        output.value="ERROR!!"
    }
}

function clr(){
    output.value=""
}

function remove(){
    output.value=output.value.slice(0,-1)
}