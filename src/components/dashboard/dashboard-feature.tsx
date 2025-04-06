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
    "2uhgrE3c8im3dg7fPNJ2Fymt1GDsypTLJCFz51yT2W9YYRLRq5ps12YrkLaaPuWqjPdVXMCTNiLBAT5pdkLr4xRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHY1pDbY1Z91VgmuwMrTvasCPKcDQz4xvRLakMJ2Wif2urGqeeZA7MKunYB3QA4243CYvh92HkUEFGSpotNKstq",
  "key1": "2az85XggH2TZJzqhFq9NnHNm8uYhLtGzRerZXchp965zTVNXK1LfMxheAuEJLJKC2nNxmkzsxDX8P9BjGtxpmvyK",
  "key2": "3M1QVDhKT96qohHYjyDoGjX5MwzXzbfjp6puaMcdy9tdELTsGnvtu4k9xNni2JdcYXvH9dSgdHaB3gtHw6vZszeA",
  "key3": "JTmMW33FRuqqWd3WvK8UNZDNnugLsfv7EG8xz1K4WCJ5yGWm3nTFuA8vq8iCcmqHhrEXTJKToe8fecnJEk7cD4m",
  "key4": "52L8oyZADa13FS6UL8HkPfXPsP1gVRUxi7K2uFpC5gpk4bkaJKjqcJRNC2ZAaBJXMUiZ7Q6mEWgwJpoGBirPetpz",
  "key5": "3B3ixqqW9jqzPtVKVPTTpVrky9wJUV5UZCrSy4CvEg8RYwbjMaSFrfUJYLwpRMcqM2nCNUSNgWKS4VWXSokSDF5m",
  "key6": "4MQS5z9MwxT3JVajHc7A94zEAaMCgg1RsVd2jDNGTtoUkncsjmGSaHDxYdg7uniQTXLTbRGw9MYTz3rPV1NdvtMs",
  "key7": "4NjRz1a1DZGm6kjKnbKxyquaqmh7USrfrzDMBLVfxxRDZGTAawAG4Lhor9f8vTNCrXUHSGrW5pPQLqMcu9eArJwu",
  "key8": "2osgaPe4jZL3f9nsuDZMD8PmbvURn6nWi69HKi1DjZp35HgU3XSZ3Ad2JQf5Z2k4JqFkjkz1yBTy138H9coqPm2t",
  "key9": "5r2Nd39N9AvUoNMMosppYMAMqKCY9EXripjS8ejJ5wo9TZesrJsfHEGsJc1wrATXqbt5P6D7RQN6u3moEB4CrPHg",
  "key10": "3A9esCcQYUmrsY8KL7Gnj8gPvwHvQugMLP4ik6uuvYkXn4z6o8fjJXvd8o2FXd8a42yZHJLSd44Uj6DjARMXuPF2",
  "key11": "dr8K3Bj9HFusybcCDxMooirxZLxsTtawdc3yVNsHoiid6ur9huxJ1tutZNxdw3ouP6PWzULPZEg641D7G7vnUzW",
  "key12": "4od1hT7MHqGLB6mMKGGCmmetg6Qyy3iBVCR8xepz8K3nz1gQNq5U1bzij7bwWG6aZzqTk191JGWYEAyeR9iTXZiT",
  "key13": "HZMJHbNvmWoofzqvabJAyAnvGHgRbHBs7Ti7k5Gnjr9m9xrWkLnrAYnsnuaNC6xrevzeVd1T2khLcCyohjzPUtZ",
  "key14": "31tzHNSRAbHKzDmyLRwCyPXjRu9RwnrkfBQLimBa3cRPYkwpuJWbBJXX1fWJPdbZxZWDrKv6DCNheWnDfh7D6kuX",
  "key15": "Ecve1N2P9D2PpHfySBAzen4Hr43RJry1Nrmke8jXux7jzkUBFUkuvL1Yew5Lsk13V75ev1SXspSBMas6sDY9rxv",
  "key16": "zjUjHB8BfzpHu1m1FgrSADWH551REa2RtgpTob4wQvps1RX9RcDd7Q4jA7sMdZhD1Hzy8RAgaetHv1dnwi5hJZ3",
  "key17": "3vqALrwEZW3ZDQbsY5PipbNeuDwiTkGAgtHe16AHP6u7g6NAnG7hTvxsdhB7cJEX9FfFCqfqfRgxFgB1i7j6PGD",
  "key18": "4f5M4Mk9LregiG7aYomqPvcMtS2peomgKs8H8fFJzXDUqieyHbiWZwJ3y6W1KsLEwPkwWHadU8agqW4UT6Q2Jf1x",
  "key19": "3vmaFzmiTTNLF2TRw9DXptsTMBFRHMfaaKQv5mgwvUWHtAJxGku57xReeTgTJ553txrYBTKwGHfzx2xnrVnqs8d4",
  "key20": "66ns4L4ck2vriWFqtYjG4fUFAWHfVewimHh3cMeutfJZ7NAwqHJz6tB4o9r6Wr5p95RbHEf7QdL7CDXpVdQLMksa",
  "key21": "39wM7Hy5vJuQHYXKNX8SuQDWbjwC9CJ3jsh7AYiwZX5aqfrSWUZJqkgkBtZoyqRdKM3WX73hC7t4z8gKuMWuumwA",
  "key22": "2Rd5QefFqtbo5o92gYr92Z6Bc3NraqigGEHk5AsFgQ1w7pvM5pxLy1KqxCPsJzkvHZfCnuXAr8xDuy2X5ChU84sj",
  "key23": "4yjuzKcVhi8z2TJLduMt4v9dT1xnG8TDJi542oGd7XNvTWg51uaWrN6N63FkoCT1g43heRKPt2M73PWt9HLJhdbt",
  "key24": "2j3vTbFzbpz7QDvxUnHDUT5uv6YzrWPQPxjRBV3WT4bGL7r4zTuDHVo5175CW72dnx4tDhSXFEJ42HJYDSJPnjb2",
  "key25": "5tKmFLjXBGFdefkcdWWE9asrBPYgWDHYpuSLySKmRER1315XsaqcQaz3gQYSsmqpJKZo7tRkSYkxzitcQmd7Ap8v",
  "key26": "5JWXyZZRZMjJJBiERnPaSYyrYaJJ3UTquU8v5WPCkVVJGaySiCHTWo9pud5BbU2MTyqwXn5fqwvmmRzFt9uGZ3kG",
  "key27": "4Z9csQsvjjoWm1SfYHeCgx5cYE2ZEueC4UUHk3gCeexE1Ed4NybheanNi7tB5gM5D5PM8YRr8VRTHfhiz1XC5auh",
  "key28": "2FU1aJcaiEsJETTg8UBr79g8SRiTKdtTUUhtULgmNgbVn4YZwWumZKtEUjAujtWDgRZbb7CUyPDbnoQZxXf69g8Y",
  "key29": "5RT8KZ7cWrESu6mDjmvZdax9JJk6KBiNuPtdFran5ynU5HZkLcdHt1MSKq28mFNMJzSmftVTMJdw5ceLinNY8WR6",
  "key30": "37ZavGERLjzxwf4TKkFm2JUrdRreBiaZfH85iCfd7eYDQbYrf3vULYd6UEu7KfLBvbo7vVjb1mFmMrpn7oxYnLw6",
  "key31": "3TWs5M14sBPJZBzxDxJoSXWGAYfMjBbjdVfNLG4sNp2AhB6xQNZLmHYZDtyaioxe7C2C2xqN2Ysu9DufMDXzzRgx",
  "key32": "5APPQrv8BqCXZ77dBhAw4A29Gqezmf1CF2cMcpeJWh1MuKgfxSEm8Z8vN13gVRt8BhhhpPGdaA51SRe2wYWWkTqz",
  "key33": "5xJQjxN4g5U3vTeATAUejUWg1VwXEJz5XiEKmStBna6BhtHAL3s1Px6xgAob985tneihZ1cTjDufrPmYK18T1cZT",
  "key34": "2sSHUz7kS7EAcbrfg3YQjNdsYghrWAFzZPjj1fgHSSgYFSYJLBvw81mxuyLdWd9qSuqdvjrvqARfbFZZvMin8YLv",
  "key35": "58ZAWWiEzUdvm8QP73Cq9wrTb4FkwBBikoccHz2Ynow4bpJgRu7WuvSP7zSR1V5Qy1xxBEB33jTLtBca6Mx6pz7s",
  "key36": "3aiX7WVUdTvRRKdbNjg4icGpqPAe65ZWLkrEGg2Q4txHLWfsqf8vo3vQUeGDFE7WtZKD5ja4egDQxMgeRyv5JQKT",
  "key37": "3hT8Q6xQhzyy5v2zqN5iEyDJczXDVr9HhqvGPkRkSCQfBuAPhAeEEJgqEQAnFX1k7cR4FeQDdX6jtNmSiEtsRgwC",
  "key38": "31MEo3tgaYaPgHJhcufqQx6EHeJozLjFQY637j3zKmqFfX2F4bpAXNR5XF6VVp42nuPcWrxRx2zrVMs8syUcnCC5",
  "key39": "3JFVP4S8HjrdFhehVmDu186skVSmCPWqLgE4mMFMrQWM2sAaJBrEE1gXeituJgKHCVie7TsFGUaiaFP2tEuZqKC9"
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
