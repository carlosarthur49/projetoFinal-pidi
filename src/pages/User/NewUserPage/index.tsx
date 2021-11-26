import React, { FormEvent, useState } from 'react'

import { 
    Container,
    Form, 
    MainSection, 
    FormBlock,
    SecondSection } from './styles';

export default function NewUserPage() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthdayDate, setbirthdayDate] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');
    
   

    function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        console.log({
            name,
            cpf,
            birthdayDate,
            gender,
            phone,
            date,
            email,
            role,
            login,
            password,
            confirmedPassword
        });
    }


    return (
        <Container>

            <Form>
                <h3>Novo Usuário</h3>
                <FormBlock>
                    <MainSection>
                    <p>Nome Completo:</p>
                        <input 
                        type="text"  
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                        <p>Data de Nascimento: </p>
                        <input 
                        type="date" 
                        value={birthdayDate}
                        onChange={event =>setbirthdayDate(event.target.value)}
                        />

                        <p>Telefone: </p>
                        <input 
                        type="text" 
                        value={phone}
                        onChange={event =>setPhone(event.target.value)}
                        />

                        <p>Email: </p>
                        <input 
                        type="text" 
                        value={email}
                        onChange={event =>setEmail(event.target.value)}
                        />

                        <p>Login: </p>
                        <input 
                        type="text" 
                        value={login} 
                        onChange={event =>setLogin(event.target.value)}/>  

                    </MainSection>

                    <SecondSection>

                        <p>CPF: </p>
                        <input 
                        type="text" 
                        value={cpf}
                        onChange={event =>setCpf(event.target.value)}
                        />

                        <p>Sexo:</p>
                        <select value={gender} onChange={event => setGender(event.target.value)}>
                            <option value="Atendimento">Masculino</option>
                            <option value="Financeiro">Feminino</option>
                        </select>

                        <p>Data de Cadastro: </p>
                        <input 
                        type="date" 
                        value={date}
                        onChange={event =>setDate(event.target.value)}
                        />

                        <p>Cargo:</p>
                        <select value={role} onChange={event => setRole(event.target.value)}>
                            <option value="Atendimento">Atendimento</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                        
                        <p>Senha: </p>
                        <input 
                        type="text" 
                        value={password} 
                        onChange={event =>setPassword(event.target.value)}/>

                    </SecondSection>
                    <br /> 
                  
              
                </FormBlock>
                <br />
                <p>Confirmar Senha: </p>
                        <input 
                        type="text" 
                        value={confirmedPassword} 
                        onChange={event =>setconfirmedPassword(event.target.value)}/>
                <br />
                <button id="form-btn" type="submit" onClick={handleCreateNewUser} >Cadastrar</button>

            </Form>


        </Container>
    )
}
