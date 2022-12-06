import React from 'react'
import './pay.css'

const Pay = () => {
    return (
        <>
            <div className='container4' >
                <div className='header1'>
                    <p>Meia</p>
                </div>
                <div className='content1'>
                    <p>R$18,00</p>
                    <select>
                        <option value="" disabled selected>Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div className='container4' >
                <div className='header1'>
                    <p>Inteira</p>
                </div>
                <div className='content1'>
                    <p>R$36,00</p>
                    <select>
                        <option value="" disabled selected>Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div className='container4' >
                <div className='header1'>
                    <p>Camarote</p>
                </div>
                <div className='content1'>
                    <p>R$60,00</p>
                    <select>
                        <option value="" disabled selected>Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div className='btn1'>
                <a href='/'>Comprar</a>
            </div>
        </>

    )
}

export default Pay