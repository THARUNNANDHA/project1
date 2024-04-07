// ReactDOM.render(<ul>
//     <li>tharun</li>
//     <li>varun</li>
// </ul>,document.getElementById('root'))



function Display1(){
    return(<h1>this is tharun</h1>
    )
}

ReactDOM.render(
    <div>
        <Display1 />
    </div>,
    document.getElementById('root')
)

const h1=document.createElement('h1')
h1.textContent ="you fucker tharun"
h1.className="haeder"

document.getElementById("root").append(h1)

const ex =<h1 className="header">tharun is an fucker</h1>
console.log(ex)
ReactDOM.render(ex,document.getElementById('root'))


const entire_div=(<div>
    <h1>welcome</h1>
    <ul>
     <li>tharun</li>
     <li>varun</li>
    </ul>
</div>)
console.log(entire_div)
ReactDOM.render(entire_div,document.getElementById('root'))