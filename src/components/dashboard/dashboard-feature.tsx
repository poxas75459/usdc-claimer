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
    "5ZrhP9baRWTq45kKpJTTbcaFsh6zWsHQpTkFhAEAfxQwY7kGua46kK9QBQzb5Cdqruj32XDCFDfXdUhGxyTqTHQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GrERTmWMHqJkoWzPqim7yBEexkTY4AEpb199tEjsm6RfqEyTtguAov7nkK1A5RkSfcQLMr8C51iv8TQaw3Jk6Ck",
  "key1": "2cQuYadnu9NiBVcnuXigRfAgZQzJBxmYMXi8wyLQP9jzVfKBycYoBafEJrqsZBXudhwSQcwHw1vd4CxRa5px7bRV",
  "key2": "cJMH7TQptQ9aQdfnj5yZuUEauLcgyG6JeNcSdj1xAK8HLcoihEgXYDZu3xTnQQrbhxqMnK8jGmUuK9oFzjwuGYy",
  "key3": "2oNnwdp3Fy8nQ9ttKzxga5BaZNoY5mzBNyJWKVra9Y6gyTFy4QMb2yGi2SarzBsjQaMRSH7LDc6WqqM5z48MThKn",
  "key4": "2hqEePr3HCrAAVybENNghu1yux4djHXUmdh3qBWeFiPabJFExLB8cncXnKT4WLTaMhD127h34rqBYTPueYTfLe3c",
  "key5": "5H7HNMf9wPiCNoqXh2LUmpXFhsJS7sKkS7TEUYyWaZaYALBTxDuyJFvtDogxowXMdVusd6KhUt7jHwgtMCftuUQm",
  "key6": "4D9MNKpqU3KxDjbXXsvsGgTsFEjKMc8btjpb19fud89TpX7gUkGjQkqAJAWvspJ3J355FYwSARhXA899pFWz8d3n",
  "key7": "o75sS39NSSjaYJw7mRsU2i7CiRXZxj1aGVoXm3U8wPQUdFWTwHCjHH1cVTebqC15PRnr6cYfewQs7f46hXt3TPE",
  "key8": "4giYfaXqpaCEqDASNqwTbWJfUyj7hVhmmtb4gCvTE42dv2KbiCF8mCBuLVbCfdUJ77ceqJhh2uCFUC7nUhysALMA",
  "key9": "dHpHfHvKnN2vBfh6T4LMYaFGtrk6CzNYRqGCnygUdpkEqQwhYpoxyxJSFaEMCWJFfPa4AjZdMXckpt916oUsVRr",
  "key10": "2P83dT9bNqDcAFhYPSkwTwxYFYhHXKMjHg44JQUkSgzHygj1HV1N5NB4WgVPTUwihDDE83hbUuBRxx4iUqmmHZhi",
  "key11": "5sFgpmecBMQ9dwvqWKJDnHsnoa9ZFwPNa3CqBssaPNiQAMtGC7d6CVuKbHYWPP3xWP55vkTeEmaKGGhgtPisZAgy",
  "key12": "wLsgVN37ethMqPkJUmKR7piuHu5ojTTZsnApeAm7XoBGA7rqeYBXMhC3riXtH22RCGpW1LeFj7ctWENRg5ogNSv",
  "key13": "MkCFwQwqoQ457oNgu1JZqvBvcfLQkdUPLGaPRtQVjvAZBNUkrHmMvN5vhKyUGWMPknYGxKYQhWeXsADgQcFdN44",
  "key14": "4biogwM2F4o1AXaTdrWneaJ2MzcGGj4FENnHM38icwhvv8z4ZbuYFG4C891J85gW2EGDAuoDyt1EXjrUwyP4tMge",
  "key15": "66U6agkPCEoYzUXhqU2PU3mA4MdwucX2Dk2VQZ7pjsyUxY5sVjF4AZEhVpMPV8KKyVXZT2PLFLNj6Cj4LfPEecrb",
  "key16": "4B2q36bPJtzk9FRNtQ6vzfMs4WosfztooWG9e6KKaaA2C6Lwazm3gFfYq9uT6cvjmwmuirmvRP9RW1yRVeGP4TiX",
  "key17": "2e52EcwoH3sQhTJYBVvq9fdg37Mexi8BxixbNJUz6d6eASGkAx5cZb8qL9zDGnZ66J5nxcFR9VSNEuZHC7RgZ57m",
  "key18": "36joRLTXPzLNYxpFE4be9ncUPcdyqH3Z3Xmxoou2jCAkyGZja3R416zDojwrdRTXn6Ybya9zushjV5vVAPxJsCNU",
  "key19": "eTKMaUSsHefsV4An9vEgX9yrXJXtsA5EXKUNDu2NFCmspMPhMzEo7pCN5Y6yjXfsZjFtujgBzD2XbdEuu31nswx",
  "key20": "4Z3reBqx46umcY75oYFHzHLbMkomFYLpeQkzAQ9aRaoJW1inZ2bqmrBnwrMJAzV4RBG8WZ9CLmYCFHEywAwaDhLE",
  "key21": "hq4XveFMq3PJ8ty7wzfnB5p58x1yN1upChsx9vMVg4DgxMMbKXjSo3H2vmusT2ddkJqEgTjXqScADKnrLJNzut6",
  "key22": "4WRw9fKiQnbCAJZwztpog1MbVrRU7EYWenNa2SoB3oSeWh5pob8J2fCXf1cKs7VxurmuXp6KVoHyT8PzEXFBUxBQ",
  "key23": "4N1svrSRPHJQxGq5b9DYtibVF8v82GBfH2aquT6C7bXU7bkaRLd1ckRjCDp4DdSfvikVsYqVAXq6nTX5p4htpASd",
  "key24": "4BTbj4RFCPRa69TLuMZdjTv3H8Un7Bihdwpbmw4KrYFRgy7JtfnYZxKgRx44CV2CZHPpgKufx9ibmNeQqNd8AvL7",
  "key25": "3oY5wWbvCbyfESrTbAAG7WiWKBEkAodDCncpSCLCHcq27PDxcTJqKKpbuN52jP8RLiKMcPkyphz53BqscAW3SLiw",
  "key26": "tdntp85h9NUmRWWRQbaY2pyKgWCdooFRc4Vr5UYLvCo6LiBxBwgLqU1DHe2bHAfZPPT5wWSdyW2vPrYR8KfLYff",
  "key27": "o4GqhZqpXdoznfj2jfFyR3gRNrTc48ZZvQXwnuj4hW6EkCTyhetBGoRwG4Gm8p1jnStLePFYW4CCv56Rvk4jRmr",
  "key28": "28zQstg9sjMQ2saUkiowKVFH5ZuesuXH7yHkm6G88UQPcYAw36hJ6L9KwJjzLsQXUGPWfwync989fCk8oghQujMA",
  "key29": "3eaTu2QYNwB2oDBT31Yv8CzHNtF75Ee95gSfsubhnLJvVf4Rq8LDbjSKYKbfJW4LvoFmxkrhq8Aqs7b2eD1ocw8o",
  "key30": "5YJWQSBgFYLeLSVQ61VAE27oHouRQ8w8MtAupSSpb42QRZ8SVoXGSvw27toYxSA5Gyi1P3mCgKYxjQvcctAwgUVP",
  "key31": "2VaNrbkF5bFpUz3B89RTP97cdeFThiWWGWSH1B9uhYLCfwBA6bNVkdnjjezqL5nXDktBbDx1aHBor1iRT6nj7ssS",
  "key32": "pWun6QEqVrxC6sezhWZpffq2yw1vHtw8996xBafLbeRsfvYTxc9cBUNPrU1EQnhFy7V5cQcu4rLvuRginyPjcN7",
  "key33": "3pMJT4Jd7NyRd4UKrWxKvAUjqmYkp6EhCUuR4aHHh3NMPgFXaZpReCnCePiMM2YNA1vCq9vuFcJrUzxq2tSty8Tm",
  "key34": "51NkTdR1xjunMtcM9dRJKrmP1xxijBgXdmZwJbUCN4hfXb4wgSk4JW42atTiULcKqDQUcZh3bR66g9Ns53GTjFqT",
  "key35": "4zZj4b3n7UVH4WUTCVaYRuE6BgDkqxtCcDKXkkxXFUY7QsVubWincdSaydL4GGu5EabftvYMkVdPbByMhePZwFBM"
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
