function compararImc() {
    const fsex = document.getElementsByName('radsex')
    const res = document.getElementById('res')
    const peso = (document.getElementById('peso').value)
    let altura = (document.getElementById('altura').value)
    altura = altura / 100

    let genero = ''
    let imc = peso / (altura * altura)


    if (fsex[0].checked) {
        genero = 'Masculino'
    } else if (fsex[1].checked) {
        genero = 'Feminino'
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Gênero: ${genero} <br> IMC: ${imc.toFixed(2)} <br>`

    // Carregar a imagem 
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (genero === 'Masculino') {
        if (imc < 20.7) {
            res.innerHTML += 'Abaixo do peso, você precisa comer mais!'
            img.setAttribute('src', 'images/madinbuMagro.jpg')
        } else if (imc <= 26.4) {
            res.innerHTML += 'Peso normal, treine e fique forte como o Madimbu!'
            img.setAttribute('src', 'images/madinbuForte.jpg')
        } else {
            res.innerHTML += 'Acima do peso, você está virando o Madimbu Gordo!'
            img.setAttribute('src', 'images/madinbuGordo.webp')
        }
    } else if (genero === 'Feminino') {
        if (imc < 19.1) {
            res.innerHTML += 'Abaixo do peso'
        } else if (imc <= 25.8) {
            res.innerHTML += 'Peso normal'
        } else {
            res.innerHTML += 'Acima do peso'
        }
    }
    res.appendChild(img)
}




/*/ Funçao para capturar o evento  
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return; // return para pausar a função caso a condição aconteça 
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é: ${imc} (${nivelImc})!`;
    setResultado(msg, true);
});



// Função do nível de IMC 
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    if (imc >= 40) {
        return nivel[5];
    }
    if (imc >= 35) {
        return nivel[4];
    }
    if (imc >= 30) {
        return nivel[3];
    }
    if (imc >= 25) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

// Função para criar o paragráfo de resultado  
function criaP(className) {
    const p = document.createElement('p'); // Paragrafo com a msg linkada ao resultado 
    return p;
    // p.classList.add('paragrafo-resultado') // Para modificar o css do resultado 
    // p.innerHTML = 'Você está gordo vá treinar'; // Msg de resultado 
}

// Função para mostrar o resultado para o usúario 
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); // mensagem após enviar 
    resultado.innerHTML = ''; // Para adiconar o resultado ao forms HTML 

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}*/