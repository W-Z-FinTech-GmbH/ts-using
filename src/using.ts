export function using (values: any, func: any) {
  if (values instanceof Function) {
    values = values();
  }

  if (values instanceof Array) {
    values.forEach(function(value) {
      if (!(value instanceof Array)) {
        value = [value];
      }

      func.apply(using, value);
    });
  } else {
    var objectKeys = Object.keys(values);

    objectKeys.forEach(function(key) {
      if (!(values[key] instanceof Array)) {
        values[key] = [values[key]];
      }

      values[key].push(key);

      func.apply(using, values[key]);
    });
  }
}