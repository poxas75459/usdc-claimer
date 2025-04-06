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
    "67fugx4Bg4kRBsuo97KGkGfarugTi5NNijxqZS4Gi1Wpjbd3MWKeQ7shVusKUWbK1BUuhiaRxj5bEiaE67RsYap6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67RnNP2MwRj7t9kfn1xZQTUGcHzrvZAcRNoxG3H3kbcVdBogYamWvwkgp3k9hTebhR6x2BUXKd3BVSyB93cB3orK",
  "key1": "2VNB8ppFLZ5zQSdU7kFq2FzwWD17WnJtC6Pm6WQMng8nBG58AcfTsJb6ZgycQtKG1W8TgjnESY7xCoQKYfu1pyRZ",
  "key2": "3nrAfM5RqAwLHfnSqo2s8H6QckSccVvBLHZKdhov9McWEn4F1VNPFAK44iwrpR4G1AKX7X242MzpJG4NehapjA2o",
  "key3": "2JCGsHtLbnceFiL6FnH6oW81bXhh46uQbHUouZ6BVWKXe5AvWaj5Xtz2VrKbv5Pf5Mkwdz3ZnBE1F8keVoCQ1nVU",
  "key4": "36umUA8RJgR5LS79T64ueVz2RgD3rL7Ah8RqKdSjC6poqMhTQKTwRCtbuLicJaCLVWs8JrHxJ2ouzPtksttRdeW5",
  "key5": "53Yt6r1qNDGX7fBpmasc9YCQgnNt8Nw1VBn7VuCD4gM54aNDPJgBPKJkfR4LBSiF4zhLtWaDFc2KwiyqDGpoGA6N",
  "key6": "2WtYaMpwbMRHdZQ4mCxJxtduuz7K1Wj1aVeprYxiXSHCYTUTVLi7DmAG7Xoaj81QopH5wr8fUvM5hj75ctUzSwr3",
  "key7": "5Tci2pyqjDskSodY9AqWnnKCbWdMkRQBmvgrFrZL6V7dVRof49wKaewV7Qse5PD3y8GdctUk87btPVE86kyjJs46",
  "key8": "aJo5kDEsaoh5pxrxsTpfKezMxLcDQkhoWFAJfS6mwHaZws1r3HtXEMeYwN1X913yA4WXnqzHB9RKEvwW5sHC6nr",
  "key9": "63z7GeRqUTkUxjSQAiAfYjByTHfdwKmctnCv9Hm7iYT7oQCZqJ6LPFARL54f8GpG1MWN4z5YMh32Pny57uXn8WEa",
  "key10": "35iG92ASZ63yVsHv4qnqMmcPLLpqgdduLFPGUFnG5GgwwmLUnTmLUw5hKtkguWj6hQdQkt53onPLVz1es6NFGFgN",
  "key11": "JsQzYNB2bBMK2YbEsTkEnGjxYXB61b8qPMR6HrA2UhtqyQNThNZn34BhNzH29hdXjweC1cPQV7u6S16wQcQuSnA",
  "key12": "2LsvPa94qfcDEhY5t7GTwxheGFJSnTZ1FWzrbWwSLxeF31zPMY2g35XTg3Scm6MVNANv6TMUPchDwnsC9H9f3358",
  "key13": "28a6usCrUHvQTT8uMq1WnS5xWCLnWXQWSNDmtsBLCBfsj2xuMcpiejRnfHSFe7yJDoGTFkxgdLFoed7rt7DfM6Yo",
  "key14": "tyrpUzFKYD5QZigDMfKEMQLjDhr2e8cLjdm6Vy7Ej41qdNzzcTvRA1aEKhgFNLoNq9EYNsxHnsnAP7M1u7HfT1V",
  "key15": "Qb8rnj8qhRGomWknoEvkbfdTpq7HYqPhgLU48xnLkz4psk3TqxktCr7yDrPRqfW1vGJtGZK2UJayoxDunGpZPLP",
  "key16": "3PSNTDQZ2oCFep6TbfvJA6YUxz4bdAf9SJVGNCTo4uYwtjjrwszwLXeLuVfc5b3Nfb7VpM64kz8kusGRTChzc5ea",
  "key17": "3HjF8XPX7JT3yAf94qddT4T3hpMPfh6z9fC8m7E2gCPsKJduF7q1gknyDAmBCnTss4Ysp3GmBMyr9jePJMhHzUk2",
  "key18": "4v3EbrB8njVPsR4CJLbnxFXxq1YE3RFuUprrkuodtYueq8CR6i4CgwgRx6FKHkopue4dak7zad35utQyrHYDE8E3",
  "key19": "32QD9ayxxa2rJuwLdA9uUXFSFuSpbUBq8WSvcLYTXUSwoCjT7nmLiVQCWEVWKG14dVQ2cwuKB6Y3jkuYQyGf91en",
  "key20": "4fYrkmRVxhs76ZcyzR9CgekzkBrgJUikPWVV495TrQFNAuMmfGdymYCwoKScurnj862aP9gaGb8wbJWP8t2Pzkz4",
  "key21": "5HG1VoS8cJAXSv5EArmoghnubwXcRdrW68vpdFXZZcuBqNZudcLG3zqj274YRWD9j5wBjKjBEaEHzaWJmchbERG9",
  "key22": "67j2JX9GZ4JxeYyRqjmKtAcqtfPmvmv2JeUrY8JQs4LYQLSTqyvqSgAbi1VV3Niigz2Ww1N91G7G77gw6Utv6wxP",
  "key23": "jdEAHsafTbJ8HNBWKLEJDgePR9BNpBUQsHHsgxHL9rAuPT11EBSL7HS5Mno3cSgkq86PKn1pHDP3uRAae5PCWwi",
  "key24": "2LLULS2e9AtcA1CrxbLMkoKWvcr8txkKZB4JnTZ87pt9y5h5eDJGsPx1HNb6MeL1LqR258wogyQB3zQ5AuzGURwj",
  "key25": "2saCcBiwHpxETcmXHRkedk64YzdNgZthiJrLE86NCX4mVXrohN8mErK8MTPuGax3Gw7xjPMvxygLFnBJHnHTJVvz",
  "key26": "2AY2udUJrBLWqGkNvVruuGA68rt23v3aJvem9E2x8bW7T1Rtu1T4wJDVx6P794qA3w5n9waV3puDyrGpncyjbS41",
  "key27": "5hfkqa6W8ky3u7NM5RHC3iZSeXjhqoQgERbwvxwvccANc5oLRvKfNuAEtdthUL21HnQR3e3fxTbrBp73qWix7RxV",
  "key28": "2Krq4aAA8dpvduh4tutu8qibBWf8jaGhoT4y3AM3Ds2eeaGDdt1xXm2bweoxhy7daBpWbwWP9sTKLyTsiR2ujbGk",
  "key29": "YS7dLxCDEMSr6eibRQoEsurZQHmYB3C4KTYbJF2yMDSEHQFQ3wezQxDuXimVUfsEv4oFWQreAdJDhHbrxXtQbZ2",
  "key30": "5kR4XgDoUSpY56xf4vb6H5fZmpwaReGGiP7DBnbdMdQjkkbxAdZL1NEG7cvBiazZbGJe6kicC2huaCBQ9mNfdFUF",
  "key31": "2HaZBgJkBUuKwLuYDtKYkctrfZ2sBAwjpF9sNY3AoHDs6FT2EpMDxtFbgX7VeToHB7frBvDhrUptJxJR7Q97Bdtm",
  "key32": "3jtp3y5jff6oT656RD9Y9qgCThApZyN9j16sb89bJTKvznkPz1v9jtTgXo8oe21UDyCDfYHu48RSpsLC7KDFYuma",
  "key33": "2DZU8b3h5JuLXYr1Q3vm6AKM2Q8hiocnhsyYFinzU4NdFref6q1gN4wT5WHKtiSj2Nx2ooUuqnn7ZEiqAY3e8JAY",
  "key34": "3gNba2ShwmUTtiEkaZC7xFCMQEQkqMKB67ypSvbWBV5X73zoSozLV1JCo6tcZkiVVP2NBVTipbJXngPpPdhoRbw6",
  "key35": "3nyL3n5p5fsm5B9vjJN4EmyyaVGaBr4KqKVQfRvq7Sd1r7Kcd2wt6BiavdADP1EP78E7etgFy7trEP5CVeTTzQjs",
  "key36": "4umJHjqGUewoXSLbNgpARc8u57eoBEtdDrnoioTakz5S9R4zUtS939pxVRZVPm722vVo7iZR9gWtA1CuLRUNhaRA",
  "key37": "5M7MAcXqgdm2VujP8RXpMKPxBDC5fg4cCWXsUgQo3nBvTyFNHX1fGTeDbQjGBZwb1AfH4WQen2pFc68x6PpGkC3j",
  "key38": "bGdFpRgghaEZSqEdBNhhzy3Ecyg4ij4MTLp4mQmfG2BSdkfC8DRTkWGhAtzu1MCrqpjqurndVRv6pr9KiHkzY9y",
  "key39": "4jrVAYq1y5BHQbnLjqSqYRNuMBBHot6UsnSDBKxDjQcUMssw4YLokyfcE9WyeqzPnX2bo3z1FoMWKQjFViNgAQae",
  "key40": "n6YXVxoii4M435qfq3DuxewRqM9XWvS5nvTDLKizZVSVYMsSpCEXJ8oCFTyHqWYypLjdXycsWgJGHjV3dQXPzuq",
  "key41": "3hKVN9N5J7wm246xXm9ER9ANdPWuxSfziyEXUPotkvVnV7d8xnfY1x1KpZiFSGFfUemWURyYxPCyqdVgdBJDKsmH",
  "key42": "4zWnTtN31ahenG6ZveqgSj7ZAY6tV793DKjMCSJm1PCrLuro9CFA5G6Z5KmjAr7mtbX5P9XvLNxmUuBEEXWwBspj"
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
