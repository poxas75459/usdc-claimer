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
    "z5NTJmv2Ay7GHXfy2xqXxfbyhDkhphmdoY4fwCT4eb23rNAzbCQEezJs9sXg4q7HpvyKiuNKJHe44MVvATFdddd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53P8XGhXJPFEbbJaEtYiMpE7z2bGrefFVce1VGsyH5R89Ed3tLyUkFea1BHnxQWHQPubfZcsHQSYAXrAvUBu5yQ8",
  "key1": "oTA45UFZK3VKUhEEhk68QNZcSPVH4c5EU37JBTmj47qU5r3GNiCM1ErRLj7e9CBNtFp4Nf15Dh9awCtJ47kXVR9",
  "key2": "dWtrjGrZrYo7Vm6uW9TrkjBQmLUWnWumDwPjrGo4t32E4xLKvPWDF1o2WCt1V4q2GZMjjgBtTroyev52h4cmans",
  "key3": "4Zc4Wb5wwCskgWzDCfQZ5dcdgXZ3K6GciF4hsCxas6mKKnvRZnnW1UXDKnUoSLUpTQAteZXWLZ99KBrKXbWV9zuc",
  "key4": "3XAZoAaPo9PrD4PizXRsYHA8ARM5AVAsvotLv5EVjh2X1WVqNoSqNcWmEJoYw29gHFLpHYkQ9sZLspNwuBd3Qzrj",
  "key5": "5p3Tww9BtXcBm1nMUSwc1XU8382MqtcXmndYeL97CYwrHym7VT6dPJfDRvrdRoUUwuQzdNtozCxXdoiVaP2WrRFZ",
  "key6": "66RU6FuwLkizsxAPrHDGFQ2io8417sseavAPWVPbguVv5Vo1AmE9uUHfu8ac9bbhVRN1F2c9jNmByzEZqLneLXfu",
  "key7": "4GgxrLSV6RmkZF7tmQhTRDWVooNTGAKorJ2wDBhFq1sVdwYZHVwttyxyo9uAWTQcyzamsoMagkAxk214zTdat4s2",
  "key8": "4G9K1MHjaRnLuPyT4Bd37vchNWE11pMGPDXCTDhsKbGuDzwAwTaemc8ffJi2atDEzqbB9FNax37ftxifGtHzZRd4",
  "key9": "RAYcxRcqUuDRwg7DXQXb5jnpc4HFVNFqLn5XXMSrnLBkcS7EjRjQ98yQCRsqvcYkxdwzHfPqhjQjRopMyfJcqu3",
  "key10": "oYw3hw168K7t6b94zoSoG9fWXK2ssastDfBP7XJngBYbGUeLqLjrkQr8VbTmLfbHNdJWu4BPf3JG7kEgJmCjCV4",
  "key11": "f7dw8ZfqbMT39Gnfx5MYLfrrDnFMdLxXHaBTa5Wg5cmNcJQ8awE5sFfBm5rA6FPgWkmE8NcR5bbyDySrPYJs75h",
  "key12": "5DeBUqayQcYFf9dHsvs5EYrzJBJScnxdBeKh4oT9Qw7QTwMvfx4AdJ1bKvVPZ89DgFEj71KfMMA3uyxot1y7Q1h1",
  "key13": "2A4Sow5KMXTcf7Fq378EhfE7SKevG3vPxbEXMoL99gtpaEggAytKTEE73V5drmvaebZDdfKACSYtEqCHq6xkPeFb",
  "key14": "4abAehTF2sZxaY3PQPjyVxnfxtRSBh6jkBm3cNQ2ddUv5n9kuGKXBWn1trZEbmenqXFubfsukrgD6hjHsLnn2QFH",
  "key15": "4cWtWAbxGGcFYZaAXnjNaqTwTvvT7hpUzMRek8P1kfUycB5ufhkNfEVweBq6Xcw3QFGH4dpGAn15YhG1WV91dKZg",
  "key16": "4NpMayCrHbFBqHGkFXhEgpJBsPFHkkc7FExA8e5BfJBfL5BLK6g6bBMvZChDTePWq7wpBPyQZqrfRkGTCwWFCRiv",
  "key17": "4gzwzqgtPJj2PY6Pqc5AcdiTFsukz3ZiJRFLy2NFf88misamBBnErjjHJ4ZZK5dQmN7sxeWwHNfBbtJDYW4frhGT",
  "key18": "2ekpAxiaGGiU5v4eBb3W2EngnuQVepUVuVDEfUymfiV99g9zaEzyCYxaqbDyJK8gGVVoKJX7rkg4TSs7dupbeFNZ",
  "key19": "3efhTna5NZ1VtktWqYiYp8w3hFWsWGWsvMzcHu5JGynTPWzqKeePb78XSJtecJSSbXbVQUkYBv1johnshisephg3",
  "key20": "4pManz9CukvzX4zAj4XjLhXE3Uc8c1pmqnu6Zu1SeAdmdoxMeAcDAUQ9fY1spPosSVw9PZrqvTEvaY6AsdTgqRBH",
  "key21": "23CJDAVXqjfECHazZEjdQWbC687L73qpW2jpwpzFfpXoo79QmWJNEvcMN59nJ66M8HzchkofobKULeF6NmumD2ou",
  "key22": "4CW33Bte4M5mowxFLHHbQMJDFhN6HrXi3twKGWy9rVW8x8bFAFKhi32esVXBGCckpchzts5ndLk8ufYYxNkzMdt5",
  "key23": "2spMT1Rt676FBJNxknZNYHe2r7jCvnSwfgZMZW9GWNu1whxax24Q2e8toBQ5fGt7V6YJ9XZNQziBQ4csjT1pt4cp",
  "key24": "4VeAcsfAyPhD4FEKGsX4JphMtQkZ1UzagtxQ1UsTDrzvF7nVDkKyEkicZTnNGAA6VbwazesVgUFv2KNoxHDpdtrX",
  "key25": "41S261RrHzS8MeWASbSGiR4nwunhLJ9agX3UPxK6AMYVqQpt1ajVWtSrpdqSWMt2pbwLCQArDZHYZHGa7UVvdBN8",
  "key26": "4NmfwEd5JogwbDw4XYRZ2KW9xJqaMT6sTrN4mehtPCMhMvoBK4c58CFCrENo1uQ5GJdsJhQ3ktFwYv5E9UCP7gzP",
  "key27": "DJ8dez3UGNegmx7v9rPMsDpVq5Vf31QWD4mSu334ejE5tTTDUpAK2ZXsGUnZDrZA65C7k9uR94aAssHgzqMUxhd",
  "key28": "UtEE3hPEKvuPFiLN8bz4N495VRbSg7CbzdgxrFban7W8upfqD3ochGf8CQj9f9n1qtygLhxfGChHMjmXSK5ExpS",
  "key29": "3RYUNuhUhEF8CTKgaNdcmajgetX8JWc4rAmeV8QVtG8dMG5CsCRi1S38uvFBGDiYr9dMyuvUtrM35VytD3mJQJRs",
  "key30": "61uc6FqkAckfq6X4yvCfTZgZAMFcehBTQxxJZwXueqPjTqt6PZUX4EGpx8WjrQZCFGcQbH5d6pzCj3puUjnnD5P5",
  "key31": "4UB9NqsgufWPkgSTrkFHrnLvB7k7gyLp6MKJByqAxeFjYXsrcqq1J2xi5UWuj4Xe2e6rP1czDb6kvtiA56fGCAQQ",
  "key32": "3hphEFPke3hoA4W5VfPowgNaqnsQQS7tVNJCNLLd1GX7axDbyp3BRZzCnBp5CTiUAUDSgziZiAfXWbkAKyEPKHrZ",
  "key33": "3y9xMJ6TLe4yEjWriA3o7dvQBryPQriLb9KbpPyV1NWUbCJrS2G7jG576264Tg8MH1EupvgF1tBS81b4onDhkHDh",
  "key34": "2axWKdiLMGUJR3igbeVD3w6cey21MPWDabpJPqxh65oMv9EkPbv6udzY66y3214xtWBg8dY9BBE6xYpWiYtbEvw5",
  "key35": "4FGNubNn7TAMc4M6Y3ddPpr2LcGqaVpb5Ffq1Mp6x47MiK5A84nKQm83MSUhzG93kJ6T2Bnv6Ssp8BDTHWjLvr8v",
  "key36": "3nwSdXtUnXux1Bcv479kX4zXDg8M9xDCXuWaWStCgouaw6v9KBmQajsfGD6bCaVzRH1422WrffS7VinzmJDr8Q6Z",
  "key37": "31DbarqbwRjHnAfsYskAASbAkB1i9okBe6XPn46ffrq8yJhXHN1RATGLRchbbEKBVVoRTvffAVUujb5VAx5mCNdc",
  "key38": "NzM7fDYJUjYW5YvvCdvnHYUL597pocwjdEqvvzxxJzrxYDh4rrmJCpgoA2VAh4E4yAp6PhbYc4RSCLvbE4Y6qXA",
  "key39": "5UNH9d2fumqEo2ARjUzjvkA29V3oB1fNgnBN3vgovpLLmYerTrPGp3zZxZTXjRidPAUMfpetqfoHQ4JokpwGfWv8",
  "key40": "4fwVJ5R25qNY9o8kuxwj1yLma7cPFDjfMFL6Z71NnW8TsvhCo4UAiGUj8HNLo64W52ie63sqsthUs8P3hmYbUzTn",
  "key41": "3HvFwT8hWNoHYMzdJzyTUMoJvZjz683faZYKxRiv33ZwRRPraHWhkC2tzGT3yDiPZFnJ3wf9vaBKBVMGpfrAWXHR",
  "key42": "3GxfcfYASjTwJZjh967rZ3Js9JbtXxLHXFGVvx2W8UJjAdy5UPw9YPUNj3uvU5Y72JM8kwBjsKD3iD6HdvK92kCU",
  "key43": "z4H6ifkat7HjfrDH3o612raJs98jZhCmj3zY7Zm37ZpbmCBXgUJV6MzpjuNADtA5UhEXwg76CEKUQKVUpDN2Abs",
  "key44": "3rZif3SQjJmuJXoszxT9U3hUHF74segGYdP6Nfot5DcGfHBjZrd6HgyD4JdaJrGzxrYAFQgLA5mUaA4eRMBDycWH",
  "key45": "w3JVUkKct3iHZixFciypjz98hkZazgYDj9rzvCqErS1fiycdvbs8J1BPJnNQL3dkVzeu9aXdo4nyvpv66dAaequ",
  "key46": "5pRHHxVHi1GZrDEC2LNBXjaPwfyzy1HbPi4SScXfkzxTLyQdS2uzhyCSJ8skfGLocSKNTpAz6yCqVvQm14z9Vhu5",
  "key47": "59vjFWLNmuzaKScxTWYwHnM5EXMYsGWWV681ZwcPMFNXezqBLXiNNsCPnNRdh5jV1Y3L7eG7UKL3QcUzJAjF2fjR",
  "key48": "5Gtb9yWXdMtgcdCRAL4DN8kSojB8ciUMCz7LNVXxQuBxqz9RH9MbHWgy5bwubPDafV9Z2m7YjHMXgy5YCxnpoW2A"
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
