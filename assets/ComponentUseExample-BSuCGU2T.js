const e=`import Card from "./Card";

export default function ComponentUseExample() {
  return (
    <div className="container">
      <Card title="This is a Component" borderColor="primary" headerBgColor="primary" headerTextColor="white">
        <p className="card-text">And this is the content of the component.</p>
      </Card>
    </div>
  );
}`;export{e as default};
