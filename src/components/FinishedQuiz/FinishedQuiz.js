import React from 'react';
import classes from './FinishedQuiz.module.css';
import ClearIcon from '@material-ui/icons/Clear';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";


const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <h3>Результат</h3>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = props.results[quizItem.id] === 'error'
                        ? <ClearIcon className={classes.ClearIcon}/>
                        : <DoneOutlineIcon className={classes.DoneOutlineIcon}/>;
                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}. </strong>
                            {quizItem.question}
                            {cls}
                        </li>
                    )
                })}


            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button type="primary" onClick={props.onRetry}>Повторить</Button>

                <Link to='/'>
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
};

export default FinishedQuiz;