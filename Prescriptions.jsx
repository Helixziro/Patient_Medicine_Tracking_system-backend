const prescriptions = [
  { id: 1, patient: "John", medicine: "Paracetamol", dosage: "2x/day" },
  { id: 2, patient: "Jane", medicine: "Ibuprofen", dosage: "1x/day" }
];

const Prescriptions = () => {
  return (
    <div className="form-container">
      <h2>Prescriptions</h2>
      {prescriptions.map(p => (
        <div key={p.id}>
          <h4>{p.patient}</h4>
          <p>Medicine: {p.medicine}</p>
          <p>Dosage: {p.dosage}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Prescriptions;
