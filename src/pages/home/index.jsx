import './index.scss'
import { Link } from 'react-router-dom';

export default function Symbol() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="OnePage"> 
      <div className='head' >
        <Link className='logo_name'>
          <img src="/assets/image/logo.png" alt="" />
          <h1>Symbol System</h1>
        </Link>
        <div className="options">
        <button className='link' onClick={() => handleScroll("home")}>Home</button>
          <button className='link' onClick={() => handleScroll("sobre-nos")}>Sobre nós</button>
          <button className='link' onClick={() => handleScroll("servicos")}>Serviços</button>
          <button className='link' onClick={() => handleScroll("tecnologias")}>Tecnologias</button>
        </div>
      </div>


      <div className="faixa_home" id='home'>
        <img src="assets/image/banner.png" alt="" />
        <div className='text'>
          <h1>Não deixe seu negócio <br /> parado!</h1>
          <h4>Crie seu web  site agora mesmo!</h4>
          <Link className='button-banner'>Solicite seu orçamento!</Link>
        </div>
      </div>


      <div className="faixa_sobre-nos" id='sobre-nos'>
        <h1>O que é a Symbol System?</h1>
        <div className="image-text">
        <img src="/assets/image/logo.png" alt="" />
          <p>A Symbol System é uma empresa dedicada ao desenvolvimento de websites que conectam inovação, design e tecnologia. Nosso foco é criar soluções digitais que atendam às necessidades únicas de cada cliente, sempre com um toque de criatividade e profissionalismo.
            Somos especialistas em transformar ideias em plataformas modernas, responsivas e otimizadas para oferecer a melhor experiência ao usuário. Seja para pequenas empresas ou grandes projetos, estamos aqui para ajudar você a construir uma presença online de destaque.</p>
        </div>
      </div>


      <div className="faixa_servicos" id='servicos'>
        <h1>Serviços</h1>
        <h3>Oferecemos soluções digitais criativas e eficientes para ajudar o seu negócio a  crescer online.</h3>
        <div className="cards">
          <div className="one-card">
            <img src="/assets/image/icon-code.png" alt="" />
            <h2>Desenvolvimento de site</h2>
            <p>Desenvolvemos sites e sistemas web completos, personalizados para atender às necessidades específicas do seu negócio. Sempre focados em usabilidade e desempenho.</p>
          </div>
          <div className="two-card">
            <img src="/assets/image/icon-responsive.png" alt="" />
            <h2>Aplicações responsivas</h2>
            <p>Criamos aplicações que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência consistente e agradável para os usuários.</p>
          </div>
          <div className="three-card">
            <img src="/assets/image/icon-suport.png" alt="" />
            <h2>Suporte Técnico</h2>
            <p>Oferecemos suporte contínuo e manutenção para garantir que seus sistemas estejam sempre atualizados e seguros.</p>
          </div>
        </div>
      </div>


      <div className="faixa_tecnologias" id='tecnologias'>
        <h1>Tecnologias utilizadas</h1>
        <div className="icons">
          <div className="firsts-icons">
            <img src="/assets/image/icon-react.png" alt="" />
            <img src="/assets/image/icon-github.png" alt="" />
            <img src="/assets/image/icon-figma.png" alt="" />
          </div>
          <div className="seconds-icons">
            <img src="/assets/image/icon-mysql.png" alt="" />
            <img src="/assets/image/icon-hostinger.png" alt="" />
            <img src="/assets/image/icon-node.png" alt="" />
          </div>
        </div>
      </div>


      <div className="baseboard">
        <img src="/assets/image/Copy icon.png" alt="" />
        <h4>2024 Symbol System. Todos os direitos reservados.</h4>
      </div>
    </div>
  );
}

