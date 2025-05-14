<?php
/**
 * Template part for displaying stats section
 */
?>

<section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <?php
            $stats = array(
                array(
                    'value' => get_theme_mod('stat_1_value', '10'),
                    'suffix' => get_theme_mod('stat_1_suffix', '+'),
                    'label' => get_theme_mod('stat_1_label', 'Completed Projects')
                ),
                array(
                    'value' => get_theme_mod('stat_2_value', '98'),
                    'suffix' => get_theme_mod('stat_2_suffix', '%'),
                    'label' => get_theme_mod('stat_2_label', 'Client Satisfaction')
                ),
                array(
                    'value' => get_theme_mod('stat_3_value', '250'),
                    'suffix' => get_theme_mod('stat_3_suffix', 'K+'),
                    'label' => get_theme_mod('stat_3_label', 'Ad Impressions')
                ),
                array(
                    'value' => get_theme_mod('stat_4_value', '5'),
                    'suffix' => get_theme_mod('stat_4_suffix', 'x'),
                    'label' => get_theme_mod('stat_4_label', 'Average ROI')
                )
            );

            foreach ($stats as $stat):
            ?>
                <div class="p-4 transform hover:scale-105 transition-transform duration-300">
                    <div class="text-4xl md:text-5xl font-bold mb-2">
                        <?php echo esc_html($stat['value'] . $stat['suffix']); ?>
                    </div>
                    <p><?php echo esc_html($stat['label']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>