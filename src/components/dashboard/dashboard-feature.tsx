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
    "47AZBSBoBTg1FcgkVqhxmjHBGwkFPeAfsHEEcHAFmA2ntKPVSFWzpcz5k9yYYzQuz82v3HSK36m8NbF8iWagkbkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfoGYaq5JmeBWKz9HdAB2cPLkEGiHvgZjpnY68vA4TR51B122UCLsAsPPsCsUVsXF2TDBh2SFSfxMAPNYZMKuWq",
  "key1": "5wjGv1swQRRA8ZMSkwWTkBpwdtyBDhCk9TfeuBCuJN2QUEnk4ChFtLbHLbprnXsDz2Qc9RMz823PF5iDWqVZbziY",
  "key2": "5PfFpFbK1LdsLerDe1sZB9ArPch3rJ5mPUgZa8JVLuXup5FNwQrwURpUepNCQx1mEkmP318BJkDpeyarc3J3bwc7",
  "key3": "3BiRJsbf1D3FFHSZVX32vEyp4ZRmwq6fywSRMtFnGuvfQY5tKQ9tXTEw3QofcBt2FQiJBF3wf9BqHnPjpQ5CoTsa",
  "key4": "4bjksdu4hvc3EtwxTikea9BcZKTGXb58LyeUrHiZQqGGHVGmiwY4DuYDu3kXgWrmyLueKuCv9h6gLF5dC5yzZJYG",
  "key5": "5GJ6pdCRAY39qV4Chj5j3e4nGBQLbRKzHmmpUFr8vGUJ1MgMFM1P1Xwxng97Xq7uZR4LepwZ723VWxQckGx5fUV2",
  "key6": "5Qmp2JaqGpijVZHYNwH1Zp31cS4wpVxrxtABXYFSaLEWmy1AaLWv9B3wZQW4oMBdrAyCqisQdVN4mvjNDhEzX7fD",
  "key7": "3xSV8NKAWLKrWmXxG3Mb7DLdNF3VqVSRZEyAQkUnZ8BSCLSNfXpGswMnYzh4YyYE7WNRyo5kuXi2fLnBg34ktVr4",
  "key8": "3QWQxbf1MaMMy148M9cZoHmhKrv9pG1oURghn6y4JQeDiFgzhbaNRK9b1sEuwuGqYYQm25sfSVhVtHaBRh8NdcdF",
  "key9": "2Psgq1WwKr69b2iJ6mBCbJECREUEnUYuNWpCBy57Pz3HwYopjNE5csFaxqoJc1URCTVJ5c6dr33igxoXRdTFHNNd",
  "key10": "5QuuWtPkYbvg3DHph3FCam9KTCm8zbgT8et6ZxzWdmc7hhh2k8UbMzzBixMwjJQexvLHXpwFWJdU1SAtZaB5xzdB",
  "key11": "61HpMw7FsSr3rEpBjLsEaYNC7ze5vxezVztqpscvcqAzUxywVam54JkzWZGahs5Hbvw4FzjnaQgy3cJ2GTivN2Pw",
  "key12": "uJ8Pa1GwPCVUdXt6qmY2n5fZqk3tBTRy4TdVFiJ2mGXjaDdq5xtCg1oF6nTqHtfZqhaUAr5UknfAENFwPT7ExpC",
  "key13": "4JzvQBLPqUcJLUi8dKxKXsTpbdrpx9fP82hCcbtbhsoa9WGtmgFs7SHZfKdNEsfni3TJG2ZqpTVk2zGgCxA8Sm8",
  "key14": "77sJbKNRQaTT1eaM3hLN9Wk6cFAU5cH9BrnHgtPKb9GZc3c3BkSNDEBbUxbB6jgzan3xCpfCSq7oLJPxS8kvyuX",
  "key15": "63ci89HVz2keonRLH1ox9JmRA2F8CQKdkxV1mjRKLZd1j4QNbe9tBLVSEPv79jp27qZNUP65aFLBth9XRdn7YG1i",
  "key16": "5VZekvk6whVcPg6DfxwSR6kssmfXXRsHQZCZgVD6X2mxQ5mpDjez7Bq9v7hc1VCHoJ2NB3VbmrbW3ZQySEYGtwpF",
  "key17": "47x4zaNSfZYCaBXmuox8jYc1CGKFnhQ57bDsFESTiRJbhDHTUChb6JviNq5PLxNMbsqZdJCMcpVLtxa98sChS7ff",
  "key18": "3AnX7x2t3UX8AE8NGGkLJ9vckYkQFZ2GmgCcRaErfFbmwLFMat6e5PFFXXM4tCydseYH1BA656pxFHRVJBFqcATw",
  "key19": "648dEwSRooUgFKCqx6dsVbtFqG85wm5SPMC99QzM2eFR2AAgzwd9WnSXtuWtBgvySGWikhpoEyLDf8rdes4kaCsH",
  "key20": "2uF5eBoYuuV5VzcC1JDCsukKULmvBw92butCRc8s2e9LA5Thh6rpxa7M7smo3m5tymNSLsUgiWdf94rFxUx8dsJ6",
  "key21": "3nxsSDiZ3FZM8yAqGWgCaAVXxcnKjjh8VPm9cvpKwLZiQaCPVMypufntnNCgRDFjhrcbqrtDrifMLc6WrBNxXP5D",
  "key22": "2mkygthJ47bGX5RTSnUho4gZfj2PxuBdHANAMX2rFcVg8AmcC1LxUyrFXNbEeB4EgJNSrzDyXoVvGoFojMTqL6g1",
  "key23": "3y84qdaEW2FKXoF95bwxj5D1BzeeMgjUBnvS2kAsrnHqCGJLv6VEgTcJ8tAphqRDSW2sDgpxDEfWrZbi5BDNF9Xe",
  "key24": "3wGBQHXR3G76a2xrcq9QgvCo9Vtv6B4wWUxS1EN4ksK8SpkQ7oBm3NEzD4NBMyKSFZMMggn7s6AfKW9TRMKFdY4j",
  "key25": "4FmDRBV3gKQEzKEpxErR8tWAziEgH51MJGQXgch8si28yxRCscykJR4uY8J4GtiAjVghyzZ57KPEtz1ZuogcAQ5T",
  "key26": "2127MfkjkF1yPfwcEaHpJkPkdsLQSMFBjamBiSGmJRQ36xkS16jBCVMfUE7qq15stWRgzvRk114QRKDFpH22r85o",
  "key27": "5EoQ8vf98ieKN2vzaFpJK9dLpkmYvFtHvehm3DMHA27ULobj13ubTnVYhMtsekpU6gq2kheNvYJx4NQGh6RLrVix",
  "key28": "331s84f3UEkHTYUbmkWmGDc3YqDW7iRzUSja4LUyMzeFN8fqxrgX8KgBv5yPM4D6xdsxwAnJJzQZ6Az1jhAhX18P",
  "key29": "5mLzECxgCGJKQhEagMqSjQ7KNuXaY4iDhLkBbYseBqJn2bdaXaqmrUwj8p2K4rj8Qa76tU7qxEtANmgviTamh2ei",
  "key30": "4aWCYNDwF13AXvnmgxKVFVjGdXK1fTXWoAPaPMDtiddy2FqWM3bsViM7NDfbhuSHxTMP7iGC9hAAg7jg4QUq6Txp",
  "key31": "63m5DKDmxG8pwJAwCQzRf4CuEJSdfxzgMr67cRN71mwPzcMoZdE7Cc9xDMigAGoUBPzWEJdFY9T6CkGdeEuo837m",
  "key32": "3kFEKVMkCNeiBnTCyT9nxq5bcMtr3xfBrW45rMbFyCMicHYfER9ZFmgjvEP921sBsNHn2vQgVmAFUwkSetSJqjAn",
  "key33": "ph6pzia9C1ApsfeyBvuhTNmaFfvckHYeaC8hxFMJvE1fo3XGaFi3ZuNq7UFSkWFLb7HGeQpwBvJgUBbzrZ6Gxrq",
  "key34": "3fbKd4BUXosmvqkA2rsYkPRvxE7wVtvpijTBH9mPQGRVQSGmdixxszfDDMHgkCuDj4V9RXbnTgQQ6rxgZak531NY",
  "key35": "3dvZ69YtgeNCs41DVNqCUk6sXQyEFHsyV6fZvqDP4sDB5o8SskcR28BTyvZZsQNub1J9cEq2RnH5QghfDzCr7ezd",
  "key36": "3WbZaCjSEm4XLjtBwmQEapT9je6N4AyjuntVE1MHcD1E8BYK8JnQ3bk1pQ4He63gK4S8HrAEasBu4y2fX3hQR4u5",
  "key37": "8EnDWz2sREt8KMkWXmLK6weu8gMZ8j6UKPvCEMrFQ71A5W6qzpTCzWjTN7C6iNM9gXfva4fNqgAP7CqaU19rr1u",
  "key38": "3QomtGRQdpZYZTR6Q5Z3bUbkjiw55pLm2pTDLX293qYyBbDrBzXMiGksUaS5KpqBvUC66ghDJ6TUw9PcADYFSXaV",
  "key39": "UyTwy3W1WNoZRyyuJDjFLz6tajhjBe2J5YAgFkatdfa1khM6oMzucKP4JNvHkrZwjB8WW9cbSJBesuGp1erQJrP",
  "key40": "5nVn5ExvKgoEHsS5hZ6Mkud14obNGhL6tK2QvJ4ntAyqpUwvATWazhZJ2XGSyzPvXZdzTWCJ4WcX9gKWfLrHLJew",
  "key41": "XCCdmXNzsi5KZjs6KFc9TN4AQkQoyWSzGPdUAkX3wHsbHst4X8zZGKAqJxatPF77bYNsmdiRNe1Yva875vxdgtq",
  "key42": "2YKNTnbYZs3hfXqVBJo7nMXgQyBm8wQSGmR6WQdhqCo6FuXtiswpBcm6rJ7yNsMxsyP8X8xgtv8W1sZzmHXxPU4H",
  "key43": "2L86sxmTaF2y7WamX3XtCfcFQjQPkoUriwKHuVDe7ApYLWmDMQopcsYS2ueeeUBrXhndrML3nHxLsRPuWbZNCX8R",
  "key44": "4usEkizY5CKfadue81cL5VtJ57G3NJYPRENHLybnAhwY6NtwQQkBbPFTWxWxsvtVtL7L1GADyANSxvXx4xzHvDfs"
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
