import mockdate from 'mockdate';
import formadate from '../index';

mockdate.set('Mon Mar 13 2017 16:04:36 GMT-0500 (EST)');

describe('formadate', () => {
  it('should render the time in am/pm if the date is today', () => {
    const date = new Date('Mon Mar 13 2017 16:04:36 GMT-0500 (EST)');
    const expected = '4:04 PM';
    const formated = formadate(date);
    expect(formated).toEqual(expected);
  });

  it('should render the day if the date is in this week', () => {
    const date = new Date('Tue Mar 07 2017 00:00:00 GMT-0500 (EST)');
    const expected = 'Tuesday';
    const formated = formadate(date);
    expect(formated).toEqual(expected);
  });

  it('should render the month and day if date is in this year', () => {
    const date = new Date('Sun Jan 01 2017 00:00:00 GMT-0500 (EST)');
    const expected = 'Jan 1';
    const formated = formadate(date);
    expect(formated).toEqual(expected);
  });

  it('should render the month day and year otherwise', () => {
    const date = new Date('Sat Dec 31 2016 00:00:00 GMT-0500 (EST)');
    const expected = 'Dec 31 2016';
    const formated = formadate(date);
    expect(formated).toEqual(expected);
  });
});
