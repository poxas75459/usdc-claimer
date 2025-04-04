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
    "5uxPoh7MGKhfkXstY7pa6Pcv7E9xFHBhWKvkB4f19tZMhg4Nk4LDJvRwdXGq7zDS5Fvt1JgDp6sZvrBDxSbhn7RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQLUz1vZRF4nF7xc3mqPAD2YnhaemEiviHa6c9ERBni7QbiNbemqmpKryVpcKfvaqSJS8KmaLxNhttyM4PzDQV7",
  "key1": "vJnJv98UqNR4uYpxiwefNadYLzDJhaznxzxVT7CAZTn17pBtAGwTkYQkXJLpwXhZJjGHRv8bcTYjZxQq9zpcYhp",
  "key2": "2N4wyyCrxR8isTjXUDq88JXkcQvgRqsNRYajzoiWsrZkmyN5CJ55duhwZuT6g2WMJcBL2VHxX8T9SFErGTysJZBH",
  "key3": "5H6ULWvUCk8uxaCcSWNtbtu7cNrUgrYfbCG4h2BVn52VTjTL5gAcSmPhX6qZnaBUfgYo46Zx5Svqpa8Zp1P5HXL7",
  "key4": "4WicFugvBwX4MgYhSTk3iKspgPUm8mrEuWoQh12tEmbT1tojXtU6RMKC9TVbwHavnazUKenDRTwT1K2Va2xpYR6s",
  "key5": "M6ZANtAt31v3CKbBG6pYZb94kxf8mqaU8zrdK6gfBj3SsQpNoCENLfGPqdcQLCQznhoVmVzqjmFkDBmyc1hNGMz",
  "key6": "2w7iworGqDLVQ5skWQz4Ms1erAcNCj9JpJSx2nH4uQ53Yv77z2cJSG7isQagxRLZT9quGg8LnEXMVHnRhdMAXRTi",
  "key7": "3DXq54bqpSEpvRabzRQexCcSxLp9w5DR7DAcd9keTiVytwo1CMSzUYeHu7VL1UtUw3EtiqynxBiRryqo9SNYdc3s",
  "key8": "4Er69Jy1ppqpf3dvCdFVhwvMykZfY8PPUZVoXk42pj8Lins1YaGm1Nf9icBj7SjKU9goiBk8bmaMB7URvAtPvESp",
  "key9": "5yNVsLyBWR16qZgQnmxF7XduanFxX6vdUySZsC1kiwAhu7sSe7KgfJfPPjgkYhqRtpFgF7cpwtJGSf9wHhfQ4anj",
  "key10": "5wncMUyx6Wj6xYaWPhkwcNEVgbuuxdYDHgbQiCP6SMBhzyxQ8rWqH8jA1R4j85BZd5BydpegjPyeWdVpmR9y36SN",
  "key11": "SRPqgjM1zMaq7GDGnEeyiQwXouphkmjmzapTMW1St4vdDpniEvvF22vT3CDfQ1mncUCp4MGQ2Nof2TwLncT9wZU",
  "key12": "TggiZGjxepYvbbFTyEjyPt7Cknsw9R6i8CGwYeiVJm5QLMQna118tPUuejVJ6Lp65pn2MciwYFizBWHAa7MTyky",
  "key13": "3jyfbNnyWzsj7kycM5rKedV1pySC4sE62A8GH6ZjUyVa4xTEWj23SwdU1uj2rokK4Q4Nc7GNChqCfQbqHT1335hx",
  "key14": "sNBmTsoJA2ADrRxQR1cbebpDcjHNDttCbsdyyXp1WYTbfAtE9QNAbWySfrcAsNUJkW1BY51QjFS7tt5S2VyYHUW",
  "key15": "sZzjeuiyr4ZBY9YtGJ7oENTJkyGCNZK7JkBztwp2EhSMvh6na7DS4H324PZQ3UcLb7YBUMzWWizx6hdu1NGjG4d",
  "key16": "3bxgcXMDxuSVkPmJYwarnG1aRtbNx7AEB61B3rTdof3yqc1tiAg9rdCux5R6MsZ5GnaCiGqcKdLkRbiR7Rk4efs5",
  "key17": "2fKQMkjRAcUwoK1z3jvwArL6pzDv4tCNDvy1AB4Gb9STvmnnTmqYeC1J7jZR6JcsSfhWLtWC5tzRqvPEdmK19iyh",
  "key18": "4iRfkompT82xoDANEDGMVuaWMz5bnVgA3NQieH2vXpJmd6sN1cVNqC6nKQ1MPqeeSJeDSUJvYQGnJutr9a5peM35",
  "key19": "3ucnWGqFKsqJytGFkmznnCd5EmTqfraboxSwCvW6tycBid943ksV2rYdcQPuUaEf5qgCiqvfCkAPJWiu7eV57ede",
  "key20": "5hEz7ZKx1hjw2zrC1oS3WPaQwZCagD5AqmcNNxmSi7HNZmYzW8PQm9fYpNDM6oBMJ3ybep6q9AaNpdnsfFz466Xm",
  "key21": "4dJ9LGdRBB7dtjbfQee6j7KrDqnLf5w2sfwek69cCLQFxpb9zKY2aFCGQXbJLPLS1iKiDduQCL8z3MgZYGX7tW8b",
  "key22": "4votf6KgtWCbwkNApuHLC3q9M3nfBxEd5KhKYdxtdJxG3RPgUBKE6sEWK9hGzMRCz2J3qsVEJGBbkGrk3v5szcRN",
  "key23": "2nVNDdd7b1iP18M119PnT4P3N8Y9TwKCC4rdx4rZp6qJRsQqktTByZgfnSAgCAsoWHfFjE4HavtUDZAvmLMqwKU4",
  "key24": "62Fk6hQryqggehnXAi1wwQtfrNVK8maAjxgJEAus9ZxwxRo5Rdz4ymTF9fwncU8kur1RrQnrNTbvkWA7snGxeEh9",
  "key25": "pGsPuMPB1uiPtxZxuu8z3iWNkq4SXmhr2C8j3V5WKgJVYXrXdPqzFhNv3D4qzvu7XwX4YyZLcKxN7Jo6nWD1URN",
  "key26": "2VT7k8oUC3MCe6KAjNXj4W3oxL66svAzpxp5Qo1gfoFGxDSJEHBhYCMiNSPSNt1eH58g6CmLNKmyYFskWWAuKsEF",
  "key27": "pSj2mEb3Us4iHNCAyaKqXE641urhX9mstsfj3wXcxXh8RWnVtftQNYiZe42KjtMA69TvXUd9sh6Qh51MYT9WLD7",
  "key28": "4kwt1NFtpyEkMXPkingbf1MBTdDDEB9hnJw2XAVnpCWBKNTpDEBbauxYQ5aC4C4TeNEZBZg2ihHUr55hPzUJ734C",
  "key29": "3p9h7u3vZCxKnYADE2LjpZHanJXxQqqhjXFj2QfpZHvqJXLERWXG4a5F1FVu7gWknLWwGyZGyDwL6ySAETTw5v8y",
  "key30": "BKJSUvGNFfT574nrBabozPFL4rBYcnd1AKEkLukrEVbF5Ljq5Wp5CBh65BRqK34WFLGeSt25DeDf4wCsuxCU7yx",
  "key31": "5xR4z5XsjLk3sF2ehQ27x57kHmErsa6qPsY65nUyEW64Jrt98toCJv3YM8RzxvinC39ojVyzenUrPZY9x4YGYE8M"
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
