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
    "2KyybxHEUFJUccfq9ZiXQc68kWxfKN88AGw8zcn3g3GsyqffKahVvVDw7BjAZ74HN2tzDVSyR2K2VeB9Tai2XsJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfwyfwE77oNXERdy8xN1Wo6dBUgXrUvTCcmzmBZGGezQkNxhW2tYQfgZkFReue62WkrewLAPb33eVvKQHYhgn6Y",
  "key1": "9B5yQw3jBgiX8rzwmGt4gXHZekGMgXYSFvcByKmLRrr6QZ85nvtu2Ptw5h96DGPRptYuREivCv9bdzZ75BbAvLP",
  "key2": "5LCZKTLtDZrsNWEtnqEuQ1vpKnXAd52y1a9dmu3BXcuMyM1fWJJy7s48rVQutpTXMxM4SLEYWX2NXqrJZRXQestP",
  "key3": "5JJhopi2Ve3LUSXxdVChvvWJH98FpgWkzMwKxcFiEX8ppvhbXUCaYb39otGdg1XXARiahn1t3AHJQfpBScS1fzx6",
  "key4": "43BFay8WnPi1WSrCrDEGyYgK7hKHJwBR9531gBzwxYxmHHiBH5dw81AEnjGY5CUDcUhncgGoYaqNmhRPXiStTHF6",
  "key5": "67RTX3nEygHjhb2yuynPn81uUj86g4u6gRYEtWU3DMhX2zr8zk85LM2yE53UwUgFZMy4Gi7x6qTwr9GXscjDoAke",
  "key6": "3jfXVBENgU6TGK5PK9cRTVDd6cJK8ZcWYfyq7MM7XzKbdLCm1FVWtXtUny5xHqfEZCpdzBGUsU31TXe252YwVzAZ",
  "key7": "65fcp6WBiGvCM8sgQyukT3vBz9EksUc1Wc3LrUw6GXNfW2Cu2evopkRW1STzQnhbVXK1T7nYcidwq9mrvzBHGjoM",
  "key8": "4bmihiDoCTAHpon6pBJBJsPkE1urzU6y37Vjzc6DNmqKbLnD2LA1JtoiJsExWHPJQyK98qGGQTM6iGSGQ6GvSmvv",
  "key9": "2H4629CtsJYKMBvqEiaj5644r5Kqpm6UCzgM1bsjj252RYowUAY9NfXiespHsKRpKk434NbiZbDQeYfT2qTxAKz4",
  "key10": "4JvtadEMKcjmiMVLgcMUFNTudnufH941QE2mg19xz5kKgPYeoVhMQ2iR1dWbWk5GoGHwxYtx2sc5GiQRcGhU2fHT",
  "key11": "4vieMHDELeLiYB2fDiYYmt2PzGvkHEPu7YiMVrh3Qnuwa28yG3UW4Z1KNi3dzsVnK278JhySh9cRQNRmUnttJfBn",
  "key12": "5wsB2FFRxr5qzwmMvo16vRGMeTSUpj5dANrsyxemQE3pXxNJ1yeZZjzzr3cvCDsVh3bJDQXwidLQiMDiHa73BUzb",
  "key13": "4th1jbft7P4iAku28YAc7nBNKJeTX25Fsmqx1bxb4i9BNmr3stFDT1zyDTHT9FYp5UM64EBYiun89YhwNd94V34G",
  "key14": "3HAwFvp2nuVgmNF14vzxzzMm36f5vgUQ3rwSaBMB9LyChxEyGhxdSRtvm8gXq17bFM1g8AYXDuodGnoVjMokJSxh",
  "key15": "3D2QaWvWgyTPvQmHQSTJihqM8RZ53Nus2xmxaL2LU5yYDnYvVE7AoeyUxYBfbsXGgvYzukJjDWuVshQFxRFAs3iM",
  "key16": "5rcoq67yvScRGSZsTqaVpsFSAsopxfGf6w6hfPUHAxXhJwqzye2bUhrY4n1ookQ93dG5qa5S27YfjT6aJyPjgxYj",
  "key17": "3rzhdcRJAdBi3uAsGnrENmb7uXmgtAfASktVKFFTnb4njd1tDJTKC9CzKZwsEAXn86wjC4sFJqqKB78suYMpuhAo",
  "key18": "4fsTJnU7R5dxNtvicpVF1h4P4wToAkFctE8irWegHsDqTTdv6HmaJemeMeW6Wktm1RWpRWnWfJVtXEM5CBVskTUF",
  "key19": "5mA3ntRGZQZ8uuNScjVPucfUTkwchSVRyNXqNkoeosgm8tvfEd8JnMWEmyg1EGxn5B27NDm58h3Q33xzv1S7TmfR",
  "key20": "39cbFDHGqMLnjnvToh2uyKuvG71ieuifkSDGs1orWGgs5zzn6x4q2ufbujGxfS7obAEDcH6RtJgSKAxo54vMuztb",
  "key21": "67eyMzi8VZ4mR7gT9BEKVKHzHHZhQTumjjjST6vdsS4E8jACpit6dPGJXdR3PKMZguRT9QPRhkTpDwRCywUQ3d9F",
  "key22": "2Jcvro4RfA41MTxkBwK2NV9vGNgMwJn9PGVsFB9AkWkHsRZ4pH8gZuDo28m7u3he7dJuPxgLy3EofDGLF1swRJ8X",
  "key23": "2rZEQwFR8PJgiu1iJF9N4wHEkaYqvDsovTkejRAeJNn8mNUPD9yg1NgmgUxgYF7Jfdgm7K5Bb744sZudCxn5xkjT",
  "key24": "5mgnbsNNrhLUsvAi6RJTNk1hX9fHjrtxgCZ3GdQVeijSDfKyvPdAX7JWqjVxe4uqHcApQDemejPefoYQjTEcmzjD",
  "key25": "4s7MCWreYW1TfrtKtxvFpj67qeVmtgN5e6e92TceYAHdt1ovN64z1w5xjwrzJsY8f59wi9zodejASV8Q8TcUo6ou",
  "key26": "3m7tTMQBk1y64K364wW6cT4UNLmTig4UAu1qmV1Ni8ofm8sR8ed1WLNArUbjqRyGnERNJF1w2MR6SsvCYtxv65Ye",
  "key27": "2J7ctHDg1aVnRqu8i1P23aU4dkrz1nqchT3DMTc8rPcNX4Ef4r6QroiyBcvPJ6oCDa64TJxLNwXU3npQZMR1dqtk",
  "key28": "eNHet2wzQdwTSDCJ5nSSnravFcm3VQrQqVBTyJWPm74VfMpWq7jwTpERTqfkYUQCAvxp9vMi8nGacELTinEzw7F",
  "key29": "4gwAvKx5R8i2ji6vxH6janaad61HC3qXmktKAdSv3p9dB4Y5Qsq1zZmMQyUNQKty1NeWYdHWXpKzjoKwGBwkEtAM",
  "key30": "5aKBU9V9ViNQybTL1dYPVxXnRm9KTA49WwRPh2UPgwP7rWHumK6cGz3F8M1MTb7nbC9QwbNrL8yxiXJGVgBFhAL1",
  "key31": "5NpsRMXcNDYH5BC1jo8Lp3eCiVoHtBteuE9E3nduvFmxRJdG3115YnW49PTz5hokFhU96zCfUQ7eZo17P7PkbdBV",
  "key32": "2wZdRFyocJxKg9qrkupmVS2nV9CRnaDVzGNhXKM6cdeJ6D31EDA5bCNW9UdFArkMn1SzfqTFdUjXyR2kmtihirF4",
  "key33": "3sRxSBQTkfTMGbSexBvRAjeUyAm8A9DBp6hcMCMdFZxM3bJZ9UkQtJRvLqCgA4sMN92mo8F6K7e2pmT6ARXYUha4",
  "key34": "3YHqCTW9mjH5PKx973ZGu43oZLrcBm9ZvtF23mvfbbBePgwL7MHoD4ZuYaeLPBb32M8TmhzY7R4Ks5YwA5a1Z37W",
  "key35": "2PSULdE4FXq5xcoL8VS5aQ6o4GwoBHx2dspzgMT4kYPfP9ZJzaZLY2ev7KXHZQfDC4twBpbt8aAg6nd2WNQZKGcD",
  "key36": "2afVcc69qgzvSMh5qYoEbkKuaePR5x3kcqCU2Jw43PsD5a1LPRHnXxyZKRQghCwaf9uzD82rY6vcn2ujdcRvtD7V",
  "key37": "2J62DpAWm9eETzFosXAfaf6HkFSmaZxnGPvEFeEbSjMwF9NBDnBkRtJbpMiZZPxCLaTTXKUkMVY3wg2F5Hi2cti1",
  "key38": "2fgyvFJU4rE5WmujNKfHJdSMXBuQj4iFk7HUk4F2UHKiEBvPhb35KfN4cewPvt9o3GSQS9p5X5QN9HBQTyE4merJ"
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
