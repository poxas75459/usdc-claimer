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
    "2jtbBFykarzEg2s5oqwpoijmRMNifj6imCjNPjj7Vp6u14QPvNUQsVo5iD5h9XJ1mxB71YnmMQAib1g9pSnqc2dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeFpmvcnQtpQ2hC65YWMUKDvSayCuYRdWaVum252rbqBrjKgLEDTLzEBxSQHGTazJjUSBzFfxQiPGk3jEQC1FMw",
  "key1": "5iE1Kjeay8Bczjr4yGVagTEf6k6P8AW2VQFHXQbxK35iHNaxxkWtdDpWo9HCQkZEfzUGMV2GAHGb7dmpBeeKML3E",
  "key2": "32DK7icoZDRnJEeow7KDdYD7y7WeXXAi7EGovjhqjRuVXaKXSJHDhBp6pFrdqdHDFJo9FPmD18T6hR3BYTExLDzh",
  "key3": "5QPzQxCWk9k8cxZp4rpLfeHC85GT6tYKbSQuhCYomkZMrPCD2pMwbgNsudJTHPz2wdJ7xF9veynT39sJCKFAjeSf",
  "key4": "2pwhy98cokEn7DT3sJvW1JfmwqyF1HjR4g3SBPrqZ4h8ytVkQEbHZmjuuMchj8ub6Y21JFk7dYXCrN6haFuSozcF",
  "key5": "3hzBuNV7VxYSpZgeFmQxVJMsLMPXNQd1GmUAhYyCHoVQ2PnMVBicwv3FZdQTAw2oWUTPdHChsfs5Sd5hS7F8aYeL",
  "key6": "9E7PbzsTNDymKGW3Y33bjtYCnWoQGse3VHCTJzxhEKVkk2CAsSngYo5N8x22NVXrwJZNHWe6Hfc7GexgFZYgT7M",
  "key7": "2678N1RbN3PZb7oXaiP1HzrWFN1iQEpwbTUYDDtaEePF71PTx53qVRKJVVz1pRNZfR5gZuxE1JisBsa8cvQe1tsS",
  "key8": "5WB7YQKH2na9bCtFGhymiNkU1ZyBNds8iWWv9pPBdrPTcRsp6f5eDsM7fgpD5kdWDcMx2qKptFyFnQqY5kvH63x7",
  "key9": "4C46jbiPgunNrYJVcBU1CDupN7PTKskh1JY64gDbMpNPwgi1cxnBoGNi6CZo1zvqhrcwZPGCyVwkn7XHPtamv6bf",
  "key10": "2wPE7SrFHJfdqKVPSHreiXRdGKDoYEY3VdVu2nBkif3eA5ixuy21Wjc5xBxWpsT8NxLQm5hrmYZWjccQf4SZT5aC",
  "key11": "26P64Pvp2Y8gugWn9F4yDq3K78xVzzsJTHWJHKPaMwN13KWZvvYr4VJSDcLHZRfxBuRMFX5b2byDDHvnDW2cq3T8",
  "key12": "2yFnpT3ZrXBBvQkwMg2F8uysDN67CztDCcU4LUugwbhXrWrtufBFNriRKoMgfZz8BamQzmWWJkWd9oc8z22SGSYc",
  "key13": "4BsNWvD98TSMihMa39wpTcRKrPreyBiF19ggW1ZDi2CLszgDXnhasi2mNoFKBMa9aemJHD2fhTDWyCirFMAPYbAv",
  "key14": "1rJtjcVYemgEckADSHPXrN9ckF7uZAN5Sb1AKGm9feusaVfSh3Takh93qbhTr6b5EK6aGdvTeYSqKnYZTnDgUjU",
  "key15": "5nc8DSo4qhASdCYVE3eh9K5NituM3uNkYbuV1D6K72RN1jC5cYtoniMLGZvQ7Pt2EgTTweFxTnnGU1ujfeyW8xG8",
  "key16": "h97VEA2yHx91fs1yXigYadMf65worGmEUrFJ1yj7iuohikDvk1WfaTECzDcxHDqrK4p1ZrvMz5rYfV1U9hcrJnw",
  "key17": "5DaPeft2iixLLHptUBArXbDoS38Jt4rRWtuVjpgdjQqPUfFNNrquobQmir4qzR7ayZvEuWC74ixZk7iCoHEMKkp9",
  "key18": "3KxGKWU1hR87evQoMLNJjfmYzTZVJu2Dmq3nYFDcJF1g5qyYtD5VqXUUo9dc3S5uJVCiWcU4PRKzKHR3eRb3ZjdS",
  "key19": "61L4xgyqjuhEGqmTLLGcnoL7qjVYcsPLgNCTRFK2QC78jjZwBXUAyxLgzWpuJkM5ooHRUPpcBrtXNkhX1AQzPucw",
  "key20": "3faTXA12W8a99gwHMExk3DvGZZhMWJjka549QN72uo7LYoZFA4yrUu3QVZusugfQ7WczYFj2THQh3oz637wA116k",
  "key21": "1oFTDwUn6axerUbaLrRrVrQ7wLa84sJTHguKnoiy4VTSCwCb3V4jUbseR1XYQLJqegGMgyYUwCe1MJwtZarimXf",
  "key22": "48aRBQ1Fd3jX4rH2aKnpXcXrXMG5JVAtUZaBbwhGjHNYrCDEdDJYkeGvdYeaWW6xuBqFTZ2pq25L4GDmKriYEaut",
  "key23": "4YcLcNHojAyqe6qx4bFsbi1xHk8MbZKNweNb28yQov3UJeXtkQLWADcHjmHFxrLEjdjVP4Wi9cfWCfFiLqrpb2b1",
  "key24": "4d32HbKMjwC2EZMfjT8AHeykGzbFjsqaPN1rCj1QdGxc5wEAr2wp5q79UZZMab5m2TRQjqs8pEFiifg9mn9jWEmG",
  "key25": "4tpLzCBsakiXxetuQd2y32A4td3XTxMzAodMCsFkvVz7GFzxrPey18sz71t5u4FDoyKXsRL1qafj4kf4DfAFkR6o",
  "key26": "4nCjtGczeZfZGZSJSwzzho8cQkcQr9ZYj8dxn9mrQacvcpBnVkFyoYFaSKt5YCRo3atmVPrL7Lvh7RHye9F6qu3B",
  "key27": "447ZD7e3LUP7Yx5DU5pPmszrPvi5GNbgGGpCy89NJgdfqa2fR7oGyYLvpt8KxQPSH9XSizv5tXxh8vhxrLyTYPLv",
  "key28": "5AEj4AwnivB381hmWYhqr152xAXZNURVKjggyQcQ1MQMHoR3q2J4reBYv8yQhYcbaBpDaTkrh1WgwsaBq5vGG1jE",
  "key29": "eGKkjqDjAtf3ucNvaaxc2zg2rwf6Axgj7Nn7FmegP5uZx72TEYY71oXzE8KGpsr4cWVJsYsWWhQqb1ri3gaLidJ",
  "key30": "YN2BcvpwEYgNrFD78x1borxNsDt8oq2HkT1EG1okd6BtfFQrrZLtbh48EBsvHd7Axao7Nppf8pPLTh6BTNFt6Jz",
  "key31": "3k8VJJx55XUieanjtbHTuaVrtXEnP467EdmLx8Dc54yhejJPhzUqG37JYVAejs5bfwj1RmaNipfkBuKmnYhmLmDm",
  "key32": "g4c9Nkg9VQVoz93XwbbjXXLEWVLoJuAQydDQpRu5REj3Cn8gzkgaHw7eauPbrHLQzEGtZGsbrXRGbyxtSnXAodY",
  "key33": "2hR2iY1TweAATkQUFjAScpt5XqRJpJV2RHpNQY15kJ5jZFVkCzbiRiisoTappPsZJKSARcLG1PczmgH4w9TqKxJa",
  "key34": "3Mc4AWwsPfY1ubKaDYccsGr6hT4uGN3oPXQTX9fgYxmrXyHgjzi323RXkySddjiZSyB5a9Li94Fan6JyXSXJ9Ywg",
  "key35": "dr5M128HbjT9RWuzqq4kxYmjHDTFZmHNrYYUNBZnMqTbyBSgCij39n5VhwcA89waujTjYZNJVqTtHCJheC2ZWNW",
  "key36": "5Hvn6qCHE4bBHc9Z1Xn7Lv8SBQ8duYs4Wy2GNy5cx3fDft87pfJDPhfkPzEZ11T2qhVRhKjtHevd6YFw1v9ZYiMq",
  "key37": "AzRT3U2rUpeaprQWyqgKd8ASMrEUUDMQfGdwf3Ls4A9DnL7vq3PGqrWKvKLndMkqdaxCa6Q13QK8GEfgAjyiuC6",
  "key38": "63pSpaQKYim8tn7pFGfa5TDWoCNzbS14jxnq8ciWoT6ZKQfLfxKXHj3ZBeaKPYchR6frPceJZAQ2WaR77V9SDVrZ",
  "key39": "3o15QsHhUUDViEaWregdszxhJr3TSbghXfCiMuUQ1jwJR7Sdnn8w1g3Gr5zxEqVb43UPTRXxNSPPyFtEZoZ1YXSX",
  "key40": "2uRJJnqNuKSBap2FZ914SLtnEEyH7dFYPP7zZuQmBoJjnPGpWtrhbiD7Bgrfq4BiDEuepVB7Utih9AEdPwbX63Ze",
  "key41": "4r1V4D2YyVWhUzd5oG3xieRMCHRgebXxeoKmBUCDRT2pCRzLTDdw8CaH82sSyfTSKQkiGrJt55vSqci3eKpAbzS6",
  "key42": "5b1hB8W6BbLmE93gZ4y1MkWQWBoLiGn8RoqYkY9dUFqUSk8cFEqPNmK5uLvMYqpHJENsFK14fSumJCoU2bPxS1ra",
  "key43": "3YkCo48VUKGBwcMSnr7QBCmQrScsdSQVx7yAd7KTSZnwBSXrTPWkWWsW4ha1gRvBxmTUZcEcTUYtvCUsPXXjqfLo",
  "key44": "5VRKHM61R1KszQvcQwNgMu5XxLPKt7AoSz2okcvPwbe3daFKRBxbCcnfeL6aHFRCdbFujSPGXQyPQ1HMNCEQySHJ",
  "key45": "5G66KLKDkXBRzppFGBeVgVz3CPadTZRN7bjJ4jjdR8HJyV3v81BGBM48h7xrKTdXjPmwYxJFXJJHe2jFCC1HeBRY"
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
