
from typing import Union, Optional, List
from fastapi import FastAPI, Request, File, UploadFile, status

from fastapi.responses import HTMLResponse, RedirectResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

some_file_path = "static/images/J&E_Abby_Wedding.jpg"
app = FastAPI()


@app.get("/")
async def main():
    return FileResponse(some_file_path)