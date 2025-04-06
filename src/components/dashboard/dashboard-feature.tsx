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
    "4BPP7bEY4Yhu96hDwUrdVw9zhXpXZ46N4kdf4cF1WSv9RMLB6q9vxWmMzdq7L8RYW9AhE2BFcWTFFg5fg7udknLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m8wrA24BUB2UBUzfTCBqdof8o8tb4MoeUcZyFY6c1iVvknVuZTMGkh4ifPwtGGzVMECEddSgWiLX5XEfnJGK8UD",
  "key1": "4eYHij5PscJ8Tg63AyRH6nrf6Z83CjxfCyyGQhXYpUAjDVFum2MprybwiaqPk7V5V1NN6iSQbSu1tu4jjQeVsqUF",
  "key2": "67f6xzJ1ewXWcvfnwYLrJjmdAh8X1pmL6prA1H5Y7KqxXeGNzwh9NvYVbtV6QDE4FrDtS7WFZFCTJMtmfvbdrbLx",
  "key3": "3x4WB1bu2gRn3r8KcLwMJKbucKqv3DVi3w8aCwf1b1PL6GaqXtaNttwjpYXtUsr1ebPqZ2Tpf89MLv1gXn938R5i",
  "key4": "3EMkBLhKG4b7RhqjXbuWxRmf2ss5RJBsJqdjq5szhSCSWTf7SJ1jsdK7HAdBVkNsDMKHYQdYYbv12wjgQBxE29Eg",
  "key5": "2xJMJ71ZQ2W5QctwwACAPi4Xn8m9rrWngXUvRHPpQJ5FmtHyPVUJdwmgRiKnKJUgz47TRYQo2iCKgnZccAjy7JiZ",
  "key6": "HBwciXn5A3G8RJSPPwq44UbtoJ4FnZgiPRo56mXpAL8bkhRQJCT62mbENPxb2vL6tc37jv543pUwq5yfv6gFVXj",
  "key7": "3mrEDfEbMpYvu3b1wbLiVWU2wX5pbc47dCrgzFU8xguTbCcWacPH1cm8KZKwcGhf5oDfwP2Y4fHSUybGRfuT2tht",
  "key8": "67ZANZtzXs9mdrEcFaGQ1JZbdLhKfuexUXU6TKNTdXJhyFgJP1qiBy8suNsjNEbs6babD3auXBQ1eii2AVAWzYU2",
  "key9": "3eHTvxJjbh8GoXfzpUPZDgRAe2KQbU2bx3XurXvYVJTXxWfYj9L6pxJHYLvAbnjAmpeVcz51TDrBc7kJX1bcjQ6E",
  "key10": "2AqVnodNCLRcC8e2cVtUkWF1AQD5dGnkFCXXGFTTfPR2LoyaR1v3ow1Yh1FQCLx1h3TLSR8a3PjwwVejYhibUDPr",
  "key11": "4LaUNxMqo736njsRmKNUKFNhRn9G8jziDbb3AN45nnmomMkZ2iPqahMXu2uxijBgiCjDBzYbgEQhWa8m3f46WvMa",
  "key12": "2yEhSmwz33iwGrh7zNQ9zEYLDaWk39zi38qs57niXX2un4hRvGAFSHsjmLWnRFBYhZG1j8LLQk1oCLuyJ6xAzVpU",
  "key13": "4tcUaazNoWB75FENXNHpaNs8ao9wcqm3o4z1uLrGHhTK1wCEyrYZkeT64DTqLLr5Eo1vs9Tr1ezUzL85YKYbcTVA",
  "key14": "43yTqHjXnhGYq2v9FUFCSf644o9cB6CPQSMiXotg2iYymVYERRC3bSAMR2kh9EB67Gdo2HRVxkwh5YtUsJczkMzT",
  "key15": "5YdEARg8TWiJvV5Z8kovPDcacZz1fpdtUvzWVdRyyS2TyuzzBbPxYtLdqFeyE3KZKci87ce14gPFvTYjeVDD5jGX",
  "key16": "2DN4GXQrNwstYWb3ohUwcKePQMWA3MUKq8cZW9dYQdy82Tcwp2Nh4TVr8jB535Xk5at98WVjAtz81zJ8B6uVTjuv",
  "key17": "EmCV2jgyK2c2ZZ8u71WRAosjfbLL8oChHaGg8su3NdjmGoTcnGe6a7HAxfRVKrjwxYVnXT5W1HD2MC4iFUoqLfz",
  "key18": "DSXXeVgbeJindRJPKJkvmZcAUYNbhytzvAx2Rz2iWh8z2WviWmjZZA6EVUex6wg3p2NyBBRVYWHDEgmeKbZfUV7",
  "key19": "4NTzXQa9Q9cKJvWeCudrWCH43KHhiCd5yoYheoQjxWDAQ1jgRNfaXY9EFkR28GwAg6akvVwHjbxSDiqAWG33LktK",
  "key20": "3we3vRQVgCn4ehFnEBLTMvu7464GqqkYZtgYbs8ndYKvtR5XdvqWrUYLRe9xVJHRRLepFgxTFGRTywZXGXY3t7Qs",
  "key21": "4MCWq7E2sx5ojmeQCvZDES2H6Z995nr85oMrbsyb7Q4iyaX6gqPF14S4yvUBPq4XF6qZTPMDpXR4ufwax33vafeP",
  "key22": "2xRRHymXoBwGCyPZt1inL2FxPDkBLrRkTj5vHVLMND5FzL94neXF8WF1i4A9VXvkWBuvzN6TU7oSfKutLQtsBYEq",
  "key23": "3oRqdtfodudKimotdMh61igZo1pgSmeqpWn88FR5GgU6Q7WBoF3zJ5VEM4xPZ1GmogBQ4yWAZgsVdVmwb7uayxok",
  "key24": "4UQMpengk4pCYZHTG869fyFL9RvawYhNzNZ9xFrToWHKAp9r8mJKvmsf941LgYeepX484cjyXwNeAFkNuUjSkreA",
  "key25": "5LfsPePHjAbANTHUDCzt5PS7Cs1bYyTSdYy5SFJcAP5ax4cVQxp74By9Ax383BGuutLb1WdVH75vv15YLW1F3GLs",
  "key26": "3b93t45qQvXEQo4DuS5gL2bAPbLknGxV4Z6Mgvmkm7xVNVxXGw3ERkWvESzKdt4pHP58dFcmseEmPe4qDTvaDLQa",
  "key27": "2NBadPC9CxXnhdfHMQM8ZHLtPKc8RKk2ZWtpJ1C8CFNqLJ7QaemYsNofKEyNyid9kN891vBjBXGYBw13fpHnFACE",
  "key28": "3p2RhhSWUHAgeHN2CvAiQUSAWAT54pURKwSHH7apwZQQFJQNuAUq85rjyTRoKSNZZiFts98UGpMFtvN7DYtan2qW",
  "key29": "3n5VfghoZNkPWrNZCy4JChbNy81yS6qMkrViZjmw1rviHDewHoCitpB66Fn2Y5cFWEHD6pkbFXYz2UB6vYLd2hAB",
  "key30": "5zNgQYBWHUeXrzVZp2nYYDi4XnLtnLQGgQNdU2Bc7YQtFcj8AreGdmgrh8CKFELrM9ok2vdKgiv2MjAiZb3RNSNQ",
  "key31": "sicMMrJxA6hEgVqNXVSFpe74mcwHa44dzjsmQ72PJkfSMU7L5K891jxA9Uvt1ugBUri1e2mKCUii5fSn89akK9R",
  "key32": "2kvGxETFUQnhxDRYaSQsFS7AkZGuFJxQBRWfU1LSQ3kYVicxYky7GXgjkJjBTFdvAiehg1AJfAjEVDXkkELNAjDF",
  "key33": "3i59eS7oBtXASJWo98MyyTrtHYUajKCtmCmbfzR6ZMek4MrX3obaUeLSZvX8kCaYz3on64zqAEXkRqUH86QHjm25",
  "key34": "5949pKXdnDEiRGDrbg8UxaajCe2rsm8A9BKJdigjxeG2LJzmDxFQE394roizV5FqhyBXvLv3R7y7sJUefwTXWa8n",
  "key35": "cFVe4Ajqfa5xhw3YkDQMuuAQd7eDaT546mxYp9jhNeE5Uv3hbQbTuwvsBM1D91th781tHN3Jjmz6Ph5YTpYKX6X",
  "key36": "2KheHivRNCFzuu6GxKY4b48Nth83yJ5ck5mz7ovXoLJV9Hxws1XmXGod7qG8o1c3YSCwJkmfcfACERaD7EY9Cs9V",
  "key37": "vzQVxC1Q35ZAWDehErDcHh5j7vC6Mk9y8zW5EE36W2mjCurpx38jLVjcA2fEYiF35eVQm6TAJaUGyQoNz8BNx8m",
  "key38": "3eeK8JBtCCdWi8tVpQiHKuuLAcVM7XnMsM3VGVYVcn8dHFinT213DcYpf1f6sn9dVSHHJc32kpQt2SEvefPoyD6B",
  "key39": "4y2A2xAF5Sz6AYMgMwPgkxxG29M6R41hYPwyX5vGtP71W6uriF8j3yekZfs6QSMBsgH6isXtimFPjXRBd5UtS2pA",
  "key40": "3qhNyP4K2mhZmaj2AjgD1zTNSwbKE3eN3ExsfmonihXbMpGdtKPiKAeayeJB37eLZxJmmUvhEoKEyWW8MXYjbwZn",
  "key41": "67bNbrDapLiWNZWEtLE58dnRtN96GpK8SrKrrJfx9pYbETotZ3dTgc4SFFqqTfx4khgFk9oZTVH9twr3FRdXiqi2",
  "key42": "3ZScAKMQUHpr4hiRw7pDogDA9k8AFLyFdMfexKA9EM7HQ6xuaqE5Bgx16Pk2qmxHcS6peXc4VMxmGULbbXeg8gtH",
  "key43": "3WY2HuEn4sV7WGZJe1HVMFKkXTHYN5oWuGs5ybR1kyb39AsH2wZE6gFmZQduM5xbuBHBGvt6ZCQiyvcXDqaByncA",
  "key44": "2auxRJvrWrXdChpxY26DUYaFc7MQEQHLS93hdFUbQ2BJj9GvpL289ug5nnVoshCzewi9Me476igHpgEkueq3VQeS",
  "key45": "3dV8GgKfyj8u8kPR1BANRtqnbMkk61fWAWTA4R977L3tVHRRrCtSoRgU7ZRLvTvpBGbecJR6sq14mNXFecGycuSr"
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
