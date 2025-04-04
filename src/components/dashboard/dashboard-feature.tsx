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
    "2bXFDzQzKs5gFbLR1DjxGdtN41wWxj3Jf46wHNJsNuQUPKcDcyVWLdjPFXCbMEZHEFVQeFGWCBFogZ6yK5G5s31d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJqETZwtsai1yXT2QP23Z6nCzHYUTx7FsZE2ruRmYdovpA18xbAZsMagEyJRRKu8SJeYhHdCXfwwbccSYFe25v5",
  "key1": "5jycBegeZnu2GaJNRfz684VTmdBsXZmCac89oYzXyWxzStHp4gvJ9nhres1st7xvGTd6N1WQLzNWdkSCiw1wWdNX",
  "key2": "2NfMW62P9fLXywbD7EMSpsWNaQzF6BnyNRGk8Xu7gRq98ZomYC4G1Z7j12RLXifku8xviYWqnYfY24tib2iKNapt",
  "key3": "3k7HgJXDTxewjqtjHJczpDJifLbmpA27KK4AY9YweVgoxBfpAryfX3qQFnN4C5S9FL93yw3VEgpdVgN2eB5rF8AD",
  "key4": "5cn6ouVT4Ju1YWu6p6uncJXKnvZhCeVPSTjrukYAmWi8nziL23Xubfd1P1r1ySCzHddD7zHD79TEQFC6jhwzZ7pE",
  "key5": "2isaCbP1S8dAeXcuVmvhUGkE6X2skjguMUWBJ9P1a7MWiU8QWatxTd6jghGBoUH9sqwsMwM3a9T3gvchUwqwewV3",
  "key6": "5FHzQkVoztTxJfW7DdhGsrRS1YBkWm3hmybQr6PPn6Tn7SSDSKm7936qt1YBCUqEYNLj22LJxaEhaHbwFu4tSQqq",
  "key7": "3z8Q5A6Xe2daXpicYipqjv3BJhfb2vVUcL2fbg74zEiJeYfLrPcPYWK7xP4pXmdo3edLEEt6nLrFtr2qJpQi4XhG",
  "key8": "3xF4VtMUmF26JSygS2pr1LFfo8vH9uBFTtYCWgMWaMoadXnRRGcu8d9uvUN4pcVSkkT7QCWHRNWDLtcSnUVZ5saY",
  "key9": "51XiqRg9S2ik9hVMZVrepKhyQ14jNfngjtFwYPB6bYCcKek8FhjEwc5J8UkEQgJrHNfkp9XPj7D2neKWbGeWxX5b",
  "key10": "5JPCmXiPpmxjWpLsT8LfFyGmBAocDCdp2tqctzJC3nPnSrNB4uFeiAeUiWMqwZf12G9U7Jwr5dtZdGxN3NeqQv4T",
  "key11": "2hJCMFWzwHrK5SBiSVpsp6gYavhb3P8t4fQRCbr2Nsmw9k55xtvZRFD3ztwqRX9AyYr5foJsyLjMk7F1ePUc4QL5",
  "key12": "5dCcNNKrGdmNbEn18RHz2KrjqouhVKRmQo8KNwq89kDmhaDGi5sAPvCzgUAK1Rwjf6aX8YGHvzYpZJZdkJKHKqhw",
  "key13": "RyDtidC5n4n6tkAraKgfECDMkmNrbUTpVtBenMcPnuxb6LjWjvb71h6MHoLm36K6vwanify14y48JpZJUq7Pxiy",
  "key14": "2dWHTVVZvicsAJD486RmtxYw9L4hGpgv7h1j8oKEEKCqD8rCCD7RQ6eovqnpYrz7QA6KKR6TmvYEJUYSxnfXXbp5",
  "key15": "2qMj13vEQaKaALFHw5AumDtqUgAWuTp8f7HMe8gR8EVk6ucKg2gnqcf545R77Z8vmSSfuPhCSsnTAjxVJbhgt9pb",
  "key16": "31TkbR4JzyihDCExNHEdw4qkFXcYPBBgu8ztzT5qdbehMMpDEUMuTajobN9r6ooRCmB4C1Jx1h5YkPfbpfc85Hyt",
  "key17": "4CJ3a8ZKZqYcgwz7zPg5xC1CpLi6LUbFnxeXiiZRMt9Dxnje6agGBPqFotQDnAbzzdGxyt5yWMfLcJ8Uo68TVzHW",
  "key18": "SjqcxxECg4tstqFzuBsoSQF4CQMJXUA7Xp1Ci26cHKzDzBxPhtVuK6vbZsa8pWbcFSFBzcASwRu1fmvsxeP5CBs",
  "key19": "3s4S1KJJbbbKQoaDV23EFAo8QiJdLN9tsEaffWgwqaTsPxQmgvzm9ReYoxoUNrTf2JxFi5hPvS75DT3mSdYfyRJB",
  "key20": "3wJNMwMZvjRXGLVUZhsbfAvgkzZptHkC2ZVcxPMksJwG7axCppUTRXMurHYQ6F1ukFwibmpD3JJKEdyTWjLmfRbT",
  "key21": "8S9r9Vbs7XMKbf4XKuxStDQcbkwUreyg3xLUEcsT2EGDvAnp8RLHFzr8zFj9g1t6VVrTM2vP5YqGvHm9XMSCS5i",
  "key22": "2GEfYD1vZGF7yEM9WzL5jD1u6KadNrfUszKg4ut99fpUHrDrM5PtJgyyxR2ydk6kjh9H4a1Dz3gU6ojVWJZtpJMK",
  "key23": "25JfyawDSvCuLcu3kStVuUxUYWWycwQsMGk5JYDpaDZYtXykjhq1jrNxNiCrjgtecjqFyzXaT8LMTPSArHLFFzu9",
  "key24": "5Vj5Lqk5Pu88pAE5UBs83jpBhLcWy7Heo4vBzRtgkfKt6qwLQnsbxPa6EAtFFrc9JMa3kDvjCQGVUC8AmquoA64s",
  "key25": "5NRXAUS4eTmJmodUAv5B3uGG78GsbjSuFP3SWCDsngmpijuhWir8yiFjhY32n1M7PnTAobP7LNjAvfXCw5wtN6xg",
  "key26": "3TVEX1C5MKqyaTHGdFjrd7d77GVSjGvqU5rY3vk9jrUvATArAQw2ogpV99Hb28BwrSsEhamwspeZhnvppmLga2BM",
  "key27": "2n25VZrofwS53EbU2t9y7M1ffxyz9EoLjEzQSy6PbV16BNpDvmt7ChNKerSP9d4d1upu8vfwYsxhLxt83mzED5rs",
  "key28": "cKCk3KhjFJ6xqpfirU2jBjLwFN8adHsS8Er4HuZ2iQ6mEYDJRjGZ2tFcXD2DunzYj4M8V8zpMNPiK17vDRqjtXd",
  "key29": "2tZUbbn5CMHzQkrQiU5BcJKyK8ijojetTQ7nWnJCi8v5JcyEk2e4QJ7GHMXnzxPEvbt2UihaKSybLJhcafsa7yMV",
  "key30": "5GCxZtYy26Qvf1TdHZW5FmJ8YYTb2iNdosRNVW7DFdtuHEMxQwnPPHctVNTXN7i8uiVhmk817QRgJnU1xtiy6SVt",
  "key31": "3Pi6aqzb1yihj8PwBBSDutUWzzKXHozarpeNxHj583uQLbAweBHb2cYqUTr125qXcgDCC8kcJRtevUs9oc2kBPds",
  "key32": "3kXutr2Df5eoAQDHFxuKHQXa829LzDMHuDd2VPe1AC22utPNZbHvhCqvzVPAT2zy6VjhPEu6qz1d7yf76aFCV1sn",
  "key33": "4vTGXsA6gSRDdRxWvdRv4sktPKGZwEZV1e7imXksaUYqTxsQU2hPMhs38wbkrxQxAo7xaT6MqRRLmczmmGmr5iSh",
  "key34": "34yfdoafY4xYNrDw3xurnNNNAmy9jbA4N8nG9zaNzW7YjkTjUZRozW2PnfGC9vAL58TZ7aNCa7GiMb2dSGQM6bBh",
  "key35": "BEAuUv9ngNTYEUFPzG72nhKBs9tqEavEHTXsJDWPqjXuf9QJdsjKYZYHi5G5dYn5KoCEhiAJyttxo4pBPuxUczL",
  "key36": "57WVxLCrYLkWKzeM8iKwXRMNe5X1HdPmQHnoJ6hWzWcBBmYxqRuuakUZTLYWfoPU5YKeWkDP92QuqNQFckg4KWjA",
  "key37": "fD1eon4k2Zz1ZfnN7VP6N7yV6obYKLxuHU7xAShw1nW8gzZc9S2ia1mi1e2GVgXvJHbnDSaXMvay9kNDPiUywJn",
  "key38": "2tfXCkB8va23EqqrurbKrBhGTock6KiVGiCxHRVV9Wf7PkFzTbGpT55RY8ekpBiej5FZRngDWfv9Xekcco4TTrWA",
  "key39": "5DfLzjhJ6gjjDu9bd4tAjNrWRmZ8NYnHE3aMW56fm3HSeLxTYRKZm5H4d3eMabA5sLcDThSpeA7coBU5JHN2Z5DV",
  "key40": "64EwHmMq11asWkhMJwkSFUdthgzCY8DqWLcjPJSS4PM5nQ3zBMvau9AWfBzph8CL7irBYZBkXEKh5N5pFz31MXBf",
  "key41": "4qfjLFL4uS3XgGKmSv4kftqkE6eDDnrVE1ZgoiZbTZRiDB8bWHirLVfr7wH4nf15HWUxZTNAbyCC79xHYscnPHYo",
  "key42": "FeRMx836Sn7z4ZcWuYkr3yhF8XLCC3VVVQyqxJiPChTdWS1F3Ta799MA1xHPRNAUCdnbEZc4k5FPfpRK4PQC44w",
  "key43": "3rRLFxojGhtFTDVy7aYXcRnzvMhUXickmiHPRF7zgh3SnRQpnH7n2Q1fxv8wZmCBM5RP8iNgXK7RJyLLTYvRbMhB",
  "key44": "5KbM9L1DZ5FgsPHhDiBd2MsvQvnA22p3n6LYb2waCVbpCfyKPYhtcHFMYHjuvLgRqup8MCxvu7syGNyPEgWWMVmN",
  "key45": "3pgCcvqGmPTYAzhSbUdmi96cwenSexFAT8bX8TZ8LZvKiYRhmNJMr19fSCp5aL1fTZQbu31kX52SKB72Ux1bH4zv",
  "key46": "2eeUHB8GGJ2xqJ5SCTpkuVmz6EVSq419U2LfjcJW1tvZstCatD97DynUXdoForDquAun5nYA6hHiLPXyizJUCT6a",
  "key47": "5sQhuTj1nHRykoSRouMCgBaekQFNKrXyW2vX62wvL6uq9s272dRTdqkGuYXg4eKxJThYNoKyqshTR2gusfPfJYBs"
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
