import styled from "styled-components";


export const Gridabuelo = styled.div`
 background: linear-gradient( 135deg, #FEB692 0%, #EA5455 100%) ;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(20, 1fr);
    


`;

export const Gridpapa = styled.form`
    
    background-color: #0e0d27 ;
    grid-column: 2/20;
    grid-row: 2/20;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(9, 1fr);
    



`;
export const Grid1conct = styled.div`
    background-color: #0e0d27;
    color: #FFFE;
    grid-column: 1/11;
    grid-row: 1/3;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    padding: 0px 10px;


`;
export const Grid2conct = styled.div`
    background-color: #0e0d27;
    color: #A7A9BE;
    grid-column: 1/11;
    grid-row: 2/4;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    padding: 0px 10px;

`;
export const Grid3conct = styled.div`
background-color: #0e0d27;
    grid-column: 1/11;
    grid-row: 4/6;
`;
export const Grid4conct = styled.div`
background-color: #0e0d27;
    grid-column: 1/11;
    grid-row: 5/6;

`;
export const Grid5conct = styled.div`
background-color: #0e0d27;
    grid-column: 1/11;
    grid-row: 6/9;

`;
export const Grid6conct = styled.div`
background-color: #0e0d27;
    grid-column: 1/11;
    grid-row: 9/10;
   
`;
export const Stylebtnn = styled.input`
    
    background-color:  #FF8906;
    color: #FFFE ;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    width: 300px;
    margin: 10px;

    &:hover {
        box-shadow: 0px 0px 10px white;     
        background-color: #0e0d27;
        color: #FF8906;
    
  }

`;

export const Styleinput = styled.input`
    height: 48px;
    width: 300px;
    margin: 10px;


`;


export const Styletextaa = styled.textarea`
    height: 200px;
    width: 300px;
    margin: 10px;


`;


