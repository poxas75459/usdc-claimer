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
    "mrEMQ5cwh3VWxMZxagnceqwBNUkmxE1BQtNQx5qxQjiig4NHunbfRmnVVQ9rn2redbQvBmoF694XcfgM933in8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9B9fVXAcv2HsuPVHgpqAjA58YrEVGZpt8YVxgTunBdtzJroScDC6gaFb3RN8GUwsi2uyreuvgRG7WuvwQCeT5T",
  "key1": "3Ma4ArB1iopPBZFKZjyGTSpRWrngf7xFUX5SDz6CXAmcCKXou4UPQNxfb47BZcoMuPBmVMrDbavhAxGAZCgcAe7R",
  "key2": "3S2b9ThfVNWSBdZXDAYi1ePLbp6KEqgRVGkUjpQvmvuBZHMr9YBd3yaKdR11HuKVZunN5mvEHWqvtx3b13yF4eVS",
  "key3": "DxeMxjiH672cuLYufPgx8YkncEeybo51r2SwB4Wx939nEnWp6ExDfNAb6GBLmj23bezTgfVHWKGgM441f5PRZbJ",
  "key4": "3akYKnYPTwwLLBMH2rWrVaYd8ZvfNhZ21L3Eo58PJ1giyazbDuWd4MfGqrvTrHGhE6BtSNEBSAfLFnBd4Ra7Jwcm",
  "key5": "3r9jQXdQYHP7NbRFHCgBPkWbD558cdkWtSKEuc7MUCKDSiKYpc82tRqiDdyDmQFWXhy7Wu7nKwQY2sBSd7HXXc1v",
  "key6": "49h1r4htybh3sDAdXgSUdq32T8VzLHPpTe57zevX3a93f5dLNyQd4mcq66z7uXonnMz8ftWbnuJA8EDaWKHZRivB",
  "key7": "5kVR3YNyPgnKHguwtyDceSEsiPKVC8yNYLvG4dVxC3GHtFZ6Z68QTybGVLSww8G2sjFqw63LAir1FkQyiwYW1h5o",
  "key8": "z4r4T8z4oUMZmBo7Q7Su97GpNn4QmBVDU7ESgyPaX2orqBAA1ZnBtg4LeGZKZHFAG96NjeX7scqBoHXykPNSqwB",
  "key9": "45pxRGMBqMVpgata7fzgDfqkHFyCPYRC8xTRphSuF97zgJzLVScZyE2fAmGVmAwTVhk811GViupZtTWtt67Bnzp4",
  "key10": "4JiiF4oib7fbxeC73CYVwWvDHpywLYAkggzdzBJyZTYHUDTbzNze7nYUSTS7ZAhH9HUmbWga8NjigyahufqUej1G",
  "key11": "2Q7NFqA2HHumbjjYq3a6U7XuH6taHMMWsiSsCmrCr1NGocrHpFkEE4t1hv75rfETuGVjP6MWsVSuFTa4wccqCt6r",
  "key12": "4uV6zG5wKHHacK51QE6Q3czPiciKwkBNbManGfFMwEGdme1jn4VrymhQZFgwpniznyM2opdLN34fzQPhSayDAFu6",
  "key13": "4RBbNtU8bvafPcW8TygXNMS44MtNPuKzwyxjrBETZSk7x36Vin3JH6i3vcnUBxmWazGTHYveGBWYbLfPgfPtcg8V",
  "key14": "31XtduCqteqoHEa1MSJ5UxsaaHp3b1MSfGWLj7oA7i4Ez5UQYS4FmqqapJcvFbz3HykA1Ew8tZmKWN7rBBFuiFux",
  "key15": "6LKzU2f1aKYMWLCMEtZXLmd3Mkui4eosfMrLFd3KdaZP7syhmhBB7zFCxsysdRdHLwoUZwA3CFfvAobT3Bw7FCr",
  "key16": "2MWFctaSKUzZtiMg7qqBoCQJEup6F296RaXciZUN3HnJ48bhRFC1KQ9pPFN7ZQXUkiL1QqU1dz6fztq5BsWMaijh",
  "key17": "3t2EC7zKoCQJKVR7ZZ63GXgSkG7UtdFrtuDa3gZrpfcKtWjfqE4MCJS9eTaEJD9WPMwVR6jtt258AuBWbE4jhyik",
  "key18": "7Jn6VjX41bvKZ23S3C4JJG2CdH35jG79QsccPBpK9jK2Qx9ZKLhsGP4ncVUQaWNWBffBR5F2X5SJNkjJXGx9mUm",
  "key19": "4dwZJsnGuunEEtYwLGa9QBcUm57pD7MHFURfELVXkUsBDGRtTaQjfYF5jZd8CVQiyq4pEHg1kVQaxaXBsMhtseXq",
  "key20": "ADBVsPsaDcyWP1viGGRQ8cqbLJPvFpWdT48jLF6nn5NnY868aYaqtJAvCg6RfVJv7QW4Q4bveamP4n8g7HJYi4N",
  "key21": "2XMRkxMuVshfSwWY4VUXvBpUEhYJZYVfuiAH5vs3c27UmcAqpgk3HW8xY4VvKy48zBis4oJmGH1qbLf9PJ69GV7W",
  "key22": "3kEbDX7hRiUu1LTQLquGkPyBRkXzE26osf3rGxKwo2L5hrzuNdUZtyGjMtBT3jDzNbPr3vRfigmSdNfn8EDxXaHp",
  "key23": "M49seTpoM6VMmiV444pKJrB7vLv7Rd4BXCzaUw3gwMaGhheShLvUA29P7b2Wb8Bm2Hmr7tsMpbx4P5HYJ486Dc7",
  "key24": "5qrTXyzaThtVueJwUNzHJYWVV6V83JNkDzAJKgMetCqqycKaaVStJtGkE3nBnR5Z5LgDrfrB2dtJtEuZwwPwjHND",
  "key25": "3fptQbRJo3PiqiF6HfgznzpDenk7VkKiw6Vjy6gKtFzWp7neKPZaMaGH6c1tmDqofRUQJ5zNp56kCMRGewUbYPpv",
  "key26": "tiqWRYdcmREGgXFGUzvNvdeUwzkgjkbNHy2tB7zP8kcFw6jMBuEdHMSTVoueCt3uphtJ89ZHH4q5ZFTED8BoGDc",
  "key27": "48RcjgUrkqoXD2mCZtCkSE5GkUhCGukVKfwcBzfFxVxAV9eTVwaJQci4pmar8wM8HsEqzETxPskwcJZiatGG95bN",
  "key28": "2MAy2uDzHMgegGWtPbKQd684b69ce7DeMxtDcJG3RhDmXkYRQZTyktyDeyWwRAqZ8GSdD75TWDqFnXQbjbkqGLGS",
  "key29": "42nBcyponff2Z7PqvDYQ6tkqbbHrr3mSY3bwcwb5habGqqnBUFdhrHdGnwVwygTtRNhKNpmbhpmARvNG9SJmo55N",
  "key30": "2LeJfs9LBkgijL9SXGmYYEz6kkRndnHfVfPCrWhopZwkTgMUG5hq7KCRNiTh1iTuRSqTwQ4EnshT6eFy6gLfg5of",
  "key31": "2Y1APMF23q9RDfNh8wPSPLKJZqnxNcDa5pkKushnXxpYxPTbiyEyjVQnrgLAVuCBJr8epk3cjeAefyY5bKygs9z8",
  "key32": "4Rk1Lh79UU7s3MhA3Ccjjkz2paGWeZwL1zrhn4KtjNmULWnR8vpnvLqYwpCwbAQFj6trBn34dvTQxb5tXTfMXtLD",
  "key33": "3DCYuU1LtfyvkFqEDjNdd7ZsJsSr7XPyEiA2BdJUjMBwWi9tzxh7FtWr3PpRh3zuL5S4SsWLbwxQccYdSaemYJ88",
  "key34": "5P2cfhiuFU3HM4GqhTYPndp3EfybDVwNzfMT32nPdn3p1zihcWtqzoDfEfN9PVs6GYfKZfGRBTdBoaMqBH8pzKxv",
  "key35": "2ojLZn7QFxwa2byAK3jJ6kPvMvKV57rmYbu9HWWs2uYGcf3SvLk7JRydQbcUQ9oE7EeVi2ZvYTUqZCoBR8fLkKFD",
  "key36": "2d3Z6xf8xDfLqd25ovZ2b9sGD5niTKj6Xk8sEQXwQ7xmTGtw9qve8HGWNYibqTkBLVRkiPWD4BYCiDGVNNKs9vcw",
  "key37": "4nxAQAJ3Z75txBXxoARcArYYhreGjNSWKXhVoTRxZFvAAkoJ1BXd63AkhGqDap9svb4q7TJBDLPjHsURwMHyTxnT",
  "key38": "PSo3Xtw5kX1ToHM3EVtVzuBUu5CB7AY5xMs15FSfzXig3njRv88Wk6JDvifVkyv81Gqbb5YMn3iNgU2LWUQjpiH",
  "key39": "488eBeVuSQhTSdcztZfm5KNBQqpmfUy4BX3YRL8Bm4HXhTTFmuS8KFMtggqUSfCwpLMV21BoMYLRTQbfjf2cJJU4",
  "key40": "GBQRqA9MqnxKr5Ji2DjXPjnsPuht3Txf76cVPKTBg9ueLXxbkRka2hGAzEKUkCq7ds8cTwA3omdgGe5M8PGPrJw",
  "key41": "3VjWM7AvSdKeRxrozKrJ7eFoiiYVA6utuLfedPWRmr2w3GQHFoqB3SYJmQ7U55XQ4Y67CubfpQCZFB2hDSTTCP7N",
  "key42": "47DhAGmHVyofrdGnByXqTM9q9J6kaytPLR7F6xv7ZM1jPRQ8pZDzavwTTpJZUYZAjGmj6kh6VeSdDc5akAcZZhDB",
  "key43": "2aZpyL468NDMS92TXfWahykjjTFBTrfTiNTHSKJG6GjzTrZF1mA5wWkuCRC7hP5vzpxRWVk25zfukQSVc2RtE3SQ",
  "key44": "4X8EQfWJqkzW2HjaQtGJF5qCu7YhrGqGLopEdkh8ERqr9QGRmoj4oLLknbFiU15VLgTC8Azov33ksn5ohHHY51Rg",
  "key45": "gT2PfxMQxm5ysYzd5MaUCmr7QFqkVdkXcHqiiSWVbHPRtajC4KV1J5uhSQVARzv2ntvDW8d2pJBDxS4r68Nnh3S",
  "key46": "DiCvMQgEqnsQR7tPyhX7LiPJ2YL4WuExnoWADB4tMxTTcoqtPNSLGy1FjmF44EUv8tNNWCxMBrHCK9u81nTQhPL"
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
