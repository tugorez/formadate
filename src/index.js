import moment from 'moment';

require('moment/locale/es');

const isToday = date => moment(date).isSame(Date.now(), 'day');
const isThisWeek = date => moment().diff(date, 'days') <= 6;
const isThisYear = date => moment(date).isSame(Date.now(), 'year');

const formadate = (date, { locale = 'es', fromnow, calendar } = {}) => {
  moment.locale(locale);
  if (fromnow) {
    return moment(date).fromNow();
  }
  if (calendar) {
    return moment(date).calendar();
  }
  if (isToday(date)) {
    const time = moment(date).format('h:mm a');
    return time;
  }
  if (isThisWeek(date)) {
    const day = moment(date).format('dddd');
    const time = moment(date).format('h:mm a');
    return `${day}, ${time}`;
  }
  if (isThisYear(date)) {
    const day = moment(date).format('MMM D');
    const time = moment(date).format('h:mm a');
    return `${day}, ${time}`;
  }
  const day = moment(date).format('MMM D Y');
  const time = moment(date).format('h:mm a');
  return `${day}, ${time}`;
};

module.exports = formadate;
