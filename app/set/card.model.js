"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardModel = /** @class */ (function () {
    function CardModel(color_, number_, shape_, filling_) {
        this.color = color_;
        this.number = number_;
        this.shape = shape_;
        this.filling = filling_;
        this.filename = "~/assets/cards/" + this.number + '_' + CardShape[this.shape] + '_' + CardColor[this.color] + '_' +
            CardFilling[this.filling] + '.png';
    }
    CardModel.prototype.setSelected = function (selected_) {
        this.selected = selected_;
        if (!this.selected) {
            this.isInSet = false;
            this.isNotSet = false;
        }
    };
    CardModel.prototype.getCss = function () {
        if (this.selected && this.isNotSet) {
            return 'not-set-card';
        }
        if (this.selected && this.isInSet) {
            return 'set-card';
        }
        return this.selected ? 'selected-card' : '';
    };
    return CardModel;
}());
exports.CardModel = CardModel;
var CardColor;
(function (CardColor) {
    CardColor[CardColor["red"] = 1] = "red";
    CardColor[CardColor["blue"] = 2] = "blue";
    CardColor[CardColor["green"] = 3] = "green";
})(CardColor || (CardColor = {}));
var CardShape;
(function (CardShape) {
    CardShape[CardShape["heart"] = 1] = "heart";
    CardShape[CardShape["square"] = 2] = "square";
    CardShape[CardShape["diamond"] = 3] = "diamond";
})(CardShape || (CardShape = {}));
var CardFilling;
(function (CardFilling) {
    CardFilling[CardFilling["clear"] = 1] = "clear";
    CardFilling[CardFilling["solid"] = 2] = "solid";
    CardFilling[CardFilling["shade"] = 3] = "shade";
})(CardFilling || (CardFilling = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVlJLG1CQUFZLE1BQWdCLEVBQUUsT0FBZSxFQUFFLE1BQWdCLEVBQUUsUUFBb0I7UUFDakYsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsR0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLEdBQUc7WUFDckYsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLFNBQWtCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDdEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxlQUFlLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBdENZLDhCQUFTO0FBd0N0QixJQUFLLFNBSUo7QUFKRCxXQUFLLFNBQVM7SUFDVix1Q0FBSyxDQUFBO0lBQ0wseUNBQUksQ0FBQTtJQUNKLDJDQUFLLENBQUE7QUFDVCxDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQUVELElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNWLDJDQUFPLENBQUE7SUFDUCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNYLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBRUQsSUFBSyxXQUlKO0FBSkQsV0FBSyxXQUFXO0lBQ1osK0NBQU8sQ0FBQTtJQUNQLCtDQUFLLENBQUE7SUFDTCwrQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUpJLFdBQVcsS0FBWCxXQUFXLFFBSWYiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FyZE1vZGVsIHtcblxuICAgIGNvbG9yOiBDYXJkQ29sb3I7IFxuICAgIG51bWJlcjogTnVtYmVyOyAvL3sxLCAyLCAzfVxuICAgIHNoYXBlOiBDYXJkU2hhcGU7IC8ve292YWFsLCBzbmFrZSwgZGlhbW9uZH1cbiAgICBmaWxsaW5nOiBDYXJkRmlsbGluZzsgLy97Y2xlYXIsIHNvbGlkLCBzaGFkZX1cblxuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgaXNJblNldDogYm9vbGVhbjtcbiAgICBpc05vdFNldDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbG9yXzpDYXJkQ29sb3IsIG51bWJlcl86IE51bWJlciwgc2hhcGVfOkNhcmRTaGFwZSwgZmlsbGluZ186Q2FyZEZpbGxpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXztcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXJfO1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfO1xuICAgICAgICB0aGlzLmZpbGxpbmcgPSBmaWxsaW5nXztcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwifi9hc3NldHMvY2FyZHMvXCIrdGhpcy5udW1iZXIrJ18nK0NhcmRTaGFwZVt0aGlzLnNoYXBlXSsnXycrQ2FyZENvbG9yW3RoaXMuY29sb3JdKydfJytcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcmRGaWxsaW5nW3RoaXMuZmlsbGluZ10rJy5wbmcnOyAgICAgICAgICAgICAgIFxuICAgIH1cbiAgXG4gICAgcHVibGljIHNldFNlbGVjdGVkKHNlbGVjdGVkXzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRfO1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNJblNldCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc05vdFNldCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3NzKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5pc05vdFNldCkge1xuICAgICAgICAgICAgcmV0dXJuICdub3Qtc2V0LWNhcmQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuaXNJblNldCkge1xuICAgICAgICAgICAgcmV0dXJuICdzZXQtY2FyZCc7XG4gICAgICAgIH0gIFxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZD8gJ3NlbGVjdGVkLWNhcmQnOiAnJztcbiAgICB9XG59XG5cbmVudW0gQ2FyZENvbG9yIHtcbiAgICByZWQ9MSxcbiAgICBibHVlLFxuICAgIGdyZWVuXG59XG5cbmVudW0gQ2FyZFNoYXBlIHtcbiAgICBoZWFydD0xLFxuICAgIHNxdWFyZSxcbiAgICBkaWFtb25kXG59XG5cbmVudW0gQ2FyZEZpbGxpbmcge1xuICAgIGNsZWFyPTEsXG4gICAgc29saWQsXG4gICAgc2hhZGVcbn0iXX0=