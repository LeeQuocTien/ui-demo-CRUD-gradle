export default function Student({student, remove, setUpdatedStudent}) {

    const editStudent = (student) => {
        setUpdatedStudent(student)
    }

    return(
        <div className="student">
            <div className="student-inf-id">ID: {student.id}</div>
            <div className="student-inf">Name: {student.name}</div>
            <div className="student-inf">Email: {student.email}</div>
            <div className="student-inf">Age: {student.age}</div>
            <div className="btn-container">
                <button className="button" onClick={() => editStudent(student)}>Edit</button>
                <button className="button" onClick={() => remove(student.id)}>Delete</button>
            </div>
        </div>
    )
}