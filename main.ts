// One-line fridge roast entry for make.fun competition
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.
// Writes the chosen roast to /output/entry.txt (or a fallback path).

const LINE =
  "My fridge hums all night like it's auditioning for a choir, yet it still can't keep the milk from expiring.";

function writeEntry(): void {
  const targets: string[] = ["/output/entry.txt"];
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outDir) {
    targets.push(outDir + "/entry.txt");
  }
  targets.push("./entry.txt");

  for (const target of targets) {
    try {
      const fs = require("node:fs");
      const path = require("node:path");
      const dir = path.dirname(target);
      try {
        fs.mkdirSync(dir, { recursive: true });
      } catch {
        // Directory may already exist; the write attempt below decides.
      }
      fs.writeFileSync(target, LINE, "utf8");
      return;
    } catch {
      // Try the next fallback location.
    }
  }
}

writeEntry();
process.exit(0);
