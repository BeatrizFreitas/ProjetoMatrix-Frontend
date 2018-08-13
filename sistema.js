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
        for (var i =0; i< participantes.length ; i++){
            if (email === participantes[i].email)
            participantes.splice(i,1) 
        }           
        return participantes
    }
    function buscarParticipantesPorNome(nome){
        var participantesPorNome = []
        for (var i=0; i< participantes.length ; i++){
            if (nome === participantes[i].nome)
                participantesPorNome.push(participantes[i])
            }    
        return participantesPorNome;
    }    
    function buscarParticipantesPorSexo(sexo){
        var participantesPorSexo = [];
        for (var i =0; i< participantes.length ; i++){
            if (sexo === participantes[i].sexo)
                participantesPorSexo.push(participantes[i]);
        }    
        return participantesPorSexo;
    }
    function buscarParticipantesAprovados(){
        console.log(participantes)
        var participantesAprovados = [];
        for (var i=0; i<participantes.length ; i++){
            if(participantes[i].aprovado === true)
                participantesAprovados.push(participantes[i]) 
        }
        return participantesAprovados;
    }
    function buscarParticipantesReprovados(){
        var participantesReprovados = [];
        for (var i =0; i<participantes.length ; i++){
            if(participantes[i].aprovado === false)
                participantesReprovados.push(participantes[i]) 
        }
        
        return participantesReprovados;
    }
    function obterParticipante(email){
        for (var i =0; i< participantes.length ; i++){
            if (email === participantes[i].email)
            return participantes[i]
        }
    }
    function adicionarNotaAoParticipante(email, nota){
        for (var i =0; i < participantes.length ; i++){
            if (email === participantes[i].email)
                participantes[i].nota = nota;
                participantes[i].aprovado = participantes[i].nota >= 70 ? true : false;
                console.log('p',participantes[i])
        }
    }
    function obterMediaDasNotasDosParticipantes(){
        var soma = 0;
        for (var i =0; i < participantes.length ; i++){
            soma += participantes[i].nota
        }
        return soma/participantes.length;
    }
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    function verificarSeParticipanteEstaAprovado(email){
        for (var i =0; i< participantes.length ; i++){
            if (email === participantes[i].email)
                return participantes[i].aprovado;
        }
    }
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        var qtd=0;
        for (var i =0; i< participantes.length ; i++){
            if(participantes[i].sexo === sexo)
                qtd++
        }
        return qtd;
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