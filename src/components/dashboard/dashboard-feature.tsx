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
    "21TX94DmNoWU3uvTEC1WHS2vb1uV8tutGe2HCggdWJURhe6JPFgiVXTP86w8QSUAWrsFAMEGp88zV1LXR1YVRoCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmRHmp9gJuZAqvWdXyzwrgyedeJFMZ5Kh4oHLVNdNYw4TXLkX6rx1LqahvLBgse5HxEMvvwEb438Uz6Vu15qPFJ",
  "key1": "5176oiErkPBwWDXxsMZLMiicSQUV1mQ7vnujh9bVSwT1SJ9xi4WSL6d9ibUgnMDmhKnaYuWmwAPffAaCGhB8c2QT",
  "key2": "X98KdZd2amDWX2CrF83mfmGY1icAx5FdSzwdY53x6fJZnyuf3RT77VAG5jBRCBEbrWQQ1TPmiDxGx42RKmjHQsx",
  "key3": "3SpjXbDcTXxhgj33495QcLRihVW7LHwcbaRXyAqWXDN1UqLJLMMKjHKtLy27yti3yqsptgzPddEndxQSvF7tphrW",
  "key4": "JipicE9abNapzSYdCRsVcha6qJsP7peFXqkFR4V2RwVEWnMSNnjZZLTSdZzBs5Tb5xoXx3meyA2Lp613cDGDPus",
  "key5": "3WGAVrRFGt8YfQrGJorGB9j1e6HJt47aR55rL3H1EJ3wRsJPwXrnwwooCqkp4TNudLEFpY5yLYdiZ9tc5zzMY5HM",
  "key6": "4BwGngmAdLWodqFoKtGz3VquDib2YWmZesVUw3TUuQEhSdqn8jFSofzk4cVYwUhDQrWKAPZjB9zp4DQ47dJrRKJG",
  "key7": "3kR8q1RtBBWRBih15rxCy4RTmM74D43H2evSkYiF9DFWX5GeeJZUxDMbbRBhob7UaMYQJP2Z26wJFeWRhFqmKJQz",
  "key8": "4b7B3yA3Xc3yiqyp6yoPJ39RiKDVcfWASXJPd5dcL9QqKwiyUgAsNcd4fRZTsmC36gUQaBPL3nKHfjGgTH3X4QSF",
  "key9": "3Ta73iD8CZMeHajkFPnepbQDx3Gq6PSeGPRcouHjxRBg6czxdaDmifPVwdJ1Wu69EZwQn62wRJJaok1xTruHsDTE",
  "key10": "4TPyhyceocQo6qKmbNmJKGxHRfKYFXyBCCHSWQoHceGBFJrdUKi8nVd1kqpnRAMPYKnTkYRN3mseC1AVjZXhShv9",
  "key11": "3452FfwPdSTNHYRUUh5C5dM7xR2eukST3SLfWikujLDReFpnR9irs92VYch9hDBTWwFPpFxNQy5b83UfpkfQ3bKn",
  "key12": "26rVcem3xYn9va65Mbc8uARJkwVicjbdiY3o8h1cnYueah5qcE6LtraWbP2MVcL5qizsZkg7nzy3fKcLu7nJcrZB",
  "key13": "3NRQK3irQAGTDi3uVdM3NugmKNYEx8cQUbdfLwBgKW5vnG4kz34NH71t9iXgSvp2z8iuNnBvqJsKoAjMzKB51Vq2",
  "key14": "5KnfoPtEaqKkDMccCk3CgnmCtSSfpWWm5b5GUdo1EMpAUu1XnyNMCuqJfNJ8Diy6e6CZqKy4Z4ChptqX3jf9JXhY",
  "key15": "14Ag4qyjkQjGyJqZ2NvWi3fX54v7eaSqidami2fuAw6jEboTu9vXRxahtSc8MXHxuqn68whVZc3TMvXDeK6AUBJ",
  "key16": "2kmVACCyeG9Licak8qLN94QtphCFh8pqVUR2ktcB1kjDZb5eC7VvEgqbyMKyiCTtXk9cWMH3rbCa7QgRiwyEMv5n",
  "key17": "41VBom3hJMCy3hfxQvRKNPYs7AaV2G1rR1UrEVo93jTXCYBDfJW4Ek2GEuGV5qNjWrfLfDQH7aZhGZC9mVbrQwL3",
  "key18": "3noXHVfU4a2czJf8UuxL9q447KML3UEUc168FZh9NmTA7RrmUGx7StAgz44wjo5vS3xzNo1ZZ3AXhD5GrdJg6MTG",
  "key19": "2KwSqAKNETrKMvfbfpEs322baNXKMabdWHHbo5jwoK9YqsEzuuW7bVvCTc9haMJ5FHWrMZpGG32rPFb22EwtV6aK",
  "key20": "28hGvbCtHCZXEpgECgiJoCHh7ABVAG1AJVe7Jzj3P5FQFwU6ZwVuifknN7QjmMYF2pzqrfMjCsKubRaWZ7m6iCHf",
  "key21": "2C6K4mMvEhu5q715VoAq9cQ8rn4Mj639cJQKkpUQPjTdC9Lm8tBmdHEsT8vUvPU6NAHwhCKY6XDPLM3T4CNon85t",
  "key22": "3C3EPj9jSB43fQhjXQKuWnmp59w4fz6X1jrz1Ghxe4dyoqF3cz1tPfMrAQaYads3MSxPWoztRAz1AsmueQ5CZZxj",
  "key23": "4oi8BmkiNyoKYAUDhUGi22ybNFBWiDzJpX7XDjs83w4SzBqGxgUsUBuwV9ZH38SwTFghDvusMhU58mL6adVhNzWa",
  "key24": "Upj2R2C2AumTrt8jHEz3yfp1ksjk6Rukrtpwr3xanH1yyUPzDUg13qEoQUdqbu5uy9nvqXbiG5qE4w4YpULggXG",
  "key25": "LmT2D76eYSK6HZvZwSVavgSWNfpeWwfBa74VvqNqC7zp7G2YhyXYZiUwUxjAb4RS2THKzkCi9zVaDGYoW6Zxivj",
  "key26": "2or3WT6b3y6DM4KkcS533ZZyvd7zJ9TMqdCzUZpTMGh6mFigDgdgekuUwe9fmCzCtPvaDqPPapgsY6sLbP78bi48",
  "key27": "GvQAbtLng61Jqbpsqm2zbqYQUXKG6Zk7QrZjrYFz2wyTnwxhEzdGYhD1cdyquu6q475Wpm1GCKCZjE2SF6UsGuY",
  "key28": "2Dduog48W9dJ9Ky6pr9EvPyGYQTgdqsVv1rdU4Y2qBSkqJVHZ4NJkNxqs6uiiczEHFnv4qt9xu5a23ja1q1g2AJw",
  "key29": "3HZPQ48HcZS5xXqVJHwMH6zVM5ZeAKCCHmrz6ALtydVYoEA9HC1wu8tomQiDui5Sd4DLNnDR7m2wgj4728oWMCT3",
  "key30": "5RSaFVJTnMiJCZeQecVibZreKgCigStqnW8yE8RCTYnUNu2RH11XvP6cPQt7v7rR4gcT15gAxHefpnePzNNTjEzU",
  "key31": "2dL69bi5Kmit4paJNFKQCfo3bF1VkZuKnfCNq8LXMNJ9HZhjuSPALWn6JXEAkGJ732ZH1nQnESw6TphT1rr83x92",
  "key32": "2iEGjheX7akUmDAkLTcUKsjeVuFnUE1uwyJHDZqKjUb3PJEggtGXMt2E1Rbb8rsxdoi7MVRsn7RukXrTjsjZCVyY",
  "key33": "5AtqR69gZfwnSWq2VXvYNAeTWfdqwwRM6y66w2EFxjHQo8maFioGeLHhtdyEWe78AYZHZBU5YwhrfVR6AdDmLYxr",
  "key34": "2ujuLWZNLnPbVmttV2ZxCBDeVJHpi283YDobZywN6u9uhMveGCDxdSUHwzNA4jxdwWQGdj8EexEVKDrLaoPeQXRJ",
  "key35": "kWA5Q4xV8UuDZVw2zk141pdrJ3HkKMKJeNYx13yu1PxRWNP6PfnEVNaczn1bmZJT2Zh5P2pc41Sdv8utK6syWyN",
  "key36": "34Z99jCM2ponZgA14eGiFwX9awe8yh2aav3U1GjnWNhqTmbhKqq7sZvepHEGJtCvpDXr4m4iFvZtrAvFWmiX7i5R",
  "key37": "4Y2ZHiuaxJVMtGPdEv5Vbr1LaoSQTAw7ERgAdWpayDta5G2bqrVNccSeWdUEfD4FSy8aNZyg6aa6k6hZvBNLctRu"
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
