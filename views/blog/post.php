<?php $view->script('post', 'blog:app/bundle/post.js', 'vue') ?>

<article class="uk-article tm-container-small">

    <?php if ($image = $post->get('image.src')): ?>
    <img src="<?= $image ?>" alt="<?= $post->get('image.alt') ?>">
    <?php endif ?>

    <h1 class="uk-article-title"><?= $post->title ?></h1>

    <div class="uk-margin"><?= $post->content ?></div>

    <?= $view->render('blog/comments.php') ?>

</article>
