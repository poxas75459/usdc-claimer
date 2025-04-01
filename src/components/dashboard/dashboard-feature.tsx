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
    "4Mvfy2A8MB8RHm1zbYaS6rTrTaoWJW714M4HZZLSMyvstLVY4WRQigXrvu6WTHe8PBHY6sPVPL19a8qqwQJCf9Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GcS1Xtb89iySBcB9s9xBjqTwhwEUxH6YTf8sZ3Ujm6BGpJTf722nPBfMrgmu7KS4T8nFwsFAS4enZ7oYAYsqHEr",
  "key1": "3kTuLcSzSKQzyTMNAaWrg3JNtAnZkefcS5QKkZe8yTfYcSPricL57mStFZ6xvJkte4uaT4eEDn9qxyZiSf62bvpz",
  "key2": "4PEEywyqR6FxR9axhya2V84F5pfexYjp6pvTQX1ybuVZeNkReFB9DeP9qay1rapJnUZLsv6L8QWoxJVk9tgHtHgj",
  "key3": "4XUsQRqjtdmJMFtGsJ99nPqVF7SHnyYRmu1Xitvtn7sE7CVumLk22g2Y6u2mFnLB1U2QFaMM1dvTBod4TW63rXYc",
  "key4": "3r2Ab2aT6FMWPJktQtNLoMa6BVF2t5L1pUGce7bvBCbXqCGtC26GipepqjuHnmsqTSWGYb4wJPHpGswoVY6zstPy",
  "key5": "2oMHLUrBiqtKQB9C8zDYTJXCisUs6J7fbefutWuaQaZ5hj18uLdvAzb8k9TocviC1fjJpj9TsDTezy1VqN7SVMTq",
  "key6": "4NDos38Byx436MHpD4gBfXMEvtVMi4NXi5egH1vgtj6w1De33TN9GwcteNsrn4CVUWwtvC4c4ha21b8CX1yFqWKx",
  "key7": "25buSugcUHZYkytG9ePCzc6ra16CMMnuHo5HATwDXF3sc2NrsAY9LdjhHMauPWfmEJ3Mt6TbjCfCL69mNKLvBSWm",
  "key8": "61bwCykR6noJpHzCzjQLwjwM49m7dWiiCJpe5bh7Sy2iKYJFBFUj62vvHXYeC9fHy4X4TeXbEZjrJbQ3Mpior8dL",
  "key9": "5bHnxWDjya51b6n1iefHHbdx3hyBGTHnTSTnBdvL6n5hBY5fSjpqRycmESDKD6nnJLUaAzAENxrVfvJpmrp7byjG",
  "key10": "xAkxuVZxPU6Six2bq58ECNDeApWZqet6CispezE6DyW7zbEh3QD5KTqbc3Sqa3tPSU2kbwtejbvowi5R6e5Cemh",
  "key11": "2jj8zjWrqRrJpCu8bSq17c2jB4X7vTgaLZKNZPbGWZYeoqzPPkVPHrsibASug2vrvG7cCd9sQiWUAeRyPGVHj2hE",
  "key12": "4vFywud1Zx8mNPDUMLU1LmoBxSzp8KT2x29LAPDcrKBREuwe5Gs1QTEXzuiDW81pwcTH2xCxGBVVLgymCqvDvwx3",
  "key13": "5jPdh33ethTS83cXXwX18qpsmfeEi4i7DeU1XUFN8Zsdz8jLZaqDMTNetTk7xN8Wwe9vYso5o8URf9WvdRDhRu3e",
  "key14": "3NaEQqCQv6aTu2oyewCBSJKNX5kpWPah8AFaJXCEu4V4rGkfrfAoxT5WQ58mtx5kQRT1Xh3NNTA4A4LP2APBg5K6",
  "key15": "4ejjGV3sMAtUid7r1FYNfzxmmSmp5csxdr2gCo7Vono88D8Y4KUzN9SYFzePwLcW2wPzEobpbRwXeLNLjkVAV4sz",
  "key16": "217srimqtNDu8Bvwd6PBunrbL3tY43oZqZF7FrjNFif3xYKRQTKpHg6aat7eJNcB8nFNHj7fgFfwwUQbeyp88GZ3",
  "key17": "4rgYQBZJdzSDQrdNezRn1kHgaSmFZEJ8pvrtVdX54TCoqzqUnkNPEKeAies9KFpKqdPfcki4Q9Agq2GZWXyiZo6H",
  "key18": "ioc6ymFnV4qAb1azZf2LdRmWYCNFvzjTptzFdGB59R8RukAw3HDsJyuJC4f1RtdBtsTKzYrAgph6jzotvC2ZdWR",
  "key19": "2c2SQRmUTMcFyZ3S1MUU6BUxAkkJUX4dDyxUKd7sYQSdXXRBRco3zemKx5Us42Tria2pm6EBEHqmfSdhP5noUtSq",
  "key20": "4KY8owkq8JcBvvWFLLvzVzEe3L49kowuhrtU1oFnnJvuEeHAzd1gLGkssw1icXsdR681sbZiey2sGp6j8SYxpbHL",
  "key21": "4kep3qaG2tK96BXD3KKJcH77pj7iiuNaYUsbcR5ZjrGb6FrFBCTohofR6X7GxUbtdXFJNYhXPV7pw42RZF8Lx1oY",
  "key22": "57eHMFMDmPDkTCv86yrr2TgvfVrTdLvbrJs3DorY4QWwic96p9wH4pzX4aUpdXxuTf5WsTED238c4mHo89fJutGx",
  "key23": "2eZR8t1zJ2n74mzkUBdFXMaYvzNGT1pbDmFUb1f4thPiEkyzJGBuPuAryJ5NDNs7KFM1X8TFtECoDR7W9N6xsx2x",
  "key24": "5nsQffA7CwLeS4rGB82AxP1X62kSmK26GNifXi75siDaRcMrhuj7xVf4PyQ9sp8LS1LUeUut6U6QiPnQXHhBHK4V",
  "key25": "vBL5DTFffoeEXW5S322KH5DK78v1qsCJZMDMHeUy6n3KvZnL5merqLCd7mPJLty4Di76m8j5buRBafdLqDxMRp2",
  "key26": "UT4fxPU2esbFCMa6zroRhfSwXG8g2jH89ZFBMFtTXGMq8ZViNuRnvAUpDLAjqHdA819UooGHjdwQ1uFqCmUWqZ3",
  "key27": "2szVs5xsv4X13GW2Ui1vuStYNGv3dywVGAAzBtc9PM9QVMbrmK5CjNv7A9QRTd6uEYuWxe8b1LvzRaZ1xGT8xo5s",
  "key28": "4jxXNZ9hMfP6Ho6QWS6KsfFSgBPY8MkT7C1vnwxHUZKNEfx8HqYknoy6HrAxhKgEPJHKbpQYavsuxtCQRdUfYWDC",
  "key29": "5ACt9q37YzW4tyAYi6t77x4e4Nz55QkrDyUZGR8ZWsc69UdMkY3ninb9cP6CJ35sUQdzMjHF1jvXbqbs8LDSKwMr",
  "key30": "2zhuqUq7djQVbkw5zwd3oaXtidencsMbpdnJFeZMwsG7nJRf6BxCffCNke3AXfnN9ByTznzKY4SL9rnv7xUGwV8z",
  "key31": "2D39mmYoRsoQoL6Q9sqtkKTw5dBR5uzPss2piPCc29ULdd42ykEGczDmVGgX8885Zyu1MLvPcMwy62MJwGEaaZoy",
  "key32": "4Z9ZMFAMUtVcEy9S8vLpsTQuiTJHMQZEGRdh2PrmK81oEMiwQ7EJMgSvZgmNfwbtWKAoKbYrkeNDqoNeMEgfQ29H",
  "key33": "smxYoEF8UcMJdvZDdRw2KRkd9Ecqj8H76nDr3wDdbnjeu8gJByuzWtUmXqtBJiqD6eLbXMrYMyH9q5E83HypxR1",
  "key34": "CSvR223hEXJ12c2F9zh75HhwahZ1J7aVUnyVXrrCZ2NnANQSo1Qez95sDHt73Ssm11eYYuJCDfyPkAvkWTk86kz",
  "key35": "4RmTNpwCGDwQYUPASVeoyvfExm2Qhyfpkbx6NG6RD7pPqdVwpTkUj62KJyEMexSoHbPZLjvjxPHkYMuaRizabb6i",
  "key36": "ZchVmirD9cZ5a1QhXuHR6b8xKfX8t3ps7gh3ifohugCAQxy6tut5SU5Zj6scBURRbUgEs87nDpBY2AJ3uztkHiq",
  "key37": "3xpQAci1qVcWv7rrnPyNtF9fr94UL9BNYUrCHriCGfnMYerVTkxDYL26tvkSWT2E2f44Wp41bPJkHLkr21ZbzXDS"
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
