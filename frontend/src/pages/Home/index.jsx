import styles from './style.module.css'
import fundo from '../../../assets/fundo.png' // renomeie a imagem que enviou para 'fundo.png' e coloque na pasta assets

const Home = () => {
  return (
    <div className={styles.container}>

      <main
        className={styles.content}
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div className={styles.overlay}>
          <h1>Bem-vindo à Instituição</h1>
          <p>Selecione uma das opções ao lado para continuar.</p>
        </div>
      </main>
    </div>
  )
}

export default Home




