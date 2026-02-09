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
]

@app.get("/")
def home():
    return {"status":"backend running"}

@app.get("/api/facts")
def get_facts():
    return facts