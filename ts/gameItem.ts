class GameItem {
    //attr
    protected _element: HTMLElement;
    protected _name: string;
    protected _xPos: number;
    protected _yPos: number;

    /**
    * Function to create the GameItem
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        this._name = name
        this._xPos = xPosition;
        this._yPos = yPosition;
    }

    public set xPos(xPosition: number) {
        this._xPos = xPosition;
    }

    public set yPos(yPosition: number) {
        this._yPos = yPosition;
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
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;

        //create image
        const image = document.createElement('img');
        image.src = `./assets/images/${this._name}.png `;

        //append elements
        this._element.appendChild(image);
        container.appendChild(this._element);
    }

    /**
    * Function to update the state of the GameItem in the DOM
    */    
    public update(): void {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }
}