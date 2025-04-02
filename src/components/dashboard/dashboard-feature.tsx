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
    "2UjfZDttNzpVUethi4WBNp5wMbgxCsss2QnCND6mi6bsgU7sE9aggg5ssi62uV1WfA2tbDfA4E1JNaw8VfTD6uPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5drasBo7g91TWs2j9ta1iP3NHLeKto3ch232vSNJPK6RHny576LHUwS4Z25i4JfannbwtrNvUKPW95ahMVvVJFh6",
  "key1": "5fUpwVm6KCs2vF5Tdm9Lbf9GUbpdgFgsRJ1cmj3vDpdUTuRBRQ6T9fBZXtjiLJmLkwc8y8yToC4b2FyiPQGTRDGr",
  "key2": "5YrvrF8NNuh3YxbPowuYgRRoWVJgrLDQhuqYgN23DDuPfDVfuiD9NkR8XY4dGd6PHcppDgmUDgZhGkmw6veCahmz",
  "key3": "4xNzEpeYfn8aqgPh1qPDDzpdM3EdA1sRtmLhj6YrmCvZoj7CDowKnWVvMwzu6fCZ1SDznWPcALJfNtnTyZmXnqvc",
  "key4": "2wm38hwFe6QYeQd17QMaa4aMCkX64TfkCUtF4qw8CZuYtumNTU4Xc6wTViKQB6cBiw7zx2mCtHx2SY4XPtSGYZqC",
  "key5": "QXBq3BrQWtSLrJ1qqSTgpGBSZMK3usyicEeZ66NWZ2TYeBJTcdeFtL1wHi5EvQ2MRzzaYHVaVtam9GaXh7LUask",
  "key6": "2opHnA6pF68YczKrU8AviFTTwzocRbcJ1FVWRQpkqnCos5CnUiEu1tbzS3WnNLSZM4DavTAgtjFDK6tYL7TWDM6j",
  "key7": "2fRCJ3GH7LftVHnrfDfqY81Hc8t3VM9r8EB6mST6uMGXgSfsTQerFKaeyPe8RMHr9GpgtcGwF33xb6boWpvwDgU",
  "key8": "2QituCwqLwtmUDNnjTqfzsmFUtoteAfHZUFRDXdSXhepEDifvLFr1VhBnXA4LgdAuRG7dwZuciofcTDXYpVrqe3z",
  "key9": "4pZhCPzexqWwbG46NwB6qoQUiZPMEHhTrwsjmDGHbyfC4wDhy2Q7Yft2pN5SRbExwLhnG3NfmcQErfD2TeCCcsFV",
  "key10": "4eRLT7t4yiemH4jqH8bfmDduv3fTwLuc2sHmFrfiTr9o2Q89KqKmUELmHVzkcjYGc7c5FYNcDUFYgh8WmQv619E3",
  "key11": "4yYua68KqiPJ9E7ff5eRXn8qvpX7s96QMGieDDm4wbagBfPtf44tXqU4x9y85hHghdT9CxjGv32gbWi6bhh1kfsA",
  "key12": "Jp4N8BUzsRgD8Cv3EG1VuE99v618WMfzHtESsCtNPxAZCm3xJKbkKyv66t64LmzUEx3FbBUgCQ5s5kP7JAzwC9U",
  "key13": "53xH4RVwPgE5EQ25eB5hy3hnPAJTSmdxJpqPxUcYH1EGutmVergaeNfeeR6wrZ4GE82QGZTtghEHaP8hFTGmSXtz",
  "key14": "3jXRXAAMWkdDrGNJ2wtbybaUkZfA1PGtejmV2FZdcvueX9C43icrM5VSLbDX1ARcVZZ2AbJh7tU7bLWh52hgkkzT",
  "key15": "5NWDRTJvWyuXxuRnUd1Utefb3HK3zFpXRNbEfVuCf3hFGkRFpoLjZjhDxf132m2h5wPcMCdtjfguiooLwjLPKDzF",
  "key16": "ZVhgLHTsH1kheG8UYAvuwDBVUgFmKyiLWkC6A7Pjr9k1bgCoqAQHvMgcdKUkfc5F6P12eULu4ikmCywLrGhAcX5",
  "key17": "vPt4rReDtPoRmYgQs79JT6fM9wTzx74heGULDzMze4Lmmu6tTmzAWkPYZyR7xHZry9MczDiotNpNmTAfe2TnZwo",
  "key18": "2Njb6TnqDFqPEKupfLorh3ynH2J8AbHoAkbrDmL8FMkz7p1mokNS1jX3W9w7ZTacyJCp1ggXhQ8D44wMA8iNDYGV",
  "key19": "5JVxMuCyYrNGGVfLUEW4LurUMhfzWNgCARFyRCNAHiWa67R4dXpLAEmYts7AfiJPEznSLZWokXAuHLavvPb2AG2Z",
  "key20": "5Kmy9Kqunn7oFPTxdMWdxo6HXF53W1HSB4CRFzsMhv6vPUMA7Mq1cBBZXXHxNWJEnrYL7DdyiSnG1evtPVsMbJNv",
  "key21": "4pxULFqvkNpNDPeVrzW58dvLAFWgtGiuD8rbmYPCVof9hBTfzTa7pHXr2abqPPS4vqmYyUhrSpG54ToTyx4mfgM8",
  "key22": "b1iTh3bmXa4t6KkQSXbCodV92obzKQZuA1yYgm1vcqvTDaZ9EXP9kMDfVLfASUEAvEaaxpjPj3VoRXrG95Uiz2d",
  "key23": "5dhkBC5HHHbH5utvTkZHST8CKDsUC22n7No1t9HTnBAodtTKaD6TGDpqfc7xyTYKDgJoXfgHvtG4SYEZpVn5d2fF",
  "key24": "37eKeGKESV8YA4ZR5zPW7gGTmFCum7LVg2TVbHWk1zqrzTLZwwaQ37XnNYFQ9hBHhpDTf1C23RSh3PoBzA7zPbYG",
  "key25": "M6pykBWguD97rPQShnN6L9fdrzH23NQUhNeUoPJM4BDaqyxqnx43XeUsRrD5EiVSifH1XzJimgM6RjapvZ2eP7t",
  "key26": "4D2D45NzdJvQXb8hRTyThGzD5aNutiaPU5WhdE8jvg6W7QuWzZKvQedzeJJ9Ntg2fPrBUpWuswvpefoVz35LZzB5",
  "key27": "3Y78fPVpBfZHQ4JEGrL4VdbzB21kU4PzsfkToAUDAfCxRJmbZ8FGpjEmZA67UFfz9hcnNBXCmxgPBDTVU39mdtGw",
  "key28": "4MWNUMpag8dwRNGRVn6ZAqWMXMq84xcdMMet1YL95HXw13Zrm4HPgFCZcL3pHVMAMuu7uFXcnp6SdYW7YbohB6m3",
  "key29": "oANqHWCu8YNU2wuhYb8kNUzkQe3iBmaoiDaYpuLehk57wHwn74sWUhyaw6nVo2zbeHUC3gomgWZFKfigWMQp1Vd",
  "key30": "4Kzdcq53NkSaq3u1V9qjZw64b6mAnGThpma36Ja4SfbhgpdAjfCGDGmWNbARyKY2BKFCHTBZ2jyHucH7kMizzAFb",
  "key31": "23qjFsaT6LYjwssnazjKS2sd5Ya8SBb6WySu5Hcfatd79WepY362rFhnx7FScehsWk4AJVmAXe91iNquu7pLdQ2s",
  "key32": "3vRvHsPBsv6gBBwQSM7kZxJnk8xycF3SQdHsm3NHDLjP4Daojii3uM1nRK2he18nf9tL2D9g5xo2gxLrnYmDf3Qm",
  "key33": "3sg8dhgC6EQj6CSgauMxZxeMaafMhZdZm4WG3KB8NByNm54TeULPvbspZRMehM48xTaTJwEY41PwmQQmNcgEY6PC",
  "key34": "sAHskANm9AL3v14tmdBPSU1htCvy74sA4MqqmMtS71ujB3UC3bMFk2kuwLVdwFn84Eik32hSD7Qe1uCEJw9MFja",
  "key35": "54hVvk5wpyquEUvPZLGLxrQGJZEoET71ZbY2RJm4JZ9KXM6kRZmLEF3U9gtuC28VJ4VH9rLtL5Dy49RXGEQKG4i9",
  "key36": "4VB6Bw8By4Yxv9NFtCETgdUKWsGp5uEwi4TEEC91ztcVSEG9teYjqXcmLhD4SqUjW6upH627Qf2zmiQMHKnkrHww",
  "key37": "phedWKJb55AnXjbMbLBPdqsvjwJh5LKiUYWRFNNEZyLNXiw3zb5Yhb7K1w86ctmt9ecgw6nnBT2A5ue4CFnRhsw",
  "key38": "2PM69ThHJcABWo6ipDHiSaEUCuNp31chryjpcX3kLyFZ9M4kyTGSdiVU1scMksDsDuxrTApV8AtL64HxQJc43E3B",
  "key39": "2FVzmWuFwsTfV6444rzugJsFXD44GgzU8bmNDy1szWiNwHe1qi6sHPZUmpxKBL21SFbV4psd9STT2zw5gWv1pCWB",
  "key40": "3UEgVpaBQsGLFjnkwbQMhueQxJ4wSFEvQtpLp73YuASNbMHWzdoo5NCBLX3ZePjqW1Bg7okMC7sV2SFWtesKzeBr",
  "key41": "4yVqbSsuDGjabD15LPR2H7wARnMfouKJVgCNmYvSX3E8YE7fPpeDDJMMdzQt98LGzC2YT9PjjgtyCW3Hh2ipt1vt",
  "key42": "5H9e8LKY7ZT5Tqa9mm4Z2y2CwdLnEzn8PiNPamJqrjRG9wgxw5goMbL6uwMQh8eyqDjJGTuZZLSuXMGLmhrzX6ZL"
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
