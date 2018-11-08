class Game {
  //attr
  private _element: HTMLElement = document.getElementById('container');
  private _char: Character;
  private _coin: Coin; //use an array if you have multiple gameItems of the same sort
  private _scoreboard: Scoreboard;
  private _asteroid: asteroid;

  /**
   * Create the Game class
   */
  constructor() {
    //create some gameItems
    this._char = new Character('char');
    this._scoreboard = new Scoreboard('scoreboard');
    this._asteroid = new asteroid("asteroid");
      

    //add keydown handler to the window object
    window.addEventListener('keydown', this.keyDownHandler);

    //draw is initial state
      this.draw();
  }

  /**
   * Function to detect collision between two objects
   */
  public collision(): void {
    //use elem.getBoundingClientRect() for getting the wright coordinates and measurements of the element
    const charRect = document.getElementById('char').getBoundingClientRect();
/*
    if (coinRect.bottom >= charRect.top) {
      this._coin.remove(this._element);
      window.removeEventListener('keydown', this.keyDownHandler);
      this._scoreboard.addScore();
    } else {
      console.log('no collision');
    }
*/
  }

  /**
   * Function to draw the initial state of al living objects
   */
  public draw(): void {
    this._char.draw(this._element);
    this._scoreboard.draw(this._element);
    setInterval(
      () => 
      this._asteroid.draw(this._element), 5000
      );
  }

  /**
   * Function to update the state of all living objects
   */
  public update(): void { //function formerly known as render()
    this.collision();
    this._char.update();
    this._scoreboard.update();
  }

  /**
   * Function to handle the keyboard event
   * @param {KeyboardEvent} - event
   */
  public keyDownHandler = (e: KeyboardEvent): void => {
    if (e.keyCode === 32) {
      
      //move char 50px
        this._char.move(50);
        this.theLoop();
        this.update();

    }
    if (e.keyCode === 37){
        this._char.movex(-50);
        this.update();
    }
    if (e.keyCode === 39){
      this._char.movex(50);
      this.update();
      
    }
    }

    
        
    public theLoop() {
        var n = 0;
        var a = -200;
        setInterval(() => {
            if (n == 5) {
                a = 200
                n -= 1
            }
            if (n < 5) {
                a = -200
                n += 1            }
            console.log(n);               
            this.update();

            
        }, 2000);
    };
    
}
    

