import { useState } from "react";
export default function Main() {
  const [input, setInput] = useState("");
  const [link, setLink] = useState([]);
  const [loading,setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
      let json = await res.json();
      setLink((prevList) => [...prevList, json.result]);
      setLoading(true)
    } catch (err) {
      console.log(err);
    }
  };

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
        {link.map((item) => (
          <li className='list-group-item'
           key={item.original_link}>
           <span>{item.original_link}</span>
           <span style={{color:'#2BD1D1'}} className='link'>{item.short_link}</span>
          </li>
        ))}
      </ul>
      </div>
        
     
    </main>
  );
}
