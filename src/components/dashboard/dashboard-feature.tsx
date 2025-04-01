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
    "9zrQhTeTMMYeYb7Gy2yBCv4bAYcfJ6wuHycD4HefqBYWXRqyPJoW1ac5yvWUp9UNLghSgF1CLqyZ79LEaj1MQvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XW6ZjEvLHk9dXtYzRJZaiqaVczLMGfzWHRVWHrLNkXuW8QxWbxpfYv8sVjHhq5YnKyi7VvvGu8QtbxX5iGqUDmC",
  "key1": "5g1X81HxoUgoSjig6GxFfh5dVmoD4CgRgWF3QtXo2W177QggNrkRR1h4zVeiftsWPjVVV91Sv611wix1RuSE82cx",
  "key2": "2yNcR1mJmp2aTZpNHf6FhS7bLqZvxfcUT1PGEAiE2CuzXjFfp16XxeLFYycFV7tUY4KFy2C6LYVKPP9NUgp7X78S",
  "key3": "5bTCoBUPiHDbrG7p6ZutGgQa7357yGhLAR5mmvDJejxmPPz1RNqDQS5mRNb3dJJWEXDwZouF9p1TjLqyjwy146sb",
  "key4": "4tJ18dhLPbBm2pZWh1pFZ2St9Qz5xojb39FVinwwqU2ArBr6dy5VRzGcMa699Ym9DznEvtFUA6UDBothFU8oJVFZ",
  "key5": "4fKNbeD4VmRRM3pSHsriEx3j6oDzNB5VFLbyvrH2JZHyvHQ5ETuBRXazh435jw6twsV2pXBMYWJk6WG6BNrEr8BL",
  "key6": "51KaBD26iCDGEq2CfdW633Vz8PvwJGqyEkjxTiBXbJ84Hmd6ajP9P42MtstRgqybbZzG8XxKTBLt1DuWuu6aJM7Q",
  "key7": "5M2pPH2ZkcykS87Bkdvxkg4nmbbk7Cyt8E9VKpLVWBPxw6VEYfWhrExFZ5VMxpEdiNRFsX6nKKNHc8mPow4bBoMD",
  "key8": "3B8shKVZGoVPcZsum6gRMpo2dwSFcGUudQ9keNgSaWnKEeK7Epv51kuqXMd7BoLPvN4gGAuXyRWFtpUZ3fwxGbzY",
  "key9": "37HafBuAdXk5JCTTUVMDtUwDptrAqnVLW6LyBUk1B97b7E2rnUs6CQP64yEfg94Wd61xnkcB3cy3vfC32UrymaQ8",
  "key10": "2WGyj9TZdEWDfcLRhEzGmBZDc2EsvCqUuVEwnXFRowpbqBsp1ECTEpwiSYHe7ePXUr8okM1drAWeCTTgegwUjg48",
  "key11": "RVrv2QZqSpDHmUP3SpFft5AhMgJEafomfAPvFhpd1Yqf1BJMmhwiJwBTrNxs86frnRxQgqNc49ManUYYYbjFvpF",
  "key12": "5sV6p2o2FqVrEhSt4ibt23pktJ4Dz6dAknDE7Xq5RypA56VSBzMXgcmQT4NEh9hFkxsA448Xq7986StVUuQtgRfC",
  "key13": "27Hc4MGs6pgWb4Jpzi4nr136B1LRNvZu1u4jdz97R2higWNjGduh6qqt2iSmRES8pjdMHdab2YAsKa2kApk2kidc",
  "key14": "3iqwuLsfHXqjsk4jBrLNeFrddwGGCnPYb6PDkbRVmmqVQitQX21UP1iQWGqdQPLRfR3XZeMnwf2E6uRy9uT11hY1",
  "key15": "2gpMmbdmfRt5dPwm7wvwUMfiR4cD7x8U2ctyt7Wm2cVoEeYu8oz2HPudDkQc9HHhxe2Nr8MTFT4moUBx3goBcQjc",
  "key16": "3Ev63APw6zNgKZqqpkd5kXrKxSjMBjaSzPTZCFWj9JC5xKHrRYNGD4bMKLDDTU9TGEw917QcAgwTvAQUm5ob1NHX",
  "key17": "3xXx2vdaDF57ocNdhNHd8XmsXKvaVWgteNRy2ufR1psoLpctq2xpUcGQRRN4Mw8pjLDGgRUbmbeMRaoB1529eJ8S",
  "key18": "5UWV1FevEZyDYnziQWco4ggjXsz6d4z98XNswsUNcFtzZWMu4hVAbjndAGvdyRpnxJfGDVby51kewNdNPkoeenZx",
  "key19": "2k5Um2YHBoG1nqJV6xC3SddGm1vyW9b7pMu1uzKxKNSeWjng5gDDzvuLdYTSsxEz5pFkk8iE4prByppA8sZfS7Mb",
  "key20": "5tX1tkXtSjf5uHZByRkyMmYwL8JT1p6KTvE5BKryLsdTfbLSmPQpGD6xGU9krHozkqyPKiZChRQZggZyphVNKU7H",
  "key21": "3yhteZS8kp4SLjq1ptbC3k3wR1spKeBLpFSy2Mbrh3CtxgBhJgtCx4jyJaccUpdMV3Y6A7YjhVbSPDF4MMW6zASZ",
  "key22": "2uUVA83u1s9FP6W5R6nWAF6sY9Sn978BoVvGF2SKV7sgRYgC8FcmfqstioKAn9WzLFex1YuhpSxoCfuzr1XT8kWJ",
  "key23": "5MoA3de6peD2Zv1t4Vg4CPtTGJNJh4msJaY6m9biAhkMaqgHdHNKWeBaxgJvX7iUoLK77Gw3R7ZXkuN2smnQ6s2i",
  "key24": "4FQ16Yr15BjHNbuXoiBzbxDdCLZ27iWXEH5buU2TMvwgU9B3ZHZX7cGoXAPJGmiFKzNjLD1Y5SRPHNMmpWjkzoC",
  "key25": "3XMhx5UE6zg3fdnvkmLAbz2pjMv5EQ5xLHudPsW172p2KqeGCGZHBYh7s8KgUnDaNbmmztAwbwS7EMWCZNWWeKkJ",
  "key26": "3igkmVvV52PYvR3PkYftsBENTwLNAMWJQPSiQir6d4yfMz1fcamDypTGaP9rE6LGV5kEfTsmqquWQSAgEmTHjXgj",
  "key27": "24Ntr2PutExhkk7h9MH9PDSYb2eeXpJje71UB25H2eNNaXjkXCKbU4JtwKadp7aPgeUYETSzH5y6nz7JwxA7FV35",
  "key28": "iusL2DN4Tev53TcGBreAQ17xcDYPLXJ69mLHLLTtCorZ3jdfNiehBnK95kaewHnxLYebdDEFGpKsq3czUSkCY2t",
  "key29": "4Z6DWoAnvAy9CZ9rrWkZpyY89YaX5tWcjWoeMuBCBgQY5WsFGYpR2KS3wGAVYmyegKSSvqEpvEVAMET6KK7hRiwE",
  "key30": "2jPPtUw3vXBVDeAYiRUyvbwUEWuoNcp7ZZMEse5X2EjvFQ68wYRmWyuw4M5Jzn5smJfMBq5TAEFw3UMLS9jPmkXP",
  "key31": "5JGTdCaPgZhyauH9HCMCZennVf5cBhSM4xYJCe38JMom5jSeh9VBaFSjLAQQX1pPe6pxuzCdJ5XAasu9SgtmWz5G",
  "key32": "5zh5P4hJr2fYRCd5yv8sJH7BAfG4qA6fGz79y38TmU5L8eRz2XDBbPiRxpznokCxhaBNKZP4uTUn7qzd51ruh3eC",
  "key33": "ccyAcKT52stfGcgjMkZV1b96VpQxfb4U9a9iXViFptrSFVpYqADuFsPL9QYA4896EYkX5VWkkf8MC6fYXCpidGi",
  "key34": "4XcWqj9oCj4Cju27AwokXt1ySXbCM3PgVBkTsjbrNADJEDUwCj93eW5WSaWAhr5bYCc4RYDuuuvmB1te9YWLFGv9",
  "key35": "5KgKqqJmbSJgFmoWH7YwMFArkHsbHJVKp781G5F9o3qWrX88kmFx6j8upkc27Pwwh9bhVvicz6Q5zSCcL9QzZbXR",
  "key36": "4qbmnqpktFQxr9dDanougk4UXprZ1T85JWvgbTeYtneWSPKb29QXnBfUtCFWTrVb7cVXiqPnHa3xjvGG8FG9Pode",
  "key37": "5k18DwmxS4xpD8C4LPjEnfsdVXUsnqgBkgmzf1TDkK7GK6fRoNZWfa7s1WW4WwHNSCSeW81hevGtZf8FNhZ4fLE6"
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
