
import React, { useState } from 'react';
import * as emailjs from "@emailjs/browser";
import { Github, Linkedin, Download, Mail, Phone, MapPin, ExternalLink, ChevronDown, ChevronUp, Code, Database, Cloud, Cpu, Monitor, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useRef } from 'react';

const Index = () => {
  const [expandedSkillCategory, setExpandedSkillCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);
  setSent(false);

  if (!formRef.current) return;

  emailjs
    .sendForm(
      'service_29knpyq',
      'template_zysdni2',
      formRef.current,
      'oH_GTZMSMCN88APJx'
    )
    .then(() => {
      setSending(false);
      setSent(true);
      formRef.current?.reset();
    })
    .catch(() => {
      setSending(false);
      alert('❌ Failed to send message. Try again.');
    });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 animate-gradient-shift bg-[length:400%_400%]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
              M. Abubakar Nofal
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI-Integrated Software Engineer | Angular, Django | Eager to Learn React & Java Spring
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto">
              Computer Science graduate with full-stack experience, AI integration, and cloud deployment. 
              Passionate about combining software engineering with machine learning to build intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 animate-glow"
                onClick={() => window.open('https://github.com/Abubakarnofal03', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://www.linkedin.com/in/m-abubakar-nofal-b652512b8', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 transform hover:scale-105"
                onClick={openCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Education Card */}
          <Card className="card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-blue/30 animate-slide-up">
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
          <Card className="card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-purple/30 animate-slide-up">
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
                      <li key={idx} className="text-white/80 flex items-start gap-2">
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
        <Card className="card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-electric-green/30 mb-16 animate-slide-up">
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
              {Object.entries(skills).map(([category, skillList]) => {
                const IconComponent = skillIcons[category as keyof typeof skillIcons];
                const isExpanded = expandedSkillCategory === category;
                
                return (
                  <div key={category} className="space-y-3">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-4 h-auto hover:bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
                      onClick={() => toggleSkillCategory(category)}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-neon-blue" />
                        <span className="font-semibold text-white">{category}</span>
                      </div>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                    
                    {isExpanded && (
                      <div className="grid grid-cols-1 gap-2 pl-4 animate-fade-in">
                        {skillList.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="justify-start bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-white hover:from-neon-purple/20 hover:to-neon-pink/20 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-pink/30 mb-16 animate-slide-up">
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
                    <Card className="cursor-pointer transform hover:scale-105 transition-all duration-300 bg-slate-700/50 border-white/10 hover:border-neon-blue/50 card-glow">
                      <CardHeader>
                        <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-4`}></div>
                        <CardTitle className="text-xl text-white flex items-center justify-between">
                          {project.title}
                          <ExternalLink className="h-5 w-5 text-neon-blue" />
                        </CardTitle>
                        <CardDescription className="text-neon-blue font-medium">
                          {project.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-neon-blue/30 text-neon-blue">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="border-white/30 text-white/70">
                              +{project.tech.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-slate-800 border-neon-blue/30">
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
        <Card className="card-glow neon-border bg-slate-800/50 backdrop-blur-sm border-neon-blue/30 animate-slide-up">
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
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Mail className="h-5 w-5 text-neon-blue" />
                    <span className="text-white">abubakarnofal0786@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Phone className="h-5 w-5 text-neon-green" />
                    <span className="text-white">(+92) 312-1729411</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <MapPin className="h-5 w-5 text-neon-pink" />
                    <span className="text-white">Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input 
                id="name" 
                name="user_name"
                placeholder="Your Name" 
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email" 
                  name="user_email"
                  type="email"
                  placeholder="Your Email" 
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue"
                  />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  placeholder="Your Message" 
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue"
                  />
              </div>
              <Button 
                type="submit" 
                disabled={sending} 
                className="w-full bg-neon-blue text-white hover:bg-neon-purple transition-all"
                >
                {sending ? 'Sending...' : 'Send Message'}
              </Button>
              {sent && <p className="text-green-400 mt-2">✅ Message sent successfully!</p>}
              </form>
            </div>

            </div>
          </CardContent>
        </Card>
      </div>

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
