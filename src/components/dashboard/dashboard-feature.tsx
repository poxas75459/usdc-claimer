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
    "33xJFC7o9mEaaA1oxx1dUjxT5E4Qu2SYgtawzmiYcPFjXoauhAUsd65Rr5uf2hke7FP9iP4bfnr2fDxaW4utfWzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSDy31UzJZbQxwUANByptCBFxKvJorTFJbTiY32z38qCC72ikJV9db8LNyfQecZqtTaGDn3KjLPGmQS4eaYUfM4",
  "key1": "2FEHyDncgDdBmDzhwhrYiEUKgsFPK8rVCse8RwmDs2tijq8Gvi2wweAc27urZLqpp9DZRTd9seGUK4XW5MGTAq3a",
  "key2": "4M17HERY1MQMXL6Ncfqv23rrr9FvzBrn7a2sEiiJVgGdAbsSzp3nBfpgmaUws37bna81Q3WWkQsxeEE8qCThrSLv",
  "key3": "3uzeG81Hvfe23CoUYxRnAU7wrAhRrRN7L8mUpUsbVqz8Nd2J6pCaE3ciKvBUKM62V3UBJJVZL49TG2gfaVed8HXn",
  "key4": "2uihJZHUCz3kbqGfFkTk3haB8kHk22wCvByftmz6yBjhRgdHemi98TRaj5LABwXVWif515rxUhx5xAz4FJnC2HeZ",
  "key5": "2C1UuLHphubiYDYwqCtyQKwz6JNaVCVoz5oE9iV46Lqnfch9bQ63NWBgopftESctXrh5EK23chU6XtCUSfdY1ApR",
  "key6": "hndv5eyUPEs6MEo6TjBepvfSEypqg6fGoS6uTFPUav5UCkewX4B2fpuWJMiAUH6L1jcR3uUrUQ4dFp4v6895kFt",
  "key7": "3UsBvJypoV7jNTBykyvrWjHrwkag9pYrqaR2HgX7c6MTcMzN9BPcAw5KFFYzEjshaq4ToLMBQw9EVceU1nwmVKKM",
  "key8": "5vKojGyqwtoAYZJKSBUiDSPc4N5DRqgHjCCD6DKqNnXpKJ9Sr7iEHNaaEfKxaNK9BaSQXG6yJdNK9Moh7W6CtRGR",
  "key9": "3t3BEMGcRBjLVmx5C3jZ38jUCHYazJEi3gmKAAFw9YadDiTHzL1pswPEGKnB8u7dYdSYjPrFCg4K6eeGwSXFbSX1",
  "key10": "iTmaLMt4hXfpuka76gFY1sH8rUDeUfjmAFYAQ95SVvjGovdXfaLVDBAkQHnqCcysCdp8NpsZhgEp9EHUwAAKfPi",
  "key11": "4r4nBWw14N98ySMjE2EdpPuZnsdomGFsBuiQmbZcR3EBu1d36qW3hDjJT3cRSGg2Wnq2Uh1yTKkDmWasAKNvbCVw",
  "key12": "3EAC5w2vQBxgNz4PjEfGNoyQCNCEUHY4UDFgVDVf9wEPivrVCMFDgkC9WbF1BCAFQC4ihgwgnfGZA8X4U2VrAakw",
  "key13": "2p7j5h8YYEuYGVH23Dd2qx5FMcwyvBx5AJ9VJYLAmS9fdybCaMEWYgeest858EBiuB3Ads3jrJynkuEN8ju9reQT",
  "key14": "4esP8dpysuZ7ni5KeDwiJqEyRr4TqDWADXYGmJZmsgT2PmJdTUDNXqs3UPR86g5cvMfoxaAfrmaaZg5HcAHQXirb",
  "key15": "3CwDhKTqiiQ8J5axT6s4xwenw3uyGJ9e61HqkMrhDeu9YVAsvsQ9f8GqqEDAhFUqoSZVJLf4feAxj1Fci3j4mVPX",
  "key16": "gp5PE91B8mJxzKyLMdZr3vjrqwqije5jA79Z1z7Eh1GKuYjvXgyLmfVmfDE1gfZpFWmxAjSWmmgvLuw4PYfeNJY",
  "key17": "5ZFkhyC5BcVR2m8A2Vdr35r5DnrR1kg5jvERV7pPW6YwDLff1rUhgBHRipVVYH1uPTQDnkZb4Ymqqxj2F7jbs96d",
  "key18": "4aDF4oF1VZsPiiZBeqMzL3PmdJiGRo1JQxWgDuJMuG9QWww34k3pf8RQCMCVgY5DEctvAURHX7SdEcXANpeTvs3C",
  "key19": "4yG5Z9Cw9D8dibHQ2SomxiK2vtjjrCsf9mgvu56ciVqC5ybUVUm9zjt6b6XGp3tk5HMNPyLWSkL4yhPP3vEGDLTg",
  "key20": "3ynDAHQU3HnzApXTc1EvTPxDufbQGhaNzakmS889bdNoRgVApLiicWF4kL6isR1T4NLfSiGqK2E4hxW4NPGfBhbX",
  "key21": "umvuzYX64Ejm47o7EXdRMGN9Hbzz3Csov5bEQc1xocd1ivRaVWCDiwXA5Ap1MzvPZuWZERdM6yHjN46wbRiBjZz",
  "key22": "4oWQpeTgwhgsjchFk7Hy285JmAqaB9yw75BNsnrU3Ph5CGywpp52Wjpq5MhKVdEbf9fyKquy4LLzDUKYLCXZjpDg",
  "key23": "wSc5zhS3N6QysDa3fYS2ZXsaiNiwqonMws7orJz9Th5NJz8dSVVTdrr1cGgc87c2ZcMSeCyLgP8TtYNGsurktGD",
  "key24": "5dJGpxuM3cUxZwm2eQpxr5aZwRA7RQwHDDALVaH5FdG2BAfF4N12qC5m9rhJkQ1AdHFJSth3TpSWEqs8NY9uAPuR",
  "key25": "3j1cPayzgjSX2Uh8UXrTx3ZhWsy3hBQqiLYT7rxHDhFsV5Asac5mQYX4RX7jBaTxJ6G9Z2CmHSGaDcqMQN2q6nKW",
  "key26": "2fe8yMK6serKdLZ5aJzZ99aNV1F4UZNE1SHoHGnTPtbqy9scGUJyAsw8p1DiARrhJXesFbUzCwjLWB57DvdbYHRw",
  "key27": "dweRNHh5D66op9nN61mrrjjjHQ5afEqVUPSPTsQ9YTPjpq1aiMdFitDxcYXQ94vBbBKRTU6xK7qnwVjxFUtW7P9",
  "key28": "48crXikn5kMW62Nyb6MdaeaaDwmfbqTvBTRoyxS4BdSipGUWSTBoz2tpbH39FomnwmSsmbPpwgtpYCQycf1uBSU",
  "key29": "3CFfU5zgmjP46WFP1DrEFPWyT1AcWvf5aftW2Hpd8mnEWT4Yns9rZMuAYdCZY1fME4BrhbL2s2Uo1VR9BxzFWMDp",
  "key30": "5bpJ451ggg8ysyWJ2RPuC12SFo3VjR8iHNLLDABqazHWTLwTCBU3ahc6dZiQHAhJHWSYnaCGuFNPnh8FyhYHU4fM",
  "key31": "Pkawu7Z3kSbzFEJbgv4y8wWQgpgJXGnb8DcpF1i6n1nrMNx877P5jL7dNTsEytMY5SeQVhUgMKnJXBmoiAQEnXc",
  "key32": "2yaQCxTuSjcDaihSLk3E2MR5YrAkbgtUFFdE8FcAhetzoFpaP8tG5kSnCckeMbWrBQ354sTxSywaYEBD5NEXmwbe",
  "key33": "5ZZLF67cK6gcvV28Y5mfkNptNCo6MQcoqnKG4rSE2qw8FdAfpwnUgQVBRHTwuhKysS1fZ3kG6LUJ2s4NogHKiwwM",
  "key34": "4kyWo5kJZ5yuvh3FsXz2VrdtoeD4vyMynEdEo3oySHRmoFAoUe4h7yUyypPSn9gp6Jw3wE58xxGSt57qZSL87VCa",
  "key35": "4uQyCkNw78f5gnsf5cZd3qfEtnhYPAtwXRCDjodz4dpMXvnH5LHNECRZ7QBqVXpRgXjJxFX64Mfj6dFKwxpUHdtg",
  "key36": "QRUGNedsPfX2n6BkiyiL7NcEAv1a5tHstCvMfYQvRUWDFvwK3CgyGrQ863si9bpHfC5VffffpYFHmurJWVPrZaG",
  "key37": "5QbBC5CLeEGWdnUvMX7jHRW4rpGfQRyx6WYL5WxvmyeC629MAcRndM98ZoG9BJhUUU8HtKfXh61Vj1GpWX6igMon",
  "key38": "NktKuZbLwL2Gx1PZAfsv4igG4QoEPie2ZabLX2hpibs5JfUa3AuSET3mb3UuECNZkCGPgoSSyvCSxEBdc2D3FtA",
  "key39": "2KtHFXSX9hcin2fgM46eEPksWDfeAZTC5F57kLc4FvPjiKYsEB9LpWGDVCsufpR9tqnBqNGABrT6i8wSS9PDYSn4",
  "key40": "tm5zw3KRqZ4Ajv725m3EKNdJz53Jw29oG1qpCi3vQXr98QH9gzB9suW8BqhPt5gc9RhzKPRPjTafs29XkjFKM7A"
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
