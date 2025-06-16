import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filename = req.query.filename;
  const filePath = path.join("/tmp", filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}
