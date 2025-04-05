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
    "9y7KxUxTgZZFWiXwjYBGF4iTbPM87npdaWq4H9sBscSwkJEBNnF4RZ7s1VYKDfWBtU61tW5MrNrk5h2SbSu9YoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjEGjLX9J9wmj3EQmVBSFFEEzv36XdAuguFfGLLaXj3JbNJL28WUntqng4SxgemmB7Q9geP2ew6zzKxb5MwQi9E",
  "key1": "3AES72J2k38SA6w96cKcW4zMUpcbD3gUofFHCQF2F2Jpu5UZZ4N5mtLQ9navQpPNt6DPVigLzexaU7egpLzk5QA8",
  "key2": "3iK2de2pta7FLWqYEUWDqFj1WNxKHAKx5M1TFkHBGDftB3Ctx72J28CYeFoNQSguxXF3B8c2EJ4NDgb7Eu6bzE2S",
  "key3": "41EPhN6vPkNh2Mr7k54NMroCpTELaiu2Q2me1HgQgDeQYitL9ixY4j1SKJTTb5qcegMdALofWkTwymrAUtNbcMJj",
  "key4": "4H4ERAY9LEzaj14K7xAAGwejVZMKTBQ2htQnStPKYeDvJBBTkjUZJPZWBgrfuqzoeBdRYQMHBfk4vvr6FentuPXa",
  "key5": "Q9n7GCSZQ3syANH6Z8j1E1mGJo5iejKAbE1TyZcA7TYGcuAaam52A6DfpnPK8AnBniFKshkQuMKLeYdHsyXLWLz",
  "key6": "2XY6nyZ8xhY56cpWBPTjbZj1YyLbApPUraf5v61TjXeCRDzDKwUCDNUDdoUnpQR7wvBhb3SwvKM7Br8kRj6hsnJJ",
  "key7": "43DsjWwE43JcCEqBdxDFgSiP5PUdiJQJS2WQ6GG2MtAd9PEUfjNZUoME5hpyhNkTyFo99JExwS9tBZdszZovtgD9",
  "key8": "4LYVMwvX9Hn81sdsST7kubJHqGCRGG6j4eMbcQWBnHLVj45ScnM2YAddb3Ds57ifeYqfASNiPsCNZpWpj4jn5e9W",
  "key9": "3XjG7ZZ7tDs1GsDACQkg1KhjCBTMVj1aNvSuTHgcdMTXpV29m1KgLH5RkNFeVpYCyAUPrtmp8VbL99hgSvtXp1rC",
  "key10": "3bSZvxu5nBGSAKx3LAR1k5joSZyDw2QFhdUbi3pcMB7KcG2b3hTjUiNDuVAWDXG8r4NuJ6YqxeUqZsH5ErnGXiP3",
  "key11": "o23UR2fze8BvqbNR2Ugf5Mf4gqMUoBS3vYMzJPkydR8NKmEQBjca1DWy7j6hdcHRRGLFLTcDXVvtVbwcgAUnCgs",
  "key12": "5ZR1fhxBibbWSu4NEX2Z3Hjg1NC1Fh3CTNejWj186sr9X5a5FqjohtDWqPUw5U3YpAFYg1XfziHz3YfeKXLGE9me",
  "key13": "kpEHS7QbuAp7dpUqKJJHY74G45SecGwTBx82Ajs5AMnyNL96ETayGRqF6xQc7Xxjj5D2ozveotJ75bd1HbMxxtV",
  "key14": "3mkZzNVKUwh8NfA1pejbMwpEV73zi6qPyF6nUGkFmkoESKkmZtuWqq7wQnZcY3cUJZjFsbDCbqWZdb6S33gEQB4x",
  "key15": "2Pa7FXAYZ3kB8Cj4ZP5dfwApvoLGaghtQhCEqbibbU4XhwMb9s42QySGXx94V4g4WLJ2nYfQKafP7iphKF7TZtrU",
  "key16": "5MiX6WRrrP2ZUeZpVd3RRXjwZ8uYdJxMpwdrea9XGXFA6fA2K8B94NP8oNWydD7a9UV1BMrXzTGJ4speH3CiVGWR",
  "key17": "4Dat1zfsscuAAH3kkSPFffDMKBeKMLXhsHFwHbj2HdeeSQnbeBpdDcxzC9SLKS7k7Awtyhk5SPbDpuu4jfMoMwB5",
  "key18": "gAwsBQ3NhG7x7QymSU7qAiWxpDBLwAX9DFBFDTJXCNtULdWPnSX5KUaAKL9hiZEE21ezt9BQwXGLyfiqx6vqt4f",
  "key19": "3kKABNU2162y3V91AiuX8UVXnunCuVcge89XYhWC32hLheYVbqsr7SbhmG6s45s7PLPuTfGqHjLAMyfn2gTvq3Qy",
  "key20": "5ffL7qfA1qfBBHUZqT9qLzbfCc3BhZL6SCi1LA7BPiT2XokwVzaACEMRmbw7rxMBWft1kfQcVWAowaqAGffr2zCk",
  "key21": "3o7mLb3mQoAAw6AaP28EioBczyy17y61ke43Y5KymqwRpyXz5hndmLvSBdgvxtjopRk1i48kCC2vNNNUDPQVmr5Y",
  "key22": "3Crak3zU4qt7grtogyM7PEHB9kFnswwWWSJ8ueNJQFQUiSMhPqrPYgoSp6jXD6Hh3XGCj9SpvPYxrfnEoutpJyz5",
  "key23": "wmnk5nD5WJVPchjTUy8SKaYKtpqFEe9ZkV2UxNopLSE96x9oocVx9YUDBVuVJSMb9kjsyyqxy9iNwHarX3uHAqd",
  "key24": "3NXB6Wdv94rG5DYwRvfbgs8HKxbRWAtzBKdHqq7fcLGzWz3gVh99s8hX4tv1n2n5aqL3YQyHJWrJyhjmBA7e2HWN",
  "key25": "5eoDYahfe5Fy37WYkrEh2PYsqUyok9KC5fr6As3HJfzuMYof247BE879bUNK241bgYaGe6B1KRVhzu8LgpT2c4cX",
  "key26": "8Mv9iakLd9TVCVUJd7AHKwTn7ZG7D3iUHtU3izKwZfHBH74qwdA377chfoqetwgeb5V85D3DT1pJQDSCPoyyKqZ",
  "key27": "39iLrRFiQuADGjke1sXhWMJ7MKnuBH5bGmHJ3s9dnkfTo4jjv3okwZJPvTdUGELZKFGaDnYfGov9BKNfw7QbpkXF",
  "key28": "4V6Ff74G2ZaXcJYT8HnAKVmXevfyocHQbgXaSjHBm7kvzY48LXaPrT6LPencAfYUGXcRoEN4RcqPoxSKL1FxELBa",
  "key29": "4cBBAj1ArtF4tQz19mQiokZoaxq8Gm3TW9eJMNWezBLcZdBYGEKMg8WDJaq79V2gdFhRjZ1w5AwWKnfhXri3TRLv",
  "key30": "txx7WpUL1aFs6JRNShv49T8k6nHp7ZmkPPmsqG9Qz6yk7qmjvfD14thTNwM3E7Egfe8ZLQzTKdNNYdmpKEmNuHA",
  "key31": "2QmZiMx7fG3kg9KEVhDVKjNwNn8dUeSuSaagczsp4ZqKgne72BS4EFdhVzCpuKWGPJYx1pDi4Z4KtqiX7QuR6GyW",
  "key32": "63dUTaUmY5LPip5iwS5zh78HPRBcw8kQhTCTMXUgXK3tC6UEh6Sv1uWfTT6qtAHJdABFY9AQErg9HZBC3A1MyNxM",
  "key33": "p9otkXhBK3jgGnZwEP1Z1Cu1dNT3dUUjJefM74gCBJcyunN3bz6UGhjwavSj6PiKob5hGPJdKt9UC4JoheSituL",
  "key34": "5LBBFGgK5nWzLirZZS6CxesebEvicWAeZKyBxeVPY3uUWu7eJcR94pmxUWDKrLLJnZB7yRTcQe1i3JMgF9Fo1Dmx",
  "key35": "2iBcMGeMF5ES9nrieqXkqQEVzFRWSwoBKzLJVcG3vYycBDZJyiJYVGu7SXbYwTsaSMBQ6h8VBLbSj4hFGNRUv5dc",
  "key36": "NqWEHzFFZPTkZY2xc2unTXstTcjgnMsBgU38YCLkKBFFVMaWxo4tD4nkqiJpXau1sKDLBUmSSV2LKqsxAT1fyC4",
  "key37": "5FKNbM5QdS2g8eD9w8rQxFHpzQXsBuCoWi74VARXs9VhzWvG1YmyXuWPu2AUMZe6TwtV99GAvJVgf2Z2txhTQ5dS",
  "key38": "5U5stW8Bwsxcw8Th8C9r2Tuq8vYrW3JX3rSEpDz3uZqL8NXomjPzLzSj3HNK36grXwPu5oRFp2q1qgmqpcaKXaW1",
  "key39": "3wBc8fAsWecK2MexsnD5R1P8JwFn2arJReadrTFd2x6yjR8QbNgqr1Pqi1sJcs5kSWZdTh8yYuWQqyt52J7mCK66",
  "key40": "582APERGfUPcqC8mGCHoUooMhCZYqieHXoJps1BL7LvL1fAsJ3uxD4fak2UJ7r52GGKGgsu9FhHCGpG62nF6dhE",
  "key41": "53gr9t3hWFHo8QzwAJdRnwSkDVBJvNbcGMSBYPSSx2XbsS26S8SWReZgSZxwQzXwTS6jDxMZDpRN4QobTh7FGrbb",
  "key42": "547r7oEZcqpnU7RgcRK1oFBraL3mcgvXJkXPZvgyukVQcfdzcvPSGpKWBrNHBFo1jJURbhpWujkPAZbDReAZWucv",
  "key43": "RssQ3iojjzgJj5zRq9NEjyn9WXwzrzeP9p24hVgBjrfSRmJ8ngVGqCGUBJ2coyW1f8Gb6SFGkN2UcWSsKu4sdA3",
  "key44": "4rPHCkDEdnP54kcGav8qCs1rg65qXQ3wsnMaMDZu2cGmoFmtqQrcF7G67tDm7uBagBa5kWTWjAfSJppq1bu3aULp",
  "key45": "5bGCNRyHs1hXNhkwKcKtzhLevavusDDc6rPCBNQy5Nueabft2jyBkc1hGFq3VBKVF4HZzBfodL4wRfo9oygKqFFC"
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
