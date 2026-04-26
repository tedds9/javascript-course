
let click = document.querySelector('.click');
let display = document.querySelector('.display');
const arrayTodo = [];

function add() {

  let input = document.querySelector('.input');
  input = input.value;
  arrayTodo.push(input);

  if (input === '') {
    console.log('type something to add')
  }else {
    for (let i = 0; i < arrayTodo.length; i++) {
      
      let todoList = arrayTodo[i];
      display.innerHTML += 
      `<p class="todo-display">
      t67${todoList}
      <buton onclick="" class="delete">Delete</button>
      </p>`;
      arrayTodo.splice(0,1);
      
    }
  }
  document.querySelector('.input').value = '';
  
}
