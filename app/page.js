'use client';

import { useState, useEffect } from 'react';
import { FaMercury } from 'react-icons/fa6';
import { GiPlanetConquest, GiBullseye, GiCalculator } from 'react-icons/gi';
import Image from 'next/image';

export default function Home() {
  const [vagasRestantes, setVagasRestantes] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const interval = setInterval(() => {
      setVagasRestantes(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <main className="main-container">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Conheça minhas estratégias que aumentaram minha</h1>
              <h1 style={{ color: 'var(--primary-color)' }}>"Sorte nas cartas"</h1>
              <div className="button-container" style={{ marginTop: '2rem' }}>
                <a 
                  href="https://checkout.perfectpay.com.br/pay/PPU38CPB8LR?" 
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garantir Minha Vaga
                </a>
                <div className="vagas-counter">
                  <span className="vagas-number">{vagasRestantes}</span>
                  <span className="vagas-text">{vagasRestantes === 1 ? 'vaga restante' : 'vagas restantes'}</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="clover">
                  <Image
                    src="/icon-symbol.png"
                    alt="Símbolo decorativo"
                    width={30}
                    height={30}
                    className="icon-symbol"
                  />
                </div>
              ))}
              <Image 
                src="/hero-image.png" 
                alt="Especialista em cartas"
                width={800}
                height={800}
                priority
                style={{
                  width: '115%',
                  height: '115%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '-2%',
                  left: '-7.5%',
                  zIndex: 2,
                  filter: 'drop-shadow(0 4px 20px rgba(191, 0, 255, 0.2))',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(191, 0, 255, 0.3) 0%, rgba(191, 0, 255, 0.05) 100%)',
                filter: 'blur(3px)',
                zIndex: 1
              }} />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <section className="hero-text-section">
          <div className="content-wrapper">
            <h1 className="title-highlight">
              <span className="card-symbol">♣</span>
              O que é Cartas da Sorte?
            </h1>
            
            <p className="description">
              São duas estratégias exclusivas que vou compartilhar apenas com quem me 
              acompanha no meu grupo de lives e quer acompanhar de perto os gatilhos 
              que uso para aumentar minha sorte no jogo.
            </p>
            
            <h2 className="subtitle">
              Você terá acesso:
            </h2>
          </div>
        </section>
        
        <div className="features">
          <div className="feature-card">
            <FaMercury className="feature-background-icon meteor" />
            <div className="feature-number">1</div>
            <h3><span className="white-text">Estratégia</span> Mercúrio</h3>
            <p>
              <span className="highlight">Descubra</span> o poder do gatilho mercúrio e{' '}
              <span className="highlight">revolucione</span> sua forma de análise!
            </p>
          </div>
          <div className="feature-card">
            <GiBullseye className="feature-background-icon target" />
            <div className="feature-number">2</div>
            <h3><span className="white-text">Estratégia</span> Tiro&nbsp;Seco</h3>
            <p>
              <span className="highlight">Domine</span> o gatilho secreto que uso para{' '}
              <span className="highlight">maximizar</span> as chances de empate!
            </p>
          </div>
          <div className="feature-card">
            <GiCalculator className="feature-background-icon calculator" />
            <div className="feature-number">3</div>
            <h3><span className="white-text">Gerencie sua</span> Sorte</h3>
            <p>
              <span className="highlight">Potencialize</span> seus resultados com minha calculadora{' '}
              <span className="highlight">exclusiva</span> de gerenciamento!
            </p>
          </div>
        </div>
        <div className="cta-section">
          <a 
            href="https://checkout.perfectpay.com.br/pay/PPU38CPB8LR?" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garantir Minha Vaga
          </a>
        </div>
        <section className="support-section">
          <div className="clock-container">
            <div className="clock">
              <div className="clock-hand"></div>
            </div>
          </div>
          <div className="support-content">
            <h2 className="support-title">Suporte 24 horas por dia,</h2>
            <h2 className="support-subtitle">7 dias por semana!</h2>
            <p className="support-description">
              Dentro do Cartas da Sorte, você terá suporte disponível 24h para tirar todas suas dúvidas!
            </p>
          </div>
        </section>
      </section>
      
      <div className="responsible-gaming">
        <span className="age-restriction">+18</span>
        <span className="gaming-message">JOGUE COM RESPONSABILIDADE</span>
      </div>
      
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-links">
            <span className="footer-link">Política de Privacidade</span>
            <span className="footer-separator">•</span>
            <span className="footer-link">Termos de Uso</span>
          </div>
          <div className="footer-copyright">
            <p> {new Date().getFullYear()} Cartas da Sorte. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
