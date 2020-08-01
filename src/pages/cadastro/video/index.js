import React from 'react';
import PageDefault from '../../../components/PageDefault/index'
import {Link} from 'react-router-dom'

function CadastroVideo() { 
    return (
        <div className="body">
            <PageDefault >
                <h1>Página de Cadastro de Vídeo</h1>
                <sub>Text</sub>
                <Link to="categoria">Cadastrar Categoria</Link>
                
            </PageDefault>
        </div>
    );
}

export default CadastroVideo ;