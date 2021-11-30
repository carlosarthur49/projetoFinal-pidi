import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, UserIntro, UserTable } from './styles'

export default function UserPage() {
    return (
        <Container>
           
            <UserIntro>
                <h1>Usuários</h1>

                <input type='text' placeholder='Digite o Nome do Usuário' />
                <br/>
                <input type='text' placeholder='Digite o Login do Usuário' />
                <br />
                <button type='submit'>Consultar</button>
            </UserIntro>

            <UserTable>

            <Table bordered hover responsive >
                    <thead>
                        <tr>
                            <th  id="cpfColumn">
                                CPF
                            </th>
                            <th id="nomeColumn">
                                Nome 
                            </th>
                            <th id="loginColumn">
                               Login
                            </th>
                            <th id="telefoneColumn">
                                Telefone
                            </th>
                            <th id="dateColumn">
                                Data do Cadastro
                            </th>
                            <th id="actionsColumn">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                000.222.364-95 
                            </th>
                            <td>
                                José Marcelino da Silva
                            </td>
                            <td>
                                jose.marcelino07
                            </td>
                            <td>
                                (61) 98175-9887
                            </td>
                            <td>
                                15/01/2021
                            </td>
                            <td>
                            <Link to='/users/updateuser'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            333.252.364-95
                            </th>
                            <td>
                                João José Brito
                            </td>
                            <td>
                               @joao88
                            </td>
                            <td>
                             (61) 98212-9857
                            </td>
                            <td>
                             20/02/2020
                            </td>
                            <td>
                            <Link to='/users/updateuser'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            223.252.374-84
                            </th>
                            <td>
                                Carlos Filipe
                            </td>
                            <td>
                               @carlos.bds
                            </td>
                            <td>
                             (61) 98542-9857
                            </td>
                            <td>
                             10/06/2021
                            </td>
                            <td>
                            <Link to='/users/updateuser'><Button id="updateButton" variant="primary" size="sm">Alterar</Button></Link>
                            &nbsp;
                            &nbsp;
                            <Button id="deleteButton" variant="danger" size="sm">Excluir</Button> 
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </UserTable>

            <Link to='/users/newuser'>
                <button type='button' className ="register">+ Cadastrar</button>
            </Link>

       </Container>
    )
}
