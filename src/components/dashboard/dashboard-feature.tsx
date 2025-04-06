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
    "3W7QLEPpbpCBfvrp4J9GMeznErCQFmiNYCdkuTs3xoHoGkxx5DRyT9hXim6C7KXS4ubrDkoyYdr2ghjK93rKu7LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xs8nzZkjcwBUxLUnqkfiUguQGLmY4yqBVbH7FpSDxED5g1fPq7xBGwNhXQT3Uy5VgXbuJmUTnHMc3xpc1jqmaxB",
  "key1": "5Q9yP4SGeMyb8dqK21QzkrEdjaB8fcqFfNrWAnTs9Eg7UmozbPKENtpE4pkTTpghg7RLFMNCyHEzoZRkPenTjpWP",
  "key2": "5uErvF255ohRNDs3ma4sAjwd638m9nkVXsLokGAXPfraUpm2M2RE1TrniKC5jKvX4x25gvMHWPvGuA6C5raRQMUi",
  "key3": "3DXqbFqPqYHFLSZXmniLePUkburADkKqw3F7ymssVLw5aUtAuMPwRBDKvBxAoVWFm5siqkw1qCe5phrwXurnvHtv",
  "key4": "129MJdr6sir4t2T9qDVrr7tkzr9tKmZBoQiLDLf1aH939tG15cF727RLmmATgJSXwhKcWxB4D6eNDY7UnPyy9dNE",
  "key5": "2fug5Ws5Arz6ULqgujkoPGooTAMYXmoT2nnHfEqoi8bGfrwJfWiJbxZm8PhHuNS6hnQ2UA6amiYNqQc2WFj75Pto",
  "key6": "2mtjmsQVbxtaoffXxTAwvr71RjbuMA4xTbtjigHDFdFc5ikpRxFRCsoVGdFFkfUXCXATALnmDy58kgs41SnwCHXA",
  "key7": "5zBR8QDFj5TJwwojXP1o2tpyFmpAvyQgbMa9HQ1DZhTVd7kaQpYPKtTYsMHNEehLoyx6ZxgJ1RTsqUzKCbX9tTBb",
  "key8": "3KEVR3iHLWBvpwmCpFsTy6MUYiVWvFq87FfcKpbb8iQXiUye48f549LgFeEuHV9CwnNXtyeTuHiehpSkV6rFUTTt",
  "key9": "QDdHsYKjaE6ydSWM9TWRS6BNjUGy52hyEBTFfDoJWGAN6j6tMsQr5fvLZ8q2SiBVBvLKdXQTZVs8gf7jjzUpCvd",
  "key10": "53kQtmXEp4avbaXFzRud5jUbdsJRJT4HZzV3r5u8gM9cXfNMGHQapoYPW9aAqQcfMRbshtk4s75TNMoSELTvrDH8",
  "key11": "5zrLySNvjdjGgAXfG3EACDD3Xa71qLwj5e8CjnN8gtvUjpWN4f9Y2uTULkuXte49AdExpc2VwnwWoCVFxf4kaLaA",
  "key12": "5xdpgaXhLT1BpckGRZSpA8V84xJ4JAxB7zZFweHw73PChMPsi98rNMEYTE4iUmBjm1VqFD7dMoekVEqeFQcdpX1D",
  "key13": "4JCWU2EYNZXZa2GgaKWFxEtRcnkJTvuMeebZE6BQr9RsCXxVstibphQCxweEfyPCYkJCPRGqopBF6ZekWJF2XvJd",
  "key14": "4STpt8QC57UVNcEKpbbgvUvCxabmUkjQtvZ4HZ9fmLPP8kUuCwK71QQXk4j5mnBazKF4L2kF1o5ZtMYKXKGokRP7",
  "key15": "4fMqytjkGccN9e9UUVTEgvSoTyzLNeLWNJC95MohKEpWnch5r9sv4QrSvhGcSd1Y793K7gWhHv4R9f6Fbasqkg3Z",
  "key16": "Cr2u4JTVwPmwPzdnw2AwHKsRpK19cQoPs5nAZ3ztDfQkPk5XLiRJKR2sLNczDWTSLfLkW6DoRpcwr5uiUu7CP1t",
  "key17": "52V9r3fJJ6Tiisq2Ynt9pZL7j7MWTBvtyWo71EPgMEhrXUCYFFBL7G2gVeiMW1qwUdbQhzWBBhBspWJotxyzXZZV",
  "key18": "36F9Uw72BfCpYFwmnm9Bc8mNZQgTENnku4xpr677PDayKR8M9dXxDFSfwEpRvXugh7grcJUppjCRDoAaQmiM4xGy",
  "key19": "3U1JdNF1c1AX794w6ozryv1ZAsSL3UerCN97aqnXfkBuQWuXWHjUK4o1jLxGY6ASeMymef7JuAvjREAXFdZvpRTz",
  "key20": "2upfHQYBnaCwPjPvXxZvnXC1JcvtV5DST6h91sxUtS5Zqsn6aP9iMqmAefxwYB2QGAN65PU5pWFDWvNEvuNMnghX",
  "key21": "3YaKfZrfY9A5d7XqYgiiDFsk1ANyPzgfPCZWAZb9qXhvLCYnLGj4QnuMuiUVsNUoZERdjo5vbLHsNPpMnqRMwhBU",
  "key22": "2tGioiWTRY3EbGyimCdsvnUGQabVUwxGZvPyT2yB1gZBuFLdwPDaQJzxZxj2S47cEHvavSANdQqStHGJ7YyTSMR2",
  "key23": "4pJZ5eE6P8yXxhNs24jEmV5USaVdjS5hvC9FYc67PcdLv3daQkDVzQxBPDKcyeGYpJ5cjgTQQAiPVA4Sg4E8LNDQ",
  "key24": "5zDJAysoV68ubAMT3vJEyoNJh9DshhbWWDDzGoSoT4tZFduGCURBxyf1CD9tDYCZVz2QJeSksBuT6wYCgDfZsMyj",
  "key25": "21Y6cNAquKx4YqUhdPiRi2wVEwGTTc9CWaUSut932BFCV1o66jYk9mh2uqXSX7QUVZSSUsS17h57Yy6bBay6xtrH",
  "key26": "539gnjas7w4xcgbWkEncrffYuwtB8cVNJ9RonqPv2mwYEEcrAu7SXFZ6xrxP3jVE1nCq93NAZPDgX5xRnFguB3SN",
  "key27": "tjLcGuo6xA5EKtvhipafkGKS7G7LtMgxF9irQUfg6S3o9As9Tk4m6duEVUpFWLy8x7VprZny46yiEFd31KjhKTd",
  "key28": "DEVFCvUmDwkyEJV4s7SRCyLv5ujWt6QXELVG7L11865eoxhaqx7nAQN17zS96dE6XMne8DaQPpYwHhGjobMf5dZ",
  "key29": "5gvA1F5jNBt34ow1J2bhdJBypCnSfYg6A1rRjMJcVWDRm8jDJiyXB9XvBnMcVdYDweqgE7RNw9rAYiPXnjrjSbnn",
  "key30": "4jwbr3E46pTsHQhjNL8WAveYj8APNkeyNkQtSQ2AbEAdNbovZdVMvGsVcbpKNwdnrsWfhCrrAHsKkqLJwf8NLjRm"
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
