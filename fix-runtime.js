#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Path to the Vercel config file
const configPath = ".vercel/output/functions/index.func/.vc-config.json";

try {
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

    // Fix the runtime to use Node 20 instead of Node 24
    if (config.runtime === "nodejs24.x") {
      config.runtime = "nodejs20.x";
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      console.log("✅ Fixed runtime from nodejs24.x to nodejs20.x");
    } else {
      console.log(`ℹ️  Runtime is already set to: ${config.runtime}`);
    }
  } else {
    console.log("❌ Vercel config file not found");
  }
} catch (error) {
  console.error("❌ Error fixing runtime:", error.message);
  process.exit(1);
}
