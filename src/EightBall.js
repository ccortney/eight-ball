import './EightBall.css';
import {useState} from "react";

const EightBall = ({answers}) => {
    const startingAnswer = {msg: 'Think of a Question', color: 'black'}
    const [answer, changeAnswer] = useState(startingAnswer);
    const style = {backgroundColor: `${answer.color}`};

    const shakeBall = () => {
        const idx = Math.floor(Math.random() * 20);
        const newAnswer = answers[idx];
        changeAnswer(newAnswer);
    }

    const reset = () => {
        changeAnswer(startingAnswer);
    }

    return (
        <div>
            <div className="EightBall" style={style} onClick={shakeBall}>{answer.msg}</div>

            <button onClick={reset}>Start Over</button>
        </div>
    )
}

export default EightBall;