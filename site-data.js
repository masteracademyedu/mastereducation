/*
 * MASTER EDUCATION — CENTRAL WEBSITE SETTINGS
 *
 * নতুন page/link যোগ করার জন্য মূলত এই ফাইলটাই edit করবেন।
 * 1) title = menu-তে যে নাম দেখাবে
 * 2) url   = page-এর নাম বা external URL
 * 3) external = true হলে নতুন tab-এ খুলবে
 *
 * উদাহরণ:
 * { title: 'Voice', url: 'voice.html' }
 * { title: 'YouTube', url: 'https://youtube.com/@...', external: true }
 */

window.MASTER_SITE = {
  brand: {
    name: 'Master Education',
    tagline: 'Learn Today. Lead Tomorrow.'
  },

  // ==============================
  // MAIN MENU — এখানে নতুন link/page যোগ করুন
  // ==============================
  navigation: [
    { title: 'হোম', url: 'index.html' },
    { title: 'কোর্স', url: 'courses.html' },
    { title: 'ইংরেজি', url: 'english.html' },
    { title: 'রিসোর্স', url: 'materials.html' },
    { title: 'Question Bank', url: 'question-bank.html' },
    { title: 'কুইজ', url: 'quiz.html' },
    { title: 'ভিডিও', url: 'videos.html' },
    { title: 'ব্লগ', url: 'blog.html' },
    { title: 'যোগাযোগ', url: 'contact.html' }
  ],

  // ==============================
  // FOOTER LINKS
  // ==============================
  footer: [
    {
      title: 'Courses',
      links: [
        { title: 'SSC 2027', url: 'course-ssc-2027.html' },
        { title: 'SSC 2028', url: 'courses.html' },
        { title: 'HSC', url: 'courses.html' }
      ]
    },
    {
      title: 'English',
      links: [
        { title: 'English Zone', url: 'english.html' },
        { title: 'Suffix & Prefix', url: 'lesson-suffix-prefix.html' },
        { title: 'Quiz', url: 'quiz.html' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'PDF Notes', url: 'materials.html' },
        { title: 'Question Bank', url: 'question-bank.html' },
        { title: 'Videos', url: 'videos.html' }
      ]
    }
  ]
};
