document.addEventListener("DOMContentLoaded", function () {
    // Función para manejar reproducción y pausa de pares de videos
    function syncVideos(videoLeftId, videoRightId) {
        const videoLeft = document.getElementById(videoLeftId);
        const videoRight = document.getElementById(videoRightId);

        // Función para reproducir ambos videos
        function playBothVideos() {
            if (videoLeft.paused) videoLeft.play();
            if (videoRight.paused) videoRight.play();
        }

        // Función para pausar ambos videos
        function pauseBothVideos() {
            if (!videoLeft.paused) videoLeft.pause();
            if (!videoRight.paused) videoRight.pause();
        }

        // Agregar eventos a ambos videos
        videoLeft.addEventListener("play", playBothVideos);
        videoRight.addEventListener("play", playBothVideos);

        videoLeft.addEventListener("pause", pauseBothVideos);
        videoRight.addEventListener("pause", pauseBothVideos);
    }

    // Sincronizar pares de videos
    syncVideos("videoLeft", "videoRight");
    syncVideos("videoLeftRecorrido", "videoRightRecorrido");
    syncVideos("videoLeftMovimiento", "videoRightMovimiento");
});
