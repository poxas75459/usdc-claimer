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
    "6f3TqZxXsxyEtJNMS55aLDQfQgVyQft1BTFMMfCGrhB1aVeKNb8xxpmeqh8coJB15nkGbmJExPpCAojZUHpp4ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyBEtQn24sxK1Gw2ob7zrV9sdNPTSgQ4HgfBvi5ZbzTw6y2oJSv4hkB5xLo8bT1tV9HygZDjBPvkcpuVJedYLnQ",
  "key1": "iaQHwNqzhGvz7EqcTnzv8j9jBxH9nX4himaceyHfZ33M1jquNvz9t93hSXLjeiH2JABJcxqF7icHGALxP8jN68o",
  "key2": "ULQXTxb93Hx2X1mKvZcnqSAkC9S56GU6rb1CimGTvsJSdaQi5gDNu6vRYs5WiXNVsUxqciFmGmzuihV9cHyW2MD",
  "key3": "3q4HMNTcRtEXDwKupXLDb8NxkVnzYAsGYHXo2dBe5boX1WXjNdCtuQwiy7HpRaHQGjXFGGCkSc7kWoGTGkm1bzy1",
  "key4": "43wqsFQfbxnkiReJNCYrUu8STVzH8A8Cyfrpm88hvBeANB872eaxeW9jBwuUgAiYQmCJ5zS1Cdt7NkzdVzYpaddt",
  "key5": "d32jMT37ajmsdRVCZ2RS2JtXqduZdMdGcDycw7nWWUmx83bcHz25Ftmisc8VsiBstd9S9P95d8XMc9DtQXoR4NR",
  "key6": "3LZboBcQzvqsLb91UCimaZ37fuDoWRSVc4qovN2gEXcXuwhCfU6Vdj2S3gkJh2kmmJtvqcNQBjbHMVvJpFEeHVdt",
  "key7": "4XrxYYgNGVrD52fW3TSPUBCJgyanWMtaQiXGZXEswAQRw4HYX8v6RFeo7hz6WKtUYYXNtKwdg9NqYX2ECGvwbqca",
  "key8": "65GfHRppCQY2TyX934g76h7wkBnjFbTMMa8RdSsmLrzqjrBSCsN378MRBjEPTECzkadEtPx2ShRcSmEuyqzqqWtX",
  "key9": "5WRTmYW1zXJzysSzVvNAjQnUbQUtendYtJ1c6A9nr27wnBcT6YjpDfUCVnc8au39dz32VKuEvnJirKGapvGjnhUa",
  "key10": "5uyfRXwRm6r7SGDLRnSeEBkxVnrnEDCqnBcd49AwPaaSspH3JsP9ncV5iy3ojvNoYF6yuGB3mr1izXv97dpFV7Yq",
  "key11": "543moWw2M5U8px5XtHJm1GwnVCMVh9zcHZBAMWViYRaDuX662DsJCVVHunyHQ6SojzgZ5BdSdCrQpTQWHvUXbbMM",
  "key12": "4LK2oHqBCxGzztLjmrDeSW6spKqgTMPYeD3kM2t7PJEeZucU4AyArvRaU5tyHnBJEQMC59eHFKXnyzuBddMKXpqX",
  "key13": "55RsUpnvEFvGCRdFKav4qfLCSaNhNYvg8APuiet4HJKXs7hS4Maf2S7n97JMtFXYo45n5ciFcv4gT3yCRrtgN2sG",
  "key14": "2gjLxymcy1pUFZgGxxuQ3ekdY2HKpLeRBgJ3DrKYg81Be8mbq6nMvU5odA6K2da7e4K3RRf49D2qfRf4NCJA7J9L",
  "key15": "2aw1DkooBh6rJN7B8YsL8noJoHkmF7HtszAv1C7NkVDnPGgsa7TsnCqV3pZYmbNpTQvh7VRV8LdXpUZE3tcqUAjG",
  "key16": "2xpofkFERNbCqzZhogKYT7HSwJUo2ji57nhM3HSZRs6n57GLGQ3hqNNUpNHjkT6Fk95MBGjcy4EtyWMcWr2qucQa",
  "key17": "WpM4qqhZ23phzSRVSvLxehZMmEBN8Prr5hbXRAff7cihJAnyv2HBAydrHJi6n1ykcLhUPmJAY91ar4zXWTPjuRW",
  "key18": "2NngZWQKRgr9pBbkhLuvKZ9N4J8R3MiF115GWPy56gq2it8P9GqjqPJVmtP9aQdFGzsVZHCBaWRELBq8r2qNm44f",
  "key19": "3ptQZGpKQK8DVEiTDve5zBtXVRQD6gVuM9P1y7cCEBRbPJZ2Y2MMJ8MDBSRTwDfFysBRepZaTanvU8e4jM3jTjiv",
  "key20": "23uADJMk2z8W6iTzu7fWfrRRGSRxfnDzXqRuLWkuxt31VLaVwVSTV7WGFUwZNyYXcGd1v7DZAwSdT6HQxrPBpcF5",
  "key21": "52fdo49S51DjJFsGHJ7EFo9j7w1C1nd9KcjJR47NXs5UVHS6SvTxgP7uHus1ASaKEUtiAq5f316oQtuzDKYyzFTx",
  "key22": "7CqdbZeKMziRUwvWRy515zingfFsYqXDK4sX65rBFXuJiCuE4PAAGVtSHHpGWw4ZyszSovtUocUqv2kD6S5nTxs",
  "key23": "5pRnrUAekqXxqcibtBqoEimYwLfxqLgn14xsVgLrfJg1cbMZxQrGCWu4qdUCLTD1bqA5sHMRcH49CBULH9tdTzYR",
  "key24": "2gW6ND2GLW72muEeDdqRS5xK5ZEkGPtKB1ezBaMpQkCttTCc7tU9mMWRmifzMFmGUjazE2wWcCkcS3CgQzdeLDTS",
  "key25": "245uBi5rViJC45hKqMALH1xaWVtRgRS1FU1Bxi3VBGxmobwNYxn58zs4dUcP1yNRmoJXSpUs8nGG1JJ6J4nNuCMa",
  "key26": "2X7rYB7WZrcTsZ9AjCQs9hYvmUB5oorR4ErCXp75UavF2a8TnoS6kqg2wPVpFGh9Ko5Bp5rTgx4yRyGNXRV89DQ",
  "key27": "2yGho9mTvgDbzBS8cKjKZEwAcRvsbnuj8ziXW9w2qTNxXJc6UsX63SSyJstRa4nsyTQaeLKDBYbfqQqPAhRF5GZ1",
  "key28": "4tzhu59BSePi7chD5YPzcuqzoY9uHyQFGDQCG7KGKFn1T8WSjzPK8tM2mZvo7nL8KZcKzK5cLEQuQHiwiweKPTGU",
  "key29": "3MDyGLtXLH67cDzVYcHQKHd6youGr9xuDc2ckhxkuVRtrZCyvQsZHmGpqHsye7hVbXqUKdyur25vDa1NdvLebFNa",
  "key30": "3x1emz4qiSRo8R9mVhRoDXJJZGAUPReoL7CQdKFAHHEU3QfPMqk7ke4uEnetaEZd4zVvehePr8pHuh157feAiyLN",
  "key31": "4PGs6hNxgj9xZ4z67kwKPeRinndc7hDXPhGYmeU7Aa476Lit1S2c8JAkwcciFpVW5aTVJXdtYow8SFqD8voNDzNQ",
  "key32": "2oAeRCVFrMHqmy8EfYmT92mXfvTNAVG5xVTSbRsZjy89qGFvWcyTVnmCobWBY7fav3ZPW3ZzbsRYadL85QT2FVhU",
  "key33": "3r1uQBLgjayrXwkJ8VsEVoZJ5qaJ3KxUG4sQ7vi2gdxZsXT7rJ9Ae5XVN4Eu2KqaF9A8uFN41EpMG6PW5zYbnvv3",
  "key34": "2tXmH7MffYb7WFi4xcRUNHPKKmh29joET9VrzyDD2PvyH5sKevqi1MMCxYvFWr6aMJSe4LVAKnerBG1Y3hWbLHAy",
  "key35": "s2bBSCYqH7ZiLcj8AJP6WsDevBBHSMiBiV9nyAoWxZPjH76eUDpVR8z9ungVPKYCtsN3bqf4zdqBQLcDd7iuRkF",
  "key36": "4UG5DvASQpH3CcCzM2tSc8n4M52CUMsYHfGXmt81ayf1MnHZVNoTq847zEcPbBjod2LqxATsdDcoLCRmjudGCgGU",
  "key37": "3h36dP84ZTaWDGwn2dbW495uG7UZSesNPiQFiF2JXYaQnac7diRTQiRXNNs3Pi4qPLeNu6ibKEG9VLtc69yQ5V99",
  "key38": "5V18t4GdmZwYkwcFFd5kbHEyQgWxxLTYCwgan89Uq64SDGa9rwy7jefCBpHe5nzJSsMA3kNag7K74mj99MU2BG64",
  "key39": "4QH8yhQNXSeHwVHZANKL7RRbvwUV3cFPPiTCXwR4A2ndvCWqg9JxhJufvQLZs3M1QgUKx8YPR4QdayV52dY68J6B",
  "key40": "5PMtxxQKzKceEexutyR5gaEWhyTana5nNREy4mHFDqkSTJX1tr3ibUu8AA4Ak6dH4swQAEpHz7XH37u3ND9hDhED",
  "key41": "3PkQhY7K9vFJsSdfuSmBN2bf9d7pQrGUqGqn5yUhVPEr7p5wme72SifPr8rt64Xxu9y7eSYuhT7HW61n8Ydi3iB7",
  "key42": "2CPyA9pCp4iJ6mrLZ2MNZBAxGT9Bc1drhmi2FHSr4RemBcrAbxbn4cQTvZ3AgwUzprXfnHUXzsPy6KnJVWo5EHkV",
  "key43": "2emp3iXkK1ULk1opTp7JwYiC9x5LHDtib8NMQgsvmnbTa3Jxu8Zom7tQLyjcgH6GSAwXGTy7C8L5yxAtp3KbycK7",
  "key44": "4HcYANHjureqjZCGn5DGCEnyxSvsCsKAYVthczRDThhuuJjtUyyNBxvWLMRv6TRo8gFGqWbfrrfpNWa8TRHenTGa",
  "key45": "1vrBy7nMjJNWCnVd32mvTPqGYAsJrJGTSjT28cLoDVD2H9WTAX3Y2JmKog5jT3Zcqa9bYz24r1GXLxcYmGpDUyq",
  "key46": "qtpaDWK9QTJ7VYjTZ6PmYtHv3QebMJRQ15VavWPKmgZq23rr9Sj1jwRXMW8qxgitzFaJUZjyWiuSa3RaqdMrZyz",
  "key47": "5Mx2CG7S6QGRTRSszt65cbTABWJDevyrarZqTASPWyvSUW6oynLmrBUsaBS9kC5CnEx1Ej8NZJFLZPXzkyNB5LGP",
  "key48": "2Epd6gG8yUTHQ58Kc6TEjw8vRpe7PuUE2FwY33gZANJV2GLT1m9TwXdVRAfeps5QBr8yobnd4QdiyCz9Gt1MRWvx"
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
