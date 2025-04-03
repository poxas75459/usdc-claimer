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
    "5q8G9ATVR4X4nPaxK2WfxycYY7wRxKyFVAxVEByXPy25Ptt6UWfHCW8jYuFTWJs2St3B4BnUQcDMmwNEwxV3MggU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46LNT5nXEPu8rRPwZ5P5wuBJtdtAvqz8PWRhMUv3cMak6WZq1zLAdkqUktNDUWqGYKrvZNCbtz5EU51M28rBDtsT",
  "key1": "5GfA8dUbPo5dSroRVPE8RiW63qKqfH6hyPNsBedJa4i78jQSqiph5gMAkQiWSCJdxri2oyTKgRYqoFRz7t2DXR5h",
  "key2": "2iVD4gsZDKfgHRJxEfkduKKLQsRsR488utuNxmTop4xYp5miTc3YHqbfM5sU6aRvRmJWNWfnEDb3TfLuMMPBHtuV",
  "key3": "4CSHFn33EwrDtp1LVtZzpEGiwtC8frve9n4GJ8JG2tvTaB989qghNfQbeTibKAiZh36rXH9MoSVQLKTEX5bJ78i1",
  "key4": "3nQNScCUesrMt2StKpRg4D7BfSmJhkNe62TnCPq5fvRz2qCcCDXzZySHgYCP1CGYUNn68tMxtPZNNXYyCeD8qtUq",
  "key5": "32pwNgyCt4DziJYcLDTxsYZvXM7NBAK7DFoD8QR2Qcarr95YKatubRoppi8wzGcCBGhBe1AGmMDDaLXq51uqy65W",
  "key6": "67rLhzCReQ6TymS7NmwyjpQ4qzVH9Hi3QyxhsMmm2PBJkkTA3CNkvRcXG4jsJ4oBsrgygVPUgpboeJH9toNvSL9m",
  "key7": "W22L8mSkik8SDCCtiQjXhpanWkWcFBsGnYFmE84Mqu3gB61Xuienq9Ymh5PY1xy88MzLCvwZ7YHDMD6cQ6RsiPf",
  "key8": "2GhbxhQBbveoDfcsmteA1nPwZqxu11JPd5xj2kXdCczVaa16eV4pRmuHbBpd7n5Gdfn8cvBHqc2zXEN5X6vnda4d",
  "key9": "4BhT2YVDfcFHu6gyEYUvZRBvk1w2vG84HHrULmZVRcxsEk5Q5i3RCufKeveiwn3FMfykaTZsVvnYBiGHL9VfzPRC",
  "key10": "2suhxQabQoag42MhyXAydLAXL5yURxE8NEJLdVqdP3NaiqSW2nAdecohw4R31tfA5RMWmv8UZsUoZj4aPKUCR77R",
  "key11": "4Mieu7cjXzXoo7CbRbzB4eBnZgovaK7MubvzCHgAY4cbSyjAneBLni3dmNkkU5GUFcmBgLQ8k1BVSp5u9FR195ps",
  "key12": "4zq1wmQndprRrLPKxXSgXBFdDxuvFA3h4vKKq94js2pxTDueuhXXWxS45N3vWmHLp4v1G6LEhaaLKwPUdy75rf3u",
  "key13": "3HQ19ysmgkQo9wtbr3BagirmsTAY7vFjDRkLHQxmQMWYzoXYQxkXBhpsPJBjMRBcdmeNmjnX1KsHjUnNNt3yEfAg",
  "key14": "2QMkAxRLCepste28sfUHeVJvNhNZtywH6ZW6T8RkLiAmogjbRHSTXtHb3yVpeLx4vrumsw3BUJKFk5WqF1H9soWj",
  "key15": "5YAdCEEyt3RScE3syV6bpCHeiWD6YeyxUM6Zc31pTbNAB91MTNaym9rFYAfwxG1niq34qDhhBH8h3XGdGXYG7XVc",
  "key16": "4iSJVwxkktBkGNv5MtxhhHcs1nPi7h8pNarkDX4ytwfj9K7bqa5UnrYkAmhzRqkgZMUxVNiJRBmpqTS75RSziiH2",
  "key17": "pgcuHNkUx4LaoTffUuHU8uT7DG5AUjkgTRAvaYVweEzR6UCDRiENmAu2yCVML4bmcbUeqwbXTnkxJ73VHARQAv1",
  "key18": "2DvLkt2aBYK7Wy2AhGiBXVd1rfpMmhrajQyjbbmqR9poGtKnZc8KeJHuEEUzc8mf6e4PEAbiC5daywhbQMfLjkYB",
  "key19": "2c8qDw9otgn39e6mVyn3icv1migphp4j5NYdKND4FJb1Q9NraFyqfpd5WDfR5zSi7URmSBcajBqPwgpQhWKFDCtX",
  "key20": "2Z2V57VV6nsHFpy5sLa5xgEsD2MfXh3oSz3pKxsHWaN2GKR4ALotPN22Q3ZHBZBWszw4h1nkPX3PkEu6JLsv55LD",
  "key21": "VWNqSqnz42BMziVvwc9ZMN5mA1LPYNz7h6HqZyTygeCPX6HiwkUZyYGVeqwU5JhBiiRm5SA8V9mUquWNvR8G5Uj",
  "key22": "66hQ3MExVAFkz65wP7sNwoPyrqAMiEkxHzZdGzgJTbSPn5FUZNKHiwF4Zotqg3Eco2Ca9iqNPC22icTzbrsNdWGd",
  "key23": "66Kj4bz1CvZNvpWKcYovjoNZpXGo6BSFrqYWVRK7jk8cGeG48hCAmucaGJHhZt1y8EyRocKrPSvK3MR5i5qywSSc",
  "key24": "31fGat7UJvSbsLWxxDnri1TfJD993jyHDzhKGm2pVkuaaD22HmKXan5eHDim9txEyDecah6N3fBsGcUUnSc3fQY1",
  "key25": "5eJPkCm9qxp2jwjm6xtwNdCTntY62T6murKWBjdedmhjZyX9kjJXydQ6FSYdJvse5kgf7JPSXX4Va1M5QVJ1VBjQ",
  "key26": "4aLkCyJedNp7N5SF4iZXQqwA2tfVZxJc8Q2Jya47euJMFxtMLEVtReA26dPdgLq6Fbo98s8c8bfhb8Kb1ysupiQt",
  "key27": "42awoiL2B2HNW49Hm4AUB5SfEmwREkgdi3HkAnfPxzqgMu8RAz6FAisT2YZWV4P9C6V4fxUQBKjsinivuGAViKRK",
  "key28": "2UD7otZs7Jgv92Tf4cEDmSBwCg7ePa6shMP7DCVXVRpR3JuiG749eZqASndpb4FHi2mqUArXkRKHkdshxmdPXtxj",
  "key29": "4mr6oQySvqNzoraksQgWQRA2Tz8PxtyF4ibNdmBTah13myc3RspqREfZccQPW1HYNMoLPmsYhTNrgeBGVtKeu9hH",
  "key30": "2tV7SXTDwgvAYuGLC5AwU27w2jBko1t7UkvCudpJXGHyrD44gYVyzUPjsRG98j7xGG67RxPrt671gMzpB7o2CPrV",
  "key31": "diMhQPbDZcTm3Vc3c6Z1sr77Ry17gy54HZH3429u62jbcvCdRpK4T2ZXgBBbqici8gR7vkNB9apUcqeZEPhR6xi",
  "key32": "63SJqzwuah8yBNQeJtyh3QGPJrgWpUroERk8PukYn1SfpLXdu9GkR1ozwjjMFVgFqQQH3zWMbRM7TCAjfq82eZZF",
  "key33": "6hRGSCN5ty5BgB6o486hLFhKEGD4K998fU6dvMECLQiL254G42jnmgMycufaqKcnaRKNvUPgx8FKVMmidrSWXvF",
  "key34": "4qj4NA52TEJHu9EtVhK1Aip1ZsHTkYAwTJBCscUVTBZukgMvxuUHYZ8fzvqcCZz7R9iThDjzGdKqN93BiutnSHwQ",
  "key35": "4aKZGDU985S9YXH48G2wPWxaPvB7JkVD2Mu2unDm2BJGMGCAuYTYroo7KgABhUZzQ3VT8Vut5K1cXBrgup1WoTNw",
  "key36": "3KYYCBXL4MWAr7cK3AzFRxDrViVEAouvizfgXUAUcGWroVLC9YYSpH4K57GSuhh6e9Sqnt7Saa3yTDE512Rb9x1v",
  "key37": "2rmTCfWQihkoZeE8ppNVBEfveFQ64zXceBpv8Wh1UL3UvkfByUJKsLUAmfmBbvmdPD1dHLzHrH1R4dKgPMdThuag",
  "key38": "36cZa5DxQBVBFthygcSj4iAPsb7SamwbVLiLXXS12dd2oQy8nX7mCkWBoH8DEc1EMx3zaESWHBX2AeQaGJRruNL4",
  "key39": "2PbNv81p5KuvF6frQ4kNnozYwqCnLWBaVLyxb7pFgcDXNcpDdEsuiS3QP7gJNq1nrACLqRWVCwLNuqDmyLRMuurz",
  "key40": "5StdgXCGFyWG7Jw4FmZD9QVwUztNmSghbYgBz46S1Su7McdJZXvEP1g1319rwmj6oq5WWkFgJXhDs5SsDxyZTeWn",
  "key41": "qqtFrKCZXhepiqDPLyXWjmsY43ZkAAE3DBK3HhBP2hV9eRngzbius4yCUYYGw6SJZgPNcid43fxUWEzXoTQjv7B"
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
