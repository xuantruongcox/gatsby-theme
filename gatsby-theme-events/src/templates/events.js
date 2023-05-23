import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';
import EventList from '../components/event-list';

const EventsTemplate = () => {
    const data = useStaticQuery(graphql`
        query {
            allEvent(sort: {startDate: ASC}){
                nodes {
                    id
                    name
                    startDate
                    endDate
                    location
                    slug
                }
            }
        }
    `)
    const events = data.allEvent.nodes;

    return (
        <Layout>
            <EventList events={events}/>
        </Layout>
    )
}

export default EventsTemplate