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
    "2xv4HtisNUoJrpLGusDHVvtK5mDGWBaR5ixbVntwQEQmRLq1NTvBv1UgtiuKs6Tu4EERZ6TdFQjteyuuUMoeWsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QF9ZcvgNUWrNkQA6Yg8CbRgxNvtJSrfm2ebfNhxbgi2N1KbXQtEBhYsyPKKqEFz8p2zhdkBeyawSRefwk4XnAU",
  "key1": "y8E5yTCj4nG6NHvze4PQNZWvd85y1caNepb6QJEaCf1ejwzz9g6bWh89pfGJXmedZAv33t1sRCUuwzpH5Y9cNQT",
  "key2": "4gtTfAEFDjD93TJVs8WLXPQhdNNjbAQLoir5rd5FbkU8wtyLTQ2RRyasRDcrAKJCuvWiLhRMnhxbUSsxXnHYa2d8",
  "key3": "3Dr8jNvfMypUiPSpgcHTKHhnMc4oDspReST7LmRUChoAmeMqmBucRophEKB5UZSRiVKEHyfGGFTiE7NUjTt4qpV7",
  "key4": "4ZB4pdnXMurDVA6NETbFJZV1EoeB9G6zYwqaPEEcKsDERF8HdvN4Hg9656rWw9TD3UzBL5pS5d84xockQW71UtpQ",
  "key5": "5S1ZbzaX8kvx1TedQrUndAJD5yZo5Gs7S9wpfvv1KJM6sJyrCg9J5wK4Ab2Yqb2r7odcEa899s4CWeryUCm7Qodi",
  "key6": "3x64RXn2KHuXTG9dBsXFzYdt5V8jfbcvzn6sqctpBti8AbEQ4LVoiomncabePbWYR8p4uKSRUqh8KesLS1XNJyrj",
  "key7": "4FL1GSMNKZbu3jCbFKNJcmU27ZV2QqgTeeiHMuDDEFVWaqWYv6VJMnJN3HydBLctUp7ormryEVW2Eeeh8ARxrzAa",
  "key8": "3juGRWEU7c4tUh9L4zRsC4WeePEqn118sHTQGPSYUz7rQXCH7j8dUBryBeELSwueUeAzoXB8BY2cLfzxegk9PpPo",
  "key9": "33SC7T3JgyEp9GFXtu9YpNVJ3tdijyzFhrh6cWCTQXMzrRFDtH5WdtGE5BAE8XVAXM4JZKsmQ6Va2sWPtMFNTi4q",
  "key10": "zajgHXQYV3MFCt488FcK7FgYNszwP21pztnMRDUs6UiYXtB47tSxhXECVwfzVAJF56SRzynKf6wNCLftJhogt3f",
  "key11": "5GrDbF6s6mV4YPpZgfY8VUenTRYMro64vaR9By88jKkpgpr8KdZpYr5qJwwyG21ZmFfe8jbuFwzyf4G1pfbUbtEM",
  "key12": "2VRxSvxenrYggBgFPcKviMMVZmw49QPBqrXWKhR8QMTp9iN9bUUhpicZgAFeQ3urMmNRdwDsoeFT9F8uuZUozhBo",
  "key13": "2aA3kyeBDgrnbDEPTGrFbByWdjv4wHwAqHnNpxLo43cqcUVdrfrUu8MA5GjBVxTR67GrP1FuVka5pngdfSc7ZRW2",
  "key14": "65iSLhagFhxD1AE5Kp7EK2HSmt5Z1oQ3EAxacg7Vahn82CnXGweFVvcSnWbo7bVguyj9U2Rk784GN16wXxeppkMJ",
  "key15": "3KSqAWx4mormcyehpB8YMNtVL9LJKRjLPuKpdXkamPRXQmgufDrKtjgPzCgBFZSCumJd1aeyVQD5rQUdhmFw7pLk",
  "key16": "4fFYvJNbskAfJ8h3En98auzPQDf8bzk3hk9rp9sAQWDZBRbLNWQNaMzyV7HhGthJfsrEFe7gDoBwhgLhNdRPGrZm",
  "key17": "41v6gKYk5XeBKSxxUFLu4TetpAC1ukv7boFKYAmMwJDyojZvVDeUWvTyxUfpJYr7B6JmBaTXebXQzvYJCnSNShF4",
  "key18": "swHqCmv5SdCXRjDLhHJm4bAgGfQyYnnVevMGHxaVZazVvwdLaLCyqrM7GiXzC6WKZR6PefLNdjYbVLbUShytFZ6",
  "key19": "5SjAMdgixGPB1TpiCFqKezhR7vGW5ZDdhfdwAH7FxQov89caQsL6q3SUb53Fsszo47waqNJ8DZh6Zh3f7zeW7j13",
  "key20": "5s3mLJ1HjgQY5p7oWqVQNG9SzCwxeBB6y51Tcqa3oVW287wDvDrzaC6wpfsxLwJPM5T6DK5LUy3XoZMTn4dfWV5T",
  "key21": "5RTBBf2UihRGSX3cpwjqgwAcDSSCKBEuRxt4qx6A8Wak3sP6iV87CsPTdG45hJgHQn7gL16GqTppsbbg6oZNn2DW",
  "key22": "5QqTVpi2NNVCtWC4rvmWAx4yn4TfEJCTCjv58GxMXdCKM4z555ZoNi3qgXWjn6DkmKFJe51492nFDVC8DbtnQWDj",
  "key23": "43a3JHTjt5yPnRimveH2sfSmAQXMWVVNxKdiE5BjsTPJV69wbjci4gABLRk6qeaQEbh8Cc87XzTzqSzboFSPKrWY",
  "key24": "2etAvYWKDDxWQRm51m2cgexxMr4TMbpAU3QENqNudL9PXXx4CSLg9nVUMaCPkPW2JgMf7Xo6ukQvQLi7iLTHkR4c",
  "key25": "3m9vBtL9rq3jTtZcGbwMSAnypmnWSv8eazGsvCCyJKrtV6tFFyRJAYizHFJxBTr1KZntJ2JPhRqmpPHxNoeun4mF",
  "key26": "5TNo2VsHwKUtSKvb33h3RVB431d99HvUJZbdeRkx8uyLH9G2PLVb81C4VH1fYNEWruDGS1cbtrfsNUX6xL857Lrb",
  "key27": "4pYwrT4525Luf4EGdD52E4QDfMcTEUvfUZK8xB1a53wjnNqtaoqREYk1ScFjWHSeXB2paE57Tn2K9GLEh69MRni8",
  "key28": "5ETvYwtEN5jsLovHJcwCqCgnGWoXhujomqAVn1arQCS95hVmb6JxDuAytjUc7Xq1Ed5eubt1b7J6JV7fRJ5bpk6K",
  "key29": "4zUX8s7dFuygNWsdFHq3wPm1Kr9KHko45UZCHnX5RbFTGgGqbEWyiv4wj1dREQnoLBdMDZNJ3xdMbG7HRkS1rpwY",
  "key30": "5PtmvMkm2CnQiUJxNjfxBr8GqcnaCNAxjg8CFcy7XUDcU7syLDEApt5Zdj3MchDGtSsstTjGetsKQbfrRHDBvi1f",
  "key31": "5u357EAwJ4jkQLS1KdykcNEuYYiBoGoFwroCGAEjesXfaAWemF8UqGQWvLSpJCUPbfpzs5SEnsZvLJVnqNJGvToZ",
  "key32": "2hnvvG7t1yVQRvVkZhaWyadjVJXWF1VxxWV7ZJGqX97r1pCH94ZWxmJg5t5cjEFzBk91mGaB62o7PqUs8o3NsC9q",
  "key33": "2o3a1FTZh9VRF5XvB5PUrW4b8FEGQRUNnrFCpdXWs9AqSSEMRiq3gfpEKiPsCCFwyB9eQ4kHuKP6WZmvdwx9mftH",
  "key34": "64tiFb6ogHi5zJeM7LNHz4bF3MVD2wgfU3sV9cUQyH9VBVW8YukJqWNs2zSuwkMZ4KrX3CZKrRA6sTh2WnURuNJz",
  "key35": "7hRVoCNhysp65fqtev7VAf5euEWmntGaExKSs6WBhKSj43JZUWa6hT6WSs49w1ZP4hbrkjgPmtwu5JtjNcpAmcw"
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
