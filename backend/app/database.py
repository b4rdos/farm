import os
from typing import List, Dict
from app.model import Todo

import motor.motor_asyncio

MONGODB_URL = os.environ.get("MONGO_URL")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
database = client.TodoList
collection = database.todo


async def fetch_one_todo(title: str) -> Dict:
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_todos() -> List[Todo]:
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


async def create_todo(todo) -> Dict:
    document = todo
    _ = await collection.insert_one(document)
    return document


async def update_todo(title, desc):
    await collection.update_one({"title": title}, {"$set": {"description": desc}})
    document = await collection.find_one({"title": title})
    return document


async def remove_todo(title: str):
    await collection.delete_one({"title": title})
    return True
