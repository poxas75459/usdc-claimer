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
    "677PDc3uuvdb7EF6No9Yt57GiFNo2NJUorzgwY4RXW9JNUUaSHvgk4qm3fVTdCU2Gp66weY2aeddQBF2ms69f9nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P2NwS3MopLcVLouQj54uZqy51wSLGHs2AM7MkPgTSJ9DjXpAYBKvuRAXgu8wp6ezvW8hvqnBqfKGHb6tGrjq4pT",
  "key1": "eF1rPtVGsiLqyU3vmyoZGsLkutLywiXW7NdwgQ8d9yMf9nAdaLr4xV6Pb1kCxmLi56V5JdeSDxcnqG9ukvapB4P",
  "key2": "4pjekfPmkQBeMJ5nF7aAp2DVdhAvJXzD3NqTHG53fce9vm4jLSgBxjRpg9Bov6wkmdJYPbqqwPFfxw84eZv4U3ui",
  "key3": "2XbYizaNEc6CnzT3e5MZxrDvCdZG6NsZQVRUvxkM6T1NvHbT2E2vXULbZvTp7c52xb6kmKua2DzzZrjf8dS6kziU",
  "key4": "42cU2WhRmqBFVgJyknXydnAcFc3af6z3PrmUydZhkKKEpF3YfGRR5a4xJMLLZb98GVWghDVha1EqqQ64Mo1ak1WN",
  "key5": "5FTgg3bqnim9TfMJHi1x1tug1pN7BtXk7QUmCU5E4qFnRLALKkek5dFpF7Mo7fxZ2XbeTSuQVg4YRDszxTtgdmTi",
  "key6": "4x7nuKt425UGXLbtDNdo5GnDu8V2kfyjvsYGtC8yUE1tjG9ixntzqp8RfXXbw83HvWeXodcEYBkEv4uPjnYt5hS8",
  "key7": "SjNFf4mJ6BVtCh6MwAmECKZHzANbsjdUau3ZbrbeqnXDb1NJxLdfFddakdQ9H2EEjz8R22S8Sp7zgeEQg9Z1Mkt",
  "key8": "4FfyC58ZcP7SfFVtD6jNkF6SsQza6gskH7SEiQYqTHhJaJr14UfoURTzeSsHvcGCMrzFShRXF4FzQQUQ5nKxUSc6",
  "key9": "3gJupCHtAgHKQawdrKpGJHDgu3aLNNzYWc9dbc4YCaPHPus9PskoyqeDX3Dc3USCNGY9Y2gE374mzzrG2JJH7SXM",
  "key10": "3kY3PF24YiWaVPmeqPjcoMqxN5DBy98BYXuJKFF9kSrprn7RmoSbqcSNZZgFp5m2Z69HruEGySehYmUrMxknrCQF",
  "key11": "4UcHAFFoDwCgkwArmGoGV6sVBP4vhehQSnGx1uGeM4J2qMEG38mbuTcvj3vpJ3qyuu6ny42KPFz5vbnceumwbA51",
  "key12": "3zLsAtekTqb1uciDPf9uu9Ar3DFoDD3SB1MR34Tup8PsgEcSjhh5FxLhR4eCSx2n9dRrV6FwSYN41BZw41CGMPuE",
  "key13": "2xMKuYb63p9J1a5Jo8G4gwXQacc5hMbpoftAy8Drr7DPQSG866diAqVBaNNtH75KuhT8UXSDA1MdXhNknavAGmZL",
  "key14": "2sAiwVGCweA7w7quXc6Ko521z8orWUrZRLqTfgrC86oxL9FK25J5vDWAncd1iqyvDYmww4YNVpLkfFjEjGU84TRC",
  "key15": "2K6zb4bQAEByzoFVRMQHexEcgXztFrppoF1iYE1LLVMVBYYcBSAtgSzqp9iKvTUqwBezeK3C6oTNcWNfyFAvPWHE",
  "key16": "3g5qvkTteqVWt8ymVaqnxH2Ph31J7tnaciMmsP682HYk9KU4Cdm9zfTk7b5bhGphBZc5RFAwmwbE5w78hyYqFVy3",
  "key17": "3AZVhdL7SKQyb3SxNPeL3318FuXizqDRoJqgMjoiE2R9bvCrFuGDmPbGoLnJYNjvfYePpWWkj3PrrTqEJ6xg6ww7",
  "key18": "5Uucq7Fk638cm8JHLkFHB8WqyfUPpaJmETxqUU5KEQ1bFP7CVrmhyKGvAAZiQUNZqrkUAVTYXo1MefkWAQc9EEXu",
  "key19": "227JRUxWyjHLGCnGY69ceYXff2k5SuSgd31PKbSgmHQiwX31LJzzHN9FrbwWnqjzbV2DiJcfCkn6tdqeqaRqmVUK",
  "key20": "4E2ebzqgXChksjwFeX5D3zSUdbu9xgz31RhUQwTPa8dckeV3crQHvtpk7YX5e8PaQ4bRHiuuakYec7R5dfFxMdXD",
  "key21": "3wgPr1squhibKge4ttK8aHgM1Pr1dtYf2ZGu6ypZuTBxq6zD2JJ8FMtVgst9tVZWx2iq1qnhoqkWM6bXoVFWxtwy",
  "key22": "5zKppxyYGqp2TtvnGPmiA1tTDFyTMFyJWiANjBfVQCqRrU8zbnmVbWeGi3mZShdwVHxA2j3ZVa3uqF3n3Rn8i7Pg",
  "key23": "zhiQVWgxT928say3VEJbe3uLyu2A4qWWkPoJ6uMMdJLuooWidscfYFKiQZsb9yoHgX23gPhrf6CtufJ2TbHgbtJ",
  "key24": "fHA9xvUEDuUXW9UT2xxkntnXMg8vapu2XyoUDe1J7d5d4dxxb8gMawJUfCKukDCrw1wgyVGV2z6gWvyTEW4RGhY",
  "key25": "4F1zPpX7wXpEYGq4Zxhk94axuN76b8AHwLVptw6j5qHGruoETonQvynhgHxjkSpaBf5W4Aa53ucbPRufxSgpMqj5",
  "key26": "5Ly7qMXV1W62D2Xyqeu19wXwnShy8bo1i8ijkeGcGXyHThYZNSFFLLaWCBUrUMTFrvXYapTWJd9CjjuJszpBjJ1h",
  "key27": "4YsNnoqs9XtzFEPSfbEUTHa1jRRdkLQajXoJnALj69RcbUt5a42HdTHav8xNUXqWtR38eQ1Vz1Yb4oDwDXAdUyL3",
  "key28": "5gKzeswZUQFBSk2Bgs1ZknGMQpnEKLZaPdejxeh5uJtpDPNJMG3RYcUqvKn3R6zhnstaQ1tQBW1TLRFoMsJoNhdt",
  "key29": "3JazLtgggkePn2UTjZcb47vGvXRmgkfv4NPwn9geWJnPPBgh97x2KF85m9mBjr9fYHjCaksuNZxv2NCjXpzSmtpw",
  "key30": "oKzbEFdr6pfAQNH2tdo9Q7CRYtDyGf7VMourbcc5x3sYYTjBCL6Hbx8HctQjAZ23hAg8d1yrED3ZaCZzWPzjWJZ",
  "key31": "XHQRDQuHBvApzHSZ3cDBe3tZDXJX6DyWaVyBtfQYGGzZ4ZKwVKH18LiWwgneb2LvYVQPkcXNd4V4u5UZchj42kb",
  "key32": "3wCNdaKaAYK3SyTVPW79HZH28DeJJR3uYpq1YK68TxNQVauBr7WJd6cUrrUdaERnqKj8TqnmYWaYdtVULfSh5JxR",
  "key33": "61ZX9qR4k5vKNoNjHtJqrBvx7nANX389hKPjZxZvyMKb6XRcmqUp5A13hYp3LzsbHGArYLRXAYQuwKbuYDSujMWj",
  "key34": "3YVq1EpFfRsBEDNCCSg5W5HNWQvSeP65bYycp1wAx3Zim4CcCGbFr9R1nPJaRMJUgmfc3998RPKuESq7L9sekGh6",
  "key35": "2nUDzoaiqd4nsgCRLmQZPKTSgNqzKx45Hzvb8VateJAfvH9XTyyRruH8bzL75kCWiQw24qMN7GtpqVpfCF7tr7NP"
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
