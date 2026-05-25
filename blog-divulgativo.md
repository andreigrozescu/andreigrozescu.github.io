Blog Post
Knowledge Graphs for Container Security: Improving Visibility in Docker Infrastructures

Modern software infrastructures increasingly rely on container technologies such as Docker due to their flexibility, scalability and efficiency. Containers have transformed the way applications are deployed and managed, especially within cloud-native and distributed environments. However, this widespread adoption has also introduced significant challenges related to cybersecurity, infrastructure visibility and vulnerability management.

One of the main problems in containerized environments is the lack of operational traceability between deployed software components and the running infrastructure. Traditional container auditing tools generally focus on static image analysis, scanning containers in isolation without considering runtime context or the relationships between images, layers, packages and active containers across different hosts.

This limitation creates important security and monitoring issues. In real-world infrastructures, administrators often struggle to determine which running containers are affected by a newly discovered vulnerability, which exact package versions are currently deployed, or which build instruction introduced a specific security risk. Managing this information manually becomes inefficient and error-prone as infrastructures scale.

To address these challenges, semantic technologies and Knowledge Graphs provide a promising solution. A Knowledge Graph allows infrastructure components and their relationships to be represented in a structured and interconnected way. Instead of treating containers, images and packages as isolated entities, the system models them as part of a unified semantic graph that can be queried and analyzed dynamically.

As part of my Bachelor’s Thesis at Universidad Politécnica de Madrid, I developed an extension of the C2T auditing tool focused on container traceability and security analysis using Knowledge Graphs. The system was implemented in Python using a modular architecture capable of extracting, normalizing and integrating information from Docker containers and runtime environments into an RDF-based semantic graph.

This approach enables advanced SPARQL-based analysis to identify vulnerable containers, trace dependency relationships, audit configurations and analyze the origin of failures across the image build process. By connecting runtime information with semantic representations, the system significantly improves infrastructure visibility and security analysis capabilities.

One of the most interesting aspects of the project was the ability to correlate theoretical vulnerabilities with actual deployed assets in real time. Instead of simply detecting that a vulnerable package exists somewhere in an image repository, the system could determine whether that package was actively deployed within running containers across the infrastructure.

The solution was validated in a heterogeneous experimental environment simulating real production infrastructures with multiple databases and web servers. Scalability tests demonstrated that the architecture could efficiently handle infrastructures containing thousands of containers and millions of RDF triples, confirming the feasibility of semantic technologies in large-scale cybersecurity scenarios.

Beyond container security, Knowledge Graphs have growing applications across multiple areas of cybersecurity and cloud computing. They can enhance identity management systems, improve threat intelligence correlation, support forensic investigations and provide better visibility across complex distributed infrastructures.

As modern infrastructures continue becoming more dynamic and interconnected, the combination of semantic technologies, Knowledge Graphs and cybersecurity operations will likely play an increasingly important role in improving visibility, traceability and security analysis within enterprise environments.