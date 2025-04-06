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
    "38H6iRvLw3WjE41rREma2GZ5WNAWRiA2jhq1zdTtSqpLttHeBxC3yJ5deC5dGSAW8GfQfsgytU7RgaxLcbdJ7qhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgxtnsHpngxJ33DhuNvjrkfRLAjGBfewi4o9vDRzki2F8pawnqLu1MYyt1Y8YobXHwNWaK8rUG3nwT15LVaiM6X",
  "key1": "ZQJ2RebG7Z7zvGZEK9SyQXHZ9huGHhXMoQQKJKctmyXZPzGweB1HWz4iF4nPx24NYn1C2W61N852J4PxpWNPN2C",
  "key2": "2WqJ3E19qJpzo2Gntv2s3QCEFAWmYqRPESWVF4hpK1EwqLdgGhg8mjaHeiqrNJmURSmC9eKP5PU3hMCTGv4XgBVt",
  "key3": "4A3iraiRMUtJF7NP7sGBHWwBVoyrpMihdQPU3H2b3vyA22TM1aoDc8KDz8xj4TFN3oUZKM9YwVJ1iS2AzeaMQCki",
  "key4": "3ij7fFWWzcHxneWPd63pbSEEbJFGmmaU6y7w1PXWcm65HKvGqEmetTHvoeC9HjVWJ9TvzRVM5aiKQ4p787teoG9C",
  "key5": "2jGcjfqvVQ9qd9c7Kvs5YSdpm8QZAJbPUewnskybhvKeS1XfisBsFfjqdBCesFe2gKUEo4PVaP8hgFAYnvDHvWRQ",
  "key6": "4f5t2TQiU1oVxwGo4LEhn1pAEwBxwhd5hQeGBf8qeSuM6o1HixohvywNWz5fekfYVRxoZ2t3EBmN3vsRcUoJs3Vx",
  "key7": "5mhVHHrNT1ruZqyURxx5EQJC2GrDm7p2NWaGn6b2FPXf2pQ5JRhSJJFnsUFAikxwpP7QEi58mWEATmTy4MjNkGBB",
  "key8": "4YSPo7g2f3zScQBp58XraTN5Wpuezf4mFhK6VWnEKiZKHJ22867ZvuLu5aJRtq7Yt9kHNBJEEstUBqddJcWUAv9q",
  "key9": "5nxTs3ZnMPH8gj9UmJvAtkRJkGcBsXdwy1CeEcHUVL6EHKpLSMKi8Q9fD41wc6T3EbLpvZ5JsycTDWxSYGm7j7vv",
  "key10": "3jb9mSKsrEhGgkYW6D3w4y2y2MRx9Q92pEeaF1MQBjvCk4CFQTswP6tNupQeNCZUAmxACUmMLN2axmwWmGSZtjFG",
  "key11": "4PdGSEPohBkLdw4hcc3qQgMCLiZQRU4MsKGfYNMnjmqLoaa6VsQwXrHJQPSWNnfjtV3pSEBVWJw9N3Z6ZDK6L8pV",
  "key12": "48YcqPBvYDHe37PQjKsDuvrP9isVSGRYAGwMSDoX5MrCS79ifYzc5CUKx99WNArN5gqyNAfaQrsSCGA1j1aw98G6",
  "key13": "dRUXuWSvaJJBBCYRouZrHjNA4pVUC3D7cGTM9HJJgDgiCNnNKXRkDwdqXPhWmRJE1SaYnpi2eL7Zom9JNHUdwjw",
  "key14": "2PKfdMGLehFnyp9YHiVmMFY8uxeumTM43GVSh3GQk3MqQnDGcDvVohMR776ZoYuJ7REqTEp14M3KCqn2SDoZ1f1G",
  "key15": "DKAepsdVxYeoLeKWGbn5eoBEeatJ18vAXk9H9T8imWUfvTrTyJ2G989UmqZf2mY3qVMnbvHLeRGHmUVHFq4VSMG",
  "key16": "4k2sEocXPakn8D9MzfqgDL9Lzxe9SZv3piUkcNbnJ3DbvJRJKwdcxg836a65FCitGHnymh8u6gyefFyKmPU4tdf5",
  "key17": "3LhBnGZDrogkwu3iA6DV2xeauuxSgPji4CMqS4wL6wrW7uHUvdcywea4BZmUWr1p5z4ERn8Bo5jCAHc53cvypumG",
  "key18": "W4fjGzJvzRSfBHYCmWi7pi5ZC9oBHSGVtnQbuRnTKjSmmNKiTQsNcQPuYY1hxsTp3vHcmx7RP7ofMPLqQg8rzVF",
  "key19": "2a9KpTXr2Q6RxAYwxY7Xu5zY5NxAQCivzrr6Lms4xtqVfvyvZXEKkUA3hNAzuXUdaPDY3yzYbjBdHKwtiS1S35Kd",
  "key20": "61VsC7Mz9AMmnskfY8mNm6KftJL3GyJNNBwgAcXK76LnHbx2XC4F6w3vWjfLWvJJGn73LoQipWovFF6Vo6A5KTRx",
  "key21": "31cSo95gVUfYGfny9Thux6RwNj8WR5WrSZvhLY2gv3Q9LF7tJwHGVjnfrn7K2BaSSmKDx9KGQTtdn5N3swFFdCQ9",
  "key22": "2a3b58fnmpvivF9S3yLS2uHTekymiGR8Z7UTxKNoD153LqigKz6WtD4EE6GyLWy3j936oJVETBCCH4wxKJ4j7H4c",
  "key23": "5di25fUU2i6pBzNGVAAgsNb5Agmukatqy6VQ3FQzHrJJ2KGNKAtezVbVbVWHzoEYoNEiyzqBTM99Fsdg7qVYvi4W",
  "key24": "5HNbeCQ1mjivSrwn2JzfoNnPB8dTqDfvNZyMuq6QckasenrLfNV4gCtqrpS2pYLQSxuDF8TGr2zG9pxACEcxMXW4",
  "key25": "62TSTH6JAySgxBdwnNRP78KC9RP8PFJeqXxwnjgytuQwDF9eh2sUmmZscrEanjKZf3c4aHqfkTWfext6hXjVJ3Cw"
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
