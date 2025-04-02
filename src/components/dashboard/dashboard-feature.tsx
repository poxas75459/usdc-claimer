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
    "2gDjJbakp8gtNoCj7mssrdBDNN245pRqD7hZi5oN7udtCtJeCHdrSPmpCjzAVVrgWDxwdUfZhUqZqXqBUeddaCar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mn7bCwPrvsbV4djvyxNJ6JWajKJrt89dKkJSkYbAVzRjBV46TzC4RHs2PJ8LPCS29b9S4GdpFLNHugBx5jbSEzS",
  "key1": "3stpaU3yNQCNtm2cvE8y3zqw6jFq7Apq3ze4vAF86WX9vmzbSUpojZrn7X3nMMJkQw63c5RruqwuKf81paxBr26t",
  "key2": "4XUPNLizPytPiURzgacWt7qXVi4Deo1Dp2gxAC5khQJeCwpkAKnztXd94gBK9SsLKn72j1ryUyq4VaMoimono7Xo",
  "key3": "4wrBEZSho1vcHPcMGYYr93aFoXEfsRe8LfnHDTADEUzzoBeWurrBpRLfLpuz3GTEAA9mENasjyibXhFqVhiP7qaM",
  "key4": "Sa83mpxM7Bub9cfW3WxookobZh27qmj5T9ZbRhYNyMiAT5UdYhcxNhshNU8HgTWFHPsxryvwaseb1wqPXc4m85n",
  "key5": "GN2Sshg2r5Fuqep1gD7VmiwABQshJfe8Xxo1LUBDq72HY9xgGQu1okcvbWFxHWzjpAMhu3Bn4ALuD19KbAosnNc",
  "key6": "2Q4KktDYoBKhmXota7QQadacZHFpsY798RnAi4WSTpjTZTHk25j1VNyrFt7Xvf2452uhcWfAmN56vWkmyrJSxzji",
  "key7": "4oZRZEZS5tmQqww713rHpivyVQmtAVcxKGhDnNwKmR91vhFtPPZsJYWSFSctESoKCPUMkbzUmMd2ZGb87MNB22S7",
  "key8": "41czJHrC8j2fuUasousmsqSsgL6FwvppWGQfYM7ekR48rWnC1mMsWPR8QGyGrAtc7dAmXXTnGCLncLmXkWP5aN97",
  "key9": "5hFJPC2McsFCewykA31wA2TDhAaaYfNvLiFrFqga87U3DMn7WNofy2GcfnBccbzTr6LEErPws3Q3iRrPxTDy6RPX",
  "key10": "3rnfYeUe5wGU6nuQsC3SZyfH6TmdBfQdhTE47VKwynuSEz8T1TRh9rMBycF4yP8dVQZCUwrRPh52awP5715YRHDb",
  "key11": "8x1nm3eoxTyCpF62GLHf7rEDv1im6Tt2eoxw2wAdfpebMskp9LAoLVqhtrCL1J5ATWKPgPYGKULuiE3Xg7poG3f",
  "key12": "jWTQhVvsex23QYqiNGpzxjPUhc7U5h5ezpJ1B33CWyiAZC65Nkzhj35VWGcZaumZWBmiN8VASyxqULD4zQ46XGf",
  "key13": "4y2aZ28XAjZsRUxHQrRCNXjDarbK59RfjyBYmZn2LjzT9tc4RKgQaF7yUhNosyLyAxnCYp74G95FrSZ3vbyGPGJi",
  "key14": "3EVe4CNWku9yhEkmk8TeJEhmZhUxa636YNN7Kdf9pfLoYbXE1T6KLNy5XdEiHMN51MVADq8sQxdZneuvqp98dFG6",
  "key15": "5rFo47WPKguxFXq4mPf6QpZ8KzqqjkZG2jabnjpDsmNLQ7vZbKWzHiC8Uy4kvncpDRV9xyoaMp7Ff4V8pkfET48Y",
  "key16": "4K6qDMZcxiSj36bDuMGEgAqxrbu5wWTwPU8EhHVYwMFDubQP6fq91ko3TVLG1X7xesxxkhdwdFhM4gy3q38MZHPj",
  "key17": "2zMFnhpXmWPD5KMjjsvAuxL2ieSTKPCeD4iHMPncG1SsiEXYJ7BEqnUHXt6ingRgB9Moy3ouFgZ6B2txkWJzTAZS",
  "key18": "MjT2PCo2ko1TESkj5g16QYhYVyoLQXXPz5ijnqfmD86DFrJWwDBN2QaWtw61NoAXMabSuhEMXok3Rbpk2DNXCcH",
  "key19": "4sYQgYd4UXtLSGAiB4scbFKTW18wDjrLoHEcmZ89pEBkf4f6FBP4saEiigsWyEZGu7ZBTEtqjtb5xv2rcDK6MQpX",
  "key20": "3WadwsXQNSCjrmm95e9LuMBFJNqfGmdmRKT7PBBWrk4TXMihLjEbUH7WchH61djQpzWKDGGFf4tpg1YZV1S5dX6q",
  "key21": "6GVJm6HksLKDPRUoydozNmacLNV2tL8rNL8WANndMweBhs3uboZugcrsNeVaweXp3ehEv5bxkpi72XWSMq1QdBQ",
  "key22": "4uTiAKYbnNym6FfyGLQkFvmip8JW9V8jKEkD2TWutrd2RXZcQRfbWuxPNdQNEZAi4bQKMoqKZzJCcLnHJgiF2ZuC",
  "key23": "4465yF3uGpqsyXaQ3GT8yqeDmRLn4HksZVTHEZJz7W2avPH1Us7VKF5FJVYarAmqcJS1sFLdhtbEjG4fbnUn1E1a",
  "key24": "2MVJvyMMnfcEvGqvJ1bRt47NBpTHHwrfKWTK2u7Pu2A5fqz6eK5hXbSgQeejGVagL7wGMFbR3TFWEVzEjuybQHeT",
  "key25": "4UG3sw3vZmrxmQvhCtoTxvPw7DffafP58Qo1rDvNuavuxRLgwkAjmjcaBf7ctZgPmLw5C1TDM8PHfBmEN6CvE6tp",
  "key26": "2JKW3oNKAyg61bjtaYiT63xuqeK9vVmwPbYYVeTzMc7Mm71LEDHhumpAj4C8X1W7PyyxnMKJQGuXD28dggdnmzHK",
  "key27": "64ZmU56kGeQCxRGzWjjoWJ4XVy5E95NsP5BoufiFqwPkNH2Pe6U7p5PGtSp6mxL3shmk2h9LgkRmMguFxAATXyBD",
  "key28": "4ouGLumifyLXJRh2PiB7STst2NFuKEmvWK5DtCHkbQikJDmZmzftQr2KEyhETZaGsq1gad4zTJHGeifnBgcqEwR9",
  "key29": "2326qjhTx3NzNikUSg1UyQ4DcsYjVAxLYbqrcbM3v81tLJes6h3P5HF6yydU7LcynmUvCLjd2cMQNr5a1DaQ8rPs",
  "key30": "5mpCK7gWBN9TyyGoSMbKpSehxwmKxEqieGkgUT8pK7f3q5e9EUUFFM7NWZbqJ1Q5iksbHH7Jyoph8bFwbTQF5uJg",
  "key31": "4NigSRWHdREUwwS3e5SpZ81a9H1UVcSc4MDRr7RgqkiMs19z81xfPg2Q1Kh7MAH6vjPPg45USN2K5vWA4oMJgzmU",
  "key32": "2Ec1jj8yE9usPYw6f5oktG1z5pjZvLrYLn8J78eujAw6n1wFKun9pT6vMDVPWTsYTRHTT5iLsJ3rNUR3NTDrwuJY",
  "key33": "3DjSEkEU48RNGLtWN1ZH1L9uEXjwxAtaiDPsKmbzBC2K8f4uqFCSWzJJSUhtiSZjgTLSwuTMe9B3jW1B3BFQVCe5",
  "key34": "5438GbMLLHY5wjPYYfxZDPvmHHBPzV8NV6PZa93x6TPZQ84jUpA2yjziddj5boCAgenNpqHZwR3NWtdFmy8Y1yKR",
  "key35": "2C2w1fcx9mi3crnCPhobJkjg5ndevsnqrdLviioSHUtKEmCYvKR7U7aG4G1JZcsRiXxxWbwBmEzppPphozytr1mw",
  "key36": "5TRZToQeHzx1sq5XNA6npKZWhS6WyDrXdhCbJ65nLGmmNCfCNJei3tgdE5te5sUH7Digv2KAbmxhfkV9peznWiyH",
  "key37": "5twtVWJx1nrSGDPhCa7c1qcdo1oGddsdm6ABvkY38k1TJLHaANKw5ktapNU1stUNe3s9HQA7kgCJGKAG1RGSsJ5A",
  "key38": "2ZWrmG52CRt8ihBfwQe5rGz3qw3yhhtRcm7hc6BucmCm7EccHh9gPDGnFbbtXRLELjJSsmWHni5fDxzWRUa7wBHQ",
  "key39": "4R4mEYkJUjoKMu8Pynb1Nf5T5CmpD7uyRBjAiswufxcWyN2q9rTPfSXHc2BWaBGduViBjuc8fjMVwegausi3yPbZ",
  "key40": "XVAA7q6nsfJsQHe9PaEvME8paLby6xsUp4UR4KtwPJxKDSoPPCGnfkVy45JhFFWEH3wQqNwrjffxYtKeUVeSa6C",
  "key41": "4M5iHZrh4mawZgAteeiu87SMYdx8Lgif2BpdcGiP6dc2NC9kkAjt2juYDxEfSTe3hzNu3r9PV2PWJohm9YtbXZRa",
  "key42": "3JKvio7DhpGchr9GfkmvTWJGysRcp68m9xA2S3ykJxaziKRb1gGgy7UoCGJiVA2PU31qFUR3uComx6EzAfGBxQx1",
  "key43": "4N7aotnsN4NtrF8NWxVN54xyh6MWBVkJ9D1LmwZe2D4mRwS8VGML5jz2myvZAFo6nwsczncb746MZ7uqzzt1DAgw",
  "key44": "676ZKud2AbXAdaaPXfPgTmCfSHdVDftGeL1M6uSQ8FMRMWnbxf5PEdGJSQC1k2QJCPasuT9ZgoaoWR3P3P6brWUC",
  "key45": "43gmDLvkTuzieowaM1hbp7wrY4uHDuf3V4yzQEszmGKUAYEVsG7cNui95ohtuVQ4Vs6cKPyQ4i164C63iAzXi2Zk",
  "key46": "2d92UYzFXeJXQYLB3tY4ghobayv77bzniPgJ5qiXLGvN4YSPQi99WV9KKgS6o9UxQwzQAMPE74gBZC3xB5iLFYhk"
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
