 const getLength = (value ) => {
	const result = value.length
	return typeof result === 'number' ? result :  (function () { throw new Error('Сущность не содержит метода length'); })()
}
console.log(getLength(123));


