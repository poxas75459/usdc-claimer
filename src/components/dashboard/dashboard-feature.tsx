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
    "3ZkcQi5zpYVn1e7QnoQQXZQjBWZWa6V4HhsoqfbdFMvP9Sx8tRkPea5JAtb8xowVUgWdmehvizaxQ45ZDwfGhCCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9gk5vYUj6ZbUWPRjZvddKuFq8q6C2zvyLGVC7uksdUBVPW9RMCAXruBtPnJF2Sy6yGrwTykoKKcpdGXUAW2bmN",
  "key1": "2EtJK1SbbBjW57xcv8er7r7DGPEPoDFYXkbioESKCjnHpvaQQYHJMT3UxtpA6jJ9hfEoF8RU5q9oCxcDwA1pXkk4",
  "key2": "4BJth9q96zg2BuSizBAvXDB6HtqbSGLo9TDc8XSMtmDqXm7Lhqmbm7F63TPr2TKpdnb2qBjdzRcScUs9bkAU9YrX",
  "key3": "TztCACVJo5ZbJRUBAzFLmqWiykGkrnB7Zw3Ti2fEUUb1MQxumHcBq2pss69hvec97cJpFm8xA35WQyUKyr9yHG8",
  "key4": "4bz2WVax7S5HME6WwVQYV3s6uTJrkunYZ7Qbw4xtQJjbJcsghURSAfwZ7AZ8SnjAEdw47MvbquQWxasEnMBL9uwb",
  "key5": "5DpZepNdqaPseds7HZSsFfnkDJ5vgZ9ZYwuf5QGMyze2TL3pV2r9JcEFaRJAiDuD9tECQy9qWSnVVRKZFJVcfUXG",
  "key6": "3izkqHZigYJLDyN9YJY87K3QgTMGTgV84H4fvXiCG5gbjVQhYwLoD5zxMBjEMjH1QYSpF5fUEsBXAirQa8w8mTac",
  "key7": "33DX9aYRh4cQycoMuJkmrsQ43wnBED4jiLGsguhk1PkHKzHbBasTKZ3HeHAz5bdsvR2QTkxg5CjL4FqyUGn1kVx1",
  "key8": "2VJQ3SrbT8o6JVm7XAqDkFEnQVwjnBgV7MHjUqecwJUfCvMqubGWHQ5U8yt3rifGx8nPCDdPFDcWSQhUbjPJTrVo",
  "key9": "4CKng1x7fKo1KXGRNgTBdfnBTcptBZw3ZqeqREz6VhtREpwyc83vRGNmv8LKurtqoP65PF2CckfL8sF3Dwimzt9n",
  "key10": "2W7xR93tyqPb5NvAt9zxCTuSizdmH1KCpe4YBJDxkWtfSH478dnPr6F1emyg8NKbanPswNZTs8HEjoTWatcPQDKX",
  "key11": "4ZmYvcA5voQwZwa5eHwqEtzjxAhEKGNbkCKcXish5CrVBtW88mAc16FEnhbAUrNMtR1i353FYmhPVW5eZQQ28oi8",
  "key12": "5R8Bm5PXZuRFFLapb98yuXDZ7hQD4ssuNQtcxAi3twwJRf4dM18VyzsMzZQhgsD6q4BFWZvFsKy6xMo2mwL9ikyp",
  "key13": "47UYkxNSxdE2EZPEgBCytXL8LzKHL5uunbpHpMCYbfL59pfUpWYf55y6XaDf2bVrozwM4krSjStBGfvmfudVANQ3",
  "key14": "3ZCfXUiA4CsH6q5hyk56XE5uqoXdN6VjddJJUYhoU76Am9WFqHNtkaLgJdK6brdCzTU3oLvz9URkZyQwa8oPw3EF",
  "key15": "5K9A9FS3xAhiUFCQsRLUFTQQ33Xmo9SZVAJtUtFAEuN75zHq9q1z31BqX3G8zY9f5eJEGYwZsfdBr9VJrDaWWHNR",
  "key16": "5KuRedpKw3H7SWUVh5R3ik3TVQzK1xYtV5gLV4aGrViRFD2RMVp59K2R85UMLnc1gh4YnZZuC4SdkzqhaE2skNd6",
  "key17": "5tvgrUgHak3ixpxZ671F61z6itWvh1Hgy3AAov9veUKR3Ab2zP27pmFiSyNxWEvA1bjufAkKVqGhBy2aNqQ4caty",
  "key18": "2nJZKPCB1eUbWrdRpHNQF542ctMAzxgMjenwFV6YK4i2Jt9CYeveM1jtgPoG778knD7QmSoXaF2QBo1JqXZA1MVV",
  "key19": "46nb2PPGgHajuUDkRy2cdVTovDjrSy6FeuejbkXTNqR4L2f8YxcyrLtQkRuwK6osobqV161yPS4XcD4kSo5hag2a",
  "key20": "3uWsJjZV2e3kFU1avCt9GAomHUJp6gWe4a2Z5oL16FrCcWBU4yPhKDJsTqVePWw62RLS4ttmgoMWZxGZGBAT7Msk",
  "key21": "3UGTi6UmCgGgmkVQVkhcihrHqHETzHkfEWsHH6AhX7rFGaVRU7Us2gMVPTJUMPoGJhsFvjnHQ9ngCARPQb3hsrMv",
  "key22": "4bSH3q9Zw3qwoMtstpEJpkJjPvzXUSVRA8Ds8vFQpU7YbRWnDE2RQH9H3EnuukvhXdaZB7NZYYo8utKZr9TdYgeY",
  "key23": "22kMeHGdZbKPCSjiegEk4tKK7FcKTjx5vZNszd1HD8doAkoJSq7Rm87dEnQsEi2ooEKoYEVRPbSSX7sFUxmHP1zq",
  "key24": "2nCCsvadHUX4dz9c47iw2XbdfXqGW51AhCpSqmqyq71TKut3DPLzUg7fs4Mo4VFja4WpXnHN1VJR8nc3k26kcsfE",
  "key25": "4zh3SyiJjayDCUBBUHRSMaaKHohKAjAEvWDymPf43YjErRbW1t53A45topFjCgfbiDbpwfQmsSYHnY9K6LBQ9Bua",
  "key26": "3aJzvDnESzetbM7LPN4QRwWD4oJaG22H9dwkrQc8WEbaTJaAATpKJkeeekbTvhmGszbDVgDcUbmsbCBfLyjPHfLv",
  "key27": "2CEXofmpQNva4ZBoFhc3oanUwqCcP8uMZuzHAcaKMs6i3Pug4uw7nQEHTB2hJHpAETqopBqRepDCEnFNQxVUnpfS",
  "key28": "3nXC3xn8ofHWn5MAnnE716U8bBRCkF22ivJKjhzeZuBuRGeAzQEHjwfaDGh6ppPtR7etwifQrfUBG5KLWB2gLVTx",
  "key29": "2NXafywP8iWCXx6aVdNf3178cM53joJERVp66ugiu4XBA2SwCX1YHwDsEP6xuStnp9nruqKukc62gsm86Wym4P6p",
  "key30": "2nKfY6bavnCpCXacdCJvQTPT9ENQRnFEnWggBoyk1GPttfLoQEaTYQv2q2sHrj8iWmB51d1dntadg8LaSpBMao2y",
  "key31": "2KDznMKgXFSy8XsFRxt5Wwty1V8YHQcp8akaMC7AiwJZZh8D1F1sSYUaDqwVuTcQkzy36XqbpACKzzu3f9DFzRTr",
  "key32": "3c5X6UZAqc2TbUgftcMfiQpbiv7xK1f7MbHE1NgfhZspkUt9B7aYx35GBk6TnP46tuVhqw4wdqSjCBHHJGGJ5uj7",
  "key33": "4Gb5DSmFrHryfxKybxpTASUQ7SVXVKNxMnngHPHB6MyLoaTQ6eJmG93dRdmckh1P7z6XLDYsPqCmyP4K9ydxtfFj",
  "key34": "4rdfgFwcWNeLw47jD3bpPG2fHzMYCsspZSiL4FV2LhuLPagEfXPCtMe3yZpN6wmJwxaZxUbstuNuWCk5ckTj36ch",
  "key35": "3U4mk4Zi1EcL44F9zTVkkTj5AUjhm7hgMuKEMmpQS3ZcTHVomratEMjbL1DQAztax8CcdrRSLbG7ssPYzU5DJjd",
  "key36": "4TknkJwReNAb9jTVWqvcFnuZYLnn1BwqA3ikcPkQbJ4Af9bQ2rCnVxcSPvq1d6Fa5CEToJ8PuwAS6gTz2kATAbW6",
  "key37": "3uY2ozruVHeypkcsi7UbfmkFwLJgLzS8tizCroK7AzG2PRjvhfpbJNSANdxJfJ84Bn3opJ8b6VRn7x2mzknpfNrP",
  "key38": "2pJqmga5feVd2KB4U8zrfCoG1PbUFDYxhabQHFYeDup1mz9vq9JgYz1YtgReFeMGhG6inhBXFgSDWVpper99Q6L4",
  "key39": "NbDKNWzAJ7MVeU2DhkhFJkeyEqzgZDNpSgj4oLgNZgzSfWBcJp45PzY1c7fKZMY8huv6nVYSnaNAAqnc5kUufQN",
  "key40": "3Pg8ikHMJ7W8MDGiip9KuyaYNbA7k3D5sdD7AQ5kiHYJYYx7x7MYMZsZLUmrtEBVcSeie1SDNrYD88MPoNduHxog",
  "key41": "5Ws94Vc37U4jUvcbGN2UHg1PEnsmjuTQqNyeL1qchn7BKs4AtZT6Ts85U2fYX53hNks3HtETQ6APWxBK5GiyCmXX",
  "key42": "5Hcin1FJFK7SBz3VsnbWy9sNTgF6giqaxAm48fTqxc5h68JcVdcv3bLsYyNxGxmNABejAdnwc5E2yn8XPpnZ6web",
  "key43": "3G7mEZ8KgkoCsEig8zpUcdkpeB5fFjdxGjyfdyn2QjjoVy5YHScB6B51FJpMTkec12oLzYyQjYPma2wpHaXT2qgh",
  "key44": "52JYnKBRaR9iptJ9hK6okrv2YvdtU6QP6VimeHqZjUcvh3ppGw5GbM2MGQdtzikk4LGGB5Z164D42PC99N942Dn5",
  "key45": "5eGyvyvpZKearYLQmoZjD86pzZo99gy6rqGAd21RY6Aew3vJquZySVczoYCP446ABMbjmS2cprGwnrX6sxFXi3fr",
  "key46": "5ufYiv5BxYMHoRPiDYZtRumt9vBfiWMzAkDFnjqGgeApxby3CVtUZLY5ZV4PsMR43VckmGYxNd1RygMJocoXLqw"
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
