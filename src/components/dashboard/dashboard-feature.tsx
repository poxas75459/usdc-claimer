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
    "4W4Lj2Uads2YozrygzjpsAwtu6TPYypiiaXEFiyEJ2y6sibnKpzzmVmaJyKzg1psQHFpDb6rXQPWtFsKcYDbwriw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646GgNJk6VepjCPzm2yRkJPo8GbKQjArZJyxT3bx5ZhfEXo1dzg2aH1u8ZPgbvKkUSHqZLStwxFwLrXtgDazFF3G",
  "key1": "5xakccoaph9r4HUj4MNPRPFQUcCyiwzPXQX1jSLkG8aS1oJnksNN6mzukQqCk1vxnHQUrRxexcJpnLNWtkr8pNZ5",
  "key2": "EPpz71vxZFea5XYy5atWtLNVPz58dBsHjuFhJWmL3LT9jgTSmXzQs8wZm9a83MN762APNxwgCxEpHcaP8UyDvWy",
  "key3": "5773yCi279BDSDbZ2Tht3qob3NNEakRSezo1at5XoJKYFCmWMTfQRsyCu48zx3VEgY51ckHGrUKe3cxYgT2W5nHw",
  "key4": "3w2v95RHkPLhKoHjgJN9ckExrKep6tY87nqQcQm6nVzj6AkvtDZQWXvoJxzTNV57aoVSgCheUg2i2JDXgwcZZV2f",
  "key5": "HREfUDvbgVfBZZNLWAzt9x1QvVT6n4Hfm8vBDCYxyyPFSTvyhxWeTSjN9SZvj9hYwjgj6dNNxDyMPZ2xYLuVHnB",
  "key6": "4wy27CBVi7Eop9XFhMEV1vemYkNd3Qvsw4ATseKaA4CG4QubBCvEwGuyr4rpXmQdo9nEpTu7bPy9GnL8CfNfoXG",
  "key7": "5m8WvgZfNtNkDWSCaZ5v34mkXAXCT6AsPQxNoComoQWSgeALkDQWzjnUxDVVXWDifxpjZuzF3kwvWF7ZQUcyQpDv",
  "key8": "4VyBu1wkD871CKasc1JAs2WbdbMHdV2FAzopQMk1BLsEKqfcDDLa6n7NbYJiRPVnUjfChUA4bTWS3op292tmLzPt",
  "key9": "d3yjAamajXFPPWqrgw8Jqkfzjv5waaxQvES6cXwSCjz7v5Xcv4joxHeLWE2LeVQEazD9SUXtDAUR29VXjcY4Ysc",
  "key10": "62chTeFinAntBWX5VsiDYZggtnGw52PatksSiwmAXwZpkWzbeJvkLJQzqDTc3my1NmPAk1VTtc5WkgS8w4dCNfww",
  "key11": "4KPxKC4ZLD3dz2w2zWMUAq671XPYLtiXXUHekCigVenQ7pdtohdJw9bWoMQ2xyfxVH4tRhr5NsJ8NMnE52oDAL1z",
  "key12": "5yWBXoiv37BuSWgKoR7AS6h4t9rCZjWAQ4RLuR9WKNb2uKCfJNVgGy38YwA6FWLU8FK2yp6UE6UmNEurSx1FXDtE",
  "key13": "4bWRcRn7ZduJMY7HX4qW5rueF1v7JJCH2JJZzSfyibiwfSgYrSYZZ8KrXqLzNYYScqiPo5FbP5pMbEo8EUEgJtGx",
  "key14": "4gm4P65DwYLpQJns4dy36FKrCtZDpx84rBTTushcyrxjabNMSdydu5wyZnZZTMt5Jock5UKSTsbXZ9FPHEseaH2A",
  "key15": "t4tA6XUAV5h5ydfMG5tN22MwPdGowNJg6BtuLQ6gmWfgVGZw3xWtpD5kmHC7v6FXvEiYD4cMEcDLPQfAyfPoD4q",
  "key16": "2X6kShQeuuw4Zg5v2zMxx7EXDZXmRZohByC5ECqyPcweVQ7zP8oJnnRwxMn3ByDeaZcp8NdsT5zbYwQPQHUPb6Kx",
  "key17": "jn3sxydwCW2tdh6RnbWaq7Dn7hdyYpgdnABvek4icwYhDccNdBpafbpWWwt7hu68QLMFq7PkuNYTaMjAUFuZaim",
  "key18": "xmXeBxNNaPgFM9q2kG88ecJJF6LHbvia9NpNuPqyXd5DF9nbsxpbm8kAQzf3vjed1QACGpxsHqbxs2PHjyvHzhH",
  "key19": "4nSj8obsyjmF8nM2wrc28fXwobKjRctK26X2SnV4kdaNEFfsremMHrU85aXFCX6c5f6WJyS1rxg3dAu9CcMTj63Q",
  "key20": "7cKYzZThQZ4rdU5JV2KjUVkHPA1ghcj3aPwro35sqrDBtNhoHTMnHbAnimbPk3eaJCv8kwbufkmfXMnem1Uz27R",
  "key21": "5NDg1JteqmqhF4GKv7KqoMXuXNn42dNkv5AJoCQFh9mYkMmY53XfPEWUcLocnYrspNfo7PFJVGspDjM1LtxUUHp1",
  "key22": "3cGXhddbPJYZXCMiyQ3aWdQUtBJa7156PzfZhZhXmiRtNbFpFEQwMnQe3j4E7mmZZYo15GriPbCj1GwPhGb9tyAv",
  "key23": "4rEyYXRkUoVZ62YPw1rmRj3aVjQYC9nmKLH8f746KxVVczCPqfZnu7kxGzh1tR4EbWae8U1xnvtmTE4neqqeXTvk",
  "key24": "Z7k3bUb5jyzmB1iKHdyUvwDh39XdxdkAFHgBR4REJKVXGz2yaJYBSp622xP9rxcULUkncZ1yz5RnkS1U3wp5bRZ"
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
