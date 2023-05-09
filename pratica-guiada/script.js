// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
const imprimirNome = function imprimirNome(nome){

console.log(`Olá, ${nome}!`)

}

imprimirNome('Lucas')
imprimirNome('Luciano')
imprimirNome('Levi')

//-------------------------------

const fazerOperacoes = (numero) => {

    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero*numero

    return(`O ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma}. Elevado ao quadrado é ${multiplica}!`)
}

console.log(fazerOperacoes(10))

//-------------------------------------------------------------

const verificaDados = (login, senha) => {

    const loginArmazenado = 'luciano@email.com'
    const senhaArmazenada = '123456'

    return loginArmazenado === login && senhaArmazenada === senha
}

console.log(verificaDados('luciano@email.com', '123456'))