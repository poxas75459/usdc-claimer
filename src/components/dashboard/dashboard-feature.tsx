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
    "5yTQ4Qpfq3Bx1aVQPV9Qoj2DqjndKRUnTnqqo9A1y3vhFoRzLwjB5jmaxvov81FWvmgKwmCWYPPYEZgBufJx9Afz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMvY5qVx9svut6QkCDJz8MDWBKA3Ckuvve3zSB8XW4RtVXt9qFwB12j2XnddpP3rjYtMxBVSMwGuBytpF2eoeSU",
  "key1": "5U2GNF4V37hhw3hRRJ7ptXH6GubUG3JQjwedhj6hotx7r8Qu5A2zJEoYTN1soKbRt1Dh1LwhuA6m2cRADtPgLQ2x",
  "key2": "3SQF5tuqm5EuuahbyUabUyX1m9Fp7jawzQboxXAmeQvhpN3jLKmg5TGJKA4q4X82tuaBbG1BVMYKXnMjFJBVBayJ",
  "key3": "2NGsEvDFmjrT2RJjPrfuEERg9A8BidvjmNG2B2eaMmX9YRz73hhwi9SJ1U5BK9EwNkL18AnbJhLym6tDhvNeFXDo",
  "key4": "2Vbn2JTnXpgzmAiQnJxSZHK41XmSfzv1KpkDsaFFm3WP9tXSEhz9NVnRw3htxmYLt2BB96anKQb22iBFhhZNtWRy",
  "key5": "3NfgKrrKuRGK2nvECpYWj9uEC52AcmQgHkHd7Nb3GjVYxdjzaUWaj8h6iuXJJxmNrTwEocVfmmcViFXEVKVMauP",
  "key6": "3UsCRErrdVZxjUYx38Vjsjc76zsyn37g4PiY7kForzETpveLrYLVSdbmBRvPHwz74EKx1p4bPJaXUejhPr3aDQDR",
  "key7": "3mNrKSFis7e1QrWUHRTBQvDs1v3R5jb4gHhsY246MFmtHkXJbgXtkiynh311fsopAdvxTmP47BdvrH6NubrNmpPX",
  "key8": "JiuL3ZJo1jDDsJFu7MmbbdaNoid6VehcCT6ye8gev677SdAgVdm5SzWSZ63Kwwb6RKESfzK79VLiyqQvFjE7Xfd",
  "key9": "5jQjsa6xmdnp9QKPhiCbi997LRYQmziWzT1CEfZzgthYAXBJtAqRD67e3zFrJ1D9k59CLUuuhDbmR4gAtNLSmBXU",
  "key10": "2Ufrqjq2jsWpcobPA7Hq9uQDMLWA4eLrthKeresyL2K6kKTNkmT3PRz4WKZXPvrGb8jMuZpmkMrHJZBtqdusipyu",
  "key11": "yFkSjLKm6KhCWZfNbxLwm1KgBgHRSSZEm7eQ3UsDzYLNLJjnqedUWpCj4Db7YP93ZL3uNJSEum5qiiHw8i2h8Ex",
  "key12": "4hS9zgtLzNZL5jY6uXqhywiexW9L8AcwwxBXTeUbx9VSD43CMeFKHFfTj1hdkgY2XgSo1SCsN9Dv3uCgvR4iTnuu",
  "key13": "4UyhFp3niHAFNn1XYdYmJYqSpoaeh7zQpfVcd4sWMyM7bnNx46BDopwoFt9FhxncrH96gpzzUv76Po5D7Ju2jAhK",
  "key14": "2gNkGwTBn3Tsgvedsz2onLbKXnGRaJoZXyA9LCuoveh7oKWAzJf7JZRMm1wn52nYyBjkF3K7PZFPLsqWbuEcSiiw",
  "key15": "5WERTTk1mvkdLwEjFfEi7KvgGp8rjtQhJPLfjiZ5ubB66NRJTj1k3GRN2nZUixczK5WLcoqMYcMTKxR4kPjptjgX",
  "key16": "4e7yVUUR9H16srCT4SnyD2Aj828ceakhhuhp1GuNSnvNjGJtSBMxbgwhWg9SxYka5k5k6XqVtz69dw9o4L29t1cK",
  "key17": "3nMGumUXBbS9NQ7pVFUT83BofSnZy9idZBsLfXzTGHZi5DfBvLtqgRMUKKzhh11ERAUPNo16mcW7C2iS9LjaAFSw",
  "key18": "5YTZECQiB6id4gCSZAV4EhiVQPJYAVYe9hEP8kgz6Awc3kfqBCcsknfL7gPpPttbqVed2aUNk1W7MmSGN1yteAK2",
  "key19": "65qXgpTCQ5JsDh1ZHQAzNs95PNudTCW7GjBMZNwJTRv99VBUKavzJeSibcux1zCVjwS28Qfsmenp6JnbrtWHEpVe",
  "key20": "4gU1Wq4SBicS7WLneY1mkXA7M69yQpARA9Jp9H3GQ7B6mGNCUbwA4zYZU5nHCDDu9CowXbqYH9MjJuyjNF4BGhai",
  "key21": "LSgnnyTyJ9GAEP7tczsuBznFtBQMkUYKtiPk99CzaWv3Fz6ewWqoF5yULr4g6ZaSX1LZP3bFPM6pfY6bnEryFvP",
  "key22": "3TToh3YwrgGvxweo3gp2wGQQX3GSEx1ejerYSeq1fRbckrArXTkP662A1BXqu4UtAgA5zvEu2enJKpi9FYziU6TM",
  "key23": "39Hns9MhE7qRGTcmE1u9wZ96VnHzkT6NyC8EiJUchNsCp1x3jhbbKSBdSa6NKUmngnZcMvetQWEu2kptGf2nymVg",
  "key24": "3P9FU6sdhXHcnAp3zAdJvf7Z1CKR1oFaQYNrbifZ5z4ppnSMLwSunQPLhNevxXSz33QejzRgoK7aNgcij7bCuLgY",
  "key25": "4kJCNnN46vLYYeyD6Dixhec5G8FwWWGEoEWF3cecmriMbY7g4cfjSZVnf64fE9xEDiAPGuS3CymWnZFMqDdTAWHr",
  "key26": "2eF9sUreDKdLNkFHqDa5p2dfpBR6hnbo8835KzATrQPW7VKzjJkxrza1Rnj3Ms4YKcqwFhz6iT9uuPSazBrSxWEZ",
  "key27": "2a8FPZMVHUjRy3hYNJ9dtqB87rcX4CipJFdXwiWdZjx8Bompg5dcztuPfWYcBNvRSFtgqw46f5mLuq3jWcLqgciw",
  "key28": "49WfUAjv3ekLFdP5LxS4H9UpioT2jfn8tU8LurfH6A98VudDci1VGpMjsXeJPmd8quSmt7X6BsEmhFS321R6m6EV",
  "key29": "4qSm7CMLZLRijzrg9bYurrv7pTg5AAfT3JUKtfi4ftU6A7fZNHrLbZQH5mm2fwoTv4kDK9Dwx8Vivrr72fJFN7yv",
  "key30": "3H2HBPWTbPN4uti7Qj1fZbyPNYTCGbYjTRPbqwDwVQdZDLMS7TeCKVYkhLLT7xXDnqH67d7hDKdFUTHyox5WQvvN"
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
