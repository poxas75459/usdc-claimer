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
    "3YJTnhQBpHCHtiuN5QQg7pResBEjnh3t8KHokUrWP4EAzscRLCX6xEqghaAXgcXooESrDHMvoYmAh9EpsiRDrNCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y8HbjLXfkTPEyWY8VS5N43kuuqrhmxAe7ScooYzbEsWbodfFzGS9N62KhGVyBEAHRvH8aNywQ7WYSkBSdNHNBj7",
  "key1": "o8jUYYx6g5kkQXbqLs6vUxVjHx79zmhsNhBqUap7cKVDBd4oGSaGWq4mkmh6szs6eAzpg6xuzpKTvc8Dg9zy3QD",
  "key2": "4Q8F8XWFZKrPpB7DuJnC4PKzmQ5qu3uemRCFGSXGLSJCFHTFQNPNUHzELmH3ZsRkpndhkJsffJ21zEANsr6QECRC",
  "key3": "25KLaRDk8owPqSCaTJn9Nq6o5LopSGMTasMKGLcsTKvNwjCAkwAW47gnc18uzuUHaPDdqYNoiicp5evENE9Xkoiv",
  "key4": "262a3dqQGmu6cNb2TiEA7aXWBvfHvmoSsJHtnJPenTmbCinBwxCi8i15XQfqV5jtkoPLUZEY14iUHLfVzEJntFjL",
  "key5": "3md2LdJ1hfyV4uULrHqAjtj165NAcxPFUdt1Hs8A3dqrQaf1NkSbUj99U5daGG9DtHhzoFgu7UuB5ZH7CEBuVaGD",
  "key6": "3AR3XTh7J3GYYNp9dUd7SJr5prdFNqiGuQ4dq6gJ5sHQxRyfQmqETc8ZC1kr6eP9dRkikmDyEDkGgzfbiYSR26iL",
  "key7": "FH37y1Ltup733KdcV4iF7t23tvj1UHcPRrM91eBMsubuXucDfgkmS54XNqQWtCt6UaaCk7NEkBLrNhdr9SCKzJE",
  "key8": "URT6fgCpTaDAWG6kdcvdDLRkAbN34aMfi23Re6EJqhWP7KjLxJGkP6sutx4n2qxzJ18xrAXCZM4HNGwD3Vq5MoB",
  "key9": "32y2zAL6HJHjr5hrEdkdYuQcQA796fktftd1Crm71u73iFd9sKAYUCfXzPYiwjL5LqQF9BS7TmPo6atLeWshoNYu",
  "key10": "4ifKSpmPNfk1AbevY5Synjjb5GguFt4yJNGpvxjoz8RGA2BBrXcWME3pD18WcbCCwMMVujt29nJ5uJcFKetrHE2L",
  "key11": "5ZbuFMj8vrsZN9f4FSgi9tSXvxWENPvgcTTytzeghGWWA2XpimDedmezzRrJKPb8tLGbfvNfL74vA8WUtT8SptXU",
  "key12": "4DuZJ8YZBZbHsod28L4N3w2RKBLeB1J4YpM3PxY9rFYU9gZJLco4AhKmsQzRNizRGFuCdKZ9RASYxYimwv5ukQMk",
  "key13": "5WQTzbSVYSUswFpVHUVQy9gTjajnNsdYYzQiB3LEbK4tqqEjnoNCeF7pEnuhpdnrw5VXPT6ov8WNxHrZrm8qPdHV",
  "key14": "3gVzPmPCT9GB32dc3Mjh3zrp9mVNBiBH5DTxqLuXt9vPgChPmAjX7h71n8oeSawkiAMKvnq1rC24DcuufEWqVnma",
  "key15": "62WenCHqMKZznBFBM6tQgQeVQVW3M19nVSE9uQPHQGqohDGH71VzxyoBMHYN2DL1kh5Av2eReQ1egtrpVuSnZJgn",
  "key16": "3Dukph9wXZ6miA1cAm98tSnJaaegYTQtXodGeVLdLQUUrBBKj6d21pno5giQ2kscYL2bU8yR16P3Uiu4oCXTBYhd",
  "key17": "3NvJGhcqacNXbdPnfX6tA6BfMPcb1gs744dGzXn1Z4pKPCvZRnAq4ukMWxYHc9oVd3KKkEBM1DtQJ7nuR5qR15x4",
  "key18": "299stvMivzYgGuzp1vMQPisksfAzq1H5TM7DTJ9vQ87QcDs1kKMkwFVtxBFFXG8osjvfcjsrXm7U4BdF8dzCpChG",
  "key19": "2QPgvFzSrH7FHoYS4j2VKhx7pCXB1M8UYoE8hbADR9U13xGkq77bPMtkkDxWvsgz5dxYkcfXRapBMsESe62xYjnV",
  "key20": "48zTWWhmaV9ZJdYVPr9eJsH8zGZv6xCqPkN3nzwvVVZ4YQq1jWe1b6ae3qA5Gf6wNwgMkAb1ZbNJ6fSDvZagxsfq",
  "key21": "2EjK3JGinZEJwQMmwt3yAkamWEVfNcg9dABXLqfkibvRaTdTHBMcaAm4MUatuJ5E9svac9iSLxBepVKuci9XMY62",
  "key22": "5AyMfUK6CPwhpZwfgs7zZ4Cr1S4NGxKWT7oQ8gyswo2wh6WoqAamCDqcASKwAggZyNHzAA3CXYpmmqdTbX1CNja4",
  "key23": "2kHoTr9CU4Kz8f4C2gj1eWaL4wM76T4RMjECGgmiaMS4y51XGqDiPMAUAc47tZneiiZtc2Uqn83RiofcaGnDJQCD",
  "key24": "5Dww9jBiRLKzLhkRHxeJnn6Y9WftunQyYr3rxLYRYRVvwpy4GNQNYwCDAx82YYgiHGiU1eLLygh6qv7WDGm5Npmy",
  "key25": "5KzcLM4iJypu4EnpJ2VyoJgwsqxnvSQNuXE4EMm3zP72dmz3QRkxW6SdiuzB4JXGk5rE5HikYx75faKEUvJ4HeXV",
  "key26": "nMrtSaA6LQo33fi6L4gbQoK48tXUqTbU83TPJQjZsUpcS8aJzQhbbsXifE2GcB4HcBzNFWEC1b4moUsHLvgdyPK",
  "key27": "5HtHeMouwGPyJi34WdeauqACjwTxatMGC3ekEmk4byxcjmtGaKoK2uRt6zkbme6V86ZLQCXL6yeTEtzjta7q5rQ2",
  "key28": "4eX739dSg5pfJFzXj6Qf1qp9K1xkP7CozpQheyW1MC5SpGitGP3q26Pa1p5U9wQnvKbL3MBt1LsAWQrCtWm427c6",
  "key29": "63tEZpj8g4xnTEWzJa7eYzjgaJzjf4rn6c9juPUeVMGQyFDPEnpTBDYfrEP3YWrsMHetXYTLythcX1GWdHyXgpxV",
  "key30": "34XWDS5GzsbMZvi1jKA5ntNBnt6b6vEfLoZb675caysMFXg3LC1FpdwK5Eo1TBjwsK3wfNN6bMQobXt2tLz2a3Kh",
  "key31": "LoiQc7p84gWdXQKMHM7zw2Saxy621JJFjM7BdPpJVSNhfDMjWeDKxbTrqZVLyfUo1rEhjrMkyuLaMazftdKgxhn",
  "key32": "2StqEMnXzeTsNSoZ5fPeuHSFUNEQPsySZagPutLTGM1X7G7tvQAEd2HPfpWHWEr6eAEYmsGr4c1mwcnLUbn8hZ65",
  "key33": "mKUtsh2zvLRp96qqKN3wzyz33umVSesoud9N7G5E8rDwTDEy3mQ8RVRa13UkT1jC24Q2PwqtkcwAzUkp16DTtU5",
  "key34": "3rEd227CC1VZ46HD6E5ozYjkCGotL9jXXUtcUUFqX8W4zuG7SpyZ2WkaHZAf4n8X6oq4HBVDYyZ96ZTzA4cKKrdS",
  "key35": "4p5z6zfKEGXziipRxoqmFpCAuaXELR7wSmaSvLG8n1gTsKU5xkv1dZ71scquJv1AWdf2SRzfV7XxdG2xciZb1cuS",
  "key36": "4hnVFjmwd2NbLcqxMyM5S7xebW38DmQUZBPnKSsRRb919NTXfkv46jbCLk9DTssyjMocFAvQPasWRKTbKf5dyFZK",
  "key37": "eyo8Sz5DLzbJSMeBqqALRsg1ngMxpHGug16LAqdSQpMuzNGiRHgLpv4rMLRocACSXoGMoATWcWXRKFFVftFh4NE",
  "key38": "3w9Nv8CTYMSfGyZRE5KZ1nd8XcavaoWjRPwFgFuTQozvuHhGMJNNt2F62WqWA7uCLRpETsugJkvVgVfAfpRbVwMY",
  "key39": "2KyqmwacQCtXqyNbupNbAavDxYDoBhCC43uL9kkiKU1EGVxfcDjzV2D538qKDoE7ADZwoeyyp6AyELCyuMRkBpVT",
  "key40": "3KTNHS33jd7d93hzSWQhcFsMQLsKUnw46eDzpogXNEjzFWN9EysaQ1HP364FhCeNNozWFTApTE15ANCPPjbuNBXZ",
  "key41": "5VaJevYsQ5wKtY4SSmsTzPkJZnGWyEBRMAT67qyJJW5FqaR1UVzTA9iFc7zwQufRNU73Sn6hetaULSYSuF92GtPy",
  "key42": "5dXUkQp7BRRazb8Vx4FtGFtnbuUUeN2LyNqLn78Xv96mBvY5QrskmTtiHnVQD6e38rbQy1LSEdgEZyHq4EwfCcij",
  "key43": "2ArPqMzF3SAB3LbuGT4DfhhJYEAv22vsX8HpTyHfduXNk449XKcU342hqHtJE1ZcMrbZBYmpSaScWwoH7xX4cZmQ",
  "key44": "4od7YtUvWAjWEvTMqiDA1hHuwDzBSNehZXXPb22CwpPWjzgVwUKVPPzVeaHMigtCXNsbSiM4XRFGu7wChGNwXGdE",
  "key45": "3H7fcXkqvLvKmnmcrebEQgAdabfbhtVG8LMi2uLjUEoSbTLgSdXXfMGUbyb3W2SYozF1CJK51V4YB3W3CDSbpGt4",
  "key46": "3JT54LLHpHRwViarnqQz3ARjwXgz8UipCx2rEmxHjSU9TRDL585tXdP1e7EKrZcWdN1xTAcjqV3LAzvoNPqruGeb",
  "key47": "48qsXSCBhExU8ztxZTW6TgZVy86NaKigCveZhBVzW8UoSgWRxFqVMgdwxWKitdD4aN8KCiHiS2ZB5AbnqaTPFTkt",
  "key48": "5qzp8JnonuuCsAyNAetCQG86nVzdN6mWywpz3AhwffuT4dxD27jA3YyFWaTtsApANTC3znX3YCtQ1LRkJWdPY2sF"
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
