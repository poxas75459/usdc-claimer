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
    "3xgYGdZNJc9rEzw495XMbeMLubaHCFLqXXyDYPjQWgzZb8NNVdhXK3Zc6oLeedWmGVVSi989GUfoJtvBPDkCDBm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RMrrh6oJ7kfVezEqgXYmDTsDVZLeWXdE3mUW5i1NjmrD3oXQE5w8W9DsXMwErtznFLwHZb6p6k1MBhRicyafBxv",
  "key1": "4hfWXUjfpAdPvE5ksh2ohgPSoYfqbFZ9UDQR16PqpXvQLEX7Qk5tbcHa8WAxDLhAPZWfmQPQCPAosKWrPvVTzzWZ",
  "key2": "2LfhfyLY1SQfedkYfrrf74FPdBcCgqu6baRd6kGUyas1rQufeE4rxSL8grcfq1HEV8jhbufbiAiyXepfMzdejd8v",
  "key3": "5478w678web6dDXG6oMLSmnXCEJyQEYhZEKLEbmGdmdALN5nqW65zETJJvjc5jQH4rUV1L9T1yVZMDnWLsD5ZLpS",
  "key4": "2RkfzyLsXGwFmkuu8oTDFGpHcKEMCu9dzhvtwRG4zQoZfv2GHSJy4ZC6ZmKWWkRetb5Z3kgfEy4a4KS8FKuYCFza",
  "key5": "3vEbVJhex8PZp5sZ5GpAPudqC8Jiger9ugJTKBCxbTZAi8zDiM311gVp2e1oMUHJUPGwqr8hLzdNFzaPYDo9mUAS",
  "key6": "62nHQ22SX5sDgDBQq1pGUv5vTHAFCspQW43BMAAaLqSbxmSy8aF3gJx2wWn7w7DM6qmRqH3VKd4gid39a1uh7mPy",
  "key7": "4WAL3vZFAe4Jy6vCTnYZyUrFqrmV6ggRTDibjCMsbA6akthA7NLZqi2UDLEwvmXZZQskVwnnTjnKZnqTAtQ6h5dh",
  "key8": "4esPYKxWgNscBU27UHLQNnEaX2Qdjp2JJm2g4Up7GLX9EQvLXRmo1JSLXx3jNXDuJtCRnMXzoX8Sm8SxeD1bS2nY",
  "key9": "5FmkMddbG2p68KdH7eERi2RkM5U5PaQ3eaBWueUTGCqd8UFrgecuZsrQGqrfL7s4mGhY4tUDLcqPcrznNn3QTkvy",
  "key10": "3MaV4cgszerAzpFxSJCaNMwTEcqvaWrafn82Q6DxPnWV1G9vq8bFrPMBbdBvBxdrMFDczNAAZfarzY2ECz1aRNwK",
  "key11": "5HsuYmSWCxhnGaQJEFrnr1JTmcbqddVyzJvoscmfpfqxoQcdjYwRSgsj9v7vqsSJsS8Vz494L4eCC8Gaug8ZnrVo",
  "key12": "3pUj2Red4uGu6x7zqwetuLy3WTfwHPzSkgW6LBMWESaqc95btZ4HNoRRHonZdRSkjYsgbKXEhnexZyfioaRSxc9h",
  "key13": "4hNciWykCDLg5C4wqzXHGVvUVPyLmtAnCdwdEGwkkMeENSq9PsXS583rnFevWnjKtCW5oFULeDrRcjqg1dApL19T",
  "key14": "5c9QoKvtqVYjDRn7NeWHV2wkcxCUqz23YiPAn9QGSGRNRTYa4F2SuKPUUJp9QT3uACJHzL8xtNy4z5Gsb4PGVBDA",
  "key15": "3Txkpxv1XRwazWTy8Z8inxdRwxuNtr9JGdL7v5SrexNprjvw3wVnfyXGWgq82tBbBuZC39gwsAorUBnZUEGGQgo8",
  "key16": "3ZPgFV9iYUg3aC9bJnFton8fXhN92dqAJ3roitwToPaNrHUdUJsvfuQRprJLLLuazspFrBMhv2ugRaAaMVSz1CHk",
  "key17": "5C9Wnm3yBfV153whmJdhaNBKYc58Gi534LqCCxg7jUzQaKcGUCS1EKEPCWMVqHRDvp2kCMDVK4d2vii9FXNvzqrk",
  "key18": "3KpgYh18rU9212WqzccBWfpdb4uQDHZU9RGpcmw1TUnNWAkdZ4xTCNASykbCLgS9m3iJdfmUJbmwirZeRyiJqZBE",
  "key19": "3FtB7oVBbNkQEQpETWZFBtqfiKEdhi7QCEgD27LzqdePG38NGN6B9nmj6RGEJZAnXEjhQmwK4enNz8EWu7A7X9oN",
  "key20": "434Ynd21Yz6JnzemE6BhFPm6YHCazZKyJqcuLZtAavUm6dirkkaVgdhe469KiyiVasmQ19wSaowLBLBM6hXhJzEp",
  "key21": "2oarqxXi82yr9zSdRE8H51fNuTRr34tRphMPcVPBWJgpMycyot5TwdgogWmw7govrwzXUi1R65prmi285UVwfqmo",
  "key22": "3m9mecR6FrsZpRREdBsiUzFr66F6ThCWadEsBkMEGGv1KybW9C411gokLrvSSNPtUWMpCJzgPzJsLrCJVWT3rPku",
  "key23": "yEFPis5Lo8DqbExTm2DKG8MSaahRp41YGPir5TaAiTiYZAztAd5QAec2HqcBvrVXHCF37oBDfabL5jHEkHJfEjN",
  "key24": "3uXKVYagp8jp2u1BkdE8PcG3Yx64whJLeGs9AeqVCMZ4azB52dX1JHL94JUze4TaGQkEeGxFkx3i8ZNRXRbwWfBe",
  "key25": "29bbPStSQZDnZXoYKvTvLDNkoRQmwELareXQQTn3M4QrxXPivifFvvtEV1VZddHWcBRMBda2Ja2Whvz61dzwEAws",
  "key26": "4h65oR74MGeLtHoLcD8qy69tMBEtTnKEDZH5ydAZDoVCDhXqUJs4DJw3pkZB41ShG1S3jMJ3eDFboFNY2Cv69Hsu",
  "key27": "2DkVbDG511BJDWNfsXKg7EZzjC1JNMHvZRo9aBgEnoQBe8RcymK4WV2UaRSJbuggg4JvHq9BayAr86xCiUVqqP5e",
  "key28": "3SnMvdYTjU4GVi5eVVMaKPtPc9g9a9EHh3fQDv4p56bPZehJVUuvXqZSuPzS87Uc5FQFLivqwv2HADcEcv1hTnzx",
  "key29": "YuxNKo1ATrpmfjfYFhxV3fxLUeeUNfiBh6vzjNWzzk6AktW6qQWZJEFK3dAFacA7SegWN7LSe9GSjJ3RVP35x2K",
  "key30": "3NUbSHppTJ1PQUxPDpadHt34nwira2YqtU4E7AiJbFnz6jQoRnh96tZdnjpoWu9nJmPnNJoR32XQkV4WdCB1eYhY",
  "key31": "24aM9Vzc2DRXhCiLUJ8DwvdDpAnT5pKxFrRWMuK6G2ymKMyyMcV1E6CaTKoQPyZDoYgCE3JVNWRhgDRoHjktYE1i",
  "key32": "2QFuL6mT24Km6QSsWewBvbTRCaxJdG9FeGQYgWofzseYRbXDRswMZ5RcbUXSi7mj8UAZthG36EqQsUybuFesSwoW",
  "key33": "5r7NqiywfrGEtkbM6axjRLpy3KhKJh8oxC4WCb3FEx5RYCUViChd8DrSRrNmWEdiUGURvRxPxruNNFDVVWzBCozt",
  "key34": "76KUctPQTe7DyLSpCyg7yMVJDbQWuBkACEJMDAKccGeX78L77jaV7V38D1Rh3ptvGVnSjxh6sG6nbp4g8CQmGYY",
  "key35": "25usAVDkgisynHL12b86sEtE8osc9cn7cN6Xt8g5vaRLy4QGwT7RnjfrE2hNVSRa5Y2aYedu3KMtHGLoWHGnsYaJ",
  "key36": "4etGoM2eU1Ek1Ea67odUzqgG1iMjPqVC2V6tY4om5sW14XWjwSzSgF2sxUaksAdJ1xh88yUsycKtyHjFMYmPfv9r",
  "key37": "4pLPSZr9YGF5pv6bhKAtBDFLbk1Zf2w8sV5KMkErCtuio311Z1KxbXzTLXoos2G8TxYELFv8Xeg9pQDqnN2kFKDv",
  "key38": "4bwma51Vcu8Q9dN3y8tvYkTaN4etfTC19tZZBCdHkTWB7U5EtYgYFSDiYuCiGTvBJsy8qhY4stXNZgUUnnYjnpX8",
  "key39": "4A1W1yXZMwjPZWAMRogKQS88DctY488T7TP1xcpsspKBVxvTPEityRaCp87Ch5bq4JzFN3QmQD5apQKi9aGJ5CL7",
  "key40": "3Fd4E1NoLoBwsFBLkHivyiufUtEQx1sYGRFo85LeVo91q9STVugur4hZEdqeAseghGk6etEFpf4VhwAR976hL7q9",
  "key41": "57VwKc43xAKDQePS5ctSqZ43aKNqVw9foiysjFtR29pfHpjvAToV8J6VJkkGezgamY3mA8qNr6YiL1pndYzNxRSb",
  "key42": "5kykWzLfKYVowMHmsDnh2Cia6ScCPX7PUCVfTB4GPfbJR2DxH2EqgYpbq5HzTquBrJLzUUHaBhFqTejJZfezRDPK",
  "key43": "45vMVr7cnm4kJQHH1Xg82uiu8WDsDMbydHc36qNwBFUYrCzCoT5jBWBzNJ9ezV3p2Q5pe8bk8fgRv4tT2BENg5qF",
  "key44": "546JRAocRPGwcqq2wQdFN3CkxZyMb7d4ixwcdoG3iMjoWpFvmnY7SfaoqM7JGMqQsucCc4B6wLrUEQT3bQcqF2wx",
  "key45": "2LNE8ZUjyFPNYacPGDGyJ84N6CkvQCSBmRjJMytjax8z8uWV5JrzxbnkARZGL3dtmJnTrLdNnaZWS4jT93HzAV2E",
  "key46": "43tBfd8gzWxWbVkvXgim4qVjMLnCP12pMG7BVA5yzP4CgxLQ1xw4RHGZ1g4YFDEswDrbt1eq4kbx5LPUg6PStTp8"
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
