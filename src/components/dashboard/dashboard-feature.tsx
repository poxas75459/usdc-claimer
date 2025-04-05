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
    "3QmENBy9vw5QPdmJGzMqjgDccnrZaxSGUANBZmaJDzsX7n9QJVMSxVmBejXBXYssorhuzTTzbHRBg6VZUWUbSsaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igqdvVhJgCGjC3EUhPYvcHAcpLsMZYwfita6F673GZfUbJcJEAc1REXivBwegM4BpaLWqMr71VoLdTfabXtLxzy",
  "key1": "Whkcn3qFCAhxB2tc4XZWYECFDM3Bfy2RgNupqu7LuSwdkv2CXriWuMHS1UcdHJ9sP1z8e4UUiZHkSzng39Zc6yV",
  "key2": "34cwAkNZPmTM3FsEUBro8ggTAb3Zd5rJiQDMkktGjeAqLep1VhUcDVpnDyBBTwuKx9WxjMCZ9wVrUhJkWjqrR8mG",
  "key3": "4T3UEuo1NPT9JRHssXVpj8KgFDZkebNB9v5Q4ya13TRZBgfizEG7ySLPhG2HXuyAuvMw9Ep87QuaXEVjb3MDoeJW",
  "key4": "657c4dtxJcSzm5o9Q6S2r5fAHJKcsGSggyAuofWNhMXcY7hjYwH69wwycHWqvnfmUFHEGA1JuGMouUPviW54Uj4J",
  "key5": "5QNEPQ9dCYoPhULiTNZVe98UnU871sXn9Pa8s99XSBfRB1Qfy939pWGkknXXuSLkHmEQLy3GLqwTcUVbp1WFfGtw",
  "key6": "TesMg1P6LFoWvEaYepSEwmeCzPsnR3wG8rsp63g14v8jjrZcr8VKS4hK2kkpqiB9QZHrJS2x21SL5EsUZFpwGEQ",
  "key7": "u27PPkH9Rvyn9bHPvnZkXcLPQjrxWYwmvJoFU5PExHeiPqYb2zXPERYSso7Z9GTNTMFx1oq1uVr7biXrMhyMmmz",
  "key8": "5jvCT8TMG7tuijFKdzNzumDJW3b1v8SdQ8dfFM4L2Ku9s4LHVmhZAp52tT6KzmAoN3o8KRtJ3AaVtsj4o4wnV7Dv",
  "key9": "4rRmrfGTcfqJK7Cf3fzd1YidWGWzkqWjJYdH3M7TK7xeqCKe3G5dDuo6kY5bpdjEwT9gtjTR8H4YUrws6uy6Vjxo",
  "key10": "2oLveFiz1KadwVom3iXtxDVQKkiwiiHgUTRn9TRJMokx6VV8pNEq5R5QGYeCJsZLhWnzgQ6Pb73v3WKaYT1sV7yr",
  "key11": "2HNx3wSAJ8j44KUYEVtky4w1XrLMDWjVPQUhktUyo1tphdhuk8tfoeBdXS7pray5vGvsUehteWhZSoydSbLbNXm1",
  "key12": "5CjyL9TGiqK4QRgam8sB2WzyyNVTpdVG7V7o67b7eRJ3XvHQ7zo1VhiELu9yb2UnzbkgzUjMdQJ7UgdSAvEmeEpy",
  "key13": "tm6ZfrFjHt5wMtsn1YM5vUrd6upR6scUewgkVgJmgzakkJzSnMoswoJQR4MjpYzydi9AU8PYdachedgFsvDjKC3",
  "key14": "4WM512zwiVazqcUnudMW9giK9KUFz9sfDQwkzPdH3GhViBJiqRvg2t7xb8Negk3gHLiHsobCivhYQw9tfbuEsVEs",
  "key15": "Q2fQCXr6w7Q1Lj3pHgua9R6n2dcEW7dTe9YrbpLUdn8U4sWW56bSRwwJw7MritqDvqtJACfdE15kwKrqnabMmr6",
  "key16": "4orV9k4BLq4ErhGFdnoXTw376dioEj1X3QNEo8d3AHAuCQ3D8TF2w9wBxwrRDXgpucKNwPYso6rzZhC4KMyrhdjP",
  "key17": "4HFJSGhzDkj3Ad1urpM57tfoox9zEZJs37ovmX327At1LKDcMkeqDSLxHSYsDUZGZpubHQB6v4CpXnzakWD13kqf",
  "key18": "7JDEoxDCqNidPCKiPnriBVhTeGjd3cgmGLkDv81jkhMmS9gjhCzMoNm26qNMLtx356oQ599Dj1RgP1gmQFE3DLX",
  "key19": "4HYEU2egdB6rYDTHiTTJwxyZuCcXSaTbdw9MS2HuZUuzqAj5DFkETG4mTxkJKRmpm2w1aBjP9kHhiuaNx47ySPfw",
  "key20": "5r91Hb6Cx2as4Zc21XH8YQ2HryfqEDrYBapWqyHiMdDC2nupWBGcxJyLdt2tcasCgEYz5fUP2o5uEoUZcBpiuXZA",
  "key21": "mqS4bVknLk3n1scFSAspEQ2GuMNKhuowsvTodAnmkiEVXeFEn43mRHmwmCdhy6fSoWTU1wxrZXAjXDwdNiTv6WK",
  "key22": "4fcp8kVUKHjme5d6uzwBmcxCgyfxoCZm7rhoRj8rZFsKeia5spUG2NLM3Tr6JSZAcNBqLfE7szMQjwgNtCLBmo7w",
  "key23": "KavqMvX4aiTJn31de36VV8GLo2USY5wzMLt8K57bdbe1WspeuZ5Gf6xaDKimjr6haqCFULr6u2UoDR1JPMykG1n",
  "key24": "2EHqJKALaiphuvSgaJH21yAjvkcX2m8Jd5A3NfAitGM1XhaHoAtEDy8mMiM7BVnKj8S83Qc4NAwDyouFJfd8MbSd",
  "key25": "23GgT41VjEFeEBSFBm5nuSZzHWvwGng3wt4w6d4TRDxkvhAAAy16fATaUdAtMba4WkjLw36NAvhoWcDLiyDgnMGH",
  "key26": "2wiUaRhr44vyVTqKtqAtw6kLeKktRYijRdCHxJEN2dZkzQ44SKhTUiwcbj9Qa3DnN3zr29ZUr7ubSzvDc6dWjN6H",
  "key27": "3xsZEp4pafWUAY31yT6GHwNfmUcCY6Yy4qxMwtcmffpXhUfuUCdEyMnpUo8CEur92Y1KzB8W2zuTjdpJ8hpZKbYs"
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
