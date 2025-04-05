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
    "2uL5xx4Zt26aNG7LSQz71kZMy2WVMVkECpCFo8HnMRS3PhSaosZcEKivx3LZrf1GuGCghpYwQgPAYWXUjomyQLtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyCcLCrhnXPnxn1Uvetpaw9KqnEPh6oCqMm743KG186vJrpQqssd9uKzSPTrQc8VqMLAzvDheecNoxZgqqETZYB",
  "key1": "2D2aWDGuh8AjPACDTyugt4jcZFM7MprzeSomWz4LVJRG1e6uRtAZgiceLyVWsAmyPNcqhvtdGY1yYL2tYpRFafdB",
  "key2": "58vXA7Y3PxhpemXntJXMEoEzpTbQAuw99o7HwA9KPYyYXAv58GUfXEjB1GamMVoc8aRR6DvXsue6QGk7a3apg1zc",
  "key3": "5nxaTk4ThMi7J73RpkYCeX7mdkUyW39zYLZ28E2D8nCE1ZLAPreWnJ1BinMwSmbVNtgy7T2HAwz15TJtcoWeyfpn",
  "key4": "4MFBiBq4uX3CCiM14NNc7h55Gq6ZqKEXsqgf5CewMR7SgvxL5gKXBv6pX3Ro5wQkBWd7mnyNLajVhc8NLZ1YMGSX",
  "key5": "597bM71SQySTos9wjuWTybY7ioVmFNtU5pAfd3WW3hbzDK4LmpRVi8y3yedto9Wb6oc7D9CrPJRMyeAmzqmvojdP",
  "key6": "462JFkcNCYGW89mpukXLuqmhB7QyvMorcWMNocGdhLkCYbh5sQj5Zu8UK6TxaskFNhFwS4sP6FBJ1qnhobhfAuWx",
  "key7": "5VJmVL54qhkzsopW2ZmtqySpoRnAABZT2M919pQ8pYosJZm5j9F49uhLDyCLhpv86KTizLdAjoekPi9ze8E2b8Fy",
  "key8": "58Pk5iGpVceKg3tWJswAfD3LETKJV5ppGozdJMMZLNk5FBsvesDZAXrsLaJvkTGVAxhm6z3nN5wtsNQ1p1YPkAxV",
  "key9": "27VhqHzPXUDUzYpDmKunieHtjfqMvy5xREGrceN73njdZwrLHKLZ6KTg9Jw7W5hKSKreDrb9Fq39U3FQjFHHvXAC",
  "key10": "4r7n9Gh6BoQrZD3yyxSL21CDKsCsSAYuNiCPRLUGoSxXEJZW1rmGPb1HMLzyLuLQ5zne3TjaeKAJR8DFjg3j3bvk",
  "key11": "38W5RiB6611JDAi47CLJ9ycFAYUTh5H664uLoc8ioEdx2RrNJxXgL9GvkYPA8PiCPVdhp9dKW7ibSAC1rADASAft",
  "key12": "3mpZ9zjcqJfefrhzkfYmKULszcob3wbsyQR8tfCfGZ4924uv7uTPMhJEBn6SkBKYpqdYGC73kcPJruZVtzHgFtqB",
  "key13": "5EHmpCCUZtvJUCoYfVpPR2CP1c5SHcLwmsZpVxvNXPGXW51WTwRaKyCotL2KBWej8h6X7E4EH5cFDsGppjnjYR9T",
  "key14": "5xawePuJRaHVZm99LsfArncGpK9ZD2HooS8Z1MjMTo6NKsspaT2VgK44dzdBB1tz2EZwqmjeZkscQrxSnNFpbXuu",
  "key15": "Wmbxk29VKbzwCGmMiyH23L84zZhVFCWr8vVMSHmyz1nGdYdNhoc7Xidw8cmNQmCB1a3nP4TVaHZq5ZsBrk4DtMC",
  "key16": "4ZNYpZdsTYFTngqcAGWHMJ3nbRdiAzGD6y6AtHhKD9Zid8d7oGinfU6ZK59SkB165EHwSYBbEmu47HLLfo3LfGYJ",
  "key17": "43Lp4RUgkV95bETqGNH3jLSNXYqQwvmJYsMgN7T3LMrfnHpjYpJFdDpbwSXUAWEXJuqLzV5rHFUSbn2NYZSCUMgq",
  "key18": "4bjAQDnkTgwwqqYzxJ716TbmwG49AMiTPvP4GD7ZtBf2A4jTcsb33PZDH1s51GKfX4R2QXE4ss1sCARoESAmNbby",
  "key19": "5u5XQc54CZu91DK1Mc1zpwiR8U3ZHZvDZeVG8CyGryqhHe5bn3jwRTeHevdMqUtioPbpfLT8CbSabQ525F2DXudK",
  "key20": "2uGC4yP1vp1hyoUr6mtnxLXWzDeK7j6noJBk5NeopKTQGwyxHqenwDMBocthqpAFSUfVXaCiKACmTt85kNwZgGNQ",
  "key21": "5QWvxFn8E16fmQ5KCYZ1YrAkM8uCpMTLbMc19Z8WhRYCiV1fLXNEPy3HtmrvKhELTEfdCTNSCkBmKnXdPm4WV7H4",
  "key22": "4RPM4AbUaMRhSLP79Py7ZRgQcGk914CvbFt3KB6wUBFhN7Zi7p2ZJWE3H16mndKbnBXA3d8uduygyrRA7Kc4Xprw",
  "key23": "21FyQEwtsesoevXNNdSTHS2YyYRAKDqzzsFHGt6CbTRsU7xmYscaTSMTemKgWkHHyFGGYgrAsNk6EUFc55NugNY5",
  "key24": "2bPjJANW5mMHJQBp9ME7BDsqYan9Bpv9pYgnm4UGPbNY41Nd2iw9fnfz8RhwD1KJRzGjyXSTd5n3KTiv6T3wHndL",
  "key25": "5YmyrDZTqh6TVh5GatVaMjez3V6omGnGDYLNqxeVLDFW1WLUQZ6MBjeXkJ4Mprgbkwd39yMjoi2FTt6HSjEuFSQ3",
  "key26": "2jCysBWZXP47dnZ1C8UjQ4StnCETv5W53UCgqmtp7pJnzegqs5YMyaofmj5KzWhATBJbjFxyjj7WZ3k89mz5MUed",
  "key27": "k3nv2xrPXyxBVL8VnFP97Hjxwsc12K2S7qBry4zwfUpnVGHwswFkHdavdZhozLudLH8tzZCsYtyJ5XJCoTqonP3",
  "key28": "5kmP3rZb5RzyCEMSgYBCFL8GuxgjHJDgRmLCfDJbfqW6fi5bYQi7hXMiX8QxunM6PiX4CsyKg4Q6PY2kkzVPo5LC",
  "key29": "PrJZny1nMstn9uH7HRGd1cNq5P5S1XPWHS4sMrp5Tto7GcsLaF8RWgfU353anVaNhsvUEe1tdmE2EgjfPiCvV2o",
  "key30": "te5FejBwMNkx2WAJMTXpPqxf5X4RA48cp3hGTX9eredgquguz3fW6HE7DPGcPcsH4MyX5u2NMsydeCr9FeGaE9S",
  "key31": "3oYQ7zKm1m9NFuzbFDUbDRyr585D3Jw5hbmfyxqxSi1687yFbdWkCHj2g55k6CoGHhbLqUimgBrqNsLCuYqyPBKr",
  "key32": "pU5hkHKyrUXP4o5FeWK5xrr8DX7f4yDE91U9vXeCkRTHidiPBP295ikqQEmKBWytuRBYyPfMc9vjbJ5bM4ujJdW",
  "key33": "9j4ndaXzaWKYwuKYP5FcYLir6BPxmsYZqH749eauouZ2hknnj8kpjatRAAvmGu1TgE6ZP4ARvpNa82uHiRgESwV",
  "key34": "2wh4rKsBEfrdES8iuP5B98AAMVwMXAynUvkvswsggVySu6Vb2wJo3HH6ByvxgitCURhJ2gePUQRVdQ31DtweDMU3",
  "key35": "4DJpqFoXQaedGGxyy9KJs32m3aeCiTmjhbBhXWiXRuyn7fhCtisRedQq8NXXM58hrJJJnCbTuvs8E68yMtaEayJZ",
  "key36": "tAG1W8fV81XLecm72bSLTmw2xdhWN1eUboEd9BjCmniH98n35VN8KngrUiywxdmskfQtgKLzKUBCF3BGZ1baokw",
  "key37": "5XyLXuPW4BuyEYoMJYRjUxDAApb6eZ4tw46xuoKX46wU8UMBQ1bxe2KtrNgEHnsyBupFa39P6QkRN4Ce16Yee63T",
  "key38": "65pQWvyKbQfDDmmGFgsSVHh9WPSEonL5qVYzVCooHzWhj5i7a11Mv8uTZhdLkTuttpHvhi3J4nr1mewY3LRANGLy",
  "key39": "2yjhikrtNuwrcHPLrNnA581i8dkGEKoARKJDqxWjUASNRsATATNrBaVzWEg7qMWp8UScoWZehMJZLBgVcQyLeFso",
  "key40": "3EChwjhSPJRjuZgU23nKELMLUUykSawPEGjt4v5XcsCqdFWfxHZLe9cW7xx4K2cfPfGxC4WbTw6ArtzpNJbQL2Yd",
  "key41": "4EQKuAAqyh1m3JSr3Qbd79qrCGxdg8H7exyd1tKtfW2AYsxu8kjFHX7ZzR4zKXfkrou7zrB4EQPuNmbz4WYH1Utm",
  "key42": "3HpGdTQPSa28GzKiRPdJpCLBYsL2oWCghR8nM952VRSFxR8KHQYU8TrTCLQ7BFdeCDr3KCLjz4tKkGRhPaZBFMmS",
  "key43": "2gxbfeC8Z1kBxaJ8GTbM7oYcEbnA2zXiSRg7nFyLtK1C7jKpuD4J4Ra6YzphSHiAo6Bk7pqi3BzPtuXsDF3eHWN2",
  "key44": "59mNsBbB9PS7KgCNv2JDu2mWYpb9vCp6QS4gu9P9fJSjjZWsSDpR7sBGAJfCwQBezLnZ6yxSk9q1S1933brvCvf1",
  "key45": "4Amvb8GDE9sek4MgJtvXvpD3DWGeaVjavPHpYQFU7JTKD1sj1ipHNsGdRgvqD28YseEPxXqRAqQjwDrSx2JcrHYW",
  "key46": "u1Nc2H3ULoVeJLCXPdeBTNvEPnqXxdFqeoHC2TAoDimunn9c6GvGPXZjw26XV2aePwTBjv6pAN5Ea62nFZhZo1E",
  "key47": "3GupYWejTXEqWs4yvSPeWVR1PkvSppc5QsZWXj7D5AWbxe7tjjLD2cNSqe7biAsQb7rKYUtLDvCQGyDnBHsKaYCj"
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
