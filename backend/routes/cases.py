# cases.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/cases/")
def get_cases():
    return {"message": "Get all cases"}

@router.get("/cases/{case_id}")
def get_case(case_id: int):
    return {"message": f"Get case with ID {case_id}"}

@router.post("/cases/")
def create_case():
    return {"message": "Create a new case"}

@router.put("/cases/{case_id}")
def update_case(case_id: int):
    return {"message": f"Update case with ID {case_id}"}

@router.delete("/cases/{case_id}")
def delete_case(case_id: int):
    return {"message": f"Delete case with ID {case_id}"}