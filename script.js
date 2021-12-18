// ID: container
const container = document.getElementById("container");

//  ID: my_calculator
const my_calculator = document.getElementById("my_calculator");

// title
let title = document.createElement("H1");
title.id = "title";
title.innerHTML = "CALCULATOR";
container.insertBefore(title, my_calculator);

// description
let desc = document.createElement("P");
desc.id = "description";
const txt = document.createTextNode(
  "Basic artihmetic calculator with +, -, *, / and % operations"
);
desc.appendChild(txt);
container.insertBefore(desc, my_calculator);

// calculator screen
var screen = document.createElement("input");
screen.id = "result";
screen.type = "text";
screen.placeholder = "0";
my_calculator.appendChild(screen);

// Button data - array of objects
let calc_buttons = [
  {
    id: "clear",
    value: "",
    text: "C",
    func: "clearscreen()",
    class: "btn btn-danger",
  },
  {
    id: "backspace",
    value: "",
    text: "←",
    func: "backspace()",
    class: "text-danger",
  },
  {
    id: ".",
    value: ".",
    text: ".",
    func: 'update(".")',
  },
  {
    id: "multiply",
    value: "*",
    text: "x",
    func: 'update("*")',
  },
  {
    id: "7",
    value: 7,
    text: "7",
    func: "update(7)",
  },
  {
    id: "8",
    value: 8,
    text: "8",
    func: "update(8)",
  },
  {
    id: "9",
    value: 9,
    text: "9",
    func: "update(9)",
  },
  {
    id: "divide",
    value: "/",
    text: "/",
    func: 'update("/")',
  },
  {
    id: "4",
    value: 4,
    text: "4",
    func: "update(4)",
  },
  {
    id: "5",
    value: 5,
    text: "5",
    func: "update(5)",
  },

  {
    id: "6",
    value: 6,
    text: "6",
    func: "update(6)",
  },
  {
    id: "subtract",
    value: "-",
    text: "-",
    func: 'update("-")',
  },
  {
    id: "1",
    value: 1,
    text: "1",
    func: "update(1)",
  },
  {
    id: "2",
    value: 2,
    text: "2",
    func: "update(2)",
  },
  {
    id: "3",
    value: 3,
    text: "3",
    func: "update(3)",
  },
  {
    id: "add",
    value: "+",
    text: "+",
    func: 'update("+")',
  },
  {
    id: "0",
    value: 0,
    text: "0",
    func: 'update("0")',
  },
  {
    id: "modulus",
    value: "%",
    text: "%",
    func: 'update("%")',
  },
  {
    id: "equal",
    value: "=",
    text: "=",
    func: "calculate()",
    class: "btn btn-primary",
  },
];

// function defining each button elements using the above data
function create_button(button_data) {
  let button = document.createElement("button");
  button.id = button_data.id;
  button.className = button_data.class;
  button.value = button_data.value;
  let button_text = document.createTextNode(button_data.text);
  button.appendChild(button_text);
  my_calculator.appendChild(button);
  button.addEventListener("click", function () {
    eval(button_data.func);
  });
}

calc_buttons.forEach((button) => create_button(button));

// Functions for buttons

// print value to the screen when numeric/operands buttons are clicked
function update(data) {
  screen.value += data;
}

// C key - clear the screen
function clearscreen() {
  screen.value = "";
}

// backspace
function backspace() {
  screen.value = screen.value.slice(0, -1);
}

// result calculation
function calculate() {
  screen.value = eval(screen.value);
}

// Alert when non numeric key is pressed; also don't print it on the calculator screen
screen.addEventListener("keydown", function (event) {
  if (!isFinite(event.key)) {
    alert("Only numbers are allowed");
    event.preventDefault();
  }
});
