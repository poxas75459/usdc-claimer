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
    "45hgDjSCW9phomsSkpqMbocSg4RsiKnuiq9WkEN5HMHcpQe1j8nsTsWnGLuxkcrqpM2xrJj9Zgp5Xx2sQHMpanCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2d9aZHTzdmpTMVeeqGCYFhoyRDDvJRqgbuiQzaLZuU2bNW39PCUWgSsmwg61EX9Czf1pu8E2MQNUs3oqBdQ6Vh",
  "key1": "28c4kydfnTnaGuJXPq8eAyHXru9AP5qG17usZEhVgVTKajXDFFsAXKGe1XsK8a2bqJ48P8AByzS2wVy5YT9r66Qd",
  "key2": "4ybb7nkVcgdJiR1SDqEkd5Qnz5giJKVYVTcMUTNKdt4PjfaHeL4HyuD9fcLhtUqytuRAyXDMvC3Bm5mqJVVJJjQg",
  "key3": "2agUddNu2NmpBKrBmdb5Auvpz8fPV7eLGMhxxzwBBt7ysUZmv8srvuETgNJP2fuxxg9NPjdAnF1uo4aYFXDEXX7U",
  "key4": "3A795keTE4tn21DPpAkWr7Mt2P5kmfg7EUGfTL48sYVCw8HtJkDoySaVVuPttrQpMUkEFFHxGuvSZWWAEjXU5TJ",
  "key5": "2WNWRkFWoLF45VCqUoetHUGeeDEHbnT3MxJNzVnhBzpLrmt3B5xFRYDCyict7yzefMaNSgQ2WdY7Peon2WFisYiq",
  "key6": "5epd1y8AktjWxT7wk3fAZMmdYSoDiQ38DYcMxL53qnkcGFZyt1JqK6WDasAbhy46oefZNFTDPVaBKXb8TJiCRTHw",
  "key7": "4zNUWoQSXqMZB3Eg8asiFfUuvHXqVTfduknKo3xeMDaJKgqxB4Wot9eaiDpJ1vyqn6fsHtBdE3u6uzreBoK3DiEm",
  "key8": "5Bw7PT4nH5puXn9EhZyFfKJP1RFbLyxp2sf6jXcoZR5vGnAwaUxFQLEhcihVYwfyyoysfQ3vxj5GLdxvVkKeXzma",
  "key9": "3daXZuJADUdoPsJGsuSy4YHnFfreABnGMHZhegjfdx1pYeKPwAwdTLJirTkyoXvUBgh4YsWgEqMjXB3hk3kXh29p",
  "key10": "2zTrhhNGK1AWctHainuttQLu1zBYBo3ZPRXzBBevjFZN4zaVavSUfZYiU5Zz7mgAVphHSL9okgWBJoXvgcEuMG1J",
  "key11": "ir7r4rZa2UEGqteYcn9gUPLS5tCmsNxxCQ81KHgk6gBFMyrpH9C1w29bhoK1dfW6Y6aFMV1XDdTgB1MgSBkDNWT",
  "key12": "5UQ7iZwjWw7AvVUSR2J2Rivz5KuCw6YndA333zYrxwrVgri7Uyn89i1JbiZpe1su9KuWqrbF4iqeyGzFXZ2dZZh2",
  "key13": "LMRuygN2uvDchXQVbAAWTmu2YaWRYhYxL8hMhPe9ckXMN8oNCQJPwwgQ2eSTiJD3yGLsBKAXpfa89MXgdHQvk4i",
  "key14": "4NmMZ2NLifZV4VHmHgzW3eEEA7yL2nzXMnX8WR6qsZyCbVAyQ8aKWANrQT3rpEsNLeoH3mnyzs1A6vGmhLPovVbF",
  "key15": "4hjQkTNGXytjrwGoaidAGx7QhL74dVJcKSoJaUerwsqSQJxhzS5LhXNK59mnqJobpuH9qxuNDBqZVTq6czWcDAs2",
  "key16": "MnaNsYj1u14BD3UsFMSDsfJn91V8GmzxnyKz5VxHECec3HkzSfJAeKGeUSPGQcWCDutRotMfpigc9pbVLi7qzqZ",
  "key17": "4EZrdsrnhGTvuhNaE4ESFBpqENTV9HMmMaDtdvvMg4tBjcEYyWgCzBnu5gJf1EkgGtYkG5meme3BmYGthcArzDG9",
  "key18": "5Zh9aA2unPzbym5fQeo4yb1h2YLPG1eLM7WWaKWjpFvipFBdDQZjtPFKpibDKfE1Ai74naLEovx6mGhBCEgsEJ7b",
  "key19": "2UC6dN4wn16UJvfPteztUdUntRmanSgxFtyNEbg9qRCCzu1kiQMBV3T7EyFVKjw3wNFfKX2zsueaWNPgMgHPpZbe",
  "key20": "q7FNimdTcmVAiY9ygr8ySPn3iY5GcfXKRok1uuTd1fGKs7K1GqBVjSKp9meZtwKyx9XWVfkcmMNzENeypz9Shnw",
  "key21": "B5XffygTKyzPRFu5V4VmqT35K8pr53GKKfpfttj4Hzxo9v1SjQLzPDn3AnUdewQTxYh3CCLhWwDHUAtoqjf7cnG",
  "key22": "3XpRVvfWALWqr6gjSy1e3Lfr8iXEH2uKqDT8bN31jFizaW8P4JBZYB8EWAkRp3VR7QTu7iTgFtGLLyZL5QjjVi5D",
  "key23": "2KguxyKTUn45gQn9CSFGguspQ8q7zosQD5sKPuMN1sC8ymumsstnVF9oZnsD7y3G1QYmtHbfqYsZi1D4ji5FZVB9",
  "key24": "3h1rT3uXebyvUgXnTEPfk8HFRHDdZbUJ5Srkc7Jyc5CxvGNjxRMyGb2yh8ysyzyBnuxZytfyy93xT8RzY6QRvKAQ",
  "key25": "329fqUXnGocTv9oY12hhhaep4ADVA2bMkioiHxeCZujfLYjCJE1RiKWRuhY3HJqJAo5QrPawt678gfEd7rKZ1McN",
  "key26": "5W5yBmL2odzBMaTu715KJQ8oiqcwHsuEt99v6A9jL3YEpFxoExNmYfGKbdqcghhYsCPdhnK4TZT34hLbDPhqVU3N",
  "key27": "5Tj5CcM8fo5ui3fvatbD2KHybMgKDpADRr65yT5cpCq2m1WMNrJnGwq3j6W3WzL8zAdf9RFqNhPfHrGZTyqFUePW",
  "key28": "v4RD1BZpdjwJMYBGe2J7ShFyAbiH6x8w7VvnUMxhRCiSWPK3yrAqjATFQu1RjS4tG1fU5ccYWsbou3tfipYLdVM",
  "key29": "2KLYoNLXjnoh5XGbxVUbvGbCB31ajvYuqdkpbG6qh7PpNyCVFqYJFoKmqx4Cmv6ANBQf7tPvKHqLw88f8wLiwdTB",
  "key30": "4TwqX3UzZHtDw4n92dSMca1Hcnscx6trBFktVgtRJBTqyjFxEUioK6qRR2gFzay1fqmZVueDprqeTZJBBGnKnWRV",
  "key31": "35G3RGPz9ZDwnamPzA9MbRdLq3z478TmYu7PN8w1em1T6qjW4haNWA7pQQ4f9BSPdLzvGPR53GRmQevy2sE2F3uj",
  "key32": "2RVo2e4QyzUGYYjz4d2RHrGdvpw65QoHncxzrBXjtYzYvEn8WbiBwYunZ22sxCzHex3ReZg8HLubLRRtXf7uBXnr",
  "key33": "5oqUuRqFu17MBSse2bg3zH8Tcus8JL9QmkZN4R67CZWK6zYWhwYjSzWGqfdfgcJrdjcyDsZuEf9PioiZMMYBSPW5",
  "key34": "2MQKbFbDzeXH7Gjjvip6M15ZA8oC3XtTsNZo8usAJLke2mqR4Hwmf2Urfa1Pf4oUjBJhMFPg3NKwJ7szqHzVNtxD",
  "key35": "2fFrfiYsRhdjUbPko1UTCQogge5X5ipUJLtjLUb2ZDddKtR63j3Sy6MqFhFAeNgN5vvu4M3omBHpoZUFSygzDdaw",
  "key36": "53YC5Z46Ba6eNMMohpNBtABEa9XKsmT9mX3Lo77Szke9BqSM2WDXmraWjiPgqtCFKPA1SQEHzSuggxYxwN7mev6x",
  "key37": "4XBRsvY5chxVY6euT3WkgprXDKTLTneN4jnQdHgDYAyJ2yMHTz8yhVZNKnHdRb1PBgMnF8sF2Qbahy5XCEdT468N",
  "key38": "5EHDvon5efXExSp1onTS8tSYrvQJZynv5Ry1d91cKF3WB4spFBHM7K2bkQjieu2QB16LWQeSM24xvRmiTUbg6YqU",
  "key39": "2R458XEHFgh6vayc3rAS99hpFKqETWTJ1wqkF6WNmeCbyriKh9R8wsFN7PnoTWsEgruNSWNLdkmKyiXq9c7nbiV2",
  "key40": "5Ne2GZs7LCNk2GbxrwL91JUiKwGjLo4Yrdka5CuoTjMJBcymwj8GSKEkk6e6zP1wRYsbrtUFcGkN18Z89pyRuxH2",
  "key41": "37koL3RYrpbgTzYgiTZwU5Hu1bdJ5YPU26qCzViqMFqEtFWNQdZwCYkiDL9UeEitkABc3yyCJcMHwtioqMbobKCP",
  "key42": "7T625uNy11xnTq9DqDRYvt3sTfr6CKB9rRcQojhuXzS6fGVfcPityqqkz2S71MRavBZom6SjSwWAaWKJrQFAvrv",
  "key43": "5427fCsuvZzENtQpPMaEpvREPBGrv7vLmKNscyEYY1TfGCxMhnfcbqDPK5oJZDGQ1erCq2ARRj1XSrFr1oteoNeo",
  "key44": "F4wXsZS4F5ME875DmjHM8qWgCVddEfYEHyiCTiwxbiAzHcDAFgbbakcor6hPrVfDDZZWpfcqCqMieuKu6fEtfnV",
  "key45": "31BPmwuUzrH7xjE8qFURurLLQ5bXApag35cHgyes7YN7Vdbw9K9rDYAWd6oHyag2QgdM8T6zZmM8nefX7KnajLxk",
  "key46": "s2TBMw7Sw9h7SmpHVyZAVVKmuRgrGxemq4XMgNDUW54xcaSpwJNPgq5jhbEXaQCFnxdV6pzoPK9aq6FRQxLdaCH",
  "key47": "4nMZ6fQHDdkzhu1wD5PxDTdY8MMUPrgA3DQheWBtmSZZfMmEVuLKWV9eFTnuK4E6aMNu1nXUPhkCat2Ac2VDRH28"
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
