import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, PaymentIntro, PaymentTable} from './styles'

export default function PaymentOption(){

    return (
        <Container>
           
            <PaymentIntro>
                <h1>Opções de Pagamento</h1>

                <input type='text' placeholder='Digite o Nome da Opção de Pagamento' />
                <br/>
                <button type='submit'>Consultar</button>
            </PaymentIntro>

            <PaymentTable>
                
            <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th>
                                Código
                            </th>
                            <th>
                                Nome da Forma de Pagamento
                            </th>
                            <th>
                                Bandeira
                            </th>
                            <th>
                                Parcelamento
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                             # 00614
                            </th>
                            <td>
                                Cartão - Débito
                            </td>
                            <td>
                                Visa
                            </td>
                            <td>
                                A vista 
                            </td>
                            <td>
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                # 66330
                            </th>
                            <td>
                                Cartão de Crédito
                            </td>
                            <td>
                                Mastercard 
                            </td>
                            <td>
                                3 x
                            </td>
                            <td>
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                # 90876
                            </th>
                            <td>
                                Pix
                            </td>
                            <td>
                                Nenhuma
                            </td>
                            <td>
                                A vista
                            </td>
                            <td>
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </PaymentTable>

            <Link to='/paymentoption/newpaymentoption'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>
       </Container>
    )
}