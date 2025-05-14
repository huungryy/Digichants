<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-[10%] -left-[5%] w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
            <div class="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-400/20 blur-3xl"></div>
        </div>
        
        <div class="container mx-auto px-4 py-20 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        <?php echo get_theme_mod('hero_title', 'Digital Marketing That Delivers Results'); ?>
                    </span>
                </h1>
                
                <p class="text-lg md:text-xl text-gray-600 mb-8">
                    <?php echo get_theme_mod('hero_subtitle', 'We help businesses grow through strategic digital marketing solutions that convert visitors into customers.'); ?>
                </p>
                
                <div class="flex justify-center">
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                        <?php echo get_theme_mod('hero_button_text', 'Get Started'); ?>
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    <?php echo get_theme_mod('services_title', 'Our Digital Marketing Services'); ?>
                </h2>
                <p class="text-gray-600">
                    <?php echo get_theme_mod('services_subtitle', 'We offer comprehensive digital marketing solutions to help your business grow online.'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $services = get_posts(array(
                    'post_type' => 'services',
                    'posts_per_page' => 6
                ));

                foreach ($services as $service):
                    $icon = get_post_meta($service->ID, 'service_icon', true);
                ?>
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                        <?php if ($icon): ?>
                            <div class="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-gradient-to-r from-blue-600 to-purple-600 group-hover:text-white transition-all duration-300">
                                <?php echo $icon; ?>
                            </div>
                        <?php endif; ?>
                        
                        <h3 class="text-xl font-semibold mb-3"><?php echo get_the_title($service); ?></h3>
                        <p class="text-gray-600"><?php echo get_the_excerpt($service); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <?php
                $stats = array(
                    array('value' => '10', 'suffix' => '+', 'label' => 'Completed Projects'),
                    array('value' => '98', 'suffix' => '%', 'label' => 'Client Satisfaction'),
                    array('value' => '250', 'suffix' => 'K+', 'label' => 'Ad Impressions'),
                    array('value' => '5', 'suffix' => 'x', 'label' => 'Average ROI')
                );

                foreach ($stats as $stat):
                ?>
                    <div class="p-4 transform hover:scale-105 transition-transform duration-300">
                        <div class="text-4xl md:text-5xl font-bold">
                            <?php echo $stat['value'] . $stat['suffix']; ?>
                        </div>
                        <p class="mt-2"><?php echo $stat['label']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p class="text-gray-600">
                    Don't just take our word for it. Hear what our clients have to say about working with us.
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <?php
                $testimonials = get_posts(array(
                    'post_type' => 'testimonials',
                    'posts_per_page' => 3
                ));

                foreach ($testimonials as $testimonial):
                    $author = get_post_meta($testimonial->ID, 'testimonial_author', true);
                    $role = get_post_meta($testimonial->ID, 'testimonial_role', true);
                    $company = get_post_meta($testimonial->ID, 'testimonial_company', true);
                ?>
                    <div class="bg-white p-8 rounded-xl shadow-lg mb-8">
                        <div class="flex flex-col h-full">
                            <div class="mb-6">
                                <svg class="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                </svg>
                                <p class="text-gray-600 italic"><?php echo get_the_content(null, false, $testimonial); ?></p>
                            </div>
                            <div class="mt-auto flex items-center">
                                <?php if (has_post_thumbnail($testimonial)): ?>
                                    <?php echo get_the_post_thumbnail($testimonial, 'thumbnail', array('class' => 'w-12 h-12 rounded-full object-cover mr-4')); ?>
                                <?php endif; ?>
                                <div>
                                    <h4 class="font-semibold text-gray-800"><?php echo esc_html($author); ?></h4>
                                    <p class="text-sm text-gray-500">
                                        <?php echo esc_html($role); ?>, <?php echo esc_html($company); ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Ready to Grow Your Business?
            </h2>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Let's work together to create a digital strategy that drives results for your business.
            </p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                Get in Touch
            </a>
        </div>
    </section>
</main>

<?php get_footer(); ?>