View instructions for completing this take-home assignment [here](https://co-helm.notion.site/Senior-Product-Engineer-Take-Home-6e82ec45cc2a46b59a0d9ee3aeb9449c).

# Launching the Application

### Launch Backend

To launch the backend FastAPI application, run the following from the root of the project:

```sh
    cd backend
    # Install FastAPI
    pip install fastapi
    # Launch the backend server
    fastapi dev main.py
```

### Launch Frontend

To launch the frontend NextJS application, run the following from the root of the project:

```sh
    cd frontend
    # Install Node Modules
    npm install
    # Launch the dev server
    npm run dev
```

## Accessing the application

Go to the following URL to access the frontend application:

[http://localhost:3000/](http://localhost:3000/)

- For the dashboard go to the root or the following:
[http://localhost:3000/dashboard/case/case_891a_6fbl_87d1_4326](http://localhost:3000/dashboard/case/case_891a_6fbl_87d1_4326)
- On submitting/clicking Continue button on the dashboard page, the user will be redirected to an example case page such as the following:
[http://localhost:3000/dashboard](http://localhost:3000/dashboard)

Go to the following URL to access the backend application:

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

The following URLs can be used to fetch different variations of data present in response-1.json, response-2.json, and response-3.json:

- [http://127.0.0.1:8000/cases/simulator_case?version=1](http://127.0.0.1:8000/cases/simulator_case?version=1)
- [http://127.0.0.1:8000/cases/simulator_case?version=2](http://127.0.0.1:8000/cases/simulator_case?version=2)
- [http://127.0.0.1:8000/cases/simulator_case?version=3](http://127.0.0.1:8000/cases/simulator_case?version=3)