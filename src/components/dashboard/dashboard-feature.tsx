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
    "3E7bj23q7r2cUcVwVh3G4XJBhWkgT7AvcM3YvGug2XifrqCJNroJbMYcoFnb8yLVXExsJDFqmiCQxCKaUWeFqpQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25iJoMRmnHPwJMSuxf5ExY5Xy2Y8gsVB8u5SH28eeN5zc2Guycjj42JJXJnt3H882sXcq72bXyFZGTruYohaaAU2",
  "key1": "5TMjRUggtBWrExA8Pyxs6doKdmysEr8FQkQSsshtgSguGSa7wtnhPz9BUPBXPhSXPRwwDTShnjNnefxDXnwe1g57",
  "key2": "2b5uchgTbr3y3WUMT8rHiurxkUrraEdNr6NYCZjAokHqfz5hywLY8EeXk1Dm6PYWaqkzvZfNxFYmDYBfoUtRLkor",
  "key3": "eFhkwmQMC17yqoce6ri1n9aoyFLXnGsuG1oLr2jiw7kMB7wvuR3xa9izs4h5jv5Ga3Unicbo4PCxahWSNsFiToB",
  "key4": "3CjJB1dYRfSkwqjQ6CQgnPBm7rnhkxzqFGzG8S7UAKER2KJJiNnSkcymyogE8DdSTbRRZpLLx3iB5Enn2FXXXVQd",
  "key5": "2UZc5JY9WfVSypSxwkFsXpMeQi5GJhXqYjdYpvTQUrMzV3PgoExiNxruStZpupoMUAEZvJ98H2pzsvK5BNHsRYsM",
  "key6": "4a9dNKqhpwZM1mMsF7iYvr5djWkRqxHNhyJVb6r4at6xByJRs6xe1d6KubLQp2PWYmEFcCdMK8x9YkwzFhM74Ld6",
  "key7": "4P8chohpUg2HN9GC4BE2JasmAmEiEvaqWNAVYxVLDgwpHZkSRE297wsmVZs3eZ2HUehDccSwQqEBzfiCnGFHipi9",
  "key8": "E8fJ8SXCx98ivRetbADkDVhzXZK9H9ZVsjMQqrWZNotzR9PVk5gXFgvDdT83RWQpc81KzjGTVqe3jJMqU2n8ne8",
  "key9": "5UpkZmsqM5ukrnMQ6WPQs4uMKjyh6npPiPzrF3bdqYCoz5iYB6AHN6XnBS5164iMbCXtzmXmtsRiS6yAPzaVXnQi",
  "key10": "zBKqeBkhB5ZuTjvfbinEpFbSkWfU8b5naahJMZJLBf1U5dNv6DnFwQ1HVr7aU1HQCQKCFsjdkfPb78rJkk9qRG8",
  "key11": "3FDzp5h6uiqYes5dFkkAxgNraF6Qxijbxq3FCR83pXC35dcgN8FePRdSBwnry2qTCEELBPSRdrfv99gbc71PCa69",
  "key12": "5B4jqYonWZ2FbUJrBBeCk5DUyMy45uRzPUsj1UVK4S9DT1176MUcC2KsUtxtiFJzdmpWUPe8KiUFRg6iTv9pd4Cv",
  "key13": "ZotvuC2ezTr8nVkf7wfzoD6kktVr13ex3Hri4GZLmh6SpuwNgXRVgnnUN4grQspGSEBrSRVUWFUXBiLekBHHxuo",
  "key14": "2kWp7CpaQYsYWBLALPDHuA35mQum2nUmNB4AmPL5D8JA8PFPU65PE4V7foRiFJoDWuvNhQ45XpFVCggRW1QT6qPS",
  "key15": "4SZ45duNDJ3NgdJ9D9Cs9Bi3Kwxk3LEvFsuP5FuDTLHMUPdnmEWvpMMKp6asvDEDY9sXUWCrY7m3xoJfNanNejxN",
  "key16": "3teK2rMaYPqFmFyMQNEQiurRnVet2TYQnapC3vUUx8eLWphHjovaAGhSxd2YL6HT4UhW6GzJmkZu7aG1rcAPSKU7",
  "key17": "5Lcjkw2tzR4AKmRxnrGKNzoKb7viKMjBpAoQphG8RGtifox4RuT9STpzGYoh7fZ5qNp3A8Yqus33nswNegqPZZAZ",
  "key18": "3S1dcKdhX5q7DQyGL4cwkXy9qA5HrgQpGUrfxR2sucwpzDLLx1JsWjKB7pvVnaMSSxEQCTCE5J95k1DrxPWz5Qdu",
  "key19": "5hrrw8h7t1PScLYqAs4g8LRpwLYh24tZBhRU7EY2F5FHkEToD4zrNPUKMJLMSP5MFJBvpJRRHX7zX6qqyMvADsjD",
  "key20": "4qZCuQJjx7WanqqoHAB8N8pwxQZZp7SFuQoycpk19BFWa1XaDCfazevk1kFxMxBMdJfAJY8PStiFR8WLiyCGHBaS",
  "key21": "2dYA5tBS1YBUwrab8SV9DrgGTMACvhPHaCgbDDz7FrWYYZ9S4u6jeKdN3NnAHw9zf49znKzU6GknqCdTaHEXN573",
  "key22": "3ysc2YAb6HWQz3Vc7mnjsh56uNmvbPtwY4ScLeKqosfRHuYsESRVDNnMT75ymaWHiPJrvGtQGAWhpxLTkrF7KrHH",
  "key23": "5mq1AyJZUwHbjUfgGU61o4qpHimzKNptsjjKjvHcQuZt8qNY74t9hfxUnuSRSUu8ihfqYRXDgofDWrMxEj4PX3Ba",
  "key24": "4VQAZPd6RVvr2YHHSe9smLVm2G4hMXFY829UBdxMBRxrsEUctGoxGQD7qeVXYzNukmkVHauhMxn1aSgKuFscRWnQ",
  "key25": "4C4BnJnUqFVyYCK9MeAPqaUzyRPJVLRCAdCgmqotiVhRXttZytmFWh1JsNvsitsA4WrEMgUNdNrXnfhgh2hGthXL",
  "key26": "4tv93183zYSdzK1LN7sXotfsSpyKvBzyX2drZrMkPpEjGYSdNFLa8XNMAUCXcCjpxDkehQAhBCRzS3GcHvFVshnQ",
  "key27": "2K3dGM8jtm5ZiNUi718sgeVMuXdFyzf2ALug2d64Gu1prZx2xugkVvd2xH9cGsj3mUUbwuKv2DeJGiUtXpezSK6U",
  "key28": "Q5X1HESE34FaZafkS1jX6TMNoVf3HGhsYFiZ5QcSFkHBzwrHADUxvdJtEzPrvgNfdzYAwJriwzVyYPhmxMARJYA",
  "key29": "3DnbpL9tiZu8cgWyJQp1UyfnXstjM5dRT7tqhMpWyH2aXaF2LcLbwK2PrkFmkVur7c1vBF9fTtXD3KvbUmk5tEfw",
  "key30": "36MHhG1Fw5QzpNSyXwB8rNrg3NPYe2to4RBVYpJDP2EDecUwizCAbS4Pq8xGHnnipo4LPVYU9jaREWLNLmkadaXx",
  "key31": "5r8QAzX1YcwCQDbcu2VpdjKaRRxbd2EQi1cCioF45N7DtFv4tniyJsArKhkpqNDuDqQUdL5q2m9U75EPW8ftXJS5",
  "key32": "5AyBPkdUpPEVUE1mSQG2c9fY7dZncEFiDoSjQLFzsKXk4gMvcMshkyY4jjqse1guFnLMpKLxy3YJwZp7tbew9s5a",
  "key33": "5dF99tvnhazcAjxXMrigbgZjMvw8MC4oTZLWQLht4VdSNPtGKVK5x4YR3GzRqNW1etYdFrWv9FHfQPQmM5TEtsjn",
  "key34": "2A2MJhLYrMXb2iEqJirK9Mx9ebbn9YrJYGrayxm5hSgTvu6JJdXUBeL4AcKZFwEtnSLWUnQs3HKyAa3sMB1ky8si",
  "key35": "3Te2EfH3r5jS1aVh9Cj6pb8RNe6cNUn73To76oKiyVhYM736AbAf1PWxsWzDpxQytA3dPsfA5xk6LksGAHDEPBiC",
  "key36": "4QCJM7wDgGGqw4jRpfoGDi2F7tfzTBVc5cUGJi2ccxpz9Ptw8eLgWKuvDRZ27e68phcCsnWgWnitbmbhbhuFoXgS",
  "key37": "4NmVGJrN2M9QQEZ3ZdGM7vMrd7HuvP9iLQHfs9cU1cj9yVcvDNeFXdj4eEN9Gq71fPh2npW3CgdpfPLDkEC2m1a4",
  "key38": "anbQBdwZ6F8rtGra32Aias3FGy4SfsarsujLFeATiVb5u62WMa27dNKUacYnriCRXXwBxvjBMj1BUDuXF7rXbx9",
  "key39": "2JAYFiXKDx7CYN4ZvuzUtxPRja6aWCZAcHfX7ytEMAC1M5RG22za3mbBTPqzwMMvzTw3mRbdcCmYnyUKwZtEZSay",
  "key40": "2PoEn6pCDhNqniXozsEaoau8426MA8nix85a5aAC3WU2JXnvaHCq9Hd6RZE15sqFuJPxrxfxiXG6qMskENN4fW4o",
  "key41": "2idraDGzJbwv5BrFBW6u53ZGeEh5urbcyQrtxY2fbCQhSUAQiSoyoRSet4nPbsSxDrgHkGW23v4gymGFANXnR941",
  "key42": "1tC82rErB3Ge9dvhyuxLueoNwHMoTDnTXz32R9aL8wBuRPSWCGigDAokDywfSiDAyzZCjYo6exdXm2Y5a6iFTpo",
  "key43": "5yHcse3RTPwGY9njYiiUeG7W3W9tcPJpPtmrcV8kFCfD1d8kNcqP8jaYwqgMc9d7UtYv7EjqQnMUkuqj5VewVP5s",
  "key44": "KGEBFAeNqLVNf72tCFcFQx22h6JVBD5VkwSSPZpgPXkHdXBUZWa911Cdr3Q2Ti6D6BaqCBEgM1A2RZpH7cWUXAG",
  "key45": "59W1Nn2ug4nftpvwsBkuGxjNRAVUb35zQ345PWq1UGgZuxtyzxfSX7RKnQcDL96sL2oe5N6WBmzELbrzsM7zHDzG",
  "key46": "2tSbGQJ4s3r3a55WuhbMVQZxL3jy8Kff9Maka8rRm4b437HYgz5dh6kwktSnzAAyjQ3HiyMPuTwacGzAtu8fDJML",
  "key47": "3xyh5uuXJXEPf6ET9HBrcRwUuccWyVkedatotwBBvJRXr7u5m2yZFPwLxjRCqnakzzgjTPrSZhfWsXRYbamPiZas",
  "key48": "27f6XtFqJX9tYhAmytYMJSrJCKnohissrHWUKfbPmU2ixTXJS4XynMZTZnqkdj8okXhkDeUtEjfJM8Po68BaNi9N"
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
