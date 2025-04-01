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
    "4uoXAp8fn91fnaiQ5pm9Bosig8AiKLV7E82Euj3Uxjm1not4pQ94iSC3FcqAUC4NWZYTYxMzxggj8uLy94LT4unu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MF5HyKMxZSjUTWVjp9CVSmwWt1zgiyAsrz8iL1TJhgVyNxm4xDnV4LDbz2DpYanTCFQmzTP7DVF5gZvAcJEped8",
  "key1": "5vGW1PaygETssX1GUn41WDxvnwm64RFfRa3UsPL7urzG7mzGBZ9asx5xx3GWNt97NonuVMe43wxEH3nmTho5fhsC",
  "key2": "5uucTEpDnfLPT6MTxXkLxMoqnXSgZNBvd4KmUzDoFMLEKNiEgC4mm4dHNfkWouR7V1MEwWHbTeG86jtYeuTLgnrY",
  "key3": "2JWAf9Xof8boPsT9mTEPuFCxkESaE4BcvmQTJcaKHPDukbQDuCBirm3ew1c6zKSyfq7oKtyHbCzM7RrsbAESt5k1",
  "key4": "4rbAXNDZDbrQSw3mmoeDRZpnfc2di1k2rS76DuWmkqgmfXkRtgGyBj5vuAU6yhwZDEzJXYUnaqFEQPYUzrMZ4J7x",
  "key5": "c23zUD48X6LaM96RYnyReN1KbVdY1pN3mrG9bVczReye3WJunad5ApYfRTcJVdZyCo7j5r8ZtzF67XAY6hNCsqH",
  "key6": "3MgKBpgxzgysEdvHdGPXnCZ7VhzNpmibScZKy2aux2LC4cnNGqbvVSkooF6e7qGNksGQQPhTw72q586qX3FbE1rL",
  "key7": "5ue4tatij9qQcfN6SzYGunPAB3ryiYSSU9e1D8rCjHYKAq5dLSgB7NoaUsFr8oME1rynW91wZgWMvPMJWX5JjQ32",
  "key8": "3XobBFEZE9BjeLgJngEEsYJrsoKmLvVHtbGqFgyx1qguZJi6UbGouMBkpfxxjJxmyUNkh5wtNhjVgnM7F23mvXP2",
  "key9": "Cn1GyPyC8wJvJ4bsfZcbqbyiT92iCnErcyr5b6EdUHy1X7Z2NpLC34HT2yLscyWv43UaMUnsmWjZSp8LsYcFLKg",
  "key10": "4QntUPsgvr7z46K4CrGg98piasHh26VMt148DEv1veyaFBx8SsmoBLc88HvFdZ13nu1FYUov1HYUkAm48XTMCv9",
  "key11": "54yrLdXQsUUCtJRvWH5rRodgXzcL69uWcUWvqfAo5q7ui9kLCPDtSkvf23EJMaLkTCqHbC9wwf7LDwvBxeCkd94h",
  "key12": "4SLL3ukmVQMtBgiEAUWE98ghhWPqCNvcF4uK6mJpbnXkAyhTGiwQNNof4jHTc2fH96T9cNFKFPKMmb9P1figYXWc",
  "key13": "UVy8Qbg85N4C5qK8DmcMc7wG1HK2DhoZSnD7Agr77NxijYeQEJyCXpcweLTN5FRzX6uE4Y2LKmiDr9ACrQ93SJR",
  "key14": "2X91ANLtpCWcyLJvieJgxDZGCvQyAymYTFugvGBW3jVxVKFhBqi16MhR3v3bEjbcKdRA3HdmXQSMNjB3X85XoRit",
  "key15": "3qHMSApd2VFreztgpTmW9bNU2aPZrA2CPKoqU8TLH6u5Sn8977em6PiBsATkznqpThqdG8MTYYXuTvoXR3mDywgX",
  "key16": "62Dgk5vxFCKVwxaursoEBPeNp3rm7HE4oYoomVQXMoZeNh8VQZgJydqmpjdPNsH5SnqHckoNUbZqkXA3iLh1XRbd",
  "key17": "63xN53fr45ZByF1rszbUKZrdxf2Yr3gAso67YJggueWqFCwh8y3Xvrw7E2GX1J8FTiZFwvFArZ8mMwjeCz3AAPCs",
  "key18": "1iB6PwcjrEgZKEnekq51eqcwvaV8DmDJ3uwXaiEgFchVSZ5fpHa8rVWy3NdqpEDabhdwXYnT23mKC8vEUq8WaD9",
  "key19": "SPEuRYukmbuGS8PQQ9vRq7Yp58PJNTR29HZnoP7H7s9exTHE4TM3z4Yt7qmHthP9VjvHPonb8ZGkARuLDnNLtfv",
  "key20": "4behP4BwZNecEFxpCSdhSBP2LofJuADnN2JgvjFnxttgkqsG1bCQDCizF1SApkYKoantAh7NdUJvVfTjYQJTT6TJ",
  "key21": "3fkeqNiRPcAs1YjB7zBRbNM1HH25gcUSDuyZXD7THJA1CHEskaobLYXj6c1Sx8sw4xqSD6eGiKsMjdJGgFCJaR5H",
  "key22": "2VPFEdKzRRbLQJoSARSErmyUFS4WC2sBjvwSGr2m5JQ6EQE2KQrXtfAQgVvzbThcqPwE7xJyTe3XS14da4TcKZgk",
  "key23": "2jzfL6MEbbeBU8WueDabcuVepsyyz5qaa9ts7BzDnSmcYjeH1qgHD4XNxfyV6VkJ3Xm3eSXt3fVaWLtcPqNQFCZJ",
  "key24": "2d5BXZWVqJ8c5VipcKhaGYFDv4ATHVxy5UDXGDvR1RE6huUkrDuhZMYM1WJyyUSMv7ymQcYwzTx6eQ5YxTSwNfX9",
  "key25": "5yvzJjWgGAriEEQs8NLfsaTgaA7pKGow2i9mzFmgaMv7q4b7Rqn5J2EJHfbvhSdfydiBdpSsxoNMoTHSxprys4WT",
  "key26": "4sAYkQwg4DdUWxuySLB3HRDga3S8eEbgDvcf5nU8bAz18Vj6nQckV2AQajQw6YQKYZC1d6vkZJ7jGhURBShGGnGh",
  "key27": "3BSXLdHLPtRbG4TdpzK2bYKWugsR8ngwXL1thyuasgq5uCyfbU4EQ1KGPb9aRJS7wiXFqJMvW4xp5FgshbZFG4B9",
  "key28": "4gS7JGNgM6MAqZAjuiXrtBBFengndBeWbGP2uZrXr8U1wrd1BjB7wwXuS9xNt9vgRnDMqxmCJMurnMNVxp7yKcUw",
  "key29": "4ozrDR8u3PyarhN3GCNpMMw7bgL14mWohag883AagAwmxbZ3u2ycVpusr4rQj9Ye8pKo27sxAzUcjH9gW4SQfVYb",
  "key30": "2QHg22aZRRLsKVX7qtTb2v26CfSmrTdnQStud6qqLmuZMYtJm492cC3KWMZyDY6bjcVTsArquU3fYyUawo2kBPrV",
  "key31": "4z8kBnCzWCsoZcyupSVdd1W7wwHrM6DbGrS11DNDX9KFaNZj3ydDwrvQNXsTTNdUzeKrgH2jpUuWmM6p5iLcexCh",
  "key32": "ypzz1zAUTjF65ik2VkU16VoD6BjJuic4XuexSx8FSCLqWfr3JEp4R1v8iCt4DF5DPvbwcApH7Pc13WqbY13HGDA",
  "key33": "2BVFeVmqpe8k2UAKgYRYvPUgNECUfvrSfvJRBSwVpVRAui3YU4vvgGKG7bTuw1RddqpMx8ZD7YnmQ7RyE7Z8KGog",
  "key34": "4yZE6kCrDTvcr4qEto4pHfKS89YgzttJKxKHcESsyVrJuydPomFqL3NY6ytGLhQZKNgYgQh3TG95i4ovqREw3pP",
  "key35": "k2zd1RL7cExWc65ewiwXyzun9gppMw7j5ZVWSZrr5MTsscZZPbFXQrv2aRPV8dM77fNi2NpPxa5EHc7Fs2Wk2qB",
  "key36": "38zM3u9UNEw1yLLdFhJeiFq8iDoNzGUfAkmhoo83WrxsRn2fQ5uKEXQ2PrKKD7n4xTNsrfnQQGF2wJrYrtYSK6wH",
  "key37": "56hQHynTRLjQ2jTKpxRwmVNk1Usxv9cqX3FMhTnMxpyiHThXq8aWdmZvF8Grpo48mXfGQBEgkAMVxCxQTJYHNBCd",
  "key38": "3GUZ9wJ58Rh3k8TurXKdicCJtxubpy4EcTkavjPHVmwWekF2PoteWCWBE1vH4bWWe4JqYNKonHAqeFVd4GQSyTkP",
  "key39": "3vB1YzLR1dTEwx3MjDCsVKHyoL3Ey6KstePMp4YHSpWDcNJqE4Q2DPrhq43kue1D7krNN8rr1rEryM2V3Mohdtya",
  "key40": "2HFV81HCqYE8NLAF8cVXHxaEhT1WDqMPtgnoEhVhvttyz8iQtWvJCVE1zvcEKmysFAud15YNeqsbVaMjftxDptMM",
  "key41": "59fLAkQD7T71UNKWmpsNjMQmVy7XVERH7xu1niMpDSXfAuQqzeetdmLNbV1qezKkvSb8rMPL7nLdmn4MezsFgJpr"
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
