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
    "4dFtWSWWsMk5Nwn8Yyg1jkjQLzS6qXus1xdWK8C8ifdpVy2Mh2b6vEAhz4Lbuz92Apyo3fR5vLxKxXoNbjwvMMx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242gNXyQrufZwbcYJpHdmr8HaUnQmsugtBqguzWNNYhrqToQXTqbQhAgEn3kKEMrFPQ5Wr4d2MvFGc4orjooJqjf",
  "key1": "5aW3AK1kxE46MhQdxVjW6eUZHZc7GZXgRrjXcAg7kNTiZyd7TaF8gGgUsXW7mDfYj9zMjozq6NLugwxfLm7ZEY7T",
  "key2": "29oD3XjmLu6TDmpW4GgeTxLtYmhMeYVXW9Bmxd3Tb5FZ5StJNdBbXT2hDN6RWE3YYnUjESUXYHHeRpeerWwkbBkx",
  "key3": "Lhh1woNGCnAtnYgLB44zjUAmmM2jTSiZovcYtJKCDvQJtcHtJJ6RMG1GYqLFcGKFjDaYEBtEqoykPfKi7pHwxMw",
  "key4": "TuwGq6kDXMoDGKUHAPfLXfV7DHyz5NNGx3hQGVJ2VAQwcHPBTyWcnRdExrWBwTj2Ubmb3HJTc9SxeKdwzZEuuDL",
  "key5": "4rFjKY55Apnv1fwymEZQeAFyEDRQSqR23urQds7ppQ3HZKmkZhNft6EvfNqeA5LabV9xAMZJpZxu8FT5eAYknTgk",
  "key6": "UTmf2kSabgc97gPyMCNvtQXw6Sywy9RVKTkok7xf9vsM7ftLVR1JBAyTCAr5ui9JaThKb3xmNWDFyWykUm7DyYQ",
  "key7": "44DEn3qoLWDe91V8JZottSnALMRXK55UzfUp8RQwd775xpb11Y6J4ELMuAoXX3XoyivDpPGqRDjk9a6mmndb23PN",
  "key8": "4UMd1Nst3UWgnrWF4prdJFgkyDZfD3KU3YxjYyAis1DkXySCZdH8MsQ1pv81KsasHRMqTuHBCQSYfEiKxNgBu8GD",
  "key9": "2JbXXKzx7VwRyHWdBc9SL4BpUbm77wFnYk2Ynxwt8GqSdqrVAitsdDNNg5z9y2YmfkkpJP65Jmsur33JK6BdB1ga",
  "key10": "2H3gsPtVyXxQvdSZKWXiAJhipFxFA2uPU54sD8cYBEDtnmKPp89FpFw8jYeEyUPdEkPKeaDXK4RAmEhmRxNfQC5F",
  "key11": "3bhvc5MbyrTypKVHz1y75q5Aufep3nWLmVZMef8nGNc1zFimkmE5uhw92vAAaSdervLKTTg8WVnF7cb73pvH7cQP",
  "key12": "22WzjUxvhCv49jMEG1tjpSryQ3JnkN5qEwq9UVQrueoE3ocsxzEWTaUtjb5bnYANmzys5nsujLdqK7LG7ALbCHyY",
  "key13": "2PDG5DGSnutK3o57HphFY76uLv4CabtdkBeX6WuVmAzJ2Z5kU4Rg6MdYk8ua5RHFAYDvrMBXrgr4PL71g3v666QM",
  "key14": "7Ji8tAMtrADD79mToMSStsSJkvKhZfW7t6KEaKsxxxCpm2qsobuyr2oSBnT9PuS2gbH9xtK7w6nGxV1WgkkSkti",
  "key15": "3RMSQ2d5GUQ5D8wXctVSGbvpTXwPdqZxyfM74cpQUnDfgGy5XKbFxht3r5QKXvQ4CbvtuEEjetnHFZ8rEMCgbZZ9",
  "key16": "4mb23F2NddXsxusbABrFbxsNvBZ8QzaUmcAxc5bQAYRreiCGXy23mzuUjtaa1G9jC8PsLh3u5TuyoAZd7BQcwitL",
  "key17": "2TjKRydAhLCoy9RTCdJnFUQsf2cENcLsZtoWJuekgheXMQHq3RnUE4f2cCmpt3umBkZSB2AU5u8mKa1s5f3akqih",
  "key18": "2FvMSnP3WGhi6TRbSF5Aukr2uCFkAVC9N5QdA2pEs3DEyd1GfL7nhJTnYLJjdH3GBVQVvgPomP9BDULDUkT5Jzya",
  "key19": "4Njzr4JiMzPzMwHwWGD61VfHYT4aHmewLR5Vro8nMEc9zEByvrTJWvcLVJnqEHFe3g37ALnJWXrTWQhGZEzYs8AE",
  "key20": "Ye3MtqvRmFjKAwjq69LsZGFGrz9yJS5MpNvWcc6TJM24oyHMHwmX2PuWGa8PBM41wb9dbcNcLWQegn3vSaM85T1",
  "key21": "5voeMMP9MqoL6AYoDpYc4FsRWjfeNFE9jHf5BMSPHKuAmG7J8AR1xM427j7Viu3v7UyQa6WE5YmkmuvZbvaKNJ4E",
  "key22": "bNYtcKzZ58MvBqnZhoZysZhoVFtambzh3PHEfgVz67SYKrHiBfHJJr9Ri3ogyoYPfix2WiYX7eKzMqUx2mMS2Ez",
  "key23": "GE2RWNG6deaGbGLQzfWeg5f2cTAKqbTq4ywsqwAjaEdshU2UHUBHr9jJ46SCX8AaqNB8m2sM1ppXkeM5zxJXvze",
  "key24": "UGyNC8paSUmfruzqXBNHDtaQmr1GndJWm6YZgjdkdifxD5SY2BZreCk3AWwBu56afnoGKiSh1xK6vhpEzLz2p1h",
  "key25": "5B7z3tbvnXmBqo8LwYaQA4mnFPcSxRNQnk2UxuYXEpSkHt5zqANuYEhH8BpBVhr6jYAnjnfvrEuauqpTCwHYrkaz",
  "key26": "yLJMThWPCyFZwLGGSzmshUwEgH9fxtXBbdFDsCbUCaJczxSvg7u8pQXL5ZmKEvaQPsNMqYt7LQDPbbq3F69Q2zR",
  "key27": "48Gcwd36QRdJzDtkBV5p7t1Sao7yVtL9yCYNphdMiJQ34aETpTVyd7af7UUsThCijAvgMQBiUEMzmN5RDm5pMBSE",
  "key28": "65afovr9SofQdomCqm6dFFfYeagFw1r8a6W1hSnK2kvw17WsycwWyNN1YejdoahMRvv6Ndq6T9hzejWh7h4ptbBq",
  "key29": "4TH62iN1g4cHUdmSt2qi2PXxoyeXwTJyCDczjkkwf2JQAggSuhysNiNGybeHdZuKXzSCQbWeT9i31DdBK2pe7wTZ",
  "key30": "5em8bU8XysK9kLZVZNztgeqCuqnKdL9fu6bomddbzJDYN7FDtmwCahSZCGGhmwjLEQbQLN2oG5LL5m47GKSuu9o7",
  "key31": "PUqeWLgxeXwauhA2F4WyLJN4DVtXW3tf93YBu79kM6etG3fd8m6iwWNZhDjDjhvjm7aRrLWqB1Mnb8RFcU7zHBd",
  "key32": "2fwaHYgqqkzDcUoBJhBRq2VTYaHp9RsbvpEwgwu7btwiPKrHv9nAZYMFVvfyic6dcfxoz8CSvxKgwgmT4CgQBjtS",
  "key33": "2MoaH8CeUh2HiUPR6c4q6666eibhc5mQCED8PHJUehARtgBN3HEHNd22F78P4D95XNV7WHNUa6bCLkCBu2Z3ZddN"
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
