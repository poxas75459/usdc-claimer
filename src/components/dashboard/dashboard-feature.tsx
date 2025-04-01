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
    "5ekTwzJ7Ccq3BokxedLFB21fNZe3zxw6NpD3JsDz1oYmePgM4WdZsN6JnhzucVPPXVX4Ttox1bJgnXexa2MDFawa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtPXcWFTEB6rwgYDtS9z9VJtCXYy3JRG9oLMzYjeoW9Abuw8X3199E6GwGJWBagrw6KGAJmg4sxDgSkfiTg3hj2",
  "key1": "5n7Knj3c4AScLxhJGD1Dm9FjvwqzhbvTC4bCiZ6ECRDrSQrDF7tcE5BCBMLkxgeZaWDJAbBpCbi4jRKFExvi3Qao",
  "key2": "4CZAMtbMid1PAVTiVa7HMtLw1KCBcyRsEdfPwesPq2F6r1EXN2i4QqY3wt6nkEHQpLHYwTy9agpnJR3D92HGh4Fc",
  "key3": "P2g7A5qXLzhiYhmVmVxPTnNAQMGfyGB6gWefX4fk4i8nBuEs9hmLBbbs3BSrgjq5VShB2rSkDBVohXJvFZKPeeL",
  "key4": "5wNBmRSVKqbQqN7BfZYMf7mWA6Dts7T7DvheWGYyPuzy2cSzX1Wi4nrzKVnpKcYt3Nxwqz5QPrb1qpouLs4Lavat",
  "key5": "5WsNA321PSnAqtNNHJtyW1ttTAexUpa7CxFC2rmbCNLfNDggu7vZ4znNo9Hh7h2tAQRrcSCBx8bfCpPsacGk3mbD",
  "key6": "5zN9sptGbT5d1PAkkwoc3ub6qkdmNjmYsqeDqM6Zzhy7XbyTibUz8HeSB7CdsCJHZCUsQFZWxmjUkwfoBn58p3Nd",
  "key7": "2jFDw5sSVi3sXDtm5XqWsmBpVPKWHic33XeevbBYSxJDgvGbBZC29NS1MxmULFVAbx4HEENpjjR7qZYUyLUEFTXX",
  "key8": "Z7p7FbiUjmHzXyL3YVdGvUN25Rp9EY61Mf8t4odabkHVm9uDRjbv1Kt1H4zGVDcdXQg8BoMSQ9Y2KDMkud1NsE6",
  "key9": "4mXPtN7qbLGrcy3NfmBpDF7GV1kLQvCNyCBsdpJctH5xasQocoiDGC5yND8ZnM3o21KgcE3w9zg8YNZxBcit4KaQ",
  "key10": "bSB1iunyqjTPZw5zaTD6i9Y4vAVMKqgJfE5P6nTFrvsLUuFgTQfWov6jxeMGWJNkUfF865a2cN1A2mkn7M2DFNN",
  "key11": "3WBZjojb2yXw26XZCmzjLHtUfGUUM3dkmcCPnj7EPpPx4fFwpgcqafyi71HxnDYYwoA6KATLz4BdpTdnjiEsEjfS",
  "key12": "34yuFn9P5adLmTfdXwm46k5Cr1hzbPuTw7myXrbf4Wxmx3DA3KYkDEyrMi78hTfnEoseXfaTs31QqjAqASwvs19V",
  "key13": "5CEJ1xZh4JEFdxC5qUTVvpkJgz864z9VKgd7pNa2ZDaMMzy1Sf1NZhzhDfjdt5ym67Uw7TAtrvvS3Dd1YSHyDkED",
  "key14": "3rHNFiKviK3WCBcma4yaMHzhEw1d1nLLaPtwW7pyujYDXpPjYu1oY6pVmorntubCdtKYKhBvGDWCZKHkWfcio8bj",
  "key15": "4m4GXvpRnsbEXB7XxjVD48J4fa8RtvKkxEtQL3fxudZgW8vETAUBPdTE8QEm9Rydq16yzF7adFMdyVPhmSSyaz6Y",
  "key16": "59fTb4NDGpFeJRWaRD9VnMHJc3iimeJUs5bJho7zUqgiU1ZY6ifgw7TBfXJQTnTmjYfzd1E4qRDuAdupUWAFgrSC",
  "key17": "53g3waFiixzaWdTHBZNvu3qfujtTuWu6kNQvL1Zjtti8pEHyv54EGujE9o4JXPTaVFhH5ZGjEafhtCB1YZEffQ2k",
  "key18": "3csX3nqgTwnAY7u4W2Gsz6j39cvbXgZCXPU3FTvS2s4r1KAYogo6HnjaXFyUBZD8YA7nijEKjEjBwRafRVPn1r3g",
  "key19": "FFW71arPAYERoJaZAuSZ8wS1E8BzdDB4DKvvp9k29Z6K9EtLwsQhFRDFkm9mNmAcBtmeE79Cx71sSya6HD6wTmU",
  "key20": "5MMYsAV4fvZYQfMtgoNNtPdRRZsF5W9pzPCcpbo6D5nSUg9hCR4D9tBu3MSmG2u6m4C4bsTKGaXPiF2w7dPiDByQ",
  "key21": "YnFAmBCfNcwM2USUGfG1X819h9nY9NXPZ28UUNmVR8VNyBif5emyhzs5MbJDPa3wXsU5Bti3RNLzqTL67jJpqwk",
  "key22": "63D1xYyoQfZnHTex2LNCfNwaLJBZy29DGRNhNFEnpMk3eAcfQJpZubQAmYoVFFcfJfrrNpnN6Gi9YUKeH2xFusWW",
  "key23": "5bTB7CFc2t4uy3McXRJDhC2puNNx9ZErPKBi2NbcjVhkkA8u9XqgS1nBm3xrgvyjKVmTiGSumEL5wiJhFUpu6vT1",
  "key24": "24f1vduot1Wgzbu6SmTPUM67nheSf7sRinLgS4FouEXPmRyCCXnjqnJCqEmmSPScT55ppMJ82ssUuoxp57ARUvTR",
  "key25": "3rgSF2DmUZbrU6F5d2tZabCD9y4qc6iXHodwxmgH7DJTUg5JsRefuzpUh8Q4hDRbNocfhTJ6Zt7nYdpemMg6QqCb",
  "key26": "28BPRixAThcy8SAcLEXbKdojYNWjTtveLiej3WUmNQ7E7UTshGTrHM3Km9w4MNREcs9yu9Bpc2bX9KViidG1aUBE",
  "key27": "3rRgZpptUgP4fF8jqzKYokbgx2j7KJWjpgG47JvGM7zcnoYqzHy7sEBRZZQnqJeddDeTajfmvZN8QkbFjEyLapeS",
  "key28": "3bwQDQT3sDSWKrLA2jP8JvmDqjh1NU8c5n92uQTDxjBeCRw5h2ww1fiBW71AZnYaNeDEwZCxHZaVqTE1Fm8sYtMz",
  "key29": "ACes9JaVmic5wXW9uUEXpLN97HrFokGJm9wDUQ7FPspa4EgH1vtpJrydhB747tZRiAHeXVq351eDM8pqnXFTkB7",
  "key30": "BZqWnbcywYyjNjRqjXrYyjYfVdisAiST5TcpKiHHGX1RkjCQ6ZxFikjkwbW5vJiafoXTdZhesysxideWb9uJBDn",
  "key31": "4vhMzUknjYPYqPwKqa46nPUG2GjwpX96cKrieASfYJQSEc9y1VzVJtNvbZMyLuw3RRC4S3jVfLaZwYw8eYePMd1T",
  "key32": "2zqvVXfYAhU1y7mVyHpZz6XkNEcZ6qPHefeQcQWytKYo7vBgWJFdMCeHf16ojaPA7g8AFtEc9amEk7vBy6dz4bCR",
  "key33": "3feb4f2QqVz4Cb3Sv2wAu9ALL3g9P7SKHujKtZrWE4HutoB63no9NpTnvwq7Jr7exmwQbg7cK81pMJjri8cfoMni",
  "key34": "42uXcj2HNGuizUMZEmGnBJWoWgY8CE75gEMkCNxbDRJYPCq95mxUfPSLT4hUbrTbtiBzyQaPg4Z9AHd64LDHcqK5",
  "key35": "2B36TA4agbVNohdHNRzL1c3Wc2HT8SjVNCposZ9Uri9xyFSp9yeDLtY6DEn6ZgdFTCsLXJnM4DuE9QGFV6F6pVkJ",
  "key36": "2gsz97HjuM6pBJtFZW1YawS5c94hezoDamSCrUfEb1v5x6RyS9QBS72VERrZR42Fa8g5SuqjG6Q7m7w3D4DZvvgn",
  "key37": "2hhEHLj9YvYLYNsM6qz47Jfb8erFNKLYxPD5JKYcXMK6xcid95KjfnKbUH71ZWobEEfaHdA9nZiG5TpmUAAE9piQ",
  "key38": "4zKGYn5qu87pJSCVsikgWq652jKzHQDS7Xudz9CGsEfCMts3P5nhVYgeFeR4FrhQdHdnNKHUpZpNAJe58Aari8TP",
  "key39": "4uLN8RDJLMtMkmQGcteGfrLDbHLKZeceZyPrUqo8D1Tde2XJK3mvurm7e4SWhW73KhzNLLeC9KRtWFrGw685pZKd",
  "key40": "65iVJkg86sAdxTWi4JPJqmMhZF5bfpUqh49L1JGm8rAALyPiy16a6bheCvLKabmhxvQ27iA3brdRXBVaVDhGqnEM",
  "key41": "45m6jBhKCL1NgnTF7zFzd5MHcFPefzkGL2Ua92yF1VgEpcHHdjyqwtqitp3FYbNhcNaMaKS4hLwQgcDYZMEbfkqz",
  "key42": "8U8r9bg2jj2QP55VJe4yETqewTkhUqdnNiEuviDPCeLUhcQkJ5mmz4c8quLrNRqa6xoLfztHuc6Y46TgJdDtcyk",
  "key43": "31Yuaw4qEACMLdPYpSCwY9KCMZuK2uXTLwe9BQfeHPyxX8uqK4TZzzCEExBvvsxUQvxdSW5uucMPaKASHXqDhStt"
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
