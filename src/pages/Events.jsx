import { defer, json, useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  function loadedEventsHandler({ events }) {
    return <EventsList events={events} />;
  }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>{loadedEventsHandler}</Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    // Loader supports response data
    // const resData = await response.json();
    // return resData.events;
    const resData = await response.json();
    return resData;
  }
}
export function loader() {
  return defer({
    events: loadEvents(),
  });
}
