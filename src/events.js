const baseData = [
  {
    TaskID: 4,
    OwnerID: 2,
    Title: "Bowling tournament",
    Description: "",
    StartTimezone: null,
    Start: "2013-02-25T08:00:00.000Z",
    End: "2013-02-25T10:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
    personID: 2,
  },
  {
    TaskID: 5,
    OwnerID: 2,
    Title: "Take the dog to the vet",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-10T07:00:00.000Z",
    End: "2013-06-10T08:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 6,
    OwnerID: 2,
    Title: "Call Charlie about the project",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-11T11:30:00.000Z",
    End: "2013-06-11T13:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 7,
    OwnerID: 3,
    Title: "Meeting with Alex",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-12T11:00:00.000Z",
    End: "2013-06-12T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 9,
    OwnerID: 2,
    Title: "Alex's Birthday",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-14T02:00:00.000Z",
    End: "2013-06-14T02:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    Title: "Car Service",
    personID: 2,
    Start: "2022-02-25T16:30",
    End: "2022-02-25T17:00",
  },
  {
    TaskID: 14,
    OwnerID: 3,
    RoomID: 2,
    PersonID: 3,
    Title: "Replace the printer on the 1st floor",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T10:00:00.000Z",
    End: "2013-06-24T11:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 15,
    OwnerID: 1,
    Title: "Attending HR Conference",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T00:00:00.000Z",
    End: "2013-06-26T00:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 16,
    OwnerID: 1,
    Title: "Business Lunch with Gregory Watkins",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T12:00:00.000Z",
    End: "2013-06-25T13:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 17,
    OwnerID: 1,
    Title: "Breakfast with CFO and COO",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T08:30:00.000Z",
    End: "2013-06-27T09:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 18,
    OwnerID: 1,
    Title: "Job Interview - Mathew Stevens",
    Description: "Junior Researcher",
    StartTimezone: null,
    Start: "2013-06-27T10:00:00.000Z",
    End: "2013-06-27T11:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 19,
    OwnerID: 1,
    Title: "Review CVs with Tim",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T11:00:00.000Z",
    End: "2013-06-27T11:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 20,
    OwnerID: 1,
    Title: "Lunch with Monica",
    Description: "Discuss the Employee handbook",
    StartTimezone: null,
    Start: "2013-06-27T12:00:00.000Z",
    End: "2013-06-27T13:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 21,
    OwnerID: 1,
    Title: "Job Interview - John Stewart",
    Description: "Accountant",
    StartTimezone: null,
    Start: "2013-06-27T14:00:00.000Z",
    End: "2013-06-27T15:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 22,
    OwnerID: 1,
    Title: "Job Interview - Mary Smith",
    Description: "Accountant",
    StartTimezone: null,
    Start: "2013-06-27T15:30:00.000Z",
    End: "2013-06-27T16:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 24,
    OwnerID: 3,
    Title: "Register new Access Cards",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T12:00:00.000Z",
    End: "2013-06-24T12:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 25,
    OwnerID: 1,
    Title: "HR Lecture",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-04T19:00:00.000Z",
    End: "2013-06-04T21:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "FREQ=WEEKLY;BYDAY=TU,TH",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 26,
    OwnerID: 1,
    Title: "Dentist",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-28T08:00:00.000Z",
    End: "2013-06-28T09:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 27,
    OwnerID: 1,
    Title: "Job Interview - Laura Bailey",
    Description: "Helpdesk",
    StartTimezone: null,
    Start: "2013-06-28T09:30:00.000Z",
    End: "2013-06-28T10:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 28,
    OwnerID: 1,
    Title: "Job Interview - Jenny Baxter",
    Description: "Helpdesk",
    StartTimezone: null,
    Start: "2013-06-28T11:00:00.000Z",
    End: "2013-06-28T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 31,
    OwnerID: 1,
    Title: "Team building prep tasks",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-28T14:00:00.000Z",
    End: "2013-06-28T17:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 32,
    OwnerID: 2,
    RoomID: 2,
    Title: "Job Interview - Bernard Atkins",
    Description: "Helpdesk",
    StartTimezone: null,
    Start: "2013-06-24T13:30:00.000Z",
    End: "2013-06-24T14:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 34,
    OwnerID: 1,
    Title: "Review Job Applications",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T15:00:00.000Z",
    End: "2013-06-24T17:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 35,
    OwnerID: 1,
    Title: "Grand Canyon tour",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-23T00:00:00.000Z",
    End: "2013-06-23T00:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 40,
    OwnerID: 3,
    Title: "Install new laptops in conference rooms",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T13:30:00.000Z",
    End: "2013-06-24T15:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 66,
    OwnerID: 3,
    Title: "Bob's Birthday",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-29T08:00:00.000Z",
    End: "2013-06-29T06:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 68,
    OwnerID: 1,
    RoomID: 2,
    Title: "Breakfast with Tom",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T09:45:00.000Z",
    End: "2013-06-24T11:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 69,
    OwnerID: 2,
    Title: "Team planning meeting",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T10:00:00.000Z",
    End: "2013-06-24T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 70,
    OwnerID: 2,
    Title: "Support Phone Call",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-24T16:00:00.000Z",
    End: "2013-06-24T16:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 71,
    OwnerID: 2,
    Title: "Business breakfast with Caroline",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T09:00:00.000Z",
    End: "2013-06-25T10:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 72,
    OwnerID: 2,
    Title: "Discuss preojects' deadlines",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T11:00:00.000Z",
    End: "2013-06-25T11:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 73,
    OwnerID: 2,
    Title: "Support Meeting",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T15:00:00.000Z",
    End: "2013-06-25T16:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 74,
    OwnerID: 2,
    Title: "Dine with Mathew",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T18:30:00.000Z",
    End: "2013-06-25T20:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 79,
    OwnerID: 2,
    Title: "Banking",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-26T09:00:00.000Z",
    End: "2013-06-26T10:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 80,
    OwnerID: 3,
    Title: "Software updates",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T10:00:00.000Z",
    End: "2013-06-25T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 81,
    OwnerID: 3,
    Title: "UPS maintenance",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-25T16:30:00.000Z",
    End: "2013-06-25T18:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 82,
    OwnerID: 2,
    Title: "Support Call",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-26T11:30:00.000Z",
    End: "2013-06-26T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 83,
    OwnerID: 3,
    Title: "Phone Sync with NY office ",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-26T13:30:00.000Z",
    End: "2013-06-26T14:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 84,
    OwnerID: 3,
    Title: "Phone Sync with Boston Office",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-26T15:00:00.000Z",
    End: "2013-06-26T16:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 85,
    OwnerID: 3,
    Title: "Server maintenance",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-26T18:30:00.000Z",
    End: "2013-06-26T21:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: true,
  },
  {
    TaskID: 86,
    OwnerID: 2,
    Title: "Status meeting",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-28T13:30:00.000Z",
    End: "2013-06-28T15:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 87,
    OwnerID: 3,
    Title: "Helpdesk status meeting",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T10:30:00.000Z",
    End: "2013-06-27T11:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 88,
    OwnerID: 2,
    Title: "Business Lunch",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T12:00:00.000Z",
    End: "2013-06-27T13:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 89,
    OwnerID: 3,
    Title: "Employee database update",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T14:00:00.000Z",
    End: "2013-06-27T15:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 90,
    OwnerID: 3,
    Title: "Website upload",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T07:30:00.000Z",
    End: "2013-06-27T08:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 91,
    OwnerID: 2,
    Title: "Meeting with marketing guys",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-27T17:00:00.000Z",
    End: "2013-06-27T18:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 92,
    OwnerID: 3,
    Title: "Meeting with Internet provider",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-28T10:30:00.000Z",
    End: "2013-06-28T11:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 93,
    OwnerID: 3,
    Title: "Bob's Birthday Party",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-29T20:00:00.000Z",
    End: "2013-06-29T23:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 95,
    OwnerID: 2,
    Title: "Dance Practice",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-03T18:30:00.000Z",
    End: "2013-06-03T20:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "FREQ=WEEKLY;BYDAY=MO,WE",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 114,
    OwnerID: 3,
    Title: "Software updates",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-04T09:00:00.000Z",
    End: "2013-06-04T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 115,
    OwnerID: 1,
    Title: "Breakfast at Starbucks",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-04T08:00:00.000Z",
    End: "2013-06-04T09:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 116,
    OwnerID: 2,
    Title: "Performance review",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-04T14:00:00.000Z",
    End: "2013-06-04T17:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 118,
    OwnerID: 1,
    Title: "HR seminar preparation",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-05T10:00:00.000Z",
    End: "2013-06-05T12:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 119,
    OwnerID: 3,
    Title: "Helpdesk weekly meeting",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-05T15:00:00.000Z",
    End: "2013-06-05T16:00:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "FREQ=WEEKLY;BYDAY=WE",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 120,
    OwnerID: 3,
    Title: "Website upload",
    Description: "",
    StartTimezone: null,
    Start: "2013-06-07T07:00:00.000Z",
    End: "2013-06-07T08:30:00.000Z",
    EndTimezone: null,
    RecurrenceRule: "",
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
];
export const customModelFields = {
  id: "TaskID",
  title: "Title",
  description: "Description",
  start: "Start",
  end: "End",
  recurrenceRule: "RecurrenceRule",
  recurrenceId: "RecurrenceID",
  recurrenceExceptions: "RecurrenceException",
};
const currentYear = new Date().getFullYear();

const parseAdjust = (eventDate) => {
  const date = new Date(eventDate);
  date.setFullYear(currentYear);
  // console.log(date)
  return date;
};

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// export const displayDate = new Date(Date.UTC(currentYear, 1, 24));
export const displayDate = new Date();
export const sampleData = baseData.map((dataItem) => ({
  id: dataItem.TaskID,
  start: parseAdjust(dataItem.Start),
  startTimezone: dataItem.startTimezone,
  end: parseAdjust(dataItem.End),
  endTimezone: dataItem.endTimezone,
  isAllDay: dataItem.isAllDay,
  title: dataItem.Title,
  description: dataItem.Description,
  recurrenceRule: dataItem.RecurrenceRule,
  recurrenceId: dataItem.RecurrenceID,
  recurrenceExceptions: dataItem.RecurrenceException,
  roomId: dataItem.RoomID,
  ownerID: dataItem.OwnerID,
  personId: dataItem.OwnerID,
}));
export const sampleDataWithResources = baseData.map((dataItem) => ({
  id: dataItem.TaskID,
  start: parseAdjust(dataItem.Start),
  startTimezone: dataItem.startTimezone,
  end: parseAdjust(dataItem.End),
  endTimezone: dataItem.endTimezone,
  isAllDay: dataItem.isAllDay,
  title: dataItem.Title,
  description: dataItem.Description,
  recurrenceRule: dataItem.RecurrenceRule,
  recurrenceId: dataItem.RecurrenceID,
  recurrenceExceptions: dataItem.RecurrenceException,
  roomId: dataItem.RoomID,
  personId: dataItem.personID,
}));
export const sampleDataWithCustomSchema = baseData.map((dataItem) => ({
  ...dataItem,
  Start: parseAdjust(dataItem.Start),
  End: parseAdjust(dataItem.End),
  PersonIDs: randomInt(1, 2),
  RoomID: randomInt(1, 2),
}));
