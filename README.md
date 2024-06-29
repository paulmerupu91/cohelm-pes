View instructions for completing this take-home assignment [here](https://co-helm.notion.site/Senior-Product-Engineer-Take-Home-6e82ec45cc2a46b59a0d9ee3aeb9449c).

# Launching the Application

### Launch Backend

To launch the backend FastAPI application, run the following from the root of the project:

```sh
    cd backend
    # Create a virtual environment
    source .venv/bin/activate
    # Activate venv
    source .venv/bin/activate
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

# Ideas to improve the application

- Add a sidebar to the case page with links to different sections on the page such as Steps and Summary.
- Add back button that takes the user back to the dashboard page to resubmit the files if necessary.
- Add a sticky bar at the top to dynamically indicate the section that takes up the most space in the viewport as the user scrolls.
- Add Type/Interfaces in the frontend application using TS.
- Use Pydantic for type annotations and data validation in the backend application.
- Improve mobile layout.
- Modify tailwind config to include brand's primary, secondary and tertiary colors and generate TailwindCSS utility classes.
- Use server side rendering in certain pages if useful.

# Bonus tasks completed

- Restyled the file upload flow
- Created a generic file upload component to replace both `<GuidelinesUpload />` and `<MedicalRecordUpload />`