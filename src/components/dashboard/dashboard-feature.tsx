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
    "4nxR75k1U7Zap8Enbq97ZVAFrEkbe6DHDicunffKBBWwPZ8UnGFaq2xHprCmtoxG15gSpSBvEhXhsrVwyekRTNae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPmcrJymCAEoaMQJRuk4JVJ9NDfzU1jmGJSHwuR5BWHNR8NpZGf3pXVaw5XfUeaVFe2KKwWdcK8ypGZXzhsQW1H",
  "key1": "347UcxLVv29zdnDVmEKEhDjKV4AQRvxsXC4AhxykfGAyu634mn2PGnJXw8jjjHshjgPUQDWwqzsfFunoDKJGy2aj",
  "key2": "2upgMyLtngiq3mM6s1cGQAQmTVUgre7LbdoNtJaaxX3oFmHmRDEiMjfNQ6kn3UQvvJSnR6kRbJQ3ucHcUepBhLpo",
  "key3": "2Gbj9oLwguyFUDiFK5EDzKwPDkLzRUQADjd6uhENFbCSTZ1hV41vf51nkJDZkjsq4YLn7HS6me58PCKVZZPPPQwx",
  "key4": "4vPaEGtvXvbGyEAqUWzPpzJ2bw7bg1xTr7CN1VudZvWcryVyMSA8yvdH8pfhro8afKYX4iP8oWDTXiMemHHXB77b",
  "key5": "2xDwzohdD195KHgKwExHoc715kXt4eHRgYjnUzmjMeywC8wHwXkzqX15uk7Z46bcJjLnP9ES7zwf8kBQHk7ESe4P",
  "key6": "5TmG84CQQs6CU6ddWVkjo99Kf8UbbNrBysWNYhpQ1FzWojG7P8kGpDgkd7PdMvMShpbY9HTkH8A9Gv6KfhKyn8zr",
  "key7": "5jcGxwRRjkjTZfrLevw3FT5eh5kQqeXnNyi83xFfTLHj9e4ESivS721geTZBdNkLZyBbUmZk9y6zoMZxRUbS89ev",
  "key8": "3LUcqMR6YejVQURscB4fuvSJedxJwntvEhxquczDfrH3iaGFogmDdi1q3MY6NGD7MCr9EPYyisUNyyYXKRywDt5W",
  "key9": "39VmpnCNcxXVWLHkMY7ujhWfE1kvYE519p2GmaoNhYpKjoXdEcWPp6u9FudKJM9Aqmu4ouXUmyhddMhsSmzZLzF2",
  "key10": "4fZVKeJfeUDssgYN22dzAmyK4ubVBoyLp7DTvQjMozT6XjnUAgv9cU3WYmenV4Cqy4aHEerGp7H7UpFTNe3H9R4V",
  "key11": "29pg5rFpEi1PoGaBPCrnSQLT7BZUFes3MH4vMDeivHFtGu6qEdcDfQjLAPJqPjSL4wv3HMSAb8CU2zbKEuDA6mxJ",
  "key12": "5kzLtAcw4iUkm3btZq9CaE4rsQCogMgoSf4BsKwaGfrrKAbX3qwCDsEUr6BsevYfwr9axDvzxBeiec2pFvaam4hV",
  "key13": "86H6LqfWNdKTc3xwqBaLbYouUVR839TFwkNZSqscSkQEL1hvhFiMJHyYRNLqAaKnDk5GK8nbfg6nYrcrcaZMSbW",
  "key14": "3avFCAxUimC23vHqnc1L2eRexGCM873mtZCNq7CwadGVRSUKV6xNbHfVaCkrVMf6N7D28pXskAXL3rD9yX7vhHvX",
  "key15": "cRkNhZGjyiwkDPN6ofheWHzVLNVPVjSWhNz31e7nnMeP69kjb32KeZMwDAf8udjm7jwcKAGEjA8NwQdm9sfuJcg",
  "key16": "2Swr6VvzKf5y1Sv2Rw76xYBnwzgekbgcCUvZe6CsKE8xkt94jfCwcVMTV6TCMSHuLrRyk5nc4Sm4jkW8nnKyXnzX",
  "key17": "4FmZ1mLNDLPigQhuwt3sE6qsDt1QAr9H7PrEMU66jxZbDdkuCzP6Rkc4UZmPAGbkk2KP6PFQPVQEmf1rbkvwpWTa",
  "key18": "4ukBDM8J4SmPrFqqmRcLsfg6o9tWt4bR1mc7HKDFjhLg42RovJfqhUjp3vGxUaCBS7z88G5d5xhVRMJeSVp41pV9",
  "key19": "dch2gU7FDPh5FawSwvqFa53GcqqJ9RPA8yuF9Fhc48c8AvLBfaizup56dFakz8u8oQdryZUT2x4w1y3t2fkqPCg",
  "key20": "bmQTvW55zhWxukWXGGGPEXGihPhXuT8JV74Bt9iXJbRvbNxkyTB4W6HPMReoZj3HeKQjJVZxWgs4aVZM7prFY3a",
  "key21": "46TP9yGYRgxBAt4cSE4zmgJcgHzGg8rdunRZKBnVsE3sU1rtgvfEphhFAod2qjkH76NSHt9u7vRmLerGLkujR1Gi",
  "key22": "5Y2z2U25374ZBacnSauhHUuoCCX1GUQRbJyt9YntmGv3HTNFDD5o6MzMjL4aaJxBf9Dxbmm9qJUZ68ki9QSp8X7q",
  "key23": "4UUk4axmpB4XrxBdqqwv2UXWFQz664PvfXbbtn6SEzy26QG5YsXhLNRica9JDeg8QCs2FoKymCVhyFhbBJoi2tr5",
  "key24": "WRjq6mCumZBcj6S6nrgGhXSFw3usLB5HJUqR75KWE7MrX6cTp6T6zUD3d7JCyWmXLPzfbxvuL3nzksW65h9r4o4",
  "key25": "5afEeVQPcJKA5eVT1ynFe7D69K22YMDddkTB9yX3RDDcTffiF5GHEH7rKRAWeifn3NhDTWGHv5Mb3hbSZiVCvMDT",
  "key26": "48bdGmmzipw6HnuRGV2JaVdGVzYPzaNdVzF4x3pMuxpUNv5n8csejuW565BiDZzBU5d7ouZARdQA3CVK7AnJA31w",
  "key27": "5Q8Rj65f2i321yHUgUBjZoFF4tGM6MpX9S1owjfiupNwuV4vKQY7pdXBvywdRUkBo7ynZUU9k125n7PDi2GWrptk",
  "key28": "3vczGCxPgWd7z4fn1t94sjvJbR4z2hTaEysvTWuMSZjbs1YZ2pgXmbP4dY9DFW1qPM9oH7vtAZJ4kRVmZNWk5nef",
  "key29": "3NDVo5bLKR8my8d9P3KnUyVfhBg2kMaUxQxjd5VYtVMWLSriHUZ3Fvz7oA1rUA57wPHrupmReBqDkiDAiJbEQB8d",
  "key30": "59Q72tCciKQmqYdC4uS4BnJg4ZuaY51GHJwnLtnRRdT74r28DGXmqCgy6G2SHpzo5PrE9wnPsptDJddURTCx8eLQ",
  "key31": "jm8qm5YYByS5vmhsw7XekXNsahV3imu8T9Aw35iFNFciWm3WkQVbJkVMwjYqw7x4jPBFEWmvKkq1YDSuok6p9bk",
  "key32": "2ie5reNX8YkAPzjwEwhJnM2owWCYVS17woW67Wj4H3bijQgSqsXVH7JZi2pE2ehVkrSGsgemaeW8YzhrpzJ7Xw3p",
  "key33": "3donqDq58mxGRMEgQW8zfFhkxHwDaKrR3iXXHAm3wsJTPCQ66q9zjUVupJQZQEgayX7FfK3Sp89dZwekJcKmrCWH",
  "key34": "32WoH8FfDWQt5oYT4qV8gMXvCT4ZKf6NhA56fsBQ1DiM4qKuyE3wuPGNX9nggzv2xnf14zpW1Rk2Et7EW7Hmfh9p",
  "key35": "q64KNNfLSEtMRAY4spXA8He9esAqWsMF8BzmQEgMyuNGurNLcJxdMk8ezn47j8e1iVmDZaEQhTQRhHrQngh3zXy",
  "key36": "2bhx3Y2Cobi6TterAKJgLPWfu1hTk2RevKngXP14YTPwRQ47J1sjfkvzSD5UJGgvocqPG4iGBxa5vmVqWviC7bM1",
  "key37": "2YzDZ5DQ4UdxuVzw7ELqr1E6aTesEQHPiihxVT45JMyzbBAB7RjC166MchyydmEYrZz6gczLY5v72or7uUYex2jj",
  "key38": "3pha7v93eeQXyErUM6KRb9xmXFH5QQz82VdQcFeqxBxEFfLGho4kRWyAfXxM9ZgRj15fNYzGmBuPFSQSMKhDcpsu",
  "key39": "5h7HTJJ6ucvGs8cLSiYKKtjyToDkvVpgZpRsEtXaX8vAN5z8zzC6zYQmtbHud3dpytDRDD9vdrGLyW2iYpYWwv1t",
  "key40": "5wJqcE3qvjcN75QMWm91a4WfnzRmepYo8SF6PMzmtkdCJ2dY9hemo1arHHynyNW24fAjegJY1b5sKRnXNARxR2Ee",
  "key41": "apVUUc3DD91MMc9XWXsZn384eMmr9gpHivtQ73f6YVaAZcSgyGK88MYBBQpsygpfzSL8DRyjos2HLP3tZMHY12i",
  "key42": "NuYgcYTck84Nv2PR1mKSq7HV2FfexuWqokU5sECx8GBXQUiaWkWXZitDetMUU39ebzX8erqzCwWw3xPziYHHsaV",
  "key43": "4hT51ubHiQaMyT8p8zZf6HpymhiQTR7kfHL9oSCDHRto9u8FRs6mhQY2EbNUhjDNnNipmiq9SfRVoCCRa1Z4ayCx",
  "key44": "2w1qTLWz8fmF1SwWbwwyeNKXoaAyEk9GGsWeB6SpyMFRZt8WYri8AYJRLanfxR9ZqKCAejedgHi3mFMFMTFi2SpK",
  "key45": "B5vYR7oEDw9y6B224Lu3cQ87pY9BSMsyV8A8YZKoxZGYmktPdj9ectS6168s4AjfQvzYwTaDrnixQTL9mn8XQ9S",
  "key46": "5MdcidVUcBsUznXDbgd4tPykjxJdFhbnADXoxWNcQeRpDBaEi1y2nb3ysX6QsorsEiPHVDJJpLA4PTGaJ1tuu4LY",
  "key47": "VZUPA3gU8HJwrnSMWhXsUzd5FFGuDj5GyzA9HmV6qSWGTfQK2eNVwrA3S3QAzN2ZS8fRurkc8EPTe5ArZ3ytqhJ",
  "key48": "4GoRXgyWzGJ7fmfJxvjVViKRbzmudnyccPxPuztw1iR7csXpYjDCV3mQLzixC5TqF5NLUtxu7brRaoj2CuhdnTMg"
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
