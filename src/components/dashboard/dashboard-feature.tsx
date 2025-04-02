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
    "2cyj5MtptHTwvXv1CrKAQE5Mg5a7kyuaa7ewabTSYj7s3qsCXpH8d5qwwdiWMRMXEwRRU7BWc4RCp8eqh2XXNLXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355xiYTLUB3YsPWLiYw9dsoyQGseATPUHG2tWLE9oqhPYJMVvo9EQYunmoANrFdA8XrKnRpoNmAA23bNnsC2nxxc",
  "key1": "5GpT7MxQBVHgYVtZQ7bch8HmzfjXufqnyMcriFhXCeomTA4SyywvwnnGn3dd4grTqLBsM6tjhmK8RzcgmFkVSHeB",
  "key2": "3xeWDZyQC4wN1CBKn2AApxh62JZHbFJVQNDeG6bmAejFfrUpSK9AT7bx2Te39u7dMkxbd1aDB8t9NFwPU7asbaBa",
  "key3": "5WX91xk7WpBcBr25pXNjrRZWdgnaCuVUoo7fqrAWejr6YxVA2aL1VaufxEjzoVbHAkDV5PBuGE6gJEEosXgrEfZ7",
  "key4": "5gmGR2evu1di8FGG4ayP41WM6ev7RoDxj7Fpk1gVRi51EaKgjyRMgT6dPWvdmtstcEeUS9kHEAe71yiZQYwmHv4g",
  "key5": "39CrxacQ5dvPebDDsXhno8F45Tw1QVx1FQhd8h9cATGdLCn7GmLaYs6SJzTQWiuSzLfwDEjQDESyV68yH631iWMc",
  "key6": "2SH1fxbvacmEYnz4NvBXbspGLsgMt73aZTVzrFoUWDYcCdHrbLA6gskJMoJALH7A2hUiRVTwkh16YPjEWvNbpK5G",
  "key7": "3U9uFGnbv9wjfnnyX5yR6HzpzdjPBQNwcrCBTbzTrVNE3MMHqmSoj8qnphYkL3G1qkAT2m9ymVXYJAWgMW85eUwe",
  "key8": "5BPa9bqAKxKedWiVVp4ZUtLxAMUpx36BaUxH65WR4ypxDAixTr73YdmvgzH98sCvjojY4sDyja9mKEN9GSML9HHq",
  "key9": "39WHLRzGHeXSCDJEuZ9R45gUyBKRX7Vq5YvhgMS6mH1W4Ec51vVSHAaHV9kVMGwyxSV6ukeb5E95Ar9f5QbgrsQY",
  "key10": "WJMaxyWsafmavoCjBNRmSzFzD6vE9TruLRSBvPaFJ2ndmeNWEZstRtW5H3YAknqnemUmN1s8cHBHaYrfy2DFEZb",
  "key11": "44XQRUQHFqBYt4QEx25dd3z6qWnw4BgxAbkxcLm8AHUKkPyoTyu98eArJe3Lz8XAJkGKLTnWLW62eZHfr9S8p1Yo",
  "key12": "4ocYXRAjnCo5BKjBxoYMQpJzUaP1Zu4unsst4XLDqpRNEwG5ZF9VTtBrfLojLZjs23k4KNDGuwLAWwAdSCVUoUJp",
  "key13": "3f4AkfbSX4XWrPYx2Dp5agNAaoysGhR66nCz2RkBUkHUYKV1UPn7EqbQeQwkRwDmxzGQtMKgEmRhZPhMzEn8je1",
  "key14": "26LpcWQ2asZcxjWMUeVndZ45CMH3jwfhaRa8Us4pzv2WXNV6ExFfSuMMgqPVnNPX2BHqpr3Jg13zBLktHURVv3jp",
  "key15": "4dDY4jy1myxzPhJLVsGJMZhGiTgTdgA8QRqTJpWejeXcxknPqtAtSE1WpxHHQQkZoAoEwgac1aDiDz9gexMp6Rro",
  "key16": "2fKy7vnPNTXsnk6fg6SqjLs5fupqJ7VWAp31py79dUXTULamaQ9UpNELHwxjKBm9XJ36pxuZbgQEqNQXQ5Gn2iuL",
  "key17": "5NAUzCTAsJaj7AhUuVNe66i1kpXR7yFs95vbjPTxP75W1uVHURvu5aeinUEuqNVZSLu3mKQzFgzLLon3WWDULuGP",
  "key18": "4sVFX2xEYbnZ9e12vBU9JGBXRsPYkTG6h7JcLLCVzC7RhSQ9BBQAxVShM1qSG4s3zgxsENTQgevuFPWzRMWi3Svm",
  "key19": "rc9JbWCedomcAd4d5q5arbubJ1zWhq7uUWQiz7YXUipgFt1EDgr1xiA2JNEvHfZnYipG4iLktreCW32DQDbuBsW",
  "key20": "3Jmeybq2bg1ECatASzv5NyGwk6kdG5K53UYPhKB9hyRdoKxZTgMXT7h8xVYVAVtWnM67qB95ZwknWYuNYyWtTU2k",
  "key21": "2eoUTLtNhHNawgmcAM7qqitYsbZYghSFruHrFMB9rSqNoZ7z53upyw6d18kV5J9HzSA8CRMNiFWZsLWuRzDwz92U",
  "key22": "5fQDXmyf4vFDYGQtashfwL7PVZxTxCdFzDU4FXJ2QXNsGPdtez7kTBzuCXtmXXrzxxPSxbDdYFi1qgnytHDExeqQ",
  "key23": "ZBwxvWmoyaqxzYs2u7T37DTtefaYAtK6UcfqRqiSbGeNW4HHaBR3mT5FST2LQRuCJNydDmMr2ASEaku2ERfhhYA",
  "key24": "5kcdK5qvXoRcsfUKaXTXSqfabGKUsjbhprF4XhfRR13Y2db7AynqXFKkBvbGy9DfsmZqJgPjjcckrBHxrgydNUpB",
  "key25": "2fjscThtuTp3sGWyRKNiPAZ2vCVsiJrq1kkgQ3pN4cU5ARAp1M7tg6mFbuAUSUdCq4xfhuCZe7FZDyBJFfcfwggq",
  "key26": "5GcEfhKdUM5nXr3CnL4ESVNSNma3UehLeABV7jXxmJLrHsEoo5DPJCpA4Q5eA9HgVwG9Qcfb2YmFkEcRV8yMc5Sb",
  "key27": "39bgjG67EXG1ZFqXge51zMSnu9tTnPr3LivkL8nGJTm9ZMPBU9GQ2hKsi1DkPRH6uyTsBBS1vkSbezoQZq7QnB4C",
  "key28": "5nKNqz7AC2HZr7KHzNAy4YjmiD9JmcWdJmREc7KFFVv1YkG7HccRoB1KSXb4qxLL7Xovd1Nq32ou1zUphq9WuJfN",
  "key29": "25SWbTB5m9oMLpSQgwY2jVQiykZyvVGrnnnakDmwr2BbPDpdB2sNPwFznfNaGw2zQFLbVb4XHVNLp7u7GXBQ1QNZ",
  "key30": "SKuJbTyjahR21ZE5KRBC7gPrvvDyqL25Hexzf5GveWsmyV4T11HDQV5ZUoCYjSmSK1TZufxDjEtCJte6C38sJsY",
  "key31": "39cp2qvHumbt3w9hdjuyThQsmQGcX9P6r41oH9NfwZVzQuTS92zsaTUSpLmP6343mVft38tbDcadUVfVywcG817C",
  "key32": "3iP3BJZvLyPQNqRVCo9koYttnt2khSUHjGKKticr4spVMGe3ogFXXHDCLV6Uo4Vb77J9aRf3ofKr6YgdiPBqMjDA",
  "key33": "21HRiTZ8hKMqnLdJb1xbnDdJJQ1Z7mcc3f6PRpzcdgYiUXmCFBQTJgCocTqFLQvwNGtNj4dsuXUcMQbDRjEvoa3R",
  "key34": "3amLuqu8zazeVeUHyAwX8DzTbfrSgonxRtFR7s4ocYnddewoa6qeaU5rAAwXQ4yhsCckxCviMn3YUAA2M4QKbDM1",
  "key35": "5wmKsJyYXvuszKG4Yj4UyEi4NLH88TCzUoPGEnw95cM1rjhNcoHh4j4KZqsHYDQoTDaZdDfEQtbiajtxGoKsAqLf",
  "key36": "37VUFWWbEMKR7cNymgB7wcdVsrK1KmjYk8uyrkXhi85rKGmscyB2Doy6nL9x7d2DVxEW9GyXWBqzpgQ6WmpHBo1c",
  "key37": "r8jh1BtZUioszDY4sByRJUYUpqCupsawcZiPm1r2gBZNbDUNU4v1rNMg75fFZ62khL16LpzWQ26xTXirDhNDJmS",
  "key38": "2AWwAEib34iZfVyMEvttNwrrzWjmFgRiJX9byaVdoRs7Z6jUtVGYBwNnEHci9vRX7ABX7WZH4caafHFeavbKVi1h",
  "key39": "2CVBoBxjU8seA1sj3WNWuFL3ycnJHKrJGAZ6QuZJC46YKwdcqYWtZ5yBZLHPVYmWfRFo5KsBPpjPV3dytiH3JJMZ",
  "key40": "UPhXKj5FmTZpLqfACvv73kV1Xuinsw2LhPGNGtjVRuSe4B2P2fDJE8AKX3x4KxqNvSDBKzhEXYm6ufwtzvQzL3F",
  "key41": "4QCQbfrCykzjpU3B6Jb7NefvBUZtzEcecsBuhTJWJFs7KEpaTcRgbya3Rs7BvAg3S2Rbe7PjfPZvAjoxfqZjgXH5",
  "key42": "61c2dVhtUtFhfsdtZqFMw1HqP1fdmwPPk6rqirjjDq3s9yhqSZETuRit9vReBsW5bTAhyEpVrxYVceeLy9zWWp47",
  "key43": "bGbZA9GsBEPzYeRs7e2Ts8LkTCaTyP6rPbPsqBZAV5br418Fq5qcC4xcNUh4x81p1LLVEtzLR4DFeKcXxgibnzq",
  "key44": "2UPbdXwkuftChoCpeder14KSuoWx1NJKtaqWk7ntEEdBkGma9oMEjp9muN4n94JhUp5FDHv5CADzgYphhUmJVXLZ",
  "key45": "gZnQv3GY6PASZJP6PgDqXKVM6euKEjb7eWfDSY5kLKXPco4Ghkit1nvh6Rehw7HQp8RQBVAMx3dqtmJrUyibKxS",
  "key46": "NU5Xfd4No4wEQAvBdRsj2QjDbJi6q56aNZddjb5n2gGrRowTbwvyxBUGiLGpf51PkVBzxgcPVcsH1wHndJ5VFk2",
  "key47": "4LJs1B1jc3Db5dYzMSJRn1brdVZox5Yx8bEerm8PyDjpV6zkvTFSG5sDsX3dXH8xhyJZgXMthz1GNhnvSV6QeuH9",
  "key48": "2R84zSieXbVmFqnoHBjdVgy3txo5LMd4fz5fHRs9WtSsUQ9vWL6FMgKWhWNUqxSZDiqFfqow33RzqhuvBfANaHbh",
  "key49": "C68CbFcHECbnjgY1CQp9TBxbuvrMqzgLi8NdeY6FiSq9VR587euPmaPNt9zB9yfTuXLBNfoaXtuSZTvCvakY34A"
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
