const senhaCorreta = "1234";
let tentativas = 3;

for(let i = 0; i < 3; i++) {
    let senha = prompt(`Digite a senha (${tentativas} tentativas restantes):`);
    
    if(senha === senhaCorreta) {
        alert("Senha correta!");
        break;
    } else {
        alert("Senha incorreta.");
        tentativas--;
    }
    
    if(tentativas === 0) {
        alert("Tentativas esgotadas. Conta bloqueada.");
    }
}