<footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <?php
                        if (has_custom_logo()) {
                            the_custom_logo();
                        } else {
                            echo get_bloginfo('name');
                        }
                        ?>
                    </div>
                    <?php if ($footer_description = get_theme_mod('footer_description')): ?>
                        <p class="text-gray-400 mb-6"><?php echo esc_html($footer_description); ?></p>
                    <?php endif; ?>
                    
                    <div class="flex space-x-4">
                        <?php if ($facebook = get_theme_mod('facebook_url')): ?>
                            <a href="<?php echo esc_url($facebook); ?>" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500 transition duration-300">
                                <!-- Facebook Icon -->
                            </a>
                        <?php endif; ?>
                        <!-- Add other social media links similarly -->
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-4"><?php _e('Quick Links', 'digichants'); ?></h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container' => false,
                        'menu_class' => 'space-y-2',
                        'fallback_cb' => false,
                    ));
                    ?>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="text-lg font-semibold mb-4"><?php _e('Our Services', 'digichants'); ?></h3>
                    <?php
                    $services = get_posts(array(
                        'post_type' => 'services',
                        'posts_per_page' => 6
                    ));
                    if ($services): ?>
                        <ul class="space-y-2">
                            <?php foreach ($services as $service): ?>
                                <li class="text-gray-400 hover:text-white transition duration-300">
                                    <?php echo esc_html($service->post_title); ?>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="text-lg font-semibold mb-4"><?php _e('Contact Us', 'digichants'); ?></h3>
                    <ul class="space-y-4">
                        <?php if ($address = get_theme_mod('company_address')): ?>
                            <li class="flex items-start gap-3">
                                <span class="text-gray-400"><?php echo esc_html($address); ?></span>
                            </li>
                        <?php endif; ?>
                        
                        <?php if ($phone = get_theme_mod('company_phone')): ?>
                            <li class="flex items-center gap-3">
                                <span class="text-gray-400"><?php echo esc_html($phone); ?></span>
                            </li>
                        <?php endif; ?>
                        
                        <?php if ($email = get_theme_mod('company_email')): ?>
                            <li class="flex items-center gap-3">
                                <span class="text-gray-400"><?php echo esc_html($email); ?></span>
                            </li>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                <p>&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>. <?php _e('All rights reserved.', 'digichants'); ?></p>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>