function longName(name1, name2, name3) {
  alert(`Самое длинное имя из \n Alex \n George \n Michael`)

  if (name1.length > name2.length && name1.length > name3.length) {
    alert(name1)
  } else if (name2.length > name1.length && name2.length > name3.length) {
    alert(name2)
  } else {
    alert(name3)
  }
  
}

longName('Alex', 'Michael', 'George',)


function car(percentCarDefect) {
  
  let carCol = +prompt('Введите число отправленных машин');
  let defect = +prompt('Введите число бракованнах машин')
  let percent = alert(`${Math.round(defect * 100 / carCol)} % брака из поставляемых машин`)

}

car();

function fibonacci (num) {
  
  let number = +prompt('Введите число до которого должна считать функция')
  let a = 0
  let b = 1

  for(i = 0; (a + b) <= number; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}

fibonacci();