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
    "3HG3vFvc5inF7yKMspCiDtEJunqqgBecwriAp9uPCVBq1bzGESgKycCUbL9WyBjNeQvXerGuDW9kc1uLZii3iuFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AoMeMvomSnRviV3bv73BH4WEo6q4Yu6T68zNvCXqsPMy9xzKkngWmByEk1jFzqx1VqPhuCZ3uLGn7RDPtK31A3k",
  "key1": "33nkARuaPPKhcQjjgG5VkQSHE6Fai6xNCFZDVhA2TNgAPKu5d9Xc9TtVaCNAN5vDfX2AXNVonQMy2zzrVMC9TZVY",
  "key2": "47PEGA6Sw6dyHKwFi6My3A37rhxrLua3bgdXwdYPMw8tBifgLLsemGFo9pwAVPUYbc2opeMo6HHPVdu5YiabTyWj",
  "key3": "33xGp7941TU2nLu66XqGHGkJij6463XmjtoLcQPPGqN3cjb8ohvAuCN56pYQ47zLytnnRcoPDYjnLF1DxXW94Qhb",
  "key4": "3gMNyNeXyMTYZwft4QiidM8e3v6n1wgkA8Vidab9WzMsarJpdUcyaDZCTtTyU5pu8mV5cAnBrjyj3g5Ghjei6PGA",
  "key5": "UHnN9HdFtWDezjDWuWCrXQgd3YoRV58hBGGCzqGMH7SyeqyBTr856Gumc1XU92w9e4EZmiArowcjyhyrd5BVzvN",
  "key6": "4BKtyAXBtERqyCBKzqgMScuBnHRzifjzdArSeBir4xQG2ATCnL3kFpocUQa7j2kdssjJ6t3YLgRNqkuFBEp6LLSa",
  "key7": "5okEbk2NmmHUeUGXpRPPKxzwGEq9kkZWxW9tHwReMg7bBcqZQEbTMfAo3PB84bA3uNNNZm5VYU3xwdFYrPFNHJZP",
  "key8": "3THmnBuDimLDMWHinP7gaHsk7RmmgVH1SidPfs74BC61QAoVJWLLH7mNZ6mLYvXx7uq4WrTxz19GBFQYCooNE5Yr",
  "key9": "atkYMggDAiH56RCAmGsBrfaaN4DSr5vcDTn1gcxSVxwaZ7D7BxERrK2EwjRQAA2MdM9nsd1y7yy9jCYrLeeazMH",
  "key10": "5kQsrwQrQodZ2GhmBoYCTG91hBsg3ihJRMVSMoRUTj3qiKrcSppmmfE7QtzPnQL7UTFYMfMD265t4KEv7v1oE88t",
  "key11": "4BEmHBDHDDZJTeZn5QaNsdjCFcoVQLCcJKgJ6ZxE16cNQBaQncrUy65nCvbWXWMEn2xmmGYDnSfRSuBn9SVemo3T",
  "key12": "5oW3aDkX5CxkyC4UyA25GXsynYw3FS6SuATijCm4XJKkbh6kHLGKShyB4atd4vAx8FMaBuZ6fDVotU7eDEioxpo1",
  "key13": "5a4HCudHbQtpF1oLUChgvHHdFHXXZUNPsDtLxaLbLcAo75V4Sz9qp1mCEcMgsA8Zwf1HovvE11zyRnFbaJZhmfDW",
  "key14": "4ee3HmqS3p49Qmi2MRiFoCsyG8PN6R7RhMYPooG3QP5TTaj1yNPQsFFVz3nkAkNC6udmm6c21dBiVLKMQpPUEerx",
  "key15": "2Jk6H2ku3L2FePrA47FJUQkRAXsEtWY7PTcLHoXZ2PXDorEvwSJQJSzrueuYTiFeS6fwf1D5QMWZv32qapNup1Qq",
  "key16": "4iC8VoWNbh4EMtHSXXw68pRRdsRV8iMdJWbLk4Meqq8sGPywKiwpKp4THiaZoFUP9Xemtdhn8SbsZYxpoHkUsL9m",
  "key17": "4PAfMDVz7Nb13L8S6y3j6BSXcRYGcS4vxHUWFv6K3a4B4Mz1vjqUqa8uBcsMPpXwc6hemGozo5CHQmimf4NuNpnR",
  "key18": "2WonEJgPWA1nHC6K4wssoep6QQ5Ua7ZXdyyz3SUVLHJuoZLoAePM5n1ESLtQ5dwgo2zhry9T37XTyie4S8gGxcF8",
  "key19": "5PZcxicZzjm1QefpzEg5V7BJaoxAMGUCMkeY28uiNJRgtrpWoNhf5zhv6XuXWb2DYbTn79MSqABqQFcNtMSi98Eu",
  "key20": "wNu93hibYijcbmiza6SmbjpdkxC4mAAp4raiX9A5yPGZZpFqCcUMMZNeit8PE4Vab1zdu1aaFFVuJuhzhfV9DFH",
  "key21": "KN6AG7JnB7o21G5nexTM6ma9pF1a2UzYjX6axQPw4kHZhSat8DgtdyZ7sYq2jFiQUWwq2UXMkZHdGYN5jsEHTSG",
  "key22": "5iKLp63mb9UMpbubwTxpvmqeWWVe39JwY7SpDCQzmz4CMKt7jwTwQUSD9XVVoSArTLKX4mdGxR7LLSpLqpU7T37i",
  "key23": "3nSQ7nZM16VhdMkfyeAk5CMmkcsWVF5R32LGbipaD78iLAdGZDPdHL5sMSFwHMrT4gjnzKG9FYSzKgrfbwvr9xtU",
  "key24": "2QkQxZ3NBY91eaMmfQJqJCvTPHGTKQhDGkYFX6jVBFM1vSPRdipyXEr8xjBMHW3qEkxNzww3gwj1pV5LxsUAY8vV",
  "key25": "33hyc9W5dVajb3QqCCfjKsUK2XfpmN4W1b66tvUnSaTDzRjnMBbWqrvx3uHmzuDvhH4XKTHD5mLEEzyUe6dtXbbU",
  "key26": "2SQgzWg4BKQy47rHemYmB8ikpV1HfosvWYkdyEr2t9xDSPT7a5xaVbLbDUDYVGAYEvoM8HtBPpfRKWLbuXmCRdK3",
  "key27": "4TBSpEsnmjFMeh1Ld2pEJzm8zMMbbUjfE684bnZLDj2avGJqKbRvBsJEWvoRazXJ4FFsBaRGn6YxUuxkeUgzUu1V",
  "key28": "5XyPnDtpGsHoam2gtdrV4noyfFCFgLjr4X8Yurmsh2fR12NzVD3kJmRFs8kcb4rP4T5mk5vpamud1GjSyzb7u6US",
  "key29": "2wQsWBksNoTL9amJeBUnzixUhSZcAvsJNHKyeuvYQKvuynkpRBHsKptXzPtJCEwSXDb6PC1bwwyMG7b3wncDVyoC",
  "key30": "65UKKY3FKrx86sLrHEiuNi5c7bbMm6JeniDwBTtRvycfd1tG7Ute3F1DT1pTzpJj9msYmuu8tBjXzD2m4owAx7gL",
  "key31": "41zC2qkfCmqAU1eA6nSbLBziuu1c1CRyVGr1Un1y6FwKxYj19Goj3GMHVw8Xy4xP4t8frqvSYadzek4eU3QAHT5T",
  "key32": "2B3W1Sw7bhrV9rzVrZQLU2AZGfXpLkHjaJs33aopgtyfTUHfDhc5BGZVr64UKzhd4MEuumLcZ5LcPzDieZRcXDeo",
  "key33": "3XVjrH8xtVe8aWPH8YdEuf2UUWPdgAu2ar5m7qU6obyrZGwa3MbaPAerqrgoixGKTX5wUcx44UasALqDHVuN2zSu",
  "key34": "4t9d44L2y8Z6JCiKQo46S9cy4Dk6EeUzprn2ZhrayXw6otp7A7bWUpAapzb2X8MzRzCHseKeiR4jcDVb3qgAji7D",
  "key35": "2Jx9iMH9wTzmvUSucnJzKWS4oRKPevvhvZWNpKsb7Z69TEAwpouatUwfQcoqsdHTU3AgKgsKBCd1SU6yNEkt1YE",
  "key36": "2VmxFU3zwDyg5EJFSDKZBM5KZ7CYY2v4QvoHe3JV6uQSFwKRS8YRXU9H8VLxReTSHBpRq71YL1fQsALPjR4kTMyY",
  "key37": "7EE7AMoFVN8DEVqAt3pWNjn9kC31WvFgERrM1hLQN91nAM1Fp7htYaezfMdxjVsgKTLQZVYbffo7MjZDCpFBvYh",
  "key38": "C2vG61xcxsQgMTFY7R6vw8jarFB1nP8GMX9Zyic59htum4UUjmL1DVWSyTRmE1JJ9UYcmP14Mh2negKMF3AJYeP",
  "key39": "29zGp3q35tcwjA1LqaB3JiXQ3WaW32a34ADZCryxBeaHbggEi5DFixGHBLJLzB95QhbXTAh7pAefr1KZjWQ2qBTU",
  "key40": "k2mkyZVktSSfFeFDyMB1zUkaJq4FVHFGwe2UbpouWyDGKhikyyNqXtmxAtx8rb1Q2WTt4NajQRoeDAz3Gve2Y7d",
  "key41": "5E26AUtDPopDWg8WkirugLjKv7fcvfAs8CTxom3mwxHJtZcanSyhJoaRHbTJDxHdDBusC34CMZPRkAjBbyniWzwn",
  "key42": "2WdwSJmJxVn1Vs6j77xNFsUHFGnxsxd4pbkJwF4HWFqpqkGpnN1tWK9hYoFc2P3rE3oPagufQVe3dn9ZG9YNBoAA",
  "key43": "4AmA7JyJqbBPkui2CXK1sA5gk29pA2Jd5GsVugv4YzctUWe2o6QKGb3q2C8cJwRjAojZLNvEfJfS2FhVGHmuWsi9",
  "key44": "3UXw5HyBHvZyrFPiwUCLx8AsAfw2yK7TGshQR9Nm8DTWmBKDrMD748ngpWQgXbhydB35UfQdV1jBKcwmGKGydTcM",
  "key45": "64KaKAT8gv7zKFyLMnqnWzLS5C3xHgPGwW3LgPnW98gNFjJbWbwGMdkE6DUvyqqNuXVthgYgD35ap2zadNBZRQCF",
  "key46": "D4nJrACQs9ymkVVc3SSdaUXNWVcrYJLtGurtTUtjAkQsqBVehmu8dN3cWMGBRjTV4KFbgbaTAPoF9gnqrhgEJeU",
  "key47": "39jmFvnDKHav611NHrhxXZ9tFGRVGA7YoEmt3Cv7ZZSivwJP4hNjD3FwiguKteBBy4nQmY2JFHR8hvjaW8bCu4GS",
  "key48": "4sxScztPbuhHLnAuiCg4SZ1QHQ4832NjH7bhRWiQXWcttz48dDEikkZkrrH7edCBFR2NC69aymXXfBH5sx7kZ3jB",
  "key49": "3gvT5aXKzeGHWhysx8LhKwGksRD2AMSDn6ghdRJ6ShFeQ3APmTrF8oLe34KfRrG9AaYdkyrxHFvCtPN7EzePeESh"
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
