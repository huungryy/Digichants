<?php get_header(); ?>

<main class="pt-24">
    <!-- Hero Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p class="text-xl text-gray-600">
                    Get in touch with our team to discuss how we can help your business grow.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
                    
                    <?php
                    if (function_exists('ninja_forms_display_form')):
                        ninja_forms_display_form(1); // Replace with your form ID
                    else:
                    ?>
                        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                            <input type="hidden" name="action" value="contact_form">
                            <?php wp_nonce_field('contact_form_nonce'); ?>
                            
                            <div class="mb-4">
                                <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" id="name" name="name" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300">
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" required
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300">
                                </div>
                                
                                <div>
                                    <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300">
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <label for="service" class="block text-gray-700 font-medium mb-2">Service You're Interested In</label>
                                <select id="service" name="service" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300">
                                    <option value="">Select a service</option>
                                    <?php
                                    $services = get_posts(array('post_type' => 'services', 'posts_per_page' => -1));
                                    foreach ($services as $service):
                                    ?>
                                        <option value="<?php echo esc_attr($service->post_title); ?>">
                                            <?php echo esc_html($service->post_title); ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            
                            <div class="mb-6">
                                <label for="message" class="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" rows="4" required
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"></textarea>
                            </div>
                            
                            <button type="submit"
                                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    <?php endif; ?>
                </div>
                
                <!-- Contact Info -->
                <div>
                    <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg mb-1">Our Location</h3>
                                <p class="text-gray-600">
                                    <?php echo nl2br(get_theme_mod('company_address', "123 Digital Avenue, Tech Park\nSuite 101, Business District\nNew York, NY 10001")); ?>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg mb-1">Phone Number</h3>
                                <p class="text-gray-600">
                                    <?php echo get_theme_mod('company_phone', '+1 (555) 123-4567'); ?>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg mb-1">Email Address</h3>
                                <p class="text-gray-600">
                                    <?php echo get_theme_mod('company_email', 'info@digichants.com'); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Map -->
                    <?php if ($google_maps_embed = get_theme_mod('google_maps_embed')): ?>
                        <div class="mt-8 rounded-xl overflow-hidden shadow-lg h-80">
                            <?php echo $google_maps_embed; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>