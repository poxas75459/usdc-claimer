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
    "2T3bCkzGmN13gcgU2YGN1W3fwWhTnuACb35HU8G6LpvYrd5Kpsda8yZHq517VYzdR3ujXCB3EviiR7KSbgQBW4HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b9gTpAdimCNxPyNfY7DJJEYEDP36tUv3QL5KEGbKs3mqJndQQZfxzv6w29RqaQDL6kRmf2siTZE6RvA6h6yFVzr",
  "key1": "BDtC1aHrTFwRdAv2Pfw1PwkQsSuuewxacU5yp89wdYr8b7PH6a38C6DApwVo61jhJ7UgxcLrr1AfLXLYJdpJykW",
  "key2": "43E1xJxxu2SdFV2zkewouXN29bw3qx6mYtvseCk9qk4ZCEaururbwBcTN5mXYDwPHa2e1qg3BjR8uHxQsQD6oy3L",
  "key3": "2S6bTExoHU34eFeUYZuxuCaUKNUTievjkUVaHJruKAiL1ar8uVqevWigLTreSmKDoWsLqu6RUfPEmdVRnZibxmsS",
  "key4": "547VEuqhj7TxNpPNYwLkjUyN7trN2bQzY9KN6RGd6atc3kiB2T1kQkUEipxk2WJiRP8wve4FotCTYgdURmBtqQL9",
  "key5": "3e4V4gdrsu9AnpuZPLHXRjvqKuQqa6VuNhN9RiTTxHfjqD4KDnwTPMwscMbLmvzwNJaGd9fk4VP9qzcGESunpUof",
  "key6": "Hfjg6pxFEygfztHCnpHSUFYBvkHnXAGGqWyHSVGPoHxwno28tw9L356B1fpc9NzXd2dCepteCtkTG6eLkVHaK9X",
  "key7": "5reFEbKcFSSGGvh7hsLr15PGtsSah32j334YvUkAzGzUxB7hMLakF8v3BA6wy9p1kYTvAJKrJzSyU8Eo6Qmm671t",
  "key8": "56R4FN2SXqtEKRhqseVPBwBV1LoTHc6A1cVLrmsvT7pSbC2ATAVc8bSWwuiWpZAGsmV8FGYpbekYdQqxNdVU5U54",
  "key9": "4EiyqF3RGoLdQjV4RatGu3Y4D7Q1dvAcrHuDHSaRunvzTGVunqJhZBcsj8GCG5raByjdMj83bkJ8ixPxSF1gwppL",
  "key10": "3yYViE14VqeNSwvaJ8BmuxEaGXvMJMqjZUdU4a7mJRJXvEsSeL3EhsXKUWEdNYtVTrActgq6oLs4zmepXP2y76Ae",
  "key11": "5GUPUkT2jZA4RE4aydXbTrgHbsX1K2AJxH4apdirpgGrtRCyUnvvfy6XN1RG5ghVJzDXEqFmkSSPof3wVt8ghLCj",
  "key12": "4fA8phXvVMSwqDmPfLRSh9hnrhcpDFMFcqyw59jsdyS22u6v5jNn773VVPCXQGaN2VwjAqzimrtLnqhBunyZTspL",
  "key13": "2VWaYCPPkY55rEdAT5cHUUc7F1SjxuR1S7madVczX2aWSmzyUay8EMWfJHPfAbW29fJr5XtxRewXcZNpj91dApZj",
  "key14": "5WoWdXp6DGvoScibB68JRtCbYDeTWpoeafHHRvJgUHNvkNsLWCEq3pyaPYjFPHvtYgzVKkT9b6bzvnXvp5XupzEa",
  "key15": "5sZumcmAjfwWfqvymUUjpYsyuTTQScvAwh7aagHnD7afT77rtd7piDb4FkDFrEAKFiR4BerjTrARP69jtxVomVbZ",
  "key16": "XW8dX7coQKjv24vV7YmAnLUCEyqHg5Dz8sMkjizVQm6YencoigAhZ9qkhNigxLnBpE6SrQ6HqxRitg7t2jZC5yz",
  "key17": "zPX4Yu9ZUwgBAdRopPHjxrSfxHr5Ao3ue31QWQvH7irgwF4hXVuuwy4ZGs1CBMgyvEDtFn63Y9Qo2Zm513GYSDo",
  "key18": "3UNx786Jp571cp3bmqdNStJFdEmaDPfGWfkHu77uBNt9WQJG53fvR6Q71htR3fi9C1aCgmRN92FBgKBVoqsz66ne",
  "key19": "3BBWLZggdtrZZKuLFZ2VNLpAaPGGCYojNThyEG44nUNEuB1torhT1PrGUPt6xYiRgUehyEAar6NUTC4h14wCHAhP",
  "key20": "3jBo7Kc3NkBMJSGtqTVpx21SMreeuDJaf74Z6c9sfFtsAxXKzCCamxAvVZgkrFpVNVzcPPyLY7M7Up8yBW8VkcR5",
  "key21": "vtYoVsf3CvchbS6ssU1m82rCZdTgp1bUq99WaGtK7ddA6fe7GCqHudHHfFgoHgVgtgn371AKHR9VccgEQBWJKPp",
  "key22": "xvknseog3rZzpsLnGRoTygBuhssSWeY2Becqniq5ETjcE3UEL472EAkQFoxikSKMDFLgUnpyXkPzFUoVrt9HNxe",
  "key23": "5gsvxSAL5rsyaFaeGBbyT7AXgbsKGvPapmFkq7ZHMoTrePC6pn4C2LUmsQqko35gCY6NQK7rakAc7udyvoAZ9fTj",
  "key24": "3WVbNz4g2B9W9BP4mwNsXe38XX2MniRGhodYhdSNNzF8EU3h7JFWq2zWFYhYsmQjJCcsupcbzM5W8ezdKtiTDqG7",
  "key25": "AS2wuPmgsnrzNVfHUwiRip3EHQLMWKZ4mguX1F3BcxR3rsYrZELhmTzJ7Tebr878WP21CksCC9mDwQ3PQaLE1Az",
  "key26": "585YYTuWARTPDGXqMtBB7GqiCrqbEkwtxe8stWRzySGUZ1iUtiEyehzzLWRJBmX32EGxp83EurNA8pq7tathRKUj",
  "key27": "4tuK5QyYgcBPuru9GSprK19EVP4PTjbivgAAWW7WV7e5g6qLb3gPAJmPk6yaskJwZK2kNC96mvT4TKM8mP2yR3Mx",
  "key28": "35EJiBb77EdS28Fc1RgvaW17Xpxqpg3HbkdzgtK6PBZjKZkyywRLchDn3TSW6amFSgroynT1bzG7w1E7PX74Tkxb",
  "key29": "aSHT5TBBNWL9N372S5Pcpu8MbNJJiotJzw4bpCHSm3HU8Ry9SCB3TQWse4vqAbBmuPz7zigzxk3jPqoF3SBSzab"
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
