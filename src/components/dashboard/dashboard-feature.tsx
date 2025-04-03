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
    "56reK4ygcRyfAYkfLbvHG7DTHEKwrfW8b7wtdcC4X4tJYuV8sjjNvK1htGoQ3h5mMiAyZbbomWMS7xJspZSVXPZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZtXGMSHaYqXd3DrkRu8peWf6QjLbtyTaj3hfywZzqYs4WUXTWio7iL19PJgTPpuFGpF8bSTtkBYoGz3gAemcmk",
  "key1": "QWrbzvxfj1waQjaGvJrQA9TexWWUmuabzahE36iqMwJ1Sijrtaw3HLveYmGYjQc9PQgR5PbaGBHAt7FgENAbSfN",
  "key2": "3qfcHhntjCn8Z3rt6QQNoqJjExkiYYWN3PBJ3uFozvdjQkyGpdvgC3hy8gusaGwc5kWURXtg4eeQtf5vj8JBzjRs",
  "key3": "7aPZLcxPd8XPjVoBSpbjqsHbf8XLxw9t2Dyc9JqrN2gfS4zUSATVgpgME4nmCMWYe2YDJYFmWyTPyRkr8cAuSgY",
  "key4": "63CAFwCwUm2Yx6CRE3PaVAuFtUg3nBzmVZqLMZRnd2uqpds3Yuh9y4WchC6pxanWUMhMrM3CYpoZFVwoDDFhqYvS",
  "key5": "VVqcR3Aew9xW2K4WWn7xqFszHG95SGiyRwjW61Agc3hkLBGQ43NVcan14AugTjcvAPDJ2FCoVZza7GzXXKRxcJv",
  "key6": "5Q9uzzPA548rHxGgNCmy6AAFfu8zyhsfEaDmVAJzXHsMZ9MN9vFgK65MSA7BNi8ZAkuFNf2EYmbzprRMf4bUcvMk",
  "key7": "WBJ42Lsa6ERB8xHMf7YdzkirnBcYL8NTk2uhZ8vpXDwGVqU9Spgd4gb7j5pWGNXJFzu6aTcR6y8Q38QDzLXY1S5",
  "key8": "4cQHqv2k1PZBdKhncBUp4akVGAzQdrGpxVNZ67eLYT7SBZXjuBFFTk3hib8nuJ7x2LbszX4VVuUfJz2iNtKX96SG",
  "key9": "332jGC6q2Teem8XfxKWXLMHTzoYP7PYHMjb6vVfjmeh2XYmweBkH474BVZtzr8ZcSGxTy5eUbBSKGBDNk5zhAYtj",
  "key10": "3T7hDyNBunTCibdtrtjD8PkJ5mJAM7rtUg6jtKj4pbxafD8KUkSUoGUpuHaRkcesMM2EnsTNJb1PrasMZ5Lq2ntv",
  "key11": "2B9oGVLLcLtruXTb3moRh5CxUq1YhgsCNQWS2v1SNENAgZtsq2eW9EiC5D9AFCwXVgk98UXbAjG6W9e3kQRxQDY5",
  "key12": "4ZbZcAZnAYjibCH1zi97VeDoX2DYubMdtFt7KmmSQtqQ5R47h4Lb3Wz2NeRsqBmscJxoeHCid2sdWFWsxRFRkopR",
  "key13": "hj5J4KyeFdsyGmZ1MsbAgkj5E4tHq9urvFvmufdjx4B6CYKuwCaPnxwJS532cSvHhbAV5KVpknzAjeG39krGxrd",
  "key14": "gTrKbe6Hu9ahayryo4B55B7tm88vQHzLJs3hmscBB7FC9ABMrUPjaFM1xaeL7y6wfEqJ8MQVJWoojautkmYDcTA",
  "key15": "2uhr7zuzHnEu4NHS7hz9HDK6r6zvwf3NMWo2TyGtDDW4RFmh1gdHxGWqH8hjzm6Sb36hmPWaMQDTTNcwVAPtG6Cr",
  "key16": "53xQwqYa5DDpYazBKaWBv1EqUg8vMrVLgu2vaoZypvei7RKEWN54RMvVcvr5toPcsQURghELXsv3xnPE8jWMWGtb",
  "key17": "3sudVjKF4pFHRkksZ42vEb4snU1M33t2qo6HMsrTKhFnHkQhR9SfGZavbV4p2qy3wmMVb2uzznZ5osoLFeuk4CvU",
  "key18": "37gCzeaaiHyDdFcjxv6TPA2Xo5dhsG86kax2Hsky8vjT7gQCrHxngLD253U2W5RLicsFHnMUj5J73MJR19SP4Tz2",
  "key19": "52XRuvfFqGtg72MPxawJJwjPVxxDmCfLBub1ZHDGf3PiRi3ur2XYMz7NwxsdbTEuR5sqgtdBnGkpgiqgVFWnL3am",
  "key20": "5yCVEu91NWCQjT6xjiDheSURNxtfayrpU4KBtTbY6iXpaWi2DVA51YMxf2AQTdrg2R28pKQuKWeTzqQ2hKdnhehj",
  "key21": "3dS4ryh3c2zNx2z63bozh6wXddyc4oKCdXCLVGNSF2mrwkipBD9c6WvUK4j2hitZVPWpnCXMgDoDyTzKB5nqZHgc",
  "key22": "5hz8FEt3XDnu54WZc5AE6UFBwJk1DUUW8mCydGDvy4pbsPo1je3ZJZGbLxJ5UR29gdJed7TpWVEtK8vMVtxJ3r92",
  "key23": "5Sv1iau3eKBX4ARA16sZ3Cqbq6UHNkNXnaCHoZKfLtSL6tfdozVD2Ckz6om6H8qeVjKmtkG6o9scVS4ephFzWKjf",
  "key24": "4WbUtdc2ziitQ1JK6www3uZ2oiHEsNKMf6jZPLjAWHAswFnb6NmmmpuC7KexvNvTA9mmy812QZWdiBcCujtXCfWk",
  "key25": "5EEEsQxpikH7g9twgnyMkZdxypyg9e6ygurR3GKYSe4c6SRwQkTH3yd6itHqsbeDFS5FwoQpchaPPVwfmAVPzqpr",
  "key26": "5Qu6SjPYxi2YybVC2L5xkwxqvzPFT23jHrzPasFncuyY4bDEx2E86LFDM9SK1grXoF64Ga8W1wbtgAojCSVsw5B",
  "key27": "3qxgud8WKAHzGnw9aWNh5XA7nBNMmVxJG9LJh24UfM4WgguPPHjvuMu7Zn91gALDxeg3FVFyekau7KX2T9WZEiTu",
  "key28": "3GSFa8DjZm5PASKwzU83EHMeZafAxP4xTW6m6B56hxwhMB5Bew5pRBZsJGhx3oKrvwkhdxPUpTkJdGiDo85mQx9Q",
  "key29": "64xUwPz3feyKHyuoYZFZ2xHucbkAWTVgsjV2R5RrRLK1uocPdUpHiEo35onX8rdDAbYNUr1bBf5vq3yerykZ78db",
  "key30": "5nQVpeum8FRxRsGokigQfzqamx4cXAYM1f8ioCYv5iQL7po55SYZmRV62a6XKBKvNDDPaNfX9MK2MumFx3m5PhqS",
  "key31": "5sMcLTiD4UMczy5XAQycnwnxX5CRHnb2kr8LraoNbd31pafVMEyLhsY3sJPMVM5HtHiAYb3jRD6kh6cQqiDH8KvE"
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
