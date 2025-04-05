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
    "4LeVxjiABdKZBfcgznTYizZfw71Ywss9UHNrUTQ2doR5psLjxgV4kkmf2uNSUUNkjzFAZgbGqrWE7NAtQipJuuWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9hdmK7PF4ivscecLvWbiVHer8Gx1ydSzcisM4qnPYm8FpPBEMiARVt5yb6mKFX8ztAWnERZZHCcAeXY231LJiV",
  "key1": "wfHjKHo5dFGFp4hyUBgx7sMZXQH9MjFP79NyiymXY7CQez71pMGFgQDYA34fMgnt4XAbENMd4qbgWGZSzbzrUrG",
  "key2": "3HEe1hGqVBcAp9KybyjzPEPbSm855ZercaYbhX39CNvN4D7wZgCvenykCn91X8YcsbgbAyC3NThwttHkSbtDJUR",
  "key3": "55qBZ9GVSTy7drJVZJkzjshtpub7jNMKCJ5vTvogH5QNge3zpvhbMSux1ozxeLs9rDcf6UHeWRPZVX9vqE7C7jzc",
  "key4": "62eYzcNzpCA1k1Mr2JASsAAriVzUNs6738J4WRdipWpWEkTv85mE47Z5tZkR4fGAN6HZVwzjbnUNSWW9tqGcEqGQ",
  "key5": "2uWN36vFFwZxwirgMb6mLEHDuhiXzc6BZXDPcDXFRtvxToZtcB9SYbB7ubvHWp9iazicCcc2NX6WFLFN5tjJTaTz",
  "key6": "5CqcB7QGw7gfcNKWK6mAo8nW2HTvfTjLW1BzQbMQn86XRyWjeym4cDve8ozYj7Mxv1MCqtcrYUk4RCRiB8Bqk3qb",
  "key7": "5AVXxn8BwCETfRiRMfD3vnrLvWpSSfsEkrA3QAZhnFxyfCsAQpm5w6ZQwtbey8RQRPpbKyxpAqgm11bwdvdrxXTD",
  "key8": "BB3JGBaTa5QYwCcTXcywjjHegJuauPDRXYa62RVCC6c3pqrioKGf2Bpw3j8igZZJFUw9WfqhNgAypFEQsqoeQRF",
  "key9": "48AJ7Nm32KD2sHxtqi2pHHE1iEighpf9x9FmKR5TaHZH2ayFBhbNeMx9xJzF2zrmzBzEuxtJaKqwsKf8JBnoKnZd",
  "key10": "2e5Nn7Y1HRtEdSd8zxgf9NHtK8udC9toNhXsw3bZ967yk9HKZhbVXDgnmMTz26JUdWUjMSvp81yBMZR2XLJDRH9G",
  "key11": "3eC26xNorKSQ37BputsrTgtJC3T2xTKPYKkbmahRsepShCSHzeDpjfj5rbJM1Ji5rsZqqU1NgKJuxHJM9N4FABCG",
  "key12": "3R2znDDa2RXJZ8dgLycEZaXWTrGDJLSGcM7NAEarPfWZnSvAmSNY3AwgaGbvavL32iFkTbdfaFsYh1ekyhKganc7",
  "key13": "Jr4UUuDJNFx54GEBgoS8ipz9zYC8y7LhYP9vsKvXwwinKbgr4LBLfF9hUcm4CUCiuwb8iRKg9aSiRJCtj1FzrH2",
  "key14": "3SdwEq7tGjqTCKCUmwUNPYvQCJppZby4JrsGk9egmRnTyxedBafXQCFKAzqivHEgwF19L35u4pZhKrTYvEFUuxER",
  "key15": "2REijERxSUKzqSwEpTTaFh7s9Rnd3fPQvhwx7GSmSyWu2RhejbV7v5icZBaUpTX2XRPjDvkLiMNGS8DXRHE92MKZ",
  "key16": "22eGd6VHhNLfgJKuY6E1SMdsAiwyHSpmoPRJ7LZotbxKU9LP9XX7pBtCfDcbnhaxBvG1bmXaZ71MTFnMCko4wcVj",
  "key17": "3tcGF9pfi6pmpADHDaJPVtovKCNEnjFyPXUSY71GP3BCgwgJY1QRZezTCxQ4zovXbyz82Cr6sPtMDxDWAA1LB6EV",
  "key18": "2aZm21EuUZ2KxWZE46EEqpaYikUkyjPBakbGojvjy2LHjLydqjUMoaSYJiFeLk7TKtxQ5HH9XRbuw2JAfinXBviR",
  "key19": "2NkPnbVWE5fp2cLTUCcVqrw5DUZ4sZYVJdjFoMEXx9AxsxxjCsCZGHLAXNheLfnwUVzaegSDV96fDgGgBs8SvSA9",
  "key20": "FFhbomxcDFBuFVUvFMZkWsVuoTVsBuxAYPthYey4WmxnPRZEHG9xs52YjEG8i4W4kspHVMoqmDzXhCpq5Zan3WL",
  "key21": "39JYsUZVSGMw37G63CvibNZkd37MppSvqTG2qyEEMZcF5SVaZBTrFYPG8pu9deV2j8SqHhD4xzeChephEsnR9bw9",
  "key22": "3vJHPWj7GtQjDa43iPCDfZx63aFNUDjK24a26uyXgrCJhsRDj2eTdpitAme71reGr3zxE7HYEDxiAiRCk1KYALs1",
  "key23": "2W3zdecPVmqVHY5pUkbHr5yGbDGgqdYUAXA7NT9Hpk7PiBzy7Zbsm3x2jdNhBxyLtW3td3kFtWzMbsRKURWywop2",
  "key24": "qBEosaZh9wc8pgZf5S6bTks5YM8bR2sFWS9LwfftLdizDrcHkstidWWJmcFkHmHyHfFdEwFyS82FbjqUKBFhxtv",
  "key25": "xG9H7wrLLedbzoDYofje9wRVA2MxF3RYmdigbYjwpMiP4tEj3NVH2eZvvt6rYTPbNisgzV6Uti3xjnEVDopCpzi",
  "key26": "39uKT9NLD5o29SoE31CPvrTwiaL3c8SGs9FsYefofkaEGXYE1pRAEDwb5DAzrzDcMTFo7iA5wvwnxKrigR2bs1J1",
  "key27": "QhAQesSev6zzQD7ZoCJZTBXCf38bsNBC9pTwGpFNpH9qvbYm1FL8VmTabXSZeMVGJjT5XXqYdT2ywGZ5WJt4iyX",
  "key28": "3m3ap87MTbwkJoDGVEouqV9mUGL3Griiay8ZUpym1y9ypmiF97ZDkn4w7SQkd29UBMWhtWVJVGYGp99zghM7DFg8",
  "key29": "4Uu53xyZmHXyYWGt8hc1Wdzfvrv7ZUrijMCYbH94r5mZC1wfqjwoGonNKf7vRpayMWB3dQJvzkQjnFgDCQfRPabu",
  "key30": "2LeHY2MUo4D8Nrj1S1bWpSfJeA38GRp3xtxqdD9FijUfkALAeMxqVAchSP4ThRRPo7mneXFfCVA517ZZcsxtqsDq",
  "key31": "3PHKV2y6hpnfEuZrDhMPPCxbS4rVnsBduH64L7WACKrCFkUja6AtgYLCDGEngFDpH6YnwvEaffvTetTwdcTu9sW1",
  "key32": "4W1XEJT1PSK1Knm2v3WJFnbbpt9r3oviMwWjvuEZKiTR3XV6Zj8rDpk9cbjLvbtUdafjmzg7WnV4zTcbktAUgcRa",
  "key33": "2rX2c3JTPvJNbJtpmgMsVHFX8KXEZbmFiAfjXVGJk2VCGLbBN4a61hj7QYusypGNZb2B7pNvxQxZzL1UXGz3enBU",
  "key34": "4ZRQWuBFXGMtwByTfQJpLKHSBvU9kxKk2fu3Emxq84WsMnvBrNNbZ7KeKa5NbQxWBu5rNzKeqmMjSbLqCP4mGAEm",
  "key35": "3mRKxGhx9mRQbZv5fx5PPat3sBcxpUqVhZ1ny1wn87TF5YFxo9FRPWnysnL3JJvYKHvSPv3ZaBi6gQGtLK4eBRYg",
  "key36": "3bTBhuQb3zZof99Gmv5yC4YxeMQwDWcr4yGNWNUtPDqDz6wNFR1ek6x7qtcicxxFYvrATuaj4PUExfSXiQqtHtw1",
  "key37": "5gk3TBMZtq4ggeFDXxPB44FbxcEjkkAoKpYKpgrXM6PemaQ1MqoxyxcCEoKUoCsinobrFFNW6nyMp6sKRtjdfHL2",
  "key38": "mLTeRezWQ3qn2x9tr2wGnoAybS3C6VprT4F5Eu6X1geoXURaqBJnNL9sPD2byCfktkuwDg4Dt9UmMU7iPjk6Uap",
  "key39": "3D7x52KwYpTeBJLuMCNnsrNMHPr8ugSXdY5PzVrf7g1YXSbR1wJSvppqFgahr1scJxbbYMnEKMQMPQb1UHEyBdQp",
  "key40": "4WQBUN1RMULHXbQWbXeLfVkTjpiQS399CrhLycGmAKhEXohrb1aM87h1hsi81sekXtrmqLvsjFYd7gTa3xsSbK3U"
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
