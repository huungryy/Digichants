<?php get_header(); ?>

<main class="pt-24">
    <?php if (have_posts()): ?>
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()): the_post(); ?>
                    <article class="bg-white rounded-xl shadow-md overflow-hidden">
                        <?php if (has_post_thumbnail()): ?>
                            <div class="relative overflow-hidden">
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-48 object-cover')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="p-6">
                            <h2 class="text-xl font-bold mb-3">
                                <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 transition-colors duration-300">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="text-gray-600 mb-4">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                                <?php _e('Read More', 'digichants'); ?>
                                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <div class="mt-12">
                <?php the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => __('Previous', 'digichants'),
                    'next_text' => __('Next', 'digichants'),
                    'class' => 'flex justify-center gap-2',
                )); ?>
            </div>
        </div>
    <?php else: ?>
        <div class="container mx-auto px-4 py-12 text-center">
            <h2 class="text-2xl font-bold mb-4"><?php _e('No posts found', 'digichants'); ?></h2>
            <p class="text-gray-600"><?php _e('It seems we can't find what you're looking for.', 'digichants'); ?></p>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>