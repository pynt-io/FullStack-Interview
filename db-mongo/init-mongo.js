// Connect to MongoDB
conn = new Mongo();

// Connect to the database
db = conn.getDB("threats");

// Create "threats" collection
db.createCollection("threats");
db.threats.insertMany([
  {
    title: "WannaCry Ransomware Outbreak",
    description:
      "A widespread ransomware campaign affecting Windows-based systems.",
    source: "Global News",
    reportedDate: "2017-05-12",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ea"],
    mitigationSteps: ["Install security updates", "Backup data regularly"],
    categoryCode: "RAN",
  },
  {
    title: "Spear Phishing Campaign against Finance Sector",
    description:
      "Targeted email attack aiming to steal sensitive financial information.",
    source: "Finance Security Watch",
    reportedDate: "2022-04-22",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860eb", "801f191e810c19729de860ec"],
    mitigationSteps: ["Employee awareness training", "Implement email filters"],
    categoryCode: "PHI",
  },
  {
    title: "DDoS Attack on Online Retailer",
    description:
      "A distributed denial-of-service attack aimed at taking down an e-commerce platform.",
    source: "Retailer Incident Report",
    reportedDate: "2022-11-07",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ed"],
    mitigationSteps: [
      "Enhance server capacity",
      "Use DDoS mitigation services",
    ],
    categoryCode: "DDOS",
  },
  {
    title: "Zero-Day Exploit in Web Browser",
    description:
      "Newly discovered vulnerability exploited in a popular web browser.",
    source: "Tech Security Blog",
    reportedDate: "2023-03-01",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860ee"],
    mitigationSteps: ["Disable affected plugin", "Update browser immediately"],
    categoryCode: "EXP",
  },
  {
    title: "Insider Threat Leads to Data Breach",
    description: "Confidential data leaked by a disgruntled employee.",
    source: "Corporate Security Alert",
    reportedDate: "2023-02-14",
    riskRating: "Severe",
    affectedSystems: ["801f191e810c19729de860ef"],
    mitigationSteps: ["Conduct internal audit", "Strengthen access controls"],
    categoryCode: "INS",
  },
  {
    title: "Social Engineering Attack on Healthcare Provider",
    description:
      "Personal health information compromised through deceptive communication.",
    source: "Healthcare Security News",
    reportedDate: "2022-05-18",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860f0"],
    mitigationSteps: ["Staff security awareness training"],
    categoryCode: "SOC",
  },
  {
    title: "APT Campaign Targets Government Networks",
    description:
      "Sophisticated threat actor compromises government infrastructure.",
    source: "National Cybersecurity Center",
    reportedDate: "2023-01-09",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860f1"],
    mitigationSteps: ["Isolate compromised systems", "Enhanced monitoring"],
    categoryCode: "APT",
  },
  {
    title: "Malicious Mobile App Steals User Data",
    description:
      "App on popular app stores harvesting personal information without consent.",
    source: "Consumer Protection Service",
    reportedDate: "2023-04-20",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860f2"],
    mitigationSteps: ["Uninstall app", "Monitor account activity"],
    categoryCode: "MAL",
  },
  {
    title: "SQL Injection Vulnerability in Database Software",
    description:
      "Critical SQL injection flaw allows attackers to access databases without authorization.",
    source: "Database Tech Community",
    reportedDate: "2022-08-30",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860f3"],
    mitigationSteps: [
      "Apply software patches",
      "Regularly audit database access",
    ],
    categoryCode: "EXP",
  },
  {
    title: "Credential Stuffing Attacks Rampant on Social Media",
    description:
      "Large scale attempt to breach social media accounts using previously breached username and password pairs.",
    source: "Social Media Security Team",
    reportedDate: "2022-07-05",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860f4"],
    mitigationSteps: [
      "Enforce strong password policies",
      "Enable multi-factor authentication",
    ],
    categoryCode: "PHI",
  },
  {
    title: "Man-in-the-Middle Attack on Public Wi-Fi",
    description: "Attackers intercept and possibly alter communications between two parties who believe they are directly communicating with each other.",
    source: "Cybersecurity News",
    reportedDate: "2024-01-15",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ea"], // Example system ID, replace with actual
    mitigationSteps: ["Use VPN", "Avoid sensitive transactions on public Wi-Fi"],
    categoryCode: "EXP",
  },
  {
    title: "Cloud Storage Data Leak",
    description: "Sensitive information exposed due to misconfigured cloud storage permissions.",
    source: "Cloud Security Report",
    reportedDate: "2024-02-20",
    riskRating: "Severe",
    affectedSystems: ["801f191e810c19729de860eb"], // Example system ID, replace with actual
    mitigationSteps: ["Review permissions", "Implement strong access controls"],
    categoryCode: "INS",
  },
  {
    title: "Cryptocurrency Mining Malware",
    description: "Malware uses victim's computing resources to mine cryptocurrency without consent.",
    source: "Digital Currency Watch",
    reportedDate: "2024-03-10",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860ec"], // Example system ID, replace with actual
    mitigationSteps: ["Install antivirus", "Monitor system performance"],
    categoryCode: "MAL",
  },
  {
    title: "Supply Chain Cyberattack",
    description: "Attackers compromise a supplier's systems to gain access to its customers' networks.",
    source: "Supply Chain Security",
    reportedDate: "2024-02-05",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860ed"], // Example system ID, replace with actual
    mitigationSteps: ["Vet suppliers", "Monitor network traffic"],
    categoryCode: "APT",
  },
  {
    title: "IoT Device Firmware Vulnerability",
    description: "A vulnerability in IoT device firmware allows unauthorized remote control.",
    source: "IoT Security Bulletin",
    reportedDate: "2024-01-28",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ee"], // Example system ID, replace with actual
    mitigationSteps: ["Update firmware", "Change default passwords"],
    categoryCode: "EXP",
  },
  {
    title: "Fake Software Update Attack",
    description: "Attackers trick users into downloading malicious software through fake update prompts.",
    source: "Tech Scam Alert",
    reportedDate: "2024-03-22",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ef"], // Example system ID, replace with actual
    mitigationSteps: ["Educate users", "Verify update sources"],
    categoryCode: "PHI",
  },
  {
    title: "AI-Powered Social Engineering",
    description: "Attackers use AI-generated content to create highly convincing phishing messages.",
    source: "AI Security Insights",
    reportedDate: "2024-03-15",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860f0"], // Example system ID, replace with actual
    mitigationSteps: ["Awareness training", "Use AI detection tools"],
    categoryCode: "SOC",
  },
  {
    title: "Biometric Data Breach",
    description: "Sensitive biometric data exposed through a security breach.",
    source: "Privacy Protection News",
    reportedDate: "2024-02-18",
    riskRating: "Severe",
    affectedSystems: ["801f191e810c19729de860f1"], // Example system ID, replace with actual
    mitigationSteps: ["Encrypt biometric data", "Limit data collection"],
    categoryCode: "INS",
  },
  {
    title: "Quantum Computing Threat to Encryption",
    description: "Advancements in quantum computing pose a threat to current encryption standards.",
    source: "Quantum Computing Review",
    reportedDate: "2024-01-05",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860f2"], // Example system ID, replace with actual
    mitigationSteps: ["Research post-quantum cryptography", "Plan for encryption upgrades"],
    categoryCode: "EXP",
  },
  {
    title: "Deepfake Technology in Identity Fraud",
    description: "Use of deepfake technology to create convincing fake identities for fraud.",
    source: "Digital Identity Security",
    reportedDate: "2024-03-30",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860f3"], // Example system ID, replace with actual
    mitigationSteps: ["Implement biometric verification", "Use deepfake detection tools"],
    categoryCode: "SOC",
  },
  {
    title: "Rogue AI Chatbots Spreading Misinformation",
    description: "AI-powered chatbots deployed across social media platforms to spread misinformation at scale.",
    source: "AI Security News",
    reportedDate: "2024-03-05",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860ea"], // Example system ID, adjust as needed
    mitigationSteps: ["Implement AI detection mechanisms", "Educate users on digital literacy"],
    categoryCode: "SOC",
  },
  {
    title: "E-Skimming on Popular Retail Websites",
    description: "Hackers inject skimming code on e-commerce checkout pages to steal credit card information.",
    source: "E-Commerce Security Insights",
    reportedDate: "2024-04-01",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860eb"], // Example system ID, adjust as needed
    mitigationSteps: ["Use secure and updated e-commerce platforms", "Monitor website for unauthorized changes"],
    categoryCode: "EXP",
  },
  {
    title: "Smart Home Devices Hijacked",
    description: "Cybercriminals exploiting vulnerabilities in smart home devices to gain unauthorized access to home networks.",
    source: "Home Network Security",
    reportedDate: "2024-02-14",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ec"], // Example system ID, adjust as needed
    mitigationSteps: ["Regularly update device firmware", "Change default credentials"],
    categoryCode: "MAL",
  },
  {
    title: "Cryptojacking Campaign Targets Corporate Networks",
    description: "Malicious actors infiltrate corporate networks to utilize corporate resources for cryptocurrency mining.",
    source: "Corporate Security News",
    reportedDate: "2024-03-21",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860ed"], // Example system ID, adjust as needed
    mitigationSteps: ["Monitor network for unusual activity", "Implement endpoint protection"],
    categoryCode: "MAL",
  },
  {
    title: "Compromised Digital Signatures in Software Distribution",
    description: "Attackers compromising digital signatures to distribute malicious software under the guise of legitimate updates.",
    source: "Software Security Updates",
    reportedDate: "2024-01-30",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860ee"], // Example system ID, adjust as needed
    mitigationSteps: ["Verify digital signatures", "Use trusted software distribution channels"],
    categoryCode: "EXP",
  },
  {
    title: "Voice Phishing Scams Leveraging AI",
    description: "Scammers use AI-generated voice cloning technology to impersonate trusted individuals in voice phishing scams.",
    source: "Cyber Fraud Prevention",
    reportedDate: "2024-03-10",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ef"], // Example system ID, adjust as needed
    mitigationSteps: ["Educate employees and customers on voice phishing", "Implement call verification procedures"],
    categoryCode: "PHI",
  },
  {
    title: "Ransomware Targeting Industrial Control Systems",
    description: "Industrial control systems targeted by ransomware attacks, threatening critical infrastructure.",
    source: "Infrastructure Security Alerts",
    reportedDate: "2024-02-05",
    riskRating: "Severe",
    affectedSystems: ["801f191e810c19729de860f0"], // Example system ID, adjust as needed
    mitigationSteps: ["Isolate operational technology networks", "Conduct regular backups"],
    categoryCode: "RAN",
  },
  {
    title: "Deepfake Disinformation Campaigns",
    description: "Use of deepfake technology to create realistic but fake audio and video to spread disinformation.",
    source: "Digital Media Security",
    reportedDate: "2024-01-12",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860f1"], // Example system ID, adjust as needed
    mitigationSteps: ["Implement deepfake detection tools", "Promote media literacy among users"],
    categoryCode: "SOC",
  },
  {
    title: "IoT Botnet DDoS Attacks",
    description: "Compromised IoT devices used to form botnets that launch massive DDoS attacks on critical online services.",
    source: "IoT Security Watch",
    reportedDate: "2024-02-22",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860f2"], // Example system ID, adjust as needed
    mitigationSteps: ["Secure IoT devices", "Implement DDoS protection measures"],
    categoryCode: "DDOS",
  },
  {
    title: "Unauthorized Cloud Computing Services",
    description: "Employees using unauthorized cloud services for work, leading to potential data leaks and security breaches.",
    source: "Cloud Computing Security",
    reportedDate: "2024-03-02",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860f3"], // Example system ID, adjust as needed
    mitigationSteps: ["Implement cloud access security brokers (CASBs)", "Educate employees on approved cloud services"],
    categoryCode: "INS",
  },
  {
    title: "Insecure API Exposes Customer Data",
    description: "A poorly secured API endpoint leaks sensitive customer data, leading to privacy violations.",
    source: "API Security Bulletin",
    reportedDate: "2024-03-25",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ea"], // Adjust accordingly
    mitigationSteps: ["Implement rigorous API security testing", "Use API gateways for secure access"],
    categoryCode: "EXP",
  },
  {
    title: "Cross-Site Scripting (XSS) on Major News Website",
    description: "Attackers exploit XSS vulnerability, injecting malicious scripts into web pages viewed by users.",
    source: "Web Security Watch",
    reportedDate: "2024-04-02",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860eb"], // Adjust accordingly
    mitigationSteps: ["Sanitize input fields", "Implement Content Security Policy"],
    categoryCode: "EXP",
  },
  {
    title: "Fraudulent Mobile Payment Applications",
    description: "Fake payment apps on official stores trick users into revealing their banking information.",
    source: "Financial Fraud Alert",
    reportedDate: "2024-03-18",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ec"], // Adjust accordingly
    mitigationSteps: ["Verify app authenticity", "Educate users on secure transactions"],
    categoryCode: "PHI",
  },
  {
    title: "Compromised Security Cameras in Corporate Offices",
    description: "Hackers gain control over security cameras, threatening corporate espionage.",
    source: "Corporate Security Insights",
    reportedDate: "2024-02-28",
    riskRating: "Severe",
    affectedSystems: ["801f191e810c19729de860ed"], // Adjust accordingly
    mitigationSteps: ["Change default passwords", "Regular firmware updates"],
    categoryCode: "MAL",
  },
  {
    title: "Keylogging Software on Public Computers",
    description: "Malware installed on public computers records keystrokes, capturing passwords and other sensitive data.",
    source: "Public Computer Security",
    reportedDate: "2024-04-10",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860ee"], // Adjust accordingly
    mitigationSteps: ["Regularly scan for malware", "Restrict software installation"],
    categoryCode: "MAL",
  },
  {
    title: "Backdoor in Popular VPN Software",
    description: "A backdoor in widely-used VPN software potentially exposes user data to unauthorized parties.",
    source: "VPN Security News",
    reportedDate: "2024-01-20",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860ef"], // Adjust accordingly
    mitigationSteps: ["Update to the latest version", "Monitor outbound traffic"],
    categoryCode: "EXP",
  },
  {
    title: "Phishing Attacks via Voicemail",
    description: "Scammers leave voicemails urging victims to call back on a number that leads to a phishing scam.",
    source: "Telecom Security Update",
    reportedDate: "2024-03-15",
    riskRating: "Medium",
    affectedSystems: ["801f191e810c19729de860f0"], // Adjust accordingly
    mitigationSteps: ["Inform and educate staff", "Implement caller ID verification"],
    categoryCode: "PHI",
  },
  {
    title: "Unsecured Printers Lead to Data Leakage",
    description: "Confidential documents printed on networked printers are intercepted by unauthorized individuals.",
    source: "Network Security Bulletin",
    reportedDate: "2024-02-15",
    riskRating: "High",
    affectedSystems: ["801f191e810c19729de860f1"], // Adjust accordingly
    mitigationSteps: ["Encrypt network traffic", "Secure printer access"],
    categoryCode: "INS",
  },
  {
    title: "Bypassing Facial Recognition Security Systems",
    description: "Hackers use deepfake technology to bypass facial recognition security systems at secure facilities.",
    source: "Facial Recognition Security",
    reportedDate: "2024-03-30",
    riskRating: "Critical",
    affectedSystems: ["801f191e810c19729de860f2"], // Adjust accordingly
    mitigationSteps: ["Implement liveness detection", "Use multi-factor authentication"],
    categoryCode: "SOC",
  },
  {
    title: "Wearable Device Data Breach",
    description: "Personal health information from wearable devices exposed through a security breach.",
    source: "Health Device Security Report",
    reportedDate: "2024-03-07",
    riskRating: "Severe",
    affectedSystems: ["801f191e810c19729de860f3"], // Adjust accordingly
    mitigationSteps: ["Encrypt sensitive data", "Prompt users to regularly update device software"],
    categoryCode: "MAL",
  }
]);

