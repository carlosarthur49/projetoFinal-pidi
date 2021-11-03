import React from 'react'
import { Container, ProductIntro, ProductTable   } from './styles'

export default function OrderPage() {
    return (
        <Container>
           
            <ProductIntro>
                <h1>Pedidos</h1>

                <input type='text' placeholder='Busque Aqui...' />
                <br/>
                <button type='submit'>Consultar</button>
            </ProductIntro>

            <ProductTable>



            </ProductTable>

            <button type='submit' className ="register">+ Cadastrar</button>

       </Container>
    )
}
