import "./Contact.css";
import Header from "../../Components/Header";
import pic from "../../Images/jallow.jpeg"
import { Link } from "react-router-dom";
import Pulse from 'react-reveal/Pulse';
import Wobble from 'react-reveal/Wobble';
import MyPdf from "../../Files/amj.pdf";

function Contact() {

    return(
<div className="layout"> 
        <Header/>
        <div className="row">
<div className="col-3 col-s-3 menu">
<ul>
<a style={{ textDecoration: 'none' }} href={MyPdf} download="amj.pdf"> <li> Download CV </li></a>
<Link style={{ textDecoration: 'none' }} to="/portfolio"><li> Portfolio </li></Link>
<Link style={{ textDecoration: 'none' }} to="/hobbies"><li> Hobbies </li></Link>
<Link style={{ textDecoration: 'none' }} to="/contact"><li> Contact Me </li></Link>
</ul>
</div>

<div className="col-6 col-s-9">
<Pulse> <h1> CONTACT ME </h1> </Pulse>
<p>
    My name is Mohammed Adam and I am a tech enthusiast.
I have always been fascinated and excited about the field of software lifecycle I and would appreciate the opportunity to bring my 
experience and creativity to your growing team. I have excellent communication and servant 
leadership skills. I have a strong understanding of technical processes within software development
and lifecycle. I stay up-to-speed with innovative technologies and test the promising ones to make 
sure I do not miss game-changing opportunities to boost productivity and stay relevant.

  </p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam hendrerit nisi sed sollicitudin pellentesque. Nunc 
            posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique 
            nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec 
            a dui et dui fringilla consectetur id nec massa. Aliquam erat 
            volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
            mattis at dui ac, convallis semper risus. In adipiscing ultrices 
            tellus, in suscipit massa vehicula eu.”
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam hendrerit nisi sed sollicitudin pellentesque. Nunc 
            posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique 
            nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec 
            a dui et dui fringilla consectetur id nec massa. Aliquam erat 
            volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
            mattis at dui ac, convallis semper risus. In adipiscing ultrices 
            tellus, in suscipit massa vehicula eu.”
</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam hendrerit nisi sed sollicitudin pellentesque. Nunc 
            posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique 
            nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec 
            a dui et dui fringilla consectetur id nec massa. Aliquam erat 
            volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
            mattis at dui ac, convallis semper risus. In adipiscing ultrices 
            tellus, in suscipit massa vehicula eu.”
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam hendrerit nisi sed sollicitudin pellentesque. Nunc 
            posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique 
            nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec 
            a dui et dui fringilla consectetur id nec massa. Aliquam erat 
            volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
            mattis at dui ac, convallis semper risus. In adipiscing ultrices 
            tellus, in suscipit massa vehicula eu.”
</p>

</div>

<div className="col-3 col-s-12">
<div className="aside">
<h2>JALLOW</h2>
<Wobble> <img id="img" src={pic} alt="amjp" /> </Wobble> 
</div>
</div>
</div>

<div className="footer">
<p>Resize the browser window to see how the content respond to the resizing.</p>
</div>
</div>
    );
}

export default Contact;