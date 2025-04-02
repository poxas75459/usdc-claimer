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
    "24T3k16kYsFErWDTScGrABhT4WyBPDqf3WNjZKTBx2eg1EBPd3DccNpWfd2ZmdwK2a9FGCxwftq2VnjsWuerx7b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2on9axYX5aAFsE4cfZsARybEjo2WXk85nf2SH6oe3uyeRZzWoPHwixc4A62FD6kUdkdWjY9DYgMcsLDALmFvpqBX",
  "key1": "2efzVf2k8eNfq3nWchpJqivVgdDZgcCGGt8nLqzESgeBgSSzs2S5wSgd4ZKaGtmXWwJBsSvJWfSJqEmvC4jVw3cd",
  "key2": "5JdPLvCgAtxFvf5V6Wrvmw4C1cJmP1DL1sG5wzmCNsNjQB5qxxg7MQgQhmwaJy6gT5fUhBsQ9Fu1uTT6wkLFtr3M",
  "key3": "67Y75KsbvmjKp69Jj8s487WMBpX2tCtWPTnCpk6MvXUv9BhmiuSCq7GnG3qCqzatSD5NSXrVxhBjvxCkh8z7RJqs",
  "key4": "4kQAMETRZa8RDCHkgx8nc6yhqsZSFVLNkD1UmPc7GiScWCCK7QiGvyeVfJpFNn63CNS5GRTEKVHXqhfiGnnnhQrG",
  "key5": "4mZH35Mucs1pw4V4jbsbBcNi9fDgYc5gupnroSQaVj5xbPMUoNUmBULqGzeE9VAmdf7nGW6qbiuHsxw6bYmihBSh",
  "key6": "23mPxuF5GxTpGkdsvrEXRcPG7MLesM4GRsyhyho1F5rr77Z2p6zt5hksAQ1m1JnHLEJy1tqNsufUY6BynhM8GGfp",
  "key7": "5bqpqUgi2T4cbgsuHuim8BGV7kya7bHo9siZjyZqLEwdL2sqZS4JjgCm8Xx5GbiMDYYsm3GMQYEyHA1KHELaZhQw",
  "key8": "2Ly9mLbXd55pkoSyWcWG4wreNpV9S4roe2a5DqzVDGjDvEhyCeQUy4dBaF5xkSGV6mHnYAKLnSZ1EjcEeQwDspHx",
  "key9": "PkKuAxHeGXsvPvays1Q3yrGrv6vaDPCNuUJqdJRYeawU9LMuoznbyEVuZZ6aeSjycsRs6nZPMwbUrTp9JCKXLPy",
  "key10": "5fWcMeYym9Lv8vuwW4SeZ6223CSwQoJDsZGMeqaUcZvopHMwcqfpoDLC3Px9cCbgUdLL6xuUG8XF9h24rS6C77j3",
  "key11": "3GpWveY2k4ert1re4npKP9FnnWqfH9zSVB7dAHNLWL3vaEiHWm3eTCauWw88Xyz3LeP6pGCP9cVsmBstKphnei7P",
  "key12": "3g9MkxsHXbvXpYX3Y44NvnA7Sjr7h4L52KVHE8wHWKrTn5LmPATcDwgce3rGZCg89oVnB11K3evQUGaxEMD4ao27",
  "key13": "4Qn5Tnyqnk3W7ZWjDo174W9bVKhzSDNcZF1HisnAfwhdgqXspTtDu29rGfYWWgv5mUpxAY7wVsDnVNCjkQfSd6Fi",
  "key14": "2czNAurvmWQBAJt26mAMXr8NsV1fiL9biQKs98LFdTkAnwozfL4E5o99kYbcCKdbsp1PNZsR8yku1iNqtZskWtjv",
  "key15": "5Df5CJG9GMMtDsynVADHq2TKDgFt1BNZiC5oB9fFEetQetsuWRDH4f6T8BRC3JGK34b9SyFVGrJS5y3nAiCyzZJ6",
  "key16": "3ZUhBxoSzs2eBCCzocZY7h8oxnC4ixLiP5NVRQYimZGqVcDdZZ1mpEGQmexDTkNBedDeqpKAjadKV98jnvDDDepL",
  "key17": "4g9dDr8v6AyQqJgzgAwkYJ3KUFS6wXJTjrm7eetDHBV8mXuqEQ3AbrEVJpAvYS44hHfZStU47SJVx3Tv7BWgmv66",
  "key18": "XNpa8KSNMokkKgGkerjn8wCuhzKfFnutSfcLiM1MQjNVWX1ezDjTozxJiDKRtiDu5vzCuZQnVRoMKCSp1eNjaHe",
  "key19": "5ZerEMkCdpYRZuDLsB7iRFVkhn1hWQEGb3zSgr6QU8buqK2QdG3V4NwWSjbFkX5Js5scY2RiXQC5nfAkGoFkqRfD",
  "key20": "4yxrUqFZRcAEJ4yY6rk2iyNn4drsMu5tpE7zJyS2NmvoSv8kct9gqv7KYdX8yYHynXqkEexV6yMYYMyCta3zdWJT",
  "key21": "5spSDQ1Pb3zaYFGTtLoXjx8EL7TP2fRK9BMSAwiHtcCNt2o7m6qMeFTb76ahqHfUCZ1YZ8h9nx78ceoMepz7DiSF",
  "key22": "3TrNr5RZ7rxyotKz2Ui46uw1nSr99Jr1Rhri3BQc6L9juCa39nPNVKFp63fFFUknY3g8Luf9oqDEpnTQsJbqxNy1",
  "key23": "AV5jf77CRuqLRGQWrgrUbe5hcEZkZLdWy6WLhy9YQkGDtAgE64beP44YugLr9Fuc6a4kF5rNpm3KD76B6NboJYH",
  "key24": "27w86Vp14ujDFzQTyuGKkA2zxbtEKJB2yKC4KKDu4FD5PiSTn3ph7qhzZS68CfvPVwGJHk1zDSnFLn3EMU3DsZJq",
  "key25": "2AQMDdaA5JpC4wVBt3ibPALBgcEfjpSg65JmoAiYJApUspm2G1xAdzDWX8anMVDk69TyZ3xnuErahWHK83pMewGj",
  "key26": "3eBUK3xbCox7geee4Tpo33zDCftSQUpzJFepPgePEn3Dpmf1P9zbrGXLsVczvpZ335Xf7TSjkiFxapLpcAfEW3cH",
  "key27": "4xHqnAE2Q5cccydpUTBpYd3UtxaZhYdpJrqdqbya83jWa9JdTZ2jrMVtU17bACjJFJ8hGVfD6FPkqvAA7CB8M4Z2",
  "key28": "44SKR7Dts765yJqjpvnQtp7vQNRngSw2gsJ5ph6K9nArXtxDYCcFdDPgV1rhSwXvZ5xrqAHSCZ5tg47od82C9MGQ",
  "key29": "3atoYfbZS12oB9HBvWzLjpwTJNx5uhMUmj1U9FbSQFjJ3aBtBfNrgzxUNmtbrwWBLkCiQgUJA7rhvrPogSsZdVda",
  "key30": "2YooCU2EgDPQhynZY39VqLAUULfEzoZdsYu1CVdhFNrMv9oFxFRdt4XXfwweWC15AEm1Q6xouNsKGaBsgKrZYfkZ",
  "key31": "4xb74WQ7CtdzmtqBorXpdKpqttGTsmneY1EDZC7PnaRiSAWjkX7bxR4UhaAfZZWY6bccaGxmHvLd8kcAFUfoqC6n",
  "key32": "4f44XBdEh3huBNZSgN79f5jzk3PxuPCkHcrC8qc8YD4V88n7hCMJtQ8DsS5XKKDK3ZFaADJULcP5tes8JP2cELgF",
  "key33": "3ZaXaUhNWZ82kwWAWibgciRS3VosU3aG713ZsbY8DdaR8C8t9ZWmxThSGqeyqyPZJ6YPmDpaPPZfVVs9JzF7ejgC",
  "key34": "5BfZS6cQ8v2hs4s7CHZPDXneDiSpySgVTsjYMHUDAaErgCKfqzzyh8qcMgyPycZfMgqvowKGVC6H9tfYjrbCgWrT"
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
