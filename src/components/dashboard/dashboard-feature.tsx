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
    "3D1Q8wEADQwo8rcQtuU6pBjKNFfiEUf5gqG8gKchMsafiVRUueQStjoYZtuu43YcNNHHZVnBiFLYvBUdfoWpSoTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKrmm25VeTVvqBP2N1CpxyYKAgfFNRJutcFyFtgU9RC3daczFmaS13Kf5SDzsw9xoNge1scJ8Jof5gDjt7cieXg",
  "key1": "4pqPUFhy8v3GyFqNS1YSRPpeXwuV26DL1UQCNRvaBKuiyuQE1QhxuLbK6oUQT9RCf1baaCzay4hyxbLcqMvroHad",
  "key2": "37HBzpTshesJySWEbwqY9KNXECCYWLkjdV1bj3m53HQBubB8dvyddLdrTf5Kq7DYNPeLXtrK1wBdg8KaMxLt2B4r",
  "key3": "ef7AAqT5dciAaScDbV4LC1pHFZpCYHzsBak6m7NmRD4DDqsRRndj8mSQguPFkk5JJ8Z2cssZWGRpsk4GK5wNAee",
  "key4": "42f2dyNABeEiVxvHci8zACVKqE8YBUxnFqjvnkNvAjuD4pzvu3SBrKEULHopSdrYR497pFt1qQ8Yi2GkjamJGNHt",
  "key5": "2wixW5fKnx4WiBzAh1dehi2YKv2RqUPDBrqe7AiZfqcSBJ7NsqHrB2acCrMdA2qMsDuu1bKTA2T4kqHSo3LRsKKw",
  "key6": "3vWsZqEbiV8xFiP75dyVDMoy5zatBVF3TGoTmGFDXDygwLz2TsGv4zvxvSWKo915UrNAFoRAdzyJgkhajoZxs2xN",
  "key7": "3ARUvXnZHebHpLgtQuJmtAggsuEfrqeoNR4CqGMDrrTnQ9vHyGohJMfRimJGY6UitBazaZb4qVZgbRFJ1bzwKAna",
  "key8": "4Lu6t5NtFApDEiZTBBgAjifDepGFS33n1KhBWHbD4z3wyYae3bi5aSFSRuDv4SeC8Lk7uPPLpQdm7ZhQUANou4mU",
  "key9": "5TvAo1xLwzrBQoYvuMCQRsgDqRHyztzRLsTvdW3V8JARkeQiNvzTUi8awxLaY4o9xuYFUmeUop29zUsp2n94NQyX",
  "key10": "nTAcM5ZrSGwwrYBkv1DRk5QPEviPKt2J4kHuMLfzsx8yZ9dfGHYd4AimZEQFnx3fYbWAUkheHao85jq92HMPHJ6",
  "key11": "2WDisyJBk5e1iZ5WGFYJigFJF9VmwcdTSdkffD6FBE3idqWbtfqw9y6HbYxJpayzCypeVGbBr9siWRWkKUE7wbuG",
  "key12": "45X65qRXpVVWeKfN7VkSGz4gDwV4bYebJ9FDK3U7MVfxVBZ4iW4MZ61mkZzfjfCwP3xw3n4AtgR6YM5kZwhfwubG",
  "key13": "3E7ANuwjyUsYgpWs1NJ9M66psR6ZazGZ1FVyCDdD6FvUYCtmcSaZ7nBitMjXqnxznRKN1oZGX1stJH3WQGMyt8DR",
  "key14": "5q7XB8Y1KsAUGW3dsSirKC4iETsLQsHWuWBfS1bvc7sby4Bch33rAuBzZC8aTScNjhTQ9mcsT8zpN89MJYeKfoxs",
  "key15": "4GnMZGofonzuPZSzEZUAmoTCZESuz4tpKEcDprQd4SV13CxbhMd3go8KnvQksKpXHfkjgxcgvoTFVLS4Ey65faK4",
  "key16": "2spaHRBxGsSx3ue1N57RjKLH2j3K44QMn5akwB21JwLR8uwdVuQsBWpNuidQ4RUtudLMp862a6Ht52iiFQSn7weF",
  "key17": "2Rhtw2LuNwm7oEppr581C1PhBxeQFoYGt4hX2UjJqznVWmHYhDztHGtVvbZpNLUfCBVHZQnjh2FpKKtdkH9rwXnS",
  "key18": "hCrduWVRrkjaxj3s3eNt6DzSHr5aYYJkDJCVC664ZZaETWoZ17WhZwnv5rvyCv496qTNeqHmjqf3NY4UNSXXtMh",
  "key19": "3wEdn6KoKy6THEhQUK5bZnDjQN79U3D46KHzhHgikrVPVcwud8fvxHcqjDrtW9XyFzWnWZka5NTKeb2ccf8fL4RJ",
  "key20": "5Xg5PTLvisTzWUYScaRkBGYXpo2hpEq9veWS9frSvhsVRmP3LnovUHVTUE5ZJVR9P5RVKx126CbUfGfoC3vhqtUY",
  "key21": "36MW6DfckA2SWFmmoRDRnPCWA412JPFAejpw6FnNMYHDpsrMjXJUbbRELSfBC9SBfuwGNFCYX1XJpA5bwE8aYPuW",
  "key22": "5VMt5oKiJQzx47RsdP4Y4K6AnpXeWjkPxwWn24E6KfuHbv7qRcLDJA4tFmfNVkmqt9m5cLnFLgvnPhfyx6MZkTcb",
  "key23": "5wNWvGBrLsnkQoe7vEQ17XsYnTekNo5sEMTAjgCHHdPqXLTwZnbLxF29HnVhLYbuggDtzm4e5rawLeECA2uX2KKi",
  "key24": "5vfPt4GC3nUTwmWi7YysnukZLVVLdRM6qEfVJg59fpnQ4Bi1nMPy1JJf3ANTwRvBvsza1QAGT1fMz1xHqLJ8jxPp",
  "key25": "67d85KRT8GjFo88GNNChKYAE8TvuvQeDeLY18CyGPDJmp93dbVGqbP3QKskqH6dMg4Dg3qTLLZRkzVbSvpSDsD2n",
  "key26": "4oAnuBYGddNxbG2GEv9zPz7p8mMcNbFGzyNrjx9uNVFixsvhz74iEHAXz6n9UsAUpJiSQD3bTvoxgiQEWbCAPFwJ",
  "key27": "41pCBwqi2ZagC4a9MJcnK8G6A9GRLtQc6N5tjJwxFHf3jGmoizJwRWpiJVnkiUYRVN4Nax18HwgV8dMp5RACnPkU",
  "key28": "2C9uFqLo8zvoj1ziVRz3euaijSbdXnVuqf4gvhJSCyJztnX4FeyjekRkwt4t6RtN8jTUnxeCUy1vJA11H6zwppoE",
  "key29": "67Yxen73MKhsX25NaU6bdk3gUV8hq31oWnc8psVRpnzvGMbsMjJPysS9dygDnbsPCtu3EE1SppDSbMPs3FXJfwT8",
  "key30": "2vkvLdAsgmwUmaEGpxGqUt7iXXCNKiHoXBvFeL35uB4Ygb7YJWKa5XrunAWzRwYFKUY1zjjqSzwsxT16StQRt3A6",
  "key31": "57iqYpXmpw3CiVq4Ga8str6HmXdk9vU8Thw229r3Q1C9KJRfP3L8RLZPr9KaM81LjoMtvSQ4FL3GdTnU59w5CukN",
  "key32": "LcW5iovKXZ9msriAmiZRNNx5nLNovMCHf85ircCbpVJ7v9AhpFLHcuJFMkegYTeFkPoKxttpNmd95Dz8D9oKpSy",
  "key33": "3CbjG151n1Z3JBtX2HniQy8GCoYkDDrV6ncpjyF6DSsieKXRnwQaruXnJGWcxUjrSqsFKK2S7925bngPXWYGgb1A",
  "key34": "1yaUnfZGX2CESY1rAqeKTAEw8seMAuPHytiVN6sgCo2kbq2L5vdYzGUCCKkNiHf6MJXnecAoc7UExJeXJ5nDNCx",
  "key35": "2YRN4tPTWFyRc3k9JHvTxt8rzoZJqjdGTuUj9Lx4wXW7puQZNMo4eLuzzhKRjVcjd2ZWM87cffs25eE51vedAUXy",
  "key36": "3P88deDXHFsF95sCnMxVNC2yrDJd1jmjJMrRDEQ8ac2daaV8ZyuFgby3JvCY9erLewB5wCsWBDYzqxEK5J4GhToB",
  "key37": "5cAwdoCY9u5fYHb9TSYyWRX7zgMfmbHKRD8e5BdcSU7Jf7BMbJXrTYv2gw53JLmCef4VvDnEdF483k9PLQeJp6iA",
  "key38": "5BJxoTjok5aynBYEDyYtEVM651syx3o5BwWhZ26sFJFJ53o16kRRexoDdAvqVvwP3FQ5ATyKnY6Rgx3QMXXXAt7y",
  "key39": "RH9dvQ6agTTdUDwk45Z4YVDkC6KriAwhqrTMZ3rGpkZKYHLmEoUs26Bai42MeRuMbFQdwQdtqY9eT3LjnYd94Ra",
  "key40": "3AExnGFtL5WxVDGVcPmiK4sGUySgdCaZk9okDZ17eJ9kY5FofQNoQH9zXhj5PjHXejGBVQkgYTBwvdDfxEXSk6h8",
  "key41": "gc6Rd36R9h6nCB6jikoXmF4gVc2DxdVV1dFro3nqNn23Ug7MxQkKDgerBwMFkiGjdETS2chTbZFS4VTJrvCpYdW"
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
