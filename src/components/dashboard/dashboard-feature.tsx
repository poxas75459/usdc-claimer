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
    "2KxxEA6Vc7QTzMJn3eavhaMfsh8i35yF42kVML5tzjGg32Mb9VP2hNUxJMsEddsTgmMnke5qxSKvZhi5Rez3pi1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vToxKN1oz643U1DzwzZvu3QSH3XyVqThPadVJ8B4bntAX3HL9D8z8gn4YZEdFEp4N8nXUPqAYBku1cLHfSaEFf1",
  "key1": "PGT3B6tUeM6sJ9Auwn7HfPvuUdGbsAVTVRv33Gu2QWgqTGSc4QyWbXhFeU5fVpmv6L1qfZVRaE2RZeM6LnSWkHL",
  "key2": "5x3XBXJidN2MYHd9S59Qrjf6NC8JeKS1D4FD1aULUckCxMw2SQVKWvdVCDwRHxYWLqnr6mpi3VWbTUKwXTtKM5G6",
  "key3": "2gbfQz51hidpCGW64Lxi6CRxg89ubqtSnfRAuZyb94HV3HHvTWbx7vpYDezN4x8CZtgybcPQZF4GF8qRBfewDVyy",
  "key4": "5mLFz41ksmTiSMKrKGbHy8LQTmoYWFSNKJW5d3trt1oVXvG2wo87qu6r3NSy4dWmUX9rQRndMvKajTadxQHuzs9T",
  "key5": "2fnRrrbitLM224mhpV1psCQYsJDFMtS1Bz5e6maggJdypDqYh7Zoxd9eAVKU5iZ43jv3gMRXdX5Q7NERmWBqEPKM",
  "key6": "4x9bMjMMiVs7vcA3V9WKx35wkkk4Nz6phEZtRE68Th3DyWq2vHge6sf6NCxB8aWfzXaagkVBMoH9RwwbA1ZT9WF",
  "key7": "2uTuCdLhNWkGxGVQt9gkMY24QJCpioERAw3kwuR6ps5VomiJ7uWp1adPPXqwCgcFMrM4P2vsqaYH47KLFQuzvsa4",
  "key8": "3S8vu3BiFuVCTuWVBAxfhbDzsRz688mvzkV3mQsmrDG7xYqrUmfZa93LXvtQdDj8Gx5a5rcG8NB8jTWpPBUZQu54",
  "key9": "4QuxZN1xcfca7XV6F1P5813gQCZHi6vTAn5EUePYfWVJBpnMqKzkR9WAChz6mujs4GgtPV7Y5TboeVP2wmXwc2KW",
  "key10": "4KRFAjMPxNcRVJHEi1n3rwHFfWcrmTbWhdxbbeX8UF8sPCVyLJduDdvczcejDdyt1RaVwg36PX6WZ3Q2qFDvBrDL",
  "key11": "31a51c5B9pvxxeJJtdsQDXyJEKppNL5UG3FGZUMF3yAtswNrTKr411QA8agaLqj4C8GvamGQpErUsVSGJcomUcG7",
  "key12": "48uzCiG9DW88Myw6LWW5grfDt9kWGrUGXdi6vFhRxLXe9jW5N2eTJf6JZq8B4r9bGpx2pjcitYaWz4n1qauCErna",
  "key13": "pLyHTBNGUFL9Fiz82za9oHWrCuR3WEAadPc87SSBFuwPN3KRBKiMTRXdugYvBQSpFfKoTwhm3ia32FeRNXuqCMf",
  "key14": "3wc7BQb8D1F7uKQWiCdDdMuVDdJKidEVKh5Ho5EBPujNpXJx88qWTF93BjEUCrGuQ14soPZmU96xjaWun8a69CGH",
  "key15": "WogNJqk3R7VdnZpaKn5jgeETRYS8rGCFLc2YSmJYYtfaf44GDM4SDezigk1PkyuBBLQkzcJZ9D7anmsF9w1S8Pv",
  "key16": "EBCQbiybn1MpdR1JHKciNP3gcUxD2JZd6EojZ3aoMD4ujW8ppjaEbonvgKp2a1muxvCjpcWAQQ2HDtZ5oX7aA5K",
  "key17": "5VBAwNeAxaayPP1KVcSoeTVGkrHr7uc7A8g7ZCTjmpfUDeYG2U9uHVKH9YeAkbq3dtsKikefmjZiaiHQ22WqSpHR",
  "key18": "5KnKBnTBCLngMoiyhwtYJd1rS8nMqrRvTFMhngNeh8JUhU4NHgM4CyM2kYP5y4j7DQWXExZdXdpYMymH8ZhcMpoZ",
  "key19": "4RgQvzGzS2sv13f6k3C2czhGz5YSqEcxjNSaJup37JkiErETBdhqnFBHUhFKK5C8zgx8FmkXELFaAT7nzeK8wwe4",
  "key20": "fEjKZLfn3ZwWr6tSse78CqcWMBiGcfwvYqVHmX96dGmo5UUFyfYp6KxJePH5RMUUHyN7GEuUqWCEPq5NiKJcA64",
  "key21": "5wKAaa5gM7nwZp3Qd9e42mUaRMWPnn7TfKiXLJDVr6UN7YkpZngkbG76zfi4nPR8RV2BYn1ccB8A3LY9VwwFYpWC",
  "key22": "3BPfM4Yf21GXcTfXKubGZBWdijx9PMVzhJipLS1qLyEFa94YnkgfAg6vyKUmNoVp2TVpCS7TMr7ff1qM7SMejgL5",
  "key23": "5MhWh3uSzrVSM2iB2n5E5Y85bvXzaow6fGmWAhyRwFLrT6hyLzpXUwZmYAhvCtTH4KceduCWiwYTaFDRkTfLgXjY",
  "key24": "4UQnRriCC7KD2UsmHDdTXhHeno7ETRP4fozKj8RnAMKjMoedFSjC3VWKfT7P6a2jL1L8GcGZ2WJwbgBcmJj17cru",
  "key25": "2foTFr9jhk3dKDfMq5MAGJwexRo7aDp5sHL82243s7kYceQmPaTWioNSY6CWLPL3UgFgSct24EDB45TcwZjHXSHb",
  "key26": "5aA8j1FxiFidc4D9CfHrUPvnKxqP2PWPLb5Sx3XyWeWxA1udyWeGgguLLaud8j7JE26SPBGgDfNrPbZ5hX9mZEGB",
  "key27": "idmenipXEnsoqQXYe3yNcGiJ7XUF6mhfbRuJPxZ1KjkCU28PrJqCgRKCdsGyLHo1xQtPZhiQCiRh15pGJkRyTkd",
  "key28": "eTkCQXrJtbma4o9Bec4BEuKeYP2UAcM1kLTq3Jm7VGvBafUqKM87NPAu8mjC1JEvNtgpAyd1g63JbvJrJ3kKDDY",
  "key29": "5uVamSeviMig7P1xRtiEb2zEUG4WUxKiD43Xwovb9eMmMHJpjjKBGVyP9pLcLzCmLowyTVqhp9teK3vUWoJ4C75d",
  "key30": "5i6LrZanXaBYaQUNZD4uSuGVZSUyVfnitse265RRKeRZ6a9NAXmTECe5rmR2KyWXVeaiXCCd3YE4w6bNejDMfhVo",
  "key31": "5ntTV78f9ko32fDQ4L19Cpn2irRHZ1xBRyB6Ps9dHbGQRb12unA4aMqX64oZJnjDARKYLusanfJt2Qy6nY7HuM9j",
  "key32": "4c63ZT11NCw3F1AGqtzYeiop7MznYHg7qfcqirpn5MjLBLYJM4JrJqrk3rkdwjWVGBArYMs4GXYLghRmYDkmWoau",
  "key33": "qvDSkgTwqE2iPzSmny5fZDEq8F62HpkAT3m8ki9J4dzvFEWbqJcmPrYvZEfsjAvhTzzwj8fJuTf32cY2zpWPJ63",
  "key34": "2dhqHBSBGtUhR6VDh7HQ2buFf793drZzDJ1jM8b3FChijVbMGkf4G5a3gptQmaMgbvx1tmzaqxjzAZqimtwtJNFE",
  "key35": "2ajeMp3V1H67yBhNcd5nbdRzdC5jPdir1C7rNDrYamn2smTjDHnWhzGXkdGR8eV124YrFSC54PKgrcU85L18t1E8",
  "key36": "3StivgZfdqobNzvp6as8vtF1qGJs2WL7Cjn2yYJs3UGh6BxjNWks8M4XNK7Wns7jMNWzGiAXqE14fQ5wFsGKPo2F",
  "key37": "3AVst3iJ941k18Nuqckf9X9Butv5cE7gLJVcsV3XvXhEnRZSmeL35Ma7yP6MPDF72K7CPcw3R6vWAxrUyJqMeC5F",
  "key38": "4kpuudszo8mLr9yhyxHzjcHgPdobSZgKk1r5k9iHburB9hFAYkJcHe2d6RCuvLmCNk5pYkAtjutFwKFCqd9ugdRZ",
  "key39": "2JsaeVvZAw5sTLi3bZUdfrANfUcvb8WFwv3U72VzkrsyXUk5sWPEkVLoZBdG3m1EPeQD5oRGwTJ3JVeyC5YPvipA"
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
