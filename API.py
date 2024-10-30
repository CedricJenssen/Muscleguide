from fastapi import FastAPI

app = FastAPI()

@app.get("/exercises/{muscle_group}")
def get_exercises(muscle_group: str):
    # Hent øvelser fra ditt JSON- eller databasebibliotek
    # Returner øvelser for den valgte muskelgruppen