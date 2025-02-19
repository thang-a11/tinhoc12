function rep(id) {
    let re = document.getElementById(id);
    re.classList.toggle("hide");
}

const fetchData = async () => {
    let member = [];
    await fetch("person.json")
        .then((res) => res.json())
        .then((memberFetch) => {
            member = [...memberFetch];
        });
    console.log(member);

    let html = member.map((val, index) => {
        return `<tr>
                <td>${index + 1}</td>
                <td>${val.name}</td>
                <td><img width='100px' style = "border-radius:6px" src="${
                    val?.avatar
                }"/></td>
                <td>${val.age}</td>
                <td>${val?.role ?? "Không cấp bậc"}</td>
            </tr>`;
    });
    html = html.join(" ");
    let rootRender = document.querySelector(".render");
    rootRender.innerHTML = html;
};

fetchData();