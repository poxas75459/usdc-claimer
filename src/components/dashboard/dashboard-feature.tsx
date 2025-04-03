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
    "3G1D4bscQc4xWRMezP3ZTosdg5KMLMA1kyisNQuYdd1HzxQvYeLpopHSBYz77PFoYU8HWQ8TGNnGp7ByDnJ3Gw4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZS6maetkn9kUCA8LtrGQ5X6HpqJuZhKRqNuzS7Gega3onRYFKwFVF7odSHGd3JGP3LdKVbv1jACqbfN1zgLvsc",
  "key1": "RXN5MPKs7L2FRZUutPAbUaJwxKsY5mzKU5JrduGZgpSouekKHDb51FaDhsVv8RtnBjT8kTGQHzuUrGYpwm4ECe5",
  "key2": "2pTNsJscFXRe5ABddV7UgbKgZdHk1JoiPyVoZEXZkBn9nmTLBPKRRAKP1vMjBrWDi3oiHPzx2sYreR1y411pJ9XG",
  "key3": "2dKsJW7jgaJggxTcL37CeXUkywsqw9dGYrw9rmCSQx9yqiCe3MAP8FAQT78usoMhn8sgUkWFRRT4CiLGfYCZAQxx",
  "key4": "46qTatvmeBXAbAjkXcs3Q6uKYrg3YcGr8BCAPbRJx7Lc6dSYp1eTcRRjGi1TwkqKtPaHxzJVUQ8LQWLBd6LJYPHw",
  "key5": "5hZcXrTP8YNdq7E5VTST2eobnbdctuLhEDzaCgrXKPwpJsdTQLkgetT1fWDqynwkfNUt5KJ4cawv7QdorzQXWD4j",
  "key6": "4J4ChiPms4b7wg5Pgv578R8RfVFYkMK9jpcdCceDPn7uzkAy5v3hj2V5V1iNaCC9CgyghQwKsKzzoXXdXf5sxJBw",
  "key7": "4rDGGjRC3UibKzhP296v6yMmbsK1WW4QoL2oYs67Nm23mZE3GYRKKmqXES4BK7irGXDvdsAiPVGJjjMTDRdkPyJ9",
  "key8": "5zg2C6b26mHCAstLbhUyPiT49Vz9S4dtmj1CNhWJJenhbN5F56ZYRhcBBbCRDwp4gcRxpknHx8HPgGN5bfF9ScAc",
  "key9": "4CTnPemK5HjwTgqghZrqFMTPBUSPzhBGV4vmnwBvnDmFSAfPbXxpTuL4iFnsPZRjVUVbYafYPNQHVRaQj4XaC97z",
  "key10": "5mZz6u33c8ZhdyYTZrkBXC2qAspDwPbY2Xxbia6J98qRVNxCXjxHSJoanLyLckXddXWPMUu65TAvw489w3K7oZmC",
  "key11": "PwyVi6swDucxCZVbHon7xcHK8mewAnGMo4pY1PZm9dwvgjHM8L13cERzNScjvm2GSDru1vsFge45ZFfZ4Yc5qZ9",
  "key12": "31qiutpbb9u1FBkLLnQD2iu37ALmNc6j5XhE48Tq1tZffTeqERcKDBjRC5H18p1ysCcw7bThMMuCBs2duf3wGnKR",
  "key13": "5FmktbyVtQW86uvwG8G7q9R9yAcBkA1H3zkpphxPSdk5YoQmhYYVSvURYQHCPmJDhQ3As853TxbpKRqggrhF4Xas",
  "key14": "2m983z5nX2NHRCYUKWqtJKw7Lm5TfsCH8m1M2QHNL4CFrN9cYU15wWBbMYWpfHurbUy8NhNDfm9EGonqoBKnoDzn",
  "key15": "3r2PR7fsyZzPj7NkVq9odmJpAYMTCCDW4F2Ln4Lc6SwHZtt6m6GbVqZkVeTfSUNG7xyh4nSjipjonK1bPvx6HLZU",
  "key16": "22cTgVnBQsrsUTuoYgrFHRZnUMJDQ7nkvkRYzjWq7bG1rHeX6Dng8mT5xi7pbFpzKKH6NmSca6LTchWMAvDWX6C7",
  "key17": "5xCdqoguhYm3NfN28JZSe4zKGuWPL8DJenp8L9JVjZpGaSzp6r2MGuxZFuQLWo6XVPmEK2PPgdfoJA5yfZPiWUr5",
  "key18": "4Sa5mzTUSYP8oKNKcFCSsZA8nBYv6Mr9mosL3qU7MvkxfPMVShugF4WLdTAmBW7tggBbatGVUDCHJ24xoyWtX3X9",
  "key19": "e52CFWD4H9rhVfAq2eFbA8HyShikaseAuL8QsSPr7mJGdKtpsvCSZnyTMNjz4V8V2YHkny9Fzpxwyb1vRQ8EgX7",
  "key20": "2steHzbGw5QEW1sFVddzf8Mj3KsEowu53MN8kDY5crYLFz2yrLoUcf9HrMxiUywo4qjKfRsWGiQHbdPR6h4G6uPS",
  "key21": "jShMbrYb6s6ATW2NCKi8hS4jV8pPEw7MSsLpFRQnwLUVvfYUctvsTmjSRLKYPpmro8saR9kget8DBy542bTsMWV",
  "key22": "2zXr6zwedwujhVfo9HPrCdBPbETREBzTTwCyKgQHroZSFyGrE86DH1C2DXA7yiB5KaKhoNxCweXVfgnhwj4NhASQ",
  "key23": "74wHrvdeJbjBw9RTYGp5bKT9eLRRJfztCNfwBMnKgtYAA7yXG4rFejomjZvShYYywkfZpwarPck4VjXKF9URmhc",
  "key24": "4wZwpyKK3evqy5Xq1zPwVz9jBFwBDPAj6FspEJ6b5ZursoFvqU2WtXbetPLtQA11jDvQxKUEyZv3ThwdMQaMGHjd"
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
