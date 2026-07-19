import type { CalendarEvent, ContestInfo } from "./types";

export function createCalendarEvent(
  contest: ContestInfo,
): CalendarEvent {
  return {
    title: contest.name,
    start: contest.startTime,
    end: contest.endTime,
    description: contest.url,
    location: "AtCoder",
  };
}

function formatDate(date: Date): string {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

export function createGoogleCalendarUrl(
  event: CalendarEvent,
): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${formatDate(event.start)}/${formatDate(event.end)}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params}`;
}