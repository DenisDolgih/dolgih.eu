<script setup>
import Matrix from '../components/Matrix.vue';
import click from '../assets/click.svg';
import doc from '../assets/doc.svg';
</script>

<template>
    <p>
        <Matrix text="Honestly, I don't have time for side projects. I have enough work and a big family. 
        But I created and support these small free services on the Internet:" />
    </p>
    <h1>
        <img :src="click"/><Matrix text=" ClicksTrawl" />
    </h1>
    <p>
        <Matrix text="Clickstrawl is a no-cost solution to help you tracking the performance of your 
        online marketing campaigns. This powerful web service combines the functionality of link 
        compilation with UTM tags, URL shortening, and QR code generation, 
        simplifying the process of managing and monitoring your digital marketing efforts." />
    </p>
    <ul>
        <li>
            <strong>
                <Matrix text="Link Compilation with UTM Tags: " />
            </strong>
            <Matrix text="Easily compile and customize URLs for your various marketing channels, 
            such as social media, email campaigns, or pay-per-click ads. Clickstrawl allows you to add UTM tags 
            to your links, ensuring precise tracking and analytics within Google Analytics." />
        </li>
        <li>
            <strong>
                <Matrix text="URL Shortening: " />
            </strong>
            <Matrix text="Long, cumbersome URLs can deter potential customers and make your marketing 
            materials less appealing. Clickstrawl offers a built-in URL shortening feature that transforms lengthy links 
            into concise, user-friendly URLs." />
        </li>
        <li>
            <strong>
                <Matrix text="QR Code Generation: " />
            </strong>
            <Matrix text="Enhance your offline marketing efforts by generating QR codes for your 
            shortened and tagged links. QR codes are a powerful tool for bridging the gap between your online and offline 
            marketing channels. Simply download the QR code images and include them in your print materials, such as flyers, 
            brochures, or business cards." />
        </li>
    </ul>
    <p>
        <Matrix text="If you're looking for a way to streamline your digital marketing efforts and improve your
        return on investment, Clickstrawl is the perfect solution for you." />
    </p>
    <p>
        <Matrix
            text="This service is written with React and Typescript at front-end and Node.js and MongoDB at back-end." />
    </p>
    <p>
        <Matrix text="This is the link to the project: " />
        <a href="https://clickstrawl.com" alt="Clickstrawl" target="_blank">
            <Matrix text="https://clickstrawl.com" />
        </a>
    </p>
    <p>
        <Matrix text="And this is the GitHub repo: " />
        <a href="https://github.com/DenisDolgih/clickstrawl" alt="Clicktsrawl GitHub">
            <Matrix text="https://github.com/DenisDolgih/clickstrawl" />
        </a>
    </p>

    <h1>
        <img :src="doc"/><Matrix text=" LiveURI" />
    </h1>
    <p>
        <Matrix text="LiveUri.com is your ultimate destination for creating and sharing dynamic, content-rich web pages without the need
        for a traditional website or content management system. With LiveUri, you can effortlessly craft text-based content
        and store it directly in a unique page URL, revolutionizing the way you create, manage, and share information
        online." />
    </p>
    <ul>
        <li>

            <strong>
                <Matrix text="Instant Web Page Creation: " />
            </strong>
            <Matrix text="LiveUri.com offers a simple and intuitive platform for generating web pages
            instantly. There's no need to set up hosting, install software, or deal with complex web development processes.
            Just visit the site, and you're ready to start creating." />
        </li>
        <li>
            <strong>
                <Matrix text="Rich Text Creation: " />
            </strong>
            <Matrix
                text="Craft and edit your text-based content within a clean and user-friendly text editor.
            Format your content with headings, paragraphs, lists, and links to create engaging and informative web pages." />
        </li>
        <li>
            <strong>
                <Matrix text="Content Storage in URLs: " />
            </strong>
            <Matrix
                text="One of the most distinctive features of LiveUri.com is its ability
            to store your content directly within the page URL. Each unique URL becomes a living, editable document,
            allowing you to update and revise your content whenever you need to, with the changes reflected instantly." />
        </li>
        <li>
            <strong>
                <Matrix text="Shareable and Accessible: " />
            </strong>
            <Matrix text="Share your LiveUri web pages with ease. The generated URLs serve as permanent
            links to your content, making them accessible to anyone with the link. Whether you're sharing information,
            documentation, guides, or stories, LiveUri.com ensures your content reaches your audience effortlessly." />
        </li>
    </ul>
    <p>
        <Matrix
            text="This service is written with React and Typescript, has only front-end code and is hosted on Google Firebase. 
            The main feature of this technology is that the server part is not needed and the data is stored not on the server 
            but in the article address itself." />
    </p>
    <p>
        <Matrix text="This is the link to the project: " />
        <a href="https://liveuri.com" alt="Live URI" target="_blank">
            <Matrix text="https://liveuri.com" />
        </a>
    </p>
    <p>
        <Matrix text="And this is the GitHub repo: " />
        <a href="https://github.com/DenisDolgih/hiddenharbours" alt="liveURI GitHub">
            <Matrix text="https://github.com/DenisDolgih/hiddenharbours" />
        </a>
    </p>
</template>
<style scoped>
h1 {
    text-align: center;
}

h1 img {
    width: 50px;
    vertical-align: middle;
}

li {
    list-style: square;
    line-height: 1.5em;
    text-align: justify;
}

p, li {
    margin: 30px 0 0;
    text-align: justify;
}

a {
    text-decoration: underline;
}
</style>
