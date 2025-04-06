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
    "4ZopMX3K15ZP63cc2m451QYW2BUNKB48Cg98T3KKbuczCatEHAJT961fyKk7DsmWfCcmRdo3v72HuRwZSpeC1qqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yt3G7RbjK2G5SJmrY6MoFkzbCBw8qv5zfikhf4Nk8m7SF1LMQEDYrwCQb1dqJX7PtDmqoGeAjYny4hiuSDML2UA",
  "key1": "3Rip3cxDuykcRHWiuTbQn3CLigK64sMqo3sRaL9RnCKLmjiRKP1EgUvm4rcLpEMwRBbKt8mhYTWAeWr4XjJpNKLA",
  "key2": "288Z1aehnQHkUutGAWm8xsgB5vubgSfEtjjwtNVzGLmET6K2n4Tq7xSYdQrHgJmJXgsJ5S3zpqTC6WwiL6UdHWeP",
  "key3": "4r2zqzbijqQwY9WEz14eRK37gqSja5g7NSKUgEFQpL8qgnYF93rtRC1gqapqiQtXS1zHVbCQwxM55C9Q9fjZex7s",
  "key4": "4Cet5cYTkuxrkmojFoZ3gMtbh4AhDY5j6vkgBAmq9kTiA8FXgKKtC9d2UQ3dH9SYVg2Syg3qhSzhceJHsdMbVW3E",
  "key5": "5hrSCLw6DMsadizpjvwWRE9AfutAMnxz1dbo9qsWbS7eR8cenPsCATTZfJfU7pfFQZZf2R8hsWMXzZBcxejVkrXU",
  "key6": "4b26ZYV9V7BKrRUhkhMNYXsqxvLiGkGqw2uKaTFofKy4Lxms2JZjZPhtpHSRy4D3qiSpT49t4wYeJfDUtXH3FjE2",
  "key7": "3AnsDknBrpmLWzzH2nw3V1GB8t1XcrRbKxapfzQ8LrcUSTsnnMBtXt9F9NAmv4V1EP9mfUDpUQkXTvwGiJx6J8UJ",
  "key8": "5eNeCKvA8CuW3ucvR1FFG4kKCGnqtE9wt9L8xrS9vD3nZ681NbHbvpFGj8P4vTztSQwDTvPAHzWQk7TUSHG6gZdc",
  "key9": "rfqy7M97Pv4EvGisJf9RiqB5T8mDqHUkGJvq4MddHdS16E8CdcDQa8ZoAj6vLKySFUJKEb4y8hLgZwQoVosyiaJ",
  "key10": "3koiRyFwwH3oT4pjkHkJREJqo85bny54JofZDLCobPC273XrmpzejBUL4FeCgfqfN3FUcNSBriuDgbNXNE8Wh7u1",
  "key11": "rg1XqESyHTLcvxrXGAhEjhoPGpuENKu3XRCKpqqW1GyBNoBYA8HtvNyiewRZ5bwd74n5jeKSRQZT7nHtcTe8KoW",
  "key12": "2J8pCpkvHGh2nMF1p6zNcbUAa6gQSJzAu3JMD2miF1GUueSQWYEBMdvwzBWSVzFBsXMCK9HrUsTaRrRsvdMgc3dT",
  "key13": "4jQmFYrzmdUh25NkyWQseAfiBJUKYonNagciftLrpD6s9wDp6uuepJ4gb8NLQwcwi7QExxkmzDx6jTsmr3cYbBLD",
  "key14": "26SDNN9vsbX3fYWuJCzVXnRphcu3V4dc2CzU4t5V6Do82WJjmHvzQdkFBLj3PsQkuV7wU8Lq1erM9nUfKhDFxUac",
  "key15": "4fwMUKth6FfdjP6FJMdP69gHp4QrR6mtkNksN26SNvLKd3UjiWmXVDzphm4ExNwziL3UW3c27HHsv9MjzhAkGMaU",
  "key16": "5PUbq3KweEf6mvQWRmm6VBc25qU5QwSaK94FRukAdig6y6m3VappgPYPCtQuSSyM5KfKufPV5bpSmmMXHYVLa8tq",
  "key17": "1f1mAuNCaezpJyFQFmkJRanoxCn4FdVEPqP4nVRRKhwk8qQGMYWu4ujhC5TvBDLGbZDA4JQZjdm2MwjmSNDDKYh",
  "key18": "28Tmb6tvmGg1pmBMah9CD9MzF69azGD37fZLGd5vDQifMYea7HUzVoZnUYznrKMX9UVg1c3UuBwqtJUBEU1Av6YS",
  "key19": "41vvwAT7gjGaURVKQgVHcZyL3Yj1mom1tEEhPKCc1KAMQxmQcgfi7nxmKEeK7NdgeUzh4rGDYmTtbF7J5GRQLVMz",
  "key20": "5QeErKcUemyRFiuWYvFJqmKrUHbGkL5eTQoXisevjS2h4ZuYkDd6vqiaw9oz9wYkyirpJeJSugKn6Ppy1PycuTNf",
  "key21": "4jbeoSTGTuJudyiKEcL7yUZmBkNSuLngiZEpLDiYg5kfi2gWQk4xr8ZG9zaeagHQoWG6TGe77pJ3XooLuFF793gc",
  "key22": "3RnfZYv86jkzxF3sA7id6W9UKc57vTa1HxTZbUR8mikK8NXHXkuj7Tprf85UczsewwUTC9PRid2iocBkr4CHo7A5",
  "key23": "5AcL8NxEdk8dXDZ9tHUUPxqNndDe91W9qmnmRYuyPLN8C9GWyuagQNZYY83hyQyiiFfqUAotH5JTnyREfF5pqiXg",
  "key24": "3omchVJvtaUWWhckawAMk9jnrK1KsMVtHr3R9dhm8hyqqnF29XD5rTg8DKrKCBVmrdDXnEdv387LCXq6ynckaRbL",
  "key25": "4oz3acehWQ7JU2bjsBuAcW6uyGJo7aVzWD71fG8DRdfkECgAuBWbrFnT75FDsSETQfTJ6BBXAvMTGiumeTPyKph3",
  "key26": "5uWFkJg6jGHdPPRinESXgdoXdyDJAN84Xi6whdtQpmmo1VJfEn3b7agUDvynCYsGEQg9rdutZZZAW9oRb8mbCZaS",
  "key27": "44cgbZuqmq2Dp1Pqm4vmsHzMGVuNWnHCSSKsxvPcPzPMdGtxKHeEnnQfZu1kF48X6ma1w4BpkPnPyZ4a9g1RucXz",
  "key28": "3YnKBNW9E7z3odvrHGRvPNLAkANjFVb4ArJNSzcXicTdra6oT7cN9QhppUJn7nEByqkzA7JbfcNazAJeUnb7xyRt",
  "key29": "2mTAeJBoooDbza4mSxkBfx5MkLHwLc6oL1PSxgX8aL3vQT9GzPYZLpdnfZAkztEdByJTi8eey9QWYDmarhgjWaiM",
  "key30": "3SFAKBy1eRhcLKhJRsvNHj7wnEJg2sJB9BXZAjCFUYSjUJfFKiuVZBArwE6auJLsPoLJxMuaWUg1SxfhhAJLDpnP",
  "key31": "qbLTgZs2eCLPxDuxQ7DaSuWfCxupzNSLHJt6eufoeN37gcWaMYXeUfMTn25yj9UrS6jBDP7o7NLGaQnZBQZBMbj",
  "key32": "3Pbb3zzDJ3yo6sxijeFpTPJnmTyeQmHb4g3SVpvkDKZoNrhErjKEBpaRCciLBcm1iAFj2VJy4mEmhjMB1rQxg14b",
  "key33": "3pCgDokvmj9PdtPXKi9HT7Nv8e3y3k7FdAX6YXV5wtvLZW4SPLx5KdL3cBwbFcx53oy93hxpG5BCNLFPEFcJrsu9",
  "key34": "4mKAZSPu34bzyh8J8YS9bDS6TQ3iH2Ar4eocJdzUVXfZES3fCek6gNM1hqtKweX1tLzY5N6xbvor7MTJcbeWqf1v",
  "key35": "4XTCWUEThmd23gMfb5VHmh5TuHfp78AMXZWYD8YxmfDLo9oDpgBZ3HQdTMrY6VhvSuSuD4eTXUzNx8HfAfgbUE7a",
  "key36": "4Vebtf7sjivi29ZxwGXrLF65HGyHEhrecnyUt5JRq6X2BphesVHtpZR9hvnYeZpcPFo6zQFSS4FE8SKrQQ6qbVr5",
  "key37": "jRYcyEq8ek3EwxpchHT749axLYMRCyY3bGyaEqakSnNcsf7vYfLcFJvauXK9sPzb2rUE8nmp8jK34VK5GZQM8G8",
  "key38": "D2ybYuHHZ3TvvD6eF9xTqzPHJKVDha1fsnps1SrAYfUGWWfMSUu21xf7R11oDQmQ1B5q7UGYzjxZWxFe3j2dD3M",
  "key39": "3zcPscLVuwKFZ635kzvZxdVgwb8xhZwAymdwjsNL4GhggX9vPu9132ZpFfyAcndeW26Mv9QPoW3YHyPZCVxANvE9",
  "key40": "4qmQUGaWk9t9oPPnfwYRpo68pwGrg1XeFjr4EhYmRR7Lz6ioDYM4Sw9crj83XukxXXVaQKkW114cT5bud41vLy75",
  "key41": "4xseDDutoFD924kNJ7RzfHXanmSnxqRLSFNTgQb8TZ98y8Q2qVuwESmx1uwhsnD4WiaRXEiVFoE4q3Ci2C1HyK4n",
  "key42": "yGYKojvfTPmu5kfYdXAtCxghfHC8ZPZofeHxUnCEByJMSoYaGndSoj2GkpiU2sZJW4YGKsVaTYaBN5jqny5PqcG",
  "key43": "zgidj5RLZzMiEM3RUNohyCAv8NVnzdHSDB2WWzUzSsqddXGJDCFV4kA1jHcchav7zu4uRTvm69MGpLkwxofKr4p",
  "key44": "xVT1LQtxL44MgVcZqmEVJWKT2u8NMFrTUBbjgS72BVgW97frm5fRuhyLdK65Ewna3AbNL4vHv1XskVEUbXRDwrD"
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
