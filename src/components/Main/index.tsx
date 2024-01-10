import './style.css';

import banner from '/images/banner.png';

function Main() {
    return (
      <> 
        <main>
          <img src={banner} alt='logo da loja' /> 
          <section className='section_about'>
            <p>
              Nossa História
            </p>

            <h3>
              MODA ACESSÍVEL PARA TODOS
            </h3>

            <p>

              A Silva Modas é uma loja de roupas que se destaca pela dedicação em oferecer moda de qualidade para a classe média baixa. Com uma trajetória marcada pelo compromisso e pela paixão pelo estilo acessível, a Silva Modas tem conquistado corações em diferentes bairros,  Com um crescimento constante, a loja já se expandiu para cinco bairros e duas cidades, tornando-se referência em moda acessível. Acreditamos que todos têm o direito de se vestir bem, independentemente do orçamento, e é por isso que nos dedicamos a oferecer roupas modernas e acessíveis para homens, mulheres e crianças.

            </p>
          </section>
          <section className='section_produto'>
            <div>
              <span>
                <h3>
                  PRODUTOS
                </h3>
              </span>

              <div className='produtos'>

              </div>
            </div>

            <div>
              <span>
                <h3>
                  Loja
                </h3>
              </span>

              <div className='loja'>

              </div>
            </div>
          </section>
        </main>
      </>
    )
  }
  
  export default Main