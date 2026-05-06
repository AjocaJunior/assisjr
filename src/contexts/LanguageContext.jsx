import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  const translations = {
    pt: {
      // Header
      greeting: "Olá, eu sou",
      name: "Assis Júnior",
      subtitle: "Engenheiro de Software | Java, Spring Boot, BI & Sistemas Empresariais",
      scrollDown: "Role para baixo",

      // Nav
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      services: "Serviços",
      contact: "Contato",

      // About
      aboutTitle: "Saiba um pouco",
      aboutSubtitle: "SOBRE MIM",
      aboutExperience: "Experiência",
      aboutExperienceDesc: "+ de 6 Anos de Experiência",
      aboutSystems: "Sistemas Empresariais",
      aboutSystemsDesc: "Experiência em Java, SQL e integrações",
      aboutProjects: "Projectos",
      aboutProjectsDesc: "Web, APIs, BI e soluções digitais",
      aboutDescription: "Licenciado em Informática de Gestão e estudante do 2.º ano do Mestrado em Engenharia Informática e Tecnologias Web na Uab.pt. Tenho experiência no desenvolvimento e manutenção de sistemas empresariais, APIs, integrações, bases de dados SQL e aplicações web. Trabalho com Java, Spring Boot, JavaEE, SQL, JasperReports, GitLab, Jenkins, Tomcat, Linux, e tenho investigado BI e Gen AI.",
      aboutBtn: "Saber Mais",

      // Experience
      experienceTitle: "Quais habilidades tenho?",
      experienceSubtitle: "Minha Experiência",
      frontendTitle: "Web & Frontend",
      backendTitle: "Backend & Sistemas Empresariais",
      toolsTitle: "BI, Dados & Ferramentas",
      advanced: "Avançado",
      intermediate: "Intermédio",

      // Services
      servicesTitle: "O que faço",
      servicesSubtitle: "Serviços",
      backendDevTitle: "Desenvolvimento Backend",
      backendDev1: "Construção de APIs REST",
      backendDev2: "Integrações com sistemas externos",
      backendDev3: "Manutenção de sistemas Java",
      backendDev4: "Gestão de bases de dados SQL e NoSQL",
      backendDev5: "Relatórios com JasperReports",
      webDevTitle: "Desenvolvimento Web",
      webDev1: "Aplicações em ReactJs, AngularJs & Flutter",
      webDev2: "Sites institucionais",
      webDev3: "Portfólios profissionais",
      webDev4: "Métodos de Pagamento",
      webDev5: "Integração com formulários",
      biTitle: "Business Intelligence & Dados",
      bi1: "Criação de dashboards em Power BI",
      bi2: "Análise de indicadores",
      bi3: "Modelação de dados",
      bi4: "Relatórios para apoio à decisão",
      bi5: "Tratamento e organização de dados",

      // Portfolio
      portfolioTitle: "Meus trabalhos",
      portfolioSubtitle: "Portfólio",
      github: "Github",
      liveDemo: "Live Demo",

      // References
      referencesTitle: "Referências dos meus trabalhos",
      referencesSubtitle: "Referências",
      ref1Name: "Inácio Sumbana",
      ref1Review: "Fundador e Presidente da MozSistemas",
      ref2Name: "Edson Manhique",
      ref2Review: "Presidente da Enpersol Africa e Dre Consultores",
      ref3Name: "Nélio Macombo",
      ref3Review: "Ex-Presidente da MozDevz e Engenheiro na Vodacom",
      ref4Name: "Cassamo Nuvunga",
      ref4Review: "Presidente da CADE",
      ref5Name: "Crisóstomo Magaia",
      ref5Review: "Chefe de Repartição do SDSI",

      // Contact
      contactTitle: "Mais informações",
      contactSubtitle: "Contact Me",
      email: "Email",
      messenger: "Messenger",
      whatsapp: "Whatsapp",
      sendMessage: "Envie uma mensagem",
      namePlaceholder: "Nome e Sobrenome",
      emailPlaceholder: "Seu Email",
      messagePlaceholder: "Sua Mensagem",
      sendButton: "Enviar Mensagem",

      // Footer
      footerHome: "Home",
      footerAbout: "Sobre",
      footerExperience: "Experiência",
      footerServices: "Serviços",
      footerPortfolio: "Portfólio",
      footerReferences: "Referências",
      footerContact: "Contacto",
      footerCopyright: "Ajoca Solutions - Todos os direitos reservados.",

      // Footer
      footerMessage: "Obrigado por visitar meu portfólio!"
    },
    en: {
      // Header
      greeting: "Hi, I'm",
      name: "Assis Júnior",
      subtitle: "Software Engineer | Java, Spring Boot, BI & Enterprise Systems",
      scrollDown: "Scroll Down",

      // Nav
      home: "Home",
      about: "About",
      experience: "Experience",
      services: "Services",
      contact: "Contact",

      // About
      aboutTitle: "Get to know me",
      aboutSubtitle: "ABOUT ME",
      aboutExperience: "Experience",
      aboutExperienceDesc: "6+ Years of Experience",
      aboutSystems: "Enterprise Systems",
      aboutSystemsDesc: "Experience in Java, SQL and integrations",
      aboutProjects: "Projects",
      aboutProjectsDesc: "Web, APIs, BI and digital solutions",
      aboutDescription: "Bachelor's degree in Management Informatics and 2nd year Master's student in Computer Engineering and Web Technologies at Uab.pt. I have experience in developing and maintaining enterprise systems, APIs, integrations, SQL databases and web applications. I work with Java, Spring Boot, JavaEE, SQL, JasperReports, GitLab, Jenkins, Tomcat, Linux, and I have been researching BI and Gen AI.",
      aboutBtn: "Learn More",

      // Experience
      experienceTitle: "What skills do I have?",
      experienceSubtitle: "My Experience",
      frontendTitle: "Web & Frontend",
      backendTitle: "Backend & Enterprise Systems",
      toolsTitle: "BI, Data & Tools",
      advanced: "Advanced",
      intermediate: "Intermediate",

      // Services
      servicesTitle: "What I do",
      servicesSubtitle: "Services",
      backendDevTitle: "Backend Development",
      backendDev1: "REST APIs construction",
      backendDev2: "External systems integrations",
      backendDev3: "Java systems maintenance",
      backendDev4: "SQL and NoSQL databases management",
      backendDev5: "Reports with JasperReports",
      webDevTitle: "Web Development",
      webDev1: "Applications in ReactJs, AngularJs & Flutter",
      webDev2: "Institutional websites",
      webDev3: "Professional portfolios",
      webDev4: "Payment methods",
      webDev5: "Form integrations",
      biTitle: "Business Intelligence & Data",
      bi1: "Power BI dashboards creation",
      bi2: "Indicators analysis",
      bi3: "Data modeling",
      bi4: "Decision support reports",
      bi5: "Data processing and organization",

      // Portfolio
      portfolioTitle: "My recent work",
      portfolioSubtitle: "Portfolio",
      github: "Github",
      liveDemo: "Live Demo",

      // References
      referencesTitle: "References from my work",
      referencesSubtitle: "References",
      ref1Name: "Inácio Sumbana",
      ref1Review: "Founder and President of MozSistemas",
      ref2Name: "Edson Manhique",
      ref2Review: "Enpersol Africa & Dre Consultores President",
      ref3Name: "Nélio Macombo",
      ref3Review: "MozDevz Ex-President and Engineer at Vodacom",
      ref4Name: "Cassamo Nuvunga",
      ref4Review: "CADE President",
      ref5Name: "Crisóstomo Magaia",
      ref5Review: "Head of Department at SDSI",

      // Contact
      contactTitle: "Get more information",
      contactSubtitle: "Contact Me",
      email: "Email",
      messenger: "Messenger",
      whatsapp: "Whatsapp",
      sendMessage: "Send a message",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",

      // Footer
      footerHome: "Home",
      footerAbout: "About",
      footerExperience: "Experience",
      footerServices: "Services",
      footerPortfolio: "Portfolio",
      footerReferences: "References",
      footerContact: "Contact",
      footerCopyright: "Ajoca Solutions - All rights reserved.",

      // Footer
      footerMessage: "Thank you for visiting my portfolio!"
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};