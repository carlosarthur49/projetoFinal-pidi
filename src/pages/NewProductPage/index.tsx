import React, { FormEvent, useState } from 'react'
import { 
    Container,
    Form, 
    MainSection, 
    ImageSection, 
    FormProductBlock } from './styles';

export default function NewProductPage() {

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [colection, setColection] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState(0);
    //const [quantity, setQuantity] = useState(0);
    //const [color, setColor] = useState('');
   

    function handleCreateNewProduct(event: FormEvent) {
        event.preventDefault();

        console.log({
            type,
            name,
            colection,
            date,
            value
        });
    }


    return (
        <Container>
            <Form>
                <h3>Novo Produto</h3>

                <FormProductBlock>
                    <MainSection>
                        <p>Tipo de Produto:</p>
                        <select value={type} onChange={event => setType(event.target.value)}>
                            <option value="Camisa">Camisa</option>
                            <option value="Boné">Boné</option>
                            <option value="Casaco">Casaco</option>
                            <option value="Caneca">Caneca</option>
                            <option value="Chaveiro">Chaveiro</option>
                            <option value="Garrafa">Garrafa</option>
                            <option value="Action Figure">Action Figure</option>
                        </select>

                        <p>Nome do Produto:</p>
                        <input 
                        type="text" 
                        placeholder="Nome do Produto" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />

                        <p>Coleção:</p>
                        <input 
                        type="text" 
                        value={colection}
                        onChange={event => setColection(event.target.value)}
                        />

                        <p>Data do Cadastro: </p>
                        <input 
                        type="date" 
                        value={date}
                        onChange={event =>setDate(event.target.value)}
                        />

                        <p>Quantidade/Tamanho</p>
                        <label>
                            PP: <strong>10</strong>
                        </label>

                        <p>Cor:</p>

                        <p>Valor:</p>
                        <input 
                        type="number" 
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                        />
                    </MainSection>

                    <ImageSection>
                        <p>Imagem:</p>
                        <input type="image" alt="Imagem do Produto"/>
                    </ImageSection>

                </FormProductBlock>
                <br/>
                <button type="submit" onClick={handleCreateNewProduct}>Cadastrar</button>
            </Form>
        </Container>
    )
}
