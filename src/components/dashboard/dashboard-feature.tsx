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
    "5Ld7ZEG2M1ucxKz3KhDuHZjyvdS6DWbu64j65hAtHmgsie1HbvVuEZKiWtqZkboMpK4xabBBw2Ge5uvFLXHqx9Hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fff8DnSDMw2HVJsfuFjQDij5SgmEFsS8zRuxYsuJpnc3URs4TNWM6BZkyx88AkLw71cufKDWw6GAWpUeGDFPxoE",
  "key1": "4vthXKPyACSRRz1y3GvFDqKv2mfXAWe9cckvYP95HtbeCbVYe7tN1gVgs543MtEAMHUZjmoAnEMJ4sLJGdhvBswm",
  "key2": "d3R2hTJsFYDVQvbtYkQjyxs4puoT5tsf5ydoHnayXy4dWb6qirt7oHzW6NUMoN6TV2FQ7WhXcn4jhfpKUM5oF1N",
  "key3": "u84cxVqZQAKVP1Bb947qfbjyE3fXHgjW5AKBZaiJ8pswPqMxw826ERgcqDCL1ZHLNqLbegoq7PR3hXFAT1uFCzx",
  "key4": "5U8vbRkwLeye5qNNcaK2pjvoPviSnveA64eGWJFPSv3p7pFvYcZTavsNg5h2dvgn37h4q2SWbMLzppzZd51ysXwJ",
  "key5": "sxya7r6q2EMXjTuBLpo4GYdUxQpvST5bSQjpARiKsFyhhTj4VJmwe8hrrYvSdrcmCNTdazcjSoTg64bQEo2Vo3W",
  "key6": "3YWAVzeLdVAsLjn58UvgsNfj5nUkb5pvvEJteype7v36qEA95HjaykzbPRuHkWQZpkBzAVTDZyjcT5q9ZEWvBBRK",
  "key7": "5xZ4heR9upRfQGz5SW5cwwG4QjwgRmjxL3cutYGDFLXjeZbnoHWAYQ3qRsk1TpkpKzMS3J1jJnVtSSNLxFECeG2E",
  "key8": "54Qjtroggg3UMXb8Lbgvxr4QQWfNhL4uJXT7caWKf6uBVHZAYCZE1u6b14vqApYqt7rC5pfN7ab4fmnTu1MgDTre",
  "key9": "3XVekhCUaS3h782S4kPqyj5qzHB4p85cy5K2ws6zK7i5bhFtCGM8ZN6ApeJ9iCD2s3BQn6jAwoz28gyjLXbK8qV5",
  "key10": "3zBL6vs8Wmciz939iSeocXdcKkgc8NiGT8rbbuWsTUbb7n4LqHPi9i4i1Yiveh5kgLPWAmHZpBvK2ZGMSh76BZVK",
  "key11": "2PVbW2udkmYSv1prRzVyTZuC9nXJsHiFXbDmCCoihmzh7z3QzKitJzbkN4cZbeLQQW5kvh4TZYqsL7aEyQhYC6Ja",
  "key12": "51S8DehrC5WB1J9Usm5VtgmKbrUNNnjJSg9QiJYCyjFhV2smH9mgmQneYVeKreQZqLqLafqCDB2ibNiX7eLYAQZ5",
  "key13": "2ZbMuTaT5m31NTdvXPMFqxuXQrVvY2xkV6jA7MGWNn2vTEPDU44bDMBvpLToCMGfQpxPmrS9SJBmGwpCurECJZNF",
  "key14": "3e33QWqcP8LsgsJr5Umr3DnvGMmJ8DD2VBvHow1zodWrZH8bj1etMU6e6WyxgKiUYPQ6ZHrJaShnWG1gXSN8jyHs",
  "key15": "3LEH86DxLAYt1eqH3roNZBkhi9N2Fcw3jkdMtPgkrAt3hRgYmZSR1aC32rGGnrDGznPKAnaRFYYknT95bTgUjLDW",
  "key16": "2ugHvKtYwJ7KYT1VkxztzLvbpKPS3XyTSaaDo7diJ3fPxcDArhmsEZQfSpNE2CCvaawdppfgRbFaX2RhT9CZroxa",
  "key17": "oG3ZxGR68U5SS5Aa5ShURar3NuJTevqYi3JZMic6BcZqsAQcutw2h311JVjRS3T5EfZBzPveGYStDbfpJmhB6sh",
  "key18": "45fFHs1XHRWkBxChXk5tW6Vm1JLP61utfPRPm5DrrytnMzQ5Xi9M7Fy8fTsB9SVhwiqsyaFDJyDsPKrxFiKEmBiq",
  "key19": "4GJdj3zmS5eP7GvaLKKYUe8rKnj6ikZW6yTQyiAuAhTVmsN77mzweTqunfVV5TMSsQhcSW3WnYQCu6qHCj9PzT7L",
  "key20": "4QKSyR6F17UUMBbpSwWMH97gvpSvCh2T32toSZbxs8SQ2sYLqL4udW7RSfrt65mcwdaSEximQpq3YTQA9PhYAbLJ",
  "key21": "JSyRPSeeVb6UhdBwLQcytE8UBSdpF8U18jRCVWFihwgW5BxB1SDMA8xXqSXo21UK6udghHwCo9Yr9eDTcJ4MEra",
  "key22": "2RRBesUJotMQYJT29JPDJWAWLv5Ep8oFPUN6MjbTMAb4pb4S575AAhDyCJbZ3noYhPZDENqi2jjSRTYq7BZEzQbR",
  "key23": "42Hbxvn8p6qqeiQeK5ey1jmYxCK7zY5a7qkwXzwVR5b2onwCSrfZTYgvBMdeLjyJ3b9iEbQQeiPCniRWmH1mmks6",
  "key24": "5MbJMxHGxSAMD2eNhxrtnX857xNYmvgzsnMKC7J9W2nN3ZcN4chzySgehMvbsw8a3esfisbPRMVaPLCNRKHwE9F9",
  "key25": "5BqC4jZYpCF17bQpi68sjJzvnXGyoMgSTp5rzcSdvYSLnCnib2EgfSG8WeyroKKf8tzW37K9oajz9ZhW6gai3ncW",
  "key26": "2bQzPQykLv5ZTzV5ZFLcFnpmfsQUHdAEK1VNTaqk8C8pgzr3mx9YSnWTQr2q1aRMy9XPLkyTHG2bViB4T82rVZTJ",
  "key27": "cUAA5VyMFFnGbxQYEwms4yfLUsipJ7s3ejnXLoeDudEcEeP3qpqi9eTTkTriuyhL9csp6awTV93ZnAYs9aFzgi7",
  "key28": "5FVknHkj3BypQWVbDxuRRfpWFf89oMDC96NxUgnba6rSUxbkXfM3oACq5i8LVE6BcXetULfhtALAcSjuYFNw4Jj1",
  "key29": "4Q9LFfb2o2rJcQfiDqKySL1DhrPQNUwxgqbjfRiCvsTL8szRpwbBZneXuiLw63VxtgubbvM5A1SsLrEUF4FtpvTY",
  "key30": "cj8HMcV8HvNfDWbo6urebrbVr1e7J4xhkJb3y6rV5uerTYMVGqtD1FiiJqmJCv5mbw91axbFN6goXygRH9yav2C",
  "key31": "3j43YuABAUWtnMC8iWBMHW6JGEHjfEmUBsEbGFk6S1TvCMEjc5gWrtpfHLcFM2yKqqhax4RXrDFf8GxHDQXy9X55",
  "key32": "4LkueZ34n7Q4LhUqsJbJzkKXcxFR5vva8ripFQ8capT6ggDsK7mYmohVXWyRb4hgqpdLuMiQVvzMWCouxdKfAARj",
  "key33": "4jrBuBzG3UDqtf1KhDnAiUrnQrS73CZAAXJkc6GYiANgBKEoMvak9PfWkSUx32ZZDV3QKTRmSkGGzgNYs37WYrYH"
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
