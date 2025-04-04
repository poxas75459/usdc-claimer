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
    "4feoj3d4tq1wTHc14JUKLAvhpZ4trFFLJAvfS8bM1dT5h2ecKUgGHoFnLguWzeRz3uqoRwMeoZJD7iGnJ6ihJzep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wU8u3NQ5wFetQEDTd79sr4Ug46gzkTf4pdAk3YdcTMLfLHRWjinnNbzyeLZn1RSkcNvf1ztzsSTHqvoppDKeqfh",
  "key1": "5fFzsA3nnQnk1e9vfAQ47tpxnmb2zekHiDskUGamvk4PuKQzVb12ddCanhmJ7DNKWgxokT3Fo54tmXaeZwbM8NuC",
  "key2": "65nQhPcbxx3sun2wo3AEgPSjETo3HgjJapUwCiBhSe15JmphXkh9Fxpat4Ub7VK5F8m2FUJbtjixndYxv8BW2WRu",
  "key3": "HNpbUXjQGJT2dahK5Bizmw4Rou79et7G3QkpMpRVLcUE5ct9SCtD766wh3trfX3x4akpBsqb1kTQZjs6VPD4WkU",
  "key4": "4itRN17MUQEBsdNt5wp5Jn241VNaoGpU4twAoVZxi1TsjRU51gHcPC7L2rWEbmBXV5MKNfKZp8GqjeB54ZyRPSdS",
  "key5": "38xeXVfPeQhavBhKubYUV4zhETbfZBaRymjmy5iVfHnvKpS2JwNvvwWeJe9HZ1d5oXHTL1gF1QdYTTrDEJrPD7WB",
  "key6": "5uTBfYTg93MHTk1JRqPTDkiRSPH2wwGAP8jmqaDvMuJtEq12s6RkMqEGGBjb6Ssircj6YWweYDUSZwXHa5EoCcbu",
  "key7": "d1NUbH6fRfoF4tDsbKtkHzRo9e432CAdo4bixmncRhkwfUJYrBMrndcMHRaq31ZRKaz6ifHctv1HJu7PqLfeZfn",
  "key8": "2CaeC1oJQk8iSiSEShKnimsHToDnHaic5hbbJm9byG6MzRr9ustcLyDGYCYNkFUvpT5xexUR8GsobKRCgjDWg7j4",
  "key9": "5Xm3QFvptCi8aXX4tZX6j7urbue8wsVEpMTk1bk86WWQGppsU9g3kG51wwfN67fgG1VyKbUKcbc1WvpqxhCoCeeW",
  "key10": "64mrBT73jTBpH272fjbUgDNkxitLgFd8LoBKGbeTPENPvArWt81KYcuqjvVs7iWeM9DHw9HVac323NszDZQFK14p",
  "key11": "3auxh6J4zmhdYvDgXGYkBG5MiNAzteQZtrAYjGuvbhBohH38v4PqdSbGGuGjYrgna6KZaZBLXUBrv6VKsNwnVuCG",
  "key12": "22J7AsUizgULMpYzimbsbrhoK6zUsuSVR2VbBJdspVvSDbM53sYea3xPLe1dD7XwJsZePHmPMv7mdDkjWpWnwpQe",
  "key13": "5yCuNEVEFiBWLLCVnCqUjkRrE2M19dB1cwrh5GwMHeTk4r8UiVoqqmsYGL8ZVVhfXn9hbwDdoX2uUpk7kZTYcyRC",
  "key14": "291QC4rJikZyXoUkQKrBif8TebYCjCxs8QsMqbtEbWN7S2DiBP8X9EiexYk8WFcEDvTe3DUe94kZqJUieXQZsYT5",
  "key15": "5Epj7Zsn7C7NHHet5YWf1r31hvwX454a5HANTSQxesMTbCRZrp1jUVQSA3AJT8moYr5HSgviMqsmVZfrgVpXSNBZ",
  "key16": "eZZXQaNdfdcmoARHct41iT7coMWAbnxp2a7aXTciL7KA7nP9v3AzeNgNiv2ZKNrSyMFqtRqMCQuSkzuUpHDP3hN",
  "key17": "4uVEA9ZhqyAFGt5bEbT79DLxJ5Jx2xiazHHo3wTMwVwo4RLwr91WdQoqZ1Lf9jsA8qhZnpGoVX1zxGTJPyQ4HHUq",
  "key18": "65d2GLwfA5xiNgTWnyjDpWBWLUaBnycfVDKzUJWYs49sTtVWWhBDh4bSqpD8fthxW8q6E6Nk5qiNxp9Xonc25aBp",
  "key19": "3AVEbTfUY37juSEKFcYb3sMYtqbRQLGXhY8hACgcxvgiabCPRyEcxXac8Ps2vd22fftx7RrgvFF6XTkdQ2SPdd4n",
  "key20": "3Fi7w5gh5bUyzotMyFBKwgsoy8ntsnErKyZEiR3Nj3nPkAZu9Z5Febj8AmydRqDWpNcfXi5Xxdf3Pymb2ZVASmQY",
  "key21": "55MR93iXwfXSXbhKwDsujCeLqNA26JPpJtwWA8g6vr6i7iVA3Bp6BXrxekhEn6H96Um1iaNWPtbeq4gHtERr6q13",
  "key22": "BQzfhNR62AUsY1mm5ibDDSqQbXarvCn8reFthWmnNo64zTZRRY4r9ypa4MmLPRUDB2CPPcK5iHj428SFH5zGnzb",
  "key23": "2GJ9pfS8ymdLKTXyznMB2wkaaC5so21zHPg66TeFCpGw1wWoBXAzBajDp6pmbs2VRYbkbAFZr2zVdZgUn6zYdthX",
  "key24": "3WeyxyoXz9bRoz9xzPQqAChWVUxvuP6jpH31dUYTWdpRrDbvwwKA7V1hsGbg2MNnN7th3KiqoCXWm45ztPzpGjrZ"
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
