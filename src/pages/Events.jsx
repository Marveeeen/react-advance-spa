import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData);
      }

      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && (
        <EventsList events={fetchedEvents.events} />
      )}
    </>
  );
}

export default EventsPage;
