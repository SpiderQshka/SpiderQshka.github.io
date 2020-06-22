const apiKey = "2qdphza5qv85dmopG4Pf8gEUdAC4o05EWYQHKOXt";
const url = `https://api.nasa.gov/planetary/apod`;

export interface IFetchApi {
  data?: {
    date: string;
    description: string;
    title: string;
    url: string;
  };
  error?: string;
}
export const fetchApi = async (date?: string): Promise<IFetchApi> => {
  const response = await fetch(
    `${url}?api_key=${apiKey}&date=${date ? date : "today"}`
  );
  if (response.ok) {
    const data = await response.json();
    if (data.url.includes(".jpg") || data.url.includes(".png"))
      return (await {
        data: {
          date: data.date,
          description: data.explanation,
          title: data.title,
          url: data.url,
        },
      }) as IFetchApi;
    return {
      error: `Похоже, на сервере нет нужного формата изображения. Попробуйте выбрать другую дату`,
    };
  } else
    return {
      error: `Произошла ошибка при выполнении запроса. Код ошибки: ${response.status}`,
    };
};
