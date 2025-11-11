import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Book, Code, Database, Layers, Globe, Server } from 'lucide-react';

const MindMap = () => {
  const [expanded, setExpanded] = useState({});

  const toggleNode = (path) => {
    setExpanded(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const mindMapData = {
    name: "Complete Programming & Full Stack Development",
    icon: <Book className="w-5 h-5" />,
    children: [
      {
        name: "Full Stack Development",
        color: "bg-cyan-600",
        icon: <Globe className="w-4 h-4" />,
        children: [
          {
            name: "Frontend Development",
            children: [
              {
                name: "HTML",
                topics: ["Semantic HTML", "HTML5 Elements", "Forms & Input Types", "Tables", "Lists", "Multimedia (audio, video)", "Canvas & SVG", "Meta Tags & SEO", "Accessibility (ARIA)", "Data Attributes", "IFrames", "HTML Entities"]
              },
              {
                name: "CSS",
                topics: ["Selectors (class, id, attribute)", "Box Model", "Display & Position", "Flexbox", "CSS Grid", "Responsive Design", "Media Queries", "Animations & Transitions", "Transforms", "Pseudo-classes & Pseudo-elements", "CSS Variables", "Z-index & Stacking", "Float & Clear", "CSS Preprocessors (SASS, LESS)"]
              },
              {
                name: "CSS Frameworks",
                topics: ["Bootstrap", "Tailwind CSS", "Material-UI", "Bulma", "Foundation", "Semantic UI", "Ant Design", "Chakra UI"]
              },
              {
                name: "JavaScript (Browser)",
                topics: ["DOM Manipulation", "Event Handling", "Browser APIs", "Fetch API", "Local Storage", "Session Storage", "Cookies", "Web Workers", "Service Workers", "Geolocation API", "Drag & Drop API", "Canvas API", "WebSockets"]
              },
              {
                name: "Frontend Frameworks/Libraries",
                topics: ["React.js", "Vue.js", "Angular", "Svelte", "Next.js", "Nuxt.js", "Gatsby", "Remix"]
              },
              {
                name: "State Management",
                topics: ["Redux", "Redux Toolkit", "MobX", "Zustand", "Recoil", "Context API", "Jotai", "XState"]
              },
              {
                name: "Build Tools",
                topics: ["Webpack", "Vite", "Parcel", "Rollup", "esbuild", "Babel", "npm/yarn/pnpm", "Module Bundlers"]
              },
              {
                name: "Testing (Frontend)",
                topics: ["Jest", "React Testing Library", "Cypress", "Playwright", "Vitest", "Enzyme", "Testing Library", "E2E Testing", "Unit Testing", "Integration Testing"]
              }
            ]
          },
          {
            name: "Backend Development",
            children: [
              {
                name: "Node.js",
                topics: ["Node.js Basics", "Event Loop", "Modules (CommonJS, ES Modules)", "File System", "Streams", "Buffers", "Process & Child Processes", "Cluster Module", "EventEmitter", "Path Module", "OS Module"]
              },
              {
                name: "Express.js",
                topics: ["Routing", "Middleware", "Request & Response", "Error Handling", "Template Engines", "Static Files", "Body Parser", "Cookie Parser", "Session Management", "CORS", "File Upload (Multer)"]
              },
              {
                name: "Other Backend Frameworks",
                topics: ["Nest.js", "Koa.js", "Fastify", "Hapi.js", "Django (Python)", "Flask (Python)", "FastAPI (Python)", "Spring Boot (Java)", "Laravel (PHP)", "Ruby on Rails"]
              },
              {
                name: "RESTful APIs",
                topics: ["HTTP Methods (GET, POST, PUT, DELETE, PATCH)", "Status Codes", "API Design", "Versioning", "HATEOAS", "Rate Limiting", "Pagination", "Filtering & Sorting", "API Documentation (Swagger)"]
              },
              {
                name: "GraphQL",
                topics: ["Queries", "Mutations", "Subscriptions", "Schema Definition", "Resolvers", "Apollo Server", "Apollo Client", "DataLoader", "GraphQL Tools"]
              },
              {
                name: "Authentication & Authorization",
                topics: ["JWT (JSON Web Tokens)", "OAuth 2.0", "Session-based Auth", "Passport.js", "bcrypt", "Password Hashing", "RBAC (Role-Based Access Control)", "Auth0", "Firebase Auth", "Social Login", "2FA (Two-Factor Authentication)"]
              },
              {
                name: "API Security",
                topics: ["HTTPS/SSL", "CORS", "CSRF Protection", "XSS Prevention", "SQL Injection Prevention", "Rate Limiting", "Input Validation", "Helmet.js", "API Keys", "OAuth Tokens"]
              }
            ]
          },
          {
            name: "Databases",
            children: [
              {
                name: "SQL Databases",
                topics: ["MySQL", "PostgreSQL", "SQLite", "Microsoft SQL Server", "Oracle", "MariaDB"]
              },
              {
                name: "SQL Concepts",
                topics: ["Tables & Schemas", "Primary Keys & Foreign Keys", "CRUD Operations", "SELECT Queries", "WHERE Clause", "JOIN Operations (INNER, LEFT, RIGHT, FULL)", "Aggregate Functions", "GROUP BY & HAVING", "Subqueries", "Indexes", "Transactions", "ACID Properties", "Normalization", "Stored Procedures", "Triggers", "Views"]
              },
              {
                name: "NoSQL Databases",
                topics: ["MongoDB", "Cassandra", "Redis", "CouchDB", "DynamoDB", "Firebase Firestore", "Neo4j (Graph DB)"]
              },
              {
                name: "NoSQL Concepts",
                topics: ["Document-based", "Key-Value Stores", "Column-family", "Graph Databases", "CAP Theorem", "Eventual Consistency", "Sharding", "Replication", "Indexing", "Aggregation Pipeline"]
              },
              {
                name: "ORMs & Query Builders",
                topics: ["Sequelize", "Mongoose", "TypeORM", "Prisma", "Knex.js", "SQLAlchemy", "Hibernate", "Doctrine"]
              },
              {
                name: "Database Design",
                topics: ["ER Diagrams", "Normalization (1NF, 2NF, 3NF)", "Denormalization", "Indexing Strategies", "Query Optimization", "Database Migrations", "Backup & Recovery"]
              }
            ]
          },
          {
            name: "DevOps & Deployment",
            children: [
              {
                name: "Version Control",
                topics: ["Git Basics", "Branching & Merging", "Git Flow", "Pull Requests", "Rebase", "Cherry-pick", "Git Hooks", "GitHub", "GitLab", "Bitbucket"]
              },
              {
                name: "Containerization",
                topics: ["Docker Basics", "Dockerfile", "Docker Compose", "Images & Containers", "Volumes", "Networks", "Docker Hub", "Container Orchestration"]
              },
              {
                name: "Orchestration",
                topics: ["Kubernetes", "Docker Swarm", "Pods", "Services", "Deployments", "ConfigMaps", "Secrets", "Helm Charts"]
              },
              {
                name: "CI/CD",
                topics: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "Azure DevOps", "Continuous Integration", "Continuous Deployment", "Pipeline Automation"]
              },
              {
                name: "Cloud Platforms",
                topics: ["AWS (EC2, S3, Lambda, RDS)", "Google Cloud Platform", "Microsoft Azure", "Heroku", "Vercel", "Netlify", "DigitalOcean", "Railway"]
              },
              {
                name: "Monitoring & Logging",
                topics: ["Winston", "Morgan", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Prometheus", "Grafana", "New Relic", "Datadog", "Sentry"]
              },
              {
                name: "Web Servers",
                topics: ["Nginx", "Apache", "Reverse Proxy", "Load Balancing", "SSL/TLS Configuration", "Caching", "CDN (Cloudflare, AWS CloudFront)"]
              }
            ]
          },
          {
            name: "Web Performance",
            children: [
              {
                name: "Frontend Performance",
                topics: ["Lazy Loading", "Code Splitting", "Tree Shaking", "Minification", "Compression (Gzip, Brotli)", "Image Optimization", "Web Vitals", "Lighthouse", "Service Workers", "PWA", "Caching Strategies"]
              },
              {
                name: "Backend Performance",
                topics: ["Caching (Redis, Memcached)", "Database Query Optimization", "Indexing", "Connection Pooling", "Load Balancing", "Horizontal vs Vertical Scaling", "Microservices", "Message Queues (RabbitMQ, Kafka)"]
              }
            ]
          },
          {
            name: "Web Security",
            children: [
              {
                name: "Common Vulnerabilities",
                topics: ["XSS (Cross-Site Scripting)", "CSRF (Cross-Site Request Forgery)", "SQL Injection", "NoSQL Injection", "Clickjacking", "Session Hijacking", "Man-in-the-Middle", "DDoS Attacks"]
              },
              {
                name: "Security Best Practices",
                topics: ["Input Validation", "Output Encoding", "Parameterized Queries", "Content Security Policy", "HTTPS/TLS", "Secure Headers", "OWASP Top 10", "Security Audits", "Penetration Testing"]
              }
            ]
          },
          {
            name: "Real-time Communication",
            topics: ["WebSockets", "Socket.io", "Server-Sent Events (SSE)", "WebRTC", "Long Polling", "Push Notifications"]
          },
          {
            name: "API Documentation",
            topics: ["Swagger/OpenAPI", "Postman", "Insomnia", "API Blueprint", "ReDoc", "Stoplight"]
          },
          {
            name: "Microservices",
            topics: ["Microservices Architecture", "Service Discovery", "API Gateway", "Event-Driven Architecture", "CQRS", "Saga Pattern", "Circuit Breaker", "Service Mesh"]
          },
          {
            name: "Message Queues",
            topics: ["RabbitMQ", "Apache Kafka", "Redis Pub/Sub", "AWS SQS", "Google Pub/Sub", "Message Brokers"]
          },
          {
            name: "Serverless",
            topics: ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "Serverless Framework", "Function as a Service (FaaS)", "Backend as a Service (BaaS)"]
          }
        ]
      },
      {
        name: "JavaScript",
        color: "bg-yellow-500",
        icon: <Code className="w-4 h-4" />,
        children: [
          {
            name: "Basics",
            topics: ["Variables (var, let, const)", "Data Types (String, Number, Boolean, Null, Undefined, Symbol, BigInt)", "Operators", "Type Coercion", "Template Literals", "Comments"]
          },
          {
            name: "Control Flow",
            topics: ["if-else", "switch", "Ternary Operator", "for loop", "while loop", "do-while", "for...in", "for...of", "break & continue"]
          },
          {
            name: "Functions",
            topics: ["Function Declaration", "Function Expression", "Arrow Functions", "Parameters & Arguments", "Default Parameters", "Rest Parameters", "Return Statement", "IIFE", "Callback Functions", "Higher-Order Functions"]
          },
          {
            name: "Objects & Arrays",
            topics: ["Object Literals", "Object Properties", "Object Methods", "this keyword", "Array Creation", "Array Methods (push, pop, shift, unshift)", "map, filter, reduce", "forEach, some, every", "find, findIndex", "Destructuring", "Spread Operator"]
          },
          {
            name: "Advanced Concepts",
            topics: ["Closures", "Hoisting", "Scope (Global, Function, Block)", "Execution Context", "Call Stack", "Prototypes", "Prototype Chain", "Constructor Functions", "Classes", "Inheritance", "this binding"]
          },
          {
            name: "Async JavaScript",
            topics: ["setTimeout & setInterval", "Callbacks", "Promises", "Promise Methods (then, catch, finally)", "Promise.all, Promise.race", "async/await", "Error Handling (try-catch)", "Event Loop", "Microtasks & Macrotasks"]
          },
          {
            name: "DOM Manipulation",
            topics: ["Selecting Elements", "Creating Elements", "Modifying Elements", "Event Listeners", "Event Object", "Event Bubbling & Capturing", "Event Delegation", "Form Handling"]
          },
          {
            name: "ES6+ Features",
            topics: ["let & const", "Arrow Functions", "Template Literals", "Destructuring", "Spread & Rest", "Default Parameters", "Classes", "Modules (import/export)", "Promises", "Symbols", "Iterators & Generators", "Map & Set", "WeakMap & WeakSet"]
          },
          {
            name: "Error Handling",
            topics: ["try-catch-finally", "throw statement", "Error Objects", "Custom Errors"]
          },
          {
            name: "JSON & Storage",
            topics: ["JSON.parse", "JSON.stringify", "localStorage", "sessionStorage", "Cookies"]
          }
        ]
      },
      {
        name: "React",
        color: "bg-blue-500",
        icon: <Layers className="w-4 h-4" />,
        children: [
          {
            name: "Basics",
            topics: ["What is React?", "JSX Syntax", "Components", "Props", "State", "Virtual DOM", "Create React App", "Vite"]
          },
          {
            name: "Components",
            topics: ["Functional Components", "Class Components", "Component Lifecycle", "Pure Components", "Component Composition", "Props Drilling", "Children Props"]
          },
          {
            name: "Hooks",
            topics: ["useState", "useEffect", "useContext", "useReducer", "useCallback", "useMemo", "useRef", "useLayoutEffect", "useImperativeHandle", "Custom Hooks", "Rules of Hooks"]
          },
          {
            name: "State Management",
            topics: ["Local State", "Lifting State Up", "Context API", "useContext", "useReducer Pattern", "Redux Basics", "Redux Toolkit", "Zustand", "Recoil"]
          },
          {
            name: "Routing",
            topics: ["React Router", "BrowserRouter", "Routes & Route", "Link & NavLink", "useNavigate", "useParams", "useLocation", "Nested Routes", "Protected Routes", "Lazy Loading"]
          },
          {
            name: "Forms",
            topics: ["Controlled Components", "Uncontrolled Components", "Form Validation", "useRef for Forms", "Form Libraries (Formik, React Hook Form)"]
          },
          {
            name: "Advanced Patterns",
            topics: ["Higher-Order Components", "Render Props", "Compound Components", "Controlled vs Uncontrolled", "Code Splitting", "Lazy Loading", "Suspense", "Error Boundaries", "Portals", "Refs & ForwardRef"]
          },
          {
            name: "Performance",
            topics: ["React.memo", "useMemo", "useCallback", "Code Splitting", "Lazy Loading", "Profiler", "Avoiding Re-renders", "Key Prop Optimization"]
          },
          {
            name: "Side Effects",
            topics: ["useEffect Dependencies", "Cleanup Functions", "Data Fetching", "Subscriptions", "API Integration", "Axios", "Fetch API"]
          },
          {
            name: "Testing",
            topics: ["Jest", "React Testing Library", "Unit Tests", "Integration Tests", "Component Testing", "Mocking"]
          },
          {
            name: "Build & Deploy",
            topics: ["Production Build", "Environment Variables", "Deployment (Vercel, Netlify)", "Performance Optimization"]
          }
        ]
      },
      {
        name: "Python",
        color: "bg-green-500",
        icon: <Code className="w-4 h-4" />,
        children: [
          {
            name: "Basics",
            topics: ["Variables", "Data Types (int, float, str, bool)", "Input/Output", "Comments", "Indentation", "PEP 8 Style Guide", "Operators", "Type Casting"]
          },
          {
            name: "Control Flow",
            topics: ["if-elif-else", "for loop", "while loop", "break & continue", "pass statement", "range()", "enumerate()", "zip()"]
          },
          {
            name: "Data Structures",
            topics: ["Lists", "Tuples", "Sets", "Dictionaries", "List Comprehensions", "Dict Comprehensions", "Set Comprehensions", "Slicing", "Nested Structures"]
          },
          {
            name: "Functions",
            topics: ["Function Definition", "Parameters & Arguments", "Default Arguments", "*args & **kwargs", "Return Statement", "Lambda Functions", "Map, Filter, Reduce", "Recursion", "Decorators", "Generators", "yield keyword"]
          },
          {
            name: "OOP in Python",
            topics: ["Classes & Objects", "self keyword", "__init__ method", "Instance vs Class Variables", "Methods", "Inheritance", "Multiple Inheritance", "super()", "Polymorphism", "Encapsulation", "Magic Methods (__str__, __repr__)", "Property Decorators", "Abstract Classes"]
          },
          {
            name: "Modules & Packages",
            topics: ["import statement", "from...import", "Creating Modules", "Packages", "__init__.py", "Standard Library", "Third-party Packages", "pip", "Virtual Environments"]
          },
          {
            name: "File Handling",
            topics: ["open()", "read(), write(), append()", "with statement", "File Modes", "CSV Files", "JSON Files", "Binary Files"]
          },
          {
            name: "Exception Handling",
            topics: ["try-except", "except with specific exceptions", "else clause", "finally", "raise", "Custom Exceptions", "Exception Hierarchy"]
          },
          {
            name: "Advanced Topics",
            topics: ["List Comprehensions", "Generators", "Iterators", "Context Managers", "Regular Expressions", "Threading", "Multiprocessing", "Async/Await", "Type Hints", "Metaclasses"]
          },
          {
            name: "Libraries",
            topics: ["NumPy", "Pandas", "Matplotlib", "Requests", "Flask/Django", "SQLAlchemy", "BeautifulSoup", "Selenium"]
          }
        ]
      },
      {
        name: "Java",
        color: "bg-red-500",
        icon: <Code className="w-4 h-4" />,
        children: [
          {
            name: "Basics",
            topics: ["JDK, JRE, JVM", "Syntax", "Data Types (primitive & non-primitive)", "Variables", "Operators", "Type Casting", "Input/Output", "Comments", "Naming Conventions"]
          },
          {
            name: "Control Flow",
            topics: ["if-else", "switch-case", "for loop", "while loop", "do-while", "enhanced for loop", "break & continue", "return statement"]
          },
          {
            name: "OOP in Java",
            topics: ["Classes & Objects", "Constructors", "this keyword", "Access Modifiers (public, private, protected, default)", "Inheritance", "super keyword", "Method Overloading", "Method Overriding", "Polymorphism", "Abstraction", "Abstract Classes", "Interfaces", "Encapsulation", "final keyword", "static keyword", "Inner Classes"]
          },
          {
            name: "Arrays & Strings",
            topics: ["Array Declaration", "Array Initialization", "Multidimensional Arrays", "Array Methods", "String Class", "String Methods", "StringBuilder", "StringBuffer", "String Immutability"]
          },
          {
            name: "Collections Framework",
            topics: ["List Interface", "ArrayList", "LinkedList", "Vector", "Set Interface", "HashSet", "LinkedHashSet", "TreeSet", "Map Interface", "HashMap", "LinkedHashMap", "TreeMap", "Queue Interface", "PriorityQueue", "Deque", "Iterator", "ListIterator", "Comparable", "Comparator"]
          },
          {
            name: "Exception Handling",
            topics: ["try-catch", "finally", "throw", "throws", "Checked Exceptions", "Unchecked Exceptions", "Custom Exceptions", "Exception Hierarchy"]
          },
          {
            name: "Multithreading",
            topics: ["Thread Class", "Runnable Interface", "Thread Lifecycle", "Synchronization", "synchronized keyword", "wait() & notify()", "ExecutorService", "Thread Pools", "Locks"]
          },
          {
            name: "File I/O",
            topics: ["File Class", "FileReader & FileWriter", "BufferedReader & BufferedWriter", "InputStream & OutputStream", "Serialization", "try-with-resources"]
          },
          {
            name: "Advanced Concepts",
            topics: ["Generics", "Lambda Expressions", "Streams API", "Functional Interfaces", "Method References", "Optional Class", "Annotations", "Reflection", "Enums"]
          },
          {
            name: "Java 8+ Features",
            topics: ["Lambda Expressions", "Streams", "Optional", "Date & Time API", "Default Methods", "Method References", "Functional Interfaces"]
          }
        ]
      },
      {
        name: "Data Structures",
        color: "bg-purple-500",
        icon: <Database className="w-4 h-4" />,
        children: [
          {
            name: "Arrays",
            topics: ["1D Arrays", "2D Arrays", "Multidimensional Arrays", "Array Operations", "Time Complexity", "Space Complexity", "Dynamic Arrays"]
          },
          {
            name: "Linked Lists",
            topics: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Insertion Operations", "Deletion Operations", "Traversal", "Reversal"]
          },
          {
            name: "Stacks",
            topics: ["Stack Operations (Push, Pop, Peek)", "Array Implementation", "Linked List Implementation", "Applications (Expression Evaluation, Backtracking)", "Balanced Parentheses"]
          },
          {
            name: "Queues",
            topics: ["Queue Operations (Enqueue, Dequeue)", "Circular Queue", "Priority Queue", "Deque", "Array Implementation", "Linked List Implementation"]
          },
          {
            name: "Trees",
            topics: ["Binary Trees", "Binary Search Trees", "Tree Traversals (Inorder, Preorder, Postorder, Level Order)", "Height & Depth", "Balanced Trees", "AVL Trees", "Red-Black Trees", "B-Trees", "Heap", "Trie"]
          },
          {
            name: "Graphs",
            topics: ["Graph Representation (Adjacency Matrix, Adjacency List)", "BFS (Breadth-First Search)", "DFS (Depth-First Search)", "Shortest Path (Dijkstra's, Bellman-Ford)", "Minimum Spanning Tree (Prim's, Kruskal's)", "Topological Sort", "Cycle Detection"]
          },
          {
            name: "Hashing",
            topics: ["Hash Functions", "Hash Tables", "Collision Resolution (Chaining, Open Addressing)", "Load Factor", "HashMap Implementation", "HashSet"]
          },
          {
            name: "Heaps",
            topics: ["Min Heap", "Max Heap", "Heap Operations", "Heapify", "Heap Sort", "Priority Queue Implementation"]
          },
          {
            name: "Advanced Structures",
            topics: ["Segment Trees", "Fenwick Tree (Binary Indexed Tree)", "Union-Find (Disjoint Set)", "Suffix Arrays", "Suffix Trees"]
          }
        ]
      },
      {
        name: "OOP Concepts",
        color: "bg-indigo-500",
        icon: <Layers className="w-4 h-4" />,
        children: [
          {
            name: "Core Principles",
            topics: ["Classes", "Objects", "Attributes", "Methods", "Constructors", "Destructors", "this/self keyword"]
          },
          {
            name: "Encapsulation",
            topics: ["Data Hiding", "Access Modifiers (Public, Private, Protected)", "Getters & Setters", "Property Decorators", "Information Hiding"]
          },
          {
            name: "Inheritance",
            topics: ["Base Class", "Derived Class", "Single Inheritance", "Multiple Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance", "super keyword", "Method Resolution Order (MRO)", "Constructor Chaining"]
          },
          {
            name: "Polymorphism",
            topics: ["Compile-time Polymorphism (Method Overloading)", "Runtime Polymorphism (Method Overriding)", "Operator Overloading", "Duck Typing", "Dynamic Binding"]
          },
          {
            name: "Abstraction",
            topics: ["Abstract Classes", "Abstract Methods", "Interfaces", "Pure Virtual Functions", "Concrete Classes", "Implementation Hiding"]
          },
          {
            name: "Relationships",
            topics: ["Association", "Aggregation", "Composition", "Dependency", "IS-A Relationship", "HAS-A Relationship"]
          },
          {
            name: "SOLID Principles",
            topics: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation", "Dependency Inversion"]
          },
          {
            name: "Design Patterns",
            topics: ["Creational (Singleton, Factory, Builder)", "Structural (Adapter, Decorator, Proxy)", "Behavioral (Observer, Strategy, Command)", "MVC Pattern"]
          }
        ]
      },
      {
        name: "Algorithms",
        color: "bg-pink-500",
        icon: <Code className="w-4 h-4" />,
        children: [
          {
            name: "Sorting",
            topics: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort", "Radix Sort", "Bucket Sort", "Time Complexities"]
          },
          {
            name: "Searching",
            topics: ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search", "Exponential Search"]
          },
          {
            name: "Recursion",
            topics: ["Base Case", "Recursive Case", "Call Stack", "Tail Recursion", "Backtracking", "Divide & Conquer"]
          },
          {
            name: "Dynamic Programming",
            topics: ["Memoization", "Tabulation", "Optimal Substructure", "Overlapping Subproblems", "Common Problems (Fibonacci, Knapsack, LCS, LIS)"]
          },
          {
            name: "Greedy Algorithms",
            topics: ["Greedy Choice Property", "Activity Selection", "Huffman Coding", "Fractional Knapsack", "Minimum Spanning Tree"]
          },
          {
            name: "Graph Algorithms",
            topics: ["BFS", "DFS", "Dijkstra's Algorithm", "Bellman-Ford", "Floyd-Warshall", "Prim's Algorithm", "Kruskal's Algorithm", "Topological Sort"]
          },
          {
            name: "String Algorithms",
            topics: ["Pattern Matching (KMP, Rabin-Karp)", "Longest Common Substring", "String Reversal", "Anagram Detection"]
          },
          {
            name: "Complexity Analysis",
            topics: ["Time Complexity", "Space Complexity", "Big O Notation", "Big Theta", "Big Omega", "Best/Average/Worst Case"]
          }
        ]
      }
    ]
  };

  const Node = ({ node, path = "" }) => {
    const currentPath = path ? `${path}.${node.name}` : node.name;
    const isExpanded = expanded[currentPath];
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div className="ml-4">
        <div
          className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
            node.color ? node.color + ' text-white' : 'bg-gray-100 hover:bg-gray-200'
          } my-2`}
          onClick={() => hasChildren && toggleNode(currentPath)}
        >
          {hasChildren && (
            <span className="text-white">
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
          )}
          {node.icon && <span className="text-white">{node.icon}</span>}
          <span className="font-semibold">{node.name}</span>
        </div>

        {isExpanded && hasChildren && (
          <div className="ml-6 border-l-2 border-gray-300 pl-4">
            {node.children.map((child, idx) => (
              <div key={idx}>
                {child.topics ? (
                  <div className="my-3">
                    <div className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      {child.name}
                    </div>
                    <div className="ml-4 space-y-1">
                      {child.topics.map((topic, topicIdx) => (
                        <div
                          key={topicIdx}
                          className="text-sm text-gray-600 py-1 px-3 bg-white rounded border-l-2 border-blue-300 hover:bg-blue-50 transition-colors"
                        >
                          • {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Node node={child} path={currentPath} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <Book className="w-10 h-10 text-blue-600" />
            Complete Programming & Full Stack Development Mind Map
          </h1>
          <p className="text-gray-600 text-lg">
            Click on any topic to expand and explore all subtopics. This comprehensive mind map covers everything from fundamentals to advanced full-stack development.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Full Stack Development</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Java</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Data Structures</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">OOP</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Algorithms</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <Node node={mindMapData} />
        </div>
        
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center gap-2">
              <Globe className="w-6 h-6 text-cyan-600" />
              Full Stack Learning Path
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Frontend:</strong> HTML → CSS → JavaScript → React</li>
              <li>• <strong>Backend:</strong> Node.js → Express.js → REST APIs</li>
              <li>• <strong>Database:</strong> SQL (PostgreSQL/MySQL) → MongoDB</li>
              <li>• <strong>DevOps:</strong> Git → Docker → Cloud Deployment</li>
              <li>• <strong>Practice:</strong> Build full-stack projects end-to-end</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center gap-2">
              <Server className="w-6 h-6 text-purple-600" />
              Study Tips
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Start with fundamentals before advanced topics</li>
              <li>• Build projects to apply multiple concepts</li>
              <li>• Master one stack before learning alternatives</li>
              <li>• Practice DSA problems regularly (LeetCode, HackerRank)</li>
              <li>• Understand OOP principles across all languages</li>
              <li>• Deploy projects to understand the full lifecycle</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="font-bold text-xl mb-3">🎯 Quick Navigation Tips</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Build Tools
            </div>
            <div>
              <strong>Backend:</strong> Node.js, Express, APIs, Auth, Security
            </div>
            <div>
              <strong>Database:</strong> SQL, NoSQL, ORMs, Query Optimization
            </div>
            <div>
              <strong>DevOps:</strong> Git, Docker, Kubernetes, CI/CD, Cloud
            </div>
            <div>
              <strong>Core CS:</strong> DSA, Algorithms, OOP, Design Patterns
            </div>
            <div>
              <strong>Languages:</strong> JavaScript, Python, Java fundamentals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMap;