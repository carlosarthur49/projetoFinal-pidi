import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LoginBlock, ButtonsBlock } from './styles';

export default function LoginPage() {
    return (
        <Container>
            <LoginBlock>
                <p>Usuário:</p>
                <input type="text" placeholder="Nome de Usuário" />
                <br/>
                <p>Senha:</p>
                <input type="password" placeholder="Senha" />
                <br />
                <ButtonsBlock>

                    <Link to="/sign-in"><a>Criar Conta</a></Link>
                    <br />
                    <button type="submit">Entrar</button>

                </ButtonsBlock>
               
            </LoginBlock>
        </Container>
    )
}
