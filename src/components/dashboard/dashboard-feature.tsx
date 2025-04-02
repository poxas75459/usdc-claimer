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
    "4sCubPXS4GvwCpQ72XxuH8LqManoWRmdZKRRFr93Sdw4KYqg83e9UW88jzf31ovcUBwWZANyvjq5yLghXpMPKT4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okvVmq7YZUzHARF7MwWk8bTVRCBoiAUje8AZj2AvPjZuKBpAQfYTAcQ8kXXVHAYYdSHQ9yvfEsraD1Gc3uvZhB7",
  "key1": "2S8UKNEaZgUCbNkx1nr15Nevvde78GZUxqwCkSvFbTPugQ6vR8YxhNESeXgAZyV1bcxkhBvH6aonUi3JHKHV6C5A",
  "key2": "3MAAH6e5zPTAWAYjMcMDjnJW7bSvzpBYT6wXVkKwkBPBRNqaxA1eKFq7YnCWQTo51gFm3MzUPHqVLgugusN4X5Hf",
  "key3": "5Y6joEMW2nH4j5paTVy9kX7S4GhVQa18dPZpWnbekJq7AMb8rhhLLpHjZAnseDCEhYZmeERbvBqRHQxJXZRhvUZm",
  "key4": "iGvmr8fMvo1K1nfg2kLQYHgKCWBVribz4qDzWppUVhzm6ndF3ZGi63xQH9s9knSpBewLws3xpXerronwPLVLs1f",
  "key5": "2wdTQmaQnS6couCCSGRces6yCpJzzRketwPo5UaoZNnEdP8N8dpidGpnxjeXg9R8EmXvLrb8tw8e85WfBNKWZjoY",
  "key6": "38YkpHULkZhER2LkTjcuRV8fzpbmRCR459jYwj89Cxb92o1t1hKPvt922cN58aWXvADLXcsgEEacCfy7QdZKzQ8S",
  "key7": "3awVTfoTy8ndgapMDGsZ1roEWySnSr4j6v6K1eqqZdLFbEbsc7rxqULhmKE8VuedGuz4avFHuUqvgxqyDM3gf11f",
  "key8": "4xgri9XYQ7Aj7ammr4rf4aN2KdApm8Mx9UYgYws1PtJ3KLwJph1BqLwsGXtsrKYpMvCwGAA6qU4LNUEaQaMs85c2",
  "key9": "3HmrED6twKVKnBAbk5Q8fvmc5NMh4rojY9CaBLhakqnEtdozxWvSq66o8dkEoncCfKxttpoh41igrEAEkDbakM4j",
  "key10": "4mfipTwwEHvhDmvyAnNqKNR6HGJDN382RPdB9prPKrPf292iZB1MdKxrBFSeJKEDV5HHJG3vyrRVPHwuVRC2r85U",
  "key11": "CavFAqq7nMs2n5YTVLrrAETJT2eCjgQ8MTaYvSonvGpmKymDE2TLYrXrwdunMVu4YQUi47fz4aNKzgwm6XRnpc6",
  "key12": "5SgaeWPVeoo2NCm66dZXQRhf1EPmuMXw9eM8LUhBpL6XWe6kggdrEsHU91ftrFnUqT5DjLqLK22GXF3Vd5LbHXKz",
  "key13": "54DQc6LYtaH9UvbZ7ci9eHWLJ8kms19Xgz79WSYyMnfwb3FDmgKbjahtrKGzmX2rZDrpRaWERirUwWbKfXu8k4oz",
  "key14": "2Z2kh1MYdxH8yEYRfTSmFkYaMo4fRTWuCC4P1qNteZ7oBHj2CeKkYtdBPZ2SQHfF2ZKd1r8dwg88LqFXX6ZvYCeF",
  "key15": "5v73WoWUEFbWGZo6eXFQ7QvPovm6tYYnXfQPEVUysqttamjPoB42SonF2LVtiKeEEyWU1YGa881tp3kRitiuQtSu",
  "key16": "qs9scVHiVN1KjCwNdCrgeh2PUvNMfs7sgoKuFTcJdwAstosUFX9tfDFAWGDQNbFPv5mdZwSetbyZg5fT4YFMeBF",
  "key17": "5cp2ZguFASxDacLBw8eurN6P1TR3GxpUJw8ieZr48uXXXwt5Wk2HYj7i1qvsYZNEdrALYRBoaQa9BbyYm67s2iGF",
  "key18": "5G2hHsBQYyqstYD4c4sbGgZXqKkBKQF1WY8j3vFZn6n95TtFkaSmpYQUbZrYX8BaCvUUQTzhsZzydahFqiFsv4KF",
  "key19": "3oCc4npaHu1QF1XMZhVvTX3CaXbqhVD5ip2ru7gJN9mqRnXLbyo5B3bF1PApaZnd1UwoX93J7GtCsNiG63nqYzQp",
  "key20": "388xxgfqkcMjHvHf23ofvnGfu8GnwtvK7a6GEMDFoGXoDnF2JzVv2NG4zXTpY3AVA3jo1S83zVE44H3RvTsxwZ2a",
  "key21": "4TU9PuGqhNbYKL3mFVixtJcEtP4w3xv9XfHH5PmRXR5r9CqkJR7gyUXRwrLBPSLZjopvcJqzR3A3SfF9HiaaMST6",
  "key22": "WYV4U8ZVBoWtBzWNCw3dDwBAR6uSpBagwEPMmtdGSvHk3WnhB3PKUkEm3T8kMJrueiC9TRJVtXek82nsXXdJohK",
  "key23": "61w8gCGQPYiG7hUqBfTqbHDVKKSxwAwn1rHYvN5TNctHfzJ6sNiM9wWwcLzpfAXkE62yorrEzG66HGwSBxAz3J6R",
  "key24": "28YwLBNTA6AzfWAe2AWyFRWTikbwisz33T5JGcLJ2HcVb4x7VDqct1y54CBFBMNkDCHA3EKQ9aYmcUWDhRNA63XV",
  "key25": "ZaRwsLcSmQoFUWSv5aLeuKwexJn4nim561MDCZ5Dy1Y5kcNvMSLEkpGDMR3UjCuyqaXCKqdV3XZiYwXA37TiyYv",
  "key26": "5tgfDjgJsA5JUymb4fLGUtEBvb4uDYY3wMQJLUM43usetVxu2fCY9thQuuZ4UPKSbpXZ9N8UWV1RAfcjpW5gE5Cv",
  "key27": "38gpCgyjvt3qfbeVeQbx8StnN6V1r2hge9CExunpQkfo9miha2bmDWBuw21dSEdaKat5ZkoF9DBgivdoFubz2JGM",
  "key28": "4LbFbTvQrLcv8jojLkj9s8rNqaTtPEYB8ZDDm3Q38WavYiF3MTf55VFo5DtPZbYP9smBsq242bTcKaFugVoCQ6HW",
  "key29": "3hJ95v8v9vRE9PQJzbQJBwXuW9Jz79g7WFWKbTgYErQDUHVxQZSDSkBS1QiwV4PkgQyAwxyG1kSdYvNUmr81C4z3",
  "key30": "3J9YVr93pEgwb8TFMVvCvZamnk5jLAKNq7ggySCjYLsf5ZE89mUaDmxudAyGoWj8yHeufKJe7awrNZMWc5Bcgk6C",
  "key31": "5JYb9vz1CDA6duTvsfae8kvG9oEsyCw6aq63UGgwzLYAQAundfRMKXreLaUe2KVVSe5e7PZBgXk87CVFk1MxpYNh",
  "key32": "5dKBYrbitd4d2vZmXCwa6cWJw954jQiqiAQCSMt2efPPdnDHSLwr4de8dcpxodD58dNnYNYPz8zW2rCWabaNwpvL",
  "key33": "523SMVKWwAeFtxpkQSjQywgPXYLWiXMBBWPc7LjJnuj9Yqwes5nfS5Yex4r6n2JKFaYF3ves3QPZ6PJ66XCMFFUU",
  "key34": "2HSBYsd9v7zGbF5nAVh6Ev6tWrJXnxcUBVKnEbM8V6p8MB1a4J1eNxf2zAfLqreGap7VPXbYGKywdFAvr5ssncQR",
  "key35": "4feNyRzHGoeTfzbxK7HhL5P865LgfMnnAguweBv7AgkiNqwSxpzWbQnHwngHgbrv3AxL4Dv4qhzNPUz19CmtFHLG",
  "key36": "53qJP9y4kknLBrs6AK4EX7osg45iW3YovNq7AZPyJvexgxdTy1z2WhVVWzxVnYKLQJ5ZaaHkk7CfN2aHR5RHHie5",
  "key37": "4SS1vsXUPYcg9jhTYjULmKsq7qK9G3UTL48gGbP8v9tXbLiaYG32uaMZWzE9UvqHgpPa4rW8afQvYckUwbw87w9x",
  "key38": "4ShN8zfNpCdKGceuae8NA2AcPtwPzm2rRVhDo3NJ4izFE8LDPHdTJV8pEsHqr221emSNr2JGmGpHFrV5ea61Mh3V",
  "key39": "46nGzRfd3QBsjJuQeEyAZZU9uFaWkk1NV63h3SmFUoQNF9f855zjtPrBQ7zkgsB4A5j8sJiPt734VM6ZP6Wp2NEx",
  "key40": "5WdR121avw616WLpA8ttvMFyyoZtrtbUAjvtbisxwzenm6MsRaeixNHPG1PjLSGBSoCRyP9edr6GvhQfDNrsXVf1"
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
