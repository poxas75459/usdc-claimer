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
    "3AMomzxEj1FCAAhdZGTYLCYCxy7zncoA7Ttt935DD3jsLDTFzeiqMG7TLLYT56kPizTarM5zr1VBTtLWdyBGZJ5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LJbfqerb1KVLZMi8XjMVTkrEWNsU45PzJsqeKMNqHCWGk31HHZJawYcPj9LB3PAFJUKUS1b9RVtrMFJvyi4GYCH",
  "key1": "2fSnufqCDCfZ7cTGyDmHckLAQYUmhDwPs24pSGM7NuX7PuZKgrrquAXrFgipcP8fxDK9uJzMue9iR7Lc1CDgz65s",
  "key2": "5RzayjLAzjcrgK8DQdsyCzSWKzs2z4CqUCZA6psPMTrJDop4ucZwq14p8sZy9QYbJdLMC1vTYr6bTCeoy9FiCy5b",
  "key3": "2UkJrFCsVFyCPBVawZKhCFSj7w4Qe6Ss2vmpMPsiDBvkNqRwGu5y5HF6HdoC4HfQSe7mzpU1Zbfk3zmpSLsn7TCb",
  "key4": "UVTWgTQ5jhZX1L4K8dqrurvjX6v9GWYgs6VRhehczr13t2Qun3mEdwdzkyiJ2MJ8KqBbE4h2Cb859if8kjZQeXf",
  "key5": "3LNBD8icNyp5xBWWbLseUnYxuRCysCS4rkXcB92jwuYzWUtRnA5C3Z3W2BYeyFZMkdsb8Tg9VWG2UjK8NrofKi7",
  "key6": "5AbdAdA5e7s2QLVQkfZgYBUirQcWER9KAW55s71VXUoTuiemAEMm8a5L5HLBhRdZ8zp9axjkQTF1t2SjiaciHWgG",
  "key7": "28U29HuXNAwRevXD1GFdR9ohSjkoDUZyzyAPfL6m16bsSuKF7Aq6xQc85ThQqCGWscCx5r4aVXxrBQpQS2QRoZKa",
  "key8": "3tvGsXXjWVoC2mNMaC8V1Yz2YuqYARB9K6rMkd5q4g9HCMLRCkDWaHVi7SxDr3DaKSVwGNuAQd3yEix9oja8Fknz",
  "key9": "3rhc9bub7EvZk31SbFP4P6zQa4k4bn45rCBRTA1WTW3Rd4ugJtfBszaeK3NH46q2ghkQiA6bsHRqyFNmCPhmJx5x",
  "key10": "4tBzwsDPWE2BDx7cdRxUcw8dV6ZFjBUQM8pftkt6JMWhAox8BcohGhPZGEZB8K4WqSxEeBr7mPFc4yQMDWVZQKKV",
  "key11": "2kFb9DH8nbkSq7984gq1WvhUuHU8nPUXvTJSRZE27XaSDRSWoBZRtheBTibzD5VwF8HokRcfM4L73Rrk6Sru8KEb",
  "key12": "271JAnjXjDoyKYbhtWtMGXWAcZeMkQFJEwKamE3d7TCTyYShNXzZ3foZDwboCH4xv6mri81GzvftGw2SJbvHQDip",
  "key13": "4n9uUv8dgjU8CJhFEDkMrJAEubCSGFFNYzqm6CW7ZwDTXBySHrHMrTfAX5sLVo5ASoHrB1JygKue7WkVBrAftJf7",
  "key14": "5DnfxLfNA6ByZAFjXffygETku3SR3axVRp9GYEjkNiAt2FdQU7FLuoa9t5x9NFVKjg6RTWSgkNrdGzjdotkznPZi",
  "key15": "3G2GRqNw9em6cKj3cw5Rh1bvXLzkEy1BzaYBkr3NT4xHwK3dYF2fG2Me2Nd18uHue7yXDECpot17KttiDBRQgvER",
  "key16": "2LHaR8qqFShttJ2nXhfaia1d7Eh6GXbL3Rfjo7g5gJYDyB4tpXtX9EH83VcEVeE3t7Cf2vwbhDXCgJgoX4xGsEVq",
  "key17": "mppPZomZcn3SZ7rWu6xPXnatoQzwPuHLbvgxBswnZ9zcjTETse1RJPWAGhycmn1U1qu9Gmo3gZuxzJjPo8jNF3n",
  "key18": "VUGt2cDD3BtgWSQuCcSQerxvjYjiFFeMFRVQJ4xBkmLWqf9as5pN6ciZNDe7jvkq6KULUyQfindT33reqQs8sfy",
  "key19": "2MqidMKxtEitQPsHr2do7RiEZVfCcE6zpuPZwTsk65o7EdjCFcqccbUgtVf8EjVjv4z3YYBEmdvRD2kFxXkhixp9",
  "key20": "3EcqJBCKr2uc2KvA47UeoRE9e9McX2PZ3D9Tu58D7ohy2KVcuCyQydx1hPBVtJwEub9btnpP59wNxvC1eXZ3K3BC",
  "key21": "5a72KE42LbArbJ9G9cyxkY2BoNMFSt6vA9bYDozEXH2htGbWgdsLn7bfp25yktLJnnguArT8rQfbZV1QUXxUS2hG",
  "key22": "4xAD52DmQgHJRjH2rw2ESf36qzYV6bZUYL4NYJ4kkm4u77ktsYuMowQm2k272QY1bRHfEMEVsbzpc9QgEkpLPYom",
  "key23": "4frCBYM4K4v8xWAdCHfYvB8kQrT9hL6JP2f5vv1ydgeNh82vHjtYE5koNuHL9JEH76KC83915NRrpCXh7K1APAmn",
  "key24": "3hvZfeY3zomMnuKt6mp1A27xuxLxE7upux7DXsc4RzjkoL3QoiciSLoJXAmnPwGjeVa4MgVWizxk3W7tPF7tH3Y7",
  "key25": "2tVMu3KiToXM4rKuN5LbHcS8KndN2wjSkdtKGwTEzWpoUwNRZxyMDsMqJdzhHRWBDAwg4qNXLRwTWHKz1xqR1pgy"
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
