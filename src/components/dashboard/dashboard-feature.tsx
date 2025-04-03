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
    "aj4PPQKuk6k4Pb9MRH9vx1cv36BaFTb6wgcqudiSfHGSQoAiTwnjAQv5tu5QdWq81Qx2p5vMxwgYqiaceTfJf8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SxkR6g6YKXNSeeBpMFTnRRyitd1kPcnVujnCsTKAMHJvq21LsFqkLwUkyqduYGb4q1KDxChKeNwRXWfahumq56R",
  "key1": "38LxbkwryPA2znF4XQAHxLYQNkBT7FazVubMXkUKsuoq35uQHfQkf5sUsDnjY2QFp4xkVufhGE1cjd3fXcovsnep",
  "key2": "4UcKKvRr8eGgbbdHDo57zhxJqKr6TfEAvcV9giRQEuF81DX5mnGiHDHv8jR7bXfeuzQxDFvoANAdDdFArcAYB1aF",
  "key3": "3T5sd3RQ3q4KzdYbd8WPSB7oCyTeRZr8ZWVJ1265GhNn3rwCUEafnqdK3b481x6WWbhbanBCrZbsJQut4jDgCYy7",
  "key4": "5mbt8yWJk8xi6Fs2fvpYJcBtmBc1rAwHJnwGKjBFxoNZ5nCsNkaR6bBpFZzjo4TwVmTRo4uPWKcKzj2TnDZu1Tci",
  "key5": "59BrHc5BvU1yUDe9ZCXcnX4E7XrqKGPJzpkdRXEh1SF3z2WFtoSjk4y9P3Qd8R4zZ5Sbb6aWUXdQpJL1nwvSyChi",
  "key6": "2xS6j9H7AR1yX51BKSuWyS3Esj5ALNbbHDnzBBCaDpgxU3YGTNvaXb5wnyd4fb1GQvpHMwK7ser6fQ2m3xCwr6hv",
  "key7": "5ceLW6dGToGsKEFbRrCFx6bYQ71nH8JvNU1K3caBanv75Pmu5WksePC92fpvy6y62hRNwwBFT5c7LDgjH9rmLu5z",
  "key8": "3oW1KAJ3ncWLMMBjhQtCwCX5wmaGA47q41STvqKRwE6Ntn8n94BwvGtFWdKEaPsi24RhJDMLsy9yexQtixZp8Fmr",
  "key9": "Rz9HeEoa1Zw2Ny4RkPN1H79iYRYB3XXMVY5xNpFmW2G7zSVDuPmy5pjY53Av49BczyvdC1SKjC1yERjLiyNS7wK",
  "key10": "5yGhVYqFVM8rkoc7aXsrD4ybj7EjViJNfspzcaXBm6P5uEjkTrCgpXUSTRtjggtSugHNFqxDXgk1YvghVAqr2RYF",
  "key11": "jAKJUhHBSGKpvVagwtq8j3hPFehPyqsqq7afeujm9FTm8oH8nBoAJPpB8QLUXw3zYMqBPEcsSZCakSuqdDmJk1g",
  "key12": "61BVWmjiFrCHT2auarZYrgxVdUfCKG9DpXpibNW4URKrjLv3Juwx5HMHbWtkY9v3QZywfux9iswo24vQWASTgBoz",
  "key13": "5MMiURxLZmWn6xH9UBc4bqgwqoKHBcmyDHGtzoeopB9Q7jCPjG7BUD5gCjDjm9KLofunh7uRMzuG5h9huZBVyZcg",
  "key14": "8RvkkDJsFz2PDsqs8pP7CGRKdPXiDCybayawKPdXgxrqKatCgjfV8u81pkFgsdMik93fJ8MreyQdSc5sBAMC7kX",
  "key15": "387cMgmokBMwhxhTHpuZeSHWG1LCPr2iXshfjWwYqHJC9TRESY29uwrS1jUtKcGNefWysQbT8nQqdYUcXp1sXE5u",
  "key16": "4UuMbbsWWeToXHv49gXLSC13sLWx17yyxNUp8hu9nqzcdLsWRZXyDbtTPUmYpyHHYXg9iJ8gXHZYmDUKs9URK2BL",
  "key17": "3Wo4MJwXCJKN5aDCPhaZS94Jz3FJzmPi9tfiG2XthAfvaqwVvzXV5Kao2nXXDaQ3UhZHWcV5LJCHWzxjKcpJABwj",
  "key18": "64ttYtbQYDs9mLqpESS2jJEsKFaamdsPHGxvTshM69N3hbphEYGQuK13aCsVowEZiagvqKSVUo9na5LCyNSSXYW",
  "key19": "4msT4bVXzeGHQfJK79BUAp1Hr3xtiZMJyzCgQLZSrsLSyM92TjTVnyW3UmeVEQ3XQwsGFTsLNa18eocyE4Fm1mtu",
  "key20": "2yy8zebrKeEPAd3f8tecyPkCsFAxgocq89CANbyRDEvGSqLT37Zz3TuwCVsSTQfDZY74MWnoRKTXfeYPurMda3Tu",
  "key21": "2FPuS64yEUMzQbLHR3ynbdYL3LYSaHkojeVNRTMwGWvNS9N7bJ9f8HLQHCp4vXpUqtmiLnxYV63iwutQsXo9WYPw",
  "key22": "3UatuCXArWk2fnATAF7eBE91Ej42tRLUkSVAS7B5QswvPxpJ68W14dhR6SDFkZfZM8VF4UsDix4kjBq4eXsQ7Xxg",
  "key23": "bnq6y767Mnh2TRs54ArK9pUR5fX9JcgSvWXhmD4kbRRsseYMa5wjYnSynuD4GHxrBmsFQVFZ9CHEzi8WE1FUnB7",
  "key24": "2qdz8VSNtVFLvgwXyFsHfzYVsP1XrnVx7VqiazDLoNqLjnvEPEgDgZtx53Ui1TQr6T6tknUrdjn8XrwYQ1KpVMFo",
  "key25": "66wWAh2hWPaKLrXJo7skqACAtmGmrq9ZtC7n4EGXsQrozKgXpuQhQJZczaDqWjCQ1cWo252mW7CdxcaBpTH8VPfS",
  "key26": "3eogCNd3veRB2AUJxVQbyVCabd7QTJ3hVP3TD1vgrytJ2QoHSnMHMyrfS2DrdnitbCQiaiQfZzg38kNrv3TbC8R4",
  "key27": "4Grew1StLWcSaJd8rbqwcxAh3rJxj1hhn47xiEdQV4NRhTsKgQTEGVj1ZdgwBzn9utPpvxBbZYeo7CBdxm8UWM6s",
  "key28": "2aD2DziWsMmENQFZSGmCWDH37g7mJwaFhu3WoTjYQkUsnSbxUEXR2VbVLabRwZ7Lx8kdURQUraT8Wpkd3MPFMA8v",
  "key29": "3FriDbQPAwe7wQ9b7HnPuAofpn1RAZ21D9EJ7zaQGTBcvDWYM2788mHATvyQrGoEoUSsgYeDA18Hfk1LxSGSfBj2",
  "key30": "5jBLytJe4JWxoi3HLudMBuMZuYsJczdAH3A9CXqKC6JNPdiavWLP1DczNW666Y8iYxgjvHccaxXAXJvsN6DABohE",
  "key31": "4KBzuZzuTcK2CWn1qHfE7baU7WGQcHoM31RgeQkYWKSqg7ovFWUx1oMS8eppmXtjVYfUUFNv9P4KiSPAdDmphVJr",
  "key32": "3yH5TNC8idvmramvmbPt1oEs43PEsXzeD5yHdz1WsM9EnhUEJXzygUtuYppzXWy2z59CdsLwAEL8K8npytFpgxyN",
  "key33": "2ez992tCSAFSRJwhhHmjE9W4tnYbcBsZiXUNxerhqCp3bRomtW2ixsVR1vy5p2mfLFu4Ey7Uz4JMhdhNLSQfSDF8",
  "key34": "HWq4aDTKgPqDtYu1ZVVBko21GwY7UngxSP37p35McYPX2X3YcshTEmUz9nvmgYZHiYCnMXVHoWn34mimNovAzBx",
  "key35": "48VwgcEJV8uNvCCesUvwmqTMrKt2bo6CEFjGCegRwQQZJatXGJWbwSCra3nogqu2hu2GsedSDrS34NSE9eFMDeL9",
  "key36": "5Y2Rawk1Vn6zvB35VP6q7q6S7mhhcJdgj686dZW9x5wEQZ9SLDSEj1aidvofxHHyfcdmV3sf7AZ4Z6rGZnKWoyQk",
  "key37": "4FTorjccDC5jsmdzdEmDPpjwir2P65Dm5gDmQUyTMYoTrTzTjqWiwyXERYF1Z86uU6jBBAeRQN3NijJg9mbeLp4m",
  "key38": "hXsCWMfDp9vpFWBo87Jt9mY79Cxj8v72Kg4onCcSCsY7mZZ8JktKTM71aKKbZn6g2reJSkL18rgwLcGGA6fGfyS",
  "key39": "1iEfkjd9TmNtBtmZyLhn2kLrT4GPmSGV3HcxrDESMfv1yv86Xdxs1LFgAfFWWcH8oPx1SK6V1RRipgZ2VLeAunV",
  "key40": "2nJVViFQHFQtPSEhasHemmTeYjK2eHFiPiToDmAok328bczNCwK6HJ6QRVZSRsNznRzRcxrHHr1eM9DSACT8b1fZ",
  "key41": "3r8GVyRJ2xfwEMW1PZ6j5AWQY7vp7JopAiEDXyTpQT8xx4mMki8RMLj4oemAjpMadA6o93BDh6w4yTkgAh9CNkLB",
  "key42": "55X9kGhXE6oiHBxkoU8zzaa7zZE5g1p1eqRQ1FXMT9eHJ5EdG6rHXWspBqc9KmWSfKTqj58y6Ry3cak3rrRVKWeC",
  "key43": "4ZRwfDJN89uGKA7ZVJprufw2CsUPpAfiueLvXwWRresRUc9XfUmQ6zkvQb2Jr8pefKX38XAQFNXzfNdXzEf66MYC"
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
