import { useEffect, useState } from "react";

export default function QuotesAPI() {
  const [quote, setQuote] = useState("loading...");
  const apiKey = "tM06yAPvOhKRwN5vmKmC4Q==KUwURLAqAADV8j4c";
  const url = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch(url, {
          headers: {
            "X-Api-Key": apiKey,
          },
        });
        const data = await response.json();

        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomQuote = data[randomIndex].quote;
          setQuote(randomQuote);
        } else {
          setQuote("No quotes available");
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Error fetching quote");
      }
    }

    fetchQuote();
  }, []);

  console.log(quote);

  return (
    <>
      <p>{quote}</p>
    </>
  );
}
