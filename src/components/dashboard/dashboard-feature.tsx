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
    "51J4feAmTuwAJGGAGgRMXYnie5H9F3PFKRFku34VgRwQbNR1h1a5MoWKi74oUyzNRbWoaaMJsDW4U4GhyrzEwBnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EExmCV6viuFLkYbpfDPCJbNeZDK54rCJiXv8FNEBofKotx4sKec6XFw4f4xxhAG59U1Y2SXxAKRU5VDNyQU83p",
  "key1": "9kfxTznAAMjX76mhBwvviyWynkL3x9wKRTg5zEz7RcKBTSAGeoy8qDK3vV62keCHRaviDzgNBxi4FbCDghqgeei",
  "key2": "2FGbmWkhvByGjytUFWMjwiTuaYCzUnAxcm7Gwxs7fh8ciVCUxqGFrfCVYfYcrqKtvDc89keaXcvYybQTMFishLev",
  "key3": "3qNC8yNLjXPewJFjTjZL3H4QgrxX6kNMz1dNasQtMBvwzT2VhWVYsC3pr6ua4E4SDa3dfPpCgF9fgQ7pbZVozrr",
  "key4": "u1aFZ935nb5pV8cUvZjL18EneQuxnNUmEZNeX2HnU1Jt9mPaCaPwjtbmoHGJK9k8LDoKwTqBnm9vL3hddrrZagt",
  "key5": "5ynaqLJQTG2VBdXEJkYDcDXPLiWAVJccQ1HQKmxDrxb5WdEpzv8R9gwLbYwFnsYHQJkYahKTFEnBiEw8N65ZbBTi",
  "key6": "4g9tn1NrHfMYMwJWXtYn3Zzhvqjr3kWDsVLasg7renzQueRgao37Qq45dTKTiXvVY1C9RwU5c3zf9VQZqoS1G43w",
  "key7": "2iz3zKgPhgkRd7ZhMXNfZTCcgoNCgzbzHNvLHzYdDPjcGRPckPvgook2dyH4miebSbM5JsKYTWddep1fsxp8s6ne",
  "key8": "38A2orLZgHKBpLZY541B6RqKEsSkZHPx1QXVFSvX5p39pw17V2uVKA3d9MKsifwbzTQMmoFBuAPNNn8ef6AiyqPX",
  "key9": "5NniiJPSaR7C9MbtpqLJkwDAJbSwzkJMkk2hxn2RowVyW2UqYpZsJ3kUNNLSs2zpQQc7j2wjHL6ib495ajaWLiSn",
  "key10": "QqrmWMUjJXHnpzLDrrLChK6QmCZzawUg4zn96GP7iFuwdXiHPtEYg9xo1d56JKnCHY3iPycznF6YcNvn24yqKMM",
  "key11": "328KwowddwHmWMXxb87fNijyELVe8ieAAusoaH536VDo8ygZbiKAZRtbFAfmbfrMbkRQsPyjKZGgbitDRDxCNGrt",
  "key12": "3VNDZaNTqdjuy5TP8hS5wJpdyZ1VtVRLbEn4FbZKEG9t9xo4FqmTuFVvgN8bDJ1oF2orxRdhUb3oDZ7r7qcUBnrw",
  "key13": "2P5axsrwWxvHKywcgii854Ggk8sb6dBTaM8VyBBANb845KG7qqAFVL4sisUdxjPwp21HFpMiHVfPnxDjcH1ZJQxG",
  "key14": "5iiusupfZiVQaq2eoAE3QnbhV6EqgaDXpGrg2kN5kWaHh52fRmrQ1ZxHBvAvimg1AXABazJFRurwmSp8oUrT7thd",
  "key15": "azfDGykmhYa4T9DFq8AScfZZKaLCqp5UVQdqUfBGAPgWPuEYQYUuS6Mo4pvmmmysBjas6dw48MmtQ9ApZwA7mZF",
  "key16": "VChto72QNjNNFxccWUjWYjrBNNVsbULNf5PAvaPYQ9A847ZE7Jjv7cqsS1xCqFMkuAKVQLD24xiUKKNNkdBRY28",
  "key17": "446FkoKbGnp8oDZysNtDrQxwF1kZvabzNYGAgFyZLQeg4wsWf1RjDjEUxncw8ebjCNDPggWErT4SmZr1W5mAEhDj",
  "key18": "5ANwd5kKALH13VhW2kqNHDeTbdCN5brGEtEFsmw2FkfdkT7h8UidN12hUHzeJUDMkic6CZ4qeYDA9LhHX3PbjdR4",
  "key19": "4uR8n9LCZ89pbdBZ6bVAQT55XcDyayE3wqC3U4pdLnRixgYzykyGWN2byAmhmDfj2493i6m445z6xT6K6HvVWgxG",
  "key20": "2n6PPLFELapo6tX5P7tZUWyBE32vATkEkVcJnqvnRtYF4CEgvLqRXPXmXMWZG39BNaQpoxR2EdB1RE1Vw4dRoPuy",
  "key21": "GLQWKZD7EQSWxPKqE9UdWrdpHinBTSmywcCzcfKfE5rEgxPZNEEAX8eDywkm9tmn8NMYNf9eoaQj3pUvHgEf1AK",
  "key22": "5Xko2aAKDpH29AAxvrECe4VUATyioNq2ZKwL9rfKh2UzUULkothQ2o3PnJco9e85Tag35XLp293iRaoTUFjhp7JJ",
  "key23": "4NSvnwRmPUbvTGU6aMcXAvZFp2EQZVjH1Tnmcu3rJTFfdnEHwEociwxgxsra3H6rMtXonqpnNXnQWzuzfvdgF1Eg",
  "key24": "3QTa2thTZFWD2Lq6Gy4pFArEm2dsa2u7P1dXcTNuyegD5optKLHKGRTYADzfHjLKKmZhSexDuY969kgaoxeFNz2G",
  "key25": "GEoN6Dy6b8aXosC4z2514dwhQ9kUxTXtDsYqoHcmmuSiKDsMu9bDKCd2XafJRCKYFuTDQqp2GeZT7pnTfRoAZqS"
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
