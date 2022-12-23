window.onload = () => {

    // 1) Створити форму валідації яка отримує:
    //     нікнейм, повино  бути мінімум 2 символа,
    //     емейл повинен перевіряти валідність і не пропускати невалідні емейли
    // номер  телефону, повиенен перевіряти номер на валідність і пропускати номери телефону тільки з +3
    let name = document.querySelector('.login')
    let phone = document.querySelector('.phone')
    let email = document.querySelector('.email')
    let btnLog = document.querySelector('.Log_Btn')

    let namePattern = /\w{2,}/
    let phonePattern = /^\+38\d{3}\d{3}\d{2}\d{2}$\b/
    let emailPattern = /\b[a-zA-Z0-9._]+@[a-z]{2,5}\.[a-z]{2,6}\b/

    let validName = false
    let validPhone = false
    let validEmail = false

    name.onchange = function () {
        if (namePattern.test(name.value)) {
            validName = true
        } else {
            alert(`Вы ввели не правильное Имя`)
            validName = false
        }
        checkValid()
    }

    phone.onchange = function () {
        if (phonePattern.test(phone.value)) {
            validPhone = true
        } else {
            alert(`Вы ввели не правильный телефон`)
            validPhone = false
        }
        checkValid()
    }

    email.onchange = function () {
        if (emailPattern.test(email.value)) {
            validEmail = true
        } else {
            alert(`Вы ввели не правильный Email`)
            validEmail = false
        }
        checkValid()
    }

    function checkValid() {
        if (validName == true && validEmail == true && validPhone == true) {
            btnLog.style.opacity = '1'
            btnLog.disabled = false
            btnLog.onclick = function () {
                alert(`Вход Выполнен`)
            }

        }
    }

    //2) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
    // CountLowrercase("abc"); ===> 3
    //
    // CountLowrercase("abcABC123"); ===> 3
    //
    // CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

    let upperCase = document.querySelector('.UpperCase')
    let upPattern = /[A-Z]/g

    function checkUp(letters) {
        if (upPattern.test(letters)) {
            let output = letters.match(upPattern)
            document.querySelector('.output').innerHTML = (output.length)
        }
    }

    upperCase.onchange = function () {
        checkUp(upperCase.value)
    }


//3) Написати функцію яка видаляє всі тексктові символи з стрінка, а отриманні цифрові значення переводить в тип намбер та повертає його
// fclearString("hell5o wor6ld")  ======> 56

    let Numbers = document.querySelector('.Numbers')

    function number(num) {
        let numPattern = /[0-9]/g;
        if (numPattern.test(num)) {
            let result = num.match(numPattern);
            let res = Number(num)
            document.querySelector('.output2').innerHTML = (`${result} тип данных: ${typeof (res)}`);
        }

    }

    Numbers.onchange = function () {
        number(this.value)
    }

    //4) Створіть колор пікер який змінює значення кольору body і записує значення в sessionStorage. При завантаженні сторінки сешен сторедж повинен перевірятись, якщо там є ключ зі значенням кольору для body треюа примінити цей колір до body

    let btn = document.querySelector('.Color')
    function changeBody (event) {
        let color = event.target.value
        window.sessionStorage.setItem('BG', event.target.value)
        document.body.style.background = color
    }
    if (window.sessionStorage.getItem('BG') != null){
        document.body.style.background = btn.value
    }
    btn.addEventListener("change", changeBody,false);




    //5) Створити інпут який отримує пін код ( це 4 цифрових значення). За допомогою регулярки перевітити чи валідний пін код ввів користувач

    let pin = document.querySelector('.PIN')
    let pinPattern = /^[0-9]{4}$/
    let validPin = false

    function checkPin(pin) {
        if (pinPattern.test(pin)) {
            validPin = true
            document.querySelector('.output5').innerHTML = `${pin} Вы ввели правильный пин код`
        } else {
            document.querySelector('.output5').innerHTML = `${pin} Вы ввели правильный не валидный пин код`
        }
    }

    pin.onchange = function () {

        checkPin(this.value)
    }


    //6) Створити регулярку яка отримує адресс сторінки і повертає тільки адресс
    // "https://prog.academy/?page=1" -->"https://prog.academy/"

    let socialPattern = /https:\W{2}\w{4}\.\w{7}/
    function getSocial(social) {
        let result = social.match(socialPattern)
        document.querySelector('.output6').innerHTML = `${result} Переделаная ссылка`
    }
    getSocial('https://prog.academy/?page=1')
}