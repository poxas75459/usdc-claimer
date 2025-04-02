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
    "3M55iyWEFRj662wY6Xrper2ukyjSeurjmDS23kfju5Y7do6kL2kGGGKHKbYGhCoCxyEi7kJXhb652bibkicRLzbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hysjg9aRmwrZfHFNYVqJN5ZRqf3gm9zrCN7Uxp4SaJScWJM5zpkz411p5PySqkM5EBjP5xzt8q39zs4j3c54nD4",
  "key1": "28CcsCA66HKv8m8wSCnki4QMbXjTkTzcsPEN6DZH1agjZHcj9ouTy5UzDRQVNVwCb5V33fo2xSV3JTMxVa2xk8Gm",
  "key2": "2o4gpTyeH7VP8fqFo56dozoguooLGLqccpM6Z67QVmRvf9o7w1F8ZKfUQgsMMLQ2ew4o6nscR4Mi3vYTgZ8QPVLp",
  "key3": "3M6JNyjKdL2oZ8oVMb7Qf1ssC8sZvRYkCdk8jaiufmHMjrsKDDRapA9nLC7StoiMB8mzSCw2VXZEnS6MgawpmNEt",
  "key4": "5f5jWLghFoSzRybgHaG4KLr4LLXFoKfxT2NVWWJgFQjgkVadHx9syoHeKiVqSWDg9coJPCPJy4LumS6nGmP9cxcP",
  "key5": "xc2x6h11E3QtpWdwxR9cynTje5aUaJAnt6rMvqxn6zREDzzh2bXmA5iPLLNxKhpddxLhkBnr2pXv7mDvML1iGVC",
  "key6": "4VPjfCsiWAWYEu8F9L7S8TkSMYJePuRQwVAy8opw1znHE5P4W1XMnosKVzJx3iEQYrf7TiJNr3oBPevfLQu3TRuM",
  "key7": "QNdcKZmmHFeqozoF7zPi48roVCYru95fxyaSTFUTrYiu6tBXcpucj7AReJ8EqmdCXCGPrqAYToAfr9wy4X5GbuN",
  "key8": "TPNWqZueGJBefNEPXNf4UvFuv8gqqwRVzn1X6ZyCuZUeRok8JXJzwfvxzracbeRzeA6jt6fgc8wTJQQ4wkevxnK",
  "key9": "4kt7AXfcV1En9LXZjDuDpaYE1EHvB1Ued39YrrB2jxcEe6aiYpC7aSiKbMZXeEEUexHtMj4nC2NK4UjZZbk9DnTS",
  "key10": "32W843QhChHicyJygJgFwtZVuXsGHPu2q3uijRYyRa5RGdpiK1xKyjwHZi4SiksxKwvNgRixjymoDiuhNgzGm8TN",
  "key11": "3QTRhrDDjP2jwErmkzymSk7FYGEer5efwADWbrKkqsFqk9xgdxPFoC9FiyEuKYg6gqM21bcverpdYGJfM9hywSMj",
  "key12": "2zjfkFpKV9qFizfjPtGJ5UWTQcQLVdM8fNzrzpHNm8dXr2JYmTVkg2dhJs51C8yPGTwvUx853yfU8SCxzRSptFyU",
  "key13": "575jLDHaF9ydnwqWK93zqGNg134bxUL3KLsyoaQTqpemxSTYHqPcWYVJWsx4zqcyF2Ud1pWx8gR8nsM6NDs7B3ce",
  "key14": "2i3gCJEJPGhMxJG2iHo86bFYTbm68RHRsSAenRFQkuzNMLmtbNcpexYcCX9Spw51p4PAEmDqzdKgqVtktoDit98X",
  "key15": "5djasWAdP5Ne91u4F97aAUo288yTPA48ux1LTUo1rmQ3dioSfoQaf1eF2morpMFWd5biC91vpFpcKZ8Kug87kYQV",
  "key16": "4mTVipwdt21NEPVu259DFMaaXhGCtoNPuCvyA5nzmZmSS1WWVeQexQe7em3TPwhwdFEEa1KgH6vRyaVvj2NLMELz",
  "key17": "5kL3VEyvvmj9WcswxR1Nr3rgP7A266yAQypH8GaxxjSxroEdg8fAmBNqvsSQ1amu7B1t9XnsatJ4qnMEVWvgXpe9",
  "key18": "3qGoyH1LHPvdnZSsuoXX9jg2in6kpuWJxbBVXUeChUFbRnr39b8KBKaEt9d9yELQ74ym6bAqryTTEEVQYD2BzJ49",
  "key19": "2XKggjWbvUVpvJWa5YLEnStmtjSrgiX1MQhrXhMvfhjZxH7AAP69kUAujmrurv5bR8m1h5DjVZsECSaBfPSgCFxR",
  "key20": "2YStiRu8vEBEc1fxCo8VaJTd5KLhSk4NkYubg7auQLLp4NwQU1VW8nBbFMNtnMf4yXpdr6Q7bFSGchqwCPJgFZGZ",
  "key21": "GXFkaJLzyzHCfveMecKphyC216JD3oUWYCYDKJgXEFgyZHwGHxoBS3apwCZ6XYF8XaDzd7h2gHGFhMHatgQSnvq",
  "key22": "5Xb7xvyD6tT99hgdSK5st8bvqVbA55BQQ3X73n9h2132eK7285jjy67t8LxALVzHcvAV488LrjCYfwBcixeK4rmi",
  "key23": "3k2j8z5kJkbDsPJimy6b6KC9u5pxNw3VT6Y5t65VPt67vKEMvwSwTC1NduS37b1jEWNkGuSUrNo6WDUhojbAqJgf",
  "key24": "6RSBifeCSU6Pq8jGumWfqzKwpvc7KHRU1Hdve66NyQSQNfeNZr14ZUKp58FuFWX5VfcxgHdTDEEh23kgKLKnY2x",
  "key25": "5GnBKchWHFHnrFKdDHxvDGNqmvc7ZygPfzabin3vatjqzvRbaunDWj7wRLw9bExuhWZMDWcJqhSnyWzvm78atQZi",
  "key26": "3ei4WTEa9TerKVxnNNyruVm9kf1hxR6DyAP2m2bT2r1e5YRArwyMkiALmJyNU5Q3uRaZ9DpDRW96dvcGzUD4rdpD",
  "key27": "GYcy89CWYnr8jAiWbLK3sQUHjiNVU5yy42YyKrM84nHspryuEtbisixVABsk4YDh8X8XPVAUgegQPkgbkw5qFwQ",
  "key28": "5PbHEzwQujgvKkAQLBhj2qWCeT2gzTzqbcrVGvUhP9GSYoMQLVvFdRyJPLnSvDb1KDVKWVFNMFPthARac2hb4Zea",
  "key29": "5UQFfn1QgGjFJBCz9zg1gyMjjiePFQtN7hUBbJqxTrRBRhK8R8jg9PaBsGhhPH31DPd4Yf8kfhEyKcvB21ReQNs5",
  "key30": "3QMQBebg32L2AjZGqGrez7mfz7pZfzEyBxbvjVXhbM3ZchmEMvXRQhnByw9qR1m4a9vmSwGkxa3uxVzXm4e9qsKf",
  "key31": "4EEjx7W4tLxDj3JpzmF8xRbMarKU46H1PTbuH7QAXq8VCviZwzzwCiqWCw49bCUhshjYKcYX69zyfc3dGLP8SxYr",
  "key32": "CXyCQL2ZJ4xrGBABDCzCndrwnoRzYZ38XWAiXk4BmzbV193NZoBZt73qYCemR8cUgVvMEANoRxM7paeuJsiu8cR",
  "key33": "4FUZXwvPApu9o9LBLjRnZQUEuejXLTacLw5o2gYWWjSWcEkSY7Pfv3zUYZ238s6Yp9SKs6256rz37QCvUzBoQyBN",
  "key34": "5yXMGHrb98HE2m3LNN63nTf9t5KMhvvgvy5HtnxCW57DWZ9GYTcwpwNfneW5UwgLg9xMuLBqz3J9J8a1H175JgM5",
  "key35": "3mVeR759WbtZJrn59YDBazvCufqsgegF4LF7pBqvxhBGhxNcu6QLrZyhYabwgjHKVRzw5BMSSF4ViocPubJ6qCai",
  "key36": "3hZnK86XyekgYSruD9kSR6zoaJg1NVAuYkhADktPebmRh4EfYrc88uzqgYqXpadKkmEchhYebifAknMcBkWVL4Nu",
  "key37": "5QqtciDTdcmeyfTtodxHEHWxcw1Cx6Qk1vESL9CZ25s54GHBjSxzxQB3fuPAPAVyZ1BRQCic4HofX7kBE9hahWGQ",
  "key38": "wtEP9RYmz2NDCAwzBwjNqfM7huHj7T1bZukCYLANHADm5A1nnsqRHrciodxTZQ6tG4AG2TBTfSUgLwNXAqB4LRm",
  "key39": "UGuMuknzeD1F96DZHuAGizxhXBNwu8agy4yUyUuRZTcR45ZtAucQk6Pp2D3UM7W3xY1WxxmrfFuHNqfcBMgBr4x",
  "key40": "3qVEpzy93LGzSt5wTDPYCiFxRkw5HuzHbzmUeqkgk3Ey5KpMEngPbtBLM7x3JMaNxptSyrNx9RREi7E4qaJAYPqM",
  "key41": "3ihYNBDuEypgSfwk77FJpvkXLsEBuntNhMiwhCxgNGz6oZDmgsXbQ2xTwhkpF9x9xQgkJsuQPegHtasuRRnFgz6v",
  "key42": "5XzWAsQnCk4CPXsnFjcNCv19aHUmhdLSfneVC5faU1ALGUZ8WR8YQf6rLncvcEXYrwMuVQmUd5pRx4eDQyM97NQ8"
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
