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
    "3QXenMT684Nwf5HVsMsxreB6ox6s7SXC5o5o3H126gbxqzuPrccKAsfDdiq4671uCtcWp561DfBXrNWE5tkxeQpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8bvvs5CTzypCgBBjxeQp3gy1QsY9G1bAH9bgRSj1mVbBRkwa1WpWzvj3qsKKPFwF4Q3iM2FQ6adEALrCroMsZa",
  "key1": "25ofc4QKYBP6rX54bpgREtrFRqa95XE1g7zP3bY3ifajUNbD9UTucPZ5eEvnCgoTb3pcrUMR7JvhxELDvPjMESmg",
  "key2": "4b9PigyCH1V11Pm4FBhLcqgL24Y2CWvN3tSk8LzaRUbwaWWFdEjfpkoUWDLoRTxZJm53MbCPeiKR6pqM3Lt6cXw7",
  "key3": "2bmx6HJAMz6qqWLn9LsuLdnBoVJPUkdMy8xPwYysddEcxz14Khjtb35sHAqdgLv5XMpYZ61XcQ2QdYm2WVSdQ1Ms",
  "key4": "5SfeLauPL1nHQAPiVnEDckgXPsnc7tLVH7xgnoYUyx2XDxh1Xh9RLwwkcSGq4CHLsLKnv6E39otmAj6mWz9Hq4TJ",
  "key5": "4QwTyEkBwHEQWsJVyGeNJY7h6HagJRZw68PSpViS7d5c8DYgHBaxwXReWXEsV4RqUR8U6BEij4xYfjhuaMvbZ3LP",
  "key6": "yZuHjuGRWawkbGVjadac3ndjpCu1LgBH1YHUGsneJhSueGAWTGYZ3a8iP8roR4u1QwxHiQVKnLhu34X2MvQnQ1x",
  "key7": "vXBvC9Hj98GicikaUCAYb8xjCwiTwFQvB4v8KrAjE2DLumGSUQaxrTBDgc7PyzZXPoagSfeSjoGRHmna64B2MCC",
  "key8": "5ybca2qV1EdFp36DWXY6yrveL4kHzPs1aZnMBC4Nb91qe8vV3HXSCD2eK5JfMgi7mHAtYd4Xsk5B3KGcJojkMGuT",
  "key9": "64tarx1znhPCpewyBbqf6AZDK1ZvUPTw5ny3sx2voTJfuJvurWuK8rtY9CnFcFas4iH5eU8RbDXgRfjyRRPBcMP6",
  "key10": "4RzRQr3sbM1anJExWPqA6ZGhXWGdG1MRYLUWeTeurFusKBi3V8LpVeCqKX2Yiog6qheGZj5jQNjPVzqUACC4SQF6",
  "key11": "2RUrrWsi8GqtCujTrntj2XUJNAhwtXZ5Tc9YVD15VM1TELRPwcwk9fFM7FssoSMZYeaDvVtXHX3YjwW4KUHVeeYX",
  "key12": "5CTi1zP9dAT5RBdvrCpUCzT8tmFWYZjr6b8pHoWACAm5B2HCyXHyEufmHobPmPczGGVU21NkedmUGTBk8yYgEjda",
  "key13": "2YjAcsxheS78p8TdirPMtAdZn7b1aVSNuPHYmA1xoBotVW5QuCpS48cSnBbRuuxGWDRW5hVNFGLy2U3mPnSA8FQ1",
  "key14": "4bJQSNfr3h2boxSuTvCfV1dx2KUtxsgS7PG1TutqJSikD458s5CsCfVSKN8AzduKzNbCQYVLqfXWfMxbgpbSBD17",
  "key15": "615TgDQWuVqcaKx7p4gK1so6JdGUPXuKTSA2Q6hxYYcH1WVBQEHRJEHd8xnENi9joprWM8ynD5ssB1RGJFv7gMGF",
  "key16": "bZzzfLyBzEETL4WoZnjdn5jp5ba9nmDD89A3q9E6Bu5U7bNopfANzdooPAQ7qRUfs1ykvuA8Q3FCLWpS9mGrdcB",
  "key17": "4jznKzQdSQ2FvSj2T2Hgne1Gh1F1kXHHkh5T4xUmqMnuPk7XYUTKCWW1cbL5GLJ6Cn2uXi1zpsteCAKR81os8NKZ",
  "key18": "3b1TNN41f2wZ8ateb6dQpJLkRfKvutjQ6iGvYQShytcGm595JU9qFGhFgGGUN3SxG36HxcxgaSYjDKn3s98okH2z",
  "key19": "3RfWKFBguC47qFmvNTHnBdxXRYJwUs8NT6rcqHJ8uXCGfqayCcgZe34dkD3EySkDqS2TQAHU4VPtwLR3oMxuTeHR",
  "key20": "251pnfyYtRxxFhHmFF1Lxht9a9VS8vuFRJrQR4uUgS9eZPKEYHN6mfDCHk8ez5ajcx78v1NS3hiJEwKq233gTaaf",
  "key21": "5WH7gzzVZRVx89iX7jPShgW4DFkwMnNui9az2t7dpoz15KwwNcHqcjDX6hL9n9ejywgj5d6CCXy1LgJ8DWcUyD1s",
  "key22": "5vNGcX5hzWyNSKPYT4fhM89zm8E4ZrrBCifiUtghfVq2HtdsqS5hsQFVnjSDbcHCfnDFNgWsN3ebCXg6ZveyqLK5",
  "key23": "3mWoiVPRV98vd6ZeviQBgg3PWK98cGJjDmTyouT5m5y56qyZDJUEBepezQSX7R6pDvaHu8DszwNohQkCZqFF7Sac",
  "key24": "N5Ef4fHGb2BdqYtV7TnmWYgKBEk7rZi5TMTRp7U3usF5bsam16hDk4ZJWQNWtx3TUPmXmVq5sbtbt6YmMempfCA",
  "key25": "3o5gMcNnGgr6UDeW71chWamq9nYFupbPw2Nwq2muT6odozxjvwLsAvxDu7QFRUKqKjiDEWan9bQq8xMXCPwqNKE1",
  "key26": "2xajtaYsbvfp16VD6umJwN1q9ns39chwz1CUPp5MmFnzdfiCurw8oTy9AMZaeaAmFaFw8zdnJzeW4231WaU7G8jj",
  "key27": "3oQoGgL7GYUXGFNjUs484ckL93FeeMjndGK5GXSkpnUEWdY9Dc9kVze3bh8D1KFoAfgtQzTqgRd4WavWWMvaviUq",
  "key28": "5aQoWm1Kvjp3N6TdRDBzbNshYLpiZZrTSY7kuuYXgmnyVnHyd2rdTLNd3JUDQ96auG3H1W7DWx7dvCTXyRo57PUJ",
  "key29": "5g11gQN7AA9zQZpNPhuCZHLQH4ZkPavPLhxJnNNaRUj61UNgH54t9nnMz75xT8KuxGg8YjQFptAgKQT7gx7EF5pb",
  "key30": "5fo2XoKfRm6FcPR2Gv7mgHynqRP8Zk8RQEEvb144vUJkQowTZB1wamH66rFaLtnBnwSj2sgKH1SL5cofDWEA5Xmn",
  "key31": "4HPoeqj1gYkhDDxjiucTSVYLMvAPB1kjqhYkcixKibkuUbnuQAwKtue8XXN1kWDmXA6Bnrm3RpbHtTcv2qQMrGwo",
  "key32": "3Zhf78zM7MYdjeKwLcBZrhE4oxD7NBsMutZSb4hRHACHubzZ4xfJLhyDZ7aDSjLEzZdDoRxNWivMBkvULFoNiqxr",
  "key33": "22orvTZM5Pqd6pYzcgfXWgiJEodTVMqfZTm7oXGAhMyxZCBsWykCUeUtjheKyU3xp1FeY1D5sMFTutjHy681AnKc",
  "key34": "3RZ7Gvnr4uXh1Cm2HhWBvPKhFcZXVJkD97RrxQbzWZ2V5oTqsYdVGHebeWpx8MahDvzUPfutrDenRjk4GC9b8bWU",
  "key35": "4d7HCLNkZeBionC5PVYoFkntwW3pU6U8WkRWPKzUS9mSEaEUvga43CxLvDuQMy5sRBwc45kCKH3AftPedpPvLzw2",
  "key36": "mWuHrijzTxbPuKDHiQEttzDKYnggKiTppxToZWrtfXjFdgYTuAvKgFp8FV5zt4sfV1pWny1PZNZTnxtVG88TB6j",
  "key37": "2cGTYyA6JBmwC7RRirGSDaTFzwQ4TcRP5fXUzpPnK75LPVMUiiHtomesubtzDVvwXxgdxWiB43WmVNFjrKgFHqpo",
  "key38": "wCcTkssKXeabBYBdXZsZW4Z4cYZE7ZbX6mtW1Nkd2QE2CtTwe7B3Durjw5espjFsc6HFpRqtXVPdVU4DJj4RHgS",
  "key39": "4Zend5FJ86h4JrvqVQfRefim7bR178qE7dhuewy8axcEQkLnMyF4cuH8GvoF2eWZ8nhQvs69N6pVeA96Ka9qnwME"
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
