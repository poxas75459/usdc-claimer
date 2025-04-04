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
    "3TfQAt9ANd6eerPcZLbtXyH79giP2u2rygjEFuMz4pTRfBRgBLkA5EHFQjZdZAQ6aXqZj1maj1zYs6oM5DJ5V7Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKQxCK4GtH8f8ugRFS5cbeqmiKDmWfZcpKWjB4yM5Dh6UbaVSQbjZRK5WAUmLsB5nvY6PYa7fZJewVfH95uuPTz",
  "key1": "4jCRmMCs9HuCJRgt9GMSzsdouHM6U9Rkkjs6c9oJcabGPi2yq3kPcKc4vkquUmqPj28yQuwAFXEBemAnNBEsmsWo",
  "key2": "rYdcCeSE5z9K8gB7EWDWzMkXFnU4PgHZdaZzoZ9Qcqmcp1NixGKoTCYn8NTQoLphXk9tjKGpJ7ZKwwykdKFYAAB",
  "key3": "4uH7kvUoK8hxb9KhoBgzbnffgLu8PyMsiCNES79GuX2RmGGv33LRGiPTSFYrAko29ohiR687VwKRJ2hQ2JFuJMiz",
  "key4": "4GNnDdNAf4ccSiCggWmTSbvfMwxBysFjt9aVMvR7wAMZHBQDi4txhVoNVAzf66W2UEQDcnLvm4rZDuvRmCH371tX",
  "key5": "3CNc4HhB9q4BPHQhwTwF1CvQThnfRq6ds4rGMbMCSvhoPnyA38eQBNBJ2e3RD7Pwos34cjVB1Lw9jmVNjsVR3Ku7",
  "key6": "5QCaGorzpKw8dgNbugt5hE1yuLi3wSGswZD8nfWphr26EvvyukcXfur2UwwQVkyKhntR9vFCezbVJi4xuDbTKHnw",
  "key7": "X8yfavxm2aDd4rFxqHc4GiaeUiZzMRceKMHWbjsDzmSGXoudMP5mUdTW1Ac29qPSPs124dCbeyJTMq2TTALZfoE",
  "key8": "4p96fPU2CUfosde3qE7FDjD4z7MSBMFA96veToPhaxNoCjU2K2nscdvzjMECi8oCkhCJhkgFaYUYNQJ4G2P7tagF",
  "key9": "5nN7rBjhJc9eogKuwo8tBX437q89ikWoiMHn6xcEHHcN2nKbFFyreuRUtp7iEmNtDMR93N2WVygtS4dBd6zsHiVq",
  "key10": "5j79Kww6gHdYceGopuTyRdx7W942No44hTft8aELTGhi5VnGHhyERu8rRZupywVdZeZY3Av7hbGjtqTMZFE2FgDP",
  "key11": "4veFXyNSohCqEdUyvzXDdwmB1N64JF6B9dVWmeCPRUSpMR5WCzgcGzS1eF2ZMJ5XHYS4HdKwHVakWsXZAqABEd8G",
  "key12": "3v7rR4WZksXasYdpESFgXRsgt1s8CbrdT8p6mnHNm55u9dWm9KdNNXqL5cCUULAoSFAe2wKvK11q2LGjbNYbX6ac",
  "key13": "65eScHFC95wZtU7CModeEJ6ziJFiB1316vqPu6FvGWcmq3kZtnFtwFjQ9XXQfNo5bAQvphd8ZKz3Pwfr4tkt4dWf",
  "key14": "5i38FrtCdzzzBhsmRUBSvyw8wbjQ6VWid8D3oFdPF3tNQBzPZ1nUchQcsgKiU1LSTFPP45yV3GxYyo1L2vziGCW9",
  "key15": "2AXDDTcTxZpMTFcC4qBxR7WdPpWpynjKhTi5bp6eKa58gzRtvTJx9qZkGkXBoPPhvXvNScpuXGHZsGe1iEeZoQwX",
  "key16": "5ZS7bavg7L8s13E31yBXzQEHeViFqcsh134iMFddc6MAhqcJp4PS2SqzWc5a1Za7sdXKJx1udC5phcytnoz5Wdxu",
  "key17": "g9WDk2ggo21Fukm2rUhyhrTCKRPwgwb83vSQc6pD4UdB328PdxjM1MWj6o32tgEZ3UNnJgGKeuVdpoAuHo1Gk79",
  "key18": "4Ah7JPGSHqM61y2LToWd3zjHa7iLQVNw7EAj1nAA6xkmWEipvHMSv7TUqa1fKVuLKTA1ZUtdBUQXRgxvPgfJEoXi",
  "key19": "2f8oYMRBGSaXLFMhUZ8s7RZMNNMgWfJRoKCFdUPBnGAgpWWoeiQSPQxNjdHowUaCBauqjCQjqmiBFdk2mLfkkTo",
  "key20": "2fYQu24cEf2RsCg371u9hysALBJuuUAn8sEjJamvhx1AR7WzKRcActuMQaULQgKbEAy8q2SFjmkC1ZbMeAwfiNW2",
  "key21": "2V3pdq1DagsGKBK3jSBJNW2CWfNZpHEhgCAhgACBkhHyidUzUgMwaBNBLLMxcvY6Yc7Wd4jpB4wgxH64GyRnf9ib",
  "key22": "3QdNchwor6yJVkntKXeAhFNTsFRpFLFjvTBnoJekMKmxtsfT8ZGVYjiGM6mkGW1wnrUfTWZpJxyX2iDSo5QGeCRc",
  "key23": "3Vpu8tratDF8zaBy5G2UUtxdDeTqyVnjVfKADryk4vyLw8eiacECgGLKFZ84YEohLWN2aEXUJwWTdv9VqiZSSTAS",
  "key24": "cdVkrtU5fQmLhjNEfURTnpatHwvqNiDSvJhsxWkZDsdz9rBt3LwDc2z7BiLpo6HefAGgVXgiZXHi4kG11mtpmbm",
  "key25": "4daeEq5smq1cxevGaZPs9iiJLtVPDMWB9rbpKQBsn2H3pEBYEXgCYQJFA1xdMGqU6667EETp8R58fgZXHgVMkaFH",
  "key26": "5RTqH1gxjciub8SnHNRRPgvSqn6ZRdaYi3o5VXfj5jv29otPkUUfQzanmYjGzqzS5CEuFBHikPt9Dk1RbSU3cTz4",
  "key27": "4Ds64P5PcoRnx599NB63wxEyC3CfGUAw3SdwuB3k2toniBnFV6KeVjZzqdabK3Xs92T8M1cDnWUgyNvUuR5BRyo3",
  "key28": "64WttNTgaDuLT7h26hTxztpgxrY7n2LBbzwWB6QNNBcMnB4BfcGGXM9NJcdqaCLaLBvZrJ3RbTbdRSyWWJ4QFM9k",
  "key29": "5fCZLT9csUNdCzxrZ1hPiGHApTqQpx9qztoXq5VZz2Jy9r9y9ZNnewKzAcWX8R4dC529noKtxwVXuHd4zcRyikwE",
  "key30": "2E9Ez6HRtdxwdYB83FNa6RHEeFBLSRwgZg694TpZBbQrWZ6AiGv5HD2DmPSGWgZwDMcyLnRRjyC5bGPxYVNN7Tnc",
  "key31": "iPyrjSoteWJcpQ7bZTCgja4RifWkBwTQSoHyD1gkZU54xqX4sKEMaj4m661VuupCRYaEq5S2GvjpFxnN58XHDSD",
  "key32": "3imy38SDEYDDsrK9oV4TqERtQJ5NkjN8qzL8RNygY3ACozqDRrP6ksKFXunku9sGtuXXZWCGxcFBpS6uTaEG9k5r",
  "key33": "2vCX7g5zd2x7qVyWyzr6abka2TK1mNsurcUNxLgcirEL8xrgR3XXQSEkLije8nU4d8bVGmU7mdKpVeShh6tBSJSD",
  "key34": "4SRvWBg7sRMheoKPxU8jvPX5Jk3qxTMdBkRPsKgW5ASQVD8ofe8StrPaJLzeGdCcyF6DwDBjHQdsyK75hx1uWkGN",
  "key35": "63o7HUZ9zG1PHWRrSZVqzkYqRPwT6iSDyN3DSGgR8CEHxyG3RnHa3kz7rGxEvmQjrfxrJCEaiotM3gWmsvk3jCTG",
  "key36": "3ZLmvdH8BcnVqmsf1Ht7KQkmtKVwU5CKfqHCcXYr5Kt6PxAZ5sQ9EfAs93qrU4Crc1FcNrfvfbtADoXhXBWy2Umb",
  "key37": "44tSLRutMpksnuPTrqL42ia3gMFnTDHJLS9w6s25vvV1JQiUxjEbgGHFtwaF7hMS5mVNCifk7FqfTPPCtjc4DSgx",
  "key38": "WQzP7gxZfFmYStLV2RU9bD1HJyxs8nY5XtQTbt8YDPPWdEgJg2TEsKbqNZiF3JbrBXj29TMGxw5vvNKqrWLA8yK",
  "key39": "ybTJsEQTUo7ZssYC72tzLiHRhGEA6cKtUmh2WU3jpWYRnAobaGApu6EkTSixS7iEGnu2k2JDehLk2uQHwi5uGgk",
  "key40": "5rssGc3auPfuepRTrdMUdiSLprNWCwzYj2CXRmQq57LtwzTjyK5MrsM5Z3uZ4vgSFS6zxRjNq2QYaa35YBG7guxr",
  "key41": "3AFhig1q2bitnEweh3wpW8PmPGhK3DryY8pPWUQECEnmM7KF9kzmNFSTYa74pNnvfYfR3TMDvbEjRWWMPUDBSRHw",
  "key42": "5yGxm1r9EXZARhmcBKTyH9UJevbk4xnSbCf5q1Q8Sw74Q3GJ6mgGCoSh7B29LaUhh8eSU5XmtnLAFgmhMs8CrEvR",
  "key43": "2dVoWLaPQmuyUwgiL4gDURhpCcChTn1WRtX19pe5t4ZquSdq4WhiZddaS11NbTmHtVCXpfZGsQEfWUhQrfkY3Uer",
  "key44": "m4GytUGAcHcWuhbCeKHdMPDn9kgGnuEMW638d7YcKyNiYYRZLpb5uUncQPf9vZhMzEhF8HSjs8ANBRCLh4JM8XW",
  "key45": "i83SVSPrVDCBfuyxXASHGrVwH8ZewsV4zmDq6BjVvbX3UEDw6aAzkW5JiqJ88GhgUjePWEHfBk7mYAFjyPHiiBo",
  "key46": "59mRmpggMbgGSkZKmzCh1ixJeS5ZRcFNp4kFH9f7pW7dGV5BvVsLGw3RfhvqsaoYQwpndU2vyy32LmC1VKJCjbRq",
  "key47": "3YnY7gmmim2un4NaVwVB3hEbszK7UKhE2jbkiBpQghg8HSjQ1WLRoJtbGKKkQhHLR1iNEoKzYTccYKeqPTaC3xBJ",
  "key48": "3HDHLVn9RRXymKxgpSBWyP2hgFcv2mHSf3Jb7oLvvoMhzAbVR61gDRKRfV3szpHp6Pcwg1NCoUKTB5gYAVyqKHbE",
  "key49": "37go7TLoucXP5nKEJ4WtHxYxp86bU1uqdsvVuyeNQqRyWefWUyBCph5KPek5ossX7scyGpw8vyvvELn9nDnHXJ5x"
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
