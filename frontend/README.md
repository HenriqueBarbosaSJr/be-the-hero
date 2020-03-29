OBS.: toda vez que for utilizar uma variável no HTML dentro
      de um JavaCript deve utilizar { }

O parâmetro props (Propriedade "pai") é passado dentro de uma função. Quando utiliza a { } realizo a desestruturação do parâmetro, especificando quais parâmetros vou utilizar.

Quando utilizo props, estou utilizando todos.
    
    ***** EXEMPLO SEM DESESTRUTURAÇÃO *****
    No componente

        export default function Header(props){
            return(
                <header>
                    <h1>{props.title}</h1>
                </header>
            );
        }

    Na utilização do componente

        import React from 'react';
        import Header from './Header';

        function App() {
        return (
            <Header title="Semana OmniStack"/>
        );
        }

        export default App;
        
        
        ***** EXEMPLO COM DESESTRUTURAÇÃO: { Children } *****
        
        No componente

        export default function Header({children}){
        return(
            <header>
                <h1>{children}</h1>
            </header>
            );
        }

        Na utilização do componente

        import React from 'react';
        import Header from './Header';

        function App() {
        return (
            <Header>
            Semana OmniStack
            </Header>
        );
        }

        export default App;



***********************************************
Conceito de Estado / Imutabilidade

Toda vez que o estado for alterado o componente vai ser renderizado NOVAMENTE exibendo a informação em tela.

No React não é possível alterar a variável do estado de 
forma direta, para isso á preciso utilizar o array, este
é o conceito de imutabilidade.

Quando utilizamos o useState() ele retorna um array de 
duas posições, sendo:
    Array [valor, funcaoDeAtualozacao]

    A função consegue trocar o valor do array indice 0

    Exemplo contador:

        import React, { useState } from 'react';
        import Header from './Header';

        function App() {
        
        const [counter,setCouter]= useState(0);

        function increment(){
            setCouter(counter + 1);

        }
        return (
            <div>
            <Header>
            Contador: {counter}
            </Header>
            <button onClick={increment}> Incrementar</button>
            </div>
        );
        }

        export default App;


*****************************************************
Para lidar com rotas dentro do React utilizamos o pacote

npm install react-router-dom


********************************************************
Para instalar um Cliente HTTP para acesso ao dados do back-end
Ele é responsavel por fazer as chamadas para a api do bac-end
e obter a resposta.

npm install axios

