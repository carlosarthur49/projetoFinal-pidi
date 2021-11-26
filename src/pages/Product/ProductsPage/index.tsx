import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ProductIntro, ProductTable } from './styles'

export default function ProductsPage() {
    const tableCustom = { width: '100%', height: ''}


    return (
       <Container>
           
            <ProductIntro>
                <h1>Produtos</h1>

                <input type='text' placeholder='Digite o Nome do Produto' />
                <br/>
                <button type='submit'>Consultar</button>

            </ProductIntro>
            
            <ProductTable>
                {/* <table style={tableCustom}>
                    <thead>  
                        <th>Imagem</th>
                        <th>Produto</th>
                        <th>Promoção</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> 
                    </tbody>                 
                </table> */}
                </ProductTable>
            
            
                
            <Link to='/products/newproduct'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>

       </Container>
       
    )
}
