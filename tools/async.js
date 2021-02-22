module.exports = 
{
	forEach: async(arr,cb) =>
	{
		if (arr === undefined) return throw "Array is undefined";
		if (cb  === undefined) return throw "Callback is not defined";
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array)
		}
	}
}