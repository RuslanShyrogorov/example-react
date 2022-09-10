import PropTypes from 'prop-types';
import { EventItem } from 'components/EventItem/EventItem';
import css from './EventList.module.css';

export function EventList({ events }) {
  return (
    <div className={css.eventList}>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventItem
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
