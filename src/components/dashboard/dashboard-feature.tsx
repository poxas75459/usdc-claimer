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
    "54Jjrq8hkwTfBiLXHVjsfTVHFVGc833UzPAoVvJKbgPVLCuSbcCwGSDC3CtDadENHZqRFxiRLgUneXkLpCycrDCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPrA6iKYLMQbMFWdASg7sVX1SKYh37d9U1nx88teDcKGp7WCTccu64iVaDXLLg6Py5MvDtwMu1aUp5ZYUmnLH9C",
  "key1": "uXrt9CGFsJNoQqZySVyG4GRXSM1tML3fwbgenpV2myXe1EUo9pcAz3RLuZkGYPTuwXXGzgWbN5vEK82PhE8tQA1",
  "key2": "53q2ZBoxUp5Grq3odVBZmMU6mB3VPQfnLphEZzMr1xDvwwsZhhixiM4gBHAtvSHKAZUqAP4FJSHTiVCoLYyhr9rR",
  "key3": "3qjCx4C6SmPzj2K6Ry41rJNBmE9zAEwKdqKDwF9Z2sDLD2h6S8mBcy2Ne2ZUxkPec3CfNS3sCymaaEdj8rjtJitr",
  "key4": "5BTPzLBC2QGKrMCsQxigkhGSJHcNeCnnTNMJV7gxoFzrHdHzy41N6yXkWBhtqzrn9kHbgzPTRsMQMNChootjD8DG",
  "key5": "sg3BaWyGKnoHji4NdBcxfMpwSWsdAB5bazdJdu2V2iTunGbrX15GUhKzNDyUvZFcsaQS2yikoKk2ar8CQSoKYmx",
  "key6": "4mzFAFvQRC97dcvCH9QJ5EdP5HoMkdhL28PVLHgWntFLEvaGv4poKTFba1MdHiBK4mMjNe6obsaazb8MDGo4Wm43",
  "key7": "7ZiBrzN8scucZ9pdR24y35ZwYVCk8i73U3ziWVTgY6pWKFz3ziKPv9oeRBDL58MfWp1KpqKBhavLZoT89ve9xuX",
  "key8": "2Wq61FQSa5nDYrzzmump745k37K4R9X2BiLiUxWj23a5PyZb91mrjkhcyVS9xKZgQ3SB4kjBvWHKKmuMTLro8ApW",
  "key9": "48nW4MagvBX4ttmGcdYBrEX9jwixkakJoi8UZkrKCUd7TwnpgT5h25kNFnqpxyeY8JAaGGMnyohv23KpJTvSbFK5",
  "key10": "2JkeZ8S2LqvJDoa7BujQe8qdQzmemkaUi4fYPzMKx36BuRqyMpECF4hFAbUqQxNfvqJWa54JP8HExEcotyrHdLFh",
  "key11": "48SvHCD5r4WFmYXBXu8Her6SAy3cZzk4RuRUtcJXmEBXw4YP7rBVAEdzcvjCtLw22JqmvgQ66rMoDZkxpnDVgBxD",
  "key12": "2U4XfSusj2wTGu7SYJXmp5U34Z2qoGbRy4gJDDtmwwREfi7w6Nd3CEXAE1KfpjDczQLScKWKGKz1Kj9HtJu3fjuC",
  "key13": "5QLX74QrjK5NCMW8V3jmMjjVHvZHKNQtWGSCvPK4VyWNnCAK7C4okinxMriUZXMN1hhczfEsxMnykGK12BN1dxJa",
  "key14": "RAZyg8peh8uPPuBo5VvvHU6UQy6cpVyDAHFogren5g2gHUY5h77jiyB3MtmB5evp4EuhUMs7Srq2ACTzfxT3kj1",
  "key15": "5tsiboRd9yj629JtLbQk8GUJqHEQruwrDHBj75xkGM8GJBjfxFEhBqvR8xpF6ULundzfxPSWQvw67cVoiqMtfocB",
  "key16": "2xvHFA3gY9P9mYsFhoWxYDD5Kw4gMbBK97rpUGaizWSgyyXwTvrBW7H8WwYRq2RWU1qPnBmw6f1wPHhC4u4omU21",
  "key17": "2NLb3biL5bMjeHpSoQ6Cg4q5wGTLHW3qZJxNpWwgQvjeZAmC44iu65TasPNqWnsGpFm5w9hcDncQqyMS6396SCxm",
  "key18": "657LvRuWGxji5ic5H3gL3KLMoju3hqFPpdNXgJTMJbrH3WjfRBQ8tEYj4kMN1Fd4FCvtoFrhP7KUu5BQ61TdAK73",
  "key19": "4VjnYqTR9H22WYx1DPiFGbxhAE8whzJDUmf7d8gnmADhSRFYYD3a4DXSQ1uW3TMLBmS8eMkZRsY4G1ubAHVnq2A",
  "key20": "4sbUQELAmzv47e8iC4DKpq2KE4uR1qC7rQbjUHnaM7TDNM4odnZt2yaCjV4J6piGVVXDrFWqZQn37xaygJKGaEY6",
  "key21": "hAW7ptv2sCPimuEM6DiuPeUK68mjf7f4jtXmtGNQeLUVTbkJkXnWwdf1tuAqtRtas7s3qXU2SiGVNUwHJLWnuwW",
  "key22": "5wurKXJ7gsHuxTEE7hXQmB1JMhiMCrwyzDUPa8tbnsJNQEy8z2iiPva1bgDvorwPirCqJs8gbpPoq6Snf3pvGMS5",
  "key23": "38FNkeVBVkVj8fCzwHpbqDwRJH8g17qXjoAQD9tHWTWMPSFif2ZfcitDZpt4D7SxDjMBcAtGRSXFEum1ZMBshbLN",
  "key24": "5m4SJbc8eipxWsgq6ENvRxiqMgPSuve9cXzQZLHtxyYXJU1cMLvUTjBE591f1wPLYAHQQDMww2hbK9m8rtub9eAr",
  "key25": "2UdXFsGDJ5S3RoUVjdE3fVwFVeH2htPN6Bq4S8bhjxAQ9Y4coU3GGXUkbr5uQU8HMecA4wG67CfxTH4yeL2pYSSp",
  "key26": "h2GWzLLaWPgUCjNhQBipsyYgtMyj4VrEGRCJA2nGpsMEeC872SX4ZCEQnYABs2ToCAh84Fk9CapLKqBeGSkyJk4",
  "key27": "2bRoqKS5igBeySxzrHNcT4VHSWY3c5uFkQgR7rnrG3eNabKqEJKd3KK2reRAbWMGk7esyqhc7XuFJD7uvwmMVijg",
  "key28": "4iAsAZNHGa8S3XyGqMyTZbXFRz1DV4AgFAWcVENYpXQxgsgqkBEVZenLURJw7RVF79AjfnGq4t37qtYCEUvY5aXu",
  "key29": "29AqqM9q7jGgXsbqYggySwTwVu1GDextQXgr1ZFEkLoEA1FsG5XkXD3oCWUavXS1k3L7JLHZTuVGQHbDyiEr6cJh",
  "key30": "FKQRoBg8HJJagvZ3odhN2LVLnADxygkqCvZY6dN1egZQGs9mGgCkLtbeUQbUtRBG6ysQmy1ocZz3BLJ84fuafVb",
  "key31": "wToVhbWVq1QJGzg4VQ2eVnhM1do31bWTvY1zcqkk97TycFxs5N4b811kdB1N5aZuzPmmyJLsC8ww9QNgGX9Wic1",
  "key32": "4yMEGPqHHVxA3aPemSyBjgBoBnukjpa8ikDEvmqUV2yjug3Higb6qTBmeZqu5WvP2ToPSLyPUD7zqhoydZTaXpTf",
  "key33": "4hopCoanBMmvJXNsAQizTcroaWH5t5j3P6FtA68NLJTH9HggDtoMAw8gAQ6UNDs8QrKRPQ8jLEc4RWUs4vNe86Nu",
  "key34": "3tLRj8V6mc51TuZXQKKYG5pjSurKtJG5a5LoqAb4YNwXvBD1Mu34rtbpJmuxUrSc4w2zCoYjNHmiz9pDfB9rKSHw",
  "key35": "3C9Mgg7frgbzYL8nTCyokvEaoxLro3Y5AtDG9fFs5DkcybjBLRJiXW5cQw4buoS2oKwXYHiEUXdNpjoK9sgNsmmi",
  "key36": "2tdZhn2P2LzzVxDvhnrRr664RzqMhsXVXmUoQVzxhqrdrdTh8PdMyZ6NB2j6MwBD9CuaKZ9hkkygC3rGu3PcLy2x",
  "key37": "7xjgoWk7Vc2TtVLpTn57eQwmrwutnakCimyCCENetjd5FXTfC7Xi2QGzeM5AEzAJr5YmekQAY7ANnjGLosb5wt6",
  "key38": "3MNGnRPCF3LqvWe8xczUPRF6Kdq6bzPgsbbw7H5tsYA9PgRobX3X5oZjDGiNNhEs69TKKrN9kw4EyFk1ximRZYvR"
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
