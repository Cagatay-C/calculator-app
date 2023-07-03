import { ACTIONS } from "./App"

type OperationButtonProps = {
  dispatch: ({}) => void
  operation: string
}

const OperationButton = ({ dispatch, operation }: OperationButtonProps) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}

export default OperationButton
