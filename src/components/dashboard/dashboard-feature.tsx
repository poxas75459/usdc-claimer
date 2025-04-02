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
    "5NWJm6KGsaoWDefgbDcjyB88Du6nFYPhaHcVSzg23ufYRcN7tbAwE9adapHP4A1afvaJxaYXB464uGRVHp1vZQYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31sYeredUc8o6wSAdQmvsFkC18PXsVG4KQ65fsSw3XYd8Bhn8QtdszHkSLSUq5mJDqUFsj2vwh4jdCxHz2fxLjSv",
  "key1": "5xXJ7R4HWn2xwMzXbQLkGKXWjq7LCwpChmgCakbEDW7W1fcCQV8PjUeKFv7GePFtScRd3FCVe4MLL2wi7q23f2mT",
  "key2": "thc1LE8aNEfpDY5aZxkhfDPKDZ9gk3EYt9KqhHTJp46GjPFKW3t5Nn2TRMaYk9mFLSyjj1zwECoF1i4Zf7fPCY1",
  "key3": "3ksoxZKXvSdHNCHvkbduJvpa7zbd2uo214N8j5LiJu53BoNiR1Go5JuPtVK6aSbZdU68o6iDtyXo1KFBMFT42YFc",
  "key4": "281A5ATN8p3CJ9UafrexqiDM3FPnDsNCZnWmb7MantAY8PY5jmEwhczRMpovhh5LGu7ZU85CXh8GL4eVBDpYHfvW",
  "key5": "GaqANmjAxrn3aD6W2et59LLqRsLPnnkcVKCprSdbr21nYKvRFprmsQnBpNKKz3pmSy18zUy3GsL4gGNEzd1F1et",
  "key6": "mo1aC8ciLVWnUzbyeJ6WRwUPiaJN5XVKcY7avKfwuLQJV4MT6VhbQcwU7MbTtKmPU4RptvBGBaskTx9VB1THLwP",
  "key7": "2Ui7Tkstpx9jCEBhrmoT6KxzSX4qyhJf3qZjB99D9vjUCNyjwbvGHXjZin9DruiEBA4NEuHPFBQB9mDkXUEQeYTM",
  "key8": "4XpaVWMEPFrmQda6ZbS2T4CjAyXLBJB9YNJcyLCCULNLRRgWtzokt1BDDcCdZXyYf6HHS3EseRUfuHXVqTh9whGP",
  "key9": "3932t7iWPnXEK7r76s55a17zg1we4kZtpamTvoYqn13eHv2CsaHxFet2XzYo6qhNVqo2oyC2TsGpJLnvLoZmABFG",
  "key10": "UiYuBu8YSZVHHxfea7v5bTi5WanHwvfoAj34r6ZFcD6GbQ7oArwLSa3RAGWkLSmWjGroBK4HVe8d4TMDaNJ6XJX",
  "key11": "2sU66Am36BS1ds9R77JMzHqh2rB84Y8kyoTUubu3LL2si2C6DmyJvCfHzEM3C96pFRTJGg9cc5NMGjM8xMBQrRJk",
  "key12": "3HwNjd99cFR4wGJPafURoHjfzFsvAgeXSVzCWqZPXpFC699LXR3QNdpDj71FrPm7n8LWezLAk2eXSy4EyWaT8yiQ",
  "key13": "PRbv4UDZfthD68GnETsJKURQXzkpc2bD7M9uFA6U5e6iXYNeMZMsfgftrHzKnRnLH6HSEH4mmZ1AJdVzz6DNqFt",
  "key14": "5xgsHPZeW78iiaResnMahHKPgWZSHMkkuzgu14GMa628kx5seUFZHypgyRLVGnNfzC8u4pkS7nY2qyYc1p4pmbdN",
  "key15": "3nnnBJxUuBi43DBE3wk3XNveSuVUAZD3qzThn2ZnWkmqoZE38T45gZd7psRWfVVBF6XjaR66ZrLYPwS4CvMzADPw",
  "key16": "5za8Ydnb5D9AgfHCxo4AZ8sY5Pn6Z7BX9meXU9SyJ1csbhNJYcLDwC3ZVdsqwe35hxwLSReFg5MBRZwW1rN2LvJ6",
  "key17": "4gmdV2TyMqhLcNJb8Qt26tZZPiD5KDugDzvNkvR1Dt8s7jty3GePWoznSR2iN1wjZemKKGW2wkgGGcAH7gumc3es",
  "key18": "4RrKT5tsjcqRoP6pmy4LKZKfn5Cfc2D28JSUJwUkK3Ni5ruRADkXCywYRBYHoZRxYZKghBEKqrnJqs8cn4uAyWjm",
  "key19": "5ka3sBKNVhpxvZHENVstQFAGzyt8kmGEXZhntL4J53L3pXwPxTt5bgVZsuNh5d2Xt5KLfe8AHryqq233pSMge55n",
  "key20": "5UVFWXbqB2LGehFW8o8ZjWmA5DjrpAfXvZdZpwVN8jdwcLJjKBV5PbrgrpcBHvfyTsJAgRHiLE4anRDxFuyJudKS",
  "key21": "67J2RQ7QJiwbfMjzFr5UjyFgLSEkkTLxKBk5oWnJPwUmyX5Rcf7vffnQi96uaHJCH8P61fyn4K7RDesDZeSaYXte",
  "key22": "33r6WtS3T4mpvRicwCuTL2kYPjvvfeUMxWsRYtFLioKUvBxCVCrTP2qSLKxrt7JKrxxU69qPLpXaAuMtK7k7BwN",
  "key23": "2rZGpRVDe8DCg3gzabmsWv2Gjm7E5QgA9TuSQAr1bMtJrEiLyp3jS1szDuKraR4aayTQjFRdjqkXiLbB3Ghr9s2X",
  "key24": "7KgrCpzgGmp9mD5YEZpJkhwhFej4vzBA2D5D2bZyMJ3KirbrNJ6uCwMjmha3JcdeNciw78Ds8wcDjm4eUJYSyw8",
  "key25": "4iLm5df7g8XDmPn4cHkuUbbhTvV6jvpWhsedmTEnpNEtAD5tTpkT3Hu14LrG7bNkV84tQfdF2Bhk5NSzJsyCZvhT"
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
