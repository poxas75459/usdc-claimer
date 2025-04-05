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
    "4NTDorfZjsg9oTJRyPqv7watW91K2H8ZUxSe31nmwtG8t1ExaZy6AiK8VqLMXToTvB5A3mWJZDjQip3Cg5Ew7Jjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hPV3iT4S8puzsNcjALps8P1d7QLNEe6AqDQtfHBNdCU3ikg95F2mzv6SHWqrevzQa89iGJRUkfdZ2EN51cpr3o",
  "key1": "3pf9g26AefNpNNYNGwkxFnasR2WoLZiphpGyPCuh7KBGXGCEtY5LoAW2eAQt3kY2j4zyZ33rEky23mqqoRRyetG6",
  "key2": "2hYZrbeaToTYjfXUNKZFZyMfHUtmDkPBwaubrjKyP5oLnrfhgfiGaGMnNXzAAM3joWUzQRnwBr6wzuT1VaBcHS98",
  "key3": "3g5Nd9dUrAi2q9vUB1aJAZgPuBJUkiuXxM5NBcqvbnrM8otdjzuYE87mL852aSQ9r1qRtZxRqBeHXB9Xatpfo523",
  "key4": "4u4vkAZWEYXVrpazQAvWTR8eyow5VKAZJ5rEd581bfu14tr4nwxj17WriTzSpsMZ8R84Q9qrnnKGpfpouDevWpVn",
  "key5": "5AmDhvknVRBYxJ86cFJofpiCE6zkm8WWt6SfvR6kHWgzP3aHhj5G8V7GARFpXDKzjWaaASnhxYTTNfsGApTZn2Ra",
  "key6": "39oYgfEBMUqBCMxt6QiXUAW8Upy77q9Y6WP4Qc7gzodst53d9aQc2f1KAFW2sxwA1bZDtNHg9DBk4eNgzgVAbYYh",
  "key7": "3wprhWYwjuiFC2VpWNNWMK1M4FHvkDzaHwAsz5ftNN3b64b5VWoaR14Gr4UKsTC5itogkAi4NZdPx2nGD27BpWqx",
  "key8": "2WjPDg7bYTzbwe1iFy1wNvC37eTxYd7YWWohVMP6Pcrjob6BP31dkU1KKNVS6DYmiyyXY8QqWXk6uTLUhYjjDo5F",
  "key9": "4tUNeTALsPcjwcuPwB7XebPjb7RbYWWhV2tP4R8fmwUf7jgHaUN2TdatUWcLnUwntRabxYcS2g68uBLgCKCDrZQ9",
  "key10": "2KfMY6Fg4QFbUBDbb9bUeiV1vKSEfqVbaehpmzXM4eHkQLJya26nKDaVQB4fXgJnHaTBAnjv52Jf6uhLYhvPJMVj",
  "key11": "4mmGkfbwiuwSZmhafFKD5hvsL8aKojYtKfKAcpm4SJWqCjefZb5Ln8j1amo5mA1eE8wGQbtEuQtNwBvpLWMs2xyN",
  "key12": "2mRvJN9X664GEhDfrjEL3shQ4ASodzKsvW38hksG99FdAubEjHMkeoaxfk4GWtLuVB1vUXgtwsufKZJt6LdG1xPL",
  "key13": "2Af1pWsZ3rYatQzkqw7HzqjVUcnNwxC4CXSuxSZ5qdGSMADPjGxxR4PAg9KXw5ot1p7Z8QKVcM5yNK6eE4b9PXy1",
  "key14": "24TQy4ks4cmhcLSNDsTJjDKvTZ4RDZ7qJtoeUX6KZp4FcYXbm4mKvQavGXFtPHRXXgfM3TwtJcHiQVJDcJmVzTuR",
  "key15": "5dqnh7uUKUHe6c5SBx8RSeaqzDJiW91pLkfSQQ9L8K5njkaDvd8sMozgeV2fLKGrVF74KfUSKb3yDotjUioZtzpV",
  "key16": "51CAhvCPJZYy3jaXiH41wTaYpNq4Zx68B5NNUj8CRFwUfMt39SAB1NieX6kuV7hS7fgNN5ir9aG2LDjmJXSAtzSE",
  "key17": "2BZQGX3rv8mjYsvxUcqiNj8fZVGubnRLRXHmXDZXrXwLvcPXiUwDrH6HvQK4ZpDFeg7nBR4w5YYSFj9PQe4H8Aqi",
  "key18": "38uTq9pHEgnS835UWFqrpDwbas9UjQ4Z23Xnfp4ZSUHi85Yf5aycAmzX7Qs5afxMWmm9KqapgaLfkmgdLzQz1mLt",
  "key19": "2yEqZgfrXnZ8PzmrsK8spLSmnDwtGnmNjzeNpCDVoi2HQBdmTA4qJi5hJ4oqMD2xenkyorqWiBK5zXzs8cprERug",
  "key20": "5iJyKyswvyfauiFQH4yMx68BnfPzPj9NyHZdY1ntwJQNEQdJAHmrKYPWw4fSCvsiuk6in9VFBc2R8sF1JdMH7Gdt",
  "key21": "tuyVaW1tYo3domn2K2Jtv23rJ1nUspvPG946NpTvjSqSzjRumBch3npgmgrBH8MKdCMMb6KRu8oPBfpbHLhRqoP",
  "key22": "2yu1sj4uhC2iPBktGaf8t1tNsJP42zcRCAFudPyUTU9GniycqxcMtVjsLQ6NNzNYMb28EaqHT2UC9wjqBPjuPFNY",
  "key23": "4xV6HASx28mepG94xjv34gDVZMxheMFMjkVvWSuE7e9MG7McZezKTavM7LhDDfoWKMYL4BvJK8XAmTBvC8SzFhug",
  "key24": "WnhHSAJcBp8yEDJCvzuz8Y9Awiw7brJLxn5yMKk66ipY8qBiKcuEsGcohRzne7dErBDcN5ei1j91hH6xPeb4Ntx",
  "key25": "5d4EP8fpBkDF3YBoaodJvkzBKkp6hhQXiAmJsqF6K5jLX1qY2EQPyskD2dfqqMgFLnDsZ7yQCWJrs7ZzsGnLsw9X",
  "key26": "26GnWmku1dt3ZCuC35Az688euC3ZjZgVvQGFkZPARD6Nyv9mEKEWGsf4fWgt7m3RXKSWPLuVmFh4kzbZJ1mqzsuy",
  "key27": "4ob7aNaCQVadbsqnmyigVMxWQMsLcPERqh4JP4XdiJLkNhj3DzmG2jU73o9zvbDiWqgCLCG3xDG8xunVeWpQeJxP",
  "key28": "4zV43BzfCcYGWo4SfD6nSoXU2cKygymVv8vS1n7prt37U8yuYbvFjncByPZJTeVnjh8BpYs7zjE8vJKgc4hrwYFt",
  "key29": "4rUSbCDtTfjWvLLmgoxE8tTXV7Cjrg14gEARoZ6atzgwffmfDJBUKsq3hcVYKEP9sJMhTgYUTv7BcFmb2u3JmAcz",
  "key30": "5ULD8ZoTM8LTkT599JMrFoH51oSJrBBhCkVxv2bjUcBKBSCzXMoZgPEMMRAr4tjdBQ12ZsBjLYqGPySYJFGsMsjs",
  "key31": "hhgS1EJX6qDBA67Dha6H4VTgPrYCAYd1qnyDjiUWZ3CYGrRSyy75bXqXJUnP3cGNrALUnsPKa5MHJJYvCTyaNc1",
  "key32": "3aRb1y6ez1EL7YzKPYpNUXXJVHf2dYjXFzS9FZbrezoUoNH8hmHRg8H5PFHAe8jVURKPrRFVNVayfv2eUbixowVG",
  "key33": "4gYMNzG8hBuhmoe54pRh4EH5GsLobRgKjbUi9HCds6AMdnWuSKqUs61vr7pzHm24S2mWqd8FeSGTNKYurc1KkB36",
  "key34": "4nQ89qKxNJu5j8DcSmEwoW1ZZkpD2PAVuLGV3Z8jrndqEs97mJ6SxpiQ6yQJ3i21gzZmwwvqhYJco2BUpqkAjSe9",
  "key35": "23iem6nJe5WMC14he3cqB3Gk6ThrhWRqqrw6opSW6hYbK3dMJVGASVebjmaiK6hbvV1uezoCnWeHggx3qL9gCdWo",
  "key36": "5hqjd59FXzFM3QsBHeNbJnjZXWsZ6yG12RPtZchso6UpQzqLVzo8bdV9w9jyaD96fmg8nQqpqHNS3wCbQnyJkMqT",
  "key37": "hB9uYBS8E3Rvtvy4euAy4CD9LVNmnrmDHZ2DnK4zLuASQrJfUBKdg5QggKwUyH4or2A5hDXVRLmALwLXHkZEmtt",
  "key38": "2Zaukfnezxj81CaCHvh2pz8MUdiRzdKCaQep5DMWbaiW3Ka2nJY68zq5YCjMCQYcXfJ924pG8tp4pH36a15f9V7j",
  "key39": "5kinK3oEXMmWW8GyvVNmu7rKVtiGs2XqSaizjW6SNA3maeDfCkxKCTF3DF6EWDzZKQSsiftfP62rmKS9GHK7Vs93",
  "key40": "2tBUZFnCvkGomEZVPZ1akEPmSD8tmoZae2E7qjeoMgGuzHb8nbsPy3HPC84bhM5FmnFZN1PmF14D5SdBXFzk23Un",
  "key41": "3mXoJgW2Wt55hZJPpNyt3epQQHDUxUMk3SQ5hCeah8CEPqATHW3EziwTcedLg6UfvFdqh2eQYJKiQB4xKUAAEUSD",
  "key42": "Tzh5u4PvjFPHkHY2w3Wy2AX5Bhvgv7AmnNcUs2VDuLc5jw5WaZToyEjJZP8ik7wMaqY38hJBWjj18sHupDgxjHF",
  "key43": "4VpGF1WckijsPcWaK6wkP8vZ68PthU4g5weoWKLsxqbbaD2RBSaTAzWsZ4EQeurxyxdzpuCmRRvqbKHEjP2oZKMs",
  "key44": "61XDet5UhivMmjDPwvTVa9Lq7AhnVhj7Bg8vwn7Y9PwQCJztnPrpSgY6nCuggs2vjiWjG2qeN5Ca1HvuX9F59FAR",
  "key45": "yD8fUM69D4zBxUa4e2h4SXAQYVTKD9ADJMrJQZU2KyRNU2AXuoJoWiXjy2TqSTTbQWa1De6VjYgKmiJ7denTQgP"
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
