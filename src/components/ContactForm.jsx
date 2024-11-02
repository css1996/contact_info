import './contact.css';
import sunLogo from '../assets/sun.gif';
import ArrowIcon from '../assets/arrow_icon.png';
import {useState} from 'react';



const ContactForm = () => {

  const [result, setResult] = useState("");

    const handleSubmit = async(e) =>{
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "1e0233f5-e7d8-4aca-aa9c-1071148e7bdb" );

    const response = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if(data.success){
      setResult("Form Submitted Syccessfully");
      e.target.reset();
    } else{
       console.log("Error", data);
       setResult(data.message);  
    }
  };

  return (
    <div className="contact_container">
        <form className="left_container" onSubmit={handleSubmit}>
        <div className="contact_form_title">
            <h2>Contact Us</h2>
            <hr />
        </div>
            <input className="contact_inputs" type="text" name="name" placeholder='Enter Your Name'  />
            <input className="contact_inputs" type="email" name="email" placeholder='Enter Your Email' />
            <textarea className="message" name="message" placeholder='Enter Your Message'></textarea>
            <button type="submit">Submit
              <img src={ArrowIcon} alt="No Image" />
            </button>
        </form>
         <span>{result}</span>
        <div className="right_container">
            {/* <img src={sunLogo} alt="No Image" /> */}
            
        </div>
    </div>
  )
}

export default ContactForm