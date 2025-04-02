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
    "3majJy2aYsKUcMyKnL89oQZsX8d1kpP59skfjC6sRRg7frEJi29ceeaQpUWSaDjFFVuymqgtTqxSbimTiaF2i1X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2218MBjFnHNLwhm8dzhBDwPTjX2HjdRvwAf25FeSKwk26dLHZs3ug15YNvSXUq2cboMt3SnsMDcY9iJRrbCuXnuG",
  "key1": "65aZrQHwxFiNGT45CKHGmbDJbb5uiFAXNGbMVtFYdZkeBCQP2HDXpEhrV7t66GK1QriHuRMimuTBbvLFk8dyEvWK",
  "key2": "3dN1thdaWyHTXVUXYFt7h9gg6FfBB3WjKMsDfYiCicNt59S25oAd1jhofVLZk3wewqoZhxVGu2mg8byyNifZttXm",
  "key3": "2yn4hEiZwmE9ZmRczpNwe4Kn6EfZLBGX2hgB5J3PSyxNL3tDGsC5XjXMmCAckFU19uwHcXrqq2pTi2ohMfacvbXu",
  "key4": "3GLnjrXvqkS6rfdxU7LmrUNYE2FUXcZhAsfKQNqaMGXrQeaZ9SfmxioLxUJm3BzhZjALFAH7LB63v9YDBYkTu6rp",
  "key5": "24hQUir58S53Qdc7hZgMeZr5WytC5FKQzHuD3ZNTs39XAH7mRfsfmakkG91gLcinvXqPqACjJ2jZEkgX8fsuiXTX",
  "key6": "4gYjZfz1oKBCuJaZPRRquEz3h2vYVdmduvu8h2BqCVCNNU5FXdVrCZAg1dcy43C51YpLPjyMUHytgH8Ad7uxXdC9",
  "key7": "vNdMkepzv9WhSr5QTtE1dMRNyz2DrTohojWjnCzpvdQvLEDUYCNX2ApJLVAXrHRBU7pfo2hPRPBAMeDuZSC4Urr",
  "key8": "3YaBQ6FL88oFi3tni8YpGV5WeF7FBhte6NjMYxU5RKhnC6mG9yopEQcbTuwzfRW3UEBkVtyGdYwiKvwwvTKFrYxw",
  "key9": "3AN7QmiaGi6hnxi32JShPTXaS1GecX8SNLuqrbJBL15TqMZsVJVBNfskFXagEK3pnjqSxtjagf5AGVPJmjLVFr3F",
  "key10": "2tyUK6Yjk3LN4TCd4zY4XoXTstLzKCwh2GzmnAZWLVaxciZySoKH9a2btRzZF3dsFFuoDv6BhpQH98G71AmJV4QL",
  "key11": "4phtqpmUsFSZywdyxL1KiGxBisizgh2fF5TRtqQwEMYZASioaCCBh5BQtRaWJqdLwnZbsTFKeNcd3bkTAbNzBWyy",
  "key12": "67PvPHStMeqGpufmGmGK9U9dDBHnTjoZKXgDX51GR3vopqE8uFHdKvtRqjFJE8Ba3hb1kLJUZuorKSq6Z9mfU1YA",
  "key13": "3cPoifUZeqmLjTXgBRtgZeaKHqbzKr6imrHXXVP9cxxXxvuodheiYb84So6yWEaemqKAPtEEiPoPaNBig2GRQj5M",
  "key14": "5twuYK6wRmpnsS82BzZZZuGWXUvhaQpxduDBSq5oFnqVE32YkTfkonqa58iKtNekX5dWqW9HBscD4ToPd1G792YK",
  "key15": "5deJr4o4GDhgTAGYq9nmSQjz66SbpdDKcCgyn1GDfKZVpd6okqQLqecSvgh21V6nG91eaXpVDYzsvAh9fURC6atN",
  "key16": "557sHFRkN5Y4JhNzaVAJzutwFMjkV6Db1STq556Teo4KpHqKhWr88L8mF5UDE7XzYKqrctFNB9nk9b9njS9MKTmh",
  "key17": "3eN9Gf5bJWFLzDYAeZSZUPa3ygzj18bjKAnbjQC8FuD87qaTZZmex9jW5XzM3Tx5pmjRH2sH7bHPbpCh69cCDFuf",
  "key18": "2utcfX9Qi4EJz4gqRbM7S5tJHejS2UrGzsQDmFc7kszfTH3chbqsbF6E8evgvLNHBKZ9QgN1ZJZ7gHjv815WDjhZ",
  "key19": "4Ch4ybHGnKJ1x4MgBAaPbfsDMr7tfYfiYYKpcLwn1LPH71WA81E65R1GKsKwuEvNBdaGasxM6y5SAGQn6MPpifHo",
  "key20": "4Z8jnXmseMJSHWydQmra1owYWibEDBmTKbjLLcVeVt8EYQWdTMSCdgu5Q5723Tb2NQR6h17AUPPi7V7jeiP8wNr8",
  "key21": "uQRMSLFQ9cEWwkXpxKSBWpcycDm4ympFmBnksHcyXzbyR4sjzjrzooRSk18q4BVLBt672AAaYttW97rEbbhBPsZ",
  "key22": "2XRotUoviCpSWpM7s9TTeE5WNKj1N3BiraNMUQjkhoJmWbWMChHm5S1VhWVCUFf88PZrsg94NeSNMtSrwuzsi4kn",
  "key23": "5dbGzjwuRcbtjn8A4dLdwBoi92e5wkvyhbX6xfbXFYYXoFCZkKYf44vS7snkLTwNnRft67xgrRsgxjLAnE1rxqrc",
  "key24": "2NqTLeZ1JDHRuRTriPUbn9U5U8mQ3tQiCxKdP865NLFbnfCBP6ZUDsMaXWA1auN4u6EQukmPQwSv3X1qwwqygSgo",
  "key25": "2UkqMXAJj7nZGdVrzzu2fERvZrdjxGU1Lj7qWQaSWdhnjy6mJ5DTFouMMZ4Ntf8XZtHPizVRzLLy5tHjsgc1ujuB",
  "key26": "2eX7PRYyYReapJRNecD3jUCJf3cgQCxcuttYLz8HQsVDiLxxh7Q9ExYhcZHR7hh8ZFWQxJSCJ7cT9SWYgF1D3QVA",
  "key27": "4z2iFrYHe3g4tqchVMgMD7mSDDjZvoAqxjVmCXLcgqNHF1CHGUKC6YKp5DMEsBFrSX7c18v1NdYSaRnjVcgyShhz",
  "key28": "3Ms3qg2mFgAyyCbSe3aPeN62kFbH61LKxJD9wz7XB8XyNqfkwwio1VUmwz9b3XU33xNg1vjV1rM8cj6JcMqXRMaM",
  "key29": "4zDEFFkL9Zrenb29bCo37JoDkLX1iLW8m65zKiwCDED6niS78k8RaU97kX86HvoKUJPeWLpHHGr1WPdC5CwUFjAS",
  "key30": "425Jacc9FN81Wqw2MZutLwriPhAu8MU1SjdRMfYGT3eVi7PGoLpFLcd4kZyeEdhvrD42KyoHUZG69YSWduK6EDM6",
  "key31": "5jCL3gKiyfJQ4V7HUNL9pPmkCoahq3Dqoff6xvuKkBfp8XExJu8Fy2hqgFd3tLqRhDjkeKLRMQyuhfjHWGHeLPbU",
  "key32": "5xp3mJTzQ92b13GbcDtbt7kSPcrmHPpKMHjBhmKCMNh4wvdZKauUiWxb8fpL44pAj9CYDpm53F27qkiLBDqwtV8n",
  "key33": "45L3mnWfR8wLDpN6Jw2gcYPikzBaHaW6EBWsoo3cB1q3nhDsjTqJEjCWzwqRqpU4jqjqbwHyCkyXKi9CkyzNhWc5",
  "key34": "3i4zHTqqNdn3mVzKWdJTdYqLfWyErxNEBZFX74idhCC2NU1M5dgEKt92mKBvJjjCVBKn9TbreD9q497n8YFmFq7T",
  "key35": "4TLwFEMMUcMmd2KVoG3wS4yTNfPQDW7oaZXenCmNLFhNSzjdLxMKukgWwKw94uoAgEBDWjZdjTdKTN1dxFuTCq5o",
  "key36": "coW4axnTTobHbEqgXKpf7hduZxa59xQeUUnbFGD8uno3xNYV2CoPZHQ398tN1eHq7wi7QgHFHAtRwdaXDq4BFVh",
  "key37": "2CgZ52uDpS7fpPXszESf1EYW14xMQrASiYxrJWa1fPaXWZtBtwvuf7bUuYy9KrHf6APm5F5Jn5mAQxbYiTthWeGN",
  "key38": "21sKDkn8fHkC3rhgqaBjk9yifRq4isW7MzfJqrfc94mJ36ayEbAddo7BKVWefJW3eUY1updaVG616vkrXV2B7vSC",
  "key39": "3VABqkcPWsuAAXRqa3FUTCmb6RQHjXCxCui3AY86rd2DCbeuMdPEQUa2FEyzkm56tw7DGUinTgfZbxct11hcJ7LD",
  "key40": "4egYiSRLoZDFGuYf9M86dQ6AUpfmRssoggwN61rEp4BTRcXTXyRHWhea6rC8WEK4WAUipBaEDXfR3rDw4X5HKeJG",
  "key41": "2txPsEc3SV5pCAfYsj4PdWyi4Z57NG2tPU4iA2JKswxS7gdS6ostmfBXz2eHL8dV5m5jwgvEAN6PGBRiq7DjWWdD",
  "key42": "4HbmUqQWkHsuLqDSKUNDzMeiCBkp5DmhAooVCJDxq5j2NXaRJpfGCA528uDxBMQK5AtwpRbfPBce8CoUeD8sMxYh",
  "key43": "3dRyfty7yuyzGVt5up6pqV3G1Wc2iCiWdWp5iotr4qwtmuwmahNLVEry375Tk8wWEEbXgS4PyUm5EdohC7WWH2P9",
  "key44": "3AB2Pn124Z4iiCEaLoZuk7UXMPf3pzHkyYmzjsgLjL7f8pkW3pxCqmMmXqaMTRaxMF9696KrLb5XMJpk3ZT6HWwk",
  "key45": "3G1yZDqWuvefveztaqq8FCuHCvwoKQT2kXeUJywW49feuhPgys3dHRk6hwCdu1voVLBsg6ekKqLgn9MTC5FtafyE",
  "key46": "4tnX28C7TkjyHLhajPV97EWRG9nqwzQuStnRs4pyBtkZJwqh9TVCGDKMW3Wjp8NrT6UwF6Yzev5YsBBmCCbELzgm",
  "key47": "4p26RjnEq2dhQhkfiBvb5Ev6rgSNAxfDcXZrwMTU1L8fwMbURcKs9C2xCbfWyDRD1AAo6STFgnqxtEyKNezSLw2e",
  "key48": "4df6CTJmEGzHztnJkhkLgqhmk4mpJRwR38m7UmdmgGG6E7us8VNQVgkpmbZDHvcrixqVDsmtBLFRNwum8htB1TBx"
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
