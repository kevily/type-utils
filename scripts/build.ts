import { Engine, tsc } from '1k-tasks'
import * as path from 'path'

const reactTask = new Engine({ root: path.join(process.cwd(), 'packages/types') })
reactTask.registry('tsc', tsc)

reactTask.run()
