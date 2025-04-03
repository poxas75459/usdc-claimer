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
    "3K9gu5Xe5hWkPEFsWo5s3kfUBuRB548c3QhAugcPo89Vz8CU86YcwgnW5oh6rE2eSexuefQjvXamafk6S8ZRr5Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwQ5pe7SVCTFCPae45icDf1s7N8fmMMNfntFCtP8TreCPwYR9UDhHP2NiVnxhh5dXuXY6Atrts6mCgFujLGMFck",
  "key1": "5uwrUzZ6PutYxjGz16aEL6vJGNi32qQq6gh8z7LmhhfxKF7fcWvdKFhZN3esqc6JT7Yr5LcSyctzfi5GUpaUyYZd",
  "key2": "5s38qKqgXSmtbJaoVtdMZZMYAFfdSFMGToLTKsxB4XGmBsi7tsivQGKP2ZHyFFAqMnf1jfWM7zo7W494ibrGSrMH",
  "key3": "61joLVbp7ghLy5R2gWaopC1k4TZAb8bJMPcLjwtXv7GhxWABkpLTWndk4MZ5ynRb9cgcjNV4R5pVZj68fv4oQBWQ",
  "key4": "3xpxTyX9Gq3qEyexQxHaQ1Eyf1yCudpK7oRhoErFAXDPFcWj7pujHuKGycZsDHue36RrwC5iir6sAvaXBWkAqM4D",
  "key5": "4KqDHBKu311VE4AWmCs2PYgnd2iug9zirmdemaJYQikNyRaCqksNKq4nfrcRNHyaBHsH2v4YSegDS8cS9YUVHo9k",
  "key6": "3xBY31vgJBVjm99Urgibp3yW7125MSRTP3dTQMUBYdB1zazRS2QjXRfFVHZZk8gBTsWguNwiJ2KbfasEimjuhzVh",
  "key7": "2mTmqBSg1dPivm2KqRFpGnPnGCuCbNL76QhDfVR8G5vy94nJSEgns1q1p8FP1F34mZg8brqixtnE3EmhtmgrPyvx",
  "key8": "2MnzxTfX9U9CRJR5vrSu46s8jiD3zMwyz8KEF14eF7wTALqMKvmdKYqxvbr8ZvBfUgYbB94h3wbiJARhQE95Jqt8",
  "key9": "EvmzKkYpZixsHWeC9YZW6L2sWyCrtZWtXuVHnRbq2vtPaxvRCdUeDeJat3kUDxeRUZG1zho6gBHe9GsufGdwjZG",
  "key10": "4HE8jTvYMJqMutMDzq3HBkFFoHCZtWT73tek3D9t915A432m7pMkHdgJ4egcJavieeyCTk1uECAMp5wpjQW8cTk4",
  "key11": "5oz3UfZytA5W8uHtwWF8tgbJHHDJrgxiiMkh1986Ct2PiaT3RG3uNSissg7ES79c1kYARrLtgydPfiUqYynkr4mJ",
  "key12": "4ixjMArKW9QK7XayFDYTY5QVfmQdSEb1yE53fSxme9fdZjM6c8uCTxJ7RnHscE6GHESsbhW4mhxGEXKGTSymCmNS",
  "key13": "TGbJdNV54sr7qbePENNjV4dmdLYKo7CUtUbvZKpb5E2EXCqWTy6xEimuMz4HpuBJNMskmZDhd5PjmwWw4He9WFB",
  "key14": "4e53PjVbMAASPgYJb4jy8kKUvFVmryqWaKg6z97UzcSyCthdgB4RRPeEps45gosrjB8FVYoMP9iT8Gf9bdKvqLUh",
  "key15": "4iu2vSzXy6oJRzUNCL6eR7tr1jtCsJGUjE6FbMHpjEgC3jqbqQUzf4yqq75vCnUxwRR93ufY27zZ736VQmAXLDPJ",
  "key16": "5E91aWQzmXFnbLUkbFbXHmP5Ycr5QBoAHKcEdh1HJJHAq9Ahr8brNDuyxuw7uYqrCpA6Eo2d3MH1rfC9YC78hHJ7",
  "key17": "2RuWwvTLodpf6xJQZeDDVQVQVNWQNTYznSD3Hor3nVH84w6xjuWq7cB88x6DwwRyAYgGvGaUmtcHibfcsj38CJxb",
  "key18": "TTzedKF64BK3bZ3TS9LfSZC9S7obz9HdsJ4N1L5Km2FzQoJm1FAR2douedRgB6iTuyUyQAcgeVWNkKfjgBc8num",
  "key19": "yHYaXTRYwE7p2gnTpd8zwtGcSbzFoqQevscjit82YiVpJ3WSZU4A1RMhyrbfrUqw4zHz6oR9VM5iSsyzEbLJq1z",
  "key20": "5DuBhRDbw9eTiwnPvkEhQ3sYvGLCLjFPYPxmv6qDL5eChZ13Vo3mH5Ev22G5oNCtnDM3hrEmimiwgh2U9Cv8Qo1H",
  "key21": "2eKGQ1shmFRYgWJGKqxxEHUztuSvWhJussWp2YMkfXKvSGK57yfDaNYoPL2MAXMMPAnWsavWAwUkXF9fXDFruqdL",
  "key22": "UbG7jpHuk3TPXD7XUPQPx9cp47t3Z3UdKZd3LoYZ8CVzaf3c5HaLP45ZqnpbPViMH3ciZsnXZvknsN1TKMAGZW7",
  "key23": "4A1kvzg4riLPvMLekV7BeLgb8aCaqgZNLu3nsXqfr5vmujMhGvJ3qk6seihs3uQjqJxCtidRSnXXrtspJBZbJf2B",
  "key24": "jYN21C1sBjeMfTojEjiDB1hMuJVSLACaiGp6BeKcjUWCQSVBTsvPD5cRYVoWnN25o2FcwZBrfTS1enp2qCFhKXq",
  "key25": "4ghFCE9LcaybL75zbgWSV3PrPHrRjq4MmAD4PxbkwXYrY7CnHa1wGsw7BbtPPkXCCQhQsRquMKMgKHjaQPnKfgVm",
  "key26": "4sBkzyCAVRbkrDCLHZN1iA72SpdzALkNBsSA3Ak1Z379fVknU6JCGD8Pjr1U4YuwUwBzvtQ1DAs3Ce4ogzFDLC7U",
  "key27": "4dmF8cFE45fbWnSB9WDmsQDHJQs3Yb3beADMVoaH3Pp6YmqxR8uBF92MQBj9NvbFUYADfVRg2E1oSSheWqAWEyoy",
  "key28": "3y7HH4meA1SuHHeyHRGUymSEHG3BHoMwSKQ64SNDJyKtuS4847oqYWkuXGp8e7FJjpkze3Vy9xXdVmsKsJQxaqyC",
  "key29": "671AnWbMjRqNb6dNARLcV9d1nEZwbtd9JMYcrFGcFjZms7Q4CPJ8BCBZkR4deC9Zn9nBgLZ8JQ91ZbLqud912iMg",
  "key30": "4TAAfMb6VeJYpqeKGPTeMbkXRnMsPtiujdTff1NafPZ6b6wBvLFQ5LaeCo1NAoEipnkkb272jRfoQ2pQeAcNpoED",
  "key31": "jhsTJ4J6cJ8vGkR6Yd5AxE4qEgXf3ubUt5qK6VFtbaRpzTYsaRCH59nnKMymgdixAM61gB39jnpeakKvT6APmpU",
  "key32": "5fXKeWNvVPAaohbXMHoL6A3CCAJAUwperiPyAX8SGaZZ83Fhyw6Y3YKvT3qR7rFJfAASWqXkZrbSdynL8NBhbGy1",
  "key33": "24aXVh5vdokUGFsKPhuPTBjrc7HcAEj4DpQpHUresD5viAq5CDxWEXo5TuPD5M5RwSv3ADejabmYbV3QiXSFyzB9",
  "key34": "64365UNDXtWJfwrYWfMj86LaQZyFdNNQK1634hwGxrqfFunMjQZiu2SGj5PXwb6ea6pXE2VR1ACjRgjhgM1bVQsa",
  "key35": "4fNDs7ednhvdtrch4wd7qud1D8AqZ3QuE8DDT7gnkXEfzP8RQHGYTjgoja6PXMtj9LQqu3d3CPuoDKUT6tesH1do",
  "key36": "4Cg71AAtGsHUassgXcnKHModqJGpPKFckZYgmnD72eKAjCX3GsAD7Ev3pTgu5dSCKDjW7vteUcaoiEPyZxZ3mP2R"
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
