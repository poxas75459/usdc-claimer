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
    "2NonH6NhrMHcrDfzzew7NsyapJ3bGJLCff1zqhsEEPZGPPmh3A2ReQX91767v4nWjiRJsuC2zGmrZY8XZZ6vvr5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpmtjjvkemATn2J9qdGEoeT4pnHyHHRSM1QbAP9dUP7SomE9S9pkuXkmodi4h1x5CEVZKkcN7FUZh175CjznFC2",
  "key1": "5E8XsExqSf3EYgPQMqqr3TepUivQR9fMQ5DqziJ4Npw1ywNKFPf9BLS1BUF5dAPxeGoyDnizhseBACRnxckGEUua",
  "key2": "iD2vPUixtKzYQnNy8NS6ZHKdvEbM2scDtAjpZbnhRj8fZv6zuRuhU6LLCE6dJFp4wybxjThjEp2gEfidewotAKK",
  "key3": "AX766nRP29qEYfYi5PCbbRLFr5GZg1DidVM26x2DEJ67nDB1gPrLiUp1a6zNhHajXueNDWF5E5iXb678VmBJ6So",
  "key4": "4fxmWRyRDZnzLSDDsaZWo5JWard5U6Y9D3i6cfhg1BPbxt81iWqRuqzG5jPgZvvU33Wmvqa91NA6maLyCRC2ZnmE",
  "key5": "2ELeiRwobxTVkWxyzBWg2vmp36YdiRk3tdjQrHBhwJ45DhvkWtUXTvJP85PGfwhcgdekUXvyivaTCX8q6CuCffMb",
  "key6": "5rMcF5vXNYbL8PrYTj55aukpTkm11gh9jEbcPYtftcsQGgS3SKPmrrhi9tVijkM9BQvcFSLpyqeTSYqAx1erzHau",
  "key7": "4np1t2VuASRSWDTJEjLUgm6PXBEiEoQWQhC3HdCPFrQH9KfcVm79edDcfBx3gv83Y8tCfKdKeqqYFTqx4xqb8ffV",
  "key8": "kHnXzmij3J91DuFsqqDLR2u1ykuANtUhKKd9hNi1FD5Eu8gts4RGHfkrxSDh7fYtAGXGhR1t6FPLNuzNNp3icQd",
  "key9": "5XcGbJUvzz6AcHojSS8Yn37bFamUT8N17mm2PMJrqUcLdcebNGMeGZrwPTnbzMi43mzqDEMYLtzPPdNyXWbUsSwk",
  "key10": "5yAxtvE1VjowUA7NPVcD6EeTLs3d3oWor2MCCBxfKtRLa8ehW97YsCavdMrWN3tXcSJKtC4eu8z2kobNiwZ3Y1dN",
  "key11": "rzh8NfsAGG4pJ2i3bGTq3eJahBCYwxW1bGaXZTYX5kG3V1w6qAhWi9AiEA9dQdYxLAVXp5QFA8LKUa8JmGcYDH3",
  "key12": "48pRHZjc1471Gtg255LLqcpWpAyfmLd4jWMis2xq1qFF2xiog8hmYgsmWDZMkFvHWdtY46eDaXGFAY1jfCZi6r3U",
  "key13": "5TsFL28zRdbHrGJRj7aGkHjBuRyeJ2rFEBU7TXAgHgkrdHhaPPCP36JSvWnyWV1p1G58GvQcLNWVhFQ4Qkh6WFBt",
  "key14": "4Bh5YAuZaetutKnDUx15FhXMxucdYs4ikTPvHUpn8Pwy369huWsFuogVSkbFBbhoj1RP5UKAHR237KofNhNcp2Md",
  "key15": "2R2ez1JXVKoQxZm3TS6DPzgwQT3S1JNuXsY1TVTWfH8p5sqBk5QDJypNktgMYQm5Zg5dNfBspphR9RBwAxLsnS6b",
  "key16": "259XtjwJYDWt1k9JUq3vQwnDYGHWgtnHsPUiPjY7FGsPpZmX1Sg7RM1c639D55bK3pXQPDvdAwEs2Qd24H8tvgvA",
  "key17": "3grAWaGXfdqcTQm84g2PrS18CEGRAdhQee46ULStj3HXhsAoy8f78V2ZuQfrAJhTfGXvRCwxzdcn5QkNCVbeF2xV",
  "key18": "3pDDpAXWU2gueCkNP8jDioK8sVhGeX6uD9UZh65FBRZBewLdLSXhGCePF4fHK4rq7VbGncirYwiJzqsghuGvJPzt",
  "key19": "2sPWVwBxgUqKpWLFp3QawC44ikCdwMAc5ByteKsMFZkAEQthq7WBtEyn9UhgHAT79fo7cUUBeRwddo9MVBY6gJJv",
  "key20": "4sQkoBrbuAw2bynPQ4PF7zRHu7zugu9SjCqqi46dfvcgEv5rBG8h4ZAxRja4y11eK4ZWZTgZ4P1CvzfiYWKMDCHS",
  "key21": "66FDDmF6XCAbuJNkQEWsFPFK5NHFUaKcPLHaUdX4LroiUEgkwYirYZwwQQ6Ud7VCTXKQwWic1UHDtsrPHqS2gVrK",
  "key22": "5mG355X4i7SnajeS4tKhsnMq3Bazo8yoSFC5ZPSqJ9HeuZCXh4KsCp6SPjPcb5xJQQ4meBT2iABnp2sozNcX3r9j",
  "key23": "LxU7H4GifMvpYNUt7nsfvxthJmXhCLY1Qan3hWMwfN3XZZEUUGT2AhtVTA4H1AznWsYuVgMzB6k2hM6HdR3sfco",
  "key24": "7Jr5g7WXsJRxViyv4V8qRiLPdfB4j8sMCqSkpJBseYQbZYkJT18jr1UmNmvayhimYVdUzpkcN6kwrmaEP4p6b9t"
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
