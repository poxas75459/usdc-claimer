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
    "LUanraAuiWxyxVFxx43keo3Rq2xHU3jvp68zfXkNJTA9f1jFbgwq6JsYubMiRRgGRD1oo7uzdLCJDYiH7KDXh6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoX7MYVMY1k44gae4tuTtSJotRraJQsLp38hMmGPAx8Yx9SgcPeV7RQPbKvZSmqp3d7shSuYWS7H8CJbvy42haS",
  "key1": "3sif5qRgtoN8TF21QKgcD4HhzVZPWRGVs2qXcPue2H6EVvz3tTZXYQ15RYFMX6cLmgihDHfQAq8EYkFsKrmbLKFT",
  "key2": "2hrLfFzPrzq9ZZFf69gkPt6DQCY3vexUXHA84yR51JikDzN7Scgd3fbKZ4MpsAnXpsVnWWYqnLMxFJLdnqXqdWNz",
  "key3": "3yhhwXoCdJ6R4wNPQeHRqeC5vLwH8PDyxR3svgJu16TCiMF8cFHoC9GipDo86JD5ZN8HbQ2XZ5XHjc4UnqDGkPt",
  "key4": "4xwFNMuum5w7BZM8BT8MSnkR8gNYKrrbGF9sQJJD4bfzscKTPdkLoovufAKXyjnC9VC7xZcKkDnLfcRGCwmrvWDH",
  "key5": "4SYHTp6isiHjhTzxPpgGs5hBaHD8vhUWB4yfWy3YDiE9VgNa7Pmw1XpihMsVWnKNr69dHgtVzYuVXKMpoKqMVtxG",
  "key6": "3jEsVi3zEPuoHgm4YX1TumqHRLhyAfJxqcH8kmNtHbp8xxFbib7HAoD36KaufwQjdCX4wsmEAhL3gqH1jQ8GV4WM",
  "key7": "386pWH64qBeZyo7scW2KVkK51LL7HiSwJ3vNcNSaac1RFSy58TETY5GhmgqC1nCxXFqyxvjK3GwkGX3pGtWzULCZ",
  "key8": "1ZdbwypuLuVa97NEcjNJqr8gby7LcqUb7JKZwR6uowRgJqv4EV3BvNpzcovuZFc5JdC6WAuEtGmywxJ2ZZ5h6Ko",
  "key9": "3HVHNTLbzn1fiS784Uf1nU9u1sh4xQ2wn8sKmoGWW8zrgoZgSJ3ubeNbFosLDQet9829bkwz6QH4ZhCuRXTb94Uy",
  "key10": "2yGtr9FMSEyt1q59hpfets83NdzqYKTwzHtuoXsWb9PWWL1SwUePqeEhWBkLuepbE7jK99X5N4RXGjgcaSe5rPsR",
  "key11": "4qHywRtuJMMi13VqAbLJ884yv9dKdvqcSP54jPNmoaHyBuVVrRU3s1C3m8r7VYdzTWBmpThTh4gFqGE4kKmPXk3M",
  "key12": "2W3NLvfNwDukximDBv3Tae6kF9Aos3tuUxKqK5TqhCQZtuZqBzubjNZPzjLBFxhpn2TJFP5yPQgRHkFQHHmrRG8m",
  "key13": "JoriSQQoF3PqAVoHyHsqSDpeXL3SiRxskNx6AKr3WnnwzJRiEqxrBGMeWY9A6x3gqHKquwSbYbeHSKpPpU7cqpL",
  "key14": "2ymspaekB5KtxKYSTf6yANz8TtZPy2Bm3Hy42pRciav5X2ytUqNGJbXoG3CVDasheTRJ54PXmaWdWo7KAX4M276u",
  "key15": "DRZmtdisHvXiKMsLppe7h2AuBckHENk67Q3PqSJnW3hUT6py9BG1sodVfoBqobhdjY9nw6oqK4ThsaEngqDiaVc",
  "key16": "43daJRsDBGefiCxPLs99mVT7HSNQzGxTUBTi25AbZLD7Kp2J39RoKnUtosUXPx7WpCWQAKX5FFFSkLfuzQXHH8sE",
  "key17": "5Ph76S72obGjL2i1cdSyjJ6thiha5qs99N5mCEkUBMMzxa4wemrGe8Dpst2kk4Nw5b9EHDW39311WozNEmLPeNnJ",
  "key18": "5UcQbp2ULkEx7Rz1AQjmVSYYYxv1HGfGwNkp22ymxooMygySqWKRdpRk8ytDW65XYVN3ee8PTm2kJSPQ5ggNvJhG",
  "key19": "4eGdkrz8KwAfVG4Rx5eAvSrrJ5jhjrgrHRWipwkfcJsY7wCmg3bV5QQUXoSkZUTtr5JTTNgnXAtzkn9dcrPyETfS",
  "key20": "4fsZXQzSj5FbSQsKYvMxpe2T2dybaAPFkkUh6REegFTGgEeKoyvvALFfvegLTzJ5KCS1QftZbjS7sgi8X1jfZFgh",
  "key21": "4fVfuQ2P1chSCwQukDgbBFJPgAsA8PBYh41fGnMvSnRtyLQXUVx22MEiEr2D2ofGvaBz9G4LCwWw8A7Q8EeooxhT",
  "key22": "4FZAyRMe3nZyoF4dtSnHAprivDcQTNQQFkuiMGmPs6HaZcHB6MuHDHdLSiRRJeWqceLif7mxfhDwSvWLftWY4ebA",
  "key23": "66DVrsN9chJcth8ASSdFsZUMnBg7sfy8qC7XCKcfSMnh6UnfeP5q2yFYAmwUWjdZNxz1NvmeQD159t4rDEeQKh7M",
  "key24": "4RFqGxoo6dWSdbXmvXAZBaU4a1yEkrtedtqJruMTS9krN1V9djSLFTUEkssZRRVckT96Wr4YxonL4Emiqic6MaoJ",
  "key25": "2YdLvC77C5qtXdQWsWHevr8UYYHztwkEfRf1QE8EEe79F9XBWRsHnNp3uHRAgCf4fYHkRXgkDTGDWY62AZR8UmXp",
  "key26": "7U9YVhqbHv4zSmiBA4GZFfaJPVVvdBup6LsSn4D8ist141pGWnvAp7aCraM6tfFCLyFQArp39rtsgeonUuLZKem",
  "key27": "2nzL3aAHFfrAMJqZgRzqMaU4W4KVt1eEpSGHaKgmf48r7mbRPXQumyEw7iesbVybfUCJfATBweZdodGZxS1WGboq",
  "key28": "5LgEfE1p7nu77TJx3f8Q8Ju8b4tTD8p2wUo8hz9wUn3whhbXX4BcNqgJTjrdKTncBM9p5jvkKHTs2f9mXkuLZ83u",
  "key29": "4xSLhoaQZZYe7NMgV9MmxHo1aLXJiZ1sFDTj6HggjMTYeaDSUoskxu8Qhr9sHTF1TjuLQtXekoqRuw1tT2vvdmPq",
  "key30": "4YN4ojJjmEpvixESCWibDFwNjxwJZa19DffQGtitc1hYhNKAEzDgU6sMwkUBrvQTc9Wa5mcmbrXqj3yPr9H1NhBZ",
  "key31": "4Xw51dAbjZFWkfSL433QnbhjGWuUxagfM873HtfuGJQcnnRXLkrNs9Ssj35gCD1BQvKMsobTVzHzpGpwES9DBDNo"
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