db.createCollection("threats_categories");
db.threats_categories.insertMany([
  {
    _id: ObjectId("601f1f77bcf86cd799439011"),
    code: "MAL",
    name: "Malware",
    description:
      "Software designed to disrupt, damage, or gain unauthorized access to a computer system.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439012"),
    code: "PHI",
    name: "Phishing",
    description:
      "The fraudulent attempt to obtain sensitive information or data, such as usernames, passwords, and credit card details, by disguising oneself as a trustworthy entity in an electronic communication.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439013"),
    code: "DDOS",
    name: "DDoS Attack",
    description:
      "An attack in which multiple compromised computer systems attack a target, such as a server, website, or other network resource, and cause a denial of service for users of the targeted resource.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439014"),
    code: "RAN",
    name: "Ransomware",
    description:
      "A type of malicious software designed to block access to a computer system until a sum of money is paid.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439015"),
    code: "EXP",
    name: "Exploits",
    description:
      "Code that takes advantage of a software vulnerability or security flaw to cause unintended or unanticipated behavior to occur on computer software.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439016"),
    code: "INS",
    name: "Insider Threat",
    description:
      "Threats from people within the organization, such as employees, former employees, contractors or business associates, who have inside information concerning the organization's security practices, data and computer systems.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439017"),
    code: "SOC",
    name: "Social Engineering",
    description:
      "The use of deception to manipulate individuals into divulging confidential or personal information that may be used for fraudulent purposes.",
  },
  {
    _id: ObjectId("601f1f77bcf86cd799439018"),
    code: "APT",
    name: "Advanced Persistent Threat",
    description:
      "A prolonged and targeted cyberattack in which an intruder gains access to a network and remains undetected for an extended period.",
  },
]);

