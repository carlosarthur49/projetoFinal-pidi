import React from 'react'
import { Link } from 'react-router-dom'
import { Container, PaymentIntro, ProductTable} from './styles'

export default function PaymentOption(){

    return (
        <Container>
           
            <PaymentIntro>
                <h1>Opções de Pagamento</h1>

                <input type='text' placeholder='Digite o Nome da Opção de Pagamento' />
                <br/>
                <button type='submit'>Consultar</button>
            </PaymentIntro>

            <ProductTable>



            </ProductTable>

            <Link to='/paymentoption/newpaymentoption'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>
       </Container>
    )
}