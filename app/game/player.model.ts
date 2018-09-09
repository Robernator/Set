import { CardModel } from "~/set/card.model";

export class PlayerModel {
    name: string;
    sets: CardModel[];
    image: string;
    gender: Gender;
    pressedSet = false;
    blocked: boolean;
    styleClass: string;
    constructor(name_:string, gender_:Gender = Gender.male) {
        this.name = name_;
        this.gender = gender_;
    }

    setPressedSet(_pressSet: boolean) {
        this.pressedSet = _pressSet;
        if (this.pressedSet === true ) {
            this.styleClass = 'pressedSet';
        } else {
            this.styleClass = '';
        }
    }

    setBlocked(_isBlocked : boolean) {
        this.blocked = _isBlocked;
        if (this.blocked === true) {
            this.styleClass = 'blockedSet';
        } else {
            this.styleClass = '';
        }
    }
}

export enum Gender {
    male,
    female
}