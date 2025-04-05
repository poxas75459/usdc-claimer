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
    "2e36WzAPaojSAHyzB5sE9vTQ9xcGtedwL9quLqE3LxRsE1AUmrMTUsA9DKxG4aYZZm37UCpzzojfoFjBJJjVaYz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SqB6rEasiwAQKbCtc1UjPhK5iMTKN4jKZiQ5WdEHUDWA2M5bCR7kod3xWCbPVYJZWMVS4T2LmajaKmxdj1928pc",
  "key1": "2JqWpo2eXv1NmX3hFRGqyXeY3rgtcod3pPA1n5DY2CffdpdamcLneiuFLkg2PEAAunoWW2YvUqbEV2fmekZyEaTm",
  "key2": "AEmdqbHbwGrjT3Ut1Y3puxGZYWkCAvkXHaU6BjNFz1LKxt4WN3igXQdwcYbngSxkZyRFqVTADSQ1upinHvZZx8K",
  "key3": "4B7WBwMiBYg6X8QXsAo5jTRVHhsZ6ZbrRxC7pFESqfTbyEEN3CxNimmY1jLd7P4FPqNZBPn2cpqVKUSgin2kLV9i",
  "key4": "3z5nKqtQvec2e61SVZa7g6dWBU9GWgphQ46SxETqDWBvojAT3gC2eMNsU9VdtKtBpk2eyf3Yx5P1x3C5HxZapLWj",
  "key5": "2UXyFyzzEzM2MqYmvicRkKdnAMtLHX2ayJYVgBTP1gf98rgdqV8D7VCM82UFRbhUaYdd5ofHcgfjezQsRS3U2bMT",
  "key6": "2zHk9HYaEZJmoSARmuQKPBW3bYqFqUi3pukRjK34LWrjTv8uDRLum2sAaWXdd5fQ3njjJupP3oE3mzDd3XUv9jQS",
  "key7": "5ur9BXBk6ssyibpH9BVS4iHLnnU99Ybgdpf6H9WnDZp4PNquNH4HpfJ75Kvz8mzpkb7JYGDStEbwMZJ6iQXfceE8",
  "key8": "4J2zuqzFuPpKZCkLpUjftHXyxJc75fbrQewSKsYJ99Su8qC8Dit5W5jx9jYsgJCUW6hy7ThvCZXBgZFaEfJrUgk7",
  "key9": "29o5rF5kZkxatRdjqNBAJHycPtFhQbaGe2KW5bBEWMsADnffebPyYVEWSLqQZokWqayeonXuLWEPf6Mna6QrVhdH",
  "key10": "5NvEZinNwRCWv1vAtZHi9fQ5RK9KfaPZCsKgpxHB44x4XihRV3Udrfbug7yJidbSonJpAHaeGPgv6XEZmwCcfxb9",
  "key11": "2mJP35UMDy9x7i5va1TTY2SafRpiAfYo7zTzHipNToAkkNC9jNBQQURAJfmndUhDfgycaeuse35vaALQKMauZ2ST",
  "key12": "2S5MpVGZNQk3gPn4gPE7TgK3HAMqEbZApTHLrqLzCpcQXHfPc2Ru6KkSvk7YHFXp356ebExA48Yp8EtSK2SdZ9U5",
  "key13": "2himPvcu3AnbK4o4WFYidtyeUf8uq4KkbDC9GxQgrj4pZ9ARiV1R2z1fXJPGAwVoqcNRwWMFyFCFD3ht5DfLY9g4",
  "key14": "J8Wd5rx5WRxTZzHU2qAMu4RehY8ekRauBUosBtFnxTw1TS4dsz61SNnFBWQzhAb92JhgeWwGtpboeUmFFwLqUxR",
  "key15": "4jfpkgJWuZbY2EybXLsqiKQzzzT1LZVg9tqfmxNEerJHq7vxYYeS7mQ3pisRvSo4i8cG6npHah1HakSo4Xc5zW3t",
  "key16": "N7vhVzysx7uEHfoUTkge2eBQrFPDwvEAxYruMWYxnoS3cBXZ8pWHU7ZjxwZFC8C5aB3bc2YhBuJYTAVF2HUzWMS",
  "key17": "3HknPivvw6kTJhSZ3m4DpomD6bbT7w382mWMkVkD3Em5WvMVXEmeLKg38KNaZNGjREup82x2KpCQzZ8bi9HvQoNH",
  "key18": "5a6QujoyLksHKPJHi7GSRozh4j8toajaniTwNCDBLMpN7owzSHQsgBSuKNndKeF5RFr2hZ3hSf72zSqumfcHt7fg",
  "key19": "2n3CEJaAbtqGMDnUfxzVGyAEsbez6is5GocZ8BEg6rGbijqxyxyUYnpF4t7dnVJSRJh5V8NGrAa9hFZwyiikLN9u",
  "key20": "36GARmgxqXYvb2Fv6ED72TNqZaNrjdbDKto4KEYr1FFc2BMfs3o1GPccWKuNYqABM8QgEhTaEqvMXKQCsBVttHGV",
  "key21": "xAui3QBGzaX5kqCyLc8SsQXc29L2an25gQjnZmpeH6KQiUYHvKaKQ3eBievMraxLxThCVidJPLUZVrSU5iBcrTq",
  "key22": "2JoJHKd1RZduJcptjtdnX1ozDGgemDLVsxSG4EK7KF5N9T3PuVvFUwxYs67DLxexAdurAbX6w6RMR6qqWabDHGyZ",
  "key23": "62YmCZCidB895ETDttSKdcT9uGnrJ5W2bHx83tK542N5kRBCU8phjfTPijgo2BHS6ZsPvw2KFr17wkJbYe3LwRcB",
  "key24": "5NHMuRFsFFdxxcD6p3rSjJKhHPHNGW3fmqXomBKvBMzvSct85EbYu1y4m2Hda7QkzW4kgxEjw85v6wvBwxCeZGTS",
  "key25": "JGpGzMuJBd2fxvcwBBjdpjqpudoFsKwQfRGh9K3vWPbnfBkVyJDi3DXdo5cvznSG7ThYd6GURwW1ej9ShusseMr",
  "key26": "WB6WNkA57ME2dvaSPJ25xouS2EQBm41rsL87mDtX4LmsdsFzwF8jVo8e2F8P6R68zDdfYiWpoKAhgE7nntf2gB5",
  "key27": "3P16KL3PdD6oLkbYom8K9iFppGBAigipERtJqa6qSzWcXBm8Qxbt9t7vmjk2bf7kMF2WVYxH3aeXZD5VPCJB7oYX",
  "key28": "324jVXe37WSJJR6NDR5VM1TesuMfiiZmMyDcqUNdCee1G9Mm4aUEQv3rQXfeTh1Cc1gbhmg9Eydz4r8gjZyAobYY",
  "key29": "2jswkygpskB6Xs9yBJkZVmU74gAtvNABM9dLeXZFJYHwrkaXfFWKZjb4iJmptoBBc4cNiD2NG9811txjFZGM6CJ8",
  "key30": "5AvQwzFQrp43N2vmjNzcpBmLDeHYsDZg3yrB8L7wAqUs1jt7WYANHGK7ro6cfNrG5t8yegGEns9UAACTnX6APMZ1",
  "key31": "3Xz7KFmcYbgpEek8T7cwtPegttbnETn4VYJv5c3KMy1BXff716XtXEsBfan7F5MiGd56hHAzFRkmRw84ogRHC6Dc",
  "key32": "325LisTHBA8YNyu5GPYKzZuosAVqehy9hc2TDjpXFKkMk7gNKbKXuswgiHJJY64DLoHtzigwtRvuizdNnZjXKXpW",
  "key33": "5Gkw1feFxA3wfsSESvJqVa9PTWyrCGViLSxUj2vn8Xrp8AWKNGskxUeFNJMYLd6HHQrodAvjBH6jTgjDWcixfrjb"
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
