const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_experience: "Experience",
        nav_letter: "Letter",
        nav_skills: "Skills",
        nav_blog: "Blog",
        nav_thesis: "Thesis",
        nav_cv: "CV",
        nav_contact: "Contact",

        // Hero
        hero_lead: "IAM engineer at Accenture focused on identity security, authentication systems and cloud access governance.",

        // About Section
        about_title: "About",
        about_subtitle1: "Professional Background",
        about_text1: "Computer Engineering graduate from Universidad Politécnica de Madrid (UPM) with a strong foundation in software development, systems architecture, and information security. Currently working at Accenture as an Identity and Access Management (IAM) Security Transformation Analyst, specialized in the cybersecurity domain.",
        about_text2: "My professional focus centers on ensuring secure and efficient access to digital resources through comprehensive identity lifecycle management, authentication systems, and access control policies. I work within enterprise environments where security, compliance, and operational efficiency are critical.",
        
        about_subtitle2: "Core Interests & Expertise",
        about_text3: "I am particularly passionate about building and designing systems that enhance security, visibility, and control in complex infrastructures. My expertise spans Identity and Access Management, containerization security, semantic technologies, and infrastructure monitoring.",
        about_text4: "Through my academic work in knowledge graphs and container security, combined with hands-on experience in enterprise IAM operations, I've developed a deep understanding of how modern infrastructure security challenges require both technical depth and strategic thinking.",
        
        about_subtitle3: "Professional Goals",
        about_text5: "My goal is to continue growing as a cybersecurity and software engineer, contributing to innovative teams that push the boundaries of security operations, infrastructure visibility, and threat detection. I'm committed to staying current with emerging technologies and security methodologies.",
        about_text6: "I believe in the power of combining academic research with practical industry experience to solve real-world security challenges at scale.",

        // Experience Section
        exp_title: "Experience",
        exp_company: "Accenture — IAM Engineer",
        exp_position: "Identity & Access Management Security Transformation Analyst",
        exp_description: "As an IAM Engineer at Accenture, I work on enterprise-scale Identity and Access Management operations within the cybersecurity domain. My responsibilities focus on designing, implementing, and maintaining secure identity ecosystems for large organizations.",
        
        exp_responsibilities: "Key Responsibilities",
        exp_resp1: "Identity lifecycle management and provisioning/deprovisioning workflows",
        exp_resp2: "Access governance implementation with least privilege principles",
        exp_resp3: "IAM platform operations and administration (Okta)",
        exp_resp4: "Security compliance support and audit preparation",
        exp_resp5: "Authentication systems design and optimization",
        
        exp_skills: "Technical Skills Applied",
        exp_skill1: "IAM platforms: Okta, Microsoft Entra ID",
        exp_skill2: "Enterprise security policies and frameworks",
        exp_skill3: "Access control models (RBAC, ABAC)",
        exp_skill4: "Identity protocols: SAML, OAuth, OpenID Connect",
        exp_skill5: "Security compliance: SOC2, ISO 27001",

        // Skills Section
        skills_title: "Skills",

        // Blog Section
        blog_title: "Blog: Knowledge Graphs & Container Security",
        blog_intro: "Modern software infrastructures increasingly rely on container technologies such as Docker. However, this widespread adoption has introduced significant challenges related to cybersecurity, infrastructure visibility and vulnerability management.",
        
        blog_section1_title: "The Challenge: Visibility in Containerized Environments",
        blog_section1_p1: "One of the main problems in containerized environments is the lack of operational traceability between deployed software components and the running infrastructure. Traditional container auditing tools generally focus on static image analysis, scanning containers in isolation without considering runtime context or the relationships between images, layers, packages and active containers across different hosts.",
        blog_section1_p2: "This limitation creates important security and monitoring issues. In real-world infrastructures, administrators often struggle to determine which running containers are affected by a newly discovered vulnerability, which exact package versions are currently deployed, or which build instruction introduced a specific security risk.",
        
        blog_section2_title: "Solution: Knowledge Graphs for Semantic Analysis",
        blog_section2_p1: "Semantic technologies and Knowledge Graphs provide a promising solution. A Knowledge Graph allows infrastructure components and their relationships to be represented in a structured and interconnected way. Instead of treating containers, images and packages as isolated entities, the system models them as part of a unified semantic graph that can be queried and analyzed dynamically.",
        blog_section2_p2: "By connecting runtime information with semantic representations, the system significantly improves infrastructure visibility and security analysis capabilities. Using SPARQL queries, administrators can identify vulnerable containers, trace dependency relationships, audit configurations and analyze the origin of failures across the image build process.",
        
        blog_section3_title: "Real-World Impact & Scalability",
        blog_section3_p1: "One of the most interesting aspects of this approach is the ability to correlate theoretical vulnerabilities with actual deployed assets in real time. Instead of simply detecting that a vulnerable package exists somewhere in an image repository, the system can determine whether that package is actively deployed within running containers across the infrastructure.",
        blog_section3_p2: "Scalability tests have demonstrated that the architecture can efficiently handle infrastructures containing thousands of containers and millions of RDF triples, confirming the feasibility of semantic technologies in large-scale cybersecurity scenarios.",
        
        blog_section4_title: "Beyond Containers: Broader Cybersecurity Applications",
        blog_section4_p1: "Knowledge Graphs have growing applications across multiple areas of cybersecurity and cloud computing. They can enhance identity management systems, improve threat intelligence correlation, support forensic investigations and provide better visibility across complex distributed infrastructures.",
        blog_section4_p2: "As modern infrastructures continue becoming more dynamic and interconnected, the combination of semantic technologies, Knowledge Graphs and cybersecurity operations will likely play an increasingly important role in improving visibility, traceability and security analysis within enterprise environments.",
        
        blog_cta: "Want to learn more about how these concepts were applied in practice?",
        blog_cta_btn: "See My Thesis →",

        // Thesis Section
        thesis_title: "Bachelor's Thesis",
        thesis_project_title: "Knowledge Graph-Based Container Security Monitoring",
        thesis_p1: "Container technology has transformed software deployment but introduced significant security challenges in monitoring, traceability, and vulnerability control. Current auditing tools lack visibility into the execution context and infrastructure relationships.",
        thesis_p2: "This thesis develops an extension of the C2T tool for Docker container auditing and security analysis. The solution combines dynamic monitoring with semantic knowledge graphs to provide comprehensive infrastructure visibility, enabling identification of vulnerabilities, dependency evaluation, and failure traceability.",
        thesis_p3: "Implemented in Python with a modular architecture, the system integrates data extraction from containers and generates SPARQL-queryable graphs correlating images, layers, packages, and running containers. Validation in a production-like environment with thousands of containers demonstrated both accuracy and scalability.",
        thesis_btn: "Read Full Thesis",

        // CV Section
        cv_title: "Curriculum Vitae",
        cv_subtitle: "Full Professional CV",
        cv_description: "Download my complete curriculum vitae in your preferred language.",
        cv_btn_en: "📄 CV English",
        cv_btn_es: "📄 CV Español",

        // Cover Letter Section
        cover_title: "Cover Letter",
        cover_greeting: "Dear Hiring Manager,",
        cover_p1: "I am writing to express my interest in Cybersecurity positions. I am a Computer Engineering graduate from the Universidad Politécnica de Madrid and currently working at Accenture as an Identity and Access Management (IAM) Security Transformation Analyst within the cybersecurity domain.",
        cover_p2: "In my current role, I work on enterprise IAM environments, focusing on identity lifecycle management, authentication systems, access governance, and security compliance. I have hands-on experience with IAM platforms such as Okta, supporting secure access control and least-privilege policies in complex enterprise infrastructures.",
        cover_p3: "My academic background complements this experience. During my Bachelor's Thesis, I developed a knowledge graph–based solution for container monitoring and security analysis using Docker, SPARQL, and semantic technologies. This project focused on improving infrastructure visibility, vulnerability traceability, and dependency analysis in dynamic environments.",
        cover_p4: "I am particularly motivated by cybersecurity operations, threat detection, and the continuous improvement of secure and scalable systems. I would welcome the opportunity to contribute my experience in IAM and academic background in cybersecurity to a security-focused team.",
        cover_closing: "Thank you for your time and consideration.",
        cover_signature: "Sincerely,",

        // Contact Section
        contact_title: "Contact",
        contact_email: "Email:",
        contact_btn_github: "GitHub",
        contact_btn_linkedin: "LinkedIn",
    },

    es: {
        // Navigation
        nav_about: "Sobre Mí",
        nav_experience: "Experiencia",
        nav_letter: "Carta",
        nav_skills: "Habilidades",
        nav_blog: "Blog",
        nav_thesis: "Tesis",
        nav_cv: "CV",
        nav_contact: "Contacto",

        // Hero
        hero_lead: "Ingeniero IAM en Accenture enfocado en seguridad de identidades, sistemas de autenticación y gobernanza de acceso en la nube.",

        // About Section
        about_title: "Sobre Mí",
        about_subtitle1: "Antecedentes Profesionales",
        about_text1: "Ingeniero en Informática por la Universidad Politécnica de Madrid (UPM) con una sólida formación en desarrollo de software, arquitectura de sistemas y seguridad de la información. Actualmente trabajo en Accenture como Analista de Transformación de Seguridad en Identidad y Gestión de Accesos (IAM), especializado en el dominio de ciberseguridad.",
        about_text2: "Mi enfoque profesional se centra en garantizar acceso seguro y eficiente a los recursos digitales mediante gestión integral del ciclo de vida de identidades, sistemas de autenticación y políticas de control de acceso. Trabajo en entornos empresariales donde la seguridad, cumplimiento normativo y eficiencia operativa son críticos.",
        
        about_subtitle2: "Intereses Principales y Experiencia",
        about_text3: "Me apasiona construir y diseñar sistemas que mejoren la seguridad, visibilidad y control en infraestructuras complejas. Mi experiencia abarca Identidad y Gestión de Accesos, seguridad de contenedores, tecnologías semánticas y monitoreo de infraestructuras.",
        about_text4: "A través de mi trabajo académico en grafos de conocimiento y seguridad de contenedores, combinado con experiencia práctica en operaciones IAM empresariales, he desarrollado una comprensión profunda de cómo los desafíos de seguridad en infraestructuras modernas requieren tanto profundidad técnica como pensamiento estratégico.",
        
        about_subtitle3: "Objetivos Profesionales",
        about_text5: "Mi objetivo es continuar creciendo como ingeniero de ciberseguridad y software, contribuyendo a equipos innovadores que empujen los límites de operaciones de seguridad, visibilidad de infraestructuras y detección de amenazas. Estoy comprometido con mantenerme actualizado en tecnologías emergentes y metodologías de seguridad.",
        about_text6: "Creo en el poder de combinar investigación académica con experiencia práctica industrial para resolver desafíos de seguridad del mundo real a escala.",

        // Experience Section
        exp_title: "Experiencia",
        exp_company: "Accenture — Ingeniero IAM",
        exp_position: "Analista de Transformación de Seguridad en Identidad y Gestión de Accesos",
        exp_description: "Como Ingeniero IAM en Accenture, trabajo en operaciones de Identidad y Gestión de Accesos a escala empresarial dentro del dominio de ciberseguridad. Mis responsabilidades se enfoca en diseñar, implementar y mantener ecosistemas de identidad seguros para grandes organizaciones.",
        
        exp_responsibilities: "Responsabilidades Clave",
        exp_resp1: "Gestión del ciclo de vida de identidades y flujos de provisión/desprovisionamiento",
        exp_resp2: "Implementación de gobernanza de acceso con principios de privilegio mínimo",
        exp_resp3: "Operaciones y administración de plataformas IAM (Okta)",
        exp_resp4: "Soporte de cumplimiento de seguridad y preparación de auditorías",
        exp_resp5: "Diseño y optimización de sistemas de autenticación",
        
        exp_skills: "Habilidades Técnicas Aplicadas",
        exp_skill1: "Plataformas IAM: Okta, Microsoft Entra ID",
        exp_skill2: "Políticas y marcos de seguridad empresarial",
        exp_skill3: "Modelos de control de acceso (RBAC, ABAC)",
        exp_skill4: "Protocolos de identidad: SAML, OAuth, OpenID Connect",
        exp_skill5: "Cumplimiento de seguridad: SOC2, ISO 27001",

        // Skills Section
        skills_title: "Habilidades",

        // Blog Section
        blog_title: "Blog: Grafos de Conocimiento y Seguridad de Contenedores",
        blog_intro: "Las infraestructuras de software modernas dependen cada vez más de tecnologías de contenedores como Docker. Sin embargo, esta adopción generalizada ha introducido desafíos significativos relacionados con ciberseguridad, visibilidad de infraestructuras y gestión de vulnerabilidades.",
        
        blog_section1_title: "El Desafío: Visibilidad en Ambientes Containerizados",
        blog_section1_p1: "Uno de los principales problemas en ambientes containerizados es la falta de trazabilidad operativa entre componentes de software desplegados e infraestructura en ejecución. Las herramientas tradicionales de auditoría de contenedores se enfocan generalmente en análisis estático de imágenes, escaneando contenedores aisladamente sin considerar contexto de ejecución o relaciones entre imágenes, capas, paquetes y contenedores activos en diferentes hosts.",
        blog_section1_p2: "Esta limitación crea problemas importantes de seguridad y monitoreo. En infraestructuras reales, administradores frecuentemente luchan por determinar qué contenedores en ejecución se ven afectados por una vulnerabilidad recién descubierta, qué versiones exactas de paquetes están desplegadas, o qué instrucción de compilación introdujo un riesgo de seguridad específico.",
        
        blog_section2_title: "Solución: Grafos de Conocimiento para Análisis Semántico",
        blog_section2_p1: "Las tecnologías semánticas y los Grafos de Conocimiento proporcionan una solución prometedora. Un Grafo de Conocimiento permite que componentes de infraestructura y sus relaciones se representen de forma estructurada e interconectada. En lugar de tratar contenedores, imágenes y paquetes como entidades aisladas, el sistema los modela como parte de un grafo semántico unificado que puede ser consultado y analizado dinámicamente.",
        blog_section2_p2: "Al conectar información de ejecución con representaciones semánticas, el sistema mejora significativamente la visibilidad de infraestructuras y capacidades de análisis de seguridad. Usando consultas SPARQL, administradores pueden identificar contenedores vulnerables, rastrear relaciones de dependencias, auditar configuraciones y analizar el origen de fallos en el proceso de compilación de imágenes.",
        
        blog_section3_title: "Impacto Real y Escalabilidad",
        blog_section3_p1: "Uno de los aspectos más interesantes de este enfoque es la capacidad de correlacionar vulnerabilidades teóricas con activos realmente desplegados en tiempo real. En lugar de simplemente detectar que un paquete vulnerable existe en algún lugar de un repositorio de imágenes, el sistema puede determinar si ese paquete está activamente desplegado dentro de contenedores en ejecución en toda la infraestructura.",
        blog_section3_p2: "Las pruebas de escalabilidad han demostrado que la arquitectura puede manejar eficientemente infraestructuras con miles de contenedores y millones de triples RDF, confirmando la viabilidad de tecnologías semánticas en escenarios de ciberseguridad a gran escala.",
        
        blog_section4_title: "Más Allá de Contenedores: Aplicaciones Más Amplias de Ciberseguridad",
        blog_section4_p1: "Los Grafos de Conocimiento tienen aplicaciones crecientes en múltiples áreas de ciberseguridad e informática en la nube. Pueden mejorar sistemas de gestión de identidades, mejorar correlación de inteligencia de amenazas, apoyar investigaciones forenses y proporcionar mejor visibilidad en infraestructuras distribuidas complejas.",
        blog_section4_p2: "A medida que las infraestructuras modernas continúan siendo más dinámicas e interconectadas, la combinación de tecnologías semánticas, Grafos de Conocimiento y operaciones de ciberseguridad probablemente jugará un papel cada vez más importante en mejorar visibilidad, trazabilidad y análisis de seguridad dentro de ambientes empresariales.",
        
        blog_cta: "¿Quieres saber más sobre cómo estos conceptos se aplicaron en la práctica?",
        blog_cta_btn: "Ver Mi Tesis →",

        // Thesis Section
        thesis_title: "Trabajo de Fin de Grado",
        thesis_project_title: "Monitoreo de Seguridad de Contenedores Basado en Grafos de Conocimiento",
        thesis_p1: "La tecnología de contenedores ha transformado el despliegue de software pero introdujo desafíos significativos de seguridad en monitoreo, trazabilidad y control de vulnerabilidades. Las herramientas de auditoría actuales carecen de visibilidad en contexto de ejecución y relaciones de infraestructura.",
        thesis_p2: "Este trabajo desarrolla una extensión de la herramienta C2T enfocada en auditoría de contenedores Docker y análisis de seguridad. La solución combina monitoreo dinámico con grafos de conocimiento semánticos para proporcionar visibilidad integral de infraestructuras, permitiendo identificación de vulnerabilidades, evaluación de dependencias y trazabilidad de fallos.",
        thesis_p3: "Implementado en Python con arquitectura modular, el sistema integra extracción de datos de contenedores y genera grafos consultables con SPARQL correlacionando imágenes, capas, paquetes y contenedores en ejecución. Validación en ambiente experimental tipo producción con miles de contenedores demostró precisión y escalabilidad.",
        thesis_btn: "Leer Tesis Completa",

        // CV Section
        cv_title: "Currículum Vitae",
        cv_subtitle: "CV Profesional Completo",
        cv_description: "Descarga mi currículum completo en tu idioma preferido.",
        cv_btn_en: "📄 CV English",
        cv_btn_es: "📄 CV Español",

        // Cover Letter Section
        cover_title: "Carta de Presentación",
        cover_greeting: "Estimado Gerente de Contratación,",
        cover_p1: "Le escribo para expresar mi interés en posiciones de Ciberseguridad. Soy Ingeniero en Informática por la Universidad Politécnica de Madrid y actualmente trabajo en Accenture como Analista de Transformación de Seguridad en Identidad y Gestión de Accesos (IAM) dentro del dominio de ciberseguridad.",
        cover_p2: "En mi rol actual, trabajo en ambientes IAM empresariales, enfocándome en gestión del ciclo de vida de identidades, sistemas de autenticación, gobernanza de acceso y cumplimiento de seguridad. Tengo experiencia práctica con plataformas IAM como Okta, apoyando control de acceso seguro y políticas de privilegio mínimo en infraestructuras empresariales complejas.",
        cover_p3: "Mi formación académica complementa esta experiencia. Durante mi Trabajo de Fin de Grado, desarrollé una solución basada en grafos de conocimiento para monitoreo de contenedores y análisis de seguridad usando Docker, SPARQL y tecnologías semánticas. Este proyecto se enfocó en mejorar visibilidad de infraestructuras, trazabilidad de vulnerabilidades y análisis de dependencias en ambientes dinámicos.",
        cover_p4: "Estoy particularmente motivado por operaciones de ciberseguridad, detección de amenazas y mejora continua de sistemas seguros y escalables. Sería bienvenido contribuir mi experiencia en IAM y formación académica en ciberseguridad a un equipo enfocado en seguridad.",
        cover_closing: "Gracias por su tiempo y consideración.",
        cover_signature: "Atentamente,",

        // Contact Section
        contact_title: "Contacto",
        contact_email: "Email:",
        contact_btn_github: "GitHub",
        contact_btn_linkedin: "LinkedIn",
    }
};
