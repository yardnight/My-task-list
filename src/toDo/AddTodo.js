import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue =''){
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)

        },
       clear: () => setValue(''),
       value: () => value
    }
}
// создать event onClick для изменения state поля ячейки
// назначить ячейки stateField
// если ячейка активна true то заменить поле ячейки на картинку
// если поле ячейки не активно faulse, то залить ячейку бельім.



// function BackGroundFillBox () {

//     const [insideField, setInsideField] = useState(false)
//     setInsideField(insideField=true)
//     if (insideField === true) {
//         // backStyle = ('className'+' = '+'background: no-repeat url("../background.png");')
//         console.log ('Style string', insideField)
//     }
//     return
//   backStyle
// }

function AddTodo({ onCreate }) {

    const input = useInputValue('')
    
    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
        onCreate(input.value())
        input.clear()
        }
    }   

    return (
        <form style={{ marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input style={{borderStyle: 'solid',borderColor: 'rgb(47, 220, 139)'}}{...input.bind} placeholder="New task put here"/>  
             
            <button className='add-botton' type='submit'> Add Task</button>

        </form>
    )

    
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
    insideField: PropTypes.bool.isRequired

}
    

export default AddTodo