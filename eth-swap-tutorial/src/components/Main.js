import React, { Component } from 'react'
import TradeForm from './TradeForm'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentForm: 'buy',
            resetFormToggle: false
        }
    }

    render() {
        return (
            <div id="content" className="mt-3">
                <div className="d-flex justify-content-between mb-3">
                    <button
                        className="btn btn-light"
                        onClick={(event) => {
                            if (this.state.currentForm != 'buy') {
                                this.setState({ currentForm: 'buy', resetFormToggle: !this.state.resetFormToggle })
                            }
                        }} >
                        Buy
                    </button>
                    <span className="text-muted">&lt; &nbsp; &gt;</span>
                    <button
                        className="btn btn-light"
                        onClick={(event) => {
                            if (this.state.currentForm == 'buy') {
                                this.setState({ currentForm: 'sell', resetFormToggle: !this.state.resetFormToggle })
                            }
                        }}>
                        Sell
                    </button>
                </div>
                <div className="card mb-4" >
                    <div className="card-body">
                        <TradeForm
                            reset={this.state.resetFormToggle}
                            currentForm={this.state.currentForm}
                            ethBalance={this.props.ethBalance}
                            tokenBalance={this.props.tokenBalance}
                            buyTokens={this.props.buyTokens} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
