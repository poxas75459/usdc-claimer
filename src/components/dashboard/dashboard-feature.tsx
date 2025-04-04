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
    "3C2X2s1YTDW5MN1Fs4eN12pRZQJU3paLqkusH8mupe86i4heKhT94ddmGTBbcfBwFdaGYM8bNG5QXe49apV29Ruf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9q9DDouMgfsZrHJ5Lvf87RPE6wGJFtPTzr6Hh2BYpz5rn3ZEqanNLDeHBoo6bKnfupujf4unz7qeniWk7qPj8N",
  "key1": "5XwZR3NcRkDew1T1CSV19yyP9tQQrAWhyvKKqFQnzgyqycMdG1zJg748V3BXXHBt9wEcvH3ytzMwCCTYLpG2pPTt",
  "key2": "Ao4qiCNjZsoQFv6UiHTFvvPyHjSFUaHz8mvp5ZpzhLRCcEcwwswfR4rgVo4dtcqkXkJG1wc8ZUY5cVhK8jkHNuX",
  "key3": "2y4sr4HApWH433rqATweDGTHzRLiJHAS8wqrA7HsnxFu17Z14mkYipUjPCgDdksSa57gAwKCeJRbqQZu9jKRtH7s",
  "key4": "2j3VnodA2xcvj32GD26orhqVYtje7LW95s4AKk14SDT6ZGSmkucHQNHUiXH6msQLx92HfKznftaWwC6iD6KVN2dV",
  "key5": "39muLL4HGJ9jCcMEcz8THYtnbBhpUMjdWeTaqgH6QjnJbNBvcg2xsiWhUe7GG7fdW7AtuzfFFtFxCzUx9phJVUgc",
  "key6": "eytdKMZBMSzN4NYSKXLeg5KsQDrswbKF9RiNqvs666Mg5SdUtnKu9aYNYxePMdnMewmRbbjLCj6XgRRxKE8cxaR",
  "key7": "221XJixZYjcrPnfo2biGjbBoVyshcBRedh72Cmt2Hv272ChfHNQfTpg5jSju1Y46jUeufMUnxBYytRCk5FvXmGDd",
  "key8": "GyT3rRhQ3sRPPAncUjvcXvkuqe2yAY22DtGMi4SNfQGNWqSV9XcER2qr8rC7nGbsV62pNXmHcLUrbWGi6bzJs3a",
  "key9": "3e3wWdXqAc7MEt92CfoZs6r9J5a5dADGGi8deTEhyfgdsbR6DzSdctWRvGRCzZ4Ww9apcxc3pZNjH8KdXAmQShyG",
  "key10": "2WRGmhgd7VrU9VhHon5AqHH37aCsouEbN8WyGXLLqcLqcLRjoZcgnFY9JpaaDyaMHLPXnC5u1ovD3cahbqj5md9q",
  "key11": "2XamkJ4czWQU17sxo99eqrWRoQTSFmpRcH3xJ5wucp13UAnmt7X1KpSDDyJoCMA1nMZnYtQe1jPxWs5s8ebsyaGJ",
  "key12": "XsE4DGGNSr89FBdGwARJvkc2EvsZLm8S129fNpAdYARjduZ3T3cjd1MCfK4cRpXEEatpneqSCc51MaZNP8P2cfs",
  "key13": "3mRV9UmXyieqgJf4t5qQkDEef6jULUjXX9Je6Dpefsd6y8S3U5xpYEq4g7dZPtDnqF8Vk7TSQadrVQb7Ukmzuyog",
  "key14": "GX4CBkrm6vBvsikfzo92B3gR3vbVen28YaUF4Z4zrp7iN7eoTXVoAuQgHXauCZx5dDWZ5FpjMKxD7oT2dbnQKMY",
  "key15": "3o7fe1C6FJbrx6fK1HrGskJaVMpqBP3i7GnZo1AbDJGCVvkUuw8QgrURvMM3cccpC17LUXSnta6UPHC9jogFNWPa",
  "key16": "Af8mTjSQQyYinQzqV8qyMSr9FuyDA28BjQDmDFKtYXkZm8DC1cVJgNA5xdyfJwgFBQxTPk4dpTJ6VZE93kxDVRy",
  "key17": "511tLJrCDmiGVEaHm1hewd3ZQwBeGuQfh48tLAfms2WNjHG9ik6tmiFFjKPCV66NNajzFLChoACRsv3Mo7kBPpHT",
  "key18": "zD3tjXmdcPkiBBtbHzqF2DxBz84M7UxJcZNe1tc9V4BzGt8KBbrXentzZaLQaC9DovNZkuiQtxftCKaTRQZnh1T",
  "key19": "64ZhDdnnqqrVbf8Mx1Z6JiZkuG94chRwGxGfz5kwskyFsDoZ2hdbg3wEvVt5C2vowFnR45y8HgW2kiQ6kdDeVLVj",
  "key20": "3ezNf6UR4y9RuLfY4e7YqBhJSSbAC1xbUmGJFQRaPfFWrwTeR9rToRALtYwuS5DQv4JhtZvEiYYhmqWkEgfMxa4o",
  "key21": "3ZynwtidvWh7yhg4cXyugVt2JoDQ5EXxjSPKaw6yJKCtXByVZJxk1LkBKQ38s67ATLgRkTvrXvtC1bRxQckfcTxY",
  "key22": "64F1akGG4UMrDXU2LDAUwj1WYDBX1TUXrTnQEVNFftNVhAHSTbw6b5trUxZ94dycnJeUmGEB6GMH7kUisWqj4chV",
  "key23": "4yVsgVduAamCHkSyKe12tMD4QZJEJ8JF3S52ALDkoC19zoWDbxqFr9e84JtWGYvdcx6xAeXMCSKHP9rdNA7ofLJu",
  "key24": "66iiJEKoAQwPE8VwnbfHSGv7rJrmDSczYecgDrbqY1JZsN1enhF7HEfim1UuDSEkUh72RpadYdGV6Ed4teJ2qLaP",
  "key25": "4dfWVt6LtHMu8bQVY6iMouoGu3hfFKJhbQDpvwr3NCoySC6NJZ7fYssd5PXQH2MPDVpfSSNTxpBXMhMHr51NzAg6",
  "key26": "vUDxNQ7CFhUVYfHk25kAoUzHCFgXc2ppkJLE2VA8hgm99eyAaXZa5E9DQbHFC6GZXiBW49XRm2myDeRjBk2sAAH",
  "key27": "4AbCXPfTBdzkTCR4s9kzkAAN7n6ws4DJp7PDBjhE2He1Muxf8BXwwyY1viyiVEJgbzpgvRCWomue18BF3VPErivi",
  "key28": "2wAeL2PjLZhPcbm1C5xSSA15ZaZTNBYeJFms23UfS7yCtUrRkLdZMDf7xtQjP77Xq9GHghEJAamsBQ6yubAAvxkn",
  "key29": "3otKeDhppkfyE9x1Um1HANkAecz7YnzLTYRAYziSaQJRkVa9fpBtNtjSmqQeyk9GYFYvui4ffoLuFGoAGamWyhFp",
  "key30": "4XHoxaVHqmSSx1g15r8tRwpy1rYgUW1kMrz7uvobMpd3fpF7QsQR4GJFmtGizRPoCNqTjd9gPJmzfrC3hgpKQv4T",
  "key31": "BAB7EuBhZd82zGrzBpXjpLsf2ZNaiZ14DRNGx7YhQeihXf9scf6MfXHuQFrA74HwwHpvQfvxUPSvmsoTCRjqaRP",
  "key32": "4BB5PkYTroRDKQiruxtnVNRcmadLCyHr1dLosVibZkSvtLbWajYkhXc7XPdKiSgpSzjRysPijZqmYAWytynoqbKD",
  "key33": "22jFJhd8AVxzL82M6o5AyUSLdridgkt2A3HkXf41P5vyPUyFoKx3DBXpzuwzW7fizfYapmJWVFY7Q4mXER7BqztC",
  "key34": "3QGvmQNiyYu2TUM79GzPz7HD164SaUPG8dwQkS5SuwGoFLsfakgnmyEabX6KU8dair3XiNiEfKDj6p5dXBTj9LZc"
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
