//'#logoxl'
//'https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/compressed/logo-compressed.png'
export function useObserver(imageID: string, source: string, options?:{threshold: number}){

    const callback = (entries : any,observer: any)=>{
        entries.forEach((entry:any) => {
            if(entry.isIntersecting){
                entry.target.style.background = 'linear-gradient(#204035, #b4945a)';
                entry.target.src = source
                console.log(entry.target)
                entry.target.onload = ()=>{
                    entry.target.style.background = '';
                    observer.unobserve(element);
                }
            }
        });
    }
    let element = document.querySelector('#'+imageID) as any;
    let observer = new IntersectionObserver(callback,options);
    observer.observe(element);

}
