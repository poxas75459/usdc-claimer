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
    "4X2p2y5H9jZe6dz5hM3igeU8LcMUMWKCU3Eijhm4nwifZG4snBukU8cQK8s2E2m8CzVQgjnX2r1T8YKRkt3TzPvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otM84tqW2phHxpuZ8RGBJBvvpbUgZb1mqH7aS8WYVud4WjnFhmetk7E1E8FwHfavZDmYb9noRZYj1iAwQQnWEu3",
  "key1": "JY3w2jnhUW5yMUFMLCLQ9ik2PC7fjqFoDrjHn9AzDEAQLUhyi31JkN9UtAiaRNTNaijj76x3eUweaZ34uZrt59D",
  "key2": "4MmM6RPmSy9GkFXmp8HZ9wGJNnzKdBzmN5hCeUBP5UpGmwUMqNGsC8YZd9wXoxC4uWia8TqNcQ79MWH8qhuGPXET",
  "key3": "5gTV1CtRQ4qudmT3ze15UEpuESDsthAMK2BvgqFRmExb8BkfB4CRRnodENUEjk5TzNFYvTNnhgtr6BPbEYPs9Jyx",
  "key4": "UaZKDfp3GSQLNPccTBTDZNVGZqCX5mkysRMr2Y4w7SKVKWZ8Mq7T1sZNNEgZz8CG58Kqeeg1TF6gmrnjHGHXBDs",
  "key5": "4sXqJSeWKFnMfhBynp8YGjwkNhNzZVgkQQLktVe6Gh3SQoxn6uEJNC9RUiPb1oLfAC43QqNq7W5LThXJJRU4dveP",
  "key6": "5bWRxyYiLAB2JaW8eY9R3YBL3CmMQW4xqy8hGahDiP7cM39aDihvG1uRBCyXbmNe6zETPr7GteUciuLShboMVQrn",
  "key7": "2CPEgTLCcqdj6MFTBke2wwwromB6tQDCof4KSzg3FBQAh5wAU4qoX6o4FBPhKsu393ykmzC71cLTwq925RkPShNd",
  "key8": "63k7RMhr6Zxw7nQK7iHvr5YY1LGBpg9bEtDsMY1urPUPxBaRYUa5bJWe6X4jnJpDG5HGBixqdRmz9NUkSSV29umH",
  "key9": "ekd3JXPsaJnoVp3rHXnrckjhY5SEo6CQarK1fRttVB9r9UiySmiiY6fW8tdegYMQWJhiWwwgxdnD2VTv5Xio96F",
  "key10": "2zfEYkLZ84bgidyiXBSvsvwGzTeLoL9XNQ4KDUBXexQaXuoNfhG3VFxHGHKznFSu2gj6zmuSzABDJwD3JXTDxKNV",
  "key11": "heKrS6aTZXus3yR7LnMzc6X8LsL1ynjFrej5iZcwDrpcBLsWQWXcRecoywuTjhpyd8U2D9YzEj4hG1BDKwrFzHp",
  "key12": "9Zkq5mzudtZdHwFLEudRYiUZqEzbebK2z47G1LNTnpGhQmSMDkNXCHT9HA7ZDfLzfTXDi6Djr3CepqZ7yvcXFNv",
  "key13": "5jzuWd77en6t8CuQEoUTA5Q41y3hYvxHooRGzkFixFVFXENXQuMznMMwS1TcYZAPDKottG4i6E8eHEUkdmWASfj6",
  "key14": "4SxVEfszcLV27t5q8xSMQ4RS8J9gD9hEuJ6psKF9LCBhXwiaUxZCrwTXShiuh7ri6gPrm4SYCYW2gvCW3hGpeR7c",
  "key15": "4X7pGu74BqDcrnm9RyNc6UB117RKCP3zXXrK3a2DpiJrSno8NKrCLGtJKJxL8iu24aqd5CLvqspDYzYCJhQstpPp",
  "key16": "4WygFPALLQtxWwWvChukAYLhkENUPvLSS59oiACts9zotkx1cARZfGac5AxMEi5huhWgEZoxo9WA3819EWQCFAxe",
  "key17": "2vaHPEjv9qD6CJyRCrrRhbrphUeUdt5T9UYYh5RmpVpwxvt9jaF1Xi21iC5u6EBuFY3t8VKCZSmUt6NF3ANGkgkw",
  "key18": "5imjyrEn34pUdCT68z3deDVFNzik8k7n5GATmdHHnHzkFaPwGWkYdSGdrGpQ3j6buvNT3HGB7Tj7Lc1eVhfj2XqS",
  "key19": "4HbDxY3kULhk9of6p61EAi3ZVMzFhHQLFShA48M2MEWtjQ1jLq3cfve6guktxmNNwVEJkytPA3tyD4m4QwmXBKsy",
  "key20": "2MCFACu6xQmddzL4RtkwtHwY65iddMiQpspXgtSsdueAE4N16USmkTNaHSz7neph1r4ECXmCP89bqpq1fGwGigKR",
  "key21": "4DXX77quuxFrDa33cFBL8eWZMKeJHSuSbx2phYdEBeB9Sj28t8zLY1pUi1sT3ihgUPNWNrSqH6QgMDMSiDfJ2RXN",
  "key22": "3KkSLLMpbjvELhzL6i22Ji4uuXBoJH38qYbMP987UvfaQy44d5iBLQCCsCwhzuJRxQjUYcwLzYq7bURNzNQPbEab",
  "key23": "5DC8JuxJDQ8BtxDqN7sk3LQW99zXHd5F3AL2rA6okF3qGxLKPv4zUB4FFYfC7eCm8fgSFYYRDSRXkrr8UDDhYugx",
  "key24": "4YYa4Q9pBys6Hb3T83BMmoHNHDQv8KD1EzZ49A2xrNaFhwPzxRnXv984ACZhen7Pa851ngSLxfYqBe8XXFFnbro9",
  "key25": "5nrGqmVgZH6YqUehhcPqA4NQ1Pd9ts6VNLpysoSdVyhD5iwMEjwH5uRy16mF1UP2ZtmixNUH6AALBkQK9gsGcbCN",
  "key26": "3k7xS3f5aTKXfnEQEVUuuTb3rcnzYvAN1u8SzuCbTqbrKsQLZoZgoNrrai149QF7oaugGTr3vpK1FLNqqw4hEADm",
  "key27": "23j149qrta3M25HVdPmZrAbj9MWkKMhyqZhXzjJDrrE3h8SGcKwmhyR89Hz8rqJ5bJuFmsG8FQmFHT2fgK1fKwGc",
  "key28": "MPundrvXF9kV1ymzZGLaBzxH4gg5J8dxcyMnXyWk2spFFdVTRozsa9MXR6CxQhZNcAnrsUG4u64D7bZ6DFmUuSC",
  "key29": "5BHAbgqhvzaiF1nq9UeVaD6Va19gDfUQBmPGTmkY9xcPBarBRkjGukqNT4T4wq6ie7xR3NwAdM3XDpXA4zx5TefX",
  "key30": "4dyGyoQpYEZhySAreXAh6spHEqvVC3YZ7BGdtcXVYEdmeaWH6JwqgrqySZ189vdoQXrNJ4o9ovSkniVrxkDhNagW",
  "key31": "4zjizCJ323Lhndi92dh9qEHnfKps5kV18UECZHFosdJh4nDAWj3h7GcjKXqgKEVqLefWSUNyeF6q2kZF9V15sue2",
  "key32": "5TJyBWpgnXWDhfRzKDy3FjJKQH7oSK5RPq5b71oR8SuYDKZwELGZDjjjgSNFG8tamBA4SDHb2hxdej4yLqAyaxwz",
  "key33": "4TwaqH3iDy675VUM75be8shT7B1iwfu8WqFWBxKSSBrxvhKE1dSA9KHnWWyx14FEmeNvEZdtX1VzF1hvEi8mKmEB",
  "key34": "3ntW3Vj1asBPCBApJi6pAyNS9U91bWfCM48bKVRGv7MdrLKBxS9j31Xx2V2DkE8yffRrEUgsnmtpqMrLsXMS3gTE",
  "key35": "5mP2G1J5ivzHG1ah81Fszce7sYb7Gz2V8WPzncSPPLaVvwHW5xVheY1ATp9BxEJco14HSJYaZRyNWZHzrXBC189z",
  "key36": "2EicvAgwC421i99KkiH1Q85q6BMhC9cujNSumHCxbU8J7j2gUd7zfXMzfyqyFZGDTfQbHq2r7rBuJ5rjptno6p4A",
  "key37": "5HLAqUgVFLKrb6h7FNKNzJ3yDiKy3PQk8r5KpykYXtbQigNTP4eUC1zYnUZpG7ArbCmPDa63bqKP56M7zgEeu6VE",
  "key38": "3M9mMTRjkqx8VwQmRW1TMvzv7uFCzzwSUXyGwWn3fL8kEvvbge1xAwzSWSMsnKmZPJ4FBfG31LFURHo3bAPm9X22",
  "key39": "3ph4XnrRirpJoVqtBVNbU2Tat5roqaNARGxiksgWoziUBVh52PMP2nXDL7ugJTg5XUZCpPxfqcftodc7gPe4WfQo",
  "key40": "3YjaMA7Dr8VPY1S1oXHAfqvetjHrKmwrUXBDHGAKjL27xLvPFWaPcC3z1F5SyWCcqndiZkeDxpnx8joMHYoAxHGv",
  "key41": "5RBNPHCiddYD5oGEHjkUGp7Q8xXQHaeYDLSbEZXrpE1sc6frsCdVwH9Fm1AdRYNiNwrvkBiGci5TPi7WN7LWaNec",
  "key42": "5yLGCQKqVfymhFmeLA9P34qVPepKbmnK2rTTSVBtXBFg41e5VWFvgwM6vFFA19R2HpdapzFusgsf3Qo4pPKe7Pc9",
  "key43": "381mJPosXxS3tZqX1pWd2Xo4RW3nPdQFzQehbzXzApfVEaZSqh8Z6y5ScfawV6obvjdxZwbbZspyNM9xP3Rwmcu",
  "key44": "4z1hL1xWmw9t1Er4o1WytWRSfnQLzvnq2Hq8fJEwBPuMoRY7PdXb963YCswZSLv8LEiBz1FNNpJCNdPQZQ3N598f"
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
