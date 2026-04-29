
let save = JSON.parse(localStorage.getItem('saveArr'));
//let saveDate = JSON.parse(localStorage.getItem('saveDate'));
let arr = save;
renderList ();

function renderList() {
  let todoList = ''

  arr.forEach(function(todoObject, i) {
    console.log(todoObject)
    let {obName , obDate } = todoObject;
    const html = `
      

        <div class="list-box">
        ${obName}
        </div>

        <div class="date-js" >
          ${obDate}
        </div>

        <div class=button-box>
          <button class="delete"
          onclick="arr.splice(${i},1);
          renderList();
          ">
          Delete
          </button>
        </div>
        </div>

  `;
    todoList += html;
  })
  let display = document.querySelector('.display').innerHTML = todoList;
  localStorage.setItem('saveArr',JSON.stringify(arr));
}

function add() {
  let obName = document.querySelector('.input').value;
  let obDate = document.querySelector('.date').value;
  if (obName !== '') {
  arr.push(
    {obName,
      obDate
    }
    
  );
  document.querySelector('.input').value = '';
  renderList();
  
  }
}


