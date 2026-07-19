import type { ContestInfo } from "./types";

export interface CalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
}

export function createCalendarEvent(
  contest: ContestInfo,
): CalendarEvent {
  return {
    summary: contest.name,

    description: contest.url,

    start: {
      dateTime: contest.startTime.toISOString(),
    },

    end: {
      dateTime: contest.endTime.toISOString(),
    },
  };
}