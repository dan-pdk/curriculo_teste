const ancora = document.querySelector("#special");

function enviarCaixaPandora() {
    const aleatorio = Math.floor(Math.random() * 10);

    const frases = [
        "Ó o Daniel sabendo chamar função",
        "Eu sei programar em HTML com o labubustache carlinhos maia cauazinho da loud.",
        "Você não deveria ter confiado em mim.",
        "Modo farmar aura",
        "Vamos apertar a braba",
        "E nessa loucura, de dizer que tudo é esférico. Chamam de circunferência, mas eu tenho as evidências. Que a NASA está mentindo, para atender os interesses do Alex...",
        "Erro 264: Já existe um usuário com esse computador",
        "Hello World",
        "const name = 'java', name.create(script). Foi muito difícl de colocar os Objetos juntos. Mas infelizmente, Uncaught Exception, e agora não posso fazer nada a não ser cantar essa canção boba.",
        " ",
        "Cuidado"
    ]

    alert(frases[aleatorio]);
    console.log(aleatorio);
}

ancora.addEventListener('click',enviarCaixaPandora);
// eu sou um dev tão bom

