import { PersonFactory } from './app/factory';

const factory = new PersonFactory();

const person1 = factory.getPerson(new Date(2001, 9, 11));
person1.printDetails();

const person2 = factory.getPerson(new Date(1990, 10, 1));
person2.printDetails();

const person3 = factory.getPerson(new Date());
person3.printDetails();
