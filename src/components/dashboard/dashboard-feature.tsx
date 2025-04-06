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
    "2ueDk4Vnv2bMKE9i9TuRgbriZh23chp7w6PEtZW9BiXdcSNNC5YFcHV7MZU5vhnBZCs1eDaB2hjxAi3CN2dmSrap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZfkUgWUwG3cFniieqkQNPpjz6cEu2gxWyGeQYJ2N1e5wqS9b1GPm1i9oMQk1SQB9ibvgcFB4EkRM48X4XeGvMf",
  "key1": "4J66t63FYVVmhUJtfJzknFAon7SmpEdfvoUNjVJsZ6W69DeWu3B8LLUsPUtZgAPNvGZ9ffJN24jZyKVzfb2SGshJ",
  "key2": "2DZQak4BNFLuvfp6zT8rqnx61SDm8RoKdKrM1HfYuH8CsJvAU5KmETDgFgxtcDaRaTgCPqkzKssgyHTjccjNmrmJ",
  "key3": "5248qchr7JwfWy11jUCoj6ZLT6SYAYhdJvVucGYeNPPVBkGUMfjGfqex1E6u1xjKgTi877vY8NeuWwSrk7EnSYNm",
  "key4": "5fniWnGifMYqGuLfifU92aFZ7UjR73FKASXcmvKQTCxNq79gqomYce8kpyubKVjxYEZYCxh2XM9x9iic6Ke7uxaQ",
  "key5": "j3dno9g7NTCDk3VmaXjWsvcdHGnamwZsoMGd1GsQokYXqMMWwUAEVPht8rqgsbTeXoVZo3kYZ5y8MqkxV2Cd46z",
  "key6": "3WmrZjM2SF3iRkENb9pzhHCpJK4CA2RWH7H9pPpQy7MZTVrwnxVjasLsgbwDbzouaB1fPizeq41FQKrpPCV2tjyC",
  "key7": "4BU7T8P4qa7iEsnZSTNr7XvXHpV9gn3vp7ohm1ZFG6EnKGV3yXqhoAnH1Bxd9Fy3iamRwn3nVMr1bd8vQYFERuno",
  "key8": "5MKx7wB5hPS7W8EhqYLTPkRZN7xQGoGizCRGKPLuMUXLBVSLgmidWEf6PPneJo6uFUaJj17bXUDyrmqcUQo3aXfK",
  "key9": "22Bgy8PFnZ2kveprGr1YcCsf8ihJvk7XjCU1EBkKpRvXAgjSzVXvtDCiDkQtAG5TD7acfGsFp58UQ26RWdfgehjj",
  "key10": "4axf7q5mxZjUuunEpgb9aGuunebDDrcaqVpC3ppkLqmrmvR9yA7jGXfWRTEi6LbJX9nwJaCr7m2qgmkEfEBF5TMa",
  "key11": "26kv27dXr52sbDzRgoQC88hj9juREH28a64TAGAx3MkzuWjeTCVcZ1RhQj9YzmJd6zi88UxmFq3aq6w4rgBL9aPQ",
  "key12": "2huVXB6c4kScvBTx26QYLDqu4Cqc9XKadsRp2GnWNYtua7utuMp93STFLW1tD5gvxw52ocSYCw4eCPwRiDigecLQ",
  "key13": "5Ki1tbkEPns23cripU5RFkyUP4kyprNWPzPkHppi5RjGh7sjkuFmn5S8rpWTCxW8Nf5VcgDbPqefm6jQc8htiqLA",
  "key14": "5dcHN6dgGLvZX5igpdxkTryeD29mm1Jju4ufuGYbpdt7Vbw8RUMC9hqggyyPtFaHANppnc5qEkebfdi2Vyjwmusk",
  "key15": "4M2o753yQo4SXdHmSDefY5ATTa7fjQiP53fAkA42yoVBmPUx5gtHNJuRd4s1XM3DSM3pGaAY23nHCgM7ubCr3B7p",
  "key16": "27x91LhtvvG7it3xrmmJmmrcWUdpbwdoqRY8fDhpKb5HBpm2qj3oieN28FdpcxSmre6EZGbhK8sZd7aPm7BspBgf",
  "key17": "2ZHDkzsX9hiQR4fAwFU415DyqGr8daBjRBK8mo8bVCKStrRgLqNw5S5a7j3cAobBzkcGx61oFFFyfSBkZNg8EoAX",
  "key18": "5eofn8EqYJHock89wzNDjqpXuWoMhwvdx75YFvueJ2anGqCTcjp7bf64fXdBmEFbuLPNzqrukr839hZnkvCqgXsS",
  "key19": "2NCjTrzjohubUftPPjRuTagYVcTNHp7JdPPgCJjJtmroN4XN22AUDGvd63iNmAXr3R7Xy5Az76WaFmeUU8NyXFm2",
  "key20": "yc93BAbwLejVfeaYr1bQoqjPWfjBFg5sM8zCWKViXM2PwYHstmTf2b78rEqTUPMrFPRtNLYrwdVBqpDk3MmaDdD",
  "key21": "5RyxWMAsmCyEsu6cN1ussbQf9eT5iMAnp9nkou45LTt2Uz4uh3QJQLeD31VsmsT4Nr9dXh5nVwkdwHGHCsyfkuLN",
  "key22": "5yZJrhz9k8MhjxxoV1N9Y8AM5YwQRWCwty8gApkSTpCHmVpAtwVaHFWQ4hQKUyNJshEtbJ1z63cYWX1NwUVhB2oU",
  "key23": "2Wx3GedX26kBN5YFAut6NAP5Co8nWC5TNDGNUCZJTmt7PUMPHdo3RS6zNDbU54GZevGdTLfEyvNfU9K8XamXBfbM",
  "key24": "4xYGwWR8nTKQnVESoGcErmrvSMGk3PitpxPELWN3TQSWgpz7NxUg6Z8bV9grWGHRnSaf8b6WK55pU7UEjopB3BQm",
  "key25": "4pzLJYeitAHQ5tpHRmtkhMWVApVFiMurNjowWN9J17SHuwKYZSojPv4X2ya9DzW26yg3bCy6KerAU7zfBeuE2RMi",
  "key26": "2krySmmEBMLxh5rNVBEbAhWFiWL7rsF4PKRexXJfVchaZAGk34o4ZMsMLi51pT6MVQ8x8Pg5aPhvPWzsWfBwjUas",
  "key27": "4zGqGPmvJUAzvYXdtSsK6vB2NH5fEck87FFYepDP7GjGxVAbNmGsFebojK1RYXM1nRQb3XRVR8EspBaZ5eaAdMtz",
  "key28": "5MeXRyagmuqShyCD8ocZK2WzYUCub5CBUeaFzik1ZWLZkNa9H3bAFWGk5kmMsh72MCKpYsKnREJZGGghbCCaXPPu",
  "key29": "gxaxQqBuKjqSVxSP5XxCyUcWxRmVAe9DHP5A9vRKc2pKYL8U6ZRZgaFReUoWQihxAosYxp91ido6vwmn13ZDLB5",
  "key30": "4V5bZTiYLQRSDqkxbTCFvzwTfBKz6fAvmH7d7riTfrLfYRSf4UR3QugNTNYGPUU3GVq9GVEACKGTB75g9LHytrXv",
  "key31": "2CX9rGmNG58arxSg6teqhdBHmcNC4xV8kzzkKUD7Bd2Yfce4tLswpTQJJbutkJEQQUafLkcL7bbiz46CtCdkB17u",
  "key32": "4BwMfJyxKV8u3owSK7mkXCw3cF4Db4d1BNLeJ6NVnhP5qcHHi7hqpQtkv587ztRJAyLQ9aFFgWM1e6yjn5acwdzX",
  "key33": "D75SZvaG4JLMdPCBTgDgqr5WrAx3EbqEG3NnU7L7ZhA35CJRPz2UC5VWQcGpm21EfeUm9HJRKb8d2JxzQmZAY1g",
  "key34": "2XfYdEXF9ns5XWXnDyfDBGfYwmoYqf2fkxFzuvTRqcpPS5q6jxn8tmSVCcKUW6SGxfG6W1UgQFKzZofC1yX6brWC",
  "key35": "BNwUdG7HySN8bdENo8GRE1LSxZ16oUmsc5x2qfqWXpqK5NxKUh7UBWBo5Lc4B1e1oR5u9Z7xCRsgWAMFsGGyssU",
  "key36": "25LoktpNemuSmWyQmz5d44dTUdfiUvCD5m41UwQePNwmEP6tXd9JR5Q1u2JcVki1Vw2zzaKSSWFxxG32Bc1hEBn6",
  "key37": "aA6rfTqGjfyf6UfeYEMtbZ8Xntv3hTjsb5R6UNrAEGui8WmSwAArQVjTP3N3Fy74d8NzZrHY6X5vo4V1B1SU3eu",
  "key38": "w86Q76UgJUs4s1cvVz9FJSyy2KqYEm2MXdXuJxKtyhiS4Qg8aYkP91om9BU3X9Lrn78igmNBmoDG9CU9oxwYR3p",
  "key39": "5sgtbLCXU6L6u7PAozE9zjau8qXL1jZrNM1DmZBWecjei2bVAZvbSERBanLUN4xUzeWyMZKByYN6rCDMRzayVDxn",
  "key40": "5JNBWFHfrrJDvU5Lh8bMdRWLbp5JDB67idUQK34Ah52bDUSWMY5N9JEsP8iNupis6fjbVLLYc9S9h1m3CypFbaGA",
  "key41": "457KRun4JPVvFZCkAGyd16tPbSZ7JdPga2eeX88xYFkEamwyE4yfwoMEcn2MWHWA7uxg2nMCDzpzZrBfpjDC82uu",
  "key42": "5xw2UzCj94QoBdRQh65jhRGLTbbr7D8cTrLVpgMrkAcdy3WCyimYLNpZZoafsQJZABSjttw1T56WRm8zFdnbKbpN",
  "key43": "nb8vSt3VHHMzhLUXeHQrYGToeZ99opyePTdCTyPnG6yMn5CviRFd3qUC6PfaEntktZN3b1pUw3Hoy3ZemdXXSM4",
  "key44": "2789uxzJLpqEAzp4z3dmsi8tK3H7zexDyFux16X8HNJPYcNrPPZKfoGNKVQ8yUSVUGA919Ykncu9U95YQvgLtaXz",
  "key45": "5sNyKFpeNBz4RFt2G7q7GtWVATx4R2Q2Yj6DFB4XQ8oxBJvJgEx274itvoCou4fXHUufFH7aEgeRZigYvNpkPwvw",
  "key46": "5RHq5rAyjL9wtsRjR1DRQnCTwZCUAxcKx7vzkD3rgSKWkJEusYnLDJKrHywb8rPbgrTR3iQFwQKGTjd3iUqpw3GX"
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
