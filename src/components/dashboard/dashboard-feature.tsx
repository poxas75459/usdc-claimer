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
    "3hTN5ZhTRVU1JLAQ5F5gm67H5r93U7QzR8JDtKxkgzrcrkvmDYgixHWxcnhtuiD2MyuYrrHNVA1CCh5R1WQDyEmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHb5e7DpoLFEDZNyePZp3e1FTio1Gt5bqpepCxvq366hywtVy29Rp2FXxMjWVY6mdgVJm43RkmwpqP4epVuv2q4",
  "key1": "2n46e8iAoNtg7FswxKkGnk9gMjoYLfLPk2eZbFy7MnUQzrPuukmfe4VapyEb4z6iyg8wzLsHe1nRCh8ZYg6UaiN3",
  "key2": "4L13LHGwGzZpRsuv7nfLPmoBjLz6tMjHpijG4ZmVZfXQdDFioZ2EkwJ8utoH4kZd22V26k6rcUVr56nn4L7qXaAY",
  "key3": "3pbqsjKvV8RSWtmBGjkvSHWEhfGgBH7Hc6cyWApSakR1q9spW3GWrUM74cizVhrWh3eAHB1H9ay8MFb3Q3FUATYq",
  "key4": "3cxqqD2Y3536J4NkAPgCmZzMY1E2c12RPPMks8kzGkc3JiRRgv1nUipYtyvuZtvrtctQUBL4LJisyuYo535UAYqF",
  "key5": "3NS37ts8DidTmgyXUvcyXhLURCNFxeAvvYr5Ts5Y9Pf2DFw44Bgnyp9QX7FZsnHLkJLVUQ3xuK9i3GBtuvGfhAhr",
  "key6": "51CZeVyH1GtToGLYoipGhbErbHZ6bTpD6386385w5z7Gx7A3XvNyQHrtPTEyu2N8gn4zuCkM6bLLTVZLYuAVUHag",
  "key7": "3KCQV5uSqAPra8a5DqV7ZHUHwuNG2iBNCMaAtz6xCo8D4N2hJ1qVbrqpubX8yBekz8q8RGm9Xwgu4FpXRH7iA2GK",
  "key8": "2MaTV9RRUUgP2Uc7UYr5pUzVYuqyNTArBycmN4dPLA9Rk7DvTX73PCNiJhjSiwvSgD3jcB7p75QqiPKDG51H6tjg",
  "key9": "NTMiYUWuaBqoKTeF3KNwEWQdL2RD1PYGK4LsrELb34WMFkDnKydHxC2LuqPFmyMMiRCm4BdTPcasZhWVUNsjkaW",
  "key10": "nNeiegYKBkhukYi5gHR4fEN7ggcAd2zXPePYGthrUN2ycjNQtfj4ZctmmYaCMNXVJNLTTEjbwdggo6SQDbCZMis",
  "key11": "3Q1PxC1vQdhQKeSpBKHw8FMxHxKmr4vSkbtnxVz6ZkugFiMVkRnQbEHSnMBmQm4reE4Fa1LhxrQT5ninHRsdjSVv",
  "key12": "2ErAnRMXcdQcDmkAPLk5xwS3NS34WtAikgqVGgLEKLFNAAixmtkNPMwwAqFMVAuwKPFs57n4wsCVdge7yoQ9YVYv",
  "key13": "24wcA88qeFbhSoDneRu9hDjcAkijrdRzqe1Gk37A6jft2K4puxihoZbnRL4jAkTo8V56QDfc3FE6o1r4pPaGS7LF",
  "key14": "5JiGsyCtJVuq4s2HMeXLudte2fsRpkkDe2CNi8MU4pnDmPSA2H6sXXAv2jh4Mk7GJS2mxFJUJo1QewFi8nKDV5et",
  "key15": "2EYRjbDeq47vX5tAbkvVmwAS41hRUkEwJY1cGk5NrWvFMxbjsXK84fSymyYNp5A6ZoXx34o2MguSXmCiD4WzgJoz",
  "key16": "226odGBTaN7i25yVrmXwDu1MV3AgZMiaJSbFvtBvqoJC6g1t1RweCAWNYeBgL8fS3LKSYZKNPZNoiU2wGX3Md7Cm",
  "key17": "2KuRANjZbFqTyyjGvHpWCuWcYfHosNKssL4KXt1c6YZsk1B1w5FVbPHcqeAG2Lncm6FJkVw657UDYL4QrYEvFzqM",
  "key18": "5CqcDyDPEFTG9k5S8Ln5oK543i4ooPouqyaWPzC6Efr9JXYUTNow4avRyPUaMzSMnNakeLcFLQxRp7QygvgLd1zr",
  "key19": "4Bzcy9qxFHNT5vLbMneRjPM3MrYrr9bvH2z1UY8UWFnLKrsG3kuGbGyrobnjaKi8kfx9RBFKYaX8DxeJSTf65Y4p",
  "key20": "4syXhZ5zcJBhhjNdxyvV8t8P6g1mJUQb65QTmfx24oELR6yKKh9BWWt8WFt547sppk2gJAg7LLQ1APJDMkALzTX3",
  "key21": "6MUEDDQ3ALux2K3H42K9tsBYbiFSZ2xeivfZEJqrXZgZE7JHnmPJfKkQjcjtCHvsfBrPX4ervjoPVpjZz9br8Ri",
  "key22": "HBMzSBfuhLQAtBFbeGg8keN5XGuhSMGgJA1G7cY9XXGrhHLECsMmRJgweXKeAdoc5nMmDxGr2bFGsJkaEbLfBXR",
  "key23": "5g72ftseq6ByaHZYkFeHWYEo7aRJtqqyhbpsxYvr52Weh23XjzrPBrPBwJTEJXT9RZUGwhS97VaLaZqTX63oAe3u",
  "key24": "5pTURRSruTAFf2F66FC7Hz1RBNuvGzgwAw3FvUq6VY2UtXv332jVBPx98NJkF96BvPrnA2xnPCMiYinZN1LsXMAJ",
  "key25": "5hta3LBriNpm5tocKF8hys6tYV48S1KDF4Uhdak92khLWpaHA32MsDhhLN45osFGiigPiasJLPzPRLtb8brZTWu8",
  "key26": "3UAk9dL6KBZgsQRZ4DujpJgQPs1hHp32U6BuQ4xJuExbZ6UXbRY2LrEbHN1HKKxMPWM3evfU4GCbeew7mbnhgEha",
  "key27": "2dN6YpHKLNWKHtTvJPHspmoXWVteUSEC6zXxGuGmeWV9Y9MKbkxThCtgN4qLpCHMrZvjbBKsFdYrA7vjieNm9twm",
  "key28": "3p4kM3AALJapLH31jrzGAufBT6fbVR8G7mf7TygADDk3dZMqtZSnYczBVxJ4PPPMNdNn1Wu8zuoHocR3UZ2PyRcz",
  "key29": "uYGmAyRwR8JVKmyHEJxynWMtK6qaBioz4gKtcTPEDPsVeMvMyUJNQn6vKSzV2L3RpDaMoayUds8Hjj3KAgC9sFd",
  "key30": "4ACte1uVw5mdQbtDQtiasigGmegVwFShQUdJ9UipdWmaDSnajZ3ycjZbg3t5BMj5Xrif9Zzubt7p84aKp4pRWpLb",
  "key31": "3tudvVAEQYA8HrmU7B2z6VdfvoXQuZ6teUkXNqqoCNDN1QGVUGKhyaNRCZ95R2gFEcs9boCqpWEmsD8xosUhupAQ",
  "key32": "4facCrpXrBVYsXoknJev11KUdFTJaSCqDBZkcbkTizHkFrAMfE9uXDFnz7T9xtiQ8ytvrwLmZSRQBB3Uu1JKjRby",
  "key33": "4i4syeKEJmhKxvLBYg2uqQ6v45uNJsiBLb1G5UdJsPi7NafPYSzQHkTVQaeSHC34B3vXVMHu8MQCisbn75e8Z2FJ",
  "key34": "3DaQmFPfRWvqtQmxecccruWYQkb19oijzG7yMpYetJr9mZHN2VZ3JdytMB9BydcSqXGxxcrNT6DrJwd3rEzyJkHp",
  "key35": "2rULnypBbG82cDvmaP5gFEbj82ncGc4Lh4cCmUGBnryAr32eAvXjACqJ87J331vjr8m8jLNSdRfgfWBdnM2nD9Qb",
  "key36": "39nw5GbS6RodTrS7yLBz5w4nK183ihnMKCWT3RDsK89qD3txmdHbdrXMFFPWPWPR53TpR9EUqZUepFYmDeKiMXhF",
  "key37": "2DQWN7neEiuQqM5DP6dF1JUnVEynVDXFE45kP7pvwqVifrfs5fFA5MtJaV1zdqUZPhpjYAQ6H2SqYwmg1nVM6omE",
  "key38": "28hRHp4vsTiE6nwFipKyPYkTKU2hcCkrAt1BP6rLRHpJLzetNDvUHmEHuvkBYsffZ2yEuXZLfGyyTBLXuap9pFw4",
  "key39": "2mF3adNDAQijn9mVTXkzwPZ4zy51Cvf9Gk97BZM6u1ZgpD6ZJBfTGYnYKr99QbvmUuCMgYC6hhaTneD8hKoG89qA",
  "key40": "2PsZXuCEC6hXrrT5htAnvEeebuMnv554wREdp5TpU83PCBpbYX4CDQEG4cwJAVZLzZX28AEcpbnAw9vzVYrM3ndG",
  "key41": "19vY4gA6FBgfVVMpMpQhRhQUK8mC38u4NNioAeY75ey5QjUwRmisip3e7qFqmV7x7vnDb2VdHzQBo6hwNnGCyBN",
  "key42": "t7Wz6Xwq8hU2tVuB1YKtDBG13CvHsk5tZrpDojCDmuUYYYcueW59F6saVv4CuiB1vU6hkCSqmpgcnnpm1853SH6",
  "key43": "2udBUscvdkkvSt7EGGHeAGYh9eD2QXMYUfdVFWZJQG71sPmQG9FRmRe3U3sSTytEZQGXbXt1RAehiNPdUgCMjDJG",
  "key44": "55JqQVVivP9st39WLLKnGcmUp529kGF5gXUegzhBkhzym6CXe5S93mnG9qbMJd2xZCmAhENrZJdUNNvCdHaP6yNq",
  "key45": "3Cg5PfDLuPbBdYFWtHBLcchEPuFdKmWT5QBv8jAQdKhSucru2P3QW3KmP7vh6Ggdg9KtJ6LWmMyJsLR5GyXVkAvJ",
  "key46": "64tF76L4rpxwiHYCerjxQCMoYsPnogi8osXkEWGkqb6foSMRsJqryctnNzEmtJGYh9RiT8SXRZvu8DjZnzzBXTmK",
  "key47": "4xkCpTWWnH7S16Cp41YA98tZq1a6HfxQbfQhNzYanWGcKQncmuznxz5LM1Dzos9CEfGNKeESVHGsmSruE8Q2XQvw"
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
