import React from "react";
import { mount } from "enzyme";
import { DashboardRoutes } from "../routers/DashboardRoutes";
import { AuthContext } from "../auth/AuthContext";
import { MemoryRouter } from "react-router";
// import '@testing-library/jest-dom'


describe('Validar Componente DasboardRouters', ()=>{

    const contexValue={
        dispatch: jest.fn(),
        user:{
            logged:true,
            name:'Yudith'
        }
    }

    test ('Verificar el nombre de usuario Registrado', ()=>{
            const wrapper = mount(

                <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
                </AuthContext.Provider>
            )
            expect(wrapper).toMatcSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('Yudith')

    })
})