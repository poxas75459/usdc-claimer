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
    "T91N4PNnqMvBM52TU9oAxskaACsvpowjjejGNaf57JDRbToCwdWxQMXPqrUTgjRYhrx3yckXdWsQf62HesfrsJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v56N4nJdrC1ArNx29dz6yMUwLkiKUrV44gR9Fgk6FFPj7aDMR8ZVJocKd6sgEZV423bLsXVcVUKU1bJy1vseHh2",
  "key1": "5gfLaCG89uU41FK7SBLUUAf15GRbhV4djhiM1jAw2Cma4w14PQKa3QhWUgjc2G4e5cA9aUM1RpYW95U7tPY69FmG",
  "key2": "2YJp9r5U62y8X45aWjKMonaXd8q6Yi2F5BrRW8r8ZmckJRud9FzdMUEeWV4cYPMT4oWDcSiwjtpZD2FH89wTxtC8",
  "key3": "3oSWJ9rn6E8EBQnraHL2xuQgfb4dqfnoY7qaMX1zw1iz1YaYXJ9u21CnEerqLmg4ctJfk2dUX8QnfwbKt5kkCwhs",
  "key4": "f5U7zX2gwAbQne6bLVXi9r9dmo6vp8Q34SqrTsjVgFTmmjLtPC48Mnm6J1PN97bWKC57shg5sYRmbRtUURsVJ58",
  "key5": "4xDUK8rps9TG3KZq1kkaBjhbdge1DmUEFK9HQgBMJagFw3i77nv2QxxDfqwE4g9duuktzB5SXS6UgJhdntKxY2vc",
  "key6": "3KWZ4AeZEuJ2VpF3zVnFFULLZkGv1bnWH1TjwyswsBLFPmRCjTR5irtEE3bgSvFFac38NHvjqqgeVrkTS6GoskHL",
  "key7": "mLxoZs2CdZ6N4rQJcwDhYgmWeCFSHm9yujcgeYNbupM9KMeMPQtzYf8AT1G98io71oYewSmqPzobcen2PC8sqwp",
  "key8": "3XDD1xZKczsPXeLnpHjk7Bh1dRww7RtSd4XAKjSH3357J239JmudHHcRiYD9EmajQyyvPwXyFgrFRQcxmfw6NFRb",
  "key9": "384LamKAnZw24NvrhyQifa6qi4pBLcJ8jjLwwcBamr92asVwhT5Pjpr2b7fsUAGX2Kf42RdW7uyQaozvWzfWpTbZ",
  "key10": "2gmMxRh6RriieCeW9SAE2spkY6W2G9mQdGuK6WjBzWXzkJKmhnR2zafXGHPXxA8vHHcMiSWu5tJouq9TnXtTPTXP",
  "key11": "PxJxGeK3VWYWJ3zXBoPjYzhN1qic9BfZP5ZM7D5xzFziwWP3cynEccicLnxG1rhaF5JfKhym7UHVptaRG7ZYtsG",
  "key12": "4fw29xZGhbGPvGQKewtbj9YpA12nn38yFkTov68WuA4Y9N75WWLtwuUr5CXeKV18ngzdYn6Xg62bPW27wVRXtCV8",
  "key13": "5W8NbZh3axCza3aRM2KrkcMPbvbVnUYCTGZv4ft1v2Wqjo8xVVsjJU5uSr3j3uewyAqFDa52dV3c3Le4t7HNAGGH",
  "key14": "5wxZ6bR1bKTJk3az4G5zv1joG25owqaXDHEEYbZzKKCA1br6ScRnRGb5ic6jKDFBknq5WXkE5WhhGZYpWnGRuAyv",
  "key15": "4ocSeVb6P83sK2AWfNBot1aJhegXwhDowa2Mo2RBnWzbLHc2ywRQTAv1USrWT3fqnJoeZJ4ybLvc8fvF7wb91wG5",
  "key16": "67EAkQLvFhCyk9BeGDNCTte8mrzF3rToHAxc79gPU5adqyZ5tMpeyMNSthAsVZ7owAnGXFRcWZL2zFo8BSEqvW2c",
  "key17": "Rta9Nx43vNtvATCxPvEistTBPL7vR6wHqjqdTugR4xxjMTevbuYnMNs2RENcbdZDEiGggndeWpJnV5W1UQfwo5w",
  "key18": "2mgY7TPcaNW1pJY8iKgxfap2gyvZgZVzexpP3Rth3yqfK6QjWq4krYRe1uny3dojikgKTi1JL93cYnp9Rv6smeZ",
  "key19": "4nkjRsGhShoBkUqR9Y5uEGw7Cg5ueEAi9MAe4vJuSzrWvWsWtjTnLxQwHgg1XBgLqGGcPKB83r5nN8X7YKAeti8b",
  "key20": "3hhVM8NFpDU8we2m8VPp4jv3TzshSzJx4yyokJdULtkvE6gGQchA6iXPakF8aVu8A57uebT8F4LsrVZQW97zG8LM",
  "key21": "5RtKMQ9VJa3CaqLu3vnPabMBJ9hiXBSMaSUR4WzU2vGHkzQmVMxnnc9JAygaMfsi72nafNxw4VRiYXiG9NicSVCL",
  "key22": "tko2iN8PUHXyNvNGbxSDWKdPNuYdTXsCJjZL8ms33J65NAsMReWGUxpLLza9uiptCnoUfgvEWuzeLkRwhTz3Gdq",
  "key23": "3kL1C8ETiYm5LaSsMGrSrboBFvtpqxCjpY8gkFYwnUMbj4U62ar4fjwA7U5PSBPtNsJRjoZpqjyDdtLCAHkRVHx6",
  "key24": "rQhsk6QJJTat7uKay265A5SrgCLXLX181feoXNYDFuqM2U6KqnV2aFUnwfXn7tcVwqe3HbF5FRh1uWpLWGxWpuY",
  "key25": "5pfeTEkQiuJrcYN4kbnbaocU5q7STu4pRcYeDLeA6yh3vFCaYbRUdtf3zJYNZtJshm3NrcR5GUzo6v4wR7vzNoES",
  "key26": "5r9qbSd9ZaoAgsN6aFpudQ4krtRiWU96vnxfdhaerMYx46N2mAWgrTv7C4tbtbJNcs2eePMfsdL5Y9YTaLRxC2S9",
  "key27": "2d32GRjnhi6kNZ4vNtKY2uNk4MgU978ogeBvRnQ3iZaRwEVsZ5TsPmq4JZr9awkvTWZJLrMmdGvt7uPz9xGHA59k",
  "key28": "3qbTNZ2YHftc247XFBvhCwgnWkErJJ5DBDcF8qkpsHM3AidHWbNQd7MbRcvAsDYBsyTiw6sWp79DRdMDm7U66VQM",
  "key29": "4jaZZKSU4oHBBd9VgJ1KgAcN6wEXdZhRu3QwYRNJ7p9bHRdFeqKb1N4WYpspk9JZE9YjFdftnXzy9yttHkatkwq2",
  "key30": "2r1n5uBdJEZnTHQWmqj1KK8nwFwY1qEJRiTS3EDbHCN28covNZn5rG1xDs5s3pHQi2yW7ae1gkswaDq742YMxx8H",
  "key31": "2p5qK6diY1CNMoZuEKQxPmDwXMYrVHsyPdi31rf8GQ4qMWbnWHykFHPFx6rXZLg6ZUNbu6uAndsnmQReAwNS24oo",
  "key32": "4zRHE68e2aK5PGLSoWTcMSgEGkAHqrCJ14GZFUUFdc5pEdXf7GQwaMa5zz3cx7thFAp5RZY9gbd4xw9RTWdKfMqf",
  "key33": "4MdeKVLGCi7YB2iy8b8S14axf239bv6GvPGZpnAr5R9eGuWFAbEuzPWJqkoLD7qEHfrJXNvUCz3S2xjMrevEnKGD",
  "key34": "5qo6njQXVYYwVWgNbzpU9XDt6B1tBckoVcZwPJKfYiqf6nt51fAb2tuWDYxUvPg3Xtwq1Y8H51dDegcH3zB8trAR",
  "key35": "5viZvTuWMVD7oTcwVQWjNk8trr8PHrZkjVNVTJUKvoEvFnLSRv55XMgRHuFoM91Yr5zGJSoQpGouSC26LM4mpoav",
  "key36": "2ee7v6eJnkVDY1mJD5iZRHuthNeMAeUwWHpaYzKhNhkbhq8NeBwE2MiZNjBwx8SjB937fCNsnz5zDKbvHXcZKXt2",
  "key37": "hYxjHj2DM7iCD77LJjtPV79NGXNipQ7BQsy2KC9Fj8vtDV7F9fvnonBXk5wfaSYSLyEY2AkohDXCfcJS7A47rEH"
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
