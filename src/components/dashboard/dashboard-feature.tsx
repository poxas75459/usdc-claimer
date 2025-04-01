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
    "4u4P4XvJNEacmFfMob3Lzy2a2Us4Wvq73X8SXN9YabxogSxyomWRxdWKLcCz7Kr8QiSgEtLzYWKGsUGas9z62PrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHizezhXgx8fEtgyw6egS1WNgpfaMspVXPZFUcXxRzavA8A7Lvbj5em3nGbHDXz29BTBrgsz51QbRd7Y2NTE3K6",
  "key1": "4XkAFtJzUkPewLP9d576RgSGNQNjG2F8jCCjU7RUHNK1khSu3tPHotQ1tQknCSRb3ed6kGo12jvwj5tRg3NoYC3A",
  "key2": "44mXkXK8L89trP6otYYkr27VUdUP7oDxmWjnkoRJbybQBLZ3BAgQJXsntcUSHvS6jcu7uvjvgokAtLLgegdu6jz6",
  "key3": "wGcV4oFHs1M3MYqsPA5MfJQgBzugbgRCMrvvoocLprnmBufDbXT6KeiSoYyiar2MrULLUCQRmAezEHFQiz1y83L",
  "key4": "22MfULUsCppKUdQLU2Tc1ts3hBvn3oZdxqjpHCs2nr5gABpxmJQo9V9eHgu88A71n9cTUeNMZF9bg4LBxqBGogZh",
  "key5": "62mA3iN53Y3Q7tHyN5E8nnM8NZ2eDpbhAzvMhyZv1r8NCRh4zZGFzFATheNZcxSEJQTRV7pngcYV3vQXk8Yjg6fu",
  "key6": "gKdXZY3PNY4SD7TAU6CoQ4E4DkJ34GTVek27dJBASixyxEoijVJVq6AEuMgMJfH4EPJ14TYoYVp5MmmsBTpqh79",
  "key7": "3nhb7ii13nBt7s1nhY5MGbBb2pZpvSQfEHbiiWzMYY3tUpbahwXQTMurc4PwN1B8f3LHXUxJxwDveNEb3sVd6Dew",
  "key8": "315VQKWA5xS9ptUHni9h7zJSeHZUXFXUiyp8Ycsh4HAxduLN9Z4gqFZxq23jVpim6Lfi2ncs6wmYNYPaikwV8Qp3",
  "key9": "c6NMuqeAFs5cpdBLAJGkrFev5vJa6WkbyJKwkvzxnceK6uKQRG5PhB5gaJgwXF9b5skP3hdfbjxRSoPSrcPq1Qv",
  "key10": "5DHKDYFEA3dYuwBepTWNJ6EJkjhMGhVvGmDrscDPqPCxLxhkRi1naQkkJyEMhtnpgSoz7vfnoqyJdCh5w1ZxVcrE",
  "key11": "5Pmwhs6ZEvmcLqKBiBypPcT95qHs6JF2K1Xm161Ty1QPxjfZELFbMgiGCiy3AnMKFxiLhNtJq25LSgwP7WsCZzfp",
  "key12": "31qrN1p2d96MiqmBQXQK8z3kauWwF7Ep8KjdMwZEy8v4ts5WouPwKN6mdQohwti518QkXSWM4NbggtCyZWu9JLRW",
  "key13": "4zu8feZwAZYnjJvciUKc4w7Y6i29NAuH4aANK7rBuqmhbpXvLf2vyY3jwbQw1CExt2oak8ReHJ6jvZz3BjQDDjNd",
  "key14": "4iPfbDxCkeSJnswb9ZJAJ7tY4SnHm1oWSfKgE63d6A9cvQeMtoEPNiBc4ziPVNgfQ9CuUnALtN7fHTG93ei9ENAB",
  "key15": "5iaL8vPS7qNttubXp1nF3QKpZZcjXWTt89DrsoTQsHXMFPctwCH9sJy2jVuqgdFhp1LY3kYKKcfTHg9AJCrMnCjx",
  "key16": "3bW9FH1vJanLhK8rPwYkJ8DjRaZH8ZQhLYQqW1SYwFta7HcPZaQWarKPLTVpwtsyh3dZwBk6bQYZmkQH6rBzHc8g",
  "key17": "3XaaGMrGZzCArA6TSp1VkrnBKXweng4cm14o6PEMTybbMD7FqphDRBkHFMFsMz9NE9dzJ1hpvv4SA9k5dwzeXyF7",
  "key18": "3mTCCH9yZzpLc7r5sHfZbgjRjsEyu67HvFT2p5iUcrYxedfvLifDRCd7LXf59MnxHFhfzNCqpuzqujTa7PsWKsyG",
  "key19": "47buKM6ZSDjXaWU4irDGu45JTBQir6BhcqQNYM7o89f9FuorVfVdZ8yzj8xRXddZhBJb9UWnLpNg9vWt4vmJW1bn",
  "key20": "3af6mJLYzEd6ntLi1vvpEcsrcA7BVy2oXkkecPocD8rjwsaeDQCiUo2tEGEhPiPJKJPhRf3tbogMNpynEMuvTtJZ",
  "key21": "3mS9Zw6oqwBtpvscLVMhddvnkP3AjQSATVtM4QMZCe7S5tasUWYp6zSUdpcBv73UxK7Q2Zd98CS11aKTSAcgoLBk",
  "key22": "XSXYrwULMrM9sRSR3qN5pHD5ECubej5r4coEp2SVcSXLf5rLDD7X9wLh6amDR4J8rfQBiDc94dmmWNWQNv9Np99",
  "key23": "5rT2URGHABJWbxsZehX1wHsDoAy3BCjAYYk5rNBuD7ySkUTxhgaaqk8TN7NSnxbtRT3Pw1yQoDUL2L2aJ1g9viBw",
  "key24": "4kBDAUGCypzmNPjNidzRdx9KS9zsFw3RsxLeiJs9UP4hB5gQjhGZcnWv5J1LpEvwKkSUyjn6bM33kcVCM94XaBH4",
  "key25": "3NwUsf9gBPkZQ7PyKejrasqq5TxXqHCkHQj2tKY6h6RqW8iC9BFSm2dJ7sm2PFVLiFfShYXgwCdo8ATXr2UcfnYN",
  "key26": "fyaDkWCTRcjzM2Vi4afx7QKpVLPH1a9ESDQdRfSsqbEPB751iYP2e4uX7HLEbddeVqdGUif8QEYJAY56mQ7KQjH"
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
