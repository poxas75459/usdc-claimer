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
    "5dDPREpLLVtMAb526SxJvHbLNdJmXzSUK4p2bboDDg6GQPsRxi2fnTe9k2sHGFcDdcd64C7cgGfeviQYsSPhfPae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xS5RAb6PSZnMxcDGMdEMJCpmVGSrfBWuFHBVRhEfwaX95QTqneD1WM2H6BydQWJnqGfU9yuUnbAS3RJaL3so4UV",
  "key1": "Kh5mLUwpqb2jaztrbp8Q5fPQY4BnpHRaJLE8pF3KfqKs3jaFRn6MAWcoWw7WXfzscxovyPwoEQkjPbP7rJSrb1i",
  "key2": "5wNfv6CvBsj4CZJGQV7RwCVXPUmE2uhE6GL5MsoXtW2oJMjDyQwdHHh3XvWvwfRZdyV9NVGDHWPnJRuUWJxzZgJY",
  "key3": "3sguviDHtbaLCrUrkmSU8bDZSZ8zmwhikfRuH5BcvLLnf3BKF2GT7fKUVYMDoT5gimx6QEmkecfvt6GxXQktnvLP",
  "key4": "2EEzAUvzo28J9i6eUiE9kDowVXyDWrZNxXD5LmxjcQjq1Ljp4BmaW15gt8A2iZazCbNaZsMcQJhvbtGmHvbQDzMi",
  "key5": "56ihPNxi4tcyqopiRq63LkbcGsUgEh665JjisPM7S5WG2pX4S1RJn3QQpQqwgn6gnHfTRovWx9ZBegChMTTvu6Vj",
  "key6": "DXoB7HVDHZUj7opwqiTkVdvX6wJu8nYBD3W9u27dhZRYggvCQvyQQKmX1KqZCGv5nMtenmWF8ZGDm4TerwwvM9P",
  "key7": "4cuft5omPBPwxxn9GQzXysKoApNQhqpuqKurt4fwHcJ319XC759wnFnBfxwxA539FZHgEByioc2YQ91yZfjdWbdW",
  "key8": "4KRZ5NK4nNrdbhf7JBfmNukTQjWYFgrAoo8Uym8Cpkkv9ExQJamtPiZkC6CUGP4pYpvw2mS5r3vFJu6mLBbxesbW",
  "key9": "wFRFeYFMAj7xGgmU5reGt8BHiyBo4HJWXT1Yp3YtMUtkheGc7N9VH96aJPoGx7MyuN5FBMHzQxoEe41mnQ9AoBZ",
  "key10": "5cj6cDgTPgmAPN17DzpKaCtZ8vMok1YYh6CVhm3R9ied8T4KhfEwiBKPHYq1UuXAjPDuKCCzNP3BkoWTB9UF5Kdb",
  "key11": "3Lt3tajxNNNdtrAmZPFsRVZSPzTKTV71tgf4PcMn6UQnUgkNv99nzGjaShn7PNZv8shVhNkPLdqbSHk55JgdYEH4",
  "key12": "32o5iRaMx5DErtPS2nGmXRb3xsCHZW66CESax2JRadcYPUvfE2AQoj8MggjkDCwN7JuN2RTZJZcerm4PAg6abYnR",
  "key13": "S7weKd17LLRP76U1JSU5LQJwkTiRFZtefnLimEisUvjsSGqdBbgtyuCD2roJy6iZwv5U3NLgFv62s9Qcqh3thxE",
  "key14": "4yUWxkUaRPsvixE95ufrKictW9BKpdh9xFxRvKavdHivokkUVCurPVJW95B9XKkMzonX9DwxXmqaa2kFxYZodtYC",
  "key15": "4vvz4uF3bAjYfnHeDCCWQYm9DbCJqCdQoAvCk4iFFN4AMMwbbdD2GJKv4vHoKnYAVBaxCA6ycj6LUT3Y6HYYgMUi",
  "key16": "2V5ZiBouQi4hTt3vU6UdYXdAY18Zhfc4zuHwVubAfjrLF7eoTwUuoJarVhfySmFKrHuYiAtLRqUrPo3qkaQg58RE",
  "key17": "5VpcWSfispfWitpRUSdMMRzTcDFSMQkSvf5f88StwVkZZdLQGDJoFRvCBxVDwD8nES8qLmYQSCSqCAdLDyURSUSV",
  "key18": "8oQ1mXPLLorcsQ1EXerNAtAZHZUedghvi1jRrvASyGs6sa6ZyChJEZgJ6VxS3k7dCmftkNRZ1bbSPF7pPYUbVkz",
  "key19": "WUNEEXATJuqHTmxgbdffnjYiwzKeeQ4sh3zrzGJwhuKV3hb3gUjVgx5eAcJ6fZUVbq3qYNCBe2q9gMV4P4SE7Kt",
  "key20": "52ya1Jf1Lf6SoKsfk9T4EgNCAkiynHVfxBRq1xE9A9Pfy4kJsz4vs4dspt241nuUhjM6fdNSYpq2Sgu32Si5w8Xo",
  "key21": "3zkkRQygiuHWns1zvwMyuE78iBepMr69bJf93x5mNFTvyTyHVp3s4YhBZhRkuD3fpu1vHqo7LFpZAgCoLsV3NcWs",
  "key22": "3c5FcJejKyC5DbCjjV2DSbkpbFeWqq5kmbbSM6i6LoZe6joi2W9KL1Mga64PWxmd97Wh86UNVbAiDa2nsibMK9uf",
  "key23": "2cjMJwj5D8Y8PYZxtu87EaZN4QutYEpzxodWkG6qUHyoYFCVLN8qhWjm2QnyKwLvjmv75NRGUzumfJGjQoom8ehJ",
  "key24": "3hzFLahfDibobMGz4U8PFmxLPoNnoWRyKcGHRBQyvFW7t53BamhPbF89N1SBZ5gyPZ5gTpWcA1yjF6L1rLutUHAS",
  "key25": "21wauARnfE5RX656YXjP7Z4FNAHXDYwZSpFoj5ggG2qXf6t9hGX4A72NGtg4uQho3Brky54WzoUVLXv5gSRjj2i4",
  "key26": "2eXjaLES2LQWfPcz2Q3yMkzHYMiunZJnf2XA78YKX7LRYyVyKMZkQnxR8sU9JgLUthmZkq3bwfZcgCmvc1GGtx4e",
  "key27": "5uahWL7eCDre3RYwAX1iKso8Y4XA5WisWqsfBTUzLr5aDngQBPk8XzjgHzcgcyyuP9FdhLhtsB74b6E5Mu9tQS31",
  "key28": "4YDAeSAwVCTjLoHefRKGvdaZm1MyTiNpAVLuHkThVhUxoWD1oZmADpqJLTTYKehorayD7uvtVu5VBh2MigkDx8Kg",
  "key29": "28T7kzCUyNkqxXt8uLCn9zkhqNrPo8r9RZRfdu7U9Fk9RB2NfU8MDTQ4aVMtbt8BPk1SjaU8PrXrL9sXdzbMUvA6",
  "key30": "TeH5AhoTZRP539ghzc8fKXjYawLdza3JHodiEwoDdk3ffZTNoR87ukKgGY5upPWzT1V3FFKR1ZAF95nXJAVqW33",
  "key31": "2xsiADBsujgcdybmeuB6J5hrJHz42G7kAPgmj2baBokwB6SzjeJsvdYRjW1Pfngmw5HoukeGD6ZjGU5gBouKz4gt",
  "key32": "dK7PdJJv4kMjEbKhJxQsrvKrJRadkk4EaeLW6sRZV8jfJfFP8rfdq7RVpHX1BbXbXyKoaXzqKjYqHBj1hTvGrki",
  "key33": "4XtGU5YXSzXbd24BJycQhGuzGxXUAkQXnxWRe9w5BquxNjuwaXcm53TMW3iTd2tbQWYNeC74xJuBMrWf3eg4F4ou",
  "key34": "52QovuPCYReitfdvNPYQBACggc6kYPuRRLwYkenHV2wzadSjkePp8GtnZjJ2u2AvohBL2HzRgy13geAYr1s8HT9C",
  "key35": "2tjq7HxKaxtpNYSPWF4r5pPVb4FSQURW9LPhfDoxM78gLRtwyLjo1qe8VSpQa4WBbos1jVXDmJxH1mnvK4jeBu9o",
  "key36": "4mrh19RuNz1gKjVMr2xAdZsRBCi3ZJzni5mvCeDjxVUZgMxZ4nzVzmWRuVVqG52UwuxPmeuWuyuLuKzi3HncPjBa",
  "key37": "4ryUBqFa6H2pek46943giVxPmfvMrpfqFQvrCfgddYrYPtVWRjC9vxgwWVGAPm4j5uN2cXXPfHc84o9xfn2EJJuU",
  "key38": "2fTn2Ry7owKBa5SafWaCGRaDwPvJdgSCtyTDgLuaGo8dvuyk84wFto1MedE7R6mVD63KMoR6sZN3nA1jdRnkpcTU",
  "key39": "4Esw5cY5jqaJYYTWB7xpGhjjFQZXhio9v6qPjimiXrBxb3eUQFhVcWmvVA8P66FMDXm8jmaAuo72jxycingMy1wN",
  "key40": "5Lkfioz91Bk3q7Hv3Sxtcg5omCs4ci9ArwKkp2FnYHa6bVfDEfuBn8LwKxyWRDGY35z7pxsHZ8Lj9sTKvE16ycVs"
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
