import React from 'react';
import Menu from '../../components/menu/index';
import Footer from '../../components/Footer/index'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain/index'
import Carousel from '../../components/Carousel/index'
// impor VideoFrame from '../../components/BannerMain/components/VideoFrame'

function App() {
  return (
      <div>
        <Menu />
        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Eita porra"}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        <Footer />
      </div>
  );
}

export default App;
