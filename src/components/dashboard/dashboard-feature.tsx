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
    "5whaGQpdquccHdRyUsZc7da2Faa6oZXwth81pTxugafzHaVt3DqnKQvC8YT7BNR3UpcMmk8SrPTMMmKuwrykSLrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yq8K3uEcQwdQUP9CKScP8HYgjtKCvee6dvnuR4ohJinVWLt4HGkTHx8vNDgXsnNQfJ8mv1ZtYeMV7DPP8E1tUKq",
  "key1": "2LrSaiZGNDGcwdCdNzmnwjnSLqZ1UN9zFN5ZXJG6eUgqoJsx6A9U7ohFv3fsuK6gAEVuMTtKBSC19SEcJWJtBrfL",
  "key2": "2YQTr79oLRUj8w1doSb6fNpS7SKn7ToTjUoG7HHcbhJujmijSdQhpLWQuiYahofU6wMaDVc4VAVHwchyEeFTCAds",
  "key3": "2fdv4y4AKXF43LXYapcqKhAe2h76t7REuYagQnfZGt7e744ddZmCdCckfmtWSqpwQjbdNnorPpGFWKbPuU7LdUwb",
  "key4": "2ykNJj3kPgKSqSJN7ibUWgjW9kH9aoeThp8Yj9HPb19Zr2kGzAZ7guQtqzVkSqWsd5d7rZtTKwr1NJijC79yCvQ5",
  "key5": "5G2kWTsQ7FXoDyADbyms18t2fBSfggQ5bY1JGhkAoBXfTez2sgdfEvrmet849NN6R8WfeLSewgRW4anewy2qCLSL",
  "key6": "4CXTQ2xzBVfDGHKgtjgYZtocoP6BDocfV6r5tUdmkjJt78in4r4X5wzr7jwo6e9x6gLPjzXxaBGfPAhLgXBPd2rx",
  "key7": "4aTE6kRiuWabAQ4HnvZh1tFG5p4HMTJsianTtGyy77k8s4eH6A6a4EVc1wFbszSB4MDYXaVAmGX687awWLKtEr9R",
  "key8": "4zvWmnLxyGbBF2fNPDLibQqc5iemnrhNDHssMJkzWpQppscDQWzvTizP4E8DqwMdo493drBKcs7kKheLnnufMacF",
  "key9": "4NriCkg5ox814RufGtikDpJBpSXwdRKMQzH73UyVvU4W4hYXFSMx8tyRKTjCZ11JFqYGH38SWH3prFWHapCopTX6",
  "key10": "4Y7127oKjP55BaWK3MhiiTX6axANrdyjZf4GajJSsxS3tsbNaHK2bZLYzBCjCKZcyE8hzPF1oCNLFchqgLyQDp9K",
  "key11": "2utKj2wZcimkMDbwFaBWq61CF1DGPgN8QMt56mj2vgpkGZB9yi5J5k4JTM88f26HsEnQ1miaSdtWHc9gvj6aUVn2",
  "key12": "4K2JDfUixhYf6LypaUpkevWUQpxxdS1jDUvz4Eppbgf7uWFktC577sVu3rubrBc6E1KEautyS8C9sRCfpm4GZJgL",
  "key13": "5kC5cPXHgzY4Xe4huJRPvJWvj9PsxWaaq1yws58KydxpbKChD6bLYZmSdogTYk5hjXNjGadUs1C2sxJ292vh4Tp6",
  "key14": "2e31zbk971u6XtZz2XxdfXTibQjZCFxFiRtQH2LNgnV8TwPEVB6jHQpfr3eewY1zUKcrYzH7pQoDPaxqijsPX7hy",
  "key15": "5Gom8JF7YkZEC6EZxTgQcxbsp2UkepxGho6q7UXnbNAd8dSJQdCx5KQFDuZGQgHGLiEN88hbMNQ11Vz97sa1YwvS",
  "key16": "4fFC5stnX6WnU6noFim7txMU1xp7wZeiq6tmnXWHQzSPAyp23hp3SkgU9bAR7izhtrFsyuaNL45MZUXrCywjHjhS",
  "key17": "3uVEVTnM7HxqLczSoAbWNzX5WQptdWFuRS91spvw4VqDyQwGiGzQRftinsSq4DRbyf6huN2NbHbLA7VcRTQWh3n9",
  "key18": "44cy36ybMf1QRjpGnnR6bf1BJbz6cZ65FrDCYMutFPhkxiH62zScFTaB3vrySpLtoyaD5FLbqRM2h6YwKbqyt6Px",
  "key19": "4DCNCL3rwK6cvPJD8rMN8dMy6HwxE36XFYytAH9mkiGd3Y5DtB9ZH8DhoTDYiFT8MdyUsa2d1fZxhXavBR1HVSFv",
  "key20": "2VVgtVNjduKUGYMM8vEb3FQYbeUNsWNnS4khLJQCeXimshwdoisxT5tBJJC8jRRaUCyDVdwzjdMsFvyNSwYxfeXB",
  "key21": "3RDNj891J3nCRCZQYAcCuEMsgErYfF7ntd56thoUtoXbbrTHZorHMNBmdXq5BC1EoMp3K8VsRXLNT8GvZRyfzquA",
  "key22": "576RrTxHx2SAN47o7iWkhEuq3jxMnemFPxx45id99i6waFpvMWvkNDfpZHgYHMunhTFP2uRmuofk4zBfYqAAvs9q",
  "key23": "48268eQurshipL5HFpX4vcBC7ryuJ9BVwtsmV7HqjcfyjYTP6C6KYVZSYPESxaNZJ3VppBaVges2BdDtTaN9FP2M",
  "key24": "2Mb9o498HFxVC5q1Wt8MXwZvQECr7a43TLPj1Ckjicq8KsKuEMDU94CtvqqnpiPu7pVupRrCm9idfqWt7TzqkPqB",
  "key25": "55nH94gXE8X4fRrcfswEvWBCJLkXFLgmGgcnQF5mPagE2sLApvicnnRzp1TX2Ys7kfdEdbenyhiEXXTyri1DXB6s",
  "key26": "5KvjNGjDvzXoYRF6nnBkHmQUrZ3HTaAbBrSXzNcDfd25Fm58Eo7pz7Sw1rqCbrwDkySiwxR3bU3Z2sps73E2zP8Z",
  "key27": "3Acv59H5wRsKL91xtD2NeDA4aM4Xv2DMVtjYWakbFPBqniD8EEMHTnp6FV1M2ZmTgFGYxKWS4qdDfpU9jEa5oWRw",
  "key28": "43MTFnp41z63XmWqvAazWBCNy1DsUjJq196vo5oXNL55DqXTsYjPY4dSg9428pHnmFPqNgzDEaLTnW5VwBdzbnCS"
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
