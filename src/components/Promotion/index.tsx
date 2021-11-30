import React from 'react'
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { TiTrash, TiPencil, TiDocumentText } from "react-icons/ti";

export default function Promotion() {
    const deleteIcon = { color: "red", fontSize: "1.5em", marginLeft:"" }
    const editIcon = { color: "white", fontSize: "1.5em", marginLeft:"" }
    const showIcon = { color: "yellow", fontSize: "1.5em", marginLeft:"" }
    return (
        <Container>
            <h4>Black Friday</h4>
            <p>Lorem ipsum dolor sit amet. Non nulla possimus et earum quidem hic quas reiciendis</p>
            <p className="discount">40% OFF</p>
            
            <Link to='/promotion/updatepromotion'><TiPencil style={editIcon}/></Link> <TiDocumentText style={showIcon}/> <TiTrash style={deleteIcon}/> 
        </Container>
    )
}
