import tweepy
import requests

# 🔹 REPLACE THESE WITH YOUR ACTUAL KEYS & TOKENS 🔹
CONSUMER_KEY = "m1eBhQiiQquUXVc8FctoT3knT"

CONSUMER_SECRET = "OTBGq5K0NWks4wiM5snvAoa5ld3xhOsryIFfHC6FnjnfEgCvvz"

ACCESS_TOKEN ="1592190862016004096-eUnr7p36EXpy4yCX8kG88SYwah7Xbc"


ACCESS_TOKEN_SECRET = "EqOvj0h90iMzzDyDF7EpWA1KtqXpZ0fBigfNWUc93ssw7"


BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAABmMzwEAAAAA5BvihSJh5xquZZ7YPiuq9bKF3B8%3DA8VOkirqT29GUyqKVpKVvWOw3CRCxXnknyKdYYVoky7bxLUXU7"



# ✅ Function to authenticate with Twitter API v1.1 (Tweepy)
def authenticate_tweepy():
    try:
        auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
        auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
        api = tweepy.API(auth, wait_on_rate_limit=True)

        # Verify authentication
        user = api.verify_credentials()
        if user:
            print(f"✅ Authentication successful! Logged in as: {user.screen_name}")
        return api
    except Exception as e:
        print(f"❌ Authentication failed: {e}")
        return None

# ✅ Function to post a tweet using Tweepy (API v1.1)
def post_tweet_tweepy(api, message):
    try:
        api.update_status(message)
        print(f"✅ Tweet posted successfully: {message}")
    except tweepy.errors.Forbidden:
        print("❌ Error: You don't have permission to post tweets. Check your API access level.")
    except Exception as e:
        print(f"❌ Failed to post tweet: {e}")

# ✅ Function to post a tweet using Twitter API v2 (Requests)
def post_tweet_v2(message):
    url = "https://api.twitter.com/2/tweets"
    headers = {
        "Authorization": f"Bearer {BEARER_TOKEN}",
        "Content-Type": "application/json"
    }
    payload = {"text": message}
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 201:
        print(f"✅ Tweet posted successfully: {message}")
    else:
        print(f"❌ Failed to post tweet. Error: {response.status_code} - {response.json()}")

# 🔹 Run authentication & tweet posting
if __name__ == "__main__":
    tweet_text = "Hello, Twitter API! #TestingOAuth"
    
    # Try Tweepy (API v1.1)
    print("\n🔹 Trying Tweepy (API v1.1)...")
    api = authenticate_tweepy()
    if api:
        post_tweet_tweepy(api, tweet_text)
    
    # Try API v2 (if Tweepy fails)
    print("\n🔹 Trying Twitter API v2...")
    post_tweet_v2(tweet_text)
