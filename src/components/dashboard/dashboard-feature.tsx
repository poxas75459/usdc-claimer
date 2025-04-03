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
    "4D6DoEKnw7PptQRwMcrGxdgThSZR2yyDCkcadppZtygWjjN1mzZzhpmyH3X2nR41oeGCjUTdMj3W6uYgDvnW5GRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6pq4PCKHaVMhBaWxiX4umRt4ziduoN3gD7vCYGzdGu93PG5LB3j7ws7U8go5mUWoPYeQQAxSnDiKH8HjT5bZxk",
  "key1": "2duNeAYKkXEti5Ff5ATVoCdoLeYyanyURNCa3WSmQ2UBJx4LRWKvkmih6xLKSixhpz42RF6Zfc9VYsKXv6F7FMMo",
  "key2": "5FLYES54BCTsL2aApfpyfA5JwBM4q5UxQXP9cVszNvr79ngyqYbJUaFQQzUVSSWieduTxEM5N8AjY9JX89k7QqLT",
  "key3": "5CEy4jccjuAkwrQZZNT92c51RTgiBkQAK6B58BpAKkWX67ctxcRDiPutPXYkXnoB2hbkQxfSrhycTTf4pChaUw3a",
  "key4": "3FpFZDBaQmpybaKZsYV1HZCK1E3JqGaaxLbNUR9fRZpTytKfu2DeQ8kCtub8wWpQFqmCtHjArcHzNpuskcjP9U4V",
  "key5": "5q9MdASaur9NwJcqQcHcMzm5PDx3f6M8FpW4HUBmbihZcBrveaxpFzYNLMtxsA3hmLjCAujgXJYEbCvH5TFx9kQE",
  "key6": "4wrpTCNex38H1F9s2dC7W2egfyr6y5X2fKeiWjM72AX4wQuhEZ5NBTpFe7ttfDr6b69L8Jp1XB37S6SUdDYxNGJh",
  "key7": "2gjPkg58Bje8dVV9hkVnQQRaKNpPC3q8F4RyuvvrUYSP4vse3H1quYBpazdEJjVBrt2jGVQMqJ3gFrhCTngq2dfQ",
  "key8": "3KRQ3yNtckQywCXSjXBKjrhjELJzHobA3Uy8vnVWcwhosW8z6D3YqoJsmTSfcaX6yQKBUb21rpNAdpQpzKkuewKg",
  "key9": "4kAXzzouKZHYLT3wGVxK8ZJPBL2m4oUvBvvgRPdeDqYvLzmZWki1JP3FgreF1pQxf9ETJ3RQ5ire6ChZcLgXcaQP",
  "key10": "4FTTRjtsmdCuhoXEVX4g2P4WAXTHbcJ4jkyjbc3GmvBtDbYnPNKjiKoc9RHCmfX7gioDX89Xpr8Ezw8zPiQ8RZGU",
  "key11": "55vrhND69HkqFEUNk1YVnQfe4BrsF6bA2EWHQtd3HrSGJkK1BQi3YBEif3pKuWf3oY4T7o5YVNRpf8JP3fHmcg7o",
  "key12": "5iemfGMXMRg3iHWqtg8fdtf89wDnAUu46Z6n6fur9PrzYr8ZubJMpotnow8QUHUdYdpphPFnPUMqN3BbAy4dXNnN",
  "key13": "5opuMTyXXqdFXrmkxmTdesTpERG9jtEwp8rUF7iVbBhDv3uPzzeN8EMtU2CWhEPAz9tnNABnvyxcYF9kKSgx2ycA",
  "key14": "2AVTUH38FDyzaQ7W4UaX45b2PdjbiMEMthquXJrgAKRwHbXJVnQAa54nLifedNmJzmthguqTwiNis33kAhceH4QD",
  "key15": "2YEzJb8vhjXjmNwjPvmrEZuFvzosk5TfNXPFQwKBKzmtF4gP5QpuXh8fPikj4MdC8iZHPYioCQCR7rouu2LYTNti",
  "key16": "5EMfCbXMLVVHWCf66YdrgVyifFT1MXkWc1N4qBV19KAXMJUQefCAetAntdJMYq9mdEPNSEZtcAuhDjN1khh4EzvS",
  "key17": "5tXofkriS842mpZZbgksyhvsCxVsyYbtMueMWnaidCoyR1NoHKHxHa7nPPyyfwdDBzyt9QVaTqy6GowHKqyb2RvF",
  "key18": "3AnHzuLr8mM4HMHVVDENWxpziuE1CtpUJQ9ZurW3wsRFeXDVm576t88AwvUUMYPAAPbMb5W2Donk4qKUZqUU97gu",
  "key19": "5xLvyzJ7NwXfkhBReBib4erEFH9cZgCRNgybE92sx9YCr7EnzB29VCpsftuAmuMTV2oMWk1tHVhkY7dezpGLLfcH",
  "key20": "4xeX46SvzBAfb7cC1FGhuJcbAQ1VL2Scu6msPhwn8o34BcacjY8cwygpPhVXq9i8uogdZCCaWtCBTuNGwMcNZa7v",
  "key21": "dqz6qcjaxsT9eyy3hUkpuMLyqrpNtzVq6TtJA6sgYsEyYE5TytkiMFittDww8c7SeXPuynT2kEVEBAFDeenFwdh",
  "key22": "25qdhxwzB2caAw6RZGE6aBRc8WiQ8Mujr88dHUSBuWvab7bSh3WXAfFbD6MZkZ5CRF9QDSTkk3C41ab3ixdKTzJB",
  "key23": "3GGpYzzGwswvJcnbeXYeJDCmaBmEf7obsQwo6saZDvPc82UAHhGqY1yRzv1iihNhuHuro5WStPChpJbajKRoAfS3",
  "key24": "2yNsGt4NNggv1KDqeW66iNfejKhdEC5qTCCgF2XRAqi7tsLrkMKirPtYR9n54BpZ6SEuWTKdafrzV1GY5wqX8St6",
  "key25": "5TK7VPZgDxBEDFJU3bSdW3mubiVKXi9LNVpNCxwm6byA4WkpXzCW1qvz7JtCtmsZ5GwE3vZTbZK6V2yx8N7FJLUJ",
  "key26": "mxVigu7TUSMEh5Ri4WULSKrVjA4zHXd21Cn9tAzGdsqxePXAgPwKNhCp5m8JtEwmfyuWeAoZiWTyrx465E3nPif",
  "key27": "4uv2tMbvwXC33ajTkJm93R1nGUaxxs39PSGyPNxPj6qtm63JCZoFSd9y4YQpwZoEz7LLQWthtZh6qA2ydAVWu9Wr",
  "key28": "36Wgf14eHi5kS97UYBeqXeVsme6px4HPWqxyLUhUCEWfKL2AhomCHeQgbJmoS3DMUb7yeUqa9dipwpxtPLeAcLKu",
  "key29": "3Q2jgz2VBMwd5MKbp4GD5Z9s1ukGi3Dw6Svp2NUz2eLEBjBqxtfNVFG7FtQYmtHwJPv2ns2pCFQ6LFABJqv2ZeBZ",
  "key30": "MstZ9mYmKAok7irHxrWm6L9j6aG3okJjQwn4JSCEssi6Umnn8gvWcSkCNrcbr3smq8af7pYvSKmoXnHNqnQBCiS",
  "key31": "43yWJHRtYFVMGYwzH2w85qWPce3aCMgvD9T91vDntUpAGmxm8PP2btouZv4feoAsaDpSJu3jL5SiKuguBSZqhFK9",
  "key32": "5gr6BLpNpWosVhp5XqXSk8iLdYiJQRgYV9kyhEKmZrmcsu2XSB7u56eYiXuRXCpKVbAWMP54FJTbA3iTvVsuPLia",
  "key33": "4ZgauwE9SCLvY5KNTvVKhXGx1TzRaX1D6EmExLUCWqGKxU2P27MZRHYHzEYERMQReFZPrhHX6UVpP6bWE3BVbbNW"
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
