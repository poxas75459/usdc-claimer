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
    "4GCwxBjdz92jXg6CaX7EcWsAu9ea8HEKgcVA5g69GUyQTKWHnqQnzAcYj6KuMeLFNasswVrT9mxpNVUMpsWmcLCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JK51RrGZk6cLdAHTTGTexJxXmi7dzqznCgbAVroqHxQUaCjDTS2ZLHhELV5ELqkuE72UyWqUCCAZfnBMAtxdXVj",
  "key1": "65CZTvfemKYAXJhUNUPeNQK3bS64QHLbjxT73AYzucBUkgo8mZ3fbYdDqM5JWXHhTiBiAwWPXzd9nmiRGxtaPnbR",
  "key2": "364NB1Dd9cKoNnof9BJfGkEwrjBYV2mTivuTNeXhVAodTKxrK4DZ5SrB2fbaoVB9LzrcyWPSdFCoj3cRnTYfYKJV",
  "key3": "5QPk3fsYr7ZmZKKZ2akNa7a1fPcoe7NmASTeDqZSnctXjsqxnCvvMkXEMSXi8GKv9r8jTp8CNniGEzXJgRJ8sfHH",
  "key4": "Mi5BKEte3R7vRMhW4CwtpsGdZx9zrZYBfQQrn6LYxkTyThS7EgGpRkMvUjiZF6wiMJNSH3H6cFqpbQ8fVEx6989",
  "key5": "3DvRna62mfEoD1ogj6YP9Kuc39wpmbhs6qcDjs7NbkzMb44ExAiWK3xJ7BF53p4qVCPKean2nXjqSdgZRf5cEtST",
  "key6": "2Atxx8e6uUFiFxiAXRyjj8ki2qw8m3EsGY3LSPNgKebCErZmxiaJjbQgyFeHuDDQw4J9TpwXEZvWTmafsTfnrBgo",
  "key7": "4pgu5rUNwMJZ2Ro4nZX6qEv7DpEcD4SYkeyMsUWdGB7khephtdTjuA5GV6JnPNPg26a2r1dbnSD8ynZgQX2MUS7h",
  "key8": "3M3REkN56uxrHrBU6bHjBNpkARPhqynw37prMVfcADFqdFcZXt7XScQ1sRnCcyJEn3tf1gs485VojJHZRbnPdu3E",
  "key9": "WyH3c6vxiBvUuydT7LPfxDtz2gZkSr2sARzJmHabdxmYofCv5Ei8RrEwRH4BicWWpAw3aPmWLQf9RfxdyMoMgJU",
  "key10": "3DcZigx5JbGBpFnV6jb213xWGyaTugzRQtTHKPmmjHB34JBgdwL6ZeTxjFHn1fmTx5nXXMpjkBePvbtntbwn3DDX",
  "key11": "GMpd8FCLzR7R4PrKSbHq7wpvUG53xtEnAPWvBjy3YWhgyovJch9YcpsV9fp8DqXEWLW3ntKY11MZCJxZPgeWasA",
  "key12": "2f1R84oHyYqvdrTzEMzosvjqwGCYefpLoMNg29ocgzmRuW9JnANyDTXEKTGXfEAUVjsruAh3hfsDydyf5DULtB7n",
  "key13": "3yDASCNdzyzsR6Bw3VGKnmXT31JdSh5E2YouvnBEH7MqAJ3gYCpZiTFKKR84K75eqBujvV7tHtyXftFkmyNYYLhC",
  "key14": "64pEqrtN2pBZ9rupjb6R2ahimc4Jks3e5hBxnkg7pVyttFjZwbmnbjrTE864fPJcnpsiwfqFz85xV9SpfRtbW2c3",
  "key15": "5t2wGECv3ZngMH71uCUoqs1TX2S2zFYuqQrjaoWyZRJWQwcKmWov92ShLmK9qNHPv8P8vizpQY5LxcNCafFrrsAx",
  "key16": "4ivLoJi7DUD5wbyrqq6SDWDFkt3mn3Q1E34GpHdsVAHnBbF6Ktkd3QFQKpwEnhmCNBPwjnA2CimrbJZKrpZBAiGH",
  "key17": "57vMAtM9JQ3vSUs779wkdQcfwpotxFM5WxjUtwcWxDJfYLav45obUNAbCNgbpoUCpLBS3Rhrga6RRuthRipkNiJY",
  "key18": "3Bxr5yogcRLzQnmb6nHNBXSQiMeJjVAqVqKWLbT1TxnSjqJWfoXXxEyZ26KtMXEzCcYa9mhsovc7kgpmuD8MVF6z",
  "key19": "55LqDxVyraF5tdzNRjFvSJ8HcbtiK7mhEaKmJKVEtMQu2UCE4q4bV9duc3FBZSMwoC7Yb5Jpprxuz7uLDVQ2JRkg",
  "key20": "5HMwW6ScQ6cjXfr8uni1e97gCsU6T9JVXeStQayAEgxzR4mJmSi7eRkx54QuZKcvVSCPhc83suEqNRfajW7uLjQJ",
  "key21": "WyRr2HUW3ZHjjGB4eDLnTZhp7ifdL7trK7btNjCLojsypow35qFFY2GDeCW3BjREYFCGouExCaZ6MZX3onabz36",
  "key22": "28tcqGzna4HrZ8DZLDLfpgC7L9pkTQsLycPCapRdLnFMRxMo3Lbi6zBkjUFdQ8cxWgiqwnDC8BfPFyt2jgyrESaj",
  "key23": "dbvRojy8ksxFQLAxBJQtt3MRXhZjNnsE2zibCtzSDchX4fKjU9hNfukWE9bJGoHUAu4KTsroVr2oEhxL5Lb9FgZ",
  "key24": "W4PGaM65Z9n973mJFJurz9UEG73imPVjrzW3zKQ2VemVemMWXpYukxJWvXuF4yE9QVDLZGZ9Z2fbcEuFvAPSKeX",
  "key25": "36U7CLbjHpbsCsrdT7mztwvzMj4Bxquhr4dE6iiyosThtmNxYCvS8exyCsjx3BGzv2YSGF6xG88Pz9XK7jFjr61C"
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
