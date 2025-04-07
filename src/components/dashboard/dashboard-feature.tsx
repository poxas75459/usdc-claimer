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
    "4urxenxHrm9oa9yEf2TPeMjEBSTankqXxm1nRZgRGtrAribxU8mFva7Ni8H8w4N3wVQ8B4v7SEXFX2tjCBoyocZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmpkcqu1YjHtr6yAtMGbc8Pusmavht5rvx85AvMb9f24LSWvMRi1SjHnFBioZ91XFPGR3fUJHR4Df2mn4zBafPa",
  "key1": "5ud6zAn6xX7kbijzWF5qunCKyhXFztgjxDbEWi1QE85w6oWn8zNvRLRmY2CunJjqf4EFyddCa17gKVLpz9sHJGho",
  "key2": "4xY4CxzqsN5xWLpbqQpwcLwB3pL1dWBRUwLQcA4pUGdCe2wQ3tgjnBfthkGCdNXny6xaMcJSN7AAMuBZ3Gp5D22G",
  "key3": "3WinM49GadBqxe6Tuvkg7A6DJMNztAn4MyuQX2yXZBLBYhqL65rxPmhrVHPtqZpGkHmEE6pvt2JhWJNfesvhsg8f",
  "key4": "CzkJyyfAKodrVwtEABvLaqdrX2iHRBuRRsEsvqtc8kpQx24riTDgBE4hHGEFHKRqzqDMy3gVCwb6GSb7HUPCZ3e",
  "key5": "QU65bzoW7rzho79hTdzNpSX9SMaScxKGZbrpBCrkmxSwysUbCnED2HnR1ptzxqjQitqJBVCsg1gHVtr794qaMYY",
  "key6": "35TxWHLh3Gj8HuMH6RxJBjQeS8n7Ccm2aGhjdAi79S2v4Mvq27xhEzV2ETB3GK6ifwKE7RY7immkv3QnyJVS1UHv",
  "key7": "3Sd6VPLLGZF8n1UFnNY1GsntDfzkSpiaEJVhsWZ6xzSWY9wgMWta6TS2W2kyjohyWneEpbEdPyba3i1bEGS471BQ",
  "key8": "4UBtjNYM2WBD91CFsBwg2tKkTaXG24NYqnur8dSdAmyuGNpWEvUT2CBG5Pzn6eneCq4i3GWLHd2FVKgbzgC4vhUP",
  "key9": "3E3Wv2NkmWkAj5QGsYRG2ampRhsVejY54dLpN42hEmJE5ipMpDQteiKjgFn8E24s9xUPR4nUXm1nsedgTe4qW3Zh",
  "key10": "35HkvB2Eu8NP7dBpG5uNRrJaWN5mkUBtuswtH8pqfQMDyPxP4HNTjAbth61VnUUQ9UP9QFbmKtuJr6JSioJTo7zJ",
  "key11": "53uK47YVG1imzQyRrPUh7B4HJYR2XZeafW2awe1ssEPqzjniUkKnjDtBkodcicSsJMBSX1tZLd1mJuQRGbfXVD37",
  "key12": "3vMBKtp5jsm9PUGkeLHFoxybzoMZW1sVXnFSGXraSPq5ABxjA2Sm38XyXCAAcE5yo8ndEeDp84L5y8MzuATEJdT8",
  "key13": "4jVvyPFHswacBM1Zo4QYpbQGcSuuiibNbfK1xMu6uqjigRay3N6Zs74nD1jDPPpxAzci9uFbDkM2Kp9guGRM8NP8",
  "key14": "5atFegJKNGqH2VKXXrcj2N5AEttshtAL6EqEBNg5b9fjVeM9TtE369NNTWBnWYfaQfNaUXSScU6E6HjWZ4V9N8pM",
  "key15": "3MLNQV5scMyjkAbtvLveL65c9jMWuVjk8KEnLXsojuyR955nxA9b7yyWQoqrm1dKtqfnr9QAy5m9JyHPs62qoU5K",
  "key16": "Uv5aNqxCjT9QGYVeL86RggUxg27b9aNuGWtd7sWwB6wDc6Pfv12gocDWJ2NBwPKKpGqYwQH7Y2Z3QWrkAXy4Eju",
  "key17": "2rpmS7jL7uLAvj36jhi9VFguasp3BfQEeu2QBUYVQT7sgPULeZ3hqK5PS84YCrfuUoiQUxe9oyLYNoqQBU2t3Xrn",
  "key18": "5AiS1bp3wMsDk6buTnfD9f4JyWoqa2EHpMcGBuLDtQhse1DLD8CYxPngZCwRWYMd3zWKZhA4BUZ5Co8kHkUfT6yY",
  "key19": "4XFF9Gs87nvPJa2fNd2Ar7bzFtHWJwqDJ1ThDASSkpH7x6AST1QxkVxrmo9yAyXoyiWGp4NXFR1kVNyMoFdxYfbi",
  "key20": "REmYUt86Uf2sUGSDqYiXcucBHu3hshhaJaQSGBnpenBUPDqFqDuwFFLxTKqTUUZruMYtLsroJDExsMqDmUcsauC",
  "key21": "3vRcM3GQpdurdzKcaVYTEvwGWHxU8vVPvpLZosacPxr7d1g5bkHD9an2GCeeypesy5Gp1jfG9vFBT4pF4MmVD9tN",
  "key22": "ThZaDM1SRzf8tWzJoGLsaesyVCZtnPcFpRgvusaa7wETdhf6s6XrEjp8KgV4x2zwKw9kcH6tTSoVezZC4Z5W9S5",
  "key23": "8PD94dG9hoSnTA7SqmrcbJRNGnj4CBeWusQA9N1nfjcx2vQyHsK3jsDeumoDJN4EpzHF1VvA2p6T7wceaFAFhLA",
  "key24": "3dGkvCMK9cTTm2Y9UkixTU5hTrhWm7MvjAuTf2jSPdpQ9BXUtL4TKUeezgCrpDB7rsnRbPKMEfsEBoK45CzWyPj4",
  "key25": "nXLeBHhDfLdxLwZQvMrZ6kgmvdadFvhpTVrDHpSYMbkFzYZ8qNBmjogwkD1bTYB3GJVBJCEkGDDnGyxxbJonvjX",
  "key26": "2T4kjJPp3CCerNKV2BxjpBUqdS8h1x8CfeAnBN5CFNgiNtR7Qsv2yXPbYbLXk5KaVk87ParEZrdSyxPPVAXoYyuD",
  "key27": "3DKWdfbrgBytK8aHGRmTyMtoHCySA93XiUxhPw6D5JuDs7aHAPHTaddNAnS2FLyJwxmWVwXCQoYyhZuZRuRr5BXG",
  "key28": "2V7xPerPrdMUE41odavotTExFpxnmCxMCpP1CXm3he7uArok3tqpiRyFmvftstp5YW3Kyc18bxRBVc2NB3YFqWBD",
  "key29": "3pcYbayZgyN9zWNLdkP7VNUoF64qRzuUL8k9j3ap8b7vZWqSR1132NSa1wd4cnYAuQ9DyywLghhMSaTHN19nABKx",
  "key30": "qRUHaUsvJjXjzPaUrvFopcrH8BJDaiHckphspPnGYZNq4qSwWxHq9ugYm85Lqbam3t3Yrq9rPPzvcV3HT91MnjY",
  "key31": "213KFULbyhtUSErHYHSWEFvQzptjByoNApq8N88NQ8qBeSe6KkLGR8YRzR8ZR4ce9taJFNrJfHyz5puHdWxwcWDm",
  "key32": "379stmJ5Pgdpo5ntonzNZWif25rDr2yvz7LgKpBTRPypG58dXSvtiNYG1jkLimKq7xLAWHMm8qJJXRgtAfQiFJ9v",
  "key33": "34kaF5brpcRnjchDVDC1hvhX45n8wsLGfLPx2RMJ5owrNexkTLDcApafAYHWyUhwo2AnP7eZ1fE5CTTtw8dmiqqL",
  "key34": "2ca3TYesQjGeMsLs3q5owSLkBmhqsCvVmXbyQAC6J89qrRFY1VTcMk3th2n4g3KYQNdS5R4A7b36J9uU1ihVr423",
  "key35": "5s7ncLnbCwM5RznG98onHZHMnb8zCLP1LvFchrPCMUkWL54FBnAGe9CqYq3ZR9jYyTxUf812NKMbtrbZGVWBKSr",
  "key36": "2Rhqjsjrm8STLfZowH3sqPWBJYmURhjBnmn9TqRGmQ9sj8JZJgfiokUQMr6ppVUBrCxbTESGLLiwXu9dTi7dvdHR",
  "key37": "2qJmC1wvQAfj7seufgTYfsr1TFVSXC88gzs5FsNQDQLU5sDZXHN4t7WcjR1qmQ6pfoCFDcTv31CBUuTRe2UubQAw",
  "key38": "2fjGc4Ko9xKMKqRU2DhTkrnKDuo9kp4dXhvk9hdBTax6UN6ixXpqyEfykmjdV4veY64KwVRRqwBwvy9GJByvbPah",
  "key39": "57BXxGmVHpy64DC4zmJHnCRAt462wsgwM5Gd1PvxB295AH6gkE3t2E75ujVGBEZnxVLGB7EPaESUdRb9ne8MuHBe",
  "key40": "5v5dibwcd9Ej5NNXfFgGk4opSMFXH27D7XZoprBcJAN8h85PYnqf4pVpAHdQCsTwTXQC124PRg7AAm3HwLT6LFMQ",
  "key41": "5QsVuvLcAgAabvjeW9bgVXnHoBeAMixH2bNHBd33s9FVMnAyfFwTBnDoBnFDVc3cs3kPNh91S3MHUYi8b8gDF5u4",
  "key42": "264PGtCmRPGM18kYg3PLZPjXHhf7XNYv6k3uMcZYv2t6NLoNzL5h5FdWCMNfwSM8i8q2XtJG6uBMByY44w8C2hYw",
  "key43": "4XK2aAApVCDp69YqNQLDCt8NUuYPpwBpCPvDC4SytbfUWJUnUZATvLcBWhEQXCzDZqMqvYgT9RGq44Q7s6C47KG9",
  "key44": "5AmsrniqVhtifxuXV9VoGEn2AVj3fxjFvY67ycfEm8oyfim6UW8RYj14uQjx74b3sfgeb6aHQbNQmisJZpVzdHgB",
  "key45": "2VgSmUJPcbkPQ78TaFuR1QUCg9dMvuJPAkmty79r2gLDwDrWUA3pnMtdVSGHeJaFM3s4gDQyH1DAcTkxxd1Euxdf",
  "key46": "5CKFttTdA6KrDS6zqKN8X1biLW2q8hME26WizmvTemugeGAEPK41nsEqJyGbP5RhfKVmmwKsx8nAz8XhUGBzo7oy",
  "key47": "666PKsKAK5Q51q6E8oarJDLUYJfj1iy91ZwJfXwDJCQsvBanDhpxKbtEVSkAYUL2SPKLDG4zUJUCxBMUdQoCWNNf",
  "key48": "57KxDv9WM9h2uko58edHPZnAfUdpN62r2bzA8zVvsJm75dSdN8NjYHxKcik79ZMyNBaPji5ZXGA98e4bqjQ8733e",
  "key49": "CBe8YUYuGPnEwADoUNKYeMznEP86XkjWu9UpGsEwS31ELG1cfaZgtqNoteYbyQVggubutGV9xK1pTU8ugxtkN6V"
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
