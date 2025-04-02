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
    "4B6p7d39bZitjdtVVrvgvULJLSuqhiZMyGxtmfzbCQ5bdDKdWVqa9w8vBdmMWFvacjcJxyveEDrABfzSdYcwBjoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aediSm1f5dSgvdQsunPMs1CT2spZc3o8GaYoKCTq9t9rcj6ZrhfBSY681hFE6cEngWrwT9vSo5qhKv4CwDPc1hQ",
  "key1": "55MtMS4zvweQ3VUhASVkHV5PYhCrDXqAXBaDTrtKaaQkUTdbZWXH4W4QggybXEVzn9Jnpbb3DLXT2RPjLVgXk1Gm",
  "key2": "3Tz2dXM9tyeU1jczKs4FheFzw1Qf2hZJBDZP8GkxuMgUhdm1K3n9PuZhBFxswpkk7LkvUvvVd2tsRaVyKFTGvEKd",
  "key3": "3GjKXZgrYqmSe5zR97ForgDjq2RtP73b16iJvf1gpfRX48HLGc7giHp62tLd5EQ2x7rTH2vmNPA4sCxxieL99Vxy",
  "key4": "56Bet8UyXDU5n9A4C6z614eDnoNk7gz2Csk9LX8bPqFWQhSqM2MB1RAbgx16jPXFUGNjRGgUVftTUzCKZcPNoPcM",
  "key5": "22DCmZQr1DRycc8LxTQmr2Nk8QCsXmkzMawVMrq5uFY6jdCTHLRb2AFw88T4J4AS4TejQepfQUSYCPdfje7GPJQg",
  "key6": "3oJtdb9hQYS64crRF1d57jcswRjkUwLEPiYaZ86RRsEd7ZwtvDefZBpmzvqrQNwKemVSoEEQgmZ1AUGL6tEMAA41",
  "key7": "5dUES64t5xm4WNs1Nnym88LePZonT1hCbApdL8bH7iquFAwt5CS5g7JLM4LbasZ27J12druM2LYbhPFQMGHe8aDA",
  "key8": "3Y9kGymgpnX5w65R2pWq42BYnEC9HLEHA5ZJFH1mqN4Z48eCncd51JxABJR3m1YUSKuAHC8nhVQSRnZpivEr7ZYP",
  "key9": "34VtV15LTW3fahM4GgNqKfUuouEVwhunFnTB3zPtszYxoEffcGhihd71ZdTBXhv5aqH9n6UsTZPZiNeREfUHkHMm",
  "key10": "2fxGJc6WoACr5h5DemEk27ieqAvxr3VcBY8QYgW73erWkMqQZ5f3hWN8YKo41eYVGGwLdWMU3VFXdJuDzMHBx8bW",
  "key11": "2u962h3htNbHyt2wFyhgWtfxjByFo9ewnbjy6BzgxvFYuuKTeSbYc9CHuRJK1RjFtwH3iHLCQtyXDzX14FPfv7rZ",
  "key12": "3fcGWA3nt33YCBX6NHcKunG9K1TDJy4iMcKBZspCnH6b4KJVxaLH8f7czDbGXoRuGTQ8kTWPZcJsNFf3R8aukN47",
  "key13": "o1Qqx653PTcrvL7MJJF2bw45NjFzbfEoFddgXzu59ikPzTPevqgjykrVi5WcowLC1RNTACMMXAv3grGjqcSabUH",
  "key14": "5V9tB6fLJDcWfdL2bSzeWkqBuSDvEKwrBrYntxR2ruL7JLZ6YEdo6gtxnEEJhkj2zUSYdfUa3j1EHagWYfLPQyWc",
  "key15": "5etf7g2tWDJQRsZbu16LWNd2ujVDfQpGDrdjYvNLTsGWQSsU9xD6WwKPDYKL2Rh5qDyB5Ns3FczAo8cVCkssjFgW",
  "key16": "4kGBcaXaBEYRXqywaBfL4v6h5ExBMHtfpR6xA72S9Dj4Z7rBFb4rPNtQ7DKLvfkpJDrVn7M4oe1zz3efesV4Emet",
  "key17": "3UsTYS3YwkHPWGysGBqXPqMzFQPGc9yvZSNMMtwJrmL7rpQARQ4VVEoM46BLraSvBM9xeBWwCKdDdx1jzCzQtFsX",
  "key18": "5tC9LMSWEXTj7omLZXsj8LmeB8MyGGeuEWaiqRfpqnfTR5jwvSYehYtQozTZTL1dVcxinrnvTX19cDx4D2k3UUPM",
  "key19": "5ayndNYJCnMptTKJQjobanKuxJVebYz3n9D6QAM4H6ZGS1DB8adnE6xKSLBarzmMiZXq7KqKgTHuGHKgJHHtqDik",
  "key20": "9qytfKP9qyUKrkYq6vJcE35PmeBhHmkpapbYuobZmNVAi5uSnsgunLj9HFgUPVvSnhRzaCAvwyBRZb4h9BwJ52T",
  "key21": "hjUkkqFj7RyCRMtdZzR46mfQ8TF9R18pV7BKxAvJifsYsPytwRXqfsVfBUpKQsBJAnGUtZSuvBQV4yD4wyFSqE1",
  "key22": "3zH3KyXr8w2St9VFhC34dBgsdDievEyu5qmb3tiuh1LKrcx9utSw4gPoDGyLY7yxBqS8eFZAVxBXx3NXu1C9x6TZ",
  "key23": "27tF2JA3u4qq3EjTfCoHNBMBL9XYSrkVwDEqkFR57HhcrKDeykFZbVCxkDHnuQUc6sM9MQR4hUjuzxEBNSfviHir",
  "key24": "5j1wXKFCiBi6jzQ1eM5i9gztu7TWx4AZW2zrZ71PY7SFt1J8RUt3xk4ULdcZx2xhS5UJUF7nigSVR8y4hF7MPPLK",
  "key25": "2kYHatsBt4bQ48dGiYwDt9UACv1DKomrn17dPbzFcbph3QaShMGDBPpvJvi9aiZrevuV4LcBkyCpYNNbXqA7NMtV",
  "key26": "2sf8KwN4mguFD5TVA9iEaqJbFv3WP3JriRorhJaxV7eMwENUpuDGyKbsuptDvYmZRFtyeHWn1JZnniCg4XyeNgbz",
  "key27": "3Fw3MnuNFzNZ9ig5oToDSF148kv1vLTVSKTY4axkgKxL4RtgqDPXzr3A8aA62KXyxv1APhhq8gvpRitA7WF17U1a",
  "key28": "d2nhyifrdPsXcdLZTnBzQAi4xZhKjTkqWUqBN8L3vWuSWYQRFcxtgQH3qHiCvUjWdq7KDJR9WJJujK3X9Y7CzMD",
  "key29": "5p3zSH8UffFK4Dqg7xfPd2qi6rgydWkcvaWrWZ5dPM6hCw9dHAgWyjyPCRXhyGAjBbcJdJ4aJBUrycYvSnLkUsQe",
  "key30": "5EvN1vD2zvUe6MQf1p9unhoovUfV5ruYLSrYYY3PfbUuX2rRc5sviDWP6sTQkzKyS634xq7daQWbrL59JRHg2wiy",
  "key31": "5bMpDzTd7BWCmYbStn5TCQ5sTqN5R5F1WXMqyquoZXgQZbnEHxeEiFAutDKXPXjVYJMatZxYR8bBbwSPhK7nepw",
  "key32": "4GYicwbqpKhKZHkKL89GTxKoa9GwarZd3N3wcJ9HATPnLUa9GHsqCcTCNU3ohHwny82SPCt1GX481AwUqcXWxANA",
  "key33": "ekLhhoPZrR68YXv7y2xXbaFMrfMTZ4s2UweRTkLGLgVGHhcEAu1T6ak68d2frcxkmpMFmZ6zkEeG8rBg5FJMaUn",
  "key34": "2Y3HgNktwHegH9QsydVxrzn7V6rDh8XkoXu4XjSp2rginc9JnF8H9DGuRVUb7josekKMTv7EQeRaiaZ1QQpmjtTx",
  "key35": "2jQEkWN2BT7VcR25U2P6WXfy8tLrUfrnZKpqmzfMHUHcMg9fR6YtPxMd3xiivTRWpiM9NaQsvAFqyQZ1H7q6YBrY",
  "key36": "Hp6GQHTFmLTKNKUCZo6vk7kNY8F4EKmXNA7rUZCJtMXKzq5t7VuZeJiQ2YdXmNLaWoPrtDskmAudfsCkrDveWWt",
  "key37": "5Zhjr2hy68A8UzamqcdEafUHoCQHSrZgJbAgvxdDvDgjM67sqEZYqfRYeohuCxp4ZGDxH5tw8Q9TxthyrCVYDepx",
  "key38": "2JgCXRpT5QnJesxaxpHNYtFsHB4H4av9gdYQYyp89RGLyD9y5j3kZfS18BMHJEpumHg2Gti6TQU2oBo175pssYJN",
  "key39": "37jjcVnCD82RnwSdMUheKrPSYCbwmU2VRvjpW4ihGMChKNdAHNRUCK37QvPVsrLBqEpN9sWZYazUUCYzSpYZedTQ",
  "key40": "3SVZtzMbKwSKNMfkQ9Y9SqxguFCkcVNkzUta3V36L7wWDkMR2Y7GaisEVtHXvZHZhghNrfKHKBXr5kS9j1pRqAJ2",
  "key41": "5uNnuUzkTMtuw8NxZFFhon625wi2xt8vKsN1GViZJw4zheafdMraW2zz8wsA2fbYhF1pP9cM6qmsi9vx7zrXhgfq",
  "key42": "3kfof2YggF58RG8gKiHwqcLQUmjdpwfNTjLSj16gGbRj5hdm6h1xt1p4MyGoxZoensqypQMRKj8LNvaVVM2BegdD",
  "key43": "3oQLSgEwnYwZefSoSkB7bnZx6mpfbhQQmZXuGS1hmM3igZheU1W7xhkvgVWVWaAXH46hqvSjWrmLGkYrm7JN3xgf",
  "key44": "2KunwveqWNurqWTgq3Jzo71b4XdD3buVc5Y4rwKrH7nYqjLCgfaVYhRSAko38p9GxVMHnMgWt1zXn3sMjtMqoisK",
  "key45": "62a23KF7oJ8H2PwgQV2DCgKamXnB5ahphS4VYKTaKAaMBVN1EtSF8zUXVwnJ12dQ8FJKd9qTzEYdaY6ZwyohDyvK",
  "key46": "2GQ3xSCVnQ9u9GkEAHMe3oE1LaiWH5STQ1iNahrEvbA8Nox3ErPdmuuQgGowafGV8b5GEkKZNCtR1xnXBnCJcN6s",
  "key47": "2e7GuzXGuvqe1MembFJk73EZZMZ2DpYa3Ro1bweew67BhHu76piA7nJoUe896rv5Th1WwaEu3q5D79JBBvaaJydS",
  "key48": "2wxdwjr1LKcHofTLfGkqD8wKe9mfDqahYE44WePctw8YdgvHywvnm6qxCBaWhQscgjimFEhQMGzq5bSXvHdP1jNs"
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
