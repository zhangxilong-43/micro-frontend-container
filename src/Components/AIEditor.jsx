import { useEffect, useRef } from 'react'
import { AiEditor } from "aieditor";
import "aieditor/dist/style.css"

function AIEditor() {
    //定义 ref
    const divRef = useRef(null);
    //初始化 AiEditor
    useEffect(() => {
        if (divRef.current) {
            const aiEditor = new AiEditor({
                element: divRef.current,
                placeholder: "点击输入内容...",
                content: 'AiEditor 是一个面向 AI 的开源富文本编辑器。 ',
            })
            return ()=>{
                aiEditor.destroy();
            }
        }
    }, [])

    return (
        <>
            <div ref={divRef} style={{height: "600px"}} />
        </>
    )
}

export default AIEditor