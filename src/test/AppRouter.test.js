import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../routers/AppRouter";
import { AuthContext } from "../auth/AuthContext";
// import '@testing-library/jest-dom'

describe("Pruebas de AppRouter", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("Mostrar login si no esta autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Mostrar el componente marvel Autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged:true,
        name:'Yudith',
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot({})
    expect( wrapper.find('.navbar').exists()).toBe(true);
  });
});
