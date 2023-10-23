import style from '../../styles/Estiloso.module.css'
import Layout from '../../components/Layout'

export default function Estiloso () {
  return (
    <Layout>
      <div className={style.roxo}>
        <h1>Estilizando usando CSS módulos</h1>
      </div>
    </Layout>
  )
}