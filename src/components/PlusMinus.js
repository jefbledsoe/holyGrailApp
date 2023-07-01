

function PlusMinus(props) {
    function handle(e) {
      if (e.target.id.includes("minus")) {
        props.handle({ name: props.section, value: -1 });
        return;
      }
      props.handle({ name: props.section, value: 1 });
    }
    return (
      <>
        <img
          src={require(`../icons/${props.section}_plus.png`)}
          alt=""
          id="plus"
          onClick={(e) => handle(e)}
        />
        <img
          src={require(`../icons/${props.section}_minus.png`)}
          alt=""
          id="minus"
          onClick={(e) => handle(e)}
        />
      </>
    );
  }

export default PlusMinus;