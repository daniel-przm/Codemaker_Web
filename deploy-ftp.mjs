import * as ftp from "basic-ftp";
import path from "path";
import fs from "fs";

const CONFIG = {
  host: "89.116.147.140",
  user: "u222141246",
  password: "5esediK6",
  port: 21,
  remotePath: "/public_html",
  localDir: "./dist",
};

async function uploadDir(client, localDir, remoteDir) {
  const entries = fs.readdirSync(localDir, { withFileTypes: true });

  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    const remotePath = remoteDir + "/" + entry.name;

    if (entry.isDirectory()) {
      // Create remote directory if it doesn't exist
      await client.ensureDir(remotePath);
      await uploadDir(client, localPath, remotePath);
      // Go back up after recursing
      await client.cd(remoteDir);
    } else {
      process.stdout.write(`  Uploading: ${remotePath}\n`);
      await client.uploadFrom(localPath, remotePath);
    }
  }
}

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    console.log("Connecting to FTP server...");
    await client.access({
      host: CONFIG.host,
      user: CONFIG.user,
      password: CONFIG.password,
      port: CONFIG.port,
      secure: false,
    });

    console.log("Connected! Starting upload...\n");

    // Check that remote 3D folder exists (just to confirm we won't touch it)
    let remoteList = [];
    try {
      remoteList = await client.list(CONFIG.remotePath);
      const has3D = remoteList.some((e) => e.name === "3D");
      console.log(`Remote 3D folder present: ${has3D ? "YES (will be preserved)" : "not found"}`);
    } catch (e) {
      // ignore
    }

    // Upload all files from dist/ to /public_html
    // We do NOT delete anything on remote — only upload/overwrite
    await uploadDir(client, CONFIG.localDir, CONFIG.remotePath);

    console.log("\nDeploy complete!");
  } catch (err) {
    console.error("FTP error:", err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
