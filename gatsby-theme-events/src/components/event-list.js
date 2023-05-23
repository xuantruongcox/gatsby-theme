import React from "react";
import { Link } from "gatsby";
import { Themed } from "@theme-ui/mdx";

const EventList = ({ events }) => (
  <>
    <Themed.h1>Upcoming Events</Themed.h1>
    <Themed.ul>
      {events.map((event) => (
        <Themed.li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.startDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          in {event.location}
        </Themed.li>
      ))}
    </Themed.ul>
  </>
);

export default EventList;
