from pymongo import MongoClient

mongo_url = "mongodb://admin:password@localhost:27017/threats?authSource=admin"
mongo_client = MongoClient(mongo_url)