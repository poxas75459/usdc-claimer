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
    "4rTBFDCvsJ4tSefeThEcV9avyJSDSDFRzySsSi68Sr1RFScBRpxhTfb4spNX67yhmpjBLjDy4B3U9yNZoNmF5f1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWhji1V26MagtnFZ1BrwSB3jc2A5sVCyVKx3NVguaMMCSoLwh56TJz2sok3KwFj6k9HHqjN1HiHETEiR4VaUeo5",
  "key1": "2vaQj75sy9aZxqZ1EA5D4hSbyFhBV9AXrP73pVybVfJDfXfoNf6Z5y6tQRqseFmEhmG9BM1gJkjdwhoeQQM2SiW8",
  "key2": "4xqHVhTiJQBaKWQtYsUo1Y31VroHsYC6yi33kThQGxKTXyDQogVm3JrsqtpePjdc7ToXEJYASmrh9R94wfXPTJYK",
  "key3": "5zDE7spkyZAEML4EB7cVDdgQWG9tGSgZ7ahdqncp6a5RC5gPhsbxxP6uYGCMs5Fm2GDuJJYMy4HbS5jDYkQfNvYX",
  "key4": "5c1kMXrDD7CPveh4GBqz82Ve8G3zKevX7bVyxzNaVfEnPecYpyLLXxZTwc7U27MEycpMrT9G4V7cWdGph86NnqR4",
  "key5": "19PprCBoKHe6QeRRgPR1gjPhuV1yyFAjTMqsJ67o1LGQN4ri9Zb6mJKxLDEsdh2eVFK4pZrLdy4ueMm5WPoysTe",
  "key6": "3UKzSpQRcMCXuzScUPbp4gy8wuEpjptk2uMoFqg5zP2xiHjYqfcuYRMpFUdDKkptA8VDJc3jSWBfPBFftbTQPGnP",
  "key7": "3ybaZeoj5eTK5sa5NiY5gaMCw68kGuKkbksCTnjg2Jf8spG5xrEKj98X6TydVF96EFr8UVSYrS7VUgHbr6K67kE1",
  "key8": "21Q3p5DDipM3N2XgHGSatj6ysuXXcR4ffXbWm99zDDjtwmrHs2xsam7HN1jWNUnjMtQybWSzDJD7sjYRnkvKVhPe",
  "key9": "o247WPkfbpzCbUbkt627Jfmdb1xedUuLgrY5CoDTJFM95FukeE2BbpoBEKDgy2fmYJYgEgNaTHAnGzdYzFEF6Bs",
  "key10": "5TaB9H18MvofiJnTGYH4nHj7wYBVttfik8RRfAAtKLiUHGJGsSmu2Qe7mwFqhBdYvpByNEcyUnV8ykVwX12oF8W1",
  "key11": "233Bj14gDzGKrZV591ivdiCqm4EoixPttYogY1owDgm4yNFDPp8nPahWk258rVTzwmFiDgEtfCA6Z3zgB8K7LQ9C",
  "key12": "3iHnmcFxA6EBsGDiir2LYZsPMvekc9nuAbfpuzJn8McQKh2MgkkdThmhy1MjhvPZEuTN545zy3gYYTECMjwydHo1",
  "key13": "5Qf28821royKZuh6A1fuWEp2J9DxauiXL44PiRwvYK38H7fpwh5jB46JBXXafmHa6Nz2nyGNjvjRhK1xHRbZ83WR",
  "key14": "5QKe9sDLC4euDPnmzf8Q8xJ9Ka3YbQmFBVZXRjUaYvhj6LRdHxhJwdBCcTtvZPyoy7chvhrvHsv42Lnt95dSsSaU",
  "key15": "2eSQ3EBuvwhcgZWY6ZX2n1Qbnqe8KED2Eak1ZUL2deZG9orMbvv4a4bB1JNnMnncrWLpwYUvMwVK5ZW1EFHdku4Z",
  "key16": "375f9CEr1tUeMZdxqWFeuNKDpw7tUfeLyUN1bxaiEwMFU8XNwA4TGiJGgf9KRBix6PEQBbFmzaKPHzADYyczhzYZ",
  "key17": "5Gd7kGvHjzGnAzajXbaJDEpgr7TBuLhiNY53w1pFaZjDzus6x1vHJEnVHydQcj4RHHJnsuovDZLjPrHbZpBbJcKt",
  "key18": "46UZjTpHipT7w5PhH7b3hBn2edQcTAxiSsK2qbZ5oS5H7zLSK7HtMvZhR3DMRiP8F6MAco1etaVNt8UKqFKGFzy4",
  "key19": "3qNhqsCBP8VCqe7Mm3fBz7FycfietijYXAE1fqXURL4fae8wqVRLgc4qeu94czvJgQEC6g4TepeMFx8tMuJZiSs2",
  "key20": "5v6VPQKcY4LTS1vnKePr2NgvKyyVWGWjfx6GbWgCFT6w5Ytg6DFr9cNZJYssoRSC1kgQk2roDownYEq2VAKh6QAm",
  "key21": "5hbr6jxKFv42uYrY4oicmcFnTMF5jSNQvEbX6HNxRdswA7Vqb5bVSTVrVdx2PyAo3BD91WLQojGSXVZSYsKzrxCE",
  "key22": "h74tEnMrcjpHzyjPdhWXMy6SgFte3vvJXDA2xrRxNYmprYUPXnTDKVNKMtd9jJgTJ2zaaoYRPC6MRCyZSjNfZEY",
  "key23": "24zj1ckbU2jkJ1GyaQhCcAbfWRAxtM8QZtVY8NvEH8eatZoeqKKLDiNYziyhU7VpF1Ytkr7rqfB9SCkdxXrdqEM5",
  "key24": "28qtw71kXJarYKAxUEsF7fLViVys5BdF5zcTqS29ecTPwaXkzgFWo8EW11ZsTKJGRH457N7wjQ7B61QBZFFsyBTm",
  "key25": "65aBFA4AXEiLDc4d6uwvk4uo8idUbW9ptvFYj6xFYKQtdpRoAx1XgEFSYnyenx3thaBPKVTarjXwRfwwU1YjMPPt",
  "key26": "4g4hR7u1aS6NNtysTENvhEXwfiG1onQkKjw3kBjZQpj3FPm1kRQD5k8kaLghtKppL8NCLo3e3ijavKmPaBhBsKW5",
  "key27": "z1qobbiDh6d354jaUb5LXYdxE8UA1vr78Rd8XJpdLzjNNGaHwvVmRpZymMWWrgvmdj1wTTaaRxjpuP243SpKZox",
  "key28": "2V4BMAcjmFJkLEdXH1MBX4CdL9xa749k3NHQrAhC5aTXtRLbRXAAHxEcCH6h2VzwCFBugnkChvotJnsRcv3wM5DZ",
  "key29": "64VjKHQBRx7jrFzFG1aob6xnUk8jFs8GQYDL9U6V9Q8xLiVdVzJfTZKTYHKD5NB6vrJ6xG5avg3kYgKnvZ6T4mKA"
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
