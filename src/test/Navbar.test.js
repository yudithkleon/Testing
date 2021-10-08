import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../auth/AuthContext";
import { MemoryRouter, Router } from "react-router";
import { Navbar } from "../components/ui/Navbar";
// import '@testing-library/jest-dom'


describe("Validar Componente <NavBar>", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contexValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Yudith",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contexValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Validar el contenido el nombre del usuario", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Yudith");
  });

  test("llamar a la logout y history", () => {
    wrapper.find("button").prop("onClick")()
    expect(contexValue.dispatch).toHaveBeenCalledWith({});
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
