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
    "5xndh9mHAJuC5hCqP7ymRCwRjjL8bSjNTvj8TfWRb2eQUXtJPWgwNHpfjoR6sBhMmpxBjXeYSQV2UeD4yqFRe9GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Zrfb1HQBB6FF9ycrbFEw7e2USkUncU3a78Wm9cP8DppsWGzJ2qNWv9Y9uekr2BmCynqjGw6VWNC7a7WWyZPP56",
  "key1": "3m6Rh5QEFQR7xm6LPgUxUuGAb8cdCktjz3bu4PKh2VkF1aQwN3d3CSNP6zMpHrKyacfkoBW6QzpZyQCyboffBYmW",
  "key2": "3YB77EK5FKA5ctUXcDBuoF83hrXbVUJmbqLeLP5WgrQTfYmV1mAuf2MeGniUC7YofTyzW7G1g1zVV22MZESAKJhW",
  "key3": "5yqfqzEWUh3T3rs5iyfxyJ7UvUie3rfw2tDtEiWdW2MCHgwy2MGnJhXBMk3wecdSDjPrBKphVdY2PmENNcTfdbVf",
  "key4": "2mPeSXBk2DUbkmUVWp4mT1Dp7Lz4Jiaizex6dqUG33ZdPv2meScqo1vzvbmiWfm52RpkQMQ3wrqnMo3eRc5tZfc5",
  "key5": "33VpDr8N3xNVqy6tcSsin8MR1jcNFhYW3YqWjPvdj1B7ekopSNJeCGiLsdqBNjNafnugpw1Bc58tsM2GS5bsCPGT",
  "key6": "3GjaDdmNAtd8tuAiafbGZKikVcUNxp8WrC56ehSKpyUYWZvrsCtSiMoiePs3ioqi3ZNTsx7REgp87b7XM1jtfHHC",
  "key7": "5pwTxyhh5VeWzRCyUwzsJgLUXk6rfXUjWuisDc2HFwqvHtPFx8tsqWqj4xzQPjWn9togyWcgTwYKBYZQjTMBp9FF",
  "key8": "4JAYCLSoJb7Pv83BjHhmukPmNmYrhCMrqQTiRC58ZQ4b9rTfnnb7t19u43xqD5zSV3zUitAScNBJ4KZvGdvyfT4T",
  "key9": "ysLLV3EjStbRF22mePKedxNYhdSS1NNz4YQrJjhHPadNEpmranH4azUtArbvfmwp5gKNxeX56hEjV4hbNL1XTaW",
  "key10": "YjZBjqWCWED6tieiQ4xUaiY6oxU6u1fQsJ7xJ31w71guSaKNvcjVHGBpxppfwsXW1dvxuyVKGQeqKZrdw6ErVTN",
  "key11": "66iaQuLmz7d74CCwBBiSkeEbEjZJodYqBSQSsX6sPzRf2FdLY9KbTmEWRHpz86gHGLAzx9WcedNk4CZRzwHv49at",
  "key12": "28NiPmaAcJMpabTbYGeojSxW2rSHAtVKjMsTfSTtDmNc9fQLcvoY4e8aUqicxKS4ux9S3DNEtTfSiPxJiNsU5Ba5",
  "key13": "22yrjgP2RowfdoEMPnwEZCk2JxAuNS6BBRxpGXMKdSqeQHm3iSb5LB83DGTAWSXwUKWDSCnH5FTePZP3MT7kyAtX",
  "key14": "ofrbXcaVKv25NGMu8vJZCD8u6xTUHuSTXfPaGVcohxb2VUNJmwcNd37mTiD7pcLuPCSNjZnaPBiToCSqJ3YJYor",
  "key15": "3ZcYoa8vaBurEzT6qgKAdDuxGSJXx3dTd7G9prP4G9q3JCMjtvxmBv4K1gwKJBK5GiAibRHUP7JSQnaXpcvwjMwY",
  "key16": "3SDxfARhTGRrzTu7PmL6cttoXAhmoANtYaiSeRCYnAsnJsZcVaBhdeTAZuZv5RbuLrJwZX4vpjiGJZSrBjhEis7P",
  "key17": "597bFwxhLaYcS9UrweRuzQXgG12PjHegHtF2qYkge8aG3FFHeMoCHReF4ifLP3k8vRT7S2fA4Bku4LJB6x1iieAC",
  "key18": "5SwggumuA1eUrFErBLQPvaYsnPTvtB2rmxLyeLM7h7coRdiv3zVRX7mdiF6LQd7fCSErYDWieUzXG2Gk2DN9LYSg",
  "key19": "vFqxpT71XZhJLqW9V2tLwuizb5JQYeWYMqP88aAU1nRMEUHVu4Xmu66Zyo3xzuBBWpuVBiuWZcfKCUUCvFQ1b75",
  "key20": "4YoPzdbrCFn6W8hQSojYrpWU35GTFdtEzzttjE6KY6Qx68LJV7Rho8q2omdFwnyU1axcjRApvWkDPYGzTD5zQxHw",
  "key21": "4Dp28bDtNXUJvhF199Z2Tq4Tp3Yht4cYDvuzz2oQtNF5fam2iM63x9pvGtB5XuMiszxQycRLwuRMX9mU4LjLVycB",
  "key22": "3cpbBPhi5FZ8fmQUMan3y5vypLBZwimWEuKNBG1MR3VAtERZ6RCdsLUw8hRLerHufzoDoaJLe3B2AzFgA1MHuKTY",
  "key23": "4AKwQ47DmMUpzjG6bJEYTog6eEUFqqyDZLQp2E13LYnq7Rr1GN36Tin7DPfcDeNzUF41TPVyMpqCkiJMq3akYVDm",
  "key24": "47E4HHNzk1i17cvhvsSto1TUAvS6Vpna6s3tmiWLbPhGh4nn1Z7bJDqyjvRErpHvPqaiHT51EDrpBQVYT9SoJvdo",
  "key25": "3SvZFaSqg38q1VQsNfW7EK3dB92V2oBZ9K6g9Z7NsRifxu8KWkfmMYzSbrio7bcMKjZynSeLWD1YCBffoJhLooNw",
  "key26": "5SsUNKzeJ8pYFqsDXMsv5wj7g6299mu8S27XJeHAm3v3FpxKzwH9Ck1s5nQ4fUxNwxKYjkKWKgbJ59QyPDUk3y41",
  "key27": "2KLzKHm7gAageHwGJZR8S4AybHbNdkWw35P2xqbUdXF8TE3Niyja2BTTLjKMEwXs8bmbDnj7GKmQvJkDVzMTDqeE",
  "key28": "5mh97EDuLAzCaZ7CJVypGF5SzrCyRJWAZrb3Jc3LpJWnbCNPyRWHij9f1pA9wL1ppTUMD9Ze2RCJrfFe8xZpeGDz",
  "key29": "5ytVFqcjufKVopBGyiJdSnt4A2Zk6R2DvSzXuWJm15dCinhG8TvPWvdodHDspLfv5YJu74R8HBPa7netRZG6ga1m",
  "key30": "2vGmv5oAey2EL4AmHzKyzTeLPZpUUoNa2PK2Drd8ujMgFzp8J9qU8qfxRPGrJbAcowLNX7SQeYFNjLyRNTkbJM6K",
  "key31": "3Ayx6QppieWv3vgaVr45KpcXHFzneuX6125puYkfDU2R2zxECKbsqA7kfy72Deev8KJG9XLAozVx9J4R2gmccan4",
  "key32": "2MsfCFCB47K2aJtvG3KeJEqvXfnevHqqJzRm479k4goiFmyVQvqadYCUj5dCQZYmvGxRfQR4fzC57mdmYrjBYmuT",
  "key33": "2FXZaJ5x5RndrJ1cUJJKaHtZZTq9fXeHjEK4d6sDMLua1eJXeWeQNSS8tABuuobA8YqsGwy5jBRnbgMt5CgjjXkE",
  "key34": "63RoBEp47UUbqnWV995QVp4tpbi1GkcbrCAvxy2PNBSwyZ5FNu2yM6A664M1gc6CQNMpMMJb4aT2RJMdNyuahnyG",
  "key35": "2yCAkidB1D5xEghJuHfZDQiguvm6FW5Gbjf6FETk16ncV8Cf6UEKmTgDSjYUJGVKVGpfKZ3vmLizCAyar8r6BmBt",
  "key36": "4RoaZ9C3VPVM1LkFosTn3sBeMNPH5WT8srCb5vSNh91g73z5bcyW9Vor47M4gfxccCFLdLFYXcU6qc8kZTA1pVGE",
  "key37": "34o52AiDb1TdUUsnRkwwCms3ZfPo8NZw2gisx5NCDKYwcC3EPiyj8e4MSGr6jvsANn8jSRV52akrLRzMHZi6RcMk",
  "key38": "NmdLXbHg1kyjmaegSqpqjxaDSxSjVLvkysg1bRYs8SLKuRUZ9p2RimxeMPvJrCNLAXpXEmDceQ9RkRMx16Pb7Rt",
  "key39": "LWRDoqepRzWomy5TELrTyfpadXMGt1u6WxUtZHVGF5mDeZnJBb4PmxzafiWKaFM9GQ8WdSC1SbsUrfn7d9DJctz",
  "key40": "4Yt82TohmhEe7vFUVvZj3Ju1gX5jafpxaaqxWa4otUBNQdDVJXwUZNzqqHU1EznJYW9Efn29NJRsJaQFCVzcmZ3B",
  "key41": "3zCHFXVUN36mr73zpdS79pNUPxbLajqhAEBB1MQ26CCWLpFqSR8wSgjeVNYVf2oh4gNUtpmCrMZGCeuAWh8xZiHf",
  "key42": "5nX3ctU1KYrddkGCDRN4esT4d6B7XiFnp4qT86mAeFzjZkAXLT4WFiiPXiwqGniJwEJEja3XCupc3K8wLQwc7GP",
  "key43": "23w8q5whCTWKWugUkJCGmk1Vec7vEvussT5pM4UaYC6HeqDaivjdMH1XytXSewKZnYsoi8Lv1aprLsHB6zBe3bDw",
  "key44": "4vVxhiZUr2RhPaAyDbGpPk6xHde6JFQe5gq5fQU49DuPvyEJjxQyypdSY1ZsEbe3owS6WcDC2Fu9i51o4CCMkcbz",
  "key45": "2pYpT73u3wcaprQzzW74UAiLRAxFmRgRnohhEfPNuYaCnALzH13yt5CGPWP5jQ48bukTrdbS3fkd2HcEnH9zWvRP",
  "key46": "44c2YZhsseJyXvbhoXJCqJbaMJoMHsExke2HHrb2nNTn8Rorc6aFCXNcgWVaP2vUeWbvNXNRLGwSvghVKjUJxMvV",
  "key47": "bag9bmeLczU2MtowAbbDprzib3Ct8sPdDJVW4mvuiNHQkXA2MMPr7mJZwCL2f89SJWyqks5SH1voPUP2hzQTFkq"
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
