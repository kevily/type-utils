import { Engine, tsc } from '1k-tasks'
import * as path from 'path'

const reactTask = new Engine({ root: path.join(process.cwd(), 'packages/type-tools') })
reactTask.registry('tsc', tsc)

reactTask.run()
