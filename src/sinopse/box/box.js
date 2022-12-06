import React, { useState } from 'react'
import Pay from '../pay/pay';
import './box.css'

const Box = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className='container3' >
                <div className='header'>
                    <p>Nome do lugar</p>
                </div>
                <div className='content'>
                    <p>Dia 11</p>
                    <button
                        onClick={toggleModal}
                        className="btn-modal"
                    >Ingressos</button>
                </div>
            </div>
            <div className='container3' >
                <div className='header'>
                    <p>Nome do lugar</p>
                </div>
                <div className='content'>
                    <p>Dia 12</p>
                    <button
                        onClick={toggleModal}
                        className="btn-modal"
                    >Ingressos</button>
                </div>
            </div>

            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <div className='pay'>
                            <h1>Compre seu ingresso</h1>
                            <Pay />
                        </div>
                        <button className="close-modal" onClick={toggleModal}>X</button>
                    </div>

                </div>
            )}


        </>
    )
}

export default Box