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
    "2DNbd6qYGaifQ2QULXhXy6Xw6TMaJfjxhrGfVL5iJ3wy67m7USeUbch73GaHf2i58b1PUhuxtYz2yAH9GmTBc8N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJn3NqcySfqsR942J5Aw2WJaSihsMBr9SjTxgFcYiNBYUPfBF62x7y8tJnNA4ZHWoKxvZqdNfJAg2AK92kUuCrT",
  "key1": "3WZT9a6DqBPGryn8bvak8NNKR6dzfYLcJJEJi6Wrd3sUq9ZfCJ6JHsrjd3c7fnXpR1vkKgu936xspY7nEP2AiDtC",
  "key2": "9WTaFkB7cx75psQQHW9mpujhfs3H9qDq7MH5QcJxZB454PTg4cPEXpAvEu1YzB1rYBhEL2hWZ3k2ce5XaZUanhj",
  "key3": "5ezatwYwZ8rq5TNGnvFkJDeY4hn51hJxN7fZWcw2SggbadHUgURCAg6PYYvnKYfVWShc2Jk73bq1RwhZtUUYY6iM",
  "key4": "5DdgYL8WJexToFPE65G48oRSHZQxjyjtctH7VJGSGGr4pFoP8eG9kiEBmdxr2Fga8EXHrJj36teeFbjFBJRmL3sP",
  "key5": "2e29UPH28UBnu3Bgs5Pkmtu9tqMnehwuwc8GTzSL4NU7ePjeEe8HAUnxZ5QXHf6YS7AHuMhhjEUSn8aUrLpmQoXT",
  "key6": "WpF7i7fmSwDW2FTTgDuDf2oG3Zxmrm31bTTGKDLBuZWJqmdXS2sWm2KGfyG2fdtUaEn1zjyCrNoqFCCDGgCACL7",
  "key7": "2CJ5HgvFF2rUt6g298C6Ma8rnJN1Mi3LyeopCuGVxPTqzphycYLdZLhPWD4FUDczSQxU7ofT8skLXwcPV68qWcvs",
  "key8": "3KSEkWmV1ZYVC9u4z5CU33B1DqHczE4zHuEpVSfDoBPzMnADzEg3JyGcH2mGybTAbLcT79nGWfwKavN4wEKAWM8g",
  "key9": "5rADjPe49rqgHRND71nhGeSfzzEpW4jG9os4b58RKY7ygnxxBpWumuoykEjx95aMjwDjfXuacinfuxc9YgyVXApo",
  "key10": "33ixRvNRC3RHCkgd7Gdzmsebbj4KLaCK6x58SyRZz8Fdtbmrr7n9qhENn7BaVVU3rb8av9Gxo4TyLmdvbCa8CAN3",
  "key11": "5tEcUw8bYDGu6T4g3Cn1dXbzKBmGB8thtSKsv4ezd7GC1ycPGT7VduPRz52tDLYMGa3GG4ZdJqqto8MdRWggKxvA",
  "key12": "4TDRAGdJPUNMNdDhPAnuZvmmQeGLUvi45mgs2S1c3gcy7dGQ7C9JEtwzrbU32GRjaEN5Nak4HHvjg1sMJmmgU2Ve",
  "key13": "BpYzQH2dexCBrJ9dbBCzKCQua12p4xNas5xjKkBoqMMP9PeiwRZBrrF5mcH1xvGfWW3bw7yVD9B8E8QPmFB319t",
  "key14": "dv8E8Z9n3VTgMK5MgieyrSAU8axJAyR2SmxtXspxMMb6qKWb1anvMcNdPKsL2SgjweSq5bHscdsMuK6Mja6Fj51",
  "key15": "4KtX4vHcCdRkD4TKSoDjsiTqPD6FqJXbrFd89sUdfBtYx5os2feh9142ScqE7r43gCkY2vxyBS3ZpaP8vYt6n5b7",
  "key16": "2QSSFvDLBxQbgtZ96B2gLHgPeZLMEJr8MW3q4AQsguLMfL5V2WZW2KAD2ZYLQZMSyG5Ld4LQoLxDAzb5RZWFVUUr",
  "key17": "92ZP5P9WMLq4iVymi23Dbc7muKK8J8QzT14W72ebkUoXJVHinmmSvbD6iqfeUEtt49JcoZZ6x2oJ3PpLRYrbm1x",
  "key18": "28tXTS1Ruvsbe2rA4NfuGihiVRQ9nE1wqpzHkXbnGiB11AyDBaYxPDaEaGA6v98FRaKkbWri26fjta4QbQPqPRNU",
  "key19": "HLbtno8B8ZSqsKeDA1CmyrGzjbe6W9QgHuqvWgHUj5XMc7aPwWqqjrHkuuLbNozw1pjbZugbomouSYpQe4Y6AUt",
  "key20": "2nz2F6HfnPRo42rUor17aqvLi2wCvN7mPU9QDFBARs1vHRCXSebdhTaeXHbwS6V7VdkbqPtCZWxoAqeBEgtuzoWp",
  "key21": "3Pe1BbrfmB5CmE6Ng3CAEZ5JF8JyzJio46LtkxZL9RDRSnGohZD3yQpYZWzZxvdT4Ad8Z6nbiEDiVUjpikshZHUe",
  "key22": "3W99yiR6jMxqimBZbhv7QrSYJLzV9WJDvFmLYUty6ocCpnx1wNJpaRNnJTLofuYHf1SJXPLXsgSj88ra1cP8FeFg",
  "key23": "N7SHVXWDhs4WgnaV6W8C2FmnjEdwdtrRLjqqYoGbKuGsVqJKE8S3msyTjXWgcg7GZdJWbjpfndj7iVQcBQHtBr1",
  "key24": "2j4UbMnNScnfrcdHZdBEEM5cPKr4ChEcEhmjodcmY7FUauMYn2LeXbgzyPFBUYC24duobACG1i6ZAuYnbMgxrQqS",
  "key25": "54EnTeBosupgjgrP2qWR7bRcFKnEj2hvjavUHiQJX26oUHkuvn2uJxEkKcrWi8dLaMqqYjYN1AuW52tTq1VmXWVW",
  "key26": "2Q593dHh1euRj8vofiUvKAeRdztqXDg9k8NWB8q9QtwK1bJRGJeZY3J2aiQdEVC1Ah1T3c8dXeWqybJYhSeWgnKK",
  "key27": "2RBH4DjKnnKcEtpWSGSJcchTH8K7TQW5F7rK92SusTQLeRVKG49GB84xCHW1MHS1CRea8SCNwafTucpXmLHCP1DT",
  "key28": "5TcUykTq6MYZHZymoeRpHQU3fmn9VTT97kPwzB7QZDRd3pDoZ18whqY4hj6V15iCoWw7yFARgahV82H69Y2WWQW",
  "key29": "2487RTnN7UeVejcBVsJQ9r1AoThVXwxG1toPKLK1kZqvR9y3g6hWNeENtj94Y6q6oC6r3APznqsy26oQZHDGDGz8",
  "key30": "4ZojEEQYyHHU1Z8DAC2PnAhQzccS3KzsBiy1XcNGgwPy4unwg4w51ZUNyXcJnk4EDA69hF7RkxsQpBqSnfQrF67s",
  "key31": "2gXnEsrYzjwhW85N1ScP9TJYnvCuCGZhFN2uztGMSBvWXSbjZq4Cire6LWPpBkUJ9CT3rDtPtsdVrDjhbVThHFZa",
  "key32": "5LT3CPWo7PHaa5SFBKee3kQ9bVfoT3JZyveTz8WrSPWNtAMJ6ZKeBKDLaLwMQ95UXdJ2n6uTmC5NRfZGaM4RXupy",
  "key33": "46Aft5NDF2cEJGoqreB5eYnoDpRuoqBsj6gU5aJjEQJAH25c3edP2GdGQCRMjkdJMhoYHY8fDmMy2rFaevnacfQ7",
  "key34": "4SE3nFdZRrCdWebnPtaRuR3YamBhR2JKNzs8oaZSdPp8yF2w7UoXuCecjRP1MNtvNt87WEbAJuArJiEhat3m71za",
  "key35": "2bLc7cNthbU7n8DJgKKZSXbqEEPPZ4zQKQKy83wNhpDHvoq1qstgd9ZX2aGrptAGMb9cLxhkA6u9AK39R8geZDfU",
  "key36": "5rPPotHW2tyK7SBQaeFa3e9YbKS9rYieb29prTro7WRM1wESwfs53ynupApGxwsLnYWgUcS2rWK2r2UbgBrKCXLz",
  "key37": "2UfRE5qiT9eze3NqpmhMXsxL2kijguAbRNbSzoKPNw91LVJ1mh4a3hkcda8FJB9XD3CZvZMNG9jypVLHdgXtktmn",
  "key38": "5UhzeERgHy29f99JefPbSAfLtT21qebQhdHuhYJ3QM3JBKyjpdVhT7LVqmBkrX9HHtXaKYvJW2fc2wJyshULrka5",
  "key39": "23GgQGRSFcfrm1YETb7HnRzozFm9C1oJRcKUx9XPcWXsLHPY9ZapSGRpXnBFkZ6U7D4jMtw2Np43SFmZ7aWu2gGF",
  "key40": "37PyCLQiZ3ojXLF54aWG4oXjk4VP69419NakmYmzXuLMmaowU9Ye6J7vBsqg7RLDkGn5XCe9USZJhuYACFdYrsZq",
  "key41": "vFxqWAR4UESbBXrxc9KEF17srMuwhmbQH34bQzV3Q6GSzsh5BZxL1hjse3vCbpuyc1KWFMTcfuCZ9xTD8aoEWB1",
  "key42": "5J48q5JhqiUcZUjKSKfjSAn1qJh9MY71ST8JLJ7sTcfBPqmpfxDSdvHf74jZmU9Aducs6exCnQ33yTx1KZttb6f1",
  "key43": "3nsVhWSUp1Ei8Qddvm8BBfx7q4vXikXJ5KPs9tiagccn9DpBxTsBVj727sdMkxEj8rJaE3BvTC1VTU6ABbNJ6v7H",
  "key44": "53tbJRm1qMPr6JMFsxGWpxFF9agKZ2mS3JFbWDuHcHfsDFDG1sid53Zr7q9mtsdoxycuB6uMEMyTFigwggLSvq4D",
  "key45": "4YtBJkAJ2Sxh78hRv4M7bf9UuYc8WSGRtW7TqhZNyPJTxScwgJQVCcfvRaqcSQTmWoqspZn9egAXoRQ2cEzn6tLE"
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
