import './style.css';
import logo from '/images/logo.png';

import facebook from '/images/facebook.png';
import instagram from '/images/instagram.png';
import whatsapp from '/images/whatsapp.png';

function Footer() {
    return (
      <> 
        <footer>
          <section>
            <div>
              <img src={logo} alt='logo' />

              <div>
                <a><p>Home</p></a>
                <a><p>Sobre nós</p></a>
                <a><p>Produto</p></a>
                <a><p>Contato</p></a>
              </div>
            </div>

            <span className='line'>

            </span>

            <div className='div_redes-sociais'>
              <h3>Siga-nos</h3>
              <div>
                <img src={facebook} alt='facebook' />
                <img src={instagram} alt='instagram' />
                <img src={whatsapp} alt='whatsapp' />
              </div>
            </div> 
          </section>
        </footer>
      </>
    )
  }
  
  export default Footer