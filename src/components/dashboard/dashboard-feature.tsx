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
    "3FZGbFDN3Y1mzHdnBb1NKDXtiqEkn2dpk3fqyj2zSt7rfm7Mgjmo78EJQjSAzx4Z2AzPA1HrS5fzgNWmXRpb9qot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtbDPmhm2FYqvHzCXDSfNLDpGdFehczTzAQNJVusRjrnNUREAPTZpk54vp5CRRNMNR9esf8nWDb7RLQynG4AAED",
  "key1": "dg5ycbuK7vGmaDNLuoQeWqGcpcPrtgBsxW8Z7QrSLcjqm4hk4iUDv5mQamq8nQuotLYxX8xt7b4KBq7x1c2D938",
  "key2": "5LFSi9UfrfzhCZvjNnj7uST9KWCPD4qVMgFebgnzwRxVDXWgHyfJzJ3xUB2ZoxyJMD4XmT4wDekMcpQjYBpTpbL5",
  "key3": "3Ba1BYkSz8XN1AioTfjVNm94dv8cBzJNixiZfBhv7m5gTbTgV1KPx5kSxX5SXaAA8YoMFChziC9MWwRr8LBLLxW1",
  "key4": "48jXJxsSxw1jWMU17fLqasCqNn1Zb8qCvEiE2sBoRe4RRtfUBrtesSajairgZwgVjLk62scUrg7m4fm5wvA9FQJQ",
  "key5": "64nMvS3TWsJ3TFs4u4hpk5WfBeS2LjD3uMDj8WXAjZoFUoDoEYhho1aX4B2Cp7PvhqWXbmsBAMQqYUvepu2Yh7fs",
  "key6": "3u1aBpnotfom3UtRmmJLfWnKkue7tY6jQUBu38jhBNPRtcopoZMq5tvDYcaVxWgHWLXVvREGaA17DMXiJ9tqdwtf",
  "key7": "YUVFeb32cqAqznMpw2ZxKm3wCUsMPHXg4pauzP7rh94SeQd77UnE6zTJwNgMYtQdMHt4eeQC9ScZP3zqj6et9xX",
  "key8": "X9Zvw8zypJsrbcdKGUduymHVVZxEkfrCoMULLnqefCM5AUKGSWuxd4Jhm3aTXyLgXgpyUCrjj6FDVGeb8bp3wXL",
  "key9": "4xixTWiAt1oNuiY3us2XkGL6gRDMxPpERafQahBtdFUyVmPeB2JNDAbQ3QqAZxBjpVc1LreSLxf9tQ8v5nB4Tzqx",
  "key10": "3oQzUfmcLYfdwKMUy5XexioXu6nHMjGJSvCpckUXpeN5BTRbk64C78ThPSaWCeBsxYpq2ZQHoaL3wAhEtQKgWzvF",
  "key11": "3uHAjMt6kqWW4rJPiinCGdCAbZAgKg4wd7CxAtpzf1U9zEh6HT5LvWmd8zNnaWHWKjTnPb1TWrQ1xaTsxDbh3cPz",
  "key12": "4mHu4Nk8BK1k2s2kN8jxr1bzxDV3oNWg8E7gQUNTTBYEcBkcs1XDQA5UQwMjBBKKgwnJJKTUKPBNwL3S4PhVXdr6",
  "key13": "TymNEvTeKbnumKTt3KDg1FsKe46P65425Ed6bfq5LaZNK1wVPDtVH3QMPw6pRHEuA34j7mJmZZ5ezfR1x9FbzSE",
  "key14": "3qnxRVRafkHUUnDhYK6x8MG5BfQDNtygSfUK7dNqyjx2jwy3y124smoWaA3Vk9KPCYd7eVM8MVPMEXA4QCtH81Qg",
  "key15": "3tg1HnQ8QRiQYVSW3zrhEzkNGXMHsAhRcXLfVLEm5Dfu3QwLaJuUahm2u4fG6W9QS3jLaKv5oxYdYGErwRCCGz4W",
  "key16": "5Dc7oYHkwMShfc4FjVD2oLp11DD2cU67voi2jxZ1a8zC28mdvHPyhp2MFvakHxK8wiVgiXRKLDPDRKgeoGLQquJq",
  "key17": "5qfDzS4FaAcuRagBa7mhqREKjMvWHhiRvc78jBh4nJXZbjWMs4V5EwZyioDEzzvHnchH4pu6nR5biCXjf9iQEWKE",
  "key18": "PYcECmKPJqYjT6RGKNKCHvMeGWQufskf5EerDBKPhcjePVWEZdVbWKfTkA1F49JBASxtnbVcScdPaVkFodW2ujS",
  "key19": "2ftEsrd4LkFYunBtmpUshEuwgiEpEovFaGe64hDiUCgbXYAHdoj36Y4PbvM4Jk2C18N6uGXaPUqnLNsAB6HKRCFQ",
  "key20": "4cseTmvs8dnZo4Byaasxcjbz57rTjoGVLwpdkF1xJ93SRMHcD7ZAfiVgGGgkdPFq2dWtEBGDkGS7H73Y9VuaZ7Z5",
  "key21": "56QpVpphmPEfxMf3KNVDssjK2yMrw7WZRFKskUU9zZtvrqxXaUuLZotWkPisDxqx4koPxfWvtmUvzEGn3jKsNXME",
  "key22": "2M8Nw8bMrcpR3x5z9BaiSRacsxELsWFPALEd3x1D8vAVvBfqbKxRSDXxT9AVoz19rDk18dhCBsGSTSob45AQe5Ye",
  "key23": "TMCLLX7LBzTw1zA9JKRnbo2nw8k4oiSxtA23xN7fsFrACTSACVPPNpcS3Y6uug7dyXRnuCzwZrTVGoQ2SgUQhkP",
  "key24": "56K8ftsLc5MQtNrZnHnnu4vQAsytVwDv33MMCGaKLgYC4w9JxWh5GduUAwoie3Nvezkuj9vthwecK4GCMEPUZLXg",
  "key25": "3a9J3SkmHygr5cLC5pW9L9pXrSgxbcCRYUNBR2uU88fd2ADiUTvviugpu7quXQQojA2qnBEfyE1b3EVvLiqwxcu6",
  "key26": "4t7UYRD5yFBiJ8TtwSb9wxZrBZVbKdkTNsQ9EjNMLJnUmT16cgLpuPm9bHkWEg8L2awbSqLL1Jm26nMsaLoiRtSH",
  "key27": "5CxCFXR9C7yBMBqyAzdqSoBVfL8BjoLAubqPdimRHBvvMVsBkgcRaQmAJQWrs76d53VKNcjoYzuxz5zYSBq4izDi",
  "key28": "5Z9kw6jaLH4YY1TFW7kVtswu3KSUhKGXzJEGcQ8fJNdrFCA3irSXTVvk3bwvPNhZ6PamGd3jYnjkV7F5JxpZsgZt",
  "key29": "2DRiSTAHWgr9Ca8NQb8w3NNfve2xm4Rtm5pm48VfE22ciFtzp8hM6AjHfNyrmtuz2EMJDd6whDg5oQXTrHAsexxF",
  "key30": "2SvJJLBPxybjTAeEbcwGv1xjXdeUTWo9XgeU7dcoXo6qgtHrGJCJnHp3yrZodXEPEpNEymGjV83AHRmzRtRjr8YM",
  "key31": "3ti9BuwNSDpdGWECMv6nzNgypLB9Ks8J4BU3FyXYSBuErViM5tkkPbM61wGc8tgjtje6pWY3ZAMFkqsHK9DNwAFM",
  "key32": "GVmYkDEybV8MGf5kqyfE7B7anTzVnU95RiGs61AoY6XvASBwL98fXQBNAZiLH2zk37EhHXgiUbmbELpiRPgyGWM",
  "key33": "3iB5J1GaHYKRiL3yrauMDTAGSMFfigvpvEAJG31Ba4721hVGJTgrvvFXLDJuYbhoaHgDcpzN1W1f2XSFBWh5993q",
  "key34": "2gm7weNaoYhMT8R5tVesJqzPykFGsmnRsZ59Qhe3iSXdh1wU1Ytt2GRGTzZD16jVHvcfgxsCBBN4KgQu4d6oApxF",
  "key35": "5nkUEM1UEwFmihzNStdUoZCfVvV6gLRbjCLba3cLC56z67ErtxjABeTstnVFK6G5qFoqMNfAcmddeeUZzLme1RaE",
  "key36": "64EXPxsmzfVyhXPmHb8sKq1U4mjWxL65kNamoVeoWxMqPk5y6YFCKB9DzzRiTVBLQcfxMcx1NasM3U94SJfE3ez",
  "key37": "2NB6GcygHw2oD8wzPSmnk3rFjPwC7LXZCpjPucVqHuaoZx7Zdxp9WfhZrtpJbbWUgm1hbs3y69qBbYzmhL51VKGp",
  "key38": "Kc3q13PN4YGaYY23vWQo55u3hKWd7aXPfa2zx3DqCnrEgC27R15jpVcQjCzpcaqKwTovF8H2LfEVWZuLoPG3mua",
  "key39": "59opWAgRkpv31mvo82LAfGou6gtFGjTXu35LJ4BRtzyN2mCBuaQwSBhSneUdGz9sQr3RQckFAdX64BE9yvKiAjb6",
  "key40": "5zEvSURvtDPeBEnGmFtiUPobZ8GMEWfT6bdY1qxmXPXajV4uaXHRVsXUzXJQWqANMeVu9prrrjx136jeesTA7P4m",
  "key41": "5ccP7baMLuLpb2XcSAUVffYxTZmyVEgjew2yCxRN5pnE9vn2bRvmvEb2wWnyJ65KTXPvYPiB4FHqmTma27sFZQnG",
  "key42": "2gzQh2awyHL9DbNopxJyyKt5LNDxL38pxBUrEhEtUsPf67CmFXxwN8RKhwFJrYnXj6r8Q2FZyrV4TUgh7FPKAvzm",
  "key43": "4qpNkanXsfRgdspkRAkA5eAw1y3veoBfMVnUoCq4QvBTKZ5H4FJ8JPPo9JwCLRpoinZFiWwYZMgU3MyreLnrSpaE",
  "key44": "4PYFLVDoVgG13yzbyV1yQoCQQ75DyyDcEVBQuGRLBKrZPi8nrpkKZG7ugEjFiVnrFcTTjsB2Jt3tKSfM2DzdYGj7"
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
