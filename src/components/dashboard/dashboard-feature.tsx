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
    "59zPoVzNHnG5d1qGaJgGAbsYyRFdXQKxMMtdZfxzVAj36uFtM2ViYipSDu93cSo3uJUcdSJNdfwX7wauRj5NJNdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdMV1Xdwhz1h5XaJX1xtAP1LcuxHVYVrNGCc44GQW8ULoSTB7bPH5m3xnDYwMYTSsx9usga2fsDBZPz1TdptM8z",
  "key1": "3A5suKymam7XUXjrpqYtqeiq886w3WG3svenMG64cZnzcUe23iCDvJwfrE2csyeJy5e8ywLTMHDiwKC1KxCavaJD",
  "key2": "taYtsm7RdPD6YeCKW5rpTkQhxmZThvHwMaPGz5TFyrL3Tou8eebc6HWTQU767MRFKJ6Av81VUKQBMtxn3JJSDLQ",
  "key3": "2qJy698YLzDwnBFbW76JSQs3AyUMZSb9uBKSypU597bMV84m7RCS7ARmmZ5xnib9xCaqbLoD7WWyLPyVg9Ppap7K",
  "key4": "3ZHdrgfT5foWLLKmoTDeK1GyEJeRMJbA3Xb68eeemaLJmxssTWfCLBTVkJnjfTbhsUUiRp37t4U1g5qe3SkjDbhD",
  "key5": "86SqgbuB19q7eyWLpVRCgkyNdyFRkB6bJY2q6qZDHgrDw18YecBGSPiiPJ2NPMQzDDyVgWZymWLHUGfqdGFaqPn",
  "key6": "5CyW2qhVijwL6ZSkWB7Vyfcm8NM5oQcRPM6DFiHVLdnvKQmenKLFGcfBm545kXgn4D681dbBHtNpMrmBpT2LwcyJ",
  "key7": "4yRdnv3nUczQmmKdcKshD7Smci88Xnb1iNMovjr3BrKFh5RASyF1JFrBHFH2hmr3ttqz15WfmzJWw5RLckj4AteY",
  "key8": "mhj6rt83zR6kwgajghNCAZSZzfB8fFmVSYUrhRHjGw7dNruxx8ScyrfYjMX2AgNghuBdLVLW5ZFSUu5ZCshe9NT",
  "key9": "kjpEuqjRfuVP4jjeho3egHoF3u4dS8U17pA3BfL4Dmtaew1eDUyGN1eoeu58qYWgUzX9ZmPKphzHjtjNTtCSzJG",
  "key10": "AB3Gb4Frj6RXmV2Nk97yyaNrxb2P7EWhnfN8GdTebfACEADMD6pQVd9WzHMLhVYJZcoZcUvZHnghYxReju2TSEb",
  "key11": "3UXvXrLydJhvGHSPFp549NbaMT1MXTvsSiSX8jo1cAMCEuRdpbVLKTha9sXHBHkcW6qRcYqUBdvJEMwYVnvKED5g",
  "key12": "54cdghh1TjFRC1xb4HXmR5EdAXpD7q7GFDW2Fz74PcnBohUnBSZsnYQniUUeC4YnnVuMWGjd1QLeTiZ7CV9S5dv5",
  "key13": "5c7UJ6D3myFz59ytkGrpeECNatJTe6jWmCLbzCrFGycS37BVPfb6jpexfrPDpL2B93tVJLH85gqsKaDdZNJoTQvu",
  "key14": "3Kwjn6AXeHmXJccJU3WEXmTTTBiQV3J7bxbNK7L8kgCqSBschet8SsKbnE3LyyzWLf7PVyCeHfVCXuEHZpudr4dX",
  "key15": "4gvGvxuBeuAcZ77Ri9XnntLPywaYTocMB5K3HUpodS9BhwdDKqLFo7VhgQcdVbJ3wtaYM1VCKo3uHdxzX51tinfz",
  "key16": "3dDFZRNiLzzNiwCYH7YuHNu8nZUswFwxqNpX3ByvBqBDRXpgUJfxSYuN84w91gtRqhsKWxojBCCKBUHtvtE1EQhj",
  "key17": "4A5kMXzis3oiFFfjmjXhAfd1JJ9FKA9NHcc9BrJWPM4eEdiCm5JKkWFf6GGAUQcsqCG1am1FMC2JD6HgHhLSR194",
  "key18": "5FCB4S7JmU2hRHqEwFusfyzXhXbN12iYbZ5tG69WQFfGnzsCS73bugxsLBuyKKfNo77JKADwTp4rLn3hvgtwCS8m",
  "key19": "4iocCnZMPbVqJcNXGtyvTDz1YAXeqJDQ6mz1zNiHatGhBiLgZ6Y8nutAzUc9TheCXfyziFcSDf1eqJHJkjXQ4ZFr",
  "key20": "492a73y9vrCM5Rpa51E6f54wyjHEpTrCzfZYMXymim5LTaV8zHxzfsQmbwHJK78ki93TEPecwjfBj5uVGYvpAFHc",
  "key21": "TEH5eyhsbtEjefnBCkA5QruvxzqLouNjMynn3wPCivHwudwoagLbfQ7BfhKNs6awqmYo7tvZHvHen4vwjv3y563",
  "key22": "2DhwMqjEbDepaWi4m4h4zmMj98HWcmwwKfJohKCnmjstbQBp2gWXJt2tC2Dx2Ngwtr9jGFGEADcSqcQms26RD1Gq",
  "key23": "5XFidgC4jzvbtWk6Az7vzGgqifgq8Neivz9PEXYiKNhZt6wBFLTnR244yZGT5PsPV79UVaNZwQ1PXnqUSLDCfuAs",
  "key24": "4cn38NsUBFHS5KTa4vSqFxwUwpMwwJn9Ke7VTpvZEsSod9UoBWj3GrPq2Unq6eSLg6oeEyWFvS6ySayAkgsVsHvt",
  "key25": "8uwWLe3FSuSf1EDLYzxf3trHhQ119e82VG6oGdgGL7sxK2ojXF22Wzr1kBFrQyHtgVaKi8aNFiBuH51v48HCqhr",
  "key26": "58BsDF2qqDy2BeonYd8h1ARQBefkNyaRZJin8cgboZf7HsgM8NkoKzAKiXs1N8RQWmdEH3gyh3ZewyF4LnkVXA1B",
  "key27": "5bBvogHQafkQ66TzbydidxanphKKJy9Pg92Zu7RYYWowFgVbnmQ5tcL6mz1r68GVjvvfMJWNVUAERWsQkeCwhRxq",
  "key28": "3kzbnn3cijJ6YQcAPauJpsVGDJYzUVRbWqupfKqU85k8QCqT1KF7kP3mdUpwVyuQxah6WNafj7XcMzuccC3egCm2",
  "key29": "35dYkfRrEN5iBtceKmgDurC3xHoN7XxiQrt6M1Yw21LAL58wMJm4yKGpdYNTeEjafupgvRJrHeAbZVrWxdLXb1Cm",
  "key30": "3QvyknmsrciAmyD8dkji1en75yqbxfPVD9xAZNXJrDZSAKHd5PFpHgfxEbhJTDNDFW8oQVNiV1J8r5UhQNbtRSDM",
  "key31": "2RfZWEC9hvVs9RjkFbeUSKq4w5RobNdKBohY4x5V9AvRzedfhKPkgxjZQieQDZgmq7LnWGjKAzU9LnQHJMuQPydn",
  "key32": "rPhrVm3K3PSLqFVPoTGTaZYMLdT2NLoBwWWhCYEpyFZrEZoLYEuu5vVGAmfhnoEuTSqw2Vxw1c4rddUq922GP9w",
  "key33": "5WPMHCij3W1urAFKhdXDydP3jBkGMb3k26fBHDpxa15gAhPiwizbhYSmGxi7CtaxawJeP1aLByck4cXy1NFZB6nT",
  "key34": "4SKCvSyWeimC52hZu3Uq1i8JHyQpYVDcxDEbgZmPap3Ag9VNfaFHgDugfPpxwc3eqMpDvyJEqkSZJzqQDt8TYbAB",
  "key35": "5wBMVFkMeNnmR9mmXEq3Pcp8yDDRnDR8ognAqzWbsTXXZWBPYMtzB8hUErZ5FkSzrC8Qk1xdcg1gmFdUWbycBhYT",
  "key36": "5jKmsP7yu4WfNUGp8vdn21tuHpG1DNitV6aqgkavrWTMsNAGui1ktdzsK1XMWSoExj7jEst8i7vdfMvvKmThxExd",
  "key37": "5M38B6FyT4ugFxqWqufwxAXsryjsVjMRyERsgnWSRYZpQVtKVerjsUsmHQAXgH83ZNsGGt8XE7s7KnnqEpAMr28g",
  "key38": "24Jb8sE32E9vQpXV4Sh3hBteHTZvjEBh9v2eZJyjVmxiZkD3wwuktQ7pNDvebLC7ausbzSWRdn6YYbmtFnzXDM8f"
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
