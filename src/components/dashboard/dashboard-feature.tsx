/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "67YKJ91e6ecR7gGtcZsxj993pbFFDq2iPjTSHZpgxs3Xw2dEqRP4c8rSFc75oaEL65bRTUjijjVjMx6SfUsV33kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWj3AVm2XW88jFSsiWwkfB2cVHUx1hZsYnq2EwtSvf35XRvn3LUxhqvPX5zx5v5jLWdBWbf3WZC1zAdQyWGW8MA",
  "key1": "5rHPmw6KUNQbfVr245TjMN2CrLM5G6TEVEuh3jRytY8vScxxKTDQhYmuYcU9zbT2hcHFNtQYbrjUsJw9g4hQ4MBH",
  "key2": "DKYNDoJDFHAp4GKpdEAG5F3YHVZpNkDGYJeSe54FApGEVjVTx1vmMhENmxjj1VJuGXCSv1BpdyTTXoL4L4eznZx",
  "key3": "3ko7dsReqmn5zsgDj8Y9rvph6VRWwstVdP6ZHFJmaWiMEjtXwNeELEpNGpNvA87BVTQfSJx7LFYJCnj9MYXZVnS",
  "key4": "NgJmQRzXDNyDzWq6tFRijmj8G1j4aBgrmYGKjSWdPc1W4tp2msWJKkVF2U6D3tK3d4JouAdLeymV8cm3dHRTj2u",
  "key5": "5R3MoukDqjFKA6tNDfheyWb6BvGfDEvcADYAAEJo2wpvXMvRoAgfk2786VydehB5WQgyWt5XxE2VLhZerxevVNxp",
  "key6": "3UbTk2pTfcNF7TbwGYchryTi5HMY3RdvsJo6XGJ35sBSN53ZLQAGDSjXQFyrLqGTU7T7FH26tPooWtSZsbcYqxL9",
  "key7": "376qvYg6jTkyiE11EmLEpMTJw94Lp2GKsV3D9UcReWmGWWZwc1W5UZChvhhJQYgZ3TpqYQ8y3jG8cV4sAXo7YkEN",
  "key8": "2jWxkhAHSJZBsMMbsQwNTdazbo6tiuTrzsKKFs4U8HA6q81vjWRLVYF67qCPTdB9MpTdCXaDFsMECQDzJJDnxv4C",
  "key9": "4S5Nr24xXgxFZq68Bqaivt9seZQ4kU9ejxbyAHS8Qhj5kowByEUHmS4GSBG8y3WEB6QV76UoMTWANsxJ2t7vL6CA",
  "key10": "66iiCtwUc9d6sX1Eqs1ro3vW8jaewFhiLuHYEfXDciiQN2YYEPu9WKqJVc7Yh9gMVJjtfsCVc13YR9rFPQyhbBQt",
  "key11": "36ipJHf41Lr59PUFeBGQE1VuF5ohjj9Bj1o8ofYY8ynEwkDPWq9kpDWpTXGEjUYjxMA8bz3zexMbqhPryPcZEkZm",
  "key12": "36NjUqzmWbcypYp1ajE7439Vbs6eaBCknEyLsJ4KSQTJKqBHGDsXLEt69CqSAhHPLhMFHH9LqfFmuF6qt9W85J1h",
  "key13": "4pmhZDxPNNXNTYDLoNomjwEzLJQcbrB5xPSdSfjEkVXhzVnbhxfgrNvXhsddxnXBbcx9eG9PWFoNLRycu2CULRrL",
  "key14": "iCPSyxbBkTkr4Boz3TF7BquQTHVD8rkg2XmrUypB4N73B96pbVFGpgJgnFMfYKKMJJq9VoUfJCmXECnGmShuv86",
  "key15": "4gGt8PFyaVZZrbz5NYPGzFCk9nW6r1YED5SsCBkjMCEHWoGboiGeu7YjL7tPHJkaU6Db1gCvDJS4XdenrJCT6axN",
  "key16": "MumufHdbPqZp3iTbAZD8FWHq7gidqHgJ3WeReMA91ENN7BsxqpSCPGCs1utY7purjhs3X7r14roH1YEHCD42cyQ",
  "key17": "3suzJ9i2f2epeCohoHt6NBZF9ax5y3HXhpma9DXbCdRugQ76xhZxpbzSEMJpvZTyFf8nahhCgYdQrZuoZqpfXhDd",
  "key18": "NK8HsmCWXP232PPhKpwHkZHrDcoVv5phnyBP2h1WFVJwBqpGva8NkjjpcrTJV6djh5bfUtdSKZfHRcmdhwzD69C",
  "key19": "213ZcBd5M6tLCdFDxkuNyAsUEenJuV3iTQYafUrSH5C33CY1ijSpTCZ3B1rEZf4iM3AHxs44FEhcaVGiLtiCj1YF",
  "key20": "5WtMz7oh5hff11C8vszqmt7ueNQwhJ1dXXr3Si9XEFH6uKYak5mDaksvHsSRcv914ZdqStdgDjjFFtiV56aV85WJ",
  "key21": "5mN2oC719yybguZq9WqH2frtBApeVJV4qLiVLN2NVy5bsLEKZ4QFuF9Q1fgX3gdfCA1HTmZsFQ6k2bvAHuigZqTo",
  "key22": "gjLTsYvv3Gm98RxCpMYjFy6ScktiWkH4BJrnAQgTWMmSLyLmQ384dFaGX9aQUoLWo28R2eBrfkYtbr1RjzReSEe",
  "key23": "3AvkSS4uisHSy69t83m1F8qBjvqH358VRDyBAecbB7tDqXYQQku2wqC6nSVXikxjL2mEbYndndq9XhJZjpUU7Uii",
  "key24": "25sFPH1MoGcTMEBSyPUWE2BdpPQyJsg2B3kE5szbvWoKmJySF5He56rSED1QhYjstBt2cYby9LFsFnPg9gwtz4DQ",
  "key25": "FWP8PDR9jG7P9D6yD23GL7JpqDby1VwtcA9Q8fEbWiMn7HkXxcxMY4MxnNVuwd1ecdzwMFmdvfBadeqJBhBQhYR",
  "key26": "5TwgFyebFxz9Dzoh8rn4DfXJoGnexP7eoJz9mfC52zJT76qEGsVsfmxeGciPC84bWRfSTC7rddLht3xrtm288QSw",
  "key27": "BV1Kz86QBSiroS3eMoFfuBj239gFaY2W979CvsWqMxHXUAFNaagoPTg6Zag9VcKP1E79eRpg2LnMf3FhGNEKdBk",
  "key28": "5YZCc9fuAmV6WmHfjeygkqmzoPu55GuH26B7S8yd4QV7e2LjZ1GPY5ftmLnNhA1xCEWGVBgTb9LSAywQuVzpR8A8",
  "key29": "5WBRsG2RNdMpqQsAncEU3dHoRFYcpPVjcn4G6ZUF7WzdBoUXv9WShJXHqcZfnK8BtqPkRN22Jku7CedvBYY14Vyt",
  "key30": "3bz5pXEbtJJGm6hFTMKxhVkdmoNJTxB8GMMbPcTTRBNKBy1SUbe26pYukYSRzqcGDuqiFr23qcuXMFNmAnem6o6X",
  "key31": "2GT3Rq6ikQe8yoVGAgXztN8fv1sUJ2Ht8QMgPP8nTdBQPz93Fs2nNj79FPKGtyWeHmUqjuitaWBCNePGbU5xsam6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
