function Header(props) {
  return (
    <>
      <div className="card border-0 shadow my-0 p-2">
        <div className="card-body bg-primary text-center p-2">
          <h1 className="font-weight-light text-white">{props.appTitle}</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
  