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
    "4yeCbd8DdrPzWSjoKzoMv6g92wBCtodPhCDRYfMVEYdSRTrgkkPqy93qXT4mNarfyzjwu1t3ctrKG848mJEio6U5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exNDyUk7oiwZjWehqvTcS7etQXbHxRKkSgK1ko13HqrWuUxZyZsLffUZNRUQDpHf4WVmjoATqbpMxfhbdCsW9aH",
  "key1": "4n3yHudNiy9mbKDzoJFggsK5QtKofav7shAcnP7R65yoxbHhJLJnMFHc4BNoKiNiwbCNrpds4t8Za9fexAd2kmem",
  "key2": "4N5UTbnRMdT5YnqdK6owo1MQYeTnH3D4p8LixLbk1w3dFdEJjvBjmq5mkc91vEmHQC4tfS4bkSD4n8eEfcnsLMTn",
  "key3": "2xg1AwYPtEt28AvJedYMqcSXFK3gopgniJohbYSp4iNpcX2s5KLRwxLRzTgzrMZN3JKiH9vwycWEwmX5CzioSPpo",
  "key4": "3F2Lcn9PnaEnsCiVc2ePXYdeA4DkRbbVamKXgteEGycaDFVqDHJ8KdfSYc1rVP4cpRpo97LRgqL57HuiYJ88mRjz",
  "key5": "4HxneGdyxDJuXSDgEycFGZjHytbxPjUp6uiFcrMCSunuXmVbBrLpxrH5sWPg4Wgb6Qbp7q8XHJjdGhLXFjumkpEM",
  "key6": "3XYWjDJaCEZm324zm15GTwxAnBhqBuVzzJpaFsaLsRrKMqzPQJTGcWhwtiksLnaygs9K7WPdAP5nuUMbwYEigGFz",
  "key7": "zc68cFj5ZNuN4WkzSz8KpX48W4EFDVtJXNrjg25oCBNXWZoUP7wGAEWtGMPULW6uKhSrM5uByVdBsRRBWKPB4gj",
  "key8": "67r56H6Z5fbHMGy9Y8MJXxbEQTo8RL7RKK3KKBfULBDkBycGvFvUSetfmtJWZxLMgAB34Vz3Ye7WMBQ1dVfqZeRU",
  "key9": "2vihJyTH9Mse9renpXibT8VkQp8UcGnYmJqSxdTymKzt8n3hYpWy4wCquQghCUuHvyLDDS7GNmozX6uXmKmaZr8h",
  "key10": "52af3EVm8Kzf5dqkowiDaWbt8aPvwZBivKVcko6suWrwxLVBx385qsFAvpYYCLjWFbMrnbTaF8WYStBfYoqFVgdX",
  "key11": "5h1DYRLDdnzSVY11jKLuv9WQ1MERCJxb7WfKYYrkgdk92G6M1LCCnrHpHuhF7c8rb1vCpyuV9S1JwavPE3zHkmq9",
  "key12": "3yV3tEdFGPyFLZb6Jot8QErchaNDjsn7EQD4oRoxyaTA53BVXaU4xDdjFMmAd7sEw89hcYSMMZNbPKLGiFynyfpZ",
  "key13": "UH5haZ9YpqNSu6WHZa2Gt74QAy4o2pDA7ss3bmQetwzRVDQ26DGg92ukndQkEKNb4Mw3PvRb8H6JzkqaHnQMdm2",
  "key14": "56Jrpbp4ps9v5bxD8utZHK7bw51mPKPYSxHZeAuoaScMNMdUcCjBWQt5tsEkdoBA1Q42VqGVeWnJ3Zc7tN6t64Pn",
  "key15": "46TbrwKG9jKoDvTzA42UN44KGTKLawk9cpm9dUM2vWPubLvVyfMJfqry8DCkHDt8JRidATUjBgCiGMML9Fvkbgeu",
  "key16": "5LQSmw5saAU3SBX2NzXPTQY5pmXgqvE2dNEsj8ro6RuApa1wNsNDkCejMQJeVXc26mETQBKKYtmbBAoEynz5wkkb",
  "key17": "34TAUN2mmPq4d1cMUZSKJjSxn9psb5oXqEyrhNqVf8B11NX6TYoR9FCiyRMSdZxY5zur78SmCNX6WMc6wmD23bYS",
  "key18": "52gEyDhMV4vVJUj2Thi8nE2kYsNzCLzhjojGeuvkHuxpkcknDDQ3f2eJPTfLd4AJGwfeYrsERB4xkJCQBTmfkKWn",
  "key19": "1Cj1YEZAAXBehxddGsEQh9q2WffsmdRUHyJgWFuA3rzmhm2wvohBhPPWtngbddhQdnDd2mZcAdPV5e5dSPxYqvA",
  "key20": "4jaN7ThbGfT7oM3VCP3PMUXQs8Fi9Rs4KJNPoKSzHwPWXSUPaQzNC1FmqDsE4fpGrykyUesqLLUbomwyb95bL3tA",
  "key21": "4KiK6msDPVZxhB63bvSoYPzhzEbGp5SzsiBDDGiJjRBwUSgPX1kP1D5JSTmjYjmTBcpN6aSG2412yf8Hy2TckAoD",
  "key22": "Yguhnn99VmfdupXENB21DvMWUkCpL4zU8KZo8kBwpikukPHZJHoSxPHS7p7vQAcHqPkLUh58RfeJN4osm5cmo4L",
  "key23": "jbMQbfxhLMFBP1rBm2n5goF4RG1VKLjyp7prsCEvqNKbxhJquTCoJ2UoY7dYcmP6X12yP8m56HQf8Btyq8FjK1U",
  "key24": "2UEcVjknjKj7VH6oQjwfTrRZonoNU2WdeWwUBJJqtsjpNN1gFCoti73ivVB4ZE6kx2gBPWQWj96DpSbQ3BSFqwEc",
  "key25": "4sJBZA6wX15mNDfkYpWs1C8TRdiazXYerQZ5Lp8S1Cz35vF2KhzoWPtevGiAhJK1PXeFxhT7wRkHfQyLk44b2it2",
  "key26": "28v6rhhvzuBXpaMvAaSePzx9SLV9XxV4U9Xvx7oaN1jPAVPQvamrcQGRm6pNy6dd7TVmPZxpMJFCGxUhyM76Qsm7",
  "key27": "3W4PA6QJp825oeAnF3CqEADko2iUmtACrQjudABPgHHFZYW3NRZ9LKHEf5Bm7pMRZxCSwXNkQqTqznLLg19ZUjcv",
  "key28": "9Eg3BoZqNMSukdJ3oVuuzLgPU31jCwVdYfiLdhmL2zLiv8J4LcAiRJmwEHPeiEtpgPzPzoxWz6vrkyM44N7HmgM",
  "key29": "Nsuxt2pozksHD2eajfkeCq2gh767S3EJoznFv5uq6kLKdM9E8NAUKLgmGgwZFPDRzaFTMmUUMqkr1MfvjnMCAuw",
  "key30": "4u72MJFYqudxYtpQNZ9uquEZ8yDmx2Y3nfrs1bcYHpEP31AoAEDYUpjhA8XD9BvjXunR6FEeDveEWxz9nKFeHWnA",
  "key31": "hYMxevg8krVVgkXgNBbGZsjL2AN8BSSZQajdMjZVbsKZDhbN3KXMknvWz2SLCHWdSdpUsFmXuj697jqYvZ2uqh4",
  "key32": "5c2gBJsFzbRZA7yyycMHe8YVcJxjCUieoMtVCBdMUebeLbBuhKM596AMiK49ufeFDX286wgmpdoEtLGGN2Qoo1xG",
  "key33": "fGtBCCWXDtRkeuF7vY5uLX6hVedogauSukPH5AYsUp5rjwcc8f7gsJ2oNZzd1B1Au9eKwM9zQiTnmZciPU2ZwPH",
  "key34": "2YsbJcW4vHwc6YP3pw8FijBztwEQeVLWH4NSPrjcdekU4BFUmUjLYqngVyHPEmgbuUedmFmfht1MNiszKcdx5Wqz",
  "key35": "MUQ5syER5YZNFq8kNaVqo5SHr6rEuU6m4nJaRRSirEUuqPEPHwu8sRs36bbr4m8SUkugUZXBJcciBmsZZwEHAYX",
  "key36": "4Qf4xzNmcMy83k3eev8p3gAi6p28YkoZq65ys5oDLSkkWKG33WyZsoVtnC7M3JVGkp62Pn1sBbyFcxFHSH1s2akb",
  "key37": "3KjxvhCmxt678c5U4dakUNSHeBFsXY7dnvTTqM7yXjo6FU5kdqqYMkhFR4ZRY9pisKByzDaPL8reNrBC5UVLTA1U",
  "key38": "44rCrujCULqJ6qG6Ax2Ponr9NYJmQ4n3wKVFaR6pAHrc4oEztcsnZhXp9HTkuRXm3BCco9cSyy6aCszE7zQbengx",
  "key39": "iFsXPZyHp9fqzobWhbTkhEjonQqo7grFAQX4KuwyLGw48RPnwfeANFEyLrtGg5NBhkSmk3Ym3MLMpfasnQhSmUk",
  "key40": "4XjFhjuUKsFjjqCr5oPDnBB1iyvpyaXduRE12n8NJ7m2FNzU9zu32vUxhjreTXJk4AG8cbX7DzyZ3nqXm3BbGCde",
  "key41": "hu7FN9bX2YMpersTmapGjpavQqD2M41g7HHeUBEAqrf3M5z6ThV7tdyMKtLiXvgzfRkUsoeZzgyUsMPWqwUy2hE",
  "key42": "2Dfw4YVm8H5zU2qjXxh8gfwCBgd7X8m3R2cSNmwRSpR88hy3GKWCy9eLe8MfZT73wdQfCc2RHMNhbUAHeVwZxac3",
  "key43": "5FNKt6pdCa5tpvYg79vQSZPVEjheowNtC9W55oJaRuRXRj3dKHq2ik6rDtp5Qu7wkATg6YyZakUqQc6nhKoosypK",
  "key44": "KZ5rdPCVB5idW6YeWHTraE5y36GV8RPggcbWTEfP6vh2GYXSD7TBb5qv1X3X49XqgdjxfqXqA2yomJRNezLX1pH",
  "key45": "4TgPnGd7fiu6sM1kk3WqdyeBskVhY6mQW1ceQcVeSJ7HXHDxHCiremkR8oiF9rjbbm2eyiHHH7SHSZSKgf4oiAVU",
  "key46": "3z7TMuNThpd1whYfqRW4qrrp1iBKoxVbKkacZyPV8D7QkiHZn1npLYdp1QLqAjrNFVYZFDxPQs3bJRP8QMV6KuTA"
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
