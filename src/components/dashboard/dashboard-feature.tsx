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
    "4YT4HS7vVgTJ5nha3Z7Yu1HkFbsebRAmhZNJSnXhxoRtMMtoHk8jR7gekco33QpErGpY1sWJzVA4ne8QADVyFTUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31pdSYd9Zbfv3FqZwn5tVfMqdCF2nWJ8gEyRX5poz7xsE7Hjv3kGT1hasjMumkovehVDs8SkJHRVPe2WnkF16w4Z",
  "key1": "51A5iNQdDPv4wngBpN6dKwKqVFhGZ4eZC55YMJacw9joh3bKZnNcGySi9HTyC3XUKbEdaFiFwASuyEWSSwrgFVY9",
  "key2": "2UgBb3sFPpeL5N8dpvhdMmDrdyEbULAiJMgRZEjsyXUGGgBXQUcE9q3LqQy1J8uGpZh455xWvgkHbkCgbbb5pqhy",
  "key3": "64EKgFtGrMewG4frvFEmBuDKTipXYfVbUzVYX4kvs3wViQkCz2JhDYy6CQ6BShqVUtUx3JnCRG3Hg3WqkDR7mxRL",
  "key4": "4BdtucfBgxH4q5Pg5hEJqxJAwqiXgN3nVcMc49vSJtmjWdJBvYDBSWFJWdEY7RymLUZNWknk1RFZoXvMeFMDSGED",
  "key5": "3hzBhx3YgscnqodSKvfUFS3QH9qnFGszoXSgj1MEQwGzUug2N2ZsKMtuq4mDbhDp8Ts8nHYjquSYayiror1YK9G",
  "key6": "XCZ4JHZZWaFKm1XTtgZ1mpQ9f6mbSRtd4vChZuSL4Z5MyRCtB95bPUe2gyHSzXassX33pBxBzGfFoFg7UQLxMF9",
  "key7": "4DTaEDVNEUJvyVfZA67Pr7JDnTgwfcFGy25KLyctX7his4EBBNCUSQuMBUFAZoyPq6hiHWYMJaoJHYCai1ZGtxTN",
  "key8": "4stbfXcUssoTEX9VCCix14wJfRiKAsSp5dCbzfGB5fKsVS78JVLgijJfVkL3aRTiXr6C9Zkfbvr7Ze6hmR7isfkA",
  "key9": "5o1YiTZKWEu6DyCzAzWEmjhsAgbv5K8cBjkdRkhkCQVcw2wuqm8N3WJAgbAtfAUDz9woX44UCQcuU51PfPnGVRcw",
  "key10": "53bHaiAjMCR1Dfxy5yWLgxPkipCqjKzwZSU8wCr2YcXxqjHcYJ3y5oRdVw36isLg9nky6mX2RaukJP9A6Hxpit1p",
  "key11": "2MqTBPdgWBC6Fxz6vZXB574v2rQw4kGuHoisnkgG3vBmWzkDJs4gbHDoUTuN7P7XnDWBxRaf5DsHqXPDU8g6wGwJ",
  "key12": "4x7Tv8LT2BqzhihhcEtJUgwR9N5Nii9NAtDAnsz6EKyArowWxiqAkp2MFKg5KjfwZva8hXX8WdqeUBMJZbGgjbAm",
  "key13": "3UNrXEWn68AncTFwgcf2kHWZgrm6gg8fW9vJyLR5g3H2iMCbTtc71G9sRQYBe6xEMvqcRumsKSYjQ6cTcXdViu2",
  "key14": "2QCY7DwTLwFFwX5Vg5RZVE4c7FFhfaTUpWExg5zK59zvKTTMKvhYCqx4FA7A7pTzasA6Yz94NUFc1P9nhx72KHPn",
  "key15": "2JmGhSp8mwH8RcD38cQvheUpB2iw1EyfbyrAftDUfRDCja12xsXD9omd2rk1YNd3deghN5apxt4Ce3pZBNrYQXRJ",
  "key16": "256iQLvnpcSjJBACAEaYKT2oU8RzQ3vtu2XzoZmHNQyCtxTCY2P6MEdefRSUiETfGUxA4diX42XgHCHtwYMW8uYH",
  "key17": "2mRfNV6BieEjkHy2bSjsFNEwBhZQpsHDihGwArXhVqCVpkPJctgB1fkFB1Uad21MAcHhGgyfwmmBeWnHuEKRHj7J",
  "key18": "4iAUV9Eu4WpELdya3A3xpbPchCDeonwhMjFYrt53HYMKEiooaPWScdLh3RgbfcqeP7nrcSDdHSHr9qYF6tcdULEP",
  "key19": "48wabvUTo1FDHACYBuvgD3fo9CScPNZXGxGny6r11ksjXh2cqTYMV8r51KksKYAu3GzzJXopuUd9mpABTmkbQskF",
  "key20": "5zTN4oQR13FdLcKPg7tgy9AYhzoL5HuxtZ874FXhtajHMwipuGuv5dppheep2QtF8s8HLw4t8agTV94vzq2Nk6AZ",
  "key21": "2aP4C3JwXZ78pieVtNMmEaLfUwW1UKKy5sjdfpfifJjbruNzrvEEN6hqSY1yL7RhB4PZ9bCmosvuvxtaqV483hmx",
  "key22": "2tLdZEYsg2khwuwfPwqqtu1b7uwZHQiefqjfyC4iQvywd6CpGHacHxpDe6pGYiM94AYr6uUEXSrFDjFm2oX7Xd6e",
  "key23": "59BvkzTvozHAY7sfdKrry62zbiVfYEbfLwYvTxrwtcZdopRuayVWSqn1R9Xn7NaSyQzZjW2DeJDUqxRJekbTetWd",
  "key24": "3du55d2SRs2cU3oBLw7PxbeJrKtFG9HEGJffHmkeTD1bRHjvfWks6fW1a9KbP18CUtuKWam5JhT6UapZzxyYbGy3",
  "key25": "2D2CJV8o93BpdGZQjVgFUjV1A24gHmrmpf984kx54YM2TwvKNaRWGQuxZzMP6Kjx4YTdSUyQVUYc6SNpE8qmzJhz",
  "key26": "4czMrTpXx9YzHrRBrcSbi21qpwPCCnw2E47V3mJrm67cmvo922CPgU7yYJhwYLgurDMP2Vf5p8pK2KegcqHxVdDM",
  "key27": "5nhTQztWkVpVHVLDxEybRkPyLfppBea69dd3bxpUheQY289Emct6Vjy45QYoftZp1yQi5DLSPpf6Lp3c8jCcXcVq",
  "key28": "4mDVgqBeWNJGBYEQLkVhL1YagBEsk7jjUMNR1U1UWjw3WFfH5uguC8DYLF7Ph2pSFEksHKtnrjffCYxXBBY67CMR",
  "key29": "4L2exrbxLbbzqNo2JJnLHocNaiFCFPEj7Dj47J5FfHrjJuQFHmt6oD19rx6cgRKLBiHEMo5GCXR9qcxVnGpwDeGx",
  "key30": "ZQ3Vw9saNjvPMyiMtL8Zf93eYWihdzpmehcNz4gyyqHnhhygZSg16zEkqAtAXnt6HX7k9SNY6gVmJsYZyZ2MwCY",
  "key31": "52u44UHnLEz2bNkAMRbmcvNqGJF3VVLqKjpUN3xuoX1ErDWqv7RZAiDF2yVnFm56ZFvKeMiWLXTHYxnGZAqeAS2z",
  "key32": "2ENN8yQqM7us7K1BFoS2ysbdQQfrrKkXxW3YvVqfwz3iTZ3S9cNyqSHMK9SQ4HqtEQSooi8TAg8EXCP9Qp1YxhHL",
  "key33": "61VmxQF6A1aLxL3kLxhV4u48QZuqDJ38TqwAQBqxuDkhJGvdeux3vfiZsrGT8YWbpQpLbnZSZFTYKsPY2sJmbvdC",
  "key34": "4Eo6SMhAmtu3DWBLdKLKifQnGzWZSTtfFRoHFC5Wj6VXQCxnJbDNCU5SCDbpQMhggFfQE6hKKCXDQ9GN2CpBFrJb",
  "key35": "4yzufnZcQcGw1o3Z12A1DV1wndsGhZcHVj7tiWy3MHzgGPnCqyvDYzkAXhwRfFLAp5Yz7n81dWzjMRJjqSHrc3zk",
  "key36": "4vw37dfJRVpmajy7iGnzukjpyZx1hDe635kTmSqPwzPrmmKzZ9Rids64tyNmx9rxezUd8eBHAiomYSbDCT9bUun6",
  "key37": "kddHer4N7yfTnEjM8kH2CVALuZAk1M91AZm7mqGJWGaNps1Cv3vQaD4AbSZtigYey34T6dHfpu85VmuK6E6EiDJ",
  "key38": "5EsyJTZPUFYtbG7H7476pDMFxfRXvXshwWni4jZuRw5a4PPVhWvWAttjsAvTQtptqXNjg26iQTAjDYFFkxii81cQ",
  "key39": "2g6wL12drcwnK9KF2jTMGbpm6edRCBoz31q8M3BBmnv4QSizffSFV28gH1daXtT6HQQaENRTDEoi3aXnZzw1u45f",
  "key40": "4nLYhQrGGgi4nddprQC43a6xqeAtqDMPau3tWzVHJPNWGB7sgghbJHDb4QAAkcncRuA7gpWAvfPAyfcafSSJG14k",
  "key41": "5FMJZTz8Q2LrPveauYSRhPQcFNGSyDmd23zLMmE1h8jHdaM4Tkovy1fAAqQzJvZHAdYbQeJTvBTvpy7AFkneK9G1",
  "key42": "5bshLvKwHwwL9amo5kGoR854UPK2uKiQZ8hkGmNRFHhWx5Gm1rhCoZgEAC1UQH9DY3rcRTMiYeAaXCtL2AUXwwBS",
  "key43": "5wTaE9Pj4MbUACurt4hhLnfg8MaaWETp5NXjnGeE6t3ujwfboVX2uAf5iPvKkXLYHo1RZWLsHScfyeceTu6Lkrcn",
  "key44": "2xQkmTX2hbk3Sczc2qupQhnUatc8TbWANK8YCr7hHHuKUFdBxdpgcv4SbEudmJGqaMSgiP2ThN4YAdKLZoCYsG7X",
  "key45": "2n1fhtZey3bt78jGNrrqRhmrHoDpWGvb7gAbLzxhMbfwm4CVNbPfRgqJtUopCrSXVKBHZAtawo9KuW8C5RmbJDTP",
  "key46": "4GxS7JWqDHaJbG3Rj2YgQf4mjA3goFCEvs9CsGWTbxEViGk4zC6k7GodydySdtLm9uHUcDRqavp8CyXvinboZWnm",
  "key47": "3DHb237VM5g9YZxmb8R5ECncawcKiLKM3Rh6WMPA44tjyBS2bRrTnktNTj8odCaSUFakdyHZKhBLQyRaZ7rcwqUi",
  "key48": "5Sj5PPaT7kaXU3VapoVwUZPFSzSypbPaYExb8k6j1FRs2HoctPx7EsqmQCnZFEbnaVPByp2XL7HfcnE5iLrGDm2M",
  "key49": "z4TDxJDWAxR6qNkzJpuoDqaR4gVDYHsnibSumpo54iTp5U4J2kManipGq9QW1kWEVLxU9Q7boJoYddDA96HRKLF"
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
