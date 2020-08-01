import React from 'react';
import Menu from '../menu/index'
import Footer from '../Footer/index'
import styled from 'styled-components'

const Main = styled.main `
    background-color : var(--black) ;
    color: var(--white);
    flex : 1 ;
    padding-top: 50px ;
    padding-right: 5% ;
    padding-left: 5% ;
    padding-bottom : 0 ;
`;


function PageDefault(props) { 
    return (
        <div>
            <Menu />
            <Main>
                { props.children }
            </Main>
            <Footer />
        </div>
    );
}

export default PageDefault ;