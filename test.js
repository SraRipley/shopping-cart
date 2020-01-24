import { calcularTotal, calcularPeso } from './index';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it('comprar pan', () => { equal(calcularTotal([
    {producto:"Pan",precio:1}
  ]), 1) });
  it('comprar leche', () => { equal(calcularTotal([
    {producto:"Leche",precio:1}
  ]), 1) });
  it('comprar pan y leche', () => { equal(calcularTotal([
    {producto:"Pan",precio:1},
    {producto:"Leche",precio:1},
  ]), 2) });
  it('comprar huevos', () => { equal(calcularTotal([
    {producto:"Huevo",precio:30, cantidad: 12}
  ]), 360) });
  it('comprar pan, leche y huevos', () => { equal(calcularTotal([
    {producto:"Pan",precio:100},
    {producto:"Leche",precio:100},
    {producto:"Huevos",precio:30, cantidad:12},
  ]), 560) });
})

describe(('Calculo del peso'), () =>{
  it('carrito vacío', () =>{
    equal(calcularPeso([]),0)
  });
});