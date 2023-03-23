const list = document.querySelector("ul");

for (let i = 1; i <= 100; i++){

  const li = document.createElement("li");
  
  let output = i;

  if (!(i % 15)){
    output = "FIZZBUZZ"
    li.classList.add("blue")
  }else if (!(i % 3)){
    output = "FIZZ"
    li.classList.add("red")
  }else if (!(i % 5)){
    output = "BUZZ"
    li.classList.add("green")
  }
  
  li.append(output);

  list.append(li);

}