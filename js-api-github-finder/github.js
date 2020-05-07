class GitHub {
  constructor() {
    this.client_id = "6c83ce5ed62152fa708b";
    this.client_secret = "b7a5d0840f735bd7a58a90f0dc18360583b069eb";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
