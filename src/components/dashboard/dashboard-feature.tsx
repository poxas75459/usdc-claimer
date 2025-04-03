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
    "gGgNSxVfSuu2cuhQoR4A8pASgvT6VinAebPxRXe3oJkpmpou4NWWdkrETQfLSzj6pBQo7X67wJUHfZjyPPZPEZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQ17EbtP9QUEGnRY6r4Mvrxn7JBktLMq8NJYRskGQFMCBHBEeqoMMVEApR9SWSLJbYxZCzrfFvjUCTQ1LufNjcY",
  "key1": "9sZ7z6cHwizR5tSEcFad1CUcS9dzEoks7Pj8hvvSuSSL73xwj5njjKSJNFX4dB4hDNf2Rfk8AG5aKmqiTCmSb61",
  "key2": "YAQB12S2q6aaqWh4ZNz9v5cJ1QNWERQU3ueUXMwU9n5KrpjuFsYpQ4Q6dRcipWriP55hCcEt54ZUg7fGJfZu3HB",
  "key3": "2zwPX6MouBqpZ6Gm4fFMXVVVSeY5ZjnG9gVhSWioXQzcP9oQaxrD6pxRoGzYaCZNqD21b3nYdGjwFva7DneV6cNH",
  "key4": "5KBS6uYckxnY6LCGn3zZwTzhzQX4haxJFu1qUB27PfLXe9SQ4sAyVDGWUVrHopN7SAWiop8pRWiKDse8xUEAhgXg",
  "key5": "2iy6UEVGctSUZL3vBsLFd6vU6Yc3yYex9n7r7AXq6rtZhvQhKAquMmP8WvJHFv12ZigFBjrPR2EHaxTkzdsmqCqc",
  "key6": "9yn7qkYQsrQfgFQxAYa5ssaSKnrzxnVMrLkDzEhU175D3Xymfz9o5j2esrnuKFMhLj1vuZbaevBA5aUsgGiLEGR",
  "key7": "7oh9U9VtX5Wf2UwsGPgUBfAnc2KBs5LhqHXri2ZVcH8orobKE14T9AvZcwBHJ1xzV2VLdntqiLKaevcVEu4ngME",
  "key8": "AHCjq3yrAT4b84uwPWXFLTE4xpqosV9SPWm8SfWaQ1k3AgndHnfTfrWDXgAJhaTKr63MgE5pEeuX6wkJttyLrMN",
  "key9": "3QVEHkEopUyMBNfxC1HortZCuTpwhcTW8jADSJC4g4cJ7mMpewWn7NT1PL68iYRbneRv5CBaFnwFSnT1qQC8akg5",
  "key10": "5bJ1CJFQXbgh2XwB6aVhnjWjthtMkxoNKLV65LUXkaEwXQDVxwc5W3joFyeRg2NkPEfADZHrR9UUdd5UcNXYoRQZ",
  "key11": "3v5oZV4BA47wKzh9XPhz9EBDnp7E7Cd828tmy1HmQGyZAjGycgE1WuN5z4Q6ar4DNU31Xc21mtcjRbmoH8oNrFrC",
  "key12": "4rAsK67sQ4wjXqHHtty7GuZ3kioZVpBpeUz3CpamEgzEzoTmR2h6g6pU1ukZ1dkpaX3epTK2s5677ckbycDLFkaC",
  "key13": "5Px5Jhr3LhbVR4br1DKTbnPsA8Uq6rEdQyYFYysYrrjp5gFkQLbiTRPrCfCaNNyWZk88xvAoN16xuVn8YKYMEWgx",
  "key14": "4tHTZQvPTpkvquLaZm8VLBChpt9gydjbyk3pAmKaF19q9uDkN2QMeor1y9j8cniWRxYKoEerEgLRTVBFMd4XUaTJ",
  "key15": "3CxJJKJ66RHwVXC5ideaKzb5phApqAuzziQ639TqWosHDb2hBLiRj14281HtkL8ZFze5ysxVWu1dR1XYtLzeQJHb",
  "key16": "4wCEiRS89UCCjbBdgtr9rgEu1cCyCkVX6dbaSzwLnVctRhSgRE2B9ufbBgMPhrpNxVz5Lq9PWjEsihAc9ANTYZnn",
  "key17": "8fnmhar1ufA8fgJ1e9ix75PJEoAUzNPhsdLnkqi6V9Yj14zPtLTPrF1FvMURHoDgzw6VpHRqWgSBj7k5de6Dazc",
  "key18": "2SUQg1mJWuoiLYqcvumdLqQiGunoynwZRkgtcFGxBQJsC11i5jEGvtpVAfQwmNaaeBbRcJ1ZR3QwMFLRc73rW2YX",
  "key19": "2uU57Ym5GVUKFAA5jqduwjQKiV7k9tLaTEvUs79o49hKGBuA5rwNi9kx85a2FadvwBCntyrN3r6EiiU1SNuYGFbG",
  "key20": "4bAf3QfF9gsDeP6vVaqJthSBrK38Li4UH2naQxNuKzeqDhSNvHHDNKFv9m3YhinwjYWxU2BkHzMcRfvmHeutmGDT",
  "key21": "GyXjQdQBLKsxfVVMXjuRXvWcT7CrB6yJSEsDrmz8CYpEWmCRiUCEG2zMaNC2r2pQyXqTSSCQ3hJPhUSKbm2K9RS",
  "key22": "4KpPx6WsyDuN9yAYPUEu3z2c9qg9jbCE6hJ1B5VgqFoyiQ7QoJxEx5SD8H9Kq57EK9ptqQNFKGkjXbNhdGF7HqsF",
  "key23": "3aYgKQ136Agbuf4CiRJ1sjtiYNK8zVey7sS8cSpyg9hxNWgKg3xvUb46uRGgoBdy2Air8poTWvt5q1jvjQrXUyC6",
  "key24": "267KWVfT7DK9KivnNi23uX8TnZ9yAF1DLZWQSYHHfFpFM6bKL1HE1FEQnt2GHVo1e3p2X3wiwM7GXN73A6G6TbW3",
  "key25": "31dD7zLVxvfWPR11x5tYUSeFwUCtgwPKu7z9tZtVfnoCSb4ehyTNEXkT84fMsdmwAwRdnXdXLBCpGjHhktvDyvF",
  "key26": "56nnBAZH993C3FohwubahXpji13zyy5Y54AqK6XiTxSWNxCbUcRzCE6Qieb6KCDWEiCBin9aB1xH6xxixd4gjshX",
  "key27": "mpn7Kep31Zwvzbj4vD2DPAJADNnyGuD4xm4BuiKWo9R2C4XxvwneQSZ6ffqckjWxuwakN2ePxQmQL4GgtssgCbF",
  "key28": "4SBEJjpGfDjhStMv8PptDisaXy7coHMF3n6rdrmtmkZHDPG7isW2938m4oLGskUcu3raXNPJrxEjCBUyd8afxVGv"
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
