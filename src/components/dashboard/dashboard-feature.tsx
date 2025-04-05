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
    "4SquGFbKMCdYcW49aQ3QbVutG4QwfGFjw1RDRdvNa9oTWshNpNXQVwUZGLUaGqFKviqYB31J3AqN2zhGGb8W337U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ng9q5u27L774C2rG1NvkrAQEGD4gqrUromqYuCei5XAtv5zk6nrLLXVcZP2ati8xEF1Y8YLAJhoMhYwBTNcjMgE",
  "key1": "4es2ZLH66ohMfqA6mmvSL2dQvQVRzp7yz4B4DGWRA9hsdgYr3Z2S96SgGAbPpGyRrAMjQ8twygMTEH17YQiJoQjp",
  "key2": "5kg5iipkWhcxprtuUDKLRpwmmyCiec7rGvCQ3E69xgALUd8VQKPuRJHeBVfLJr9VJ5x4z3aeT7xP6o6KGZhkdejR",
  "key3": "37EiFzdhRyBaDiLBRpuuKc24CeKGb1ZTDFXv7DYP3tx4MvMdMEJRn2b1swKogp3qoqUdFxAPQBrJMkAgv9ynrZJy",
  "key4": "59WVkk4GAg4g5pV6bnR9tf6qAd6b7AyZiTJynv82HVHZFzpSZMTXZAsXNjSea1ZMMc5gBfApV8JJPYRDn9n1968B",
  "key5": "2UZofYzRe97LH8EQo2uGfUK9bEtQbAS2NWH8opWF6aFWZKFhWs3E8kPqPk92cTFLydAcf6WEyMPtjxdqGvrifP61",
  "key6": "ac3iS7iKHxLKQ4ChPdcMXW7A24UqUuxxKojqYWCLdY9TyP491hunhPkxnwPUqYPV3gqWcDaBgs6XFq7HCdxUosR",
  "key7": "CYLeqvhmTau5MwZYq2BPsUqHmsUWWC6rKQ5DqsQBNsDFvvvUgV98tSuSQfAQrZV8Rc8SgiHCuEN3sm8tiPJApHG",
  "key8": "2GViqx4BFMFZfzrEtBNaJny1k1Q9kur4GEz3EXQ99S8qen6R9zzjJ1uaNf4Z29g9PfVf4DqcWScaZ27PAsZ8Fwx1",
  "key9": "wdZuZHTVEU3qLfzAoBXw4XpRmKX6kFHc1U2tk3PhWbWgKJVPCBNkTHkBnzBT2rn8gJneEnsJGpUkCDcvxqNFLts",
  "key10": "3JbQBiYYCDX2fkHQGT9mZkPu27wdEPJRELVDsEb7McsfQamFwiczrL9DY9UYppNg4MFChFkbwkF36ANaHPbfphRb",
  "key11": "32SR51kbzjukJsSbAMS26P39J9DSiYTnPhhs1N53cfLgfuPcgeazpxgma7HyuLoBvag9wqP1oGvqkKu4sFYDeKhs",
  "key12": "VtLpzM5fSALggKAKBqybx8qQXTy6WpkSqMv8dXpW9ecQpPpkwMGy4KvWsvDDmrPvJU1FjBQYVvSLQyxnf8j3xJ5",
  "key13": "4k4img2shprA51aKw1sw6rqNLcCr1D3jevD2792GHBp3FXsyLzGTNv5kc7vsbymVwR4Bismzjc8XpX7GkvLSM6h3",
  "key14": "2pxHEoU4147sRmjRF5svwnt6jsLYzeAS8ryiy4E8QG8bQzTGNz81SrUMHcMNN1q971QHvTMyAGqctYU4QDnakiY5",
  "key15": "2hmsRxoL8vxWHsSj7zsyz6yPu7Kwn1raTtqP753dHUdb9jUmw3NPwwVjGgrTB8x34JAFxaKsohapnAH2JrQpVn3C",
  "key16": "3FLN1Tp9VRsvaN1kz2TZW2pGstgyiNWXKfDHTkAUY5NmeDhDagCYwWcNyXhhuVuQrd6rVoHtqzdcNmb4bYfowV2A",
  "key17": "5NjogbBuL9sKoSSmoXcdXS1GkCCTefeGTtKo7z5AZxetCXjRvfwaHSGvhhJD94S3ojW974qstC2VF8f8q7VxXBsR",
  "key18": "63TZUUybz6t5ptMM2zhG4cRfe5vU7qWd2UDQGsKwsKbHc38QHDEr4QJT5jE6ZQvt3ELG1XYpc9GH4agqmrhoMZxM",
  "key19": "2jJz7mutAKLEjVenBZwc45y1cdGGCdC7VWhF6jHtTnjicqbmWs5nVhxoaHPC5RHVSZDbmyJPaiRtqLTruyHYfSFJ",
  "key20": "3tXkKALzsZT2KpLhQW6S2nggQrhnunx2EiVMPsSDVo8m1SDiCxjEccgQY3c7b7fzYrQS2zykdnRfcYH1FcpkemDf",
  "key21": "2SMPenq19B8nSEhqAmmr4tk4KXeyLqbwhbMu6HSAQvv4c3BZWBMMAD7zWYPNEC1YZqSaUpcTmbXfwhdszt8VBurg",
  "key22": "211ceLn6m3dEWcvae2VuHsUQ9zYJnLyarEmVJyePEHH92e4LCuUy9mPq1dqQSpo14WJ9U4BsitcijpUVhgTKeuBG",
  "key23": "5CaVaQRMvebJYVTx3z9MVXAXDJA1Jr3HqJ29pW2zmzTTcVccYtbxDcQCGJjpK77Uuv1Z23VWJ4nWrWg13n1Ytsd1",
  "key24": "4njjw6PJXX7txcad9wzP8ns32wMfwWiGwB7g1AoAiXAzJQ5FyQncPFYDJcmzmWweGfRyuQHDk414AH6aTzgyUQ2S",
  "key25": "4ADcYtkriQKs7mqKcCpFfjcKyooNd1jayF9SYXzJDR2zfMCVNofnDy4pmLNAkVpXuy28xW9W8vEenHuU7xa6dEpe",
  "key26": "4pYBfCqQsc7yu3Z5KedA3TPFnkpTzJtXb2JRMiAhipQUPYcy4okNvcbQjdWUiFdyyTvVGigr3tgxM6Wsj17LaoVy",
  "key27": "3PkHCrHm6fXBCUSjanNPfeBbSxY4hMypJm9LjbauEXd9YBuMNg2ZYR9QGLHMCTsGjQzpGjktUY2Z2LQsZEheAFu7",
  "key28": "2ByMMoFHnBeW1LkJ19D71xyas3HnZvzZgdR9GZ25UbKqWBPu4pjrugdwx1VtNEgecdtWNz3xZHyLsXbQN8QeEtgM",
  "key29": "JQxXUy3RUWCMQY6tUpVonooH4ABBvUH4P2xxSt5mW4JX9iRfc8YsntCDeE2smjStqhm7qWRRsHatgV2XmgsNN3C",
  "key30": "coSVj2799rUGpZX6TQx1BdvGY58WQHjcMX2YdxVSTKG9tuQCanbbaJB89sigNvXDnqaqFzjab6kRj3rrfRM5xWD",
  "key31": "4nvaGvJ5rZJ68Cs24K9LF78CXeiF5wX4BavUMgx6PDQaFFawMtNgJzhKp8sqj2td1HGwjPwKsWwuZShceVJfNe9W",
  "key32": "4oXPmg5UXrghxLp2gVkZXouqGPBiQ1C828mesVEt4tNEor3TWyfkarnAAeK8gJ2sp6tkhhp9rnaxBQmYgRj6sfLc",
  "key33": "496U64fzgzALSynWkyLnFL7kjVfa34cwnJ7vN1Pc5Gzy5D2XmFByTa4HZvG7SqSg3Du83a6JTbfsy1SSgZbw9PVj",
  "key34": "3xXmg4Byw2pZaWWF1AabWqFwkGRqq16KnqspArVDxjqDBVsXC5m1GaaGyndHNTMZjXtt2ERZ9Gjmo5P123UXrDA5",
  "key35": "2U2ZKYNQAZQg2rtqm1vafF8upGGEBWGtU5Njv599we87wNRshhQfuvAuJDVZzv7aEGxaG5gUqdUdzsWXQiWemEGx"
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
