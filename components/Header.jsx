import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <img src='./src/images/Passport.JPG' className='me'/>
            <h1>Paul Kamau</h1>
            <p className='title'>Frontend Developer</p>
            <a href='https://github.com/MurisKamaa'>Paul on GitHub</a>
            <div className='contact'>
                <button className='email'><img src='./src/images/Mail.png'/>E-mail</button>
                <button className='linkedin'><img src='./src/images/link.png'/>Linked-in</button>
            </div>
        </div>
    )
}