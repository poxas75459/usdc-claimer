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
    "dvh6Vac8snzw8vx47JfUpZR1Rp8wdwqRcFRMGT9GKFdCXxwu6kK17pk3XptCtHFaZgc3K6Nm3RQFcexdhTwMAXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWsJmPRr3RK9xB7gJWX6CMigB5KGYtBXDKM8vrPdXQZiNiPkrtXX63YnTDZtK37dQHAMt8o1fxRSobgHZAB4E7L",
  "key1": "4pes8YLbdPccyt4FcgSDDFFY4EZSfVQKVvDPF3ctamRKuU5Et6qJwBUTiD7kNwBGnEMwDhCTz2pV6dPrUQAof5Jj",
  "key2": "4HwdBepWG95ZYtyEQBTJtn95Ukvd89wbc61wykxKQtZRCzQGFwXSbc5fHJuvMiwNPYMozbksrQbCR58zDigD6Rin",
  "key3": "5xf4zVZfELKFQLAtNZTfXwMUw5VEib8iQ7AFzDW9Bu3fsQ7fzQvmnjKxxSCiP3LwPcEdpbmwnZ8VpNiPwMDgCmjA",
  "key4": "2efneLkryYwp5rwKfC553C5kpCVDXFuckSzMqAjmW4MorW235haQBdnsRCm9RnymPHn5GCXnovuzQcryNx2gtzqX",
  "key5": "49SdqtxxuvmaJmhHRaPPLm5VxEhTK5APc5piG2viUMxhmouEGuGSbUPAZucHXzv31SKjFaFVginvKsQchDw7QUuH",
  "key6": "5ZwmvPUkcj3tR1vCJMvuUqwX32csUwGLcTSL5C6PsC4ZJoFJoBVYF2hv3PTbE5PjYkjTURgrup8gjdDvwuLotbcF",
  "key7": "3yjKaikSkfEwmZ6Fd4zLXNhuVjK8red2t2PFoZhNunvmGtVPe5CJvQDeKsqeeQdCb2CVygNvHW2CN9sXndiSqurg",
  "key8": "4Zyc5cn9SUP3ykn9Ne8fQvBzPEb3yfSGhsZU64XmGPpNzNzjCb7cLRoXrqzpMhsFQZZzpaZuixF5195xneSVoXdC",
  "key9": "4fMYTbZfJuaxvgJMNmXArE53U7z315PRrDrKrdWmtNCYB82Ec4uJmNwPPFzx5AfdYNJN8sSvQC3crUWCD1Uc9ZSw",
  "key10": "3ZX6Xi6CM3aybHgr1Cz3FBwEYLiD2693VGSWksHnuUpftPnnZSTM36SJr59jvs5apjtkSP8KLRNbfWWssDJrJvoP",
  "key11": "3op8sD4xci6zVratgRz5MsDo2GWrZiPgB428yhsnweYC8MbV3EjnUGrXHs1uNmzVSRurnneXtEkdR9M6U79JkM9s",
  "key12": "4PZJCSPJmx4oYnrByUAPP293JDWAmNggGXnhcDvXXrD6a3NtenTGycuhRLNscZb3WtEGRyD22gCH43a3NEMWnJDm",
  "key13": "3iLWPQDac3Amhy5ctoERYBiTtd3hCvnJB7KxNHkbHdEXYm3Udz4ZmeaZrFSmtQG3w4EKr1xcHE3DA15fVjgSBhDb",
  "key14": "2A7a1zdFS2D8bJmyd2XSWXSF4KndG5NGxrUP5jCm9aBqavWxmBTcGK8Zk3UN8sN5HarWtyXcSfpQx6FjBRMbPp9y",
  "key15": "3BM6r5WD5GE7MNtewXDpEoFsVf6ZuYzzaxSQe5jLYcdr7LW6LtLnURxhHRkeQ6eiaMSd8KLPvTm5KgbNMDozKmt4",
  "key16": "4q76CVycBaixYuNBhkpKtWmzDfzuZ8RVnPeTxffM4gY4vrdEQArL5wqJ89mY56BceRDpU5DR9CfqjV9d88jSfZgt",
  "key17": "5q6SvGEUCmPrz36RbwXsNKAW9BzE8cEY1eAmf29ZTk6BhM6iPEBGQeVi1qsdJTUBuHJe51ACKK6Ath4vT3DRXMmQ",
  "key18": "41QunZm8qXHwUSZS9LT5TmKXmcMdURgXT4ULFQKgd311ZAsni1Fh8EXRgt2pUgveZh2pFcX4m23yJtyUA2kEtBU9",
  "key19": "2UQeGUyiPoSKVhmR22afYTZsSAdpVroQTsnznHL4wNp6sbvepMvin9tBDFv35NkcsowXvqpFHCf6jr7WXfykr6F9",
  "key20": "ieKN4YxaKMcxL2v71aWUS1ArwfCMHuqbAhevrVjZfGQMnmqbnzdE4mediM7BfrNF8WhQyoe1iP4mdfvrgJ5xKY1",
  "key21": "5tkfvETPVsfVk66ZDu5wxWRhAmvYtvpFr3hHK66eNGpmWfB3orgh7vymAdZQsqA3kwNZ5XRKphzaGJ1Pi81wjXDE",
  "key22": "3jgyJ8xxeTv2NU6TT1eUz7HTy7bu3u16ALPzwHr5uAVbpisjNDZqJY1jEzubnWHg5a7EKPN7PNN9DtMxPVhtw6sx",
  "key23": "tzf9JFLWU4mmKPAHRXdTGBTnD33s5iQF3KXVHDNeHdKFwdnbDaHrEixBejDfUcHsHQjyo3dmJgUaMsJQhhkABVS",
  "key24": "491itD1aFwBK9vpyjqwLi1iW72saDZLMZhqoCB6uYUiSz642GaVmDwZ9havVXVvGowg6tdeeptB5AaSQiHXKPw79",
  "key25": "4zpkiQA775KQBJPzyeSDCLSQEERVoSwQEn5HbsQZjRBXSzQSab7QF2rRpg5Ch2VuawaUTKh7VMGKf9tkfMg9Q1gc",
  "key26": "2QGsN2sthFFQZ91bi1vWTUd3dfZULmG8ika6KchnGMy4gPcRfrSBDgR4C6wo4iM6hu4Zz72RTBNYcsx5Ce2zWo6j",
  "key27": "m2zVtxZWcTpgd7cCVeyLdUFQf8KcGZC3o1XJtjAG6DdSzVuivVXb9wD4tD3MMCLUgSLofNHqiZtKPB4wr6dDdJf",
  "key28": "4QpmfGf8r2dFdRfzEKL5M3ZgvK1TT2XGnWSvycbcd32CydLvNYsKEYN77Wgez1NRjiwL1vY45j7RcSe5AwxdYDdt",
  "key29": "5g7A4aT2CgJCkHE7Si95Q27rMMary586pQpqnnUTLC3bgjbQtLGbmd6U3WQFkKnoeYfXYgK8DySXdBCQzFGRNfsW",
  "key30": "2dZX4ShMqkxiMeHUEqNpcFHYVDo8hhmzhzfJwAw8gyeyV6cwxns6nGJYPmpJUmz3h275x3eRW6tDkTNhP8sEgiYQ",
  "key31": "3PqR6S1wWTagifpTtJeqo8Z839GPKrLkmqXWkiETNSz2CeShYWTmfDvr4cAadNnqDMMiefB4jse9LMLfEpW2dFRp",
  "key32": "5JndRX2kabgjj4xU3Xob7fMxTHavtaXB7HTRxnqsNvCvjVPmVRkTvY1FRrgJHG3htiBBsKJqSPvspgmAUeWzPjmv",
  "key33": "2vf8sn84yiDCGkZE2T4StcdYE1oLZ3JxSc8rwg9So9CAtUXq8vkfBgMRndPEYvsQioqZg12U9NDPdwoaNmrzetSM",
  "key34": "22GzFSFxxQFPqNRKYwBWmdNN3crQtez7VFJ3thgnFD4TABfihH47izqVD8cr1ngc8Rt8JgD43Bqt6xPidqP4YWLZ",
  "key35": "uB3eBpNHCA6pi5dSxkSPqopwm6nUAqgQpVKsEXoQwitxEyNFKZ6yrvda3Ubi15YAokRXG73LfAupwdcgbMG8bz8",
  "key36": "5YyJdBZrtVVaDyaRroxKwCH8FHfH7ro1yUXWF5CvPBYPdMXzUg2hTRWwjD7Rugt5j1LXxT8Y6sdHZQLSqgyPWdTp",
  "key37": "2E7Ac9WWaF1R7tFkufE51hCHiSkoHoQwgFyrCo8ytBz3nczQY1tKApQanFu2VDuokdjFfeLpeoudQdeTxjMpnhzx",
  "key38": "35aUBZgFhFjWdoT4qvzoAn3XfFrExToy1KqvSUE6K9e85bwE4pYmfFy44zB5wp4XsTao3xkidaJYSPwMy9MEVn8i",
  "key39": "tUd3fGgCza2fQ3wsedq5ttRqttRNoWHGVna5Zn9pxj8uwHwk3h5JW22VwDgbmQT34a3PS9HvmTeKT4pQttUcTJK",
  "key40": "5PqvB9KXExtNioBXDk1avzWAVSg8893Ea8ewVqf9KE34Hoon6PS4Hz7XvXC3fAaXFFDLYUPoPoWRnECKReRFtyPF",
  "key41": "24a9yRbcS6iNadFjuy3aTfzX5LLNVdM1vvVKnB9c2aoeoAp78xQB9zbAqAzfg9AQv8HAoLNwYeZB8NZkTCqxcutU",
  "key42": "4MfEtJcjTyXhNS5gQp9F87fJ95PzDNHsL21Wsi7FmtNKJCnynqQbuN837jyYDbTJUduCLxyw32D9TBu15CbWJUV4",
  "key43": "2msbzvsf88DbCoMPUXXH442aRzvaD7cN2u8GaHawUbLVKKsEEbmxtV63YFPy5fdMtp6MP6udTAZECDehP6Jquc3D",
  "key44": "4zR5pfZv5eGNAvEfKK8vmr4edPcnb2YpQUwu2TCKQQyhcMnECQMTnpsty5KiyR164f2qgykrpefaw8gG2zi7bf2P",
  "key45": "ys8MqfeCDxZvSYnUayBRdMxwF557vDx7bE89qJbWVctnxExbbr3RuL93ea2SsjB2m9ixFxMGAxivo41SWYkzYWy",
  "key46": "4BugPVpwoTdvgoKv6nz9LCAUPC3yRxGXwMVh85bLFFh23EtpCziEVNsFhHTkgCEsipSY5riwJCu7uoJaXRboZq9J",
  "key47": "LZ4S2H4a3BTaYAHGcWnNedW5jY4jKZiUPutbiuuq4hRtryAPJyKagDkcLBDBqhtnUmHKuX3xo772rhRJmsgRvpN",
  "key48": "fmEgosbVw224cMZk9YDCJqWYdSdQEFWEeMGoekEXkPVysdGENbk24iq6yaK7E19v8wMLW97PqfkBfpXndyXnDxu",
  "key49": "nBNPho2KApcQFqxVFMAFPYUfF143NFLUqxJDnM6mwWqq1HwoDo1pSAR35FLsYKHj1w8MnFa9B9jKtyh7Sx2rMpZ"
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
