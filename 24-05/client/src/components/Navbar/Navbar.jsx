import React from 'react'
import TemplSt from '../Navbar/navbar.module.css'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;

export default function Navbar() {
    return (
        <>
            <section className={TemplSt.navbar_sec}>
                <div className={TemplSt.navbar}>
                    <ul className={TemplSt.navbar_ul}>
                        <li > <Link to='/'>Home</Link>  </li>
                        <li> <Link to='/about'>About</Link></li>
                        <li><Link to='/immigration'>Immigration</Link></li>
                        <li><Link to='/course'>Course</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/country'>Country</Link></li>
                        <li><Link to='/elements'>Elements</Link></li>
                    </ul>
                </div>
            </section>
            <div className={TemplSt.main_sec}>
                <div className={TemplSt.main_sec_desc}>
                    <div>
                        <h6>Procces Visa Within Hours</h6>
                        <h1>
                            Immigration &<br />
                            Visa  Consultation

                        </h1>
                        <button>Book Consultancy</button>
                    </div>

                </div>
                <div><img src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp" alt="" /></div>
            </div>

            <div className={TemplSt.start}>
                <h6>
                    Start <br /> <span> planning </span> your <br /> New <span> Dream</span>
                </h6>
                <p style={{ width: "25%" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, debitis eius qui quae nemo rerum omnis non quos quibusdam culpa?
                </p>
                <button>Request Free Consultan</button>
            </div>
            <div className="container">
                <div className={TemplSt.Requirements}>
                    <h3>  Requirements to be Immigrants</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
                </div>
                <div className={TemplSt.Card}>
                <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" />}

  >
    <button style={{backgroundColor:"black",color:"white",padding:"7px"}}>United States</button>
    <Meta title="Addication When Gambling" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, delectus." />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/immigration/img/s2.jpg" />}
  >
      <button style={{backgroundColor:"black",color:"white",padding:"7px"}}>United States</button>
    <Meta title="Addication When Gambling" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, delectus." />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/immigration/img/s3.jpg" />}
  >
      <button style={{backgroundColor:"black",color:"white",padding:"7px"}}>United States</button>
    <Meta title="Addication When Gambling " description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, delectus." />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/immigration/img/s4.jpg" />}
  >
      <button style={{backgroundColor:"black",color:"white",padding:"7px"}}>United States</button>
    <Meta title="Addication When Gambling" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, delectus." />
  </Card>
                </div>
               
            </div>
            <div className={TemplSt.Connected}>
                <div className={TemplSt.Connected_desc}>
                <h1>Globally Connected <br /> by Large Network</h1>
                <h6>We are here to listen from you deliver exellence</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed do eiusmod tempor.</p>
                <button style={{color:'white',backgroundColor:"red",padding:"10px"}}>Wiew Details</button>
                </div>

            </div>
        </>

    )
}
