import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            isRunning: props.autostart
        }
    }

    componentDidMount() {
        this.timerInterval = setInterval(this.tick, this.props.step);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    tick = () => {
        if(this.state.isRunning) {
            if(this.state.time > 0) {
                this.setState((prevState) => ({
                    time: prevState.time - this.props.step
                }));
                if(this.props.onTick) {
                    this.props.onTick(this.state.time);
                } 
            } else {
                this.setState({ isRunning: false });
                clearInterval(this.timerInterval);
            }
        }
    }

    toggleTimer = () => {
        this.setState((prevState) => ({
            isRunning: !prevState.isRunning
        }))
    }

    resetTimer = () => {
        this.setState({
            time: this.props.time,
            isRunning: this.props.autostart
        })
    }

    render() {
        const { time } = this.state;
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);

        return (
            <div className="timer">
                <div className="time">
                    {minutes}:{seconds < 10 ? "0" : ""}
                    {seconds}
                </div>
                <button className="timer-button" onClick={this.toggleTimer}>
                    {this.state.isRunning ? "Pause" : "Start"}
                </button>
                <button className="timer-button" onClick={this.resetTimer}>Reset</button>
            </div>
        )
    }
}

export default Timer;
