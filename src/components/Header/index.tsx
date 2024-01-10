import './style.css';

import logo from '/images/logo.png';

import facebook from '/images/facebook.png';
import instagram from '/images/instagram.png';
import whatsapp from '/images/whatsapp.png';
import menu from '/images/menu.png';


function Header() {
    return (
      <> 
        <header>
          <section className='section_header'>
            <img src={logo} alt='logo da loja' /> 
          </section>

          {/* <section className='section_header_mid '>
            <div>
              X
            </div>

            <div>
              <p>Home</p>
              <p>Sobre nós</p>
              <p>Produtos</p>
              <p>Loja</p>

              <section className='redes_sociais_phone'>
                <img src={facebook} alt='logo da loja' /> 
                <img src={instagram} alt='logo da loja' /> 
                <img src={whatsapp} alt='logo da loja' /> 
              </section>
            </div>
          </section> */}

          <section className='section_header section_mid_phone'>
            <img src={menu} alt='logo da loja' /> 
          </section>

          <section className='section_header redes_sociais'>
            <img src={facebook} alt='logo da loja' /> 
            <img src={instagram} alt='logo da loja' /> 
            <img src={whatsapp} alt='logo da loja' /> 
          </section>

        </header>
      </>
    )
  }
  
  export default Header