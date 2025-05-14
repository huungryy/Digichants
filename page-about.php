<?php get_header(); ?>

<main class="pt-24">
    <!-- Hero Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">
                    About <?php echo get_bloginfo('name'); ?>
                </h1>
                <p class="text-xl text-gray-600">
                    <?php echo get_theme_mod('about_subtitle', 'We\'re a team of digital marketing experts passionate about helping businesses grow online.'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- CEO Section -->
    <section class="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
                    <?php 
                    $ceo_image = get_theme_mod('ceo_image');
                    if ($ceo_image):
                    ?>
                        <img 
                            src="<?php echo esc_url($ceo_image); ?>"
                            alt="Piyush Kumar - CEO & Founder" 
                            class="relative z-10 rounded-2xl shadow-lg"
                        />
                    <?php endif; ?>
                </div>
                
                <div>
                    <div class="mb-6">
                        <h2 class="text-3xl font-bold mb-2">Piyush Kumar</h2>
                        <p class="text-xl text-blue-600 mb-6">CEO & Founder</p>
                        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
                        <p class="text-gray-600 mb-6">
                            <?php echo get_theme_mod('ceo_bio', 'With over 7 years of experience in digital marketing, Piyush has helped numerous businesses achieve remarkable growth through innovative digital strategies and data-driven approaches.'); ?>
                        </p>
                        <div class="bg-white p-6 rounded-xl shadow-md relative">
                            <svg class="absolute -top-3 -left-3 w-8 h-8 text-blue-600 bg-white rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                            <p class="text-gray-700 italic">
                                <?php echo get_theme_mod('ceo_quote', '"Our mission is to empower businesses with cutting-edge digital solutions that drive real results. We\'re not just service providers; we\'re growth partners committed to our clients\' success."'); ?>
                            </p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <div class="bg-white p-4 rounded-lg shadow-md text-center">
                            <div class="text-2xl font-bold text-blue-600 mb-1">7+</div>
                            <div class="text-gray-600">Years Experience</div>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-md text-center">
                            <div class="text-2xl font-bold text-purple-600 mb-1">50+</div>
                            <div class="text-gray-600">Projects Led</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl font-bold mb-4">Meet Our Team</h2>
                <p class="text-gray-600">
                    The talented people behind our successful projects.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <?php
                $team_members = get_posts(array(
                    'post_type' => 'team',
                    'posts_per_page' => -1
                ));

                foreach ($team_members as $member):
                    $role = get_post_meta($member->ID, 'team_role', true);
                    $bio = get_post_meta($member->ID, 'team_bio', true);
                ?>
                    <div class="bg-white rounded-xl shadow-md overflow-hidden group">
                        <?php if (has_post_thumbnail($member)): ?>
                            <div class="relative overflow-hidden">
                                <?php echo get_the_post_thumbnail($member, 'large', array('class' => 'w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110')); ?>
                            </div>
                        <?php endif; ?>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-1"><?php echo get_the_title($member); ?></h3>
                            <p class="text-blue-600 mb-3"><?php echo esc_html($role); ?></p>
                            <p class="text-gray-600"><?php echo esc_html($bio); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/content', 'stats'); ?>
</main>

<?php get_footer(); ?>