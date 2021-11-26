import React, { FormEvent, useState } from 'react'
import { 
    Container,
    Form, 
    MainSection, 
    ImageSection, 
    FormPaymentBlock } from './styles';

export default function NewPaymentOption() {

    const [nome, setNome] = useState('');
    const [bandeira, setBandeira] = useState('');
    const [id, setId] = useState('');
    const [parcelamento, setValue] = useState(0);

    function handleCreateNewPaymentOption(event: FormEvent) {
        event.preventDefault();

        console.log({
            nome,
            bandeira,
            id,
            parcelamento
        });
    }


    return (
        <Container>
            <Form>
                <h3>Novo Produto</h3>

                <FormPaymentBlock>
                    <MainSection>
                    <p>Nome da Opção de Pagamento:</p>
                        <input 
                        type="text" 
                        placeholder="Nome da Opção de Pagamento" 
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        />

                       <p>Bandeira:</p>
                        <select value={bandeira} onChange={event => setBandeira(event.target.value)}>
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="Elo">Elo</option>
                            <option value="Hipercard">Hipercard</option>
                            <option value="Diners Club">Diners Club</option>
                            <option value="American Express">American Express</option>
                            <option value="Todas">Todas</option>
                            <option value="Nenhuma">Nenhuma</option>
                        </select>

                        {/* Campo Será gerado Automaticamente */}
                        {/* <p>Código da Froma de Pagamento:</p>
                        <input 
                        type="text" 
                        placeholder="Nome da Opção de Pagamento" 
                        value={id}
                        onChange={event => setId(event.target.value)}
                        /> */}

                        <p>Parcelamento:</p>
                        <select value={bandeira} onChange={event => setBandeira(event.target.value)}>
                            <option value="A vista">A Vista</option>
                            <option value="2x">Até 2x</option>
                            <option value="3x">Até 3x</option>
                            <option value="4x">Até 4x</option>
                            <option value="5x">Até 5x</option>
                            <option value="6x">Até 6x</option>
                            <option value="7x">Até 7x</option>
                            <option value="8x">Até 8x</option>
                            <option value="9x">Até 9x</option>
                            <option value="10x">Até 10x</option>
                            <option value="11x">Até 11x</option>
                            <option value="12x">Até 12x</option>
                        </select>


                    </MainSection>
                    <ImageSection> 
                        <img src="https://i.pinimg.com/originals/fe/7f/4b/fe7f4b418e2778863247a7dcc6aed421.png" alt="" />
                    </ImageSection>
                    

                </FormPaymentBlock>
                
                <br/>
                <button id="buttonCancel" type="reset">Cancelar</button> <button id="buttonRegister" type="submit" onClick={handleCreateNewPaymentOption}>Cadastrar</button>
            </Form>
        </Container>
    )
}