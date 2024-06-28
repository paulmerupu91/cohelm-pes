import json
import uuid

def read_json_file( file_path: str ):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def update_case_data( file_path : str, cases: list ):
    data = read_json_file( file_path )
    cases = [data]
    return cases

# Simulate case data updates
counter_for_get_case = 1

def get_case_data( version: int = None, cases: list = [] ):
    global counter_for_get_case
    if version:
        counter_for_get_case = version
    print('counter_for_get_case:', counter_for_get_case)
    match counter_for_get_case:
        case 1:
            cases_updated = update_case_data('./../assets/response-1.json', cases)
            counter_for_get_case += 1
            return cases_updated[0]
        case 2:
            cases_updated = update_case_data('./../assets/response-2.json', cases)
            counter_for_get_case += 1
            return cases_updated[0]
        case 3:
            cases_updated = update_case_data('./../assets/response-3.json', cases)
            counter_for_get_case = 1
            return cases_updated[0]
        case _:
            counter_for_get_case = 1
            return cases[0]
        
def generate_post_id_string():
    id = uuid.uuid1()
    uuid_string = str(id)
    # select the last five characters of the uuid string
    return f"case_{uuid_string[-5:]}"