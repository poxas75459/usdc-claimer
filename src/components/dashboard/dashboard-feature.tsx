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
    "2iuwqeNbVb7iFnagjWjTokYUg9iJ7xjRuzRSQHcaC1uZhzSh2WzA79wSMHLdRYuL8vs21WiNwfwuD95Qp8yqrNne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAzNT4zgoWCcp1uvGzY87zNAuKd1at3uKZLMaRwFT5eMk1gMwK9CcsFA6DkZdXsfqhgeozawbpLQsi8fHxQfgSE",
  "key1": "3B4qai5kp7KUnqzhHZDxpLFXzpRbktf5Lh7wec6PG5bXQd1dK8f3UMuHrUerZV58FPsyETt1bBCaVP2y4yQAGfjC",
  "key2": "ZNZuywvq8B2K1rX9hRmgLnfdZpWUZEGfrHAzNBqu1T91JsEzDriYMhvp7Z7J3MtZEJYyfw5HSZVKzUB6rV8Tj3e",
  "key3": "2TV14J6QFWjV24kh1Y7fK6T7F4VbcLuj4EqpLAXMFZGuBUnW1g4gCPk3MiAnrspwyQUzkCHPxahM6WfrBCK9CBeg",
  "key4": "5vZbfboXDBHTErprMo2HQ3j5fXfTv6YXEaqiTrGz4xDsQ1BNgL6WVGLQJvQj5psaT2wYPedrUdvBgvrVLGev3SZU",
  "key5": "5isPn6kg2z1QSQ6on36eK834kY3WJk1gvnNyeZMhRwQh8kpg7pFP4XYcBEsiNx7pAL8j6n6YJdmZqQq17crUmXW3",
  "key6": "2guCDDpNzMaiY9u9w5Hap1shFWBMBnvLkYdswriQzNrB894tZWkKU7wqWr1hH7DXByPwDA2GW6LdfD41oWQQJF5z",
  "key7": "5peXQuTkVLn2tGWcdmdnVG222dLarQzTS8rwS9hLJhmhSv5VMR7geXQQj2aDckphe1TnbbjARiXH1vHqCf3BWiLq",
  "key8": "2hYa5mywXSGVvQaR55X2ZaB49zaVGwhKymREFm2TiaoJ1EkcLVbQTsg3QGYhPUWhPQCot597mkwCVzfytp4RFvi5",
  "key9": "5erc8XKXKMnfinYFisTuaHDgprUQ21Su5RZGvWd5S2t7xybHudkYGxoWubURCqx9U8RYReNPuXjVFJfXhCKK4boU",
  "key10": "2sT5mHsCeVFix9GaxUwtKmdkHJhRUB79auwzEL8ecNxKw2kmtpLXxuqDFx2zPhoNEaXmvfMKP45WqBmLCPthJR4Q",
  "key11": "5zSfVhG3EfxKd98SCdSb6MMXxocb2ySZtZLusGy9xEZyCjNDdUmGWiyh3XoFyWbxCpTAM9bL2Zywro6EnX1f3hXw",
  "key12": "31gRZAabVFrvREQ3R8okDoZdpap6tnvdKrnyvBN5mVXnsKLG1MmtpREbPpUbzkXeVKnmsk7c5kmuBExKGYgdNQWy",
  "key13": "4mmbLcWUk66JdsKcDE8PKsCWW16ehHbRFRtxMX3qSsM3SbgFTUA8xtKv7XJTQLHKuJ4CjH9sYEgVrdeeBUAt5kUn",
  "key14": "5WLvJuHXYGasyJA6VnEbKH4auNrjVGnfKcjwtYzJjDabtAk9L4aeD37r9tB3fEqaUkf4MsxLkWnqBWq5XERb3BwJ",
  "key15": "4CanYU3c2hQQ6Ks1AftmNdnqMPvxeLbPVewy3fHPKD3K3vBMZGYfUdAYBphVE2oaBfNhSymhzcs7R27hUe8ym7gU",
  "key16": "2idVJRouoNBo5WD2Hb18PMQcTvHaaTayMdZES4HhjxD2zgJufHsaVazYhbBousbUrbtpEyPFpnEis8x6Zxq7FPuY",
  "key17": "w2XnkdEs2yTZbMzQbtpzdtjcEp6QRMuu8311KbHrTpCufHn2emv3EhT3tAGsUX4SQQxpQBp54psigqzgibaXsT8",
  "key18": "2qZr6DQcWDNNdTFSY63hhobMKtJrCFZVSnxwaheyosCUHUkuPn2ndGdc5eTrr77Ep53Gs85fRBkFSc44BaLuuCdy",
  "key19": "3m7Kfcw7RqQcKbfmJ29D1gyYgSx3atBAFJZEuwjNu7qPxXpo5PBWmeyzhQSU6uoYvaFB1U6yU98K4NBn1dbwL46n",
  "key20": "59E6TeXptRauoDTJgLVwKmvgjUWKgiGEb7KfPsjARHvdPAiNmBhNe8ccML72fVefkMGTT9FtJagd9nEv47MdYV2k",
  "key21": "hgdkf26UKiEuenu24jN3uYg2GRQ7irmGN9wC1ktvUfSNbxhYGzfi3ggNQS9CCARQTCFpaYChviCcoE8qxLPCzLu",
  "key22": "57WwZU18h2mYZ9crb9KhRi7MxpqKrH3UYQiLjTuCWqMzJz2upPnZuSvhGNuKQRdmxqrskx86kGydH7xA6ov6WzRe",
  "key23": "2RWWuYB3nJXZkkuDaPTxcv8S4HLcz5gB5N6JJL53BjRNunfZo4yDYoL6GBoN3FZp4mTTyhxhEPYkWWzhgh2z5oKK",
  "key24": "3cHUKmMKNjzQ5wA3oorbujhqBRnfEWoek23XwngaEyQr7BUzXmfrNgPArKmRQnw7sJa9H4TjEtVDhpfBqnK7Qe7u",
  "key25": "4fYRdwRD44knR9NtsT7b3D7UtcAcCShXRusNe81jmR29VqtgX3cQ8sBtVqHGHipASXbvj1kzSEdsKNe1tZohRVAR",
  "key26": "3oeHpNoWJcRJWtunAgpePekaC3ssQLwXyzdapsAg1abRyS6MeR4q4aC31CRr16VFBJUedxL7YaPBN97BcKZFiJgd",
  "key27": "2zqeP4uuiNMQie5o5VF5DCBSD8bhyS7y6ie4fXin8BSBicUc99n3sbbsV5nXP3J1pxgAJ6rEWzLDD3xJBHjtdSyG",
  "key28": "QxkBxbjYTJ9689Ji3wY78YwrNPY1YznJCr15Ke6tXgxQQT4eW3j1szd1UFfYmTVQTeJswE4UnQFwA2fiVD8No8e",
  "key29": "4qiJtZopFbsN2zmFWau7JzsZYQnY76Td6XPNAmnLD2BhrnvLmuBGSokj8qwfeVGfNQjYz8HvxVhw2W12UtUCwnw2",
  "key30": "3T1LjRmSUkVH6D8Lv7bs1icnUvqYxNB7D9gjcvQoJ4sfJH5VF6b8kc8iLHCVXLxbNGyNX35AhvDf5aksrUBFrdtG",
  "key31": "51Y2SwFYj55Zo2QEKbbCxTjqp88jGAYH655aSasXeZLNzvbMQeWV6TkyDn9WLRWHgq3E1eJrmSJyhomrLeJ6UXFa",
  "key32": "3ydsyYndhfmyeZLeGNhVcT537tMwYyNZJ9z5zd1kzGxGd6NTSJr1mmWokerHH3AY7zwGNaTdp1jkovQYPVVTBjpH",
  "key33": "BLpqweTbYv7dnHDRuZaFqauDj11yJdGhN3fYDapS7rAD7DKCACAYWfpsfbpvS6F6ZwJWF9rr43TaZA7hq5c9KF8",
  "key34": "gMsxMWsQKrPifmPWZKGyW45E623755p9SGvCQmRJ2rF53rM17E757LVXXcRagLPSgsFb4K2df7xpdkRt4wqDeLj",
  "key35": "NRzU8aASAGCQ9P1EiWrnWYu3jCvyLYavgYNiZV9MQyQ54B92ibCnNHwAbuazFEcqaQKAz4DUAYHSd6HSyAYAVRe",
  "key36": "4DQJAbjLJuN8pGNjdsXbwvK3RECw6oXQq2p9Rye8KBtvqzFQ4Jsr92GKhX3iTRU4Bb8SGWajn3z3UT1FyFmu2jUD"
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
