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
    "2aKCcvxpt3r4iLvRGKqCQYeWfhq4fz8WkuASekJS3HgK6LBEsr7sHobqmWYSQmw8QwDVKgKgVaambYbXutSwwQkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqtFAy8Ntrh29BX4eYSD7nTSu449WAWqQEkFKrVMLbSvyd3YHGWLtoX179jL7b8vj3jattfTVz1DERnThVsxWgr",
  "key1": "5ckMuemeQBja9hvbj9sZbophzJGaXnngMLrkCkKCfQ7jXingrYyNNd1zhAq2M24kwUXkWQgU1DXgbMKmDyZNqPn5",
  "key2": "36dM4yhGKnMTn54a3cVZSPTp6of9UnAE6JgvckuZW6D5NuBEkizchz7ST3wrs1rswJcDfA2fLtNasYCSYGhArQ8n",
  "key3": "2SVf3TBa1rQyLruqva6iqGRtMD2rxzuctUPL4VdSncWHuunyKMtAm4PmahgML9NmYgP9HZyAdzghyDbZuKpuJKhy",
  "key4": "5Ro3DoxHMGXj4T25cpu4qhi1fFBmDHXJxhzi4PhGHvBWmoS2eikiKFwyHjbbvpqak7B3LPG4ioosPkAKtgFhnJgj",
  "key5": "4hXitS4EtVKx4zEGmkny5eU1KajaJSjjfMYBAcBQm5jM4fHVXxtv1Zos5jsbvguZhjPcMD4gritTaTCS4kzBTDuS",
  "key6": "5Zg7Sh7TAMgj63joGo9eBDM29PYoZjGNjofxt9mV8i9bvqRS9fUdFfQBtGJ2cGie6Tgo6DWcay4wEr8j8a8mhtqG",
  "key7": "4ofDS9pQ55q2VkCRyt5oiSSq6iTLzupc6g6SXkN5ynivc6NBcQtCenVjjhkz3jK2ysLYcgdPeZRmz1aKMkdwn4La",
  "key8": "45uFLfg7SreoJdVQFobKfuM2H7qnuwjpFx7rBFSnxFgZ1uJbXAP2vmqnch7vBWjVBXukTe5WWfW4kkDDW9AUv9wd",
  "key9": "2tHYEChF78Fn1zW826yizLXF9gA7b5syRgMaqyrzb87PhxJf1DfvTiZtneqpZETCUNSY3eC7e1ZcsxVpE8okE1HR",
  "key10": "67Q893F8gwAdYesyv4AoDEcs6nwUvHXuDiPTb3JPbL5Xza5gztptzQQWVk9s8tVXmkjpbUoWdK14udWP4GqJMB1P",
  "key11": "4xiedmYZkbGdfnQjWyJPDxBHN5w8wBfsVs4sgnrKuUgMmigdfV6S4XJWt6iJBpmaXF2KaahzB6cKSMqNk69qRoGK",
  "key12": "C5hUGcWSaYULoJCxFNUopP6R7rRcZ9Q1YAPmCJ3n9TM1d3KHQdNC8vMVfjZy1ktcF4FmQn2zA3GVvuxJHZAHPwS",
  "key13": "4mJgbSTD9wnBkkrmiqc9hvhJbwMyW9YaqzeKT6Na4roWnF2YJM9LjQtbspttgxCN7K2J7UudcQUtpLXohCVUhSUm",
  "key14": "3uXzeMeYSqc3DHE5eMdABUvnenbprJ8TmJdgH33t1KHVtTBYEXNSrVfjjvuXsYfvuNX5Dcbd1LBJnB3sBUA6c8Ah",
  "key15": "jA4ccVv8f1qruSrVsVNqHxfRkjEFCZS3HDyFgkR1fSx4Vp8R9heZ7R7mFKfYgf3mpYY6HYcG7DhvP6vLeyFwJgb",
  "key16": "5YbKLHmdMJTHfYYyiMdYaN8Ltfvyi4HBYQe5GR82vMdwU9xqwV1vXBs7xDKfPT8UV1zxDKY9gL91tphg483sg62p",
  "key17": "5wtDvisTaDYuYLJdMf3wYb2aQ3QS5WX1bo9impLJYVcnG5sN9Y87CucxgbELRf43sHfMpGPsPwrbkjcCpSGPF3FT",
  "key18": "2jEeuRj5roYh3v1Wqfb5ywNfLs1d2QsKNnZjDLvMV3mMBzX7jc1nryZmNY4wYBAgyFjw6Kg3LpRaaNnvsNJHPP7P",
  "key19": "3mJKR3X4TvjrLz91p2r1wbBNoANtPzHfaZMQfGgwLRu1Vwx4yfCQMkWTnN2AAF6epPe6ApkjcwN5foZKRGXcVJCC",
  "key20": "5qMZDnKHG3mXF1sSgKRQdEvfx26Gvs6QmxkqzuQc1BuCyWZNHA2Vivw61Tw9duELQnQtPX7hafeQtD9ajBYbbue5",
  "key21": "V8vNo2tT54Unri69B4Y2s2aetQaEbDwFMzU3Hyh1ZpdqBa21a6RS7k1ZCqHiTHC8YRKJydn1vSsuQhAHXVUqBES",
  "key22": "32mAyjE9mMjEBo2GmVgMRzZg9Wk2ahKZisbeuqzvYwaxvanGt1Y78RfhMLhgoCXpofUW6Gz5A7Hj1jry5csPhtuZ",
  "key23": "oaWMHms2bvxxDeoF97G73ga3WWnV54r6B7KeWaoDaXUt8EbtqpcaZu2MTR2TgQ55NZzoMLBXY4jtTrya3o2Vjmb",
  "key24": "5hXfXN4iQUvKB65C7STxxmA9UfwinFR32fxZj3NzzyTcr2uzbh4NBxJs6ccDyPjoEouy5coQY3GXad1TihkRX8ks",
  "key25": "nPMwckXmhKPnNA1UeRyqtFvYkYrxoM74uF5493dW2QZjymifvE1mGKdrt2bGKpmVf1uqCuZt7aLocDEQ9HHBg8d",
  "key26": "5cH9U55TuywwFvrKt6UeF6KvKgbjhKxF9Gszun5JdPqWnY3cRt6ESmSmmSJy62KwbLzSnHbwsVByaivQKZWiXnUy",
  "key27": "4doinhRtK8p6nGo7zFmDUBQHeRfsRJD5TCDAQnVNvBZawjGCxYervqed5zYgoM7jLN9QyEGadR4qZvuD4GeCbk47",
  "key28": "4rnVoT5Z9A9mKackuPkMbDpxW5dttMrN2fu6B6XueFZhxPDCiZEa82V45rK7kuXNDKcHrtUYBj4wPMw34s8kkAYK",
  "key29": "4wFYYGHpYcjvLdx7MR5a9PuyCJ8GCmVx5bbV3fnfBkQ2Htx1twKMJe2LD6bMiG8qp4Qw9xyggmCmczm9UaMxTMnq",
  "key30": "3rYAmsESwfrvpj9XnYxkEU2w7LLbEdCmpUptf1uf1bDK5pC12pryeRQ2cjr6h5o3Y8z4S4bUWk5mChsPXxzBDW8q",
  "key31": "5N4A843occNQ6cPwLuwuGbYdGeHVqqxFCbYvpeRNo7V6baY82QbFTJwxtjxbd6bCvia7G3tYaYKRnR3YtHhzAoao",
  "key32": "3AqeDTVpBSeV3eZ7cihCHoMDuxe4JPR6jwcArXbSx6WoCViKStSGsGLkJXFApcT2gX37k6XvS9ZyzvTt3JHmbPBA",
  "key33": "5SQiGTA7rujoWu1YN3E4RQN7c288oYTUi3go5H8iczjLCLm5w9PwMW2VGCYxq2kkQSeB8bpMSAtFAcZBmeyujEeS",
  "key34": "47gK2cwMb7W5zPGXUk6Y4j7qMM99pSLGQhRHskFsedusYi8ZZWL65Tra2jgd6RayJUieJP5tows3Nt2VAJQdskQn",
  "key35": "2gtMHNQGXzuvY3spUAZksH4umR76o2coU5oquvVqcHtNEkfyMWHx2smi8h4vdSCWvk1RMqEueAi5z5LA2X5PTh82",
  "key36": "2oJ7HEeKTsGkpZzG8aPP4dUk7bngqwWJyQ7Xh1H3ouQ4R4FuidVX3RH8744pkcW6tRawR7pJSJv1bL42AAuSRWBW",
  "key37": "4KGSSHkESnuquVoHZF4xs2VViPVSAcFw1dqb3DfGYai1W6c8xvswpwcPQG17GfA6SbnJrBnYAxdAfST3a5SJ7xWD",
  "key38": "3vbcL3zZbUCcMaAaVWyDk3hJ6uC4ugcZ78Jf5qirsYmbgYj5shZoVHhcm1i9idMeAZ21EpRpTDRUf8wX83BZg3jJ",
  "key39": "JX4317JvnC1Ptg6mZfWjs62obVZtkWYLYxFFpHxBBazccqLmUKozx9xBYh87ZmKwrHEiRwwt8vXYeXtBQvhHgLh",
  "key40": "ogLFh3pj8keyGqeq54h1PKdXPGdAb4pof3KxnipFcuq2ghVtjvxpuqsksH1GXvHRWpqzi6HrEkBSv32Qh2CUdDx",
  "key41": "61HfGsNMzcL2Uf9k2NbUDSrSGYiXVs78CJYqBUw32M5YqVPv3yCqs7p4hLEWZPWG1BpamtqcNbR3hboQA3snhovP",
  "key42": "8q4pxzxBbEzNUJfwwqdHaa7hXTGTfKJwQbcfj6W6ZqdP2iNCMcTSUWDHBKpKuLKuTckXsHVU7XTjQ7xXbDkqk3k",
  "key43": "2hCCKDMTooV9uxRJGWmycGq7TT8F2CY6cLGuEm6chzwAWXPu7xQniyccRprtAxSLG5D81qrJKXbDTWGSdBRNdYrh",
  "key44": "5wsgBSgX9jJQ4sz59u1MTYqjGW5AaXV1quJro3iB2P6TKcAQueEQMFv5Jm6PGF7WwLY2nk7oCueW2vx5YESYK7gY",
  "key45": "5L8Aij6qc4kR3qYr1sDjndNKvyDePEsuJR6Krb6eeWtS65zGPifVCexYkYJtBtXM1X3pNGuMvrgYVAumYbJbknaF",
  "key46": "4Hn8n5F7UYmWihQvAxJxaxmn4evU7AtxrLN2PHsjraCwwZMmw5G1G2gPZrpmtATijBMyccKbqX8yTgotdcJwXymq",
  "key47": "4StRkDM3JcYws7tvDQn1VQgifsbdB3vav53Yw7i4xNEPfwMAMAmgoHqfgvQduEcvMvpy7xKDtQ49u8XTF76NhYev"
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
