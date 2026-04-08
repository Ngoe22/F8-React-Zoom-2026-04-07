import React from "react";
import "./App.css";

const columns = [
    {
        value: "id",
        text: "ID",
    },
    {
        value: "name",
        text: "Teen",
    },
    {
        value: "age",
        text: "Tuoi",
    },
    {
        value: "class",
        text: "Lop",
    },
    {
        value: "address",
        text: "Dia Chi",
    },
    {
        value: "action",
        text: "Delete",
        style: {
            width: `100px`,
            background: `none`,
            border: "none",
            cursor: `pointer`,
            fontWeight: `600`,
        },
    },
];

const studentData = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 15,
        class: "10A1",
        address: "Ha Noi",
    },
    {
        id: 2,
        name: "Tran Thi B",
        age: 16,
        class: "10A2",
        address: "Hai Phong",
    },
    { id: 3, name: "Le Van C", age: 15, class: "10A1", address: "Da Nang" },
    {
        id: 4,
        name: "Pham Thi D",
        age: 17,
        class: "11A1",
        address: "Ha Noi",
    },
    {
        id: 5,
        name: "Hoang Van E",
        age: 16,
        class: "10A3",
        address: "Nam Dinh",
    },
    {
        id: 6,
        name: "Do Thi F",
        age: 15,
        class: "10A2",
        address: "Thai Binh",
    },
    {
        id: 7,
        name: "Bui Van G",
        age: 17,
        class: "11A2",
        address: "Hai Duong",
    },
    { id: 8, name: "Vu Thi H", age: 16, class: "10A3", address: "Ha Noi" },
    {
        id: 9,
        name: "Dang Van I",
        age: 15,
        class: "10A1",
        address: "Bac Ninh",
    },
    {
        id: 10,
        name: "Ngo Thi K",
        age: 17,
        class: "11A1",
        address: "Ha Nam",
    },
];

function App() {
    const [students, setStudents] = React.useState(studentData);

    function deleteStudent(id) {
        console.log(`meow`, id);

        setStudents((students) =>
            students.filter((student) => student.id !== id),
        );
    }

    return (
        <>
            <table width="100%" cellPadding={5} cellSpacing={0} border={1}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.value}>{column.text}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            {columns.map((column, index) => {
                                const isAction = column.value === "action";

                                return (
                                    <td
                                        key={index}
                                        style={{ textAlign: `center` }}
                                    >
                                        {isAction ? (
                                            <button
                                                style={column.style}
                                                onClick={() =>
                                                    deleteStudent(student.id)
                                                }
                                            >
                                                {column.text}
                                            </button>
                                        ) : (
                                            student[column.value]
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
