import { authReducer } from '../auth/authReducer'; 
import {types} from '../types/types'


describe ('Pruebas en authReducer', ()=>{

    test('Pruebas Auth', () => {
        const state = authReducer({logged: false}, {});
        expect (state).toEqual({logged: false});
    })

    test('debe autenticar y colocar el usuario', () =>{
        const action ={
            type: types.login,
            payload: {
             name: 'Yudith'
            }
        }
        const state= authReducer({logged: false}, action);
        expect (state).toEqual({
            logged: true,
            name: 'Yudith'
        })
    }) 

    test('debe borrar el nombre del usuario y logged en false', ()=>{
        const action={
            type: types.logout,
        }

        const state= authReducer({logged:false, name:'Yudith'}, action);

        expect (state).toEqual({
            logged: false});
        })
 })

 