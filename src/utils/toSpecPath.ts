export default function toSpecPath(filePath: string, pattern: string): string {
  if (filePath.indexOf(`_${pattern}.rb`) > -1) {
    return filePath;
  }

  let path = filePath.split("/");
  let railsRoot = path.indexOf("app");
  path[railsRoot] = pattern;

  let filename = path[path.length - 1];
  let specFile = filename.replace(".rb", `_${pattern}.rb`);
  return [...path.slice(0, path.length - 1), specFile].join("/");
}
