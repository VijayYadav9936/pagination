fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.results.forEach((user) => {
            $("#table").append(`
        <tr>
        <td> ${user.name.first}</td>
        <td> ${user.name.last}</td>
        <td> ${user.location.country}</td>
        </tr>
        `)
        });
        $('.tablemanager')({
			pagination: true,
			showrows: [5],
			disableFilterBy: [1]
		});
    })