db.createCollection("systems");
db.systems.insertMany([
  {
    "_id": ObjectId("801f191e810c19729de860ea"),
    "name": "Windows Operating Systems",
    "owner": "Microsoft"
  },
  {
    "_id": ObjectId("801f191e810c19729de860eb"),
    "name": "Corporate Email Servers",
    "owner": "Various Companies"
  },
  {
    "_id": ObjectId("801f191e810c19729de860ec"),
    "name": "E-commerce Platforms",
    "owner": "Retail Businesses"
  },
  {
    "_id": ObjectId("801f191e810c19729de860ed"),
    "name": "Online Banking Services",
    "owner": "Banks and Financial Institutions"
  },
  {
    "_id": ObjectId("801f191e810c19729de860ee"),
    "name": "Web Browsers",
    "owner": "Tech Companies"
  },
  {
    "_id": ObjectId("801f191e810c19729de860ef"),
    "name": "Internal Corporate Networks",
    "owner": "Various Corporations"
  },
  {
    "_id": ObjectId("801f191e810c19729de860f0"),
    "name": "Healthcare Records Systems",
    "owner": "Hospitals and Clinics"
  },
  {
    "_id": ObjectId("801f191e810c19729de860f1"),
    "name": "Government Digital Infrastructure",
    "owner": "Government Agencies"
  },
  {
    "_id": ObjectId("801f191e810c19729de860f2"),
    "name": "Mobile Devices",
    "owner": "General Public"
  },
  {
    "_id": ObjectId("801f191e810c19729de860f3"),
    "name": "Database Management Systems",
    "owner": "Database Providers"
  }
]
);

// Output success message
print("Collections created successfully.");
