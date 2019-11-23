export default class Game {
    constructor(width) {
        this.width = width;
        this.setupNewGame();

        this.onMoveHandlers = [];
        this.onWinHandlers = [];
        this.onLoseHandlers = [];

        this.moveEvent = () => {
            this.onMoveHandlers.forEach(callback => {callback(this.gameState);})
        }
        this.winEvent = () => {
            this.onWinHandlers.forEach((callback) => {callback(this.gameState);})
        }
        this.loseEvent = () => {
            this.onLoseHandlers.forEach(callback => {callback(this.gameState);})
        }

    }

    setupNewGame(){
        this.gameState = {
            board: [],
            score: 0,
            won: false,
            over: false
        }

        for(let i = 0; i < this.width*this.width; i++){
            this.gameState.board.push(0);
        }
        this.gameState.board[Math.floor(Math.random()*(this.width*this.width))] = (Math.random()>0.9)?4:2;
        this.gameState.board[this.addtiles()] = (Math.random()>0.9)?4:2;
    }

    loadGame(gameState){
        this.gameState = gameState;
        this.width = Math.sqrt(gameState.board.length);
    }

    move(direction){
        let width = this.width;
        switch(direction){
            case 'left':
                {
                    for(let i = 0; i < width; i++){
                        for(let j = 0; j < width-1; j++){
                            if(this.gameState.board[i*width+j]!=0) continue;
                            else {
                                for(let l = j+1; l < width; l++)
                                {
                                    if(this.gameState.board[i*width+l]==0) continue;
                                    else 
                                    {this.gameState.board[i*width+j] = this.gameState.board[i*width+l];
                                    this.gameState.board[i*width+l] = 0;
                                    break;
                                    }
                                }  
                            }
                        }
                        for(let j = 1; j < width; j++){
                            if(this.gameState.board[i*width+j] == this.gameState.board[i*width+j-1]){
                                this.gameState.score += 2 * this.gameState.board[i*width+j-1];
                                if(2 * this.gameState.board[i*width+j-1] == 2048) this.gameState.won = true;
                                this.gameState.board[i*width+j-1] = 2 * this.gameState.board[i*width+j-1];
                                for(let k = j; k < width-1; k++)
                                    this.gameState.board[i*width+k] = this.gameState.board[i*width+k+1];
                                this.gameState.board[i*width+width-1] = 0;}
                                continue;
                        }
                    }
                }
                break;
            case 'right':
                {
                    for(let i = 0; i < width; i++){
                        for(let j = width-1; j > 0; j--){
                            if(this.gameState.board[i*width+j]!=0) continue;
                            else {
                                for(let l = j-1; l >= 0; l--)
                                {
                                    if(this.gameState.board[i*width+l]==0) continue;
                                    else 
                                    {this.gameState.board[i*width+j] = this.gameState.board[i*width+l];
                                    this.gameState.board[i*width+l] = 0;
                                    break;
                                    }
                                }  
                            }
                        }
                        for(let j = width-1; j > 0; j--){
                            if(this.gameState.board[i*width+j] == this.gameState.board[i*width+j-1]){
                                this.gameState.score += 2 * this.gameState.board[i*width+j];
                                if(2 * this.gameState.board[i*width+j] == 2048) this.gameState.won = true;
                                this.gameState.board[i*width+j] = 2 * this.gameState.board[i*width+j];
                                for(let k = j-1; k > 0; k--)
                                    this.gameState.board[i*width+k] = this.gameState.board[i*width+k-1];
                                this.gameState.board[i*width] = 0;}
                                continue;
                        }
                    }
                }
                break;
            case 'up':
                {
                    for(let i = 0; i < width; i++){
                        for(let j = 0; j < width-1; j++){
                            if(this.gameState.board[j*width+i]!=0) continue;
                            else {
                                for(let l = j+1; l < width; l++)
                                {
                                    if(this.gameState.board[l*width+i]==0) continue;
                                    else 
                                    {this.gameState.board[j*width+i] = this.gameState.board[l*width+i];
                                    this.gameState.board[l*width+i] = 0;
                                    break;
                                    }
                                }  
                            }
                        }
                        for(let j = 1; j < width; j++){
                            if(this.gameState.board[j*width+i] == this.gameState.board[j*width-width+i]){
                                this.gameState.score += 2 * this.gameState.board[j*width-width+i];
                                if(2 * this.gameState.board[j*width-width+i] == 2048) this.gameState.won = true;
                                this.gameState.board[j*width-width+i] = 2 * this.gameState.board[j*width-width+i];
                                for(let k = j; k < width-1; k++)
                                    this.gameState.board[k*width+i] = this.gameState.board[k*width+width+i];
                                this.gameState.board[width*width-width+i] = 0;}
                                continue;
                        }
                    }
                }
                break;
            case 'down':
                {
                    for(let i = 0; i < width; i++){
                        for(let j = width-1; j > 0; j--){
                            if(this.gameState.board[j*width+i]!=0) continue;
                            else {
                                for(let l = j - 1; l >= 0; l--)
                                {
                                    if(this.gameState.board[l*width+i]==0) continue;
                                    else 
                                    {this.gameState.board[j*width+i] = this.gameState.board[l*width+i];
                                    this.gameState.board[l*width+i] = 0;
                                    break;
                                    }
                                }  
                            }
                        }
                        for(let j = width-1; j > 0; j--){
                            if(this.gameState.board[j*width+i] == this.gameState.board[j*width-width+i]){
                                this.gameState.score += 2 * this.gameState.board[j*width+i];
                                if(2 * this.gameState.board[j*width+i] == 2048) this.gameState.won = true;
                                this.gameState.board[j*width+i] = 2 * this.gameState.board[j*width+i];
                                for(let k = j - 1; k > 0; k--)
                                    this.gameState.board[k*width+i] = this.gameState.board[k*width-width+i];
                                this.gameState.board[i]=0;}
                                continue;
                        }
                    }
                }
                break;
        }
        this.gameState.board[this.addtiles()] = (Math.random()>0.9)?4:2;
        if(this.haslost()){
            this.gameState.over = true;
            this.loseEvent();
        } 
        if(this.gameState.won) this.winEvent();
        this.moveEvent();
        
    }

    toString(){
        let gameString = '';
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j < this.width; j++)
                gameString += '[' + this.gameState.board[i*this.width+j] + '] '
            gameString += '\n';
        }
        return gameString;
    }

    onMove(callback){
        this.onMoveHandlers.push(callback);
    }

    onWin(callback){
        this.onWinHandlers.push(callback);
    }
    
    onLose(callback){
        this.onLoseHandlers.push(callback);
    }

    getGameState(){
        return this.gameState;
    }

    addtiles() {
        let temp = Math.floor(Math.random()*(this.width*this.width));
        if(this.gameState.board[temp]!= 0)
            temp= this.addtiles();
        return temp;
    }

    haslost(){
        if(!this.gameState.board.includes(0)){
        for(let i = 0;i < this.width; i++)
            for(let j = 0;j < this.width-1; j++){
                if(this.gameState.board[i*this.width+j] == this.gameState.board[i*this.width+j+1])
                    return false;
            }
        for(let i = 0; i < this.width - 1; i++)
            for(let j = 0; j < this.width; j++){
                if(this.gameState.board[i*this.width+j] == this.gameState.board[i*this.width+this.width+j])
                    return false;
            }
        return true;
        }
        else{ return false;}
    }


}




