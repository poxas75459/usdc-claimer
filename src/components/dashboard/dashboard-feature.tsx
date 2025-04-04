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
    "5c76rCKNaGdhpAw793SuuE7sDe1ch3BTrTprihxHvGdzGodwcCCueHXVDfm3nQo4nMPZn98wW9CcCFnx2dD9Fwys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6Pa5H7Eo4bAftF4KN8YdXYpmXUQ82nk7NdkDMK2qKwc9tB7yQXR99g4AK4wZ4zUH73mgCCBy4rmbUGCKAqoPqb",
  "key1": "4eiHzMcn441tYkeusKgJiYpCtjCvEFRYFZnMkFY2XWieWTBuVDq6UoULGCAqjpvmdTKPcWC92RDWABqUCXE6Z4gR",
  "key2": "5qizyXNdiFS6FXgRGKAtprcf51jVwMWAjTMcdqv61uhXrhwnkfCuXbMPawyAF2fm3Efbi4afAGhfDedg4Sozdob9",
  "key3": "4c7pnYZeB1gUfYzsvgHoqnVM5HwMdKTY5B8ondRogETSBVfRiYG8YEH9dpTc9Ysor1goTCb3tHvcrc1Tygya4ihY",
  "key4": "4hS7J9HZYGhaZFYnhXigoWmb9ntVg9PCD6YXPqbyfBtq1vQg9VLPySeEmcXcDj8SgcAaHPDaha5biULvJQ4sj7UZ",
  "key5": "4mKu1BFpPfPrQiiJuhN6XWNirL5bsexvEqmZu659jx2ENCPvVYEUND2PG5MtrT7odjoA4xvop7uPUAZY64YFj7bn",
  "key6": "4rySh7mW64AWY8E2PBRca4PS9nxTnLKuGXuoXB7kfUvsDY7UBLCi8oCtDbd3kpuhEKTTCQUv4FSZLPjSDcASmZd9",
  "key7": "J7LcndCB9yxULzUYzK86LH3WJUbvnAnA8XmMdUQiaBvzUtGePVYYNc32nGzCK6UXyVAN5rxGh2LgJ6ZQGedAddz",
  "key8": "4v9CAA29WjabxKBGrGxL98Jf8oc1ed7nVh3NFiTXJmK4pLXQchtP4g3dUqN1EPJ6vk1wgbLrXwhqtXL9dGxoXeJ4",
  "key9": "2uX3n2fxCNSNTf5Pq4F6ooHWhSbZb28MtyboRzng1DpshDXqyjVpeoKTbQ2nxoTkmRgeqdXofY3zjckZyyMyR9xu",
  "key10": "vcavbUsvzngSirB526GL5BSP3Nxt7KRTct8wf1PkrxKKT7u9Hm8x5Tbpys7qNB8t1CrURaxsJibdeyZKi1Q59Pp",
  "key11": "5Q2eoRNh2DhBoMWt3aNYDaLJcj1oKZuRaozCxzGELUfjwbJzNRADHFmMo5C4qtbBM6XDc2mTvz3j6XgaJa8f6yLG",
  "key12": "tbKaUKXUJXau5AxzbwjZnBmAtBE4wbfpXT4UmxwuQ521SGnmCR3ePbiJWVSaP2uXgUbW4WNQeGZbm9D3bdDyjoX",
  "key13": "52nXCYdFw2ZHkTt9MYUiKj6iN8t4N2Zbrfv59KfCDpg8GfnkSGCyCPPivEneWmuRWLaunUgNgfGFZCyqsH8DJL81",
  "key14": "4GyUGTS52g7SCsxPEUaPdgAuXjzJuuDBHSoF132rJ2tK8mXeqvTu1sFEmCbi3ma8FUBda5TrnEiZNCQPkFSjH5n3",
  "key15": "3N1jNuygPRhc8e4yenAR4ZYiAqcnisHL9oKKzGpSiMBCnoJXPemmebf5uqTAxLhYK6p4MFcFuxoTBZJwngWor6tN",
  "key16": "274uzFWPH5ShDYLo3EVNrFJ2rAU6cyzGRBGJqv74vDGUCwaWrJ5KBo4pspfWitxcHrAp9DTh5ztQ6wuSHCpvxGrZ",
  "key17": "2gmNr84YCU5RvWNEXvLRUczs4pXkfhYkqcVnzkbK8SXXLCmKxziCsxjiqWmye7TkMLYXnFpsVRJpkTJDUzQgjBqy",
  "key18": "3rkjzUZmkuYVGpEHHZGxbfysRBWf6qfGtLFdqbiF2YwZRzRpXbmpoKCAB9bF3zusW7J4Qugt6H8CXro7HB4Wied4",
  "key19": "4UD26sKnYgPNmTgcHATRuGoEyNFqRf4XRDRUzXTARDzvNj7oGf4GVD9w5B9b2mvbD4nhjv7Jf8Rzpr4U1tkYSKbB",
  "key20": "2JztjTT91NkxHfbEwMAxCrbK3FhKHyqJcSDjrGod3Wb1fwSTs17Ccm4bCDyg6cYfihLqW6RY8Kcm2Di8MSYChkRC",
  "key21": "3s7XjScga4mfhxTmodJppSyXnC2PR1fvbuYpCn2LCJtB47L6jBiMtV2WyWct466DbbcdHjkkrNiraeJQh3XbSs8j",
  "key22": "56xbnRwhBbfuGVE24X7tJc9kFcargUKMZrwn2C4hQF4Z8fMEPhVXxZs7ZidMuKPLCAWwB9qPQnjauS4vRd561Dm5",
  "key23": "3yCGuuBhZp3SPB58dyxg7Kw2gWYTSPV9LbXmnFL4mkGGCfniHkAWMjDEYzhZQhwnr5XVR2DYX6ovJf5P2ZCRPxwH",
  "key24": "8ivXLPY9K5qKgaGqdk8QEn2jpZFsotv4LZ6UqgbxqaLUGuGXvpvrP5LChC4QLfpNRp8oKDmcdxRDTQqVLtwPcAw",
  "key25": "5mmqk7oZwZrFBF1rYdZirMZWrQewheq1Fnj4b1PXgprPKGFNB59horY7GdvYEPdG8npJaf72B1m5xBKEYpC1wjP3",
  "key26": "4Xgk3FiMAyMtHATwwvz6SpdC9x7k6YaMjzeuCbJSNLFv9FgbgUDEQukC87DvawXudfPJDvz1NnC9TisCbzCvpfZe",
  "key27": "2y3ASuBGjwZvo1AdPdgKKtxD26vKBrsYJTapRNkv1tFT6WJA2uLcgwjWh2hmU3hvMHfDRMjAApLKtuSPopxPMQUu",
  "key28": "4Mb8DuxNZsmUUJEQhyBH4kCpZbVzrMfEMs16ijXhjq7bh4aB3F9XhdLaFNHvtmjSephcxYVdPYyZxekSXc4KYGRK",
  "key29": "gn3GyuYf8Zm6U8YoDTxbCsYvtXAMEjdmboRyjp1Hk5v8LSnnvhW7dWaXt5svUwBLZEcXwAzCZBmfRtkyzubeuFU",
  "key30": "5uKEiWRKaTsu3hKQ4BX6new4WXfqWb6YocJdcXcWoD9zgTZEJQxpRp78zAYQUpVfKedgaVtNYDQTUGAS7jiLsGGF",
  "key31": "5t5yCKfGkm5T68H8oC8tG4uS5hwu4y4odiRXzJiYsBAM3EzGbodjp96a7HyV4bXsq1cMKsQjR69WZ6ciFLY1gVw",
  "key32": "2eHTxf4Z5pKNmx9tnCt2fn41RhyccHQN3a9zV4hUZY7a7Lu4hwGV1xRDXaTUn6z9nBn9ib78ZxwYceFLEgEfpBhq",
  "key33": "2SF4JCm75nAaTgzVKrX5Dieir1CX3rRMnuXxrg9HY5n7niX1VDsmU4E58wGwcyeAv1FCoypWgX6Jnbs7Vf2qdV9m",
  "key34": "5Q2U4hqNNHkd9CVj8VnYvGxerhvrtBky645xxVzbdM79qLnrWCQrZZgXbBWenSHuGRQRJtKEtKrVuwrkk2fPkWeo",
  "key35": "onuRoqgwn7Mr219Te7NzUCB7496mKVSuvKxjUBGGNsZqXojQ47uqJVi4J4EsCDokfCjvAYFfCKfuYcU3qVJHTdb",
  "key36": "4igxvLbPmMEoSRFHdYud5teHKU1WUPtQ7VGUBbge7uxTM5YUSfrbZjvMfGXcSc9wa7XMmTn7MPKbeMoWmiDXnpFr",
  "key37": "2N7yQgEohMhzrANmYiuV4bJjTXgFi5cW6WBJggSq5dbtiH8zy5aNRFKHjETBvKwWaHNbG66QvVnoxyfASNGVK3GH",
  "key38": "2BD9Y8Qq4y9Z9VJ2NXmzW7FPKZxzyZsVLxMJdbkXok3rix3YBgWTAQMXHZy2CSDEzJWmmMn1jKtngCE62YAEwb4W",
  "key39": "3ZYPeTXmHGUek3YoeBx8eqpTkndBgeuk9moSiicEY4n77MkSAdHedHsErCuVqPEDYax9CJxGtmKReqSvyafan7d",
  "key40": "RksmJbuncmEroM6nqz1ttvZfeiTDjzDoWAUL15g3K6GZ7ERqysghSGiZjyLP7un9Td2wkm69i2QAizJ4aCAHLMz",
  "key41": "4UCWBTNQ1GzsWtWEpfXBzEzuBVn1YBbR5xjmKTeQxt6RJYBFVoEri4Zwt7Qbtwb9vVDwGehnPqS23Zi1SQb2kgE8",
  "key42": "4Kc8oaQTd344icQpoFYA9TY8MRfjmMDqmKBfmGL9rawXgNtZB4C6TBuPDLogFLfum7k5sCE1oU93EvuxgBUiba9R",
  "key43": "4vixBSwhHmEQrg59T6t6AuYpA7VqWXhVeBCekcjYm7UrZXPq9rzyiSPvNuRtAgVCdvdzhmQJtPYFAgHX9B4QfHr8",
  "key44": "2QpKUujZSWWC9Czn1Kkxd9LiDaCoCpU9fmVsCrpitmhvTBaJMu11YVo96BLN24nshUoLAdS5ifqDZZtnfccwGxiu",
  "key45": "3D96MWqyn5T6qgnxwWShjcV2rTv6dnmv2akVNunb1ELsPHMf3mTJpmRx7ah5yDReayqKaJHn1UT8uK1WfuwmBEZN"
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
