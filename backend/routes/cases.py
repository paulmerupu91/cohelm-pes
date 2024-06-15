# cases.py
from fastapi import APIRouter
from utils import read_json_file, update_case_data, get_case_data

# import asyncio

cases = []

cases = update_case_data('./../assets/response-1.json', cases)

router = APIRouter()

@router.get("/cases/")
def get_cases():
    return cases

@router.get("/cases/{case_id}")
def get_case(case_id: str):
    return get_case_data( cases=cases )

@router.post("/cases/")
def create_case():
    return {"message": "Create a new case"}

@router.put("/cases/{case_id}")
def update_case(case_id: int):
    return {"message": f"Update case with ID {case_id}"}

@router.delete("/cases/{case_id}")
def delete_case(case_id: int):
    return {"message": f"Delete case with ID {case_id}"}