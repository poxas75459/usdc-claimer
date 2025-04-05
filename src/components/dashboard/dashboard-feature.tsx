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
    "3VqiLzyBAzmV5iYpJtY5GkKQD1NCUHQYxYS3eue3Zn8SMRsCf19sZGXJXRHYYxYHL5d7GUnoV2HX7SvoZS76JCev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hkHB6JXMc6aeYVFMpencHj4F1qRNVpKtsoUrm9hc3XhiPR47iHMJvhs4uahDAkEVuw5CSVGpPqnwysak4Ey9Qnc",
  "key1": "4jjHdXPWxtd4Uq4Rc4DB9hTmApaFfyEiXqt1dr1ZPUkbAvVJjjtBMKwCb7C6DkMtn4jNDeiGGA46uo5erTaM1Sns",
  "key2": "NuGC7HGsE7F4A4LMee7KgBsr3Pp3JePP9HQgqjqkQcHwYNR1r7hQdYtxhJBWLrvrvoa6zH4HUy1z6YgZYqhQ7Db",
  "key3": "RY88V28Zy1gVGHzMC4L4bvFxPEva76E1tm1184K2pMqoyR4XtjNaWCwi4yRNuctcvR7rMvDXvSQG9NVLDQ3h1Zs",
  "key4": "2RHmxMJDEoxMngrn82EJY2kMhY6X5ruLd1Vx4GUbyyDoeyqpUCuoR4whhRgn8xGbaGFLd62jdWMq9fnYDJA1bP8t",
  "key5": "2FjfrHPdHzqd6gDoQecJF2Taciu8JY31TzQYT8CBeb8DeV1SEQ6LLdRjDDjFukCLQWXSqpCAgK8B7Au65Gk3Vs2U",
  "key6": "HiKDUkQS5QqL1M6LMpe3DNGvVHHt7q9uehfCACCTe5QdAx2kn8j83gkDhr7ZWMZx8itjDDxdQQsra3TB3FSGoJe",
  "key7": "56RuW6vsaRuiErJQ3GRJikoTuQ95xwZwRLcpsU6BZvmZwaRXSiTjsb1PGVnJT8yDATijLuPh12DqX6vP33sfA9dg",
  "key8": "3vydvUY8qoNepp5CHh59LxSjxYACe3b4Kt1XbTZ42HQa6bs8tyvDNMhguABR8P7vQbMc31HbbXwHhF9mVAe2vbnM",
  "key9": "3YkjDwkjdVjAL8tMEg4bjKeAWLrmDHC9J2C5U6uxWRBS5r9hdkd1dDPFgZwdSQtjXmo1P7YrEEpJJQpJw7efgG2N",
  "key10": "44Qc9tgvmS2ayQREupR7CxbzjztX19MyThvuXXZuWs2tbX2g7pRYwSLmZrTcEdi6pvWZrotTmmuuycuZsC5Gaqed",
  "key11": "2jeanQSr8ZUhgvZvVHyVkij1M2baytWmH7QYP2ou3jnuqjfJy4JT4gsxvfxpVYW8PffZFvNjBXDy6ck9KSJsKppF",
  "key12": "2TV64WeKFZko2zpjHEqigcfs58guYjrrBogaJm1AHDApoVv5UH6MYpg1a7YgJXhTVBxUVj17Gn5Cynhm8TFcqURZ",
  "key13": "5Vb7H1gRNPwU6GGFzP4SKy9rFFCyJMB5JVbwqyDRmpgT4UKCAiSYSiNAcqKaA3NDRZwFTDdCTsGLWhhrqcx1HuQ5",
  "key14": "1VvJN5JBMcFrJKJHUvUPgv5DYNmcATWKwJHxiTzqmDd3gAbsF7E8ox9ABLq3Ghtmki4hA2PwvWV9XrHkSkKYufJ",
  "key15": "Cz2u75ek2jahLX3EyK6zpqt8nbqPwbvn1S5kfd3cRZ62wtCXgpsMDocdmcKQZatsRgKt6gAYSfznvtMFvYo6GFx",
  "key16": "5fhWHTukQYk1D7nUAMvr51D9ubikuVhfuiK6aKFHtTTA4kZPzEoDtdBWKEv8NKUUGvGbZCMSRFLYsNmwPTZyQ2EC",
  "key17": "1m7RUJ486Pc2ck1W92L17fZwZRpknmgqCYwGsDXMs14Tv7kKefreZxmNzVyn3WHzUVxWM1fSR6ERFYLtuzv7Xcv",
  "key18": "5TYjzDuXDjrMdNyWf3ETEVcKuKrgBaVbEftze8KEPR5QEqJoWF21fCqcgQe3uv7azfZFytmKFEQtERyXzThW4qX9",
  "key19": "3FyAiinbiouFtP9pxm6nCDkMhZFYFXL9DnEPdZpjzTTN5swFoyVGmpA4WnLrcYPhSvPJaHd1Xwr2tKxBcGwDA9E4",
  "key20": "34rSghtm1Y28SSw8fiFjdp812TStJSMY5Rq71Nyycj3kyk4DWM4VgSXgfpwxqYSUcU9XBYjfrvRtLvjpLBkPrqdF",
  "key21": "54h594nfLXivHdKT9yCtYww9QxawcssLQrjnXG7M4jVwe6hgpqNUTy9rzJYMgYGXJkJC8HaLsXbUMECb88u5LWsg",
  "key22": "5VbYLhXiTF7WQnt2W9LAxWL8XYKXQbJU5o8U1MPMrjZUmZCEPsTvduQXJ3vZfSQqhjcQsXE5HjZEDoSGwK4Bvd8L",
  "key23": "3c76J7XemLwHJR7x3dfPUuAtW8dpRD3iLWhHxu8fkQB1gV8UW8Zzc1oK5WLhBSoXvPvUc1nx3eABFzvXtKHcV4X8",
  "key24": "5My7iq4i5WAsSo1aLPvQan2R94TsHLGSbr3wE5PyUTMjqgjw8NErsJEsHfuSgGFMT7wR3hoFKTKZAGv1AKoBQ2qt",
  "key25": "64cmV7vqXgKWCju9zYmrep1qLVPNHhiL3VX1cqxcuX1Z3prmrWUVpsPxXVpoPEfHnphvKVpqVJvstox3svt9GzUj",
  "key26": "2oudteASDvJaAVaepmXKNG44tEq1TvzDtRBXtBjsf4Di5zThY3ktHJe6v4uFjyQ2roPhbSzNQWyxn6MT6NMMg5UW",
  "key27": "4Ky85eUtbP2xF6cBBpNEN6wEXY3BHWPiJX6j5M2by39oesv96TybSM4T7cqghc9yijsFJB4D7QEwnk5n7oy92aBd",
  "key28": "5FtD3dBhJ4hMVahYuVA6kyDaPjP56gzJ5obiPGzuQQ98DozwyTaYcxHQi1duuRqcB13VrS2ci2Kdw5Mn3PxjzKJ3",
  "key29": "46svAgUrzRuh6MvYdVfHrvrMtQHcd8uKGMVWHecscQkjg5qqsc6iFQxCgFi5hiEbdZKP5q4QKthSpdGLpvKR3v9m",
  "key30": "2STVcB2EzUAfQi8AzWsRM9Ys4mjW2zt7cQM9BEmVUkY7iWjACLhRQJUpUrgVcKCAd9SWVygz1SRSu7cqLBBk39RR",
  "key31": "3g52h1JshsfRERaBESDrnK1mk8AiFGz17BM3cP4W2sgYzp1T4ky4ewwhc6H8duxfgcuFTsDeVDqkyiGA5MksuqBs",
  "key32": "3qpMp6FusF8s9VXKYSkuK9jDYDLyoExxiJJB9Q9YQPe7mhwi1cKuL3JkFbnegzAjmSUdQsD5zvAZJP2w9B3gPktW",
  "key33": "34zCsrhpLxgs5UbdL9ZmUGTkx2Rdr4KRxcoNECETurShZRsyXbbg5z7xSHafwJk2um9BP4rP5LV1rq3R1La9c1jQ",
  "key34": "2qwFddkAmz4mgsFZFvdCcG6343cXBjphJmR23V595YsaztwPEgtwdGNHqVHTFkSVJcyc4K3CLfyeN89KVQhK5AQF",
  "key35": "49LHcKT9Z8ueGdZdWUDSbf4QBWrNmVb7Jg453DZJhL2zMbEy95J7zem6aMLxq4Bhi3pYv5RAVm7abCx27G4WSb5",
  "key36": "4Knog7xqb2FUpfE1xK1xyA2bbnnvwBrG3BryM5NkXkKFpGoQV7EVb5hbuc7exAzF7PALaLNPB8Ci89zTC2PkFUsh",
  "key37": "4shnv9YzYfQkwfBmqDxxo57aEdeh3EtdyFXysi5S4rhscWPFcWXnvMF9AK9mrQuuaMi91DLvQUdR4KRQJmuhdK2Z",
  "key38": "4ef1hsCGJTgHCMm6uESr21T6wguLNuzmuYuXEr14SgwYHY3QDrELrzFjdB2RZCU3JW5Kwx9Fo9UewToEj4ZH4tNT"
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
