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
    "48u3iqeEbADRb8N8zDLY6qqZCBxmRVcwaCcmbmarp88WfVSG475LdkCWpHLTXxa3KuHHAVvBgSiDWaDDDkbfXLpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pDGdQiaZxZhnRuzDd6sLzYAWXJq8ZT2LL2zm8QusJL2SVPHzntafZdHyyvU1kEiTprZqgbm4cicv8ixaVT3YkH",
  "key1": "56Qm3gCF1cnXM5EzVrtbcUentP5FAuR1XN5hjMNZUdPZKqfnowrnvCooNyNiYsfrkBEU3CcVSRJxJDkCqs383UvD",
  "key2": "3ntKAWgqQ9uQ7zbvmUTT3DKcobrkAFn5xRsLFyg7wxDxZdxnk5f4GxyAr3LVXz7N1dXXRKdbq7cHsjLknZXgYcjv",
  "key3": "3rTBqaECBxBjJYbnxDR9L6muyiw32223dqEL4117LNx5wjSD1mSEYSeD7r918YtB4jCvdXepPjnimNvFzw2zEMYM",
  "key4": "5buVUmnTSNaYvSvS5XD5YSA28MdbKwwULbwtL4WEyxLxsAeBVX8xrjfBga8YxYmCkz4D2b5eH9xvEn5MxV3kZPp2",
  "key5": "f422UJKuFKo5ooJchGgA1jDcss1LaQKymvhbV6vhiZanBMF5mZfaxyYUzoAsrTh6MRQcKdQ6WkTFXHM5eNKAnSE",
  "key6": "3vmV6WcmyLCnW82HaKDYKdzpZxvuaWYdFJBeus6QLw6dZxBWajXT5Sc9NdgvjWmyzSH3uSh2NcnZ4oEFnCe6yNrJ",
  "key7": "CLYBq6V1kDgWoQCd8R3nZs5UxSWUgQFDtgsVnkXnxEDEJiVtrYhsk3kimrs3DH9Nd2HfBELEbBcaNPnNxKm7rzi",
  "key8": "5WQjScm4oEcNroXQMHr9f9PCxaBSqvTKtYvVsSJ9tr38w2HMJ2GpACtsRXcSBckum1y6f588W5QnFzLFyXBsALuY",
  "key9": "4wJpJUiVYqdgvjt5Auug1rJmahV1st1gVm77cR8djP9X1Piat2NqxR5zy6rLA3H3TTPzwgKLPnMKGf8xSvHTA5ZR",
  "key10": "5qzB7VUKCGMQhWEso3mL2ti5m4428vaRnzxcL4cgojxV3tvmTwvrnktuoHyNdMvgQQZVss8A8mJuN7fzAA1oAVeT",
  "key11": "3T2KUgKpYM4AwcGedB7n45Vd6J5ysFiKebRjNPNdUqpoiGfnFy3ogS74438kdZBULEbx6ygbVAtjAZQXkjtLErRc",
  "key12": "3wdSZPGM1QBTansqwcBUBoTmuJTZD9DJXZcsiqEBJ6yNmaUznCb24ZSqPWyDHeaYMAPcZV3pUqx6RpUVMg1tu6Ku",
  "key13": "5MzYheTWoWpzHhKqTzRB88fgXvJ8S7RQmuUAQDChutggtRQzEgvcATRr45kVirsCuuXBG3map4Z29PPmZ3UgJdHs",
  "key14": "5ZGCjB6aDQEVrxqLoVE8ws828q1PiBh8osFw7sPaqxs3u4Dg7mhv85TmJ5gu71Q3Zcn39fpHgY55HWFcyKDc7bVC",
  "key15": "59qp1yHtnNnWyU1o5pVVJ2cHgbV61vU85wvZBXkybsKwRvk5BoBmd8MZZQy79fc4v3r4tZbdwTqBsMPdrPw6huJQ",
  "key16": "xNMotDzLyEWL1Fj1bz7WVHAAGKTf6kCrDDyHLUcUdZaj8Eq2n7bKsFpBhmke9gDeuuFGeg76V2sqmf94CYi981M",
  "key17": "2gWUL8dFmngYfUwX1Hwj34nfSucZ4TBjyN8yaDobpZGAd12Zwtvnwr6onYWhKxkAuSvKidphrdbziSuZtySzgTHc",
  "key18": "4SQ1uec49Z45aEwxGpRGnUUcYVc4a1uqDe56Y1xCVPqsJj5yZHvU2hVCRcEPYhCdBWx5AH9SYnwgzcjsNRgqhfrX",
  "key19": "2bztBuetBDQzhjSiF358r4wdmx4zGiGQJcVXNtUtYGVu7JLiaWEho7ztQQFNiEX5LV2bSBWLZyZcYqznseStKzJt",
  "key20": "2uyXYvHyAfGA3saStJq1No2cfMXZAZs1J7uPQYSDLEAmHi7kWA8zMa9C9KEmSuPtRe3C2zbdCMpkjZeEmfyuiSq6",
  "key21": "2DNbwB2qmWdtwKYzYqaKYrPXfGWwxSSwsP7c1Ety7x3V8ckZmfQh6FidF3PZt2GvBPRNhsQbuqc9DpR57vhUj5mH",
  "key22": "3hHc1jXmDSk96Ntw5gV21vBEgvPfpYohgQH5gjfj22ReXKMzT3UkSGbjMnb72hdmUMqzsz5YivpSsYjuJAdZaebn",
  "key23": "XMncMDtZ5FBQRbU5jdE1QedfnTzWGkQNfN1XBEEcX7HwMhb67pWhvrAz64wbXrqTfCJZZrFbdPe3T9esJYBaP7Q",
  "key24": "uGJPsvvAp1XPM2k4SS85TMuWGUrFo8aFARMCEmQnpmqu1hBoEPgu8QM3Gu7QLzUXKqGvWBUeKsY4CqMbUAy6kFj",
  "key25": "3asv6djenkbntdRGx2maqJAyf1AtzC1gko9J9YoQJxKk6ubNjzaaNFXahJTYKJmC9we5mXNmuWeicLAHuqMRqMX1",
  "key26": "4GKjpxMtWGhdC8oJxMhZxR6sBSjvuRXVoJTyPZXHSGdCE9Aec5ft4pHbN4aTjtKR25NhQWNmtxY7KriRxNTAFxAb",
  "key27": "4S6AHQfHG5QqBdDtjYPESYi8UExAV8Ar6VigeZvVtAWpST9t1BAkwBT4q16bEuPrkUegiNueMg8XgTHeDbgPdrBF",
  "key28": "ZAasxEFbkCagZMt6bA9bJxagHNpRi9BLBGfcGuMWWxPMRTZDuJka6KkikN25TX8V7arFAYjhixAxKzErv6YokDP",
  "key29": "Hoy3HEd272WZV3RxpZZBrvq84QKxpTVzoRvmgbWY29FNwNWS7YJHsjhRws6YVqX4iUu4Yw8jdSBLLzBrFi2iYLw",
  "key30": "5nK8wio28dvypihpfE23TfFkKJRhhDzRrdRi9BZ2NBfw2Qf427x2ek9Yaip8DvV3JBapbzejfarMbw9oMTfFSVfn",
  "key31": "zCv3jFtJQmrMTPaDEJQ8cundnKso6sg97sP2zrSxcBZ6JJCmgFxGSSMLzaCYoH7mnnMfuo5D8cSxP3mJeCYLute",
  "key32": "Zx3oZWenBXmpHXr3zdztKuXGWShWkz9cTkwJeCbFGztgdsSwD8zhBjsNiVgzKLbCTS1h51uCjYiHRCkaoexj3QQ",
  "key33": "2omzYx4uequAhVv1xRuJyNZCSW6dtrQC8wQwXaKosFXiLCezsXbhJAQEt78weGMVKMFXB8xsW8XUnjce68F97JDu",
  "key34": "4qFWMLkUzJpwzxLbReLSas2NqFEBBQVLwVxGqZoheXvZtSZAw1w98abDNGLgVRhguQDbsGzkGyx7759XTjCCJoj3",
  "key35": "669DFHCTs9DF3k6FhjmWn4MssvWZsDJBjb6ochshjQSzXxmexmjb2CQQcHbLER12CfqEnhMYdetC1sacmHGVfbr3",
  "key36": "35KtftMigYdFgZXQUL6NXJZs7nEmkpHqbbcXJJYxgfd9krD75PZjiJw3YGHNHRJixGtw6FjFB8axu1N2bcJw5JZP",
  "key37": "2mmoCErWzBFVVG1oDczSZRMCrvCGcEZWb1hutRv79n65VYnbHPicmFys3wrkCijMkf745QoCy4CZys6SS5V8iLCy",
  "key38": "4Ebs98VERtmH8ogKJ4Ey3J13qYq8M1dSLRLfx45NhhpMZF8F5T2URbG4ZeWL5WeExqKgdEnKNzC7hFBWm9EE7TMw"
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
