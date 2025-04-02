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
    "5qrYcuY9dgEFUShvZmuTJjVcRiCtqsUeKoUnwEFY7HPcuYA9jdTXfapykwF4ZuHeyKS1PQqmomWmtrnCSK1BYXL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7KtXhrm4knRZQGdaAuQhAcypfA6ARLMV56u7kFmV3HaRjaqSgGnmhhovJVGxdRj9NERTzqKbqxZh9TvEu49zUy",
  "key1": "2vkuVi2tbCeEKFRTFmmrXTsDsQwZeeX4Gr2NwUdDanw6U6afBfoXzLQUVKqHDd4xxNE1YVcgAZdaapAQ2Dnwezgr",
  "key2": "2EGDy29gxKBPWJETpK52nw66Umnivcnfa4ktvSKzQfsw8TNJnYxeMXNTgpVhM2v3CumyuUjf7esxXkmhjkuSKoRY",
  "key3": "2aiGMiLn65PUUsyAceHVEsJXroyhic6uy7v734eNwfnnu6NS6FEYYxtU6Z9mXLdmXi5BEf8uFNuRGqHsTJaC6fhi",
  "key4": "4RrJsFxk5ycuAJHVnPRxPbm7NQsgwGboTc8zCpQedugec26L428h2ocEtXBqjiUGpwHJMzz1h61gZQRgpKid2JWe",
  "key5": "1YTnP1jz8QpTzTtEVYqbWTJPWm6Gsax6jygmng7zfUfKiNDNxMN6Y2sH5EN27QiiPRKQ7GvZN5h2DcVPKx6qcr6",
  "key6": "5f7zyMSLQjjwVADZA6TQmRkSLKNGhSq8B2EfDXmz4y6SZDXZX5xLsbZD2vYRBJz5o5drkCRtYXD8td3ShLb6EQP4",
  "key7": "38fghnaE729q4mCkM4QMTrFRiRx3yyfWV1CPetDK7FrCHF5d879Q8d5PvwwfACPH8sTYWKF14peaXcX1ugvLmcLu",
  "key8": "54EpYzJUjp8zzbRKQtZdvPfGMFPf6o2ixK6eoYbZZqRs9X3tPMpfnfERF3YrGS5M5cVbBW99oAA3RumeAtNtdKmh",
  "key9": "vw2AU4mE1z3FBgXmR2btMA74K5sVTApSUDmnXJJbrKY3yUjgj9FgZssQrGEeqPncqibZFbDofRNdxuqRYArWwUg",
  "key10": "5XmgPQh7gFNmUW9ypgs8g5wB2mA4bGdnYzsH8itmRRzSR2vp6jxgyqp5wrmzB3dBFDvpdAh7NmoQt3KtAzjVHyAh",
  "key11": "5qRx5tjHfbhKyEK7hVkoM2DYitYpQkyLo8ZXJjjQbvfQthiLE7Bd6A9p4jQjXWXsAYpkeR8jm64UgJ6GVTrgFgKx",
  "key12": "R4LLKRJosqdSagtkwwEf8vvtrnfPhJE7JJtRbT3fhdLVfd21EQz6FiAnZPRe9hHZ6jAz82PbcFXjo5F9T7ThAcD",
  "key13": "2sc3vQWpJiBeu6WuF5kk3wi3WZPDRxceuxo47oPUoTNKWkktksDBcccWZKXMdf5gSccZDwDuSb32UzLPy7bkW9JR",
  "key14": "mzpTh4V6WMH4CJeD2BKds8DbuwdtaYWT7yDAv8LRNmkCtQsjkj2Y4U1jiYzJJ2p25US5MoW2NiG3PtaDmQ1keMz",
  "key15": "aRzoVhmkC3z8pqHoud7nze4KvXNtESKMrMrttUvT4NpVM159qtqo5KNZMhQQCVb5cGjX7DGZc1tD2WwYPa7sJMD",
  "key16": "4Cfy2MyuuVm9sehpVZDLVGj7mwovecnpETFYEWk7xz8PJFzFDPyAuaJNXYMbLocoaLCsqW6svXHZgFts5tdxwWux",
  "key17": "42hfN7U5Yi29uzAumYqjkFJqzgLvBMFzhWT9cfsEMFyzHRWWgfmrRtyQwy6sVVD1xZcvQjimoiUDZt3a2Avdvfiv",
  "key18": "5XtK5MHPumaJ9dEAj6qnwCBDJNMBwbvK4ohoZsFthzsynMhadf17f6DoGSStPAvX4tLLqYpAXSpWe332eZBmYtNU",
  "key19": "3qytvX9sbkYSCAXjnsAp363eHtexuTf78dV2xDTqwbd5e9NVfVs2yxWC1jnwTGyaBjfGU38JaYmciFfUEExvFoUa",
  "key20": "4uVjkqnmezxrewSE5bCdL3Zutd7mGTiikxZ6Uy72UzLtx6R94hYzZAVtvPR4sw8LhkdwidoPr6uDv5AF77HX6irR",
  "key21": "25R4RAWgSP8D4GVDv1b7BxTBNwM2ixZALAAsz69XanENofKPid62dNPYNGgRu4hg7KtduwqBN3bkNjCniH22aXnZ",
  "key22": "1sUGBbq9XsBAVVt77wYyBzrKmUhJDRaUWSrTLFnGcReLLVP9ay5PcUjXf64R1S3gd9HdJ9RHgATy78eKULyuZgg",
  "key23": "3dBDpox18DAKJSZFzmqA5tTeFDueDnkSZ1cYwd16y285bYTsjya8GSpFnAeKmcb5Rx3R5BoeF1m6tXwkwnTpC4E4",
  "key24": "4Z7rxMgW1PgmTxwxLXw11qZJZgqA2gB88zHg7bKSomfb98HsykP4qeJitGyywd4a1JxCRYXJMp3VqmQvMbT4W918",
  "key25": "39o5L6ga6qpvLcga7NjHqJ6ogHj6L3rJjXMtG89JNnqsfCWtSBcVFGUt3QnwyH1EJsf26VZhEawSUzTCjGsSEkha",
  "key26": "41SGRhJThgan3N5XAUu3vpgFcL4ZDoxQ5R9hmsyCbzC7rnvZZLNfTwmaRZQgZNfXJuF5fk5ehudGuDaurpKdft75",
  "key27": "61GstSYBVaGG7ZAGdP97EbnrzhjXrjVA29uhfFuXUYPPEQRLWjpmoQCxgGYxZD7PoktGdnBGcxR4EeRmrMRjpmPH",
  "key28": "Gjp1dzLE2EJvJMeo3JBJXbituqDytTx45pGVkxkt9dzyKBBAAJcTw9qsZquaZkRQrjGbkqwVpQv5MwUYJBF83da",
  "key29": "2xiesWdCrutmSGrNNds8hEdg1YpM3md19DWeLiwrs96EQHAiJJToZ25iXSHYPgqntJW1ZQBgxpuQEwE6BVKyR8ef",
  "key30": "5QGsKYKyEK7H7arw1tEhnmpDgda9iLw5FxNLDC63ii2zgL6Yjz6KARNtxL3zYujtLbdSURwpFo4Przzk3DKaWgqw",
  "key31": "4ECEXyTXxgfq7HQ8hw5Wi2qYTg2TyvriFMb4eEjdogJzPu9sTyYJjRLLbRMVgFk2V6c96CvB8SgAAw53E81EryuN",
  "key32": "5fCGY2G1t9SKworR2qZmJ1S7nnMqaq8uomSH92fDVNbHo7gsBbgiKhSXHKx5PEQ6cMGujwkxGPiYYdA6kBZyTMpE",
  "key33": "2MuiGuBSpd3RhBbtN25rTshMd8YS4y6Y5uKMJLurR7yuEKfV6M9qsDp6rZEV8sDJAAaTqJ8roo5PanwN48CRvoWL",
  "key34": "28ZtuMaR3jhfuQJFnRxwM8M5ztgGpJMfe43DPCVVE2eHwcFKDKD8XHTfq6CfKqa31mFRy5aEWexzGFdAGzccgbrL",
  "key35": "67TwJhCeRsNLoK91H9A6yWxWM4v56Zed2jeZA3UpTMSSw9W9qakZeduFtWirwZQ3TFxaaGLBiwbhfJdF1yyy4Uck",
  "key36": "6LGL5AE77zqdQMC1Ff8aa9yVS3vtC7KntCe3k1s9DscuYwGjGpfXex7rQai5WX5jcJMNwvj11WDkdrVGpLygXQS",
  "key37": "782CNkjUm4w2SkznRH1pp6skuS2URwdeDKd881dsz2s4yC4gwF1ZSuU3XoAmMpD5cH97G2A4hmWv323WTM1P2zy",
  "key38": "5PjVbJbrpy7KZ5hXro9TvHtamRKf5H8dNTZXtoyXQYfHskLb8RrVV2ZyhArvTUTyFgYihSQBzoWrUkq2CgEa1QBo",
  "key39": "4EJsN1CwweA7bnTmwA22CLg4bCrHDfxcXo2TNBwhjBSw84ejgEJ8aLC9RJi35i39Nj9kk5Yjsohk4nrAf1Jdk347",
  "key40": "62R8LJL33dSDNpTocehSEoTkMjTbJzKEUidhGLDGeNJiw9cJndmxTxJVeqUt5ciRudWXPReDeKQaQdiAMcKV9WWt",
  "key41": "4QjDVpmnhzBzobnygSTgkC7z5YqxdX5TAY3QSDcsCV8yAq8i3oW5X4oPF7iFw49FgXRc6WvJkorF9uEMNVNzdtv9",
  "key42": "EixC233M8FKh1nH7xZSUaw5h6qJqQ4ktuCmYWK1ux35sY4ueMUt3fMGm5xQD44Q4MbjmE4KhnnKrKBbLBvk7PR7",
  "key43": "28woryCBsTUcMMuvwKJotuRxdW7CkVm3pwhWBieW2bFDyyzcgceTvEPVJybSX7Bo2zWFYyP6VP1wy24gY1yNzSWJ",
  "key44": "3B7k55nynGAy8Ykb5yRS3RJGaK5xkXa4j6azztZ5JZMYUx9vNpVNQhCkzgQrTzJTnqqcN3azsMNeDSUmFccLtnGu",
  "key45": "4CgCdf7UsXyvatCSaD8MhMFZRWALkMP1EQoRHbTbUJz41pM2m7SGHx4ivnL8chArjGssVA3tXznTurRQKv8V76fj",
  "key46": "eVyXw1nHE1CX1RwAf7iLthoNBvFsxYJirx7ZfXcRNK1H8kDHHUNgiwWE2tz6tjP7JfAYyPgYF4RLJoYiqZUewc1"
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
