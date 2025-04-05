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
    "549KiudhZbDugKPsZkXWgSaLqAQo2RT4LGQe3GkXWxYM5jzZrV2S8imFk7XE59p6i2VFAEmGmJ7UCZ6f9cNo4Sco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACjAA3t262iBZ5tk7Dse81cvwik7AS9ZRQATNYtbSy1YBM6C9Y8vAhpSXu7ZpF6oLwoTXL9poLwEb4mnnH2Xh4N",
  "key1": "ywicMZUDyc9QMTdPqMFeFH6KTzscXZDUqyJWZn5dPmC1r1tKLcHC9gGj14vbcVFoy2oGn9d3HFQC9CUTgVE25Bd",
  "key2": "3EwrdtiNurVL7Jf5qD9DGp9M58RN2hmTaa1b1y6xMnL1YR6z44aWw8mxkU5e3dKP51EFTVYBj4CsyDjGxqHuWp9K",
  "key3": "53kU94SwnYgXHZ4wHdKRbRiJx4dayM9nVy12H6TnvG43ChcHAswB1wDjEZTg41iB4bNMbauJ3jVG3QHbLw7dtMbL",
  "key4": "5si42tMC6VnjgPib6dxmGWrZqd58AHMnNVKvV3x7dfjXgwi2R73bewK7EEKwxLYktDfNtxmZ6KoAW4KrGD7SLiii",
  "key5": "2mGEU2dtRgb6Bhnkq4wE9T93CaWjqnAeads7wgHyYANDoN3fPTWG9kkvQgeJ6EZYEE6iu35ewitsbsWfhjdtgiT6",
  "key6": "sdj9FHkB6jscJt4y5VYZBPMYmygL2X6H5nrvd1jkDUPQDHRQKdAkr31bZNdbzurKngpRy4y1YbZnJU9RgW8Fct4",
  "key7": "fAxQABjoDmWtxW2EDDLydY1KUn89k8wDGqxA51qa1t8cR6d6iD3d4yhhG6gCVzq8wf4qGS41Wy88ohUYvSKSJZi",
  "key8": "3Lcuy7ssem9k6tk2Jynk7tRA4ZYHGKbh2yoiXEyvFppo6CG4jBqLoA2VFjcTxUnu6wmkGeHQN2xiGZ3SE6NYwFkE",
  "key9": "5efB6TXT2ZJvKL67aAfEneRF3u1d717gg6vDUb1n5ynDxBGR3LgScEhVoFnEaMnHXfxnwSYc6T3FmqMvZ2SNWVVe",
  "key10": "65zGXVyMiikJJ9fYQMWDQLRCQiB5mgq4MmQHrLKr15RKDmaKZqYaBHzdwAGGXHnTNAfjAthgEcmVfo5aYDjxWMG4",
  "key11": "5CtYTGZy6QFceQyUYhThzFsDS6VTjW9Z1tHpQUNpapHaCpz1wtCpVYdQ3o5HA56WAG8iapECcfZqLqu82ZazQuwY",
  "key12": "4QVJ3jk2DBS6SsiP1Fi63uYTQSA459BgCmGfjLi4De9LKRJzmBrZHJ8c5r3go3xvMu6Tuk2mSqX7mVrdQP8kZjQ1",
  "key13": "5HxVbJQW3WBq5Bp2qcqgBEzaZrUjzV7fuapd1EK2sWiUrT1FhK3rH1GnnkFiHABAZ1zLTGYdCVqT5wnN1niKxdGE",
  "key14": "5Ci5nkB6CH169AhHdDk4yjt2JKFhp6uZYQ9eTBG5qhNfJRYKWDLqK4RWVyZSRhzKEt5vdcwbiiN1tFjY5hv3SVco",
  "key15": "3v1JGULqH7EN6jgbBSW6qwGMLWJKSSfHbfskv3vYzf8rQJQRj3w9fmCuY8d1cnYH4PAbmauikvGSSD84AYatwEGd",
  "key16": "TCGJSQASE6MqDS9sL3dTwf3AyBJzDxGqzJ1MKXqbFB4DTcCb3UrtrG7wbrme8d6kFwwBqjBxnP1cjMJmZaFNBaH",
  "key17": "2gMMHk6Z4oyL4r41pzGjMSzC2tAsbC9bAa2fG2tPshik7cgCnuKBzSaekNht4rzdhsfZtEVgq4EUNUggRBL1uF5v",
  "key18": "5GkBu2TRs4beTCF8CBGZE9VFCQ9inXMgwjFyh9yKcvmJGQMWB9EheA6NxqzeEhjNizcQ6MjHkhfq9Y7ZeP4f9r7b",
  "key19": "5MdmAPBDXdRzqEKAp91EaHv2QbtGKQ8JVrx9QBAAwWwRm8sHD7nSg3oV6XfKXFBTAmv9MGMvm7NDpx2Vk7KS21FR",
  "key20": "SfDSq35FnthcNYmoKSsBQazHoi2q8W1KnE3AEVw9qDrGGjMGHWsvuX7u8L8RVNvH9uXCJS6mTpJNgzpa8q5eyZh",
  "key21": "4ykmcumBUT5oTF45gi55h1YaYotLfoBxEdkRnKMTq6gxhTdccvDt3oqm86cEBg7QwhHYCYJK3rSEYXEhzW6NGtS5",
  "key22": "28eu92Hmx3astdBwhvZJCV1br7QEyPiaEces6RaeLMH18gXMzojvd2bUqCgcY4QSdwcsYT7J92RbiNtr9WTVfenh",
  "key23": "221Nd6t56EcJH9Dem9e3FEyD6HtH1MnUwq5c82SmibzbL316AxbcvrmETRFSnQKedNyKriSVXiaEm9PKUGJ3wrXB",
  "key24": "R9LnRdoHYLZZ72TNWzrj7zRVDvRRxiAcpSMeGSq6oSyos1s8a1jPYxrfhknVS2AWTzGiwYfky2CihnhUGX3eKZ6",
  "key25": "2RRBaabd7V3me1xPmtKhDYV8wKmegKR4T5TH7CRMAmr8VQSSZoAgxMdA6r8XeHgPXGQcBo4aSvEi5HdvgHpd8dHu",
  "key26": "2hHDWeJcNhuJkvFWsxxFbKH7Gpt4iuAEzpLoyNaVsPC3zPQsghadyZzx1x37Vu44g3by18wATWVeTP1FkoVvfhQ6",
  "key27": "3RK615LwPMrzHxX58rxPtLMJdmLg651aatoyoN15vbZ3bpxhYBswb74ZQsAva5tQ48xGNhFMKhTNkahRcyvryUL",
  "key28": "5egnTrgAo6G5zsYHEPskLiivAj22sfwtZh8zwhQ4BE6tm662C5PqhQxJQJ6eDqtRJd5RcjmUKcVZNbUj432rpAo4",
  "key29": "4WyZeNU36WkxtRT42wNebLCsREF4v68opX7xNkxSmazHJAFaTNsnKFoTnnNchWeTYwY1uFVe2Km8pnKydY8yE2jx",
  "key30": "2R5eN9Kz9saJouMTPBJbkxJufjiuGBWgsbu7J7UdrXEejW562iLY9HYW9SisKvqxAZzv9ndRTj3U45cLRPyw2VfK",
  "key31": "3YRYem2kXbgLT4LZ5d7cVnLYdqZvA92QCH7VfwxCsJQQgDGynwcHuMXGa6CV56xK34FpzUc61kf23dzSWjtKxJYv",
  "key32": "yv2s2P3giWJc7K3f3wnhSLoUhkRwSjLXXLGKzxCehEQYyg8CH59wbn9wFrajr9FJo1787fuf6WTGJUuZLVxbnQQ",
  "key33": "5XekUJJjzhSUZVsjndJ5iZmz2reYf4gU98Q9LwawH8h7wjqAxi7CFR1XcmfwpjaGBRCtQjSQGHbL9uiLtnE4VL2x",
  "key34": "3ZDmYPSKURHygXRe8x2v4CiogU5PS13t4YNJNKZKhhrZjLJy8pE7LexqmpiBrCnkyakvtcqeKUAfSush25Ng54e4",
  "key35": "5MF3cqTzyKihmZX4oXDVd45TBa3tkUerRFFWvCN3sMhxXH8qnquTmAnfDWtAiX5aoKZMpwvnoVFWYYTnHKSmaDvq",
  "key36": "5DruheHcKjTdB4eDwco6Tou8Hcn9hrRizQyhCBwwweqJvNqUy2Ah8BmAAkWm6JLYmuY4ReMy6G5h6j1zszr8pZQX",
  "key37": "3XuUFfZiSQieEb3ZFmoDQcLpyfGsutA3wwC5hUnsiNBphxomANUkodpoabW2BRqJJVxUC6J9qS68Vkh3b4ZhH1pu",
  "key38": "oG68wxUuShNauEj641U8tZTuVFL9TXjt2Sc45MVKRHfjyCczU8h8QcNyPk53CMZaBkhTrkxUfdYUXVJLx4vJRtK",
  "key39": "3S4Jggwc8bGtUPyLiRHLguhNB1Bv5aEvU3SmKJwmzrBZz5cCeS7ttPox2kPEUrNBCUgCuJuxMztpMSY6U5159YkV",
  "key40": "2PReWfTXWNxnLNAprtZPtSdsLi1sFM5c7B4D8WSjY8tijGGh1wgW9MzvhnCHqewYnp5DRyxXeGAs3V5rBbMmaXqV",
  "key41": "3fwfY5w9ohhbCeisxqmoBtyXrtYg26cuxu3hLoLPh7M2FN1odqxRW7i3q2n3pMJFLWfB8yFJUKdj7rZishqeWggV",
  "key42": "5Y8Hvin4njLYG5pHJ8NGb2Fj7SJLajra7vcVT84RdzyJNY2vFiPnwCEoKm3EBUEq5AzhFr6Ex1oNbZwCQhnS6A2Y",
  "key43": "5cXZmEKgAW3d2FMCLeom35JceG3MPS2RyDNoPe2G7kTda86oBcD4vHcxwyGoMWUjfrmoSJhpvMenkhEXS3ZstyXS",
  "key44": "1Zq7Z3U9w24w1xKV597Kw9Rss7xbvXFyEA5BzCRwzSXs6L7S3eUDQKh97ovpFrDM6BTQ5XvDUww9haqaMcumEbu",
  "key45": "4HPy33wXyGq2EywZG57uJVjdhX97w3H15W7p3DCznn1aycdvyWvWnfsF9ZnTA624NvHwZ7Z3YieptRxfzL7B7ScD"
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
