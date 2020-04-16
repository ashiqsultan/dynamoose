import entries from "./entries";

export = (a, b) => {
	const aEntries = entries(a);
	const bEntries = entries(b);
	const bEntriesMap = bEntries.reduce((res, value) => {
		const [key, val] = value;
		res[key] = val;
		return res;
	}, {});

	return aEntries.length === bEntries.length && aEntries.every((entry) => {
		return typeof entry[1] === "object" || bEntriesMap[entry[0]] === entry[1];
	});
};
