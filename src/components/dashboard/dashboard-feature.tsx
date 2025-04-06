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
    "4x1eKB96nEQuN2eUSCtsorQqhw6TkQnqsyw8zMGg5F8W5cVQqcZnmhiytNfqSjYLVSxrDN7efzZTQPBr4nhSeasC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7JSYMDjjSPomid3iETmv5EnxhKut3Y2oD4DKMfWKQSQcJ6CSNkGxnXGMXdjHcp5d3CxcoUCjxdSwYnVuVyFZtm",
  "key1": "5ed3coMWqDuEDebJyECTxaoVkmffiBii8oX361J827LmDkcNhPKQ3GzFeNU3nm1BGqxfxQFDtTLVmNnTX6tW4BGf",
  "key2": "5L4VDaohiVxKtCo9rT3kgSgSHWJPeyRREYmvqym7wyQ1y5LTUMZJe75J65dEUk9rrE9gNVxH56kxNHbUfZajjvNx",
  "key3": "2r9BC5DRLZVTYezu7FS2cYkohtiQqw3HNvnqmRTFwimefwP4vwHaTqr3Ym3iYVSxmxro3xFUnziJG5qT5q7Dzug4",
  "key4": "2BZrGCNqjC5mK6EH27bEvtWPywTV13Tx8HGTMNPbUFBHhXCDMJenKLPiKceLtMqiKtvmuvjpBdGvFguzbh8HNij8",
  "key5": "2K3CgbzhjGA9DNWiH3GFKKQBYj2BVu1AoudtUmQcVJwuUPY4paPDTdv3UjXQRLuxVtNdNkGEL8GbNasqS8TcpuWd",
  "key6": "2SvQ6GfLtpZeWoCFpwMGEQqaj2QUNr8dHWhgh8EbEKLZoRwZ7zAy6ABXA329jBXnvbyiEWK7vC4DX1vC1LCuoxHt",
  "key7": "4jhD7WPfMWVUG343HpiwZw5emjXzeRULP5haZcunChqPjMnR12fnBZkrRDbhgNAuLtM45YZcDeE2sA45K9ayQQRF",
  "key8": "3VMMf1wUDEAPy1qXHK6dVgZiEqnujicPRxAeP8S26Q6rcVHFte9qou9PYmBFwhZLdVtUjWWS67nMB8XVrrVkNz4D",
  "key9": "51yvwivm9enf7qABpsipFH1saar1Bm5bPn1UL9D4EmX7eoMZ4VPj6LXDPjKFKtNbvQEeCPyzZkLcFbYEFhVEeR58",
  "key10": "2XP5DfBzHr2oBiyKwt1JgG9SA3HZmNruCEWMJphLBXsjrmqdAE4J1uXrUEHZpqVHkL3iRULALhYC9dJjKcLKpVRn",
  "key11": "4zj8aadEDuZoB3EgzXqZJW5BrZJEq8yU5XFXi7fos8zLbgXArRpAzB5W9icz5yHyP7fxyvFGNa9dhN4nhkJ1Aret",
  "key12": "579QJd3XSw4XfnZY7outQQwua3SLdRTQ7Ckf11aw9c12o9nv1U8P5vHxDqKMbZ4VXgqHtpQzzXKh2dWMtJPdqvQZ",
  "key13": "2Ksh9PDyQFSuh1uqTEJsLKeV1fzRiWaW8CUErFBsQNGYMkUzmkqPNDqK6ZHyafo1jatzxPEUrDvDizEXXdK69KRw",
  "key14": "4w1L6yonHZrH49djs794p6aimxXhCHvac5kiVCzH21cYeSq7aoZFkrYQYbUK8fUYQGGqeKAvALuzMetTUbKzb61d",
  "key15": "Yj12cspxnJLmYJchdQ9Q1ou9emjmEgVkVEasp83PsvSziDyN1pooJ63XjcWCnaWP7nsxH1GFrc2nBb41y9fh6QN",
  "key16": "48FmCXAU1nA1ZCWTZ74dBdF8K8zqZApVE7r7EFRXF2fbXXWVSSmvfoKbkB8nYuzVWv4YDwzj8WF6xsCD82DQ1bBr",
  "key17": "3NtguesybFEHp1dgYtqxNSQmT2KbBvhcucb1DACmZhAtnbixhFxXCprvKdueHuK1xXT4uLZpdwfmL7SByDDhq3E",
  "key18": "2TaqEuoBzvrPM1GcuefQTa8bbZQyqsvcFxd7BRisTqfd73uG7ZdhuANpXRRtPT9XeEBEdae2sWMJ1yexiaQdQNrD",
  "key19": "29ebQVfssNs4Da2sfLPJojidjyqZ5jQo2dz9j4YKPhRSHiQXE76grpT1Pwy856M1Z93ufcbnhsDgsHYuSYFK9qMt",
  "key20": "25FQNWhj9WrFuFVN91Stap1KRzCQs1TMfRJbEYHXkZePQP5aj42gnEDPQ86e4CPRqicpNcacG4jdYEQqdzRjTjDB",
  "key21": "53kvkijbS5yF1S1EfMoz7v9LRCyFHgecZ8XqDoMQG6Qhw3uJ4qo23k7yfyZjCvarkRebFk54YMQWHUtpYC1eqrwb",
  "key22": "23BhPXPLGw38BXXieAHrV75GJHqiAR6XCSK3cmkudiZL98FdPcjtgEkxLPoJ4rHmjbRvbu3fLa3jGjggDhDHzCp6",
  "key23": "NzdWBjnWQt55UVSiAHLU336h79A7uRKPXLB8dYXU4V6sDWyV4xTGGcvDpnLPe9uWmCt4uD2hg9fi16jES4Wyyff",
  "key24": "2qo7RruF6Rt26KptVhRG7KA1CbAEdvgyJ2qzET3HczvJKxDWfvMgftr7NTFsv9FtHuuqi9tPyquJytrz33S8Xm4X",
  "key25": "34mEHN8k7NRnwPpUSmzoFMGG17sVntBHBEV3aBNazwaCRwD3PAYyFCKUy2GqHP41nh741skwhZ7GWQEbrhbd2oNF",
  "key26": "dgL35uycSJUnDzQ5UhaSUbyYk471CVxHeXns4tGitACtm3FdFrA7C94AnWtCx4dtHHEtfw56YLxH6ee1cjE4UhG",
  "key27": "VJH4jmEnij6Uaxo1oMYRiUrmR3VWf9Sa4hM4WtqkmuS2qNW9ubpMTNjtpPqFhXj7AunGSdjmB5j1tQyEcpPDUJf",
  "key28": "bL1E5Fw7QZTBNGfqt4GuLUESpPQaHqHWFeJfZm64wansJLTiUFxqojNGiuBu4r1eXw2saBoYVDz44U59vUzFoRy",
  "key29": "5sshWJFQSiAzgP9144i4XhndMXHoXRtHisXxZtqZBMBbJoFz8qrejkqCzoevAXVUndTRF1rDjtfnKxFfE5GSkgQE",
  "key30": "UQgmFPnbuS5Zegm6Fyvh2y54DWdZNYVQP31hFfipekdaKsU9FSx2qo8otPfu8Kc5u9dLS9ZqMjTXYRQ1gntKxyH",
  "key31": "2FaHwzW5gaHmJH9p26mB7NdHJJnfwYJcbiytoRYYiJg2AX9VEezRhVusTkrVRDRra4p7SYLbhKwnx869wa8JS2F6",
  "key32": "4JgHCgxXcG9sLko1xSUvypskRt9W6vM2GEpYrtgpexUnYY1v7VE2Yg4Dbavv83xJ8tW7ztjQT2bg2oygfp3UWDHi",
  "key33": "2dH9bh4x4Tt1dgaZ9h1LozACfnhcHtjrWmDVj14Txz4M93f5mMa5UYtxMZCug4r7zt3Zeo3iFHFXt8cGemk37GpG",
  "key34": "5aWToRmV5rj18mef1rCz2vNnU7ZtZVBXa4XGDTdRZuVbcu5XSVTCxBwtrLYQ6N5byH1CASPenwQApxmgJqKNzEAs",
  "key35": "5YonxgH5ErcfUkFiEb2WtSEtdfTuNmMEoiHNbujAYLi7bN7jWxVwU1poRFLFMRUk4sgJ9gVUZPn78MGzqoWuBySE",
  "key36": "5h6JEcvkUubKoYVUdQY77PThwaLQfwQ8xisRmP3X545BSJa7d869znjhAbYL8zcM6Vy2EdgbGjuwFXAhEeed5mmk",
  "key37": "2YVjxHrYrJdebK6wEd8C7Y6S3fmYU2FcGsuJKfFyeZc65xtBSWJnNXAQp4UaAjnJ9NRHhfbf4TZhmfNsikCH3ESg",
  "key38": "2V6atAr2vXRaLwYP7WBXwSLuDRKqgtAi1ydttRR2xzMzazwgGXcTmhQxvQaP63j75ZZYPEyKW7e2177yQTy88riZ",
  "key39": "3ayAoaLzkuJZvZa5EZ798xduGcGe46NPTEKW3qVrJrNzdzNBq5CWVLqNDY1m7hwtWg7BGZoy6Z8DyQ6UaiJUFPP",
  "key40": "GPTcwjiSF8SQrajNZjLmJgbjE851WzDejV5394upfba2wjTFBfkRfUSgRpb8c6WW98PrqUN4xS1zHUqExhf16Qf",
  "key41": "3FayvzvGDi5WixJLDNAvRN8g5Yo372b3AL4XtP1KogEjmbgXu65g5CfL8ujYLagPYbBUAYC9mSKoTaKiDotcaqUr",
  "key42": "2faMWcCukM95iqixoqQRZRRW1jyWCF7CTcjs2pqxH1c8U5mieFo1wkJty5N3ah5Nf3HXPk4WniAf9EJ79safseu5",
  "key43": "2mBupDoa3WifVGG7V7rABVtbGV3Yrigx422FBMck919UnFqZX2N8QazGZEiitUeNLJM36CEW3siWQZrqAM9L5nyb",
  "key44": "2nJREPUUaKKgFQmRECLJhc5bgqeU8SxADnsocqdoA3y82EL7ot1EF2jC7zFVdtGJgsG2uZXBcmQ8YfQZLndoQXN2",
  "key45": "5bEYh9ea1VJbghMA7hSmMpExTo2WnGnN7eoatdBrRiKnTNv4eNBf1NX3JErTVYfwHuSZ1A1mFL44gEKtPdbnwiUq",
  "key46": "4rX29HHUhBxBuhuUBkgf9P1yu9JeCHGLBzRb4EC15v6drx6VSmiNB5Kp3R8fcoGHP4W8mc8iV12ZR8BFnRzgWbwc",
  "key47": "42Ug2VGT4zsEDktGpCwLYnZqkA275GWJAN3sPNubiwtsVCBrUAq2D2vAvWs2vRc6nWYKtTTyAM93cSWkZUYmeMci",
  "key48": "4ysiEP2M1C5fcdknAuxu4SX3zt56oK3vB5kAgDiDGmUhBSRDtvJVJoB11zWzD7FStUKtnq1CnkbH5CPso2hN5Qju"
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
