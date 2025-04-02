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
    "4RhfhdQkNCkVSvMBSwJyvm6Rd7aPteVL4X8CLXtHVxZvKjQ5WFHgn9Jw51LRt6bhnMeybC5dRreygUoQvtnU7q8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNtzHX3dCHu7LT5JMN6dDxmHary8Vo33KVduqupNxvwEBZqhTb5BhdEd3QMz59XnyzfPTVVnnLGwpuijYcWfYxJ",
  "key1": "2BqgVAqyRKocAtJWBkyQyJe5cPFfsryu1xZJEoADquKXFp3ppAFSvBM9brFQFQFPAmKW3CdEGbmshQ4S1FdUpHsp",
  "key2": "4wu1D81bbbTiT8gpAxhmPTjxF6yb9SF5mm8F7ZCX2iToqaJDduZDJGZ1dA9KdRPytGg87Nr79utAqyLAS6oWRuCi",
  "key3": "4c7RPbDT1J35k6Sy4BnpHQngNhPrRQH9uTGt53GoTFPRmCWwzqpSMe3FeVz5L2QFAGdC6vgeYBH5s8MbG6pWD6fL",
  "key4": "DUGpdkCgdJe5k26yXGp6Xtu5ermKqr1XHS5iicRpJBtdqDiugqawHLwKnmVSRKikAq383t5ZhVWWCN9j8szyFgr",
  "key5": "5PzDbQFKnnm6Uc4eDtsk8m7YMtaRwLphStEgwGTtQcAKtZtf4x8qCYfYXstaMM2yyYuTdgkAoU1HM3Csz5eXz3vF",
  "key6": "479gqFohUHpc2rHeef8Nuchp7tkbrKAMM6uCDrfUrEwba9oxeR6oNDWpah7WAT8kYaqPEg4MWtKSkKBexjo6MiCV",
  "key7": "4b3AVdtEroX7xjvMh9WuTB8zQ3GEdQQFN2G4zEL5zDpGkCbAJCxxgd3ydnxzm347TNwtq5dG7FMgWmPSKS12Jcoq",
  "key8": "4pk1qu8kS1p6XUJCcqCjCg1U2LcAjzez1ffDV2PDF1FY3xJsiFEVdoh1Tz8joYaownBNPvxYbm2X3Syz6Cw7TiFY",
  "key9": "4xe87cSR36qikc6nycX4oQBmEA6xueq4wKxQVjNZ92xij3eM7nRSPamPi94RRMYmbUTKwa68JsyBNchqLc7S9yLH",
  "key10": "4rS1MADyq7HYEEgTm3QjrDT7sUHuXz4KM5MxevNKjjqndxbB6YoLzrA5VYkv7oq2pk7sDAtwVQdYUTR1ao3MXCeg",
  "key11": "58MMEPhv6gi9JUe6m9gUHuwMmyviYFtyGXj1aQynqwrW5M3JBBecNDLxLQpXFYcYTo1w4Ew2hwyDnneHcyNtQ9i7",
  "key12": "e3owAR9sd9oF58oNFkPd1vt1fq7rkiEtgdQWjB1XXRRoFj2Zhp1Sh9VGG1Au7Q46MgmsofLP3bixuYp9FMnX2Yt",
  "key13": "4jQoEzeyFks3F4Kh91NwNPUuA5airGksGCXx5RKF8j2qvU2swAUhrFJgf488HMBnFz7bF6ithJXxi2r5qb9z9uNw",
  "key14": "3ZqDCWtAUKYZ3RrQPZ1MMZjAfKL8KeSFutLBCPFB9e28STVfsfqHWsQ9Pk9aDpfmEkA6wKJCPKVqUUaPYrsG91cp",
  "key15": "KkU8yXdpZwLhdisDupK6tPhK2o3Ja8RzhVCG9FtHtJTvzWhZCBpoimwaGwqExTFsbKe8GEB8668fyCREigWsTwd",
  "key16": "tXxDif25d25Vo4Ug9HLqFFVKJvS4GriNYpYf8UvY91qir5LADKu8AFUFV6ZiqbqNXnnPwGxAByN8rMiaLUhQJdP",
  "key17": "34GzcsxejK7GqVW5hLCfKsFWVezSKq4fEDDp67cRXmGn2BqYi6UjpAVLwnC82vnHYUcbK4ThJatkCaGiqs7QQvs5",
  "key18": "5r5aauJA2H2xRDw72rsngZ9HN7GAaFmMyJEy9ni78ceg9maWKVGys7KvRrsfQj6L8wE8SPUqgjoBHi1tqUKWHpG",
  "key19": "2YK2vhCY5UYvxAoeK8L5GQ2josHUEbfup1R6cxskhLBP6ZBfqoQMj4ZZ2kcUr5X7qsRiybAE5W87J49ndm87FRXZ",
  "key20": "3JgFYDvrKVY3GPWvi7nEfTxsPBTvkaGkDPqdZsNxBRqD4G5ZcrFTviEEJ6pmvSepTWEyNGNxBApBcnDXWN4MBSp",
  "key21": "GCZcBJHdpc743d2W5HQGseg4tcje4f1VGVJv8xax7Ub9nXzN4QGtMyhyw2CftThrZebZ1SawMSqKUKKVrWGP8mf",
  "key22": "66Zy69moBb3FmDWFyfLh8ECDXF62rLtJ82a96VD7rMJJ6V6AQZDvCW7U2b6jnCw162RGVwmMjvqn5pP2msiiLV6Z",
  "key23": "3XK9LgYx3wwttyzGhqLUf5YYi4rjyGVW2kPAn3vY3ck2ovNm7NB4A1D82fdwiAcwEw76wy4h8UUxCn43jEuJk72u",
  "key24": "2GzkUoy8kY1p9PvrH5CTePHf4XuGALdnqbdtE3qoQtaKsmkubehMaVyiJcwAQSXdL5LL2SqRAqbaCZRSubSwDMU4",
  "key25": "5tX9Eoth1CxidQkbdRRFh29YVhbrR6BcCznc3UhEiQSJQhTSekcY2enqzgn9KT9evod4GbxuvnQnLupQbUbutKHg",
  "key26": "2JR4Yf44Q9boogc3vQC5k2EdeQZpgpsBqxVCPAbxyWqEPVybcLCxsrR2kjguTkC6pEs7VNqWPRykqkkZP3yipJLa",
  "key27": "3tMJxycAbxmySVYoEX4u5jU1njDSjUutsPF3rjtHqx2aQuod1KXnHRm1ZZTA5Mj2E2NdG8Mdnm1VxzTQgpiupiTT",
  "key28": "5ezjuqV81Uoey8hWio5jbza4TJwBRv2K82Y1Mfy7vDB2PUY8hNbReqqvR7D5jiKJB8jS65GuwVjWnEJNDJpUZ7M8",
  "key29": "G5Neijw66AhPZVgYBDf33YAeXtjGB321rmBPTsYfGocpB8Rr74hczohLx8RBGXThQyAqgXpUyMu9Pg3i6yCMHgo",
  "key30": "XLygLPgyzwhHbqvTRVMp9ywjqn37ePsLXH1mgqoDF3dbAaAyHgffjWRjMUjd5mew8uJ1azzZaukE4KaLYVmG9Cd",
  "key31": "3EZbn8oPWmyFe46iAZNNJgh5QZYiZLEY1JNqgf9dhCFaQG7cTT9usJAg2ZLrx6TZDDD62yxzXDmXXMprZRZm9wAD",
  "key32": "2o6QnSNBMFQka2TesFXKcYuromxwswczosVeovF3dEK6hWK1etT9Wfx72znPK1UL2oSTaDxxcuG7Km3Lfo3UpnZa",
  "key33": "4M41XAM2SDWgRtAHPU82ejSW5uB3stn6DbfBSQBZCRbxhf7BPjHYLCMNBA8N6UW6fBXGuNo5jZPGQsRuvY3jLpRM",
  "key34": "21kXjXdkrU47YUvNPq9eC8HGPQoWw6Qm77nAdSL8ue732VPEK291jNZv8H1BC9kHe87w8twoocNDjURzPZCQMvsX",
  "key35": "5W41ZRiZzXUqUC8yUj98dzqoUKzVk7CuvEitx3qQW5S8EBNv77XUcTWCrcB7BctJgrnBw51N7fai7BMdbL3qYwED",
  "key36": "4FZgUkJ7RfXLNBTjEmt2WsgDf5hUzECtoknxcvTFeCshUFGD4rYpZczqEUGNqZHmoH9Yjr2QcMdiSwVMJmfytrd9",
  "key37": "g6mSUTQBRgdefCQDKNrx9BzWcDEq9kLy14XMFNXDticjDKTtPPMTzt5Hd6u7iEZAHPTFCkCTMgdMgReVvTSuJ6w",
  "key38": "5cGiWLaMsx8g98vaB8noZGCVSQ69ZCnXpk3R5fJSHLJoduhNVYeFCtz2KJKG2Ge6u5GD549UN3ZYK8mcYeyudhkT",
  "key39": "5GosGPezPyzUUC3TUzdSLf5ALwqUT37ry4sTEwFfBZEfn64STTaJnoDXjstATjS1hubv7zk2rD6eBNqvyF5AAtbv",
  "key40": "EiJpDiJ6YLXga6zkatdw4Fb2Ww7AoAiFbRtnMT2KDxUB2L1bwYCHJHxJZHtDh2ci6jjTfWpYMW6R7ZH2EVdwwmo",
  "key41": "59GXodcQ9aPMRSQV3CBAirACEx8k1ESapsZN2QSqTeJiVjKgg2L1sasQRVXDFCpvTMMZr75bAo9uHk3RKUDx15tB",
  "key42": "2ed4HdaKedxmGCyaa2DaQHgf7G2suvq5VxY6iUnbyG1hwXcHPvhSN3iWDpKqjnbNLSLPciZ9ozUpoKCeQhLBv3bK",
  "key43": "5EdY8wjNNqqyjDDb86bJgKMQ7WPtwEC7A22zJ9aT966KNbndKmvhYynFYvZRqnW27kBFWvACnWxRW5dDwQ29UZxf",
  "key44": "2pfA2Fna1eRcAmPGHWPSPXc6vKR9GapPPgZyeWz5NEVizTyiQbRNhdvc1u8LVKYbnQS4cvXbJmoi83XdJnsLgrLi",
  "key45": "5z67G3iJNLpf9F2SgxWKtS2C4QEwvMnwdTM8T8UFdrhe9rucsvsm3vRcjcWv1Fj6Fbm28bvtqVac28ZZWmhddyVY",
  "key46": "4tCB9URp9E1BVeNfixJaLXb1dzcYM5WFNMXEzvrHuSK8t6pxdYk9n5cmTXx3hxZKgNR49RoMWhsTw3Ruftn5Qezb",
  "key47": "4zwaiUVWgZ9QuiayDjnZu6byJ3HYV6B8ZSLuycm1A8uhhPMvqj3afxCZWx8Fyr9hFd1MRu8yVH43QPC78XS2gJsA",
  "key48": "52j2ZELG5Uh6XdZ4uqgGHccwb43APDdmQpTN7NJbfN1TVMReheQgXGH2FW8y1Vp44ryvYmhub7rNetUxTgUiW2Zi",
  "key49": "5Ce9mn2zLA3xRcSCWhHDLZtEZ1iboRcGLAkkkA9XcqFGszo2EwWs5z9mzsFhThMBs3CBkxVDqKsBtWdwyUTa2Dqc"
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
