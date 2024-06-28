# cases.py
from fastapi import APIRouter
from utils import generate_post_id_string, update_case_data, get_case_data, read_json_file
from fastapi import HTTPException
import datetime

# import asyncio

cases = update_case_data('./../assets/response-1.json', [])

router = APIRouter()

@router.get("/cases/")
def get_cases():
    return cases

@router.get("/cases/{case_id}")
def get_case(case_id: str, version: int = None):
    if( case_id == 'simulator_case' ):
        return get_case_data( cases=cases, version=version )
    else:
        if( cases ):
            for case in cases:
                if case['case_id'] == case_id:
                    return case
        raise HTTPException(status_code=404, detail="Case not found")

@router.post("/cases/")
def create_case( new_case: dict ) -> dict:

    time = datetime.datetime.now()
    new_case['created_at'] = time
    if new_case and not hasattr( new_case, 'status' ):
        new_case['status'] = 'submitted'
    new_case['case_id'] = generate_post_id_string()

    # Except case_id, created_at and status, update all other fields from response-3.json file
    response_3 = read_json_file('./../assets/response-3.json')
    for key in response_3.keys():
        if key not in ['case_id', 'created_at', 'status']:
            new_case[key] = response_3[key]

    cases.append(new_case)
    return {"message": "Created a new case"}

@router.put("/cases/{case_id}")
def update_case(case_id: int):
    return {"message": f"Update case with ID {case_id}"}

@router.delete("/cases/{case_id}")
def delete_case(case_id: int):
    return {"message": f"Delete case with ID {case_id}"}