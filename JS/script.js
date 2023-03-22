const list = document.querySelector(".list");

for (let i = 1; i <= 100; i++){

  const li = document.createElement("li");
  li.append(`${i}`)

  if (!(i % 3)){
    li.append(`FIZZ`)
  }else if (!(i % 5)){
    li.append(`BUZZ`)
  }else if (!(i % 15)){
    li.append(`FIZZBUZZ`)
  }

  list.append(li);

}