import styles from "./style.module.css";
import fundo from "../../../assets/fundo.png";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Fundo isolado e opaco */}
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${fundo})`,
        }}
      />

      <div className={styles.overlay}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Últimas solicitações abertas</h3>
            <ul>
              <li>
                <span className={`${styles.status} ${styles.aprovado}`}></span>
                Projetor para a sala SS68I - Audiovisual
              </li>
              <li>
                <span className={`${styles.status} ${styles.recusado}`}></span>
                Desenvolvimento de banner do projeto integrador para a turma da manhã
              </li>
              <li>
                <span className={`${styles.status} ${styles.aprovado}`}></span>
                Projetor para a sala SS68I - Audiovisual
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Solicitações pendentes</h3>
            <ul>
              <li>
                <span className={`${styles.status} ${styles.pendente}`}></span>
                Acompanhamento do marketing em evento da turma - TAD2424N
              </li>
              <li>
                <span className={`${styles.status} ${styles.pendente}`}></span>
                Panfletos para propaganda de feira da sala - TAD2424N
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.legend}>
          <div>
            <span className={`${styles.status} ${styles.aprovado}`}></span> Aprovadas
          </div>
          <div>
            <span className={`${styles.status} ${styles.pendente}`}></span> Pendentes
          </div>
          <div>
            <span className={`${styles.status} ${styles.recusado}`}></span> Recusadas
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
