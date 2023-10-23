import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Header />
      <Link href="/estiloso">
        Estiloso
      </Link>
    </div>
  )
}