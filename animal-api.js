// Alpine.js components for Dog and Cat sections

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

// Dog Section Component
function dogSection() {
    return {
        imageUrl: '',
        loading: false,
        async fetchDogImage() {
            this.loading = true;
            try {
                const response = await fetch(DOG_API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch dog image');
                }
                const data = await response.json();
                this.imageUrl = data.message;
            } catch (error) {
                console.error('Error fetching dog image:', error);
            } finally {
                this.loading = false;
            }
        }
    };
}

// Cat Section Component
function catSection() {
    return {
        imageUrl: '',
        loading: false,
        async fetchCatImage() {
            this.loading = true;
            try {
                const response = await fetch(CAT_API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch cat image');
                }
                const data = await response.json();
                this.imageUrl = data[0].url;
            } catch (error) {
                console.error('Error fetching cat image:', error);
            } finally {
                this.loading = false;
            }
        }
    };
}

// Register Alpine.js components
window.dogSection = dogSection;
window.catSection = catSection;