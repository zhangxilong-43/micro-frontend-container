 export default () => (
    <p>
        此项目运行的微前端方案基于 MicroApp + Webpack 5 模块联邦实现；<br />
        在此方案中，容器所扮演的角色是一个基座。<br />
        我所谓的“基座”意味着它能够提供一系列的基建能力和通用物料，并一定程度地结合业务相关的内容；<br />
        但是，如果你想在容器中集成一个完整独立的模块；<br />
        那么建议不要这样做，请将这个完整独立的模块拆分成微应用或者与其他接近的微应用相结合。<br />
        <br />
        Tips: <br />
        为什么说容器是一个基座呢？<br />
        因为容器的 window 对象是运行时中最基础的 window 对象；<br />
        想象一下 qiankun / MicroApp 运行在容器上，他所获得的 window 对象必然是最标准的；<br />
        如果我们在容器上进行业务开发，将 window 对象修改（直接/间接），<br />
        那么这个修改会传递到每一个微应用上，<br />
        这样可能会存在不可控的问题。<br />
    </p>
 )