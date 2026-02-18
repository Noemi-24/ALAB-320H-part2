import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article from './components/Article.jsx'
import articles from './data/articles.js' 
import Footer from './components/Footer.jsx'

function App() {
  return(
    <>
      <header>
        <Header/>
        <Nav/>
      </header>

      <main>
        {articles.map(article => (
          <Article key={article.id} {...article} />
        ))}
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App
