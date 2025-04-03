import './Home.css';
import Button from '../../components/Button/Button';
function Home() {
    return (
      <>
        <div className="home-container">
          <div className="content-wrapper">
            <div className="welcome-section">
              <h2>Olá, eu sou a Sâmia!</h2>
              <p>Esse é o meu blog. Seja muito bem vindo (a)!</p>
              <p>Estou testando coisas novas :D</p>
            </div>
            <div className="image-section">
              <img 
                src="https://i.imgur.com/VpwApCU.png" 
                alt="Imagem da Página Home" 
                className="home-image" 
              />
            </div>
            <div className="features-section">
              <h3>Recursos Utilizados</h3>
              <ul>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>CSS Modular</li>
              </ul>
              <div className="button-container">
            <Button 
                text="Clique aqui" 
                onClick={() => alert('Funcionou!')} 
                variant="primary" 
                size="medium" 
            />
            <Button 
                text="Botão secundário" 
                variant="secondary" 
                size="medium" 
            />
            <Button 
                text="Botão outline" 
                variant="outlined" 
                size="medium" 
            />
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;  