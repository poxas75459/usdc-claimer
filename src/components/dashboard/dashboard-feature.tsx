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
    "5XqJ289a5mJcQzLocfoVN82YUng3fhQUJYnz41qtLoNckRwwhb7vDy7CPSYefCY9yVJhbpBQ9VhNJiwTGf9kr8C2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjGUaTTbmJZ1bY9VRap3QeQD3fW3HBif74LJZZVtWgBJdsBo4ojqJLASnQA7fejP1yFQ7myXEB8ZMRgvTR9iJmF",
  "key1": "354izgVTJDaDYigguCNiG4hwcfReDHe1KBremCzx5KttV78MXqTxkpv8YXTPoujMCrGnc2ewxVahkWnytx8ZAxj6",
  "key2": "3niNVwZhA7Y9t9kTDQrJjVqDXWw7brogTVHFFF3VWdmnN6Ub5Gsyj2sT54qs1HE8RRtAPTKwV2j1d6bdiXf9sYY9",
  "key3": "xRZnZnoE8sexF5ZhpWu6vCUFiqaFNNYE8tH3zJjJ4frXGjzTCaQfdcqfDcXokBHZmuNDdmFZsqnxYY9s23ipmh4",
  "key4": "xshFX1nhgccKLjjfRiurRx3WLcbU5yfgVEnYtsaYn4voFFyfGbgjfaZqSRmp53a4xbSTCe6fWbt5G3JyF3QBSra",
  "key5": "BwoarXkBvf8FPcmCd8ZikGTpjT9cxHQ19hpGvG6zn5KnTHTH1zEzkXyiFPXzGahetmeDreEW5f7fv6WRV2vpN1p",
  "key6": "Abe7nsUY1TYdGKrAE1QZL9syKV19kpqCpAgLssYyG1AeCAM168h4myRcUCh38mtjcZQiWB3aFrddTgX9AiqPENT",
  "key7": "5YfJqSBeqULAuA9CFEWBr1NkLpJhypnGyPbN5JAUmnZbAVb4HfEoi1UGA8vkn6nMfdrXdZjM45szkmJvqotehzdJ",
  "key8": "3eFvboTa2WTL4d7Bv4kadRsB9wXf1ML1g2yjVgLJFdF6yW9coyozxi4mLei66aT1ptpo9PSjYBBxoNEd7FabXYfp",
  "key9": "4z38ZidKNc4tdZBJSLSQkmi4QoujLiGcUoeBFK8sTbG2tEUcXEpkskpNQ76ZX3T13WH5VDemL8XDsUVHt2p9CBMT",
  "key10": "2sjwJNNWwMWY2XgLWUYdSCCGaBYFa4DxAVJJZuqojJs4jyJZhQNr2dJ7JJ9VAXefuvaEovvVLgbr1m8CvDQsjtWr",
  "key11": "63rWp4AJ8GvHmTYCGpwRShLMz3d3ypXVMuzYnz2aNccvgcsLTxZcKcWJc8M6P6iLaFZLhTPTvM87omQx9FXjC76v",
  "key12": "34dCT5BJV3REkBqhjxdvP71xAM7BFrrCDLruXxMQsRWg6nSfC79kjv8UR1XJSF2nXzHhjYpFRUADps4y2EwwCuy5",
  "key13": "4WaezAPEUhKwiiTViNWA4Qptix1QCCr8EZimwomaMorcpsCTwE9Nc6QNEtxrUAoDEhqdDh9JZHAp6kpLtQ3vDgeb",
  "key14": "3V1Rh9sprm9jFiCNe6t3NJe5mFi7Ar8SfUDFex7P2Bet2p5GmJUxyyb37ss6Vke7TGaZdAo9Uz3bAVTxNssFXX2M",
  "key15": "5Cmu9ERtJFzaRbXgrm2HLWMt8orvk72vFQuubbJGLqhouQx4fL6xT8gmG7QgGLAMCVpM25wcUijWu6Qo9JSvQMRz",
  "key16": "4yXRztsapu1sQdgybc1mXNwBtzcoFfXDDU2egLfnrQhN84RrMviEFFg4FuhqG6ofULtAcQfnMCcyCUcczzNFTYrz",
  "key17": "47RPxDwhPmkaMEJ1QunyouEGRZS8nWX5iSprTRhaHCdcLMxkKnKyPTm46SxyVRAVaLVNe4NdF3ckRUMvCd8vXftR",
  "key18": "5jAfvc7oppFEB3MamEstTkb6AQksvEs27ykS8HCZb8ZyKZmUsmmZj8QW4sGbcec3PXajYYhFskchoZ9tCVd8vBDN",
  "key19": "2YA8V1qzeSHbqEQgYBSnhpa89UNvQjg8WABSwDa362gGkv3ePq94JqRGmxMruHdW37CN8ZoZzEtqGnn1Ug8Bpt7Q",
  "key20": "4X8DzcDR9D1kHrG43fGnX56AydusQN5xtXAhEmi5jxfJ2sgZAcT2Ed7tMJupHvLmeSryrPwjbdsdXqvCFeJBt5M5",
  "key21": "2uT3MpM6aY7EBwsTyKBvbZJ59DQQwZvCrjsp9SnSEWDu1MTNvFcZ65NwsMk3HUXTaFPLxoKxcC7AyFy6GixD7QsY",
  "key22": "2PTTEqKvaYQoCWPqCK7zNv6Lf83Ztr1mPmNbbNoBVpNgfgByPNyPXmUmNqgqCv12GTf3p3DaU85YbtFtwVK7Tgx3",
  "key23": "5tM5QYXZMvhsmcnA4Q9guzMQv27ephCq9xREbJF7Ufpz47rv7v1Mx8DF3PzWq9us4KoWPwuFMA5QoyfWjuhYwTDV",
  "key24": "4EJfaUuo1YYdmYvUNjaTN3c5Hgepr4288i9ybUBGZpZqMacdFFN2F2mjSpsrJrqa1QfrXjNDFDDSRqivLxUKi63g",
  "key25": "5dbtVkPRSrVmXPzH56TT3dvPgE8msrRwoYue4ToqE5zqjz1yD9hx6RXZvhTh1YPqFiZxQJAkHmd4WChDCQuMxJzE",
  "key26": "3HfqGCS1AyezFLUyE2d18zCXjM7puXsfBsCkUuLPczHFQ5NoBV5bXqjCmuHf2yeSqkMLK8Rkr162ncCcNNzpckB5",
  "key27": "35cZd1xkXU5UrZDY2pyihvaVizwJQmHurfsVsz1SHX3jWQeecv12XNKWHFJResqYhLKUE3ubpQrVwoSfZz9z3TER",
  "key28": "f2r6kqSDCkPLsxE8yLUssUSiir6q6kZ7oEoztzqt2iMBecqzPqrp68CSariiR9vDvW1yWWEFwGkEQFr7rxBJP9B",
  "key29": "2eEdiyAY6LN31mqjYXPhK6CyEP6K6s5roFGCf8AbGqgCGp4oW4FL6HCc41vqi2avkZnzTWNm2U1XZgq9JocdHu7e",
  "key30": "Wygz12ysGthdWqGu5XoCQTHH519i3MtScaLrry91TbNvYgRuneM95EsU5R3yfUgvk17hzXRvpyD71ggPFvHj8JJ",
  "key31": "2CguYh6nWv8NuFKxhgrR2AiMpqCjVfjVAZptG2Tb6CQ5nLoLc98FNkavop8NvWWv25RhaTDKCHEpuohEFCitJ33t",
  "key32": "3gkdTinafsjPqPbTTuHx7S4viQuV777TGP3Z4yygXETBWm8wBy6XALVkDqSthyrwxYzBj6mDgvgooJJ1NYR2iK96",
  "key33": "3JUS9N4GukEF9cGieg5ArUBMZt7x9UYaHNVDiDBMEGwqf2zu8bRC9coPMF2wuDKDWopvMkTtaW3HHEkQXmpyP9J9",
  "key34": "3JojWoDVZWnCrfDspBJRykB7XEeMhHqdtTvmxzXhBeUTHiGXCnEtZedNE6ep2dmgwKLpeqhWmErZxHfTToz7cV2m",
  "key35": "261y3Wouf1PWXqf3mWAkWdxJTGZQPgj5yvuiUj55Vp2UTxewE3onHYXi4doQyYgQHTiaQVVESW52Dom3wYYLUVVD",
  "key36": "3aTEctamaGRzNBBdjoyaVFEeQB8xoaFcQPxAPeJrCkLxD1g4Xam2yky4BgGdJKTabnFRyx1bGqAq1QCn1spoXmVT",
  "key37": "6Vnnon4jX6EVkr9aub7d9SQrQaqioV9bNGQQEsXBKgKZSbvTjX56U6NYHe3t8jvbLUigWbtULteQakjJhXk2LoG",
  "key38": "2UfuvWBNPURawkFFX4UhGGNpKMiiaSAaARr3RXA3gQ17WaKHMxnGC7wbksnRyVjsyDSkzNKVLk6ubRXYjYrTpm71",
  "key39": "4nL7ArFeTFNdoBbBAynWM7XMykdoYiBLksVRanvmGzBQExVS8LVmou6ZLGSsWB5YGZGgSmaG2adVMa7wFQkJBN7z",
  "key40": "qusnGQ4qhVV5McQ6rNuRRxx1ZnEg8wFK69QYq2SrpmfhnVjJDa8TuaPpfqDovDmZuS3ydQ25cKnt14UaSn1GyoA",
  "key41": "571M7xTUzrKownLern7XQQH3EjabwNQZNtLjxifkNHZsQw3zArmyiK2Nc697ukK6Q75Tn6F9iRdhxRSrN4uxL2Re",
  "key42": "2qnUWAzPGrEps91Wm75ZfFF54pHNsEh5BwhEKTsYA8Ma4BN6fgKBN1VDmeyVsaME8ByXBHceWYTqJxN48HjjqUoS",
  "key43": "5ZtjhBtYGJC6fme4qKZNf2xdW5dRCv4huoQWxE7hT2ugrKSmaqTVYVfLEW4HWnJGdVMWFLx9bGZcUMeJGEQVXYVN",
  "key44": "5J39zBameKgZE1nPKiwNQ4xKUYy4U1SLpfRe384mTKmCF271GQzFjGg3RofE8qRKVDbHyFzgtym1Gu2fUUirRfBQ",
  "key45": "5C8QsEiLRmrKDHmprBJ65hUCZY9C4uPyJRvemYitaJmK6rEDmo75EawXcWXZvHwXSP7cv4fWRFaGDnyWxitcVUrx",
  "key46": "4yK4eiyUTmaBjQ85MAeoYfzs2CLbL97UQQvjM1kM5tiBNrtZFzRGGrA2KxDQcmMcUPcaDBcESBeAnFSX61a3EmNA",
  "key47": "1vwDL4yxN7sjWuso2KQznbiwms3JqQDryUQz8GDf62MBtkvEUuYRErqPQmbherHm8cn9qfcnujTb8jTmbJSbmrr",
  "key48": "2pnfa6MZm6M4UhUNAXf7S8ChLTJnrVmezwNvq9i5pP3Pg4AjsJ4dBPcDuoTjszL68qJcGj9DDmdrCNjDJHj1qREk",
  "key49": "5JLJVtvjUJRT8Q3EwzLWBWfAABT9PdBRAZKjKJGiXKEMsUoYMj6nEokisCwXA2wWyFEmwHfJNv2V6ZHbDMRXWdEa"
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
