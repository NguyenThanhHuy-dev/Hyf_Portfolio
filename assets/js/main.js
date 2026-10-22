(function () {
  var GH = 'https://github.com/NguyenThanhHuy-dev/';

  var REPOS = [
    { name: 'TH_app', lang: 'Vue',
      en: 'A Vue web application with a live deployment on Vercel.',
      vi: 'Ứng dụng web Vue, đã triển khai thực tế trên Vercel.' },
    { name: 'JobTrackerFE', lang: 'JavaScript',
      en: 'The front end of a job application tracker.',
      vi: 'Giao diện của ứng dụng theo dõi tiến trình ứng tuyển.' },
    { name: 'JobTrackBE', lang: 'Java',
      en: 'The Java back end that powers the job tracker.',
      vi: 'Back end Java vận hành ứng dụng theo dõi việc làm.' },
    { name: 'EisenhowerMobileApp', lang: 'Kotlin',
      en: 'An Android app in Kotlin built around the Eisenhower matrix.',
      vi: 'Ứng dụng Android bằng Kotlin xây dựng theo ma trận Eisenhower.' },
    { name: 'Workout-Tracker', lang: 'Python',
      en: 'A workout tracking application written in Python.',
      vi: 'Ứng dụng theo dõi luyện tập viết bằng Python.' },
    { name: 'CVRP_PedroClone', lang: 'Python',
      en: 'A solver for the capacitated vehicle routing problem.',
      vi: 'Bộ giải bài toán định tuyến xe có giới hạn tải trọng (CVRP).' },
    { name: 'Cloud_sneaker', lang: 'HTML',
      en: 'A sneaker store web front end.',
      vi: 'Giao diện web cho cửa hàng giày sneaker.' },
    { name: 'TracieGame', lang: 'GDScript',
      en: 'A game project built with the Godot engine.',
      vi: 'Dự án game phát triển trên engine Godot.' }
  ];

  var T = {
    en: {
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.work': 'Expertise',
      'nav.projects': 'Projects', 'nav.freelance': 'Freelance', 'nav.contact': 'Contact',
      'hero.eyebrow': '~/huy — Fullstack Developer',
      'hero.title': 'Building commerce platforms and apps people enjoy using.',
      'hero.text': 'I am Huy, a Computer Science graduate of the University of Engineering and Technology, VNU Hanoi. I deliver polished web and mobile products with Magento 2, Vue.js, React.js and Kotlin, and apply AI agents to raise both speed and code quality.',
      'hero.cta1': 'View GitHub', 'hero.cta2': 'Contact me',
      'about.title': 'Engineering across the interface and the system.',
      'about.p1': 'I work as a Fullstack Developer with Magento 2, Vue.js and React.js, and build mobile applications with Kotlin. I am comfortable with data layers, including MySQL and MongoDB.',
      'about.p2': 'My focus is website interfaces for E-commerce and Landing Page projects. I care about aesthetics, UX/UI, consistent behavior across devices, and how a product holds up once it is deployed.',
      'about.p3': 'I use AI agent tools to streamline IT work: analyzing requirements, writing and optimizing code, tracing bugs, building interfaces, and integrating AI models and Skills to automate suitable tasks. I keep learning new technologies and methods to improve quality and delivery speed.',
      'skills.title': 'Core technologies.', 'skills.data': 'Data', 'skills.ai': 'AI Agents', 'skills.auto': 'Automation',
      'work.title': 'Areas of expertise.',
      'work.1.tag': 'E-commerce & Landing Page',
      'work.1.title': 'Storefronts that turn visitors into customers',
      'work.1.text': 'From Magento 2 catalogs to conversion-focused landing pages, I design interfaces that look refined, load quickly and feel natural on every screen.',
      'work.2.tag': 'Mobile',
      'work.2.title': 'Android apps built for daily use',
      'work.2.text': 'Kotlin applications with a clear structure and a dependable data layer on MySQL or MongoDB, designed to stay simple for the people using them.',
      'work.3.tag': 'AI workflow',
      'work.3.title': 'AI agents as a force multiplier',
      'work.3.text': 'I use agents and custom Skills to analyze requirements, write and review code, trace bugs and automate repetitive tasks, shipping faster without lowering the bar.',
      'projects.title': 'Selected projects.',
      'projects.all': 'View all repositories on GitHub →',
      'free.title': 'Language and digital content services.',
      'free.1.tag': 'Translation',
      'free.1.title': 'Translation that reads naturally',
      'free.1.text': 'Game localization and Vietnamese–English translation for novels, films and documents, written to read as if it were originally composed in the target language.',
      'free.2.tag': 'Video & subtitles',
      'free.2.title': 'Subtitles that feel effortless',
      'free.2.text': 'Video editing with careful subtitle editing and timing sync, so viewers follow the story without ever noticing the text.',
      'contact.title': 'Let us discuss your project.',
      'contact.text': 'Source code and projects are available on GitHub. For fullstack or freelance engagements, please contact me by email.'
    },
    vi: {
      'nav.about': 'Giới thiệu', 'nav.skills': 'Kỹ năng', 'nav.work': 'Chuyên môn',
      'nav.projects': 'Dự án', 'nav.freelance': 'Freelance', 'nav.contact': 'Liên hệ',
      'hero.eyebrow': '~/huy — Fullstack Developer',
      'hero.title': 'Xây dựng nền tảng thương mại và ứng dụng khiến người dùng muốn quay lại.',
      'hero.text': 'Tôi là Huy, cử nhân Khoa học máy tính, Trường Đại học Công nghệ, ĐHQG Hà Nội. Tôi phát triển sản phẩm web và di động chỉn chu với Magento 2, Vue.js, React.js, Kotlin, đồng thời ứng dụng AI Agent để tăng cả tốc độ lẫn chất lượng mã nguồn.',
      'hero.cta1': 'Xem GitHub', 'hero.cta2': 'Liên hệ',
      'about.title': 'Phát triển xuyên suốt từ giao diện đến hệ thống.',
      'about.p1': 'Tôi làm Fullstack Developer với Magento 2, Vue.js và React.js, đồng thời phát triển ứng dụng di động bằng Kotlin. Tôi nắm vững tầng dữ liệu, làm việc với MySQL và MongoDB.',
      'about.p2': 'Trọng tâm của tôi là giao diện website cho các dự án E-commerce và Landing Page. Tôi chú trọng tính thẩm mỹ, UX/UI, trải nghiệm nhất quán trên nhiều thiết bị và khả năng vận hành ổn định khi triển khai.',
      'about.p3': 'Tôi dùng công cụ AI Agent để tối ưu công việc CNTT: phân tích yêu cầu, viết và tối ưu mã, tìm và xử lý lỗi, dựng giao diện, tích hợp mô hình AI và Skills để tự động hóa tác vụ phù hợp. Tôi luôn học hỏi công nghệ và phương pháp mới để nâng cao chất lượng và tốc độ triển khai.',
      'skills.title': 'Công nghệ cốt lõi.', 'skills.data': 'Dữ liệu', 'skills.ai': 'AI Agent', 'skills.auto': 'Tự động hóa',
      'work.title': 'Lĩnh vực chuyên môn.',
      'work.1.tag': 'E-commerce & Landing Page',
      'work.1.title': 'Gian hàng biến người xem thành khách hàng',
      'work.1.text': 'Từ danh mục sản phẩm Magento 2 đến landing page tối ưu chuyển đổi, tôi thiết kế giao diện tinh tế, tải nhanh và tự nhiên trên mọi màn hình.',
      'work.2.tag': 'Di động',
      'work.2.title': 'Ứng dụng Android dành cho việc dùng hằng ngày',
      'work.2.text': 'Ứng dụng Kotlin có cấu trúc rõ ràng, tầng dữ liệu đáng tin cậy trên MySQL hoặc MongoDB, giữ trải nghiệm đơn giản cho người dùng.',
      'work.3.tag': 'Quy trình AI',
      'work.3.title': 'AI Agent nhân đôi năng suất',
      'work.3.text': 'Tôi dùng agent và Skills tùy biến để phân tích yêu cầu, viết và rà soát mã, truy vết lỗi, tự động hóa việc lặp lại, giao sản phẩm nhanh hơn mà không hạ chuẩn chất lượng.',
      'projects.title': 'Dự án tiêu biểu.',
      'projects.all': 'Xem tất cả repository trên GitHub →',
      'free.title': 'Dịch vụ ngôn ngữ và nội dung số.',
      'free.1.tag': 'Dịch thuật',
      'free.1.title': 'Bản dịch đọc tự nhiên như bản gốc',
      'free.1.text': 'Dịch game và dịch Việt – Anh cho truyện, phim, tài liệu, trau chuốt để đọc như thể được viết trực tiếp bằng ngôn ngữ đích.',
      'free.2.tag': 'Video & phụ đề',
      'free.2.title': 'Phụ đề nhẹ nhàng, không gây xao nhãng',
      'free.2.text': 'Biên tập video, chỉnh sửa và đồng bộ phụ đề cẩn thận để người xem theo dõi câu chuyện mà không bị gián đoạn.',
      'contact.title': 'Trao đổi về dự án của bạn.',
      'contact.text': 'Mã nguồn và các dự án có trên GitHub. Với công việc fullstack hoặc freelance, vui lòng liên hệ qua email.'
    }
  };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function renderRepos(lang) {
    var box = document.getElementById('repos');
    box.textContent = '';
    REPOS.forEach(function (r) {
      var a = el('a', 'card repo');
      a.href = GH + r.name;
      a.target = '_blank';
      a.rel = 'noopener';
      var head = el('div', 'repo-head');
      head.appendChild(el('span', 'repo-name', r.name));
      head.appendChild(el('span', 'repo-lang', r.lang));
      a.appendChild(head);
      a.appendChild(el('p', '', r[lang]));
      box.appendChild(a);
    });
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.title = lang === 'vi' ? 'Huy – Lập trình viên Fullstack' : 'Huy – Fullstack Developer';
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var v = T[lang][n.getAttribute('data-i18n')];
      if (v) n.textContent = v;
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    renderRepos(lang);
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  var saved = 'en';
  try { saved = localStorage.getItem('lang') === 'vi' ? 'vi' : 'en'; } catch (e) {}
  apply(saved);
})();
