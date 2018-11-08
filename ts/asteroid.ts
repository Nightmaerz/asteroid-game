/// <reference path="gameItem.ts" />

class asteroid extends GameItem {
    private _id: number;

    /**
    * Function to create the GameItem
    * @param {string} - name
    * @param {number} - id
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }

    /**
    * Function to draw the initial state of the coin
    * @param {HTMLElement} - container
    */
    public draw(container: HTMLElement): void {
        //create div
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = `${this._name}-${this._id}`;
        this._element.style.transform = `translate(${-1000+100*Math.floor(Math.random() * 20) + 1  }px, ${this._yPos}px)`;

        //create image
        const image = document.createElement('img');
        image.src = `./assets/images/${this._name}.png `;

        //append elements
        this._element.appendChild(image);
        container.appendChild(this._element);
    }

    /**
    * Function to remove the coin from the DOM
    * @param {HTMLElement} - container
    */
    public remove(container: HTMLElement): void {
        const elem = document.getElementById(`${this._name}-${this._id}`);
        container.removeChild(elem);
    }
}