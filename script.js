function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('nascimento')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fAno.value.length == 0 || Number(fAno.value)  > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
       var fsex = document.getElementsByName('sexo')
       var idade = ano - Number(fAno.value)
       var genero = ''
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >=0 && idade< 10){
               //criança
               img.setAttribute('src', 'imagens/foto-criança-H.png')
           }
           else if(idade>=10 && idade < 21){
               //jovem
               img.setAttribute('src', 'imagens/foto-jovem-H.png')
           }
           else if(idade>=21 && idade < 50){
               //adulto
               img.setAttribute('src', 'imagens/foto-adulto-H.png')
           }
           else if(idade > 50){
               //idoso
               img.setAttribute('src', 'imagens/foto-idoso-H.png')
           }
       }
       else if(fsex[1].checked){
           genero =' Mulher'
           if(idade >=0 && idade<10){
            //criança
            img.setAttribute('src', 'imagens/foto-criança-M.png')
        }
        else if(idade>=10 && idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/foto-jovem-M.png')
        }
        else if( idade>=21 && idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/foto-adulto-M.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'imagens/foto-idosa-M.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos. '
       res.appendChild(img)
              }
}