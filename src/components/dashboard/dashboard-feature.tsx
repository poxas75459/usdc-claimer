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
    "3677hP39UmwYW7x1qsaUG9Q2TnLeutcwJBmwLmkfH2NpTPCcVpx7GV6mfJj9zeBxY6Hc86D4km588UQpkxKc6xa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhFdx4zHvPb6H6nr8Q8b7NkrxcsRSeCLtkiEF9fH4GKkb66zAzjUAumFwNE4EA6a6FTiSZ9jJucK3aa5bReM7E1",
  "key1": "5CiX4y6Qv2Q1eh3hTwcxovxJUFUVjEGffSk6gxMZnaRYkuzw2b5kJZK3sHdVhe9wA65igsjLve4H2PACMcJJsRNA",
  "key2": "4GLCz4ts2XZ1jceCxpZvYPA3YVn2KvPNAjCxi6qrvAVsAGApyZxVf5PRqLhKNdXqiTWYVGgdUPy4QQxhkWtY1tcY",
  "key3": "4njMe8N2mbmkYVFGHo5iqaXFCz9YBQtyDg3qQBGGwYYowYdS3T1bzN13hhbDfvazaN6rQKYfAVepDKf7RVzTDpgc",
  "key4": "5VSfV1cKS9dNSdp5zGK2GgzYb2wy4RfTWmAnsKc6osjeGGT4XPze4aCiBbqBbWa396DJWmSSC7wZEzV8EW4B6DjN",
  "key5": "5X5EsCBy4zzhAtCu5mmycv4JKZkZo57jikVV95ppuETA1v1BfKAFrumzTaxpNne3MBd2tFdkvTMvJXFWNbWyP7xE",
  "key6": "fdqFo8YdoGA3kvb1WnDyKCdhHTCNSnYuwArTp6tge5xHZJCWkVHxNq3BVSpNZRYG1XxnngrFt6hcbky1khuoMsf",
  "key7": "434pqTWRxjnSDeGTQ9EKjy5da7atioyNg9zB6tBVQYkE6A3dBVzVxLk1ZbWAAS4s9hdYjh7RxrpQQ8V31Gmw98Xg",
  "key8": "34KU2bjvhvfd8nQrqmoDdFQNv7fbDiXeU5DNCRTe4Zb22qjuWsBbA9KMC1GMxqjFb4uXRrNGJMnbwbTkgtH6fjNb",
  "key9": "2qz1gt4jtrKDHK1K3oMTRWQv3FstHfhYW6yCJZYet5WctnKMQ66va2TembCz1Sva8sBmR21F6dFA2xDrHGeVMNmk",
  "key10": "4XUnfckmLL62KqMjAQFNkCPWTjQBgt3rTEuFAqLMNeLxhRZ5z9na48eX5Q7MKvCZcxJGKW5VAifd3nozeQTQGLG5",
  "key11": "5vVnFP7EBDN6DWfj6XEkjqkLyc2McTpjd6Sq9JRHsh2hTCuQTuerMYfVZQbNneVhYiajeCJsg2ScjUHqhWCVLZ2A",
  "key12": "4VrBiTqcfLuGa5iLYsWBEytTk96YkQ9wjTXFD37ReqqTA4SbXpVG2hbAv2d9KKfXdxtdGfQMwku43Bsu5hdmQSwo",
  "key13": "3vEY883NHw4t3rkHxnTdy9Q78J88JJxAdtvxShojYEjcGpc6cPC6qQjv9AEJwbuUxEcLLzzgsXWaeZHdYzbxE34t",
  "key14": "dKmmLnaMxSGprwRk8nuk4x6qywHrJRtQ42xLdTYpwrV9P2UHYHKcPsRbPHtKqDhKsrfmZPQCvihHWX1EP1XfMpy",
  "key15": "64LMaRYUad3X7x8Pu1KwZRg7KNvqkpMcq2b61YX5CP4VvzMBowQKbWeHRHHTjpuE5ropce81byefjHyKiNme8xVK",
  "key16": "5uE3H78Bt7mvJND8TNHJvkUtrGBMLYGMUf22MFeUq2cLaUPStrwr4ojqujh3qfQvfrpvrTD9vwojjZRcZBM1xcFU",
  "key17": "3HBK6KzoEtDYHADgPCHjNdemQZtAehcDcvwVoJP8CKpX2sWb87tyQdspJge179xSVnwgTv8dSTtUoQhXxhMygEcL",
  "key18": "5SQv1YKqHBVq4d3WytGYA8SAGxr5yvU2K8J24Cdj4fiGvDmojotgKwitouA4gMT9H52HDySMwqR52FgDn3z2xYPB",
  "key19": "3BBRRuQzm1VbuzNRkUTMVydz7HXnD9dJoLvkbfB4mAnNfAa5ZsyrbGghsGbmFM1xFWX7L1zpP1Dc75HXiK5rFSVq",
  "key20": "3rkkCTNf5ufEtonensTLh3bLfg4MYXy3i4znsF78df8iL2q9J3t7tpHhgz28Y78Wbb7rc6yG3Tc5zjNT5L8DgLnE",
  "key21": "5Fy72rro4hT8KVA2SZcGrzRS2vSajXZyEB3J4epWL5v7RnzLL1GhaSZ4LAMu2w1cbmPkjwJWjHyMa8u3jmWrpmKV",
  "key22": "3uHG34btFcg4rEH85VEyuwFs95BsH4py1osycbySJNjsaLGv7REy61UcVsvc4WqpNxnWRZrRbn4ZBJaXTbt7ZAQc",
  "key23": "2ngd11wcdyWKAKjRVgB5fq6FtytbsQsVn5zhjbAt8ufb6XXUdfEZ1p7GcgnARAkpYEa2YZkWKQF6wHrSFjkHbUB",
  "key24": "5P38cKDq8E87KGi2XJvEEthWgLTRtBteMrUdzGRJfg7Q7pNt24gESfsZGAxMrbofziW6etP1PCyrzvexQmnVZHr7",
  "key25": "4LyMjTe47iMFoupLbpLBieHKLi6zA44wHDd88xV57iji1XFhGyeXAazNHNPe3bJJatu8j3ftJQCRVVaUkQuURgf7",
  "key26": "qJF4zFfCWzmvCXmRvSoX5aMWwZ3Q4VEnBNDBvYpHvAwievbwZHKmYY1Ejm4p2VVHbU8mCboTwg6yEjn9AneCkSa",
  "key27": "5LjzKZnbVKU8uS1PmaVsb9shwhNwQNrHUrVfiEoth79hfGACCKcqSGoqAcHLFEDZi5uERokZeCuWeNHUGUDUuydd",
  "key28": "2ogwAK5V9YBuj6yp3TFYeS6GXQ192yYSGU5RSQtvdJDqeZ2H641GQ2fgAPvaEica4Ckeb8hPtrcDqAvZsH8CTJQD",
  "key29": "58wqxebMd75j7vHnMsVjqiLJaeQeqAU229Wdi2fVFQgHCfaBZJnsbbDHrn99WR7Si939kojy6eg6dXgsFaiftEH9",
  "key30": "oHqWAhyrjfnN5jRs5SvHcnQjDH9yj3AZdF7vGReGNJdgNkwDNEibDxzf2isMDL7zjM8TLFTAwLibCjctbmwTyVN",
  "key31": "2kGnfBESbgkkqna7ZjwX5rt7FaKSCeyaUb6nWLhTmXmYVRVaieUH49W8B83GAEs84256LUACNW6q45Nhnt81Ev9Q"
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
