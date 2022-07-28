import { Completable } from "./Completable";

export class Task implements Completable {

  name: string;
  isComplete: boolean;

  constructor (name: string, isComplete: boolean = false) {
    this.name = name;
    this.isComplete = isComplete;
  }

}