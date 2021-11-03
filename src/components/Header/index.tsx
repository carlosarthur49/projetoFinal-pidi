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
                <div className="links">
                    <Link to="/products">Produtos</Link>

                    <Link to="/report">Relatório Inteligente</Link>

                    <Link to="/promotions">Promoções</Link>

                    <Link to="/order">Pedidos</Link>

                    <Link to="/sales">Vendas</Link>

                    <Link className ="Login" to="/login">Entrar</Link>

                    <Link className ="Sign-in" to="/sign-in">Criar Conta</Link>
                </div>

            </Content>
        </Container>

    );
}