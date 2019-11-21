import React,{createRef} from 'react';
import './button.css';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0,
            width:0
        }
    }
    btnRef = createRef();
    componentDidMount(){
        
    }
    handleClick(e){
        const event = e || window.event;
        // 鼠标在页面的位置
        const pageX = event.pageX;
        const pageY = event.pageY;
        // 按钮相对于页面的位置
        const domX = this.btnRef.current.offsetLeft;
        const domY = this.btnRef.current.offsetTop;
        // 波纹的直径
        const domWidth = this.btnRef.current.offsetWidth;
        const domHeight = this.btnRef.current.offsetHeight;
        const rippleWidth = domWidth>=domHeight?domWidth:domHeight;
        // 设置鼠标相对于盒子的位置,直径
        this.setState({
            x:pageX-domX,
            y:pageY-domY,
            width:rippleWidth
        },function(){
            console.log(this.state.x,this.state.y,this.state.width)
        })
    }
    render(){
        const {id,children,className,style} = this.props;
        const {x,y,width} = this.state;
        return(
            <button
                id={id}
                className={'default-button '+className}
                onClick={()=>{this.handleClick()}}
                style={style}
                ref={this.btnRef}
            >
                {children}
                <div 
                    className='ripple'
                    style={{'left':x,'top':y,'width':width,'height':width}}
                ></div>
            </button>
        )
    }
}

export default Button;