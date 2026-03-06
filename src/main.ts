type Person = {
  readonly id: number,
  readonly name: string,
  birth_year: number,
  death_year?: number,
  biography: string,
  image: string
}

type ActressNationality =
  | "American"
  | "British"
  | "Australian"
  | "Israeli-American"
  | "South African"
  | "French"
  | "Indian"
  | "Israeli"
  | "Spanish"
  | "South Korean"
  | "Chinese"

type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: ActressNationality
}

// Funzione che recupera un'attrice tramite id e restituisce un oggetto Actress oppure null

async function getActress(id: number): Promise<Actress | null> {
  try {
    const response = await fetch(`http://localhost:3333/actresses/${id}`);
    const data: unknown = await response.json();

    // Verifica che i dati ricevuti dall'API abbiano la struttura di Actress
    if (!isActress(data)) {
      throw new Error("Formato dati non valido!");
    }
    return data;

  } catch (error) {
      if(error instanceof Error) {
        console.error("Errore durante il recupero di Actress: !", error) 
      }
      else {
        console.error("Errore sconosciuto: ", error)
      }
    return null;
  }
}

// Type guard che verifica che i dati abbiano la struttura del tipo Actress

function isActress(data: unknown): data is Actress {
  if (
    data &&
    typeof data === "object" &&
    "id" in data && typeof (data).id === "number" &&
    "name" in data && typeof (data).name === "string" &&
    "birth_year" in data && typeof (data).birth_year === "number" &&
    "biography" in data && typeof (data).biography === "string" &&
    "image" in data && typeof (data).image === "string" &&
    "most_famous_movies" in data && 
      data.most_famous_movies instanceof Array &&
      data.most_famous_movies.length === 3 &&
      data.most_famous_movies.every(movie => typeof movie === "string") &&
    "awards" in data && typeof (data).awards === "string" &&
    "nationality" in data && typeof (data).nationality === "string"
  ) {
    return true;
  }

  return false;
}