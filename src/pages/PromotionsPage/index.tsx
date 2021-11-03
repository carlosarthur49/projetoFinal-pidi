import React from 'react'
import { Container, PromoIntro, PromoDisplay } from './styles'
import Promotion from '../../components/Promotion'

export default function PromotionsPage() {
    return (
        <Container>
            <PromoIntro>
                <h1>Promoções</h1>

                <input type='text' placeholder='Busque Aqui...' />
                <br/>
                <button type='submit'>Consultar</button>
            </PromoIntro>
            
            <PromoDisplay>

                <Promotion/>
                <Promotion/>
                <Promotion/>

                <Promotion/>
                <Promotion/>
                <Promotion/>
                
            </PromoDisplay>

            <button type='submit' className ="register">+ Cadastrar</button>
        </Container>
    )
}
