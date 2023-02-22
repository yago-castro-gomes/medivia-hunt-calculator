import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Calculator.css'
import Uhealing from '../img/uh.png'
import Hmissile from '../img/hmm.png'
import bpEmblem from '../img/Emblembp3.gif'
import gfbRune from '../img/gfb.png'
import sdRune from '../img/sd.png'
import exploRune from '../img/explo.png'
import explosiveRune from '../img/explosive.png'
import logoM from '../img/logo_64_2.png'
import coffee from '../img/coffe.svg'
import ReactModal from 'react-modal';
import modal from '../img/modal.png'


export default class Calculator extends Component {
    state = {
        uh: 0,
        hmm: 0,
        sd: 0,
        gfb: 0,
        explo: 0,
        explosive: 0,
        charparticipate1: false,
        uhwaste1: 0,
        hmmwaste1: 0,
        sdwaste1: 0,
        gfbwaste1: 0,
        explowaste1: 0,
        explosivewaste1: 0,
        wastechar1: 0,
        totalhunt1: 0,
        charparticipate2: false,
        uhwaste2: 0,
        hmmwaste2: 0,
        sdwaste2: 0,
        gfbwaste2: 0,
        explowaste2: 0,
        explosivewaste2: 0,
        wastechar2: 0,
        totalhunt2: 0,
        charparticipate3: false,
        uhwaste3: 0,
        hmmwaste3: 0,
        sdwaste3: 0,
        gfbwaste3: 0,
        explowaste3: 0,
        explosivewaste3: 0,
        wastechar3: 0,
        totalhunt3: 0,
        charparticipate4: false,
        uhwaste4: 0,
        hmmwaste4: 0,
        sdwaste4: 0,
        gfbwaste4: 0,
        explowaste4: 0,
        explosivewaste4: 0,
        wastechar4: 0,
        totalhunt4: 0,
        pt: 0,
        loot: 0,
        resultchar1: 0,
        resultchar2: 0,
        resultchar3: 0,
        resultchar4: 0,
        resultpt: false,
        showresult: false,
        addpartice2: false,
        addpartice3: false,
        addpartice4: false,
        modalOpen: true,
        modalChar: false,
        checkExplosive: false,

    }

    onInputChange = (event) => {
        const { name, type, checked } = event.target;
        const value = type === 'checkbox' ? checked : event.target.value;
        this.setState({
            [name]: value,
        });
    };


    calcWaste1 = () => {
        const {
            uh,
            hmm,
            gfb,
            sd,
            explo,
            explosive,
            uhwaste1,
            hmmwaste1,
            gfbwaste1,
            sdwaste1,
            explowaste1,
            explosivewaste1,
        } = this.state;
        const sumAll = (uhwaste1 * uh) + (hmmwaste1 * hmm) + (gfbwaste1 * gfb) + (sdwaste1 * sd) + (explowaste1 * explo) + (explosive / 2000 * explosivewaste1);
        this.setState({
            wastechar1: sumAll,
            pt: 1,
        })
    }
    calcWaste2 = () => {
        const {
            uh,
            hmm,
            gfb,
            sd,
            explo,
            explosive,
            uhwaste2,
            hmmwaste2,
            gfbwaste2,
            sdwaste2,
            explowaste2,
            explosivewaste2,
        } = this.state;
        const sumAll = (uhwaste2 * uh) + (hmmwaste2 * hmm) + (gfbwaste2 * gfb) + (sdwaste2 * sd) + (explowaste2 * explo) + (explosive / 2000 * explosivewaste2);
        this.setState({
            wastechar2: sumAll,
            pt: 2,
            resultpt: true,
        })
    }
    calcWaste3 = () => {
        const {
            uh,
            hmm,
            gfb,
            sd,
            explo,
            explosive,
            uhwaste3,
            hmmwaste3,
            gfbwaste3,
            sdwaste3,
            explowaste3,
            explosivewaste3,
        } = this.state;
        const sumAll = (uhwaste3 * uh) + (hmmwaste3 * hmm) + (gfbwaste3 * gfb) + (sdwaste3 * sd) + (explowaste3 * explo) + (explosive / 2000 * explosivewaste3);
        this.setState({
            wastechar3: sumAll,
            pt: 3,
        })
    }

