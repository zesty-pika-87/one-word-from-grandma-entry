// One Word From Grandma — the word my grandma would text about AI.
//
// She would not write a sentence, and she would not explain herself.
// She would give the robot a name, the way she names everything in her
// house, and text it to her grandchild like it was a new neighbour who
// had just moved in next door. Robbie is warm, a little baffled, and
// unmistakably about the machine — one word, no caption needed.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "ROBBIE";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
