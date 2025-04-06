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
    "2H2WHsBHpvora1z5DJpZTQmE2z8ZHCGt2ZX2K8P2pezf7fyLu9ZURSUKkyK1GgNxMp2T5JZqHgtQsG5tUVttdSGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGA4crau59ZAkk2SZnuyz4wKdqsXNqBg6H1fqNTZuMwH3JxAgs3JxNPELyignqZbgS727WhjYNNNLGmUjUqj1B6",
  "key1": "4fu7BPYnhgtz22Cm2ZqVpttN9pUthhHQsGyame2ek4STFcDFnbYMB4xY8FY89ahsgQTW9VC1SuL6bWTdWrUsgzhY",
  "key2": "5BKWWJ6GYKb648BEXq45MWNMyRtNrEKeqoiknZHEGpwjQPMKox9d8LAoMq8qhgWZmB3rb74CumbQWP8ipj29JRdZ",
  "key3": "TQG3MHieVnZTijWaYRJJk32k4Nzksu9SqeYNwAFcoXN7iPdZ3gkV8DLjZ8gSmVJQXNpkJaKjVdtahKLj4joEE7w",
  "key4": "58arMhcQndSVCGxzAXgiEfXNb4mE1bpF6bYeB8rWvHHBTKEt7q66ruzkRrPjn3RZLxUzgWocyxeb4vZvBazd8S4y",
  "key5": "4QjsLi7xUcbVTB27xH3tL52gMdxpJ8npfLHXHBG2BBxJvW7FYHUSFxa2BtU8PJopBovpnZFLrEHKXLKvTZ7jP1pY",
  "key6": "4GYxLYnUixpy44mHTvAN5gY3TxxN1XeMhzKkwBKfkybWctzwB7PFMq1X7eecENuxinUcvZPJAyAQxEHvQDVkpg1c",
  "key7": "4fqVAdbue2kCQ9DPTTfeFKzJL3FyC495VtrmTP7Hb9qXiT99ZeUJc1df1zk6HQbuZVx11FNWW3rb31MiUha7F9pF",
  "key8": "3YJSQnb42XhAvUsiN57k9EVVjFx6YUQfqEQn3cnTVuitn73D2P2FjNMzeYMG9ikLbFD3KxMDPT8Fwg9xUF8zpBMR",
  "key9": "f6qTuSKdrqARPrMb8tSqJoAmHhdk3GEkoWEMsuirpw69tvGmorJbvSVxLcb1fmLMtLKpd5r5LiS8i3ZkpY4p2KZ",
  "key10": "2Z5HauG8ay8DLAigh276RxEcv5czmCnjykwjRGTRkAAV2C8xRUfKPJ3tqqstRa6hZjq9ZN54uFpiVrXS9i7FEpSH",
  "key11": "2CAy4h5aKwKmxEty3QwsCFxFzEZGkEkkMNEzp5XRc49DvNau2FX962oJ5HnqaH7ZFgZE38qawUD3sakohED72pDC",
  "key12": "2n848xuNVuV23U29dsDmqfBcUMdnzJcjMrJ4GP5JiH4xaj8W7zTtLq7Msx6hTk4tVFgpKVX1XA7ZupckHK8ANuVB",
  "key13": "NoKQyVMnbhTZ4Hs9Fc4EmAqCc2gTphSVkbKeaYNZshECx54S28WKKhQZjKVDZEZG3iFpfMEsmzWzG11QNA723u7",
  "key14": "4FmHkyVGYc3VXTDJqFLjxdY7kAGm8LeVfs1Z4cq1U1tBZzeaViM2Y2tNR2g1CPftSXGLczwvxTwZXihaahfAWTrZ",
  "key15": "3Vwd6qs4bofgHyMnnFThKTtngUoJiEHPQEXnR8PRorhC5HfbnyhTAfKMJmq2hHNMzstekbpitZevCnDqjmVYaNNc",
  "key16": "nEujVHuwVux5nP9RCUNh7YYnmC8kvE8bu4MngEU9i9Lv8ecmdUU82ZUDGYo5deVvPGGvT1CeYu1ma6Wicr4D8Cq",
  "key17": "5Uxcs8DeFt3hXPCrX27PmWZEm3HnScUvvV6BRwbQuhSDBQVnLgC6heRbryk3xtdPYmWJfeoiRZmRXpzXTb5vaXWd",
  "key18": "3778Ue8KLHDX1PcvgGQKEHMLrKxhzHVdviontF7FCADBcZigy2LgFm3frZghS4Mw6vfRDspJYVRzXEBNHbXvjgpP",
  "key19": "2vd6gULEexwGJvnghvqfFYuUkDKfyFT8Pm1uosiAVhUxB79VLqo6qVKkv33Pmv2udqnCwSmeMEUHzyCojj4Vs62k",
  "key20": "4CBQv7zD2qux48QFmHHoi3SR4drwnp2PDKUE22Ea9PM9tsonf6TTT8snCQNtK6ZsrVrGSCZw1rcbcyejoFhtV4Ci",
  "key21": "4zoUs42pkD1zoKKEKNrFn5JDHRr2LAMwNGebTqPYWn8LzkvfD4CnQ449fybx7uTDVh5ccCKBoj5oCouXv8ZC4dbN",
  "key22": "VEC23eFmC3DSYqZaHh9NsPhKfq47ZZDQvQyJe5ydDf2zch4vntw7BVkLZ1kfLEu2kbQGqdhQWNB9NeZmWptbqqP",
  "key23": "NbXM3TnAAnckCxW4HCWU4XbZTEsCyCi5o8VBEJ2MDu1xAHFDpVUx4a1joYbDECV9725FVcKPYG8hkyxNcCBQMqV",
  "key24": "3pJD7T4JZjzcXgvHFeWHfPuYCeFsvM1Mk5uWxqcpic3VZGqY85fDBzvnr7LRiajekxY9dYkrd9wc88GrbGxJNTG9",
  "key25": "53FJN1fudSiDtgkugSBDsh2uRgAoo9sGP5KDKPyuWn1YhSYU4QsHwkiaTMMsJ2pVckvcAduanXjpwzMyj3eWbbMq",
  "key26": "2AiLaBLepAxTQMhmWKBDX4jR7eN4KDwiPnHyHSNQSqSkyX8JjAo2YhaMB3HzFzgNZ88tSVe9M9kaC4BQ52vLtcHe",
  "key27": "52fa49FWBCVQr6aAYkyGS7yfaq7paHiMC4ynh5DA2erAwhUoxPcYGxry2ZxvPvLoSRaSDCKMJrteJkTnkoKb6fwN",
  "key28": "4E3V79E42k6hrh5X8qXSReZKwUWMumFiqQHZ2WdUiZgoKRNnL3ubtWKBgtGvUCQGxJoKGAEYS6KThofjqB6bND7V",
  "key29": "2L77YH6Li7hb3K6ToBT6A75uwuHeqDfJJPtrY4e7XqRfGi3pkRdbNHiee7aDnHkAKsbsMUvjJgFF3B1SNAr6G5uQ",
  "key30": "53nLdUSE616fBbg7itFFaDLBQuUvFGWNepFXJouZPgvuPYDDYPSuy8M234YURBrc7Do4dd2FMkrKMF1H6YbSySfM"
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
