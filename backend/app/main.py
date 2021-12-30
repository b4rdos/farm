from typing import Any, Dict, List, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.database import (
    fetch_all_todos,
    fetch_one_todo,
    create_todo,
    update_todo,
    remove_todo,
)
from app.model import Todo

# App object
app = FastAPI()

origins = ["https://frontent"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_by_title(title) -> Dict[str, Any]:
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f"There is no TODO item with this title: {title}")


@app.get("/api/todo")
async def get_all_todos() -> List[Todo]:
    todos = await fetch_all_todos()
    return todos


@app.post("/api/todo", response_model=Todo)
async def post_todo(todo: Todo) -> Dict[str, Any]:
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Bad request.")


@app.put("/api/todo/{title}", response_model=Todo)
async def put_todo(title: str, description: str) -> Todo:
    response = await update_todo(title, desc=description)
    if response:
        return response
    raise HTTPException(404, f"There is no TODO item with this title: {title}")


@app.delete("/api/todo/{title}")
async def delete_todo(title: str) -> bool:
    deleted = await remove_todo(title)
    if deleted:
        return deleted
    raise HTTPException(404, f"There is no TODO item with this title: {title}")
