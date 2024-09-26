import {consult} from '../database/conexao.js';

class SelecaoRepository{

    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return consult(sql, selecao, 'Não foi possivel registar.')
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consult(sql,'Não foi possivel localizar.')
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consult(sql, id, 'Não foi possivel localizar.')
    }
    
    update(dados, id){
        const sql = "UPDATE selecoes SET ? where id=?;"
        return consult(sql, [dados,id], 'Não foi possivel atualizar.')
    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consult(sql, id, 'Não foi possivel apagar.')
    }

}

export default new SelecaoRepository()