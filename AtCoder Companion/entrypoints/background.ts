import { createCalendarEvent } from "../lib/calendar";
import { fromDTO } from "../lib/contest";
import { getRuntime } from "../lib/extension";
import { getCurrentContest, saveCurrentContest } from "../lib/repository";
import { createGoogleCalendarUrl } from "../lib/calendar";

export default defineBackground(() => {
  console.log("Background started");

  const runtime = getRuntime();
  if (!runtime?.onMessage) {
    throw new Error("extension runtime is unavailable");
  }

  runtime.onMessage.addListener(async (message: unknown) => {
    console.log("Message received");

    const current = await getCurrentContest();

    console.table(current);
    console.log(message);

    const messageObject = message as { type?: string; contest?: unknown };

    if (messageObject.type === "contestFound" && messageObject.contest) {
      const contest = fromDTO(messageObject.contest as never);

      await saveCurrentContest(contest);

      const event = createCalendarEvent(contest);

      const url = createGoogleCalendarUrl(event);

      await chrome.tabs.create({
        url,
      });
    }
  });
});
