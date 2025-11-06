import  style  from "./Student.module.css";
import PropTypes from "prop-types";
function Student(props) {
  return (
    <>
      <div>
        <p className={Style["Stud-css"]}>Name: {props.name}</p>
        <p className={Style["Stud-css"]}>Age: {props.age}</p>
        <p className={Style["Stud-css"]}>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default Student;
