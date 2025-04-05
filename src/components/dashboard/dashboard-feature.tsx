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
    "4zATBK4r8LBVm7iqKvzsbA8iTTdGa5UWAzqHD1s1p9UpUtc7YQt9tZhP4rZSg7h6qLBbUQ6UVEM42e5dyASBpcPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nevf54WnFP52K4SZCEx55Wy1h47KHQwDon6oEXbUfa6vs1pDXnzDpZUL4m7BMJpYdx54NmcXTCGR5JjymRunAvP",
  "key1": "4ZxRT9dK4ShqKjHgFMT5CaaRXzERL6tuzWum1cRBVS7FKq5J7281SuQAfQxqV5jif4aKqeeSr6hAg7YuMwTHBz3U",
  "key2": "29s3doTH2r77t96Aovf2GrWrS6QtYTqFcZmqdiavqcjphe5EaU3GaM1VHfeSENiS4H631jbCe3BriYaCa2AxJtJ1",
  "key3": "5zhTtXeoYyTS5fv4X4XiMvoERBnw7yANAsnkVDmEVAtguU5W3jECGR48DS52a9ThMMpTNojL9DKMTVfdiFUCWwLT",
  "key4": "3x9quyePtSE2WBXMWsBpbUkxm5v9KF2xBBG7EQLmtBGjwEkUcAEiZLKKQtsoejB92FX4rKVEfaRMPTt82AmyETRi",
  "key5": "2oC6fPhZSv85w7ZHqFuXRgzwKkAMB3D1h2b7qpmEf6T27B9vXcJcStX6KsQm1JxS3xzZkAkhBZe2jgxtKyumUMKo",
  "key6": "4p72kv8FimKCBcKGx5g3xnA2vHmctKZCDeADtXfCCZdh2Q2kqiKoQZhPbbsY9ispaQV8V63L2w3EGxFWuqLGZNmR",
  "key7": "2jq4ZdFJmKyR7LR6dhX74YA5iBQnVx9tZDhrCeZQakRRscoKwQWv1GfddqC3sibCnHQMHRVagNyBEv73WrP5D85q",
  "key8": "3zYeEgYcLNitEGiCaKkEj8mNymYoax5N4gdqFq3YV5daK6HNN45K2tw8WxXv56JuQBTQLiTeL389UfwABQpbcxxY",
  "key9": "2A1SMsBDto68fnAjkRCfNuBPArXBsasi8X9et6qWxQGKQWZEcFf6wrjVtwRumzCQCQhnYcADq1qU74xiWpqH1M7U",
  "key10": "DS3cVL89DaBrRFwpAegFEEycSBaUMzp6GtghJvx9v5QAkDXiL7atXsYCcSop2eDYA7EgbPyZvYRPXwP9JNRWKcy",
  "key11": "2qbPfh2K1MsNSqFU3aBHzfhvDroUJnVDoz65TySxxFN6HJZtBk5dngta8pbXjj9WUnVr64GthUfRtC2B5hxu3GxE",
  "key12": "2YrSJkt4HdwN6xEMeU5E274hXAZ94SR9GTi8Gh8fnbvdyCeb6QEaNvdFfxqhEgrwHZ3JU9mNLaCFhhLFz5S1YBhq",
  "key13": "4pPhtiqCpo4H24nzcUVJdZkxTZcuhn6NLvPuN87NzBXmraWYqGki85ScodkkA9c2pB4us2LaRqxYwPSay58kqeXA",
  "key14": "52g1XijGLGEiSDdjAJPJkgujyennLjUEX8Dtj4RdMv4cj9AtFumpAv1rMoSVkstLzWajfQWQqUy3J4XGrh1Y5WtP",
  "key15": "2sRTuHFsch13jFrihqNzApAxWCvmmWNZmB75rFkdrbY4t2bpHHJnkJZmryJC3N87CLKSAcVyJhAmiLGmn6ibif6y",
  "key16": "5aydvLKXrgPJPJ8zM1zYLDTxfK1hQioH3wtQ111fsrU8wXgR4oZ4ZhbePCjLxDYQmQrJFY4Ar1ryL1ZrS87vqmFf",
  "key17": "5VQgHcBMNWQ54S18KzJu4PdDiJAoDjc1vfK2gAMctZoNXiYbG4FZ2RHFk65972WVGWxd3HaA7CH2EhtHFxKFsatt",
  "key18": "3EkdDpMCVYnr5zxKRMoKFQfPeryyZZVrLyiZpQktb9kDyztSPGMdHrkt1sQ7BXCbRSEGDdX39PWsmfwhkarnhDtq",
  "key19": "66J1sF5APZCHoi8hHGysGytANvXtmpRkfEMHwWaQWrS5Zdrp3fM98B4cnKL6f2MJADjFPQeXy3VCZw9JR3yLWygu",
  "key20": "P4SVVhwdoHpvBadDqvctiek5qedHZUgrRy4uPvsSiZy4J4etgiehTrYJZR5gWzM35p8vYK1RfKB1cpZcVmGYDhj",
  "key21": "czDtGQEaB79V5Cp4D2ogooCj5oG1CT9FLdvGAqzyXAHt7hs8CJQyZz7tauab14kX76mVSzUWQyDfw1HFpNFLxPW",
  "key22": "3NPUBrXYuVkN2QxC2MiD5qFYXzJeQQNcDjcMav8ouZKhDQCCWLAgTgFXSNiVuGYqR6iTyoiQc9BjUoV3gTsgrxKN",
  "key23": "4CzWQhBacgVSutu6qDXwvV6kWMvD2WC9Q2Q4UP9SafTMFXPFq8QJv9sGR3HWM2sRDMm8YG5pPSdD9XT1v7jQwy9C",
  "key24": "g1WMsQN54fs1motvWAwSQ6Wns2hT41RqnXaypqSxgAGA4xHNVRbEg9uBR5BK89AcFQtZ6Hp51S4VNGvtXvHUJTo",
  "key25": "2fu5889rf8c81uRfYKgzaNefymrhtJS2Mp6rbmCPDAcvLJPduJif41ATLrUTgebzyvcGiCmwGutAax89WUFtR8NG",
  "key26": "h4fPhLA8yGeHCrAmGrmMsTrP86vw9US4DfdyPKPGdguUxU6B5jucHPbx6Hq3eWFCVYecyqj3oRMrtfRnK5g17gM",
  "key27": "QX8d6pJ5f8FNCAhBXax2K7otQa2pJC3EsM2Nn8E69CtSp828HhKJktjybiiwivFca4F6UCP2VPpoQTf1uFBXLLr",
  "key28": "3F9ujsmVbjDqTFHVSZoCf5J1AWid2uFEeH6Kxg7rM3wrvZZUXHrPVBTPu8QGgMXxwr5bNBSTFyt25huNv5cttHaA",
  "key29": "3rbWgEEKc7JyPnionaNkmgRBiEvcu1CDsnUYQrL84LPRWdJyXgvZJexCu8AENFFKZ3yrrP7M1iGHh5YvWunSC6Jq",
  "key30": "2rLQ8EZe9AHAwNmxXrTLHCuTdh6AUq186dp8LvuKbbw4fzrDTwz5wt5s4apcZW9MsRdBnDJd3v7whNXmF8ihSXLF",
  "key31": "3CbTui4CuxgoNKJrakFAeJhaTujMgehwWowSKfmXuzkiXXYTr45SmzXC5vF9LcGZVsMNJireqEq3Ru1CtNC2vCMp",
  "key32": "AfZBFqAa8cXsRJVmuPmmkauUf4Bq7JTHmv2TXgVaaQ5xripfq22XB1AYv5KYPeLUQAHpS6z1m1yzfUHFmAYLhXT",
  "key33": "2eAMNcT5yijBcs2ywDN8vEM7USdDFEuD5WrWnq1CnYq9ahmFQ2wAkFjJFX9Rg1RKZk5wb1eieg84xGiBPBw3qbm3",
  "key34": "25tjmYgXqyT5UasQbdMRBsRFbDgWtnxwyipUmof7yyWdvcy8DcgCcKRkHr1UH5euRyPMupa3ybfyfTYZj2ooqmmv",
  "key35": "4Fnho8BbxKd1DEpirQrcwHfFf3gh4FkQkqRvUSN42kSoWx4yrPaWDVu97vcFvDGDfrCCmb9ZaUrSEMwbhqmTHAy7",
  "key36": "2KBkwNYT1rq68fTSj9hBjiKxe112fdy6MZtZ4Ycj9kmSShcLLB2jnGhHS5WaMjrCpNuiUq6LcGX1uamK6ZqTtNZt",
  "key37": "9biJydEVjqQEmir7Mj41A73YUvTFCeYLLHW7Jb2LNaV8Skd4zCh74pDUQB1ds6uWociHVYPbJWLa6SS7PCgGSC9",
  "key38": "3uukR9cLGxtEraSpzUx2AHaD4UizGaV2eQGJgo67hSmAirYfdqw2hCdkmD6cgjp5o4rvMahjeHxrNc4eaTs8upja",
  "key39": "3ntn454BKhZh77NkdiyEcd5fmcE8uSf1C5HitTXaeLfJXJgG2ScMZ7toTetwcMwNma4bUMkCbd99gkNsj1ASaCv",
  "key40": "2yVEmLGbk3YPymmytXT5srmh6qmc3LD8ExJa1CBkmnjjbF7QsGLEpjgY18WnHtTp369C6FotV2jmuXshpD19NHdw",
  "key41": "94BfRTePtkC6BykJtJyMFhQBZYTHiY5Qakbm9ycg9M78ezgFNHSrXFRJWT8588SBwVGufs9DbawoGU3rzbvAy2o",
  "key42": "5ovfTS6ZMUmMoc4zY1KKp2gUgNFjYfaCbeCCdjaripUD6HSjvJ2fhggE4aDgPW6dyGA5CkANqbrvx52nzcdrSQtR",
  "key43": "4sC9M3KvduEpLoMoBUHft4uQQy3E9MNKsAyVCL7gnzM8LZSNZawajjTJAC8fmej89CiEB8fWx8wa5yKJxn1EqerM",
  "key44": "2JuQfhf9x27rAc81rJTDT3wihnyKBryEfJiFbjSmnZ6U1yzx452WV1yP82GPPbzNsUWMsSy6YTpBHTXWZvfepHez",
  "key45": "2iEq1KBafXtVQ85tsJfbCFkvEnKnsjx6M8oKUasNP4fJULrTN3LoFwi2QMgHZfoJ1MnehSSSLRpHMvj8ijMEQZAa",
  "key46": "3PBLGfS8RLEQkiikc3vwgh9XKY1nMEpb7DMHKhVSS3tYoCn8ZhyJycTZeFDMFbuwSYY5PMejfZSFF3DoX4Vaz33z",
  "key47": "3Y8yJGcjg4m9Q3CTT7AUkH6iZBDeKSi9DLrMEsvNmRrcDKZX64h5XwKDv8ZV7L258dJWVtagRY86mWV4kMXLkS99"
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
