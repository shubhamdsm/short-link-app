import { useState } from "react";
import copy from 'copy-to-clipboard'
export default function Main() {
  const [input, setInput] = useState("");
  const [link, setLink] = useState([]);
  const [loading,setLoading] = useState(false);
  const [copyButton, setCopyButton] = useState('COPY');
 



  const handleSubmit = async () => {
    try {
      setLoading(true)
      let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
      let json = await res.json();
      setLink((prevList) => [...prevList, json.result]);
     
      setLoading(false)
      setInput('')
    } catch (err) {
      console.log(err);
    }
  };
  
function handleCopy(item){
 
  setCopyButton('COPIED')
  copy(item.short_link)

}

  return (
    <main >
      <div className='main-wrapper container'>
      <label style={{color:'#B9708A', padding:'2rem'}}>Please add a link</label>
            <input
            type="text"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            required
            placeholder='Shorten a link here'
            />
          
            <button className='btn' id='shorten' onClick={handleSubmit}>Shorten it!</button>
      </div>
      <div className='container'>
       
      <ul className='list-group'>
      <div>
        {link.map((item) => (
         
          <li className='list-group-item'
           key={item.original_link}>
           <span>{item.original_link}</span>
           <a href ={item.short_link}style={{color:'#2BD1D1'}} className='link'>{item.short_link}</a>
           <button className='btn'style={{marginLeft:'4rem'}} onClick={() => handleCopy(item)}>{copyButton}</button>

          </li>
         
        ))}
        </div>
      </ul>
      <span style={{textAlign:"center"}}>{loading ? 'loading': ''}</span>
      </div>
        
     
    </main>
  );
}
