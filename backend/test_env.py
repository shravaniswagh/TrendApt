import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Check if values are loaded
print("CLIENT_ID:", os.getenv("CLIENT_ID"))  
print("CLIENT_SECRET:", os.getenv("CLIENT_SECRET"))
