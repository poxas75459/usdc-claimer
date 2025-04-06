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
    "2WWekA6jikKfCMwqFejVEZKTL9Z1HZTRzh7aiNYSUcgTi3pPghzr8Uvo2M2S47NR2pJwJDeK84jZaAKnfKUFZPbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ye3TGi6VW9rP36GBxtYnWXrH1YKqYtpNnM2xZhCUrPQGs6KJJWtxVp3CrcSq3fT1BYNampQ4bvSmHi5k6n24Yiy",
  "key1": "3rcna5WhQVTmDq7X5LtV89pLKLipJPYtzTPhdbHqmpPQGqJT74XUsjafKaa4A7m15i43hVbmJ84JQ4yN5CuaUvBg",
  "key2": "43Z6rERijfmBcSTEcPw5RkQXTSqJVpiEg8YQzPkcf3s8LRaSi2769YXzF2kZNbdXLbmkevZhX7ANauDsyNPigopm",
  "key3": "2zxAXKbpUmA5u2j9jrepeaEdLsEcddpUNjGR2nw3GvVVcPUYyyyJsGFpP2Vvu6UBaZfxiqNXNjNEHXs3cifpPTsm",
  "key4": "ULUyskKhpNqDUonKYPQbSPZfpY2AStBVmGwRmRFQ16hmfeb4N8veNGYEp1XeikikMXvWm4MojS1ZA8YfZwYhFiA",
  "key5": "4arPDfLYcUJjk2GrVzTXMRBouNzCaes32oPkjvzLfsi2PHp15Yf1tZ9QgmoDydAqJKYRHTvqRrXWc92kNdbs1gjb",
  "key6": "3MDstA974cxSNo9HEgpUkfnSa51kR4xkgRwhJaac8YHufvj9TfmkjpsJbGkqwJYyQyF5a93f1HiNGb4jx8CbxpJW",
  "key7": "HW7RTpXe5WVGKze8oHuXsyKQDb2vwFBf4LfPYTZdCsJRZXC4myBEwzkDSGStNKweSGV2yL8jZqiPi2TU1N559tA",
  "key8": "2HD8iSWTHh4FKecJ7xRbxxudvJtCFxwF76z1MA8nnbAb6pMMkuYEr74eNyZ3aTWguWuxMnxJaP8VsbzvswmZysde",
  "key9": "4EdyfGtn34x6dstXHETEP1JrtwEmejYAS8STzTYt14LRNqGqMrhH9R92vuHcJMFVUrAM41suRjLUFRizhPhkKPZB",
  "key10": "3woeYe711Aycjzka5pp83QtgjqvzxpvjfSroUazgh6Nhdo98zgi4jvt93pgaNujijQpB2Cm9Jsd2kKv3wnM3yNAJ",
  "key11": "3RCQtWjJegB78c2zziv16uBw1PBnHedURES6d6qCUKzoqvetdCDqr2yNzgKnC6YaJDc2585JGTYAdY3Ju2ssWpWd",
  "key12": "D16DuAdKjEEcNRQzRDA18yU4qNi8EHMBrfsAtGDrnpvnhjkd7PGHT9YHqJzM2S6tCQ8aX98FTBASBB7RosWXWFg",
  "key13": "3B6DVwAZ6oG2q4ejWBASzkjZMLsrJCkth4g6bNMQaUCQvnx6vitJZ6nXTH26ReetAumtPyQXH82i72UW5KHkd1yc",
  "key14": "45GpFDHKGiXW6D2PSMGubQi7suHp2XCSXXpdHdsz6VeTM9NBtRnjVHXjjdriBbFrrZV4zAbLvLZBrjSK3j4mbK2R",
  "key15": "3HENt7B94DxL1pNezaWs8oBRTJBeZUJoEst82xuygQ87cFUGhUeNsCDLGjUeahM2GnPTMejVXGSQaNmUE6hpi6Ad",
  "key16": "3wBAZzdqNNZLFbrtjqh1uS92rhZkY9aLnk6MRYDqGrszCanrr9K7WPGG5Dsd4KQa4591s5FMrja1wLRxHnSVqMrs",
  "key17": "3HgjFp2kUqwBcDP92jCNSgaqVmrKbVHSABm8Cu7YbqfELuBkjMmrGv98VyqTTQPYjbiYkVbinF49hLLQQsDNXdN4",
  "key18": "2dddMbuGWLsHPbhLDzM2YqfdknjPhe1m7U947d3q8fVu1XTm8fWuJAEJudHBKtvPoT659sjuHkzSHuuXekmN8hQ1",
  "key19": "3mAiTSm76VB517WJDCMHv7rHoRZw9tG9FmACmSe247L32TtSh4B7iNkowtox2ZJX7iRZicRB6g41eMsSRRMrz7Ez",
  "key20": "3wxDN1MEihASf3xJhBQvnTVDcL2xdqLnQUQPN6hmbE9rnYvYFEfCZRkU1J2r2BZ1eGd5ab2KxntgpbpeS6XQcrUZ",
  "key21": "PUuArwGP3tV8C9tNFShTUj6N3UuzNQNhuFAR56VxA8n8RnqF3nCYZXDs1Cj6YnGcayF6MDRvDrdzJYUnA3caD69",
  "key22": "47p8YRXNjvwWmBkoYGVdws4Spxg5UmT1uMTnDMJnCmJPynBfN7oSmK8LzAp85a65cMvCkxmXvpfktiq67ZQ9U31k",
  "key23": "3chyGxCzX89P1jEXPDG1rLKDjSBBdmhsesx8zQm3dn1U5gQgj72yWD33KyExQYgqm46TWkVsyYTDqdTpBadnoVA9",
  "key24": "3SDaSUVSyEwstKUWYEu3iYyh5Ce7LxfmMPrpSj2kaoQkSASj3BNfkqs5i5yfidrAU4rcJX3v3NHzWe2S1qcvG4nG",
  "key25": "3kMaDP1gkb2dyCUEg63MyWycbJUYpcq257eTdGq2kZQxwPKTSuAzrJ9DDAzuKjouxusJdC8HhqWKMCjEYHrjZEib",
  "key26": "46YWK9vBcwHFPn5gU7WcqPD8Hv7UngyVo3sjmq8W1VyvQ5KDxzB1KY3DdbyBrJGync6DJdBqKLNhnqyzidex6dA8",
  "key27": "2b7en6Hu5RxhvGp3dBLYTjspZ2PtHnjyXaKaRx8U1prSyqX7AFa5T43UAEL698uhzwhnjpzyYpwucidJRziqksB6",
  "key28": "4B6xWMx995WRJpqLWVVsyJQ5asJt7wiLzUuwQcwpdazeR7MoPMXyZRTE97vJZ8noKP5WojtUTwVANJN84zvTWQoA",
  "key29": "3oR5bs57FUj6QTMnUnZv7LNLddfcaUEGdXG2QRKnBcrSKx8XtdAieLTf8pj3ZtYEucYUf2LSMeqWJHxaBdtv5Gc2",
  "key30": "4fRGwSbKcdyRBS39PHyGPvVevzwrWWkqumBKzZsUvmQvRke8wMDNzFt6gd3SfqBPMNwzSa9KFiGv7dr6SvAmnkHZ",
  "key31": "4qQ1asfZEr56goHQf3gHEKuCK6NyTAEFb6WiRbhek9KwJRtKskwkFisUWo5sue4tvJcK2SchDTNJ6Jz1VtgAXyHY",
  "key32": "PWuT7GvECdtf1NsBgcMGLzhqSU2Bp7Faq8wt7pbM2uxr2vr7Rq2TuzvJPfTg4LEZZfACK6LXam2HRUUvEfT5M87",
  "key33": "S8anHQfQmzHELxDo5YXjJ1GyTpWf8oFPiKrfuktWHfFENT5iQ7FDxMo5khe9NM9pvDyzoTjJEzv6mbiJF1LWwzJ",
  "key34": "4AaDsuUHbjidn2P5MdZuC7t2oP3SJjHjNvTnr4qctCAqePTb425qWWA9kYJvU9P2HFs4ARKDzPriTjjTQCsSMVKs",
  "key35": "5Qia6rxSUPgpzvB4mM6yuPdZJzn8oiyCT6rJzwxauYyneeQqKe5nHquE5yixFhHQxQThM3QMLArTedEHNsPvzL5b",
  "key36": "4SpFyYU9LFnZKXKLT5AuqAyobEdGTiffGG9kNLPksDVu2XzWiwdSCL95ZChKJq4ULYW4DTdoFU4Cv9g1XWRFhfed",
  "key37": "2izRtQK9KytYKioVfeLiK9mF5cq4KsZA6fPn1at4ZN59vKdrEYxUJsNNGB6c5XiMbZprERvtKQmvtVd96ZzsD75s",
  "key38": "4GffqoH4Em6KXQ4YjWK9gdnxYCP29KNKqE8KsM9Z1gJkY5FcdwgCwryxa2Cn8W5t5NvQCrMnMNgWyCADG7wgu9Fe",
  "key39": "5QsSyAn8naaSSHMAMA7sk89GtnkS3Bhe8ZtVHq3s7iCqZJ9B4wMQhC56KPtWbNTbCJ36KfQ7tAgunWf1SwXRpoM4",
  "key40": "3LDb89cVR8mdAUMizgzcBGQ9z6vLQ76Kst86aKNDQKgizFAmWJC5oKKCMdN8CWu5oYQhSXHvA9Gravn2eZLDnP5S",
  "key41": "FMnTLtb5iHSBK9oG6S6CWoZLVNEpbUW4BWCHgtnJEDC6v1ikVabKgTAW43KmmXKMK8VafUoLvbyhqcG4YcUCzqq",
  "key42": "3Qu24wCbzom1KFYWhyohwDBNPoksvx7RWB6SLUpMXuhf557gghVCz4YM9FdmtuhTEkch64C499EjEybCKUXsbcav",
  "key43": "n8MXeMDn5QWnHetL5anY1GeErkGEvYcQygHbQ9vf7DZYxJ7Fuv7qXi8yJ9Gm8HR8aVEKcdV6NsHYARGgnyoAUTW",
  "key44": "2vwJ5aewvHFoVokfZ35vKfE9psfbS8KMY184nGSCZWgE4d12jU6YowBU3wqcX9KQz6JPmHCMd6pbmNMXvGrnSbt8"
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
