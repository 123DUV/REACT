import React from 'react'
import "./header.css"
import fotopersonal from "./fotopersonal.jpg"
import {Smartphone,LocationOn,EmailOutlined,AlternateEmailSharp} from '@mui/icons-material';


export default function Header(){

    return(
        <div className="header">
            <div className="headerPhoto">
                <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
            </div>
            <div className="headerNombres">
                <h1>Duvan Bedoya B</h1>
                <h1>Tecnologo en Analisis Y Desarrollo de Software</h1>
                
            </div>
            <div className='headerContacto'>
                <ul className='contactList'>
                    <li className='contactListItem'><p><Smartphone/></p><p>3724372738</p></li>
                    <li className='contactListItem'><p><LocationOn/></p><p>Pereira / Risaralda - Colombia</p></li>
                    <li className='contactListItem'><p><EmailOutlined/></p><p>mendezban416@gmail.com</p></li>
                    <li className='contactListItem'><p><AlternateEmailSharp/></p><p>mendezban416@gmail.com</p></li>
                </ul>

            </div>
            </div>
    )
}