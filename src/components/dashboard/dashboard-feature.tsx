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
    "5qkPEBg9rwYaiK743vsu1YUPAGEJ3fRjgZ6M2fxEm936MJ3AFMMd35FcWCUMCJ1nXfEtT9nsryeKzNZiPQ4HR633"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EV4c6GWH9UHfr3AHFuWNd6mKu18GGUhA6spmWU1oTDnHMgfGfhygSp1m6YHvaQ4SSFi2zErPYbK4hiFwZ2MjWD9",
  "key1": "5FDbZHbRzG1yhB5CCBx3Xf8qp4Eaqx2KJth1kuJQvC9jiAN1qxpY48L2KUedBmHsbiSD4DNGcRW3Ntmoaon8bg2v",
  "key2": "4gPjLvqpDqYLE5DpJA4SnRHV39jbKecLf7Zf4DTCSGoaMFYeANnkQwnKGVP9fWQjA7ds6TsxA2oFUvKtUm1U8GLb",
  "key3": "2sQpuSgMNCipB8FpEdeegtthKFGdY9X47CBnqSEBhB47qpfgE75DWZdrpvivwkTMGZjfpjYLvdhsgtohtfmhA5RA",
  "key4": "4Kh3nhPrqn9PD9UjPybZZ2vmhKSP86rpd2xdtC2pmPX76hoLucWvbHF65SRfsaJ9g86jLvsuEJ4dxMXVp5dh3mSm",
  "key5": "2TDe9YguYCw4Lye66FXMXb5yQxxarYwkC3JHPZtRAMyoaMcqTSsN6Ubwcp5i2G4JJBCCFy1y87MaiFMGjJenG8dz",
  "key6": "3uZ2ZGfWgLKQPu6TrDpVyMsDNHpxoENPG4yWw4xiXn7uY45vQo7zaM9jkQrJJjwacEBYrbBPPX7Tn5jqttb1oEjJ",
  "key7": "5o4adKwyvqQs3UAkkT3ke7AYoFaw4DavsTgxcGKT3bQNYiM5FctU8fnUXE6hEPe4PkJBGwTWmi21W7ybqkGCp83P",
  "key8": "2K1ij495zQ6G6nKbnC3y6LN6iYnu4MEeZY6iXH37Pb1WSCNqTPjYr51rC7DDJqiqneKQiQZGC2w4SDvUcKTzg3Zy",
  "key9": "5XUkGYGNsvrU6eStcw2sammS5Nwy7a3pqWLedbFKe41nbLSYuexcVa68oXyCcLrVxqcHQwcKE1VLd9WVSCxW6XKE",
  "key10": "HLzHM79YnWBvu64M2q5Qa6TYmRes9v33hiw154AV5EGyjGMw8HVtXTSj8As8svySnp2whMGrehshcszH6cxpa12",
  "key11": "PimdodNYMDY72b5wA26tnSJtFgAsJ5ruNvPmDd9FTC2W9DfyfmRetNQSrh1jgkDxBmxgjFQkzfxP6RJGzEJ5MAC",
  "key12": "5DrsD5qMnhxPQnscv9a5L7DmfyGjJHcLuEkVSxMm3HYNqDTMLDvr66fgA9x25mVWbmZqLb814dXqihocwyb9QFGz",
  "key13": "2L9waAGHvqaPS3Stage4cN1kpGKRcp69dmcX5XtAdJUpE81QNud8aQuGLyHJoK3TK9DjZLaKaRtf6oB4jZWW6fqw",
  "key14": "56AyqK81fByJPMTZ1b5nJiuViUUEowurJXPhuaG6uYVsFPpd9LFu5D2UFCLmVpLJrr2mtw2s981HuuXqE4ejHFSg",
  "key15": "2a44wrqs4fzQeQoAiGQxXuyhby1YtFLdkmwmyTJr3azksmGSVrcsgGAPGEnPRXz3aa5Kip87cR7eaYLGLNfdJgVJ",
  "key16": "5goqUnTkf5Pz3UUt1AX5175AEoY2b23Z5if7R8vE3Qhigje9t5hXVvwm6szfhwHyaSW6WUxkGjH9L5pfq5M8aYdV",
  "key17": "g4K8eLQXiYRXUwU5eEbPRCTDvkTgMCxQ6vRL73L6Lv1s342asih782XkbtPPE3j3HDLtmZj1ShqqSnQJfsS3aed",
  "key18": "ALAQcAZnncDfhg9B2WNsd4xfTWeQn1Vb3PkU1s2zv2hmTfcEkK9bCHVnmznaT1ksz3sbmyDiryNbh1UeM6Vp3wq",
  "key19": "3BZWHxgvN2Mw2kLZSDoXpozEPEeBhhRhNnJ7iweNajKH2EX38uxDwwtaaHEfe96kecdkKra6ePWLCqKQ3xXjVVjg",
  "key20": "jM4trCvH6hKsJFPUeFmReVB1YgpovNqERqJtGosf6ErsEMRG5YN5YUSCDtTTLzvBgN3VLjQfN6PyP95wwmy1J3V",
  "key21": "hJNNb3CLEcf2nH4jnt4s3yBUh3UhYBeKfo3NLWjGKZDzpanFN4qQB3HZmLJQKd5dxNWXVxLfrLaHuGu13Ppth8G",
  "key22": "56JEEnpdFHHEFeUuyRYnx9zahrd8o4FTFSehiP9LDRpfhTCr9LbirjwUVQ7o3hdzP4CcDVu3rm8NcUEH4VP6kjN9",
  "key23": "3XuR5W571Jbt78NYECKQJhTcGmzC8f5qSkCPpfGphDf25WsCm7zsFgwzNj5SvwAhoWVWrEnhzmaAK1PL4EGFFCJY",
  "key24": "x8RR3NvXyq6KttCoep37ZEMPU6iw6SoTPmbGFb2gwhYKMyvy8Z18xWncevNGK6sTPpiHHvbiHJ1tRYY5e2Nwox7",
  "key25": "55sis9CVzKMXHmVdCVsNVfY9GiCV8RJHhmtX36sBXs6ocu3FLreufsVKgqNRbwCdGzoLA7U3ZsZ3PENobpJNzwUM",
  "key26": "4wqQ7Acka9XetnRQNq2pjdiXsYzCabvthfXS7un8rfr4Nf75djukEezPH6q6nCndCRAVw3Gv1fP6yLx7JivM2gCi",
  "key27": "2LVPrEpozZDYpSMhbtchHH6p1bBGXgBsKhenLrRF4y4Tnswd5mgo5fE8YhA5FBrUMJbTPfTvi34F9GDzrFyh8n8o",
  "key28": "YF9veQSFtoVgRwxMgxzhPvwjEny5TAmHLnshfjFg6FkFQAVEV67B2X3Fq2eTvMqjpamzyjXrGeGcULyw7wsUBu4",
  "key29": "63ms9wywFhTtx2ohh89mtBwyjhmv2rhwqBk8Gy1ccnCJrgVK6sz53fgbvJ7wNAaLdnZDrD4ZfzR79Xz27aSYAHN",
  "key30": "3gj7GWVKm5CJBWFdv35RcrZ1nBxMYccTVnVFNxVDzmEPTdttB4dD5bJHPeuFQTQuVL4Cptr66bCZLbCretqA46D9",
  "key31": "4EjQZ2wP9xgb8N7mSmkSu1yoX1GDV7PDFgNBoGP4nz2wyXYAbLVCvTF8QCFmp2Y6XmtSKEvMzJZPi1jSGTpRPwG9",
  "key32": "5EbdzMm8b1BuUMU1VMvjz48L4MfPq7qt83r6QU5FbT6kb4pXBwJTVHLBHtryqnJkvqNMfaxHNgARaqiA7UdTjDzR",
  "key33": "58fAPjLUYckQ1H4ZZx8bcpz12sPgX1LVbvHVdvqmPXNbKaGd9M5gyxKxCokscGAKGzsapxnpjZRPSrSyipfo8NTD",
  "key34": "5YZxscQ1wYq3NmMtfzP8ciqT6J5HDBQ8WMrtFJXN693JC5imu7MTBWKijPcxTfodqn3ohK6KD3EiCKQzQdLCviSm",
  "key35": "5qfEWn7SRWjV6bZTJuQBpN421sZNGyEtESzjuxqFJeKEfno8zCsCxE6My71ufJWQ7bSLm15BbMReQwDUXUtwmr7K",
  "key36": "4aA9vAqdVbGzkZhSi59bqxEqDYf5MASVzgbemL11ryK2cS7xY8Fmk7JsUaw2qNBPZLEgrPPX4ph87T8bc1QUQTWf",
  "key37": "5Pde6TyKwVffqVDw7QjM2dhoGrNLMtnuEVVbNAkx1ZkSpfvgXghSru3AB5UrC6t5QtPYFc99hv12FSdwEYkjHwZj",
  "key38": "RUeDueThXb341vE2sVzCwCjA6Ehx3X1yQCdSdGCXZDcB8MR8uzJ3Drm256Jhi1Ub7c88XEHuD4EE9Nc627PnMgf",
  "key39": "nfmbdzuyw4cCJdNg14NyucXyqudoyBHpstgETCU8guBtctjEgwQHQLVirVT2L1gtqasqrdGLFvzVPbvGamhRWuV",
  "key40": "2bDuFZ44waMrEwsZTsvgp9Gy61sLLYxxg7phiife5iznxhekhaUHzHofm3NgAWJYYCUnPBFdg5n9y3a2h8CCoqJy"
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
