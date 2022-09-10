import { PageTitle } from './PageTitle/PageTitle';
import { EventList } from './EventList/EventList';
import upcomingEvents from 'upcoming-events.json';

export function App() {
  return (
    <>
      <PageTitle textTitle="24th Core Worlds Coalition Conference" />
      <EventList events={upcomingEvents} />
    </>
  );
}

// export default App;
