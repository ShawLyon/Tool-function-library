/**
 *文件大小换算
 起始单位B
 *
 * @param {number} size
 * @returns
 */
const fileSizeCount = (size: number) => {
  const kb = Math.floor((Number(size) / 1024) * 10) / 10;
  const mb = kb / 1024;
  const gb = mb / 1024;
  if (size < 1000) {
    return `${size} B`;
  } else if (kb > 1000) {
    return `${mb.toFixed(2)} MB`;
  } else if (mb > 1000) {
    return `${gb.toFixed(2)} G`;
  } else {
    return `${kb} KB`;
  }
};
