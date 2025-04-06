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
    "2WjSgpXAmUBzsBZAgoAShZRDLmNX4AWp1guKx2hS712S8WLk6xx7pAnyXDzB3SYJtRs23qkkycJaU3XRFSEJWEek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EtFRYvr2eRzHytFEt2kzLaGMd9AmtMWf6dyscqTSgL1LRHdJFRYthTYEJZ9hGCCows6cKuDJngqbEpsPqHQ597G",
  "key1": "4BcFnQQ8w37Eb7DwbGhWNtjS49sZcmiak7QtRTDewCUXK8w2Es3vG9FEwFvJseojmPxRFh4Fs7cDczbsexGh4H7V",
  "key2": "xuwMwtdjwkxtuTmJQa9FLxiJj9dQpa19XQ3jC8Fh4xbNiZ29c3YrQEiizjn1YYo2mwfiWi62feJu8NJnTGtxi8W",
  "key3": "3Mwwc8FEKqhJ41urktvkYo8KWK3PBwxgLTm3St96ryfK9dXSNzCY1gTVg1bPXPPxaCqFFBn4fFjLbP7FiNDajbVG",
  "key4": "4Yh1BMJh3wcAipnN9HqNWSX6nnzBh8UmaR7CdZyyuW8d4tDD6wpn4qbGATY21ZqfYVgUoeyZJ7ShAFBXELapsjXC",
  "key5": "3p4Nqo8sJQpmXHqBEnyGrgDw4anwJWAxLAB9Y78JuGQYMVpTqHXdkFLjQgoaw2LRDky5JBJr23sQMDAGoixCjZWq",
  "key6": "3pBhwHMuJnTKcbvC4QFKqtQfRQif6fo9YnjJ9EqYWWNioVB8N2Xsex8AFJpoRTseVok1qZd3r3bRnU6s3Cj1fYHD",
  "key7": "61YoBc8UG16dLuk2W2uqNWtNaxtzK9BYmzjpW8XBY5K3pagdDj8A1tanbQ4NAw8XKVff16JZeCoiBFcbSuvvKyM",
  "key8": "36cu1PzjFm9C1vZWdA3kzueb6WeDPM9ytiVJsuNeRGSkdhvJVXNNZJ3q8ZyoXe8oVYRtMHTJfA55eoxDZ7CjCDdF",
  "key9": "dEcJvqPxJieh6tih67okgUgsc7z7SzH1So4KSVeEkkHciwfk5wUPxfC6RGovryvBuFpTRYeK4Gf4yohQqFYD31g",
  "key10": "3rHjM4pUNquUhQhMU7BzL8Hso1ooDvNtduifoHAKdpFKKehG7FKqTZzBbS3UrquNm9cZcaD7Uxr4tvX1VAbb9Ry1",
  "key11": "QEJbFiL5UBKJkeq2uGv1urshGfUeEBHz9VfBcTriUPkASYQng7pRm2w8izPaLJpgu4HzvmGeHLsm7kFKwZ3wEzW",
  "key12": "5ke2hXbD8GHnjbomEHbgjE3xqHEpLpfbkoQFMgAWj3ci4wTSV1gysY1MUtAWpCt3PRoyDsaXHVHF8dj6z8uHYYjP",
  "key13": "3kYq3dreCor6k3MJmVbCzbm5JaPA1d7aVYbuqsqKR7uCYNfg817WNYdbiguakNofhRrfcuUxzEwJSo9x4CcWWRBf",
  "key14": "BzBk1WzG6uGskYEnbd2rwCMVDtYPgK8bA1ivoQwR3NCukEBFDjAWKbXPXahbdFY9YWr1Ws6ctiqT42wh1rc7rqE",
  "key15": "4CFDWstUQbJQruhWV65WGmcUYciqJRVaNyFfP5Lv4CwBUE41k5p7PWAnFdQV8QCEUduYwGWLS2YZXSkEAh9YMHLT",
  "key16": "49D8arfq3VENAFfJwbVxK5eSgTZmfPvtUzgG5iDB5rNJAeihVWrWK7jRcc8RxQf4Q2FXuioiHNE4Hyr5A9BQ8UBU",
  "key17": "2Ju52AK2LB56Xew2DCetK8GfXWKh3QLVV5TSn6ziM9gx9MMbE1UrrQULARmQMjgijUUNpTGatjAxmZWVSFDFhsyP",
  "key18": "kd1kisZiDtQKZnXoJufoXUeNu1zRm7itK3NJrhozHaJQQdizBe239f4ZV18gE7MJnKGwCPMKDe1NywD4s8G4y6t",
  "key19": "EZL1Pxw32B6cvRSjEfj7AqfpS5xMWK4nhjPsh78wuRNuZ6kgbG9V9W1oCGJDKTyLNTULayNRhth9XmJegs5TqaU",
  "key20": "2hBCF7zrzjfP4DxupJpPAY1F2EgVVFB5K5VGcNMLeYMtQMYSiBBF5gaYFWeNfcSs9WShGjUgTGsD2DCMajNnUqQK",
  "key21": "4d8mz4J8HC91iiazex77fGMG4oCCWXpPEidvZAgU6bXyQWp35cigSnvdejCLMfASt4XK8NRqQY648TWvqKgvTQ2u",
  "key22": "2j6TJe9u7m8Ur2SDvAzGxHkLgMGyy7mHLfNVjUyy12BhuYHzR2AnTDgFxUteKzmWy4pLyRPRg5xBiRLNSkdxrjVx",
  "key23": "zXfu7PFcsVwPD7in4UGFwn5dPDh43RynhsASb1ERWYcFTUz2uwmvtd198xw9AubmSTomHnL946PKsRFpUD5FZAY",
  "key24": "kBMv7C41KkRzHEp9USNe36Q4GrYNdsquK327KbaDS8nFTsFf2XFz8kS9FRaVgrvFfBbHBcZnSPnLcF8D6PziwYZ",
  "key25": "4esbuskzt98h7HeiFTcHFX1zTAAvddV5LWQWXJZ6mQ8xk5yY8EZcC2Y784e8nqrmuAeWrcQ7LgtTDVhdfsmCnfj7",
  "key26": "5cNPcjJQ3Q9gCHNLiXb7FRSgt686Bh7JC3rPcVFqoG1yHYmr8BWqmiBkU6rUcUHtPLKVnQcsuAdDsjkuZXhSGafj",
  "key27": "r8Sz8oUYrxPwaDfAWhdb36HVa9aCgr56DqgwfYDissHf2iqggG2ASoyhnk2Jn3qKK94mX2bhZKTJ2SJKyUUDDxw",
  "key28": "kZSXpRZNGs9LBB6meW9qUUbnzc3yXUH4XeBpU5chUiRtGPgziepN4AnDALMzP3QuXoj7ww8f97H4jxfqK6UA59A",
  "key29": "3GC1S2cjBLKJHSFn7THaHqKZj9H1mio7yjmzoo7gysAue98pAaSBfBWXuzhTXR9ShQxYnkUk9LMo4TytJfEyZbPv",
  "key30": "45eHz3afg9T26BaLB1zSZX5j882JM6mCNrcNt91y6qa9GnXNjgaDGjn1Qao4AJyjxY4pUnEqRShYTWRwuE3mwRt5",
  "key31": "3EqtcVXUoCAYfShg5NB2j56hvZbNNKEfwomajnvVECBpbGDEzzQxLaRbgiNR63eySXEscyfvUiSgxjpkuX32KWby",
  "key32": "4uhaxmiVi7xLC7KNutZRzNpiWpKkLP9kJcz8P5rzUQKKQnFJuuLpCpn5cVx3H8UV6GgrV2n9CR7djbDWHxr8Qpyf",
  "key33": "BHjbMP8QnBGU8pYCDvtNc5vXo3vrFopXLXmvM1jp81JK3fL8SU47Q4hZRK7gtsAWRoZH8Q5ykqKrPjLAGGb7Z4d",
  "key34": "2JHd4V1ezDGFNqFYvyKL7ufzwM2e97Qu5aJDTEiw5KKWPMM8usWTBp3ponJ93qvQTbu5XDmyWaG8xMca8RDPEpEy",
  "key35": "2pSBe6xBrrnmV6nggZB944XY3LbXQQp9uhWg3J7MZxpYFfKj7s2RSxrH1ZCqZ2gQhX8JcsK5cRdd292exhd8Cv1h",
  "key36": "5QEYjto6TD92BpfVRip3pUUKC5KPz4iCwVXCYAr8DBquYKMYFYYSVSXAYtDDaHRxkptfYbYscWYLysy3uad6or52",
  "key37": "1jHMiNjFZJXELLVxXR8naaeBDzurXSLPWJuzNYfDFoDfpTz1edaaKCnfjkrj6kpNiJhDFAKSzdKxkbwdR1Z9FNx",
  "key38": "4PHBDj76WD7B9xZJLw6ZKGnujuh33aSJBQ3Pex7c8Wv1wC3R3uHmGzWG9kUGLQuXiPeTkkJMeZzzomXGY2n4XSbD",
  "key39": "3xPSuYrEBo6JJWfHgkxRDMHEsyBqDCAkYnduvVSzgGp61HffP3TMPK5ntLkicQsmXg3n3fTKtKnVkmt8qa2nV8yF",
  "key40": "28R1pZYvfpvjUX4TmUj7g1o9NaeUXQFEpb8Visj72TjgWxyumcc4q1by34jygf8xtvBPFXbUTfEPAEFykcEUkWxj",
  "key41": "4M3vmYTuNr25NYWUKykCgnVt1aW7WV8bgzq89Dar8UY9cVTm3fG2fwbmn3P8RhiuAWhyyureSDHHkCmq954YjHjQ",
  "key42": "2U4usbfSCLQwQ2zD4RJdiRBx8GWxr3RqwYUZoCijU42rj2W1XDMhjhMBdiyEJqpnGrUbthDPHigB8Ge7gVv7eNH3",
  "key43": "2JqKz6jB4Jx9FZbyyY4GkbStQrJs5rYm7tHgEuUTzEQ1ZYMjh2xauExKDwsWAagC4bJheXTAWdnynWKRzgg9d9JQ"
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
