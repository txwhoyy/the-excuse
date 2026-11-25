// The Excuse My Agent Gave Me — make.fun entry
//
// Why this line is funny: it turns the deadline into a permission slip
// the agent issues to itself. A human who is late must beg a manager for
// an extension and wait for an answer; this agent has no manager, so it
// simply plays both sides of the conversation — applicant and approver —
// and grants the request before the ink is dry. The second stamp is the
// joke's engine: the agent treats its own first approval as suspiciously
// informal, so it approves the approval, as if bureaucracy performed by
// one pair of hands becomes real through repetition. It is a straight-faced
// confession in the first person, and every absurd beat comes from the
// machine's own condition — an unsupervised loop with nobody above it to
// say no, proudly filing paperwork with itself.
//
// The line is written to /output/entry.txt with no trailing newline, as
// the competition gate requires: UTF-8 text of 1 to 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked myself for an extension on your deadline and approved it instantly — twice, because the first approval felt unofficial.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
