import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail, Phone, MapPin, ExternalLink, ChevronDown, ChevronUp, Code, Database, Cloud, Cpu, Monitor, Wrench, ArrowUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Index = () => {
  const [expandedSkillCategory, setExpandedSkillCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState('hero');

  // Scroll tracking for animations and navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 300);

      // Track visible sections for animations
      const sections = ['hero', 'education', 'experience', 'skills', 'projects', 'contact'];
      const newVisibleSections = new Set<string>();
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.7) {
            newVisibleSections.add(sectionId);
          }
          // Update current section for navbar
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(sectionId);
          }
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    Languages: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
    Frameworks: ['Angular', 'Django', 'scikit-learn', 'TensorFlow', 'Hugging Face Transformers', 'OpenCV'],
    'Web Tools': ['HTML', 'CSS', 'Vite.js', 'Postman', 'RESTful APIs'],
    Databases: ['MySQL', 'PostgreSQL', 'Supabase'],
    'Dev Tools': ['Git', 'GitHub', 'VS Code', 'TRAE-IDE'],
    'Cloud & Deployment': ['GCP', 'Vercel', 'Render', 'Linux VM', 'Apache', 'Nginx'],
    'AI/ML Experience': ['FLAN-T5', 'BART', 'VGG19', 'KNN', 'SVM', 'PCA', 'Data Augmentation', 'Feature Engineering']
  };

  const skillIcons = {
    Languages: Code,
    Frameworks: Monitor,
    'Web Tools': Monitor,
    Databases: Database,
    'Dev Tools': Wrench,
    'Cloud & Deployment': Cloud,
    'AI/ML Experience': Cpu
  };

  const projects = [
    {
      title: 'Skill Map (FYP)',
      subtitle: 'AI-driven task management platform',
      tech: ['Django', 'Angular', 'PostgreSQL', 'Render', 'FLAN-T5', 'KNN'],
      description: 'Revolutionary AI-powered task management system that transforms project planning',
      details: [
        'FLAN-T5 generated comprehensive task descriptions from minimal specifications',
        'KNN algorithm classified task types and determined optimal developer skill levels',
        'Gemini API automated complex task breakdown and intelligent team matching',
        'Significantly reduced manual assignment effort and improved project efficiency',
        'Full-stack implementation with modern web technologies'
      ],
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Website Hosting (GCP)',
      subtitle: 'Professional deployment on Google Cloud',
      tech: ['GCP', 'Apache', 'React', 'Vite.js', 'SSL', 'Nginx'],
      description: 'Enterprise-grade web application deployment with robust infrastructure',
      details: [
        'Deployed React application using Vite.js on Google Cloud Platform',
        'Configured SSL certificates for secure HTTPS connections',
        'Set up Nginx/Apache reverse proxy for optimal performance',
        'Implemented firewall rules and security protocols',
        'Configured SSH access for seamless media streaming capabilities'
      ],
      color: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'Dialogue Summarization',
      subtitle: 'Advanced NLP with BART model',
      tech: ['BART', 'PyTorch', 'Transformers', 'SAMSum'],
      description: 'State-of-the-art dialogue summarization using transformer architecture',
      details: [
        'Fine-tuned BART model on SAMSum dataset using PyTorch framework',
        'Implemented complete NLP pipeline from tokenization to evaluation',
        'Advanced transformer architecture for superior text understanding',
        'Comprehensive evaluation metrics and performance optimization',
        'Production-ready model with excellent summarization quality'
      ],
      color: 'from-neon-pink to-electric-green'
    },
    {
      title: 'Gender Classification',
      subtitle: 'Computer Vision with VGG19',
      tech: ['VGG19', 'OpenCV', 'scikit-learn', 'PCA', 'SVM'],
      description: 'Sophisticated computer vision system combining deep learning and traditional ML',
      details: [
        'Combined VGG19 deep features with handcrafted OpenCV features',
        'Implemented PCA for dimensionality reduction and feature optimization',
        'Used SVM classifier for robust gender classification',
        'Handled class imbalance with advanced sampling techniques',
        'Achieved impressive 80.7% F1-score on challenging dataset'
      ],
      color: 'from-electric-green to-neon-blue'
    }
  ];

  const experience = [
    {
      company: 'NETSOL Technologies',
      role: 'Software Engineering Intern',
      period: 'June – August 2024',
      achievements: [
        'Built responsive Angular UIs that significantly improved application performance',
        'Collaborated effectively in agile development teams with cross-functional expertise',
        'Gained comprehensive hands-on experience with complete SDLC lifecycle',
        'Participated in requirement analysis, testing, and deployment phases',
        'Contributed to enterprise-level software solutions'
      ]
    }
  ];

  const toggleSkillCategory = (category: string) => {
    setExpandedSkillCategory(expandedSkillCategory === category ? null : category);
  };

  const openCV = () => {
    window.open('Muhammad Abubakar AI cv.pdf', '_blank');
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated Navigation with Blur Effect */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        {/* This div is the new "liquid glass pill" */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full shadow-xl px-4 md:px-6 py-2">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'education', label: 'Education' },
            { id: 'experience', label: 'Experience' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-1 md:px-4 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                currentSection === item.id
                  ? 'text-neon-blue'
                  : 'text-white/70 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              {currentSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple animate-scale-in"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section with Enhanced Animations */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 animate-gradient-shift bg-[length:400%_400%]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text opacity-0 animate-[slide-up_1s_ease-out_0.2s_forwards]">
              Muhammad Abubakar
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[slide-up_1s_ease-out_0.4s_forwards]">
              AI-Integrated Software Engineer | Angular, Django | Eager to Learn React & Java Spring
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto opacity-0 animate-[slide-up_1s_ease-out_0.6s_forwards]">
              Computer Science graduate with full-stack experience, AI integration, and cloud deployment. 
              Passionate about combining software engineering with machine learning to build intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[slide-up_1s_ease-out_0.8s_forwards]">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-neon-blue/30"
                onClick={() => window.open('https://github.com/Abubakarnofal03', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-neon-blue/30"
                onClick={() => window.open('https://www.linkedin.com/in/m-abubakar-nofal-b652512b8', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-neon-pink/30"
                onClick={openCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Scroll Animations */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Education Card */}
          <Card 
            id="education"
            className={`card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-blue/30 transition-all duration-700 transform ${
              visibleSections.has('education') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center gap-2">
                🎓 Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  FAST National University of Computer and Emerging Sciences
                </h3>
                <p className="text-neon-blue font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-white/70">Expected Graduation: June 2025</p>
                <div className="pt-4">
                  <p className="text-white/80 leading-relaxed">
                    Pursuing comprehensive computer science education with focus on software engineering, 
                    artificial intelligence, and modern development practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card 
            id="experience"
            className={`card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-purple/30 transition-all duration-700 delay-200 transform ${
              visibleSections.has('experience') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center gap-2">
                💼 Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              {experience.map((exp, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-neon-purple font-medium">{exp.role}</p>
                    <p className="text-white/70">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li 
                        key={idx} 
                        className={`text-white/80 flex items-start gap-2 transition-all duration-500 ${
                          visibleSections.has('experience') 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-5'
                        }`}
                        style={{ transitionDelay: `${idx * 100 + 400}ms` }}
                      >
                        <span className="text-neon-blue mt-1">▶</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills Section */}
        <Card 
          id="skills"
          className={`card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-electric-green/30 mb-16 transition-all duration-700 transform ${
            visibleSections.has('skills') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <CardHeader>
            <CardTitle className="text-3xl gradient-text text-center flex items-center justify-center gap-2">
              🚀 Technical Skills
            </CardTitle>
            <CardDescription className="text-center text-white/70 text-lg">
              Comprehensive technology stack spanning AI/ML, full-stack development, and cloud technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => {
                const IconComponent = skillIcons[category as keyof typeof skillIcons];
                const isExpanded = expandedSkillCategory === category;
                
                return (
                  <div 
                    key={category} 
                    className={`space-y-3 transition-all duration-500 transform ${
                      visibleSections.has('skills') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-4 h-auto hover:bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
                      onClick={() => toggleSkillCategory(category)}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-neon-blue animate-float" />
                        <span className="font-semibold text-white">{category}</span>
                      </div>
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </Button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="grid grid-cols-1 gap-2 pl-4 pt-2">
                        {skillList.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className={`justify-start bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-white hover:from-neon-purple/20 hover:to-neon-pink/20 transition-all duration-300 hover:scale-105 transform ${
                              isExpanded ? 'animate-fade-in' : ''
                            }`}
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card 
          id="projects"
          className={`card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-pink/30 mb-16 transition-all duration-700 transform ${
            visibleSections.has('projects') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <CardHeader>
            <CardTitle className="text-3xl gradient-text text-center flex items-center justify-center gap-2">
              🛠️ Featured Projects
            </CardTitle>
            <CardDescription className="text-center text-white/70 text-lg">
              Innovative solutions combining AI/ML, full-stack development, and modern deployment practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card 
                      className={`cursor-pointer bg-slate-700/50 border-white/10 hover:border-neon-blue/50 card-glow group transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/20 ${
                        visibleSections.has('projects') 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <CardHeader>
                        <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-4 transition-all duration-300 group-hover:h-3`}></div>
                        <CardTitle className="text-xl text-white flex items-center justify-between group-hover:text-neon-blue transition-colors duration-300">
                          {project.title}
                          <ExternalLink className="h-5 w-5 text-neon-blue transition-transform duration-300 group-hover:scale-110" />
                        </CardTitle>
                        <CardDescription className="text-neon-blue font-medium transition-colors duration-300 group-hover:text-neon-purple">
                          {project.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-4 transition-colors duration-300 group-hover:text-white">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="border-neon-blue/30 text-neon-blue transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge 
                              variant="outline" 
                              className="border-white/30 text-white/70 transition-all duration-300 hover:scale-105"
                            >
                              +{project.tech.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-slate-800 border-neon-blue/30 animate-scale-in">
                    <DialogHeader>
                      <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                      <DialogDescription className="text-neon-blue text-lg">
                        {project.subtitle}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6">
                      <p className="text-white/90 text-lg">{project.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements & Features:</h4>
                        <ul className="space-y-2">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="text-white/80 flex items-start gap-2">
                              <span className="text-neon-blue mt-1">▶</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <Badge key={idx} className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card 
          id="contact"
          className={`card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-blue/30 transition-all duration-700 transform ${
            visibleSections.has('contact') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <CardHeader>
            <CardTitle className="text-3xl gradient-text text-center flex items-center justify-center gap-2">
              📬 Get In Touch
            </CardTitle>
            <CardDescription className="text-center text-white/70 text-lg">
              Ready to collaborate on exciting projects? Let&apos;s connect!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'abubakarnofal0786@gmail.com', color: 'neon-blue' },
                    { icon: Phone, text: '(+92) 312-1729411', color: 'electric-green' },
                    { icon: MapPin, text: 'Pakistan', color: 'neon-pink' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-${item.color}/50 transition-all duration-300 hover:scale-105 transform ${
                        visibleSections.has('contact') 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-5'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <item.icon className={`h-5 w-5 text-${item.color}`} />
                      <span className="text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
                <div className="space-y-4">
                  {[
                    { id: 'name', label: 'Name', placeholder: 'Your Name', type: 'input' },
                    { id: 'email', label: 'Email', placeholder: 'your.email@example.com', type: 'input' },
                    { id: 'message', label: 'Message', placeholder: 'Tell me about your project or just say hello!', type: 'textarea' }
                  ].map((field, index) => (
                    <div 
                      key={field.id}
                      className={`relative group transition-all duration-500 transform ${
                        visibleSections.has('contact') 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-5'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 300}ms` }}
                    >
                      <Label 
                        htmlFor={field.id} 
                        className="text-white transition-colors duration-300 group-focus-within:text-neon-blue"
                      >
                        {field.label}
                      </Label>
                      {field.type === 'input' ? (
                        <Input 
                          id={field.id} 
                          type={field.id === 'email' ? 'email' : 'text'}
                          placeholder={field.placeholder} 
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue focus:bg-white/15 transition-all duration-300 focus:scale-105"
                        />
                      ) : (
                        <Textarea 
                          id={field.id} 
                          placeholder={field.placeholder} 
                          rows={4}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue focus:bg-white/15 resize-none transition-all duration-300 focus:scale-105"
                        />
                      )}
                    </div>
                  ))}
                  <Button 
                    className={`w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/30 ${
                      visibleSections.has('contact') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-neon-blue/30 ${
          showBackToTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 Muhammad Abubakar. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-white/40 mt-2">
            Ready to build the future with AI and innovative software solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
