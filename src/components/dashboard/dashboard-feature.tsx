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
    "u4iJFu8kiyZ7dsngoknuAocK6NAwrNDr8fnG9iiKRWZCt3PSRcuUHSupz2MfTCCcNpGpRxfSLxYJEGv6qjhjJz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bY9adSTE7z2UyUbhhP44ttHgBz5MqeEd2Q3DuoZEQCwHKr3CBMrb1ocjx46qekDf1KuLy9xtsFCRzLJYTNft3t6",
  "key1": "ouyuRn8S1WuzPCyTAvokGPzki3ULgce2s9Ve8Ye5ygCkZWaEExuCHVRqhdiceiMrysdPMMw4tYmAtUqrAm2NoCE",
  "key2": "5RDHuKSJo3jKR3dMPRsKHEpH8gTZb11ggkCb2JhJppdB2zjDot9ZJPgGFRNEJUydL4pi7x3ak6epunzg2TLiAtwp",
  "key3": "5bVsVkXyQThHBaXDY14n3PydYW2qiY752P6cNUNRWCBKFL4N1XajWsFrhYWV3Ubm7n6k86Jofh1T1x8rvTWuQ1kj",
  "key4": "4ygerspLqyjHWXY2hnDsXuS7D21MC7uko1ZeRHU2h5yuwyEm3QLFaUxAeC6fEPEMdobsR9YAsYce9teHzDbydtED",
  "key5": "3jpq3hkPexMhNuXS6fnmSnXALWRVKjUTc8e54AkXJdd9icQfyVrMm58ApvZ8vru7yBnZhw3EjopCo2QvvhXAohTv",
  "key6": "27Nq8v97MbdHpKXQmX8pukBcvvDZKuS1qWpFyGYoSQtixLWVSNUB2h2NKofqjVLMAe3umq3p1KoLA4W2UcogDJaH",
  "key7": "3NCVLPbeSVTQ2piAWmdFfARrGzwjGMAnmvLDqRcsTv9icJaHcU6Pae43qWPuXUJSW1g5BzYQtg1CAf8kTXAcvfRC",
  "key8": "3z49GTZedHUtN83oQkNdUQQ7GMewXLtBZTMtQb5aJQ1JFiZ2BDKTUZpsZDfEmYUR6ewT4TpE6KSpc9L3XvsgUNLn",
  "key9": "5QYPSeKuYzqszeXvchEFcf1VkypubtuyufZehjcnuYTveUrEbUEsUXSYtPCezm1hEPbhQcJU679ghiwaEaP67p3t",
  "key10": "yW9MgQANR3DJ3YXr5hRaykbCiQntHyYY2j5YkUH1BnZ43vbzJxahhYZZNrXUVuRHFPe6o9sgs3U5xpTp3BiuXZd",
  "key11": "TEp3fLafHRgi5YxxhMEb94Yib1rs9YgCYo3EwgovrJuHmJSP8gM52oHrHVcwm4JxpNXcohqrA4tnH99HLEWVrnU",
  "key12": "3chcfA1mNdLfoER5LvspnZ1YfpDujynrhHKGT1otVZUGKowNh7vKZpDKRugrmEoiiS3CBSeRhLxe8h1XQBB5rtgN",
  "key13": "4tQn9EhTqjw64SMqs2mGZp6cu2TwcjumHu4dhjikgivXG4neuKkBKgVAPwty6XD69ETEzVUK61V8uNK5i1GQoxTK",
  "key14": "2H8Q9VRGyFeR2vt55LyYj8TQHjCKeVexVEEW5hokDcwdRZTGqtLGnesqfvmAz6pC6PKs7Pi6aJF92WGStQfTo7ht",
  "key15": "2cfhUYrsSi53skZCS7KtSptA4ooSMwS79qmM9WawXyJzNirzMFawaPJC5hUeQy7F8e3rZH8TeQc8bsbD2LMUi3mz",
  "key16": "38p7tsM45ppcFmLSGJj2yYtPDTfHGz3bpbUdfoKaf9NEiKCA5Yi9iZKY555rWm9m9TtQ2RmDBHPgZHY1HTGQrYGP",
  "key17": "2hrXbQw4CPRco3DyAWNYTmExwKwyf9vUxHzzWtKd38PtwwfCAgMuKJwY8QWHo2gxRgmBjsoTXvTH73RD8E3oLVFa",
  "key18": "8Mge7NAT9nKgyj7vUP8VJYNkFKsWJPXkbzwEgmN3WVzzBVbTdsnBSiVH6S8xC6N6r1GtbiZ14jeBtRZP1MVueTx",
  "key19": "4k74DXDXqLmzn3MZ3y1vizcG1Wws8C5fEqkamdXnTALfpMXDwhfBDfeHmHcmAH2nqLUsMTm1xEH9p2vswjPD36wy",
  "key20": "sSVTHbt27keGmxvzAUzwVg3ZSXp5V8YjyU5D3FLfUkswH2ukow7TrpkRBGVkzxbbkQYrz7qXqTFqgPQ7PFTw3p9",
  "key21": "2wpX8ycDGnMRVuhTBJgnW1VbaM683fuUqNLw5eWNtFMPgB4qHDxUiH12s79UkskEAHSN73YuYJCLBPLrqWFba9As",
  "key22": "5yXQ2WRR4e8qVpYmdpF9A2ywhGeCDgJP8aNEg4vT9RocavfavqaN1EFhgovS1gpQc955J3gNjxx7iZKm6hXmsVgF",
  "key23": "3UfhUGCt75tgh5oB6txhPHgZtsgFTGJbuZDB5SwtzjwpdMpsqFRQPZmNUsKfyCUCsc8QSPN5zHD3es6bBwXsN3mW",
  "key24": "LjBUucpg7CvQSe3KCk2Am8zijaGU6NUfAoTG79GVCq7SmZKvUVS68CYho74C98jaxiX1HFdvjweqRME8jTYob5w",
  "key25": "kLy2y22Yx8NiitLPz4H2DZLnCb3RuLDTHfYD8jUQ2VfnPpay9i8ZZtzb8wPhzsMoJRTmFq6sexghCQWxt9biyzH",
  "key26": "831ukbWYjJppvxQLCc3FAYVr7VFeGSXXQKeKnB4YmujFigjNAnUuL1XBEfdFVCRXxZmG5AKTUzAKTMrmYvmVh5k",
  "key27": "2j1vgakHoBf8i4M6WyrkDyRAiHfRz1h9X1neonghVWafMnsyUw2r859GspzvELDykML4n1LeCt63Hpy5TnmSFuA6",
  "key28": "3BQsozQdbkRAvFy4JSFszCrdZPqetqP5cME6rcKp1VSuTRHRNQ2mj5Uvpj9Hces6YmVyGGmtZi6rWZ3cRoDEA5hN",
  "key29": "5QBoSJgEmtbmjCvo4vmg9vVEbLxrhFaCym6ST2xuE7ScnYBmJ94zQWwiiNFLp96qJhdqrQsgDMdi2zZvUcDcd6q7",
  "key30": "5veqFvxxbDVehKBBj8T15hqVxv9kmncbCu487kF71uuv1eQid6Hi2UaFBQnRkHrAJZbhpYd8iPyCPgnbjjJhAWJS",
  "key31": "EJzkYACTi94FdRJrjGbjkSuL49Rb1mtKufHBd5bdjhQR35YwNSgxN1yrfukHZPPPyr4B24foccNDEYPZ9STbm2g",
  "key32": "2NLXiwesbz5h92ysQLQpKCqq8et2zut1ZQjviesxrnBdN8mqst5icchKKj7x3M2Rnz9zTGDaHMZQEqTE4XbVctLW"
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
