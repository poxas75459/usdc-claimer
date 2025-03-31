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
    "61N9LWvjc34Ap5mg9YEfebtbJwRFDTTgpMog8bpTrEo7m5tXo7B9EjMTx9Woghsg1t4RpyP4Q1sdkUatZXquQaRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnKr9PMr94rfK37D8UfwTvFhDVTZGBtF6mj6prfsRq8AAH9cJW4sWFVdbTW8F3dgQPpqFc6NyN3RitZ7fVVF3wa",
  "key1": "2hdj4BtVjq1JpSnFxkmpEWtF286QqKpPorDHA9hg2D8iCMnxm2AFr2xSXg8yBGZN5yhHioWjhZnehLhcx2Ww2w45",
  "key2": "3K1A6p1xvWFLVeEPWuGEz8btcWQjeduVLSYWkubagSdmDE4RFNkXA6wAQFHNbo5K7VaydaLTE1SJYPVRq5k5CkiC",
  "key3": "4uCDPgHr1bUPptkyv1GHKaX9NSk5ersx8pYonkdSdnhwtuiQJ4e9f7neZfyexZYRPBHXmCdD5TPo9yyBqtgdb26o",
  "key4": "3wiqwMNEhipV4ePXLZg86wJMGX4wSSz1Y7QkUbf75dqUWY9e3vNt9vrY1fpvYTKfjykwLxv6XcsKJtWDDxNXbrEm",
  "key5": "3cbd8bCv3oXHe9AgMEeB8an6HKHnF5NDGjyrC4teEcoh8KHA15DQuXZR57fASFQDXHZvqsYs5UwCqPCo5xEzyhEJ",
  "key6": "2jWwjbYsyQu9pGXzD2JjCYeoqUrGi36tmLCfAWBw5QN2VUUQzsVnEpyi3pqWadw96hCW3cE5CmhyKShYu2VsUy92",
  "key7": "5NPvnVsq612tZjoQx9qVJnZDjhTK9EcDB3QfgJhTsURQCD85RYmFhFJfUbCioDvvY8LpfFjcEBb1mJgqZoXpCJda",
  "key8": "tmLczj8nGUWVeYbKHQeCw1HtXB5QqV3fSksQk5D7NwdEbvwyn8JRVPnY3PCBhUehBj7ZgVBgKerUaLddxgbAXfu",
  "key9": "5vkj4yH1wxwTvSChs6xMQrCazZvfDUNK3Cu5emZPqkxYf2eDamATWXWwAqyMpwhGeRezFFne44ddWJZy6S3zV6Xm",
  "key10": "5pocrmNn37aZBqzvWd6k5kUqBJEcuGFff5jk6amM9wM1MFEJNaCv1Fi8V9dGvnJR1TaqBXH7TSUYs7HfXfWxdbxV",
  "key11": "5D6jtW2DuXsQjDgFWPe2JnDPVtwbWZVd6WfnDgytoBabqeSHDGyKvaD81EJqXq1ZiKnYCrnGmJj1gfxbNuxbPpAP",
  "key12": "4JxJXCiP5tR4Zjj6ZNfcMqw6mUQgWeWU3yZHFT76pr5YevoH8ixCQ8bBp4udEdKFy8BHW7p4z2Petx97wnyLdGnt",
  "key13": "5WveKohdLNrLnkK6uBBJkjRYPuRijtbRxLnjw6jznW9SsnRvKv2jYUoZkbXjsNDVa7H276RKeCZCG3biSVHJjyNc",
  "key14": "5fan15Ju2Jc8rDSyabFXa3fggy7iR1knpRn3ka6rvg97hqAZuNLyQufevHJVLJ3FmiGDabznnGdpBth9nVGASBPM",
  "key15": "2863makGYBJjr46LxgVCKuwSUwU7Pa8vAFnNUhWntQk4Sf7VSrTNAXdnAasaQQjbpDPtCzALKNpkqHBwTDxTmd6H",
  "key16": "38idxYtps1oMYbt4Sw7gorHi7EfS5F5VdDwNya6xaEzZjH5kkbAqGKw8JHx26oCeN7KFNAfGS2ppz5LXFMHKus2K",
  "key17": "2goezDLqv5rbxqhhzUP26gQWFkoGWKi21QMeuh5rBBLWX1qV4VEkw6Cfof2KvT54j4FAWLqE5nuqT5C13bHjM4gt",
  "key18": "5mvWfx19WHSSktYYd4a35BQgmGoyPXNK8MR3ksiGyESHJUYc9JjpQP7MN1ozsWTpD4f78H7AKDWaJbTC32cjzQ6p",
  "key19": "3omUjazQAyQfGb2rYCgJjTtqCmNrjd2KPovL9uruEcP9vaXg42MqNacf6DLeRSzS41VMNbtKwH9owHzYLzGR4xsy",
  "key20": "5Jws4ZzW7wSXLjdBVusFtgPMJML8NsQkf19kR8wcC4xkFbtuMdmwsUKBcXPmBK9KCQEjMaKsDFEs8Qc3K7uwVq88",
  "key21": "KjWrSKEdB4KT5uPsZgs67YUaCHmGouptnmiTMvKGFYE9rvUt4FYthTWGZ82Ucrd62CosE3ead5KjsU1Sr8ufnxD",
  "key22": "4qUKUqqXY2eeZmDqkngkCqiqS3RXCNRfAqatKuWMdT3WgFk85vr5ZUQoLFUrftqw92toit5j6pXTxnp74oMVStmD",
  "key23": "3Z1tbjHwN8JmG6FcsgHMZXiGbLs2CPiMJTAG1nw2BLnbyMDsRosfjEu7hiioBzBL87Eh1ghW8SYpEojTjtCEechw",
  "key24": "5Ny7qumn7oW9s4eH6mdEjf8drbQb9UjjccdC93HHRhf7mubM6LMq3HnWeytrUDLRfT8GARiDAtAX8N8j6WmY7Scy",
  "key25": "4q639Y5PQNCnZJUkGQrs8qSMVVJmL4x5ZrbvgJeZsh7eYvYWTaQT8L96KdfviCHUo8govteufexE8N65wGWeWWeD",
  "key26": "5bzf8EYSEeCrPNCLatdFa8bzLgF3E9kEQ3vFDoa9YZqcUT5bEoTMDQgkK3rwpf6crZg7iePyenPDc8snoatBLb96",
  "key27": "3J7NdY5nU6zeCC3wqgXUem5A4Gh6oVKVZ2kKR2TG7L3A4ggt5MGYq8wjgqKqPv3rJSdJY2AN7zfeZCtqWv5fUK9s",
  "key28": "38K7qzKhTAQ3cyy9YEuMn6vJUCs3FBbrMGZngfhrCoSXoG9nj8UbMWGpac2ZMzZudZwiWthHyp2YQ1h8gpyQxTux",
  "key29": "4AXJ5ziCrgwy3q3ZBgcB6egnrv2iFz9YWF1oaKUAvJ628F1LKyWW7nTPRKTqZkkYXaqLGarFSjJPJp6cK6pPX5Eb"
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
