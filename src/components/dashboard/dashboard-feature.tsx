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
    "26bR1c8mW7EjRfYrfAppaeEUk8QH9Y23R5eRBXRxz1n3Bp64HisVYvDfNCucwuiDDpMJzDmZZYDApqQiucQxjcAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGYfTvrWWJbKyUqtmJGPYWckPvPa7ptEu9U6PvdDHwsrUPdySnG36kqwJ5rfoPCd5prqszRLCECzKHZ4fSMZCWE",
  "key1": "5W4JsbraZUeSqwSig3r1o5bW7k48vR1Vi3xW2hhaScHDopZz4znRQm9yZqwKNt3YkqkSWLL2RnHvVUU9neLmhUqY",
  "key2": "g8eshbCrWvTqNRdFbJAjkwFffgxrZheho3zaSXQt3GNwG7HvtDsW4GH8JhdzkZeXosSHaeu2Ggdr5AtrTsgiqyy",
  "key3": "45mmCT4QsQ5WgQhsR8e2q1Gw6BR9ozXkSmAnogDVY9vheYBmXRYD6z3H4yWYabYD6r38CjVLhPMNB2z74DT53RYs",
  "key4": "CnMQTxPdXF55K9HLcgkT17TdbMEYCrM3pdNNwq4xkyVj4iYR2Bjvj6hPLffaNDSsFmZGLbiQHmByG2Hd5poKndi",
  "key5": "3XudDCuarawEdNXdXNbM7sMEBDw7DjptUgySKfYzN95cQku9ZhMYrosrKnfWu3RditY6rx5ApfY4gJ2VYT1evpaJ",
  "key6": "5hQTjEos79zMsYK3Ghm31GMduBrazwgUYrZJEcW8FAvCDENuekQttWS9RAcCQGFiQ8cnExd1KGJYy738NYh2Sh22",
  "key7": "41Y2Esk9JJBab5arXCRbCLctciBNLGs6NVL2nmWrtkK1qjF2R7CE8gpBQzmtK2KXBwSaWWLNXhDtWYuMxUECYwTx",
  "key8": "4CaMjBy5pApsQs5iGfToLmqpdTzU5sB2bEoHDJd4YMaB61wkZmLXWZxBvxRfCnZHAfGYDT62RVLsnd114ojHLSdk",
  "key9": "3XUuJ8ykPoTT5AUUE4eiwSU7f2T9uN5rhZDq53mKvQin6UyDR8G2SiPtWtmJaqqFDBRRJhHAz2rWzJfYM2JdiTr2",
  "key10": "2P9Kr4xCF81NeU2RnzjeuXuLbXpruurdDi77zo5VPBcVPG8o9pm1D1YZpr779337FdWg2Y4WmmcMFEa2SPKGSWVt",
  "key11": "4ja8yZGauK2K7smEAFyH4Pd737L6p57MgceSZTxkbYN8fw3wQW286DLwnhceCVH1c5XCVzA7TD6dNzD75LNxSau6",
  "key12": "5PjE7HbhFu3svMFW6H51zyYgjWe28gCdAHAYLUfqeDyDETjFSiMUeidJqsqzdes2ucAFgKg8x1XKFq83M2LYfMmh",
  "key13": "2SKvYoxA4Rt4x6rCNWmLBrfydzwaS8xzYyZX3x1efrhjM7QBdX2CfKELLPcREr5nmKGMh6yS5Xajsho9Z4TGz2w5",
  "key14": "5pLcFJoWsfPFnt3Ln8jWHYFNDJXSatkSLYLbM2mq5r3UhYhakiqV8CbjKHdZWQZMBG1zt8DNoUkQ2QqMyLjcXosc",
  "key15": "2Fkp1FG8k1cFbmZ3DDsK2vX12nBj3PUEnSRmg2iHKXMktmkm8igmY5o2KXrUD5xjjQSb9pSh1q3DPHYP8u7kNGqD",
  "key16": "4YUsSVzmXekXAeKCEnQawFbHGPhJwrr6B8ZPg3ikhCEgaYVp6YgdNVbptTmfifmxLBdGU1wLbcH9gK8abAzQqRBH",
  "key17": "hCrEV4cNamwB3R1tCSLz8rz3QdetXjds3eadKnH4ULGR3F6JUhbV5Dos8rJhv6PxwxcL6sC45zJvBYi6Rjwv3nG",
  "key18": "5p3guNcDM4BDTLJs6SjF4WTdURoUt6sRrvXWdTAetg2227dXWcZDsK4TMgkDeKhhSLPhFawpAfv2TBDQs9asudsW",
  "key19": "2w4FuB6WoQ1jBcdsrcSCkbHQ7AJh4E8j5L5bpbv542xo7fihwJbYTxNVwkigGkLcDwRjg6EpsnaNqQFpbyDT9WHT",
  "key20": "42y9Gqh7WVDeNYGYPVJmVyGygeo1t52VfiKzT3SN6XWryWhixyJmknBFNSACGYkWFXKf4JPCs7ExiLiASMLMQapX",
  "key21": "cNaW1oQAN51xSwWFDG4iDGWUsekeXEP2JkNG2u2wfWVRJN1mRVmSmeaym52iN1PVW6Am3SirDY137uHaDbsToey",
  "key22": "4WVVkPwtSwobD7r3RbaXrGDQH4a45LRwViceZVFJm965qchQeA7iaJtnNPc74FiGe8qwsTYR2X3xX56ATFEqprPV",
  "key23": "49sNkwrtQeZX98nb8m2k7eJXmRG6VsXjwKc6Z4ibkwZf1oAohZSpDpiRkDUWJhWHqtQBmsTvmmgiYQfQXSoWQv31",
  "key24": "4fu5daBAKtgcj1dYHMHFxBbzCNHJYJp24mZb3Dwpm8JYJ9EyE8EK2PQGD8rAouaZSGK7Ccdr3Lc2JR45YFcYFP6A",
  "key25": "vsGHBdfqqv42FuFzseg4gW5cGmcp87fvtQTTBgdhPYp2AHMh5uF3Js1FcuurYSGHfAt1a6g52YEs4PhvGgRTg5Y",
  "key26": "3wmTfaLuMcRKiGX1HzKUgqkK82Z6CEH5u1PV9ZmXBUd5Sn2SApa4qx55Bg4XUjXqbA41eCrBLf9CAXBZeyek5bFu",
  "key27": "4KchTcoT2ifocfzoZudJTFYECSct9r8kKYREHCqRyk9NVurZLNTG8bF44nNfW8w26Bi6Ufeeyr7zUFYLe3zrSPn6",
  "key28": "b3o2QydHjdZAJvoRzWo9D5g3cKMZYpuawUMjVAPZ1M7Qb1LYhW9iXEc9FmByjSMNaQ1edZrBQVGZqWdqGArkr3g",
  "key29": "2hTJcMkbEnHwhXSkFb4QyscFs91zhj3u9vArgqQQ1whDSG2qTNmztLUrdfxHAFZnfuFwgVdhTK17R2hk2VYLExne",
  "key30": "4acuXh2Me37xSZpMs1inmnZWp9BaFeWL4cAWpjUewcueRA2EJyHU5FLnZX5QC8nKpNaiH8wASR8jjzXJzysYaKnZ",
  "key31": "2RbmwLKbK6QuKnwF9yhw7o1C7MSsnmCMdiR2v3bbsxehfTbJC2QrGZNxy1vsJQXEJdkdPpFD2xM3rv6gLsn4S41A",
  "key32": "4tRvG5WGviJCARZdhLPfvPmmMKB65PET5969SLSvPUoRs6To8ujRDNksGPAHf1X9oqm2L3eQJoD1dqPGanGhgjCD",
  "key33": "2xkGEEdJM7JWgrnNsQ3Pnrfie4poLwDXwjbREuG2m3pmukQrvCztTYeQ4SbSrtf5XHmhdRBKo2rDwHqaYBMihT6a",
  "key34": "2G6FTqZgFVoX6QjGTF5YZt7XjMTYJjZ1TynmSLNjJohDbaxHPvxhtUvrUsNGeGmhnWaDjVJFadRRKrzewvpA8sWQ",
  "key35": "2f75yy6VjrRGuJh26WoMre9DfMq5vbrXWgoaSAHxgdEHrGRAAg8YSRNmiJyJD8F4oR9LDModrkUARxZERNogKi5N",
  "key36": "4k1fqiMCGPrZiH85HZsHnKdH31hF4iUQsgZSttJo68J4qKCUFRFzCBsLU1nhV8m8U4uPAXRyEq5T9uWwimUXsCFW",
  "key37": "4Yf6PU4xjsnUdBiRHJF8qAFx56zUQ2DRpLY67F77Rc4uxa4uP7MjJsqyyW7zo5MbUF5vwUfFFcYa9PTDW4HZYxV8",
  "key38": "2zTroeS2QYcMd9yEwcYtHiYkkwDahJycrgbxvWyNokBSuyXTR3bdwzg8DgLM1d5MNKkmnTH7tCeubdcToq4zBbj2",
  "key39": "Wowk3uBc8xJc6ZBozgFobZaCjBbQiX8UtjVm3pq6ERvuXdkgLbbWDKTn72eHhsFAP2DaUmUeQXrAGLDJVrKHSHA",
  "key40": "3r5u75mwdRZdFLvP47F8gk6RfGAKXFgVvJRzKvRVcPGm8e5HtgUCULawE68g6xqpuhPVWY7LYcmEeAbj3MNmHiP8",
  "key41": "b3EfpjVMScc8uwwMJ26HKJUxisAuXSFcDTnqmfKXLZgpmrZj8CjmmdCQZy1jBA1so9eZRdj5xv8mRruMxXMHSiU",
  "key42": "3AEC2oy2tatnbAdB4PyH7cMVovQv5Th6XszWHRkxpMqNxCM6C8HktCsDjRAoTRHztvjSYZTSL3E2v9BrRTrMpjww",
  "key43": "5xwEZECpRchGiVUvvT8asrJpkfJog2nGtM2mjjPhuiGpiDvie1kBGYeRhkkEBipEaeSSx4uskgM5GcMzkvwhsUk5",
  "key44": "5rbDgGcewB8LmRxXk2m7FNZCqyiSn3XS2EJSrQRGoEzdX5CqSkkN8VvEKQPACVJmjPbtYZEJf8mNqgoeHZzYVnCR",
  "key45": "WZmEbeoygHsKALpr78KR8BJJMDAULpjJSpQFv487iLiVBdrrP3AVknQbzv8fzuN2CMtG5DEmJjkTzi2JGvmuo7f",
  "key46": "3gG9WVgbaDUD7qP1yE8GEKpMbVz69x13DYdxzX3wDGnRGr9HnSNFFJDgeuTJj3CE9NxuDL2tT4rQVjvWcyw8Ar8z"
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
