import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, ProductIntro, ProductTable } from './styles'


export default function ProductsPage() {


    return (
        <Container>

            <ProductIntro>
                <h1>Produtos</h1>

                <input type='text' placeholder='Digite o Nome do Produto' />
                <br />
                <button type='submit'>Consultar</button>

            </ProductIntro>

            <ProductTable>
                
                <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th id="imageColumn">
                                Imagem
                            </th>
                            <th id="productColumn">
                                Produto
                            </th>
                            <th id="promotionColumn">
                                Promoção
                            </th>
                            <th id="valueColumn">
                                Valor
                            </th>
                            <th id="actionColumn">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                1
                            </th>
                            <td>
                                Camisa Harry Potter
                            </td>
                            <td>
                                Black Friday
                            </td>
                            <td>
                                R$ 60,00
                            </td>
                            <td>
                            <Link to='/products/updateproduct'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                2
                            </th>
                            <td>
                                Camisa Spider Man
                            </td>
                            <td>
                                Nenhuma
                            </td>
                            <td>
                                R$ 40,00
                            </td>
                            <td>
                            <Link to='/products/updateproduct'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                3
                            </th>
                            <td>
                                Casaco Star Wars
                            </td>
                            <td>
                                Nenhuma
                            </td>
                            <td>
                                R$ 80,00
                            </td>
                            <td>
                            <Link to='/products/updateproduct'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </ProductTable>



            <Link to='/products/newproduct'>
                <button type='button' className="register">+ Cadastrar</button>
            </Link>

        </Container>

    )
}
