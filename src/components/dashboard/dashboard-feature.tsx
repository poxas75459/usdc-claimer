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
    "32k7Ncsyns1F3GsR2bX1bVnwAK2uTfa42hfcxcBPVdNiWkoT6q9aatC5WBvGksPAYoUjkPEd2SBPMGuenRCHB5XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oegwzpSZjtqrhHSA2APsXbFyAZQMrJKjhZeqfBpQ96i237u1sVWoG2SLA4s7bXonknEEiKusEDfN58sevFui9oH",
  "key1": "4RHVVd2pLjd2KR87bXxUMki3QCZBuHYG1uPgdoiNQtxkPaJHG2WY9SimMvuN6bxGrpDk9cYURJREAuF9vuj21Qrz",
  "key2": "4q4VQkM4DkzjXcXFNUP69qWEJ8kXEDA3LYphwmNU4nnhktGEdMfnPBc8QKe6f5k7eGnY7Bukzz5WPo1VMubYaeum",
  "key3": "3kobbnqe7iwxSmXuqgYWaFobH8d8f7DPM2a8bgZX7gCDquPhujJag5BGntmCsJ7Yo18XyBkw68ykF1bjAio29qzv",
  "key4": "2ewq6vJKWr7MznhrMbEXbxppjvn2nCp98wfkiycH3owkUVych2duq4VAfpL3UdbdEmDrTgsL5JNZdNGthGG89Qpw",
  "key5": "44npbG6ssUUFgccdHCZtDhCjwLguWta52KEvrbyUVq5sYkZmP2w32BLuVfPqkB2VAgzvSYMUQjqDetD2aDN7kLt2",
  "key6": "3GzyHJHcTWCtRoLXsZQWED1ZVuF7dwmK2LUYKw2JEgxbvqCLj6JEirwfXtkAYRPoGh4QNWufvojiEppUV7R4sYW4",
  "key7": "5j4nfgoG56TP3ZmW1B2SriFgfQS6NhM8Up7UZF1vmmKudcijzGoaTruzU9eGVWgcETHzbK6Z5RrYYz448LeRpDSs",
  "key8": "2421hVJCunrcnRcHWTZ46U1FpKYJkF6gJNEcqx2mRpDmapmJ1ctmKuwfyPoHqzeRxoMeKX5rxnUNoF6ASKjJmbBp",
  "key9": "DkVyjpMqa46f6a8J6C5tAMweCcuq2CrkbFv4Z5UTwpjQCfo4uUy2gY8dH2JY8JKFNRWT2QH4njtyJnAGWbC7a3K",
  "key10": "5oHXKYt2XhqgYodDELW8o1REEnCHz4P78gpcpoMYoMHCpVX2bzauu7dDBjDo9F97FvD8EwsugBdzyFQhDtDPzKzq",
  "key11": "A6LbHsFjahzg9nEesKhNAKzw4JMbMa58WLuNJWHzr5gkhHbBQ6VYrFz9b95KJZ4Arr8UFMpomnVkuKB2XZbvubx",
  "key12": "vrdejyADXZjpEHvabzzef4AK6t8H3Y2bgVnSBuDQJWSNUrGBvuRSLfqQVF7M6oRxKkdiZ1CdukTT39AM8MTMTDh",
  "key13": "5Err6hARmtws4H3iKoVPpLr8c9kSkEnY5HG3R8cf2nUsgg5Q8pY69nkt8vL3GHMdHdFvGx7zF7A7CeccwzuQykma",
  "key14": "5G4Z9hvkp9138eWU2tcRWvdMDRUqiyEw2ixc5CqcLVBwVvLaU7fTxTjRrmcGZMVXqrWm6WkTgmYZa9WbU44cdEP3",
  "key15": "43nNuitjJn1kvH7F7eiZCdpV6CKYDtmZEZB5PQVTnZjdRYiMRnsRUudgrN8ZvYdnXWPbDQwj9DU9Wbj4RteHUf8e",
  "key16": "343psXW1vXrJrccUNzPXbn1m1Quh3YP3j8r9qWWV7UUyBPDB2jaQ2tpuPWE9ZnhiBzPiko2w2h4tF3z23p35yA5G",
  "key17": "55DQ1TFgGWrzZMdAkY3DTqgaiK9Rj2mpuiDrvwS4JJfbquehdU2MrYzxXeFwccoauqCbRW7hhtmK4shTRPcQkCGC",
  "key18": "5g9BKCunqwv4Ari851aPKpWnwYo8Cc7eEjxvQipXA8ksKPy2YRM6fRayvrpKjAGKsqMqkSEhX2pigJ6Kq1r4rvwG",
  "key19": "5KfkHGQbSiSbk38e4jDhFYw4bonwfxkqpMjFM4Kd12iCWsb4DRtEUCphq2RYXgwkNnMp6qPdiJCGhcfrZFN2xLpV",
  "key20": "3RFRMkzC17zchR5Hrk49dY7T2YxewPJqrr2gFeVziDvRnacdJwpy1735L7NNH4ALD7g2vm7oRzeEGQezZWDCFXm6",
  "key21": "4U2YUXQndSYvfvX2P3r2rVFvgBtgfv1Ldov2XAdyXC26kmNjjypoBus2kF9HwqJU1NnBCJTJyjbnLaQgGAwstx3m",
  "key22": "8uzdbJZjwLuG3fVoPtxxkHLY4LGAb7YSwHv9J1NFdfod3NEu4jk8HFRLEyeSZRRwyBteku47Co7MQWxnAfmtSwE",
  "key23": "4rLbBNcGsJMgpftQvUoi91eWTyQufVdRN9mFvFCJiHhWhJiQK6LtXey4jDXUA2wcMxb5Lqq5h96Wyyegw1uuwWSE",
  "key24": "5ffCs6qKmTThn8oeus7gQ2oNgo5Shjaj36dbNFPBNYaqbMnivKtHeHdgZqwkUgushpR1exa9Ba1B5iDmnodoFWJk",
  "key25": "q6JqPboB8cMPf2TGLeUJ1agzvZwwcmVQ33Pn6WcPhoSzSEzYREp2hvfVQK124hzW1S7Lywd8c4HebxgXMiCZK2C",
  "key26": "tffHUwT39wV1toZq7nCxTShtNowGJr5NbUvHMXjEP4HVtC76Wnno6osvBhAYBDo8JBeWKGh7MY7A3Razzgp5Ssn",
  "key27": "5ZSekhLF9VqBNaMaqGFAXeeQFa6jJ5jPrqjdpynZWGgKmHRt5W5o4eEsdghpZ2zk15Ssxj5UiufGnvPw9waxbvYZ",
  "key28": "2tJrKx8c9aojoxziCEfZNdBndg1NFS2h1rkqSPTbHjzTmeEkkBrCaneE72pg587F5nEEhWKvDncZ9i4Y3tSKGGTg",
  "key29": "4gGPJJ2qL79nuto2D1vYcTzfwveWU7bJJ1RozH9F1Priwiy6Kt7BQiK2waY9Y5aq64Mm5LhcXik1L8ZvsWU8g67q",
  "key30": "5i9dY5GY45Nn5rGEZcbtvcS98ksvaAd6Tjs74ZNX5hkknyU2HoAcRDh4EoU3RoCpajN5CuNYm34XfgKHv3uY1HpP",
  "key31": "5m7ZDsgfWy1Kqwh9BAWcPCzL34jwhTt2R7EfixpZQptarDmKMMyePA2KBsf1j5AYsN7Q3GVPQVo5wiSQ5AqauzLb",
  "key32": "4Wd4a8pfWm9gA25jiMk4A62HhKEsBh1QEgtiR2Pq128JmZPyceU4ZXaVVarn48XfQ7ZmbSkHbG2nYunwPmQ9cMb5",
  "key33": "3ZnPG94dWmyQhMYinuvVNFArwtAJxP7XA4oMED5Z4MRYWef2CNZHNcT5ostRMYF57jKZmkyooEnRfLGzP3E4Vn9P",
  "key34": "5e6TEue1WgBDJyU1XVNcCyLfp51CgpKcteZbsudzwFkTUxDQdUVzcvYXdQbB5vUK1S8rKgbdmBqvRfubQ5WDgQdb",
  "key35": "22N4j56vpvyyEAPhEsm4h1QYSjnsCkhfHxf6EupYfX5qtemccYG3zjowvUd4GVSU4t3DMXWh6mZeQ558ETGnfpHJ",
  "key36": "2UbKgodg6MXTGB18cQCXqmfGu96zNP3CzDUziv6QkEWaYVu4tUEZ4h1CEvEoMLpzaUi7uTuug6Zh1WJ8bdAF6YFE",
  "key37": "4Y8smVNWCu9GFzT4GVdvQytZ5nJ3b6L9CuHc1f7Xn9K2Jkg6uD8NDC5ViE1mPgv4Xx5WHM66Rp519gmdgj8bPX5J",
  "key38": "2UGa8z7BW3y3DCVCBth9Y5HtkzmkU26UazRaPX6kSAEDzMKywMRAomvbEtw3NfKtgJGn4x1a6TnvpvZ3LhVoA987",
  "key39": "5d6w5coESdxAoiwMSk8vjFfU8KbUzXqTze6GXiyZ5Lu73xQTTXvrTmt8e6UtSd4wGvQpYi7AWsw1LYa6okkvdsuh",
  "key40": "9c9bz8mWBZ3wTaKcbwg3XZxcjNT2ngaZeVhhXGRRd3g2gfVQA5XphLJeViPnHgiygGuzq6ubcM23KSgfa8qviNK",
  "key41": "3VizX5YSgS6gHRjvbanBhRhv2tZg3Rq9yMtku7pJYSzCpcQGP4nN8vsaH3aydEDSdQWbVmeGNUzQy53Xzw8iGXJi",
  "key42": "5pbzPZEzgQmb1BV9HZV3FR1pGZnAXo4d9RKa5SEp8JG51TooUiDJBtRMvfKZCg6393TJAdZQuLzbUKJoxY7qrsEa",
  "key43": "2sWykqUDDaitaKzLUPczdfZY5w8xJDhYtVmbKxJWnP4v2ztuuJ6fYcpE6vaMYTNTK3HrJwHswv8WuLUjfNNzDuuh",
  "key44": "jDJeymkccZePADWQNEQ2CVAhufsYEdqbnEYzkXV2T8g6mpSPKD1T1RyxRCbvbYyMgGwf6ze2dxg61Tf9HEErSzv",
  "key45": "kGvgcnh6DZtLEvBP23krmjHoaLL9wMLX8LfPCmZruXxMd4etzwnmMhGMskgDKzPnwjxeYjYikSvXDf1RzAScTU6",
  "key46": "5VgZrMFJkQG13qMcC14RRnXBWum2JPSTMabcr8yG9af4e9NcntwVmkaJjkLXnkFr3XbuggDahAN3FpxUKyB1s8XJ",
  "key47": "5FwC4wvJuf3j9xiaakQGC6YLSEnUmpfd713W9jYWs4b9mx68m3ZXoKKwwZP2qXwYMKW2YiwWtMEEj4CeLwxvqLed"
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
