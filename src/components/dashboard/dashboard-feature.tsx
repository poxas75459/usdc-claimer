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
    "21mMiygNvgSBLj7mnmTWGasRDmTwZu7yTrZEUmry9gwYaBBhTwTKX87p8FroVXfBYPdeWxsgp7pFXDwBkpn9QFcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqFXkEXNE38D9k9ogFDMjwikER7zRF6UGuuSoPYmb2beAzHe5Gt22ykobBrGVAUDrHVi6SLZigBBMtNpE7jNqVX",
  "key1": "XVVKJGZPRpNyKZGYKnJc5WERCsVkuToud8GrBFWXSfZkmP1NyMr8FvkD6B79qdTAHZFHQGPcG1f9pia6oFJznjb",
  "key2": "4RD6iwKyF51SKVgyJxuthDHjiXPuoi4TrdsTE4zGchuTtHzLddAdw4hJb9Cm7Z9k7mU7SQgcid9CuEQZwQSKHS1A",
  "key3": "5ckGJQfdfxpwBEd1QYsYXAJwgMNLQpaUPe3oi61fp1RcsWLdNJC2FTrXozuGoF8CK7GV5NGWAnR3sj5eSAKqEVQa",
  "key4": "29ydbTypHrrX13sDPVeUoFGyWEam2CPeS9WQhWpP2u6DFLJaMg6dvUUbXQWpeWNZYWf38NJMZw1HNNpP5USi28xV",
  "key5": "4kDRNKqJc4ZkSTW5Tb51MPqhQtGSBo6ifwMTBUBpJ6SDLGhDFRS79LFenEKKrUra99ASkzjRdq1q3Wu1wt3M3cQM",
  "key6": "2yd5EXh1JSWkyB3zgDMTr4KXuEnY32e7C3U4yzFMWQmvApjg8jiG78HSJ5RM9NVE5FiCfoydjsA2XvrBNsF7Bj2m",
  "key7": "re7m5sp1RUiTn8TtCFLW2FH5YtFWvZwRgk7CtwvAt4QW96upaEFYNfVhiRTPNYjBtu5DTHzNHSokKk43HBKMF9B",
  "key8": "s5zEWdBmWHfhvxB36xg6G6bNsY6M3BphHCQzvGh4TdUaeAu6JQFNuquJ7MnzhVyDaYaxEMsBnRmHqEsqQetqb9d",
  "key9": "3C46KHY4jWhg3rYdi9NNQyKHkKmD7hkjKc91dKMRgebT15oJ3BGr8CDKtyBCNpe5k2Eb8AsHaxr42MKGZZMtzcz6",
  "key10": "4uqgmZBW7dcd28AwyxhyUJFxBWzfSHAVuFDreiRVVnTpLmmvwPUmMyM1e9xK8Z1CwSptzTW7tYJ8eWn9wZkScp9S",
  "key11": "3TVCM9zTf3PyYpAb4pjR67xqQQ4Kw3ssfjHp2CdWvVgY1xLHDhkTCUeuzdtSKdomRb6Qxh29BQimti5scFUiEGaw",
  "key12": "3WkpiQx8kyLHBayZQcihSmkwFMGj8Di2aKRuw5UotWSfNDCBkDoPLv2oBA2HKknvSUPm87hb4TrZuEF3hBKrjPzK",
  "key13": "Gjt5KZJx72oggXDnm17b2AXzTwiizV233iugZrqdWXaw34FEBMQ2FFRJjXhYmHeVqUcJPVZAHHABX1JVSJveSWu",
  "key14": "2XZj4BKoHgbkonxhm1HvqNWRMUQefL42oLGG9FQWQPfTEGMxFiZWwm1H6ruyktEXPvMqbbrBVD1JKgVvB8B4SuzN",
  "key15": "3NX7GegVu6qSqPL8ema5k6mJPmbcBGHPoWPzFNTr2CoQtU34vNSznF4xfSojcGk7dmrP5Hg1wMu7eVz2CE7Wh5c3",
  "key16": "4N4fRctteemy7jUjWwHU2P9gtevr8V2duCQfu3BcAeja5tQGQBa3ErthsMxJ5NVnvh8uqfE6cDPWZJB9CHYPsL1e",
  "key17": "51VLVmCax5tY2vR57GYJJK89e798wvcnkzaKrDyvrdjfXhfyY87dLs7rzAR1nkbFNbqwm4eipcVLVpaVjLweupdx",
  "key18": "4iqGbqHGendhrxYCa8hwoF5DUzm1tGFBD4WAoeoYWXhPW7ZJhegkAU2UsCszFJtX2f45yw6fhvV63SPguV4EhHtJ",
  "key19": "2wveLxefai4boUEYxLsio9BDTwkKGMUYVukWPT8PCBDkmZmX9kQUePiEurc8ciutBuJHjN9FNXc4ggdtX4ufFwHQ",
  "key20": "3iuHUDf9XFFraX5WycbPRZyuPnb84cLiwJvQAFSbM3PBMhM9TA5KJPJ4GS8Vh8Sw1wqfSgP72vtg8T1aB4wUDfkf",
  "key21": "HL8uQEGAaytMjt5MJk2bvWqLFDAAWJFss82EgqaoJAaLYJGsfG8FHfv3j2uwACTnQYkebLx28ohPyJUqwR3UyDR",
  "key22": "5N6krctgXzN4DcaepHDHW3Jc5s5f8UCiRtz89KBUrio9gXouyznoiVv1jgZDQNX1syJ8pGcvbSC2dNbw81BXCnLw",
  "key23": "3Fob36vGxrWFa9R2bqBb97hc45YNXceHr986gaJyTUgy9X1ZHSzwm4LdU1adk4ysrtC6RCnrXay6xydbJ6pXzTDk",
  "key24": "4UAG3LD7zqpEfCcqZ6U4YNof7QgaNNT2yFP5YqNZVaLnpA7yAPPu2uCqLP93AwKr2VbnZQU5jCi81wpJX7iGBGW4",
  "key25": "3mE8jbn4ecSYDdY4VrgivTYMbPzHEnD45b8Yj6SbMcM2JtR6CyVHndRbLdg1Rusy7L3nvV7DUxVknojHa6Hsq4Sk",
  "key26": "MjkJWc1Nv2TbG6jCZyKdURMWNc325yvtGe5x1Hy9SpYLHrEwxwSuHWMQdJMQVFmsUruSWxWvVaVc7Q36wE4KxPj",
  "key27": "5hxc17Q1S9jHJX4d1xYvmRWoVWXvergzmq9pjYiUWYbMPUY133WKuuujc8fBdY65E98V1q7qzJUHJyBDriQtVhh4",
  "key28": "4C8Skg49uMivwSVChubU1BAayzLxrVx4zxBnJBMRujpPXC2WocV9pDTGiwHz9iSumRTtNhDMfG6NzJiM8FZcPfcy",
  "key29": "5kUkBqyf5z3r1m1Th3kidCGJFCsqA2RSdxw4vhyQeRSYid7B7wXLZkyZXbHmkAShS5gzBZw77dLo1e2GPtrssij",
  "key30": "4XV1U3k5LfxmJxDmgPB9jPRFG1GpHB4YyYEdUMYiNtJ34xJzY6ar8YbvtDjcC8jQ5C2veDCfhkw7gU67US5Y6vQL",
  "key31": "3qvoxeB89SLWPSdtWrjjBvP8cBntpBuxparDpB6Tz53qm9eAGwAKE13JL4Vz6jbSn3sEAGtaSTzRyCvTCCdUmW1Z",
  "key32": "2NFr3pYQ5jmR2wSvEdPWfrwtKbFG5Q7mGFnx5Ftoi65XHt5yhfbYWNn481eoodkyLqhE4o3x8XBPpUf9Bc9Hym25",
  "key33": "2wqidCiHeS7mp2p1JRttS7iZTua7Dj5fGYZgVN5oMwYo3EhDYvAQwQkogvoQLVPVFkUyDZ95XYthVhCNYhBCuUAR",
  "key34": "QnnnsNi92V8HgHhwLfe499pMxgn6kxatf3jNmUbN1f9daDG8gUGpSoZD8QFZy9Tj4RC67vnZiAx8e1rpmXrq3xT",
  "key35": "5DLqwrgBqAbknPNNT5fjTyMAoJBh4AJ8TRjxtpqAFWMKTBUCJ4Ka9bSKivu5MC3oFmjHvJRXLsjJAhDtePpebzBp",
  "key36": "2B7zuwHVXNb1qhdHkcD6r2WcHYRPn3EiW2AcmPiaq9B2LstLxxRtDhvwQ1ZmAg177gsREAQ2UzwA2sjhtBY9mKb2",
  "key37": "HHdfoauXnimRDiR4S2VzDXiLLxzsgj9TP1WvNJvUNTyZ1aK8ywzAkbr5sn6VSJnUDkKFAnkfKqPDWT8PFTbJgGJ",
  "key38": "4NG5zAmyGbhVqRYhQpDxQLRhjrwKsSdeHSZDhmZ23A7kaM8MMo7PeFnTy2tLpcEqu2DdbP4SG8qqFFeWFAwxQ48",
  "key39": "21WRfTquCXjeiMbnLX7SDSv9dAAcmzd92c2ML2KD7E5YTZfeW3HKRK3vdqALEJeRHCVzwcQa2yBVFJfBPEwL7wCk",
  "key40": "4oGzd1uXjDed1arBYsrxngi6b7sMrxptsxFAUrzEQWfHWz8e64oseS5Kdw6rZbfL4otRG3Rw2aS6BQ4iQTtDt96d",
  "key41": "EsCHU7U4FWWKkF5E99NMMRS8qt7QPGX4JvQXDQWm4SWF72LYrfc1TjdtFsYSxdPRahD4pL8LvnN2z31TcjSxDRK",
  "key42": "3ajwh15Bw91VAjja7Q3YJGys6SEFbDnFidzE7fdLFhBiSPLPCuFp8GJvsAfGUqt55c7b2iKQbUwb8DYG4wtvLXeC",
  "key43": "3NaC8EXo8ZCQFoMRyqfSAZ5iX9XPBWLPngVG8HuZvnuKofdi8sbXgG5pxfKRsoMD9YExs9hh7Uem6oyJPBG3nbYx",
  "key44": "3rgyGcce2c9Sez9y5uxUgjTaUkeccpZvchenkNGh1JTh7teJgQNCBeGbKk68VNJV1gYUq9BTLZkkEmKX4B3UNedU",
  "key45": "3ZbfRsWe1ooj9ZwhAriqUVkuJ3Lg44LQqrMg9ereDBh8d8PyekZ7j4F4UT85SktssKcuoXeFUG2rHoumG3rpWL4B"
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
