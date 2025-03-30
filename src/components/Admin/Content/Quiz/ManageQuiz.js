import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";

const ManageQuiz = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState(null);

  const handleChangeFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    if (!name || !desc) {
      toast.error("Name/Description is required");
      return;
    }

    let res = await postCreateNewQuiz(desc, name, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDesc("");
      setImage(null);
    } else {
      toast.error(res.EM);
    }
  };

  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];
  return (
    <div className="quiz-container">
      <div className="title">Manage Quiz</div>
      <hr />

      <div className="add-new">
        <fieldset className="border rounded-3 p-3">
          <legend className="float-none w-auto px-3">Add New Quiz</legend>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your quiz name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label>Descrition</label>
          </div>
          <div className="mb-3">
            <Select
              value={type}
              defaultValue={type}
              onChange={setType}
              options={options}
              placeholder={"Quiz type..."}
            />
            <div className="more-options mt-3 form-group">
              <label className="mb-1">Upload Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleChangeFile()}
              />
            </div>
          </div>
          <div className="mt-3">
            <button
              className="btn btn-warning"
              onClick={() => handleSubmitQuiz()}
            >
              Save
            </button>
          </div>
        </fieldset>
      </div>
      <div className="list-detail"></div>
    </div>
  );
};

export default ManageQuiz;
