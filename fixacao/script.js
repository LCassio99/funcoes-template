// Resolva o Exercício de Fixação!
const verificaIdade = (nome, nascimento, atual) =>{

const primeiroNome = nome
const anoNascimento = nascimento
const anoAtual = atual
const idade = atual - nascimento

return `${nome}, é maior de idade? ${idade >= 18}`

}

console.log(verificaIdade('Luciano', 2001, 2023))