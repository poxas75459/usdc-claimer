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
    "56UVuWswwtpJUouQCZLp4448bcmP651eBh5a1H1VMnufiEk8dPkAJmeX4Hez58T6ZDLUBFxwtgUNNhqvEgBGonLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugoQB4G5fhdVwEt2y1e5UsyJfwLXEgJ817mffy8RbXgcKaPCyAPGziuHCqAXffHE96wsE2n4pkUytoXKX8KYpKt",
  "key1": "2QTJYGKgUYJ1usxTzzvLHaBkdhcs2BP4MtGtbcH74A4xEL81VjEhKFymSsu63ELd7iNabWRoXVxUimaTGGpzLci5",
  "key2": "4J1oKJGLwXsi8UTZ6Wgmf1rHiBQeNKDqEMDop248pdojgDawqWpxNm8x6g129qZ6vuowg2gG9JDK5hcKpj8cTv3E",
  "key3": "5RagRxU5KpjBczt95Rogod2FfTzohrhGB9jkYACQnEQ14imwfDJuKytotUtKoeqp6M5EQgL9GsiQp1VGZee41nf2",
  "key4": "3SR9FqEWz6RRbm1KZui2nHVoTsBL8kovTyvUBbTPa57NnC6hbRjtbe68E353Lw6tnuiBCyWuKasAwgKKb2UPwKCf",
  "key5": "4QvPSfTs99LYiYgs9rrs5juL6LMWHoNMBtE6k4i92nagBX4VUpY1vSPq3fwNs7BQz2jzsQCniPmRwYMZ7RgodtnE",
  "key6": "rwUFU5qL5LzTVxiqYWkTqAuTNBot1zHBMKDG1CruiuHvzaDb3B5evGJ9SGw45BeuPGSMXQ1jvgdW6btKt4sTupA",
  "key7": "4GizJpc1ntDRBgMcBKxNcYJq3mKfdPVPNDDSLg8bnuJbzXMbUGiiYGn9vpyz61zHW6i6UCVujQwRaLh67dpaDfnX",
  "key8": "5uqfG4EJhizVcYrBT4cMqQS22KNuCgBrnYhgPon61nWySBiAJLCtcWiC2ea4Pd7ZXC3cXj97U2TUTjP1peQ6ZfWU",
  "key9": "4bfGj19e6JxV7tV9xaepa7djncX77FhNivDSaVXVEwoYozqPmMSGKscPmGDWtaNAoX5XuBcQtui8WZ9TnFuVt6bD",
  "key10": "22TSYb592hg1Q917sMGbpoCwG7oWtVa9FsKyZuNBMAJzKgeBP3LxnE338MA1WcUQM7eRssW9mDd8Zx8RFpgya37P",
  "key11": "5q2dpaoubsTumDWrEQRp5B39J8vp7Lg1q2zuoAZXPSRUbtZDGVZkwsTrCiDZT67YhKmLQvKHmopfuEnanHzpTiVC",
  "key12": "4yhhsci4VAAf2BnDVv3wpq4Le4g3xx6Y5WmzhiRzioMYeuA7b6hXSocfUg7j2y57hYaGsVoCSRvWFjJSawUi1Lxu",
  "key13": "3trCaXcHxcAgoDEP8JxNVXouozw723HrKY3CgpFsddwyz9HTDxQsH7xpsKMKgUbfxZzbQmnPo5ETVnrAWoRNqNng",
  "key14": "5dJqjvyEVuJVCp49KejLje1rvnoLa7hArcvKmyxQ4mq1PH75BMuoykDuBr7eqFV6eycZPjB3gCnQCRWUrXXADpoQ",
  "key15": "2mvQGhcC9Qt4M3mpdjHhfSaV1pS78aUeKrUR1FG7QcuoA2QEUuATaS5NNo1fSt1UrMP3TaFADJsUm8VNovxXDMwp",
  "key16": "5Tcecfq1Hdn41TNQbXptuSAjhePraK5a8VSEcrvFyno2ohMdXAdwHZmq8enNM4v2NogrKANeWKPjaCwTGBZSGXob",
  "key17": "5wwU4pB9CKLxrsLX1uAB6RG1kP3p2N47W2N5R9Ci2XYH485tkujxqQEznzC2PbttQswR14jYfPM2zvj5rTfEUfXK",
  "key18": "ExMXSN7TDQokyJKbjF3y81bZTbuWkg2Ptg3BhhdvnLEnYRJsE8BDQdqVQtjECGaXNbyGvMrS1QBaPbJNDCUwVQK",
  "key19": "3Q6dti39GtunG7je9nXjzKE2Xzm5nhwKmd7PDPqeP9qMpWo5goyFBaDw78pjfYWjVa9Y7DaUuw4Wh7vbszJxv8mP",
  "key20": "oLRK5bAX3fuEPFSHDdtiax7FUoNLj2parai5F5bnMWYNrfHHvpMnqQDBSsWHLCrytYCGsRKwFJ3SmAFKwZCvUp8",
  "key21": "4nXmZ2nfUiXeCec325izpsLCJAgBwnkSQ9HPvD5KF2P6sa7PfQpFxphoaW4c3ipDTSRytHZjRkFZSHAELKnGbuwG",
  "key22": "7NS4cXcxHY7YDjmmDZE4e9tSgyMMYPTP6tG1kUnjQY35WM3RFuR1BgHCFR2KCzmHEvXGU6tsFvXAVrxdixzAxqS",
  "key23": "TwQq6PTGRc14yEyTJogTvCNSizjGVgcEfT93Nd3Tmqq1JP5HLKEP6Cw49tJtgFDNgua8g4kcGo7xJU1chcrv7RX",
  "key24": "3xkHTiM1RKpV79QtzGAKx2qUpHu7PRYrXdVpYbSzBFK8wfCHqJKXnEiNpaxtA7QhYVugTrvHchaEC5c7qAx9Mw3g",
  "key25": "5du95BMyqwUGFQdEQX1cZzQsVzye2hgX2DLS57F6iLiVtgW8fnYqVEdyj8knzMaYnaYWWTxmKMBZrvbPMa4EbJQN",
  "key26": "4gEUpFmA2AYjpivR9TNYs4QJYLvkBpHvsH5SQvaUuVN5KxwNRymv86khSCCAGsdCJr33GyrmBmJUJKzxqxryfEM9",
  "key27": "3rQUUpMt9DY6gJqRrUWSXmFVMBCL5FBCjsox9W3TEPcRg369BCKsePB1XrmJJ8htoJ74qHoYs7HaeVBjpaLmgGi8",
  "key28": "s7nJAy25T5Fe5GaEzWCN33auYLrCAunUPQq7vNufMvqiykAQX87SyHAA72ZwnaR36LqJMs8xppnbminTLdaqQa3",
  "key29": "4LERuL8iyo6mDdEotRofeYu3KexAHA3j5cjja3KPpzpdVN5deYyLBgrWbDRuBsZhPpdY1Ej7Fphs3WiLS2nB9jXW",
  "key30": "5j5dQzEHvjVczhEV7pYfuoo4sgYip6hMKuZEmgGpyK251y9B2PcuNJVnJKYzTKhyx9hHEmud2WfMaWUJkneXbd73",
  "key31": "5J3SbaK4uJudLA7qFa8Ex4sFm4MWfyPip6NXu67ycEVW5J62quMaYACu9n71p2fGESwZwhvJLqU3FDRH6c2MwFrH",
  "key32": "2XVtidk4XqLsW5knWGTpL2vmHEMbB6kRig1RGmjtHYemRmdSFtDpC2Qv6sc3cFG8EpetxkwGqEfGtmHt8xUVzyvo",
  "key33": "4L7a7FGAdc22cVd5TqmoYnyhAvc9pWxvTi2XpDuog2CZGCLcjM3N7nDobDxDR5if1TjtNYmPERxPcYy25ZwzcEdw",
  "key34": "5irTt3hMr4YFc6uEdngi1baqGXVgwtB9Q81gDPiTk2veUvF7EWJnFRL89itZsDBbV4UCfcwjoxBKhmYEG6eDztu",
  "key35": "3EUgjqrDMXuc25P2fTCU5kUc4qNVy48fZEDVnbWqQqj4XQvDhcc7v4Dyhd6B1W4GWrzDvRxoLMDHZnmxaQSUPTc2",
  "key36": "kAxERmDaVTL59VhbmiUjSctu8NarK6Hps73vNk8kM6sT24zRp8k1rDbtxTdpyfHMmkESexvyMTmvWrLswZjAFDF",
  "key37": "2TudPEt2D29jFJWs2eR3YjXzAHJ2P3CChdE82RvtETo8ATZ6RRzAhGyzRHLvtgNb62DjWPCvnJdG7zaXj3AHTncx",
  "key38": "qGokDAkrFviGgmUrk7n4xNobKxq9w8nxQCEaTFoYnzaDZifXFiAmgq84LPm3PVqKPhUDxUcasyiEtXTn1eVyfh7",
  "key39": "5piRKgs2Lqd6CnSznd5G8Zwma2g9U8CPgmToJBhA1XoCPSkGhzGQ1xPJDwCHVZBrYdEG4FWuB4FCzEsovCVv1XEh",
  "key40": "2rT3QnjLDUVFYskcrSg8fWGXQfacGuToi5sWBw5HyHoAfcSuBjCsZiGMttYzY536Xfmm7DuaDsUvVwoUvfkDUjh1",
  "key41": "3rs6HaB8Yc4HzFe14khBkqy3vD8QDLfoHRBHamPGq3DMb2jeof871TXhysFkjJjW8mkhtZaN4SaKSXEb7gxACGMi"
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
