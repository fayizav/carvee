import React from 'react'
import aboutImage from "../assets/aboutImage.jpg"
import { founderslist } from "../helpers/founderslist"
import FounderItem from "../components/founderitem";
import { servicelist } from "../helpers/servicelist"
import ServiceItem from "../components/serviceitem";

import "../styles/about.css"

function about() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${aboutImage})` }}>

            </div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>Carve Architects, a distinguished force in the realm of architectural and design innovation, stands as a testament to the seamless fusion of artistry and functionality. With an unwavering commitment to transforming spaces into captivating experiences, Carve Architects leverages a rich tapestry of creativity, technical expertise, and a client-centric approach. Each project undertaken by Carve Architects is a bespoke journey, where the team meticulously crafts environments that not only reflect the unique aspirations of their clients but also push the boundaries of architectural excellence.a distinguished force in the realm of architectural and design innovation, stands as a testament to the seamless fusion of artistry and functionality. With an unwavering commitment to transforming spaces into captivating experiences, Carve Architects leverages a rich tapestry of creativity, technical expertise, and a client-centric approach. Each project undertaken by Carve Architects is a bespoke journey, where the team meticulously crafts environments that not only reflect the unique aspirations of their clients but also push the boundaries of architectural excellence</p>
            </div>
            <div className='services'>
                <div className='top'>
                    <h1>OUR SERVICES</h1>
                </div>
                <div className='bottom'>
                {servicelist.map((serviceitem,key)=>{
                    return<div>
                <ServiceItem key={key} image={serviceitem.image} name={serviceitem.name} description={serviceitem.description}/>
                </div>
                                })}
                </div>

            </div>
            <div className='lastBottom'>
                <h1>OUR FOUNDERS</h1>
                <div className='foundersList'>{founderslist.map((founderitem, key) => {
                    return <div key={key}>
                        <FounderItem image={founderitem.image} name={founderitem.name} position={founderitem.position} /></div >
                })}</div>


            </div>

        </div>
    )
}

export default about
