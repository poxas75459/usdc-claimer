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
    "a4HDMy32J8Ea2K1EBQasfWVzsdHnL6WWbBur2gy5BzjQNVw66sho5MRqv5BxKMgftVJCdVWSXBzJpEc6W9asZ9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUxxw5MX4zcqmu1wcn8S8HjLrHe4LoMHr33gsfUFNaJo2w6eje22QHkoM7Uv3X8JfxRnjWCqNZPJxJtkcsa8sU1",
  "key1": "3uRtgJgtqHqqQUnsGeVUoHubgACGFaGd7JeD5zcoWcqpMXv52VhrrvoKDGKdWNvyH5VJtbsELd1jZjstHt7sB52a",
  "key2": "2nUXViHSVkCyngBxterYSdznzad93yafVBYjpJnVQ4knsZX7Z5VweFPS9z4CxeP5J6Vg4woEAynm238wepuYVxvE",
  "key3": "46kxyMWiaDbUYXVuQhtwgMwranKLy1wxEc56jj7fSRxgR48gzFHEwvsypwYyiNeVHXVBho94cBzkaQFqiorkeBds",
  "key4": "3mwo8E2qBkrfX1P62Ef7JTHgUsTJa1qSMaovv7PwkNn7wjnKn7DtthYB6gFa1sSyLzYNANDeqRig1BP8XB6aJVe9",
  "key5": "3WYcDhGnf8j6w8J3oCujXXDj4JDB8jyvGkV2Ynyo7hY7YhuHevUPFVyudc7dmjgEQxyqHLhMkDnZN5BWu9BWeTKi",
  "key6": "5hFCiZvGt2dmEndwr5k7VKwQ2D92PnPWvPow9BpAdg4R6Tw4gvfHoUQmyy1W6DRm9WTZpdjPcYVKjAogiWt9zE1M",
  "key7": "pKXNTT5sVVJzbBoavpY6GxGsUsd9XWWRi1RZBxTK5R9V34iZSJu8sRQKDaFPr7KmvAAoQZK1xfBw9PcJbuY7kAT",
  "key8": "2VrKiuaD2y6pvPy7wfugoPzhUNAHVYwEC73XPz7NZWW5K7bXTQwH1G4S7UQHnQis6T74AcnCGAoqdCYrNQTs1eZT",
  "key9": "3DmHqiYcLcg3HnfhTe3QHpA539ZHFPzHcTNqUnsamrt1rL2ZMGJPp2rqPBD5orkdDo4x9LJ79wZZ6jR76PPQyhgj",
  "key10": "5XDFSEqHG9WXxndD9biJ5e8YDKzcptJmRxeiqXnMeDQz4F2qmYvHBx9ADY7HBz2QBaaRRwopiFPa66Chd62AgUbm",
  "key11": "3ajfRzUtwfLeQKq9RBBnUhFHAcyHzzi8zJR3p3QBDNTfXbjx5EWkG86tDjQM3x5qb9fhw6S58Wxpzm7NMiWMptKx",
  "key12": "HrFBRU6pNwLkZEKWp1nSJQKTfQpMtjiDTkhEncKwfoGYL5VRrkcM5VYfaG9VQaDnPMq3RjeZhLudKx9tUqvJyNm",
  "key13": "5jyRYMkDhWffEcNcVoJawGUoY7L77LvxuVehqvbYTPaHkDQMzvArpdLCMqxRM6H67KjKev87S6FsjmPNfXntCpGg",
  "key14": "xniPnkFv6WyjbJJu3QBY1NiabiJUShdTijoMLAqpCdkSb7VP9MLyNsVwQYzdsJwWiF5p8DZh3fuaeUgopRQXNPk",
  "key15": "72QT266NhswjMGkfjSdUxnRTWZYg23Q5eHvUK4XqvgXkZjbBXaNth1SB9KUkf8DLGJDtorRLS1GDm1QuFND93Q4",
  "key16": "4GWFHSZvLTgmVA5S4Mjvg6KMrL5hjwTA2g4YmuyRwtTmECgQqGsBCoWHbjSuN4YXXEBSwPogQnHvGDexEoWJSWKv",
  "key17": "3gNCVyXZ33pZUA6UkjWNHeP9eoBwHR8r2817bMbjiD55QKqeMmNGRaZhHxZ1tzd4jPjMPBkRRVsMA5Q2w45AoX2Z",
  "key18": "29LojCdkgN2batzrGTeTSTmGvmu5XRrugmuYcsPwW4x2f5tPpm9RvYqqiRKbLANcFGnqjK4VBfa7YweabPkG9DQW",
  "key19": "5YtQQt5Ct1cc2DyfwR67CuiRpRYw4xSGzmq6vNCEfVBHKQbdfGjyti313TBoFE3jPGLf7JzTeW4yN7hE6krdf6Yw",
  "key20": "nfLPLpmt7Mvfq9L8o1q9XfwMFqKcAfwS3Sk4ZdMqy98otPtiR7QdUL9xTYXv1heKLLEgRAF6AKsPLHLnoUKGpZE",
  "key21": "bfJX3j94iAiy3jrbE3ECB7rGiriG3ENhjecY7M5Yu5tdn4y9G7EUSUaL4f9jsvytYqbuVFnVaiAEHQ5obq7veue",
  "key22": "TH1EdB8dnNbAN6GY8zZgJfhMFEcYb7sUyEy8BFAfCXMNtCYNT7P29McnRZHj7GLFuuPEKyRtHw6vkb7A7Zsr2gd",
  "key23": "3DFj8bAwY2h1GYNxtwKtSJJ3h4eeEVWaRP6qWpSRGNiqYn9UwZKYa2myoUKXsC3Pm3UYiAVbC8SxMKaTqb6H1Pif",
  "key24": "2YXEazpZE83Brfn9RS7TejnmLNsoYH44nERKP8jHDbFMwW597Uuuikqx1fcqfBYcvqwmBK7z9HvvPKgNME4MVUQk",
  "key25": "z7xWbmHSXnUYibYYBYk2rd1tJkgi2ZWYAGRTe5YJv6JbXcjALfzM74yNXDCEXAKJ3HFztNQpYjubznjd3tmZJAN",
  "key26": "oRuZhxDuaqE6LCaCo9QCnkbjuSDKoZZstFuEiPMEZdCdTyGoEjxxS57F8GUATUFpodMw8ewMZqDQWPsNgt1rBWz",
  "key27": "5mpHYTsAEoWYRsFoZb6ehpyXVwyxcbJKQUaobneLvRVmNtatbyDrmv8rBpCFzwA9iaKdatPbGuanktscMe6X6EmD",
  "key28": "3iuBcw7GFJzLEmput21dh5C7pHLDLHezVCvBUJHx2M599owM5JbFw5K8JmXmvEpGPQVK59oHLr5nyKini91vKcGV",
  "key29": "3EqJxC13gmyH3ZhvZrftVdRe2Hyirbc6LFGV3DFFMUAe4Hph6a5xigHLTTJTahshdRcKAqn2avtxb8y9FNBn1zqJ",
  "key30": "5H4ALXiRoLpAEfBnsgtQ5WjjYo8KHtN4LCWZcSK5FFxbZdauuLSHrg4obws4papeiKaesquYNwmXEogrtveJD6a8",
  "key31": "5PoGUbChFvisCSdCBYJ6DFUt8KzjdJW5NuyBdyw7Y8jX73VQjAFaSqDfgx49EECRg6N4BDEEJnxpXZx1mTvjy19T",
  "key32": "XGh4LAHmAHqoR67i15ApDCsLSpHo3EthdDHgtwrqNNR5aXnFJ9GcvHSyaokFEDAxCH4x1h7bpgWi644dzPx7fpT",
  "key33": "5y68MeaebK1YhjZiDEXPzRsKAbg792AUBmCjt8pK77gVpdvwyqDq9LsD3GyJFVLu9YxPHLeQtRJHWeq1u4bAv7BM"
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
