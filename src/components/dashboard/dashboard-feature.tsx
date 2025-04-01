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
    "oPHiYPan68wGYDAWoTAJij2HjxqnijR34Qk5ApikUh3HLvxiu53uQ8PELdTg1rw4MaSfUVKRi1YW9sPF3tW5eaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J2PNbgyd5fKTgHdX95Tvw7HgNaRFTFq7QUjgqveUqGx8bbf2V6ARJ2yc7woRPWip5iCD7MX4zs4t2ETFoBCauiE",
  "key1": "2zVjnMf9TDtzUrk8MuM263sMM5TbxJ1v9AoYggXaN8Zo4KD1r5CWrHjKs5h89pLvYHp2LNDgi9oSvniZSmQ2WThj",
  "key2": "4EECQMncsgCC5pswApokkVGuVEpBPe9AnoiJpW9Rb5LbneLWgJfL45QZFfzjTeeghktnU7SkR9M2ebgzTEHhHNZD",
  "key3": "2JS2fjMpxGeAYfZwC9BrZo8KxhpzMCJN1MKc9Tni4sy8mu7RmBbLUJFJJDhhFUB63rg9Ah5mcAFuMpmJfDnncjjh",
  "key4": "4Rm9Jr5bXHMk7gVr1oxdbBGG7Qix1MiNVvFRCAsRG8Ehv8zjKTzckNCHwPKEovFWh8Tm9ztpXwWsZDV87X1XCpPH",
  "key5": "d7tbKEcfshKSxVzcjCRwpnQtmzFLqGLuk295T2qye66aYRD89sWKP7hZotGFqeCmPPxbdovBbEbTKo48JgGChAb",
  "key6": "52iuXYf18jJoQaArjjw3Su6xf5W1zKSKecG4VyHFPBqnhg3i8FAWex8u3sjybFsDxAoYinkbnFcKmyMyyhn71hG3",
  "key7": "3mgWS6FB81rPLjpy6qo4iiwPqW71y5P4p3m6KNM5yZdZasbkxaRNdAvzQWhDyAfcrMcjZZwCXZkMPiZ7LhDvHs8r",
  "key8": "2YhxrmuXQHpNv5ModvZ3dfZYUCrnQSbobphQimZBg69G7P1fAJG7wNAPvftmaAZJjYWqRxVoEBYYQhbaHz7stE8z",
  "key9": "4GYQ3Vo8eoTzpgpJQuDCfKL8Km99ynTMDoE59iqDEUVjfSrB4dQ2qz9sphNw7XA4rfdMobD8Hummp7SJqjFJHs8j",
  "key10": "3MvYd2m4wdYVWnLHuUHT7J9xtbARhWWxfpdkhzV9UkvDWBZso6hCWXnxRNWdu86bfTBnvZ4EeWwSCjYP7uiT58kN",
  "key11": "2idktje3qyLUx1pXAv9f2vHPcsJkDzFEbpgr6azAFHj5mNoHbTdEpEpHiQKE4DDzriP2GLjaZT8FMCSRWuS4vdXv",
  "key12": "5a2w7EDJwWBac2TNo2ZjDyMZkDNDoGfLUNuBzfHa4muLAvqwThXBsr5fsuhoDSkYhmio1BvUNQdR16mbwsM5N5UV",
  "key13": "uBtW6GLLFLTofiPcXc1rz9ApKD8pxXZMngsQ82kir3iTwvi2UKsxugMj55zryh846SV56PNvCV3z5c34xhEdKx2",
  "key14": "5qkvYAKm5dr8BikZTdrcgphEFUx8sxXBs5SEcyVWH43zReorcN1Vcv6wkE4R3B3RkDb5u7RD3fmNRNr29gKMjAiD",
  "key15": "2bdGV3wNAeX4TikzjZLnWGRvjuy1Kx2XTW1BACB4EFVtNP84jXQHHWNsUkbiMxK6m65nUdHmsZRFxSHjYb4vRmJk",
  "key16": "5gM4zNmALvbpJxYp9HDERuTaCGimvgdg5yUHyb1VthCjjV7C4b6trQveCmZ1Udnx7ZpDN93ZFhMzjqjpdMYrs6wX",
  "key17": "2nkeXzZZUZgp8UyFrL5BVtDo3WyoxxCQLXCNuQKxNvXr3xpRhZktZ98zd5U5S53TPyM41pXUrQUGdQVcmHJKsES9",
  "key18": "32vcatXvgSVWVE6JaWkFs1zkgBXZM51LyVkVEfxqFzMedMYfH3PTZzwmQZeRpGdRRhjX2vKQsZXUppHnyjD8UBUo",
  "key19": "3mN1qtxQxHX3K11tB2Ljy5bPQQw5sEKDErDZMeaYXrLf2bXHQg21SPRrErRMd5PVLiu3irJTdUpyyrMupMEPu9kN",
  "key20": "5cg2JbBMGZPUZhvYX8H4WZdszh2XNeFTmeo93JepcYvvxc7KHRJKFiS616wRM2NhzUAcCcvvzWXcyzvbociRBTRk",
  "key21": "a97svVNfPGJhoKa6aGTS6bUVq8atnGdra9YVfMi5LMEXcG49x1EB4VmM2tzF1FkkZDeFsr9vVMWDyehowgb6MDd",
  "key22": "tMRRjGfzXn7roJZhjVc6hTEsEvLUtGgpSGGTGGYMJTvTRMr2SbiQBi6t7eoWyueUokvYPSv7knqJbvQZhGe5PMS",
  "key23": "5JNemomGJme4EA2v3NUtMqKFkNQF26RWBMnadVYqUTBcuiQBYz34cn9SDGNV5BCdnfV6GRq2udFJq7axA7W4roj8",
  "key24": "rGQQCDYhACXG98fy2H9JgpYVnqDzGgEhzQA1i37UBfaGihig8ptU99emNdPumVn3MedsZ5gEEMqxAsoqcLnmWBA",
  "key25": "2pmEicMjiw8QoebkvaUYpxY2E6XCSyx3fTtqNrdz7VVf2Z8HF6gDCxg87c2nNmFVMKY4fWg6UrA5rJky7rV5Nswj",
  "key26": "KE66dkFJYZG3X1H75p5K8rxdKnJBcc5BXevQPmAS4XMjKRB2LZPYPTmKxk4HNWQbTcQABQwLguaUFLXQc9yssYE",
  "key27": "2QRDEFnV7wu4Z5AqaxPa3uLy1wc5epU1rch5tZpTwJcqQDw97VNyp7uDwk5TV4YkRZKUNzZfh8TqjLiEpcgpcNjG",
  "key28": "3sQxpjoCS8NpbwCf53eah7NFf8Qxtuy6PjHWxqhmQwcwGfkKvN7DwkGgbfiMhwsNCB6G2kR8WrwYH8RyXD8PCXLZ",
  "key29": "2xXq2GwtVr64W51QFwZvB6yhkeFWXYrcrFY4vYrpo7du7w5BgyegQcXrMfrdzCXScq5KkgtH9Gvfc6jwdxEedSPM",
  "key30": "2cE5W4UAzHmKPB9rgCH8ZFAC3jS2W4AwaMs4WNiAA4hFFbxTVgYW5ZZWfDzRGAwpRBb4sAEetFwBA59ksVNrbrkk",
  "key31": "wDbZ43s8HuuTrfwyiW8EcvT9GwF5UW94agGs1tTiy2UgxNjJbd5jasA88rgbQFNGmnZo2KNnEdnjGpgo73tNtcE",
  "key32": "2NsZzHUjSRoPVC7XvUSuxo5kbRGitTtfnhB9hr8ZSx1jxEtm1L5QuYQGuWZHGYxcoPAzvcUBXBpNN5QtUbQXhWq",
  "key33": "5zNtmRAV3T22vbFjH8nVRq1hbYV9TdnLaBSsSnMkU9v2och9srzmENgJHcxkG4ZUipkCsxqXeZLUW39CcFL7eZEA",
  "key34": "3LJttfhd8HbXBAQMZjGYrf4LQh9Jx2egJqEgBSj5ZU1xWbcoHnDWDGbg7Htk4u7SVtE6yYGydgFs6ADJzybYhiY5",
  "key35": "YvYjcrBvdNfLBkQUzqp89hXww1UF7HvH8nzFAazJvetNeH2oHojjUYUXd1DUmnenGVhAzUb2wySqCULf9uUV2HX",
  "key36": "4sLSuDpfrFwjr5KtC4HqGPGWxt6gRN3H7UgWkAmCbXm4d1Gfb16QLrDpi6qVvk6bMwGSHFVf9Udz5DTUze8kovAG",
  "key37": "2HPGLsf46ocuhYDFeGv4Gmg5taeiiZJDzECRuaPRx6XRooWBEZohZeZ1rZ9EakiVT8XurBpB479GcoQays9VjQ2o",
  "key38": "fC6MZrYfYgmTK4WyrAYmjEVZz2deVAFEt5VQnLWjBt1DeWz2xFCMXEMfeTui3VKg4M5DtyPTYVTbnwnrKK7NBPV",
  "key39": "c2JsNZU6HF8kiDjyHg4ZLx3tnM1a7igPZdUeZcDYNpFdBxYb1U57zBPwZtutPZ6mVvC5vmGhKCHUyuwpEYhpvWU",
  "key40": "4VEnebcYJwwNKtP6RtnnZjRkpishJUqQDU5L1TEd6mUcuc78AzREwsk8X9PQAdC7ZSfZUE8vpARc57Lmt3oY12uH",
  "key41": "4avF9tEzTfXjVUQExfotvUhb6QoTtEXa8T3KFEiEmgAsRPuxtM12A7MGjrm1go2Y85rzmGJkHoeJ97XTM9pKUbFG",
  "key42": "M7n3yhLn1WThWcRgQRAZkybYpDLK4AubXusZhRbFdxrtNa5FgfLFJrs1KS1nHtDQwf1n7K9ATgW283ytWhZBWCe",
  "key43": "5AFs9eNXWsGn8iN7g7sckztw2iAnB5buV8MfuY9sTVVQMTDZoF6nEiHf4XnUuFiZMCuSXCzYjkZ4gux7yfbJQY5e",
  "key44": "4EuNFbAijqMFMbJha3poUMNrgTgdnAYHWuKs7A8ChDHAE64AnSyhXeBmihx8i1gP6kvxDqyYoP8dVfsjeWGvwmAM",
  "key45": "3pCxw3ipHucYKdVFEHV1PVSKd1QR3aRkecssVB93ofvy3FwxTsjySY8XZPeEc5jwrAz6kErrqpVqA6TGN5AYYKTP",
  "key46": "4Qx3Sp9zYEG3ufndJPRAjQQaxo2Z16KBupPUeu8ZWV3qPacviYWJHzMZ1Mh4erFRGxh24c3DwAFcRwfR9j5JSwXb"
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
