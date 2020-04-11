import path from 'path';
import fs from 'fs';

import { theme } from './theme';

console.log('generating')

fs.writeFileSync(path.join(__dirname, '../themes/Academy City-color-theme.json'), JSON.stringify(theme, null, 2))