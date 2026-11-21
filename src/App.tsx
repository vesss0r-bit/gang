import { useState, useEffect, useRef } from 'react';

// ===== Navbar =====
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#projects', label: 'Проекты' },
    { href: '#about', label: 'О нас' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold gradient-text">Nexus</a>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
            Начать проект
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ===== Hero Section =====
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-violet-300 mb-6">
            ✨ Креативное digital-агентство
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Создаём<br />
          <span className="gradient-text">цифровое будущее</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Разрабатываем уникальные веб-решения, которые помогают бизнесу расти и выделяться в цифровом мире
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium hover:scale-105 transition-transform animate-pulse-glow">
            Смотреть проекты
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
            Обсудить проект →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          {[
            { number: '150+', label: 'Проектов' },
            { number: '50+', label: 'Клиентов' },
            { number: '7', label: 'Лет опыта' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60"></div>
        </div>
      </div>
    </section>
  );
}

// ===== Services Section =====
function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Дизайн',
      description: 'Создаём интуитивные интерфейсы, которые пользователи полюбят. Исследования, прототипы, дизайн-системы.',
      color: 'from-violet-500/20 to-purple-500/20',
    },
    {
      icon: '💻',
      title: 'Веб-разработка',
      description: 'Современные сайты и веб-приложения на React, Next.js, Vue. Быстрые, адаптивные, SEO-оптимизированные.',
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: '📱',
      title: 'Мобильные приложения',
      description: 'Нативные и кроссплатформенные приложения для iOS и Android. React Native, Flutter.',
      color: 'from-pink-500/20 to-rose-500/20',
    },
    {
      icon: '🚀',
      title: 'Digital-маркетинг',
      description: 'Стратегии продвижения, SEO, контент-маркетинг и аналитика для роста вашего бизнеса.',
      color: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: '⚡',
      title: 'Оптимизация',
      description: 'Ускоряем сайты, оптимизируем производительность и улучшаем Core Web Vitals.',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: '🛡️',
      title: 'Поддержка',
      description: 'Техническая поддержка 24/7, мониторинг, обновления и развитие ваших проектов.',
      color: 'from-indigo-500/20 to-violet-500/20',
    },
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">Что мы делаем</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Наши услуги</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Полный спектр digital-услуг для вашего бизнеса — от идеи до реализации и поддержки</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass rounded-2xl p-8 card-hover group">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Projects Section =====
function Projects() {
  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Веб-приложение',
      description: 'Панель управления для финансовой платформы с real-time аналитикой',
      gradient: 'from-violet-600 to-indigo-600',
    },
    {
      title: 'EcoMarket',
      category: 'E-commerce',
      description: 'Маркетплейс экологичных товаров с AI-рекомендациями',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'MedConnect',
      category: 'Мобильное приложение',
      description: 'Платформа телемедицины с видеоконсультациями',
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'ArtSpace',
      category: 'Креатив',
      description: 'Виртуальная галерея для цифровых художников',
      gradient: 'from-pink-600 to-rose-600',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Наши проекты</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Каждый проект — это уникальная история успеха наших клиентов</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer">
              <div className={`h-72 bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-end relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-wider text-white/70">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== About Section =====
function About() {
  const team = [
    { name: 'Алексей Петров', role: 'CEO & Founder', emoji: '👨‍💼' },
    { name: 'Мария Иванова', role: 'Lead Designer', emoji: '👩‍🎨' },
    { name: 'Дмитрий Козлов', role: 'Tech Lead', emoji: '👨‍💻' },
    { name: 'Анна Смирнова', role: 'Project Manager', emoji: '👩‍💼' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">О команде</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Мы — Nexus Digital</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Команда увлечённых профессионалов, которые верят в силу дизайна и технологий. 
              Мы помогаем брендам находить свой голос в цифровом пространстве.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Наш подход — это сочетание креативности, технического мастерства и глубокого понимания бизнес-целей клиента. 
              Каждый проект для нас — это возможность создать что-то выдающееся.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '98%', label: 'Довольных клиентов' },
                { value: '24/7', label: 'Поддержка' },
                { value: '< 2 нед', label: 'Срок запуска MVP' },
                { value: '100%', label: 'Вовлечённость' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4">
                  <div className="text-2xl font-bold gradient-text">{item.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {team.map((member, index) => (
              <div key={index} className={`glass rounded-2xl p-6 text-center card-hover ${index % 2 === 1 ? 'mt-8' : ''}`}>
                <div className="text-4xl mb-3">{member.emoji}</div>
                <h4 className="font-semibold text-sm">{member.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Testimonials =====
function Testimonials() {
  const testimonials = [
    {
      text: 'Nexus полностью трансформировали наш онлайн-бизнес. Конверсия выросла на 340% за первые 3 месяца.',
      author: 'Игорь Волков',
      company: 'TechStart',
    },
    {
      text: 'Профессиональная команда, которая слышит клиента. Результат превзошёл все ожидания.',
      author: 'Елена Морозова',
      company: 'GreenLife',
    },
    {
      text: 'Лучшее агентство, с которым мы работали. Внимание к деталям и скорость выполнения на высшем уровне.',
      author: 'Максим Соколов',
      company: 'DataFlow',
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-pink-400 text-sm font-medium uppercase tracking-wider">Отзывы</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Что говорят клиенты</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="glass rounded-2xl p-8 card-hover">
              <div className="text-violet-400 text-3xl mb-4">"</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>
              <div>
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="text-gray-500 text-xs">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Contact Section =====
function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Контакты</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Давайте создадим<br /><span className="gradient-text">что-то великое</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Расскажите о вашем проекте, и мы свяжемся с вами в течение 24 часов</p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2">Спасибо!</h3>
              <p className="text-gray-400">Мы получили ваше сообщение и скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Имя</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Сообщение</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Отправить сообщение
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '📧', label: 'Email', value: 'hello@nexus.digital' },
            { icon: '📱', label: 'Телефон', value: '+7 (999) 123-45-67' },
            { icon: '📍', label: 'Адрес', value: 'Москва, Россия' },
          ].map((item) => (
            <div key={item.label} className="text-center glass rounded-xl p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs text-gray-400">{item.label}</div>
              <div className="text-sm font-medium mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold gradient-text">Nexus</a>
            <p className="text-gray-400 text-sm mt-3 max-w-sm">
              Креативное digital-агентство, которое превращает идеи в цифровую реальность.
            </p>
            <div className="flex gap-4 mt-5">
              {['Telegram', 'GitHub', 'Dribbble', 'Behance'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-xs text-gray-400 hover:text-white transition-colors">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Дизайн</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          © 2026 Nexus Digital. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

// ===== Main App =====
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
