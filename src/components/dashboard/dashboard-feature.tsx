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
    "31uis5CtafuqNxvNXrPSVC49iteKX5yUi5ZGi1PVGL5tngULs6vHeguKvZ7Hx4V9PsJYTnUJzemmQGLsRxm8EG87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6q9wd1T8wbB5xBJm9EZkfZmWHjBRqTMYeZb8GENUV33N5Zb3QBgtmsD6sdfNBuVCScLyG3dzzbqxeqqSWdGcxS",
  "key1": "5KZck5ceb3wn2tdfne6S3PvLTx6S9xw6sRJhqiQzR3zyh4UjsvySnWrCEhZ3wt3qNoeL5wCw2Ea3oh6ZRALY222A",
  "key2": "28WwQGEpSm8ZxcDdfcpcof4Lo1WV9y82mUgo13sq9cQob3SFYSGzJBaEwmuLojEfubAuun527rTmaTUBCYyth5a2",
  "key3": "5q6DYgm2uy6ZCGTtcp2naxzgz7SMxo5kFqp61sjSivtL7eJkgkFrrJwEriwy5HS4ux25mc45Rc8De8o5xaWxVWbW",
  "key4": "3QmnfKMnL1TGxWcQU5gZbCiPk4G6gYM3kGiE7NWYWaKPTY26yEVtwDvCUDQZYrqjzpBGsD3LudBBsyd52u9q51Jo",
  "key5": "WukfbgtAXFMZhanv9aT4mFLQv6mt8Ntp7s9bcBKsLAq9GxKfSKdMtbVzByyrFDU6hTrns6Dvz2qmV7Y5wrTc1pK",
  "key6": "3vEiabjydpzVbCGerxfY9aTJbzeGVRK9yCTKydkq3Z4eX6ezT1kH4pMxpyH9ATu9cCo4yBBEjJ1LGh5TLGjfpfqm",
  "key7": "EZpJqjPR6XWzWLhB1JY7hvUL9hppLrAz7bvZnBUC8m7pjXyN1EVT3Tzzq2L1mwMyotGc65FYBB9LaqSb6i6nmNS",
  "key8": "3rjRjingo16fbcxaVaQfL26YBQbcjB9zbpsZHTwkXm7JBDhbaZEk7vwLHL9EXnWAobWBNReCUd9D3gRHGvjLywVY",
  "key9": "4i8a8E5cD9A6U45EZirdAQjLYqtK5PXdGRtVRT4V51vKgpSrn3wPaB5CudmnxRF8zcZTpw11fn1dXwYbT52ifynC",
  "key10": "3ZnzosVwj52YULZ5NS5Zg68T1u2baD5ZBKXDnDxmPUTZfQvCnaNb33DP6V7DzvdegBLk5LRjnzGxRuZ6GMmxMof9",
  "key11": "54iZvt3bDTsHPin9Q85CCSBY2GkJUbVKCqRGjAVQpe4x9ViTbPdV11V3tFqEMug8c5k9ZkMm3foi5vBqc1ZiYUKQ",
  "key12": "KhUKeH4f8qiEUqxaeY9stb9oBDQpkge6ZRDmFa7tRAwaBay4a6AAYchDvo1sS7HYBRAdH62UdKu1nonFPYFeYcc",
  "key13": "343icbXrxL2qm1BTX53svXwBTKBBr18TtCnCUKngYmCtwWB4Bcwtbffa4MgBhVE4ynPo1UDrg6sShSKaocKavxNy",
  "key14": "2EUTPfGjLxmR88ZBVXvbmxwevwNYGe4TcCJcx6dZu9uHNFwDUx4aJ39iB86bEW3CC3GfMqtQU17vJ46UW3VTq7Zw",
  "key15": "SP18pav9ky1cT4Smi2TuLUqV1GYvkJsdSPSZG31v1kkrrfQcvaDBgn7ErGD3VXhd25AbrJVs6ysc7DAc1YDfqrA",
  "key16": "uDtXjvFfSHhyt3Jj2hGcYo6QVH2fwVYJftizyE3WQ63EaDXoeCNVbr7hrjURbZhmdL4no9kcVrUkGZDfCYEK6Ns",
  "key17": "36cy93BDB11Gj224CNSyVJ9i9quAJsVe7VoNcWkJuyAkb3Za9v6CGZTGwjQwiswmcnpGA8krYh7kNDgT3ydukgUi",
  "key18": "4XDRtNL88Zdc5Nh9w8wyWZKYY4Ka6utCa45v1jg7h9xhHbcg3M6PkBNEcSDdA3qiHkUx6N3uMsF8kh5Fpm8AbuBW",
  "key19": "2GdmiXjcx7iEbcJKwyqaz316brHVQUkPQUV4dwF1uaLXVERE7NyFKFuY64G3VkzheA74V1C3d34K3aENzEE1t9EU",
  "key20": "mJn5azjSJ9uiMtytPGY2SznQGoU2TxkLt6wh4NcmXw1NWXvfNHLhqydzaeQ5qFNie4U99GJsPkaiCBL7pQpyTH6",
  "key21": "2HupMFvADzsaRCaL4qtT2dcz3yHEBiYRHJhQvRm2BAdHzi4KjuCkm21Ef3Hb6oZRpAFPu4apC4pqLmXLDfqYtxHD",
  "key22": "3hvTBrjRRMRWffkW3savg6uN4Nedd7TzbdzNrmwkbfqwS3zauE7BDjR5jUjWeuPmVNyNqJ3w5dZZstgq4m6VSy8h",
  "key23": "2Db1wJXoZuSk7S5nh1bsg8eAnFbWHb1FWUVBu3g7p8HLXdempTmWFqXRvqxhoFbLRSDXrfUAWE6AHxEtHdtzbzF5",
  "key24": "5g2gZLFQAGQkGV5GGYsBSJ3PZSU5UtpqFdm6DwFCfTrPibWg4HzWSiiyC635pZtLsHYrpJ276uq6cL8CJzdJz1qw",
  "key25": "58XUUZDkbTjSE5XR3qp8Lzj4syHkCvkgXjxUcegzn63yxfZJ3FPLTc11px7vB4nimK2ADpQisUSfhKZQ4CGgyb8r",
  "key26": "46RYh8vAkttHfoHsKuKcMzjiGSqNPz3TRr7UerHk3JwrDbbtzfknhFXBzZKqVhdnaoz8kgJtMo74Jd9fvLcJYsei",
  "key27": "3JPX1jRTPG6bEsTHhQidayZoyaSDXKUceF5Z9PTK6Vv3AUBs1zTGGDs6Wbdm9e9uRRkRo54i4oZKxWGo7uNHmmSK",
  "key28": "D4Pm5Afz6SRRkuuAqJ4nGaarfKVckixpCwu7CHXdkea1S3FL1LD23z5TinKoaKV9Nwy9WytiSeHjmL83hdcesJ4",
  "key29": "3EVPCtwr5NFgccy6KdyiddrJxAMy3n1ocAwGSGmsmxDFFoG65EfrLQTmFWVqMWmnJZ5JpB2azeLmpKdaxtnoph8Q",
  "key30": "2G6SMVG2mopgg3coEaghwBAodguESxDVGRJUBDuuwqGVc4X2u5mW5pLUjUbompPBpyqAtkGfsQXh5SLgjinh3MSF",
  "key31": "38HTsF23mBC6NKZr8r5siTLVQV4G6dXuK5xAEr2bgUpEtVnFc9QMrm2LxazVqcNMw21LBmxot8cUmRSuAYm1rRox",
  "key32": "2m7pfDZ5rUD7pLKpVsVSXgzLXGqN7wzaXFjr74bwBDmBdvrTRbLcWtpZKU1pi5LKUFAg3yfzGSs7TyVGGyid6AVu",
  "key33": "3hCEHVssXfnGUBJSUzGrwDfEnbzoBB2UxF5pPyGPUHdVknNqvQ8QYye6wxM1iUGnKCRfnnjYdHYGTAGK3VzL2u9C",
  "key34": "3JxjzUYFE38tFavw2XJdX8oRdreiJPb2yHJCE6BXHKy2eq3DuckHrqHRT1HAKEdxf3WoeWigQyDCGn2ZpoMRVwEK",
  "key35": "5LXzF5WtUzkdASVDdYUCS8UsLWKW5cfpXzV9HuwyFQdDYTS61L9WzyTRWbzPWgVipihHDvzfAciZnfWHgCzj6uiM",
  "key36": "3Wso5VBPPernkqjpZUx7HxjKrN4tZBJSrLa1Etnca7hv2HG48gcqwig6PfkJJksm2r5kfr9iLHGyT8hxhixE1FwL",
  "key37": "3KmB4dDNPVmUiuVniTcyqgTes69UAyHdFFJjdwW689dpMaa6WZFBXMLeMv1uqH7hXrpfqHU4h4MwRpqxxUmQUG1A",
  "key38": "bt4ixxfW4LpR4HcduBYGkUkFtZEYrYKTxos3CrehXQ6iLw7WmZfdzy8v5bqaRH7VvZ53anGf4U2UxSs4TxuHbo4",
  "key39": "4TWep6vSDXHKeezXfEuzcXB46FTs288xhzDwZPGNpxDXjJU8b59mJofCd51ZkYL5PnkLfTuZcoeS2Fy7WKwRVSre",
  "key40": "4uFjzgUJdzcQ997NG7m1bJCGmkg6gQojvQkBh56vFWkFR6SQSbQ9wFwCfFjwW9zWu7mwLiyv45LXmdS3jX3WLfFK"
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
