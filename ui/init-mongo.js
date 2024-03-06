// Connect to MongoDB
conn = new Mongo();

// Connect to the database
db = conn.getDB("threats");

// Create "threats" collection
db.createCollection("threats");

// Create "threats_details" collection
db.createCollection("threats_details");

// Output success message
print("Collections created successfully.");
