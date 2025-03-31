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
    "4hsBET22tSE5vqsf2szDjZLUoGYQ9BEAjJzSBUZbJotsMbChobgf1jcxgTteadntiBzP5x1idYmKy36cgDkhT88p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsbspjdSwKE8pBtzG3YQpAVRDubbXJf2uFyisJdB8Q1zZvyGqfMW5zwrdFrabANdu3JPmfdUEkyZ4AnHUWmTQsC",
  "key1": "3QfiRTMpUei84Cia61hJhCLGWPmFPnYMvLRv36SwiCuiqGgpMPDgShW5uXXrif9msBx3RrDnLxn8r4EF2rBJtMcg",
  "key2": "4L9yZApb92HRLD2J1HsWCnJjj91Hay4Rk1UDnCeYyaTnyVt65cWxR9aLX2BqsUKGvJE9fLgRvSNLUbGctWDwqohB",
  "key3": "5Q1xt5K2VV7XkRMugGz6ze6aWPkZVWMYpofJwNLUQYwq6gqMpgz5VAW3VUn9GJdRRjJEPKzVftWDPgVZppUaRCbs",
  "key4": "63ae9WgUgm1AYcaQj2aW8v3FeDcYc6rX2ZgMVUPZdScJv7J3THNM8LRFsGXFXQryVZBqRLRBSJ234oP2zdk32joj",
  "key5": "4DLfpszuvrpWYXRGxND9ZSzNrJvfg76tivnPuZpCsKhQS37VwbvWZQsCoYfRE7z9isYYRXCL9BeJhXtGFjN6qxZB",
  "key6": "2ugCQL7zHt57zwyb8mjUqMSaxg2oB9BihknTc7YNqtVVaNovdW12GhaqgPmMGiGwTmk7J2WYjGiJeEKSWxMQdENA",
  "key7": "27jEQCG1ScP1iFHw5cnquaDff3endASwqUzugEyQ738PjzREUyE6SFzCwFXg3vv6ev6BoPr5u3gmoCuQf4sG4fEi",
  "key8": "2nb9LDccKaMRdK7kGEC1AdqjPXnwgHC4U5QVM7NxawqaaAKUQG7vuP7psDPXAFWpQycuH8MbbMiwfxgBP4Q4oobg",
  "key9": "Yi1noLNygqHtE5LNLNdCbRJpJWBRxD8DshuY2QVPxtpKKApyHb4cGeSeHG4WntbM85yKi5N1vT7aAxKU7PBiRsd",
  "key10": "3bkDKWZ3YHpkgA9skSwGX1Uyqqanvf5qUtGsnAz15jfwPxB1hySJ86pPxJyYrLgR626H9UcBwFnrdVFszSBWZaQx",
  "key11": "3BhHWpdUK5oKrc7FsZxqqd3TgEz4i2UXaaSYQt2ZsAci9KEkKC6aP19WxkrAENMxLUgAgSkqkXpSgBeLZ3qV7JMU",
  "key12": "4BxAXenyfz4sZWU34CkbvbvGPvybar36EL9EhTvSZse2jdsHpZQdgMgpz6yHE9XJKLjKCPhj2sYhaQDrhJwARviE",
  "key13": "5bvhfFrGwx6ckSLMEJfCQehUcSq8LncM771yTMRvbPof6ofeKwqz9VheiqyvBRFyz2DYC4DHwX4jieHWsqjbmun5",
  "key14": "2M98dScnT9E11PU6LKRkUbVmAMZSVJCPsbJ3daEQYFyH2CTVMquJWHwHdDpDzViUQK8a5GhEcw2i7MLGn93uivAA",
  "key15": "4n1vWGhQogXWvYrjoi6JboMDsksov2miA5QtbRt38iwzwbteA6hk6NJpUqyHjyaf2sTfk99uiqX9KKAKwE2XBf6Z",
  "key16": "Sh7JsafvWuMr7HkQKTpXukVj6AGfb5RJcAaMV6ZCAzxfsHJdhF8V25JBjEQXzpb8z4xn9rcq7FBfTGeVJeM2qzY",
  "key17": "23cLZd3sic9xnQvfjnzKkWX9jyP7d7BQARU7ApTqrjV1hRgPyu1TUESE6zYFQXjabzcPtABFgjrNTrZWfLPtZg6X",
  "key18": "3nHPjA2topvtSpMdkvEQ3dVmjAjvxysUzQFRqkvxjq5xK8EM1iAYW59WSgfLsCErd8AQm4oedbr778G3uvdqFJsq",
  "key19": "2YmcrAkeJ4TEAGFAsPwmKbWt9sD8mkcUbDrzGHM6PJPL3jNwpfcy5iQ9teckqHppUfrjdKi5VGJUJmwUhZqp8VEP",
  "key20": "5KSUh7WdH3a5uW651eZ85NEZR43j48kxhnUsJBVKrnw7qDAyPM5kXZRsfFVK61WB4HEmLyLoY2BJGhTUzvj77Dqi",
  "key21": "59FTNnzV8uLUw4JMG5QEaCbThsnT2Cb2HN5RHfJ2qQeE1PXbYM3tiLYrM7UwJeJK7WcAgx6gL9D5ZJbRrBdixbaj",
  "key22": "2sZcQJMJKXWyZWYmLR1KDDtZFyQvVPDqmMKv4rEZ9Y66zkcWnk9piyxMAkk5tZ7L1cbT1iUXoP9GnsNy51uXv3AS",
  "key23": "3emUUSdyu8vVdrJ5nMHbxuwWapXpyqAXmAMMQyADWMQWMDaXHEWt1omKWamo9Z9uwpB558n97D4B7AdLkq7FCoqJ",
  "key24": "2Dqc44kXFhm1BgWT9p2wKjqt4MJkM9if5oRqqFczGeTfDGSr4UbvG294BpkAkWP2fcKwVW2mgsp7HFqgu9C2vSvv",
  "key25": "31VkNVc1FqUBdJxoecvy48uXjXuGsjc8P9r26pptMdnZW79R84j84PrNo2VASTgvKX3KE1zCv8bCC1z8WXRM9LHV",
  "key26": "442VDBpemjBQnCZpVp89vvK75WoaMt4SiLo3AJbk4cm6Wznb2ixaZ5GtU3eP8BW3fV4EaLAfjSSdyW2u99gnj3Cz",
  "key27": "4ntM3QFTTR6vM7hEr48JrzpsY7uArA9muV8TLGGvZkL9NQkwch9EwREnPNMmPsEx2RfdjvQgmV7ickmy2MmMmvud",
  "key28": "4VhWyu5ypXuUoLiyELXmXBtTW2coi4y19ZJ6J7qBN3G3FRcXgzbHSL65vUpBWuvp38RyjS5kVdwkdwLSwudKd2DJ",
  "key29": "5UH2A7MBW2Q7tzcapU3h585njke9KDvJ4bY45jhyXDqL9fHTfZAEkYMxMVc9KXhTZ9g5Vcj5rjHDT1tUCtqGV3XU",
  "key30": "5WHtAHDkf6ieERwaJChM4WyACJBvedyQc8CxTc2uMEYGRfzwyACdicPMsujkLJNtVnRSwCPCRPMXh3wLPEqD2jSd",
  "key31": "5VLZSMKcf4PzLwpSmSzfftsyo9qduvb6JbL5oLfdoLxJWBwN1KWpWnZc2Gz7MxgnCfqvVtFULpPNgw7NM8v7B68D",
  "key32": "jVfYCi39Vsxn5WcdQvpdyGsNq5izJS7bLL2bk58qLUTdRnPT7eGRLuwghvJzmdWZaYygkFMPMyw7i79onvKmmGQ",
  "key33": "492S4cFxv7kS1UTMBUUu612sbYtF4dmGBuKnXCe5GsWqXxfFDZydUcrDbMA3F1XXj5mXvwxrYXL7pqoDnQJpCf5U",
  "key34": "29ky7MNi6RCw8KNprznSf7h62Q3u3o8tkJnVvv1axedFSEUjeRXAnyhEQuLYB6V9XcBKqNxxXAU1pBRnJAUevULj",
  "key35": "5Y34yf9XpdYkuuu7116aB9PqGMSEPgVf7RUUXKoszvzUP137BLqcRbmmAzcyRjke6QNRGLJJPmpsoXQkCfd1zwoc",
  "key36": "2iFjdTGYcXcQrc8FYiMZTMmrrZG1xMq7hmmyT7WC5whC1FEJRzfNsA5usbGu83aBuih3JjMDMPDN74BuwVY8XGc8"
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
