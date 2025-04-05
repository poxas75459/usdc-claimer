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
    "2XtPGr4u6yDwHRNPmhcNUJgYYGyCVT5a5zd8puUHoNG1i8aUwXKaZhw6ptNm2Mn4L9DvYa86j5Dvfu53grMcydqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5yUZ42NeAJpMTSCrpz9jgfPUrPGE6MgzjkeBNbopv6Q7QhVhg5aoWicV5Bjng9skwTDjgFyKTuBLx3fkq6eix",
  "key1": "W5NEhKWQUTEs31tFnLUbnJHHBEWA2ntpK8iuubD34fGXo58snVfXeaY7BAFvuStJjLQBmMPdi8QnQ1juJjXimpv",
  "key2": "4B7668KjY8gskZH8uthM1Fv34mjLSYyYGjeS4M4vv5gskbTPW9tHj2HJSqyeAaYkPegGxniV9pdpqCiDiz8MH2hB",
  "key3": "5Nx1Tscp6JqdBNiGnL2J6Ho1fjiqFU6yqL3eaqpYobabrJUwY2m52hyRo66PP1WYXnV5X4LQnTozgvsTsG1UWtGh",
  "key4": "HtSG1jxgQNGduu5PeQsngz5vJ8YoFKwBCVSMUiSfR5S4pBicpdn9ta8g46Ss4J3qQNfMZ8MwXuDZXmX9jrTpJ8B",
  "key5": "64eJtstC92LBASotK3FrcwfbG3LMjDWgrR5AqW31WwSnCgKYfNdnbz8eiSFrc2MSzz9LDjNJGbaYUMqW1Lsx7eXw",
  "key6": "ezcDbYYAtnTSEnHLVkPY4VvapAWqaAbTspZVD4m5diBiALxvJXULd3UtzduWGyHzczULnvGgLWLhiQmnR1NJDUw",
  "key7": "34qq1PYYqJhAu3wZrhX8C3EcgjHPr8TCePdaS46fc3qHV981VGukEmiohWs5JfDMraw2B8S8EKfYmCSeXYuQu5jr",
  "key8": "3zJPmdwCXpGbe99tVB7wCGoUDjBscV3vcJ3yq8A1JvngrkKNWm4a7BCWjLA43wBSRNJgJ4GQVWwVUUut1ibEpufK",
  "key9": "4wSYJNC8d4EhBmzfUf7B6YAcF7ZmSums5sriw8etufaYtjbfJggojrbp4iEkq1TjRd4ombFQkRXhTu9jJM5zG8Nm",
  "key10": "gxMxe7oKvBq9PPw9bxBDeTBXJkdfFr1vcnmi7Upq95FA3L4Vr8R1gK9cbEZNzaesZW8cUyUK6ZEj7HLrLY3H5xb",
  "key11": "52vCSLzTu7SCo1uuTSC6cajefrmdJr8LUpnNcf2Uer76nc6qGwGgL3cxKRMamfti5q9TcLJ26H56rqBWjUNytcAc",
  "key12": "iWN3v5nf3vN9z99fp5dq2AHZDAaPv1d4zfMKjrc3XCCpwbdt7ykm2vFdEswLwoH8xtCQmmNXhASvZPGV6Mvj5WH",
  "key13": "4Hnn1c6LE8okCouUhUnjVSpHgVCUwypGNMJiWiDLocShwwoeyGW8vcFG4D54S2EteX89c9QAgaUeHW53J276z6of",
  "key14": "57PVQqPW2Anx2F7Fabqk9HqU7r59Ujndyf5CchedRFNqbn7H9catQt9x2Cm66Ge8MTpVFk1Qoq9DhuVquQWEjRM8",
  "key15": "4S6BsygWWKWxt6JnqjZb2LnPGCyB4PuprSpgGiMoubinM9CgxMYkXy3UoTXB89bkeKLBvNQELanVhnuDexVkTu5C",
  "key16": "4V3UxnFVoaSAXtMarArrLGZP98k8cdhS87AF1YvFM7jL4Gmhx3L8qayz47G1GfohFBhJDNmJaWKdfJxZAum1E4NW",
  "key17": "289gBJDVKhLzSJri1cctWXyH4zZk9Ax4cxTSY6nM7jfPZENM6SufEVxwzS4XJh5M96BqTtXgrBpZMg9fRmgpudfB",
  "key18": "2ZZvz2MoKJQrig23v57dGAqi7FVbcAeK2rqgHAgAg36uJkJSjGgnRmFtsCTo5RUH6RCf2un35h6qdeFg2eU3ZDpo",
  "key19": "eFdRDfgfa6ZEnSEG31mjycUuM9ZnJjU31LFxxmRUiSJNhPBHz8x1ZNEyv5N3793YmXL9ZsL1XCs7THrm1L7jL2C",
  "key20": "65a2XoQzyLT3fhSSJ3vc9UGQumaYZtyVKHBWSoorpXjz7LnNmRKHBSFtsxgtyM2ofGnP9XhhUf1fsLEoE1TdTwJv",
  "key21": "5azjF3STTa4BD3FYYDKppED2MdjYp4UQ4s8YFVvwgoDw3ijJwgquELkqhHSr5UzRBiQnXdcjo32qxZd78KP3QFTm",
  "key22": "AZc2awQGSiKgDh7P9usSzUtx3FyzyiSfPzS5UjeoeEzGzQNNn9aN4HQ3MvuRmcyjdPejrXvuvng1ymxPqGZAgjB",
  "key23": "1J3GbCPBywhaxJ88Asds3HzvGoFJimHQL4EDUH8e3ikGv8W9Ftv6whF2QjPpqQbgQ1xyTrsEQrpRu4iFzTSBdUt",
  "key24": "23QHzME6HkRVs6XV4xC1wqJ9q4uz8WrfJqTqhGpEkSC3UsfxHr79zrnydekuzyUc2E9VHjtgQkmb3egiGgAbhbFL",
  "key25": "3S8oCA9F7WfU7WJG5KeaTWhuwdSREkiiQSqdJW5TV6SrSB9QsUmm4ZZSh1FiY63dTNvk4VHKj1TawNjEmnSnQBky",
  "key26": "4u7bNK241pxDBQ77VJL2XHsSLiUAVriCfj7Tr4vw1Azf7PjQfLHc3BeZDE2AZ1Zkz8ZGo8X3eUi3VBs9FgFkyRhG",
  "key27": "28DWw3KvJJVrXHTgTYAZzwNtuac74jxk1yD7oXzNEQ4eYsURyWN3HGUMSzSNU6J5AKUSmLKnhYDsvDrbPspf87fm",
  "key28": "n6Yf4aw6gRYnZts3DMTHbDjMXivSWUQjPnNnmgGSHvsPVCP6Gm4EzRhTMLjh6bchKcv8Dt17F84MQPU5qn1mmfV",
  "key29": "4iuoNLBvhheT2xUNCJvTRC372Gmx3caXKgpPmBTnSvRxkZbNcapuCj3cwvzcP2TByP2BEQha4HrhQEX8M4NYqQMF",
  "key30": "3cX5oGXgodVar2kWyKg7UYKPYFZb1o1YFRv72gzcwXSzeiGwRAJJTnoS8PZtDKkqU1Ks1LXqy4Efhsxq64z5rWnq",
  "key31": "5mmr4mbD6cwo89bkXn8B14HMDU4GqiwhojYS7v8ikYFueYRFWcSjq24QyumBjGfPKxg9K6fRZuaxvsSxCrCLzBma",
  "key32": "5WTLbaP9fzShtrykg1PAKFs1zANi9r8K3CQg7XXFeGyoLPDFpfLZggSFVwziMDf5fSPaQchyK1SU3szt7Di1BXcX",
  "key33": "2SJibtDCAdwQT32v9JDNYiwCVvt34m5q9zBhiwbf4NUpovs8cyTSiEKGSgXZgvZ87aHiz7Ua6aGUv7xmnnnEjJLy",
  "key34": "4kdxRz1x2HCXQVxn67omLGa2PqehsdzjnnCTEoGLpDUvhbfzXDwsCaThDeqy3RTN13aPTFFHrcb7nJMmXzGosbEQ",
  "key35": "4zAtykGbsuWoA1RUBJesfYYdXpmF2eqR41S4Wb4mS849yPWRnqNour49YHj6tn9yUW3iFmP8cMtkfDzVdh7ZabMh",
  "key36": "3HJKvWYaVuhU1DWQmjzpntui2Yf5vz2Bn9onako9WheKs4EzQUTkdsPZkips959jEY4yF3CWgHk6PdiPdgXyryLg",
  "key37": "5wThhX7yZFhUeLuNsEwWyCcssZ6hduStEnKDbE89mKpF7ZTj8yig2s7VxWT1y86supvVmUQuuJAfEtx2vvaprHPP",
  "key38": "6bARTYU2LbUDGuHrMbi9NLCwGqmRSrGrsjKWcHJhvV5oNCDD3M5H3KPsjBVd3FKcz46MwYuqinhj2ovTvdJMsf2",
  "key39": "28N73wGQsWEo1JtRUhYtnzqFGNa5WqzDRj96SPbBiPfA8nsCZDEpxzhtD3B6s9MsHSXN619mrovHK6KaguYXso63",
  "key40": "4qfWwH1mCc9moHTeyopVTq51nftZStFfuuskXf2obtKCC7G8Ngct9bpsvkdiivV8qegvUG2AmG6bTGQP28wp5zAo",
  "key41": "26czgV462rXRrtDQrVhzVdEcn6BjuzLtCa1Vc4sFjv8AF6kSywBASZCRA4PZEnYpd6iqc4tNnQFToqfCNrdgV6Pf"
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
