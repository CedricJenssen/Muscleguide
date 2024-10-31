from fastapi import FastAPI, HTTPException
import json

app = FastAPI()

# Last inn øvelser fra JSON-fil som en dictionary
with open('Øvelsesbibliotek.json') as f:
    exercises = json.load(f)  # Konverterer JSON til en dictionary

@app.get("/exercises/{muscle_group}")
async def get_exercises(muscle_group: str):
    if muscle_group in exercises:
        return exercises[muscle_group]
    else:
        raise HTTPException(status_code=404, detail="Muskelgruppe ikke funnet.")
