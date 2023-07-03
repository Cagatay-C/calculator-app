import { ACTIONS } from "./App"

type DigitButtonProps = {
  dispatch: ({}) => void
  digit: string
}

const DigitButton = ({ dispatch, digit }: DigitButtonProps) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}

export default DigitButton
