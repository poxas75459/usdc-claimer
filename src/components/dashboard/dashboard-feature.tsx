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
    "4cfnpGcEd5NSSX6xWEFWx95bVpSUXtojgxEs4QrCHftSgmfMbrkw3ve9tV3HGMCusxU9jFki1CAUjVDjDGektDnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5G4HY3r92u8cXxdiBK7F65EZ6CStjYMWgdhv7d3sLUeD6R9Rx4ezT1ak3SxdiQKGjx9BYo6BmvUPWcZsZmKacz",
  "key1": "39ApPr7ZDkfHH7uo3G7sFpgrMMY6WYnxGkcT4DggWPrtB7sCEGmLzgKWszECHUnPFU9Q1VBVSAFHym3kh4fWDHaY",
  "key2": "Eq3fyGeRpBroxjKNixZ9ZHCyy7WCveb1j7fd9cnXTtKm5gdGsZg1NPjudHAbjqCt1kkodrTDwV675ckeHTmzSY6",
  "key3": "5bJ5egmXHvpaZCeJiw9JE8ngpVp4KDkkYARexE8pgXfMsmQ3YZNRkjvBSx8oB6tc3UrRrttMhr9uY5adS6MZeMHJ",
  "key4": "4PX7m1QvLR3s8EYUJbr5qKUhPKPpdkczNcSAYMf3UeZVmLyvSmqMWsqE2R231nMsujbAoiiuSwaBfgMGs5CNegEH",
  "key5": "MXaQUGyXkNwE9bZwxLcxZ61HjAUEeq9ryPmQdWVVGm27XLCXZuie8amTGyf8PAoTd5uvubmvMEKMondjEVasWzE",
  "key6": "bWyqE6PtBwMiJ6TvYAUoGHdQJSRMqNa9TFmvie8ZGcatXPcs48nfKnppCXC52Kjs1z9UduLp8DZ7u9s9Q3Aw1gQ",
  "key7": "3G15VKYWCVDcSKFJcBCGDGWrYRqBY17C6bDuTitBZs18HFoJnHh3mGehoJaHf6eJkEzXf8PM1wVvwJW7h7qekiF5",
  "key8": "2Q3nQ7rKXz9gyDyh47z7v8Tbah7eRphy8fsVkYbhLGAdE8CN1ti1ytspoNZdDijJNCGcNWSwTgnEXzRauH2SqA3C",
  "key9": "3nfUjfWvKvREdZTRqVFiRPjUGSAgHDaZN9qjhFRvf6Yudc8m776YNyNQ3X3YzE4peJvvFr3FLTKnqmZr5Z7Y6cLs",
  "key10": "52pTrk1hud6KFHbTVFHPZTbfFRrzMMWs1uZgPTM9oq9DPaw2rV98kgxyR4A8tL5FMynyXzAaw8fo1u54YdS9Xs6n",
  "key11": "5KayQBv2ePtNVcMDb1of7J9afVjRsW1oEuBk9A1aJVzWutZ7UBoyS5UXbpvobxpbvfHZA1WYT5r9AY1quSqS9ft2",
  "key12": "5q5hZMaCjiTQiAA28mdx2XFMGE2FmJTt7cwXZyRfMcVyimp5bxXc4MAdkiniwbeCmfWEMcexP4zb8GbBEwr6yPvq",
  "key13": "569TgE81LQ5BisgNoPnwsWubUQ11BD5jyBTj2VDF9PPMDYHUroXvfjVub6kRDPuC8y6eAxyZbEpYKknaR84ZvKSr",
  "key14": "3Z8zFpficL8hHdgat9XNJXxTPqwQKFumvM9gwA7c6nALcrEDyTpD53DLugG1hBJyMXG6TS5nMjgAAjm1stb7Zeqp",
  "key15": "VCTTYJXkx3LbowWWZUUFrJYkzhqQho6WRZLZ3YHbPotn4Pp6gbMXPBxVs61dGbkL7NKCv3tqatvEi9WgDRb6ks2",
  "key16": "2cZGGjjNxvL7UhHpnmPqDu5wk1A5UyL5cqnEVxKUy2QfW8HJwfyPZfgtWSMczDoWSYvdDPKSsvwDWxnUiPx1Hrpm",
  "key17": "4HGdWjtVVqay5GxPUbYvZABV8sEswberZPP4VnWGEdqcjL4TNbWpAYjFGLP9fjvA9YcxDrHsWPPFR9qkFBjwXRTi",
  "key18": "3HCbKymzPPHf5ky5cedqHMp4grRDj4sZ7sgyXBLefkZcYS9bP9c9btGoSFXuncNAkN96bccAx32CEbNNvemK8NRR",
  "key19": "UCxQLnmrTajgxm5Mpb4Ua2ztAACCGbPFqvQ78Ti4ahUZMTyCtuzGgCMQW6DTDHSs78YBRKxh77WuXdvuucC5jZQ",
  "key20": "5t1mG1WJQB5WPSHxgFNKFaoHgQ3ok9A4uyCokt4THjMMyoQYukm2Bi4XC3GLWuFJTcBreKCkiUCanQWx9v21oqKs",
  "key21": "52UsGaVwuvWesyPeF7Wh4aKa8pnbGcbYSPENDBwq64ekTJB2TEo3g2xqNRQ1fxKpZmXKPKFVRewvactvSpWuor2q",
  "key22": "2nfpAMbdhKTms6XrnCzkWZjEr8NSTrGvbShGJxav8ju9botiCPwsHMXsZV2rJyonxrQXhAn6QdTsvAmMvQzLUSxF",
  "key23": "2zPpRDEVmUoresTnbatWHDR9CwRa6TQieoAqosedpfq3dkgTgsSi2L6pxChUXeSgP3DsnCrSKcnqLqngcqDgj1BQ",
  "key24": "5YBPSK3FAcZh3mEuYsfiPnsqCmhM6xS1tAbkXRv97Xj5xB3M7ffqswGQprv6rtehZH7svs97TPHkG7zN45pTh5yn",
  "key25": "3PWiVFVFAK2PneXHVScL4sB7hdGGJMs6SCoTRTDZjh6HGMLzo2wnz8QVTqeW6c4EN7rKxbCGDSwgn1syhPc1Ea4e"
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
