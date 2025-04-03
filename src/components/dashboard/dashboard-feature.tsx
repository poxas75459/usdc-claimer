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
    "3oqv8qtJSYQaMS9Qz1rbZPh1B47DgypL3YZ6GsdQLTfSdoe5JPDvXnNtFDxxUwUiuSTKs7KYg7tKBPU4SLUvBBZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1jYdNfPSV9ByDMXAKC3zeoaZnXktmzSqchAV6nWJgeYTehjwLENZ2Axf5dMxixjEBwJsdgTEx5uyRj6Qx9suDE",
  "key1": "Qx7Ptq8v7teYyTktLnUE3441jiQjHGDFZ16dwKYmERfcPnS4HDkfMTVw22sp7ZgNwMKb4ZeAq2TdSrkAucAbnce",
  "key2": "3cTbwGLTWccpbcVfB4wWHDREh2yp6Ufz9NbuWWjxQjJCj6TcwARSUdtUWjHSu5G36jqdAPAs8g8vD9LuGKVyS3gV",
  "key3": "2Nwh1WBp3cacs1pqdYBAW848Cp1XyvXCVs4c2FxD9KwACeHP2DpZyti1cJTsV2paDCVoqZpxgjPhAFDhA3bdKBLU",
  "key4": "UwCSsmg8JYaoeUSZ5cnsPBnDKu8xKYweRc4dx78mDPoFBj16w8mYg33AfQx4D6tNFRUiB3SwS3TYwnZE8VpbL3Z",
  "key5": "2offXqppdNzL39YypTxyEQwxSo7ZE7QdfTR5o7n21neeD3s99pDnX6LzAn9yRPzAGdujm92AUUWBuS4Vu9N9Z88d",
  "key6": "3vJM8h5RrvcCXT5CpYrmLFa8ohwLYrtyYbCNgK7dsi45VVGTDZ88cpm91AfKauMkqS6WzACHyohThyDrZAZ62iT5",
  "key7": "DMSR2aTXHbuusmMQvZqrzLw77ZBCg8w2q9FoRjEdjXMPsUmqmchCcdyTNdWZfXyGxcuzSds2ynFvB4DF1BUqr4d",
  "key8": "ieZdFHuEPipLRfrG2xp5agQFpD4j5ybpGm5xTQb445BMium49RHV7JvofBuTUs6VW92d1Gzc25anRwT4wQZYGcU",
  "key9": "3Gi1Jy5U2yMmhALeVJ57rXBwwQdkRaBRTTAoReh4tAxS2JweWbZTmQjhUiwcZ2kGHoHZQ1e5S3FTheefVWZMDtBd",
  "key10": "taPfN4VXtfftQwKDqda341XCbiK8gFiNWoGViSG5NmT87xwogJ7bcGqDGLpBKsX2kjB7eRZXsEZWv9wpA27yq2a",
  "key11": "4tZY4omdhsDhSEQPaf5qUx5BLjNvTRfoA2pAX2efDm4XRyf5zhaEZwtrPHTpDqikERs6taq2GijxNmruuT8BZvTh",
  "key12": "3BCvS4tuxDuweK6FWHB54QtTNQGghdr5yp2XFWbu7t4hzoNwHdCsE267kQpKhBhgXoMTovbwL2zV4nNmk8r2z7hc",
  "key13": "A93Ka8JzFACm8PXjT2ue7tfmtw7VdMT6kXkmKHUEEn54tRCWtuGwsUhCfUo38yBxsPrwiJN1wJGKe3wyMCeMp5f",
  "key14": "5jJ8Xyw1Y1sEgraNt7K8st16C6KwT8BSPFJswRFX9WVXbrMtn3fFFms6J87t8DoePxhSbhTG4t1qfW2qkSRLfdBL",
  "key15": "2XLtzXtitEFLovw6Yvc8K1X3zSYhRRFcrrLZCD2BsQsuZByayrCtqz9taShafaq8E8gQ2xQ9CfvWDNdRtFs8cjd9",
  "key16": "3mEP89u2KA6gNwRDPv2VyH9a2zGgGVwnc6cxD5Lk6xJnFHJhoBpjm6cWX19Fkh9sHU1yXxi4q6XWrEk5u6UhaxX1",
  "key17": "2DMJEDYk2TVq421JAE9QfUCMnc3CtuZm4qBbUgvfawQcW3BSFc6myB6DXqcJB9VA1BTxdwuYsHFq66tgMRnxiq9K",
  "key18": "cScu1q6QdebDpx1wStm85TSuzc8bzqZWCRTEvhBoPAm7b9qDoFn7cJmogUp4EHiEaxJVPayYopa2C6Bs4VGgpsM",
  "key19": "3577WgpKqpfNKWpvACHuBqbWZFeHJGYyVacy8BvAQA4f1cJz6Umwz8WrcN1ac6joX9vA17uX7928JC1tEHamQ7kB",
  "key20": "4xi5GtbFwPLFT8wRj9dE8D7tsbw7HYGKKFyTviFJpkVJDEHSoMB6taSp4qkRuMqVAwgH27rpgE2yUu9tMJzfvjtv",
  "key21": "79fVqKncz7o7Zc8TAdspzmvH1tBgexnXaiEiwZ3tBV6WoVS8BddM7vUZmdBXNqvcCAnfqdmuxm8gzsBDsjRaQoj",
  "key22": "K2F5rg1LSUnC9pEAGwc8MmBFo4nbPu6ck5jSGxWUn4WY8FEWwjw5XNEr9gkG3dxEQ6zZ5ByTNFgDtxZbmrY7g8a",
  "key23": "2uWPu2WURKdKX1tPiuJKYSHidXvVyn4TKmg9UPRtSV3bYdycHdZ6YxktPiS4rrVNWeFPkWTkuw5WzJV2Cb8siyF9",
  "key24": "3UWMCcxiXL6kQMgGrA6mSUDoHtXuugHk3eB7gVq8t64AqTC9UhobacQdddJsYnQmzqw5fi8hLn2GGCRzAVoySNjX",
  "key25": "53pNFkq68DWBrcJeYg1uMiSgh8o6kjvHMZSgsVTpoat5SWtUiiarBjCbojd9eVcCVNsqvh88fQ34i2it4seZczSP",
  "key26": "4NUcdLkcjbLtiz7mSqWyZxJH2vo8buZSsvTCy4XNQDjBkbaq8Ubpj1tRdwKxxmBdy8HRe6NXhUupt9fusJkTvZ7y",
  "key27": "38jAKw8Zz6YUgrfAJr2u8CzgUBKz1j3j9tPpr4jz6qMctZJyjnv9doDpsoQ2gqyEqfNcqDwS4yqtMHW8gSkYLmr",
  "key28": "2zbhcbktrfo7pFUku5o4JvZ3eE8FHyQH38M9R12V55LW3zCqQGPy6GmpSy5pfJJPWmH9wmhvUhKawFiDJBPFtvVR",
  "key29": "vSPQ1jpPE42voFiPsai9RLJ7SW8F31oBe6Nvy6vZJad1MCuCtKHRoN1MGmcm7dZjtEqghyv8JRM76w6jHxGip9e",
  "key30": "kYwKKCMfwKWPgLjfF4y4ZxGcArYyqmcU2bFDt2EbdDBdmTeiQWShfL9eHGcCFJmxTqs41j1wAFAQ6FHYcS1AToF",
  "key31": "5pjsd9wnxRYmLRaQqPCVEG6t9c28tcDT5ByANapyrmDHecZA79N6bkGhXapMHfFVjS6qV8YXpq2TBPKsHuuoRpwp",
  "key32": "3Yd4M92EgmaeTNUwHEQzQC4L6vw8ZaHdkvjEKhjWLWohxFtcwdQKkkHNsWv5E4ELp1AUeWqb45G4RjKRLTjhJ527",
  "key33": "PMf3JDGMLhdqBBKXK6DpXi8KexSnvGL5XoHj16YkigAZNtxfYMWGY8d1YWMrVuCaiTGQUotxiCojR9AoYdZdbSP",
  "key34": "nWWkeRmu8cxcvugNC9fg6SVHtN5G1XaQmv1UCQMbD7drL98PxqTiMTvZ24PwRxSk2EN2Rd2K7pZjkFJniFby6HD",
  "key35": "46A7VSojcvB2waLPdYgpaD6qjo6rkzqiaQnVrHVnE1j4PtZEuX3pVN347vJBGFegYf9iSj8XBQwyaYdDs7YobXem",
  "key36": "31wnwZugD9wGBXqinWnCgmnsza3dD3Hn7RcEewN6DTq38bmYTR3hVL38t35E1DS5mZeJ23g82YLJEZqzta4ygBvs",
  "key37": "43oxJt5tbrHieJnzSo3ookvXfSuewGFPy64TW6uHNbMZZnZSNGxp8LB5HZqzJfrtYegLWSzdoyWdaCNoahuuWstV",
  "key38": "Gtepo84CrFV2cLnzmaPFGf3uY9HFt7DNkmChQnaSUEFMj4heVKJmjApKSveijbQQ16KDdT2kVeca2YZGYeTWYe9",
  "key39": "4bxSsYMaKc15F4H7Cn3hftSQyHWr68y3mrgRMyvPS26HjwyXd4sGqiV2ZqyKo8eToZoc8xz8gHpQSbKoJv73CVif",
  "key40": "3pGV3QDLCisZdZsGFqz3HppHJrS2cPqbZiVPun3fv2EWFpSJhr1JaYhGt5ww9yrtth4HYfJ4SivhzoUTDM76x5D5",
  "key41": "4ZCExc8K8ViGrAXCTYAN9GpeAreP1WsHg4HECuGrAUvRRtVNaCodVojdwNXSBYybrvNdg6mh51DQvVDPefZ1dSpD",
  "key42": "36aiSkqWoMz5HRt7j7Z1QPTEqkhgDqRVYGpWUGnGsJJUbrmxW2BfRCDpEeDpTQckxNdwmhCt8H8rvmAxWHAXWXnE",
  "key43": "FS9rjaDshiX7dauTzgAxZiEXCpYw2JcPcrbWfBCT1CXpwgXdgmh91WiALGGGTFhS6YjixpjscKfLMbEpvwXSi1d",
  "key44": "pcoYNoBq1DpGkK2WJkJewUYuyKG1r9Q4YGoL3Sr54EwxPzgdbUVgBVsuNeKCmidqn6DoQrrdMXPHcxDq8MG171P",
  "key45": "4mRKtFBNZRhqH8N8QkoydPsWvyYN9vK63cfYP2pYQcWb6gsJunqxwkGAboExTVjdkd1FP3yCWQoAR3hZGmowfCwK",
  "key46": "2owPtdBVTpJKoDmMfVxUbg8WoQAuZbTadR64uwSnAzLvgwuyqQ7jcZ2xndBYuytdPKUL3mQ3WhMxGpKgdoJz5KP",
  "key47": "3n7H2FuGLHKYwebdFXsAhp1UijLdQvhogNmsGnbj9RnE11YvFbeZcqGremH17ShfT6j6eyxxWosLAMRYdeiJr9qm",
  "key48": "899TSzEsJfCbMNooV4HDGaiwrd3QqLe4boMVkf7MefHz9LGzakkZHNncvuBy3TaGuqHurfxQR3HjqfqVSmcAQm3",
  "key49": "3bqGG8zjkEYdvmKDGG8PeTrc4X4TkAD8z6GfDAiyfXKT2yJkhUrGqsvrdhD1ymLW8zEes5UWkqfQTYqCqPvPNz67"
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
