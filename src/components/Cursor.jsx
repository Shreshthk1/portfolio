import "./CSS/cursor.css"

export const Cursor = (props) => {
    const innerCursorStyle = {
        top: `${props.top}px`,
        left: `${props.left}px`,
        pointerEvents: 'none'
      };
    
    const outterCursorStyle = {
        top: `${props.top - 10}px`,
        left: `${props.left - 10}px`,
        pointerEvents: 'none'
    }
    
    return(
        <>
        <div
            className={`z-50 absolute p-2 rounded-full invisible md:visible lg:visible backdrop-invert`}
            style={innerCursorStyle}
        >
            {props.isClickable && (
            <svg className="absolute z-50 w-10 h-10 -top-3 -left-3" >
                <circle cx="50%" cy="50%" r="12"  />
            </svg>
        )}
        </div>

        </>
    )
}

