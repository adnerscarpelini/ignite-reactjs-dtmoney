import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
        --red: #e52e4d;
        --blue: #5429CC;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5F;
        --text-body: #969CB3;

        --background: #f0f2f5;
        --shape: #FFFFFF;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    //Quando a tela for de celular ou tablet
    //A fonte padrão em desktop é 16px
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 728px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    
    [disabled] {
        opacity:0.6;
        cursor: not-allowed;
    }

    //Estilização global para as modais
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        //Quando tiver scroll fica em cima sempre do html ocupando tudo
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        
    }

    //Estilização global para o botão de fechar das modais
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        //Quando passa o mouse diminui o brilho do botão
        &:hover{
            filter: brightness(0.8);
        }
    }
`;
