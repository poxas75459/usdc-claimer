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
    "2HbUrRicgGYQporaHguGFPFVqJYLDJb8S2Wum3aVinhYXPE8xFJnGybSUYu6Rd6ApDLcZk4ZzpD76yLNgeBRVgMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rzKZyuqNnh76XeYK4wpFgW8nquZ53U88SZfAxckZmx7BeZXhpyDC7pqnLvpuAkGCYScmaBfw9Agdvog7DhP7MYv",
  "key1": "587SjteMk4X4EocpT3XWcoh61WUuQ1283u52evobqevTdMyQbqogdpT7bb3aK9nYDm4eCWGQWEmXV5SpoRhfDaAg",
  "key2": "54ojuZxLEpiUbWFmMnhcDxvBu1nv8Q55zTN2wC8HNWk1LWBafQp8Ar4MBZi7h5A8RipmnhSRR4MiQAmxmiwe5PBv",
  "key3": "5vwib9hHRHZGWCAi3h5tfH4bm69moLBtEHwcS6Kr9tkhLPFaS2ByQPFMZhaZ6jWwBUfMx1arnMRGMcF8xUBaWPyK",
  "key4": "355NmU2dAbaUjWX3W9Kzjkaz85ZDZbL5tmBcDEGQYbYTkmZULUNz4EuvApuDTsWPdu7mzLVqdZ3AvpnhA2r2gBvT",
  "key5": "61F2i5rVgGmoYxg9edCTHDuPKeUppN25gkiY6UsBURc8xiKqJVxxNDYrec6t9By8esgvNdaTXih9aDyZ5Hg95FhA",
  "key6": "4tfYVr7MJudSS9iXzdE21ceBHj3smyPpRz79LTEnQrkS1LMztzCkWx2vCLWUyitY12eBYsCTDkBSWToJxxuYBees",
  "key7": "2bWiU4jgHXa73zRNKzXdTedqdBujoHNUF5vKg78xZi1KhNnnUHBvSuK72v2J6sF1DCbw4cFNWEXgZrQwgSiUpsF8",
  "key8": "2wcNEpdLKmWK4iphPv8jmLJ4EMZJyZeqpTK7YBHCP4kdgVFJmtN2zHPqTyYxGJrk8QEqWn2RTtxhLfph5wGndP9X",
  "key9": "5oVProkmEzhPF3PZ2LnMhjLkAvWrFe4Drm2gzSVGibKqcAMDqH44MrdvEWp2XiX8ZHHkzkFDx3z1AGkH8RK9FzyD",
  "key10": "2yHXBZjwrYYWMqitohP53MsM1oHrmP1ZAmA78WY5VtKc61x7q8GU6L9W27B1u8FYG7hLsZswsx5vywiWWkeZZtFm",
  "key11": "5r3KkrXpkJ345QFviLNsJdZ8rVxDoZuMeCr6JNHtmXdp9NfvUtT6n8AhnpiSyesQxLFq2qdyJEQ63w4KNfRFfDQz",
  "key12": "5kprNHsvcofqEFtdodFJRCgZYznV7cWGVbZzVEgkEX1MKPXgjPiDfeRfFWDuRgvRbiNLVki419dLpatrVLtYkYfF",
  "key13": "3AQAJEbvK9ZsJqCBZi4m7dxz8VpkCSaCp9ZAM7jLsPzXi3WDNecvrk4LveWJPZcqbTqUYxJDSAC1Uy8vDZRm7Rhm",
  "key14": "ZQ7hYMKUDMXDHMRDjZY3RL5QsauF68xGy3DFadjB34bCpkcJrZPMxZgDpNv7JfTc41MkEAdh1XvDADdUfwFo5sN",
  "key15": "grb7BuDBP8yTYhhL9wKBmm5oppzHZCCrq1phFksBSzeH8hR5P5LkAeTT4rSTSsRauXCPjVKw6eLD4hHktNt1PLz",
  "key16": "2SFxMJ6erAVtSwTVKZJyspKY1798Zfy2dWayDpGwrLM9486rzbGDfEpBQ7XJo6sVkavV69HCGk5R99ag865eJMA4",
  "key17": "3sd9LTDmB11HQEhytaL8aNG1cTnTroSYus85AU7aJMBuUtqX3pH6QDPXUZZX3LMZ3ogs4GPxf7uUc3CtdMTobkzQ",
  "key18": "PAYxt6gYy8yFRSVpZ48k2DWAd8Sn99Qt21gxEuxpPAgHSv4qwbzc7xCGSSuAxwrCFthwLR3aSbkCw93XJ96evEr",
  "key19": "2TzFYJMhCz1EcRDQCGzJimnLySJdUbayupryg16eMTRiNHtcRDL4poBFWBnTJ9ayYUbF3Ty7hnnEJReZk68T3S69",
  "key20": "49gtofpcqGAH1LJ176F1LH37HuTPzKSxhY8Nkq28EQC5bUd1vfN92MTvDfAb1jSNjaFW4UErZdEU9Nd1sRUvcEDz",
  "key21": "2W6ijzMcYq3KLWe9hfyrMmBfUDZXFvfa3faWTv82FmzSq6jYbaGUkA6LX3qtzT5JrbXkQemcURBBBSTaUWiZKXcN",
  "key22": "3nRwgT3xjcghYvP7UBcQVMAc7qgQZf399qxutRBFbcJyHCnsvaEqBEP2oaKgKj3HNqeKXNHk9sQXnoS3NY3uyKzm",
  "key23": "q6X4xZvqepBjh2jL75EQLpzRJYA7DWeWgYaSMpzfVtaGC189Yo5tiBy1hrQNJzd2e1GJuQVR6UoNnakjDCsPHYm",
  "key24": "s9iSx3Ss88nah9mf8atWykUzuk12oAXb9GDUT63UkUnekprCXAq9X7HyXohqVveDkz9vqe9Qxn8GJVKr7EG7NN1",
  "key25": "3csRoFVnbbvr7QdYB5TUt9kajYmytR6gZ6xtRWPWLNs4RrG3q9fPqUkqRQmkXsJk3uWMuBqkFehNAzbY9ZBmaS2y",
  "key26": "3uo5SidvQEYib2ipHi7gwizBS849CzEY5HMAADQaYWHXwiczTejadjPcnjBnbFV52Uz4snaPLxN7fTETB7oNvkJm",
  "key27": "2NTiaDPZqNVPLcCZT2YwHHHFaAXXh982e9wGWc23XYBfBmrWu41Y7ET8dhevzgBhPPaGtY3fupAix5XbH4y7gCxg",
  "key28": "3ubneKWXHQa97xyKYqQESBETZrgKphkS74wgJ3WTofoxKZroRxuqf5Dm6sjUxXMZaqQ9ssejGV7pa44442QytrxG",
  "key29": "4guhYvJxkCGtCxJMvuHVmCSbsT7xHQuPKtG8Fw1FGwi5Gw5cFNQmyTKi7snpmzLBozxrSroRXPcopHMxrmWdjk5Q",
  "key30": "4jGRoHwNsJxmDKRpkZBCDMjaPzW2WemtFAPfLEhZdi8nXjEu6N8nrt5UFfR5QhmdcC7XztsYnph6VAPWM4kMMnMC",
  "key31": "sX1UHRmi9o2iN4Bo1kaR7yz9VAwYfMw5RxfruBVf1sGxMM2VZm25gmTN6guqPLdfa7K9mziFJCh9nngywKWYEPK",
  "key32": "3ZtHuJq26jS1D2udLmZ9jFASZ9SjEZaf8vzVeWiv1NAbN7n7bYnLY5nEXbJRYmvf9R2ftnZhMeE4nucuMiACHDvp",
  "key33": "2xcqGf3sa476XXg5XSKnAM2BjFKiRhn1eK1AVnbDXuNumTiPQm2DjwhjxUAKkH6n5M9C2ui7ZC2MYM9K4BxvS81P",
  "key34": "2ajDFrpBppHQqkpwGNcBDpBaNdiHe3vcCR7XDwEDktYdgjeYZtTkD4PAxkAc2suqachWjeNBucJbHkfDvTLLESy5",
  "key35": "2r88Em3icAU5QfAwPkjYnjLZhu6yU4whcYsVnEyLKUTPLToWKmX3SKgW7BA95zdkWz1UFFNoUk8MvfSfJ3Q32r8U",
  "key36": "4BBzQXvU6nVkDN7TVEkyG7ELU5a6nzYgtHgeMVuxXVhtd7GueTPPWjqEPcUHGg47z8PeU5RzPR2fPmP58QTu6oSc",
  "key37": "3tgNKXpEn92RHDZPnimTGfkb64cPWGDwYKAmaUAQpaYhU3ULSjEMp471V384ZKTWyLS7xr7UgRsbLUpJCk6Uaw65",
  "key38": "3SU14mCjPoc1CmBAfjZPSxJ8PNWY2WjxgnYfX1xDvsTQTARvc1tB14PXLeJKtEwj2rTAhPqgvtdWXwiD8bXg6V3E"
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
