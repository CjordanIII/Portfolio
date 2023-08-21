import { useEffect, useState } from "react";

export default function QuotesAPI() {
  const [quote, setQuote] = useState("loading...");
  const [aurther,setqurther] = useState('')
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
        console.log()
        if (data) {

          setQuote(data[0].quote);
          setqurther(data[0].author);
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



  return (
    <>
      <p>"{quote}"</p>
      <p>-{aurther}</p>
    </>
  );
}
