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
    "2Fj976m4L34nRsapGiKz48tg7z5EZhzKi7D3z2LhQjA6ph9asTZQWWbT7Mmn7s2bWTyTAD2Gh8hsHRqmpBp4MXiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rK5cnFVUZHcfBMQEXZCq5LFdJK5SUvmcfyxdrkVJ6WMiFDqZu13KrLez71wGFni3qwjrqqvGTgM9eshK2GJki27",
  "key1": "3zkL6LiQUJfPp4GyPCwxjJQaiDVcaX1hwC9ea5Kp9EfNZ5mKjTvnY6Nf1AVASXapTtbyNU1nqqj963WhKCC8pmWW",
  "key2": "5JeJTfn7CajtvnqzJ8oCgDYHy68qBz8sWuGUEtFVufRbyY8a3iUEBdncPHxXpWNuxRGkSreWnagp8HVXz7dNULG6",
  "key3": "4DqhSqkmmsLGTA8LpmAmoGdggJrYJGhym19EyZdSPWA9B43rgA5PvaZfi3SjpgNhEAL8pweh3WBVEgQ8ukPsAoE6",
  "key4": "5ywuXmEMN56tvKT9rVTPtw94kBp98cK3gbZrhu313g4EKGoQD7d3vRuiB962D3YJKGiddGUTAX3ZC5CBcDWupE81",
  "key5": "jxoidPM13q6YUJTVDJGT2z91YApfD2MPBf512m4xBPgUSgDpymAPJuiBM4APBSu2GNvbGrhjvc4SoPVe7b38yKX",
  "key6": "4TkT6hgm8BxkJVu4JwMnZfUyUMi91ncau1zcC3WjJR93cY4Fj1sn89sjjHuTP5G9jMy51eoFuvQdXz6tQ1yemGWw",
  "key7": "3vDZAFSLo934y8d8n372kZXBLE2chQYLXCiMTdW4meGXRF6dVYB9bRc8yb1pFafjbosgAoo1bGgiP59n7zyACJzG",
  "key8": "22AQjuCi92Wn15SLgpanY7wvEpcFJARxU3mmMkkAG2z8x5LUiua832mCskP5Ky8WLGdsMHmK6z2gBVFJih6k3AAZ",
  "key9": "5K7m8jKaUw1vqa9H3iFfBjiUjbPwuupYPcqYH77Xu3YqFKeAcZJT3EkKgdcTAb142q26gKcegPAv813SYPp4uVTV",
  "key10": "3jeiSMRDw8swBpjkVe8aCA75XeJFiKqVJt8WonQmiAqvYFE2X1pasp1crv1CMvYQnSeS7NE1UstxPEPmAxHrtUfF",
  "key11": "63Z1R4Ew4kQinj7MyoCk61X3s6KeePX6bpqZrYzwz1Ko6yymuc8ibs4Yrm4mCwvRikvsXgHYLP4cW9mGEEzYVTR8",
  "key12": "3fKeagoxMDL27V2PPC416hkbgACnSWQPK7rQGBNn9rUdHkLtkwScsEtrYfvsdFWYjR3ZwmUt4XYgcL6ev9eKyzXE",
  "key13": "4cMiUs31iTHNksXeRv9bCYCQCRsdiW9tRTqhLRLeSCXhWSF53ygr7DdbXmVgXkyiPr85BVT931uUcv55nMX1QEeS",
  "key14": "3RTNrHvGM9bwpoQDCgfRtQ1x3HYRT5rsTamCUD6jy6qWveFFHkeyuEo292L5fwrepeTTVrfLdqVtaqsDKqfAs32n",
  "key15": "5FB2RyRsvdRYeLckusp86BaUmG3WkNrRk9DXn9ddfeB3h8c1LJbovctS3dg7vocbaky2FtpytKfBcWYWXGPQ4hCS",
  "key16": "5CcazWx76YSwRFhHAnCPYWSREcp4MV2JThUzPMLLw744CuMmgFsMMg9eT2DWzdGzj1V17oLFTz9TDmNgvm4DDLiG",
  "key17": "5zbip9JTwfuE3dDULyLVVmHH3jtj3cbQRkDY5e8CJtEXR86LDADzY6EXKm9c7PGhJNKLAE2PnjBDpcrUXHDULjay",
  "key18": "444LzVTPLegjok4cCZ8uPuDcKYKFdNWAySH4cBB7hWRqN6uGEMTm7pe6uGjSoHqkJe4Wpf38bVRERyiCDKc6Vt2V",
  "key19": "25FR4waS1ggC71ca1bq5eNTZzqDDziB7mWNTqVnGoVUgQYwhQHdCJprRtzdBB4khgeiK1D5LtZimcmEDKNYUtk9K",
  "key20": "2wiAZhKbRaFEpx9N3TFp3xynEy9cPyRVvgZ68XzFaCyUtxnzBwJWmd1Cmur7bzDBusAhJCD79STNNguBVzdL1jZ8",
  "key21": "2E32dkAAXBMtyyioKzAZXvB4U3hFkTouvGfqU28eJTAkqaVJ8tZpivQGRJgefYSyQBUoiVCYVuZRkc1e2LqVCWSR",
  "key22": "2nSF1L5ZE27E8pk6EMcaMWPmFQBDF3uQYUD7S6sJR7JiGPAKiymQZLJStvdpszjZo45V6pwfjqjAD9MrJKPP529r",
  "key23": "bpuxfWyt5NpAkgkYCuj3PgFq7Mk5JAFuuPwNsULHP13i5hrYgeVup3obsSFfPM6QrQdhryHm7pWduuNRMXfsRws",
  "key24": "3q9Nd8FKCG7iUWJr1zETMjYqYRX3hD7De4XFQQfQThEGzgt2usSepThDdS6YsNjCQ1dDtgpMd3UtHShiU47Z6QQJ",
  "key25": "4vu8M8YLBYk5ZwtgRqV5YsYZCAHo9faRx8H2AaZtVfmx8UfX31aK9X6su1ZhoLB9M9z6JDWvbuWG74VFXZq85rcG",
  "key26": "67c2xk4RuZnqSQJv4mg4v4y4obGAZRpwYw5DYAcdJtFByEyVQbSHCZbkWG8cBaPkhPoAXjCyD8b1kwwHZsfc4DPk",
  "key27": "4BV1VL2JKieU7VB4Jgjc5SxH8gFV5uKCFJU84ZooYqvKpXuD3Zw4tHxsT27xSd8oGm4bd82kfBBfa2BGqrEptn3G",
  "key28": "45cLWsdQRsn8hSgSsNx87bo5MUKe63JEwkCvxkh8bzaDdZu33L9Nirjd115TyT7xhofokkJ7pxzuEu7mJRjrQ9sf",
  "key29": "4YBA33PotaAGVKt7gk16J85yP1QM98ZxkjU3rZQssAgwT3QW95HKESFTJ2kPFoo8WdLhYX2MZnf4Pxo3db8V7X95",
  "key30": "4rZFTREBLo6W5Z9M1W7TwbBYoFKxf8Khy83YShno2aQfs2jq2huWCfwKtCzm9gVG9XxmHBYBc6zGFmk7eoWxkfY",
  "key31": "eoDiwNeo1ifmY1gH1nEKcLEDVH9BaXtU8EzY6si3TMvje3Hqa28HzHVqmawnWz9nEtpson3xmWi2gqvL1pWkAww",
  "key32": "3vzJ5cUFQuJbHeWAfnCJ2YJZUPoyNUKP5i25anPsT5imiktNEQZXc6N3rDkvwRYfvK2sgtnSurJqMgJTi36yyDVT",
  "key33": "5yeKgAqMLGvZaDCgzbMhZpxYh16PTk95Cs284PLidSJ3K4po3wS4mU7w6DPnrmbhNrzSjg4BYQCh6TqyP1oYvAXK",
  "key34": "49TtpgV3Nbm8vjZGwCmiHVTnJbTD6B9hszBYsmbnWeFSbPj9aBwTsTdsPyiRAzHzx7WaVELkzNUZAEperXwzyR67",
  "key35": "2cKEwAkFAXiCjakWV2axuiHiwqxPovVfxFRcwsjpNDUxfH4ajrmyt1X6F4n8uomayzthTYWXT1e82hjkaHJy5KKb",
  "key36": "iNZqvFLZFaeKhmbZkGqxaPszo8QvhiqtHzCAdaKmRrex6K7K2ub7F5Uexh4tz8V5W7B3zHtGLstFyNWjqUUYSxb",
  "key37": "29QUnKGdZh8FB5qMC9qtAh7fkmBhq95LVmjxks5ujZuf7k2BbvuDFdTuWaCZumc3ygxPczvoEX6yQZTbRGsGBWuB",
  "key38": "XuNmkGP85f6zcawDzTQLhohkVf6GVBVWXHXwxizXrBDzFjuWuf8y69c7zKhiXurUZUFZ6n3ES8zMCXdtCCYqNHh",
  "key39": "3F1gQcuSt2iLj2F1inZudFzBfM1JRhfKak4aRy7vtmfjy4ZxieEpaoMSHb6mDnfaUvTCfqJZRRZ6oFPbQejoK1Jq",
  "key40": "62aCtTY5VQYhNfMC9H952Y8JmyKeGwoppVWMQ5X183JPY2omAbPotL59cx2XXD8zxUbZfauoj5vVCdABQpt95xcM",
  "key41": "3Ge2LaTR5H8eNrsJMG66gPiW9KJdhx7VLfx5QomuJLkidNseGShYKdtt7VuV6ZH37DtYTxFrKgAkb5xb7fQkSRS5",
  "key42": "4hDUk3oP5FDGjcKqB3NM87CEsBLKFGyvqAjtUooqEVGp9QYfZiJctg6kHHjpmyc4j2rqWxkpKb2k6ADR7AUZUcCT",
  "key43": "5odQ2VwaBedPeFcdVJXnMV3cTyJzDwydsN1gv9TmK7tbputQPypz54PrrguoKV1s9jyMjXpMW4A8jrffN4mqyYe6",
  "key44": "55mw9dyLoq6Rmx3BBMm9UTgkRWHUMva3Me3b8FGtMZvuw5fJDsGLSQGFuA1NBkgcu4m3y9wAg7V8K5WxfaJ5QuYv",
  "key45": "5fPz2uDQZUjLGP3bfRATwgZnTvcWewsiQcyQnyu8aCK4CdQ78v1cadgSmmCbUH9ZuMAorcPv5CA9sYQnjFJUn3Ns",
  "key46": "3cFdK8uMZdxdLgJsaYw7tYk98wXf5FnC31SySFJj2CbRLBAtpZGj4CqHFmFwm1mYbssJbqTnoWMHrDJoKf5f3hjW",
  "key47": "5XWRUSxf3qCP1tqNKpgJYckG79RjQ8KH7WJksruqhLjhL8gspmc28XTWoayqmmFw4qrM379D5doY4oHBEXLVKSaP"
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
