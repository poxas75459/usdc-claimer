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
    "3W5yrHBAerYCebSDoRsECB2NTjMDowCqXo1S4pmjwtnvPzufcGvpWg5s1Q5d3SxmVRG81K6p8WhJe814PmDeNnEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dt9RKXcP7KCqNh6KuteGSEJ23eHGi69uvjgpSWDGJqA1H7pt5KWcqEfGiCnrYrRhCoNyd6XafMhXyDJ9esw9a4u",
  "key1": "vedA8zMf1MbemY1EYg29a5bSmgMWQ9HcKkZV28VvFSjnVWPzTaLHrB2oFS4CxAty1nMxT8UvgMLU7pL8RLd7Dt3",
  "key2": "FTESmsg1Xp8d5nZTLx2xrkQmYvEM37zjnB3AXdRV8JENdiScgBVNgET4UGBvzjEApYRBr6i476fWgXK8hFU5DF2",
  "key3": "2i8vZkJibDu5zheP6pnxirwiuH6weG6b1L92ZEXBe4NuqM9PUpsTbEHwxJ2cf35xrC2LYiyJA4sdgxiEuSbc2FVe",
  "key4": "S8ukag9MboXNZFzXovfbzcKDH8gZxnoUgwbBfUu2PdAZWgn3NDyqR2KNm9GfHLrsgoqVpabPyARQ6fpin1PMopV",
  "key5": "5ms3XmXxyU9Qf3k1aReEBF5rbBK9CzqiKiq7wKzqWxYBvstdSnjVjk5DYEUjqfBppU6igkrVh6ToYASV9fgunAYQ",
  "key6": "5UWexVWZ8629quxBYutsspytGj6y4LMnv3J6wmCbgnG2ZtRmiS4UwcSfvSdFGLETdiPFgWt4en5MNo9C3F4c22B8",
  "key7": "3egYjXX8JtWPVgXvaE93XhZxxYnFXy2aihLrFfrukw5FqwiYvXqTf4eit3qL91Lbo8gm8EQFdYHk9DxiiGdkaRHm",
  "key8": "3wx6fehzitDFP7dDYNo1LBGYmGhnA2y3TL4JYQWTS64QV7MnJ2nJZVFtAEKh8X68dYK7iNHuaT98nEKBbvyaQnNP",
  "key9": "2tE6J7kG8bMv5q3jrf5ujjKUazHWxMmLMqUsTjoDcYpiePhmGZ82bCajR6YxuCgnz9BgS2T3oJS688Q4yeRYHFXJ",
  "key10": "3fP6Hp6URTABZKzKBPRPgLdGoERCf3MrhCdyvtG3sQ8quEfLvq7rWiUVXtedMKpTwdREcLCKNC4ENXGriGZGzmfk",
  "key11": "4HE93au9Mrs6xRgxc5CruHW96nhx9VMrPT73uMnN91dUvizwjEQqCA58uXPYT8r6CTJH2bH636gySRfDVwFY54S3",
  "key12": "5aBA9CuVvM1tyZ9WY8hDbj3yqUSQm19yN3CGna4kFkSooCcaA1MyCP7EL3nZTP9ndQVuoyJJF72BwUgP8Y6hLdBC",
  "key13": "2EVxjy9Qb3hEZkiivA1zw8c1JVPKJnV3Cqa3xnmbRMckf78zsM8qVJQ3fuU75c5iaAFpDrnjMjvnsN9DzH7Swona",
  "key14": "i424THVX94CBKvpTHHQKdSXvjRj15HuhXiUwsc7cqzdEK9LGR3DtShoV6F1aqm4vgh9kQD9TVbLMhMD5tUP9v1g",
  "key15": "2MjaAwCdtNxXTFgeUgD4AVWG9njk4zEBVYLv7X9CXgyP6QThENkAyFq9UUmit2Z5cipaRgQ1UN7GvRWQ2qFa3uE2",
  "key16": "2ArNAmJYZ94pJkknqLg7gDPwTUFjUwYP1r8sK5pGRgGhyu2ngxtcaFMd1BNLYkmXTyvmJbfFimq77RPw3gdSGKFz",
  "key17": "5dLLk3VVNiHSLEoH7Miu2m3uojqKaTZoBY6U8MM4zhgub2ZcsMggHWzv3PrXeLj7WEbduecJpFW98pN4NAqe8y7s",
  "key18": "4ku62Hd787zDWGZNndXrb6KhZUsLm5vuBbSknvBnpLKZH7xJ3erWN4nYde2PD52KPQPKN9rncRgRLUjJ6LJV2jTY",
  "key19": "3veeFB9TeEidQ87g8Dszf94zGDr1A1LXGdfBcN8J6S41iHXn49SGd66twhrwQjNW6jkr6J5ma3XNZA8GScQznsv6",
  "key20": "4hfPYjB9BVZzXymcSVvmi9FpQzCtiYRsokQ1yerADZ2pSbwWSHGk2N9gR2EqtzGWWkxrYVhErtvEH7VutrErMPH6",
  "key21": "5ZiuJ23KVWYdbPoCj9iv44oWdS7TmsXEjGiUJFapkmvh2XwX6YE9okTZT8TXsaHLXmFPu3VtuabXDcLzhNEVZ6H",
  "key22": "5VF7xjuMTARTTksbbCCoYWrucJMpdwTzY6cahFtxoGtfwyFqGS1GiLK4Ry5PNCzwAxEdHM7Sj2MpeDCXTXstAc2D",
  "key23": "u3uSW5wjW7K2gjHr3sEzL9WmhSuEHJQcbzKZ8q3syzLMsXdGXTUQ5iNwS7zYaV4CwCKJKJhY3sJeosdcXaLEcd5",
  "key24": "4FSSNDwWjbCvjzHC2qyvks9qXHgrNBuowgTcpXdcpyDKNRTCY65AdjHDp6T8cppipiDjW9EFCvjijYbU1iNQcM1S",
  "key25": "2NtA68MNzFLmV67mDx1QHs8fcJeRx4rnrQqbcNo2sWWAUCN6vf9MqptYtbHZ2vc24JAjJjqoMqVM7WWRT2Jkcwxz",
  "key26": "572LmfzTQ3bbJSAQz9zAKSwNkaM2Wxb1JLMXrrCtrdiRF5gY8FwXPYgmG4mak7FSqZqBTEMybAQtVZhmDvTbjqQU",
  "key27": "288Ac5aVU3X89WgiFNgQvnc85H9tTo23A7GwCnw7awWDiJbcwLFCNEH45nmMd8unjNc6EXaWeWGENF5vUuJX4sCM",
  "key28": "29D9csSWUnw2dcm4zVyqrR5KqfhrbqsM46Xz92iT81qiKMrL2KtyPP3dZozkyxx1Sp9vNVrfWbVknFEeLCD682hq",
  "key29": "4ekxcnugKeF3nToiHJEZHjBXBGTGEzUyQ3v3jhgi7AYoEETVSP1pZDx7mqJr4bm3i68nkgiTE2BQyJDja7FnCeX",
  "key30": "x5XyGkKnDeJetwwhTrkb35Qh521UBMrN3YGUKPXTjsLurgZTWWp1pUPzSz9WwK6yXmVdzkaA2Qg5qbkQZebF6G8",
  "key31": "4JeDsavrU4pLD3TsbCs5Mn2VfEAyEm5mj8MV2gq9vjdTQJJkANfgy8cqvJbGieuHto6CwPd9kdsEuUtGZ7NeKvrn",
  "key32": "65Sc1ARVVFQLVrib4dybwcFnGLoAsoSkXKu2DMNzHtRTjoYi9PhdY17u1P14JGCcfgwnmnihyneXDm58mJKSHuqS",
  "key33": "2vBf6cGg29izZHqHSaeT4jyDLbtCyVHxsy31UmawZ1KF18vAgVtKCktTsPeCdRhnWrehfZKv7HSSNdyV7mtDbhGg",
  "key34": "epM56poKt5ohEfxSjL4anGLV3cJAVhBQNRuaJfLsRMc9rG4UHd9NbGzuhzn3L1mZjFWtnGAzP5PQQfbB3Bi1Xb2",
  "key35": "4GnSetT2jMz3t6sh5TgcJxnwLXwjfoTZ5shBz8P5kfWa1iNz9X62KX8cmGBPaAz1eMJDwX418k5Md4qctir3hSaR",
  "key36": "5aFDk6G1SNcgTp7e6Nia7Pujsuv9yWgCmhtqq8PXpyj2CfzN3qvJ2UUSPk5SwSrGa7sSULrnGuVCM8ovjxfdqdnu",
  "key37": "5yri8vV1CaE5U7Gw1Gwg4kbJfeEGJV4Bs8pXMFDfvq6xPBATWdwSDeFrhnBxJ44UFWFtVLJsuhEA5AVCWW3n8sNt",
  "key38": "2MJyoSToDomsBg3P97Z7fSqeLCfK4CLvo95YF2E7vffN3eiXyfkdbpMr7oTbxYMKgZJJVtvXZCfoPZA1WGRtrj3a",
  "key39": "fELtWFmzEp5VjQZAnRwdMjPg7thCfdjf6A1XXjsMinCZuqm7kNoNmxEMVUKKowhCFRmzoDZu91GPdnp43Gj3cHh"
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
