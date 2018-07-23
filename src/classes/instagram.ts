import { InstaPhoto } from '../interfaces';

export interface InstagramData {
  last_fetch_time: string;
  completed_initial_fetch: boolean;
  photos: InstaPhoto[];
  media_count: number;
  profile_picture: string;
  username: string;
}

/**
 * The tinder photos (not instagram but the one connected to the profile)
 */
class Instagram {
  /**
   * The last time the instagram profile was fetched
   */
  lastFetchTime: Date;
  /**
   * Wether or not the instagram profile has been fetched yet
   */
  completedInitialFetch: boolean;
  /**
   * The array of photos that tinder fetched
   */
  photos: InstaPhoto[];
  /**
   * How many photos the profile contains (or that have been fetched)
   */
  mediaCount: number;
  /**
   * The current profile picture on instagram
   */
  profilePicture: string;
  /**
   * The instagram username
   */
  username: string;

  constructor(instagramData: InstagramData) {
    this.lastFetchTime = new Date(instagramData.last_fetch_time);
    this.completedInitialFetch = instagramData.completed_initial_fetch;
    this.photos = instagramData.photos;
    this.mediaCount = instagramData.media_count;
    this.profilePicture = instagramData.profile_picture;
    this.username = instagramData.username;
  }
}

export { Instagram };
