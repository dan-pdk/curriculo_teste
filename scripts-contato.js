const elementoMessage = document.querySelector("#message");

const aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);

let placeholder = "";

switch (aleatorio) {
    case 0:
        placeholder = "Mande uma mensagem...";
        break;
    case 1:
        placeholder = "Vamos, mande uma mensagem...";
        break;
    case 2:
        placeholder = "Jaula ativada...";
        break;
    case 3:
        placeholder = "Essa mensagem não será lida...";
        break;
    case 4:
        placeholder = "Prezado Daniel, pare de 'apertar a braba'...";
        break;
    case 5:
        placeholder = "Me xingue do que quiser...";
        break;
    case 6:
        placeholder = "Que curioso, não?...";
        break;
    case 7:
        placeholder = "Eu me lembro dos seus pacifismos...";
        break;
    case 8:
        placeholder = "Digite algo logo!...";
        break;
    case 9:
        placeholder = "Quem é esse tal de Marquitos?...";
        break;
    case 0:
        placeholder = "Esta mensagem tem cerca de 1/100³ de aparecer. É hora de apostar na mega-sena";
        break;
    
    default:
        placeholder = "Entre em contato...";
        break;

    // eu sei que tem mil e um jeitos de fazer isso melhor, mas eu não ligo. vou usar if e else na próxima e vocês vão ver seus otários muahahhahaha
}

elementoMessage.setAttribute('placeholder', placeholder)