import React, { Component } from 'react'
import Web3 from 'web3'
import Token from '../abis/Token.json'
import EthSwap from '../abis/EthSwap.json'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)

        // TODO: Re-implement state with redux?
        // This holds the state of data and is used with the React setState(...) method
        this.state = {
            account: '',
            token: {},
            ethSwap: {},
            ethBalance: '0',
            tokenBalance: '0',
            loading: true
        }
    }

    // Lifecycle method for the React component. It's called before render.
    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    // Boilerplate code to load in the web3.js library
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    // 
    async loadBlockchainData() {
        const web3 = window.web3

        // Fetch Ethereum accounts connected to the blockchain on Metamask
        const accounts = await web3.eth.getAccounts()

        // React method for updating state
        this.setState({ account: accounts[0] })

        // TODO: Validate one account is founded, error if none are found

        const ethBalance = await web3.eth.getBalance(this.state.account)
        this.setState({ ethBalance })

        // Load Token
        const networkId = await web3.eth.net.getId()
        const tokenData = Token.networks[networkId]

        console.log('networkId: ' + networkId)

        if (tokenData) {
            const token = new web3.eth.Contract(Token.abi, tokenData.address)
            this.setState({ token })
            let tokenBalance = await token.methods.balanceOf(this.state.account).call()
            this.setState({ tokenBalance: tokenBalance.toString() })
        } else {
            window.alert('Token contract not deployed to detected network.')
        }

        // Load EthSwap
        const ethSwapData = EthSwap.networks[networkId]
        if (ethSwapData) {
            const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
            this.setState({ ethSwap })
        } else {
            window.alert('EthSwap contract not deployed to detected network.')
        }

        this.setState({ loading: false })
    }

    buyTokens = (etherAmount) => {
        this.setState({ loading: true })

        const buyData = {
            value: etherAmount,
            from: this.state.account
        }

        // TODO: Handle the scenario where user rejects the transaction from metamask
        this.state.ethSwap.methods.buyTokens()
            .send(buyData)
            .on('transactionHash', (hash) => {
                this.setState({ loading: false })
            })
    }

    sellTokens = (tokenAmount) => {
        this.setState({ loading: true })

        // TODO: Same here, handle the scenario where user rejects the transaction from metamask
        this.state.token.methods.approve(this.state.ethSwap.address, tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
            this.state.ethSwap.methods.sellTokens(tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
                this.setState({ loading: false })
            })
        })
    }

    render() {
        let content
        if (this.state.loading) {
            content = <p id="loader" className="text-center">Loading...</p>
        } else {
            content = <Main
                ethBalance={this.state.ethBalance}
                tokenBalance={this.state.tokenBalance}
                buyTokens={this.buyTokens}
                sellTokens={this.sellTokens}
            />
        }

        return (
            <div>
                <Navbar account={this.state.account} />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
                            <div className="content mr-auto ml-auto">
                                <a href="http://www.dappuniversity.com/bootcamp"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                </a>

                                {content}

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
