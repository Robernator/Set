import { CardModel } from "~/set/card.model";

export class PlayerModel {
    name: string;
    sets: CardModel[];
    image: string;
    gender: Gender;
    pressedSet = false;
    blocked: boolean;
    constructor(name_:string, gender_:Gender = Gender.male) {
        this.name = name_;
        this.gender = gender_;
    }
}

export enum Gender {
    male,
    female
}