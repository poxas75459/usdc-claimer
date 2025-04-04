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
    "3dfwJCt5j3yd6qrpihQYkrtgQe4VhpopuiNSff5XqFrWDp3rBe1m3raK2CNuZSf5YqupQ4oCxBaENLKu3xmy5Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RxhV4kBoVgpS5WjtEdGjphn1KJYCFqf2MXRtJCEDTGR2HRsVCLj6tid5b19dwDrAQe1uqci4Y3ySZbG7Bxf7zyZ",
  "key1": "2jjr2jYLAjp5QhoJrUPiPhi7o7FogFoM2NVVB1sPqWrqz8QUvTbBzGwBGj6NP2kdqUnsZZrvCRwHiWTj4FDCXrjc",
  "key2": "46XXCudp3JP6cgVpwHXhGrRGy8i4PdgbUw4qyWorYQuuqG4d2PGiXG9tuETPFXnnCEGBnM8U9fgeaJV72C22kZES",
  "key3": "4EcAN6DbAiZPHEtrhifFc7vjpuLyQLbdXQJeGRJGQeuWGh4SUtCgkvRJd2cogWkGRhXgUeZWK2wjpsDym4dewPjX",
  "key4": "5x4uwu5MmjxEe5EDHmzWGh9cTAzE6jh86GDMLsVmbgZxLy7HxPLLQAuqsuHKV4UK9e2c7cECmn5WZP5ahYo7KgcU",
  "key5": "tqgS9xmXVsYCaFuWCFdfrvkcAQcG3yaEQyYHDdmw9uyekWCtq3gt9Nv1o9wNxdstnYBdgUYTVJ8FqBtECHEyPPA",
  "key6": "5paw41MMxdUSUj4Y7CygLq2UNaqcf75TVYApBY7D4rPwGzVMceFWt6wJLyFdgVRyxnpCcWTKcncV5M7yEBFThgph",
  "key7": "5Ec7sUTvSLyhk7mNodF64hBDctdv2D4oiiW8dqL4tDTv8in35LuyZp6tdCYpkjJ5dCgbTVxrxHjdbUubc2VhHtZw",
  "key8": "5iMNrj9NouukGbyucEeg89Y5UUWkbjRdG8Ny5L5mvaniR8Ey2xaJQcBju6LfogTq56UgL4FzVzpp6hSJLo6KDqku",
  "key9": "2BfT9NvWqPPf4y32Bm91Hu26B5Z4fWAL6pLUQqRYvKvDieEW5p4YUAwYnfKWezFXv8Qfm7fqL1hUaAY7vyqZkfTU",
  "key10": "2A1VuHGfDMihktcM6RdbKVvYP4TEjbvMVcXH77udpFZTpZkxeyaiW2xNJFUQBuwPWYB7MnEP1ZR6o8gvRixuMSeq",
  "key11": "4hACXYXCKpXKPmBJeJi7Qp2LUAJ1Gi6uJH5hGwPfs3kU8hBC9xhN55naxEJpshH1rR1oxdwutsejVfuZD288RDFx",
  "key12": "5i6qvFAZuUQt7XMtPfX5nGeFAk3LeMkmbRupSy2QiRPAaCWF6E8LpuF8PkPXQrFqPQJ3SHM3VKc2fGwTPnXmJN81",
  "key13": "EK1h1Aft4gWokxkUJpH5uKgDwc3RnRQnyB2Q7ejkBEkUUPGzaQAKACikBNbzscXj7qLb5BSnZDxg6C11AGz1hv4",
  "key14": "4rCmmqKyYf9f4Y3gu5KjXpdZfFh9ZDcRFBhmVH6H45ewws4oZa86a8wyXsXuuyNuLNAxMsDKU7JuzF3ggMstzcG",
  "key15": "37h5RaSFJsAFjpDP3UgjyXXV8vHzx39VMWoJoz27C9FPEL5hPcZxzsncXcwLA6BVrtgxMdPMw1Lhv3ShEi6NPN7C",
  "key16": "5zqbnw4hjCRK8qx6q3nJGdAcAkVgCSBu4AUULS5fdDFsn3aXn5dEcqcyntV5wh8P5HtZWB3TCqUAbUdf4mtTwSTd",
  "key17": "WRvvkkmkbCW2NLViyk9j84AHzHM883sMx5YXPrYD7QaDNfe9sUqSgorRQuPCmYxLSsfzCWoxsxLWWtJwj5zwcKF",
  "key18": "23ZybxmG4MjCqsnUk7aYYhrTfVyVyPx2dqKiYLhfSNsBEkjBHML1sZfkVGTHKS6CBErEb63ZnaFXn2ekUjMSC3BV",
  "key19": "2QYebtKnqwtRxM8rF8bj5byx8VfmLbxByccsRBZYT7w61CbTVs2gwXn7V5btD8Joa5xXoCbZ4KsBsPm1kGLdF7Yh",
  "key20": "4Tn6vNr7TCV5oECGG6opTPf3mWWVAcJVzGyir3MzKLNCWgBQ4cTNNuqjyF7bUPx1tYTUgg199DrFBeEKZE5UXR2V",
  "key21": "2kL18JYvtepc186z37xcv38xr9DXeRwDNmef9WGQKpJs19NLKy397zw8Shzi695CnCHhMYcdzvTaZoEqXnH6vGJm",
  "key22": "yqvbkeX1kftu4yjiKpZYdiVEz6Y6wZka1A3tRnnzRfik29jhsPNbTnkj24v9MaNKGwZNHsNskMZcgJofpAXYH7G",
  "key23": "23TGVqT7i6MHDj66Dg1nRfUaVnSbLMTgeLF7TmDbqqJPcWD5NQo982SCHYa2m28Qjmf6ywgUpNMc33VNtnRq6rex",
  "key24": "3Xr9ZVepeJRTjXeHvhsti4c9mS7AgMqawpAdKP8nBe1GBpfHx2DaFfHR9DLfxPtZNtJLzFp87bxLGLmiAaN7P2AP",
  "key25": "4yxrTxLj3c9jWBGZfNwR52KQGKiXWMbDbFxJR59166Rvhjx1Z4NQY4sQexia3gww9to5Vc3GsSca3XqGthw7GnG3",
  "key26": "2a1hEC3H3LbR6ywFaNq6aBQoFeHSGjiG5e2XMAtfvkUenWMNsUVG7XFHHwHiDJrrG6jRtVmBrZpchhvorF9x3EEs",
  "key27": "5rSsuAxuA1FvgbFr9Qy18GY65pVBgX38ssMbfk9rHf362ozLbue4HG92SWUL2Q83qGiptBwLY6sm8Df3v74wTXCR",
  "key28": "Ykwhuf2v7Shevt7GmDjC17FJ7s1UtcTNaqQtz6i5BnJyBLc1i4Swfo2SwheCeUXtbiyfEvfY62LGzZKZQjdFCjN",
  "key29": "5V3yLxcsneddsFqPMHPyjNt8riUnnYpupc7QuDubLKC3AGBVXTARUNRkn2ji9MTr7Lbwd5bVkWnjbUjh3oEf8y2N",
  "key30": "2Ff6ggM3QGVptQnYuKcRgpy47QYSy2Rrmhk9m8WPTxxkoxUN7cUUY3uSrTFA2c6LZMfFUQEuVcpdQs88EpwyLUHg",
  "key31": "3CB9MZiM8KR5VRBfiTNwGmbFwmb8Kvi5o2VBok8QkRwp12KpbtsVaUvbWwSNzex1LMPFeJ4pz8xSWhDNtXB5mruL",
  "key32": "3SJ5AocAvvhbxo1ZsZE7LmotnoH892yTLrK3MxMrmkrx6DQgpExh3bhegkSQtefB629i1F7zNWt2BYjBuGrCxQRu",
  "key33": "41jiTPCCGi5ACWj5CcFcHLGpa2JN4xBKrYgiJgD4tBssB9gFZeABLfURHUCsngo8Q1dgFdkr8UQ8akTqtqQePPpk",
  "key34": "32aUd5rguUcqaxfsHiPG5C8ziEv8jgp4fS2Ndxi2RZBE6SyRTFt5g9nsBeFqoGzzJa6rDfKvCtdhaWZDz2vYnx3y",
  "key35": "4iAUn2C8F2AX4JsCht2o2DKtmHecp1Ep2Sqm4oQQSqG6zxRUF4wxukJVS5CVQjn7DJVLf7AyNuh1Xbjq7G15MwBT",
  "key36": "4kckA1Mqq8VmaDUKxu9ZpowahNsRnAhCX2VGYF7yU15iPsCJqL6gRie7hUBGWBjSULVQRgpcs62ngpaArsi1JGSs"
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
