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
    "22SMRFH3G6HMRuKegYJNq62DxomByhP5omu1aLLVvroFXT7976Jm9Gw7oMVBBXHuPTrUfetDpsVudgb5QS5XpUrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAjkj6FBPvWZZo6tuEtj9HQ9h89PkiUkBxupQb5wscUTtDXtYygeoD2K7mVYVc4Sb8a9AHZkfxSfQMY2CMM74Tn",
  "key1": "5xJmgc1MWuyVY8rQNYS7JF8VSzSpGUxfuMKYCeM278qgv63SCvEHcSovyUuBKr2U3hk21HRcdWvkZbiv3sn9xNuM",
  "key2": "Lt5ryYWz2r3T818pthGHy2oVUHJ4nY155TQQdHoKz4ztWPquxoCBMkAFos9udezFzuFGVze2PiayPvs4qZASMvF",
  "key3": "5bH1yXVbEb6WYewFX3Jj9iQ39rtQ3XCpkeKM5akXw7VkzQkfJQLQPiJP1ghAmhVnCx4Tz5m4wtSGKkExVr2XanLt",
  "key4": "63SMoXFN1grjLXafZsKwFJzWFX3E4KumS6nXCRAbi2u79CKEDHoJp4EG3VcXL4UHsP7mVeyk7neeDGkE127rD1cE",
  "key5": "4Lg5mzjL7hUmdfjsGBoAepELxZpEskTpjmi9mFjU2TqPCnrz2iTu5UQuG9wdiK64UZ6mjzeogfinBsBPFqbepP87",
  "key6": "5gvXyHKgZw9bwn4DzxbWjYSS4NbcvyXDMksVEBm2iDDFMXxrCJna6MPF33GyEdCristxFvEf21xrYoxe6bUBMmZ4",
  "key7": "5UZtudf6W5jXQBfanAbYsuQvHXyo733NxGaY4VENU4Qr5w9msXtnF6ssLukDbCp9fup1iLas4o9indgHWk1NV9wj",
  "key8": "3RKhgfjtgQDKMEmLzQSY2hYPf1vWzCR4LrUgNmCet4fsFXU5bgMJ8cK44t6uC6AsCebPodsArJpwtkXt2ewB2NvD",
  "key9": "4AJ8B5AShUgBsEbovPUH6sBb5ToCNc4mRKPwgrUD9bnPqoU2LXymt1G5txLWrioiqfnrcdtQiLdCzd2EMgEpHWD1",
  "key10": "qcGGgoMturr8YxPwXV5ubXDW5LvZ4kBPqhRoTyd8okEJ8B4sPwdYrABApoK72c6KwD7qXHuRRMCQtQMrR24dr6u",
  "key11": "3qbfVuZ13hxibfYTvjnsaSV1qnuEEx7V9CAM8WWQ3skUhEgFZPmKKuxzJTE7iiYGYkqMPbNWGQGjEBuSjEL6Xf8Y",
  "key12": "61oskDCPqWVbcAxSqWgKzVxBrp1PySSjefCrtSGmsHDw9eVcnRaCRMgHrawPmgpYFuwrCxr3udUvqGQkHuYsP4PE",
  "key13": "64fEvAufu5Sb7522F7qX9pEytjcB1y2s5Mmfr5rST3LnDVcc6oEqBL7ej5vR7wtougEiTa13oviDxPJdEva5fHKo",
  "key14": "2Nc1t844FLoz6DUKKw9fgdfeYZFavZahW4f38BA4Wu2QaEjexXhkXw7vpCobXD967BgVPL3jxjJpdHGmGbK9BJ9w",
  "key15": "4RjUr7shLRByBCNGU38kmWSJGrSZoYRW3o5MzzdRxiamv7NxJjDYspnMHETZgGQJF1aPEJt1ptzLnZv2i1zz5dpw",
  "key16": "5TPYP55yh4P1M54dG6yRQywiXuK8MMntwNPZUH1ufqkykUSSzCzgjY2yRqSGRJgticjPfBbkerSrGNv6tmFtgNjN",
  "key17": "3D9ZffGUg7aC16eWRc5AtnPLnbLRLDCAh1Rhehn7CbBH4aYXjP9KMBjM5ymU9MKC2ggrRMKHD9NUQ6JZKNPJbJVa",
  "key18": "56SSbgB43NJsvefWf9i9HqAusW5rspCofyKjnWDUH9rx4um5DWk7h9cGZBw42QSXj1ssFT6UsYQm8XEQvMcqxvi",
  "key19": "3QYCU7tCRigZsHmR7FaMk3Sqwnf8goNydwcGMNV2gSSRpAVR3Moniz2ZvMT8ufGdjfMwhAtQEcHYa9oBNuYw95nc",
  "key20": "3VpJFibs5AWgN7MsW3PZVoyeJ5CqvqvnaYj5Z1XCQzSiFKKfjgqKrdCq5R5NQTxtZgZjviXRvd3uEo21yQSGdmfh",
  "key21": "3qDpzKzjHuqoYsHZZmG7jMrpVwHXCBPoEa4BKscLxg4CyQazPCC4niCf1Q5ULoSURNTSeQJKSqBD8EcNEVwWUs31",
  "key22": "wL72oydaSNsJD9EJTPYYBR7KpqgKg8QVYXper8pFfAyGG1o54JGBRfwjTRbqihGieCVj3Qs4Hcw3KFJJd81Wvwo",
  "key23": "4mduwLN1xE1byAXLCFWATu8ciZaspPzqj3DSFygfSjzBSvtWyuQQ88X8LnjRiPEzyAaicb4uWsJZRZb9DqwR6o2J",
  "key24": "JL3KPvA4hAVJhwBeTvbhv813GqKz8rwFqGGWktDnXGcFzzz4vukCNDvgMCutzEA8e9Z7VWTfpX1PhjvPenhFb73",
  "key25": "3f1Sujng2SsMHGcteLEbRbJvibWfK3tsogucRCEqsu8f2e8nLPwoz3ooTSw5ETwtH94tJGxUmnUhaK1WLXeDafD3",
  "key26": "3k5tHL5SNvZphnUTwVD8Kfs8vSVr2SkgJUmHNKKVkBbXbNyZNiDkUYaaCPb5qt9apKTWUJ97gknakFDSEu2LunL1",
  "key27": "4as8fUFsQ7Mb5qDAS7pqQQPwZTmsMEjLQCbH1xcLmR5LrT3DP8ddvQGjbUR4ajmXt2fwEP5XptZoECDSSTNBBri7",
  "key28": "4mzN64A6jgfsrhY47bvZhHnfmMSznHg6APHxz4jDDzUkEm3zhXKfjGMSdwnsG7XYk8Fo5VkA7yXNJerhujXpTeKU",
  "key29": "3RPuYeThkAeb5nYwX6Eb19NsaCjKs3eN8A5Qd9uBpgjZxz8ntfTW8K3AuWzX1JsX5KCtU9PYu1Su9uy9wXP85Wr9",
  "key30": "4GujZ5ST4GxcfSmRH1QgBFUFwSzMEDdHTMYH7UX4NUK2wZJg27nhe3SPahPBkQbfAZPrjgijmisw13Tod2Z2oBr4",
  "key31": "4Qhp1zBLx2C1Qv1ZjNmryia68cdnyPxnjbp36us7JnEjXxcWobMy6gGFKVzGDvcyq15TDKZL1qg127uUqfxu2RCb",
  "key32": "3qVv5sZeA47mAvcE1VPjGbhwEL2w7sWSzYRLCmRTCReGQEvycU2jPQmRgHEufjbcVduXX44bfogx32mMW6mxaipY",
  "key33": "2dsxRAHYMdG4qn3AXVoPfKi7KPjcFETy9acX9Vbby9iwgJ6idJRzKh529un2dzp1pep2aaSBAtRRgnPRBYn46V5G",
  "key34": "5tYP1shy6VCqwLub6fSEpvmW3tg9UNY8avjjpsWa3fvzPJ41rsYGAJaagi9S1fLonNvAhoTV2YNLYxAN48sK5r3Y",
  "key35": "1haQVr4fCKfm5CAzX5VMWAxyQSEvHPZ3ECCwdF7m15byBEoTus8hKHUnCJD7cibMiRhLZqiSLmJnm6S7tY3ozeF",
  "key36": "3Ykv3Z9WULZqboKNnTGJ7PtxTv8o1cUfzgUsjU34VqFubz33FwAVosf2r4ALScB21kpVADepwyKKpXmKMtT8hFE7",
  "key37": "3GeuzeW5PPhERz7eJLBA7hVDiDpbPsiCSngx2DKS2RqcwKg4M6PoTV4x5ExzJZBX4P1dwTM4TCJRf8RaU2mvhucn",
  "key38": "rfcX3kvN3vWVYidCyFaBAQUivJSsS8CzyfBwTxfgBu1VcbefveWRT688nV3YCn8naPbtFwHALoVdyUgk5NQpKzp",
  "key39": "5A4k9BeSTC5TV6av9zKjiu4inySPEpYcBRzneQLy6kif7Qnih23y1k3DgjguwNwHQH4d3gy14q2cichqbJpVxqZ6",
  "key40": "63tiZAzXcP9GjcPuP6DpWbLDrTDp5n4eWH4SbYytzGXsSwv3biQRXXHmmqXWkMrcVAYKZksGnabDCGf8rXzojmKv",
  "key41": "4YwhKTPCKGDfFPHGZWHPy8c2vry2Exgq5rVWRrewi1iMkQdqsYi8gv4FqNkPk7wDrQj8jmfeWxkvFTN6EJn9imnr",
  "key42": "4Svv6M1tMEW7wGsFrcmrzFmcygG3sYtz8Y4vTzWxahTYX7rNYzcGd2wuaisqV7aEKba1Z9sXzBu9SLBLWtu2FLT4",
  "key43": "4m98aomXh8hfEKhKp9HnywxEnihAaCGmYLogm5YNmLmsEJusV1QbWzmXGZiFsfvWWiMoentGjD7xbomBQpQXWFCj"
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
