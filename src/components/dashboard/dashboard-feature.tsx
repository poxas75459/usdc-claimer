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
    "3iKm2ozaUNLqD6SLbrMeyvozBbxM5C497BVrAFki7fX7uqzSqZ9yu6CtVtB6jHFdXrCzk5ZLLXNKVxrGK12BLv89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXwocbiAn2z5KXTqYHGdJSes9aXJiHLhbMpP9zvEpPFKpHiQRFXxp5c4tZbmD7jvbKp34wZoEm3A7utnmFXXCRe",
  "key1": "2r5eaH4Vz8Zr4dUw63nXnLxvgFVq4SD39cDHqheApLYoJjjvLUgKTKwvTjDwuzF2qbjuo35Jj1kWAwmYv5Pk1VDG",
  "key2": "4T3WwpBaYapN8nP7LwrtpPQie2BLYgKKHdb55F6m1huZJzqhV6Jp4pVUuehEekSY6eaXPCQBS4mMUAzCuSkx1CXs",
  "key3": "FQDvK2q1AKDnaBFKjWaQEE4UJZ1y2JDi1mcnvBZK4giJvtSP4p1zBgAYmpyPZwrkBx61rFxtXB8QAkaHdkc96bQ",
  "key4": "5RFJdp58CCtY9aY35mAozrq2ntjfZwrB9HYiFXDXLS7cp63QuhXuNjSEEbLAE3f9m2rco9dSGciEQ6YDJ12RBMET",
  "key5": "R61qTGt7uFmGqpbrDBF2AeAXG5jM8Um2QtsWBoFKi5uUah3FNR3sdWtsxY4zg2cTGfK2p235xWysqXrDBB5hH5M",
  "key6": "4N3cUZrrZvX54K2nwLeGRyBaEvzwNgPrj49pPQNu9r5F4nZeuMPoLu8xVwuaiaVUhAgWjM8tqKyUnjUXMbQTiEmS",
  "key7": "4GVL2j2bs2g5KmtJ16Wd6wfmfGi4HjbBTF4q6vhLAacYWpfQKS3CxLUrHrY9v4ZvWWTD15TRUFPx29eg4wPkvPZL",
  "key8": "ho4QDRkwcmykN7mFD7SuM5494z6zF9jzB2WYKyshurXEx1jtX5Gd8pd8menLB12vzb6nxS7AqKwr8BWwHso1UtG",
  "key9": "kvNn11sdFxnjwhF1NXWFpc5qtmNHVpMb6Fa1zdiiDiYzgthy4UKpj2yJzfjKmr4wNVibLE5orWTozCueUBnhWFh",
  "key10": "ETbkEQHFaNCg81U5FFxM8FHnTxve6GhZ2DmywvpQ7SkwMaCd14bfAibB1LiENu2xS39EZ7U6faJnUfjw7VwZNg5",
  "key11": "3pk5Y6aSVhHoYXcpHrV4fQEpkFP9KyubZGQcP4tuePXDfbpea7bTiyce7yCRnWiBVxHUAczPEKPPstm6NeMBhHTK",
  "key12": "3o87xMAfKW37PBv9MJoarRMWpwfpeMtGvcuaGeffBcbjG9uFMTDvVYjgFN5pPY1qYLVQSK6bEAFCcqWJ9pyNsA1V",
  "key13": "Ay99SXg8UuZ8eehCbks6NP8BwQUHAmgCaGAPEYunbaeUnFRTErkY3x3pWJKdFfnSyhcDs54HWQTTiyCiw6st8Bu",
  "key14": "LdtiX6NP2wnwL181jQAuwi765k68B75mvadCzpkXJwuWDo3gESRmF44kyCc3wnGfaRJWF97gpVieRxjJwnYg1HN",
  "key15": "3MsHCPuF2frtJAwzMHBeoa83KArVYLjYm8CxQK6ZGTqvkdasvw3nerPwb6g9JQidpF9EWiVkMvQCPjkr8ErQUgu3",
  "key16": "5B3q9k7xFCxdZwXN4xqW3nGVQmPzPECme7VJHQRutCz5eRBUJC6i24UYEJjcfaYh2Pi56jcLw2CZ1F5QMcSu17xx",
  "key17": "2Wjh9yqdLebmcz9h7oaVrjai7oCwD6P1vV8Q9KjdjBBLfyFoypjkkfTarKvkMacepG24AKPtK6HLJgUz8rqMTd1h",
  "key18": "2WSqU1Mxns6bnfV2FfQSr6BHfHKnDP62fU8w7nigsk8SJ97i1ihc4wYRxDbhL2i27n7NmML2aaYSaq6RaWupUi9D",
  "key19": "4Xi6C2UrjAM1xsGVZ7f47H3Fx7qLfMc21U13ZHkutZ3ofJV99M6qT4BT3VfP23kACnMg8vin23Gaff9a1D5RKurD",
  "key20": "3A65u7WxiNnGoh8eFdygJeEGww4QQUjC6TMXmK8uiWbn4SJGMYPRuBWM1HisQPMqZSwoWjakQC2eE93a43FJkjM",
  "key21": "2UYMMKCzRchUf168DMuqtT2fLGHfL3Jn9qic9rLv8vA1SNr85wbHvacQtAnipvFEH7wHUbKTikRGi63Hd1qzi6Lg",
  "key22": "2cg9MrYcRr8MrgL6VJ8bZzwuMrkWJEvm7MKEFd4ep1ri9tiivaXLp5v6kz9GHCnoxim9GBV1dFvxxcxuJFx7Nqrz",
  "key23": "LXFSEsFBPUZEB1sVdHRFEKJyKez1yBW1ayZJB4jR76HFfuqoJTyf3mKitcqZXnDdFsQr3rTj3irqYfzFgxqvepD",
  "key24": "38oJh5jRRduUATnAtbD2qvTMcxW5tyDUJ6umFiMHJtY9YoHzdG2sNwptrddgFuQyVt94p7idZhVNB6H4ZKzQxxT2",
  "key25": "99AKrnHawYKzVNGFV28MmRnHH7fp4y6NEv19W3KYC5rPzGpEP2KtBzRNGBukYXc4nsM5kRueCZziSnsVPtJDV7t",
  "key26": "4J2NU7HSvftrCg5wzRuX1BV9kKgRRexokVPdDa5AofJNyeZsEpS1wWVFDtWQBDN2oAt8rdeyCgQEKPbpo9ZS17t6",
  "key27": "5onqhctXU8BVRmZaxXM4fiabSxQ3reovsoCNicpnM5bLdw4beMnbG6RZog8yk8x3riQomHx8Fgzx3ZgukHvQZVrR",
  "key28": "2TWspvTG3JvjPtaCsZWY7hmhzB9RjwZgxcyPD89h8XyQHxSophvxHWYMskc9818HMgdWkRt4y5XqNouoTJgx4Qxq",
  "key29": "5G8HQhAxp5y8EQsXWv9RP6yXn5SAGEDYisLhtEFfxbXdNQUJY3qWyfSrByJGfiwnXmDQnQEMnwJ5o1o8w5euvdtF",
  "key30": "4TrGhn9h9uydxCrjonAgsKDGqheFrPDrigHsRmjsXMdn75pdUcDevXSXqgVgUGK1bsr59DuuebJk1pRn7JLVfCzM",
  "key31": "3ejHwkMu1VxmVRNAJmkC1gHLfsZ4uk7TZsU5akXovWG3pM6g1SehqoEi61VQVJfJ4h1KTtYCfwhM3oo2yYDDvxW5",
  "key32": "2iC6LK4kHt8FtG4MbqZdCrSPKJm71mTEZgBFcLebZwr9HSYvo2eE3A6VDJaFWpoKtgm9TRgNLS2VyGjmhrHiGRbX",
  "key33": "2hVVyo6iMs8TBCE7NtoTSx8WPjGZnqFau7G7iVboqaKpdFFBG281gD25CsU2JsfV9WtkXJez86Qf2zTcRVFs8Bp6",
  "key34": "7sSAooiqLCa8SVQPG94vS6niKubK1tLKYKh12n1hG1bwn36WVpRD7QQBS5FvQ3JZx2yArVQjWZZMvsg5qTWDnKM",
  "key35": "LzQxcMbGTShx5N79D29ATZ3qqV6eadDwSqV3N6gNvfdTPrvWLWc7zU39bTnpFbqg2xazsrSDZ9HtqAPnFNANP3o",
  "key36": "ZfDW1Uoy5jHYhNtLZmnyZzqkktLS8P5Mkgucar9cP9VxTxWRedj9kVRsXTeWMbRiXkt3hqQm5LJGWVvQKUHof3d",
  "key37": "LJp9Zxf5dWAi4GALPyT15GmZvJLxWEQHwzeDTwS6vA16ypJGQ3Q3WmRmruQWFC1iKjz1VFaoWDX7w4qXHgsy6o7",
  "key38": "3SopxqYX6CByRxjN7f4Wr5GvxDreQbKTCgUbyezb7pivqAksENLGGDrisT8XMveWZL9VzRpr4oqqXThqmu7DWrkC",
  "key39": "3obPtzhBo5VWgpQFepJQSQySQtSdX7Jivty4j5MjzxzhKYTPHBwdKkRBFbw5YiFygjFQUtpVMjbqbLRsuBu4GUag",
  "key40": "2yn5VnLRgQgzTPh8jkJJjJPwh8RejTxp8BMHT3MJp9hDnhiNeTFTyBijtrAx44VmrRfHAmL6hwF9Ze5z3qZe9UEf",
  "key41": "3q32DAt8m344MhqZBpHDgUvFytAAkNDB3BkTtnAkFiMvPg1gSWduZvaaXYg53XTMc4n2aK8pWQ71YUyvom5qZGCW",
  "key42": "ehifcK3GARMwPFAXPZQ99XkRkKLxEbT7GJkHQKUwPrNyoo9fTtcWmGihpmsU2iSvUJ7cBBki4YYPvr4h6yyjxhT",
  "key43": "3LH1kGy46EJvip3SDiJhvcUrwFxdZgem3rdzNPvL1MhZL2vG4Q3HLmMY3zc61GnHtrGxmj2Ts3QyqU1Y2pYsLSxq",
  "key44": "2cUq3dmL3D1CjDNcjLdsANekhYBQztHeSEEkH2WP2yhtqtPpJzrp8rqEEfWH7cEjxXwjpBwae7Qr2NLfrqqXYBHx",
  "key45": "4SW7HcMQJxsP9gWqCUNQF3ej8UtdFHzm3cbCN6tqDVYChTUAX6u4Pe6AnkPRSj9p9rNHnmrtqqi8ryQMf7W6ihhL",
  "key46": "S3YJfLFFpLdqcRxYuwh73J1kzrWLDiBks8UPkQ8HkKvzf6d6XFpG5GkLwCjwUgAiWu6Nmt3BH8Jax3x26xNd6dc",
  "key47": "34XQy2juap5XowfyUzJLVfyTJVKyTHM8kGjahRtZvrU4CnCGzF7UGj8xMKj3CU1bAfrDUka5A7B9WXBsVQEmRqEn",
  "key48": "5QjAvZ3apFfnBZfuq7xG3TKUxEUuacmcTDEvYgcaUjf2DJSJBSuwMShYjVmNMjegqCrTaWRJPASDeahZvB9EEivv"
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
