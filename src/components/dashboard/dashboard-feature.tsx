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
    "nDXh6vPGLnbtZqnM8Eb1x151toShyk6Rdo6ZwutbdNyrdcEyQMU4HSETtntFBb1dd7Cm1Kdo1yKgKNEqNuBRjfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdmVuyGJabyunp4hb7dhmawBKG6Nv8Xwww68KZ9wbpfwVtam8GQGwXD9u1KNt6hF3LpT4tcV6fzdcVQG5q2YLFX",
  "key1": "2xZN7TPJe8nYJjcLmEnwrweYVRZfmJwyRtXKBsrNsnGtnRWiKi96Vjpyu3d3TJb8DiJDvBZBA4y3boH7yh8buMSt",
  "key2": "61pQooakcci2PLqpcSbGYGXwjg88dh1LQHb4CKRWCctLnr9cuAAhfVsty4toGebGTWcXj2UmXKmc1uqiVud8TAmT",
  "key3": "vS3wEovCqGVNuezZ2pTDoVXgvwT44r7D1XgQf8G8Yog1A9dbNaLMugA3R2j7sjBBmLvfjA8y5LXgMbNahyx7UHH",
  "key4": "3YBR2nE41tSdDjhWdaypSeLk18ZYLt77xqU4i5dbLSW38tWTSoTBAFJrgKEVQxo21vurVwyQAPf1xYhvBjgB467c",
  "key5": "5ThC5KHrkH9QozRkS14Nvd19Z1tdNPVcMJjAAYnXzbGByBTMa8q6A7bNF5qtDRPJEtxhrmSNZRjf7kZnMsF7ewBM",
  "key6": "3Jv2HTSnDu9wUorsLBXXXj6WwKezHP4GyHdF23GC4dwjDXcKhCR9Gk1SLx7cNa8ZFmcfN3uh6vr96eoXH3s4bdNi",
  "key7": "23x1Zc16jcqKPs93x7i9oZ7689k8uMVLXRJe6etSQBgCL1eh3QQA8VswhauTiyqaVX5rkiYKfihz8zYDRAKRU2xm",
  "key8": "3z5ck2EJHDLYesFv68bFm3mkt4b7shVQxNfyE2x3ep2QqnWuGsUErDKuHoHR1W6HVsRyjeywvY7mfiLD3LUwQXTt",
  "key9": "2ic4HPWKmRybm7Ar9VNZYhkju2WRGyTwFkq8XWPw3eoZsMMX8pPWG7tLkqx1fiKS3tGNy2HADXdZYsS1GqWeTSvS",
  "key10": "58T9z6sUMG3XoyqgVSKoN1eAsVja4TvL5KyaUsJWQYHcf9bW4yXx471q62JXtPWwQFscBKWykjJXvnpVRTvmoveV",
  "key11": "EjQ45aBR1Z7oLCSnqgz9WvcA4Q5GqbPr3ddZ1zXrwju2QsPhJGfA63qpD67h9YPJR3TPacFbLJzYSg41KWwTggV",
  "key12": "32pbpQSVtxBvQj6uW3RvZGRpqNrdQQVtsC7F7wxfmnp6cZNEu9gHNe9mZugCff29BKPR2y5dxpaEf5GNAeUw2STW",
  "key13": "8Li2zLKkwj9Ae1q8QvGrCLhtjVjkhCsLQHsFsBM8ixEtKaV2q5NjtTKWikiASeAkgN3JBQ2apsLbK6vZg7aS5ok",
  "key14": "4R1ZYJs7MBHZKUGLL3bDKkn41rWoTt3xsChK7rjsZG9BZxhaXdYUp1H1J6xWBbsv9HiSuJihFAsktLhaLTQ9b4GR",
  "key15": "2WhYGHh2QgZw5dYb4sjaHPxAoBYobGffQDDmBSuUP9y7RVH2qCDYfnn7JyktvjLRtAPp6cT55ggHAZjTEpJD5FM7",
  "key16": "5gsz8rFKHh9oxzLRXzX8sZA6Rky3E3z6BfDpjpocJLeSHFGaN1SUrmmgNDzt2ASyDgGJ4Bz1Sh41eNPnDQYUBfkt",
  "key17": "5PXbUwW76KwXmjWUoSscva7fppqsjbbKhKgw6RDNpqxsthsYmHSjPRA7TeCDEpAqh6pkHKZ11CBYCHqZZRGVmFbn",
  "key18": "SzjHsa3n5fpVguRjhzdEKEY8hXETupvSgpfnjxmtyDjXGFis9zFy9rNg4vzeByU83N6EaYA6bQVkYPRXmZ4Pn8j",
  "key19": "5s2fDWjf7YvtV1az7i8QUxgwxQfbWuEQ7rqLCuCugF2Kp8eayH7yoeQ9zpre1Xopmmq1AwLUX8noHmtY3huhjer8",
  "key20": "2AotwjB9QHrToWZ6EFo9GkdN3TT3LXSeAVwBSrzt4no5MkVe1JndyhC3WFWJsZsuNfKBozfMvEcfJypy4oa1wP73",
  "key21": "UbN8bPw6NEd8HdnGTw7pVui4VQxpRQV8hxqNqRW5Qk7y9ZEEoqYdHoXNYgj9EQaNCooGCpmQ8AUoZBmyQHcctiR",
  "key22": "KEPybZsaXYrRaytJ9pZff9QamZJ6tAi9zMusToQHDEmz3ELLRrEDQscJsVD89npRFrBXW4K7nNinzUc78zzk16N",
  "key23": "3f31pK8QTCSiiP4ZBbV2GLFwRFUpvWaBWA1yYCMC4GrW5iJvShVd5YQQgrVmVHteFkQSmTdYcCkbcp4im3HAasGy",
  "key24": "2vhGbqk8trV8tVJBwKBBBzFpmAu7g1VLGVMkNZVRHyUYtJo84KuSKc3WzYPzsj6uTHo1NL5N9jzQftQxHyH5QccP",
  "key25": "35ZzYgKjYst6LokDEiudLx3H8vd1P1Z7rWC69eynkAQTuQX6AK4qmhzHiE2d5svQsGLJ5ELd9p2J8FdcNkhU7yXu",
  "key26": "5vVDTJSXbfFMCTykaVxaKpaKrVEKZJMgyF2kc5Xh1vGV7tfUW8SNTTKGyUkHLHXT1R9aZ5Xb7iu5u5DNEZ4j7mJa",
  "key27": "5sAuBVnwfSyyg1z8djQhkYSeQY8v5PiaxhBRppjcP2LeTZa9SaDctV6Jy91e2KhXf6dGCtBTD5KQsotcqNtpErkX",
  "key28": "4CAMWADBmANQo4vwsMmBwh7TKcjCM7oRLG9iLui2y7yjiFKLPgDiaz2J9wFBh8jjhoTcNZBfHGtuT9suEizqyM9C",
  "key29": "2ergTjceySmPTnob6fBsmCknhDwLTNcfhCE48opsBU6fDabvS2PgncDFyiEWV8cKxZFsQyphJxsXCBQGRyoZXMGT",
  "key30": "3XY1WkQXHJPfp6BHaJyY9egWjZ5ThaydBaAXCxMYCpPuEpnjvXP5WTjxgEGyv8stJnE5Lo6SEVcJrQYyv2fv5eJv",
  "key31": "3rLKn5eWL98Cwr3HkTmHwRjMVQ7U9B8zpthwj1BeqWyLYW8dKVzA5LhxqNpPtG8GuQZg4vgq5CgXEvWLYDrxbvhQ",
  "key32": "ABNNsujWWJbAvsAH1Nka1ypLJnQAKM1WDikBxMhGEGG8TXETM2UCMGYrLdKDPPh1UiSBAauvWmQE8o15qko7iNC",
  "key33": "3hTTGnZgcqmwtE7zCXEmHuysy5YJF14LBG9tZeTPZDSpd5PYuGVDTGybkmHA4xj4q8rZCLysqTX3hZwBG2zGtWS2",
  "key34": "3QM6TPTMxXNTMmLk3wK1Gf7snjb5QGuGDzttBfkLMec2YEot5YC9MZdjytQzaQ8E6aszwH5VHNEQC2DYzgDedNN4",
  "key35": "47NqxbqXoU275SwqoAutLN9bGVDVbQksY3VZNbQg1S36DWPKnNJyDgG9rdPTrrr28DVVWLb9TYskhfRKFWBeSKq1",
  "key36": "5HDAjQ4mcnr8bLSD2CgHNb8tyxxUnPFwMmzf98Tvopw1DEvYinz4weHebhWTsqdJp4cWHCQ1gnV4qYF8fNSvS5CV",
  "key37": "5YearwQdVWz8SJiTtDrUGSfNSdowdWqv1L5CcDF42j1Mwb4k6FKSU3v8tKrveQMJB8pNVoYcTpjJGWxauHBQgFPY"
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
