module.exports = {
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1240px",
		fields: "20px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		xl: {
			width: "1200px"
		},
		md: {
			width: "910px"
		},
		sm: {
			width: "768px",
			// fields: "24px"
		},
		xs: {
			width: "576px",
		},
		// xxs: {
		// 	width: "320px",
		// 	fields: "15px"
		// }
	}
}