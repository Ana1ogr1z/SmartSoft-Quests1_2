//Проверка подключения библиотек
console.log(typeof $ !== 'undefined' ? '✅ jQuery подключен' : '❌ jQuery не найден');
console.log(typeof bootstrap !== 'undefined' ? '✅ Bootstrap подключен' : '❌ Bootstrap не найден');

//Для второй
document.getElementById('order_form').addEventListener('submit', function(e) {e.preventDefault();
    
    //Значения из формы
    const fullname = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const orderComm = document.getElementById('order_comm').value;
    const isContractAccepted = document.getElementById('contract').checked;

    //Сообщение
    const message = `
        <strong>Полное имя:</strong> ${fullname}<br>
        <strong>Адрес доставки:</strong> ${address}<br>
        <strong>Комментарий:</strong> ${orderComm || '—'}<br>
        <strong>Договор принят:</strong> ${isContractAccepted ? 'Да' : 'Нет'}
    `;

    //Алерт
    Swal.fire({
        title: 'Ваш заказ',
        html: message,
        icon: 'success',
        confirmButtonText: 'OK'
    });
});

//для первой
document.addEventListener('DOMContentLoaded', loadAndDisplayReviews);
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("sendButton").addEventListener("click",function(){
        
        let username = $('#username').val().trim() || "";
        let usersurname = $('#usersurname').val().trim() || "";
        let email = $('#email').val().trim() || "";
        let message = $('#message').val().trim() || "";

        $('#result').text('Отправка запроса на сервер...');
        
        $.ajax({
            url: 'https://httpbin.org/post',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                username: username,
                usersurname: usersurname,
                email: email,
                message: message
            }),

            success: function(response) {
                $('#result').html(
                    '<strong>Успешный ответ от сервера:</strong><br>' + JSON.stringify(response, null, 2)
                );
            },
            
            error: function(xhr, status, error) {
                $('#result').html(
                    '<strong>Произошла ошибка:</strong><br>' +
                    'Статус: ' + status + '<br>' +
                    'Текст ошибки: ' + error
                );

                console.error('AJAX Error:', status, error);
                console.error('Full response:', xhr.responseText);
            },
            
            complete: function() {
                console.log('AJAX запрос завершен');
            }
        });
    });
});

//Проверка подключения библиотек
console.log(typeof $ !== 'undefined' ? '✅ jQuery подключен' : '❌ jQuery не найден');
console.log(typeof bootstrap !== 'undefined' ? '✅ Bootstrap подключен' : '❌ Bootstrap не найден');