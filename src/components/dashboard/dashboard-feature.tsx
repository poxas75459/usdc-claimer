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
    "3ezpsH7FNtuBT7PLmZTM4Tgjxqm4hLUqVG8cRLVxBhEHBrqic2V6cEc7w9dezwTrfvFg4j6kwBeA1PCM8SNm4p5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLt5TQ2t5Qece2X8RRxFUayR8U3WyXARe4k58szzqDYdWZysYfTE3qcggx44Kx8gCa7puKJADXUPVPjqfJfqNNj",
  "key1": "vkRE1qrW4W5nkBbiKtN6P19LP49ufS8rJPPK7Egby8Ssur6pPySgdijBLTqDmLXrD99jj2c31ekbGSSJwHVJHnq",
  "key2": "3MtcN9zgXsqBbQKEc24LiBvuQE6ZeW7mJvtU86Tzdo4SHcxP8TwsXVniUwv54iZAMR6URcgxe6oUQxnpVUUtGDYx",
  "key3": "ZvZjpFMzU6KUb8GboCXL2DPXqeTcYBC2xekHd51kPhBGbgNy2Lq29Vin8NL9Hf29JzbFpwQdVHLzUfwWYjuZr38",
  "key4": "76dHNmZugwo7FQ34P2QoBTeUSNpDVjtubEqQroYpr8MG5EaZuThGyuGwQkoKDULFRub8JxFKu7Xxk7F8KNnNAA1",
  "key5": "4YswBeZ87qD8rGkXBWSttxmFcqcsKBmRTXzinhYtgG1g8BaPwVhWXLy3X8UPQE3yZ22HFdxTmSbfLWWbmDhu8sZN",
  "key6": "4nYrw6TDvoF6UQJMGDkLqpTTf7jcmzw9K1PBkKBUwQhjZ1Cxfxd8ZR39TDQtmhKkY6GGkFFU2a3rh2h7T8eM1dsq",
  "key7": "2944hqDiLgHW9VanS9iQ1phFNSn86ffwtNKuPnizeMNTacc4u4kG8fzegYBWYJJFueNfXD5Um3GhR3jL7kY5VuNm",
  "key8": "3VtS679XmyX4xS3JzTG2g3hhA2vfcqhnQmHMARfbia7we813xC7RG3FHKnmgVnL13quF43o7AvfABWLBd4b8awpN",
  "key9": "5nMkvCPxgeHasrbh1VP3uF1DvEBYu3ckMKao8pPijhcYJjyRzj9Gqmnpgq5gHPUN1xb5Re5bVz7GcF2GGSNrYs25",
  "key10": "4oFzF71N5bEVAq34SoDpahL6D24TsiPTpAZSFGha9wuSta8utMYKQWgFfM6QXz31XKxbeyqwBZtt55bTt6ZJTNBZ",
  "key11": "uwfvsQ133rL1YzFkWjreDX9LBPMR6ujUnu2YqTVcR6zaUCGg64fb1kGB9UxgUXX5vhHWWRq1ocudD7nYN2UY6r3",
  "key12": "6rQAPkHAAjkcCrYnQqEBAHWXYbmSa4jToUfmUgWVwrizNC4mkkuoLN2za9UwKuePb97EaHKAoPsz7SLKNCD3Fkq",
  "key13": "4L6Me9MrWWSTx9aHGnJM7RFDeCmKrsJbXL3enaPYjFaqzPN4rFXkX9EoFkpkbsYnV1E35WKy22ncR7oVQcNX9LLW",
  "key14": "TuR9FyrLssv4hpLzFEwqXqX5xfsHdZ9aLnzhKzQKKCY3akgEjhHiw5TmeS6LeNLWQirfaZc4jufqnApPmqebK1Y",
  "key15": "3Q3CD1SGnd6owETG6K1FMkFoUq1rxBKELtig6J483UxQ81bMrTuxy2beVX2WGkuhRuizLKYTnur8faZ8PAh2UqgV",
  "key16": "2ExgC9uoqATKTfzzRa2PoTjtm5SNHKTfZvjA4Ypg5o25ua5BJdaHAmVk8YcumFAjm3t6bCHLnk7Az2QY3heGatxz",
  "key17": "4caViEUjX9K4EQrCH5rnJmPntS1Bq7zZ9mDD4gz927NEPaFqBBcYA5YDavknmow5DDzts4YQcP13kqcoB4WyGsWQ",
  "key18": "3MAWxazi6cJyPpD92unGTMwb9oW9vnVgDT3ohQEjU8nqr3Lhc4f8Y4oTjhWdE8r5cGSEJkUv2V6edd8mAcynEvQa",
  "key19": "4hx6xnRaW5iDVVUv99s9oNeH4eAn1LkrnhWa1hZTenJL7ZDJT6VZCwbkXPwxe9Svr5gpGimU9bWA1FUc8w6pgKaH",
  "key20": "2KisGQQnKGtNKpKb2MwHhoKWPJavR21vQ6YZfrnJdEza7w5UpXQwnRqFTUXYUq9XKEjVgGwnodAQ9oj9v6TrDW3i",
  "key21": "4rrF7ezD4LZt8o6A1XvE6cCtSkMM19QHesPVLnsXfnfq2oEkJu7UapmJAZvNpsY4pi6UVZcznqnYQsYzLnMLcJcD",
  "key22": "4PD5UTBKKDtP6WCWp2MeWhZQLkZ7z3tTaES5r7ktjUpDBBj2sYtGdanPag2bpheBEE3GwRLbrbsWVBXY4m3pLzZ4",
  "key23": "2bmXJtYUDSyfP7oziFWXmvFg179qjxHMRh6byq6scGVcJVvFDLb9cBZ5QxcHFgjAiTgfx8amBp8ng1Unwb44ASdA",
  "key24": "3Cqkn2ncQ6JNnvbmzoUYSFdeDAg37Lf3equsfzZvwJ951axbySmLvkVDt5S7zGaUBo68yv4QK6q3tKir6QKVDLZs",
  "key25": "3617fT7YN5AycRRVqRm62oupBzSb63Fn37pcuoPdCWp4aGkU13GQDLToWiZnz7yzrdiZ2sT24QTMJUrvbYc65sby",
  "key26": "5KWWQ6zHhqcQk6pmePsDLR9185TqyDwkUVa6dnqmWUYnaCnanGsojjVfZjXYLX3GxcwcETp7Exw6jcvjwVPHbL7a",
  "key27": "LqKixLavJqn7wHtGtiRKJTd1xPV2rpFAWsixoi8XZb4q5zGFKjPkzMXMae2LUtKsydJCDBsw9GoLBrupr4VUjEs",
  "key28": "2Yh76T6vUPChcxj2RbFCqtmeA8f2rqhzQbH7qXCEaZqbkUBnoPmkq6hkuLXNUc5k8pt6jT7sE2MxSy6mRzeWNcFu",
  "key29": "3rU3wavcocbENvKNPuHumcyr4sv4gtXrJTHpE6V6jqf51RCmZQ2Sr9P9czCtbG73TuotVitNHYvs9vBJ9R5e5yzN",
  "key30": "3ixAGNchAM3bvBzTGSzHLg4ViuGBRx6J2u8nY43FNBdcfy1xTfAUfLUNDr43FU3Bn3eMDb8r52VkcmES6X3Lw5yy",
  "key31": "2VnFgAKRtSF1XVe7jHcUYJJJssU2bztsHVSWz4eASrYF1ZUfiWu3onkHDZM2rPc2aStJW8LvkgiosBF2AZgVD7Ur",
  "key32": "yHtBY58rWKruTQpC1EbdVGG6drQmH9HbCvAyVraMUqyYZRePJ9a8ytk344taqzgEs5UNLDhkrjZBQKQweZGh9RC",
  "key33": "2FrCJJwdfHdRtRBKB531xvQQZsHCJAx8thNj4zcbbEEj8GXmuxsqpoMFA3TNUwJGaQEbsaFDEM32YEexgkXnMdCU",
  "key34": "37aR7BDAwBAktESZ9fPShg2aPqhTbweTvHyY8qTK2JDiySSh8SrygPWDjaxMvTSTtRfWtfKhfRc7yFvH54gYfBHE",
  "key35": "3uBEaxxzGaUcZEusYy6jYkzebXcrSWq4ZV5Vrb6esJebZ9oTXrjnRx3soQUNDKPJC8b951143Jp8dUymiBm6LNWZ",
  "key36": "2rdXMSRb8BcZ1Z6pjNngYL4kDHxDeTVJoPrTMdcPKZDXkXEGzCpHkYcWbyTxjcCeaJB2yDyx9GnEk5UWzGM2CE3N",
  "key37": "5JKFpT4oPSL8pMGt2CvSKjjYUbU3rarQ3d1ymUZ9eBKJP6GbnYw6AasDPA779433SAt3djfHZgaw5Wzr9FeAKiFn",
  "key38": "3C2isZe7dS69q7TDN567cnYLbEsemA1KGVYVTDf9KLY7ZoEzKjGFGbV5qYdCTRTfp1PCfh1j8b8k1dbiuEDvanCY",
  "key39": "4bMqcXJ2RfrfYM7Bxao5j4d3eZsJU9f1LhomVSLGq44WuyeMEzSeFYRzkFz6fcm5Pb6gjMzW8PeMoJn8gWjUdor8",
  "key40": "5ApnrYLSsg4RzTmgU6qU3SMiED1HcRAt994NgETpVLXdL1RuQFnE2WiGcpmAqBNbsnFMMj6b1NUptCkeWXXd3c8y"
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
