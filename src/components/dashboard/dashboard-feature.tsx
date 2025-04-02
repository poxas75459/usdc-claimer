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
    "1AVjacf8iN979gTHjJzwnNXNExTbccNzj8dM9cDDXgWDiJtYZ5ac5FmDuQ42NJ5kd8rBhKTfBHWhX5DUYxjFE3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wj5AEaRgBZWbSdNfqnSgzkX4KGtweXHNjYnTvvv8jF5oXzQLttAMA34Y7UBiJq6K2abd6T4B5WPbP5Hdkf63Cj5",
  "key1": "taWCoTfA1HQYgQUCNkLh4gyxQ8REjfKccBza5gLKYKiZJcMo8an265kbXZ1w3mYYDq8qeRWBVRERbhsxtkkPktW",
  "key2": "2HHWRvUNJvzDjJko6eHuXwhTXcgitnCuxjCvnbLQ2rP4hvnLhchZMpuFE9dpPfoLpbS9LdAZMzehQaCHhMvrJFj7",
  "key3": "3R8SeJ5Jxc8TdK3cF8Dzd8dBmNrj2M3FCSBoRhuLSB8iP5NzbaZrpD5zaQHsNKWnoL3BPpQVajFLDnGVPcos9unv",
  "key4": "pzMh7qDHxnpyPZd8u3JTpzfrvuNBJSsAz3z39EzHbppoGEsJ8MUzr23WHpBgNQ7FR4WEzD2pDGh7N6n3dGykgbb",
  "key5": "HqmFJJFAzw11XteTojEvvh1aaddCzbMPfZCy9VMgA1QxM5qLKVUwMkg1ntoFqL179xVQ8HMDk45cPiXhEzNvwLs",
  "key6": "2biz1mBo6f9tuXhKNrBXNe2dTGfQTr3ZNYFJFwfjSxFDbSA2dXm5ZDHDbVb4g1NqVUhbiatVC2XGNK78iSZRKY5C",
  "key7": "53ZAUV7xkGR3KWNXB5dE7Yf7CnAAmRNntCfa4FrspcyvR6tD1XSnHQdDb8dzVDcUXUS6JNU3on4uCWB6R8XBxedm",
  "key8": "1LoVL8iFr6mqmm2gN3Bk2vj5Eaw4dirZbBCeyBgBqdUvJR7zWFQsrLaBFsfUmorqXvAxXxT3jtDjqoyvemDSzK5",
  "key9": "3PMUfqvKeUWsGkYnfpv1TcHgJnA5o5Vmmm6Vtr8MDnL3icPRxUp8mso9iZVzYW95L2qmx3bnHchjBycx92WFUwyQ",
  "key10": "5XMLt6cQSJYFwuR8kkKqhLPHxsKUArH1kUKnVhRsLPFHXRZfoCiZyredKiPr2NDfDicmmf5qFsTGCRtYuHLUXdpT",
  "key11": "5Q6hQyGajtPvrX7nxXbSMPmhszadfWqsomGQGbcGp6toL8JAzn4nvQeg7xu5Kwk5UwZB6XMxCGpeLC8ZWTuV6g17",
  "key12": "AMrVJ9ZNXPcxDPedCxanZ8Mjz7asKEemgcmMkonknQkYrQbUxLaEo1c94KMVfM9r8iA5iamFWkc339Azgoiv4P3",
  "key13": "4Tf3bMmm9it3bATUbsJ6jLJfGDmER8zocz2Fo2UdFqVQYoKdwstw1YTZsLHG3aetAGgKEbTT4FrMLX7otjHu4ShP",
  "key14": "424h9v4LuAYR5xT5XkSpCyyB5uwJE5fSLZA44hCTLMfMo3oKsaSkBefuZNuyKYPM5D3umybcVnYPg5TFLoLk9zwa",
  "key15": "2zfJh3nAjs3jKRZ1ajo8scmnpZHNT6sxgs9iAPFG7MeUpwNzod5fBcfTzvniyAHC4XgLqCwZNL9QfwGmsoLziBad",
  "key16": "5JtL5TegAWsTQ8Tr5VADyUCctFSp2Fte93Qx8duvFHeVFb4fSE9Yc9idHT3SRwPxrHghAkgrQ7joNi9Z46JfZ1du",
  "key17": "2Cn92ayoYa6moWRKPj7ML8R7zoQtorfTqGjspbdvmUMaAhZ11L3VngM5Zn8io8gN4ZL21HwvN63rX7nDvMDVZ9af",
  "key18": "52wjh4o6g7MHJyqMyETQCJawgaAkoaKckEiQDzAT2R3iZCMyB7qHaqtTSpNcRSDvq9CEYzBCwVw2XySQhd66SKai",
  "key19": "2zB6v2Z3EbMFofXWt23b6fHv11KpVjnTxXanY1QGXrWqWSmTjgYpnMhMa3SPwESYXavFcsUJa1WZdcbq8Haoyzxc",
  "key20": "3RcbTwgpJTc4KJwHZjy2H6RKgmTdqJbBKpsAETxyQZEzqHYn46C8q6uZ88RtKjEGdgZL22wwwW8RxRfFZ2AacPhF",
  "key21": "4YTpZPJ5ZLQUP7Lv1rpfVmZsqznKTNtg48AW54ufnkP4oqiWbs2GCvPnAcXMQZnDPEyPjfprhuYrC6hNvLYqsC9g",
  "key22": "3Qg9PG1j5nmhkjEn8RHcb785rhdr28bCL9Z1SizTiZTiGfgs3a7ME5HpzXz2EaStJnCVao9vJAoFVZURvE77V1bU",
  "key23": "5wBd42vKhovKi5nHgRDTkxcFvPPjqWeLW9pLcmU3adQBv1PhEBTKPNbq4K1V63hBf7etvM2otBsWKtpdJybAdTMG",
  "key24": "2WgcoKUQ6LiHHYsWo5UGdwCQcRp6UzdikfQ6U2Z9nx8Rx6vuagdPRnEbkuFNKL98GS3pP3PkzFY4S5f2Ee1JkykP",
  "key25": "3c9HuAaUjyfVWEAMS7sY4qgjfWALSPGmeYMqNsYhJa3FMLfYqpLHa43vaHw814HLM3tJ6zttm8vQwQ6tzVsw1mEb",
  "key26": "swqT463yeazv13gocW9uoo2Gi6qTDeVBL3WwN4kndbsnTfPtMvBfziQHMgKqoEtrXXExQ9ouZyyDFbnNgzaWwt2",
  "key27": "ebXHjo3JyhRHpZh5YFxVn2nuhAD1sN8aMAoYoTziHSuwyBZa1p7J5PsYNSKYUwsKmaVtCeG5i1UY82zNNfL7wp9",
  "key28": "3Ui66meUST22m4RHA5vPApDfuhhMRDTgyHhJstZLvLKAmUCKcPLEKFNWM7wUqg1pbeDJheJbLHMsyxuhPUfYGAXF",
  "key29": "4pqy1HPJZzYZQcRJyfzQ8mRFK4YHRDpfn1UC72Ypg4dZt9bBjDySoA1iGJjEaoAHf3gA4CAcwWMYvvd4QA74f6VU",
  "key30": "5pHD573jN6tkFgM9oYzVCeRU8cjABLYuPN2Nt5ghwJjfNuoF4V6ErZZ129jVK6fbf9tuVXx7ShZhiSa1jKZ2Epnk",
  "key31": "UgMPuWiqiamJ2qtamhNd7v4PGN8WskdvbFSmpoW7J4PzTviJHYbSNmcJQpxtCEztWDKWzd37M85oNCt8jKwhqkb",
  "key32": "4xyEBu166Y7BcN7nTqn9jzm7QDuuqeQ2w4xzSixUNjudFWa6WsYixAU1xFHYyk1LsqyihVZPKinz1rRUw5CfYHev",
  "key33": "47hMPz7JNcqepH9RdsCzuRt5BRKUbt2xsLnjPqWv4Ua8LUsKw7m5KhDKkUA3e4vmbRWVsRBc1191hQBeag1Mr1tW",
  "key34": "2VQxznbfW5nBqUxo2C4qyVy4cUaNrWnNtiQAPmgFMsi5sZW7L3ERHX2jrweQXgkaao8mE1uvcmm2UEK9nhEpqh2k",
  "key35": "64Wq3PbBA5JNcynpZ4z5hPXsh5QHETwBQ5VNoXtkZCZoc1cFAhg3BYKSYNdLQ75VHUntZvJNXhAJfNWXk6zJ1dbR",
  "key36": "5SLkFSFYxDrDdkWdtqsjTHvQUHoeXaQ4Htpo1pRWN6UQVhfnoeH5fs9dVQ4zpViXpA6RqBqopbHesB23Eey4NcQ5",
  "key37": "329m8PEcSX14GaKdrHMzi5Gz5AVJBUFCvxjLQUJoTPWCeCJwXfqSEvvzeZ8AXevCFGND9mn4ep9kVmeHCPZcwFX9"
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
