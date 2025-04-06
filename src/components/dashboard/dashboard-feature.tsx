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
    "aE8w9FfQezEnhp3tVqctJQk5wxBdibk16zE9YTo2aCz6TTua46yJpF2uV4VQQ9CWuxC3FA4mT2urCSCoQkpm55b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGhW7pFqRjshJzJxLxLfZhUGf1enBJUXtFAE3aUK3QwouZeKrBgc4TjFoDDqLk72ebcA9SMbsEFXYfjJr7kueVp",
  "key1": "4uJ3y2AtzgFDoAtm5ZewXVhc1FMwszDJS6q11tqxRkgFMM1LMJSkhBAzdoqQvCxzPZmjHw31efVbJskRbgEfaEs",
  "key2": "3y8tPa82mGHNH9anpBUaKohBZgRdJF4RQSPCyQd8DB6Zv9QJByfX2PVSS821nQfNUhCsDzk5uvbQcQSCpsebbDKr",
  "key3": "3VYSzLVVScnEajksUwePXWANA4KxXxtVM6T1J3Y7YyyoRxwuMLQV7ZrMJSPeSFpSSTtpuKug7g5ZuF8VrFf3jtv6",
  "key4": "F1LXVGjqbevu4Q8xnnmpueM9CkXhvqaifpKb3R1rrXasznP8XUvahAx3pfXQRou4pzVjgNCrsN1PCdNooZpyBJk",
  "key5": "3vMCZCxhkXaraYuqLN6uPGmTvvaRjxmraJQQDQ8eJLxRoJuUDbh5KrYcTZryuq4wAkmyJkfSpshvSHZ6ErDGJkud",
  "key6": "3sv6gHeoWnrXgt3iU5xtVCWUmU7oU5Z8LMRg3ZJ3tScDAkYFdWhwyHm5ya79fKqtBMo86YkAKx4vHtHZx5Wi2GRq",
  "key7": "4AAGej8fq9xjnju8WXqNriXNxGCgWtoXwTzE4yqpNHoon82cMVVfmBugGVcMhGc1wAyNKseAKDr4izue6RuVeNYs",
  "key8": "4DT79bGpjSKT6D1M7NaeQu7FYoZMw7R3Hsh4tYGYXtKSUex4GAQNahQEAaYebAVKg6CbqPZ7JvMRHRQpGzcGRSL3",
  "key9": "3H6YXWk4yVtpGf4nnq8vBr5mdb6VhdrXNPKf1vVB81QhmnT7LoKMpFXC8tzwHvyUhmmS11B1Bjk6wcpfX6X73LHw",
  "key10": "2RDcEu46RufrRxdpQvz87BhtuFHpizhxnY12PuTJi3vmgUuGAe8Hhp689J7e4TQHBqN11WcZ9bMoYqCBdUu5DfcR",
  "key11": "5rg3i3Wp7N9o96YhQ7CmzqD2keJPsD9AshuAvaWa8xhxZyThNxyaMNG7n8aTJgeY318JJWNb2CjNp1pnuevY3hud",
  "key12": "53aNWKrfeTg3kuAqvBtpfDEMmkmEHqZsoYi4wTEQfUGCe1pyxpi2SexHDLk83GSwcWexv4jiD5Cm1bbgXznxrBqr",
  "key13": "eeWrV91PqFoG9fPy8drJSvbXhaRqwkwKsULh6TceXeqxBziEArozzPzzYbvrPo7581ooFF6spGrYSSjjJm8QUBr",
  "key14": "67jQLvGcsGZNHAix7RL6Wo1LYeMMbCSJ3XL9xtDnXo7ssNXBgULUhBEbjZUF69oGFbHTSi92HznmXxK7aqkXQXeZ",
  "key15": "T3vbgP7s1GoCKQ3DZkJQMBXDc9GQgmvffpccEfePHxV84vyHTpkzvbYyyVyKvSLo4MZxTg1jYtPWU3qU9cCDTe6",
  "key16": "4U2aSoyL3txdj4S23qU8wHjSjei9RdgEskWRb368rT4C4scZSMGRe8ur8UdHZxqyCGKwknP79ESyvG72fgCHpUX1",
  "key17": "2Ckv7EQRqqoyMkbCNzsKedL1KLLYnMMx7N2SNAvDUDNsu4MNQAxnUM12eyY3cy93KY5BA6JhHca7YGeAUxuFT3eW",
  "key18": "26Sh4Lv7hi5SXgs4PwXBwU5tMySHBRjYEcU3aFYk4j1U5ZjXwHbi9qMtRwhWhGXjdqrbGXXa2riwHrg4vGp5Lwno",
  "key19": "3Cb6hYFCMGauvBhe8AkxYjvFJMoDGJPqd9hZzEAZiKzctB14kgAHqT5ktqRisCxpWzWhunEGEYaC8ZH95q3cuwTq",
  "key20": "7swzce23M7oT2vvW5quJvqfbZ8RAPEzWe9pNKBwbzb1PyFQ25sxyPz56GtVsYdrVQSAWjwEMeMRr4Xd5QsGhYh1",
  "key21": "3kUt1sDgv8m721MRnTgZkhPUujNDGxmEVry7P9yeM7aFvLVBb1Dy4bW6HpyQz2b467oqHWnL6KoFycmsEgntHpg2",
  "key22": "63BDiGU6crezDbwenoTpqAED9Dsgc3HLwwm7h8N6U3WtFdeE3gfF2k76gTewtdfUorr5PPWnYgAsfo7UKjWwbQh7",
  "key23": "oRgiELvbXBpmaanoQKTBgfqtymfrC6exVEfhZ8RLA2MrNejncSZ2Qty4Vsi1TkpPs9vekCoNN1v8Lnmy1jwMUET",
  "key24": "3VQgLCXcbvUH5xHeVjjVEJxLCGXV1jLwypp6fCtbbJJKAMRTvV6ZRvtGRt6TUvwgehHrzyDe49EQFQ4NVuH2fCD6",
  "key25": "3if7rvyAJf7fVqgtcrSomTum5we3HfgjzhLGDGc4253943RyeYLZ6jbkmQYVFg2P68CRCwbLzTBXmPML4nVdJBxN",
  "key26": "2LMA61mYLa6RNPSiRfdJ5xurL7EJi7YQJQNkJ2hEug7mdTKBFhtjgFRfVtiegjAF2NCGV3V5pLLe6KuzHhL9gmLz",
  "key27": "5so4bwffANRJynP7QT6NknZ36YVeGapq79fUTND6y5nNFFHQZQnnb9eNzn3B3dowf81yPDmv8qAVKxRoRm2DPJh2",
  "key28": "2cmikUSqAb9aNaHx47DVNPsZkJht8gJsy6EfJaZJb4sn67C2XsYJLC4qv7V1fURGJ6t41Q23A1mbiDzfAarW5HWm",
  "key29": "4smQnx5TJsSGX2NoQeXLjjacdgm483H5661rZEgs8k2LNv12Fas8uf2CFi9NnhT6JeuJMcPZzm7Z3rbyXgWKVSdM",
  "key30": "4NonDV165RuqxtAxYhDdEzYnq9cUjKA33PNK3EMrMEScjKabdspRwuf21u861ZqYhYw38dtuseAPKVEcMcE7fh4h",
  "key31": "5axSK5Xhh54mWVAAirUmRbuVbKaHacGmgrkvxGzkpeWv218Ws6Uwx4crDKHRZG5d9D7GqezwSVrTaTgSQ1RvqAoM",
  "key32": "2ZGJDmQ8BLVwv2K7QS4r9kMxutRHZeVfXERSG2rE3kQfEbDu3m7eXNJAj8G4SknNj3uQtBycHfd7KMNpUKkJMHyJ",
  "key33": "3DvCQDMdyxY1JN6hwWDhwxSt8QHdsjZnjWybXxFcrn7V1YH4jypSHVdFqjhBkkYXfdEQrTDHUBqnC92kEMEj8XYM",
  "key34": "33nv4cX47VFJLqQtrCb2gdcFwQBG5aCHeQfRj4e8fM2hNDA6AqdjsrPJmAHw29S3UoV1wJXrQUWSsakhPZaBBBWL",
  "key35": "efCZqV8wb1qtsJLpToyjjPsWQR1yCvHy4ux5yYMRMC2FU1EsMy4qoiUBo1jfwXHk7BfYfddqB8BaBDpT196Psgj",
  "key36": "4CKhrerD8zmPKCVDx9mdEKuBUy3ZXDiH4SaUEWZDRxutsJCvdZEP7uMFGvGMC1iM4R1e7NcPY9wpbuoNaCEToZ55",
  "key37": "4QTes887Ujm1ZWvrD7HKjJUaVa8VmfZvjHfohAhPWa2317LCD88v9BfmQWTYi6i9v2h3BQ3VFLHAQLmswriZKwyQ",
  "key38": "3BuDHU5qNiZfNbHxQ4yKR47kavakqtzLi981zoADPPstgKtvRcKFcBnjAMuGU2qL9fL4mbMh38QN8VV2RhAzd218",
  "key39": "4TAWiv2USehYPuKeaPiJUycqc38WkCxnFi438dUiGbjr2e69x5R8qZYE8hLLupX45kKEbEX3ekeKkfToQhTt7QsQ",
  "key40": "FS33t89t76VcGhWnkzvVmfDmJgbpKVGcyoQtEtfh7syPcRxGzxTvjtcNCY2ZyXsroUV81VkhPB1zWvruxyneuqA",
  "key41": "vhSR21MPbRBRRwRXUbyHi7fKokjan3fTahGAdFrV2DqF6CabuT6x8e3UMmsN1EJAGShsi4C8ZmuxhsmDfdHU8W2",
  "key42": "2nkCrfZe1nqjjPUGUjFArMe8fMr5K9vJYeuvonkWvvhbp53MsBuhGigDSZLL4s1LnyBw8otpAQurFL8VQdXWoUyB",
  "key43": "3Udbi4JMNg6SE9dcS5vw3xRFbbYVA3ZJ9vvHTgWxdMBguGPkJJXgMzee3KQ3rEk5XuVwJue5HGRFBv4YkkVhuxtV",
  "key44": "5GmKTGSbqu8aD7hT3vvV2pFiDPpLnCLEfRbzmJshGqKnM5DqbaErYw5LFjQTebTnNrNnJJG3EaQ5B6zoDGDqw72L",
  "key45": "3itNPDkjWBbuBqAGEF5r45QNhbvX2HXKQWeghmd682xtEworWEaKVNV2SN1fsVjRvvkYSnNUTwx7zn6sX568qnNF",
  "key46": "5xqy9MAsNR3oMXsB3KZBg2H5tv8xBjxGkyvSfcCdyeJD92bq5CoxfhWsPqZUraKkcrC1FRmh1E5Qv1fjMyX9JXzP"
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
