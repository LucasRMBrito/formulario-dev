
const gerarPDF = () => {
    let nome = document.querySelector("#nome")
    let cpf = document.querySelector("#cpf")
    let email = document.querySelector("#email")
    let endereco = document.querySelector("#endereco")
    let devweb = document.querySelector('.devweb')
    let senior = document.querySelector("#senioridade")
    let selecao = senior.options[senior.selectedIndex].text
    let texto = document.querySelector('#experiencia')

    var pdf = new jsPDF()
    pdf.text('CADASTRO DEV', 80, 10)
    pdf.text(`Nome : ${nome.value}`, 20 , 30)
    pdf.text(`CPF : ${cpf.value}`, 20 , 40)
    pdf.text(`Email : ${email.value}`, 20 , 50)
    pdf.text(`Endereço : ${endereco.value}`, 20 , 60)
    pdf.text(`Desenvolvedor : ${devweb.value}`, 20 , 70)
    pdf.text(`Senioridade : ${selecao}`, 20 , 80)
    pdf.text(`Minhas palavras : ${texto.value}`, 20 , 90)
    pdf.save('Cadastro-dev.pdf')
    
}

const validarCpf = (cpf=0) => {
    cpf = cpf.replace(/\.|-/g, '')

    let soma = 0;
    soma += cpf[0] *10;
    soma += cpf[1] *9;
    soma += cpf[2] *8;
    soma += cpf[3] *7;
    soma += cpf[4] *6;
    soma += cpf[5] *5;
    soma += cpf[6] *4;
    soma += cpf[7] *3;
    soma += cpf[8] *2;
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11){
        soma = 0;
    }
    if(soma != cpf[9]){
        alert('CPF Invalido')
        return false
    }

    let soma2 = 0;
    soma2 += cpf[0] *11;
    soma2 += cpf[1] *10;
    soma2 += cpf[2] *9;
    soma2 += cpf[3] *8;
    soma2 += cpf[4] *7;
    soma2 += cpf[5] *6;
    soma2 += cpf[6] *5;
    soma2 += cpf[7] *4;
    soma2 += cpf[8] *3;
    soma2 += cpf[9] *2;
    soma2 = (soma2 * 10) % 11;

    if(soma2 == 10 || soma2 == 11){
        soma2 = 0;
    }

    if(soma2 != cpf[10]){
        alert('CPF Invalido')
        return false
    }

    if(true){
        alert('Cadastro Confirmado')
        gerarPDF();
    }   
}


const inserirCPF = () => {
    let variavel = document.querySelector('#cpf')
    if( variavel.value != ''){
        validarCpf(variavel.value);
    }
}
