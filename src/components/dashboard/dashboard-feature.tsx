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
    "398rmJb4FyGy5noMMsBtEx2P1cocgbU9DXh6Ac1nrSuB8xesnAe2ojRg6VEwLKmvW7Xn6SMwuRaZm8NZWWgbcVeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLQNpSQUMUtkB1xscpJbXc4x5Aufd55Z6GJNT8c2cdksFATxxCTiAr6EHc4eNp8WsTgkZk1cw6WehaHn2r4hFkF",
  "key1": "66k1BtrefF3HHZz5hcVn2N3knie3Z4ChyZ3Qpk6W8vNmTKEjaxdbvmYERyDR8ZxFG9mT8w6QoiAwzZTTvmzjZefL",
  "key2": "5h39t81fRs4wvuDq5vega6yuuj9dDgqNi8Nh4bBRQRzdYJM457jkMxmqX4p9AbyYLHRR7nrG6T4Mw9n6kveW2qV4",
  "key3": "2EUXo2QEG9PJHNvUL38PPc41PdSMzSzugzft3yFBwh8zNiXQTSY5weYY2bWjzi5yYgHW3JqTFNgyRr1AZsdcMG1K",
  "key4": "nVPGh4j38WvXN6W5sy8Qf2aa7JRYDw1KqaKuR4Dn1xJjdgCfpuirNMfpBtsE6UuYnvN1hEpjgNXCGaddwoqcWsT",
  "key5": "5MyFD3kDHukRXho4DHBkHDZCSqiiP2SnrWsBhLdn51nSag7EsXZPJNbH3XiBkfrqR6QX4wUn4yrYsXbGPsRf1bG9",
  "key6": "42r1MPQxBetk2T5msTUfMP7fdQCVXFSmXcopQiYAGRV4e4Z1KTNyKJcLpFAnrPZp33NJLkGfrYPcbNAavhyB3hDY",
  "key7": "AWuVszBxbAD88NKmLSkvmkZjvcGR3kJbhA8KJ8AQKT1aokBikpNcAPpKHru7DZVNB8e7X6d6LC5WtM3M777Dwve",
  "key8": "3G9vStfRX7M3Wf6LxpXyouwFLcGRnD3DmcXJ55JKPpzr1jTjR4ugb5tEKg2rnTFFPUsoqZmEGFFwcP9x9gdneiNW",
  "key9": "3yXnqHbgWEgNeEKECEWbSALMtXnY2MSvwvp3TrtivVNUnyUYuhDtdsBR6FzzaDGV3SWfKVa5ZvwDTwW76HkseFX5",
  "key10": "3DXA4DLzZtvzHyR5zgFwgcHHBqxqgxa2mL9KMC3ndEEQ1NtQQFXgwZUsJGPo45V5katHohyV3i4Uq3H2ZSFav1Cm",
  "key11": "2Wb8sn7gLRe3LETGy6pf8f6BXhuAspZLNa8VzgpQLTsrG38u9oc7TWWictncfKKa5uvakt2eN2m1r1MLrVoYwKBf",
  "key12": "3WCLppfcA1hSMwoPUp9M16ZfmwyiHJjSaFYfzB7XEiSw7URDCNXJAyEzWtypJuoUemCBxLbLpHWDtQvHBXVimate",
  "key13": "4jiQWbFk76P7mPkWmU26gcvngRmSyAP9zXmKauVhkff8v4SijtScV1p8FYesjppqN6KPvmzMoDZkvoMWLEQ2tXnb",
  "key14": "48p6xrmfTZH7NjNSad8Kpp8d96G3jx1VecpPr2x6PvWMsMHEEnWa5y8EHUwqvGuU2ScuwcVTBuxn7NoEcEcNiNfs",
  "key15": "2kJLh3uP2oLYa6gRL3r7e6KNjPGsvzP5WK3LqKDYWHNXLPFJTqgctfz1XQ3pUUQ6S662V1iSgQPNFzPrZTXtbMM7",
  "key16": "4TSw2niwG6c8xBxRGiUZbAjzxXnLus46NHBk3mBGV38dGFB7TmttFUcKKy7QVYmmTA2Yabai1zipDgKhPUUTWpov",
  "key17": "3wKnLmJ1pZhnufiX3JfSC3nb7dME8zEYXakY5iHZF2SiBD1AeVWKWmHjax88F6FsEixoPm4qsoEFdJQLvAdwetuG",
  "key18": "65Q4pjTvhBWWHap7N1gyJ3GWZZDUWyx2AdYgwRJVJyfLdDFxJR8x1VUepysGphA9Svj6qWjgX3hGxrs8fnGoVHSS",
  "key19": "5oe8UY2osgER6zPBUEpQaNofCLgAZ8AETA9FpenKTXfq18WwXmSS7CsazMpRvxUri36Rtwbki1TkxVBHo7WtKmhe",
  "key20": "3wwPkMyrDBHrECt8wjiofjYhohwukEE7cfmDHvDbf8HPbx5Np5rJMSiK2NiFXuJgrES1cYqsjn51BWVVMj8ZA3UP",
  "key21": "2Q28nM9N2wkAw4vZDR8dnJCb82E1ELKaiCvm1Tt24u3oXfryQeuWwuaut2iZ5ZXUsxC847HV8A3qcq1yuxM88MtG",
  "key22": "59wfMYRBXjCmhoadYHsAhQfVrXU3KiMMHuZJd1yM2HQ9Wqm4pXZ5s6SBLNPQuQoDp3yCSd6nR8KbmfAcfLBATVbf",
  "key23": "jw9WbPCp53e95U8ypAFxbBoqVwraDHwHmMnewE8S2f2JJH6wNZz6X6f6pWvB2vLC35SFpRFn7n9mzHeU3sq9ioZ",
  "key24": "3LTbQ83fSRaJon4toCZJHqmvkA5AdJQzQzEjVy6BCuSVjU2EEuJ64qGvSqrX5qipK9wATynEuEXZRYYTD8Bix4dv",
  "key25": "5hxFJ3RR8LWqcRHK1XQVuzkpUfkea4mLzLyFt2uEfJqofvv7ygHpuejeZGeExoSz5hwiQYNXPdJspcrLxKKTkP8t",
  "key26": "3F4KVrs43FKVBcZ11Jc4SE6TQfuZvv698vJV63W4KEFte6tPmPXpAPPrL3GcJacMR21ar2baKWou4LSdb3cUhZ1X",
  "key27": "4KytHscBexggd2LbgKETZDVXZjFfhSzEBRDgjaN826nS6zWDeALExRPANCrdzLRDC4zeV6LAuohctC2xA6jmwrDL",
  "key28": "2PbZxoay1BRq1kW5yfkyHaF7YVHzzjvC8zjQtoKNS6oamVtiTPJJu2osL6RrYsDR4Kt3F9CBnewRpRv781UYm3oj",
  "key29": "3KchVNJuhM9ayjKsudyAcUuAzZJJxpV9vT9L4BubNLjaaTwPy4MLvVkGmBzgSrUr4QjqaJ3wNTh5T9rbVZnABj48",
  "key30": "2TRwKRCpFmAX6yGNaShE7xSHnDJgG27v9M8kHzhxqY9otmB4Y9SQHe9PMVN9ejmUEzRERRjWHx7C2tgNvqYEKU7x",
  "key31": "4NXc6bgYtBLAVD2FRiu9ZopDJ2EW5djuhg6LFyzRFVurJojzBgSUGHJiNGda1cQjJT5GaYBMbJDSibHSbs6jEHAp",
  "key32": "23FBuGqjsgKbPyKoDL8RgSyJUaqnoNKhxneiRf3NoX1C1dva2QxomK7zSt2xDnc7wS7tdu2cVGYRADPtY1cucPu3",
  "key33": "1234zVvG6UkQCdduuMLXBtiw98bX4nAijXWgCef1uMYjQzZnEqEzfqg8CrVeLpqeQKcPRbgoih2fCyVS4z2LXW2N",
  "key34": "2RdibVADBGDoedSjxjhx8tkAFm9gBN24iCoqysWAd6XMsuDjbFMNY6edJ53m9b5bf5fjJAP7LLEU5mJo7Jb3R15b",
  "key35": "JyVoi99VPyJ2bBdjiSiLD6QwMnkYnrWiQUpMkragAYaF3BQn2mGGQmAAD3CN7fbqJk3kzAovzdBVbz4cC37ikad",
  "key36": "3T6iMubHxGEpGdh4CQnd4k624wU3UWg1EL8k2HUvTPDHDL6qSCNLJTkWwm3YWRwqW2ZV7wJwnzE1UeF5L32Yy6xE",
  "key37": "3PAKTvDYZBtDHtSSva5Nox4RLKoWfM9CHmHsCFzR7oooEeXvtSksQPSvWFkbBA2kydENFjTA6J5zf55vMbqP2A4X",
  "key38": "3VREw24nbMU9RR9CCSeZ3yXqYihrZXHQWXGtGgdzuzfydY1QWGDhBPPqT6QMVukXHeyDKMAzqauisJvY1Y71GMVa",
  "key39": "janRNohvKzJMBUmEEsgiJP8dUwATsL7EHjYLCBdmFve5pPBuDzAtpsCCU1aHGHgayce7rdapgp6ZBhBpX9V4KUZ",
  "key40": "3yHxUyaePym244vgrNn4ChaGp8N1ifzwn3xPHvHYYtSxoWXKM6KBkHnWjfk3NvANgd845MoNUHLdLpnznJH3RK68",
  "key41": "5RtDjZEeLxPK2gHA7HxjmGgkPbxV18muVeze7RoPS1t3qsYc8bAdB7ehwmnjosUPLFRfGsDmBFsd3TBtDsg7JVj7"
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
