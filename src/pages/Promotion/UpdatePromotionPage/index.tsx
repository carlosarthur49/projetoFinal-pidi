import React from 'react'
import { Link } from 'react-router-dom';

import { Container,Form, MainSection, AddProductSection, FormBlock } from './styles'

export default function UpdatePromotionPage() {
    return (
        <Container>

            <Form>
                <h3>Alterar Promoção</h3>
                <FormBlock>
                    <MainSection>

                        <p>Nome da Promoção:</p>
                        <input type="text" placeholder="Nome da Promoção" />

                        <p>Inicio da Promoção:</p>
                        <input type="date" />
                        
                    </MainSection>

                    <AddProductSection>
                    <p>Desconto</p>
                        <select >
                            <option value="70">70% OFF</option>
                            <option value="60">60% OFF</option>
                            <option value="50">50% OFF</option>
                            <option value="30">30% OFF</option>
                            <option value="20">20% OFF</option>
                            <option value="10">10% OFF</option>
                        </select>

                        <p>Fim da Promoção</p>
                        <input type="date" />
                    </AddProductSection>
                    <br />               
                </FormBlock>

                <Link to="/promotions"><button id="buttonCancel" type="reset">Cancelar</button></Link>  <button id="form-btn" type="submit" >Alterar</button>

            </Form>


        </Container>
    )
}
