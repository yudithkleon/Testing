import { PrivateRoute } from "../../src/routers/PrivateRoute";
import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
// import '@testing-library/jest-dom'

Storage.prototype.setItem=jest.fn();

describe("valiudar las Rutas Privadas", () => {
  
    const porps = {
    location: {
      pathname: "/marvel",
    },
  };

  test("Mostrar componente autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Componentes</span>}
          {...porps}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
  

  });


  test("usuario no autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Componentes</span>}
          {...porps}
        />
      </MemoryRouter>
    );
    console.log("XXXX"+wrapper.html()+"XXXXX");
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

  });
});
