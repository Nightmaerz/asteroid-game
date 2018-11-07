/// <reference path="gameItem.ts" />

class Scoreboard extends GameItem {
    private _score: number;

    /**
    * Function to create the GameItem
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(name: string) {
        super(name);
        this._score = 0;
    }

    public get score(): number {
        return this._score;
    }

    /**
    * Function to draw the initial state of the gameItem
    * @param {HTMLElement} - container
    */
    public draw(container: HTMLElement): void {
        //create div
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;

        //create p
        const p = document.createElement('p');
        p.innerHTML = 'The score is: ';

        //create span
        const span = document.createElement('span');
        span.innerHTML = this._score.toString();

        //append elements
        p.appendChild(span);
        this._element.appendChild(p);
        container.appendChild(this._element);
    }

    /**
    * Function to update the state of the Scoreboard in the DOM
    */ 
    public update(): void {
        //get the contents of span
        const scoreSpan = (<HTMLElement>this._element.childNodes[0].childNodes[1]);
        scoreSpan.innerHTML = this._score.toString();
    }

    /**
    * Function to add the score with 1
    */ 
    public addScore(): void {
        this._score += 1;
    }

}