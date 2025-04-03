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
    "VxU8wZLYGuZsfomqfh4JwM1rahgis43w7p4aDh2xA7ZkaGtYHVyymGqqy6Jq87ZWZHGdGp3HaLe7bVj1FRAZoc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRoNmHt955uTSHSnC9dDALtpNW3ab8iKqWtxFqX42S3jyZepsj8kkTPgCs3Gcaywj7KVcs5uiHU4HoXrda1gGu4",
  "key1": "2w3cmr9fqwoaCYs7YdH6qbfooXBB58Qm6zs3snYrY3zKYVtCbmQgnzxdzyXzgsc1jwmzp5SWuVbWV61nZNLJ7fAZ",
  "key2": "23zdywYdAKpKhBrsWUsFNkY4sFGEC9rHgzro94WSvV2c1RWuWtZfbRPjAtoRqeiWYkRwwwJUkQtZ1fjJxPfKgPNb",
  "key3": "4Chp3rCgmHhyc3q71FVPFhu1GtonzUJhHysVoiy5PQ6onZMnFfp58B38vWiE6BsQPe4m4CepdJYhjQbknZKbbcx5",
  "key4": "4XbTT5yWcN4WfJBmWj8QuEiXZP2hNKtyXdC8gmtu2i4LdZrY2cTLhwLiXZ7rdTuugnA9TqtX8DpcD32hqEbVLoYx",
  "key5": "3Vy21EBSY1XcZkUxcgCcQQeie3iYtwoTpmKedeYk5o3rK692pDqsjEJPtMmDGWueRQfSrR1fQfcdV95Lx43BdFLw",
  "key6": "4DJaFpWcc9HZYFQhnabhUPzWmyzSyZhHUnsTL66nQoCNoQ1SAbpJgQECFfDAJ89vrrhf7UohLWaDuZ99L667yYps",
  "key7": "22bzDFQZHe4f7pE1Auy4DihbMkAwHXEtZkt5aKGJNMxdYoJoLAUDqfog13SJ2oioG6qibLLAQgsa99MAmV8kBYNA",
  "key8": "5vuQPs8Zfw8GWL4LguFrMRktg55ayzLF4AiXnu1CAGpMpF98iR1AjVog85jxVfWUwW7ps4bzrwGBYxhDTN85xN1z",
  "key9": "4BMQmijQzrKFLDkr84VEUtBZePhW9tGLnjeUUm1cY8wp8d2ZhDM916hzhLjq8jKihk7f2aMWRjRLBVJ8ori6uSoT",
  "key10": "4FJ8UCuGqC5ZWDNjdKmocYuAK3hNjUxxpHomTxtutoCCfPQAWiUks4qMEoCqwNS8orjY1A4ePwnt8WhR4meysy5m",
  "key11": "4JaScodZ8AfEMXDUYFbD62HWhymBbrmMStyhsZ6CVzFKgyTp3T7SYVGxaQdCgpA8xhgVpuGdcCwQ52PtMSFygkMM",
  "key12": "31fo4nw4jTaDdoPMHjM2tgqmM17CYAD8RoAWgvN1T6TPyz82a79J4C4RfwgUuRHHjUoNqHuxoK4CUhznqpzrzeCF",
  "key13": "9qoUG5oufTbhjdfM4jkwa8okWxPxTAWqQYkYUnbtYLJnVzLKjV9qYrGHWFu2RDfGGgB4sDLYv4QfyFrspSrZ6sF",
  "key14": "2qEdyRDWwYmNLLGVmZoZTnPLtEZMVHfGUjXY9c4kN4uFRokS4kus4r43SvP4mWJgJgMqdGBVj5nktTGGwZ8aFaA2",
  "key15": "4XygVLjVTyWZgir46kuB73Cu36QBcLUTTFb22cqY4jEiqaqh64n4GoTN4hMd3vsH9TGGMNfFzxMRYybPdgvBm8hh",
  "key16": "3h9kvvpkWwqty6i57SpkPY3ZpMbSj6v5GATSjXgK81cume1oq87YExe9nhV2yqRNuUPp98c6E363kgTiTSWZbp3t",
  "key17": "5w1WY4itRREZk24u2LUB6SFsLLkq2S6MXNQsqZXY1493NXBvKkt94KBn12JJJ5fkStxQ7ynjJHdtwwFSa6JaW9qr",
  "key18": "53zn7jPKash7KfC1ituPoMK4qAJraELWWNhmP4R21o7uukLUsCSEogtWbPX5n8DN73Lg9w7wwhw92fBnFGGCqVa6",
  "key19": "37MbNLoB91UU9aVqcfZ7Ty1FgkAjGosMc6cpczmD4m1TimgskFeYoNEem1mMA2WRnhdJBjhUrmbxDi1U9Y8ff8fW",
  "key20": "2AfQ2vyEFyPb7U9u2EeBj2aax5XTssdysMqNR564qPHAwb2ii6qJ4NWKRLaLKwMTEJL3bzydVHnTxqoSgMzCFLQ7",
  "key21": "31wyRDPJXBTMgieRV1Stu1o2WBCVUtRmx8rzDBRgAqgsQDN3aAbXvdTGrKm7c1tGMLrrSpXuuh2zVDapDWecM1vU",
  "key22": "3wChVVWAFYAtCTiG5kt4Q638PZjsRFuu8S3bLai4LwiNR5X5Ciwf3fBErv5Myc9M5pyMp2aopAxGXBszPb11ybSQ",
  "key23": "42kxwpcEZ1mSYxTNgUpp8imTEJud5hjzjUDTpri58G4pKxFFHiAy3RPPe7hDHHDzGN8iFko3tm1oEcLBVT4tNy2H",
  "key24": "2pfWQtXuFR8JBEaJirLntyx7Su7xGCDeXvMJK3BH4BJ8b9cVbrZW1WGezRpchJN3acUqFegdXEMMNBMTSzWnC1C5",
  "key25": "4hteZ49XLSn537LYpggEhKm17KAiEiw4eqfrwRSds16VPEPbes4uXB8eoQCtLaUJJ3s3QBw6M1yYxmNFFZpasnHD",
  "key26": "8LQpSktNiNbQrQT9jPuTHCrmSjzqDmDDB7Ejy9d81dBLRzguJtYkACrNhzDqyY4cfUbdPfqBGHC9Qmha7DHsSUz",
  "key27": "2urFNwBiQsW6UnF67Zindyrt2htrYXSFj1rxqiB8LP6PKxQqzBGKADbRD2jGCwHPZse5fb1B9gXfdcdtg6SDshod",
  "key28": "4eRTsvxtxypJ2NUTLnpzkyw2pWXevCG2UjXVsaFZ4PHcAzYtxMrcQavBkRK8K4Z7AX3R9uqtBs96xKdgRfDfn5Gw",
  "key29": "28WmuZ1aVfN2GyAAD6hmjHaZMMGCePXDYGmKvvEGw3UbeNjzGwt12zcCXns47tMsikK5esSSr6SGfXAFoECWfH2H",
  "key30": "5sWDsxT6Y1u6n1U4c9qaH9gcoJBThaVKTqdtZ5PJ8TntxjQbTdDF2CkcJE7pDuhNdNzsydjGF9d5YTW4d2f6sijb",
  "key31": "W8QGgyU12DEhikwHJDyfjCR8EbKaaVDGY1iyxSJBFcfUAY7wNqovxcTEygsVR4rVvAedZRwxup4wtdZr9Ei92Sx",
  "key32": "3yLfVDwFejcbFvwMMaodPHL6oMac6iMXsYDcTe1yM5fbh2DBEz8G6NNtY5cuMv1skiLEriKnkfrFLm22UjCKnRUG",
  "key33": "3gMYKuDMk1MWYmT6q7Y167kkjzqaWkxonVAjm1WL3Jcy5XoaFC1RZ1dPWsAtjQoLVm8FTLQpL4LzFxRSgR7fpMfw",
  "key34": "665sEnMP8HDYkiMXr37g8ffRpsjNZzTsqn6wWTMEfpYFdeq6oeF1DTpmBKFb3DyqF4vXhyayY7p43TgEzLkUiSF4",
  "key35": "21TjzJm2i2zG8GnoYQGSvWwUBUby9zRTGiRfSSbi85mTHoCVjgZbwx3bTUxGCeyi1iXLKu1W27853by1Ep4ZiUXd",
  "key36": "czuVMhXq3EofB3QDkjt6WKgbuxkSr4gx4WBnYCPLRP85wgBFRbR1Y3GdudQ2ERNn4moK6dJnizC5yS96Km5EsMD",
  "key37": "2HXazQSkTzYE8VuWpTJQfXvAVUQuzujp6fyDjVZhsEPS6gusSqAaRmdUi2GDfGqSHudcPdDvYJcyVPhcSC3dMgeJ",
  "key38": "3LKufUdVkAUy1YPrkPiJfxQHG8fAospgjowtX7h2s8742ompRsPBudKXCsxJ3GUKkMwRNfp6B1Pu653JDTQhAvCq",
  "key39": "25oUrdDkdmtfVYoRJwPTJypuzEBhY47KYUBHbyeeYa46CuJws8zBneT9ZhU9CwbjyaQa9DkoQ2pwkyGUVCVCgUfb",
  "key40": "2Ekw1Wy9DF3NnCqnqJpTfnRUjLYeYRdDi1gWugY2Gk5kKCAJWw7pzvZRLjfhiyF751H9CJjNcZbogV7pDwRUrFMS",
  "key41": "3UKKBufzrhSZxkiXnPhjGBnNwXXH74PTYpzWWBLh3RXv11n2wgDmZohnhYCk8QejL5c4bhy3qxumiA6obZs9uVfq"
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
