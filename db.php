<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=smartsoft", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->query("SELECT name_reviews, comment_reviews FROM reviews");
    $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    

    foreach ($reviews as $review) {
        echo '<div class="response">'; // Открываем DIV для КАЖДОГО отзыва
        
        echo '
        <div class="responseHead">
            <p class="responseTitle">' . htmlspecialchars($review['name_reviews']) . '</p>
        </div>
        <p class="responseText">' . htmlspecialchars($review['comment_reviews']) . '</p>
        ';
        
        echo '</div>'; // Закрываем DIV для каждого отзыва
    }



} catch(PDOException $e) {
    echo "Ошибка: " . $e->getMessage();
}
?>