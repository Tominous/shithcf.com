with open('words.txt') as f:
    words = [l.strip() for l in f]

with open('src/words.js', 'w') as f:
    f.write('export default [')
    f.write(', '.join('"%s"' % w for w in words))
    f.write('];')
