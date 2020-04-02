import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

class App extends Component {

  state = {
    activeLesson: {    },
    modules: [
      {
        id:1,
        title: 'Iniciando com React',
        lessons: [
          { id:1,  title: 'Primeira aula'},
          { id:2,  title: 'Segunda aula'}
        ]
      },
      {
        id:2,
        title: 'Aprendendo Redux',
        lessons: [
          { id:3,  title: 'Terceira aula'},
          { id:4,  title: 'Quarta aula'}
        ]
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Video
        activeLesson={this.state.activeLesson}/>
        <Sidebar
        modules={this.state.modules}
        activeLesson={this.state.activeLesson}/>
      </div>
    );
  }
}

export default App;


// PROJETO:

// exibir na sidebar todos módulos e aulas
// exibir o vídeo da aula ativa no momento
// deixar a sidebar destacada no item da aula ativa no momento

// começam a ter informações sendo repassadas via propriedades

// estado global: para ligação entre as duas páginas
// estados isolados: dentro de cada componente

// PODE SER QUE:

// exista um estado dentro da sidebar:
// (para informações não compartilhadas com o vídeo)
// estado para controlar o módulo que está aberto e fechado,
// exemplo: quando começar vídeo de outro módulo, abrí-lo**
// estado para controlar se ela está fixa ou flexível à lateral da tela

//também pode existir estado dentro do vídeo

// **para fazê-lo dentro do estado da sidebar teria que:
// passar uma função pra sidebar para quando quisesse alterar o module
// essa função teria que passar ao componente de vídeo também
// componentes estariam se comunicando
// perdemos o controle de quem altera cada informação da aplicação
// e de como nossa aplicação se comporta baseada nessas alterações

//REDUX:

// centraliza a lógica e os efeitos colaterais em um único local
//RESOLVE ESTE PROBLEMA