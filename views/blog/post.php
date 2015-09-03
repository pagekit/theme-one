<?php $view->script('post', 'blog:app/bundle/post.js', 'vue') ?>

<article class="uk-article tm-container-small">

    <?php

        $imageSrc = $post->get('image.src');
        $imageAlt = $post->get('image.alt');
    ?>

    <?php if ($imageSrc): ?>
    <img src="<?= $imageSrc ?>" alt="<?= $imageAlt ?>">
    <?php endif ?>

    <h1 class="uk-article-title"><?= $post->title ?></h1>

    <div class="uk-margin"><?= $post->content ?></div>

    <?= $view->render('blog/comments.php') ?>

</article>
