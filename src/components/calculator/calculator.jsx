import styles from "./calculator.module.css";
import Keyboard from "../keyboard/keyboard";
import {useSelector} from 'react-redux';

function Calculator(){

    const digits = useSelector((state) => state.operationsReducers.digits);
    const total = useSelector((state) => state.operationsReducers.total);

    return(
        <>
            <div className={styles.calculator}>
                <div className={styles.screen}>
                <div className={styles.digits}>{digits}</div>
                <div className={styles.total}>{total}</div>
                </div>
                <Keyboard/>
            </div>
        </>
    )
}

export default Calculator;