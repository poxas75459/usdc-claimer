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
    "44JBgVj6D7iZ7SVCXaGtiJGxnp6A8qHHtFiWZHGHswGpTUGw78cLfnKRRNYcQzAn27bXFxoW6P4sFUuJQBN7dXfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MpzHVkghvgV5PjXkSQZiYnEdrcBCEkbSrBkuzztAvA4zWC8d6WzQqxz6dK6fdFHzEwM3tpMqSoYT3LZ386khkyD",
  "key1": "4MQkNs633STjPwWFoFVzv3o5GsvsuZuJ7c8mMcVCWnzndnYsRjhZybyweEGKhJ76m71HQxivmXjn3CJ6SLonZBvw",
  "key2": "NpNbdUEkR8Qe9yhWb1RDAKHQ9vnLyBhHGEmDpHh9cxGuhwgHfb24dQexHcAAXMVoCEwDXyMpb98fztRcTi2WM1Z",
  "key3": "2i1JQ2cmyMeLGmMVE3AchzPNJoJZqTzLtWMaVoqhWCqJF4BzoxuaYSe1yF3bphofoNq5Vd9HeusE9LvigffrnxbZ",
  "key4": "7dgsvkWhagmTDL2nzy5CChyHUMA9srKvHeREKL7RZw4NaLL2MpyrRzoC1nwwieyJ8XzfxmafZg5cYC4knh4G3Yf",
  "key5": "8NnvdXk9hWKvNUxDEXRkLzRpSQ2kP1QTPLJCAkGBjQoBx1KP3UyzaKZcFFEzmR7ntMdQL7BHLxeGSxgwF2NcCiL",
  "key6": "5qcRkSAhpxVBpdvri1zydLjGrnYmgRMryf6jNekeUobNfwmwKsd9a6XDbHgkxBDxBk7nPLPyT1q1SVQif4q98dZy",
  "key7": "54fgUgHw6bxKc3nMk61Uwb8FxxT5wi1LzQhoDiZkqFw5J7xckykST9qqhjb2itgXhGzcR42kSRu3JeBCTktLyswf",
  "key8": "35eyMFQLZPcFn3RPYqgKK8wSBjT973qd3Jv7exjvzzHLiXARYYRVQHMMdgafm4vi5xWeaoR92LmyiJmEgRNTT54b",
  "key9": "3DVphuamBFY2HnJL9cyXZ9Fhmtj3XgpNNsBowYfLb179jiuUUePMz3242wTcq6Ug6BWSzDv8B6jkPsitZxgJCQvc",
  "key10": "29j4MGUthjWuvZgcxHho6pfe7w9RenYFndEMnPWpJTbokLufSJjGDvhqYFD6qcNAQo2aXFkDj6Gg7d2sZSzERqag",
  "key11": "4RijPE81y87N1yeSRXTXEuvLRhubRcJmqVHE28rR3p5tMxofUTwsVFsjfs1vyR2dSSj9R3zRpLh3hbCGH5HcVLe9",
  "key12": "4fDAWwqnfPvQvZSYRzPsTRiEiZShaXW1ykyZua8uEjTyMmu5KumRqVTH9Uigagw87NXA7KXx6wo2NuWvijFqybfZ",
  "key13": "hTmXoS5w8icuYa7ebSw2soLxtvuuYsKVUkhn9Jd2itVgxsdSa9vi2Fmec3kX8NT8DisJEmqn69yyy7pzcVxGWxW",
  "key14": "S2tj7LmJK7jq6aE4oovdK4bGumyEDHNmYW4qxbDpTBem4mM9X6uGjjR84siPgUpK1BAF7t32CNZvWY3UEEqTf4F",
  "key15": "65fLuKYrHd39aTV7TH4ytHVf5zUYafhJ3wmTvGNs6CYEUy9u4niBPkMfbWX3F6Sb83AWgxUytHZPwGZd493DhF3b",
  "key16": "Fs54BpTt5TwDb5edYqDVBeianHcYu2CsAwJCHSFb4cFuaR7DMsJ2cCixmSXh22Sadmn8e3XY6uKEBR8uFq41nJK",
  "key17": "PzknhM7iNiZHJx8AD1JbT8jjfR3zHDAeBifbvWoCiGyZfxcU8m3iiFxVQXjzVYseBqTNe52Lw1KLfuACxbgAYZ1",
  "key18": "33U2TMhYgTJM87VkxATN8oDRRmpeSy9pddGWNpe3mjGMn7VbWYZA8BdaEwe7rV6ndr5G6vpThwJvMwaXGNa8CTTQ",
  "key19": "21T8vjo1u3CeW5LT9q8jwTLGtNLNvwAWPD6oUUua6NbqBq9t8md5wV1hLfhDPbEuAqobojHpZrWkFUcjszzXTERn",
  "key20": "3Nu6THFivGMad7LWubCNHXjaQifFkThiTdfZcKMWFNPnEvDqHcqHVfBYER2uP73wneBi5HgbasRj7TMeCrHt93EN",
  "key21": "4jKGjmyVrJmTSr1MtEC2d8U5PgmcFSmALhhcBKgBqPvGhgFQLd5aCkk2YRxd4MtNa3bose8NRDBWC5UTHpLFSPAP",
  "key22": "oP3gLZbk6pLda8shXBim49yCCNTJLQxhYLaXR3kypkp18T35CLmXNtCtxka4izcGe5g9bsmS6SVaEnAwex7UbMi",
  "key23": "5ipsuyE7fabf3Mb1wy7f9C1KbSKFcEbwGNmbqsRUTeiPrLPPCaRGJ8KqM7r9cvsdtYGQsrCf6sHSEQssrTtGEJu8",
  "key24": "9cS7jCrvq5RZE7zST2cfctfxxUurRADrVJ1JLS9kMqZnYb1xCqtEDEKisAzqoFzzmcnCqoFe4qZRNoBTFHkRd22",
  "key25": "5E7iaRWrRXjEVFMHPjW1oRwa78dP5ASHSFsca6Y7HuUAHf9Ua6Hd1vWqRShYADeJMeALHPpkgiRdZkshndw4tBc9"
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
