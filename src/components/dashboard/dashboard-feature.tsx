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
    "xtMtHGDqkdVgbfC16wWqxQGZxv7ep5uYgmudqpVLvMadJig5UsrVprPhd3Y3adyqVLRztRLLhmzemMFHphwikVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DK5fSdrD4wuQsPViAp6sSfBHNcfFMLhzw4K9FRw3WTGZVTZenbHtzzvYZr1tkwWhXCBgGp1kU8VZyByZF1odp5B",
  "key1": "2BuP8ziG61KnjNDtaXhUBtAV2d8D9DVaXakdh7nsMbj7GjZVTPpyNKLv6rBr6KxfgFG19BWo2Uy6ezi4GgJ7epn1",
  "key2": "5ipGf7FPiSSZk49JYy9G9KEcyfn21j6TqXnzPjAeh8DL2ux8z5KfeC5fntSA5gJ4GTQeTbAdixW7CNnKM269pQ4P",
  "key3": "2Bfgfy3cCgHQg7tsmsEGiXtALjb3PYxV1wzuECpQKBnonwrRTxsWxT4kqBphdZtDPHaM5DuL6W7H4GcRBf1ihvU1",
  "key4": "26cQqFVGmPgBgyhRfxad4cqESz4d14Sd2zAgkYfNim9JDC2ZZLPfVMyJNBVRitT3wRdfr4rEXXVj1Hs788FYoA3J",
  "key5": "2RZryWCtWMF5vSGWvLARdcMHTkYd6fp7Cr8h9wdgjtUbMJ5i32Mpc5RNHmCYGqiC143ZZU8KoMRCQtRTothnGdC1",
  "key6": "UZkiXUicresqT9KdRUvpGczoowmh78Wo3p5bGvFjQRU1rM3vfLJAqrrHxGGHsR98AJSd5mkGe2CMvRGLoVxhfMN",
  "key7": "3m5wh6HxkqJzmyZhXTEvVzahhSJAxPhmWxLwA85HVyYP7CyXCS48SFQ3hXgYVrMCwBwS93WVAyaS8bjeXzgJffNx",
  "key8": "3B3msjPXHuhNNwuo4yTKwtVYqGcWBi7pAXZXrBuEPoJfbkogV1mEzUmH7nFJHGwLy92RvpbLUtFtZFfj4xfDhWuc",
  "key9": "3D7Sw1G8kRkxbrRuGQsZgZk95DyQJSccxWoH7TUx857qJqe4vWoC2nNwWQchx8sfkvGoWnQJhmWU8YxoafRbeU9T",
  "key10": "3FAYDWuzgpfHCMmgWgy2DcicySDqM73MJRU6m5q9hpp33tea87uHaW1RXv6KZkACaKvd9wphEpLHir1S9V89SCcg",
  "key11": "4PGuwe9nrMHdTmbzSd8zwF1cK9HuLZGQHeBAgLHLjfbR6ngyUqCAX42NC6fVPmjG5UPyhCg5XxCKHTMosbbPFEv6",
  "key12": "4TKgwTG9ALMB9hyPy4k2VwqRZSbpTkPH6t9XQg91QcMUd1paBy27Dkd79HwHgWpGTUNSL5ZQbgmwqxnyKw7LJUo",
  "key13": "4ibGCQu7HyCyvVw49K2nxpNzaWDvDJhn1NAkHhrrYRhuEX7KxvEJYnpcUcibmHomi1Kk4SqzBV35gYmQFScC47sK",
  "key14": "fB3MdxNwPWJwUphTvhFxZK82VoUWC9KcVMUPGR16h7ALE4CFXH9cCa8GvCa6h9ZeQuJ8zJuEs4MRp25H9i2oomB",
  "key15": "49WNyEfL8xeCos6fKyLZJLzmdFTEWGQoheYdhRxTY4vyRn6Nj4m4Q9F1Z18LsiwaonG7p17zEjQ4T9vrvQf8s6iW",
  "key16": "2nfWJmvtwT19HUYQTGFdgnCTRj6tMDcAyXx2yEgrUXTnqtQiHiUJme1ZYUy2qXZKbCM2gNFkhHPYbGmPPb1yCQWT",
  "key17": "3QRFE3TQkoSfapVeCJ2VWeZ32Kehh1Ybf1MuSZTT7UVDfR2zHvePWXt8oCSVoHF5afeV1tqTULVCmRbkt8P7hS3v",
  "key18": "27f37AufKGZKNW1iwvD5VTKRvcNGXT42z4uV7dPAU9EVHCSwRV4daRDMbpbqMGMjyG71bP6UmCW13T7xtUxiqYpK",
  "key19": "5Jv2YL2Adu8CKAhPCWfyVT2Th9AzJiGhsFDXhL28nUM2QZqzx2Jen7n2HmVRHt2PEmasimkXpZCPUD6b18vMBzWB",
  "key20": "iCQZdQ9bLuRSKNEcDnu8oC6fKM5AJHJtQgoShN1cX3yTdDuVqsRtkTzTnQvuAa1o1q46XpYwipPS7LXiWcc7URr",
  "key21": "3ZjA4rcbcZ87Qmd8gVwZPSnFNr4ruN9dWpHP6z7iV1ftQ7wFcTwv2zYhGCymUTHPpzbKydABKNWz1RAX9SZdcVG5",
  "key22": "3akiWAaBvNyrvpsPaQCVfrCJzmnKQdXbF3kxBmFwkeQFpHJFchrHxPM6Uc98vkta8yS8duvtGGscamEKbqdyW2Ci",
  "key23": "4sf5qtSWYqBkE3NARWEVWvXdkBnoHeQrsh4fGH7hceKyVxdv7Fh5GG4t1CXY59oswjz9qimhJpNhL5ceSMezjwh5",
  "key24": "3sYyGz38zCH1PD1gLQnDACLa13wWddpDrVHpDRHsjvC6xB5XsAFToKQmim6QwBQu4eBh66LJiNDhAGAvFi7UJbC6",
  "key25": "BAKrAeu3R6SMKURYv2sZ7gcvkLLF3mzrNj56SrkVysyTDj8Z33Uawn5UndSdY3VoMuZ7ZbeyCgC2m9WGLDM9JnD",
  "key26": "5QEY7bhVw3EgyoGkMz63B3v1bgVFPDhKarRc2LTmL9QPsBxjwRiGjReLtoBZUFn6LcaAXjViBPFxSSV2da333QGn",
  "key27": "3TuGw3jAeHHH3q3tTVmRV7JL5DSZixKm8CkqzrsSu7SnT72w2UbxxEvfSNEd1qhSiqeQGXYZHumVKCvJxTWnLhWL",
  "key28": "33WLoViAdnzFmxvBLJy78kBBm5nGvJ1LadnZAtcTqhHS7665gYmnnH9mwRVDgYURaRJQQs44SyujMZhPGvLMYVnh",
  "key29": "2C2REVQePcUXmCVcb8xjRGtU1PcRzUGCbQd2MPs6oX8eRtuCVs8toz6uLgukeUj6TCZbnygo4cGNKQxB6SxK6TNV",
  "key30": "2bafVDuaAe4tHmG3N1Ek4ceVoRpH12DT6BNbhjF3z95JFT2yq26sziYGLyKzCaMvz7eCyX9Humn1RJ7q8ornNPRM",
  "key31": "5DS6GqHmAr7cUBmJAbJiDaVyBa9EeZhZ7hSKA6i7axvKkPm8QW7c5KehkQ7mKCxLS224PwFq7mPSog5VYFcBVUJd",
  "key32": "5vxssHgGP66vFFQ3mzhoibBTEoNw994K56PjMTsGjNehLGHciUGwVyVasL6r1duebLprMB8ZhQ1D9PpceDcsrScF",
  "key33": "48wgCLjmMvQv2SC8w3Pb5K74PZmCE6juAvLjcdHiMnKedYcxptMEXY6zC721xRY5NJBipcrSbP51XfQDSjBB2DLa",
  "key34": "2cW8BA7jQht87SLDJMuSjvnjEnpAxyKFdAwRmgDKGubbdaqxdQPmYiCcMbs7mAGkQRXVotRwvbhgCXFmvAgQjTMa",
  "key35": "5PGM7YhGbyE1p4XgkxGcHyVFMRsu8Fd6ZS2HcttNVVdYPt7or1xvUUEk2owdqpQm7saab1ZZ4jnH4tUnXiULXQhR",
  "key36": "3vEQq1dghM5VJAnzuz6BAnzyz5rrCLhWC9mStER7MTTkoqsg8D6Wnn6xHr8ZT2BnGms5s72zNNZNwc6Zb1nw8BAA",
  "key37": "5nw1DQcEWMNjM3QF5W3MZsYLVoB7pSEb5HCkhpsAVXv4WjcebCNp4khFM3xPDqAFuZ3j1Gc33CvKHDrSVNfLQxgc",
  "key38": "2346Z59dEhzBXd9w2WuoNQYNig3SBHXAgVtZtUzLeVqYvYgAknw2eEoSY8oYjZWwN1h4iZ8AJVkk4BJNpoesUEvQ",
  "key39": "5wBPdbSpCqwazpv2njsq36uyiMcBVvhBWMSHBYRRS591apA4ZzPoSohxccQiwGCF4D8h1S7UvBMS4JczEAQef9D",
  "key40": "4SbaxLEJVeYPmZyfNAvwiNmkBhK6NYLRtJ1fU3eR1yrJfvJgAGXi7duWJP1s8TN4DjqoKJzfbsryaoPmgmkNqi7u",
  "key41": "56fXAR4gFM5Y8tK4wSVLHEiMDuuc2q2SSbxRVZf9yKafzUtiiZg3GHHvybLC9wEwCfd4yVe563r22uDkcSiLpKQW",
  "key42": "31jbXDZvBUAyhcmvM2P2xc1LnVYxdZzZbf2wdHeK7ofUzeDe6YoC3Bs1EyVaaRm5Da3hqtLFfS1bspQaqjUf25zV",
  "key43": "5LMMLXTo1Csb2CpAFLXEy1Z9Cq5Nbs3b8oRsXkjk89AasFjJepVptENv7mG8y6W7ef6A8rikrVntUNjzvtLXwTrc",
  "key44": "53h5KcBVNyZorzqBJHYKWA68fAV65u8REndHsHoMWin1eaM9GU9WSngBy7LkSDJTgdZWA2k8FE51WfLac8hAmqds",
  "key45": "4YxoMszTk8nJgLqEmGdTTjrC4NBdXC7WT78gV5L3sX5tWkT6KygA4A2q9k5zbpWCu8mjHdkeE72HtW8SyV3uJnmt",
  "key46": "hnmLXKT6D4XCy9bxYeXXTdYSWCms2MobgSjiPTAmEz1eb9ABqD16gnAhKhzWiMQ9erfpgLN68vVEHcvdkpizCRz"
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
