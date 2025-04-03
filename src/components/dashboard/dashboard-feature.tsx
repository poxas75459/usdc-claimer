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
    "28k6wyvqSv8rysLn6cb9Tr7EQxcZHTB9DNdvixokCfqRdCXKEbsLqJ2DJd1Rp3kowixXXJUqRis4eFvB9Pm8mJsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6eQr8kvdh3wQNss7Bhxt8L2EH7RqXcLdWxT1h1aBJXNwN8YoQYui99kJ6aNMKKHVuZNMfuvKgh5YL75V3vTxMj",
  "key1": "48tVRTQKvVGxpRCpp8w1tcdCyD9v3nWDNRg3mb8d814uE14zg8bt1U7SGeEZ5jiHdMvn36x5oWe9nZuxZeCXh7Ef",
  "key2": "Dazjf29pMp3o5qYxjVqRPuDCH8DCiB2bhwye59xuqLuVZL9d88YH5ax2rLAfYW7AA4gzYmEWk5tRRR1o2tuFc3J",
  "key3": "36NAyuHruQ1CBsRgUcFgCHVfBLBpCFGYQbHEYWPv5tnJQWcevvgtbsMHyhTnZoWh1DbhP4pVKcs1puSfapLKnr5b",
  "key4": "5Y18VaM3GnG9RE3zHTownYqYNXDWMMzebynY4KG1koH4yWQhsRC1qBJUEQuVpGsvHBZBbN2Ep38oRGSWTpV18tck",
  "key5": "5uVRQL3WMuDvvzyFna81zW7rbecwcW8D8ULwf8QQ8QF1w9isL1okPB394SmL3tzhdemvhES8RXBwms9SA6UykmdG",
  "key6": "2Tq8qcFUS6tx6bBr4Pua1anSZVdejjbAemKbprX55rVixtY1KjuBAJoVCUzhdwjPm3fk9v1xMbLyzwJdzVYd3j3P",
  "key7": "48D4pckAYLZEa61ani2KbeKTQgdi1ysDRRHs6XqWF3dabyR8xjishv17p3Dew59aEqyhbbCY384757MhfAqimpfP",
  "key8": "5uDXHe25PTMYLupCEsBgiERxfkY8tDiJ7Z8CTNMDbQ3VrnxUUkAUBGUgmTEBANw462eFbjPCypPgKfNXXNfertSY",
  "key9": "3KcSPFp4FtqAdwr5kyfEfFEmjgajbqr75YcHbrcxRrt4wGDMTA4kZyVzsCRWmTd73ucYQ4vR3D62g6KLEExJaSx7",
  "key10": "4LCrdVUQE2knwbLwgpqubz27Zt8ekv51utPkQ8bkpB3VX2p6zV9uomWBfDdADGZJZMvWdvDjMrqhCLXyX2z4cnFH",
  "key11": "jMLUNbQr4S3NnxLZLeJhMUkKQBUPw5i9kNRrinba9LzTL6tE1heAHxjWoRFkRxwSVwhzU11cFKCa1FhNJu85yJD",
  "key12": "4NXEG9ZG3z6YzHBkStfvJGBP5gAogYyEMm423rjhtsdXLBxK6Eo4soYMHRNKLjZLvFToh13aFESb9Yqb1YChCvab",
  "key13": "2gcFspRMvpqa1eM3jFYHKGPPVy7QGgkoh5Ug8FR3Ahwk2Fa8QtE9HLisnUzvdqxQd4ZGQEk7t57xN48uWjLHdceK",
  "key14": "39FYg612XXrHG6Zw3ZiygmbYdK5mnLZvN33Z8h6cgvMuoVsCWBb42HoCEsaG5S8q5uexTN5jgupkmshaJdGvSZ4T",
  "key15": "3iKGkm2UdJwEK9AptcKKqH3XF8nzUbe9QoSCiosLZayhzenU2zS76HfXdcfmcKsbBZqcz1BtWnr8QUviCGCy7McF",
  "key16": "2UfvqpzwPayWWxbja1gKe4hgvEbZL5WWRynCX8q2os62KEVAQZz7wp4GeoePjDP2DetMTSqGVppzSsaUD3JJMXxL",
  "key17": "4Lv3JT2VfViQWEaiBgZJKwEidnAsnfpXvxfwxkR1BQq8oKYXnxvdAwUAZUbAQGggyCmrmE51Gb9oFNpEbDMX7gBi",
  "key18": "39KQpCPHVjwNuov1Ru4U16FPZ3D6TQ4sPMNdtZBoPornVLj3mxzg662opjwUhfikw3nLxnextr3CBYmCrLa888U5",
  "key19": "3hAVTE7BYRWxwazNZ5dYvWBN8B1QT3e8j244wUEcnEMGLQR5miB2naD9AGUCnFnYN35bheTV92ZvyJ3kAtiArzHi",
  "key20": "2t4pdYZs4LNxKnwUSZeTpBgLhu9PbNe5NMDqiVzBSNmWkUc9vRmZXXAMwzyrLREvboMG4ZU8sdnbDYgUJ6oUFLZ1",
  "key21": "4kc2H2G1s3igMZj94TygNvCTcmcaU7uAG1rzYnqU8Boo2AU6zy96q4iydd4tQCpgF2RSDb93ouExkWu1FZVXfFhh",
  "key22": "4MvWsHkGNDvBeTpPZUBeigMd2fnbRMC7r6hANwSrcK9AEXRWGtpaDvnENMmTu27a2BhtWaur4GemT9ZXc6rudDKb",
  "key23": "2ViNYtqTtw1AaBxayscuDinhtfeHmrtCPeWCBvCQj4mfhnXtvaCGce2Kdwzj2ybcanu27hEK15VR8qZBSCFWSMRP",
  "key24": "4hFwD7UYSZggYr6s9X5CEWKBE4YB8z5oFHRqrAT3ENpPWFoHyT86ZEXTsZrmdW4TdpvfTQRL4Vr1MTyBR78nt9sg",
  "key25": "2KEZbbyZeY2enRtnZ2gGzc8P4ZjLg9PQu6WajWcVUQnWM193C4dcNdyiDPTow8ee54Kxvt5JLKAYHCZyc9Uo2uga",
  "key26": "4QLr3C5qotmvzpV5F49xN1f57rvJ3Q392LGuk2mZMzxU39ocJowP4VmbDzgVY6Tkqnx6pYfw9TPURiZHfbpjZJc8",
  "key27": "yRTmbsN43bpzpEVPATsNjHe5uFLxdgp8DkmjcaHh1p5i6TgHDQf7bVwX7rsEZ6x2Ggj8FRMCDp8Yb2FaRLobrTe",
  "key28": "3Vq9HUpGsLNygfoPkhJBhEtKGJUhNkC3e8jrmw7qesUqSGaynzLpP9RQbMF8fzTnwPRjue3FxgRz6jVaCozXBUz1",
  "key29": "53hb1QSU9BsNsDf15qeL6WDfYEFV6hkVjWpTu8HeyvfasCmXKVXJnHNQZ9Y3eEA7A9s4d6xhAq4FgcycJcx5YWc6",
  "key30": "dMSR8F1YbvMy8a4ssLVd6tEP1Ycxm3KbcNuUwHWtpqDQnnfFTtDEyj7egTLVExyRP8YsraSa15JC6fd1Nd4ANDj",
  "key31": "5qg86oYB7JZTHpRkRQ9vHxoegrzAA6HgWTSkPG9SRcMicsyw6uV6LMpA5hsMPv2onuZZNe9Fgugef5XuSLAtPkzm"
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
