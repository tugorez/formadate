import mockdate from 'mockdate';
import formadate from '../index';

mockdate.set(new Date('2017-03-13T22:12:39.583Z'));

describe('formadate', () => {
  it('should render the time in am/pm if the date is today', () => {
    const date = new Date('2017-03-13T21:04:36.000Z');
    const formated = formadate(date);
    expect(formated).toMatchSnapshot();
  });

  it('should render the day if the date is in this week', () => {
    const date = new Date('2017-03-07T05:00:00.000Z');
    const formated = formadate(date);
    expect(formated).toMatchSnapshot();
  });

  it('should render the month and day if date is in this year', () => {
    const date = new Date('2017-01-01T05:00:00.000Z');
    const formated = formadate(date);
    expect(formated).toMatchSnapshot();
  });

  it('should render the month day and year otherwise', () => {
    const date = new Date('2016-12-31T05:00:00.000Z');
    const formated = formadate(date);
    expect(formated).toMatchSnapshot();
  });
});
