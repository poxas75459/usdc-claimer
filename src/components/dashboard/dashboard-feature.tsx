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
    "4kFTLVvuXKw4cKgrQnBsi3CrkReuWy1ZEqixUvGTU5V8DXURnrKgQUviBRz3LHqtryE9BvMhUjeUX2Y8xq41YXiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XZnuDNx4yAaBTYoVURUrPw5LixxNwpEmnT48Lp1hQhNHBEq3YGdFC4WpFNdahc7gDAeKgGiMnFTf8cWS2QUEcq",
  "key1": "3DQ134xp2okcGMPMtm4gEiw76Av5rXS7Hoar56QVGDuSACD93jvRduxDhQNP1SfP2y6oqjzPofvhNZ54TEt3b1Jr",
  "key2": "3Fx9ah3Zy6PqzG7oHu7FHQQ5kJxUhgXyxBLvi92NF6iaDCwdb3VSe3nSerX2UAEXsYQULCJSAXT875ggTPxuVRLe",
  "key3": "4NsXcEk4mqSzdsnkZz21RRio79cTxTYQXxmeYb4cZcvLkwzoLkaJmQvES8V1xpNQcrvmei4F8kAub7smYrJd1Zj6",
  "key4": "45XLktJY1ewrhcW1WM2YcnsFXKssNg8gFdLS4VSYfu6k47B6iYGeWB6aBBSbFsrZVUiX6TWsZLZH35kFm6wHbC5p",
  "key5": "5LPGDoM69Mw5kv18qSMrNkpKtkfHtj9wjSrkoBiVcKH6USqxEpEbELn77iRtyY4LoYntCW4DPqJsocLSHP5wTUd1",
  "key6": "49kVa7e6qJjPTEtTjP9B7tQN2SsoygqJDTCaBkt5vGvHR2S61vAeS4PnNbjuqDgkQmthdEL5k43UFBPRhvTRKtJd",
  "key7": "GDVgsergAGES18GzCTAuRXDRFx3Qh3HKG4NMVdxge6bBZe5i76CtXaC6HjD5LKfVBzL6cmMHmhToAt5ZxXP9Bzr",
  "key8": "5uWZhsoYUC1du8TerxRGn4Cn8tLc9JpyoZCXR7cDA27GU4MeesDXWeoJrEMdnsSMggbkrnduHg8n56LFCFn3WN7U",
  "key9": "4gZusoNuXue62Hdfg1UvhJNQejQ49bywD5fjD8d82drEZqQNKanFJzehuWPXbjNTkHpVxYkBqvLNrQHtdAP1Hi5",
  "key10": "5R5uUXEuqoba35Xrq8Zc1gtMkR4tPDfcsPi6k8zzCtbkJ4Cp7pvZp2j9s9XLXEUfv7TA5wBvGf76Wes9HrfsfkcH",
  "key11": "6TZW9VTTGbLmU5hFwc8PNEEF7NYCDBYYu7kMkbRgA9XCBsPNEjHLwZjCpSTaBcZcFAR5NNUdrNJUd7UwJfMaZ88",
  "key12": "4QY1YwKFBZWKGi3ZaMzsbTkQwL6tuRYwjNTkoKhCzXnyLwuNPqVYTE6NtkB5Qgnqyv2Uw99R96f9WwwTbrKNZrwi",
  "key13": "4m3jhB7nLSv4yAdjCRdphR6BQWBBZSmmpSbdyzfWVZQEV7jVuZj7D679hHmH5zdUbSYmZagWjRS7deutjAWm4o7D",
  "key14": "fQc5TD7SQt3NdQEMrF2R1FNFKFwQvubEXsajVtzoykPuvrkpZ3mMGPhNURaYXMpfZ26GxbRfo36YWiYto1vbMVN",
  "key15": "2rRrtzawF9LdDVhvZggL3mawWoxncZai236BVUaYsRe8J7BsFBDVgWtwZmw6aT3poTnQzjjUS5SkvHgWJxeQNxPR",
  "key16": "3gypWWpFLss82m2ZDSj4eLcy7rGAN5y8hcNnjM7bUoF66xw2sYHF2oDzwjs9jUzzhZoFZhLbUyKTsPZpAjBC79Df",
  "key17": "3QFmpQw5A2VJtiAzhPStDwMqkpW4hj6LuatuvoMdKE18Vx3RVP8cSbdYM2s4F5hnkTENQrD6Qrfi4KcDJEESDyRn",
  "key18": "436eYzNZ9EdqgK3KGrHX1P9oi9Mb3k7y5kcvUR52BzaJgconJegYoYfwV3n5jB3uxzsfM1N6vF9wq77U8nna8ywB",
  "key19": "5ydV3rBFTE8jjZVzk9Jnmd7BxWbNmXKG2ZWY5AmT1CooqNo3RwTGuzRiudvosHefz4aEeV6ECABRG6VPaLkrrHKD",
  "key20": "4ndyyr8xMyUM8AQxSNpbvyaJfC5CN3mHa6fHzcgRKJRhFkqqEPUiMNBa6J1t6N2SkFmaarBttw1yY7UjLm2RN9E6",
  "key21": "MdjxS9KVKSgxzEJNzxQG9vhmkGvaAykoq5TxoExobZWfJFGSfUD8qquNhjDicWYhEgpXbHkFgPE5iHnUg1gsFAb",
  "key22": "5p7xkQBqHamsHzHbJdUAbvRvy4TkePZsnCUSCHtCbEvdR3NnJGxQNhdajEu69Tb4NgcuYSmvK4q7zQieBHJ7w3L2",
  "key23": "YeXSsebiZfuPp9eXm3gbRTEXeJoT8jV8mmUjUAiJqxw2RAQEB5V42DQvJoUBdHcrHtn5ipN5JAHgJsNRx6ZdiNa",
  "key24": "2beiyAm1g9wCLg7CVp2kU647L9Hva5QkPTcLLfCZXprUzAz5m8krU1CXahkWYpFYoDmFPwP9VLzTgM6uoRMqk8ZE",
  "key25": "uDmb7zjCPsjQ6Wsin5rhQ2U1UQLMTBLTXQfHMFMdK1b7n6Nh9VMHYRDriWaV9s22vt4uVmBYW31u2sesVtiBfhV",
  "key26": "2KTDFGUUhpndkJmtXqzZMA2fVK5eLeENPKiMqvqQS6vUVWCzJRJhEbeLsUDukaukRmNz8uJTeesocVvt1cv67JMc",
  "key27": "3e16TqFKgHLBfEAhEdLQ3pUshYhMNQZ2N2fvyRv3eHSLqPnCWRnPL5sjFv3unG56MrZoS5ngYthdpdhvRTsoqcvw",
  "key28": "5s6Wjk9KyFiHeyVr9KsDiMyHTpTNg6StH4iKweFydgscxRkZz1wqibtpkkraBtC7Q23S2kxLrARMvjHqrTBwpbjd",
  "key29": "3Tx3xTQtYyUwDAoy8HgckP3ZnfEJiRrjqxfzMBxkYTRnZ3w1ALjiifCeeXKDEjDNdg1FwXnK9PtBEbj3m4L6P1dV",
  "key30": "i2tbN8nGbqtD8MxejmuxqXNkDgiFNfqzsKeBHjYV11bVFPNtREwEVjUxAqtwzzDaLJ4qzmstnteZeHUpXZz3Jtw",
  "key31": "255b3Lbnk3aS46x25CRgaPq4BuqfTXYhhZQrSTDWaYQ3Er5Xa4cW9GDKLL3UKYFQcEC2mgdSDQzDEtDp1EJSVKkr",
  "key32": "61nLt8fLvbW7yrRVhFD5PgjrngW6HnpwHkLENt7bj9H498oKfyG32mpmuqcMWQaDwcXSxwN7fduuYtcKo7aCEikL",
  "key33": "2MULhNw7zY4VZ93ESvtDx1SvJbTowaEcUvt2Hhzk8ma6hvDLfcidbUoVK9KogfA67jFPJHm5nU3CxoFb8nj5J2R",
  "key34": "5UMwUVYRUtNMq8m6aZ8R3pr6FjgBogCMy4P3Ku8qrENG2dinLsungJTHURANnS7GxJszJja6fE3pYk47YtYBrvuq",
  "key35": "5ByggTKUxTpAYt8Hxq1jf5cyQ2mKdpQAy1ZXwmT8G2dHg72tD7kfSbkHZ5btQktP3JPucDTDuC5CoLgGZtygqy67",
  "key36": "37wABsBdKhi6jRawG9XSLLAfkupXFcYrnFPYsEmEae5nMzjmw4aXpyo1Xwv2zLFYFqUDYpHpGHa1YHk9VxxMVchZ",
  "key37": "2qJPX7f8xqCkugGTzrCK7zdN4TqqDBQmZRdpSVtfej1Af9HNvxtW9ye3H1bhFzHgf5LjFiUyenNbkvCFSy58UCAU",
  "key38": "2ELRsaondzL8VCDtzLt26JSaX3za5nSjrPuJDVbR55vbHaYGo49vj1NcT7AMrtmfs8WeR1hpPTox84QP7sEqQbi7",
  "key39": "5zavhDiFZvpEwuSaGrznsSqXZkvGzJbD9W5uEdYpFMzuDESmFRs9f9HkzphS1FACZhPh6hHui7quv6D3R4EB3t3k",
  "key40": "2X8aoNSi4e6UFZPFosBNzU19mdmSCSPxa2ZJTEYGjCpTeR37ECCvHvL6HYv6xuPPNRPcspvzgi5RypA49Rs6G3Bt",
  "key41": "29Nud8c2qcycgqHKFPveG45eXwzh9bt1TuQ5yRPMFniB99Fxajn9cVDDE99WAEWkG23fo86gRFheRp5rMCWGMKTj",
  "key42": "5DDK2CTHkqSAXqT5w6MXK88D8XagwNpoD4q6hVrCXzjfH59QCfm2UJYkChcquM5ik9vh5diVcJK4YBRefVGwh3dC"
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
