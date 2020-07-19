import React, {useState, useCallback} from 'react';
import {FaGithub, FaPlus} from 'react-icons/fa';
import {Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    
  const handleSubmit = useCallback((e)=> {
    e.preventDefault(); //  e.preventDefault() serve para prevenir de dar o refresh na página ao adicionar o item

      async  function submit(){
        

        const response = await api.get(`repos/${newRepo}`);

        const data = {
            name: response.data.full_name,
        }

        setRepositorios([...repositorios, data]);
        setNewRepo('');
        
        //console.log(newRepo);
        
      }

      submit();
  }, [newRepo, repositorios]);
     
    

    function handleinputChange(e){
        setNewRepo(e.target.value);
    }

    

    return(

        <Container>
            
            <h1>
            <FaGithub size={25} />    
            Meus Repositórios
            </h1> 

            <Form onSubmit={handleSubmit}>
                <input 
                type="text"
                 placeholder="Adicionar Repositórios" 
                 value={newRepo}
                 onChange={handleinputChange}
                 />

                <SubmitButton>
                    <FaPlus color="#fff" size={14} />
                </SubmitButton>
                
            </Form>           
        </Container>
    )
}

