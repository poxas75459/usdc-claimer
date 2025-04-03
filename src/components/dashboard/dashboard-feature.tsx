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
    "3zeHfpyfkCA8BNRjhMW7Acd86JT8MdXwgR2oVqfxfJWtDDmZcrZ43sV6xMMJC2jV5P3oZdMmEsuZbKEYdSfpj9sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wMqaYUsKYTWhHQsr1gQGMgfMPXHdzHazEVH3LyiL8sUzyVk1AQjj4MepXnm4xrYdpK3dbRV95A2wN4tE7P9Uvu",
  "key1": "5uD94LtqA4jTTHVm9kCwqC9AAJvntjpnXztfHW98Y2QD3tc9VxeUL5BD4sj9rK6L1sMxn5rAzWw9NV548tv7bmYp",
  "key2": "5kLfKcww5urtQd1PvtFEHA5sVLwPNexWJe4GT3yRu8T7o7zwpFTGHtGRVdNo2M63QfVMqXsjbUswKKbUgaBPzKvV",
  "key3": "3V7kCX6rWmv5EacJy3cMx2TmSDeGkGgBZ6jmBNPHUnpNHVvFUaEL1YABQ3BkY66DCYeBYH3tjZf9Pc68Pr8Mpsx3",
  "key4": "2HsNkBxEy6PRxY3JxTwvfLHJn3SXH7QXGkEhN5i76nbHfrgpnmNLgAJ3yy5KsfHnkTmJUBB6oEhEeEEjMqjXTD6s",
  "key5": "2PwBLRtx57FbsnqnCvWM2Rgd4k4zTKnLRHXczNDdNzs9crosvQt6Ht3H82gXnY2MDwvBqLPi7RjhDTTwRfyqT4rA",
  "key6": "4ygWqYArREWBY39kw7xMQzNidTTYfpidqbv4Ss3WQE6pLNG5tkyW4B5kkxk6RLWaZytjWet1FcarDSuDqcccyrwS",
  "key7": "5QtwwbvVWAX2QqdN6mb7MgioNBKoeNazHVqKrVAXWbjTmjsm9fNXb7MERWdnQPGPSMxooMCc4J6jNqF9dNyDtC7Z",
  "key8": "2zt2kria5R9P6RkoMrUrGjNoXhiLPJasz2UfVYR97bPbYMFdRY9oUjheWd6EDf9cvn2RFQcu8WR75jmj4ZRujcJa",
  "key9": "2sV2GZ3MByRwutHsUa3fdwNb6zFTuLEr1HENB4QC4VHd2Kx5VeLG8ZFWiGQSeXJFhNQa76Vmq92bCJiG71tCdx5T",
  "key10": "qzKH5n1uJLZ5yrcDwtzp3xa7QD9KYv31RHX65Q8nZKafXDYfsUpmU3PaUjwTYY7y3sQh12tUq2FCZnvWNT7mTNJ",
  "key11": "58ecuzFW27Bj63ZsmZ1wDrfc2oM7pKhHUxANKrZRsZACMmqSHkqKFu1PX1j8PXxXzHttnqcMdTi83B5wpX3GFJM8",
  "key12": "4c99Gp8UqExkJ9ayxV85gTzetGpXuBdvhxtBGfmCTyRLNj67vMhhMWPS6mYcmPoaELBPbA8hs9iB489fCBQDrjPv",
  "key13": "5LUUXmLHiyjE6SpFvZruXMW6KePntUQjYhXyBzq1MJv1tQ6dCgMMfHWXSQ3utV2VHY5iW2zt547vLEHKJUrNKiQA",
  "key14": "5Ns6AqoGTn6aRg56VAHXjhdb2W5npwzWHmHgWPbNBHoGBGfhY1s3K691MA9swbtMyHj5gyoc7NiJKAevK7V5TwUs",
  "key15": "SrhY1XUhpYUZd2wzTmJrBLyqyWr7SJoJiYuiSBBVbvBFYSTcR1uGfy5VtM2iBtpG9he31LQbnjXqKjMpePdyqPC",
  "key16": "3Vk5gvb5yGPPKdtMjrTGdVnFoXwSjEEgSgWdvjRAQUWVePWnT7m8scinaMNWXeART2tmdBLxp1sqtyecvbJbQgKD",
  "key17": "5Lups7aWbgrHvvYxUf7QYbbssxiJ6T3mNySKcYXkPi7v6ReeK8hwsfhoeRgJxj7HUwceDhvDhnQnBjRPFL7cXhoC",
  "key18": "4PSzrVzKQGw9Dc6Y7oMGfGRF3UoSYj7Bie1UjakVabddJbsGGTJ8rwJLQfoZ1kJRzFnhzsLo3iMGPbytcehHmi8z",
  "key19": "2cqJg7LU2sdfe7He15Vttp1mCGxpYWEfPX1R5zKEwjHc9Az56CkJBoRxYFZgZugkjLSE1z4zn6s5RVTqs1ZibSbU",
  "key20": "4UJiGf8yFEiRW3d6f1rKVW7wDVvcVkkwesuWymz4LyjXsf2Ct3tWm7keEzQYsfCRwHSJtJi1hHtBAoU6BVguFhYr",
  "key21": "2xzqT5keZseXLhH5QV9ZczQuM1u7aUJt9uTpB2hzJL96UAKD4RMynqzKipAJA82Ja29e9WtDtQDXjJpMCobcoQzJ",
  "key22": "3YEk63JM8CQnhG9Q8KXs3ottszcyHCgn7rDKAodCovoX2WcPHgYeJ9n91bVehc8FzGnqtRBhnkqaVEJSHkLNQN4X",
  "key23": "3L5ri1BsRS8MVGMwoppKAH2Zbza64earhrq1wA4cNqo6vEn4Fv5DKeg1Yh3KHZ346Li6so8ZQNXwPjh6LM5BkfZX",
  "key24": "3FHMEXnixeC8PX2AKSLeMd6MQLBaumbaMND3iy4EQNJYGpMATm3DWADBJ3hzbH75jHYTTAw3GVnjiXKpSa8LQfNJ",
  "key25": "437kV2UpEKEtS5afDUdvtk94LvQFqHDVgemVvyFAFfpp35K5KhHA6j4wruGe8zNUUgy8fsTZafkNDvZNFbBVv5Kr",
  "key26": "4Mr42hixtNzqS3WkwPAPMiG3U1VmNishbnDj7Sw1pTHZDtWCiZKj8ewg7W3LeY8RufHswJYWMESud1jooDuMMYJi",
  "key27": "2HKEuNTQRViD9RXGTWLHnKw3xgvRnY2oV3ktWSx29oeJgdLj81dZ7umWPTS9ZCjwEkdSejKsKSaNB94pqB2gXpEJ",
  "key28": "2CzXLxLBk8mNByYZRzJqTmLEKZx5JZkVhvi6WnGzTSYh5pF2ZG94suHNdBod9XtM1dDaqhhjUk9QohLkBzJbTkde",
  "key29": "528eS7PDw4MaG4xFJoS95D294oicEfo4x9Y7q2pVmNJffbBgAKoKTVGRACy7UhdjghSaxBWVDUhSyVCfvCjjkqTt",
  "key30": "2zMP5o28evQKYzrrW6PeE5je3SVgXbn83Yt1Ar9DcchBKyXG328WCmgurVTX1pu8jvJNhG8mXGaUQmcXvt2JBzcz",
  "key31": "4keqoEtYfTCpYQcDXF7UMbKVhtnSsWixVKSS86F4GQAXRJdLQ3aYQsCEYwmXnVEVQSXcpsxpQ97g1Zizt1KoHSv4",
  "key32": "2YUKXmbA64tRKT67ScUqsmAjYsQxjUqqj6XHbBAPadbT3S7TbdmDUoqnntZAapYdG8uy2iPbm7MMuwRpykiFJqMe",
  "key33": "5Z15UzeiNbJm9rZAC3rdrCbS1TjgXR5nUCwubnb77LnCm4LYA64gtiaw9XT6Vu1jfSDjBjSswZhpcnaRJgZjMqeU",
  "key34": "3qfNSUgAhMwYMppBBRmcN5pCunS3K8YTsYxwjaTCeShvfzVJafT9ucBveHQTpZKCZ6cdTYowWFq6dAuwm8TkoWX4",
  "key35": "5Sxo2rbxfoo41gVdq1UC8jc3Qcm3dnK2wmabovwzkSFStzRe61B2e1jbmkS7qPSTXsCKxx3xN8feTHrDksDzUjAG",
  "key36": "5ReCNwyULVfnahssKmuSBQ2YPxjvpuzkEqsKaMJKMGPwK6F9tked2xRBecDwCDBCSYmS1LARtyuCHAo6MYUBuKnf",
  "key37": "3aDwwASJcqTxz4uiXXt4py4ALw6FUq7cc6sYTvrwQasURyZ1zSnDhUM1TJGcjVmkzmu1NEi14tTaYk4o1LSZCo6M",
  "key38": "2K9AjnntRpXw6tAnhos1Bz9kRd1emiKcYznKDkRsFX6eKsnWh1GDQX3XCLSPjR8i4m2isZVht4uNVghaDARx1Uok",
  "key39": "3Q3aD6Ko9b62i9aPC2hoaruQgZQP1u1CVsMaf6UeyZHnxgf4KEieUjx9tMo9pNBRU91iyYCbHntNGdE41fmESrBT",
  "key40": "6XdQiVNWcccE79ejebVfZTuQgQtPHLcXtq29maq6PCpyiBaokPPaWf6hQw93m3JQy33mD24iEYiUTYXfNuMy3RY",
  "key41": "onHADCgjkdcGXUrr1BWR8iB3kpLPVKkUvbEc1B6MZbUGiXq5xdxRiFSEqVqArWQKKMaNV9JMbg5rZydNzjumsDD",
  "key42": "39bAu22igFXiqpWywJHUCdQpnskmjefZ6PSBG41TUVRhtSjScnKyXKEZNxVUbVnL75QQTNhrm7XYYgWCSTBnC7sa",
  "key43": "tkbhTB7CFKeaPYvXo9JZg5BmFAjNapyuYKxiShS7eFD8kZ9FkcxaC6Kk1WdaUjYJDrm3peBEgExmKe9UCD96YW3",
  "key44": "3wbja8BEvU3jLoGhQ21XqaNwt4GT6xiYi2PeNDwrWgKvxz8doMY7gxB6BwTNcVJJQPMxgmJc7WtU7Pz16eixi6rM",
  "key45": "3YszAmh7umcDKcbK2MY442QWngeN9T2UEoavGyRBZ4GVkZRTKjo7WHBQ1PHaahmYMdwrqm5MKTmg6wdzbdGbdKMM"
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
