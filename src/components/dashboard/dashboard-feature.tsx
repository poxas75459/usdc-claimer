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
    "R9VxAFv4NxLj4TQp8ixdSGJWHxa2Ua1wQSynKeNFU77RGBD6mgQPmYCqHhv425WZb3XmkipXkbAU3yAuLXnELGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNMQ9yFQLAjHzy11eraoPEYKYyPUD6xSgDFAp6vkwdb4cSSqwyW26LTWDownYnkhMtD269tsZ2evmyf65c7LGPQ",
  "key1": "5YvWQ29QpnpwWbFEGcuyQA5KmEpv2hxtWEG1UgbN8Yb367ydyemwVvbKafW586xLEyxkMjMbWM8R8zamfZcwhY2R",
  "key2": "3CHvcwiLnnPkWnieqyJKHFPiit3NCEbLQqzAhxjHWqrj3JkztEgfUgveEWg4ypz1FmsYgPJaYHfz5S1VuzNb4k7s",
  "key3": "25vS5shN5qPMQABsdkwxbL73BvJMvBDNcJvRMQpf9bUEFQULEt6MVT4VEgCYv1bQDHgEJywmobLfhpAszdCwEReh",
  "key4": "XPMGqf837r7SR9wgi6dPRa6AJEztUPyKSGFiPcdWcaigjve47EmvZYgxY3CcH9Yb72ZkLkRVNED34uxmdERbX31",
  "key5": "4RcJYXdZ4hNU9WAnLcjdKEwpSRYKXrauBNfcwUjhXuTL12Be12eYcXMYrhtVo8XLGJNveoMxqXQRJFD5DvrKYsJD",
  "key6": "2J9zdnRQXypG7SWjshgPuqDaX5enaEVYpTv6LRTAJC5eqmAtkY8Hd965uW8c1eaUuDpZZc8Jt3wovvkXQ2TcSiw2",
  "key7": "66Hz6yNDdLuMgLa33muSqexTaTCAwQRmziqhfwV9xzfeEkQiPgRuqWErATxnd4CvqTksKwyKQDXQn3xxrh9SszqG",
  "key8": "5whKJi9nWGgzaQKzCc1h9CcHwkiKp3kSaU8S8VP5cPbCUVEYSndEPvBo9Wg6M6jgpRUvYLykKoqrFvXE1vr2gorV",
  "key9": "56wr9S64bbBTrUbDHXgAWz918Cwr2ewBJ5i5Y4WC1kDaDqD53ieNxXZExwSUT9geNSjDkvDirbKSqqZQEzH7mHKs",
  "key10": "4chY6KC4PKUVLUmg9N4SDFGRAqZbmmmmtWvqzf6eNdW96iMn9JtctZjCPm8trnWrduPToyetEoUj8DC1QhSDgVK",
  "key11": "3H4AP4n6dCRCwpFphdoHuCRTwGK3sXuG4AZGytSTKNvHveGA3V1nTcEEjFguTiyzzS6fd9QudVvWReo9csmnHJgV",
  "key12": "aqEELvY77N9oJt6PZLaxASsPBvJUUh2qhHE6pdQYq717b1AjyFx1xsc8gyihc8mhvFqc4TbUwZzyjYjRJBTaGke",
  "key13": "3wE1jeintAbyHpUkwKmMDBtEDvKV3hDPKEU196s1qNGPHwpS9ub7RLmqGWv8cLZnMNMFLvK1xtyD9pAN7TR6sw1V",
  "key14": "2JNebfZBgfePXXWsUabTT7a7BdA8kpcesoAVEGionSsVjWFLVXe6pGtp6JsQu3E81e9uZgxXp3KfggjCtXUkPSS",
  "key15": "o86TdGhg9W2okHfv7ZEX4Ut1JGt1y8D1cATSBKFbV2kzZkTSsGgwzM3YpxggmXjE6eUPHHDMDsqbhfNdCSSbMDL",
  "key16": "4X8NAjDrAeZVfuv2HBkFaEW6xeLvdygfhqGZ5hUPoiwzV1CeEAgQudxBhvkPxM8sePxMquxpqQ3Vqd368ea499xg",
  "key17": "34iyhPY14cSE6jQE8VPeGBjiVE3fxjDCuUwyydWGRiGDYkoqnqb9bJiB3NEtn4UfEj4WVZGziXk1VR8SoFGLwMe7",
  "key18": "MhanyEwYLtGT2MhN45ikuZCj34XY2xneh4CH8go9XvoFisGTe5bD54V1TGMhDZyRMxEJrNKtzsMTngQnackhApA",
  "key19": "2fpJ19wU16sACK6Su7deGykzjRcvhXuoGTHXwfFiijZMtifrv2dyrMPqbZZV4gsxP6nmXgFZ54G91vwHBYdkZDF6",
  "key20": "2hpGJ1obNzmNEM2iSDPmw61jqwB99cvoU4PsGatn1yQkeaveAdo9cUyzaZ49kFjCWiZ7aZMaB3YANRAxnFW5eGsd",
  "key21": "4w4Fr5krBYmSmcsuGuYsBk6ssZAFjqfuuARPgYr1WcwMKxa3gCk9puq7a8An6taTePBqmELfFw2tjAj3XChyogzn",
  "key22": "4g525ZQkDiBSupFQ8TLe2yhfBVZKVK73eeYc5wjABhRtq6zgZfNVBbtCRgXgtCSMzGt4pCLHF1DTPGNKDvQJj3tE",
  "key23": "4JbYJa8N2NSFVmNcvFShYEq3i9kLwKkFAWSNf1g4pDNZXrpcZbpmBRgBVqUtHgnW6sSRpnWc5fSPLBBbUdD1g8Zy",
  "key24": "2Y6BgHJ1iobkQoU1zpm44igvvHtGHBhppjAh7mhPHPx99xywkobfUGEAhqGHAj2KqGpvdfF6YY7jjZU2TfzB4xb6",
  "key25": "4NEDGMdVNA1882a5GBp4BodmDtWBMtZuph8LtS75RKC4w8H95XSz7N9kC7o6dWwFH5zwfLiFMvFGvkojxYGJ6Q8w",
  "key26": "4VRv2qZ1E945ceJN2GsVCTZfoCTeTixPUDXq3gGhiauVGDeg9Y7Gf1psdjmLer8EVDsHNZVBrXZaksZUMNX8ShuE",
  "key27": "Gk2Z4uH6WmpCNWRWNh21X2GkLqsG93NrRynAHrX8sX65Zh5NuD1TSUinYDHxmFTWs4foA6jH48agZNU95jfk3ur",
  "key28": "4awhoNyzeCX8nK4nnA9z4wgHp53Em5oFRWUbPwHEdGAhx6RmNyfvTuV8KzeD41MYktbXi2dFaMGbaJtp74L99P9X",
  "key29": "ebmqPki4qd1hxF1xesYFuexvvENLQU4qzyUFyWZNMdmzSwZfvnPuxCUL89iAiz8ZLSNN73PTPSyPHZEX8jo6HJj",
  "key30": "48jQM6p8XL3iJJJkUZQmkuouWwCq5yz5mU6Jf5NuVFGDKckfS2UYpYc9QgbEECGkk7zEag6hGhhSYUoCsEHaDWHy",
  "key31": "2KUtKf6wshNSUyM5bVDa91YheXJ6rM4zmvbx6Qgdm6FyNGt2dBQBD6Y55fR9cyERNu4qeXRpjAaVNG8ngEVMkKib",
  "key32": "2k4roLLxMyJjHnqYmgNCUCsTGX7YvbENbaGeU2b6h6C5PpyJGMCigo5cWNSaotYVftyLoZBHT3DeSP1MAho9hajr",
  "key33": "2vA5TJ5ZmBpswNC5H9jcBfauWGvYE4n48KctGVh5aLmdzC8Ruf7B6p9367bukz6xMFKcrHoouYqBg3DXscXMzwua",
  "key34": "w3rdTtY1AvBDiQMErxAF9qNZiruyUr539VFNy5gQHVDE948XaKY1nXtWGFfSzrxvoHG8B1E6SVebCayWpFWnUFe",
  "key35": "2QjmPiGRjFzN26xTJ3q29obCVF82p8Gd5UPQ2PybXPPSsXPqMH5R7N8hhRPh4hUfw6hEmv3jiCrj5FsyW4hk1s6t",
  "key36": "54ftAhiPXvxgH1M8ZomWsVnQyLbXUP35SMKufhqhuSeRtkU8H32MwwgBNivwUagqoJ4V7R5A93DJ1wp5nxN9d39k",
  "key37": "3SXGcQVRynNERwLcBw66WhEXjtZyFnNUmdTy3P9co638ww6KvRUGX6xktpq8Q3iR6fkGokft77WeVj7mNXfhLEJ5",
  "key38": "4BJdQJrPy32qw3hzNfZbshhNZYRSF67WBjeo76rtdZwPJ9x4kzH8kgbBsDJ2CaPc3xXCQFH1q4hDcmmCLCUDV2ZM",
  "key39": "26i3CLKShiL22PUmBDMy2y1EsqtNvod68Lg7Ss9hL6r7ZxqoVAXiWQPE13hzTM6PzB4y34HNvbSBp6Q1v9FbepUK",
  "key40": "4zhJwKF2oyJbs1s2oWU6riFGd9mBTo3QNR5711FQUpkhAsPLPUZ1XsNXYKxZYsBw6pTq2jwcgKbvUEiVgfWTgwtv",
  "key41": "5bNkYvJWT43Wfyqn7aVyjyecBZKu61EnuRpUsTwhRJTbAsdW2FnHQDZxDRTfkNogkLtiPBZNLbRAyctsurh2aLV9",
  "key42": "3raeCigQGg54fDKP48bjrjVEvdgoXZEXq1DyKwvheqwgf6WmmN8jvRb4YN2kcsnoSu9Krv9h5v1SyXu9PkXy4b5H",
  "key43": "f6jbjMUkrom1wJzw7g8EnUPyS3rmb9CTJc5FqWNRJGyM6LUnbJ7GBhyivQrGuPVKzomgQEtThYWx9tUbRJHMshu",
  "key44": "3VsBT7FegLVKLpiPE28xDMibxq6F1m6xW6zHFVejc7znzMycEpaGdJc3MzcAQTXdgo171NTysyGqycHZTEX7FnAS",
  "key45": "2j4uULE9sPoxCUMDm5Zrez69BwFtdqAWeNnPfEMuNmV9uWjxL2ZL8XR42RLWJ6qvhWe4DAwQki9whXMWNmFo9a7L",
  "key46": "3im6EwqUV8XwDL9TYR9gFv4zeteZJAJqSNVMnuYUXdUUA2csamWQg6t2aDRgL95wJUNPjHhTFtEcZ7Hz7SxXDwpd"
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
