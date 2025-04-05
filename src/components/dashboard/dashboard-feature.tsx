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
    "4UWGhQEtrKvfJZEXFamAtDYuR96yfqPADdDxtbMhPhKTD928js2DPTSGnMZrA9X7n8T4xxNkXicFXNj4ADezSQQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHS3sbTvK7Hb2Jqh8GwdNKgyG1K2zUeMjPBY4qVxou2xJnE9Q297m8vJBdbcpQzZwcpVsoJvbhryDoN8b5vrZjk",
  "key1": "2MNPwsxNLjQ4BSQDtFg9g2tY9dH2YHXzjRh6qytsjxvsbmwYfcmLU7QmtxhAZGxQLwDkXi341NNEymJQD69WEi9o",
  "key2": "36LvbDjYHWNtHfyEAhNYhCKeaFk9qCKrXtb7RDc7gyTL8oQ3WgWcu2pgkvALvPDHaCZVTvnGg97Hujh3r2g2vDqR",
  "key3": "onErrJWNQDbYLBucPeLqU6kocZYjxQFG2qXEycsmAa2Cg65D6NP86UrF89r5kSXgwv6swHnH3T2ii8vsdJ6Jfbt",
  "key4": "sSCfvJTC33Fi3EaXAQ6J5kaj1K7n6h3pf6FtL15kdJN2yx1zWzrmt33MBesn8biUbZJffsto6jMThxbfStHhkaD",
  "key5": "2mYBvu84c1wRs8BijWdQ5MjM5JPjnWV9Tcv3yVrZFRuGYshaqMe6L6MZGM8dgMjzYbeycLZWcAfaUeR4Vm97YeSx",
  "key6": "5v6muS6g4yPZF2V3nYyiDGDR5WUaYPKCsCPeQQq4jF37Q1MFpR6tQtDe8oYHp3MRvF1W45oEbM7ZQb3uL7HgWeR1",
  "key7": "4vKcrgY9NJRxrbBehoagqPJ9ewXSjWQDfjfSYeHMDTqakD4G8t7bSkMHNXyyWtKDvPK6nEwf2zKSpPvLucu2xerc",
  "key8": "5s4drsftQXTC6R8GHcvV8cLcHBxh6irZgdqKBb7aC9w94Ko9U6BxCaQMWmcCKwrcVqHn2sfbgqQNVEVui4tLQfDE",
  "key9": "2Bj8AfaPvzhY5v7JjRtrxr3M6UCgrvaACAJNM5ZKQNxeVr9JEz2vkX5MX1SgqaVYrvE7huiLxey7iHsYjD3usjFz",
  "key10": "23NNMhmu5xVrTNmY6EQPdrh1HW2ZibmR7vNrA9JUyUQysjtWxqTQQbihixnXCUFrydZvWgWXo1W6is4aG4pjVvv3",
  "key11": "61a2ATjcatZ9EyqNfwYAHXYNL4DGqQ1u8KwvyzVoAfkjQ6mnA3qtByn4s3euRbw31b3JsFxXXWPTVKNdmTuxUFCP",
  "key12": "4G6q6wFaG95oEZjxNb8B1mrATLnHUdv6wxE7ZwR2DhP9D9KswoJG8KJ5Ewk2q5AWD5U6YzVdf8STSg4WdBdbSb38",
  "key13": "4oRqhvJFf6e7SLKR1t6VvtimAF9wMVUY5qUseAZ7KY5bRxuxpyVyLhzXeCssNHEV4fuYSCrab2YkHYuH5dvUFTkX",
  "key14": "2gctTeoa1XQmRuABJ9fYsUgUgEC6fYq7NJMye77kPnFkaLFy12TV8oc5zP2zvtYAM3VhU8yPVqFfSvYBYBT721L9",
  "key15": "2myVosu6VUmRYfi5DGPGSVST9y7esWQ1EuefXhZMkSFbYi5xbXMoTdbHRgvA8YWRg5KhkqPfph1pzp7s5wLZTs4",
  "key16": "4iErR9SpcC49Dh93tcWFNzdL9mLfuSmBMsGzK1oAD6nxbchCbHEHUzXQ7tSPZR8T7boWsYetohj5cHbC8qi8WBBT",
  "key17": "5JZLaBfPxSRTHDqFYyfk92A3mNwtrdgARr2Kjw1gzCmpsKUciT9y3vAUEDUvB1gz25UT2mHXp2Jr2JLm1MLeRj6x",
  "key18": "3QSk4T1RG1UB2LLACCSC4sz6ACXPKm2uZxUqB1Nxc1FQv27cRZkrnGoKd8y7XG288Vpu7VsgFbZhthp6WeZAcNga",
  "key19": "5pzEqxZbWrBLtY7aHxuNGXGkzjXJrEcGouJEBjzxDdBWxiuD2JNkqb4hU91yPTzNggHLUT6kr7w4FKfZyBwdMuZ6",
  "key20": "WGqdRjwSYbgLtgvB4SqyTBteqX4VcJV2PgZJG9NRxJ3zAzYJk41sKVUHg7UuXAqSmHYXz9DWFEibWLp62Zg11ZQ",
  "key21": "4htyGJWVWjwp4QbvvTRwC35XBHZH7aED7oN1Jnt62tZBhHRqFYVfxfHNZG4G7xigxvQ77n7dhH4Sfr2du9ny8qLi",
  "key22": "5NWmcHEQJUbaj1NRLGep7nyekCuKRCM4jYDRrAVV1BhMxV2BVGvULFfsPtTCkZ7LFFBxiU2cvf3wjSHBvnCkFQ38",
  "key23": "2X3ovLi9q6vgCS4DhEeptQ2ewsJpg7kDcnYLHfopimfUzkoCmHdrGfCPBSqbAwMBFZJk9XY4BFoMXsLcnBtCGsYN",
  "key24": "FbYL53W2A1NhxdXxksAVSVQoXoqY6Ttf3o3Y8ANADfwTL5DhN5hkjRqvrFFYiQZooeEY9EDtUmwrZhejAdnxKZD",
  "key25": "2UXuyzjXqMLa1Aykz8KvxibBFdsA1mRGF1RKdpiDYF1uosTGDbEbpzQoFAjzw7N1Sj4jCJAeEcGxQMSyoALJ141b"
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
