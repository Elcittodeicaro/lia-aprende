import os, shutil, subprocess, sys
root = os.path.dirname(os.path.abspath(__file__))
P = lambda *a: os.path.join(root, *a)
out = P('lia-app')
shutil.rmtree(out, ignore_errors=True)
os.makedirs(P('lia-app', 'icons'))

head = open(P('part_head.html')).read()
script = ''.join(open(P(f)).read() for f in ('part_mid.js','part_extra.js','part_gen2.js','part_lengua2.js','part_medio2.js','part_plan.js','q_c1.js','q_c2.js','q_c3.js','q_c4.js','q_c5.js','q_c6.js','part_more.js','part_kids.js','part_tail.js'))
ux = open(P('part_ux.js')).read() + open(P('part_v6.js')).read() + open(P('part_v7.js')).read()
pre, body = head.split('<canvas id="fx"', 1)
body = '<canvas id="fx"' + body
body = body.rsplit('<script>', 1)[0]

meta = '''<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Lía: juego de estudio para Primaria en Andalucía.">
<meta name="theme-color" content="#0B7A43">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Lía">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="format-detection" content="telephone=no">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
'''
# lo que la página de Claude daba hecho: reset, márgenes seguros del iPhone, [hidden]
app_css = '''<style>
html{-webkit-text-size-adjust:100%;color-scheme:light}
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;-webkit-tap-highlight-color:transparent}
img{max-width:100%}
[hidden]{display:none!important}
.backup textarea{font-size:16px}
</style>
'''
sw = '''<script>
if('serviceWorker' in navigator){addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}
</script>
'''
html = '<!doctype html>\n<html lang="es">\n<head>\n' + meta + pre + app_css + '</head>\n<body>\n' + body + '<script>\n' + script + ux + sw + '</body>\n</html>\n'
# part_tail ends with </script>; keep the document well formed
open(P('lia-app', 'index.html'), 'w').write(html)
for f in ('sw.js', 'manifest.webmanifest'):
    shutil.copy(P('pwa_src', f), P('lia-app', f))
for n in (180, 192, 512, 1024):
    subprocess.run(['convert', P('icon', 'lia-icon-1024.png'), '-resize', f'{n}x{n}', '-alpha', 'off', P('lia-app', 'icons', f'icon-{n}.png')], check=True)
print('ok', len(html))
