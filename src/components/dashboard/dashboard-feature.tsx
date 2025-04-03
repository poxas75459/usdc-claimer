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
    "2pM2tJVDZq39tbQ7u4zVN6j6tJW6QnoCaUyohSVPq4K9Ufs1tMjMGCS2QGQ2qLcCmq5FFQEhzDMGzyJN5Ww3Vrtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63uPNQMar1AaJrFJqkzCxpccadZ6Bgg4qurp4qfSPQ85ZrJXuyeKMn26fXt6ps76Xo4hP5kd1yodNnfpjf3r2QiX",
  "key1": "Nzk4BA6gPXgwxaa5pYZ9sStPhaY9jRvUwwKmHTnx5WWGZbZ4Z1MPZ5sPp2yMH2RW6pCzX8LgA3i4T8cJToXMpEr",
  "key2": "3UBPoC72KvkNVXXEKwAdgBmrKt9ANNwJUGV5mpruLjBZtjbbz1LU4hQqjXTpocA52J9rEs9ezqY7QSenFoGgweZD",
  "key3": "dwgXRE4CZ2jz3iMDJruLdyncoo14mDmFQrynt7WJGrvF6YEktKv9r8e9TwUtYbHypVDCgLHS6C55AnVzX83WkfA",
  "key4": "2RRUDpx7WuUspDq6s4vjcea7DUXZgBBPWjZpKGe9e7HcWt75WYhQttBrJ4i6SbycnivwgYDnCRCr4EP72TXDeneh",
  "key5": "5JRPhxgoHipAzfTkro6FY6S8oqV7AWtADbHbCJWTAjkiMxmQWXjMcjrst2Ho2m6gfeuSXAUeZP61eadrAFJCdbsM",
  "key6": "5PbdgY9Np2Nccwxu71xhWGAz48s6f1dGG3yhfFw3YoxJFfzWSGedzz99oNUsTHzatDjQxrFAMd6PJkHMx4PpCzYa",
  "key7": "bks2zDPWUty7jX5dFkKG5UYB9GMYu94QjVWFeYDaFpjfMVa5CL1pocYZddCZCHsv5iaJ1f5ZqUK5jGGLstd5k4N",
  "key8": "5juM3euSUkictgPaugQy1duf8gsQSWb6emTDDCB9CZLLwGE8aHe3ZRLfCuuAXKHFzuGPDWkWr187UQvbxcsy8Ge7",
  "key9": "2iudozFRGYSPyvC2HQHeqeH5Aw2Rp8v3tzRmuZjd6pGuyWfX3qSjVMGEG1ZnynXwWR9M4ZS4XjzVJu32LrgGat5H",
  "key10": "qzchG2HzVPE2S6i2DKFDygG6XvkVd9fwD2tJLeNyKx1M6ZUH7f8v6j1gQuDoGLPnoDLi6mAtqFzVyPvVjZPCyHM",
  "key11": "63zMXt2VRS7Lkwr9QmQHxYSiSFpTcSrbaxb3cQ4c1sGeC6FuDvhAox2GZKDMnCSobVyS3uTV8ftDPtBdFZ1vQj2z",
  "key12": "5gMLKrsijmaLyYsvbF9b13jnX54bmR1RTDuNFag8ahNsuSEnTPxiQtYthDKb1BAQgVLMbH2qHYgeaW5izYVteYkG",
  "key13": "4gbFDGSmNnX89EpnwuBzgeusRZvpkqawNgycMBufh8ZrpGk3aa5VKZgRitdmyNeNbht4FDcWagMm8dMk9c3s3Wgn",
  "key14": "2Tw2Mxmu4PZTw5yHzXo2V6GQoz8GR1VKrhYyUxgXo45U4pNX8TKvfNfGsGC9nnv8kq7F7y1PxnRApCCnaz6Aw7SG",
  "key15": "LQSEtjKBKpDyGedgZgPnYNLuS9Q3PPw1qdnCf1XxTZHtGZ5SAzEZCNDMbXwoWgCTmzrjRvY12jETAQDuoSUH1Sc",
  "key16": "ChKLEhex6pvrjSoHFFNMDSxM9w1ihbBjJTCqxSYMmom3DXfJbBWf2YFqHdaDnB7ipKoJKC7B65fbm1uqfwC9vkP",
  "key17": "3Ajdb4KzJDhTFXE1t5ej4eWbCeK9xVR2kYGJLQkKiVx7xD65gBAsnmgvpSTPxvB9QKUSB1n9uS1g9wx1ADd5rBM9",
  "key18": "5kcKzLnMwd8y5hVWrrpmWMtPnWbuEAqD5b87nuJQEjkRxwBtk7HoyE8eaqmA4AK87MrPwgaHQHQaCWJXRTgwNLpT",
  "key19": "42nyHJRkKQ5SPqq6jAaotCH6JcAFGWyx4kihQ26ZMmKkYwuoVjxAu8RuUMJ8RmUZLDJttMuzCx1uaNgmAdmbLri7",
  "key20": "3VaKqG4bZ49xQU3tr9tTvgZevgJbbfXttRmgiuQ9qKWNJNCeWZXJ4X1zAG9s21RG9sET4phAX51iiaSG846V29eL",
  "key21": "5JBuUdCgqyzkGSaBWYsxLrSQ7Y2SsbagiwHrtkZV7KuygQp4U92BWabtdgtN9YTqJ2KJwVc6W7GBbcJRcJAvRiW3",
  "key22": "5SML6DCycg4KSiZ7mAGLyUFRjY7JW3H7m8MUc4A9km6Y4Vrrs6cwuPPzS6cNQDTxJj4QwzCKqVXYob5nAR2TZ1kA",
  "key23": "hjaZM9whoCFi5FmjT3TUENp4iwv9qgc5VgXYSMhYftNW8SgkgvQyCt64XmLPv6pcCpyFZpwvUKsViUT66sERYiC",
  "key24": "59wWp3TJeJhuvszfXskDDKftPdJSMTqqDcMjauRo2htH2Vg5WpgTqVfqzYcEx6oecuExD4JeNFDH2bxewi2NiUet",
  "key25": "5K3E7wuM2rA2Gyy41qrix9y8eBZPYT99tDVT3wWMjVSX3qYpj7ZtCiEHHF7xyKConm7iw6VeB634o9bocyqobxve",
  "key26": "4WX5yNhMbHzsMLh9XEicVjgNZNpALUxRGzGX9jf9hJCkyqndUWXVEELmBqXfiNCu8WESj8JZMGsEdaYupXwzfpiN",
  "key27": "4ZxZ9QjUizMPsdFUfABnKGxYTVMNvcgqSCBmA6ZuNH3HjSotk1LHT8XVk2yjsHsfEQXU5pttdEv4dGYhos8YQ7zn"
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
