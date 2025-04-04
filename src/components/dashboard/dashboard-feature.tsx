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
    "51H9GPe8Behd5f8CjbmFMiAhctw8bmrkuT3GVp9VzkYQJwrdmwCGccEaDRbWtmCoFNvANmyKGag2tSa3moDzzyRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xud3uEC2w4iPDV1sD7wmrc3pgAiHuXR4vdTusiHCpENEdwfX3eUWT6if6S5fPJ5WAfrTxHVdQFff5PU1N3x9eMh",
  "key1": "ksYTHT2TrJQBjXNwgTqdbrCfiqN7YzYy42SLq5TJVUbFQkPvbvsiGSXAzeQChmF1si9yfrPCXhwwL69V4GX8qnX",
  "key2": "2WZ21piqho5EsTD3Lun9wJYUMtr3aUofDiso6k4Nm3jWbtVvPMmATJnGthcF6U5PQsDZ7brrmNpZFzbcq6z5gdbL",
  "key3": "AjSV2PPEGvxaX2yjQQC5RVfC88G7LXF2vjkDAWLqzgrFEBnhfDk5Cdh5xd3ncDuU927jFBVEeCaNK3HhV3QGtuf",
  "key4": "5kyccrzn4AfXkWXMK7U7ZoRV77o9ERN3SYqcVRXjHYhvtTdi2X7bGgUYWGCj82J6Kvsv9HfGPxQfBqwe2sPk5mMn",
  "key5": "55nkE2mtaAoV58k6NzhBK4naRQpbkzK4df1Vzw4yAdv38LBqZzX4pRvtiP3x6bNyCZUt8VnWYpkewEygCvoGkcBC",
  "key6": "2cBSBMBXbshhvnGfEzpDcAFoBKLbPkovDDxn39Fp5ixKLVJSzL6RP7eBDVyhGNYfVBYDTGZfAPzh1Dche4Xoq5q6",
  "key7": "4j3LBRR4eyZ9XRgCJtcx1FM4d6BBwaoij6Up1HoFP6oFb6NnrUi42JojZJ4bk6QDPVkE9aXGGb9g3fLgXk65y7BL",
  "key8": "4dh1QaHMM7wNT53NL7iDH2cjXFMr5nxXnk7Yj2FfoKDiBtGpMRpF8ngjK4Ar8unNKUmUbJjwXEZ3Hh62XW2i2Z7c",
  "key9": "tXXxrq5izKErP3hWMZrP2iqukN5A2J6m23FuTNegd8mZPVTq17eBDxUcEAm8FSipHVNFp6sxuAFSRhyw2C1hCcd",
  "key10": "2ak2GV3toGM4ML7arZWgmBz26YyiqGiTDt7rfa5gve3cYcpbLCshx9uVrmoTWtFQ3GmEwsfkxXMDTG9NXdLZZLwg",
  "key11": "3WEQB3qsGjQCu9i41pqFyrdiybAyGa5G6XWWvsnPsJ5s8ThrWHGjjemSJpUjyvPkBenDKhzumaytXLLW5so8rZNz",
  "key12": "55BsSZzvtXa9BmGXrNyhGEg74uz4rVMWU8WXGDc9GwwS2UfCEJkcD2kCL5MDVSgkjC7XgQfpXhzYrRavFPWHAzfx",
  "key13": "5KtUFENVPjRypD5pLv3DwXhFJJLfjFWgwPj2rGPzzBwu7cPxMBmiQKLsvDLo5vTyJSwV2FQTXBSCJpvCzoS61oRT",
  "key14": "54epa4KKd2HxpNeQv5VvjgPyVTh9SVYJ1G6U9f4ViZCcWmQRGYvU1JZenGLTSz6uYjyu73rqV3WbhXkKM3bHyrQw",
  "key15": "4maCrRhNbfYZLgqsay16ujgrkbjw9tZecGP1pczqrNYJCfEnj92JW3Uqowv4grxPSuhF3FSqiXX4y1LXRi4NdrHS",
  "key16": "3FTjjn9JBMGhZP99VAXRvaicwY842uLGQ9XSCAtEiRF2K9dk35oCRrgqgj8jPXJ26i8NgSW2RqLkY86p4jZDysdV",
  "key17": "4ToMQEZiwaNq5fbntP78kfteqfZAWpnUCZZkuT4ERmMYSawHgh8FfzoRt1vZyqMBAtwtux4gzWVocwZbVigPCv1t",
  "key18": "ptK1MSfSZd3Rm2MxMcK1882qpK3ZmwjYkRZzPvBATyBvDN6CE7fh9bpqxeuZ1KYb9UWXJBgC4viqTP2VwQYZZ5G",
  "key19": "4hVxDQTYn4AiCwR9DmEP1PXfxqz8qitTieeL5C3DxTME3JeYBX2E6RR1x9WUsQEV2JoRxoJXXtiEQTYz24oAQ4C2",
  "key20": "5PCWUAvb2meqhJSAnjsKFUyMqNVLRHajqRbrFHBkrUGZn4oAKNJeLvogPHeHg4ppposdvpM2FUpdFsSc71WFPRZr",
  "key21": "3KJJ6zLyABJMk9RR4KcXiszrUWQhb4pFbqj2fsXMPVS6QHAFBkEdAHc3LGP5V1H1LBH1GsRcVPmS7Mj1gU38uPkp",
  "key22": "2VGMnpwu1JeqHwihv3gmN78b79imNtW8AcnQcECa6pQLy9rFeBwiJ2vggBziXgw8rsuxuNVLzYQ2uDaVEsFYypYc",
  "key23": "26LbeyMo7sGuHD5j5t5Ft2C72UtAKV21cnTDq4PQSB9Tc9HVhL59y8YuM8R6Zq5rFSswTaAFsweLkWizvBzMdqPj",
  "key24": "4fMBCd2fMqEciVabLDCoEeELeUnjfqsfX8gBpyZNF2n7XwoHKC6xtmUP31CEvgJ5PLFXmrRCV4RjZKb3rBg2W42v",
  "key25": "v16xKbbBzJJFZzUdsnXdugUs68gDWxcYHvjSaTbsokfG6i6oL3NcX5XjhNNCoaKNvp3LnGVZbATHYC5oeaNrNqe",
  "key26": "uEZxVBRsu494DT49K8mjjQDuFfjrvmvhphxhiPymo8XJHAKGpjCMMLmUwkLSZmAXGEs4bCSzRAoqo4JsdNXYFWQ",
  "key27": "3W2SsNMMmWeNCUhhfaPAStvZGu6s1LRmAxCT4HZ8RMntcbnj8omR2juWXvdcCxg2M82Enr22tVwXkDxVi6mNStrn",
  "key28": "3TfJaazGhLumgwz2o4hfDtq17QUumLyXvvkmXGFA2mQFwHTJetiFUtci6iYmZoxepck8zNDkkdqeAjLTHYSLXLRw",
  "key29": "3HTQZUqrWQjV25PnEomDxqpV5mumshRexeAjHceAB8odN1f6h6fQtzfXMnPCGfpsVE1ewP1V47ae7grV3X3ct9B6",
  "key30": "QD9XcRQ7WvqBeGudF5cUhK1QDhidabzH4X1LyyjU8ghS6j1ae6sf7kTEQcE9EudRVx6KH5kuCJKwiCFpQ1C2zdC",
  "key31": "49mawRasF5eYnBEoAfAEhp5xD9uoEdHunjnGq4kZ8pSC5UcbWQDSnD9tmQuMjgrJoXTHJcDhRNk5vYFKxcGYtUtx",
  "key32": "fnMFTzGB8mYhViXZv5nNJxwQyrzkbyCdJwJfrixmfheX7BcjZ26NZT2LpL13GpXGP5uocWCJpjkpUaTzJJEDNAa",
  "key33": "4Mo9ozJC46q36yP48MWtauxRzN4Q1C3NPnsng2koB2HhmbhD5XEFMbEEQrC5hqShyYfbz9jVsYJhMiGojcgBkwoa",
  "key34": "Z5vFotgGV2q5CGFiyvpbrwx9S4zmMFwnh16cCubMGKuLP5VqoG1FwQK8iubo8X6DNiuoKePvKs1rKJA7qvKXveA",
  "key35": "STTJJQkBJeDTVfF26DVvw1VXVF7zzWkG6EFyB3mvML41ZbigMVPTAh16sbrASpJ6DREvRP6JSSPPM3hBwG6svGq",
  "key36": "2d1UfpsFvh7ETeeHCusZvLQxyE5BRMcjHowrSF7p1PPak7XFbLPosqi9W5bndJ4oQRpH4bpYJ43xyBKpC58cy1LE",
  "key37": "3E6ahwS2xDv9LvD6tqoQcMkVdxETczYXweV8zxi5PK3VGqjVz6oWaBfV1fPKXpTWtZGqGZH4TvXru3jjFtvPUFUF",
  "key38": "32iCFuNnEAt6hCk9T1MNQgsQcYscSpU5vQKinH3bjr2ZZTJV9M5z5NQ7aRaQ5KWfvyZqzHt3H4Kk9VroHHTkeVD4",
  "key39": "26sVEwYZBrc2tsmSgBYptQ3pjFbZkQfcqTidF8jFippSLbfr6PNPhdcSPHctNQtYi6XxZ4fcGLTu9AJAXERyDKFM",
  "key40": "2yYpuCNQM31Mnfr4pxv9cBK8Tszs38NJYA3hneo3mcHJiT6oYTbeUzJt9Asn2FFFKCDqCK9zcmyDi6zYY3b5ajKg"
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
