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
    "3NNXiSh5HgELfeZLK1RSJcmcZmQMHmJn1g8hsX5phuMq6hLj12okVny9XdnySMu16YTc5TcXJiuz7AntjgkCcCcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26iFmX4tNhpmB6tmsWPVUmwH4ofXhpQq5kRQWdFutjnqHeayt1TJLaBKL6Aa39mjAXU498cSCYY8ob8vNy3XN9tJ",
  "key1": "5PHidjYjEr93sJ8gYjubPvzEGgd869wERg2t9sjC7XX4xeeGQaswSkCnMJtwaG2CnM7vvXBYjk2HAK8N7eiCdXGr",
  "key2": "wSBg1YtiUfHx7xRjpKK9G6MbwGSto1uwwNy1B2Ray76gkGBERKDuqK21Q6E8TcroeCMbixAhqeVMZzvop6WbT8n",
  "key3": "62Cok2A489DT5tk6hmfyhxhsPATutRnA5SzinNB1pHVUrhywfd9EQUqHTPFbe4hpneRfDEw3uA9NZhoypH2LZ7pX",
  "key4": "4tTgfgmJCLPcbs3tkCXoQgVB5BbboM9mr2yWaqRu6jWS9CVCwTS2bjxxggXVM3bN8Bsz7mpWPC1B4VXikfH683Us",
  "key5": "5QDzrpN2jkoYGHHybbY9L8sTr8dvv6iCXH6NwyecyjZyRRrXUUyFScwuYLxppj2Qdkc7SBnWsKeTNhVkow7zFs6M",
  "key6": "5zsWR1aKECsrhrEkUQuA4b8raUQLkj8v12m4L7LHzaMH1C7uVAZshwxvuEJHyBtRPsGhCWJhEXn3W4QgCBQQgmBa",
  "key7": "4tz1GLPWjhgzZCxfkTepvV6eBdNHVdSQjWYVgqSZk6z9DNFY3GyQ4qJ28E78eKs1L7qFadDXFS1iiE3kpWVtbnUq",
  "key8": "3wrtKAYvT3mxJsS8bRr4zcGSToWUUvoN7cw8FiWVAD3ry5JuhMyZzszP945oYZDyWNzp2UqqAAUChzVxY8ZPboyT",
  "key9": "23Qce47HqgjNCCMSrR7GYUco5gGTN18hnR832Hto797GJoiPZUF4dWd4WHMTj86EvPYMc3as6ZJrCZqBW5xevaTj",
  "key10": "3gnJEt7kS28vnLTaLW9x9b1b2zdzUnKjx91ASZvrVJkWVFTEAEdnyPJ5DKkrNK1nrGyEH9vnnJ52Dwq4KvC4z3Kv",
  "key11": "5zAWap3jUKH4JTM7qoDSB4zS9uqMqK5FRVbBb3VDsrddWtnhjXAHGG9bYqbKq3FtzfzaKGMRYz1beCvZHdusggJr",
  "key12": "39SgzpsZeFW9HTSXmovjxzrRQxmstRhwG2fNKSgAmtjsDcbYv6bQH8oSSPAfVUucs7oDdzo41MUAR21vZ18MQhr4",
  "key13": "42wTdLYpcACadM38g3XU3CZW4SF5nwLHmoadUxbFQe7KyYTn7LmqF6fTm7nkkPp2JBMVvWgjz1VhdBcWs9ppcRy",
  "key14": "4TG8dqBr8qFjvBJ3enk1yteH8B5RNRCJhJT6Vzp8m1mVejz59Wo5EgLzNyWPBfMLvzDNH6owNZjmQfYp4EcQtr4Z",
  "key15": "42kF9jj3gkMBUocnAhRbgYBKKP9MPSdHV2ZV2BASrAsJ9WXcA5mnHCamb1RebHBqrz3Vpb5i26wuQixUjC6P5d2i",
  "key16": "2R1rNtZh5ezPjbtbvJYZTkhWnunHdgqLqw9hXJGVSS4V7YEtsC3gS6fNGQ4Pfhs5UoM5mEib9jYkNxrwxeGVtWy",
  "key17": "5v5Y1vSCnBbH3KzaSWYrfcR6bzWPbmTVuX1hQP3PQGqAmrAwpmt2zwGpG6n6jcjNDqJgF8dgUHHWfTf1iYRJEGJf",
  "key18": "56QsYpDnU2k3SGPLWhbiMF21qNnTiGH53x1FfXWM95EoFCHjUtVMvykSygE3VGoVaGNaKdAbvetw44jnyPGxo522",
  "key19": "4BDoirVHYRpZhfXqaquBTPfzXtrArLtmkernqB4Wz1LSnBGV8EtWab3LB8kSXhb2wwyCsew91wx9bvqruE2cKBuN",
  "key20": "YqSbeXUWHntV7T9H969ZBhrC8pQqEEYYwHQbn4wqwrxnsgGCKnm9g9aEQVZXKYdNb2WTHztzn8fWzn4pHip5k1B",
  "key21": "592DbVRk38vLK5WTfXzWhxERcB7DwD7bQNVc2f6bhK2HoYD7eNm6tfXvEHmsD6MCvZhXzvThv5Msq4KGsbRCWxn7",
  "key22": "2vFhNvYaiXj7wZgTRaoJfRHutdHn4GHJs3QATVTmTMzyxwY84yDksvTggiUNLZWRtCuHES4DL6gB8ufNxiPsbBmi",
  "key23": "3TfERmoddoo1qrWio58WpPCD3bAebuy1tjTNwriLCxTsEawn8xQrY13QB7T6no8yxR5rcejWS6qu6PPTGdgAohfz",
  "key24": "43P2V44BAcFsHxRqfmnjio2FZsQqYKAGwJPf1YzfPw9U5PtkuoeTZBzW4JBxNJ1kVpi87DWjdR15574uSAkSDF1W",
  "key25": "3Vo2X7tnQpknPuUdGAcWyxR7CeoVdgcTyVvZeC32CNh6FKwJGiQXNMKKEFFxhthQTvBRpWTECQtG6LwPH1g131BE",
  "key26": "5AUrcSUNj26pNQ46MZ2iGAMMFSvASz9FGyB8RDZjusn53aQntYk1G6i9Rs8pRkn2V23zMoFbPTCtXgfJ3nNfrPqa",
  "key27": "2twEnVjXEbwwhV5rjcao8ouZGhU6WHKjYXaQzPhh3mc1sV38fLoK9rzSg2NLt4U26TCZPCZeU8PQU2GVwC76MoPu"
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
