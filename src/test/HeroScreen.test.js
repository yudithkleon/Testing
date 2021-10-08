import { mount } from "enzyme";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { getHeroById } from "../selectors/getHeroById";



describe("Prueba del componente <HeroScreen", () => {

//   const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
//   console.log("heroe: ", +hero);

  const historyMock = {
    push: jest.fn(),
    goBack: jest.fn(),
    length: 10,
  };
  const wrapper = mount(
    <MemoryRouter initialEntries={["/Hero"]}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  );

  test("mostrar el redirect si no tenemos URL del heroe", () => {
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("El componente debe de funcionan correctamente", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-hulk"]}>
        <Route parth="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Hacer push', ()=>{
      const historyMock ={
          push: jest.fn(),
          goBack: jest.fn(),
          length:1
      }
      const wrapper = mount(
        <MemoryRouter initialEntries={["/hero/marvel-hulk"]}>
          <Route parth="/hero/:heroeId" component={()=> <HeroScreen history={historyMock}/>} />
        </MemoryRouter>
      );
        wrapper.find('button').props('onClick')();
        expect(historyMock.push).toHaveBeenCalledWith('/')
        expect(historyMock.goBack).not.toHaveBeenCalled();
  })

  test ('regresar a la pantalla anterior', ()=>{
    const historyMock ={
        push: jest.fn(),
        goBack: jest.fn(),
        length: 10
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-hulk"]}>
        <Route parth="/hero/:heroeId" component={()=> <HeroScreen history={historyMock}/>} />
      </MemoryRouter>
    );
    wrapper.find('button').props('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).toHaveBeenCalled();
  })

});
