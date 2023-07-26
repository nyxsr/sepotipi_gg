import Sidebar from './components/sidebar'
import MainContents from './components/main'

function index() {
  return (
    <section className="main">
        <Sidebar/>
        <MainContents/>
      </section>
  )
}

export default index