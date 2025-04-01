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
    "F8c5g7acLJFwFxaFMNwnj1y5rSS12DRNHgRCmGXxBp589rd8cpjEgrLTaRXr3yhiR6a73ftC8kfD6kGgPpJkhdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUHRhxAUGiMJx7Wc7ijufMehw6u5D7KnVg4n5mxMCSFxd6h84zdaD1h8Fx1jJAwXeEoi2VNQjPCoeWbN37jiV8i",
  "key1": "4PoiVLrXNeQdqgim77HBvkRnXmGnr8piWXBKarute6hNr67hx1bvLKZsiYUyNAn9FvxUZt47tJQMfVatMY8zu7z2",
  "key2": "3oo38JH6x7gGUHPEi6TJNHdGtn6gbPEEJSxnykLAbsikvTsS9YxdNTFsicFyEpsnxF3TXkPPFgh5cZSTqtGJnddX",
  "key3": "UwJaSDGqMX2zmKxuD3iuNzFJhjFPCFb2gF7pxe5juuLkZfcSED6fcRQfAn1jmrVMSn5vS99hbKXYN8W92PLCTKD",
  "key4": "5wVjNUctrx9SHyEfmAC1SXXD7fGcfwGriGnMNFqaS1TGwZXykz2V6U2hDWB2wmmGdUjX8Y8uAJqsx8fCGMeowwMh",
  "key5": "JkNjnE261Xhx85sESf8Wx426djBS54dCGBSwBFqao2ZvaGnJmjEU7FQC9Lf7JdS2vZDrgYE6RjCaZdBebmF6JTj",
  "key6": "5aXMiYnzpDhJaWQpEo9TfgeNndgbjgJtsFEUv3Ayij7c21AbNxb132F3Sb8JcSVTdr1Wy1W8ghrT6nCqSBaBENEn",
  "key7": "3bhhC2FjTZTMdY8P97dSin2egMr3LjBvBVf9CCg3kAyrPrLscDQeWqC33fY1cyxThzAjzBsBpf4hHa24Zq6xPxV5",
  "key8": "39xPv1fMaSDB3dWoqEVTEedKQa3mM6Cg95worXrNK9Gvmh1oKRyMbyWKQGKQ4da8TdFnkKio3WATJJM3RWBY4fkk",
  "key9": "5m2JaNxWBLuDv5gW6JWis4HMmNkjyoa8QKP3aXNGKRHRaMx3JZqXSY9HUKt8PXMEte3k3VwJuLvbaKaGh4AReND",
  "key10": "5sK355tFabp27oRb96CCqS4rnJ1KGJFF2WebRfx8U9qP7GxGUUwp8S7FVVoRRfg9RxJWLr46g5WrfbfUMPcWk1N3",
  "key11": "3n2Yfw3TcVPhFatta5ZAdourAWcRMJ4X348MEkhWKSis7f5FYk6mfMhXCcxcdaGVjG2w3RAPQU69VPbTGajj7o4S",
  "key12": "2firA7BirdBz8hAozrgjygg5AVLVEz2vyKYGPRULA4QTgtRSn5tSAb5LTLX9Zk9Ss2vTMub7bJuh7d6D8ETdMJfo",
  "key13": "3ZQvSv2JNFFNvXmRvs2gC4crZVApmTSYqpNTiewVgqrvJjpf4QTzjVJM6yAh7LuJpHcoZ4SAV5VjoNZhTmaZrb3P",
  "key14": "4SwMgkThz13zt13TuEGDF8DWoFEWbtHPXXM4TGVrVGjkoF4R3XHwWokDznuJi1hor8mENTPL5nPNxJkRhMssrwao",
  "key15": "UWQyGtRoDeBZDAmDurDhALPLDWR2P3ikSjQQCs7YpJCoFo86MAeJ81v3fSdjrUnbkgx4h4wF7hnf1UnnfQnCC1M",
  "key16": "2YuTHcireeFt5psLAMWmJd48k75JjMmETkGBES76mCueqkyLZQ54LNgrSa3DQnmAwmsR45dXu53D3tKXYbP3axZr",
  "key17": "4tekygfakRcnzHSDcKSPs9An9UixNH2tDkQMXkaQ1qkMyNG7Nrc1qFNFLiDvhjGLkr2Ba3Vqs3vvaGbKoLtcBuCU",
  "key18": "62tW5EefnuEQCJjU9bNjZqMaunxrwzjBXhNZ8DrXFkYkMrvwW5E6qHS9YxHSE4tWXK6S7RQwhmzypTY6wPrF3cNt",
  "key19": "2siqthaDJ1oLXcuadH3X6innQGmg2TpGeYoW63SmHtsm6HpJJRNdMi8nhCQry74yzmY6o6zp6E91mntwJPQytYut",
  "key20": "2VTSs7qPeaptaAQR1ApwKwGnYWzhUiASMPSoGnewrLDFySUhZ1LwqeefQthNKzdmCgZbjMEmfjWSbfakDhY4wwDW",
  "key21": "5m7T5wxbPMXX6uunzjHocGm5ZcBGtXEEivMkmSdXKyUooQ9mRPDCtppGYwxxKSvodtpkzTVJ8FMQ63ukRi6Bxkr7",
  "key22": "4mwKNap5PvqX6rsm1vwmPivBYd6zo5rsJj3rYebfnSfbN8XKtztG29nkZx9KzTBt5KEgXtmviFMvXXyamE8uaNi3",
  "key23": "2NNMD3G3QSFFtxJYamc8SwkaWKcacesgSQuh9Y2JDcv8J8nBmS9gneT1sUsTZh1Gdwh3Muudr2Kksuu7r4F5N5w",
  "key24": "2TCgrW6f4F3Vz2sQYnH6u9QqNvu7s4KMDCaiqkgjJGD5eNHjdNxfSQuXLLzxW3HmsykEeJxX78u6RLbZXDLkPqbe",
  "key25": "618W9iaxu3maFLPSJV8AP6v6FqiHuNVLj797tKJFKpEU3t2tksUoieLrbjP75H4csSxSjh7NHP2WFPUR1Zpn2YU5",
  "key26": "4UB2aa9Uy121AuiRnG4QYG6EdzEynGFLTMScorpZrHSE6qVxagXxprMjzMzyHwVzLJcT3m8ntAbBNm3LWg5UM42b",
  "key27": "5Y7wfvU7TdDcGcbTeXR2aekC1Ekp4ebzwsJSYqF9gwnW5Hce4LrwfxBHtFafZNqUt4YHp32SGrqdwsWXsSShzPmz",
  "key28": "2pqwtCFAApQ5MhZNHQqzjGPCRbsjATrWwY6UK9r91urc42fcyaJVPwAY7g1YS6L8VFRfrTUG2aZxW7Af1EaNpStf",
  "key29": "4knzrYBpA2LxxcgvFKFHfKRYk2qL8XDniKJpdoBqZUBZcBqm1qYBhe9MkMiSbU72jJf5oEW9yGX8fp7nnL8N47sa",
  "key30": "4bshx3zGmRMLwgVDgLb4JYrCXzepgDULVMddErPXxo4Ro1N7F1tFDqEn3wPjTujeshQTY9jrrDrZtpP99VcH7oUD",
  "key31": "3DynbB5Gtf4Pxi57fduaQHhxoqoUqzPZFAtN6KHqvPxQweB93rrJb25sxdrsR7oN5MvckUsGUutB8Bs9JKgKSXat",
  "key32": "38Lq5d4n5vAobSc39Rk1kCN4dBLM8rDuo6dGFztKzRsptXUjh658is57FuEcZaCY1SUAifvZnihc8nejSHGSPWa5",
  "key33": "NZpp2nR6drgCrbPvUMsNbHfaKDK4hJx5HmefD6cs3q4a6XxnPZMPCmWkLbK9SDYpVcLGfcax3hhNWGiAVoZenww",
  "key34": "2SUFnf4gRZNJtxhQJeEdtNdqQsxvoM2NxAFPSw6DGkqqLDHrT6xAHdnTkekD7JHAr6zaTXDaMP7xm2mKyhFac71J",
  "key35": "3Bxnzfo427AmMjnPLGFmGbWAQXna1knLFF3wdVuiHouqihzssLNJQPgBL1ADCuD58jmEDrpAnH4bou2zyTzztJPT",
  "key36": "5eetSAjAixbGfZ34JrvQjtR6JhaoWcfVr479r4Q5KzRtW28Xg79hvETfXAj5jzYpYT3M41g4JiXNXWeAZwzEBnBC",
  "key37": "87RgDZzHJ8yi1mirVZaTratvqkzC52jYAtVU4a9c2YitGBC7H17XkG5AxbXJ9HyyPZRZA1zN3LTKusBJxnkmpG3",
  "key38": "2yUnUi6wN6P1YBfKWczzjtXSi5RwqAnQ5L7CqA8n42bGbm7uBLshfSYWJCHwuqiRQUGVMuCabb3DBLD72Hasmoa4",
  "key39": "3Ppp1sRGoVx8kdwKU2h1TFTWLJhfVSKt7RXUocM7FdcHRj9qxNxa9dC9X72VbeJNf6B2t4dztoArS75FXXLUuYL5"
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
