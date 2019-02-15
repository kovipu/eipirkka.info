export default function ResultFooter({ label }) {
    switch (label) {
      case 'pirkka3':
        return (
          <header className="App-footer App-footer--failure">
            <div>Pirkka III-olut 4,5%</div>
            <button className='btn'>Lue lisää</button>
          </header>
        )
      case 'none':
        return (
          <header className="App-footer App-footer--success">
            <div>Ei Pirkka!</div>
          </header>
        );
      default:
          return <header></header>;
    }
  }