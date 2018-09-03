export class CardModel {

    color: CardColor; 
    number: Number; //{1, 2, 3}
    shape: CardShape; //{ovaal, snake, diamond}
    filling: CardFilling; //{clear, solid, shade}

    filename: string;
    selected: boolean;
    isInSet: boolean;
    isNotSet: boolean;

    constructor(color_:CardColor, number_: Number, shape_:CardShape, filling_:CardFilling) {
        this.color = color_;
        this.number = number_;
        this.shape = shape_;
        this.filling = filling_;
        this.filename = "~/assets/cards/"+this.number+'_'+CardShape[this.shape]+'_'+CardColor[this.color]+'_'+
                        CardFilling[this.filling]+'.png';               
    }
  
    public setSelected(selected_: boolean) {
        this.selected = selected_;
        if (!this.selected) {
            this.isInSet = false;
            this.isNotSet = false;
        }
    }

    getCss():string {
        if (this.selected && this.isNotSet) {
            return 'not-set-card';
        }
        if (this.selected && this.isInSet) {
            return 'set-card';
        }  
        return this.selected? 'selected-card': '';
    }
}

enum CardColor {
    red=1,
    blue,
    green
}

enum CardShape {
    heart=1,
    square,
    diamond
}

enum CardFilling {
    clear=1,
    solid,
    shade
}