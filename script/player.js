class AudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.isPlaying = false;
    this.currentTrackIndex = 0;
    
    this.playlist = [
	  { title: "kvestportal.ru", url: "https://archive.org/download/01-kvestportal/01_kvestportal.mp3" },
      { title: "Прекращайте поиски", url: "https://archive.org/download/01-kvestportal/poiski.mp3" },
      { title: "Если бы вы знали", url: "https://archive.org/download/dlua_vselennoi/esli_bi_znali.mp3" },
      { title: "Ты можешь", url: "https://archive.org/download/dlua_vselennoi/ti_mozesh.mp3" },
      { title: "Старый мир", url: "https://archive.org/download/dlua_vselennoi/starii_mir.mp3" },
      { title: "Как раньше не будет", url: "https://archive.org/download/dlua_vselennoi/kak_ranshe_be_budet.mp3" },
      { title: "Новая эра", url: "https://archive.org/download/dlua_vselennoi/novaua_era.mp3" },
      { title: "Эпоха перемен", url: "https://archive.org/download/dlua_vselennoi/epoha_peremen.mp3" },
      { title: "Эксклюзивный мир", url: "https://archive.org/download/dlua_vselennoi/exkluzivnii_mir.mp3" },
      { title: "Он здесь", url: "https://archive.org/download/dlua_vselennoi/on_sdes.mp3" },
      { title: "Волшебная палочка", url: "https://archive.org/download/dlua_vselennoi/volshebnaua.mp3" },
	  { title: "Квест ждёт тебя", url: "https://archive.org/download/dlua_vselennoi/kvest_zhdet_tebua.mp3" },
      { title: "Радиоприёмник жизни", url: "https://archive.org/download/dlua_vselennoi/radiopriemnik_zhizni.mp3" },
      { title: "Новый мир", url: "https://archive.org/download/dlua_vselennoi/novii_mir.mp3" },
      { title: "Страх нам только снится", url: "https://archive.org/download/dlua_vselennoi/strah_nam_tolko_snitsua.mp3" },
      { title: "Сила", url: "https://archive.org/download/dlua_vselennoi/sila.mp3" },
      { title: "Нет тебя и нет меня", url: "https://archive.org/download/dlua_vselennoi/net_tebua_i_net_menua.mp3" },
      { title: "Слишком высока цена", url: "https://archive.org/download/dlua_vselennoi/u_strahov_slishkom_visoka_cena.mp3" },
      { title: "Трансформация", url: "https://archive.org/download/dlua_vselennoi/transformaciua.mp3" },
      { title: "Проводник энергий", url: "https://archive.org/download/dlua_vselennoi/provodnik_energii.mp3" },
      { title: "Всё самое лучшее", url: "https://archive.org/download/dlua_vselennoi/vse_samoe_luchee.mp3" },
      { title: "Для Вселенной", url: "https://archive.org/download/dlua_vselennoi/dlua_vselennoi.mp3" },
	  { title: "Вселенная любит", url: "https://archive.org/download/dlua_vselennoi/vselennaua_lubit.mp3" },
      { title: "Мантрик", url: "https://archive.org/download/dlua_vselennoi/mantrik.mp3" },
      { title: "Ходят вокруг", url: "https://archive.org/download/dlua_vselennoi/hoduat_vokrug.mp3" },
      { title: "Интрига", url: "https://archive.org/download/dlua_vselennoi/intriga.mp3" },
      { title: "Супергеройский квест", url: "https://archive.org/download/dlua_vselennoi/supergeroiskii_kvest.mp3" },
      { title: "Всё едино", url: "https://archive.org/download/dlua_vselennoi/vse_edino.mp3" },
      { title: "Все преграды ложны", url: "https://archive.org/download/dlua_vselennoi/vse_pregradi_lozhni.mp3" },
      { title: "Игрок в жизнь", url: "https://archive.org/download/dlua_vselennoi/igrok_v_zhizn.mp3" },
      { title: "Все преграды ложны v2", url: "https://archive.org/download/dlua_vselennoi/vse_pregradi_lozhni_2.mp3" },
      { title: "Мастер трансформаций", url: "https://archive.org/download/dlua_vselennoi/master_transformacii.mp3" },
      { title: "Зыбкая почва", url: "https://archive.org/download/dlua_vselennoi/zibkaua_pocva.mp3" },
	  { title: "Новый лист", url: "https://archive.org/download/dlua_vselennoi/novii_list.mp3" },
      { title: "Неизвестность не пугает", url: "https://archive.org/download/dlua_vselennoi/neizvestnost_ne_pugaet.mp3" },
      { title: "Ценность триггеров", url: "https://archive.org/download/dlua_vselennoi/cennost_triggerov.mp3" },
      { title: "Комикс", url: "https://archive.org/download/dlua_vselennoi/comics.mp3" },
      { title: "Почва зыбка", url: "https://archive.org/download/dlua_vselennoi/pochva_zibka.mp3" },
      { title: "Эти вороны воют", url: "https://archive.org/download/dlua_vselennoi/eti_voroni_vout.mp3" },
      { title: "Выбор", url: "https://archive.org/download/dlua_vselennoi/vibor.mp3" },
      { title: "Звзды шансов", url: "https://archive.org/download/dlua_vselennoi/zvezdi_shansov.mp3" },
      { title: "Вдохновение", url: "https://archive.org/download/dlua_vselennoi/vdohnovenie.mp3" },
      { title: "Возвышенные мечты", url: "https://archive.org/download/dlua_vselennoi/vozvishennie_mechti.mp3" },
      { title: "Сфера квестов", url: "https://archive.org/download/dlua_vselennoi/sfera_kvestov.mp3" }
    ];
    
    // Add method to window object for external access
    window.addTrack = this.addTrack.bind(this);
    
    this.playBtn = document.getElementById('play');
    this.progressContainer = document.getElementById('progress-container');
    this.progress = document.getElementById('progress');
    this.preloadProgress = document.getElementById('preload-progress');
    this.currentTimeEl = document.getElementById('current-time');
    this.durationEl = document.getElementById('duration');
    this.playIcon = document.getElementById('play-icon');
    this.pauseIcon = document.getElementById('pause-icon');
    this.playlistContainer = document.getElementById('playlist');
    this.prevBtn = document.getElementById('prev');
    this.nextBtn = document.getElementById('next');
    
    this.initializeEventListeners();
    this.initializePlaylist();
    this.updateNavigationButtons();
    this.setMediaSession();
  }
  
  initializeEventListeners() {
    this.playBtn.addEventListener('click', () => this.togglePlay());
    this.progressContainer.addEventListener('click', (e) => this.setProgress(e));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.setDuration());
    this.audio.addEventListener('ended', () => this.handleTrackEnd());
    this.audio.addEventListener('progress', () => this.updatePreloadProgress());
    this.prevBtn.addEventListener('click', () => this.loadPreviousTrack());
    this.nextBtn.addEventListener('click', () => this.loadNextTrack());
  }

  handleTrackEnd() {
    if (this.currentTrackIndex === this.playlist.length - 1) {
      // If it's the last track, reset to the beginning and stop
      this.currentTrackIndex = 0;
      this.loadTrack(0);
      this.pause();
    } else {
      // Otherwise, play the next track
      this.loadNextTrack();
    }
    this.updateNavigationButtons();
  }

  updatePreloadProgress() {
    if (this.audio.buffered.length > 0) {
      const bufferedEnd = this.audio.buffered.end(this.audio.buffered.length - 1);
      const duration = this.audio.duration;
      const width = (bufferedEnd / duration) * 100;
      this.preloadProgress.style.width = `${width}%`;
    }
  }
  
  initializePlaylist() {
    this.playlist.forEach((track, index) => {
      const div = document.createElement('div');
      div.classList.add('playlist-item');
      // Add active class to first track by default
      if (index === 0) {
        div.classList.add('active');
      }
      div.innerHTML = `
        <button class="track-play-btn" data-index="${index}">
          <svg viewBox="0 0 24 24" class="track-play-icon">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg viewBox="0 0 24 24" class="track-pause-icon" style="display: none;">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <span class="track-info">${track.title}</span>
        <span class="track-number">${index + 1}</span>
      `;
      
      const playBtn = div.querySelector('.track-play-btn');
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleTrackPlayClick(index);
      });
      
      this.playlistContainer.appendChild(div);
    });
  }
  
  handleTrackPlayClick(index) {
    if (this.currentTrackIndex === index && this.isPlaying) {
      this.pause();
    } else {
      this.loadTrack(index);
    }
  }
  
  loadTrack(index) {
    this.currentTrackIndex = index;
    const track = this.playlist[index];
    this.audio.src = track.url;
    this.preloadProgress.style.width = '0%';
    
    // Update all track buttons to show play icon
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
      item.classList.toggle('active', i === index);
      const playIcon = item.querySelector('.track-play-icon');
      const pauseIcon = item.querySelector('.track-pause-icon');
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    });
    
    this.updateNavigationButtons();
    this.updateMediaSessionMetadata(); // Update media session metadata
    this.play();
  }
  
  loadPreviousTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadTrack(this.currentTrackIndex);
    this.updateNavigationButtons();
  }
  
  loadNextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    this.loadTrack(this.currentTrackIndex);
    this.updateNavigationButtons();
  }
  
  updateNavigationButtons() {
    // Update button states based on current track
    this.prevBtn.disabled = this.currentTrackIndex === 0;
    this.nextBtn.disabled = this.currentTrackIndex === this.playlist.length - 1;
    
    // Also update media session actions if available
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('previoustrack', this.prevBtn.disabled ? null : () => this.loadPreviousTrack());
      navigator.mediaSession.setActionHandler('nexttrack', this.nextBtn.disabled ? null : () => this.loadNextTrack());
    }
  }
  
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      if (!this.audio.src) {
        this.loadTrack(0);
      } else {
        this.play();
      }
    }
  }
  
  play() {
    this.isPlaying = true;
    this.playIcon.style.display = 'none';
    this.pauseIcon.style.display = 'block';
    
    // Update current track button to show pause icon
    const currentItem = document.querySelector(`.playlist-item:nth-child(${this.currentTrackIndex + 1})`);
    const playIcon = currentItem.querySelector('.track-play-icon');
    const pauseIcon = currentItem.querySelector('.track-pause-icon');
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    
    this.audio.play();
    this.playBtn.classList.add('pulse');
  }
  
  pause() {
    this.isPlaying = false;
    this.playIcon.style.display = 'block';
    this.pauseIcon.style.display = 'none';
    
    // Update current track button to show play icon
    const currentItem = document.querySelector(`.playlist-item:nth-child(${this.currentTrackIndex + 1})`);
    const playIcon = currentItem.querySelector('.track-play-icon');
    const pauseIcon = currentItem.querySelector('.track-pause-icon');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    
    this.audio.pause();
    this.playBtn.classList.remove('pulse');
  }
  
  updateProgress() {
    const { duration, currentTime } = this.audio;
    const progressPercent = (currentTime / duration) * 100;
    this.progress.style.width = `${progressPercent}%`;
    this.currentTimeEl.textContent = this.formatTime(currentTime);
  }
  
  setProgress(e) {
    const width = this.progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = this.audio.duration;
    this.audio.currentTime = (clickX / width) * duration;
  }
  
  setDuration() {
    this.durationEl.textContent = this.formatTime(this.audio.duration);
  }
  
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const returnedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${returnedSeconds}`;
  }
  
  addTrack(title, url) {
    const index = this.playlist.length;
    this.playlist.push({ title, url });
    
    const div = document.createElement('div');
    div.classList.add('playlist-item');
    div.innerHTML = `
      <button class="track-play-btn" data-index="${index}">
        <svg viewBox="0 0 24 24" class="track-play-icon">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg viewBox="0 0 24 24" class="track-pause-icon" style="display: none;">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>
      <span class="track-info">${title}</span>
      <span class="track-number">${index + 1}</span>
    `;
    
    const playBtn = div.querySelector('.track-play-btn');
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handleTrackPlayClick(index);
    });
    
    this.playlistContainer.appendChild(div);
  }
  
  setMediaSession() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => this.play());
      navigator.mediaSession.setActionHandler('pause', () => this.pause());
      navigator.mediaSession.setActionHandler('previoustrack', this.prevBtn.disabled ? null : () => this.loadPreviousTrack());
      navigator.mediaSession.setActionHandler('nexttrack', this.nextBtn.disabled ? null : () => this.loadNextTrack());
      navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        this.audio.currentTime = Math.max(this.audio.currentTime - (details.seekOffset || 10), 0);
      });
      navigator.mediaSession.setActionHandler('seekforward', (details) => {
        this.audio.currentTime = Math.min(this.audio.currentTime + (details.seekOffset || 10), this.audio.duration);
      });
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.fastSeek && ('fastSeek' in this.audio)) {
          this.audio.fastSeek(details.seekTime);
          return;
        }
        this.audio.currentTime = details.seekTime;
      });
    }
  }
  
  updateMediaSessionMetadata() {
    if ('mediaSession' in navigator) {
      const currentTrack = this.playlist[this.currentTrackIndex];
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: 'KVESTPORTAL🎲RU', // You can set a default artist or fetch it if available
        album: 'Soundtrack', // Set the album name here
        artwork: [
          { src: 'https://example.com/matrix-artwork-96x96.png',  sizes: '96x96',   type: 'image/png' },
          { src: 'https://example.com/matrix-artwork-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'https://example.com/matrix-artwork-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'https://example.com/matrix-artwork-256x256.png', sizes: '256x256', type: 'image/png' },
          { src: 'https://example.com/matrix-artwork-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'https://example.com/matrix-artwork-512x512.png', sizes: '512x512', type: 'image/png' },
        ]
      });
    }
  }
}

const player = new AudioPlayer();
// Example usage:
// window.addTrack("New Song Title", "https://example.com/song.mp3");