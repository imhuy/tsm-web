import Link from 'next/link';
import Image from 'next/legacy/image';
export const footerLogo = "/img/logo-white.svg";
export default function FooterDefault() {
    return (
        <footer className="footer bg-dark text-white position-relative overflow-hidden" data-bs-theme="dark">
            <div className="container pt-9 pt-lg-11 pb-4 position-relative z-index-1">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="mb-4">
                            <Link className='text-reset d-table width-120' href="/">
                               
                                <Image src={footerLogo} width="704" height="178" layout='responsive' alt=""/>
                               
                            </Link> 
                        </div>
                        <p className='text-muted'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in.
                        </p>
                    </div>
                    <div className="col-md-3 mx-auto col-lg-2 mb-5">
                        <ul className="nav flex-column">
                            <li><a href="#" className="nav-link p-0 mb-3">About</a></li>
                            <li><a href="#" className="nav-link p-0 mb-3">Career</a></li>
                            <li><a href="#" className="nav-link p-0 mb-3">Terms</a></li>
                            <li><a href="#" className="nav-link p-0">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mx-auto col-lg-2 mb-5">
                        <ul className="nav flex-column">
                            <li><a href="#" className="nav-link p-0 mb-3">Blog</a></li>
                            <li><a href="#" className="nav-link p-0 mb-3">Press Kit</a></li>
                            <li><a href="#" className="nav-link p-0 mb-3">Support</a></li>
                            <li><a href="#" className="nav-link p-0">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="d-flex flex-wrap social-links mb-5 align-items-center">
                           <a href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                            </a>
                           <a href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                           </a>
                           <a href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                            </a>
                           <a href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </a>
                           <a href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24px" viewBox="0 0 512 512"><path fill="currentColor" d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>
                            </a>
                        </div>
                        <h6 className='mb-4 text-capitalize fw-bold'>Subscribe to newsletter</h6>
                        <form className="mb-3">
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Enter your email address"/>
                            </div>   
                            <div className='d-grid'>
                            <button type="submit" className="btn btn-cta btn-primary">Subscribe</button>                                 
                            </div>
                        </form>
                        <small className='text-muted'>© Copyright 2023. Saasley inc. </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}