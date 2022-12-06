import React from "react"
import NavBar from "../navbar/navbar"
import Djonga from '../assets/djonga.jpg'
import Sidoka from '../assets/sidoka.png'
import Ret from '../assets/ret.jpg'
import Orochi from '../assets/orochi.png'
import "./home.css"

const Home = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="container">
                    <div className="title">
                        <h1>Shows em Cartazes</h1>
                    </div>
                    <div className="box-container">
                        <div className="content">
                            <div className="box">
                                <img src={Ret} alt='ret' />
                            </div>
                            <div className="btn">
                                <a href='/FilipeRet'>Sinópse</a>
                            </div>
                        </div>
                        <div className="content">
                            <div className="box">
                                <img src={Djonga} alt='djonga' />
                            </div>
                            <div className="btn">
                                <a href='/Djonga'>Sinópse</a>
                            </div>
                        </div>
                        <div className="content">
                            <div className="box">
                                <img src={Sidoka} alt='sidoka' />
                            </div>
                            <div className="btn">
                                <a href='/Sidoka'>Sinópse</a>
                            </div>
                        </div>
                        <div className="content">
                            <div className="box">
                                <img src={Orochi} alt='orochi' />
                            </div>
                            <div className="btn">
                                <a href='/Orochi'>Sinópse</a>
                            </div>

                        </div>
                    </div>
                    <div className="title">
                        <h1>Shows</h1>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Home