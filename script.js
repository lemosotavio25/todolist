document.getElementById('task-button').addEventListener('click', addNewTask)

function addNewTask() {
    const inputElement = document.getElementById('task-input');
    const inputValue = inputElement.value.trim(); // Obtendo o valor do input e removendo espaços em branco extras

    // Checking if the input it's not empety
    if (inputValue !== "") {
        // Task Container (getting by id)
        const tasksContainer = document.getElementById('tasks-container');

        // Creating a new line
        const newRow = document.createElement('div');
        newRow.classList.add('row', 'my-3');

        // Creating a new Column
        const newCol = document.createElement('div');
        newCol.classList.add('col-10', 'p-3');

        // Creating heading element for tasks and inserting the input value
        const newHeading = document.createElement('h5');
        newHeading.classList.add('mx-3', 'my-2');
        newHeading.textContent = inputValue;

        // Adding the title for the new Column
        newCol.appendChild(newHeading);

        // Criação da coluna do botão (col-2)
        const newButtonCol = document.createElement('div');
        newButtonCol.classList.add('col-2', 'text-center', 'p-1');

        // Criação do botão "Done"
        const newButton = document.createElement('button');
        newButton.classList.add('btn', 'btn-success', 'm-2', 'btn-done');
        newButton.textContent = "Done";

        // Adiciona evento ao botão "Done"
        newButton.addEventListener('click', function() {
            // Remove o título e a linha (row) correspondente ao botão "Done" clicado
            newRow.remove();
        });

        // Adiciona o botão à coluna do botão
        newButtonCol.appendChild(newButton);

        // Adiciona a coluna principal e a coluna do botão à nova linha
        newRow.appendChild(newCol);
        newRow.appendChild(newButtonCol);

        // Adiciona a nova linha ao container de tarefas
        tasksContainer.appendChild(newRow);

        // Limpa o valor do input após adicionar a tarefa
        inputElement.value = '';
    }
}


document.addEventListener('click', doneButton)

function doneButton() {
    // Querying all btn-done elements
    const buttons = document.querySelectorAll('.btn-done');

    // Iterating each button
    buttons.forEach(button => {
        // Adding a event listner for each button
        button.addEventListener('click', function() {
            // Finding closest elements of each button (Row for removing and h5 to get the value)

            //Closest Row
            const closestRow = this.closest('.row');

            //Closest Heading
            const taskHeading = this.closest('.row').querySelector('h5');
            
            // Getting the value of the task of the reading element
            const taskText = taskHeading.textContent
            //Funciton to add task to done list:
            addToDone(taskText);
            
            // Nested if in for each, cheking the closest row of each button
            if (closestRow) {
                // Removing the closest row
                closestRow.remove();
            }
        });
    });
}

//Modified "addNewTask" Function to add the elements to the done list
function addToDone (headingValue) {
    const inputValue = headingValue;

    console.log(inputValue)

    //Task Container
    const tasksContainer = document.getElementById('tasks-container-2')
    
    //First Div - Row
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    // First Div Child - Column
    const newCol = document.createElement('div')
    newCol.classList.add('col-10', 'p-3')

    // Column Div First Child - heading
    const newheading = document.createElement('h5')
    newheading.classList.add('mx-3', 'my-2')
    newheading.textContent = inputValue

    // Adding Elements 
    tasksContainer.appendChild(newRow)
    newRow.appendChild(newCol)
    newCol.appendChild(newheading)

    // Row Div First Child - Button Col
    const newButtonCol = document.createElement('div')
    newButtonCol.classList.add('col-2', 'text-center', 'p-1')

    // Adding Elements 
    newRow.appendChild(newButtonCol)

}



















// let x = 25;

// MinhaFuncao = function(){
//     x = x + 25;
// }
// MinhaFuncao()
// console.log(x)