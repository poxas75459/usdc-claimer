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
    "3jRRAQbPqQcEQ42vWAqoCT43ukoFjh7hMFWbEbkMeBtaVN5EJx3CWoJ4ApjdXQfpo8Pb7BPBSWuJ8wCZXr6vKxz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dz7Q2wKESwfB44gQGjE5QEXnnc2PZWaEU3cS8yHwem3cvNH1cquMmqEY3cCRdyqEvbkD4NzF9Sp7AJcUpj6PMNS",
  "key1": "27RNh919c3f8pcyeLV7viQvMtgbtgJCqoWSFThjijgbkaASmrwzEBE18kQj9y2SBWwESsmK7nUbCeAic6itn8sGb",
  "key2": "2rGvvDUV1HBpxbf6nLGHvvKFvcFo834EgvGd71ZTChRGzJm2TaDvwGXn34WhrXzMBGChs6nMW7xtZKAcV6KhRg6v",
  "key3": "5w7cYN2Rx66jpCWBx9c2T5KdxdYkuqTScgpNmR23u7VrHuV3WXAnzN7Robi4qdJ9BWxQRNwqjUovRg3H3Qv3i4Ez",
  "key4": "5gCRW3QBBPx38GdEaLa3dhJF8gHssu2Rshbwq7Mc7N4MHteYr35Sf3eDCMidoR2kScd7EnGfBABVP14BSafxWsqv",
  "key5": "5iHGje8G6UJbpepqeTPcfXcCH9fQSWVPYFdW9mDgvq98ucCYiwRwP36kYUpSU5eXJTMhb4VUz6n7rMfdPARP5Q6Q",
  "key6": "Qa4uQtWqr46M8svsH7QTs2BG99fkLoawV2Yo1CSwVRpahMiuHokL4uWcfjcPfRr41qkufwAsgRZBUit8syoJGf5",
  "key7": "2mAnaZqJ923M783oMrQktCFdZCkqHcGm6nZiNKA3HatnnKtxn1fJVosRjJmcbChkiAS9X1PZSXPBF7vMaUkcXf6U",
  "key8": "2zCmQbUrd46hRLM8svAeFHxo9UW7BD2GWGXsbaoXeKrdATHtHLNS33Gi4SnLiNbKkGz9rWorryR3X4vrbL8F1mDH",
  "key9": "4FaxehBz9hsNyK8wKrudCREKUCz8nFUoy8mfYbB3Q79WBkzLNoWz4LbqheEjMSkWMmo9qrjU6FYdCEupRDcHnxDz",
  "key10": "3BeRAcBjQpJMLWzaL75dy4yTa6Zg4qWnLmDB28weNk6c9se6UBbDWeJ6cHpR2DPb2QsrVW52bjQ3L2sa4kvu4Twc",
  "key11": "3M1vz49JZhTEt5SskkGJfvVCSgzWddHYCMdJ4pNSCyAxAhzXeXoHPmAMipeVwqJ35MHNHYm5dDp576rtfcsUZ2yC",
  "key12": "5JuJqKbtPBdDMyectvY75MPDcy72NneeJeRsu9pRuZ2LY9mUWNFgNt88A8b5QPwymPmSWmUmNaKB52uHFKeivNMe",
  "key13": "2GE9S1QvDSATzdN7jJZ2z1EiboFobnJT7pHAvqmEwo1LHdzVUNQ1vUcd73apEvNRwuuJhSB6QsVc1ZRzgkgGQCBH",
  "key14": "5uonxrFc4AYCaGyi4gZKj5gpoaPygD9yMZGrB3MZdowYRtL28Td8kKqzQSjpAvQBm6iNQjBt3niVRCQVTCGJMw91",
  "key15": "5YqeQVkzm6En8k7DwUHSuq3qaS2JrRQ6MB284vD1FztsTpjhfRgd69XBgfVcUvZQTTLQNhGvHvUH3jHXjFgFMNva",
  "key16": "yUZzLwFUtGAvLVnJfnu5aJX8j5QpZkq9iVeFPMkkyrB2JQwgE4eMcK6XTZ1RRc2iaHXrGmDjnRJFR2b5tkEQSTQ",
  "key17": "2gpWyqg9oTP6mwzgVmRZ3Ye8hDBezUdksP1VxCQcHB1DfVey885Nc9JDXXrLqrTqVHkUGNr1b7CZbyaMQnccDhMM",
  "key18": "669h2zg3BmbhfTeMeSU7UpXA7tMyX1oEdeHzz48HFLB2Ci4BfbtpzYf8tJXSxqrqug1t6N4gkAUUcMizM3X1dRv5",
  "key19": "2S7W9ZRBTHNanEak1ECwHhf4MD3DtDFGPbCe5WjPh4ACyyHMnYCwXK3zQ1AXNPFc14mkaduzTret87YotrLgrbiq",
  "key20": "5n6ZgSNpMNDToSyR8x5LT9PgxSbFJLbm9sjvce51JFtmwyrkDMk37b8NC1pFvGj3XmYZWHDrsP1LKqDmxxqjtiro",
  "key21": "2acaQ7kBkdxK958EfAy3QLZmntBBh8a815sRnHzGq1uc6KLqiJCbhDvCQGDuqDfHdSHDxJhiDc9d2LpKVQtX7yBS",
  "key22": "242C4iSiNTZWkWCHU1ra3jDDLubVyQZVtFLtsGbKce3ku4qWPeYaGeCjkGF6UaYga94L5dtKamrd79PLfVsAfqp3",
  "key23": "4amijQBhFwxXvwvrH5jq4GsGGStRpKUvB1xrGrNLxppXgyzYozfjKG1Yp66xro3sYPdVa9KNu6xZcZ5oJosqv2qD",
  "key24": "MJrZY84S3fyRR7VXs27zMXCSd4ZkoJr6PCwgTRvDsHb8hKorAoAEMkqgdyvM6cpy94vAWN91FAzLmPb2KjFeHy7",
  "key25": "3EM5r6oLFGciYEY3E9Uj3ZgNgeHxggWbg69X3SqTJN2zN4y5m4XroQPb5oi6vJSVBszXyJA5gvPHrsDisYLkREu"
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
