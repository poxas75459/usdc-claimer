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
    "52uGrB8oqeRLR2Uy6DQxnUJ3Pq46brxcxoFK8UUixstZLL2yZ86jC1PYGJfao9tRzFUZwM63pS6bmkQKD3hsQnni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bJJULWVsjKJXrVQ8Bkv1KegTYfXcGJ6XMnzMEbVxnyYAFDLhHvy89v2Tj2JwctQfbczV2Tr7Qkg1d4hSKM8wEi",
  "key1": "3r4qdXW2NkH5wLyf1QjrKBpFpuctmf66TxVrP7zfFkiqSJDhvvq6oz4MBtfibSb3WBAwVW5KzBfS3qSmQHRFsFAv",
  "key2": "2hDdJuzkRbwwPbyNcMxKdm8FS51kdHbzLw9pA4PcsE6aSQBuG9MiBawPKqgN1Mv3CC2DLtus3ioCaQ2nXvrA6Ckn",
  "key3": "2mSjztAQV8QPHexv7jTBmNSERNChiWMkeQMybmtj61HXufCReHmatb8zrgiPZVftAJfy1ngKJWvT98PqQuhbWfYM",
  "key4": "3otng5vNTCVwtmVh5jYV5HWtzqguGzgbBr5YqSCMdFvbMoeBJ2xJt31gF3JaZgd3wioRknw49AzKSu6PpzmjC6fr",
  "key5": "2EzTTfoRAykpAU9LWWUNPbq4Ax4ms8UGasGSpcbjLjideNnpRhJXovJe8Y5Ay9zD7kM9CN4C5A2QaXCzaecmdSZT",
  "key6": "3K8EEuNTdYZ7tGgqZPm5z3e967AmMAhenGB4JnnKBHtfMDFuSijqLMVMMAoTwoyKacy3EXJUxZLtePTG3n1JdpHk",
  "key7": "3e7LYEouHkmsap7vSBCyhAvYmnUBhpXtcdqvn7cH7zj5g3bsd64VPX86aS8KfYrsfMqurWLbdbTiNvHcFZut2BK9",
  "key8": "3bLQzjPrFRjLeeEPhpx1CGHgo4mWhZcd24GU6LyX8vu8fdHjYdfuxZfvZL7gXZwyDL5ZbCqiwmLDxbwHxAVxoXmg",
  "key9": "3zx8TKq4JgWBVds2qCg4ExBBoN3M8kxX1Rc9s9PSTb78k6kUcj7vGMHLiv9xNFUJ57SZvqtwhJFysLtjfw9NGUv4",
  "key10": "2EGMze5BQgPs1X2ZrSpHAXXNEnSsHgN9nB3b6cTge1HzDWDFp5CzdUwCn5BPaM8zRz394q3TeMBMjAhozbdXhdC7",
  "key11": "SAwd8KwsmtxTXsT7UaiczoaTMWYku6bmpzPhxSBWmEUWUhRCJRorpqZmmUiSBeGLNeoK965Sj8uJ3RJQAShuvZ3",
  "key12": "5LCbX5KfbeTrfZNPW6K6MWQfue8KYidabV1Wr756fGXAqvxYfqxoNhRnG3XihMGiWu4XiqDBgkN8UG5YmqAFUnFn",
  "key13": "2mpdykNEjjttjngv2a1TGKrYShowHU3ntE9Mj5RiDghLSAxLDJEcoXANLHnMtXbBbnApqixnWMCwTmq8p2VWQexx",
  "key14": "5ckB3xeAHpyPhswj4TxnXFjRmUABh9p3uSuYKqVjzeSXUskAq9qMgydzB5cvEfnR8AgXukfvJGez2hCyV72zfP5G",
  "key15": "ntrG4zyVtxZDUto9QdvxRwEz1QE9UzbE8VgoBa55YEsUsAP1wAksfxNSNHp4PSqrBHguNnv19W67FEiiWm5dvGx",
  "key16": "2xUfphEJCi36RV2sfUUAtGZizVxcwLefq7VFQcWt7AMJcy3QBmQiDpU76b2LkjvaMskrfW2PFTws11qHKQWcPSSN",
  "key17": "34tBt627zQrwzus1o6xq5ECFrUk5iF95FmcAB5o9rDMbPJbvLa6xKcRFgYVt2YuszBczLsgPudrEmr7SLW3QLZYn",
  "key18": "4t8FafUu8mBMq9nVpV1yokFfQ6hpo1NxrS5oxSH9TQtV5CD8bL7pa8Hwo6k8QVXXCUrWB6eAjJhF7TkS2hooF8ZD",
  "key19": "2ihhd7qYmVDnkSj8qMsNMPKcxqDRckLMbsrioyA3ieqrqctBEgq9dc6png9KExrVbwB4sNwqzKZyv6vvTFeyHKyU",
  "key20": "5jqw1FTcC3DosbseVccpAK9WBxCeHYfqha5wDnmPFxvuh5fiB8Xr5EwKhkxdBkNH94qtoVLY2YTBE7oGznfNg9PL",
  "key21": "4tkw44QDLegh5Zf3AXKEQm3DAeDjynU9S9JJzBU5fv4mdTanP6ApXAoVh8ZQuTuncn68wMvtowNhM3qbFzLjvb9c",
  "key22": "4wkBDBUeRbNEHRZ3rzHWnPNzY96q99xYnMmWngTFCoTKUVUAN8fjJf7bx8tcKHmLXgeLRMShcmAZJpTwnYyLErye",
  "key23": "4qjM2MxwrK23Vdedem6X2fhEs1WpoUG4C2c1VXBSVtVGmwRmDZpQFCsXQXAYbNWSsDE1qyFdSsZFxTroNNrnTETy",
  "key24": "5jnrtVvFhQDB8mkMKoyMZTy4JPUQXHtTNWMapqX9QJVf8tS225JaT6U4QJYtLrnG8Q8fHwUq4Gykux6JvxRxEptt"
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
