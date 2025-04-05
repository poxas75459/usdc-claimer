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
    "4kz2A7vPbLqRbQcb2TVEymiKAocYst65paGNJpjmvzEjRNQrhH84BjBVHxWamrHvv8dwAFLXuTx9bEXFAWjy8WNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeVGBSVYZK8ccVM9FtEm84DbA1X1Rmdf5oL5GCjgo3FANadNNHJkm6SndDhvhRNw2ynGWLHZC9otshrruuFCsdo",
  "key1": "3n1TnxCkDfyJ3Zw4ivSvxmxR4s5ZmLMjBJqqNA3avxH3NV85b8KTjALMzR1KLWcBHEaqcwtBakFqjbXD5YV7tRtX",
  "key2": "28Xw7wrvu64A9VzHStL2J4nE7QJLP7wJorxZPi736UKhhwHAKj69TopjzWBnyKd61RXKgGPXiEoMNcsDrMLpWzVF",
  "key3": "3rTFZF42oysrBESUdw43sC5pTKMQGf13v4kBWAg8U1MkNvrCjgarzVT6DaKC94SDzP1HwE78zqpJ3RkMyDGuYmtZ",
  "key4": "218TzciyAVbZHcNB6yTBvX1goj2i5S78LFoo2Aeydgz6AvMFs9sP4d9zxsZNpo5Dtf6GgfrsokvJkcYKe7vLJdqo",
  "key5": "2TmXrjc2kKyPC7J956rUF1PcU5eyjiUb2HLXbj64GMwCu2i1g3DtRcG7ApuxEstWsw6BSZ79QCBfpV5PGEV1TAKL",
  "key6": "vNxC8LBUvYa3hP2mppcnE5kLB6QjQqv3ZijirYJ54rHG5W9H3x4ipVRvtCeVQnh33XJ7gtrqxEEbSKR55Uzw4nJ",
  "key7": "2Ytq9SAuXSvwg55zqWkmxkUNsngfADC3YeYvCnJMAXdmPRMWqzykvKTsza5JQ58EzvowGENs43h2kmnsDfYFCG5A",
  "key8": "4JVXHC2X1UWKtWf8axWisZMHHSVqsBLZ9PwbZsHKtwhqA7qu2DBBDpAVgqqn5gXQBd1oDPShirbxvKHBwXGHHVgQ",
  "key9": "62s7xkTEPXxabSQWtfacjyRGukcY7G9FM2MLesDfPNJL6iJ8gTn4XWx5AqovEqKQTuhX1XWhkg3YJ24F2tfTFPan",
  "key10": "4NXMemTtpUkvpeDPdiFCTZptFwEqYnPbtnQTeZ5uGkYTCmgXAk6LHpzfEqD1gVNG5451ekDro7bR9W7pSnkkyAnH",
  "key11": "28VVE5rzb5pGwqZGML89KuNZYb2f3nzuTm6fh5m8j4BHfNjMNnk5dz33qVuSDWaCdXwhjBxdSqpxxi6i3FeTP9vC",
  "key12": "4hKnRfLSndLGvrSjU7nEVG7UWh3yoeMGkddbJScumTqmbuieDMj42BJ8MPcsgc8iRCkSK9KFzL5cXkusPZSZPRV6",
  "key13": "5JqpCGZ2rJFkeBqarjWfrxEC9seSe3gyezKBQbwoXRAprp1XbbFERN1NcyVmSW8U9PLhsUekGTgWxtJmWU154wAD",
  "key14": "4Xhn4RLGrySm4CKgmmpVbjonSpQMfJAq85uHJF81LVvR8ebnLRXcaWVFGTotrqDDJbYSxB9t84nUKDER2YcVj5pt",
  "key15": "59EB5FHMWBRhNvUwFyBsXE3garYwHmxSEwDYChJUQmFiKK6HT62pE7tymSXkh658fh67fNFsTPTBkTanCJrhX41Y",
  "key16": "vrd4FV9WczPxXp3745ZDPbZQ2eeAacovaoGkwN9irphz1uS8A1HUnrzDaBSNAejR9W5FW9udgrJWtuXqtuRPJRH",
  "key17": "8BZCmVexXdtHSkW4Z7Hrh1jAwmm7beWCRVbqgrYhkG7Q77e2vm8APnodyJSxshmNShtNywrGT4ckN8Z6E9Y2SVd",
  "key18": "5TFc4aH9RtFGQe19PbLuocr6fYeHZQDuMMnCN9x5P1DgXUfYZWtZ8RGC9CDXUHLyiE1ovoVbcYCc64oGq8SvDkLF",
  "key19": "3ABukUfSARvp9Bvbrad4rPUDuqAycLULzVQFoAHR6APsaXbrGVixBQZFwdSeHbuDdYV5SHMfcDVgXwB2T7q7xU76",
  "key20": "AfVfn4fcUYrErAyn8LZs2wjeySfKvu2HJ5D1XEVmZ2tmx5RsK2DnuCaoQGTC6rgU8UYevtPVcZ3d5ZS5ufpNJwM",
  "key21": "5EeeajJyU5Why2XVpAGtNyWuijbU828dHg1GJKDKbP1WbU9PdEhFYWaoqhY8zj5bM2jM1ZG4GR3fwT2wEjPPBbmi",
  "key22": "2Kgmu5PknZktnusjz2kPmNEHXAVNLmSTj6io9WskYAoZSH5ZmNX4X2cp42DRHjRgs6Xwggf7RevSuuJ7H9961Ctw",
  "key23": "3r4P9uNR1EA8tXMohoyxdfpXHLaygLjMqsmpa5eq2zKCuuKMtezfbw6p4wivZvY3zGfXkGA4Tvjoh1bAujcA5Nmq",
  "key24": "gsx3NnZefwJuFm8TcPsCt1XXr6p4F1Nb89gtgmkx4w18iYwy9xvf9QQypJ7xhz88na5fUK55zmWdeEVBDneSPzF",
  "key25": "8Mew1tyudQLqBDMfuGZqupCACCNAVu4bj1Fg6LURnWtThv1yZhH8bnToAFceq52Q6o7tAPztRcvmDWyHXoF8oQu",
  "key26": "5agUvBmHwqrKakfR8bokRaPzCaGD59Xj1rCN2JqEgZx93ojH7gNBoHPs4jYNZY3AiUhupGKCRBkJWJ7TVLdMhxrE",
  "key27": "2rKKmh1LvrDQDEwJh7VYsXbzSrMyrvkzJRJEPehQ33WyaqcAm2vwKQZkUPHibkvqEWmY6UHzDfN1xigY6MQ8DP1h",
  "key28": "GsgpFvyqXbrZrE5TeaCU4Y6HhKtMrBdiiBzfWXFYjUdj1zi5UaHarq6aV1LBrGf9k5siurheCdo3r8u97vqCPek",
  "key29": "23tEXUZWMrwkaAaQrSHgyc1BwTYn3QhRrSHfUm6tDJi3fgWXUVkUKVnEvwtwHoE1qA6RYiRWHUVY4goHtspxKQgV",
  "key30": "4wsXAGc5UJHQhbfvQcUwQi5iRVoGttGFLGY6CN72C46gJcJVbHHhtAMtfYy9gwY3pqehtMH9tRyLtNKatnmEs1VV"
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
