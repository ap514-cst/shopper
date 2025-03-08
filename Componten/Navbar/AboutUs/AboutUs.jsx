import './About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
const AboutUs = () => {
  return (
    <div className='continer-about'>
      <div className='text-about'>
        <h2>About us</h2>
        <div className='hr-div'>
          <hr />
        </div>
        <div className='main-about-text'>
          <div>
            <img width={400} src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/481076362_1392763808557842_2305513025308336905_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=IABDGQzGCQ4Q7kNvgE4J770&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=ATGUAyNJgTqQYGU3aB1j1FJ&oh=00_AYG7XEwg4xDFTrWICBjQtNPlvnvQefjjlNRd9BlyhxHO0Q&oe=67D0EF8B" alt="" />
          </div>
          <div className='about-text-div'>
            <h3>Hi I am Sam mojumder apo</h3>
            <h4>I am font-end developer.</h4>
            <div style={{ width: '500px' }}>
              <p>FontSpace is your home for designer-centered, legitimate, and clearly licensed free fonts. You can use our font generator to create fonts that are easy to copy and paste into your website, social media profiles, and more. All you have to do </p>
            </div>
            <button>More information</button>
          </div>
        </div>

      </div>
      <div style={{ padding: '7rem 0px' }}>
        <div><h2 style={{ textAlign: 'center', fontSize: '2.7rem' }}>Skills</h2></div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px' }}>
          <hr style={{ width: '80%', border: '1px solid grey' }} />
        </div>
      </div>
      <div className='main-skill-div'>
        <div className='continer-skills-div'>
          <div className='skill'>
            <h2>Html</h2>
            <span><FaHtml5 /></span><br></br>
            <button>click</button>
          </div>
          <div className='skill'>
            <h2>Css</h2>
            <span><FaCss3 /></span>
            <br></br>
            <button>click</button>
          </div>
          <div className='skill'>
            <h2>javaScript</h2>
            <span><TbBrandJavascript /></span>
            <br></br>
            <button>click</button>
          </div>
          <div className='skill'>
            <h2>React.js</h2>
            <span><FaReact />
            </span>
            <br></br>
            <button>click</button>
          </div>
          <div className='skill'>
            <h2>node.js</h2>
            <span><LiaNode /></span>
            <br></br>
            <button>click</button>
          </div>
          <div className='skill'>
            <h2>express.js</h2>
            <span><SiExpress /></span>
            <br></br>
            <button>click</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs
