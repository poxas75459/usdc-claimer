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
    "31UyHiwApMqYLjdFf9j6vVfGrYnhr4c7zRvELQ2tGXmqN994AdhN6dUmS4pWicL7L2VYMyyhpy1iEtDpttZxPSgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWPyJ1eXtie28g4dkSu86VGgAVEFQfB96nWMZNQsH284d8BakX1oX2QVakr4B8s7aY7qw9MianvVoErDxpL9bW1",
  "key1": "kttB4YTvpjEAXeXHbosnL6vEBwXL5nK34HKKCiHGwYsPRsHJj5gh12QQH82RaZDSVbj15jCjgxWP69jX7x2YPQq",
  "key2": "34wVsd5FPJ3nrFcxReWbiya9PxNHbD8A6DZiLnooH7M8NXAvWw8FFtJrqiUz8m3b7mjjPiQRcjb4zUQQNN5tukQc",
  "key3": "4NbjxwPgBkVA4uiV2N2XrtshvCrRCLstgiaLcrnrq2Yzb4CHVfT8TZrZmMYoNeA8Hcsjv3GCeJJ6cS8keEddJCh2",
  "key4": "U2XLfg5k2q7gHjdxGMH3iWUHzfqvvQgpy6XegXwRyR9Z5oNLUUahY1aCNu8wYeWywx2zPxkNFmX86nUQidwEFpf",
  "key5": "di2qCAVPkTHAAZVjHXyWchBcqgAkz9Q32XJCQJJouRBZqhuRsCU6zoVPnoeR2nb37tWTxSfnqsamjF6LxEy5BxF",
  "key6": "2GUHz9RuGubFJRRjTzv6szfhXDJndMqBtqpKWGXxMSKnJL4LSre3ZkUdEA8GqsALEpceGn16nJ8pLoRxXHPb7MKj",
  "key7": "3YxGmzsyyCwWPATGWQNLNQzLCWwBkzzjF1VHvVtp1w7Ui7eZwifLgY1r9uARy7GU2fWE1BJYtCELMw7fXR83djDC",
  "key8": "YyPhzpj5DjqEZCegbYNEYM73sRtv2ohBy9JMK79ZW4DQDuZwCzksWHyk1ra4n6DENRuszSdMZGrQQCYJ5KGQVUT",
  "key9": "3iY4EoRmUg36af9FsWwDKc812wpqzz3UHagzC9m7vajSkooKGzyYVXZB7XDJPHRxazQoSJoRT4FPbjL4iD3KcNJn",
  "key10": "2fcLuwu1sfNZW4ZtkDZ9e7wM9dDawHdKu4rYPb4vvPA5wQ72Fy7v1PGcvVekKVxYrqH6EQYfeyaSVrAEJqrLe8zA",
  "key11": "3rFqUvMTqjiweYgWbViKL15NJ7ds9Jexs7en9KND3stxYaDnMu5XRBJUoB8BzdzmUrLH3w3nSy1LMQvbJhJnVhd6",
  "key12": "5cdtJesVTRKV1VWmx6ApT7785cS5ByMDusj1v3P4wTcuKXu8YhaTWpmu2Em1NApUMRgWzdCTa8HVwQ2ma6i1CMo5",
  "key13": "3fS2WhbYodMZzZjC4DYpsRDqqUdn7sLmDTyc4iaNnni9zyfLyYLHUHE6iQEpR9mBnHBe1cc1gXyMZDd1xyUHqXTt",
  "key14": "3ME62zezbck2vrCNQdUyWNmYLRKH5dQzNim2gxTuhFUcCECANs8BDqSydN2e6i69Jqfbxkb28AyP6VsrbhNGkG2q",
  "key15": "CZKjBZneEkbWWeJ73QzWgA6UCEYz96mHu4Wt56P3E1zP2j2QiP9JCu56FUQj2F8Wmh7ecPqpWcPxmGR8cErfEKh",
  "key16": "4gwTANNKAHtJsXTwqpNQDEJ62qRhhqFphTGNRURcSKns3opGDDdKSimvYpifQnQUzCvkJ1zrXmJW7K1Tnrc3DYuF",
  "key17": "3jJ8fnMX6kH6uWVLHFrJq9W4SeZiQHDwv5DpDc2nD4JTb2UNZh8T1bwXaGqPU9q987PZt83PgGXM5xhinoDZDw99",
  "key18": "571Y6DkvjerSepLvN5qYK3njs6EWSjKLdpiyRH8jY2tFNaqAZCKqqfYv9dkgPQss1FqQowMx3NF8SgbwynKGqDUy",
  "key19": "63a4BdsBBSiYGoKjESWT4mVEBCa7MAaRHX8sJ1G7mA71wyBGeuSUV8NZznbpa8ibHrp5US1uCuYXAegJJfnXTU9z",
  "key20": "3ckZDSFkhCAHFJeZi3nJZx7bfBf9v8qn4tHXv6siyD14YAbGvSr2GWbyUxRxSEmktxdq8km3KaxSGjkNiG4gHXJc",
  "key21": "nRdJtmeSLaENCFs6RamqkHZkemUEfSNuGv1jwjBGDoiDdgAnUKsnmyCqbtc1qsbXToPVVfJd2uHhfU13o5ZEfb7",
  "key22": "2bsvBr3xTHJPHg8gSgomFHUFNTsFjRwHHTpYUg3Ca4XoumdQL6tdyx58VUsBSkxgq8vFpQLcoQN5ncWsNqQgSxff",
  "key23": "3aRBnVsVHVuXTmYiEea8tTjMHpDSPj3dejfk7c56WRCVthNFuUuBcajQgeLZ6SfZwNLL76yxdq3vcGeVZ7iZiYrJ",
  "key24": "3brqmUEe91NBfPo1vP2ztdpqKn2KPcXnoNa8jB1Pp1AS5YyDu9gQ3i9KBcrfAR5z3VuV37vWKsHhTDh81eYJCMVk",
  "key25": "63c7YjXPtnjSsMTjD8gzZtZTaYf2cPycnLw3K3Uj1mTsUjc3mhdLgFxMvbL9pAeF3j61cSdHBMv67LuytiZ5Eckx",
  "key26": "3hNYZZzM8jFmKh45x7wx2ES9oL9EDAqWJb6VQMkWBryfCTq1bofsyn4A2Ged2YmG5scgQfi9YvgMyBL2YssV2ah6",
  "key27": "4g4ugQuSLtqWtgTimZno9ERpcVLzGjUMwuWv2n9Tvx813dy7DP1xy3ueUGYYWkXPGRvgJm6GUw2dMq93SJTRCVFx",
  "key28": "61hWyW1Rodxb7hens5w93kWHet7SQinPDZ3hDC1pUvivk6Vu5Z7cdduPJSWDngxR4uMpr1UPedMxqaMvWwUQf5QV",
  "key29": "4P6Mccernm2r5Dx7XKE9fBwqdRnejCw1gEPtuh1cD2wd4DsXKpKzh3ZAzE6kHhjS5bMoDfuasRBnEEY38apjH2FA",
  "key30": "5F9cT9vNK8hziZtnPuxwmuAgpKzLpBd5RAPtXLusaFJSQsEYrJuw63N4Gpagsh6Au3Z6JewJxNAwe6MrHC8LCCAX",
  "key31": "UErdRLXmaX5DyaRU1amQ6huaPiup9wT8LxPe3SDsA7yQsvD4XoyVNwmYFKfHSAw1pAY2Np5HhesUwQjXrmWkEiQ",
  "key32": "27c6QkJpZKsTVQ7BPhueVoidA5BiwGuLrNsLrKZRraA6NEUBdxybDH4pGPoE8JbAurQAEfJGriS57HbENnwvfQzX",
  "key33": "4c1zLUCbKARJrQwYdDnWFzSvFFnJTodtqBSKm82Qq36JYRsC72xVy9RjxR8koEZ7mtsVNit4rUiwV5PF7PXkrk7E",
  "key34": "2p5Xt7jzgFrxjcHVs87Zr64wd1vimCE47jYUGAgyPfK4X5yowcdGiSd1ct8yfAYK2FYMY8yT1ux3YPNYi917xH79",
  "key35": "GeNUytuy6NkZL7XAdgWkwJiUZyU7JnDhMTnpDT4PS2z9fVqda9frTHHj8o2CegKA4p4XKRWuyRF1oMEN3dqDyDC",
  "key36": "5cTTpG2pRgjBNT14Wu4nEGWnsBkJ661fFbzBbEBpirBA3F3jh2vRUTmB9zg9SWiCtAMChfz4awMv7pkDvr4dEADw",
  "key37": "3mXqoZehVH43P6zhWQJ6cSrUBPL5BgqR6n6G5YLpTcERkP6Kg6is9uFGxaBPpMPQjknTcPbHLoy6esgHVjbVWY9k",
  "key38": "omMeHUxdwDZh9catd95yscvLzTuURwnGX8kmHBrcq3qh96npWqpudDu86pcchSUE3vEn4DeV7MzgDFw1u7yfRHp",
  "key39": "4JGeU76h67CGxA7P5k7id9BHg1bQL8WfM885HhEozz1uE5rXuQFKxWiaCp8erNDS5RM58z4PWERUeQ14FVVXFLV8",
  "key40": "3bbmJnXnn2h7Gtb2xq11dwQzK4iiRGgwTR5dBEpH7WCkV7joFD4P4EKeaQcFCrbqHQA5Lg36roAz5YVrETHx28f3"
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
