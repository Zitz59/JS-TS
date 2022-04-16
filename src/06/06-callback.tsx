import React, {ChangeEvent, MouseEventHandler} from 'react';

/*
const callback = ():number => {
    alert('hey')
    return 65;
}

window.setTimeout(callback,1000)
*/


export const User = () => {

    const deleteUser = (e: MouseEventHandler<HTMLButtonElement>) => {
        alert (e.caller.name)
    }

    const saveUser = () => {
        alert('user need to be save')
    }

    const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('name changed' + event.currentTarget.value )
    }

    const onAgeChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div><textarea onChange={onNameChanged}
                          onBlur={focusLostHandler}> Opasd </textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button name="delete" onClick={deleteUser}>delete</button>

    </div>
}