 <!--Первая форма ввода данных-->
        <form action="" method="" class="panel" id="user_info">
            <p></p>
            <div>   
                <label>Имя</label><br>
                <input minlength="3" type="text" required id="username" name="username"><br>
            </div>
            <div>
                <label>Фамилия</label><br>
                <input type="text" id="usersurname" name="usersurname"><br>
            </div>
            <div>
                <label>Почта</label><br>
                <input type="email" required id="email" name="email"><br>
            </div>
            <div>
                <label>Сообщение</label><br>
                <textarea required maxlength="80" id = "message" name="message"></textarea><br>
            </div>
                <button type="submit" id="sendButton">Отправить</button>
            <p></p>
        </form>