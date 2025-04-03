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
    "4ji1Pvh6LfWs48gxP3P8L677QVdT78m2LGaYuBjfZ6JdVdKM5Zm1yRLo6DKepfkQScM36u5DXP44eotoNmC84VBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRodQEEc7bXMEgwskm911PiqrDSJ1D4h9mAxa9tVdAQ8asqg7ySZSoYbgaCFiXW5BqZGFL2mr6qcM6ythuNMo9W",
  "key1": "2C5WuKjEj5VN7S3RxYfXn1uVDhZjq1bcChaafMnH6E7XKutbLirFEg3D1zHQR6ZibqWPL335J8j8YmbHaWsnSLGB",
  "key2": "3srYSLzaPRU28MCtmXQDW2QqYEFFPJoVGXhum4mq1ar2TPurh7uTfVLuo1ecjuT6JJ1y25zTuLRmtZXdAk9m8Rx2",
  "key3": "64HvB813kaWwfDvsE7khT3p28WYyVXL6oHyiYHxbRayCT1t7u2rxvAcQHUCJA5GLXF1AEmPGsYdVHqsDSDrrBZgx",
  "key4": "5J1VHzvJKFGzZCQQrtqUAxURPKNSSyEW9EMpqp6xkXmxBDirH7tGkgTUJDgpjYRk3zBw8hMhWYir1ZQ7Lj4rvxaH",
  "key5": "3CGcVg2wHL3mcXJwYdZjQvCgoLzZVA9wB7fV8UwJx91sk85iUNEEQpPU8Fd2BBfM8J72z13ZNZGsnEJ7TQ7SnMo4",
  "key6": "63PVzezGkz4PHYWfFwNEiKGsPQe1VFFs2pGwZBsXuXbnhWvMLuRc3N9q7y7sAYAXu1s59HuxdtXgq9z9Sp7si589",
  "key7": "423EtsqWLq7Gcnq5dRrWheP9sr72qty1pRWYznTQm64fhvMdZH3dSaFV7yYZdpF2qSeMX2GwNXkinU3DQFq8fSUh",
  "key8": "2Zrow7UaHCFLK7VtyyohpuYtAFsL8L9bzbpq3B7KCGKDs6E6T3sNiDd9ceKTucJdCkSCezqPApcq4zioNDa1vmmA",
  "key9": "4d5yaCqGQwqFMCCuUmvRq4HJwGD5SUdjATrZ9kwh7jbi8iehvSAzLQMDgZUtS6HnFKvsUmVvYx1n4jFvitSLzxxM",
  "key10": "4RKpPUwVaGbvANqXaGxmU4BW1BEsGbWDtiTNwu7FinBRjRji3MrajEZ6RVeAmMTuEGVmjRcefoopTCmRF2a4t4PA",
  "key11": "3D2p39QchWhRFo4bjswbvmJNVMDQx8n7YAHzFYN8Xo23jGfaEWXhrpa57CoQ1NHc15k6XRNGcBkk3JYQfZqAMamk",
  "key12": "s1RJug8oy6XjwdYHf8y7Lyog7ZBUne7Bft1M7gHJeKPEuTyDwudcHrhQ2V1c8sPEaVMA5n5TjHRjmC1GTFQw2R1",
  "key13": "4zQ1U89H8kKa7Lbw9vfZH6dtz4QQRoq9AT6zPWJAbwa1uhna7aTCdqbBjak8UuQSQ2xvi2NkjGUVc3o6ZspjCVsY",
  "key14": "enemUCi8NFmS6AJT5ycjxZgRaQFt3cyxkHji1Qj8qaVfGMHAAV3AMcButWSXcCKeN5zMrmbuoj6kok2kecqHErd",
  "key15": "f5aj4ksw3rZS2JAMSRTALottsMvVNfJv9jLkdbcPmhN33yzqib9GtnDjD53ZQ5Z2qaaeTuhBNGiZxxZKm8skt7g",
  "key16": "5yCqqJRiFBiFzfFhQyRkT9geSEQ6gtWJqJS3vbTaVaK6DeDJHmJoVTmsRPFiTMNcVoTWVAfBGCNyF6Axvj4oR3af",
  "key17": "5LKRjRaQMNG94umLCgMCDHjGCf6bUmBqtE7wQNqp7B3ZEa1Pz9VN4svLTfPZZje19f6Y5kfGEdKTt2o5XdYWYcV3",
  "key18": "2dG912bqerwPkdzc77JK8JdaN8XwfYxaR5cZxrzjWrS8vJCDJgXfUnfhfVggkHY2RsX9w6eRp7oi7H5XZsXoHZ8E",
  "key19": "2jop54tLCcmPbwKq5EYRyajU6x6LsMhn6rSt9J2jTLJaGFj4669CVKvUH3kYXYAc36TJ62S4uLBR943unpzMs7Xo",
  "key20": "RFw9HV14QFThAXB3HMMe1noFsnHibccV4qVpAsPAhxsP1w7Ws9N2zCUN7EfvW6coPUH8iksNX6pSn7ZEiWJNPA3",
  "key21": "5rH2n5P54DsqaU5vQ5tbmiUY1HcxmpwpjBjkmRw2Vy7Q1dpJasbUY3FWAN25JV3Z6oUbBBSE5zF1Rpe5C6LAik6w",
  "key22": "xTE179uicVSXqn24Fk6RKnDAEEtdo6BshzaPgoeEZbmtjjzpwX2M5TAv9ebZoBeHkrYsKMw2TpytVEyk3LWHLnG",
  "key23": "5aP8RJJ1EwGTwnT9yf8qsiwXjdAcUQ1Ek5Adqud3YFYrKPPVYLfJf71VBEbxdhPAuBSAVSFVxdnsKxHbHTx9bn32",
  "key24": "3kuUdwxYvzXmKY8m3DdJ3DpaVivUV8FnusZntLwec4JtNymxCtDu1pUvy6cFXVA9Z3EaH49yWUS826rSccFsjTh9",
  "key25": "3HNrUERds87qQ2tKXoUuaA4dmM5vyygt61rs5bA1SWQPFHwSLjM9rqkokbSUmb9e7T93qipe4Wp4enBmy1huvKVw",
  "key26": "5XNfqG2AitQP3hTMbeuoekj3aiZsVQAgts77zNNN5WH65EfdWKNJubWbGLkFXPVc9Jh55ihwpAULYxXSDpGPwvAw",
  "key27": "659dA3fqoek5nfhZT5FHnDafp46bVrHCxFLEUAgD7Gjxu17jmixz5kK23aeA99N9cajHGbJDQHZM8mqmwrmqKeu8",
  "key28": "2sPdPCHdQrFHGH6BH2JWPWnuEMZD5asCmMc9remmJUQ6JgtD3Hi8Sn91GM18Qu3qEP2vfNgdEKU5PCVVt9vmpA14",
  "key29": "5Men8AiW2SqTnKpPL5auc5BiBAbQaitaX8WJ5UeQ8VXdU2YzRjGaP3dDFwyJa13J26BishfvH35g3Ts4W7cBYSQQ",
  "key30": "5koaDWqsNZN3zcapuBPQpJWY4fQTWRWRGRch2XPBCNdacnMCTrqYFN6zZknxV39JBuKXpNBmB6CCAMy1E9s4xP1P",
  "key31": "5yXNocgB3TUSFhzyXWh118qjJSgpvuUw8QWXWjJ8aFEuef1iUoStQTSx8C3q9Xc9AYxBmVYPnyh1VZhrXRiCygSY",
  "key32": "53LwC3PDeZsi99XPWmVBsxzfLyQV1xegqTVCrtPhD8WmWGM8CPwg4pS6fNY3gtn1LFfrHmfsoxrvkzATPupeVkD8",
  "key33": "5bGLJvXtv8VUmY4ngpMs95btojFB6sKAyCmKgp779auZdipfR6X5kpZbwxTgzxhp3nMDJkWNbEigUFkeoLP2E96d",
  "key34": "5ShDqsjNe7x2twGHcqvoFueTUxBAKxNyjwm2jmAhvtCVUr3vvkMQTCMt9hwTTEdQSMeU5hS3Xa3qT4MmdDWzJGr5",
  "key35": "27KLrLkfN9HgLdTyGyuwGJSSxzDPcn3EUMzM6yipWayoULGWbAhBgCTnjpEjtpQoe7H1i7rPQxT62Sdc6BVTGQRc",
  "key36": "3zxEm1cFsNfAff5GSZNb4m6VSHfejySBDWJj6nDXyNKuZHRXqRJUXoUw1LkUsLptQBUqaWFkPpuaC6MxzrspkFM8",
  "key37": "3Ugm49D7KPCKTXamSdAQ3bQnLDNZziaCYmDwcEyApfCeZx3WVJKzYVhvjS37nvFE2oZwmZe58HEtB5qRJEcLWvZx",
  "key38": "2jkT4vDPZ1ELmMuhwPUET8TEwLtWggK9YEtRb4sKN3EKjNqcxfjLmfXsNkfUzwZ4VgbafnDfFW7mNtveRcTcjKEV",
  "key39": "5AGFktnqCbYqw7U8uj6HqgWHBKQn1fJ6NsBtPvu3qQUweT3df3mFSQZsNda1yLHCWhsiiAidgLFY9vnjG3jdrmwG",
  "key40": "3dXQS4oYUMW88q8LZULhx35aad6FiQRvZekhJgf6dSu3zbtZHqeRE4bLJaTjKeRrEswm8uawE8wmhUuQ6ufqWsZT",
  "key41": "56vZrxz2eCSDQQkh3nkdUghcWwaRRF1Tg6DQw18XVDRoAECUwEDjAe9UjcZN2GcmZ3UCgEkzgNYHRzMTzcSUwpdZ",
  "key42": "5adi8yDWMR8Co3e1jXEbkDT2vPzPJFZbpTif2dzvZihHENUqfdZTZwX8qTcyy4qRAKVVJEaH8WA9Te7Kzz4QdqnW",
  "key43": "4R6xPkbmQ8Y28r2Dhq1SQUnnW33wQAtNfHoksKHby1aDQXhhZiMJG2y6Ji9KQL1KSMp7MWTANddqKPYXAovWVeb6",
  "key44": "21pN1krbvcp7EJiEsXjHxDZNp5DmoNYK38g1cHu2rBKfwyZhQEaxJCaRb7iHD6ZchKjCXrWSfd24P2t5geoSiHXx",
  "key45": "2yEpjCcGXeWxSYyZCJBwiZRcCQBdk4ygAogmGT4WkWb3vsaJRohNayH4kFA4giGJWhweW8h5QrxoGMj2sAvYi1dB",
  "key46": "bgFpmgrejPYUmRwtuiJ2EfSUz5xtYeZxXsiePQd1vrNAk1eSRtB3iainzWUrdye26dCpBmGGrFjLb1davJkLgzM",
  "key47": "5eD1X6RaJXKshsgbeBQDPMRmCRcyk5MrCuGUVRAyV6vQngvdt2FTA9A5hfPEbZpCAWuqXJuCF8WacqfBktYsQZvM",
  "key48": "33rqjd6Z3mK9JLJfjzxvc38kDU3zqihrzx1mn2wHPigytJGxswvGadHFi1kUNX3X1Uj5VVtaGJNM2hknt8FG9up5"
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
