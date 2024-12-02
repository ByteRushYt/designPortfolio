

export default function Footer(){
    return (
        <nav className="flex justify-between flex-col items-center gap-4 lg:px-16 lg:py-10 px-4 py-2">
            <h2 className="font-normal text-center text-gray-600 text-md hover:text-black">© 2024 All rights reserved.</h2>

            <div>
                <ul className="flex space-x-2 font-normal text-md text-gray-600">
                    <li>
                        <a href="#" className="hover:underline hover:text-black underline-offset-2 decoration-2">
                            LinkedIn
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#" className="hover:underline hover:text-black underline-offset-2 decoration-2">
                            Dribble
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#" className="hover:underline hover:text-black underline-offset-2 decoration-2">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}