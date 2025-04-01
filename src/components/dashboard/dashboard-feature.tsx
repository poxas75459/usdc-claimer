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
    "u9uTDMJtDui2JPxJHfRDMND9gu7vipy8qz5GH6RhdPh33tUdPYBbrhjPevtMVtKr8BaBRsTPsNahQ1bB6E4NfPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kVtsBN55d9LPX6Gn7mLmwxwmKh2yhdyBnbhV9aYxYH2mJW657ynfhkXyXaCXwMxzAznRVvSKKxFZZYj8ctYWc6s",
  "key1": "5AXM7mWa2B8C9w2EQzuTQsxdbuM7nGLmf9Z2ZsMXvWpWGcMHNdj2TGATdSwydzpK45EwURLiu5tegUyjf3JeErcM",
  "key2": "4VBntbpHhYcAgPpFWELLSmGC7vq3dXzuni3RN54R8vrnLAsoW5DAVdffA2LrMvunQdCV7FeG1Gv3ehpxX4WAyNM4",
  "key3": "qrmwFviwnJGRiFKDxKu2m89RnvwxWqRnX4YhptzYnhyqUxwr1T1QBasjHvUC1Tqh9DZhNvMNsaoVbvUt5G2uVpf",
  "key4": "4czzCoZXfKarQH1noh1QbRPeMrLdDhs65TCNjuNG8UDnXinej1sZTq1FgQ8kfNBHKe4ea4A4rz6SmQNTo1Zv13UW",
  "key5": "5VpyXSYLjhixkCyDL7BQaebtuZm3QKGpSsdZpbNrSjBD9HstZESnGVzdGdTSZiXdWkYGSXZ6Ja5hPc6KN41mD6ce",
  "key6": "5uHEU2ZeUh3kPYarf6y1gKADaCJoVEGPxAykg9ZKRaHCx8jb9SUAuMKh3ubG5uSc4ERB3sJeWnAopA7KQNBhjeP7",
  "key7": "RfYZzhPuhZXegEssFoDZ3e5cnPg64L6PyCMXP1kporbARQ6aQN19dW8sQ7LByX9JXZQEePpdAsukEKE9S7D4jbJ",
  "key8": "5VuFbcxRb2yk5df78AQpDuZJScgL86iZ7yMciMC2UkgjhWnYTfviYjgrnPAEv6Zi1qX7JFHM52ZHAL3Bsvc45Jz9",
  "key9": "4V7Mbx5h3z3v4gu7WMJicu3tMNHUP8ZkDCg4Ja38uHcT5rrqHdoC1FU9q2hWf4CuWPhvYWFME5FDM4Viw7YMcSew",
  "key10": "5AnnxGtFinQpye8qX6foAAoYrgw7xNbJg8iY5sRndMkmSxGPgeBojF3xBn3ZHvwVpSeiWx2BUoZxUHwiBBKGDM7d",
  "key11": "2zg5NXZBcNmVPmX5wfU6pgbPejr8YoLksiHpbA6PfzNB93QecUC7wXbMYkQpfEFrZB7cL9TxRGWsCFbvj3amgMkU",
  "key12": "2vAE4Fa51secWGYV7i2X2p6zEV9omcbTya4bcMDYRfPNiAfdpN8RHtectzc7gV9UpGqGHPhrpbZ5KqWZ9QJdvBtF",
  "key13": "3ZRqoMbsQgENzDMXYwdVw6x3V8wQtqJ7t9rk1QzKKw6vRNFDhAwtVgDbqB32Wmq5t9hCJQZFDRQri5nhDWfESa7n",
  "key14": "5xuN9pQLGEjFfiQW1MJP89bt67Yr8Qpx7vAPQHNqr7cuxkgNWYdVYigNVrDc3sCfNqgSqyyoT2gA1aruvD3ri1ZZ",
  "key15": "YkUrEbCrEZWvmrnNQ56xTYSLbxFw9pzJ72gp5ZNtFbnhW1Qfcs6h9RJG8zS11jyfGKQH5rVy2AP4ydo2dy3oGpb",
  "key16": "mBfSCU9HTFUo48jq8EtSWoxLBkBt1r1tsN7CrfxcgrQpDHWJ1ir6Sx5sopaEvGfkwH7XWNznuHphomb8s6WgzZK",
  "key17": "5ZnM3wJodmYK3GvQBXQxhubRNjQ633NyYhQdr4Aada6AGc4rWpcUTmMY9ucPGcpzSLMjDgsuXAF55QjRvnHWGyoz",
  "key18": "37HMhSHjR74BwPKs94vMFMStUYMcwnihno76ByrqjrrTLqYUDFKku5nLPKDyKvJZaYtcYfdgms7ck1GMEVRqV4PN",
  "key19": "5nbJHBFgSFM7GrqGhn5KwDAchXTZs13xTtH2E613cLJYsTMVy1sven1igNZbde2xxemQeuBHHmNWbV54QABhvN1P",
  "key20": "3KXp3TGMsBUdUGSgUXgS8idYeP2fYPyLXSZUgE9FVtteo95qQAADW8p4ESLvRCX9pmu9NnzvJxvo1VZXiuUKq3w8",
  "key21": "5gJp5qHjUfv6AadXsvS67R5zwWg3pqy6CiE1rDMGHoShG8FpaRku5iQ3gX5JkMTa8a5yN5SY7FVH1rv3xWtQoLhK",
  "key22": "3Yo2gsoQtm6qnuSm7Num92ioXrJL1mQp6aqnocpE7q89w5dTHdwGa4JDvwDWp4UZvpoKQEMpABbJ86uz9vA1siEZ",
  "key23": "3j6wM3HV5p3ifiPGSu488UYgeEjE2mj47ba2uJ6YxUijer9tkdCxgr7aqtdsERsFsAgQLgyakkNNTxn3yGtsf1LK",
  "key24": "nUGE2vSMt1umjdX9xYvXZzynqiucBpFjyCkNUgBNvHpLMdR7kQeRTAZoGu5TLKjALhsGkFFCimpLq3H8a7qYChm",
  "key25": "5LEhZxTK8p88Xmyu6DXW9mSyMJ3BNMH31bnhu6AMpqMWoC8jFY4RFgb99P8QpVG6isV7Wy8U4BC6cfZUkJjtem9V",
  "key26": "1ZnJpBj5girHZTz2FMeToUiwCHmBf61PQnapcEzeBitXeHucXyVxX7jChZ64CLKYGSoBk2qffv9V75RbxaYgHsR",
  "key27": "4mnKwfk6LrASSSLVu2gAcgF4aJpe1aAVtGUwgAhzAafrKeER3Xba5YwP5UgX9zfRUoHbU4KFvTQpXo7f8dz467P",
  "key28": "4sZu38ELUdzi63L4dY2peXZdywdZGC6sBFTpXKXgwJVCsyRf6wFbwaAXDCwQn8X69v27DBqMwwd3iFrg4zfKi9ip",
  "key29": "61da4fVsJZ971ZfvPNqGEBrviEigFMK7EZTT2wWTKaiVFT9EvSB8ris9bkfKNYBCGH5BBQx3PuUb8KGQnnRTPNKC",
  "key30": "29noLecF8yE6NmZBLtVzwvSWZavRvdeTU9oG8cG4MehAGyrE7X4BUc5pBYkWGSnZUeWw8Lft1vRLxGqwcvsmhVnX",
  "key31": "3RSpvx75qU7zzo7SMct8bSxk7bpVicpdPb5LvKE2qtzkvHKryBhk3BsCRQaiwarUVhPyQt5TMs3cqHMCxMefX2tS",
  "key32": "xxrhQGzpR6k8eGsqE5rqHgFY13zYoQ4nMxGeS9ewHqUQKt95rrmdxiQiwZYk11D8bAxF7gDDgUDvGLvsmKWA4Qi",
  "key33": "dsRycLBPadmimXCTXYb7UNb2CQDzptwF9b3a6bUmGSCRChLFLxsUyH85HfBYX4xyGatzDUcfjvqmr5xAfFyxGsM",
  "key34": "4gSJERr4jNHSQHHTMzMTudithg9wbTzDNGuDmu1SZXJvXCmKubdfDePLzjynTahn5Z18V3unzjZUvJvKUCwPGYTq",
  "key35": "hwSyzNaLTHkJYsQNC2KF4nKnhYpt2QmGRd5fEYHjUYisgxCNtt6ct7btM9K7cokUDVeFTCVQdX36UhB9KdutyfK",
  "key36": "5QDZ1iECVnnBzarrUfwPmMMpY8Y9eVw2bQGs1X1oq7pMNfqy6VHVZvFHWwtXMTrBTHSNfNipYmLkp4Aj6ADYenB3",
  "key37": "4mAu21B2TyY5ejUi41djSU9edC5DZm2m5gWSDW4z6JbaKeV1N9Cc4t23iWFfk947A7Ukpr7RMZ2PTf7EkhTMWD5D",
  "key38": "5eELt1WapnJqY2sEYQ1PkSVZ8aNbTyeG569X9yjjvQz33MRXzs4VXTBgk9BPuQRjro2YgruLWvcRQJoBQpWkB4d2",
  "key39": "4J5p7vDRdeVZsLjBanTRzxPRntJ2NHaLDLF6ZP3cwkcbtMEegx7bK24zRK5E9Cfv3fhB49Y5BzKcJAwoPjsYPneC",
  "key40": "4CfQhVHJ8EmiJnkGDUUDdk4YSNmjWixGHgPdk5JQY1Qk1ShxdS9UiV7gdpWnGsnMCmJ44fmU1KLnNcWt5dmwjc5W"
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
