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
    "2Egur67hRyZcVVc86iJuWiU8mBnQ9cU247dGVr6MWKhHtrvrqoiL1yDr8vVPEadgZoG8VkKYsbgCcvUy6YpwWRtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVGoCuPfVVAohKREk24XSdm7qx5jocQLujTuugGWJFbUXuFwJbkqUX8dzx6dkZ3hX4QNaTLyn82cbANrzZCyJnH",
  "key1": "2wdZ2sPb9sQESP8wM9gDE4SsHXd2CEdrNsQUsdvAkFzKPLnzJPqaiinkozkgQb1kZBgq13C5bQNoQgRwmgxg2Bie",
  "key2": "3smZrP7KP1GPNZtJtFHRE9PkKXBmZwmQqCKmkdPGsCnHaEAhJH1dx4mHF75xJYEcqmahnwimNwtv5BYT1SKXzp38",
  "key3": "5vx5cMy9obRcodR9vXKsgqXMsQ8MdsgXet2Xv77Uwso7g9Q3SAm4mdMuBScN5U1MNUJF1ZjHmN7h2MjEk5VqzL26",
  "key4": "5nijjLdmLQrV77ze4Fjc34vDqGC3CV7Vu8SJLL68qv27Yitzx9Wg9L2UTtBdoNYjgxXhhynMFBExZg7ALQb937hZ",
  "key5": "2a4Y6autvALXsPdFm2DyRZwSiaWrN7GeZcD4RrL3sQwC7oXCUiYyBNdBH4LFcNbkcivWU97otQiEASVSyVSjh4Qq",
  "key6": "4ZwrGEbqrGqtb3pmB4wRvpg8XeypZDxNhCD9xDQhyZqvtRtZ6KMRxSQC1SB6KRVaByk5oa3sMBPUMuvkbDrckZ58",
  "key7": "5HemjusPXjNmbSL2JKjkhNEUudQqpEuG8bFVoqWo1P1wqXbDjVbU3PdSTg75RqiKV3Qf2vDofAELzh2uyvXL8B49",
  "key8": "4MEowoRRYZRkNoKpt8oKo57NMjiWZyV9mFaY8kuCWMRszyuH26c3KkwdLSyZFtFKoHJ72avQB8tcF3EX4tu4mFRq",
  "key9": "4t3vXVq73itaXk8pN7DjMSvXKAZocf3U4AWJhrvHKM86T7XtoQqK6fgJnm72RvggHdZA9UeqStqyVPa9t7DsAz5Q",
  "key10": "2SSXRjuCMfNkhfiioZoY1MbKHz9CqbMgFC4jt6mxunN6ffwcZBzUACSXDyo2Pk1igQ2RzTrbq8SQR3RMznQZARFn",
  "key11": "3YC5etUatUqVXAiSUaQCpYzECkfhyBHQRKEvYK7iS1BkWJwz6uR4soMBP4Si25uKzzHFNzF8PJoT5zwyDm1zwzU8",
  "key12": "2nAxdmYT1Bt2XiP3fmsFkfQc3SBLVjVAumHwLFFcvLYNpoSxQ4uMm3xcwu8RrGyE6q2p39pNXiWZ7bk3XutdVpVR",
  "key13": "4PBjJvE1EWAjrAGsSaRKwH9rfZfpDdLAWUrvKoL9Q6VU6hYQZjqc2LvDBSkGu9a8oBAwCkgPwHMc14SZnNoCn86t",
  "key14": "Bbnf8dTcNqiKoW5QP3oB6oswH7HPAP1a8mBnkbXuvqqCTtEVe2ivbkfSZWe62sATYAXVhWo2QEERfkzc6fs1wS3",
  "key15": "4nmJBz4Nx5iWwpc7PqSzSRF4H3t9eSwbXjY35Gq23TtdS6TGrW56EuqEp24QD2Lt9wtDaVoPMHY5W3cudjCwM77e",
  "key16": "65X8t1S1FoMxkYME4YiCFcfYinYL945jKmW5rFc9Npf8c8Dt3Tw4SUbbbFC9taLDfFvaEBb7pWdthWewN9wNgqYW",
  "key17": "5q4kAbiCYCqRKqrpPr3xSyyf6ARr3cEb22dK7xyshmAjHUHJi7cSvvHwwLcJU86au75V5ArR2AfzXxFNFnJ648So",
  "key18": "3FApWspGDc34cdzXALUQVwUcn3bifFGHkx3ZvuCQxSpqzCo9QxNsQaHAGcXXEAjVZLfq4jPB4ksLcJUCp6rbfoN9",
  "key19": "hMQ4JS48DxKL9ex11XSZC5RxetApnDpPu2gbr3MNAHbHc7SgubRJ67GorFbMuANEhJASz783RVJcPeYPjLxRCWo",
  "key20": "wSCihUMeZg8wSkoaD6VZvLrazAhFeBWUEzaU6WRg8BWEqtfwq7SY5RX99FrcvZpwPSC22s6wMwYpJqJbhphVz9d",
  "key21": "3LNeN2hQfBDvNJMGNQ6pPcXLxC3Pc2K2Nri8yznDupwUCvk2aHLAT73vfWBaFtLpwnPAjwc9nf1jiSN7K9CxVjAd",
  "key22": "3nVPse3KTjo5pCY7RGANpred4UnnZxfAKzs7rwpSGRz9bvQqnnJLyVeTabWsr2FooNSd6byWqhvRRrNzh9Y3ERae",
  "key23": "eGk1oa4ybnQbKbabfds8HVDqDxK25FyQtLFewUrQWCW8NDVJHphNPB2D59VuT4tSHiKjU9curNAQmW8DUU6xwCF",
  "key24": "3CaDZWVdfJypJqukU97tuX5iSCUHo5935uQp8eGQV3Avy1ByhVkVmvPqTTX7i8uQCNGn1QDwsHR9hQ5BFJ5fWxuo",
  "key25": "2zBwThyZWSfT42AV2KcgDKYYtWdSiqe7ekAKTpXDkZ663Fdmd83yJ7tRKMZvuGp8qHsrXkzWEuijK32r4qLqUdAg",
  "key26": "2aEBmD1P94kTDxCQNidJ6XVFyBFiEygzcuvR3J4SSQgw6y8ej1QLp3TRPtB2nmwYeZUJdV5gHDKeRseuJTUGEG9A",
  "key27": "3DXHMcVCacADjedKa4KWw7f8Sk531x41MHssh65JaNAHyMKBsmnro985anVZ8qy6bRuDoLQN6bQXMKtcg7W3KPUm",
  "key28": "59xxcBLwmNrb8keHLAcZM2ihkXuui4xmU1UJHM9y5XH954CgKXzRi3bhQW9nHpB9BpdGmyuph8k5SMjapaUoEL3Z",
  "key29": "5fou2vzu1fPJXAXjnZ9NqN8KHQJtPBnijGhvRh2FzwpAyr4drqoMmUnRGu6PFbeNXMUdxtMZQQvnDCAbYZJJ8BxH",
  "key30": "2CYsEqPPt3ztAH3oDDuqQNy8c3tTpPafnBnkQ59xkWFJTLSxQ7noG2i47CF5XyNyy73Yd42xCTtXCd8Jc8EnDQ2Q",
  "key31": "371MjE8rPo1QqgHsHxtt5Kv18EBS3HddE5MjLAUswWaamWwew3HN9iKyG89Ne1LhJDd4an99ut4GcSjcpBVVeQGN",
  "key32": "4jGDNb7bibCRLD38ZMuEu3mTfE46aEPpN2UkDnYLJji8QzWbD91K5926BvsQTXx4MvVc2gVhG5kZeTvSciVjQ8q8",
  "key33": "3JMRTcRVkDLFcmMqNXK4wozaEGjDXGjwAWtrgxbPzZwnh61bpYB6ixLaW3SHDAdvWwKoYkVnE87Q8VhUGQTvF7pr",
  "key34": "4TZdBPVe4HfB52ZAkhAVdKERsfZZfurB11DDoTNXfDrRAmVLt58aCAYR6tW66AQtGMU2kEexnu4sZo4igeXzBrTw",
  "key35": "5BGrz9kiZojMh6oJQK7CSHGwYLSMYfA3QNpaGnz15wbo3Xb8YhQsNc3hy6bqNW1nxbG5vcMT2ZzoAFDrKjZ4RqE1",
  "key36": "3empiugAh9KPpYQq2HMNZLWWnufa4LEXMLT7vNnh6y3NjtDVayv9tkM1VeoWeKqokZrvC8MJBrL9d9NDYJLsRi6z",
  "key37": "S6d4tMvGdADPeEss4NA5jZod5JJYtEMRLkuBcaAmDaMcWawZ9kznHMoRfDuaRythpUWvq9fTdmySwB7MgsWK5XZ",
  "key38": "2mfDyBcy5DUwKddbtc5VN9xGFsWL52awbvHxHZKd9qfWSgNheT8BHmMwjS3qLyQbCC5pM56FYK8umega2bGbdHaW",
  "key39": "5PKRbiDxqtADY1ZHtnyoz2KPv9ifQphSh1xiw7PssLe7Y6PHMQyaU8ZN2YC4S8zX2RqjruedLNWqnCXwsGugw3CT",
  "key40": "21vpGyAdaGDfk1hsWFiBDRFHCLskJj46pqHPw93hrA3mqAD8wJ7iaZzdwomcBNsCJAm5N1P9nKXTCBqAo2F9TRKo",
  "key41": "5DqBHoXi1zhQyZ93GLXiYmvCNdd4D1Uz6fAGXVhAAq2rFZ9fJ21wgoKdesoPudmjbXQNYKjfkxbzCjgzJVMCqgN1",
  "key42": "2RkyL4UJgj2EAX1BTf8CyDP6ZU7U88f1dQJr8DRNjY3NYNe5u3rCDZnwccTGM8iMuLKEF6vTYnqaYejpFWaLQcXJ",
  "key43": "62vbUgwuUvJDV5XqqdiDTdd2CpubjR1zVMog2oPYuCscC58NjHC1YYTks8BfBpzrd35TiQDYDfKjPrsDz8f5CgyG"
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
