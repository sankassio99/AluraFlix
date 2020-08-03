import React from 'react';
import Menu from '../menu/index'
import Footer from '../Footer/index'
import styled from 'styled-components'

const Main = styled.main `
    background-color : var(--black) ;
    color: var(--white);
    flex : 1 ;
    padding-bottom : 0 ;
    margin-bottom: 0 ;
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