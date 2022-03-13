class   BestSoccerForwards{   
    constructor(forwards, assist,goals){
        this.forwards = forwards;
        this.assist =  assist;
        this.goals = goals;

    }
describe(){
return `${this.forwards} has ${this.goals} goals and this ${this.assist} assist`
}
}
const bestforward1 =new BestSoccerForwards('Ronaldo','6','40')
bestforward1.assist = 9
console.log(bestforward1.describe())
console.log(bestforward1)
class Menu{
    constructor(){
        this.bestSoccerForwards = [];
    }
mainMenu(){
    let choice = prompt(`
        1) Add forward;
        2) delete forward;
        3) View all forward;
        0) Exit Program;`
        )
 switch(choice){
           case "1":
                this.addForward();
                break;
            case "2":
                this.deleteForward();
                break;
            case "3":
                this.viewForwards();
                break;
            case "0":
                this.exitProgram();
            default:
                this.mainMenu();
}
}
    addForward() {
         const newForward = prompt("enter new forward: ");
        this.bestSoccerForwards.push(newForward);
 console.log(newForward)
 ;
 alert(`this player has been added`);
this.mainMenu();}

deleteForward(){
 let index =prompt(`Enter Forward to delete`)
 if(index >-1 && index< this.bestSoccerForwards.length){
     this.bestSoccerForwards.splice(index,1)
 }
alert(`this player has been deleted`);
this.mainMenu() 
}
viewForwards(){
    let allForwards = " ";
for(let i =0; i<this.bestSoccerForwards.length;i++){   
    allForwards +=[i] + ')'+ this.bestSoccerForwards[i] + "\n";;
}
alert(allForwards)
 this.mainMenu()
}

exitProgram(){
    alert(`Goodbye`);
}
}
const menu = new Menu();
menu.mainMenu();