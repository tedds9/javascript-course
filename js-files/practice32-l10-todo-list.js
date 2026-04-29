let save = JSON.parse(localStorage.getItem('saveArr'));
//let saveDate = JSON.parse(localStorage.getItem('saveDate'));
let arr = save;

let keyAdd = document.querySelector('.key-add');

keyAdd.addEventListener('click', () => {
  add();
});

renderList();
function renderList() {
  let todoList = ''
  let addArr = '';

  arr.forEach((todoObject, i) => {
    let { obName, obDate } = todoObject;
    const html = `
      
        <div class="list-box">
        ${obName}
        </div>

        <div class="date-js" >
          ${obDate}
        </div>

        <div class="button-box">
          <button class="delete key-delete"
          >
          Delete
          </button>
        </div>
        </div>

  `;
    todoList += html;
  });

  document.querySelector('.display').innerHTML = todoList;

document.querySelectorAll('.key-delete') 
  .forEach((deleteListE, i) => {
  deleteListE.addEventListener('click', () => {
    arr.splice(i, 1);
    renderList();

  });
});
    

  localStorage.setItem('saveArr', JSON.stringify(arr));
}

function add() {
  let obName = document.querySelector('.input').value;
  let obDate = document.querySelector('.date').value;
  if (obName !== '') {
    arr.push(
      {
        obName,
        obDate
      }

    );
    document.querySelector('.input').value = '';
    renderList();

  }
}


