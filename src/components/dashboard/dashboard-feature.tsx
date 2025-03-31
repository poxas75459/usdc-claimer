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
    "5J2ZSXBkzWVKRFQG31gNpS8HwMoPmpShto8ktD2XFN3c54kRDZYYmYZUxuEuyT6TsxetsYK3W15ru6sTSLBjvAan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MVRXkkUt7S2cxik117V5uDQGtRbEE7838uEuSZyStgKH12t5C9E6GZiPPyGafNCnbhHgYn3YkPPPobR6a9Jx1h",
  "key1": "3boHYqju7T5HM2KGMmqLVQyL6NcpCTmfUeJjMoEbme7BqtoD8ZwTaJ9sNucaWxiHPxgTAykcEtwpKiAnErEh3WJW",
  "key2": "4xGKWJrYoEh8Y7nzpLKZUjAzVQEHfQv9yqmRmpGVHn2WjK6V5BtCssgJ3eMx24a3GPccznmcdeg8g2qbmVzQmX2R",
  "key3": "5BhhLmdnFjEAXtLV9mBoqWYumfqruCvWjkhjGhzqrFZRNG3ofPidDTvy1p6f8GF56bt3EbBTeJgSevpDVoxuLUrd",
  "key4": "5M7Armfk3TagsAV7YMsst4EmiH6hLdSM3drvzLuVuXnBnkDPhbxgUAipARo2JcdSaXW2SYLqPHTZhpWypwqfwkWU",
  "key5": "6TtATmE9sfSzcohUzEpHq3aR8wCJB3pmq5riktzB4AGxV2GsupLELV4jVkP4FxtKcH9QVdQBZm3cWxj9m4DjSWN",
  "key6": "4JbvSBxX5z6tt4VLWKkJJ2EiVUNXZ7uyNofBcxYBpeEQ6SWM8ZticmejPnoQYY7gsdZzvzSqbHj91SvFyR1dpTc",
  "key7": "2NTbqXG28uv3Bd3SfanVNyfgesx5dYymwVuVSzGKi6dHVrYhPM1LByqEuU2UsVpm1FAfLHvDVRN6vh8y9a1mUjSf",
  "key8": "3YMaLggQQd7LnRkM7kGgq8DiwtMbjXZSMxay1Ti4cD4aoNPrmSdgweJeCDaVubs2pJcAZkZKCEFUJpgWrrU5viDF",
  "key9": "3bYSFFs3nThbpuqdh2KfcykdWwhTHL4wGAZ2j9nisXDpyaF2iabBwwxi9ogL9m8zDn6LuRuqYHk1FUa2VdydzPeF",
  "key10": "4S4Rz5uqErVAZmdmrvGxwrWizmHTKR5LoZh8eozy2Hjnr1dz37j9uG6vZjMLs24vdNZS8iea4r3kA6GC8triTKQq",
  "key11": "2r8xL1vcmPRiHbjoRWBW98j3sXETmaEu9nmg4FZqGxmdCg5vvEQkxgFQAXau4PyrwDjRTNxqTT3rfzvUSD8gUn4F",
  "key12": "3TQwidFsY8PdMXAradtgYX6xUckYBHXUPSt41eKKS1GoPTVnZFiAtCi4wWf9xdermZLVGkLVUxna97tb1r99mnpR",
  "key13": "5jsPhpnLdakTVRRA1cdwCqJkBQNdVKbVqjnxMukuQsFAhRZzk6H6N22QAHg431rsQmKdqEzSxYHiywaLgYxe3qxj",
  "key14": "3oD33wehJ2cV6Y97zJB973X5ShqDuSqU7zhigJ15jFJfXRbSpbfyrwLVmfNALCKNg52m25FrLxWzqpHLcKVfkfg2",
  "key15": "2adaFQhjT7m8VJ7pMT6mrUPCAm7dbcbojmiXk4LTLjwD5KLfgtVAuNaouE8E4HWqMYbhCxiJccG3frKUyJkVrRir",
  "key16": "5gC2QzZ6y3HMCAQYjVymRC4A1oWUjnBDCjCnpawJW3r5vAwheG2qP8eHh8CCASKrZGoFeAsxinYeKcj9sMtmZ2kD",
  "key17": "2p8BV9rv2zdnhrLF2gT9ud8fmbRgYGyXsT6YWCYNU3mLZLgK9p4wtvBRWvYF37Lzf2yPDk4FHafs1UvnwNAMHvsR",
  "key18": "2GCp6PXPxdsyweZR2p7QrpHxj7Nh5cEXrQgfZTjbkmNYgoSPmRYcxvMa3hETudDSRWvphJV18BfvxxbudsbuumQG",
  "key19": "3XduBJrY7P5V1uxzeNMu5GLEAJP7NS3RLSkP9HbbGBSCPi6GYYNgpLNQKSuuRNKyjeMtCn285yogH6zA6dpNyjhU",
  "key20": "5J1TwZVyFwrPqDD46jRWcBiN1ioik4ucHzYFnjGBGYEcxQBC6uHZBYMoEKvVL1uvYiN8S4qC3Z7ApMJrtMABGcna",
  "key21": "6QN4Dnns9pME8AYbR8Hznp4Ci8WG6UaHPDN5RGUMHNGLp88W9aRFgQD9hnkqTRFMq63s3TbWb5FSdT1Q52yXyfE",
  "key22": "5WLnBTkbytYjYsBw35UbAiQNCWK4LWo9CPuereXGmxPnovea85uZAgBwEVxPMy17qiNMwha1nh5Twu4fzLtHGf84",
  "key23": "BebzrDUnCzs7F7FcCJF4HwzJWEUSePFXbdDzoUm7toz9rrfyiXAy8dZZueBM9joa7oxQSdKC1oWFyCFiSDEjme9",
  "key24": "zDBKdduBp6X2WuTCr3NRDcuTrijzbvrNeT5Q2dQSSTN1UBDuUD4MkaY5VRNtnedk25A94V51M37WNaJtRRajBxf",
  "key25": "5F7BKRmi5a84kx2MY6eDBrko4VhnzCd26CCSSZ3KqXDNkJhjUGKY1gVAsBafZE727MDcFP8F2mrUqYxtVgv9shnv",
  "key26": "4vu58Ed4tjD6t57JHoEGB2MJHZ1KD5ueSGSkQdLPQ2t32Hw4KNMcZpgAJcepKE8oDJCALB4UnAEag1JB1HQvhtnF",
  "key27": "2YxtYQpqCFex31jtdkBZ3aH5U3oJZ8ixByDZJqF3LcFazNm6RdvzbSkwsfddLL6Q1zebLfhZZuQ24nTxUwQ2gRYy",
  "key28": "4166aEKSDZSPxYN6iKNRH22xcKQLQBiZYSBCgkN7cRLmaYYZcPboMspxZwhrA2skPW1LXxDnA4Q3DWUuxhoAUrLg",
  "key29": "4oUsedKv2npM3AqMtKbcLFCVWVBGJzi8oxJPZ7v2hyma9oJ5BRTfgAgDe8Jy9vBSwMXdEXtbrBq8rgytirUyfGvt",
  "key30": "2qBGA8FgnrT8v1bGZYD5xXFLcXonr58PyJoeiQCmLwABpfg62hAQTxnxerzd96nDvAWUpePgACPiaY33BVa4Xcxz",
  "key31": "4Ao99F2DNMbzLWqsKv8KKozpKwsDwTXmEVGRTuV5CvacQBoMrUds1pDWcpyEtfFESKr1Y4g64echRaQJt7Doxf63",
  "key32": "4ToZxm4eyqVdzuYwRCpxmTyXfr4PVVEnNGsonW6ftpjp6HpNzhJoSjvA6NTqV5bQ4hTGhXM5xeHaR3MPSK9jg7Pg",
  "key33": "35zqCR4jtMiusCVgWT62SSVpRGvPPuvxX7hyGXKV94tpZ9WBb3jNFAeM1r3CXEGvphdUDnUCRsjvUnRkWLs2kqQs",
  "key34": "kKMqVVceRBmwAPASz8529HkttUckty1i3W7rSxFgpy4xGw2zkYym5tMDsaeNyJZSHnK2k2HzBo7zKVvA71cPVvX",
  "key35": "47s7mwcyFucKFGJ9bue3Pm3FFmFjSusvH9VFMCDhxwvkm1Sm6bSRRg7pSu7WFAhpCzNZwVDihxTC2FKAiknp38CY",
  "key36": "2wTEyd3cgSmzacfoj5pBpDgz4q9XA5bziV2mgyYyNd4mu1F9RydwVMn7f6ezea2ufny8h1i5kKUhQqPyUveeKtzQ",
  "key37": "3xqNufkqAUETY7eGZKjHNtnqKtu5qNx9PfBUPqbDjAGdTqiWhL7pNGCpMi828YXA7pEwUSQ6i6gwnpPDcFGkMBVJ",
  "key38": "2xsyxUWgpeqMP6X77hnYCb4DEDrHVe4QLs7mNDbvRHrkrgSVP3XFoBdJ8L1FgLiLVS5HrCkx4ZHg8kqzHgSYUoiw",
  "key39": "3LFULc1u23PCgPG2Jkwo6T1qtocNdTeXhQkTthKpCb6cAfiV7NrfFoZFtozWhentLLP9kqmeMhNngnZsGiGW3B4W",
  "key40": "55zE8nXekBGtCnp1nP1dZAzG5QNd8cG2tudy6bpxZdaqcPJJDsF2fruitnsXuNmoBCGtcQKGAr9GxaVW617VaNH4",
  "key41": "3kP5vJ9WzF7Zr7r56z7GntpYF1BMam8755tM6aBPUQrBbWzVKRXJNNjYXsREXHKhMGgSxrGR8g7mBmSwc1LCDvbm",
  "key42": "5jqswxS3tQF2EQz9WuMUyLMqSwPGTpA8GQYLHLKftxPpDHVEyP2LD7zP9Pg2UbbTwPHoxz46kSUWzWxUmmSrdirH",
  "key43": "5xabopg1pRoXeTQVBGvXF9cXppvziCrXyzg9j4xxRD3hMD93WWsUg8nnPq6Lmw6RbPiZVMFuryFNZagEvtnpZL9B",
  "key44": "2yL5M7qx7WcYh5UKa22kjKwr8T2jxYscm2wqhTt79JepNzeuJtKXMqUa1ALdQnKMbvPcrXwbLh9Cz4Q39VJgAJCL"
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
