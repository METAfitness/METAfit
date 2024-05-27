const button = document.querySelector("#calcular");
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');
const h3 = document.getElementById('h3');
const p = document.getElementById('p');
const tr1 = document.getElementById('tr1');
const tr2 = document.getElementById('tr2');
const tr3 = document.getElementById('tr3');
const tr4 = document.getElementById('tr4');
const tr5 = document.getElementById('tr5');
const tr6 = document.getElementById('tr6');
const div1 = document.getElementById('1');
const div2 = document.getElementById('2');
const div3 = document.getElementById('3');
const div4 = document.getElementById('4');
const div5 = document.getElementById('5');
const div6 = document.getElementById('6');


function calcularIMC(pesoValue, alturaValue) {
    tr1.classList.remove("pintado")
    tr2.classList.remove("pintado")
    tr3.classList.remove("pintado")
    tr4.classList.remove("pintado")
    tr5.classList.remove("pintado")
    tr6.classList.remove("pintado")
    div1.classList.add("hidden");
    div2.classList.add("hidden");
    div3.classList.add("hidden");
    div4.classList.add("hidden");
    div5.classList.add("hidden");
    div6.classList.add("hidden");
    let imc;

    if (alturaValue && pesoValue) {
        imc = pesoValue /  (alturaValue * alturaValue);
    } else {
        alert('Por favor, preencha sua altura e peso.');
        return
    }

    imc = imc.toFixed(2);

    if (imc < 18.5) {
        div1.classList.remove("hidden");
    }else if (imc >= 18.5 && imc <= 24.9 ){
        div2.classList.remove("hidden");
    }else if(imc >= 25 && imc <= 29.9){
        div3.classList.remove("hidden");
    }else if(imc >= 30 && imc <= 34.9){
        div4.classList.remove("hidden");
    }else if(imc >= 35 && imc <= 39.9){
        div5.classList.remove("hidden");
    }else {
        div6.classList.remove("hidden");
    }

    if (imc < 18.5) {
        tr1.classList.add("pintado");
        p.innerHTML = "Baixo Peso";
    }else if (imc >= 18.5 && imc <= 24.9 ){
        tr2.classList.add("pintado");
        p.innerHTML = "Peso Normal";
    }else if(imc >= 25 && imc <= 29.9){
        tr3.classList.add("pintado");
        p.innerHTML = "Excesso de Peso";
    }else if(imc >= 30 && imc <= 34.9){
        tr4.classList.add("pintado");
        p.innerHTML = "Obesidade Grau I"
    }else if(imc >= 35 && imc <= 39.9){
        tr5.classList.add("pintado");
        p.innerHTML = "Obesidade Grau II"
    }else {
        tr6.classList.add("pintado");
        p.innerHTML = "Obesidade Mórbida"
    } 

    h3.innerHTML = imc;

    resultado.classList.remove("hidden");
    
}

button.addEventListener("click", (event) => {
    event.preventDefault;
    calcularIMC(parseFloat(peso.value), parseFloat(altura.value));
    altura.value = '';
    peso.value = '';
})
