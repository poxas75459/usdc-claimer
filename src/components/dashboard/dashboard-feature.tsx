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
    "3Uix5PWQZuzHnMssMuUdWPezyg2rLv2ESgx1J3SsGgk5CgYPeQvjS3Q69Z8eD1D44JmPPBCcQwVio16sfBbB9oAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8b79NZTM986PbWAFws2aXoYaYwMYVVBv4RbjC4XsxeSSVnuxX4tatx4LwaFWgkansWTgumyGv6YfFMJiT5mZ44",
  "key1": "2izr9fkmDuQU4SNxTvMTgiPnzzSL5c9Yo8F8PCZkcc72mbZwMDUTHSVoA31SaDqYnSWsT5p19EZBiv5ZbKehD3JM",
  "key2": "5bYQqbef4ReoNWSww2eYJiF4ruQJRsUk8RBgyF9MFUwrqGj5H5zHiXQS3NkaC6XRiTeBc65SvHkSBbWrSp257jnB",
  "key3": "8i9kVSSKzULrWg58oiASjrBCgZhK2pe7gHaGCuiTJKcyAaUAQpbzeQ46ebjKuNLxBrBQxmLJbt9MdWQZB5QBm8t",
  "key4": "5B5ZuzhysqcL3kUsfSk3bWspa5paJ7PwHfKmynEYKU6gfRgcHRSPTRW8LZ6tVzGg18hZ45gSWG1JkU4VWxeQK4x8",
  "key5": "55YKEdJpKf9KQZ58C5qFes2im82zgVvQ3PTuMzBJzZeG85yawcjbMYSvztrX92CuhqAUkhTz3U2B4qiPc1wo7XDL",
  "key6": "5zMpBE7GP3t66G9pXg4rXsdb4M8Gq8FqmxpKANgmpHJ6h7GvojpuxRDJJceKoE3eTRdS1GmrW61hTB6KSsTU7T9a",
  "key7": "Yy7WdqzEPANVWSAkbwzY7jGiyR1HC7dpLC9pRtqdPw7xC9785hRDcWW6dtwthBUwqmwoxotzv7ezUnzpFERMst9",
  "key8": "VHaPDCpuqbHRF8uoXXTR8VyoMFTJW1U9SPhQzd8k6osJwJiykRDh96Sc7nhHW4FeK6FrDXSQVNtSySCkgJGtGqn",
  "key9": "2UHxcAYb19Y7SK19BqWz7AFXraX2VPSawGtqbYHppZfDPsgLbSfhw8jd64yDHVJQZXaGdYxmZzETUsbu5djUjmAd",
  "key10": "2Z5WhqiLhY1QCdhbKo37DDE7maSSVYb7DRTuJCQGExB4eoXcd2ueRJfj8iZoMsthpDdwUHWiJRmxG3sH2PvEV1rW",
  "key11": "5nEqeCEsrRduQyCKfg4ff5v22w5C6vnhLvqYDHLkd6YBBdC77ogEjhXex9NBiLK5RMXTjwgSun4ieyXKdqEt67pg",
  "key12": "5oMuFjffztu9uvyDobGjSdAd1yBfEfEpzsnVRjeWnhm8Vg33iuKd8G8xqa2QpJL2k2VS9Xj6rDWt9oGmv3UyY3Sb",
  "key13": "5QhrJCQckZH7XUep8fh7jXdrHjHutwLpw2DqEera1ZyForgKS8Hg4wMdqgdHGqPWEXHQCMLpg1cnHCPrcVWCtM4s",
  "key14": "5FMY2J52a2RpJkh3n29wpifehgE8ynpc1Rfb6JX5iG2VhvySkgBzkj8pQvEQ3yHmDB9WVhqA1hk1Z4StJCanUofc",
  "key15": "3q1wrVxKcTtkn7mt49SQ2p4m9TExAtGRx2kdKE8uz7xHnvc8Hwn5L1yTBjHxYxhLN7hRqFbUqxZ5hK36xtRL52Fh",
  "key16": "Bm5oiBeqBGbZ1uWMyYghsjFndRc1ee1rw4TQnZfAwzuoiinGhc1TqW3QbFQ69NzyAdP9ayxKU86NycyMQErGqrk",
  "key17": "58SZUAwC4SVo52aC9pcEmkmkFv6Q599bZ44dXfdSLPCRDvo5UhRidMAEz22TNVHwgE86TXMj4yw3EihmqzvKPeuw",
  "key18": "3Hs1tag7EBqDALx6x7HTBUKvFmwwPD21b8UuJHD7Q2QqpPdrT8U5KxNuo9iXG7GizE8nx1keNYUP2k299vk9bVQF",
  "key19": "4Xd1w8iYU4QndvGitgAx92uiw3srf6mkik9TajeBQUqfFkjPD16CgGYAHXnBjZqSkvVUHG76f1WgGxA9SXGhxGbz",
  "key20": "2dQeV8fpAVexLVq22HexAdTzPdG2o858gddE1d3ENYG9N7yNzDM3PKuGc2jRH8RydSayfw24nQRwr94UUwUPTcVX",
  "key21": "3kxcB7MKWk15FFsWKcia4VDDnD9wQ9iCvvrYFSQJiy47cA9D19AcSk9hUtBRG6WB98VyYkncnE7WEhvemU1mhEMo",
  "key22": "5rz9TK7HBZGeghY9wrLdF22Z2LfEbjWQVjxh3xDMj8qYnJW1Fziycqsjghvq4KFLYD9tCTs523gYGazYufv6HnN1",
  "key23": "2zkQaoxMRUQm14ybbNfYFbZXMsbpY1TE6LrphEhJERSWnMVjsfitVMjQyNar5pW48fja8ahqc7iCjc9vw3th1jFe",
  "key24": "4mRtCxuAiW7PjLrD3MiToV1A1dX8gLHFggryALhuFdVkeKXeLcegNgRNqbDRR1EQxYZC7vioLGcqARKrrCvSMQX5",
  "key25": "4nAwyBbydgHM4mtgbbF3jWwPp3YwFjhemgNMqCh4xXcRpHzxiRS22S77HF9UqGHfvJPfkQam6XEMLEqTn7BeNZGg",
  "key26": "2p1P6U6ZyNU3FwYJVT7Hy7eqtjaGCNdfbqexZrbeGudmHMTXyCRUrU3Q62hEszMQUMaWHCqa7HNxcjQHFraoop4Z",
  "key27": "KJQFoZ5Ygpe5FQn3GBGgNfkVNKzohJRxxKCfHQPbrr71DNtac6sqppq4DbqDeWui1HZNK3DJe3rZ6ZMfajhFsWM",
  "key28": "2nNA6jhS3bBFsXYnTKSusHG7LniHRFnuLD8B8XYYTh8qgsA5i8YvTEH5y1KfeumRUShrRdWdXHgoTRD1gj7g8tGy",
  "key29": "2B9iBD6yNHxVakhA58bp4T9YzPcdiL6kYML3H3pULjTnPzqDk7VZXqv46G7qMRLJZDNoRJo43BxAAf5BgF7aVpWm",
  "key30": "31E4aJ1cEv8Scqp6H3SHai7tWY13HajU9kLDo1MGZrUpYUxdezyKnnM7MkHKw7u88vbp6bFk4bdzmqRPehaohdP1",
  "key31": "4eVjKaBiVuwPjyBwgvoWcvpsbiRLP4SsBiEBpjDMgW2RwfyskZnTogtX7gVG9DhFp4imkYmha6Yi3cuRDfN6CFop",
  "key32": "2vfbQtA6LvxGup9HjEiv34Z5Vg7vqUvWuWmQSFiCkNgp1LQGRgFVJ3FJvux95GBsNxs8bs2yCw25RnYWL691mL9A",
  "key33": "2SC2vJHeYeCe6oyNHMWvPpvW4qnQQKhdHc7Gn3jVQQB5NRAmjMk3HLWXp4iPM21PKAZSBCRfTgLTZ2Q76L5WoWVc",
  "key34": "54YQFrxZW7vhyFWjU6G6ZZ92fPFxUTwvSZYRKxCPWarQd16E7cuwpDpCJnaFgT91tmSwV3Rr6Qr9fkHd3r9ehpJ6"
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
