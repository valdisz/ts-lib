export function changedProps(newObj, oldObj) {
    const changed = [];
    for (let prop of Object.getOwnPropertyNames(newObj)) {
        if (newObj[prop] !== oldObj[prop]) changed.push(prop);
    }

    return changed;
}