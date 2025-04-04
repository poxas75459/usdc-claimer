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
    "3CYf42uLTFVhfXKQqe9YKW7N7RHCnGn297sBdbHqFTcz8YJMsyKRaHn5whKdy6Ki77cTAkexKssvuSYYnCCuvm2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6YJ35YvEHWtwAmSRezHxscgqPmmNn5HA1VrKWKrURTXz7zN3c4Y3ccfSRjtqsfmdkPT8RNQXxHbWPRVxG8Nr3g",
  "key1": "2x4k4226ARy19uQbx7m2DP6hNYtGwTur4eHFsuu2cXNn4HfaycVD25xVMC9gMaYtXext5kR7E2YadoN5sKWCvC2d",
  "key2": "5aBWazEkvsA91khqX49thWmo2ykJDanUTat28Dn2BRkeThv46GfAabvCJNshCv4ykGMpSssxTXLKzSKeuYZGGg6j",
  "key3": "5xGqGkDbv2Q6zJyuH2XDPk4bsg9NCjUoiUQKa24V4EX1vwu9AKjzsh3mtAnBuT5wot3UbjgzVuffdP76QERypMxn",
  "key4": "5s5mHwN4aXScVfus6iwvhD7NwB4TbrvC6y4MHmfLhuacdLt6ADLxwW73eoS7HSwX7J2ZUBULLc8njQAP5d4sqezm",
  "key5": "49cecD6PwskZy48UhWgM2pnGhvqGAi6uZN6UxyTF9FXggECP4bFpicckbQpkr93tx9xqbrb76QjvGySJGdEUWVS9",
  "key6": "2M16f1GvNE6WAmWYqDbzWKB6xR5ejoseVYeDBSRYwkMzPeyExy7orcTogqp9h1NvucFH14dC6fuA5YiGfrVABM1x",
  "key7": "3VVBW8TZSQDeoVd56GYyeJJsQuYE8QTWGb4zuaaoiYT8HQcCZ8zLTkemrPvyH7hgPFFzpmyuUXhv4wTres13RB9Y",
  "key8": "VhmCm4DgNSfELbVhWSb8b7zBP3Ls2RfFm94ub1zE7b38sCDbbrQYfSLxTeG6Ar5c7mnGine7HSVYLaWmkwpMrci",
  "key9": "ba1F1KGwtyAfVzLKrAoYPy661xdL4wkhkyKp8JLjUMW1CYRP6A5o92Rdynt77Q35DC1imK9YLADUZzxVe2dL5pr",
  "key10": "4CckuhC86pn8ezQv7XTFPxcMRVFvbjFTDQ3RDeNCjaz3Dvu69d7RYACQ5CCgcgQRM3szYJosVJ2eFJGBoeUPcCKo",
  "key11": "5sf96bRwAtpjzgHjbMqU3zA93khZd2ZPFQhx6PfJysXh8t8E8uSf9HShX4UVeXYgssiwA9DvGsJy4qNRAEuF2oFz",
  "key12": "27chwfzVE7qakNF3rWCzhpaq6EoYB7zzjCBhpMVaibz12Ns7AL4nrVxTjzKS28UT21X9usWzm3SjysoKVR1cnVQy",
  "key13": "3iY9o4odJMJ7qHKtwwaUvpojphYthwonuApB3WhnoNfVQmoL2kUh8vSuytAmdjz13hmjje5wcW1KaQ5KRkEKK6ES",
  "key14": "3CKsW6tP1nhKU8CKHR4653ncJGKtNMthiJ7w4hy7GsHPTVn6dxnzHBmni9pRkbUGSaK8MhptMXzSHpXTscgX3fqs",
  "key15": "3KJa7DjzsnHnxo3teBd7pDBCDyD7cvb1ou1tND3A8Uy81r93yhfvS3AkmmTMcsJqxdjLtKkRxo7aGo6K22MRksTd",
  "key16": "D29aRRVYvzs8cXYJ5VFdzrbvrpJnG2UQrqptUncEwR8yxXEWjjpZHo8hjvpc4xFcyECHKP6WcGHxrnn4L9qXNLs",
  "key17": "3eGEGxrJ4E5ToL3LQbvyPS4V7gB9HkvtDb8m7T4shpKEY9ZoQn4StQnfcwzEKJC4dLgF3GXBqnZgpLWx3EBNwvPR",
  "key18": "3Eg4xjp4Ur5eWUrtPT6FXiTBXda6neCum6ewUiUru1kRg7r3vcW52xiJ5n4yeQmMzAsDCAJzZhjmuxPnsMC1yzPr",
  "key19": "34WbNjuf96xL3UYYEN9apS3osPETQAtoEa5AqpXJJue9kWDKt3feEMx68Z1VMjAE1TpKTLGLpMyJidPXVhCTjCUk",
  "key20": "AS1jiMCTzeiwyPQ2Tx6v23c4dsDjLHuoQNeBfAHDLhFiMW677SRtybnMK83V4gLxv5kF71mP8hfGbWzV7ugaLcP",
  "key21": "32jzpJDkMXHK95cxCQYJVURCWJsuPAjQTnkoSDotrVUuXXNEBvfkFZ52ckpNdVFZATPA8xfjnDpSqrekdUYBY9eG",
  "key22": "MAvzSBtC4EACLwKejkYKa1aEJAPmaAcMG7Ja1tR3Hs5uQJ7phCZ8u85zDtLYMxJsfEq6Dq9usMPpgD2LLCbryJD",
  "key23": "3ALzc5HW6G9FeLzb48KfnwFYMDA3pjD8DMRPAb1zGfED3TBxJB1LMXT5gKXthF2pnNu8XdAXQHyYH2rYhdiBCHiz",
  "key24": "4aFrUANMcivMr6trg3VWUuAhFeAGQZTfCVB9VZpBxBuwzLGe6eGbLYGKo46vDEftjm4h7VMkiLajjUaUhBq4hi9v",
  "key25": "67jsJjfHAnFdC4Y2FSKNg55ac8DhR3MBKGBfPi8RcPLtXHw3kYXrN8RMjR1EeodJTJypgSpi6S6Vy7QNc8LTBvAn",
  "key26": "5aN2WbDutbyjKczTArsLprW5P7jNYqmrgUrrEhQPR2NUtA5CQArgAKA6L5Lg7jAmSDrC4FDQzb1jg2j6PUs67oHp",
  "key27": "5iRDgDv1d5SmBqyK1SkmjS5VBSoW895yUj2moCFjFPQZW4SZguzSHzHLEiLuvwziQeMtJpHRT2uNVX2hd4BSkoMm",
  "key28": "EtnT92G5pdAoDtnBu7Az5DC6fNjwUu2bNkKQQB2kJxk6s7Y416rg8mzXYn4RvoN5mGVZEGgGYicz8X91K2emqtR"
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
