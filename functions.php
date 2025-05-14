<?php
if (!defined('ABSPATH')) exit;

function digichants_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'digichants'),
        'footer' => __('Footer Menu', 'digichants'),
    ));
}
add_action('after_setup_theme', 'digichants_setup');

function digichants_scripts() {
    wp_enqueue_style('digichants-style', get_stylesheet_uri());
    wp_enqueue_script('digichants-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0', true);
    
    // Enqueue Tailwind CSS
    wp_enqueue_style('tailwindcss', get_template_directory_uri() . '/dist/output.css');
}
add_action('wp_enqueue_scripts', 'digichants_scripts');

// Custom Post Types
function digichants_custom_post_types() {
    // Portfolio
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => __('Portfolio', 'digichants'),
            'singular_name' => __('Portfolio Item', 'digichants')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
        'rewrite' => array('slug' => 'portfolio')
    ));

    // Services
    register_post_type('services', array(
        'labels' => array(
            'name' => __('Services', 'digichants'),
            'singular_name' => __('Service', 'digichants')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-businessman',
        'rewrite' => array('slug' => 'services')
    ));

    // Testimonials
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => __('Testimonials', 'digichants'),
            'singular_name' => __('Testimonial', 'digichants')
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
        'rewrite' => array('slug' => 'testimonials')
    ));
}
add_action('init', 'digichants_custom_post_types');

// Custom Categories for Portfolio
function digichants_custom_taxonomies() {
    register_taxonomy('portfolio_category', 'portfolio', array(
        'hierarchical' => true,
        'labels' => array(
            'name' => __('Portfolio Categories', 'digichants'),
            'singular_name' => __('Portfolio Category', 'digichants')
        ),
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'portfolio-category')
    ));
}
add_action('init', 'digichants_custom_taxonomies');

// Theme Options
function digichants_theme_options() {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page(array(
            'page_title' => 'Theme Options',
            'menu_title' => 'Theme Options',
            'menu_slug' => 'theme-options',
            'capability' => 'edit_posts',
            'redirect' => false
        ));
    }
}
add_action('acf/init', 'digichants_theme_options');