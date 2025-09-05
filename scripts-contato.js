const elementoMessage = document.querySelector("#message");

const aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);

let placeholder;

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
        placeholder = "Prezado Daniel...";
        break;
    case 5:
        placeholder = "Me xingue do que quiser...";
        break;
    case 6:
        placeholder = "Sabe programar em Perl?...";
        break;
    case 7:
        placeholder = "Tenho um patrocínio...";
        break;
    case 8:
        placeholder = "Digite algo logo!...";
        break;
    case 9:
        placeholder = "Quem é esse tal de Marquitos?...";
        break;
    case 0:
        placeholder = "Esta mensagem tem cerca de 1/1000³ de aparecer. É hora de apostar na mega-sena";
        break;
    
    default:
        placeholder = "Entre em contato...";
        break;

    // eu sei que tem mil e um jeitos de fazer isso melhor, mas eu não ligo. vou usar if e else na próxima e vocês vão ver seus otários muahahhahaha
}

// update pra adicionar uma checkbox que não precisava fazer nada demais mas agora vai fazer. muahahahaha

const checkbox = document.querySelector("#recruta");

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        placeholder = "Amei suas habilidades! Meu orçamento é de 50 mil...";
    } else {
        clearTimeout();
        placeholder = "Foi mal, fui demitido e não sou mais recrutador...";
        setTimeout(() => {
            placeholder = "Mande uma mensagem...";
            elementoMessage.setAttribute('placeholder', placeholder);
        }, 3000);
    }
    elementoMessage.setAttribute('placeholder', placeholder);

})

// muahahaha
elementoMessage.setAttribute('placeholder', placeholder);

// passaram-se 20 minutos e eu não sei porque perdi meu tempo com isso