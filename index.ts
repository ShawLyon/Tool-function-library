/**
 *文件大小换算
 起始单位B
 *
 * @param {number} size
 * @returns
 */
export const fileSizeCount = (size: number) => {
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

/**
 *递归form表单字段
 *
 * @param {*} obj
 * @returns
 */
const recursionFormFields = (obj: any) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const fieldVal = obj[key];
      if (Object.prototype.toString.call(fieldVal) === "[object String]") {
        // string转成boolean,回显
        if (key === "symptom_1") {
          if (fieldVal === "0") {
            obj[key] = false;
          } else if (fieldVal === "1") {
            obj[key] = true;
          }
        }
      }
      if (Object.prototype.toString.call(fieldVal) === "[object Boolean]") {
        // 所有value为boolean类型转成'0','1'
        fieldVal ? (obj[key] = "1") : (obj[key] = "0");
      } else if (Object.prototype.toString.call(fieldVal) === "[object Null]") {
        // 过滤所有值为null的字段
        obj[key] = undefined;
      } else if (key === "de_dob") {
        // 所有日期为string时,转为Moment对象
        obj[key] = moment(fieldVal);
      } else if (
        Object.prototype.toString.call(fieldVal) === "[object Array]"
      ) {
        fieldVal.map((item: any) => {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            recursionFormFields(item);
          }
        });
      }
    }
  }
  return obj;
};
