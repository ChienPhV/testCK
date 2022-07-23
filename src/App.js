import logo from './logo.svg';
import './App.css';



function handleSubmit(props) {

  const form = document.getElementById("form");
  const linkInput = document.getElementById("link");
  const parent = document.getElementById("parent");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const originalLink = linkInput.value;
      const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        let link = document.createElement("li");
        link.className = "output"
        link.innerHTML = `<label>Link generated:</label></br><a href="${data.result.short_link}" target="_blank">${data.result.short_link} </a></br><a href="${data.result.short_link2}" target="_blank">${data.result.short_link2} </a></br><a href="${data.result.short_link}" target="_blank">${data.result.short_link} </a>`;
        parent.prepend (link);      
      } catch (e) {
        console.error(e);
      }
    });
  }

  function App() {
    
    return (
      <div className="App">
        <div className="wrapper">
          <h1>The <span className='span'>privacy-friendly</span> URL Shortener</h1>
          <form id="form">
            <h2 className='h2'>Link Shortener</h2>
            <label>Enter a link:</label>
            <input id="link" type="text" placeholder="Example.com" />
            <input type="submit" value="&#10145;" onClick={handleSubmit} />
            <label>Short domain:</label>
            <button type="submit" className='btt' onClick={handleSubmit}>Shrtco.de</button>
            <button type="submit" className='btt' onClick={handleSubmit}>9qr.de</button>
            <button type="submit" className='btt' onClick={handleSubmit}>shiny.link</button>
            
          </form>
          <ul id="parent" className="shortLinks">
          </ul>
        </div>
      </div>
    );
  }

  export default App;
