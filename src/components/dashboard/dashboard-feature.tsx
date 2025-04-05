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
    "BE2KqVqeXeNGHZDN8z7vVGggPdL2ARaqpaJcEQ5vVY7DWeH3zCj4SzejDALNCqNYoVm8UxWnnThDNNUqenQTTyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7hCH8pm5TGFfAibJG7QRFd9GzcVhNUQhbQYZu1sHgVraEsH29nqMjZDfAtma3AZ3n5YF92dGUVQyGLQCoMY7Tj",
  "key1": "2eyKSyQECn6arkkAsYEoTb481xjAwiaJZw7UVhZ3fTrDeYJ52VY2hhqJzc3hfMRmZ2kBPmVUnKgEs457v5iLQZHM",
  "key2": "ArVAoWKjiSSNtuAiUWETbUMKaT1fqUriTybcf3jFc9i1HrDNDabHsAF2qAphqXFkCQehPxZwBvJ2hMRWLHDdRhm",
  "key3": "eqU6XGcxNt3T7UeLFVYJsEn11TAhTGwXyTNiwDnshfSnCXe7aY51j4qpXArv4vqQ1i34J1B65Q9oNbSm1CmZ8fm",
  "key4": "2o4U78vUvrHKoah87T1VEbnksW7NVZ6LaiU7gQdwPb2YhHXnf3KcXavNALEZGHYE6g1zFEn9KhcVxvu9yfdrZSk4",
  "key5": "3rHMC7uS58whxPaAEN7ySAsPjyhYC3oQAtgyUD63RLUNxH1mEkiuMX3LoortapuKDnQKbmkzCBdQGK2THiu2qZjR",
  "key6": "2TCZfURVy67zhMsWQW2JVTFVsRNUtoLFJSwWBSyPUdepivTg1GaeZ7r8zLwJaqVg9xNCBu3JEaXEmUHC4UuYXXsF",
  "key7": "2a5e89GapijY1Rq8M5nxoGwM2ckqq4jfqLacaQSvYtobjwgvjNg9999YpnVQr4dvqwdnvoKpZLGc4GmWrZ95evQc",
  "key8": "3GVQqRrxP3JrCCFAhwmMwKmbxLUY6ZN4RuxCm5yd9sGM5nMGHhVjzbxxmcD4cpqfnFMeF6ET3hgNDdg2pXPkEFqh",
  "key9": "5TBk8DisMGT62XcYLehXnvJW1Dt5hWQXEv94aMSdx63JHwiwqHZwdX8qsCVgrE8QcLgMYXsCMxKyNJYa5B2G7ceG",
  "key10": "4PTbnA6jUfz8byuJkYEnJPwSbE6xKGozRoK4gA4aLcmSKF2JuKpVfmFpCshvjx8zTbgkj3D2PRAyP525xBjDPqyt",
  "key11": "5G1VWwkCsdoCX2TPNHW9R6MJK2z1Sh15S6eCvwSjz9pTfrCw1b4D1boj2pCxMb9SRgiuoLJsVnrUdkcmLqmcgFmi",
  "key12": "3NiUSiteigG89hH9KgNkmN4TCh2AhcqSNki9apQhDhKX9BRWdX2iktTLPYVYCiL4qkUHqgKDvfJAa66JsYdvYUBu",
  "key13": "3qLBsg9NEG95KBczQSQyHo5F4My8naXb4Ndiap7Nb6Yx72EE4asoKD8cjiaD3hXJZund4xnmobKF9bbSTQD9YEJQ",
  "key14": "3smzbaJYwyPzC8yoS6HST4hnVeN3QvKfbc5xNnFbXXETAQNyHYw4fXkSJ274XLJ3e5QCjM2XHyKX71StEgJo8APw",
  "key15": "28fMYYP4cE9BZVdx759qKfdie5cHdEsobz1AJuBfJWCgkZXP7HvPiGVVn3Q73qzb2HGNNuJn3VcMcqvWrPmW4d11",
  "key16": "2ATUsccTxVfUu4oMZkuA9ceQWDMEhvEfc4FNokPAzHWgULsbhsDRC3YpY4hBjt21rDgoHSkUy8DxPuxvBpfXronP",
  "key17": "2vTAPeNLw6Gf8ZR2xw8RNPCW74hAiunBMAC2HDGuTxe12kwB78XG2nFjC2fYn4wQQAsYdPDmnEzYuzp6tVsSYrJ7",
  "key18": "3fNp5kkBStZjJwmssYDR6WP7cUV1v38u7qV8pa3SUQDZ1UErRQg2QrUrfRUvYU8dd8qWpwbaUjSst1evxFuDUbRd",
  "key19": "5d5umf33TJyeTY6THd5Z2jd87Jr8kFqvJx44fECtv9FohASJKMvJ2mS3Uaw2xY4xgw5CQBZ1n5dyeQhaE919q3E9",
  "key20": "7CUTTCmtFU71MVgCNjmJJYrphV8BZTQ3zEuqo6V5vS4CVU6Qanq6n563WrPvE7EtnYedUfW4vgdU8BGyAhs74qB",
  "key21": "2P2CdzyCbdsEDZeZ3gLHd8gqKj7USC2CTLmAnqdmRs8UH46w89dFQPbdYVDVFyBuUEraQNZxc7rK1Bn8XKkMkPxv",
  "key22": "UK2osa8FXUwLCQtmBDMkfExPxp9rnjDaZqXG5Y8q5HwAx54c1Q7MkEFsjtyr3bTHac7WD8uQHhtxS5n3Exk3ani",
  "key23": "4dNtsmfPsv8W5uyub6pyouRnwL4aw4qjJ3iE94rerrcc5cKHD51AasETbAeU3VVajNsZ9KpWXkFYNpj1PiCEZihF",
  "key24": "3NhFp7mhjnmpyzJvk9JsQZB5jvnzVA3wHbZkrW3Ho14s1DVcgZrENgtnhmZ5z8TACGQpNJxzi3L76fgjaTKJpC1C",
  "key25": "4Vn8rajjg4ees66HyMtbuhmm44HjVx9gR2SXUexkW5siT2tomG1hGJM1ZJbBAcRmtVW5Lo65EYqwFEd8mez7PJeF",
  "key26": "4gtFL4zVaKsxJKqhp36XakGmjQ1LD2hHsSwLKWwqTSJdThsyLrfgu5DQWfDgTMwY346PRJmb2FVacGYtKnE491U8",
  "key27": "5w6JZXGeJ8fMFeH6LDutxXLYjVLviS32DSijWzn18tN7jTBvvidiZh92QPAawNKKPhcxotkVhktBjyojA1r8B9Aq",
  "key28": "5JMt12GSrVkBDnqNp5pRjiWGBPAPyFZXC2QRA9XVzJf5gbRyHMSSjCvBXh1TYx3eYbdLmHWzJzAnu6WkfQxN9RZJ",
  "key29": "5iQWvXnHif3nC7117F7686iNrN6pi4bD4GTwH26YEC2fj8uCsnvQMoSAtqsZcYPWVqe6Bdpd3aJmwzkDmoVWXcvE",
  "key30": "4ghxvqpxDREs4t5pprTjkayCZK63vpageF2aNLoogjcNco9JfFZpG3DSeUKYCXgz82FouWifbyuxxbZNEC9wx4ot",
  "key31": "4JV82aZ1wLrSHaB9m5EjLf36dffARc6DQXr7MB4mNN71CfEaqQV1iKpaHPbX1BPTzTkx6FqshK93DUukZQwFCACT",
  "key32": "3pesgrZuseL6Wx72CBr2wyjgk4gDZMWUaxAs6ScfBQYK7tKVrUBnzUjPcLx7p816E4nNgodc24YAcjdSRbxtYNYH",
  "key33": "5d5HoArQm1qEA96gqRrw5SNmhPJCjRGYtCoRUHBFW57fM28bUb4LaVqrmcjV4JzRu8RS2vktQh3iUjdaJYbG14vA",
  "key34": "DEHv7XYoDPDyfcurC8H4kcNNbwn8opP6m84ceMSxCuEec4UsVsYRb3vVkyK6tBcGinacPYxVF8dTZQ6bP1HVNVa",
  "key35": "SeQFb6acn7vwzhheanPbfHuLxrp7m2vszYL3fYW8kKuqrZHuVPvgY7nv74U2Ke7mmvxSWaa9dnj5xnfhPjXCgh3",
  "key36": "4fHB16W6Z9hF3Jc1aW663pKesDcJFVbVnv6JZDnX6hVvwPTATj87N8tm5iJb2otyGyDAH74gLLFQSxw37jaDHioB",
  "key37": "5HF3RkZ7iw8beJravqMfL4TA3mckrroKGJTj5Vvz3m5dwt7eV6SW8Aa7YquaJaCgvKuNruPqZzsyJtbdfJ3Z3kbv",
  "key38": "Y8BdpasnPN184rKf6MgFzJ8MRnZc9LhWJVAnYgARnSUdVy1RoZGjgmykP89xBN65HBHmtiYbRkyd4inqgezvvEp",
  "key39": "3BTz1Jei7rGzP5ozGawVGzpAWnRZN2HyRQhz9ypg3DWTSRdPzQMdEZy42py2Sk3Kh7gGzvqXTSfZUTgiVWFXeh38",
  "key40": "4mq7KKLc4neNaMcapoSoBj8R5J2zjKvYAschcbCxGZwAksKyr98sGySgCTn8gSnQcYzaezvq6bnhxU4iLVsy7CX7",
  "key41": "4sg4mREiaKDiV1YaZvt7a4VuLSysiUTH5uVRfWWXAiDb8gE7PBQSWKFqRzguMHRdccpcaLzwy5u4T3NExuncx2Dn",
  "key42": "3FhpM4Ka6vJMoKTV1hwVL6jZHNm8TScrNWZGupN27kwpSuxMrm6u7GaaWDcYaBEe58pnByWkdSW2eHajao1Eyc98",
  "key43": "5b2m85jmrRRV17WodJJ4znHdp2gbdKZVcNkpLnSLv2TmowWaGiR3b4dAzqgQYfJnJn3Vf2AgFPdTbftfWCyCJFJK",
  "key44": "268h9razj6HBEDBtM8fxTrCosxYstemh3tWDbetZVEWa5XMzKcZvdu3e6iU9aBxUaE5GNVfisi7GA98BLGHP15Eh"
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
