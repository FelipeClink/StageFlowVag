import styles from './style.module.css'
import logo from '../../../assets/logo.png'
import perfil from '../../../assets/perfil.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.topLogo}>
        <img
          src={logo}
          alt="Logo Instituição"
          className={styles.institutionLogo}
        />
      </div>

      <ul className={styles.menu}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/audiovisual">  Audioisual</Link></li>
        <li><Link to="/cerimonial">Cerimonial</Link></li>
        <li><Link to="/pedido/cadastro">Pedido Cadastro</Link></li>
        <li><Link to="/Marketing">Marketing</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/solicitacoes">Solicitações</Link></li>
      </ul>

      <div className={styles.bottomSection}>
        <div className={styles.profile}>
          <img
            src={perfil}
            alt="Perfil do Usuário"
            className={styles.profileImg}
          />
          <h3 className={styles.username}>Lázaro</h3>
        </div>

        <button className={styles.logoutBtn}>Sair</button>
      </div>
    </nav>
  );
};

export default NavBar;
