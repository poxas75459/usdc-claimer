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
    "3RSxxkLXAj6q4AQ43ono8ir8bQvr2W9cDYtUM6nGgDZWbNE932bZUkbX2WcCtZefENzH8Wd6NNu1LL3HRQPwQJfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63sHT3DzunehJbcDN6Fto1Ab9MkuzXKEVntN8V7BNNLNM6PCt4nSghE9kaJQGyoxUJGcLemyKsHiZP5SqDjGzwYL",
  "key1": "52nWXSdb6ZcwK6bfR2vC2YXsaSEoNhKnJwTLr7HCLWHyEBTrtv4h5V3CKYiGdnbVLgPsbF8Tt1ybFCx7uHH5LgLZ",
  "key2": "5RE7gFRRPFeTMDstDA2wtFYnZDLWp1HutTrFWxwhApRLJgiKyrVWrZ2YpuxkJHeRhboim5gsQZGJ8o9zaHq8W1gx",
  "key3": "4GcCk9cPyAXXZUvGPntZD26TmPVytzjnj7jTCPCQeeewAiMfrFccx111fAYYHeGD2aCMnApAqF5vc1enKiQPzNeh",
  "key4": "HYxtG4TwEF6o868KWTv3n1ycYYc4b8SpMWJ7cumiXmtx1S7HE7CixzVhyrMJRu2pAhNAx95kN7TKsrznrY7cMkb",
  "key5": "2GT8mVMwJRnYiiXKVYFxUUdicpS3vzxNAks1XaHMrbwvPxqrNEhmYPKoDwCutFFJ3ukh23GzGtjT8Zuh2bqjaSHR",
  "key6": "4WWyMhh7U8zDyr35Qt9Z98Rncm84bqMLFrfKdxzjThKf7nTgiiEyVG8KTJaRcBXiJ83NY9V3bLhbvupzqTcKtMWs",
  "key7": "2bYFe7SBpkkfsixcE21XpfMmYFZL66yDa3R8YMy5uNqk2Ug1uDvhDXNhYjjP57XPssd7oS7avKovYpM7BYa2z2Hz",
  "key8": "2vikr5SEKz1qgQM2SyQA8b3tBawQ9pkNG2FpsuwGmNfKf1avtoWJpRPFDijRadC2cUacbHBUvEWYmuRZdEDshdys",
  "key9": "3jRC9haUZ9frRRTtptd8uJ4h2hfzSdtXn56JCfZX9Pja6KaXg9HLSWXNqpoP9RpJggD6PLBtidh99MfsUDhRVokm",
  "key10": "5qKQCQeLuursvG888Zyhf2JMgiuEgxMFU5efDxnaGcjNZrbqpt7n9hfgAUuuDpYpCmGenPNh1q6jesNcyB3uXpZV",
  "key11": "3y57PUE7Uemcx7uD4NCRUad43UY1yC84BRzqtBtpBCr45zCxTjQGAsN4kZEcRsm2E9joyt1iKeBgg45iU3DQ4ez2",
  "key12": "4ZZ1UfLBBC5YdwGuwcB1q3NXZwZB3nAdKHr21pqzy8PTjADoscCGJrkiDA8EgMnorKudkpBXUQPrqWNBQ6bgAxn9",
  "key13": "3Zxv77Hfsr7HyfNuZm2obqiBCjf6Ejgw2oCqYjZz468Hvfb8WWK25ZCBrUquAevjSYamQUCPTLwTDpu6yikV5FUa",
  "key14": "3c3AHKsT7fqwnU6GaoDjUcQWATfwzoVrT8EYGFhDiuZWhSqLeZZrjQ3EihWkp74SLHkUxXhF6t12vTe7oJN9nP2L",
  "key15": "42HKNYFDvrNNLpSqtU7wYaVTfcGw8N5oUNxGEFvv7S4erhy4G7bPargidsW2W7WU9ed8Tg7FgsFKXpf7oRKGHLTJ",
  "key16": "23Fg5ZCQp9N4WRagvE5jEjZknd3hgmBSreXSrEMDouVce4xfKq61QyLQNNaXPypLvwhSJUx839Dyg8Yn6ErXMfmD",
  "key17": "2Kdmvp3RX6JYwD7snSyoHfHxguXdKRaD56DMD2xdWpULE2EzWBsETVFyQVZZqeKcQqZWt2QqrC6zER6YES74iFk3",
  "key18": "2uLuC7FMRF17YxmgrspAxkqzjp27K7wR2Za27Rtoo4r7n1Kw8U3vuuTRQ9rnR3sqSTS4EFnyPCBrXMDZvmXXevTn",
  "key19": "8K6PkEnX51qCoyrQriS249RzH8mHuvkSwDQQ2a7xDfHaXVyZPYLsGpegjH7GRzvHpnrPTYcVFa7DQvrhhV3gqBK",
  "key20": "68NyzBziRMU8jnuRtrZZ8eXLmurVKJQLKu7NEwDMG8e5rkE7Nu42Nz8SHUSLgj2oV6xU1VGMdUKpBLmoxsknVKT",
  "key21": "5rjfyhWHbWsRz2P8Texwgjos7RbW14JJ4DDMjKAwksqXcLaFWxcKiDQnwdKj2jP4fCmjsDLQV5CpHKn87fq2M9Ft",
  "key22": "4xS312huDH1orBDtWGysADqHc97Mp9oko6zyzk7QQskUxw9bvqXB3vLBtYqLpwcUoQi9TyEirXTVZJzoLpPSZQ3G",
  "key23": "5Q5on1WUww6bGB7Z9CQJ9CgtCS4q9QKZ26Tqkr78KVG4cmkauBkHeK1RaSttfPFktchWfQaA5vsiqPcA8KCHL3xq",
  "key24": "2L4vci2p7RTSb7T8cZi3g2TLTnf2UoCotHP42w7VaPJZTgTMSDE2pNpEGnqaUeKpzn4N2n2uk2sdwy9jtdSMN7iW",
  "key25": "5hBkXqbfvHnrkXMG3axbZityN2gfXHwbv94oGqXfkFoenNh9bDypbpDDcq1ZBCtQWHU4QHmJkzhth2grBbM3G9Qm",
  "key26": "56hfpXmBuNMkmA2ojvJyUBLQsuTgozBqzgQsUtWjqDMh85TYwy4mq7i72m7VLKA2vUKrgkuTogoLMTGjpn1KA4M7",
  "key27": "3Q6NDAnRhvU4PbYUu6VQoXnkbU1RfXajjnS5V9fR5nMXAevG7FfZSCxARBFipW4TcpWNhWbfeCJJ1j8GUrxawXow",
  "key28": "UB7sZ5TmjNDzz8p7HpoS88UUrdpVmAmvR5N8BJUximF1euEj3JwE8AHWAvnWZxqVW43cXSXtkitSSETzF13BP8m",
  "key29": "636bxvPZAQZXa4LgoqjWBnG5xkgDXgkser47XHRwdL1LCbpSLBaiB6hP5NwimFA5qWg3PDp8gCBYT8ar6NFjoDuN",
  "key30": "2xiPGpU9SswF1UphfkedUsuN6Mnxkb4sh3r5DpEaQsdtTZZiQQMHKSLuvEP9fNF1NKkMgMBqcVwWVwQ5KikvTEQd",
  "key31": "4vTZTY4Ld45JwrnJiMnjY2nSPD7dr9WUvyW1nhuThPGtF8xXmqP5rgna9sBFrp2aoCQPUoi5AcVSRUhHEqhQZFLh",
  "key32": "2XubftF7mczJfvuNBbzE5L8eiqgQQECjJCdfkvFNZ7iSK9i4mwuKQGqaef1PpqsBpsKWTa4UpW1MTXcHnjWaY1vR",
  "key33": "2vCWdXTTZFkYrBZKcHt1avvUF5Pe1kAko5ZQ1oqp22cTjnuhmvBWpe1M8NWHA2n3JR6BUEewwzdDvjYdk3LGrDjy",
  "key34": "3YtK4BYbZhpwt2LPA8B3E2bPVdjRq3fNLsQrTz18PmSFLFrmQpVyn8zUceTpMYFyN3JFHdCGzCWaE5X1PLuXvCic",
  "key35": "4yb9XW82j5paZaRamPK9PwzNgjTxdpDgS9b6sTdZ7wr9QXXkTwaKCusLCYsj42GqnteMcLRfMsPKrFffAxNnLorp",
  "key36": "3FoFEqaiS8drR5nhpHRTWrZ6TAc7SXQHgZpXBAERUdqaKMPtHgednP39fSPmVDJSoZEeEb5MR4BVLdGY3hoLK5zU",
  "key37": "337R9igmcV4w9atJoqDpUUZ3JVMdta4SXkCPpw5kLAzFpRTzc9MR6vrxRR9mzffCcfeFr8NxW8Pov8JEXYmi8Th6",
  "key38": "4sLACgfTDvfbEEDo3mjagoU47MHwFbwPfdzJdt8R3Wuy3Xnfj42hSYcuCwvSL9ykcDQveBmbRUtevim2jjPJsmRP",
  "key39": "5WWTiWJePWL6yVVi6rUPnsXG3e5mN4oFdM9Mp97ht99qwWnMYa2EfBnRbp5dmVdS4ixpmtqD51uiQuuAHNfgt7Fo",
  "key40": "3a3wFUBxmxaT2bHnWyw1YhwTzE8q3ompVGhLsQ144KrR38HPEfpo7K69nyh7AudCnrC2PCu4w7hs6RkguuTmfaCR",
  "key41": "3oDCJCRaY7CgB72cRM2qgdA9AC3seMntVXBvvkM4ZUjzMJmNAFHJ2ERrfH3hmbNVJyB4idfR2Y4AcwrREHxVXp2C"
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
