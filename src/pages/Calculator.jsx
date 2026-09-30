import React, { useState } from 'react'
// import "./Calculator.css";

const calculator = () => {

  const [display, setDisplay] = useState("")

  const operators = ["+", "-", "*", "/", "%"]

  const Click = (value) => {
    const last = display.slice(-1)

    if (display === "") {
      if (value === "-") {
        setDisplay("-")
      } else if (!operators.includes(value)) {
        setDisplay(value)
      }
      return
    }

    if (operators.includes(value) && operators.includes(last)) {
      return
    }

    if (value === ".") {
      const number = display.split(/[+\-*/%]/).pop()

      if (number.includes(".")) return
    }

    setDisplay(display + value)
  }

  const clearDisplay = () => {
    setDisplay("")
  }

  const removeCharacter = () => {
    setDisplay(display.slice(0, -1))
  }

  const calculateResult = () => {
    if (!display || display === "-") return

    const last = display.slice(-1)

    if (operators.includes(last)) return

    try {
      const result = eval(display)

      if (!isFinite(result)) return

      setDisplay(result.toString())
    } catch {
      return
    }
  }

  const handleKeyDown = (event) => {
    if (
      (event.key >= "0" && event.key <= "9") ||
      operators.includes(event.key) ||
      event.key === "."
    ) {
      Click(event.key)
    } else if (event.key === "Enter") {
      calculateResult()
    } else if (event.key === "Backspace") {
      removeCharacter()
    } else if (event.key === "Delete") {
      clearDisplay()
    }
  }

  return (
    <>
      <div tabIndex="0" onKeyDown={handleKeyDown}>

        <h1>Calculator</h1>

        <input type="text" value={display} readOnly />

        <br />

        <button onClick={clearDisplay}>C</button>
        <button onClick={removeCharacter}>⌫</button>
        <button onClick={() => Click("%")}>%</button>
        <button onClick={() => Click("/")}>/</button>

        <br />

        <button onClick={() => Click("7")}>7</button>
        <button onClick={() => Click("8")}>8</button>
        <button onClick={() => Click("9")}>9</button>
        <button onClick={() => Click("*")}>*</button>

        <br />

        <button onClick={() => Click("4")}>4</button>
        <button onClick={() => Click("5")}>5</button>
        <button onClick={() => Click("6")}>6</button>
        <button onClick={() => Click("-")}>-</button>

        <br />

        <button onClick={() => Click("1")}>1</button>
        <button onClick={() => Click("2")}>2</button>
        <button onClick={() => Click("3")}>3</button>
        <button onClick={() => Click("+")}>+</button>

        <br />

        <button onClick={() => Click("0")}>0</button>
        <button onClick={() => Click("00")}>00</button>
        <button onClick={() => Click(".")}>.</button>
        <button onClick={calculateResult}>=</button>

      </div>
    </>
  )
}

export default calculator