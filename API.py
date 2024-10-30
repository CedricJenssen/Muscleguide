from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Muscle Guide API!"}

@app.get("/exercises/{muscle_group}")
async def get_exercises(muscle_group: str):
    exercises = {
        "hamstrings": ["leg curl", "romanian deadlift"],
        "lower_back": ["superman", "back extensions"]
    }
    return {"muscle_group": muscle_group, "exercises": exercises.get(muscle_group, [])}