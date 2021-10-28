import { Container, Content } from "./styles";
import LogoImg from '../../assets/piticas-logo-transparente.png';
import {Link} from 'react-router-dom';

export function Header() {
    
    return (

        <Container>       
            <Content>
                
                <Link to='/'>
                <img src={LogoImg} alt="Logo imagem" />
                </Link>
                <div>
                    <Link to="/products">Produtos</Link>

                    <Link to="#">Relatório Inteligente</Link>

                    <Link to="#">Promoções</Link>

                    <Link to="#">Pedidos</Link>

                    <Link to="#">Vendas</Link>

                    <Link className ="Login" to="#">Entrar</Link>

                    <Link className ="Sign-in" to="#">Criar Conta</Link>
                </div>

            </Content>
        </Container>

    );
}