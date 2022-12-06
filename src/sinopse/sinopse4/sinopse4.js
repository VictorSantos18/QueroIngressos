import React from 'react'
import NavBar from '../../navbar/navbar'
import Voltar from '../../assets/voltar.png'
import Orochi from '../../assets/orochi.png'
import Box from '../box/box'
import './sinopse4.css'


const Sinopse3 = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className='back'>
                    <a href="/"><img src={Voltar} alt="Voltar" /><h1>Informações do Show</h1></a>
                </div>
                <div className='container1'>
                    <div className='box1'>
                        <img src={Orochi} alt="Orochi" />
                    </div>
                    <div className='box-text1'>
                        <div className='title1'>
                            <h1>Orochi</h1>
                        </div>
                        <div className='text'>
                            <p>Data: 14/11/2022</p>
                            <p>Cidade: Caieiras - SP</p>
                            <p> Local: Hoower Show House</p>
                            <p> Abertura: 22:00 Início: 22:00</p>
                            <p>Classificação: 16 Anos</p>
                        </div>
                    </div>
                    <div className='box-text'>
                        <div className='title1'>
                            <h1>Informações do Show</h1>
                        </div>
                        <div className='text2'>
                            <p>Taxa Administrativa: presente nas compras realizadas no site QueroIngresso.com, é o valor repassado ao cliente no ato da compra paga em cartão de crédito ou Pix (Pagseguro e MercadoPago). O cliente ainda pode dividir, pelo Pagseguro sua compra em parcelas o que não é pratica para compra de ingressos, para shows e eventos, nos pontos de venda. Nos canais presenciais para pagamento em dinheiro não existe repasse de taxa administrativa. Para as compras realizadas em nosso site, o cliente identifica o valor da taxa antes de selecionar a opção de pagamento.</p>
                        </div>
                    </div>
                </div>
                <div className='container2'>
                    <div className='title2'>
                        <h1>Programação</h1>
                    </div>
                    <Box />
                </div>
            </main>
        </>
    )
}

export default Sinopse3