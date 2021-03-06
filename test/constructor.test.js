var url = 'https://zhw2590582.github.io/assets-cdn/video/one-more-time-one-more-chance-480p.mp4';

describe('Constructor', function() {
    afterEach(function() {
        [...Artplayer.instances].forEach(art => {
            art.destroy(true);
        });
    });

    it('Constructor is a global variable', function() {
        expect(Artplayer).to.be.an('function');
        expect(Artplayer.instances).to.be.an('array');
        expect(Artplayer.instances.length).to.be.equal(0);
    });

    it('Instance state', function() {
        var sample1 = new Artplayer({ container: '.sample1', url: url });
        expect(sample1.id).to.equal(1);
        var sample2 = new Artplayer({ container: '.sample2', url: url });
        expect(sample2.id).to.equal(2);
        var sample3 = new Artplayer({ container: '.sample3', url: url });
        expect(sample3.id).to.equal(3);
    });
});
