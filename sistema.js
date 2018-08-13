//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
 */
function SistemaCadastro() {

    //Onde os participantes ficarão armazenados
    var participantes = [];

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
       for (var i=0; i< participantes.length ; i++){
           if (email === participantes[i].email)
            throw "Participante ja existe"
       }
        var p = new Participante();
        p.nome = nome;
        p.sobrenome = sobrenome;
        p.email = email;
        p.idade = idade;
        p.sexo = sexo;

        participantes.push(p);
    }

    function removerParticipante(email) {
        return participantes.splice(participantes.findIndex(elemento => elemento.email === email),1) 
    }
    function buscarParticipantesPorNome(nome){
        return participantes.filter(elemento=> elemento.nome === nome);
    }    
    function buscarParticipantesPorSexo(sexo){
        return participantes.filter(elemento => elemento.sexo === sexo);
    }
    function buscarParticipantesAprovados(){
        return participantes.filter(elemento => elemento.aprovado);
    }
    function buscarParticipantesReprovados(){
        return participantes.filter(elemento => elemento.aprovado === false);
    }
    function obterParticipante(email){
        return participantes.find(elemento => elemento.email === email);
    }
    function adicionarNotaAoParticipante(email, nota){
        var index = participantes.findIndex(elemento => elemento.email === email);
        participantes[index].nota = nota;
        participantes[index].aprovado = participantes[index].nota >= 70 ? true : false;
    }
    function obterMediaDasNotasDosParticipantes(){
        return participantes.reduce((total,elemento) => total + elemento.nota, 0)/obterTotalDeParticipantes();
    }
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    function verificarSeParticipanteEstaAprovado(email){
        return participantes.filter(elemento => elemento.aprovado);
    }
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        return participantes.filter(elemento => elemento.sexo === sexo).length;
    }

    return {
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo    
    };
}