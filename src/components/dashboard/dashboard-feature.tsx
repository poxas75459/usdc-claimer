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
    "2S6DHwS3dEDcrkisUFDEhM1dMZtJ2JBfZtRv9Rt2Hnrag7sGBEEmyZ3Y9yqWeByvGv6ofXMQKh6nMSpBf7a9mjdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMZKjJJEZzxuqcsY2VMSy4XiQh65M2jdW9YFBAiXRwfXJMmuiywmKWPdxkqgu59b5zVF7bi8WFMdfvoaxbEAnSz",
  "key1": "Uk4UvADWZBhv6adbd1guhi3Cc44uApycmovp6JNx14X8vywJG2JzUVPKseZcYMbcJEiz9mpCMddbSMLErCB7hqw",
  "key2": "3pbER5EkwLGuvXCind3MNoABgEV9MpbZvaXCXxxFRqikvS2eyuZ3ZHwo2xP8iAYpmzRJvF1RU396cBAfvkjZ3AHM",
  "key3": "4feHmb8XTTPTevirrQg1sUUJRgRv9xvqSb3wRraNdaUJnySeu2d7Ch9YRXKiiTVuggYuksGuhP71p5oeb4xUad3J",
  "key4": "5TzQjiPyr5qLoTNBmMEBedgxrD7p5NTKe8JCWdLuYjgsdLnkWAghXxpTDAyrr56cd47mBY6US4FW8aVbNcoRnwJq",
  "key5": "3XPbL8JihDhujXqY9mNPkrabjunuMverxU5ok53mzY5U8Jfj8mqEAdZ8SbqP9PRrnEKe5id2Jwrgn5MXAWhGXFGx",
  "key6": "4NR5q6NTEQBnu7W23YJuDo6Yk6czWnHzx2SappikNm2NYQ53ofLbAcD5Y5MrP81DggS4Yans4Fwek3425Xfk832x",
  "key7": "58XEKeR9Q1g9o4hQeVD2vwkfZjV563uNuKywVyYv7ugLez5kC1CTsajCfzwykFppXpCxUdr3v6yJqai2uArsbLNe",
  "key8": "2Kp4sUpdfAFP17zGZtZ5nW2ktBu95WS7vadY1fVgxEyeRLoPrErJyk6SZmeuxMjRCXDdbqnt6paszc1EknjWPNtU",
  "key9": "2AWB2KqzPq19c5aEkQbDayEzFFoaeWL77bpCVr6B84cvi5qNYMzYdvV4H8jqpvT9LdkYxdobqec9uta9A8y9qgih",
  "key10": "HHcmQ2fRRoZrPKc7H6CoSoAZpxY8NoapiNbfvszjmVhNCh3Ad8hN4iYEpjMj77ZRvKUSgsofJnJyH1Bz9HjUAu1",
  "key11": "31ubdVyZhz4LXTBw9Aa945dbT7awMd656omdxfVCT9uEq4VWXvLqGDBPSqSn7yYFhmJWGXyyncMKWBnG5zXGvCKq",
  "key12": "45ern9aWnUC9HiKtpYujBnfy3CmHGspnskAzbspuWWSWYisSmy5d4cR6QpiAgSrAny3RonXr5DhDk3xXhk7y63Ut",
  "key13": "4kj7wvKPxV3WFCZHiod1xHiSf1exmFkE4tydFzHTwnPLnJCwLaEUK9HaQ5cFNp4NPRN4r5F1LRi5qEfXMmZF7Yzy",
  "key14": "4R1R3w42e4PnJQB31ESpCXTYA6QPsxffNVf4mAURtM3HVFws8T698GyEpmgsCcVJXRZKEN4xnjnJTQ7hFmwgWN2S",
  "key15": "4Q9Kr8TfxnvqZvoxP8a5WC7bGJcE3Gh76SGNs1Qxg1KPbA74LrKM8b4MUyoRoxqi5Mb2xFHMBDASXTa4aFknLKRy",
  "key16": "2fepwL7PrSb3xrJSUREbuDQcS4Fnd7jpxQJAPVQHVq4m8Hw2Bokp8SFwZPK6SpmEqLeyGuTmM1iR5tn5s4AHJcgD",
  "key17": "5ppZAD2sYzoKdnFQYuYZPzQnrbYF1mbU22J6GMBa97tsbKj3x1rTW8Vj7fEh6BWKLuM1kFHtd8g451sbAJBJ65tN",
  "key18": "5ZcbFbRP5SVxoHvkBCTukiJEF3jdfhwYLunyK2icy1UcwDn32AP2aGyYNzoHuyJ8aWifr6h8YUqUD1MhGQdwPHfU",
  "key19": "44KHoHH9yVBJdtdNYDEFkyYBLUV7pvKhZrGVoWq5fVtqqMhhvgTgfkUC5pr3hDZGKae4NXkg3XFQ2YiyHp9yTEM8",
  "key20": "2ZiE4x4Sf7baiopg8TtbcaXmBz1u5dC9fsxcrm3XaWDvxyxvFRggrbrCxadt3yztUeGpKTTxuEg6uCVTypvfDeED",
  "key21": "43JgVh3nh4aV61dsLbXwAsdvBxPQ1w8ufVpM6w9RvhEW4P5t1vBEwgXL77NqSKu7wwhBidx9gKCLzQMSymGhSMp",
  "key22": "3JuUaipB433QCGtgt238vwB9yXDH13VnhXckMpxApTrQ3b8kh5MjUz1PNVK4JT1uzyZmC7Ge8zgxhihrc7u2h6hu",
  "key23": "FZAaPPCFJKtiP3tKVs2c4n4feJCmQMmn2kR3UpB7fMvhKfPrmrFPCaRovwrbWbSfoizvhX57KpzgfyxxCsNJeLx",
  "key24": "4Nw6Xg8LPBbWeeaGmeVE6NWWZ5krxjwjZ7b4RtkGUDrntPZut5B2n6fBMnH1ftXRwfgfH5HVZNHXFh4E1qZucJJq",
  "key25": "x8faGLwCgQYj5tPk9cd68bKjmGn2CABCYN7NHzRqMR2Y3mUSY4WgG2BaGQksjXtewAvwEMYRXyYDHyDYvfaeqX5",
  "key26": "4zKjEjDEo5UynLtugRcbvwAfKpZSDL9mPguZCjYDtKDf54esjTtPyCFgo3iHb4kzgDHuTBvJy3FZc1nCZeGtgamg",
  "key27": "5P9DThiPJGMohMUJitLTFpQQHeymFbqkeL6SnhxEG6UDPZNBeFFMc6ewUkgrWrJ21PY5gWW5ZkCqqFSk6HP9UbMh",
  "key28": "3j1iJPJeACyYePLsshGmA7P8arJK1uX8ngafJpujZBB7Tn82BRmHes1sGrxALsLLvBeLgno4yWJJG7XbGiL85MaP",
  "key29": "3FY7hQx542oULetJ6wGMDZ7xWTVuJfW3ZZjGJFULaePmS28rYCinjbEpUCJyZ4RaMopg4dv1mRPyy3ZbXB1fSBAX",
  "key30": "4wtZj2YheT7ba8tAuAPoYyTeT36d3G5WjgwZwiaf2WqjaypuLLufY1GF6F4oDdEPubwVJ9GbqNpQW6yDwqHQ9d4Y",
  "key31": "3D1THZUjy4VhJJ77wDWU8qtMu3Yj3UXYnnWJTypL5BAy6ox5wKdi67XBy119WAP2AmndtZaZmzELX41h55G3REBm",
  "key32": "3n4setQtUYQmFfKS6r73pvAg1nWTTjZvTu2aVcYEoNHi6b5kDtAcB4X29m3rnUt7tVV4am3DjgzeZcsqz2hqgwe3",
  "key33": "62yS2AxN94uFMpx9Q91n4xGipjSfMnqv87kb71ZBDKtFxAzPzXeyFn9vPhawCVsy2vwnoyhoGxxYAjx1H5sSv4c5",
  "key34": "2hHZG4tzukLPjHisUh9UAouZyvxWLZL16enDzCAeBNkcoVseb5hBY8a27ctcimvvrxZSZZBWQ8DF2kbtLJfh3HAB",
  "key35": "26qWjZK26MfAKZbSSZPT9czWyTKs8VSGbPNJbMz1ZUiAs6SLVXj74tQ4mqfc4BdW8roaQtqrGT6dar1ZpHXbPwN4",
  "key36": "5mCbuctuDDWp9qnnrcxLpHLfZAckCoxzwu8zjCYEsSNBsSSZe6wK9oUDfnnvHyHRLfURY7nsW8HQCezLdVAVAjX2",
  "key37": "mRx9mzeWuReXtx7Th8PfqQUgsFpCiufWeLr8JsMEJdJcW4hd41APzL4Qpkp4rJ3MqbzvvKHym8XNtqhTTYfv25V",
  "key38": "5WNQRqvn6DDgm8SNcTeNup6nXu7vGZ4M5Nh2Nh6PiYTM3XoqfNsK2jNvV7CnCYopr3bxbLcWhK6hynJGMBjnyeiW"
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
