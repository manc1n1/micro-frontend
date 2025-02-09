# Micro-frontend setup

![NodeJS][nodejs-shield]
![React][react-shield]
![TypeScript][ts-shield]
![Vite][vite-shield]
![PNPM][pnpm-shield]
![MUI][mui-shield]

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   Install [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/manc1n1/micro-frontend.git
    ```

2. Install NPM packages in both `micro-frontend/host` and `micro-frontend/remote`

    ```sh
    pnpm i
    ```

3. Open a terminal for both `micro-frontend/host` and `micro-frontend/remote`

-   `micro-frontend/host`

    ```sh
    pnpm build && pnpm preview
    ```

-   `micro-frontend/remote`

    ```sh
    pnpm build && pnpm serve
    ```

4. Open browser and go to `http://localhost:5000`

## Usage

[![Vite and Module Federation Makes Micro-Frontends EASY!](https://img.youtube.com/vi/t-nchkL9yIg/0.jpg)](https://www.youtube.com/embed/t-nchkL9yIg)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

[![Gmail][gmail-shield]][gmail-url]
[![X][x-shield]][x-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
-   [Vite and Module Federation Makes Micro-Frontends EASY!](https://www.youtube.com/embed/t-nchkL9yIg)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:mancinij1111@gmail.com
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/manc1n1
[mui-shield]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[pnpm-shield]: https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220
[react-shield]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[ts-shield]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[vite-shield]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[x-shield]: https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white
[x-url]: https://twitter.com/0xSuspext
