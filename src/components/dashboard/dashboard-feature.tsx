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
    "2bqSxWhJ52g5SoEMa6FdeaB56LSStxSK9Xc4pS92FjonaNVJkBePwPkrhM6Xx4X6vuTSb3MSqYepNjk44S5pMraf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3UnZYp1KLtothwgMPs1ZwZSH6qZfwXiQB4qPgrD7gmu1iC36XKqP88rWjTiEGrE3V9jCR9bvbLJNggjPvz73Rb",
  "key1": "3vduS32dqbzhZetB6Crh6ntxRtnjKmYQpLaK9ya6m1XjfUL6qvRd37e38eSvHgTJvdR1sr1ixrR8qWEKqXayEN8W",
  "key2": "2c5ssXynLLk6rBNf2d2vvyVXgenns89ru4YBPXsVXSocZFpoUFysjkBR6xi3VRDy2ERTSaFzH7yT4GVyAeXfurZA",
  "key3": "2ttJA9SV6Efpbd19GoNg8emNcqqA8up99X3kKJvTymb5C3H1yuDN2n4iLmQ5CKPisBjRGWdGFcKsaXcJf4sdtCnZ",
  "key4": "2PE3tha4TmcNjJgyQWAc6wrtwiESDNCGTzS7mAeY1Mqf4PBqxsCD6PdzXVUuhQcMUUCcTJDRDi6bxpBH3i95nGGM",
  "key5": "4Mi17baTEaQRqDXjYfXkDDCdUWt5sfQjd9yLSuAQVCCVHyk5UPqNymC7QbFez9rHSg7iJx3qWuLhxJKjQQA1xtJC",
  "key6": "4J5AwxuzAXcXpCjtEZBcJDEgsHdtQiiQeu1Qb37T193GRa3Vz5E6qmxq5CoCyFiRgBinz1CASy81tvNN1mUdFjC2",
  "key7": "61zXiyypjFJwViMBcRZC9jNffZcbkBjDvPXnqeqRDsuRPm96owpFDhVoQucByGqihsjbBgSsVjGLviPkfmrwPihP",
  "key8": "4B6raSVUyz1mM2ak3YDR98kkGXpdG3cZgq1Ahc3M1ZZdF3JjbS7pdXJgabBGb7bVG1RvVcnbfDqfgF9wSSqHATkx",
  "key9": "2TL2BrUEW8grVJkPDgx9QHWbGWA82hYaygrybFAF5Rr4c6QbvKeCAJj9cbhrSdEn7FDB3dFFDMEjxqR6EHhgEbux",
  "key10": "2JLe4y3RJpdAnku84UsK9RvQUQP7Yqa4o7uPk6sg8ezgRpqnBE1j3LGy8RCZ3DTZSnYQch3zkrHgtWVpAsYAv8BD",
  "key11": "5rmJiCv8r6sJwfnMNz5VvJyUPD5uoSQqLadcBAR7EcLcNvAthMWQazySbBCujxr2GtdnYrTKQ6SDaEVVcVCQs9ai",
  "key12": "2qjJGYea6m8VLLPZoWHVqbxQB53qq12KG5KF1eiia2Mdd4bTDBVefQRwPfzn9NuxndYrYG83UDE6cDYSVdQawysa",
  "key13": "5TGozh6FnVrhMZw4Ed93kDCezRt45TcKqdNVzSVQroA8p2BvdgqeTMsRw1k8vEvZ382iTahKnAbC55Prfy2MfCVd",
  "key14": "2ZDTrWWAmkYGoY5trTZhG9wFGNX2nwXf6G8nz4uQs6tPZZjzeeXSF35tNGSiGar8kCTKgwTEy5s7ZJjb3jDxXCQR",
  "key15": "Lcvo5m8ykMjvLQjPgSgfJb2ydUJjFDePZFD6RaYKXi92PWMLrAC8TayL58c1nN59XxwuDjuSv8hw2YLZxYSh1sY",
  "key16": "xbY4QBS5A4hQ7rRsF4oMJtdQ1yPZorTjiPrQvbfjGczt2xuPJS3ivKpDfqN1VBqFRyXXNcvX9T8vL2exB8c6uV3",
  "key17": "24AqTkGfdBn4sDBoaZzyvyj8PyCibKxyePAtPCmfm1XgkthjmuUV5zNW1kuTmN2QPRXr64HbrtSL6szY1aRcXWba",
  "key18": "AL7jdFXTuSFDijk9Pzz6Hb3ge93Ew8cWLXDQKpwKkLqVN19yZ9d7rNkazWTbVQqp4ydGbEDtnSpv251phHaQYPT",
  "key19": "4hMggrAuYH3197nFTwu94Zm9MzLEadFQxDDnp3dKpno4DuJ9nMbvAPeGNpZ9QaMG9T7vtVXJHADF3j4U8R14nhKx",
  "key20": "ku8AF8HDvVMU68H4rK68jAiyQcWq8yi3shj5tJNGSGNDtfT2w43JLfY2dnVRjQvVcSAHrQ4TaqbcgkA5SEW9zr3",
  "key21": "27XDHJSBpX6YqUairpLtNBEse2jqDK5NbiQzaNaBAkypnnCC4Y2qyaXU5N6Qm3DAQVPvRuSBhUkw2hSEToHXsKuS",
  "key22": "2oemkyuZndFBtzmQgmZYHMzhqMB23Xz7DPATTQJG8FMQhi9Sb5HLuC3QNCKUUqxXLaFfkeJbLDg9f28L8FN849dh",
  "key23": "37ysWVa5FiqDbiYRxfkaKk3pZEsMikCEg57yRjrwCWmiRW7kWe1ZXamPHJLmJFeb8bf5det8hXAvDzKWcesDN86F",
  "key24": "VNueZR1misU8ZmTVFLUQch5L1cizJn4bui7cdiHCmC7fT5qmpmctUjtdtpjKEhcPZ5Ekcwpch8W7jnq8hW646q6",
  "key25": "23vnRJrmc1fR4hiEtTgWrM6UnptWL38oRWM7vozKcZ4ouSFkYeC2j6c3SBg77dj8qtPvQi8DuTARb1d1RRAWSmQr",
  "key26": "yoeuHKEx1hjDftrfV9WQ4uM4ehXJm8giUtnkkJH565HKSv9LsdXX5ijubqMnHiYKbiLDfhx3EcHWb8SASJKpR2p",
  "key27": "34cNXwfmvPzgNkJjmaLNqixrpUgqtBEW1LCFSErJK1YUnxPJaNGqvghCQNuD3vga7TSKcgn6xS3pFwB9cWXGpqX",
  "key28": "4FnyBLRz4jUvZYHnZQGp5nPUVCAbH9Z68V7au46waANtXYUMgt1oWfRohfNg5X8gobjd6o9CG2iT3o2YX8hUbZUd",
  "key29": "WpKjL6j84cub9DU5ejer86RPgTP5DR8TTuKkpxAMic55UH7LgF78CjrzZguyG9fSTynC7fJveh5pPykExHzZMV6",
  "key30": "5vpEq1BT79NEdMkTPFtnjxVGZNfMtbFM8FfUAfTYoehcXMy1Xkb5er24BsJVRC3CiXUPET1AA5z4iUSLnDU6qsuc",
  "key31": "H2HEYSPezqQQXZaaryv8CS3t6kXGLq6vHjsZi65yPU8bS9hu4GzsL9wnHbKjqFRrJzqpKedXxyqMe3jM28wQngU",
  "key32": "5aqf4p8Qazcad8zTfwaXiJpzP4Lm1WpEtdgTbS3C8stttbX8thTD4uJmgNjsXH4jYuCwiAXZ1w8oGn61ou3fjXGZ",
  "key33": "5VuWcnaDZCgkbPZs7bKyc96fCNW459L2xg9X96K2kDqsrW9wgqnFpEE48s3uA72ZwBMkRZUDXyFBkX3UhYJq6EP1",
  "key34": "33YXZQD5tW3HWdSDNRkE3yzvJJrqQhYYQYccQsqnGcJTFKMfwJF3RB4VqiKACCybYsaDfGPNtWXF9KXGHkKNutxv",
  "key35": "9ccn3S1XGeAtqzadBBUmh5sEyidULFWAMkubKjXLgA3tvdxEDdDB6qNNWheCNVgWTA6baRDBYqvHdaqGk6qwxoT",
  "key36": "3VrF9XbV4BCV5YD37RhRMwtNpph1GMEWEYa7DXWmBgHQrUoxNPNEcoXC7bVdDsGprjLeHEqCiVWAUDpJLukvKyEv",
  "key37": "ZcyhXPWuoz8YzprcuSN2kpjNRgvti49ZUZMY8vQMFRBLtZVMNfe6Xof4hrjdehDVnVwmMjKSdgRaBmkQfsazA3i",
  "key38": "2vtGxbTfTMMf91VZsV7rowgXFHRvQ97SFmCNDLELr1Qcv86rejY3cyDMzAxhKH9vWcoDnzHLAtK6cuLwfxUma5x9"
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
