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
    "32bvFKNJsDQkyTNzKZgGxw6GqUFG4guDuHje9qSZZaHRxKwsgbvVx9DF33t2a8SfDwGbvrFdPXPQARxNUXyvHH3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZohrQLFqCdW4ziAVkomHg5G3n6EdbEfzDEBUpUwJFAMrMAxbekU4hwCUUBPBGyVFf3GtFQSHjmjCR4EUvGpPwZm",
  "key1": "gk6j3dB7oNnfCE3yn5SK14ZHPsTpTB1MzHvt6GMM3KP11P4oqzu3uqW7XuuAwrdr9mQ8u7Px2X8edZZ5c6bucRj",
  "key2": "2cYCLbWeg5ebBjSg1sB7SCFvwAgaQbjK3XokgW686cbRT7FuZEPxssCQi3bWHUqChpVUNi53npzq1Phpgisz2Pq5",
  "key3": "56bxwwXmKN8KKFgeXk1qpxHCyGbj1XtVGi2ooFaKX9yT1ogdkTj7vgQEsMqbNxPhs7WdNur7KjSYxLQMyKhHiBNC",
  "key4": "2H5YQppQdz4E8zXkqZeYXWh254YX7MeXax1BGnyMY7b2VdBBYp1ojSrJRSq6ZCsqsvi8zXKWKkHGGTUdkzdTRFS",
  "key5": "22dRRmrcggC6mijunNty2CZKa5DFyNvq3LeLXbHP5fgoJgooFzrDDuddg43sMfK6FV39yHPLkCLTUWfvgeN8JbhN",
  "key6": "2tt6f5eRcdoqVywQu5NdL6ShzYfYjeNB5JHrWrppPK3h53d8hpjnr5Gbsi4ycKH7FMDKZTJWPdhK53VyokXtUf1i",
  "key7": "7jVGJWHffyTNB7Zhao3WChGHKhd2xW7vwqZkrRrJXDkAHV7ZqCnHmfChy6ATSLAxkMLC7qcVvqRZG4ddM7nbgXh",
  "key8": "3KmMrivnex5N4D3STyhBgemYQYaKMPcXPh28Keduw1wnSMZH734AyK7GS9vBeUfS6Ceu3cRn1rNQavbMP35PBcC6",
  "key9": "38QmTBUSqrffcfskzjKZDTUK9RzraDAqw1rpNyfaqpCifMh5cnYj1GpnWQw9iJixnrWFKCB1w62wXg9M6y1sgKZ1",
  "key10": "53fHoRz61okpAdRAeNpwPgDwKh3Ery7FprGrWeNyMVJGz4M953ymBEzGuRZR1giRj8BZpkkVXr4EYKVPL1KLjQNE",
  "key11": "5oqgy5DZ2taVxeuNkNbG3YpNziwFiMSTCbcR4G69outc5oo1vdjtoAewLrbCJwEFckG1ZRJFwTdYQWaww88p88hC",
  "key12": "5N4ptN4vcurNDVd8uDM1qQX1pWJZnh7Y3Adiy1krJcVYsTxZgYrBfjAxUV3GWTggv15KbdGwpp6mGUAW3NpQN6GU",
  "key13": "2uNxhCndzB2egCZiP2CfcuwpDwLfvhYuntJ9LHkpecVUKdhePMZxZubvcx4pcy5QALe92m5aAHAdev1xB2ZYZa1h",
  "key14": "3vp9Qn3T6VZMY95Bpa5hvwMQtiFBDgYeBYDMDg9fsa2YuAQFrwfLj11Ro9rkSMHzPg4BPYhfdVcUcFb8aa2TDCXB",
  "key15": "5y4kTZqvZdvgsGZHvKFYgsY9C2UdVm9Sr4JWFbmaGyB9CiPBVqATTAw9Av97C1qHg1v1vmVryqwNxbpaN3ucVaB8",
  "key16": "4gEi2QMrpew7hTGdkk8XJou21ZeCpi7WnuRvfyh52rXbRLVHDBbRKu1yVt2c8kX2vJsRDFgQY9zemXLug6nKnFT8",
  "key17": "3iPzWtnRFa6RtFh9t7CqRZU3zB8zLn6BuxroyXocynmgm4sjxTKaNSMXFJ5uKyFQKu3WD5eDVe5mMiAKfxherRPp",
  "key18": "5rxnW4PYwaAXhPUdpZtAUFEmRksEJ3PioiEwcaDH5AQupWPSPwN72ikG7iPgN3eaT1g2NWdEycGxtespBwjRj2Ze",
  "key19": "2HhpnWGoqRwLRaqgvkUgqASfTDAKsc3ovocPNfdhVL9gdWtKvSen6dSoC39KXFq3gqPoEgDmKmdh7QQS1J8CiQ44",
  "key20": "4WtYtERBUcJAtt4GNPDN8xbuzvFyDnfiAd5d2aWsKdqen1F5DRBnfjAmU2ztV7MhQse8jcp4p7VjfY43R7DzXtks",
  "key21": "4VrsdzhSEDwNthTZjfDQeUcLaDFL6AjS7R4KbwBPwHCKxLHCfXmmCtD7pMftMrjXQqyL7H8AG1tJB62o3Vss2XuV",
  "key22": "EuTMxn3KkWeVwoXZtQfpf8H7VjK1v9zs6dzrVrTTr3o8mAaBcLyanShNrZzPLdXHJZADQDx4rXRFJPs2bHVNTRp",
  "key23": "5orSqxgZWoHtR2LnncDCuijDHFpntqFDdShQRUcQ12NAmeqVcqk1vdqgbm4ABDoLHe6R9Pu9YXbGzMaXp6n8hq7y",
  "key24": "3RbRnCXeM5D1QBaUszKR4y1mmjqds8ozc4CAfbjfqD3wPNGh6V94EEdT8cKQs4pKeHMPxgLSAx6qnTArfxyRZryR",
  "key25": "33czJvzKAdfLSj4kt55Wacp4o8bUwrA91UVuK9wtx9QPjkDtawTmRbnoFzv2QsgwR4xzZHTTNv8tkKFWkxvUNar4",
  "key26": "46n5x3xKAsZXgSDBPg1yz9jpx35ZifHop1qWA6bf5VJHp929wBK8c3tCvJkoyi86r3SsskaQXTyWp6E3HxmaCj8Q",
  "key27": "57cW8Mav9yRpLyJezuivf3dhqffAsMQ2xYt5MAQikmwngUENgrZZhqPbrpPdfHBon8cQxpXf6AmaJbptTkFbhL3W",
  "key28": "w8f3ngHt8cjQScBGM2LLeq9VEBaw3qs7Utf6J31WNqmPe1UBpqqhAR1fH9QpQs5sPwcxnanpfRLDi8QccFTJwrM",
  "key29": "4N1jnjTvP4vV2RraRansG212EeWUqkN6uJ4ioEvZ5Hcmkx5P9zVmYcz3u5iE7LfvzkNrgzRefJxa3iJKxS86KL4m",
  "key30": "5z8WpwHqGewkGmFSjbsAXVs4YeNNwi9af6cUE24GgySZvfyCrX81hfLGJLXDcby2zHNShh8V5ZNPTNCXziqcqDdY",
  "key31": "3nto4Fp4ZPCfpprfU5KXuaX1Gc99ay274Gvs8pr73qfRDFDVZQZJn84fNPff6RQC2z4U4CDHuGApTtsGcTyD7UTN",
  "key32": "34tBHv4qyQvBYT45FHsvm4VfxGiJBbab8BU2mtSaX3PQp33QJUBGaBZzpTewWmUnygWaej6Xd6xUtWRTsqr1tHoU",
  "key33": "2V72z1SiCgewzJXS2QdXnMFfqQH99iJuUmNfyjxmSu4kH9MVxdSgfhP3hRcNuEoL4cEJF6GcoWGvK1z24yzTtoAi",
  "key34": "38eKY7bAbbH8uRVNtS3easQy914sPwpF4oKTLuyxG3DUbYjy5XajZPTgFspK5pEEHUaDtGvdYmRM8CvbaF9ygHNC",
  "key35": "5BEzJV89VPKjgtjtNtwtDoosZ5ccFJkkTxCaFc14avaiYj2iJhK8aDSNHKbdyxRZ1rTPgjNANNj548mfFzcYE6UN",
  "key36": "4H8j5LB8KeL5WSgEG44DpD3dSUqhtcjTewjhU9XTaY1WBRPZAxWw1g5xzsRFYcnKGP23jYw1VP5MQa9yrQQjJvrR",
  "key37": "39Cc9NnYTjXdQnkaRPJbAMZYKtyQGWg2BbWFhSGXYmtDgoCbYxdrPXkEcy1H3Gwmp7pC1anUZk7fz9gL4F76fR7m",
  "key38": "5eUprFT4KFV6hdJFKCk1AnBzE49tZEa43nHjGRx6SWdso57c41zXpkGhkWo5LprV5hVUmy9EP6A67djAQ1yVZ4mT",
  "key39": "3guZs3bHc5YrX6ESpWGsC3Gti8AzxdApaaxhuL7utKTFgxnzuhwfnWV5Y9REeFPtXXcEgZPmC3XRQPSwWypmZnM2",
  "key40": "BcEMu9ahHDkrK1KkRAifVzkbsBgAJt1cN4dsi8EhWiKVMJCJE1f3UfJCPGGUTwN9VUDDpezeaL6BgXTXXdrHQXZ",
  "key41": "5DRsv6FxgYcN7xhrxnfJJp545UhrZMaYYBXBuXm58SeXVjSg1N6QqzWYGcXBHgfZaED48DXr2cUZoH4CM33hLb1L",
  "key42": "3W5uTjdR5o3zwQW6daE9w1CgLq2oDS7e3zkFnyi2YSP7fYEwbc1J9ufwmCYcLNP4EKK94Sgrg9ub3fEhwpUbA3gb",
  "key43": "2LaoGddpxSi2AfPF5H1rLUTToAujynJnyFNVi6A1FxVodjt5o6HieCXjTyWXLPk9wDzxwpJsYMsV1Z4RghFCFVvj",
  "key44": "2N1WnBcEHnJ4qqA5vGSgHYeLoDMr2hpVAhX1byWDJ8HLNcgx8ZmL3mpXfkLNLYD13ydQUhTFJU1yLDWi2y7inKfY",
  "key45": "51hRm2bu2HRfmByVzcatqEugtApUDnuhg66vBGipohU6MCdwhf2M3Jw13MLs9fV7VzeJigm6SfaFNP3SvX86EuLA",
  "key46": "24zfvaHt5d8eJs3RKw482HhBHGf1vWBnJyaj3Uv4UKNLB6P3N51xHzomSRUk7p3MKCmnaa1kAofUCWbCh5mYQp2U",
  "key47": "ZEpMHbBSZA4Mj8ZgXjDEJ1VnnCStm6J7TDj82WpAUhhLZ349VQikAQEi2PyZiuVrTo84ZPkTKBAvJNHE4NGhVLk",
  "key48": "4HkRCd882aqrDf2WKvmYaWNgJnwhFKTvsUwT53dWMtARacdXCmoYsE4VLTC2NGjrinFRjkgAKh1LBnQL8wKczZ9p",
  "key49": "3n8GCTHFNzEbxnTorb1ZgJTYMsUvRmwX4WVWjurqnbUjp1b5Pv4KGJRjMxARomQGGH1oapF1ueyRJiymKU6iKWmL"
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
