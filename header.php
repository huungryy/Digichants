<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <header class="fixed w-full top-0 z-50 transition-all duration-300 <?php echo is_front_page() ? 'bg-transparent' : 'bg-white shadow-md'; ?>">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex justify-between items-center py-4">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2 text-2xl font-bold text-blue-600">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        echo get_bloginfo('name');
                    }
                    ?>
                </a>

                <nav class="hidden md:flex items-center space-x-8">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'flex items-center space-x-8',
                        'fallback_cb' => false,
                    ));
                    ?>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                        Contact Us
                    </a>
                </nav>

                <button class="md:hidden text-gray-700 focus:outline-none" id="mobile-menu-button">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="md:hidden hidden" id="mobile-menu">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'py-4 space-y-4',
                    'fallback_cb' => false,
                ));
                ?>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="block py-2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-center mt-4">
                    Contact Us
                </a>
            </div>
        </div>
    </header>