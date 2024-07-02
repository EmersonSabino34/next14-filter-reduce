import Menu from "./Menu"

interface LayoutProps{
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className="flex">
            <Menu />
            <section className="flex-1 p-5 bg-zinc-50 text-black">
                {props.children}
            </section>
        </div>
    )
}

