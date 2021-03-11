import { BasicMath } from './BasicMath';

export class ComplexMath {
  basicMath = new BasicMath();
  avg(a, b) {
    return this.basicMath.sum(a, b) / 2;
  }
}
