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
    "3QHLEyNuspxeHHE52xuLPbX114TDj6av1U513qakw3YaTBWDqbJgDBBd4HZLsiQWhVMm1coZwdbTwXwBxAdiDanQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDJwqM3uHAtK1cvNAiyfJsDCNZj66yk5TUm623ZrHcWWDPHmmFJZAwZwZSzfk3PNtuRoxUyTx9R1w4idsUSxQrx",
  "key1": "5h2dMwHwt1L43qdpw3Qytzma8G6szmdy4EvGiAiCct2qD1JzW9kpBnZiH78f3KTcs5zNPbfC6Pa1df4uRLLhqWHT",
  "key2": "4H7Ag4DK8wHqsR4sKESWa1AU8axVaqie87t6xYLm2wvNnXJ8AurX79eUR5fvcZ4CjAPZXtk2Pxkb1S6oj4PUt4j",
  "key3": "3dqCg5Gaav5C3RsDWZzmdSYPk9D3xH3sN4cT22vswGH3rMRhjsPqmBneHiZLydsDYsc54oQsHfYYrsspnWL8bhdV",
  "key4": "4WbsgLkHJ5cMTiotzvzkLZuWoboCyiXGmqakH4qwBWBXKcr9mY7j74iTm8canzYyzbNk6NBRA8kUkTFXfXFxVz7W",
  "key5": "3xhmVW1AAy2pWf8APJesxaswehU3HED8XhWqGdXGwRt4KrmGWELZBNBhprHh8eh9gV3D1HcnPbJiF9Z9ZZc3KBeo",
  "key6": "5TKkAgosQo5Sin522Nok5dfktv7AFbArUu6KmQ7etXWBWmJ5wcgW8SS7LG7Qdy1i1G7QsuxAGU1PBFTVzWTDCTYN",
  "key7": "57jBX8sEFvEqwPbG2QAHykUKfs6b4zfkXX74o2BfqjY4o7NiTHeR6EqFyCoBJVavyQPtasUCADtbuQfAB7ubPY2A",
  "key8": "27ELwhCkqajk9gqkWdyydb8gDdBCXgHAUBUZiETTDFu1k3gGcfHAsML9Cg6N7XNDEh1iu6RKnXxTa4AbJy9tbQ7M",
  "key9": "5UaokXaKGQ9kYe9nNJvLkhZGKFRsrun9h1F6rQAih1YaMiaD5bbwRrvHn1Sy6g4EGgX4ATzfvmfpMxWrG94RSgWP",
  "key10": "62udpAzVpaEeKUbLUAHWVpGdsQGZ9gUSTxvHYeRCL3u6w1pfC2KysVoUuFcnw3aed6GyASXxrZkNaPQoprqgDS1y",
  "key11": "3Jc3CQbiHLRuTH1JSxgyT7MQLNx3snpMjsuB4ajDXPTfdhFTi8R6txjqCn3EfGgfoqZEUuzZMaeNsbRvMsVavGQe",
  "key12": "2ZuLSKPrXaWqwwEQ3pXZAZ6d8DkkuFWJpnR6Vxap4K7HQuecMLsqQYcw1mFsoFqTup5vPdErQZfApzycQA8mGaSL",
  "key13": "3JfARb6hg8e3UkYFbymSZnvkkBpiCnax8HZgd83bwvVfb5FdguY1mLtwQWGVUFDj7xuBVNXwyhde94eXq9ZXoLek",
  "key14": "4FPGi31hzoEU9M59gCfAapPzEw44kT9ChwYCAeh9WMeUAphe3i1YarGnrn6xrrEHNyJT1vAoobYjXYJLENnckmPS",
  "key15": "5jpgvU7KiK6rhoJhsx7PBNPdJW9hcQ5gdFL9NFBog7JvfbiTakiwEGPEJJHcVe9amY4LaRRCurqSPRT1GEJMrvwd",
  "key16": "5ECv2rLpUdgAPSTf72Ux43s5kHe75pWvTZQYbLAT7pa7swBDTsgg7V8TnMPmQKV2ZZ2CXKQnGKmvqo6tXi8MF8wS",
  "key17": "Z74Nhbze2ztEff9HRa8ad1mMDqrTxCbPbtkfTUv91W2vGP48gR2Fp4fRQBFkBwXpXpbbK5cLjjnTc1FUxpSfR5t",
  "key18": "4hsvA6RZGxjXFk9DCHKgotXXwBVL9pPWnug7LaV5eF4jh6QCfTkT3SWRDbUVAFW6izvKbfYfLoSniZTKVgSwBL8c",
  "key19": "5Jz26Wf1DR71dQs1cM7gtVHRT43m6rEYFTQAJzJaJGEUjek4Ku6fVU59dmhHsafvqrMHMUj8gbQR7cjafmxTzyDU",
  "key20": "5PzyUxTfnc6pWtQitG4BiQXhdCtF1vifvUHfRCPHqMYCnhNYuwSCNJNrsFjE7nvHJseK21WtUSWSGji7ekrB7NdZ",
  "key21": "2e15WyHW1wg158TkxUJ7DveHRXHfh693xKU7tG5qMwmWRceh3XM33rpANByjAjmX9ar6CCtAVdcKM8X1XLq2kJev",
  "key22": "3j4QBtvdCqQrkwayRqQunZDv2Knud3aV7oK1HRU5F1BQcVcPRi31XnSCgigYLrTjKhs99NTFn6ed8C8jcT5Es5z4",
  "key23": "4aK7bk1TMdv3Mj7SPGrQKEFtRq4zRUn9NczQGPKWfJDN2DoeMZeybm2LeWR1daMueE1Ug819eHsJkpZXWjjo1WRU",
  "key24": "2AFyMeXMSfea5FJcWzSZEyZJppkkuStw12tEDo9UQfyfksMEsGTTxVxFiQu9NRfpLT3sxA4brsbL6USx1xzor58d",
  "key25": "3v9vrdnnP5yauarP7Me8DwjkAm7u91trA76mW3YPHNYfsQakK8eDCDHiwWXDkYGCBCXrPXW8Vd9XUxBtWAPqQ8qP",
  "key26": "3J1XdhPswQcBgM3hbX67Kq41i6wrtqXUxMVsCeFRQ7Svhn13dgh7NQiwkaYRg6i2fGZrpuvkUCfm2y7v7g2sMPLh",
  "key27": "2PKrnGgLJDfMvT8Kfqm6JPzozQxEoeSdGjGWfKNxbyexhPEru2Pe8ACwJsQsBC4hAK21BVBbTNtCmRg8st3c2mMF",
  "key28": "2XnFgX7rDV3sZq5zJx96qrCcdxbpbvjTxUuaMUXVBxebhVUWchhqHn3KdD5YnCLRRiAwUseqv3QmCNWuGcvGVNHi",
  "key29": "5yQRiS3xUo7XPm4SpAtgSd8zfjALBsLMxzucoDZEpPv49oyX24jjKrpSA1Di27ZRhrPf5qCLu89TvwEHsVoJ9PBS"
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
