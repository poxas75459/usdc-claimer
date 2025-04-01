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
    "2rrTEU3HLCKRt9GAUVg7B4mLa2pJcHNLK7MqLTNeEcaLB3PNPAEKLqmkNgTcz5mXwKWCH46evxEL7mUJc5e8xmni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666oF3jmYAWErukp2vPkZ6Cj7vsC3TChainYbyvJksswj1vTmobE2ct6CHpXZ85dXAbHQgmUg19iQkEeNnc5RgZy",
  "key1": "h6QmzTUbYqdRMAnB6rCZ1Gp3pGpPgCDBFMWepMvLi3qF7wRyHWCkvHtAHeyN28az8XpcBZ7Eenxtp4cmLkVBgQT",
  "key2": "T4HGm8YhEz8jCW9ncX76vzqkYRT4isZvkf2PNawz4JqS1wiYXSXtgAJ8pdgiCEkdZpiv4Gny7vdgnEUfAyD3VQC",
  "key3": "44KRCMnm4n62aLUQu1F4LwX44CAssoyhYbsW5JzhYFjDvhsrWsRqHvw51rHhvvvFMdENQz4dMYPKhCxSDXWFKjw8",
  "key4": "2drfamGZu3NJbbrD3mphBeS1HyHhmLWFhQkjZiGzd8zsdKtnS7AX5jhnKinM1W3CZDcBvWvHYFnjUs8tYeaZmNfM",
  "key5": "54jJu4gZagP4NqAxNdFjaVPofzRaJgkJdBhy6SMCp9C4ZKh6Ca497B4LJk61xCfVFrfrt5x83ux2zKYek8t9fwB3",
  "key6": "5DVUaxizH88QjBuzD3uVLzDQkzC82LGjYDdbN17cskwdeRB7Q5kFF31qvqU9vq19bJf3sZHQ4pU9p5L3tG1NwpEA",
  "key7": "W7jkfTN1Q4XiC5u7eequm6EWjcXQY6wVJsT7hXA21i9L3h8Kk8B544wr6k6Q1wMEPVdhG9uzZ8jrQDuENcxmqSB",
  "key8": "3DLSiq6Js3ggaLnzc4YVEy4tM47zbyhs29tFtcU9rY3Cb1qP51MBeCV7bkFm1yP3cvpZ69YcdDnw73TXbQ33wput",
  "key9": "43ax9S3EKat4o8FVeeRT199ktUhKWWD9TeYQjmCMfxa5YGMJ9m5rRphsyS4699hBMUw86TMbsSmcxKGjwfHtXUb4",
  "key10": "5JSbQqFuTrLUYN38XaoosSJNAitVv5PCV2bM4dv7a71RX7DgrTNgS3ApNXawRjdCMTM8Dpp6GtRy3EGSc1PVjxSX",
  "key11": "ZjjLe7v6e4mD98GHnXFWNkFJ2KJB7PpiKgot1L3gYebcmJwcKUrajibR2yWPnAyJQe8hEFQCmZ9agBrNQBRUpsS",
  "key12": "46MjkzaVbp42viNoqjpgJzdhyfoepiH5pATkrJHh1gFXkFDazWxheY3kzy1but2eEoNg3UkoLtA3FyV8Kx3ox7YC",
  "key13": "2xfZQ2PS3BoSqEc72sw4ZDWziNMGGrPcDpLb8jcxdQocHqn7nzHXbPrVvhp3Q1S7wMTAjVDFkftgMLgiYE2JktJP",
  "key14": "4XN9upioHE8ov4QLoPnyw18bPfTDpLqNed5h8M5AeTvGxkPGEMUbb76bdmNaNKUReHh4xBZw3dJBWybtf7ANcb1",
  "key15": "4KBf3VM1BiSu1mrHgHf3snEc95WxaLKmVfmEEnvwg3nLTEV1DXM6cmVvFQ1fPE1u4kmL9v4zExuW8KUsMMMfCWQ2",
  "key16": "DDcRH7JWXmuSTUrbTUDVadJNQN1t7RtwfkJJTnPkDFpZUmDWs1WxqXPyWnmjSSdQb6UYFuYy9RJAhLF9eR9zjA3",
  "key17": "2JJw6hVqpXvAJJ3s3kAtFsvCxsZNjtDSZZfq1Jdfo9EtnVhJpfsmwQD8A6gXDNELfSrp6PAFZVUYm5DbcdJ2EFeu",
  "key18": "5iXHkncYvnwiRiJYqSJqSrB7Fdqc4SDwPJESUnnJ8VFPqox6uMgczrLANGyqTHUZjuEb21uU4gz9Z5Ry3PTFaJq2",
  "key19": "3CFbk7NDvsM6uTut2SwqvhjXuncwSVn9E7VD9QcBr4zSLfpsby5Z9wjSEJeVpggmGBpbtmfzxNZ5F4x8vT6fn7AE",
  "key20": "4i4xZif3MVKiu4ikrQxf5LN3t3HGAiTFeiguF4kNJAQd1gKC9349r3Yw1dpR7PierHkCv6e3ELNU4gjLsufQGjkK",
  "key21": "3HhBPpeZhSpjpwNNZGATgpaHjJcugmhYDiFqZi8ZP56A2egAQQCJ1N3HT1zd71C8jqXUXDYFzrsYSVrddyuTgET8",
  "key22": "2dfA6RQnURUySs4FA7ATJkiYR6qaRFxJwaCzCASEbikiF2nBJRk7sfRxdauMjhmKbmmCn92bMxLug1FasVod5E6A",
  "key23": "4vnrmgdeEGi3y7kxxkoQuAtTACBxDtXVg5zuu7K4piCs48FzXPjzShrvEehE4VFzeavRsjnfnu6P6D1GUXsaBzmC",
  "key24": "5yqA8UCx8Gv3Xfp1RYfysDk5XDXQRN7jaHKcSnksNVKdDej8685opJL6NrRuXhBPdiK4uuZYESv88TXGR5gCcMmp",
  "key25": "5qtwAL6GN6qxmCk9RQpBcGJ3tjQVojMPCvqy3nCEPRs9ZEyBzbfskfG1MffEnMTnZNroQYPZ44HSJynjrXhWQLq",
  "key26": "4RaxypaDt7B4ENd6LQKK3VzFgTdJzHk2hc7fNRLYReCSfEEbvhhJu8HBVx6PWKLocf6Gf1N8DMWiK9mqseUe1TTZ",
  "key27": "5dfXF2UGVWQj6jWihNcr37HdDBfLGNgfgG83zh7w4xTNm9MXcPWpW7Jn7ypBxhWJTD6hEJDggPoVtVd52WUKVrXM",
  "key28": "3nKNDha2eiCWp99TFsmcYDCov1ozinuZRpCYfNim7cQbfVYuK3jKcU9Tz3TXT2LvqKWan6vumMpfRqwjLPA9p3aq",
  "key29": "34iCzQW6rQKxAzK5uYXYGKfUXgGTKjS3NKDEhRtZBVfccRTr34E5DxygXhhtdB4yQSL7niLQyAX1CLosiprz9FJi",
  "key30": "21pDBJa3hnoijk3hCQk3GCAML1Cf3pFH7qcyadqzr2VydkhQWorwknizM98C5tNubqvBeUAvBn6VNMKMfnUMsnYx",
  "key31": "5gkcWGCQKaUvYnRaBGKt924YubpkQ9nixC2SPW7LzruKjshuFPQdeKUKRbydkFce1fGwmuaoxvaHWcH9Z96U6Twn",
  "key32": "pW9hKiFR9n4hDp7e2B5guw3gfML5JWZiLLGa8cxjttNqPPUVc7hLmETiTrVoEU1gnLugP3RfWBjVscDKNqLpBrC",
  "key33": "2cmv16jhrW1Whk9M5DoWtJSBjAbMkNN17q2cpZCPf3Ti2Gh2xdQob4scC2MPmqvesSzmjhwDSmdQkF4Yf6BTanuD"
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
