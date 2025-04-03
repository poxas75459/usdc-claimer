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
    "2NBai2c7PF8FaKrivPxPoep4BjYmbUpFcw6z8reqADH69boUdgC3kAdpX3VmfjJGw8KtWYnEVCUaqTaKEopQZhg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7ATLc8pBn2kJAFgp9FEd6kjP491QB682NFEANFR3pNCTBUQLWhtunWunv8dUp9MNqvQwStFnPQDcna7Rpv1git",
  "key1": "4K2sBCWPvxZ1tWxRtEXqvbrCrDZxG1gg4JERT1gYdo4wMkRoHcrXCvivVRCxUgvsDPBv7zMGQgztq4SvUssQC5iH",
  "key2": "41jJrGpcsjH2YbRjPFsMfWZRS7fi9G1CNweemGEncjKzpdkEqVdt47qb94sxMWVNUcyMfZjbqWakpUfrMtGW7hTs",
  "key3": "55YLvtKwi8K2vx7ezywY2BQ7gKAh79Um8DNbtUhE2D1iGSwgLykQcpFqTBoV146T7SzotTjPKU1x9NEJxa6KtNXN",
  "key4": "2M5uZBDUwwQgNi1HgETpY9BXDDXeaY7VgKhfBhTFpXqyU7pRyo2bUSEfSawafqMRJb1BrvyDpXgYaavxsx14Yxr4",
  "key5": "28u4ZzzwaqDwC1fW3gPevscDovbY7sMhQ5uggATjkshp95SywBFDxgPK8RVZTtT8uioq3TKRg2fUzwR5eXjanAeL",
  "key6": "nwynMPjZnmyH1ukxnzVShCjpR58HtPqo1vBv15jSuhVcE8R883446s6uMgqSsraX6RiFohpwxkNQU5T5FiuisrK",
  "key7": "4uA25xoiVXRzRyCFAvo6T6kT9HYxiYnTNn6MvY3xvUtn7YmURwrGj4RA2sYoPMQV2sHNRdaqM3Yy59XHZp8fsnMu",
  "key8": "ud9pFGFoWgrJKK4Dri8r1y6cEaiQzbffZCRFJoEWwQXJicr3ZhWTkHHQqYQZAx3toWxnBT8gLPuABzEAMSCRNEj",
  "key9": "5e3tVhKcs2aCFU5Bqcz3gcsBjnbCVmpt8RwmW9kvFT5qtw5Bdan8Ud5whJn1icpBP2iMbUCAKv9yQwcBax5J7JVF",
  "key10": "36LBk1BNyJyGwPUugEP3zmJbFHu8Nqe1CZA2bSmRANjLPRaHGGSjnrQYhXNRTZaAZ7vaYnhMkgMX1V1VBrzQZgDx",
  "key11": "4MsizAXskvx1xBHeyRKTFeDhivC875uEX35YH9frA61AZBqcMzUJcywrZcyVq1mgUBjx58xRXAmaFtU6En21zGpw",
  "key12": "2GuzW1grhhecLh5au21nCf54PKkqepmN4F1ZswBF6QCWxf94sMCfR8e296WF6TRyBWfkM4bAv5YT4gbvZUzmYvr3",
  "key13": "5GMD7CGzUtNihHis392YAn7tkgwMEahfRiqJaeaiVTPUFzFqoAhC4pvwpdC2KrHDbPvtSeZdk6Sum1Q3FXEkpxGF",
  "key14": "5YM8WhbVSubbwQ4AmKpw6XZMoCcFCQrV1cyLzvhZDGmMRBVgmqVEyLw6KApGPbHyfr8FQ6uvVNDihGnuLeFBp9v4",
  "key15": "5WVMFLqVFWXeZjHgj3tchpQbv53qHnYs4vntFumb6ew3qHagZ3HcYPAnjd1vgJTWXZUwLVR9LuPLcJJ3SwczFMrz",
  "key16": "3UcB9uM2tSkSBekDj5CBC96Bb1sDH7m7k9ksvBL8SDrhp4bNsX1ZpNW47wi5qXnYxsYD8BZBbjqpdYKWwANvbhdJ",
  "key17": "5VwSULh7qCTrHRNVYZJ5q6Xsd3VRiBu3KpmMsH7q44LphToLu9vmcBKKoPq6FZ5VvdKwnpUYXafuBYgBe1jFKp8J",
  "key18": "645ySPQ5TDyyEcdBM5nTLLP3wvzP5N5CeGSrEEZFmRoEDQdbKepDfz7A59165c6ZixfNyZr4uqupbCxTgd8Hveov",
  "key19": "3eYkD9ZmRW1ZeFiU4UiFs5U4AzqLN1SNyRZAuFVTDu9HADRMvMo1RQq7c62G9jRn64jerPC8ieQbygJrhc5DScfR",
  "key20": "BRe29vpmrbrDJFkQ6PDxHpidksPxZZpvfVHXCmtWZfB4FWB6BRGcx1GHiVvUNGGEiemT36RpvXSCueMt95dDNP2",
  "key21": "5c5gMVxLnZiem2Sec5BksFATsJ3erAnYxrz5s9imJ8T4dXDBhrDAE1BTAE7p8tPsw7TEWeXKZ3HbBYfDR4uHfzHj",
  "key22": "25Eur6QdgrPmnrUNwm7Nc8gdHKviNgjW1DFnE9KwtkF5tvqqR3Z9ZjY6S9nt8XRpMrxodT5j3M2E4WwWJQrMBL77",
  "key23": "4W3YaxjbKqCBvZwyFKaQaEJQLoqqCAJFnd9XcS46WkZHgXHS9zyeiqiHxQZtCWdAs1ynQFJ21HGdWv9yUDkZkS6h",
  "key24": "4PiQvBpSF7a2Cz2GXdUdayT3W6eYECwvPyYXZKD3YynmL9qkSHAYrdVPaEn3Jime5m1D3abT3uQko8JYqdoJnHUC",
  "key25": "63g7uM9KaHZGsJRUqfTo4WM4wWQyN7ygVTuFELixcoksXdWPurwekT58iCFEd9P2E5oG5wEaRtnhW2biusPVuH7A",
  "key26": "65xGdAH5kipqTE34TFT3GPBHtv1RGsjRSEUxYr5CoyAkGwr8XtKXBwEgPHz6G1TssXvCsNoroyapapApsqwZXAiz",
  "key27": "4xYzrqRLVn5F4YEENdYSBhuuYQX3od5aoxHKe7ZwJdLivQ46k2bHHsoeHdfNcFmhqESvw4oGD1wg1wvY474DV7qC",
  "key28": "xxko2q3QtFTKG6rcCkoWhSZrVRJuqYzMvjY6hk1dH3CsinafdhxzXNQJynvaRFJT8PUbWU679doBr8SQjmVbwqh",
  "key29": "4AFwCCRnqDspQ1kXmeA1KbCEUQLN7aUhQTUgrW4XRMLj4dDAnWys7gmf8RECcPwKTqHVvQBvXcWb7NKTxytHaVe9",
  "key30": "56hd3Tm2pdDQq571iqZ5q1y6VvdmVcfCLgoRcb3JV6pRBwxJtjrRZv89cJ7oGBZ3Re7dpqipWNxKhRkfycVBwPQ9",
  "key31": "4NVCN4KqF6ZQx4n6QppVaT6JQFJUFxhEfzxGijBhVcVYy9MHr5aGeGoyhbpeGW7DasctnZ4SvnVzBSCBjPD9DFvY",
  "key32": "47Ys8WJmRVrQovfGCvZ3koFaib8tnCtY4jP2roamQBd3K34qyNpPPYa7PT6cQCkx34ZB9gKE4KVFQzG4U13vgQbW",
  "key33": "4PzR2aEzMdY7X8y6h87qsXkMmh2Xd3a6ff3Lo2itMCAyuuspxSrj3E6cbuANkvmqxa3bUwsdPr6wPPHmoLChnDVA",
  "key34": "5oCna1XEJwUETi7KsLYcZMk6QZAX3MWWVAkVrR41hijqaCGo6eok7tNw8cBZf7QdEv6UbQxrJxZVbAYcgUaRKjbX",
  "key35": "21nmrG1CUEQBjGHe9sQKHWK1jLtFvL5BYAmnKDziGotKHbSCPmJBkPd1WuZe49FHeKh748QEeU3Pd95UbJ6eSngm",
  "key36": "2mKFZHqfAePfTPzvYrwrLmePuQpAi1f5ihg8BvH5tYRncEvc1VXST3GTGdhXH6Pyq15goZBXJq8SUcp9iXXRxLeF",
  "key37": "RGgUMBrwL2Sz8kYPqfvnBErzCL74k1nDSeugbh9vc7sxkHg6TXoaW6v6PZaEy9dd4RCJ3AKgpQcSfBpvdvJeu4b",
  "key38": "3QMqptwaHmTD1o66J24Vvre8cJBesuLrdHXJ1v81hjLy6ohJpqYwGGTzd4QuVXr2uHdW7GeTmKgfg4kUtz8QmFPw",
  "key39": "5e3KRMpMxtC7qDUeEYAN1fT8q6UzWipBHUzYze7uEaKHQJAmSDpFFUJgei5vog1ktes2jnuFmiwvSjgdRR2jJUWh"
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