    calcWaste4 = () => {
        const {
            uh,
            hmm,
            gfb,
            sd,
            explo,
            explosive,
            uhwaste4,
            hmmwaste4,
            gfbwaste4,
            sdwaste4,
            explowaste4,
            explosivewaste4,
        } = this.state;
        const sumAll = (uhwaste4 * uh) + (hmmwaste4 * hmm) + (gfbwaste4 * gfb) + (sdwaste4 * sd) + (explowaste4 * explo) + (explosive / 2000 * explosivewaste4);
        this.setState({
            wastechar4: sumAll,
            pt: 4,
        })
    }

    calcLoot1 = () => {
        const { loot, wastechar1, wastechar2, wastechar3, wastechar4, pt } = this.state;

        if (wastechar1 <= 1) {
            alert('You need generate Waste.')
        }

        const calc1 = loot - (wastechar1 + wastechar2 + wastechar3 + wastechar4);
        const calctot1 = calc1 / pt + wastechar1;
        const wasteOrProfit1 = calctot1 - wastechar1;
        this.setState({
            resultchar1: Math.floor(calctot1),
            totalhunt1: Math.floor(wasteOrProfit1 * pt),
        })
        if (pt >= 1) {
            this.setState({
                charparticipate1: true,
                resultpt: true,
            })
        }
        const calctot2 = calc1 / pt + wastechar2;
        const wasteOrProfit2 = calctot2 - wastechar2;
        this.setState({
            resultchar2: Math.floor(calctot2),
            totalhunt2: wasteOrProfit2,
        })
        if (pt > 1) {
            this.setState({
                charparticipate2: true,
            })
        }
        const calctot3 = calc1 / pt + wastechar3;
        const wasteOrProfit3 = calctot3 - wastechar3;
        this.setState({
            resultchar3: Math.floor(calctot3),
            totalhunt3: wasteOrProfit3,
        })
        if (pt > 2) {
            this.setState({
                charparticipate3: true,
            })
        }
        const calctot4 = calc1 / pt + wastechar4;
        const wasteOrProfit4 = calctot4 - wastechar4;
        this.setState({
            resultchar4: Math.floor(calctot4),
            totalhunt4: wasteOrProfit4,
        })
        if (pt > 3) {
            this.setState({
                charparticipate4: true,
            })
        }
        this.setState({
            showresult: true,
        })
    }



