// header.js
const header = `
<header class="bg-gray-800 p-6">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="text-yellow-500 mb-4 md:mb-0 md:mr-4">
            <h1 class="text-4xl font-serif">GOLD GYM A.B</h1>
        </div>
        <div class="flex items-center w-30 h-20 mr-4">
            <div id="navbar" class="flex items-center">
                <button id="login" class="bg-yellow-500 text-gray-800 py-2 px-4 rounded mr-2">Login</button>
                <button id="logout" class="bg-red-500 text-white py-2 px-4 rounded hidden mx-4">Logout</button>
                <button id="backButton" class="bg-gray-500 text-white py-2 px-4 rounded mx-4">Enrere</button>
            </div>
        </div>
    </div>
</header>
`;

export default header;
