import styles from './index.less';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function IndexPage() {
  return (
    <AmplifyProvider>
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    </AmplifyProvider>
  );
}
