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
    "1VgvZQU6GNUVuGbj8SV4H9kPfcA31naooiSpK5wB4A5V7jREuRprSFnwWDkrzoNGF94tKzuZMihFeJT7pVkQJDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfcXj9DeJZf9MyBPb6kVd4S3ULpTqhnnQ1nLbRFLmSTMYdtKJ1epnxhjyx942sZP17y4FNRMAmUan2EbNMPh2ib",
  "key1": "3swMsNYzUqRkV7PxWLXdrbGN5hTpbXYEySkdpYVbzpwDBMTPKwkC8AfyDKRMM14HteRuPgCC87fCZCnzuZMRbj8p",
  "key2": "CyamQSWS2ee4XXr42oHFouY2Hpj7maDo9zNNXj6M4uBShk69VYPyuPWruCdRmWYGvaGUwTdQ1CG7QET9hLAb25h",
  "key3": "2tVpmZEM54dkzXtcCLGzqn2poxK96AXeJrbJSTkFFzUWe2Q6FksLjJ86AS67BC2ahZRCo7c99WdU2P7WhWQLJggk",
  "key4": "ffp5ZysZaerW6n7PsbvuuBJLFEA1t1GC97N5RWuRU4W9tpAneA99pj9ikX8CiN22towwMgCtxSC2huZCRPQnCyS",
  "key5": "5eSrCVZNs7U7nwKtQgbTk6wnW535EKZ6vKkusZ9BVFtnckNz5NndLHd8U6tqo5mxzq5fgFU8z8XSpFu3NcnR7hUh",
  "key6": "5EyzeF5iySm5ctbEMmQTsdfhVduayUUwXPdYTJWR7Zsa69F3qnfgHF2nzuYnEHTYbMnWZYg1eA9bWd6CskWnFhWz",
  "key7": "4d21orahASntz7qjoz5e9CVaxoVfJTT6Zn1CZXd4GoPsPRLi9h7ioDyb82sH2P6ooeA5nmP3Bm9roA8vaP53mYCL",
  "key8": "4xjJgvCgsBJvcQUGszWDZTfoywbxKj6WCzQvNPJeyZFL2AXVNnSHf6gqeUBgHBqmNoj4oBgg7XYbQHfUrc4aoQ8E",
  "key9": "qdniK3U64c1XDPhSUnHCDrRamxa9iN1KQxiNDC999HowHCYZu8ujcZUxMLKPpxLMPgSB9rwhkw6wamZX1EUCfBa",
  "key10": "3x4kuwnzTomNYF9hypNv1K7q9ZJD8M7PbERmcqR6gRG9ZfVv7N24KGknFgDQpYG4f9qBcJgQNvesFydMpCWcu3XF",
  "key11": "5D2enDkjJNowUYTeL8Gx2Ure28Vyc358BYz5LNgHQvbM9mHc5HQFh4EWMMgEUdmx1pLaSKgQCQpmRxKBwQc9YafQ",
  "key12": "3HW6MLnoU9R64xgiR4grFtPdwCTn1CAH3G2iPkY9SzeqRL8uYSdi1nJ4qnNPGXRZXKjYek9GauZVRxcuNvVqnAtd",
  "key13": "63jFJngcHg24V1Xc5crWYU3dh4qK53LJifFtmCWYgchWcDEG6thnwZH3Gney3trXGv8qhXbB6ZNVdmuAUAzNnYaQ",
  "key14": "WpQbzsz1b3vtkjMD4pSh8jm5vvAMnXKewhd4ZUatCgrxtH6BZNYwwF3oX6s1JFQkfBJZb5w5kfA4w2NF8dmqpeU",
  "key15": "96FUDfGJvZnz8w8FRZmJiC1itmtcZwyfs2G9fL66bbuS3zXVVSzVFYAeYTyZw3vEk1w2v8kfK8F8epygYkfhj6V",
  "key16": "4DGb7nBEkkeqdyVkcufztwLSBnrcQfkta5sPa7v79VSRsMc6SaYXc3gQGcTmbFwX8fdyWjMqs8ehgcmY9yp7Pygo",
  "key17": "51Bpf1gEdMQtZB9oWQyeU4BQp5zZQAdg9GsPqUZWxbcqRxwboJs969EDQQzYSBHPYxGruf5FzEueguFgoFXomojf",
  "key18": "2v6Psfq8zoKrvGqvm5fCQQCw1FPjSkYHGysvCJUgFy4wKfwNzttGS9uBT2QouLb1RpuEgGQrXUXjxderHKTamTjc",
  "key19": "348yt1HTx4HWRpNx4hqC6GtCA55FLS17bVbnZsuFoXLN3ZzxXtBciCY4E3nZoVvtMNEFX6aodHXgj2aJRGpvqLkd",
  "key20": "3oE3dCsTSNAthQYBfPgybBPA4TFy2ysAttmVsAF9FbSvtfVAaWS2YCmKLYiYvUepbavT8LXocdRdQjNKGYgQZsdv",
  "key21": "4GkeoLW7eRGWu4vU8ieF8cuGvwuUTChMjnkFAYPcppNnooWTu2LYUYnN6V94kMZ5G5K4xbf496wcf6vLVNJbEG3J",
  "key22": "2hsaYQ4L28q8Epos2B4hxkCUdS3jSFJbXwZc42h1YVSHpPEzZEvUtShnivtRAP2M79G3ZD4K1hovD65VjpF9gV7e",
  "key23": "UkQTccdebpdTKd5STe3RmQMznbXPAW1Bk3qXodjRQ4NLrJQmknbyWFusyHvapTnSHXkoc2g7VJXR5dVbZB5zxJV",
  "key24": "T9JTJFT8AN292nRQNecXDbTkhXhAvjuwVe9fjWxqa9tLDYaQiA58bvNvjyEZBmZkK9bnAdJcZCDvRAHUti5ZPHQ",
  "key25": "2mVsEJ8LR1pW4mcmwuRTdgdPVCQGsUHMRiJxPekdxBvQPdCSVcfJwFKMaf3iKHBnG2yVAW2rsNguzJp8DkfAsVRt",
  "key26": "33rQrZTDVmLeka2YFasWiGKUXNNofF2A7XTZMmtTuJ9uPTyn8TB41iPNUwTkz9jE66GtcobkiEBNtw4B477vGfJ3",
  "key27": "5NT6QMkp1u5jiDzPRKLgKM22dgt9y8TiZPYKQ3CwwtEX2r9KaMsuVCvF8moVKKSKKEYFy7pZPjyjTgqdPSe8UcsE",
  "key28": "4UAKBQCBtSVhVHrAaekxLGaRcTFA4WgaATyhJ2C6GhxCQPqoUpAisj9mniiD9n7WkCG7riHp4PFJYgBW7DDtamSP"
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
