import React, { Component } from 'react'
import tokenLogo from '../token-logo.png'
import ethLogo from '../eth-logo.png'

class TradeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            output: '0'
        }
    }

    componentWillReceiveProps(props) {
        const { reset } = this.props
        if (props.reset !== reset) {
            // Reinit the state of the form when reset prop changes
            this.setState({ input: '', output: '0' })
        }
    }

    isBuyState = () => {
        return this.props.currentForm === 'buy'
    }

    getInputBalance = () => {
        if (this.isBuyState()) {
            return window.web3.utils.fromWei(this.props.ethBalance, 'Ether')
        } else {
            return window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')
        }
    }

    getOutputBalance = () => {
        if (this.isBuyState()) {
            return window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')
        } else {
            return window.web3.utils.fromWei(this.props.ethBalance, 'Ether')
        }
    }

    swap = () => {
        let amount = this.state.input.toString()
        amount = window.web3.utils.toWei(amount, 'Ether')
        if (this.isBuyState()) {
            this.props.buyTokens(amount)
        } else {
            this.props.sellTokens(amount)
        }
    }

    render() {
        return (
            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                this.swap()
            }}>

                <div>
                    <label className="float-left"><b>Input</b></label>
                    <span className="float-right text-muted">
                        Balance: {this.getInputBalance()}
                    </span>
                </div>

                <div className="input-group mb-4">
                    <input
                        type="number"
                        onChange={(event) => {
                            if (this.isBuyState()) {
                                const etherAmount = event.target.value
                                this.setState({
                                    input: event.target.value,
                                    output: etherAmount * 100
                                })
                            } else {
                                const tokenAmount = event.target.value
                                this.setState({
                                    input: event.target.value,
                                    output: tokenAmount / 100
                                })
                            }
                        }}
                        value={this.state.input}
                        className="form-control form-control-lg"
                        placeholder="0"
                        required />

                    <div className="input-group-append">
                        <div className="input-group-text">
                            <img src={ethLogo} height='32' alt="" />
              &nbsp;&nbsp;&nbsp; {this.isBuyState() ? 'ETH' : 'DApp'}
                        </div>
                    </div>
                </div>

                <div>
                    <label className="float-left"><b>Output</b></label>
                    <span className="float-right text-muted">
                        Balance: {this.getOutputBalance()}
                    </span>
                </div>

                <div className="input-group mb-2">
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="0"
                        value={this.state.output}
                        disabled />

                    <div className="input-group-append">
                        <div className="input-group-text">
                            <img src={tokenLogo} height='32' alt="" />
              &nbsp; {this.isBuyState() ? 'DApp' : 'ETH'}
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <span className="float-left text-muted">Exchange Rate</span>
                    <span className="float-right text-muted">
                        {this.isBuyState() ? '1 ETH = 100 DApp' : '100 DApp = 1 ETH'}
                    </span>
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Swap</button>
            </form>
        );
    }
}

export default TradeForm;
