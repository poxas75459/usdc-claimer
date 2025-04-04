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
    "3Xxifn1cMBCxrk7Knx4nkHTTPSZ7vCyLXsuYYtxXxJn9qk2tG43XBGV8apbAdd54kYRLffCYyNWgsAUsBUkkz5Xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqVd6MvMY7Mk267WqsCC4fhHxRU41K3kfAFB91b42Z7oPQ7gM9MnmNhNZaKbn5uauA2NhN1pL9YBaKsNbSut9fE",
  "key1": "ACLN3ohw1iQCZM2TzX9Tb8EoosoqqPTVsbEoTUrnCjCLviHx3434UAsewbKhQbst4wbmgRPYwkZsGiN4EwxPa3K",
  "key2": "sqRT7XtAZyAYW9R1qf71uxBAtBx74N9UQ9nJkyG9fNps9j3VzwxXr91ffYdDxWVh2zQcQUvsyyVVUpNUvjzbj8Y",
  "key3": "4nBXPiMM4SqCP3YLkgfsT2AmrNnoyihzVnqdAwf4EYTGLALL9sV4FermBCwFHidcFYrE265rSqjGuYURedQX8Hnq",
  "key4": "2gZg98B3MJ9dUkApdnk2DpaFMBm9kDvoRWLZktokYypYiGvixYvWJUiLc35QDgPR1ug5LXo6KHuszAVAiTznbE5q",
  "key5": "3XL2JnXQHpk1NkhqNtLg7U2V5kcjTdZBA5E15Qpfdm8zdtRevm2Khwb92SDYbeKa7TVBNtXCoZS4gCMEkmaRV5Ar",
  "key6": "3BHSfkZ99Lu3bfzFk9uVZ3Q2u1t3QR6aD9kDmAKUdZCfYu8AXiRs2uScmtHoZQw1wrDJMo8vKf85eGeFsWGRU4Wt",
  "key7": "3thagjAr2fzyhHAPbxEpSQQw1bgYk2qJ1GhcjJ7yKfGkbgtCrbTzL8Lospp3mFW7rdJtamr6iF9craVgb8FZCYYY",
  "key8": "4wWm4LScFQ2BaaWEaH2v35sj7ZnZ3EFCqy6i3bqJADmt85NdF9T3GfQrDezr3GiMzPoZPeLufrkbBjiVUBjGzYpp",
  "key9": "2Au9oHMV8YcUH6BuU7BSkLCjTETCJpif8ojFiB4j6i2EMwkAWe8uBoPFuKrQgDUNoS2xuJNJu8nVKCW3ZoUff5WB",
  "key10": "3xPjMNfuJbW8cRtau2bLQuw64zoSKdTvvXgWuHBXaiN2UPrbEZ6ZYVyy5Z7RhoFF5ZQS8XphPDjdzCZWGWhJookR",
  "key11": "4JHLbsQZZZvw19AWnAWfMKyVmMAsspHv9CWNY3WRq5r93tLobZojjykK2FLa5Nsev2Sh9XbNFHsuXYNbLyrxdYKx",
  "key12": "4wP34Fjwkiz7KNtNuZSAsNP7SGAC1cuvpem2mVxzGHkRzcXwt59x66kboKiqh4mf8aym2mFyW9SWZwQnYLVDNbSx",
  "key13": "Jwzw7MwQ7xGWV7JTner9e7uoptAoQ678DK7YnMm2ehs8farpqVtVti7Z2YFWtPRLuDHLkbHALADv5BbPrY9D2f3",
  "key14": "5ZE5WCrTzxdVuEx8A9HKombwLigmA4ysneLUY8xnNCKz45Md1HM7bN2AXS4V7wBfXVCaCifniokdDtc8jz7tBreM",
  "key15": "2e86M67m5f1TpWU3VNqzg3y2bUKA9dbSoA9L7LN5yMbc44PLoGJRwFftJPMGDWfun6d26pkvduv88jUiUL6a1CQJ",
  "key16": "64RVKryKAj3j4bjLzh6JAZU8VnmrMbyiK42UvWzbrTDL7g7YRoQ4fbA9ADW8nyfu4XCtMjPfgNVWoSM9LpqeqNtU",
  "key17": "2EhZbFo3KtXh9nWrqBn7zNjGu4R2SkBj5iKghAeF6Sr8FxsuAVdKk274UuFjmUJLSVTK1PLCxLLWm8AzqV6TzuxS",
  "key18": "4jEKUQhUREEQsXS1Z81a2UHzouLp9hQdaraf1TkpNWQB1ZPMWciq9fM8XpAeENd9rHkC3Hz2NCSLg4FdD4o4KgFG",
  "key19": "89quLF7kc4LHWQknH4SZPHvZnoyuHbdAnjUyCDPJ2sMJN8jnfy3uwuGYBTPkCZUoWLdB34jUhLqbmkuhhhCH4Hq",
  "key20": "4EC6pAGULskaYwEMQQF6ThK1Zrj49Vw69CxtgobifWkVyviiUPbhuHnSPQwKYKyPK54Qzd8q8fw2TPoY3U7udhJR",
  "key21": "3eysP6R8DbaaijgVWumAjr2DunbZtgHP1GBeTLYRWbNmoDizcXBGvYmduqUfFy4KtGySzLQVQRfvGYqbYDsSBLKY",
  "key22": "2cVgqa58RXCsfRLqwjV2tQrX6PEfbHfUzD8emAqAUjN76Ndh1sCxHUCiFB9EBpueMxMyR1srSKo9CXnTLS5us5ZH",
  "key23": "iWBa1noW1gvaiqmUXumr59Q8dFJHNP6mnXzdFErsAq1HSUrtiJ9WNPdfVXXe2uogJNdGdLRuH9yyAwimGiqw6rC",
  "key24": "KmqhgxwjbSTgU9w7VahCFBVoLAYB9bcwYhhsxnb8uqroDuyVZfwX5gh4wYcXUmRLexEMgey9qQEXK5F1BYtVs7E",
  "key25": "5LvTZ2CimgDp7eUgX9ESuuPUrRovYdNDHBA5hZDVxsFBiVBmhk95YNaeLfpnPYZMfx6bsVQikdw9oYdRjG9BbWB7",
  "key26": "4R6eDJ4TyjLZ1EXoGUvSzqBHujen3KUHK7piUNSWgzF947LaoQQmhrhJfUF6B3gW2Le4gkZwfbHsxauBwXe5ATz9",
  "key27": "3yLHpCwoaMGPpJWqyLsucGPkH7FV3T79ZhWJowMG3KH5MdmdMdnUxduny9iQLjWRk2U9BzoW3ZyjAufytwig3SN",
  "key28": "384qukqA1LRwLsEryzCa1k7bKQKJQ3jcZCT1nuGk7cjApzUmyZNhbEL3cyBGepZzCgNEMb1t6c3yadthqAxjowDb",
  "key29": "5hVrL5jdwj5pJGCD9fHanCFUUPuVVD93mXTcjrW4XASGbADMZyXxppjdvfb2mJyFAcSTtz3MMuY3zEXhyzxWPAq6",
  "key30": "2sRMeSFfGDqn2L7XQxmXZBJFqXfxanwb64R2SrNXc2tzkg276QeEyh2zsowY9aqyhqnYJpeetzkcwSTndv9ZFV2f",
  "key31": "52csaLHHtymWo76vdG3JwKemCtmgEC42DewyivxQAx7YXvzojWhpGmcgWYZY1R2HSqQi9faBK9HMK2WARBqoL7Wm",
  "key32": "3JxPMCD4tWBuGLLgc991EcAXtT6vEjeqdnGv4NMcS1YPnJernji9iugobyKQYujgXCLRn5mVUMSMEknHUbs4dV6R",
  "key33": "2uWjn8MjqswmMCpS1y7BhaD4nUHnR2sjfzqZvxNVfYoDEqGy7NzsXLw4ngqYyYszhjDk8c3ouimqfK8kzKeNoPKP",
  "key34": "3uMMSgDvJTwsXTpXAMhZGVmMo1bGsxh6XnVcgNTX1otiSCsnSLtmkJhTEgyNRymfUZn1T8SbXmTe5UYcMPjM7zUP",
  "key35": "3puUqVnrfAekTJ3hFUGkHE43aZVBccQsqHAPng5JDPbEdZEqfis2RB8FzqGrpk9AHVmXXZCQ7kBNrsLrYxFS38A6",
  "key36": "4fcnEgfMhKqxqSXuy3s49DZ3ibo8XdzNt8jDFkcm3tahDS6Z9BmnSKmUCRTGd6pPgRju82hCwoTXpKiyT5rmSrJp",
  "key37": "55VUXAeqNWjsDVoy48nDgYijkNYRyKc5oewg11dVdzebviyD29UhSA7ZVK2xV3HwQx2L9L646uuNsH849Z142VTw",
  "key38": "nSxKq4jvWQAN52FkRKPxyW3w5Ckt2umJ912siofXVy6Fu2YZ2F3aP4NP9BYd2ZaSC5FjYrAUkShfsL27WgjHw5K",
  "key39": "4JXajm1howhtdTRox5Y78CSmkdBvCMQ8qKM2RXjAagbJXSYgpDWJzDPMRbuQbZXY2DLSJHjVAMayNxdxQo5pwfvT",
  "key40": "JrnXCcEqXNXrL24U5j1RwjrwGtiPeMVJJ2ZrA1pDQ4C8x9DskVhKHAfcmCha2X5fWXdJxJNFkMEAeYbBxdgC9b1",
  "key41": "3skAs62kFHF985JgkV199xyDbXW5XtNtja9jNZu1DdPJ54919JGbBp1KquWtpcLGKQUM3mdJ1w3gwKtei13q2jig",
  "key42": "UQjLEoBzXumckCWkURnxBouwPRdxmWBrHTigJ5FthWXFSJNtVGjJ4W2xb23YRFpN8XMfsry2u6M2q9kCoHHwzXr",
  "key43": "bMb4mebmZ1Qsx3saLENcC1rAYQ4TopbfSpMgrgw1hGA2Q2qYadYCYYSrVSyTQZ1RWmQd3TVg5qdz4knG6ui6hXn",
  "key44": "NuSfE8XiDJbY3PcHBqNKqWJCNQxoFeRHziNcqzz3EiyDeoiX2MqRbxA1T9BUwXW6XMDkjBpUnfNfvpC1GyUtbVA",
  "key45": "7HViTkbcTYTqn5X9vAmXxgskdmWsSMmyVFKcY8zde7MDQAdxhmZKifN7MNPtb8FnkUHFZhK5URuHKsnPKpEenur",
  "key46": "UWgSh54xzq1B1puoiaYx5B4QkRRaEkSCWqdQ6F71r7tNreChsFH8hrTH1dc6HwgsSHL7BrJUqCJ73MVWMLx1dw1",
  "key47": "4pS46fG7XRGHB7areaUbXyyetehou3mmSkX5gToapZEfmEYhYADbfR9PcWcNqKVzW3KBZUfP3Bz2iKqfNqaMzzT8",
  "key48": "44jQZJK6T9GeAekDLsNzSf8AWUcYTnqW4HGvD6PMU8E92dSSPNQnDhHEUhLMeT6iUbLAUiYzzRV2AGxaPoK8MTEJ",
  "key49": "dH8Kg3EDtW5AWj3c1PzEa1RthWMnSNF1kf3v15Z9sJQPRk8CRxHwAetokDqs98vZd5keiQ2pZYwRZVhiMU3kdB3"
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
