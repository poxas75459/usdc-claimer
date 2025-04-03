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
    "5pr8W44SE4sYDTyRM8hfh8Cds16YWk8f7U7pdfGSXhKTxPpjQCeN6BAnazh1XLGPRAeM1M6tfjHyrFHQhBA2mDHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xjE5n2cZ8HXvrqzVCQ9HNtGeSYiwvDgu7PHRCHK7yhSEsM1MYYGVLgbnQ5Gkgk8T72j5k3Upp4DfcFKMgrdzvB",
  "key1": "51PYgM3rMkBXYhJGc7KB4ey4eKJxV3ce1XiehMSmmW1WQRGM4UMwcAsnWfubTBrG4vnqDtzfRWdKBCjRwmxt3tF4",
  "key2": "5hoo1L1Fbjrx764ufrcMJM2Ey7TUQh3vaWavbWo9q5dPdvWRrVTQjNaLc9adzrr2p1hGpGSmrd3D2EYvNfmicMor",
  "key3": "2p1qMdAvYUoFeNPDvjdJqSjQNKUZPUfEujnXpVdFA6kLm9xGGRboxqvZW7WgYrJbWCHX5tPDFdY4kvT6mkz17Rz2",
  "key4": "2rzj6ESc5FP553KJ9SDYUon96CwF5iYCxaLTUVnfmnzydxc6HV1Z2RLguniGjeLmaAj8zG2U1TBPi7jnwSPcCLVs",
  "key5": "3w5zWgXnQWsKFCfh6khe7kzpPxZr1ELkkSqk6NqHDHq847Reb8mm5UyBMJxtwirT8Yqq8Jd3CvhKw1voqxJNE52Y",
  "key6": "kcbVHetBS9H7Qx77xQncDaa7obZ8kpKMCx9ZCKrncEvcqEWi3FXbMGY4xJoZRED9ecjUCsW6MsqeSxwUKYbaRG2",
  "key7": "5UB5ZXFqAerBP4hhGc129MMj5UF2ZHEGy4MPFTAFC96ikk5o3UG5MwJqejMWuFie2Yb4v6UJBzN4oPbYd82zzQUB",
  "key8": "5KqcBYJtzAdZRJFSJovGrFG88qC4tk4nRjSZE99vpSdKHPFhRMVFaTnWaMfwApq5QAV6RC8ekN9VRATsMPghPLZn",
  "key9": "EVp43tpbnKELvJmbkhBQCxh9C3VA88P8D81HdDELGsB64Dfq5QUDiiY28jFbpM1k8kuyyvDDFEtAZ8NaWNZ12Lf",
  "key10": "4dwvKZDJtLVmhEQCiDHd7aipRTKCVaRwRNH7bY9AGfCcJTb9sp7U1LbuG9fYJzNGBLUVV7NS3EUojk9BxLP2efq2",
  "key11": "4VXX7GdZjeDVTRnt9V4x1xZmgG53mQmimZtWXMSWf7wvMpxbhfp19GHs5AcZ5KYKCP9hAn922gNBZadZiUyPPxD6",
  "key12": "4Z4QiXVSKLzAm5QuMZKShRSALyonhvMNkw5grA7sPMwDwgV7LTFfLoQgbFAodL9XXakLTNAfGzJXimtU9tKrwgDQ",
  "key13": "BkGyrTfpamKeLKWC37a66fXs5pxHkywdUy37viErK6HMHFzWFv6fxP6zsJSw53enyYA1sLqY53qu3ux2a36JBfF",
  "key14": "63Q1RYyM1uiHhJie9r3aRdEsqfJuWXuYZULBQNQ9tkatqUZuwJB1ZueQPvfm4y3vDtKKmxygPDYVesMqvFiciyVV",
  "key15": "47mB9QqrVzeuJuURZ4QbnvRPtNM2tcc9CQqmQkNHjm4VDCYqVQEuC6GZvnLM71E4Nk47Vjgf9dhHBGCrVuB2C25C",
  "key16": "3UkBWqf1NxRgrWsda78x5qHLVc7B4jetS35arBRaKHG3FTF24egpjNno9VfUCw2Tfw1GdxDYU9Eopb8k2GYerccj",
  "key17": "3B7e2a7MtsPKDnccwifdfrVKB6uEFft6kJURS4DCqrSfHYxNNj54fEkMUBnX1Hy8UT5rVVbvGfskTVY9H8cdnFDk",
  "key18": "3h5QXLsu6SvcQXFrVC1AmcmWvipYAndr2sxJqHNy3ScaZYwMPmq3VKo8tdn2ETJN1hBb7PraEeUMH1Ypr56WyCJ7",
  "key19": "5ZhnonP41jbD4DGFwNJvtWqvhpLFfzVqJLF3E3yaXmSbKkRPDzVoCGTXCxA1rJLFeKYGaEEejaSarMSux9ZyJijc",
  "key20": "37Ash1nxgRCuEnbgTC4djSmYhXw4YUGbmzsL6HoP7svhwhDLRKaDtt2ACPNrwwYL316NGZAK1NqqXym7VM3WQ1ju",
  "key21": "4cMAsH6TWFD3Jms6ufBzXap2ULyW2euqaoDekCAqnwCy7NukfM3YiTjHU9NU8LKTHBNFncohgZUHvhEJianfdhcP",
  "key22": "4UTZXz3PxjYZDLMVtCxLQisWCZoL8GeavwXgHALUBLNPdTcTURc2hBYxZtPpEFgwGbQsfGmfVZoobfWWgFespDTK",
  "key23": "5eiruKMcCDcgw5WNg4pXku77FAThVeDChvMQjKirU1ruKc4G1jyfWKHc6CPsnunSLo4WvjrpRxjdHZkAosZ5WKMz",
  "key24": "546n8ww6rCFtssZdcjz1k1V3H7FBsfLKQqa7FeNH6YD5SXonWarHG425eJjr8JxsZ26iaZZPT2PJjDgP8NC1G987",
  "key25": "3enZ155EkJpHw1VBWv5MN54zySXJoYEgz6dxafXPmtQm9KKKtQm3qmnJo7Q6iLD4rMsLWUXufMQAPsJxr3TNktbq",
  "key26": "3RLuDbXi6sKviXsEXfmjxdmcqujTCLzkSnFTgmUgvmsTukXdmdMMbgzxjUcWXs6jNFRxaViC5Q1nsXUvJbycZFSR",
  "key27": "3XZRcEi3yr3i7EP9t2LsNNwTjhzURxB7RxCogAep87YXWfGWZ3K4uq3AsnkjhxMaGBbsFMBd9hwAj6qFwbcWS7UB",
  "key28": "2dxEnR7dTmA1LbEoB9JzXYazfLmRSxiKuPgZSiAMg5kq5eqCL4BUZcznxBoL7C1sJETVfmTieuJpTLVgjpYGyaKd",
  "key29": "2cAuRTHYESyeTN4AScjb1k4FBAEna3c2htezqmJkCUPqdYchYj17cMpGzCT1ncpYjPSZdyZtdvt86gSWhqYkQ8is",
  "key30": "gYC4mRjha72NMyrbXfogK7LCuVgMQsy9M4kapuwMthktFHw73WTTuNLPbXEzNAYgowHajBZg6YHiVkYNXzD2LK5",
  "key31": "4dvas3XLrixvK1UdiMF8yey4zTHd9U315a1oj8j4caJceFUF4fr84vTekQLBCUXsGthQxtLNHW7HXdfN33yo513Z",
  "key32": "5XBXSYQxJ813tXy7nVbomJNj7XfHP3k4NVqBj16f4fjHweNwcfYPaaE3KZ5GmxadQbqnZuLHxmEWWcdCN3UQvu8h",
  "key33": "4ikqpDUAAjri3z1KJMAFyYnw8CoENS83GYbxv2GfupU1SC9z7hAjVeXETkg2aCxC229N5GRPrQVoiLGsBf1MiRL",
  "key34": "65cteM8QaokoJE6GcsuX2vQW3tDfhqRM5p8AV3dKMJQB9w9chBG1jn3AEedLpLFbTrxThtdHBrKufgJUJ6nkz5KK",
  "key35": "2ARBzjEBRQPJyDx7CfgeZiHcCRWpoXhjGHoXFvVE9ip3uzY83HgEJiyMZYY98gg2xeM8JDZg2asweU7UnPwe5wcs",
  "key36": "ey9PUhmDEvbzUHyPnzJEetgfE3T7sHyQbqpkXfJ1Rs9xNihnCaGazwDMhqUFVP3rLQZRxw8mN228c4TQQjiyguy",
  "key37": "4fidS6fLXhriSrwUCc9svhFGip4ipNatEzgZJUvNqyV2qL4i9K5NVSSR5Ew4MArXcu2XqQPCFZSWB2JN1q94Paho",
  "key38": "5vDjRNfWutvo7sG3YSRb7Z2p9dnbKUSTPyFc8dUhJ2SC9zp2BPkMi3ybYcF2vkmnqFZxMmtiZDvkc9unpSi3Buhe",
  "key39": "3ToVmZGRTNVZa3ZVNvoBirDeA7yWU7qNLfjhZFtYMhNDQ19ZVjKz7zJdYLMD9TdMe3jwGt98uJ4YLVB34nsSRLtJ",
  "key40": "2dwHph7sjRLXMbQAafyyjMWDcB8L85cCKuhsFdqt4gMr9teAcqCqEwVQaq3BTrXmaTY4upg8eBNMn5f6eLJc5Q1n",
  "key41": "5wSqe2cJeeMbMKfRa36dsuCC8mtXg5coZXTuTFZPN8ehfFJ7v5yKmTi1vXUh3Pg3gGo2wLf6FtS2ojk9w3PtsXNu",
  "key42": "5wEZzNWpk14j6CXfRzcoX2HpkTbA5939qc9MuVYPRFnXp8b9kVsJau4nmprCuvGEyRF8BGNPi8erVb4jWYLbRfQL"
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
