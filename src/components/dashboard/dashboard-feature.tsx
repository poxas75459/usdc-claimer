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
    "2M66HhAGDp2RGM6wANMUp9EMWWBktzmq8rhEDHC37xXGFjgVkLK1A4rLKUuemyKBfhFXdcjaGbeqhAbBZQd2Kv3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwWSaMqnYxqmQ3V7hLHAQJHkodgaJSaNn5P85cQ4rhD88jeG5HGhc3DbjvrqDZ1JwkbDi8JUNdjnkokvigJMd9R",
  "key1": "4gJAphdPYVpVy6JPiyThErrK6xeq4TJqM1Trm1DXuACvjm914sK4EjuBMQe2iPCQxT9z6CPZAVU63GdsH63buqp7",
  "key2": "21GGkFiJpJfCJn1LEZ3WJrWcXJCCYKiX7juVjWin9aNE1rk2ywQcsZEUfdDmPbpPAscBcfmXEzfpidBm4B2a5Pru",
  "key3": "4jhPXXN9i5t3zx2dF38qZfQFy8hYBDjP85rkuiHvEAbBZxCn2a724Y6qU3Xv7xB5SBkWWjCLUPATviRB6BMhiuTp",
  "key4": "5QP6sCQG7yEY1aG4oNr9MR4hwR8oDniWRqkonu5aYxWvQBazcr2mnbqDpWm35uVmXv5vd3AmAAJQrNLKjnn5YeEV",
  "key5": "4XZWno8J8rpgZPHBnNfxpimaumipWZJdVpNXq6GS3w8SL9ztvjhvBNyis6tXNnfW4kwgPRY7qFFmdGnDqWznyhYP",
  "key6": "4hCuWE4W6Lhae9kiwxoJTRoMa5eX3SKYTv8KRLdnRBcF2beWFJXRNFEXVAdiMzDy8E5psPbr9a8PEb6NbZntCRme",
  "key7": "3DkXQyDmWmoPwXTBz8JQtc6fKLLbyX5M39ggcHKDG8ok5ia2SfCZn5GyTRiRWgHFhf8aKQgDVcqiiBEwJU4PduBu",
  "key8": "37kkC993G8rWrb5khncPNqCVWbngKXkQBqHYRSGBW6bge3Zs3fnTogo1XeuP78QhTJcmm6ooAexQHajbdP6pnm3Y",
  "key9": "361msS9hvnBmxY3ai7UJwFXzqo23nCt2Kkav2BiB2cHUyVi12XMtKfuhhMY14DFw2EVDnEeg9PV4dY4uR5mGoQP9",
  "key10": "4JuLmPx8hFp6dyPLUX9DUC1qxijzftue5rq6FH5DHQxcdT8VehHFFfmAXTF4keKTpGMLYGzkM9bwPiYaQKT6ti5d",
  "key11": "5JK4h7mKgG6oVxkA8RgivaBRFPLEXSs44a1CQfSMQDFK8fNYo7KfxbPKymiYH7QyrmLh4n3gn975wmEmiaVYbeDU",
  "key12": "3kUv21UNL57BvH29x3nJkpz3UajrqrdRFyA75wyt1cEowQeQg4HEF7iGqFQ1da7wjymjKmiMaiin5u4kUYgCVx5N",
  "key13": "5NoWkNToCEK1dVSkLXfr7AHtpxzgLHsBkDcECbJqEbAipCj7DUmU3x99VNk8DELfxTdyGx2XS5YVqFPfTCAq6Nay",
  "key14": "4i729Lnaa35bDSusEE6duiDwVyasPTTvBr5otba8pFBoKyb1oPjTXA6dZNfpT4RVAy7Wi4CbM7a6GyGYPFuaYn6s",
  "key15": "39595E7vmfAn9h1JPbbtJcpQZfG1zMErEJiVauETMKTqWLKto1AhjcdrtWjGRkkRta6QF3gXJzbcMMpYDHiAXb8L",
  "key16": "tzCLiVuomGeRaLNAYD44PuGSdZKeqkNFD3yBvJrkF1HdBCG1KtjYmcYMsng2PLDJ38MmdSJD36963kEJvtGrMdU",
  "key17": "5usTg3WRnaQyo9X1VaMjpe411K6zpNUEW4j7hdbwwjR8r9n7wEWZJWa9oH6jgevhKBrYxFrisViQygDmnEEa41DJ",
  "key18": "3Tcwnaqp9TU6CFfUzQ3Gn6r87VXFWdXz5rhSX8gGfttPjEUN7LRpZtb3pywyc53QQEK2egDdSMH7t5LXzHvc9xUJ",
  "key19": "2B1umxkQTAs6EJfq658k3WEGqHCvbfZwR2L7zu4t6iR7ZeQ3XbRw7ida5hYZn4xhtN1nJNoEnuyXksqf85SqK1KZ",
  "key20": "2qyYjiQB3Dh8gmg8hFsau1Ugm7wfNjVsmLJY1VeEGDt1ytRZ6zq6EqH4yuZdrG3TYn5qbZ2K2fWmgms99kSWFk9W",
  "key21": "5kdH2WTDNwN3ZNqwdHGv6VetPu7Mymn4SDk6hPyMwoo1Xvhf2evYbxvt6n2AUcGakSt9kRySsXGkYznw92yhH9D8",
  "key22": "5CskYRYUtCUpytK6nfkT8MVTJ9jV1XPiXr1DevvyA9wbpf9kKHjCroWx8eYQaYiLqaBXHepJzHEhrFnpF7fTmRYo",
  "key23": "WtRFz31y63sM354KQ9Kvk9yoccUgtCTzwHRG5dmMsGGGpDVxRBKJow9BYQpEYNXLPf4p33JVdpxeFQC1S9SBh5n",
  "key24": "37MeLzxcnGseGBGmNBKd6sVXE34nd8YxNLXZoJUYUQuciQ2NwpSfT8FF6nYAVYMwxKA17JsS5MAaeYUSiqvuEmtH",
  "key25": "4Kv8fG3HGBvnQV3vjR71UbsawPH1vK9p59yNU7enPNBkkp8B18MvfNUhH9K3W3gwtgdozP2CCiQtg5cqbdTkBS4a",
  "key26": "Jqm2gm7btLfaiKGTAsvuUQTvJRScAEAqMDPmR9MwZkLBsHxLSFfcdJKRGV8EWJFcXPsRunYZQTYVisdZBPZvUyf",
  "key27": "3DqQm7LeS2PN86uiiQ9r5WUTjS58NFBP4pzua3ocDTDDxDgaYddApdN5K8MqhQkZviuDsdtkp26Yk6YenUUvwdTe",
  "key28": "3wdjvE8DPF4vR1CX7yJwah5PPzsJLj4U2GwdawRYvqAKXTM1X8UDwPReHH2TTbDb1S3gG6aDwopiVsrxE2BhFaXn",
  "key29": "4wQhKC8g8EgE8kEpyyYndLs9L8pPbxHBrVPnfEri9GWMm9o8FAbxKSzcXtxguoZYicYnx8Fu8JeSgnU9Upc4yg7w",
  "key30": "5NDCTrF7mFjrki9VyDigEZUWCnKU4buVM8zZJv6p4LYSbqEnVxUMy3yPTcxoRg93X6GiTPvqxnU2AEqWzDBBtRo5",
  "key31": "2pLpXj1ktHmab7QkQ8EYcdyZiqMnUtx2Af86zXPNuZQXmdTwpwHRZ6AAJ4cCnVy7oNumUFCGis7vDC14AgAx4nAa",
  "key32": "5qVNrhBHzmiGqy8QEA8ALGufko5AdDbB7mza6hrQpDNzj7SWWXAMkEyjkTpEPT4mvCxwYB52v1p4Y4iorukEC6Qu",
  "key33": "5PZUx1yFqgRFTqkEJSSeJg32xJKzK5aRjFv6MzpECEJfnEsX2GtMMT8zc14sQABTcQEVcXgZxJd1RfEYyVebN2iU",
  "key34": "5mm1JVd7DrKcvXoywtVp2UxouBqxfuW5LkCZgwZk8qwT7i5PcPsrQmZQoEf2mPqYmEuR24JQLgPP4ZSuxQDW6YHv",
  "key35": "4pCcDJRr9Aut8pCVUWMisuYQczo4UZoBRLJVMHoCVZdaZ2PEiw5GzrTxLkPeCRdVbENDqy5bdtZkgdHYz31YNFEr",
  "key36": "7Jp7ApZL4FE4D7hyC2dsGhT66YsQCdGg5Xvy79aAGf5TXYF1R5CTc8FkeQogz6fYm4dBto6V4qEGXfTNPqjfqBq",
  "key37": "SXJAC4v8wrvcCD9CEvNFgxZqdwYpgeEDBLeYcAKePHe3oWrxC3gXNwW74EpaPUz3CWMvhvBnYXPXR4BZ9BCc2B3",
  "key38": "49EQsK97ssNyjm9HHSqwzYFQF1VH9pz39vesgh1p8vKRwfxNVLdw3eLcZ2i6FaCPef2JfDN8REmQMfXVSmZe1mEd",
  "key39": "8oHeU9YnULeSGDuKpkVNW43T7qdi1yZti7wWmx8o5pwxZ5MnwZc24yC43zospoaUg5nBLMPqFJSsCXHTWuHmqZF",
  "key40": "66UJTDUGUwoWxjcrNN6AiAjYwKfpgFj38WdkGWCk8Ni282Z9zeAhetcGiaPvSoGQc1xRmkUwidtLyGQ2yMZCrRfh",
  "key41": "wMhr7FYWWf54xTSKPNZMToDuMAUzVsb837J4J4H5MwkQe88LKncDg6oiWQzct4cEMudcfMvfoSX8cowDHHbTkJi",
  "key42": "34yoHJ7T4uvgoBMwLxThsde2fXYXY6EToSmd3wcFsAGCC69kMFVmBGGJ4P3q4ucci3ryzFtpg7qbgLQoPCB9NcPj",
  "key43": "4KJBbv56aXPpgxDMSmMqGXYi4GmBq7CreUGR9XPU68wGGL9e78MXsqYZShxnzrUzM2ARb13h6vsY7JVJSTFwBWSS",
  "key44": "5nd6FXFK77JebNY8VsyHTLNVU2n3n7gbhfdwyo4fjR99QnngDPDCLHPRBr7bViePNJjKUfgHgQYD7dfNM5PyxtfS"
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
