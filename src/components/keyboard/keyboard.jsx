import styles from "./keyboard.module.css";
import {useDispatch} from 'react-redux';
import { operationsActions } from "../../redux/reducers/operationsReducer";


function Keyboard(){

    const dispatch = useDispatch();

    function handleDigit(digit){
        dispatch(operationsActions.inputdigits(digit));
    }

    function handleOperator(operator){
        dispatch(operationsActions.inputOperator(operator))
    }

    function clear(){
        console.log("clear");
        dispatch(operationsActions.clear());
    }

    function handleResult(){
        dispatch(operationsActions.equals());
    }

    return(
        <div className={styles.keyboard}>
            <div>
            <button className={styles.btn1} onClick={()=>clear()}>AC</button>
            <button className={styles.btn1} value={"00"} onClick={(e)=>handleDigit(e.target.value)}>{"00"}</button>
            <button className={styles.btn1} value={"%"} onClick={(e)=>handleOperator(e.target.value)}>{"%"}</button>
            <button className={styles.btn2} value={"/"} onClick={(e)=>handleOperator(e.target.value)}>/</button>
            </div>
            <div>
            <button className={styles.btn3} value={"7"} onClick={(e)=>handleDigit(e.target.value)}>7</button>
            <button className={styles.btn3} value={"8"} onClick={(e)=>handleDigit(e.target.value)}>8</button>
            <button className={styles.btn3} value={"9"} onClick={(e)=>handleDigit(e.target.value)}>9</button>
            <button className={styles.btn2} value={"*"} onClick={(e)=>handleOperator(e.target.value)}>x</button>
            </div>
            <div>
            <button className={styles.btn3} value={"4"} onClick={(e)=>handleDigit(e.target.value)}>4</button>
            <button className={styles.btn3} value={"5"} onClick={(e)=>handleDigit(e.target.value)}>5</button>
            <button className={styles.btn3} value={"6"} onClick={(e)=>handleDigit(e.target.value)}>6</button>
            <button className={styles.btn2} value={"-"} onClick={(e)=>handleOperator(e.target.value)}>-</button>
            </div>
            <div>
            <button className={styles.btn3} value={"1"} onClick={(e)=>handleDigit(e.target.value)}>1</button>
            <button className={styles.btn3} value={"2"} onClick={(e)=>handleDigit(e.target.value)}>2</button>
            <button className={styles.btn3} value={"3"} onClick={(e)=>handleDigit(e.target.value)}>3</button>
            <button className={styles.btn2} value={"+"} onClick={(e)=>handleOperator(e.target.value)}>+</button>
            </div>
            <div>
            <button className={styles.zerobtn} value={"0"} onClick={(e)=>handleDigit(e.target.value)}>0</button>
            <button className={styles.btn3} value={"."} onClick={(e)=>handleDigit(e.target.value)}>.</button>
            <button className={styles.btn2} onClick={()=>handleResult()}>=</button>
            </div>
        </div>
    )
}

export default Keyboard;