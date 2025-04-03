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
    "3raqvwF75xziaN4ChjN3QEjtdFF9TBURAtVnQ4xHP7nVNytLEudwuG7eCQaUnciMLzm1QmfuY6CkYzhsEzmodBH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gaBmymaPfm59iUbzGYPVgDi9rwEKkymEfuYku4BzAyTbPAzyytvGPtrGZtBVbazti4hgmJZ12WFk7VT3ALtPrcR",
  "key1": "4QBYyRTP5uFUcZAotnXqy5rYQTH9k9wXV687f9ff5FYfr87mbEVuqnSz5WB7Hnp83Jd4fts27ShdnRXdXbvm7u3A",
  "key2": "2KVCsmLMjAPokCPzypxGnKsBMRFwdLFEAkzehGj3VDrFiaGSGivicYEuY9AhS5amC3hZPioDsdkYBfR5peKSn2de",
  "key3": "5jCvRmdBSCYEUjhbqPEm4geNFW4ktVSxdBUSwVsz4anoxctNsxzgur2Z3Z8G5AbJWcMx9KYp5NKL57tmDu1LWwhm",
  "key4": "2y7HX3tWcBoAcDTdP28vudsRwoxK7uYDbKJ734Q67JpB7hkYr3NeXhjnogHKTXXzaZWCfyZ9oZ9SzkCj7aZ13Kv1",
  "key5": "4ks5T9hniz5FZ7Gk659LAdQARsZEwDgFenaZCmMd1xvqMYFwH9qZzZdkm8esmfuCDZ41LxG6xP7sA6sdWNoSb3cL",
  "key6": "5L1rAnkjx8F5dURxt2aL412eh3Xtj6r4ASf5bkeygiVf8TXb5AVBKNVHvSa8BGtvU3UeL4bKWiU15pWVUox3KFY1",
  "key7": "xHTsGhHZ63jMWtszo1QuWMwQ2tad8aBoKL6NKzvKWWxGCLhc7XadtjvSgmD6QFsFz1z5vyvV2cJ2izf2SukST71",
  "key8": "ga1K9a6GfJ6tHDeu4kmNEPC1LpoxoYz8yuzGohBMqcM7UsjDsimCsvJPtYiAfmGgi2k1sy6KXv2Y9k1BkSCdRo2",
  "key9": "4KWSAVAXAxuCNwAK5pqq7CG8icZViVG9bVAuEW2mMwWPznTXzBdGtxS3uZK2ezZBV2wyypYNWYS5UbaqqzRHVK64",
  "key10": "3ptHJxENbyAj9H5MhvJGHGajAArpT6QppdgXNbK2exRcybz2fAcTvWeUkZ2bKfoANz9AJVk4PrXxwg6DPS61unfY",
  "key11": "VE2pDHkNAToxC9rC83nDEXznBhwjqeQPSHRhrgwWnmi2eJP6YHkdsmoB9RytDHYgSf7MfCe199QKjDSijjofmBZ",
  "key12": "4izAYQYc5ADE1ktZnL2nsP4EKdvSL4huibN86rJgFKEmn1c3caKSkG7VUyC1ciq4HJtg57tYYutC8kb8VpMvfJPN",
  "key13": "46KVwrjMB5Xo5GDFph1rSLLYjzQjHNfE3M5qGuzMLBUY1q39DCeAL4K4WKhb2j5bncFYSHpy8YFnyHYhNqYZGCY7",
  "key14": "65eNmCWrruvLtjgz8X69xW9Z9PrHSixKVWoLoJoazS1Lk8N8SV4KMJi3pFqnsLQAXXydgRAPAXZ3nQ3YEaT8xep8",
  "key15": "3uUPqmCHMDRpKbGc8JSwJcqLynpUPoqcdbUA88jLevFbAL5n9wuJAtkC4kcAWPBBW3gZerMiXcMDTBVYukUqdXGb",
  "key16": "5hwVjZdXf5Srm8Ar8TYc73mW9L4iEm6md7WquZoAr1oe3bR4AkELyfhnpUMzouWA77sPvhHYAYBGTZUskH9apNmZ",
  "key17": "B9beevRTxBnwYbHMKqd2xbTpx8RQJ2Jfakhd2YNP6fR5urmacupTVonthwPKVLAvz2Fg6T9xPYKgp7Dzvw62kHg",
  "key18": "4kipJepzSiUQscU1BbbcemAnGW1N7eYAsb7HC4aTzVRBHVD4xrhm3ztRUksN1XqRbYixrXFowAp6qnBzk5chtVgp",
  "key19": "32M21JkfoBvoePASiq4NJqeNtixCuKxxjvXGpUf9xD6QguYew2vPNiXapbM6oxetTBbCjGCVJwuQVCAtXNgWZrN3",
  "key20": "2NxZRCRuYL7i6JUsLBpPcFkfLGAxwadxYZiuAuKwwDqckvf8S4uf1Z4ijPZQCSPTHTQSu17x4NC3qpnitD8pJwu6",
  "key21": "4Uuv6koU7xCfVKNbW5ZmGvaWhTv58X4e6vdy6m9V6wsFBerqoNQNaocGUYYY3h33smLM4Qbq8XcRTAV6xgUKKu1f",
  "key22": "4XSj5YEjHT6ZwEggmKPYPwtRXTX5tQrmMo777VHUEiqpBNkLQ63NvgJtd3FBLuGFztsMgG91tTqf5Z65wzUdBoan",
  "key23": "2SndAzjW7mcdR7gPqvMgUyZbjteEE5nMt4W3PpqNEGqrjr9cWzHVrrrzJmYGK3K6CSXBdpDAsiPGoYyEihpuabUg",
  "key24": "5QAHb7hgMtKNt4QSUeBTrxneoF527wzTQZGpG1t9mSdw6G77m1gLQEaVjAmPuwQhGS3CaCw92Ub38Qbj7GLFhjJg",
  "key25": "5HyKdZp8TKHyF2M6ReBX8C5QqujHNKrG4AB8EdfXApMZVTd2utRbULQkexPdLwtNh7EoRnhZTcQv1ZAKeeoPu5rb",
  "key26": "3KLuHqi7Mr3DdtDhAanTWyo9jumjZnhu5jruvfR6WFp1tAskzh5RAPjPLiYg9vGUJNQMmnznNnMEDJRK3qXegbrZ",
  "key27": "2xBQ2ZBaBJVd8uBtfy1NSeFqJWraDcavyCoUWpe4H2Yd1xKUooNxneemzjL9UDLfrej2rttHGwUSbwEgaXD5aHvz",
  "key28": "3EvddsWQQutJFsXAvXcdMLyQ1tsBYCbxRRaBK2L5gKqQPvaJ5jccjbs1mwVEmTa7kGD6MhsWVpn1ouVJ2VpvSeE3",
  "key29": "5QsJXL9rZYvA2vdfCEP26ifTTSoJ8Mg6x8gzjo83GhWvWM4nYDPZa9t2enAnGGzH7kBDA3AsVMXYwKopLjKkHR2B"
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
