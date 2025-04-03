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
    "2htsA8TDWSAGyeiyhjrXuiM6rHhxyEKyGV3YFEp6yNMEzSPB5YL28JZfBUGEMrsDmS9Vb3ZqyRAk5MeyeAGb6Ls4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5Qc3dtrKsp2Biv3cnrvDzdPWJ1rv2iNbvzkjaoZoQ2nvLiLRLj35M9i8x4xyoDBU4vVd2CVoBi3GF4JYCehgG6",
  "key1": "4pqYpLyHHszr8ryxXjywux62DHPMmLpCDLeV8uRd6VCzU4VE5wYFGC7ehnruiT1R8kpuxG2Xm7aKsZK1ka126S88",
  "key2": "5kUtESpfRohajH242cNLgXxSv9D97Tj13aX9X9ysNfxD5iBjQHAX5bLGuynXHoUZMHvmCgNkfrBXegx2NVeFinUj",
  "key3": "2uXTAqUgEyRe2pKBR1zuSea54JwPT5iEjiVKQukDQmxba6KMquYqgqpwyHFEvghT2quvGghGc7UdPYKYJPwAHFqG",
  "key4": "3bKRKZH4WEeAhzDv43U1uFpMh6zJdFi6HYGCMPuCG6TXRtM8v1w6nr9JarTpHN7kYh7mez6Nka2USe9TEFub1r19",
  "key5": "221BH4SE8oNVTQKbrfL85ZKc4qNZPW6Q9XNkq12t1vpSjEkZA7AamhVLjTJP7qsHpbCArXSKxhcMFGVdg8B2pLyM",
  "key6": "5wLkiXuPP6t7VGpeTkvU6uDJqQMetGuHCRBppwSdDSzupPBB9PeLy31Pdc5VoGxW2KL9UcMd81q9NqZbuDZQdPFb",
  "key7": "4ngjcNEd1yaLeBjvCnx3iCuBxegdecW2NZxQYVbsjF9Buk8VJPh8M5VkbHXazakR4mnkNKTX8eEDCmWz24F8EMCA",
  "key8": "5F5JJGvycfYat8CWJCMkEfUmHwSut6jTQDXmTjCCrcH6ai8YsqBGBjtBtA9AsDcmM6uC4W7YMPuv1pGrc1DGCfc8",
  "key9": "2XvtHxcjczSi4KSsHZvfqq1gy379aE73uzyftkornQbc6pF6d5kcSqsDyjUekDEn9uBPXed9vF83Cy149uRzqeJ3",
  "key10": "5jxcfdFqiv6JVXbxyzGE27xKG2s34DT2ZV6N5XuyM2rCUgp4wJuqMYFjy3y7qfoZ2S1KCxECUUiy9TfGn61FSUd4",
  "key11": "sxLLETnYgD9ALtikqyDah9D7kJ9BqS7r2AMEDY9LfdAheuUhFPoSReFH4afSsirUhod32yYcUeVCQ6hgPXgZWUn",
  "key12": "5ZTAVBLiEGRBkmDkyEuhPC7RAAhYwxusU8SWkidk4baecHbMpZxEsaJfK6YSRWnjgMJbN8ASN2BKDuFcttbxCFna",
  "key13": "2g2gicBjwRGci5PiRgwnGRcdQdqyELySC2YaRhwarLDLKausdbBXcEikQbDgTjNeEhetFhzJZ8cFD8GTE8vYQVHT",
  "key14": "uZ6zZMy6pMxiDm7v3mRnAYX5rGPkcP4GGTcb8mNB5qWKk1KAC3owHiTptTtDsscWrb1zWsSS8JPFYqo8JRTZuQM",
  "key15": "26gmGuZpKNbuYhB8ZJk1MN15w2zCr3MCHbB5BFb2tKFxe5paDgEwVswk9CseVvs9uyWMLdDNDoriZf9ZmE6obELS",
  "key16": "5sewWPTpKmrkes8WmVzmqg5C7FwGv8Gt1zyXFF4wtaTy9gsy2Dt6qFFx9mw8KemnVUhuGN2xgDY1RReiSS94QNPx",
  "key17": "2V8a9r2Kbe5JsGAK8vNJBhxtYSquEvScSi9PAWe9MrLvQqdGXttKJWkiqU5CH9H8dLnpywrnXrLjZedCR7HefanV",
  "key18": "5nSKcvkGNghFAZ9JaYShcRGTyhWXBfQDF218QAMJ7D54HLsUPkMsJkgyD3s1dQndimVkWyPgyZbNBnjRjCVUuKs3",
  "key19": "5Me5BHUyQNRwUEQi6opqVoyQdrRE3ToG4DQUDsRi6eAZQ9UJCrUWhcBXM4XY4E3DNGT1TbWgxQu2NcJQF7bEggbL",
  "key20": "5u1rwzixzvX87WKy1uDVMeALswN2TP7gHVTcUUgeWE9m2sakteJVbjXCweXhJX4ydCYLEbvqZuYLfhovvXTmejGK",
  "key21": "43NVX5S85FF42jmMRhZ5gejr6r9TPaNcC3DxZw5GG8tV1J3EswHE11hSPXPYi8Bz3pVzo2RbDgrVrCy4ppSTAMtX",
  "key22": "62EMqaSb9biD1YFP2nd9JYntcLqpfjAbucGnoaSF1PTWW4o7QUjy4j5iGz4M2sg9hpAJdXMiaX3qXAWK2BS2ktH",
  "key23": "5bhXKnqe9eQkiipi9Hrjp3oNzXiA4BQkbxTViq5fV15mUz7LKDcqZLPZ6pcFowYmobHnnpsURMJhSF3YCDDEX1Zh",
  "key24": "5Qh4vE2wGb1MqQ67neDhKxPiYrGNHhWdUqsXtswFa91kCm6BuukqWX78uuZks9f3Mzcy2797xGsHGU13iFp8Pd8n",
  "key25": "4boxrx4a3KARnvhzbhmCD4i2wRAymyjVt3zuCq6gKKiHyoerAsfvsubHtwBAKK4Y8LGpdXNTqyXb9tBPZzeh8bCd",
  "key26": "2eCPJSkqcvfihqJiy92iCxx6a5VDnsZSCCQSANy9ZQun4bsbzhcjjEuHYQ8G5bCVicgPm2fUfhFrJzNsnCz3ae7k",
  "key27": "PtqiA2m5TfW1oFGEY81N8yQ9jFkTpu8T4PYz2RKZa6MJHZxZo12g3nPJvwkYmbg1Vn1NSeDnqVjCDrZhusJSE2v",
  "key28": "2YCgW2SxVtBPoin9T1yfCiqb58Z8dyG8XX4LhNigzyDuQDFRbhjN5RWqUxcVwxFC7aXfQPuLzEaRrytW88bhjuiw",
  "key29": "2YycPNpSqG1aCoKsgYtLVY4CNKWszuC5nS9zkoXRZEtv379V7uqSdg9zLZd2A5akusmcEYeEhw1XxpHK3yB2PV6Q",
  "key30": "4k4Kt673JFgyFkANSMYEra3pWMQ86WfsxHVBNrjRtWVHfeDzFE9cREKYVLWKgSwaqNs68CjPgcPyGUkfVouiR4qJ",
  "key31": "3K7Jzd52UnR77w23JHvaQ7TdqpQzQ8MqJ6482NQAtDgc6HbDrbUt7aC8q4xgCJoKCd6tBsibgygmW9K2Vm7Xd2yU",
  "key32": "5npvQZ63YmFxfsZoag95tzZsX3U4fU6zVcPA9u1ANBAjJUXvZ1B55JHcX45bnpVJij2xT131UsLdW7ctWbYZzmHN",
  "key33": "354dniZY2r451GC1HehiSCwFWHC9sdUGRpSLRfpeyxwxrRLLaYjieKm4327TftCUJVo9FZyTaef8H3ExbWxcJm95"
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
