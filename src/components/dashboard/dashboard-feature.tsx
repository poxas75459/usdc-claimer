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
    "5YXNWaBwzKuAoMvFb5Gxjxpdpf5E1v75dMKLuNQrG7Z7yjyAcUA84NcbPQGNfpanRkUR85MkWfKV8rWG8Wcy2qxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T52FM9f3W1jDHpRoHMLinMBTJufkS7HuMHBpjVLYkTGte1mXdJXmt7PJmZm2vZ2QX75kjrgfhTnQ5zgsrBEAhLT",
  "key1": "41oBWhceFi2vZpWEvHT2LTBWvsUKjtjwBpdwaHUoMknf8R2VDFrVbBLFz8pYhnHndQnDYqEuRnuvXbM1wffCoHuB",
  "key2": "548CbKtr8AUWUcoS5EPu7RsH4kzWz3zohqucNEwzejWjQDe6md75CAmN8MSrNzfLqXwPzM4kXoxdk59qPfFwdjjk",
  "key3": "dgbZSjhH2ZSXsNYicqfVe8tjYGWrLtrxqAQzsasKNzXD1x1VS2MYPS8ACNyUM3HCXYXUz7qc28AwcWVYbyY9ZeD",
  "key4": "3P1LcLk4SWQNoZsX74diBrXSZAo5sBZSB5jWFbSfU8SgK6NwfVboBjcroaV7jqy1UM4XJT3AvqEGDuuhjmL91T2G",
  "key5": "31kzBgYDaMidybNR9U3ny4xzvcSxdg4LKYHKcsbhtJJsSMJezKbePNLKyppKUYMkCnHevZbiUUqx5RqSvyowMTiq",
  "key6": "3H2t48MaNaDXvJGwfPm8nrxKJqatp1CRfdTQXaoDuKgjBuT87yn5WpbPgkn1pg9Q9jorjHuRGbZxUdKxX5socfWP",
  "key7": "49vRbsTJ3XKbVSRQ7SnGLXoRLwzETtNRTPivPwSDeNzy7N9jmmsSufvV7hLmuxZ1nTFazVoaLX2ez2y4rKX9WSmP",
  "key8": "5uYtTxqcNuKmTkVDV6x9tAGrVPKaTpWCemPEXXUdgLq8dqcYKTgt2HZ7JTi7BCiatY9iKQCTjSpkemUe5NARYy3y",
  "key9": "3FQTfKyXLGYceDKsKBX8vQSMMzexNXzMci5qtLo7rgMGYqNbwyCXyxqyj9e7ttHqiE4AcCc6dveCvLwaZAugCYNo",
  "key10": "2o9MPh1GbXfZYojVC1woHvoDjc5BGqGnFN8gTonfPfL1bThRBsizvUUBojik8A6XfxzqQRcJQodR7semRAn6yCWL",
  "key11": "538mafxEWSa4QFiz2RLYmGpCGkWUSVb7q4D1VxnTCkGB3Rr1ytHXN1qrSN6YF8DMVAd1NXzZ6UxFCYqFU4JczQKK",
  "key12": "59Z8aWiwxk96zWEKJrf5cjtnfkAZFJy5G8igUxhppEnDHZBqiwLA915yPenNYBMtTvmAVvhfzFw6PVDBR83QQeec",
  "key13": "2bMjiZyq1NagfUvCTRr3TFoYgpmapD4X3ME9wwhVGLpdJPM9RL76xeu7sETiauwmXrTmCwD3oZgLjk3tQ5pRiaRe",
  "key14": "7NdqsJ1MKQ9Z9bMxMzaXXnUTH1MJftmFfch1SEAcSXdLpjJ8gEfPdk9ZTsLZoehRRbAvv2E2eoYgwr4zb3zHKoG",
  "key15": "2bDYMFyazcD4Zi53ijQQZ9VWsFfuLq31C7QS3qwKHzijJwGPFPvaQmFYLmw49RBjkweXASqWoiwMapVQ88M5sw3Y",
  "key16": "2kgZbLNvvwWqZQu5GpyLfDQ2rePy2MLHhWZCZjtDbsmtPRzFVpAPJpVzm3UcVVYJpyPUEVSxbDkxW5jd9WqZVdru",
  "key17": "31tzZyizZ4Dqg2eSmQS6gHerTRijsc7SJQZwbSFkf6Gz2BQvAggWduSivkb51ME5i91rQprg3DNVa1oQtM2rVoSG",
  "key18": "24tTD81izfzC6RYpp4cKHv4uxbJBWULZSKfbbUCJV5umze6x8KnMXZxLAuvJpLfdkXCqRFaGWeC5gCu2x8BRWomH",
  "key19": "5AaXZgZ8dpx9BTVJP3A1XzHLvEMxY4D91CNohx9kWWPdkegRUpAuKXhb37BadS4UihRJWiaqJUipbiEPUDTQAGsh",
  "key20": "3Zv2KtFSH9ujLQvY5cF8E6f5fkB8FcRFAPNZQY4ifWSvc7v1qF1JhBiMTt1mNvFDCPVUqDTKg862Hjid3pao3saD",
  "key21": "5EhFuCEdmqjUphAxMZbFBLdYwCUntdrGtqXYGZFBuA4EWzW8k7v9bkuNykrSeyhLCmJ8qwJvWpcw23f4JkazVdHm",
  "key22": "41QthjSTGpGA5ja4TqrRTAZgzPz4bMZDh5PvxXE1X3ySR27m21uFX14uZuwQ9phdTqWe78L4Ump6AmNSkZJNM5jB",
  "key23": "4Jj7dRah78vTEHwDQaDg1nXhNet47DVX5L96A6TPqb9DzFvGK28MdG1iSqPiAg3wsFy3MFDJPTpBB9MHR8eKHKKK",
  "key24": "ZnbhStDTSfzPZyMjBUDYYtGGCGbsv4E9KxRpMv7z9NjzTScPyevoTRf3YaMgNM3sLzrUqFNFHD541ZqFfDfzK1u",
  "key25": "44PvwtfU2ppjsvATxkaNy11SpjPuViWRzxGYKJKXmqKSa9rYEUdWecRNPg7XALSUS7GKhe1U5eaT2nYJXw7MgXBy",
  "key26": "3D2HT1AZvmvddDnqaN3xCNt9C6go2G5rdvV4qWMnjYViBwiYsKjwwcy3ztEDeZ7H83orj6zoVtonogX1j7SDXK5M",
  "key27": "4RvW7zAxZXSC6HDJ2FjUL67yaJQGo1w5GEYvQBp3Ku92n4DNiJnSkvQ9S3CQwRbttzPVLuN7NagFpgbXeBTvvpAz",
  "key28": "24i8VszoQ43Qcv1ujHvseCibQ1knH4LG7hWjDg6R6PvHcFDby4k8xH7uSq1wcAZSLoTecM5jJ4ggjf8VxzpQd8pB",
  "key29": "sLRkHNKADMmHoXsUACPyrqdEKoBsZKruQszQR9PSsWTexNy3q1nvdZW11YkhkYFDHnsdEpndy38gnyLcUD57RD4",
  "key30": "39BH7CGZaHJm7jm86tF5fgF6SD64cgXHQUFwkh1EkU2krSLnvKAVr5wcHDjbAsGNJiQzCsJxoogzbcK7nTW9E8Yj",
  "key31": "2DffXoJs9eA5zLrwLn8yDFPmfs7opaKqGjP1crSApeAfZq32j87nHp8QfSK17zgoNQn2pAqvYueRPQLiH1G3P1Wr",
  "key32": "vTVPHoBdWpjmoLCwHpxY96tPhJbv1tK81tcyW7PvsFFEZ898DdU89po732a4SwJcUn3FZPeKM6uEWbdcrLLzUFZ",
  "key33": "5S8jnxcP5oAbmCe2S3hN3Gmshhb7ZCmN8uGbqsnXJmNFxitxNcvVKSNBQnzBLsk38rbSc7BmKHMkauVYHc3Gc4Lo",
  "key34": "4vbeKjJgUKSXJuPeDvHW4d26pUDVvwALLP8waBdkgfFJFfYxgfGENA7FfPtUJTxcyukbyXtgjhgzdEEN1RzvEhSu",
  "key35": "4kdk8qJcbyjYiKWyR2q8ZFmrR3djv2LAYATP5W12CBRVZak3Gczh3TzHFPU8iRhmmevnmj3tYGv8cqMcKeHcApkk",
  "key36": "4t4bHhAbQKFWhdPJpC5jL9c9jcJ7cBpoS4W3HNihhdfTgdpRyM1djVms23AQKNLnCJxBX8fXxRhDzvHnVf3Jxyxm",
  "key37": "2Vh2jVjXzjazribhCSho5qxtxtrsskpWXsrzhMz9uijUfddpnPMhuaQjtocAPVGkhvPeJduHW1TZfSE3F3eo2gju",
  "key38": "4jbDuhkMSZ6RE56wgvuPDvPtRPgUTM1K64hDtQfgR3TaGria7vjSYCtNt5TGCcHyCqpoMmfQpmAhJ3nA1iDdBU8N",
  "key39": "5T77y9BY4tnCUsknvu2twzfz4HH9XR7zrSNMsGWvEZZNS7VpS7FQihrw6miqLfpJX4RNKMLcUKDFUniHdmvtiu7U",
  "key40": "5uMaGvbn98kUjdzEq3o7A4k4bTQKNAaWqhXydaSUw1XWDcrTdnx9gG5AHYBYUj6Z2Zsopu86bF8SwVXdaAmFf8Hz",
  "key41": "4kJxEYVyFrYagRJRgr1D6A8tanvsnuh9tYtg3rFSogfo2qy2qr8FYx27h1gW7gwt3YAzhfaHwgkyo4sdgLNLbaMf",
  "key42": "31PCVRQ6v2MAuGRzYQ3875xZHFXiPa3Bxazm3jwAsR2Ac9W5cyH4i8EPbyGVdDdT92XpHWUfEB3H1P1PFMtLDkFJ",
  "key43": "5BRwXk6cukhsYmzA5hZkt7kXzT5V1nGxyxwQKZfRGNhXLry8eSVYjN3F55jEpdvgRkF7c1eqEtPdNfP7zkHLu7SL",
  "key44": "58vA8RERrYXKsQQ4rwDYJjv6wCC6aXL85HCj9pDoM2KS5pPDgv6DmpehsDH8DNjPougfZFNNm9X3wkE6HKHo7z3i",
  "key45": "2TrUMidkTUUX7doPaQMr1saELQF5wW6YrDUJGpVg5n2Mirav1agwQ6FwdxLX4FnNbUjMKdjUFXpqiThWN4MvzmRv",
  "key46": "59dSwh3di7NraWcMUY6EDZrL5Tgyf67zP7SmL6wfKJMgikN7YmxjGpNf6tLMRkQLh7W9pKe1TxpwFB2k4B1wX5Tc",
  "key47": "4N2jTpaumWzprktccAmz3mWmnjKFh5KHiBGEea3NFfY6wFtHg8YzoUJA4o3g5VTtr9L7MM8shsG9p57SD5977Td3",
  "key48": "5afvaybfoLwYGs6UYznw4Vcp8wTGbQ2GnC9tUJ3GEyd6W8fzgA7QfvGDDCWzvf88ejozJes4fYoXabPGXcMydNaq"
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
