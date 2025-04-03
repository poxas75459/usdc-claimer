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
    "5z1SzgWrJzBdi1hnHikw2mFRHn94hX1hs4JGfcvjFMNNpccfDyiESe4wmUJmTBQz4Z6audoeyiawBqs1jktjcvKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzwdqZ2CiMMhvLfbFANSTatNCnqxF6Zk3ftwinHM24niP4jBTLcCaSMbQMWLjkDeuT9U1WkKiSTudruVZtTRSWu",
  "key1": "25CGU1pGfDMFjNyfTNg9T6kamihaA1UMxRtSarNJwW1qj4GCecLNfoDsetdBpt78kzQn1hV1fNJ8er86B97dZi5g",
  "key2": "2phcHGUHAGZQowXsKG2PX43c3rGButp5tgfDyqXaxHihiDtUJr6Svc43Nxpf4oG67QUPujcHbYasxapWg9k3mgYA",
  "key3": "5Saw33YpC9TDYyFgw5Twtp9FBRYMAc3gmXaP2GDACjx7kVd2Xms7ofQFQSccnmEUBdiZWVkNxXT4TNa2Bn9DSpri",
  "key4": "4Rim5rsz3v7gL3APZrZgYhn5wVwNknKKfu9UEiSHEAPq4Ss6MfJfg4Go1h821QFJdjRLybYPi3Xtu5ASAmruVGRh",
  "key5": "5aCrDLR1cBhwMfxpDRe6kKLHSuHVD98BTgNWcFoSKwXPH7i8nmoV73WhG25y6DRMMvri9aKngWj1mDGjsxeWGkQo",
  "key6": "4YWp79uyMnQJ8ePG92rmG3a1HV6LerWmkKbysmNwxRJvJ23sQxFZK6YqhHafZxkmAjjwtiQAKGo4ruqwJe5xzMS2",
  "key7": "2fbWJGMuZZJzTTxRqX4C6Rd2g1v1jp8bgBZeREvifURvFJ26ixkvN2ZfsioWt2WhLdQwz5LGYKhT7eVfeuwWLmfe",
  "key8": "3tZwL1Xrk5qEaPvY4bsELvXwVqwZk4dPnfhJfPQvFcm4LrMwG82LoQs73GifhaQUQVW1bo5rUtKWGQ4nr1xBWqMj",
  "key9": "4zb2TPSCn6hRyfvaXkQRS6LqiMMgA9z9YtvZvjynpj5La1zdwbmwDGkDp246aHbfKQ29RcuPMrAPJCAezXq3u7FB",
  "key10": "5ZLjhfJyZv9imbx7YxWRmk1cmtH9YdEWpqKiYfDDwPfywUiPmib9iCVmR2c3dFnCrTiEgNA7uBnX9ZvwNpBVy49",
  "key11": "5qBWuPm3k6piZEUN9iNord4CqK5Q8aAbj8gBEvSnKFX5JstjPW4Em8FHi4YX7jwR8dhG2GTRc8XEGx577ot7AWWY",
  "key12": "4jUEixBSp2LGjDi7qWA8rANHorthgLA9oVJzmrEhEVkcTn3wSSKadrLJBVmJRsQAdTY8EtB8Wq4zoN19vAhqF6Jd",
  "key13": "5SgFgz5AQxgr6T83x1e8BDAVDVyXkKgNJXXtenNe4WYf6BUjGU178BFpvguiFLJgS4gPEebaag5mBPT8xaSUSUmU",
  "key14": "5zWRT9gC5sguNURhtHjD8gcb27p3ysKcaYdoJaFCRuUAGZRPfc4mR6BP5QXSFV54X5FowPs3tvvMfdge4JvfzUNy",
  "key15": "2JrtEYo5A33aAsQ6EUszAhgskPUPuR2tfmCUnekZE1eH8bTaJeSZqFsYNkuj27F6qTE46ak4o9PZ6wHABewPEPw4",
  "key16": "3fuktzmrA7YxEjaXDL4STB3hW9MmN9wAKwWYVEFm1AQDcohV329LKMzFuscgKNbE8MMZAkFfGvo7hVqkUxWMdj6R",
  "key17": "4FShbFS3W6Q7pRhffvETRYzjZRR6r9SdzmTaUz7F9LkBa6zYUA5z3FVeN6FYpBPRz3HunupAMbf5K4nRGvC6UoNF",
  "key18": "5NYgXNFMSRNQR7miQq94fhZRnVncyeNAmnfLtxwVMv6kEEVgFMWvHDgrcYbPDgybGPGPvv5PSLB6LEySy8BPKBQs",
  "key19": "Yerj9Zdpa4hSzZi8jWM8AFSazZBMroPKTAxgZa7pFhHuNK8epTV9xrBJZRJYW1tSdfaQNEWkY9DQRiXfkFRg6Uj",
  "key20": "4rChPR6sEuhkNRzfCQLah8h5sn78RYYEHSF17NtQA5e1r6z2aerj1VBeqoMHYo9MS9SBezARJLrMExTxvNtT89yQ",
  "key21": "Aju7fPezrCTyL6Z3GydssR3YGw3iBgn4L4pD7stZEE8neLxW6v4XcFCHS7WQzB9JEHkrwqf9Z1LvXHjcgkKXjw1",
  "key22": "28ZnJP6thMYvAZxnfFzCjnboq9Eb6uHGtdcVdB1W1WSxHjbN6JGMhNmENhrzXQuHBZ7WfSyscMF8JPCTuMGy5zJh",
  "key23": "2kQsejg9qSxCxLzPebYJXdvnyeNqwDAdCa3D6twt5GGD1F8JvwjHzotDAHRSqeeVtpy9dSmVhEEiw7QbocLa2cTD",
  "key24": "2TNVnTChPHNYc1oRQeEbrpqYi6jZWDaaMEgQjsqGPoHbQ2pCVJ1Tppd3zhvaakvHPzgfcEzotTsaEAaWV6GAVeMn",
  "key25": "5Wt3DYSqKmu7wkKHTnoxm9fh8o8z22T48aE2QnG8qonZN7MEUm6F9vbVkStyUh6D9z5kpsKw9FeuczTteNM9WJFW",
  "key26": "M8HgLdDye7gqqSepXLR4vip8RAqawR18CdRcdJCwV6pfNodkeJRnAdrm5m6qQDNu4T2dTi3uPfn1oeCgfjEhnxT",
  "key27": "29WT6LW8oBpMs9MjD4mv8cmzBvwG23oKwvnBUVQcVeyzEC5QaYURzGcBgXUr9ArJoXppML4gbY8jTtrsy5zesfz2",
  "key28": "4xzBan76miph1avqQHj6dq1u3MGUPekfap1hX5takrrVH3BH3VERKiKxQUG3fRtq7jKnZnSfbctKCRAYxuEvXMHK",
  "key29": "vdyaiARufEr4H7isHhcp4xeDDavZnSKydPmXwGAvNZtwMcaBvtqUeNG4g7AonhuR9iCFeQrjxHvcZ3TSjgZW6Fe",
  "key30": "3uY7SNvvM9phZPiikJ8mXhnT4PRQB61nmNcnrm6H4ScJ6drdRQUKwFioZCJxyUgkPnkdU4tZv9cLNgkFZ6fUJ7Hp",
  "key31": "5WG9AQYLVvMR2hA6gtrDG5SV6JiQDrYQS1SX7MtdH59bcyBvE1mYZub8ewb8U1sDwhjzdomAVj8YKA4W5WckVqFL",
  "key32": "63v9KaqfU4eCegdsNLrdo64QwQyJKRUzuo3qH3N9xFboLhTsaXjhAi9BpMHLTPdbkTE1BZmK5ttb9K8t4mWTNhWM",
  "key33": "49upEtFTFxkH4siZ25pRW7FY18cR9XQShtbCXKfDhyXKiBc6NZLxCy3FBa8UujYUBEfGjJSsMtaRJykXByyCvq6K",
  "key34": "2T6gmZFEwK1w6L1Gk1mzFJkXPPxDu1yg9LznyPZTAhVNiyqUwPoHdJgD14cSr6TfFfiUGDRB32oxUHbaLUPtisXP",
  "key35": "2kCYShRPJTJNvdXz2RTSEp2Ti8Esa323FVdfrwEiutF3T1yUqF6qRSqtxvyoZ6iNG2Fr5PgvkhMUwCSb3DJSAmyR",
  "key36": "3HmUjisn8DNdruPUpiyf5q4Q3L8KUynjf5JjWSRd5uWaCU2NvcqHf8pFqHGSzLx9eFydELiDktixAviw3ZTfzy58",
  "key37": "4Kt77AmjcgZmHQzUTubPvkkJRdQq3mxiVM9Mjg2uxhSLCbA1ipLeuTBhZDv5cNEhHLDNVDKskB1XLJVhQxHbvmqx",
  "key38": "maqLZVKDjbfdhCkkC5kiCHRYswiavQQYdQ8G7AEaDx3QhaBAyicfiaHAR4R4Yj45CTTsqFFQUk8XD6gB35sj1Z4",
  "key39": "eo5gPUfvZysfMbmDDG3dFVR5VxDvyfmXQgxc17YD7hav9tMkm4MMegTnXpgNmubGXiPPj96iiaqgkt2wAsnP2xX"
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
