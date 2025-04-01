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
    "2RuSWxKWa9YBLTMEKFq3twN1EzXuxLZogtYpGpGMSf38AHYhLh83XcSSU1MfeQuhiA1XTR7YsPpFK5qCJ9x9WgAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4FfQxbcx8BuMTTj824NeQFRxqAuG5EtuUc7sdt1ncRoV8zHfbnYMEWfY6mGjZ2VkNAMNaiKFNuKF4Hd2YCZHDM",
  "key1": "3KAbqZVZqS2oPAfhK6tMKiYjxVwPbsE2ypMDYomUiKjLCEGtU2JPscBSqGz6rg4CutaD6GEsH3v39xtChHbD5MJd",
  "key2": "3WaSnhCipk7DisQv2GnNcyBiKo3wfFdvMN3MewX9GQEmohNf6KDuFB2q6MqzzyfPJPjzweisxE1XkhwjfQEJAzGr",
  "key3": "3cjxJ9hCuDFbmXobAJkXA3ASsnH9qJNBP8r31kxbmYbYR6Jiut1AtycW7qMT9mTAKiSwMhX2aFusgeL2J91YFrcf",
  "key4": "44KqWDWErfnaeUJLsRUDgN6HCTYtxtgDm7nSqckdkCjoWwNZ2vvz58eKKwKWBNcK1774moHq53vVyjMjoLNnaMvC",
  "key5": "3bWa7w71VNMxizdhJpjr3zPbAG7HxurWfa5XtgUz2SNXDCARJN1863C6DMaNbveab1sHELU1CDLSqwMPFTUasyrS",
  "key6": "4LnVrciqavJ2qmAvfgPNiQYLe7ZLsTd9LnY3XMC88jThpSqkrzwRuZod4ZUaU4fPovUvgq6wYKVgj3k741Ge8NF2",
  "key7": "3XUxEqTpNs1fxHjmGBGRMvAKf4gzypVesoxtoxSkBPrhEjkXRiYjii4KU1MgeyC4BipEHDHPzeYCTRteYR1BBq5C",
  "key8": "4cfuDbpZwW8H98KdAnSZfa7aJzP274Sq1UhzzEZdTCX8rR5dvNacCGETLuQPyfpioXNccTkHy31ivpLUBpvnm7SV",
  "key9": "3hTnzbT4iG2cuTPYfMqg3YXLzHXVYgFfGj4RtD5h9HbF2xnevVfDaQSkbRu6PFsQjQ8XoJoFwyVVPiaEh4r8j8Fy",
  "key10": "jJRpj6VtV2XUc18RkLFTR2kXa34xj44w8SvdtSXmzBddpAK6bXdDGqFbSGa8aVDvvbddSunPawa7hZvVspPnwjh",
  "key11": "4igDGXevqW7j4GRHko6kMnzmRbP5S2RFRNvuVprYoEGjvQGPpC6ryHWKXoo1Ke3NHediHTFC4HzcFFmL6s6hVyjY",
  "key12": "QqpwX8MR96eXiAoc9161rjZS6JvsvD2ZSubxdB9iXS86sELpSUER5mWfoAsMVsTAiF1vuAVjQCS5fcj3C3iYkGc",
  "key13": "bsGvkM2JaKHFsoyyr59Ldichb13uWmncmfYWzWA7myzawSipbzUZPnk53NCwrpJe9TehDNA23ut6asb6qoUDPsS",
  "key14": "4u28YBRH8xnvwT9GCkryH3cMfdnVsNPDgeELYiRQ5mgYjyJXMQJvZpqZz1e2soE8kS7S23fMRuE7ULX9nsUxmy9h",
  "key15": "5JgEvKF2zKG5HRSH2URqbSJWr9tBfALP3BVxxcrwgZqJefMVnPL1md27XTTy7GeqSr2prT15UUbzcdYttcaY3wLc",
  "key16": "26jFjSTzAwCMk9dh7p6HAReS159rvoVAPsfj4nzbxALvqTBGu1QpRK4cHk55q7a8EHeMp2mK1pGhN63f2FpxT5RW",
  "key17": "3XorsHzSqxufiJciQodtm32AYg56xW5cjqEE3VHaXTbzuaJ5S31D6tyZVTHRhsjwovvg8mAkQDpSsHaXgKzr82eD",
  "key18": "5NKM3Vi5WEewrZ75yhujKSrS4Q2cZLiNUbLN56ZNk67Waxvo1Krrh4NToUMe6zkm3At9GSHsV3orDiGeZu6HPcfs",
  "key19": "42dcCauJNGSmegz8ey7QSM6nPfyoak6KU3RKwGxuWKSoRKqweGELVYiLAG9wEoseZYP4WAcN8oGWkSfaNAhYk3wq",
  "key20": "2dPvgEE76WBo2PEjYdatVU6yZigDiGvUB2Cb4EWaUdHRP6ffwnERynizs3YJkh6YMwdcGNRLk6nnn6mvBByUPsWw",
  "key21": "4z2os5vGwtuKA3Nen8dwC33rSQiVKFcRqkxW4ZPxfTevYfacrzVhHgWFqLAuxB3WBCGnZY6Y8X6nPCfvEUMg7PBf",
  "key22": "4QXAz6Dks5b7YFpUZFWX4SPgg2q9QXFyLkVGPGyAPkrqNby63EDimah2S8eksn4gULcqX4Ej53HQTvdcGnm2cpaz",
  "key23": "JwXnxSJiamRFcvpQLdQPaZ83Z9rx5dGLnJ4h9q2og3HAKBWmxbKZ6LmE4DtbyJrpmxPtbA3mvXtzz1a9gto5zY1",
  "key24": "4YXknVCHuBVjPcWZ983igccqUNNxSpPzzgUiharEpqeGSo4RgDCZUgMpr58XLibJTsGEg9MYErCn3SviaQEN8YFZ",
  "key25": "2sS6B54nGtY4d7KHQdfVkyzDjFpBNgfHoQXw2MNdhcdx8m4ETVpjjNJKQg3zVZPJBN44kwbKyteziQMwcLW3wtr7",
  "key26": "25eqWa1UGfSutDqcC3D5MaCWtEgBiFvYTNjDmzNxh87SiJZLucR26CJmoDmpE5HNDuNPLxE9tEYg2o5NoXAHpJj2",
  "key27": "2MqSYJSuXPhtAFefyYPc9Er2235fnK975ihhp7aqTxsNZYD1cQ6NGg9c5AAKnKu7V8yxcjmMpGh9r6xsuN9QJS3w",
  "key28": "srLiF65bU1YxsKr11dQ35sTEgX2TCn8iHnagz3AyLrVuWWiygXNLhK8HPRjsWZktjLjzzuyUfbT4koYqDFFFii4",
  "key29": "5oxBBjAVnCxSboQAPSFVcnu7BF1NvdMqY6yKmam6VEVx1UYJx1PSXVjsJRYtuWPGZGyWVFUB7JtwaS1LovSqSmkG",
  "key30": "2uxv1zw5AK59vTrVbNaqxTDNCjW3mE5HuKZA59Ec5ACuovQ8oHuP2dxnNEq34FFBvhgsgkPUjRePDoax4MWetHjv",
  "key31": "5JWxXfS2rtFeNtkEt2A9VeDq2tX2mU8Bm8pJZp5M6473Nb9EGUaA7SQd6jR8msbjRhGKUPstn6FHqye9ZEZPeHjH",
  "key32": "5EWxFZinPqeDACEi4XrVz8JLLX2iaxq35pHXPaLHUgjzbdrMMvRT1goVBfzrAAMPY4UXdwUD2js6zrvcV7H9csDN",
  "key33": "2ZGg8bWetfBnQPtYF9zsEWx1Bx2Wc42baj7hYCgdkYwWdoUBWNxwHPY9ASFejxhDqELLe79o2eit8b15GDgKtvSt",
  "key34": "4msNwkp9DdGTVHfoT7tkyCRhqaFXsbKHF8W9UXZMY1Y8pPsnBmyR1CGdpASqA96g1UDKmVaF3bf2B5vWmYQNfRQE",
  "key35": "ooYEo8t9izjepa5T28eJ8cvS4ibFD1CPWJKc54sscFBUUuJcsLtEt68zJD88Kqi6x15DMMYtoNmMRWCVJBUkT6p",
  "key36": "5H9WyL5LC8imwU46EdpB6bwuUBJkFYBxyrz3Ys5coZhyfqQk35PbNvEf13z6DXHoX8CxTKiQCJ6WeuSLBbHymHhd",
  "key37": "2x3PYwhZKsDRsA6AWeJRHcEmVeHWuJVn8VwRi6qf9Mkog447ABCGzUp8WTHNfnJ8VHf8zsy2LN547PvzKo2tZ856",
  "key38": "2uk7tWCb8ZqoCieqY4ovSYuTnx5e3jpa6pUAC4BXo2W3yi4fYpqP221odW8JVm2vkS7F3vbSx5yZcoT5PxNM1JGQ",
  "key39": "29Yn1H4EnTWFWsu54KTMTuJ4GDFYspjC2Ao89vvXEvhWuQ3K8PbeSU7kgw4UvtuL3LWB9Y7qDEydY7tmuZGV7pA5",
  "key40": "4gYktr765E57uwLsPmgByA2NBirFdbqtUmHGKy6mWbtwNiZqo6pfH4xguQ4mJZQnvFLUnLSqWK6eTE3UEwrUxzv2",
  "key41": "4YTdX4dqYrqVeCNad5WSjQAuztuZFWkZktDh5pTTZCjYEHG8JWneKUyvSMLvt1krsWipcucnHXn88Lh9nR77zA4d",
  "key42": "4yVkfab4m77CMuYJ2ovhtjw9Fyk5JuRMzjU174ozGmpUcvrFxLBkGHHgSEyekKxgJcRK5nh4Xps7WdzkNesbbQK8",
  "key43": "5WPwPJJpyhjkNpDAsjvNmhdQpLQQSXCcm8T4DasBvySrd9Hi8bye3rMkZBSuTdCeXr89nQmh8GbyQRW8dkzHNcg3",
  "key44": "sCMf8JLYkJn2wM91W94AQqYDkfdfHD7VXruB7GG2f5i738EGpbRiN9NBgpnGy2jLJ5F5uwNxD7np9r8edMZwVeE",
  "key45": "4qboqX39Jucb6EEooZoDz7QHQEfa6XB9sp5d2DuPM2N83qipsRMRkcCiMF5S1y94oaN9TjNbig1jtVozsTE36vrP",
  "key46": "2BeA31JPTu8FAt4HbEc3Xczma6R3MTTnEDBn2othTEW15aZdoJbqpgbZ3Xo1Ehg3e44fMMqgfepxXopudwWsEHzZ",
  "key47": "3DyULgBRL7mS9UB5MRSsFQFGTXr7Zq8Awm876wYxYkBPio4Mar1EEfnv9rRL5f48RHvvkfyp7QZ4cZT6Reo2u3AB",
  "key48": "64TtxvHV96k752y31hVJ9ZABz1RYY4sKLgXFD8US9oLczP3xjhaQ2wDpVFUu6oc7RhQ9UdgyLAfZmMcsfXhG1NAc"
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