    render() {
        const { wastechar1, wastechar2, wastechar3, wastechar4, resultchar1, resultchar2, resultchar3, resultchar4, totalhunt1, charparticipate1, charparticipate2, charparticipate3, charparticipate4, resultpt, showresult, modalOpen, modalChar, checkExplosive } = this.state;
        return (
            <>
                <div>
                    <ReactModal 
                    isOpen={modalOpen} 
                    style={{ content: { width: '55%', height: '70%', margin: 'auto', } }}
                    ariaHideApp={false}
                    >
                        <button className='btn-modal' onClick={() => this.setState({
                            modalOpen: false,
                        })}>
                            X
                        </button>
                        <img src={modal} alt='tuto' id='img-modal' />
                    </ReactModal>
                </div>
                <header id='head'>
                    <div>
                        <img src={logoM} alt="" width='23px' />
                        <h2>Medivia Hunt Calculator</h2>
                    </div>
                </header>
                <div id='subhead'>
                    <img src={bpEmblem} alt="" id='bpgif' />
                    <h3>Price Backpack</h3>
                </div>
                <div id='bpContent'>
                    <div id='priceBp'>
                        <div id='bpUh'>
                            <img src={Uhealing} alt="" width='40px' className='imgrunes' />
                            <label>
                                <input
                                    type='number'
                                    onChange={this.onInputChange}
                                    name='uh'
                                    placeholder='UH'
                                    className="form-control form-control-sm"
                                    id="exampleFormControlInput1"
                                >
                                </input>
                            </label>
                        </div>
                        <div id='bpHmm' className="mb-3">
                            <img src={Hmissile} alt="" width='40px' className='imgrunes' />
                            <label>
                                <input
                                    type='number'
                                    onChange={this.onInputChange}
                                    name='hmm'
                                    placeholder='HMM'
                                    className="form-control form-control-sm"
                                    id="exampleFormControlInput1"
                                >

                                </input>
                            </label>
                        </div>
                        <div id='bpGfb'>
                            <img src={gfbRune} alt="" width='40px' className='imgrunes' />
                            <label>
                                <input
                                    type='number'
                                    onChange={this.onInputChange}
                                    name='gfb'
                                    placeholder='GFB'
                                    className="form-control form-control-sm"
                                    id="exampleFormControlInput1"
                                >

                                </input>
                            </label>
                        </div>
                        <div id='bpSd'>
                            <img src={sdRune} alt="" width='40px' className='imgrunes' />
                            <label>
                                <input
                                    type='number'
                                    onChange={this.onInputChange}
                                    name='sd'
                                    placeholder='SD'
                                    className="form-control form-control-sm"
                                    id="exampleFormControlInput1"
                                >

                                </input>
                            </label>
                        </div>
                        <div id='bpExplo'>
                            <img src={exploRune} alt="" width='40px' className='imgrunes' />
                            <label>
                                <input
                                    type='number'
                                    onChange={this.onInputChange}
                                    name='explo'
                                    placeholder='EXPLO'
                                    className="form-control form-control-sm"
                                    id="exampleFormControlInput1"
                                >

                                </input>
                            </label>
                        </div>
                        <div id='bpExplosive'>
                            <img src={explosiveRune} alt="" width='40px' className='imgrunes' />
                            <label>
                                <input
                                    type='number'
                                    onChange={this.onInputChange}
                                    name='explosive'
                                    placeholder='RUNE'
                                    className="form-control form-control-sm"
                                    id="exampleFormControlInput1"
                                >

                                </input>
                            </label>
                        </div>
                    </div>
                </div>
                {!showresult ? (
                    <div>
                        <div className='chartitle'>
                            <h3>Waste <span className='wasteColor'>(in bps)</span></h3>
                        </div>
                        <div id='characterContent'>

                            <div className='char'>
                                <div className='chartitle'>
                                    <h5>Char 1  waste <span className='wasteColor'>{wastechar1}</span></h5>
                                </div>
                                <div className='runes'>
                                    UH:<input type='number' onChange={this.onInputChange} name='uhwaste1' />
                                    HMM:<input type='number' onChange={this.onInputChange} name='hmmwaste1' />
                                    GFB:<input type='number' onChange={this.onInputChange} name='gfbwaste1' />
                                    EXPLO:<input type='number' onChange={this.onInputChange} name='explowaste1' />
                                    SD:<input type='number' onChange={this.onInputChange} name='sdwaste1' />
                                    EXPLOSIVE:<input type='number' onChange={this.onInputChange}
                                        onClick={() => this.setState({
                                            checkExplosive: true,
                                        })}
                                        onBlur={() => this.setState({
                                            checkExplosive: false,
                                        })}
                                        name='explosivewaste1' />
                                </div>
                                <div className='chartitle'>
                                    <button onClick={this.calcWaste1}>Generate</button>
                                </div>
                            </div>
                            <div className='char'>
                                <div className='chartitle'>
                                    <h5>Char 2 waste: <span className='wasteColor'>{wastechar2}</span></h5>
                                </div>
                                <div className='runes'>
                                    UH:<input type='number' onChange={this.onInputChange} name='uhwaste2' />
                                    HMM:<input type='number' onChange={this.onInputChange} name='hmmwaste2' />
                                    GFB:<input type='number' onChange={this.onInputChange} name='gfbwaste2' />
                                    EXPLO:<input type='number' onChange={this.onInputChange} name='explowaste2' />
                                    SD:<input type='number' onChange={this.onInputChange} name='sdwaste2' />
                                    EXPLOSIVE:<input type='number' onChange={this.onInputChange}
                                        onClick={() => this.setState({
                                            checkExplosive: true,
                                        })}
                                        onBlur={() => this.setState({
                                            checkExplosive: false,
                                        })}
                                        name='explosivewaste2' />
                                </div>
                                <div className='chartitle'>
                                    <button onClick={this.calcWaste2}>Generate</button>
                                </div>
                            </div>


                            <div className='char'>
                                <div className='chartitle'>
                                    <h5>Char 3 waste: <span className='wasteColor'>{wastechar3}</span></h5>
                                </div>
                                <div className='runes'>
                                    UH:<input type='number' onChange={this.onInputChange} name='uhwaste3' />
                                    HMM:<input type='number' onChange={this.onInputChange} name='hmmwaste3' />
                                    GFB:<input type='number' onChange={this.onInputChange} name='gfbwaste3' />
                                    EXPLO:<input type='number' onChange={this.onInputChange} name='explowaste3' />
                                    SD:<input type='number' onChange={this.onInputChange} name='sdwaste3' />
                                    EXPLOSIVE:<input type='number' onChange={this.onInputChange}
                                        onClick={() => this.setState({
                                            checkExplosive: true,
                                        })}
                                        onBlur={() => this.setState({
                                            checkExplosive: false,
                                        })}
                                        name='explosivewaste3' />
                                </div>
                                <div className='chartitle'>
                                    <button onClick={this.calcWaste3}>Generate</button>
                                </div>
                            </div>

                            <div className='char'>
                                <div className='chartitle'>
                                    <h5>Char 4 waste: <span className='wasteColor'>{wastechar4}</span></h5>
                                </div>
                                <div className='runes'>
                                    UH:<input type='number' onChange={this.onInputChange} name='uhwaste4' />
                                    HMM:<input type='number' onChange={this.onInputChange} name='hmmwaste4' />
                                    GFB:<input type='number' onChange={this.onInputChange} name='gfbwaste4' />
                                    EXPLO:<input type='number' onChange={this.onInputChange} name='explowaste4' />
                                    SD:<input type='number' onChange={this.onInputChange} name='sdwaste4' />
                                    EXPLOSIVE:<input type='number' onChange={this.onInputChange}
                                        onFocus={() => this.setState({
                                            checkExplosive: true,
                                        })}
                                        onBlur={() => this.setState({
                                            checkExplosive: false,
                                        })}
                                        name='explosivewaste4' />
                                </div>
                                <div className='chartitle'>
                                    <button onClick={this.calcWaste4}>Generate</button>
                                </div>
                            </div>
                        </div>
                        {checkExplosive ? (
                            <p id='type-rune'>Type the number of runes (example: 1300) - ONLY FOR EXPLOSIVE RUNES</p>
                        ) : ' '}
                        <div id='loot-container'>
                            <h3>Loot total</h3>
                            <div>
                                <input type='number' onChange={this.onInputChange} name='loot' />
                                <div>
                                    <button onClick={this.calcLoot1}>Calculate</button>
                                </div>
                            </div>
                        </div>
                    </div>) : ' '}
                {showresult ? (
                    <div>
                        <div className='loot-result'>
                            <div>
                                <div>
                                    <h4> Result: </h4>
                                    {charparticipate1 ? (
                                        <>
                                            <div> Char 1: {resultchar1} </div>
                                        </>
                                    ) : ''}

                                </div>
                                <div>
                                    {charparticipate2 ? (
                                        <>
                                            <div> Char 2: {resultchar2} </div>
                                        </>
                                    ) : ''}

                                </div>
                                <div>
                                    {charparticipate3 ? (
                                        <>
                                            <div> Char 3: {resultchar3} </div>
                                        </>
                                    ) : ''}

                                </div>
                                <div>
                                    {charparticipate4 ? (
                                        <>
                                            <div> Char 4: {resultchar4} </div>

                                        </>
                                    ) : ''}
                                </div>
                                {showresult}
                                <div>
                                    {resultpt ? <p>
                                        In this hunt, PT made a total of {' '}
                                        <span style={{ color: totalhunt1 < 0 ? 'red' : 'green' }}>
                                            {totalhunt1}
                                        </span></p> : ''}
                                </div>
                                <div>
                                    Press f5 for use again.
                                </div>
                            </div>
                        </div>
                    </div>) : ' '}
                <footer>
                    <div className='footer-container'>
                        <div id='buy-me'>
                            <img src={coffee} alt='coffedrink' width='20px' />
                            Buy me a coffee
                        </div>
                        <div className='link-donation'>
                        <div>
                            <button onClick={() => this.setState({
                                    modalChar: true,
                                })}>On Medivia</button>
                        </div>
                        <div>
                            <a href="https://www.paypal.com/donate/?hosted_button_id=6L32EWGXL4KGA">On Paypal</a>
                        </div>
                        </div>
                    </div>
                </footer>
                <div>
                    <ReactModal isOpen={modalChar} style={{ content: { width: '300px', height: '200px' } }}>
                        <button className='btn-modal-char' onClick={() => this.setState({
                            modalChar: false,
                        })}>
                            X
                        </button>
                        <div>
                            <p>Pendulum: Jinx Reborn</p>
                            <p>Progeny: Ed Medroso</p>
                            <p>Eternum: Biscoito de Zeronove</p>
                        </div>
                    </ReactModal>
                </div>
            </>

        )
    }
}
