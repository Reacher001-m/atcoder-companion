import {
  getContestInfo,
  getRegisterButton,
  isRegistered,
} from "../lib/atcoder";
import { toDTO } from "../lib/contest";
import { getRuntime } from "../lib/extension";

export default defineContentScript({
  matches: ["https://atcoder.jp/contests/*"],

  async main() {
    console.log("✅ Content 起動");

    const contest = getContestInfo();

    console.table(contest);

    const runtime = getRuntime();
    if (!runtime) {
      throw new Error("extension runtime is unavailable");
    }

    await runtime.sendMessage({
      type: "contestFound",
      contest: toDTO(contest),
    });
  },
});
