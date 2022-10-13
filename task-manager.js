const { type } = require('os');
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = ["Brush your teeth", "Put some pants"]
let manager = ` 
Hello! Welcome to the task Manager.
please choose your actions:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done (still in progress)
5. to Exit the task manager
`

console.log(manager)

let managerChoice = function () {
    rl.question('Enter your action\'s number:', function (choice) {

        switch (choice) {
      
            case "1":
                console.table(tasks);
                managerChoice();
                break;
            case "2":
                rl.question('Add a new task ', function (input) {
                    tasks.push(input)
                    managerChoice();
                })
                break;
            case "3":
                rl.question('Enter the number of the task you want to remove ', function (input) {
                    console.log(typeof input)
                    if (input > -1) { 
                        console.log(typeof input)
                        tasks.splice(input, 1);
                    }
                    managerChoice();
                })
                break;  
                // I could not find a way to mark as done.. yet.
            case "5":
                console.log("The programm will now be terminated ba b-ye ")
                return rl.close();
            default:
                console.log("I'm not quit getting your input ");
                managerChoice();
                break;
        }
    })
}
managerChoice()
