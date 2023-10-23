import Link from 'next/link'

const Layout = props => {
  return (
    <div>
      <Link href="/">Voltar</Link>
      {props.children}
    </div>
  )
}

export default Layout