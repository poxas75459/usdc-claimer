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
    "5CQ3UBqBusv3kcQH65pXtLbAhcyJytusSXRJf6E2gQrfjKaDHZqWArpFCoR79Bzt89evVtaKFafbsZHWNtJPQtE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYosXQ418Ygxa9UJR5cC2L3BDhvY4mYhtnpqpL6WA3hLzop1A5Wt1V787uuboa8MzDHzcBjoXWY8rLWHpgniqYd",
  "key1": "35rxgiJAWxNsG6ULBVr8TDkjejaCvxg7v2GTcdKHTdE6cU3RfA42ExxXeHDEVxcWvdoNtucScvBpd94QRtNZy7rd",
  "key2": "4F9qRs9bBugmDVD4JzD8gpsVveZtkrYkNjUWudgfoA7yRekPHfZbmVKb6YVTAiBfeqxSvhwS4XsCP1tzHmd7Sh9E",
  "key3": "5XzZW7aaxFdUuwmgAbbhsTwDyt8mE73J5fvQ63mjSQ9Uskaefx6vM7AVUroSp8cmK4ZxNNdAUteXCHXFvVk6LF1Z",
  "key4": "3tFDKAJ4HiZGDkSnr892DnaofKVWYeV9YnfD7VmVwcSYxoa3B7k4AFBosoZ2yuLJ5z2Zrju7iCXe2uNfn3UD4DWD",
  "key5": "4shmF2VijhMfyjRPCKJYByFuabfn7VbdVxpBBWjvD5dDLpwNmTB4RBP5Bz34XAiooyaonc9qZVbmU3xmckcVs8Pr",
  "key6": "5LS7qwNtPExnLRDkJoUXKsvfortpoJbqBTBBPxC4s2wtEBnrDnXznkEnecSjhyLi3R54C67nykPATrsnnKeG9FNm",
  "key7": "4q88LNQ5jCJ3qo62CueszNxG2fkqkeALvyAkYwZnVEDekQtBwkJHU6BhLTevQv1MQnGaqqE8iFQ4PdgqRYwmh7Lk",
  "key8": "35M6XA6rvDMxcCQPiA6ZKkeKQmhFWNh8gZNYsg7RcyQZUjAwHmK9qyPDvLeYZk6x1riQ3K5YMFgzChwGuja3S871",
  "key9": "4ALrcekpzhEihzuSjgyXkYay9S8TQoXgbWR6jn6tpp3Q6cAByb6q3cmi2oNMD8qX1nnBPjVr5dTwFkYBqVM5mXo1",
  "key10": "65ffBY1NGvaCr7G6bKvWYqHqv79Pe2ucAzMmx2w8pX5Lnuv5jqBK7fVtjdYxQ4S5AeYc6P34AiWfS3q5LNHeLNBu",
  "key11": "4QX31rmdt6EaTU4Aoee8a57BynNV6dH1a5Pxjvgp1KPrH9EmXX75gujaNe8Q5vTK85D94t9NdqJ5BTWfLZbQ9bLq",
  "key12": "4qcv5xLUSbeviD9J7LaDytiJrBHSrP2mDf6h9N6hcuKxzBUW77pzBvyZpKiZbQ7pafbAsTDYYwqxBxuydBrJzEQv",
  "key13": "4duRnY8CuzAN7Hp3icbrqW6UW1zG8a31BaJGTvHYKGuZqhAP5NmP6VwztfgDyEBrU1cZRWYFHgTmm71VNoWBbVYQ",
  "key14": "5ALdcqLrjNEnU14yQ5ZkQ92gjWA8XGD1suN3HWq6nhvo76RQwSsciZLEuaWRWmWUV9L4KbuMh7L3DJYQYzHZ4ePy",
  "key15": "3ZsWS8GRsTY7rVfM3JLnaDnvahQEUbFM1ZjvC3N47xNpUpQF1joqNzWawtJ1zpxL1ohPgLNfaE8F26jad8PVA9Ys",
  "key16": "4PfArnEsn5QxWnX2nDHrsMZGyvvpHoMiJhX61RELUSFUKuL5hrwe1ysjZX4HZJUCCVS5ZeEejnVvyT64Ekr3HmEN",
  "key17": "59Xz9GbzA431XhFmsancPeWKteY129KfDwvw9xcdCTyJ5U7C9eKiYs5Vy1MnJ7wPpVPFPQCUhzbaEM8HaohoVgZV",
  "key18": "3f1Bcm3sFsC6VrmGE22oY9uR7JysnsaNpW3pvR3KHGNkt5EDTpAWWtK9A33dKZSuSgaJLZTAypTiKr95JkF4TPtB",
  "key19": "2gqeLnbbXHoym2MgbfijRHQrWwd217h1VvL4QDNzD86ckkdpXtzwXf7EFhP6ar1bnUELyTnNnobVYLsX3TdVFW66",
  "key20": "tZZUfmTnFf3jw2VRNBhgvrirYXyvgyWCnyZ3UdmbHyiiPc21PvrGqMt4pLU1tHEQpJQAHcZBuoBtkAKdmhJ8dxo",
  "key21": "u5qthBN23oik3oV9KBpwsHHPaNafLqNibaivra8etKSTBXysg2VPAALPEuZ17JfYtRWExzAnDREY74GgQfqLx12",
  "key22": "4am3j2X1im38u5TH1CZaT9ezxcW3tLzFV1wREP3EL7TM9hKmD6hys7sMuJZgUWdN3E6mR3iKRUVhMr5R26PnHbeE",
  "key23": "5a67dNmVAdnFAxnrgiSUAwWCVT3CKQ5HSciwJbNw7RskJdBynrC6PyEQdbydEoHhUqsZHSBq1rxTjg5po5Sd9hSz",
  "key24": "2s38ymjSTVfnk1RTbQq31bDogmGbudtugomjVvg9RtogkV2aLtkZzeyYeWtK8z7qgEjDRmZ1GUXRGqsUWfsFTxt1",
  "key25": "3CzzAFAx2XCr1tpfywBLwJiRfwTDuxnW7f8csHH9ifPzaNkYMQuQHBcLDuetgYXnvUuKqd1ykwRNjWQRJhHQjJrH",
  "key26": "2MK2xffdQsPBT1GBkRvybJD5WRnYwrPJqi9Sv7Tsui3LHSJjEtz1CMdWgBoTc6ejcLiN2aZyTJJZZX5dhKsWVS41",
  "key27": "52jPXk3wTHJMVLArkHv3Yt95y7wjTgNC4iiuvhp4nRSZidaV85auytL6ndK41ohVDeEekuDjuoL1fjwhN1LBNFkm",
  "key28": "26278rr7QYsj7mCF8uxsSCbvhnJAm6RwaWKD3XCP7yD5xzqULq8Hdmt9fxcHwsjeMZpaykSPGrmEXNnUVukyZDDe",
  "key29": "4L1w4x8GsH8pv3BbkLWbTuVkrTNmmf9K4X5xy3pa6VaKKY1JVQ27DaXi9M1bnN31stGPzBQb5hCoRTHSxijaZBj4",
  "key30": "2sQrW9JojR389GrPzmtuv8XwwNy7xUUfXWHEsNkyYHnrjHZfk1aMNvJFcEWX167feiYMMhS62JBD319uRoRJVCbh",
  "key31": "usYbKCKdbMRDtdDBZN7h3K26JpDZHYA7yuzn3eLyMyawHcqVBkyxRiWyb8o9AUbMahstaogJNjSah7V18bvjXni",
  "key32": "4Y8zMYa1tYVQ6g8Whqxf7isKVDmNH4ukReg9UugTYUqHK5u211KpHgYPx5j4qCi2UzhvpM9f9LKgQtEeiRkkdK9v",
  "key33": "4sbrUTgPqhtkPmwuEWSmrX9bYN8vgAc64zzMjwBYHqeDQyrCM4wYfgNHkUGYAhjRdyMHGmA8VKDEpstb2Ve8td2i",
  "key34": "3suCoK5BLAGaAVG3ahDgLDk4aHgdkQoVUsCjudYmdbqkYcp53Zovs17fxz2qpEzDHoCy7EvjWqXtFKaDo8W8b86G",
  "key35": "3TBbzzdpXHctiXn87ohKTo4BxrG5671PCWNUTYyNvkpHp9FAMJ66Pa4GLDCZgGCSnEiLvpeGh7HGZbuq1DxEBK4M",
  "key36": "3Rhc6bzrM4pu7gmuFZQu3hcLR14NfGZ6qu5dixqdRqNuVfQD3es6izhbe9YrdZzxp9BrfoBWFkqa5zkWJEx3PdWr",
  "key37": "M47MxeHyC7VTPWVR16MEsVSqzHEEuGuxF6cDGzVpAGwRUuZJyi6boVDCqs3tyAgqqbJafhXshhfRY85Tr9qDVut",
  "key38": "48T2Zxe9PXkCEbeq6urzbXdkMeewCr1PmujFFtxStGMVArvCuQNYxHTH5Yis58QEM6rcnNq6jHtXrS7cbBJTVmGp",
  "key39": "4QZTvKx8gbw5ADFUxnunSSsz4NAg8KCCBd25YC3o7AgatGPJAUeUCCbbxw3C7N3fsDR98rNfzvB7nXDT3kMccHYN",
  "key40": "43e2DQtYWEmQFe4gN21vWfTyNtEfg7tTnvKkaTqjV8uMQuibL4X1gCtZ69oX9RyaL6WwMR4N9xq8mBic6wrDEDhq",
  "key41": "3SMudNfxVRPZhWbW7KAg3a7r1tK5zJ3ckvQbb5hK6ebR32ejrDRFupbykv9MZqDqFMzfojWuz3F92XX3fsyyaNnR",
  "key42": "2NT5Xrg98CicWa45KVUTDQxFsoKLm2b1CFotQgbSwTkmjzU1W7DnTxrYRb1mUgsK3emWWWE6dRGZDb8j1iwe94cN"
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
