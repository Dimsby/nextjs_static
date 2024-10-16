import path from 'path';
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};



export default nextConfig;
