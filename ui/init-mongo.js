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
