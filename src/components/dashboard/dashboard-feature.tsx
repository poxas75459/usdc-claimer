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
    "znxnVaueZoS9hCU5xWMsFETUUuyfh1HteDdbDvHBpjztuoSjuo4XyJs9xUAhGzQsCLVRq4kNdqbn8S1m1U52T5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25L8ch2fPj58Jmjy7UJqAfPahXGRpxYNLksvhLSy7ZDdNp3otztKSWLdhJ8htQdsCuX1vQsHHPeSnN8dLruGZaig",
  "key1": "5wXjPZYyDPR52RXEda8yVGkT8J4LA4pmo3VSu5PLtHB4XN7NRuZQXnVyGKa9eDMCbdaSkJgDXEcRxL6RXM2rSKHu",
  "key2": "5cL7xDryJsmdQx14H8T8GFGMfpM4oJM7mggNuqJ5hVpE8QkAjCpER7TRWMq5THmXKbBTXsTTNtxHJxcsfZeBUv5Q",
  "key3": "5vbYrHmsxQ6TG9T8aE1CzWmNVqCMr6wASGUjAXpukmwwMMqHkKAJpAgkCdymL4fdewtxjnAv14nrjMQKp2CrNqhc",
  "key4": "3VsJStcNhBPg5gkCAQr94CTNoLW4JyMEFnwNbfPQe1Y4r2hn4j8RgY9mgCqczLyhtk2v9JSeicQxqWH3jCc9pzcf",
  "key5": "4AKaFdu8SYQV1kdiM14PJvZo1mKrFfFwk9vqMrCgukLzBRWDVjDouAoiKUh6eLMXe2NXKo1CX2ArdWDTQxDXFgUd",
  "key6": "4Dr4u2KvnFtXWCQPWuhwyTSqHRdepU8oRMn7KiFC1iQpLW5YFs5zRa2VXQpiFqF8QNqXKEoSz3JrX2VcKmssTHKa",
  "key7": "3Xb5EGCqa8KmHtrUjwuyv84QJ48Fmf5GcUArczg8F1QrUh9Gh8sjqu3t5th6angZ4qHKKb6YjTYnaqqGcTSbHky1",
  "key8": "5yE95WccSx5ceG6V38XQvbneGVnqJFkakynWUuB4Ue2fdrCTMVrgxQvVYb8KdfZi734NXYJVhRrBoZ4tXTTEVePv",
  "key9": "3i7iXiuK2kU4eUNAyDAm2Dq7JJnNPaXmYm8CACDLSonUXVGBmXEbB9QyH7322Jaw46x193YP5dJP5uoyERWxPpp7",
  "key10": "52NaWz9VLoDKnkhj4UN76kXGFTQx93XNhkx1Jp5wzeGT8s5CCzu4NYNbVDLx5wiQiRfLbuV3byWfQJEkYRmSZR4n",
  "key11": "T1gi9zfV91W14vqKPjPTTr3SuAXLyk2QNQKS6GuzEiwEbX11ujx6CC9Zi7mXFiFTXCvTFDAnJsnPBTgvBAiU4eX",
  "key12": "2Zas73F2cPVptnAdQG74aqMYDqwMg1o3TLMmBBZb1ZkYveUbVjEmSaw2mAra3MdTva5N1uKLLqCa7ZuNhC5KvqF",
  "key13": "5EVkvhDnNe6SYYVK1BhuBNozTqusaGVsCi12NfNGeTEuBK3Ev2nr94cmwXFvg14eK1LaSH3iJ3PenmeNxtfVNvm8",
  "key14": "4P1CxUfzXeEQ49wFGKC4fDmJg52Zo1JHjHsYXJrxgZxUwp741NwZWy4CbXjHaaNygrYLVRRu2H1g8FvXfPxksn9Q",
  "key15": "5hPw3VcKivRCNpLyLsGe1vWrbxp95GPTz9q1pJQfyio9smdjp9uHcsuCzo1rHzRMAm64SxAf8CUu4KRXsEEtVxvT",
  "key16": "2EiLQJafFcMHEB33SDhzvFDM8hkp82R2KLTQiyPuq8rZnqzYY2DH7gaSKSjqyCj9R668VAFjnEDCBtLwJ3otZB5X",
  "key17": "4ZL7cdFHzZ43bY9DUge9BYwpFQHwPtWFuvZXnchthn8UEtNV24GV8RRtVCFsn8HTdxyHhFbepJMdhdfK6iD296Q2",
  "key18": "28EKWdLs2VThGL1sSqm3zu7SW4WbemSg8wHgw1rY2FsAhxcz5mu9rokgfpBr45exdNeg8w8ysN1BAk6WRcsGRgmT",
  "key19": "4BuAuuqPeFambWGxpZiPhjHk4pX6AWCH5c9qm1yDmeUCvMmvSDx15EVaWdabpbP6mdnDHy4o63bPiGWrJAhP2KZX",
  "key20": "2YtWmtQTUoSsawqHNUPpvaEfwEsCFaRKjib12vHdJfV3XrGnVBe8MSLNoDhTGvTx2V3SF3t216WGtDbiCfxkr2GC",
  "key21": "3wFUrkcMiw4JSc1Rtr3tBRLzoDGK112wYaEk6fSfj1FJTNg6hCchhTiFyLvqZAfKmTv6QuvtoNT6xSL313CBbfCw",
  "key22": "4FQqc2eMuDdiTLgtX6q1bgv8KQMTLgZXNortKsDTdvoPEFctFWM4WyRLhveyQ8uvq7w7SkudxQykWY9FBivK4eQt",
  "key23": "53jcvTJjbqtXL8MHVUHGMPCPvKdu1KW1iNhbcS9MFexTbAaPT1bLRdn1iGKDHzqVBa4V3RJCCurtfKAWoGegYZxW",
  "key24": "4bkWeGUQDjn9FRmgutrNNZzjBaWHWJCGRGLyPBb4fpoYVR8rDfmu4GKGdnb7HFNcnytaCLKi48iRzk143L6CjNuw",
  "key25": "5M2BKFZrQrCXVkkhuznFAjwEjSeJWUQuz5d3y3EtcYFuEmMyRYLWREkJTwgtmUf4oM4sjUyg5ZKVY5KzmniDdUCV",
  "key26": "5ENS1DzNiJsp3nx1aYBqLYSkCTdAuLov6STDJoV5tC61zW786cCurg8okxYUwzavVBJGNV2qxfPzY9BwkTjrobb2",
  "key27": "5d5XFB6WmZANFF428kkLmnkCjgSsJjBMDtH1eSZRF7TnrxRYWgobNi899Zg9w3mgxBVSAhJ2YfAvdvXuZbFByfDn",
  "key28": "4akEA7Gu4mDzVprVwP2ZjqfNDMRzHaUmfLZAWeY7t7M4stHKtDP9N6asdc3M8q7Ld5dC8KRsB8fuaCXpsV3yyYZB",
  "key29": "rEro44pP1ugpU47NLGo3mjeqifRmEcMWLyCFwPT5QjKa7RYgsUoM3Qbd3mDBkHpkBMxbCudGaxoY1ztFT3FHLea",
  "key30": "cDoofDKz28GvafurnW9fAgNteWLyWn9Bb729CtRSCnPT5M9E6yLaZbVUvZw2HQG34HcSpTsSCemXvbMen6n6yXo",
  "key31": "2iWg2ZeEit2SVoirbeCRRkkVj7X3PFNcFz39UD59i6hePm28Qu9dZMS4vbJKjkBf2sW4DLCB5R5oyRfH5cNdcrZW",
  "key32": "5i6cC4LdSQBCgNw4CxZkV5P3rQeuMFDNqTHHLe7dffTmreKGCJAK4MQNA3yhr9FEj4VbgQd87cKhXgB5zr1c9eJj",
  "key33": "2Uz4w5kzhtMMB891zZjP1yRfq3PaUpGysTPQuASJWzmUi2m3RDHYwh66ro96ngP82ayLwCG7iziz7smFU1z25Um2",
  "key34": "3pmSjUuq17edTx8TAGYH7BFTeTPt63p6vqupCxV5DA6QcnMS36EEHAzeehWPrVdtmHcEuGfdcj5vPw9cwNLM2pQ9",
  "key35": "2hGBHgJM5TmZRqKPro5YWnYKBJapvjm7Wuz1bQ9z8x5fPbbuvShQzCe8V9aGcygZV79zV1UY3o2dxzx2Gj44jSps",
  "key36": "2GojzFTvJRnWqfUwrpBDjHny9rhEZcopqagmQMzSR6wF4Qych2MbgK91xUtNsRENhLc3deL2iypm8veBeS1LciYt",
  "key37": "5rtgELvyk7BZRMDvkG6BVCkhHj2HdyN7Fz2Jb6wYJqhjMocr2KUAfmnkKBZM6188U9ime4pt35afnPzNVvgweWow",
  "key38": "51KM4PLB5QtX8aQdaN5rL1BrdkQ8Ymsg7E5xHTy4dmKctUeAFsmAJEPWzDqr51j2eb55TuBjD2w2Dqf1ZNtY5yfE",
  "key39": "4guH9A1S6d2kmHXXmtEKNyMqjgPE1z62f7G1gaJxZ1bVNDpzxnkE5rdj4jj1b5ZGUj9FzEQKwUxzo42DdCZQb1Wk",
  "key40": "zHJSVmpmu87AGuHEm7Eou1PCiFmmpzGnsjcBtFywMViP16zac57EiA1zSrgK5iCiJeGmFnSvJaJENiNmAcpCRvr",
  "key41": "SDe74rgukMXdGNR1GGuX3chTDZd7LbQb5feWN2ReGhKbgW2z7bhwhuH7AKaTbdFdUino7wuHSzwDnk7BL4HwMGj",
  "key42": "QjevUvHdexoUGgx6ebh8Sy2WKMhhL5cFMecijS9Q2QXp1EhRMN9uJh66mEm3Tp1pHX4kXoXb9hc9LL3zNXwCGxx",
  "key43": "4WgcazxDE7eCrZvxdy6ZejKuzw8tV5iasSvzRUi3KYKiLaiMxRPNkhrttWCHhAZtPWz9ATaLWwHb762FqgQiTGSS"
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
