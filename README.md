# 👻 Jogo da Velha Moderno — Tic-Tac-Toe com Glassmorphism

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Glassmorphism-8A2BE2?style=for-the-badge" alt="Glassmorphism">
</p>

## 📌 Sobre o Projeto

O **Jogo da Velha Moderno** é uma aplicação web interativa que recria o clássico jogo da velha com uma interface visual moderna inspirada no estilo _Glassmorphism_, caracterizado por efeitos de transparência, desfoque e elementos com aparência de vidro.

Desenvolvido com HTML5, CSS3 e JavaScript puro (_Vanilla JavaScript_), o projeto permite partidas entre dois símbolos, com alternância de turnos, identificação automática de vitórias e detecção de empates.

A aplicação também explora a separação entre a lógica do jogo e a interface, facilitando a organização do código, a manutenção e a compreensão das regras de negócio.

Desenvolvido como parte dos estudos práticos de programação e lógica de desenvolvimento web, o projeto tem como foco a manipulação do DOM, o tratamento de eventos e a construção de interfaces interativas.

## 🚀 Visualização do Projeto

Acesse a versão publicada na Vercel e experimente o jogo diretamente pelo navegador.

<p align="center">
  <a href="https://projeto-jogo-da-velha-v10.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Acessar_Projeto_Online-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Acessar projeto online na Vercel">
  </a>
</p>

**Link direto:** https://projeto-jogo-da-velha-v10.vercel.app/

## ✨ Funcionalidades

- 🎮 **Partidas interativas:** realização de jogadas diretamente no tabuleiro.
- 🔄 **Alternância de turnos:** gerenciamento automático dos símbolos dos jogadores.
- 🏆 **Detecção de vitória:** identificação das combinações vencedoras nas linhas, colunas e diagonais.
- 🤝 **Detecção de empate:** reconhecimento de partidas sem posições disponíveis e sem vencedor.
- 🎲 **Início aleatório:** seleção aleatória do jogador inicial.
- 🚫 **Controle de jogadas:** prevenção de jogadas em posições ocupadas e após o encerramento da partida.
- ✨ **Interface moderna:** design com efeitos de transparência, desfoque e animações.
- ⌨️ **Interação por teclado:** utilização de elementos nativos de botão para facilitar a navegação e a ativação das células.
- 📱 **Experiência responsiva:** interface adaptável a diferentes tamanhos de tela, conforme a implementação do CSS.

## 🛠️ Tecnologias Utilizadas

| Tecnologia         | Aplicação no Projeto                                                          |
| :----------------- | :---------------------------------------------------------------------------- |
| HTML5              | Estrutura semântica do tabuleiro, dos controles e das informações da partida. |
| CSS3               | Estilização da interface, efeitos de Glassmorphism, animações e layout.       |
| JavaScript         | Implementação das regras do jogo, gerenciamento de estado e interações.       |
| DOM API            | Atualização dinâmica dos elementos da interface.                              |
| Eventos JavaScript | Captura e processamento das jogadas realizadas pelos usuários.                |
| CSS Variables      | Organização e reutilização de valores de estilo por meio de variáveis.        |

## 🎨 Interface e Identidade Visual

O projeto utiliza uma estética moderna inspirada no universo cyberpunk, combinando elementos visuais com cores contrastantes, transparências e efeitos luminosos.

Entre os recursos de estilização utilizados, destacam-se:

- **Glassmorphism:** aplicação de transparência e desfoque com propriedades como `backdrop-filter`.
- **Cores personalizadas:** utilização de variáveis CSS para facilitar a manutenção da identidade visual.
- **Animações:** efeitos de entrada para os símbolos durante as jogadas.
- **Feedback visual:** representação dos estados de interação e do andamento da partida.
- **Layout adaptável:** organização dos elementos para proporcionar uma experiência consistente em diferentes dispositivos.

## 🧠 Lógica do Jogo

A lógica da aplicação é organizada em módulos JavaScript com responsabilidades distintas.

### 🎯 Gerenciamento do Tabuleiro

O tabuleiro é representado por um array com nove posições, em que cada índice corresponde a uma célula do jogo.

```javascript
["", "", "", "", "", "", "", "", ""];
```

As posições vazias são preenchidas conforme as jogadas, permitindo acompanhar o estado atual da partida e verificar as condições de encerramento.

### 🏆 Verificação das Condições de Vitória

A aplicação utiliza combinações predefinidas de índices para representar as oito possibilidades de vitória:

- Três linhas horizontais.
- Três colunas verticais.
- Duas diagonais.

Após cada jogada, as combinações são verificadas para identificar se algum jogador completou uma sequência de três símbolos iguais.

### 🔄 Alternância de Jogadores

O sistema controla o turno atual e alterna os símbolos após cada jogada válida. O jogador inicial é definido aleatoriamente por meio de `Math.random()`.

### 🤝 Detecção de Empate

Quando todas as posições estão preenchidas e nenhuma combinação vencedora foi encontrada, a partida é encerrada como empate.

### 🖥️ Separação entre Lógica e Interface

A organização em módulos permite separar as regras de negócio das operações responsáveis por atualizar os elementos visuais, contribuindo para um código mais organizado e fácil de manter.

## ♿ Acessibilidade e Interação

A interface utiliza elementos HTML nativos, como `button`, para representar as células do tabuleiro. Essa escolha permite aproveitar os recursos de navegação por teclado e ativação disponibilizados pelos navegadores.

O uso de elementos semânticos também contribui para a compatibilidade com tecnologias assistivas. A experiência final depende da implementação dos atributos acessíveis e dos demais recursos presentes na interface.

## 📂 Estrutura do Projeto

```text
projeto-jogo-da-velha/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── game.js
    └── interface.js
```

## 💻 Como Executar o Projeto Localmente

**1. Clone o repositório**

```bash
git clone https://github.com/devRafaelSantana-Code/projeto-jogo-da-velha.git
```

**2. Acesse a pasta do projeto**

```bash
cd projeto-jogo-da-velha
```

**3. Execute a aplicação**

Abra o arquivo `index.html` diretamente em um navegador moderno ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto em um servidor local.

Não é necessário instalar dependências, configurar um backend ou executar uma etapa de build.

## 🎯 Objetivos de Aprendizado

- Consolidar os fundamentos de HTML5, CSS3 e JavaScript.
- Desenvolver a lógica de um jogo com regras e condições de encerramento.
- Praticar a manipulação do DOM e o tratamento de eventos.
- Trabalhar com arrays e estruturas de dados para representar o tabuleiro.
- Aplicar conceitos de separação de responsabilidades entre lógica e interface.
- Criar interfaces interativas com animações e efeitos visuais modernos.
- Explorar boas práticas de semântica HTML e acessibilidade.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e na construção de aplicações web interativas.

<p align="center">
  <a href="https://github.com/devRafaelSantana-Code">
    <img src="https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub de Rafael Santana">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript e desenvolvimento de interfaces responsivas.
</p>
