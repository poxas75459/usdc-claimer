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
    "i4XaYCKyDdBksfeN3UZAok8pDZyBH7suWwshWsJRyqhbCcPRkAHwwe5vjrrNJWcXc8TH7dc9zEfw66eM3BqpF1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f96dRtrUionqXvQzv43RFqh8b6eMCXzmNQthRpAESyHDULN7LXSPWEkE7Ce1v7xucYQR7xS1zX1ZQxHTpAwMxWZ",
  "key1": "5nzHzMCGu4JafFXv8pTbCDtYyd4182WS1u7vhLBMmhdGsqZmaaC2LxBXkZZrN3e88XmMrzWLpnGGNmVtzyDaJaU5",
  "key2": "47DvBcsy9dHTLxjBEyKoe4NafBpcjsGG7iSes5rYKARntCTQiAFFc5fgDKwWzhFHjR5asjmjgvJdjJfvboa5i1CK",
  "key3": "3vPcNDpU6huyNHvbzbZ9cXGG2N1dz1CBn21xEktLJJA52eripnm8j1Jt4Gce12HMgHnM7aV5d9r3aW3RECYPtbZy",
  "key4": "45cWqkaH8WS3UazXmHRkQEpbbWdMSZbictUR6tkttGFRScGrh8zTGBsFnpTp1UXVURoqc7BCJnAMqL4JTMZrjA7x",
  "key5": "4cMHVCQFehhJbWYZwJ3ARK1iopD1RJ6yXTpLbcACboRXDSC5T1R5R5nrHZzU6z3Sd2Z6VgM9sJyVUPG9G2so4s9e",
  "key6": "37Jk6izRLphoRXM5s9nUTYaJsV9b2r7YLgFcodTcxSwKra15rK97XHFWzGe2TWnbNJmSpNW76NGrX39rHd1YBYkZ",
  "key7": "3tKCPPDsKWJEHCemwGFLqMxoWeuQNipxpF7PW1yHJMdKUKwC1AY4jCXksDdfw3nJwDiM4B4Gs99z1DmiBxyBD8DY",
  "key8": "QmCiBoSLxoitWjXLekJ6aXbvDdzZK5J7C63yJPN82cSto6VrX5T5haTrN9UdbxHxB6pHj58gtuwYDDtNuXJzQkq",
  "key9": "2DQ3bAxdrMgD8h5YMwwjwSDfpQmyQ2rx3VGPi5g8gZhW2EjdtkqcBqR6KqLzuZxqo2kgBvPGHA7wYzaMbP4p4Ddk",
  "key10": "5Y1tD67mfxoqe2AjKzWhVtiyZkZ3qz6z3SDejegBraiUxYLXT14MC9LkxKTVZAPwdjB1ezj3yQrjpDQ8qLTfeEFd",
  "key11": "3uhasQ2iksg9xp9i7ESzkbDG5DFkuPnrtPUNQBk4UTYMWACMD9itMBeMdbixLhcQK8bUBxPgfd7C1E9uYDBaP5Yb",
  "key12": "55htniGMiNZP9DKiPHuBKCGX5992MBLQdLE9ZFgwtz1tNYmZ2zTsbrG4N8yoiSF7Jxs1TznMHy7Nv4CGyvdHDgDu",
  "key13": "4MaES8rGvn1eNwDN7x4VAeCchVL9j8sA5kWjDug99FCirQxaTdgYZwNfnnEZ8xApE94RoKjDdhMZy4faPLjbMnEW",
  "key14": "5e2N29psHce2wrxW3ciUtH5vCBFjqs4YA2ii61GERTydKFn3DkBb9a6Cxg8LTnBQ3cwgxn9JTM87jx9qMsH4UQx1",
  "key15": "54ZFLBRF3Ysq2v6UutgdxU9pp8xZ3pAiETVHyeaQ1v8rvj7rtPw7EZSQMEn9Smgosv87GCF8pp1uAuZF2Mhydk2j",
  "key16": "BYBM9fesWURPby8UkhwGb9ipYZiHqiAvXSvFfLiCFYna9DWhJetzMFuQyr2Ky12NYD56ky9jTiYDQZ9V6HtzeJv",
  "key17": "2xf6YLkggBkErnGwJ3yZKWkLSmnGzJdBciPvi9pGgzDdK96B81vYmbpfzUZeZC2kqHDgUQVC5G7pC9A4LDtipNJt",
  "key18": "5rZYTAfC5iMXY1sZp2gwtvXk4CSdinZa3vmAyrfjh75nxMhqnxS3U7fePuSJnxPGrgzW7gMccHEV6rP7gdBqaUnX",
  "key19": "53YEBS4EPAAnScqawip4Uj4o4KUGpK1ZHL1DLYhEdNYqGgKqFMmPS5xTePuXjapD14cEGo9CFKVQfSb8hPqwLU4j",
  "key20": "4EF64LC8CKSPsJDG1ySMxLtrqwWf7hPzmdkWnJ7VozmWoZkjjWHKFRWh16i1JjyVksL6D1NEVLd81qevsnsrwJmG",
  "key21": "4xgwX9SM42tkbtLgDDUNhk7msXQX7kfcMso447oecH1NgbaouMkTrz3af6UoGGNjcmNkix2K2sYRGqaFShgZvVRJ",
  "key22": "Fu5sczQF1fhr3DJePVPeU2k9VA9oWoKAD1DKb7kveyHqHeMPeCp8YYva6aYeULQ1FgZSTZYc4k5HB1NRXn9qPkG",
  "key23": "2Dty1A9rT3za9bTsMFWok3bHzsxrCMoGAQ9z3x3FduUZU1iVVTEnRShMHibBiYqwpe3mXNrTG3sxJJPayXEBpWNR",
  "key24": "3nZNw9XDpqPhbM6mYP3qNbwP8HerZDrMeAiKMRAVvbTSbREgvWDmT5wcoVsvrXcHNpgx4etCxUc1UeY3usiF6LGH",
  "key25": "3BJYybjaZo8JSna6cp7MPLCSgGoDiqXar8sPTLTGSH3XkR4CsknXq6Dtw2e6c4jsVBUzwZPb56MtYrGUD2QzE2Wm",
  "key26": "w4EQFJ6A6sVXcM41BWBSP3zZnzEuWUaCpofTF1tXyr4YaHepHEbgU2rSQJuV5XkyxohjWAbBn8R1nsSZvKkh92v",
  "key27": "3xjuHRtGjVkVAsb84Se3hw7cF6GTrmupgCx6phdT56yyhC3N3gLwbVygsLSdsHiy7hGYVPr9aWhvyueJpeCWdZUV",
  "key28": "3WWqEB4gH1CKxUAT6PCBvjcBeNRvz9tETa3bLnd8AtagKbWcx8ZdyyZSbfhp863V3sWb8vWZ1V7JAUV1EKKgZueX",
  "key29": "2Qwi4kVeZVKj5uMxzRQ4bXhKRMEKmDu6JiqYHJqAC5m9xf9VEUz3QtLdaYAmZV8uTze4BwNKkdTRrTUNFnypoo4Z",
  "key30": "4xoSG34hNuePYdjBPyaftjhMe1tSAAXMNVj3VwUKg3XtLi773NEb3Y6qtQqBPWv4FsNAvL48YpV2UL8vbgGyvAWS",
  "key31": "vFMcTfwRyzduDvMUTCinjh2AwUGj7eXW6coUKroxLhfsd4VuG6WBfLFpmP9StWoMjYxhdoBFo6PenSsd27eXvzq",
  "key32": "4bbBuDcjXVjnMJB5sQ4c9KKxWPji5xSMU3i6XNkWyk3ZqVYFZzPh6Mq1CjWhSLH4KenJYyHCXwC7hjeBwUWUHppM",
  "key33": "4SS4nyahSDQsGbzjxKLoy9EkBTyQwXQRpS7psR7BgcAN9ugiDV2GKun7EYTUQkWjo5s4SNT54fHHETw59v1iWv6",
  "key34": "3PyyHUjN1V1rHWJVRkg1TcVBzCjEPTscv6SRv2n8QeQzonsPU7h88rXg9aBQfXCfQ5v14tzXnZ4oCJrwpCJQzSLw",
  "key35": "5C8SJZ6iCzfxZB1ZB35yuMjyHnM1xPMyme84LZ6ygf64JuFp7vYLtDy8wNffCxbJzYEWunK8aMSaW5yAMXudsxsh",
  "key36": "4bGLMrXJfMqi5XaQNPSy28j5GApjpNNmU719tQqy5H7KWU5NzngfDXcqoHcVUggDhhnKNXn2ythZwGyBUxwbCEDM",
  "key37": "5tRad7QXAq4fLFDSaMjKzUMf9erwwhEWqVX4NMZmkv8BEf95LQoueSCdpeM3MGFMt6EZ5i2zMHnj5VBKjy2CfQ5F",
  "key38": "5dzBQ1xG8jpzdqVjHFvDUBMFMteXY3pRJmfdfWJPew6FXt5U4ihFNGX5iM3XidMhGrWhs9d9azdrzq58tXewpoWQ",
  "key39": "5cxmiTr3ajzF9DQt9NbX4kPjfW3gk6dvAuV9bxHJHfUCidd1r1PqAKbgVzTsYDKwxkJmtFocUJMEc7pEsqXvEhor",
  "key40": "3CEKsgJqgEpZ3F2UTzMJBbZvTyzKRsAVZaT2tbGxEc5jgy8CCXuWPd876thcJ2rJedem4gizn4VT712taP8qxzP",
  "key41": "5jJdnxDhKZf46qEtsbaxj14tcAWybvV6PrR1BRJRL8RjCwA4mYtjbwg8UgqHcyfQyiY96XKneNuh5P2cG4LNCaMj",
  "key42": "Locutfp9itKnnYMARS6TC2a7Gz8nLGKCaswuFDQSwWT4EktMCkf2Mo7q7z96b5UygJY3AWxgSo6WNHX8bvYZpK5",
  "key43": "5gEesFWWJZzPYYjjeuSSaU2RPAWDW5cHe7TTjU4AraQt6AysyqfGU9MhndAo3Fzga5LLwv1kfqxC3eojZuqN3iZm",
  "key44": "3MZZ95UQf9KMumaTqHFsoXynduaoaKcbP81ConHCHqLmqGJoz97bjWaGtQ8vTfbvi6BZkteksmqDs4YqG9ZG6gbQ",
  "key45": "5N3fwH8o6YCsCExv5WzBaoYEG46tH8wdRurHFT1iAMf4Yw6QjudoRpPDGTrzUcGSfNi8GihiukdjgWK3JEMadiDV",
  "key46": "5SNJqMdZvhq1QiyGRSsVZgZbLt5K4vKdWWHFYdjzhbcns5VVyJu3V9ohvwo1XzhQgeroeak9pGH7sr1zVAoQvTB2",
  "key47": "2RgA77p3AhrZJ7zs9XkKAJ6Kba9FqZ4DdGKE7SVVHPph1g2QuNJJSzM5PRsWbwsP69Hiburnxhd1dngEd2qkBXuB",
  "key48": "Z9xGcVKjtsJWmf56HSh2bGeDRfZzL9kcGDg9ZEswvwSrfWhZqxEd8fERVkYDzVWUeLExkCjWF8hZjrh6aheF2Mk"
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
