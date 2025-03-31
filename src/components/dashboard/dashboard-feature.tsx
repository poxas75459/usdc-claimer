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
    "2GrqoKoeb1A29Qtp4tKtZEtb6sxP2kxta8PefxuLAVP1Eiuh55i6bB8ykELvyKuNf8MtnYXBcAHyUiUsj8gFVNcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtCzUYo4FnJPBncFtR2QVWvd4VSnNkAaihmCAyBbK25GhRknn7XMZF5VSsLxbr3DXXK2Tui6qBuG5cK3gaQJiWJ",
  "key1": "2zQzt2H3PsXx8hA5JYu3RgBRWPES3xx2LRntHKNkFAfiq5rHfSVKiHSKmzw8cFFQmGyMw1MBhrfwV747etp7nnm7",
  "key2": "U1GwLDHoYRhjTYmLDVCQ2wiSxRWK3xwSycG4C2Whk4D97mFCnXBvKnPmSfLwqC7egXp6SZAgyskKemBNxVGY4fW",
  "key3": "3zGc6Vyndimpe3mANqpMzY7RotHpBs9A3SbhW8cn4HFr4beNcTdBRyRDUpcE2PEoZTnxqEPY83MgJMDos1CeUL26",
  "key4": "5YptP2piZoWt4sg1uTXhWHhDd2NPxKPREE9J62DnABH9zV5RFUsoTUaGx27ajjFd85k5AjhTEghcPniHBwZewXTh",
  "key5": "4qgjXtr189DM2oWa4b2rWs1q7RghrfYZTVr6buUhB36d9PvKzp8SST5PQGAE7zUMALwnqMfkFeeojGqkEfudYcXD",
  "key6": "3p7wuQMvpNsewoFppLvXTaDw51wELCY8LEYPcE2QUboSR89tB46VrozxdQikNGy2DkELmBrZuTXEMSDzbyws6XLr",
  "key7": "3sYa1X8FE39QhbwbLHzEJ1b5h1VMgk8ECDqWtSiK8kDJcJdSzMDt9gUWyFdPyH7R4f9CJiuvz7Jxuty2zo9uSFz2",
  "key8": "3gYR7p7T3HjzzYUFcrKtP96X5V8bXj8pYQ4jqcjmDxcgoh9tmxJrYNUZpfQQsfjDe5C64k1pPyYTaRDYvbBcw1p5",
  "key9": "83fUZfk9HuYHqHeX9Ev4A7xk5xad3k6C65ei3KGdQnuLK3jLaXzLx9vbuHqn8bZZABMaGkE4GHkr8D7Xm3QTNVh",
  "key10": "23MbcnevtHey3VP7VVboXAFF9Ym1VnXpPPwtV1iJeQrmwHhk1XwiQW4a2nZHVws12Gv2JCqP77rym1bWGSDekzbA",
  "key11": "2h2aYDmJNHivVZzjNBKHVfX4Dnvn6WapvQcyW1jp6CNbVyRCLBSyRLP9ZJrNCBfYQkj6XgzC5GZkstWKp1UEEDDs",
  "key12": "3MdbgTWhdmPwhsRKcDuXiLpjH7bka7wNchn3kwfxLkn9yzpHMRNC7pRgii5dwpoBVRqvTZtUJUPEPRAENaC7g57J",
  "key13": "61AtkHnZJpfjKZZhi3GuPJHquKqDj2MGjBQ1DHrYWLEfSAsHXNAV9UESFRAyRKC4L8AEQJSwSaV34rKexwB33GaU",
  "key14": "aA8fGciAxYntGNvMjSWS8wUiURsTXDm1BhzbM6zRy2sDRD2PUh2Qf6MNagmk5u5Ze9A4ANFQtd5pvcJLviBeLt8",
  "key15": "2TiRnR6RAzg1wGm2gP2BB2dKhovqN9DiZhBGhMFuUsBrfsr1b5WieqRW2229mU4SRPvUVviCUe64JMHNsCqDtRzS",
  "key16": "5EaV2VuhxNPTQCs5AWYzZmnEaKdfXKHfo8bdJCcc88RzBJzVxaLCXoMGRkyYc1nYWTcM4Jor6sqG4nr1VpDox7PP",
  "key17": "4hYxMGDbZcwqbCzLWi3SPRikVTVDgDbVKdia1iyDdBjpqZzB1EBUgBek1CoTJCv7nQqBuMSMvL2VhTcNuAxawPo5",
  "key18": "27A5wdZNBdpvLUpZg7BRFEK9kn83aMsTc2gQkpAVXSDsndGjAacZS5b5tW34hMf9YxMJxzmgA2vZsWgFJRR74oRE",
  "key19": "2ATL4DjVKc3hRWAZHTcp2w9pBz5cpNQ4vBa6Duva3x4HEU44G2QxdbJaukFwx26iAwnHzJK6jQdcN9mwUaMpg2vL",
  "key20": "5aynMeNqdYrEnmEpMijzCqvq4rYF33odMb6c5N1F42RkBs1k55mND9Dd8zheMMC512NW75D7B4pz8Y8gUBbcyFGC",
  "key21": "5nu4iuFMt8E2vtUee11cKnw3hZqgggqW1NqvZzV88HBHrJTEE5zKAbCqfLWr9x8tDMhRJvJPwu28zhtaSafgvTse",
  "key22": "3cpssKrtrASLPy8tTvJp4MdTeTSVeL6VimM79C5DnXjPH5epBXBHuBHYr9KfR7hYaLUowyKuA91ZCwjfJzTMKSMi",
  "key23": "2cveH1b1DwhDsw9hHP85yZMkf6gUNe1UwRsEwYu2K1oMS8hJqSr5m3x8jqAkAoFEEWB3UNDtc3eERJTWHed5A12Q",
  "key24": "SVhNDjo5dBS6bQpd3KAw1k5T8Z4Fzdfgn6ZQ5Yc8YNmoJx7J7Ty2GvGA8FC3F6c3gmbg7p1HHmg1phN8Cm2ir9j",
  "key25": "4RddfUTwP9LvLF66MfXKr5b6YxLZmunigejhWxzgnVt2cwQtR11fue6rm4Fu4KN9KtqKqQGpwGCHoJ6ycbz9S393",
  "key26": "5YSs8RmRTpw3wephmLn36SfniDr8rGK4rLkr4U9B7e5m8pApmYgacsAyRPx5NKbQ9kdDeK7DCQ5HdzghxvxUAger",
  "key27": "m824sjkaBg8VbSarBEqm7GAF8b5WecfzttnBPPWB2W1mNXQhKXuxFursXQYVtaus4HXKLBgm6dxFe8u5ytM8dom",
  "key28": "3PtFYDusCMgooM9gTP7qDNs1rU6u8dohx84EhFnQnNdAcvNFQmJfcaHA6vNqMjmkcpa46jCUBrYzgR3GtBbTTSyh",
  "key29": "4GfprPPfn4z9eH8AveqxRZ5MRWfaKfrTnj9gxcQpkxuk72LtvdKthpSYN7nebNPtc6EuEqxU4P58HMox1o92GVLt",
  "key30": "psAu31RL6nd7iAy3wCrjZbzJhYh8pg1nL5EUJr1WQuS9cKgA2qMQuLTWXRVm1wAqBkmNsVfnPtuKNQW5rviRHd1",
  "key31": "2YSjRmY8uVMTEMoban5XUGKtnMmJa2s7ipjQDv4GaqK2vdc3BQHBAce22nFYssQ2WvnitSWnHLsxfxzMsVgfHQNn",
  "key32": "3adazydjcLQdKYJHsxJK5z6v11DcNtX4hUU22EzFnNDn111zXUginNBkXEhWxncKbfhHX4aWACBY4BuLAPAnsGiP",
  "key33": "28jU3PETFEFPNzpWpJEwBSgKssASqfUAVSVCLyGFMxjHuPHk6J1h2jA3J8rrrfSv1dPEtBUAtgiZoh5QVUz9w5aR"
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
