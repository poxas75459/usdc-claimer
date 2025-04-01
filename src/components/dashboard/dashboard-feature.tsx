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
    "VsASuDEkSjsfJtAQ3PHrF8NYTKQpBM6DsG1gM12TudHfCndFgKETZLRfCfAQETayYpZ8YKLM9xuwNXC67HxdLHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDDW7LQr3dDWhbD6GVgHNxe5JFPF5LwNBfVb8jayoVM8sYE3dtfDLfSUYCaMocNiyWjp8hkpr8aC24AYevv2LqK",
  "key1": "UikKQTKoTLAiNFYsjooV79TLqucbFtyP2Fahsk2eBcjmZ56hDhyx3g2SArrH6G9bD3FLCqQ9FpVuN4qxonwTGXS",
  "key2": "2tYVhRWChwNWbRqC3Fxb7beagupFS4Y3LfNoQuMsB5amqcAHxmK3Mo9Wgh4rwsXLTg1EAgv2eNotrKLEs8tAyUj9",
  "key3": "2dDjjcCS82cRxSFLpaq2R2TqCGyKh9U5683ua9TPj4haCuY7xfDPnvAwV9QpP2wKyFnaX45t3QXUuadpsQyW617m",
  "key4": "brkYmbg6sSJ3WgMYcyWWzikaatYS8bRhdFk5ANyATbpXpnfnFWV1uS8MVYzBwjPUSfykr3hCSr2HWy1oKsi5XjQ",
  "key5": "x3pC38DaDm7ccHBGkLYSKbn2SZCWyKM3nKSqS2pPr8Sfg4USK3EjZtze6kdzVV29udZY5QTT83ySfHJGvVZcdAG",
  "key6": "3BjXsaTfeVFkcHhChWmh1ZtEjAv5XU4eYjMPtBjFGVhQiELFDVk8K9ukSByLyR16SeJeT2zUr4dom5zRdtVK2AHC",
  "key7": "4Rpqvc5wXuJXP5KH7MzGsA7um5GCr5yFJ3ZhMsV9K8uBc9FEo5siccGBGfWgSFsRd7BRpxtwcWZwyYXjVncJpmZX",
  "key8": "L1Yrs7tbVBMXVXM6pJBKSwxBmVHBFwsJRh3JJWZj5UUejmZMsGxu7dYh8SBr37u6YVMw4HzZJGg4u9huVsXaTDC",
  "key9": "3vPbccQ2iuxA4dJzUEHxU9n8TPgnybHvkHMStEMHvgA63AjLQpwPpPh3CteakXXHbWa6h1B2pjzXSVkEFDR3fiV5",
  "key10": "2H3EvFYBD1taRUfntsQjBqkKNpW7FLwpsVUBeVhnocVXYwL9UmuX8Ra8UP7BVpNPb2SHQqTYmwHt56K2zXbodKzQ",
  "key11": "5LVFAwBQjR7RTD9KP6xNN2qzqasAyHaztHZCE89WH3Q6UV11Zf9URLS5vd8MEb7KyyxhAc6Fscmf7LqXofti4NVA",
  "key12": "4QsKS44Nsuea2TzGogY7in89PWrQuQmSbhCpW5KvQcgv5berhThdMuXouQkDgyFEeMRk4TnWuUag95DXWm9UfKru",
  "key13": "39wk6DMy6KdWNDmZBFiWTaNEKuB7CD9m7RazGeMry1JZi2rFF7cho2ESDKJzg8LrVHxszdrS9uu6fgg6SWSJZXnE",
  "key14": "3c5hGpHxR2DVrE69qALL58Bs8zJr6acCmwN8WMRyx6Pza18AR5UjrLrC37KGbSPBJAW6kndZ9cT474dV6Xof64WJ",
  "key15": "2MyKS6pyS2mi8gGLfizL8Mh24KRBaCTpDEDx267ePriAUxkKvyBfjpmaGyNh1Ve5qEa4VbWZdrje4Hh4LbhbaZJ5",
  "key16": "3b2b2x2c8g31hVfQjrpj8hUR1qwCpsouceczCFs4qUu4wFr7RiYs3gXovahkM3VDbA4asRaKoDZhgZZi35R2hGjA",
  "key17": "3KLNzpRn82XxSLEN6QZTcDnRfQdrjMzL4t4dhk1JyUr7ggKNfU7MxbW6cdmAqhxUUMQdazfFCynPsRxTNrmYgvgT",
  "key18": "4x2QndhJdEEcuNcrArZyMgFQMMN3tCD7JCvK88nU1cp6bXquYYdanGmzsodswvW6PZiFB1M5TSRCiTVVdZFsR3j1",
  "key19": "5rKsyfmrQPdW4socJPpyj13Zve2qBtRjJ4vicDL9PFJQgK1NzdNseRvygkRoNSshhTDD1i4QKEyThXL2X7n8g7ZF",
  "key20": "491ZzZo4UdFSvGvEjjP6GEgW7wooEmMwyxBgj1c4VUgm4tsysQd1Uw65J5rY5FDV83fwdqA9oMjkagW4D8VaoUC",
  "key21": "4UJc25mgmSHF2YFbRomiudN6ZxcSpUKEBATRm9QPstuUk5n26ZpzWF8G4jQ8kQQy7GxEfBm5Q3b8KLDTPEHQZt6z",
  "key22": "dTBPmE6uyYQpHJJFYensLNnTmV4e7TYc71Ubvi8KFRsYP73PHDafdhJJaodpShz8EE8maSbBskwvqmkdXco8UTK",
  "key23": "efzvYMKgAAie1hw2n5wSXsBR7UwVrLuYvXDNzy2xLPr8Rnh7VajgtNeNTdaoUg1ssDAw8TirPioQM6ow34xsP28",
  "key24": "4mMEiwapbPG2kcKwWkM6C4K7eApD13imgVneQiTz7mRZ4thszPGqEXt7gbLg5uYw8agey1gQwne9v3xw93V8dccr",
  "key25": "37cJRfFAa1rkXrEjMcTjVsrthXmNbEsym3xGHo4zuRnwqGdxifaKuMDC8x7sETxfcKgpb4GLzzfSYL6MLV7UiH8L",
  "key26": "2uPhvCy5BJ9bJACCKFfLvDFubQJcdXecjymEXg8uq4bkHD91jQG8n9zPPpQ6qrRsSoXmCmWux827mikK1CktvNpU",
  "key27": "4MoUhnrecjfapFGZS3woSBYRmXhbDADJoRcidV5bZc2o4ptYYzyB7xLD6hLsPDdjzruousCqNr1aw6uG4BfK63pz",
  "key28": "51fMq6V7BKxUQojYQ9DG5ebXnhdC2iXjie9SvQSs2TD3YyBZRipp1GpU6t8pZDidaqM77bnwQP9TPfzSrPjYc6sG",
  "key29": "297GtW47qJom3EtuZuXxgwE2wDETRjxA8J2AWJGxYr13SskQvJrQtE4wb9hfxS16niVqadhBMf1nGAFunvmVHgT1",
  "key30": "2vSNqWsGxMSx1hMC5ZStb8c1hsCAsdT6id6SEXfqUJ627QvuMrwtmNHSt1TAKa9HwLqfbXg6rPGJYhoz1H6mVA5t",
  "key31": "3aroWLoq9fdCF4YoJfia5js612kzj3CdeDC5aa1BPyp3sieZfoAAp2fRZL2MooBtdGEDuBiiNekQUZh2LgpmGwjj",
  "key32": "3moz5TNmi67ZdrDvZRdkk3oDsJNZtrPFdXbq51yqgKxL8goTgHRhraL5tJHQe36ZavNxtHQjCjATfxdRxEcREnd6",
  "key33": "5T791AQRUGiPg56gcRj8xqnUTiF2sCuLm8zRDeCNLGveKhgstvPuvxPT9hHXH18s2235ntAiemVCp3cNF8wkHQY8",
  "key34": "4UmrFPa7ZLH33at3t3CdkPfj2a8uKVDXKJQHdcftydSbH7fequpirCY2eMgbeTZRQtzMbYbcorSVYXKwgQxJorE6",
  "key35": "235vm8Afw29rUbcJiz21MmnoeQS1d41xUBgNatBk4HgxJGkeAXCdGXGSo1Cd6rY74H4ABjPPa9aHJ6vobHakxenF",
  "key36": "2cD68w64QZk4c3rhM3YyWnEH8KvkFumre75GH7gS4DnDiJqquC4Kkx7mLqNZnH6piC5SBXrjPdrsdFnRW3GA4DLH",
  "key37": "Gdfb5RaqdRscYMnWiuvuvNg81jUYHZfuTkjz6W7jCMrzvo4qZxG2R8pps5qj8Hz4WrmtCKrirB3MZwqSX5bpQbK",
  "key38": "3t5Nwcodxd6sLcrQvWZUXtcWEtD6v7yLnYY8MXibHqEUpiucV89mFxGHHSQB7BJvJ85vwsCxjGiw7Wur1gTcUFeu",
  "key39": "8o4hP4rXARiTTBpLuKzJ38iafDzmUgKAemtMEgjtPx6JREBGhxKgbTvBMCUTXt7yLX4E9XvP54RHxqfsozXvqsb",
  "key40": "SwiuhwRkhbBfkmiKMU7dfYgsha6M86moSY6jCa6d8pzGb8TyH926T5X53wysmkqcNRLqhmQdm3SzFfWMroKeKMU",
  "key41": "49zAmhHm8NG29LvbSBn9fngjMHQKvoF3tcGqs5jYJFhrH7geGjowbwNcLBtKtfeFv9ELoCNNke26ZUfsR9PtM14a",
  "key42": "2zLtSS1k8JuYbwUXx5UFTYbCJ4U32zzRu6UBeoBCVqDHwfgGtPwMTsQCjFS48prxK3ZcFLBnGJb4LugmEEioryAk",
  "key43": "3w5VxMPgoJFyPQTo2rWHebLnDzQSuCV2rVyMtwQ4kdoLMMRiSQpd1vp5yV1qdTG42SEcBVxBztgk29nxvLGMefF3"
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
