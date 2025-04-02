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
    "2ZXDneTX6WxkgkWmUaRM5Kd2ga7Ug4HcrLCok4Mjhz735zntuZfkGMSxDyzo8MwGt9zXmbmsKj2wSPvo6TCZYqr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMj1j3bmexbwQkQB95me4w25NygAuGx9Vcwujf2FBhH4m3np41v4u5daDKMNSHdYkjyRD6F3tT2NHHYu9RzCitW",
  "key1": "3z2M5eLBQPcSVn76AuttFc1TFZAnJdbL5awdJ74k7froay5QtqKQvATjJFqfSL9U2pLxEH3yuaEFmLFNoedj7d8y",
  "key2": "4xiWQdXDkhvCxmKgQ8c5AEXsyJQ4R3JuYxTkb1JtsEz7uExaLe4N5KnAVKFM1JsYREwEwD3J2LBtHhuXaYZaqTnX",
  "key3": "2gYkpeFCU6doKUM7od6tGw24eFt1rg9V7hmMogzb6Mgbh4Yjz8kZke93ZN6yvLgxsa6KF4ngLuQNhYYSZPUHgoGk",
  "key4": "3fnbBEy9pYreiAeWnyKmfLg3sD3aJT283xMS2yTU3D4h6g4Zh2hC9YnEF3dAmBKK1FoxD6wFEcBgjG58TFJgS2bR",
  "key5": "5eesmTKcD39FQmrr5uxjVsT6AW25FRA727snH7s2kRixLNAvBLYKS4hvZRPxTR4jZBCdE9n4pKXvjdB4kRpPqwVV",
  "key6": "3VhuFLr5Gjxb2fV453pGvvpWu29uLmHBkfAziZKjD2naGQ3KvmobEFtF1SZny3fkJagUj2Ax7sWV96YYZJeaivL2",
  "key7": "2zFUxBtJksUkYBbBm5nmcwm18vgzWn5Dj7dqLcYp9dZdk8L4CWSC31mmhcbkj5Wq2z7LBfoPTj1s1Bg8M4wJ5TA7",
  "key8": "7oGmip9x97vt7pyAJDjQWX9DWtDAxyCe72rdrzWNYAhEoh16cDJhPsgC6UiYpAw5XKdu8YW4jdrQfJxKjobKeGd",
  "key9": "35J4aoPncby97J3CupfHEA5Y1W2VMCQsqGBzA1ZE4SaQZQvvciHmJdpUC11Nst3fxHdA9qdzeY7C4fuNxvEz3iLb",
  "key10": "2i7WfZJC6MQ55w9FZZojo9vNprGTKmXDpVUEgCiVRM1DYwiZfg65t4T1AhAi2HSgCSB4KCi2hhPYQs3cjYn1iiv3",
  "key11": "3s7KCAiMV4x1UdorbPC4LdZas4u82KGUr1LAnttYTAfKcQ7eteQ5SYosb6yHSrbkLht2SJGB4L6yYQgQkPvXfL1M",
  "key12": "4A5Y7NuQqSx6oU9JNEmJwjzhSAq5nxB66NtXq5KwLUehHSp3wfVhdA8soVaTm4ZGtYzcq8J55G7wRTzQTtpKtZjj",
  "key13": "Ro3nZSrsZgocFa6W4chwstSaQH13dzuPAf9MTLdQpdF4TkCF4wZnPs2279ap2HtbrFVw6KQgLqTbsZ7R7n1gQzp",
  "key14": "2vTGj9fmrvxY6qvHLkvAknCZB1c6ZdFPtxnjMgJNJTC6cVTedEVqjCVW3mCB6212T1bgAfMiekjfkArToiwApaet",
  "key15": "4L2mpxAfwjFwhQA7sDfQGb33ksVEPJpFQ1eNkfmNadXQwW5LxgXAXzk6XJCVQjKoihHRhxQm5cHvZRY127KWtmX4",
  "key16": "2ADB1w9xU6jPPAdVp52AzXfog3qihBaSU1EJAjhydTe5nPYs2EZ4Geomvh5trUQiunqmvP5n7uKd3GwFcPVnXW2n",
  "key17": "ijNA73Q4boCgeynFMjsSCwDQmpZ9SaQSUgEi8hypeLWTS491WPbXseKQGXPgev73dhrjsRn3JxgXwDLakzDrHws",
  "key18": "L7259wR1ejtiEJo537Tg6jus1U4qrSztLWBJqYpG45n97MEm5EFBDx4mNcJUtMSNVesPo3WmMypTZvb4dEw3Fby",
  "key19": "2n5bwt6FKW368KGZP87jVWFcY5rGXKPbzSw19TsSPptr8m4BFPxpCxFz5qnxzPi2iiULbdFc1AQ9pGGazhRnJp9z",
  "key20": "rFRKfkFC67bUwLag5VP66QzPRXCBDhn3cEf41pRGSfiCttqvNcaTALTagNrpaiWHU4LtSi1r5S9p1XEheEmujzx",
  "key21": "58PfrpGtbB6LongE4YBS2yEZTvB3nU7yJksPeEiE4zt9CER6NxJ3PBo9FNkbMiH2BKjXBUj3UJQ7dqEoTZYBwHJY",
  "key22": "5Zs4G1oFZvtX4bzXEF1oBqPaAZfDqiywS19tAQEwhR31G4hjmi1P5n3i65aQPue7D7w3dex68xF4L2TqTnxKaVZ5",
  "key23": "5C9qmUTe45btgiMJjT6oh9soQPR7jPv3kvg4xy9QPjxdyA6rmLU7aV5mWpukMU6MKStWkKtVmr3QYz2A6koBXEaD",
  "key24": "4v9n7G9BXr9KYivAuXhJL2YAZpEpzyt1XejfkassHZvK3rRPUzHpVdfvwAob7EL7BYzGepCcCpLYzbVWjPyEAyoK",
  "key25": "5Zubqm8A61AygJp6XmttasJUHkobrA2M78fpPu7naMXmvsk6KRLNBHiPGjxZq5Bh2zbZSz3pN4EX6rV237YVnaQS",
  "key26": "2PxD33DGKjrxENKs1k5fAtASz88G1T2qv2KjJ2UQuAquEQDUvKydNdEh59MGjRpCuswEGb1NKjFX6cTMCVWs8eKY",
  "key27": "2AKyP2zC2FGk6omqRi9gJtfVuEsSfGwEHKmPjAoEeCD8otWBjmx5mtSbPKz8p1XUWAZoDrZ3T1TT6fP1jYtn8fRp",
  "key28": "4WnPR5X4rpXDi15B2fXidBkSr9UgT6o5GPnYpnmb52eBZhLYnSdY5Ai55sNvwPerNkSMeWsXd4zW8hJLyf7hSnJo",
  "key29": "iBzJYLArmFSCs6SqRFKYxAq8mYnFvgqK8fLCsUYFLfB8XPoxDR9Q7XpYTrPKDTQ4eR9tsr8EdYTwpi5WHZXVaP2",
  "key30": "27hFLbqnNCyp14eqTvtW8CnhXWk1An8HocQ7iXtXfrsSuQ2SMceQXw2RxbFLF9iXhdtyP6vRUi7xEinzCo81EoP1",
  "key31": "3UcxzeVtbwTYDk9iygdwk73Nw84P8NyNPLpPDkaCzHshNBPavUuMYJuwqEWrK7Gg8FBZHCoPKNFPBD4UZ8mo5hXx",
  "key32": "5cmQSNDjG3AmjL4PD3bU16nUao1SpRu9trvmss9wPMrLC7eEz53YiddvU3LE6oemBWmN7zshFN352dV3fgsLvHJ6",
  "key33": "2HpeyefKJiGGEtXwEYQzouSGYdd9mHj3Q3gyrfQLyAD8qKUZepnEsoXhLYw517yzxbDmTMNoAueCH7j43YDtDmBb",
  "key34": "52K9VHNE3DDJjwyus8B7kbcHqtdunEwvkp6Uy9qZJqtaLhDJa75QgqfeiG7aoX758JZJkV9qfpChRpqpXNiWUcdu",
  "key35": "2udivXDXeuu96BBnQKXXi3uUgx89y635VBB93MB2rRpnMBxgNtAiX3K4J9bbHzUGK6okgGijDzDhNDX3gvoXoQui"
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
