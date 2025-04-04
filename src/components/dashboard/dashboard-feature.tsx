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
    "4yazYiqiKxLY66cbWx5WvHDwfgBEnJGNaxE9UcChJaDcZGxNdieLwibt2SU6wXC6ge9kBTwECMfmTbbFESeax1SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8KGjT38nXnTDXGvenzFRQADfDMbRUGLcSHrp5JHRM662owgKf8JQS7Fk6if3bNUh4i2JfZ6qcvK9RiZpWR6NZdb",
  "key1": "3mVvJWmL7qZFLyRLsZnZmdkc25DeMpufdm5tacM94fvLsTEAPiQAdMkLwqtavvAtucfAz3vPynusByx5ekZrsmhE",
  "key2": "YKAxMfR6ry61Z6tmcyCyL3XYoFPZuB7sDjkqpXC9QGb79X52PAkZ1KcYVtr8YDYpq8zUhAhDJjV8GuEzgLj9G7M",
  "key3": "2qaswD38JNP1JbVJ4zfTUbYoBfSHYVDSQcDNwF6Dc53345vGZYGJg38mycajJrWE7jhsJXkuoxzwb3ArbALCQ62k",
  "key4": "KgHpNDSsEq78uiHVSh6sv81JPL13drPoeECYicg43ejRukLPQ6wG693Ut68gLcYiqcU7CiuDowhB3dxmmNqsuNk",
  "key5": "3D42LGr5tS315a71AL3XE9ByqDECps99MA8x8MLUcUniCSnGf9QGEeDtyKTeLLNJ12Um15rvsfZXww2HYZoJGL3Y",
  "key6": "5ZfGXkQgarh33e7qmdUp44gqnpUh7rWjZQ882rYM5owFAG3Q1PJF6KP2pAs1aswsbgQhsW4BUny4DwnVfLKxFy3",
  "key7": "2s9ViXEsQ7jcZbMZ9B9t4bg4CVLpu3225Mh5JQkGV6Ji2mWnKcSM1DczyyRhd2T1jseyN1QNCF9F5Q6BTqJDE2ap",
  "key8": "2bssgR6Fnz5Z7hr2EsXiHYD1jnmH9xNPy7axyitA6643C1Zp45BCJiW6NMRW7P7KdEB37CF1mwe4atnPVmUEjsn9",
  "key9": "2YaKMSUEaq3bgnnLJTYtNFpX6rt94DpxL2a2et9MP9jn4Dus2g4uds72FWCLYeAfJkCQCkauqX4WSuTNqZunkNCs",
  "key10": "5eW67U17bfyMksFA92VwHUER2ytmVfnASfPZWLaMVHT85HuS8zWTy8NeVsctpksfws4MMkhH1snCLxSN6LFURWqb",
  "key11": "2NMnQNgvsT8AjqH6ZJWyT79enU31FPPmJA2skHmGTYHVptDc2HE4w1ScYgRXWJtbBcxxSbh9MiCsLNW7oz6McABf",
  "key12": "5PLJ6xcMqpwwTGGXWmjUUYuAPevTBFJFXWSx4aD2hdEjpU4WkefEhpMJkPs1kMw2Wv8Ahyewkk7V53AceYMy3R5K",
  "key13": "3GT8x9Bbz13gzBFTE9KHmCkQ7bDRiL4Z2DfLvjRGwttbiVVKepQJVBTQtho1o6Yf6PS4wfjyFQQQ7V4vaZfAyyku",
  "key14": "3pqgA5DhMuD3qMrJMyfhwjpDN3iZYwLfExk7Hh9DBmQ5BmS8KHEg6ojUntucHdcqV77a9vPfUwvAHcpB6w3YG8hk",
  "key15": "3eNADQ3JjVKGjLxRozkfuwmgtYcMMosAvhUNjXvD2v7yYkDWziURXZnCTNVxzAHubiDk6tuBjLg7kYBRgW9u7Fm5",
  "key16": "4ijdn2szbKEP7ftkEWuVPHT3QM25ttmSExXZQ4SpB2hsbCviHAson8BtRkjmkMkhRmRysQxfy2GgpLXdhqmki94o",
  "key17": "u8kfZPJyU1zzv2KwspEw8XtinnZdxxd3cZY9kGigBEgDZWa4s1jURtHfPEazhBgezbyZJ4RrcvtcyY3YgRvaLcB",
  "key18": "5i81pXWPqBHgRBSyPQuGLF9pkBnPTn3vSqDCaQK5ZPUGymWtkWoFbREhtq31j5zGtq5afEkcYQP9u29QQkhtozkp",
  "key19": "2MXF6T24HyKZDp9AmSedmR5thTQwwpMeXvvQoNfsQFj7Ttubk3t1PniNU4xBmVDNdkH7RyZAefKCqcooR5XfwFEG",
  "key20": "2JMAFE5K9EDyHQUoG5HfF9yw2UsFfGchPdgpoKicMFZC4EvQN1hjQ1oob4DNc4gTjKsEg1VkB7hshtuaKg6bmhwJ",
  "key21": "NgZzfw5X22P5Uxet5WMgxSz4rRMZ3kAUkPn7sX3QujiJ8dek7xcwjgJqKntU7bMXoCfWAbhpfnbmmYRpY61UrCy",
  "key22": "3cgvRe6dVSk7MSFnXMpvfeYT2XqKkRfRpigG1ie6kgLW4Q6NY1KLJJ2gdURn9fTXEdhXBCQFUxmpZ2zR2mNkLP4z",
  "key23": "J1o28rfq5xpJq4MJgVwWAg6EgMaGhDEkxok8DG44cLJN7ydUE1Xgoi5XandxgcbjsL4rWhPfswpUuAGcBs9p9ME",
  "key24": "4N12YTufRZRpQjkQZavxziRKXfALCizasNGQA5ztnAf6G1uGHe3VEYu4FnNVUhgVodNebYfWB5z6Uuqi4B8fMCD9"
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
