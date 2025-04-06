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
    "YUQmcGPLcfdmP7z1r518hLLMFWNTXncFa6zy1g9ESbh4jLxv5oc9dMzXtPKndptCBnDRULpXUU5VPhTvThMBDzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2hnoJMHgyCgjDiGj3sPnB7ALKAjLFQMKXhAaqJ7nUo98ncEz9Gg4Uidr7QdQMPd2ewupKCMzjdXH7wgkPRW7qv",
  "key1": "2WdAb87yb5KgjQFDtQ55zJoJse1HgcsKEXdeAWt82HoSJNJkpa6o5R7tZEcZBH4R75cUV4qHZ2AWvM3gAarZYhEQ",
  "key2": "2v8D5n9nR8C4BYCr6ohUUeAzjtUadpFjYomczU7wXQ2BCDLufsj2YLJsocnDfi4oxEhV7LEAe5fguyQdA5KK4CJG",
  "key3": "3FSzTCizSPdTNvRZSBxEb9Svci9FBrkHminzyngmtJj4TjSpbMq9Rx8ttSSxYyjFqqXUZz6yuT9qCHmeSsnP4FAg",
  "key4": "ZLa1XqKzh6AGJEe83RYqMGPQB7qYs2TsjPAtSnsycXkZKxN72tgeYyPx98sm1keUvzYzMKGA28nCJRWXbjh7ABe",
  "key5": "6cKTqZNCLhrqJ7ZMH1rCGTr3AoaJqZAZq55W6cRPXQ2W5ZCmtcgLxtZtyxpcMK5w7aKMw1FLBUApvnz5A2DCsar",
  "key6": "5zbUJnvR35ikJY5hQT9BN3hvpKBLF1Jc4E6yVpnQ1yWeL2nGApEagveYUH9y8kDJabR84qNcHwFtPBWwEAPSxqdT",
  "key7": "2793eukZPeQ3uynHAPnmmJeqQi2F1LZNtmobh4Gee69QRZkd12D7ertxDR3pKZHfD1pDT4HUHG8Ysb6aimpqX3gE",
  "key8": "5NncGDK4Kpf9Bv3Yod8bw6PMD7d7cE2SwVeQqxaGYwh8VqYH4qhRkRKaiVaqF4heX3rnyYLqMpwHJP17mZj4s27",
  "key9": "5GdkcHqb4G2ZnfUi6xfZHd2muLduSvMaSZ4Xv6xzdxxBjnNv2VD737pUTFWaJC99c9rW6wWnAcXyEL8JpVyDoXcS",
  "key10": "4RWnMTSu5zFU5Xdzj5hXChY7vSTVkgucWj7VTVSV8w3G4bR5JxR2LJ62g9QYJnhArnACpUBeh3ycjAuQ52Xs8rwb",
  "key11": "28uiVuoU1Qh4WT31QFB9DhFTd6KUphc3q5ZDdce3or8zDGC7LGyg16vQviUdxp5j16DMEyTXxXPQmRiMZVLQW54o",
  "key12": "5UjhbbUamdY9Lfjw9ANYxEQXmpU9s5qASUG5FzvbgqHdV3BxQ8ByfByE94GjY8nea2Bhp7oUBKqCdXcU1PBg95rB",
  "key13": "3bBPfoAdKvbBgZ72UPY9ag4MMzv34gCh85w81jZ5vDDHRiMaYytFchSYfar8RSidNR25JV7uWMHa5pwSfXM2LVyT",
  "key14": "3ccAHkjuP5zSpmuAXwD25ySGavtQF2weu88VnXUAAR214LQy2KRk1E1vDenhFb1cKeRSyj4zMkJZeX8dX21SiGui",
  "key15": "2YPBZTP4Tdz6FthyzDGw5Ah3NgEC4Y7GL1FKeaKDNv1R9zTdfFyJZL7QAsuktYtVJV1uyfHFHwPuVX4kQodMDaSR",
  "key16": "2AE5E8nSMpg5uDv5PeoCcgghU4JSLXwvnVM3MfLwUpJkjhCk3nMYrURkAZa7arj2C4dyzsCUJwCAte99XgwvTtSg",
  "key17": "4CLnFnM6pL6M65ye6Fhhg1SES8HMjrDbMrvcB7QUdSSXafvHHbyN9uc662eLAe9rrLBids9bCeP4kiqHEwy3wzEc",
  "key18": "5SYrmqbef8jmpgVsWp57vWftF6D57DKD4GqiLbiPfXY9zM8hWL4TDarcbi5jPuRTNAhWL1mtjXFxMbQ5BxsQXWfG",
  "key19": "25H7yUxv8JGMciq8Bb2jLaUVBU6jWHC5ATea2yrTNjkxVUjLc1DPaGX56Xd97G9xgize8vbPkTQBPjUsN12JxcLB",
  "key20": "2mab7YZmqjr3WGQuqshufsem9PPiYsNZYAPADAdCD5EFoEqgo5GKCizHZQrfM9DRYe4w9emtq3kfPT3UqHPMkr7n",
  "key21": "4k4v89EyEn3xssPQR5a6HZ8HaAWCYK2np6Spa2o4nx5XwzbxhXQMJgwDBdCC6puz81e4atLsqC72kYrKBJY15jEy",
  "key22": "5DCVBSrPujpqiiAsvvEQsFWXfmpebEwbKMjHuPAD2gv2Es64JSe2A84bYh66NVsxjwE8Y9V3cefuD9vAUWCGF4x6",
  "key23": "3mhEnRpTFZerfo3iLXho28S7KE4V5sh8g5iL9DdzjhZT5cSV8ccpTLYASJABsBqtcaHBQkRPyYWnzKJrSwpLQ17t",
  "key24": "4SausEXtvTCXSsqRL7wNfUdPUi5oJgmVTkpxQyBz5rY2k5A7QFgpNZEakDvxBNZ45LiZqjkUaGFYrKBFZbAQU19z",
  "key25": "GTJHAwRsppN4DdRxeDTZXv5DqwYXN6G2MBodFRrSxppsTZmwXydnhcPDXcF4UHrZ7gLV2rm9iU14us9DHCvNrVv",
  "key26": "234MgzjWtDsEunkZjAPQvEoBEfYRsYdy8QJL1yA1Vi4P68yRW3wX13K7Vk3N5AyznLmBU8rRfNnwsWNr1SLihVBy",
  "key27": "4KLekNygBCUBxnmF1CrxQkNir1CUTE4uJEiASCZYBJE3eZZqfokSq9aEVWWizYaTKCc6c3oqPbNSXivgZsDL7UxE",
  "key28": "3ukNs9A4Dda3kuffYbvoeodgXLSynnuZbqZ67PVDBhcXbn9tPbLprwryyDwH3UZ4U4gcrD7f3G3czGaYuJXbUeqm",
  "key29": "5RgxZYwcJf2wyWunDPocEZRzCPLwbEsLyPiCe6T3fWxEzpakYgK45RbUyWAj13y8RFHznU3riMcHG9LTfAarc1R2",
  "key30": "4uZ2Cxj27aRuHLu1qqpoCd4cmP66QG7jFrK6PsWfG4nPzQKdRqZ6i9DxKiQZssTjuPW2A7H2EFGAzAgGr9NTYPhr",
  "key31": "24DxXy4Wg6pWtSghQLjYCaZxZ93hU59GSpfEz7GGhUp9oFvicPQh8yychZmRCCxLeHHAkfkdiE6DT7J9NuQHrm6i",
  "key32": "32HTnGSb7JpYqTZaPKk7HJx8JBLDyQ4Ju5FpYBUE4xxqiNgVqcWeZ2ks3fCvwdmfkpyfhTNkQVa7qomgCSaVYsS8",
  "key33": "5d7Q8hZWNbuWokmaiYCbFC8mxzx89GwQFv9qmDybZM6hHhHRYtVNBLwiCVumCpTmEdLEYBQ1gxCp5Y23nDGAT1xd",
  "key34": "262aPnHVqXKbYv5xiEwGWsjyZP5yGZYTKZaeAn4kkX1xQrqWTCBTh4TWHTPLLnRfz16ipD2qDza2GXwnubTcebCp",
  "key35": "5LMdCejTyuawCF2UJzVjfKdeDdXVAWXT6FaS7UdPnWPLdLoMpMk4v8nDGmxRsm8k8EvnudbF7L9gDDCpGX3FNRSp",
  "key36": "2MjB7jgdp4VQdc34fwykh8wVoT8UBNuGSDtEVjntZQj7BPaBPXjBvTrx1oeFoVD8SrHqpPoUcNKQ3vQyhRvgLMKj",
  "key37": "53zh7jxgXQCz4htYznfpF6xmgTnSNT3smLjLhmxcVKmeTCttAhWkHYCGt7KrHmCHJ1vAg2U3APuj6SXdYXa1F17e",
  "key38": "CSghncgtRd2Za1BoXspSabnuP7jvD9uGW2gbVV7UbHhAsy3gyGHb23t8125if5EzMUPp4gGmqV5p4uxtN46Sutm",
  "key39": "2yZ8wQjsc7RaLZoVktKfuF5xTCpbfwUfs1qFKsB4QQ5fJhDrb9Z2WobSaNxruYDDdvJhzoDqUvxNWvyTodyFQoqM",
  "key40": "xaaFNfceF93zMpxaMpK1ksauzEp7KsJRPvVZqfVP9iDo9iAdHARrZdxQ8xmwpQUVJK9nu4L8tE6cCzTfwudi6EN",
  "key41": "2z9BreKs2N2Xp3HJSUgRaTgYR8t9rvJpeEzHuugBNgwt5iXQYd4JLSg1SjbWUGyJs6gvkLz1181HqXw34PvWCSxr",
  "key42": "4zkfybTuGnjUQASPJqD3hJBL937C7D6dKKnMdvTctijzS1JnuPyktE9hc9G7sqiXdfQ83fao14wKeqeyP5sZnBef",
  "key43": "3nVfzFAvm2tSxZdvtF8fqokapodHJTjYkvuR53z4JxGsTJeeg8woj9ZbRF2Rj3wPSf4c5TYUGVinX4eXkH4uQnA7",
  "key44": "52QCmZRu14YbkBrHm4ML55h8s41DRxAnVuzEsDFQKxDc2a8BPLD8VswVz4UuRMGMgRxogpkjfbnxam9zXPE2FNjM",
  "key45": "5TEBUMGXBThXwnHnkP5NzoekyhjkysEgobonrvU7L2JnnKuVRNXZdi1HPUFC7wtdCoS96rY5mdRNgRRJ2zkyR3HE",
  "key46": "5xtzbcBDHpHUQUjqNxo5YJmAq9szLPAb94JTRiQ8nAGX8mYr3uGnXsMj6nXurQPdgVku13bu5swVREFgep7CDb5J"
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
