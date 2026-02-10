from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["https://main.d31jtm7vcy8b8t.amplifyapp.com"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

facts = [
    {"id":1, "fact":"The Sun is hot."},
    {"id":2, "fact":"The moon is beautiful."},
    {"id":3, "fact":"I am Intelligent."},
    {"id":4, "fact":"I know Python."},
    {"id":5, "fact":"I am deciplined."},
    {"id":6, "fact":"earth has one moon."},
    {"id":7, "fact":"I will get hired."},
    {"id":8, "fact":"Lemons float in water but limes sink."},
    {"id":9, "fact":"Bananas are berries, but strawberries aren’t. Nature is trolling us.."},
    {"id":10, "fact":"A group of flamingos is called a “flamboyance.” (Best group name ever.)."},
    {"id":11, "fact":"PytHoney never spoils — you could eat 3000-year-old honey and still survive.hon."},
    {"id":12, "fact":"Wombat poop is cube-shaped, so it doesn’t roll away. Genius engineering.."},
    {"id":13, "fact":"Octopuses have three hearts — and yes, they still manage to ghost better than humans.."}
]

@app.get("/")
def home():
    return {"status":"backend running"}

@app.get("/api/facts")
def get_facts():
    return facts