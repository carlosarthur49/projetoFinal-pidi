import styled from 'styled-components';


export const Container = styled.div `

    display: block; 
    justify-content: center;
    align-items: center; 
    width: 100%;
    

    button.register {
        position:fixed;
        bottom:10%;
        right: 40px;

        margin:0;
        padding:12px 20px;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #F28118;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }

`;

export const ProductIntro = styled.div `

    display: block;
    justify-content: center;
    align-items: center;

    margin-left: 47rem;
    margin-top: 5rem;

    h1{
        margin-left: 7rem;
        
    }

    input {

        width: 25rem;
        height: 1.8rem;

        margin-top: 2rem;

        border-radius: 5px;
        
    }

    button {
        margin-top: 2rem;
        //margin-left: 7.5rem;

        width: 25rem;
        height: 2rem;
        color: #fff;

        border-radius: 5px;
        border-style: none;

        //padding: 1rem 10rem;
        background: #F28118;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }
`;

export const ProductTable = styled.div `

    
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
    
   
    
  table{
      border: 5px solid;
      width: 60%;
      margin-left: 25rem;
      
  }

  td{
      max-width: 60px;
      text-align: center;
  }

  th{
      text-align: center;
  }

  #imageColumn{
      width: 15rem;
  }

  #productColumn{
      width: 20rem;
  }

  #promotionColumn{
      width: 10rem;
  }

  #valueColumn{
      width: 7rem;
  }

  #actionColumn{
      width: 10rem;
  }

  #updateButton{
      background-color: blue;
  }

  #deleteButton{
      background-color: red;
  }
   

`;