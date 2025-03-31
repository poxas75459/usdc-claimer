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
    "55isXPQWFxx5acRCKxnFRaHhRz6KHyWrTdFj4kkR3F63PYpmAa9ybXXxzdzNnu68VeC1rg9r8Xo9asnM3hWrK4CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DraWB3qV8SYNbdHKv2VCR8XvQpJ5df2uknrgTxHXQNqoWYxzvi1stpKFNK3xm5F3ARDdiPGnhPQGQnvFjdAFBd",
  "key1": "236Dot13ZLKf9DXZnHyfSHU4oEmA5PSwzNMU4YM3byA7Cmzx7D1M1D3UGzCdHU3smmMzw4unQjQFX8P3PdufHXzL",
  "key2": "5UZdsCy7WjuvEpQ4EDUP22fPBbzCjRhVRtmzcgptR9pL67QeYq5cNKkMQ2tsoVo2Tfnd3mAqYWMPa8EKTvBHwiid",
  "key3": "3HceLwwPsLTEDkJ3TVZPdXUmNYyh2a51prsyfXrz6svwfeJc4HNVdF31DLgWj9QWqwxGzWRMoeCoXbHmYqXgUmrv",
  "key4": "EdKob6MHEdDS68VydfBpZeSfnNrAv2rnWqEibJ2QHvDZRw3wmQ7VzsYWpQCrK2HhJQVuP5LUcyv8BpWV6JBcsdw",
  "key5": "2kFBXUEAXR4g3cPMSDPcuoSUfis33Zc1vvW67z288o44ez3cKtbksQgZDBFPsXmii1wwpRvFs3L7W1RCr95qHKDM",
  "key6": "Ui1oC86v6SPCAh4xurpXUd7E8npfSYraKXEKfnhxGqGiZwyH185ZeMMc4A8CnHXjhg8xGztMvAVD34uF9k5DAmN",
  "key7": "4MxdG9oZMYKYzKsTUu1RptCNEeZaZkGFBeWtFeGFJNtsuj43vtg1yXuoFHdFWPf3arZWzcdYWVEEpXszRR6USnnn",
  "key8": "2MeB98LpagumoPXz1sEqNXhWjwbSiXUbL4bYV36cyRcxkfRfkZ2BmGLHwNpr9fUthbxQdTpNMAX8ebS8obSQqRhS",
  "key9": "63saGFJb1PBHzKpHH4RSbwsEyvy1Mvps1KuZz5vsXKCAi1N4rBK5uT9ty1o4pYM3ukEXwQBFfiUBSvdgp5Ca1QpE",
  "key10": "2cgpGqV5z9n5t15SKivWVzPnagy9ThbZbrLBTHzH9UJPGm7XRu7ij3htapqMNhQYHcn5BsAL6aUHzAzyAqTy2xV8",
  "key11": "262Xgzv8XptNtAL4mTHQY4S8cG4UsLJZxAAM34NJ6LEEsA56H3swRtqNEQwXBp7tn3L9FGE49X8wrA71kUPpSid7",
  "key12": "4fZKoFJfX49czWwEWxRMdWhTtQKHUVZKwXatsKuARLkKAA92WJrcjCUApn59Jnnhz9ePgGfnFW56LL2DvcggkCK6",
  "key13": "4rAo1hZaeLqwi2WnchR8r61D6gCuXVru7SqTipzckJHdM2bwWbna6Lg5fffFidNXgLP87G2rkfnNgGiFzKXywSdq",
  "key14": "2Bm5u4ZBzAUbyPRp1x5h36QDndaBMZ1rpap9BLsp56xtWSFM7P9jDepnLZrPs7E3CFPEfNQDMcZCj5yuC7hCQhFD",
  "key15": "61knQT3L1JPeMsv5SMj53T2nk6vLYSHoqbAw4PUh6rgxuQ8B3JmGes8jsNKoYCQ3mUHhh6DJyTtoXAT1brtUSLy5",
  "key16": "e9e8gq7rvhFbSLE6v2na7oDqXo6DGftgHGzkq3e2bQPqmcCk1d62Qrw41DjiSi7UZvsTqsZ8R9AohSL1jMeRS2t",
  "key17": "3UZhGTiJ9h48hm8sXRxKw95jZ3hnyAop6cfX7ctJqdjSvN4oarKvGWAxuxsddN3mQVqAirzQngswCK3m6MmEpjH4",
  "key18": "2JV4nuGGEH3NcXkogzS3BkFGorm5tf5WD2PfKUn7asj6SGgnWW5nkgEcoiDQwK1NcZ1BCt2KzhADQRQkS4vaVySP",
  "key19": "FHD61hiSGwknJXpvLsYM3ZQwhJzAWpqN3S8q2mfxW5cVFv9DQ579aZVUTx6ov2aYYmHWh1PvtLBjFh3VdkgwTbu",
  "key20": "5SUdYsL7UzUQi8o2VjFbGio6Ab5B6GuKg9LcFBvJhExJivwFkJGHTzmuMreuhb7kWqzn55iQiFsFRUX7iXTNTKFP",
  "key21": "2wEBeQUnX9QaHMczKzpRe8HeHcvvQkuzHj1r5BDCk1LTW6sqDPX15MBAwRWRFreVLtJWwbbrg4Es8Ajx5LTm6PDR",
  "key22": "2FR1YPKe69se1dMPthcXRMXG6wRU4H5oqhpVRViPo9yRTkKEcGfWwEAx34GGDg8QVfRThtJMieXWW5mVGsabaVTe",
  "key23": "4pXUow1qYEX7NFJeNcC8q53vGN6qf9jYfSavxHSbiWMuMaCETWuF3AqngFkngfzavBsMNCFsu3J93FFV1ibbW2DD",
  "key24": "3SVqRg9LV3JTUGtHQxPB7PLJJsGoCzULmP3o3dHhXkDfLvT8qbjEYm24gYnzf81Qa2T6HSkqbqtxe85LRjyFaLeB",
  "key25": "3U56yCfkKjC7LgBUCQexnFkj5oqTvtUBx41SAJXFy9mrLdmu1P1vRdUqh5tyrgvi7LsnsjGSWQoR3ytXCisth1hk",
  "key26": "512LHqmNoudyhFS5553QS77uBXnNqbasTkeuXEHa2wHVHkd6G3VkkGcgpPjm7pu1EGrkiZZRS1wSvKCFUiusj5Bp",
  "key27": "5i58TniV58oTLsrkch5qFu9J61TpbVP3FFVPVYEQwppHGPXAvEptxwX1MmFZuGPiCncrGM2HYXLw8GB9Ldx26Sps",
  "key28": "5Q6iGvTMfoWUzvKhp6JveiT8mSgnynsoTXvoSqorjHFJmSVop8Bqitw3VtscBC3twv1CCuCf4fVetPpP5bSw2wup",
  "key29": "GTRaXEugTqn4McXM9PkNhDABheeXjHDiKeww1YjZnEb7SG177Fjhzoa4c16kjpKMqooav1nboYkaKFuuxdNcojA",
  "key30": "2Mjei2JPzU1JvPwKid5DAjK8MQTTXZEnfAm9zZfSajEEv8pJmgVHGvYSFGAPX8bXEFuw1SPBXkPxvhmb5ur1mGhX",
  "key31": "3Y9FVya2aCMZRwdC9fW4v8d5Fh6KYLiS8BefCjrUYxSWnkC1VkJK9ZYYbSoHCy24q1knBgJHeyuzt8qUbozASK6v",
  "key32": "KrPDhaw5j7nt3xDHMmarTJEtKjEyKVEEUheqrUYgUQ79yeMU5PtxGqKAiCU7wdD5scziEr4WdaFpmw7kFq5BJNc",
  "key33": "38LLBDq9dvs8zX2LymSWWrSy6ZZgDwsrengkks3HSXimmPcLhJy6WvPRmreKVkinFbzaQdjkB3dESri4ZpnxTLtJ",
  "key34": "3ttYyxRRWTxC9WpCoX6YPcgV42NhKHxm6XxYjpaQ9eoH3zKxDDj2fFnYfjz4oETwFEqdj2o3ZUBGiqkHVJWtdEt5",
  "key35": "5LfzNDX3mzzYfcyVe6YQMYbKwFEMpHjtxuDkQPQjE5SNrejE2dmNLUFwTXEgUiLwRLAT5M6AVHr7fY5sYBEmiwgw"
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
