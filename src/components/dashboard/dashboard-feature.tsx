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
    "2u1L2d6oRxps9ohFkeWNe9ABYsx2hsXStZFenqnnKdUyzKFRqwKSDyhy65S2U2Nukdfn3ZT7EBrTHkxfLButAebh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baBQHNq4f8c4vpDNX5rm5cVubWMrd2KdkJ5Dk1BBZQHv9cBT3d8a3iprH8miQLqunDcsJY1dEa4yrEVAPUAZZEc",
  "key1": "67F1FyjoeyGXxC2McYXrBA7LrawoCLViXEFvhKxS7jhEa1CPTJYAUxQj3BtRauRbsdg3d2Wj1k94n9Vfy87cADKq",
  "key2": "egEaoBmV4vzT3E8MAMC953hdpcK1w76R8xvDk4b1u3xJrA2UGEKJYoNEHtrKcLNd2S782FuKNsioVUswUcQw7mY",
  "key3": "koDHQWEgaWAQsmGAtAGTvVe87ZCDvGZHsjKSymS1pUL3cQoBfJ9wmCSK6nGUuCLbM2VqTkoRW2BR78R5Lzy5Qrg",
  "key4": "S3tMuW4aXDg22TTQyjGLVMnf2qLQ1dLPxdkYari9VHf77TaNsdBkmjKKo8yFd2oSr8aMP4XVzagb8aohGmG2z3o",
  "key5": "5cCfXztwSPXtgSAkPahBc3sNu4CGgYWrQMQ1ZJ37SwZp8jCUpzsE7irbE783vun5BBCZFSiQiZDfNFjJdMRFYT7V",
  "key6": "5WgRPPGf71WcBxMdHLwsm7H3FruaTF12B4BbzFdvR5jCAjgLqB1iRcvi7UXXuKMUuBrHCEcywwwy8vGP9VTYgKZ2",
  "key7": "kR3kepRgUokTQaZ5APPKcNVEvJ4XCC3ACzzEx7MHigpy3x1kXAtT4n7d1MrMoVuG3Y64ADj1UVM4RSG1qfG2KeM",
  "key8": "4UQVLLhu71pvKd5g8mdNPQTJBn97ASQxkTqPEfaGKUEKhpjhnj7Nz9gv96KCuCqLpKr1S9MPmq2XEVYfhAqZv7fx",
  "key9": "2FDNWCdoRSW9LacqXjd4t7m9AVvKzsi3deUmGznWDJg7sY8T6GNWp9vm3s4T9vym8XCsbmrfMwQhEwz3j45Sx794",
  "key10": "3qcR633y2YCj7LN5sQApu8B3LSpUikSaoCdqmbnjPJx3PtZwjx798c4hFCHzTdSffezgRvpSKML8t2ibmqCjK43K",
  "key11": "5ipu8oDcjqb7DYkWVeBoVtHJNuEyKwdC2J5ntMVFX2YMox92ovusBz3HDJSdHcVPx21BMERUPPSPY8a6vdfRMEoE",
  "key12": "2Rtc25McgqsYsB1pPLWd3gbku6Nzv2Q1fP9dqShsBiGr2dm1v2EWr4mSkCu94cZmezGxMyEqcm3J184qxPuYXzuz",
  "key13": "5taMAVPhaecBPLeR3sx34bhd5nHT6w8iKQQF3EdE3AsredLHe98E3HvxiXTPW4MoD9cCYtX4YjEKRBx1Rdemp62g",
  "key14": "2KcEUKLfZ3Ev4a2ketN26kNkrt9yRXSJwCXYmLiPkT8savwHFGZ6oQrrnMcKuuTiAYcUzpUkPQob9Ucsr8XWnJpF",
  "key15": "3bVomfQAmBhzjwx5qRQ8E2S6fdTer4jaKpe8DFvyb2VUabpQKmFbSguWeegavPYb9C51EKnmxuNcrGbFdh45GRxU",
  "key16": "5VyU1zpdb6fTyE6jKYzuKYhBbwHNUkDtD3cqzQiKeeSwRdBspqCuWSok89CudfiQFY8FeU71dgxTNjFzBr9eQikn",
  "key17": "2n5EHx9x31nFmTzneCJ4kS1tEHNs7Az39vLmutnedTp8uNSD595EDqNLwZL1Vy4N2xQqbU4MqT6tRvgbEEhqc1Bk",
  "key18": "23KSsQDvG2CyGd7q3qQVhQ5aefhVLbkybeca42KpPrR1K3sYNnrJ74ZJLBRqV8mQ6DU2yju8kncPSJzaHrS3KTWt",
  "key19": "2upx5qPyLv3QcpJed1nYYhz7igyYp5DLNdLSsFYwQAC9FicUwvrt5eMFNGD8UButZ2dPKBikUG8K2XRer4oEEu4D",
  "key20": "3YY6E4SZrefUkHDWkrRijyetUEu2ETyTMFuitZbfeMFEuv1L8eYjv2FnhfmuN8n5zNsxEswUZYSWmpySjKUkubKN",
  "key21": "5S1chGBayCyAUA2sv41TCS8RSHsefD2andLEvt8SSTKJoJbCwFKCHvXRWwTvvT9AzMypYMm7C6m5X2o5hTzNU4H7",
  "key22": "2Ft5Q1YF3CXMN42oC8xCwPU5iu1mLFZYHDG4CCRBRkGiWY9BBHn3zMNjzFH2BqadDwLJJk4ogEbpQD2ZQFXUX8xn",
  "key23": "3Q96JwuGuV29ue7dhiLRVNQ65ngsx3Y25tfDADWXHdMNcRGns1XZr6MvJqkaNgq1gRhFsCPMb2Z9PaCrzv7L13Tu",
  "key24": "3Vn4Qcn1tS3BZczfGovUABy7Kkvb7xbnXiFsgt6dVLWYygtzTKVR7VYDWoUfr4J6eVyn34wt27GR1vPWHqhoNrbW",
  "key25": "HG4kvdBBLTev9ivgDfm45xA2ejjnojFzUynkwBS5wGtDsc9roNYTYK6NQMPALBHKtyAvUuKxcPHZjj28FUnqknq",
  "key26": "5R3coFqrofFy3kcBJBXAHkFSmJUcEeQ6bKzBp9F36KVRMeiQ6osTe7yTvLQuNYksUq4Vf4JyYVnjKvFyTbgsJG7Z",
  "key27": "5ZntgxtmrCv9Hc9EogudfPHpUbKtxUoATExQuikzANvafU9kfnoVVFjjDbgDU3fUVXbdh94DJNFZqpntC72vubx7",
  "key28": "5AiVvELxtt694d235GKYkvwh4MTa1YZiPseTZrV7v4sxCN6dA67DWVT9Wasv3rgHw25USaBbXTS8yqXF3jcxAJhr",
  "key29": "4WMyakhhTuTpunKmBN3N1Lok3s6gr3Pbp566wie1RXE2UNCgNhNZxKSq3VAn5t378WM2Ax8vhTcoSqjwwGS2aYa",
  "key30": "eFL6ssMtaJzzP7dSjGSVbLb1Xn8tqhXb3NZR9oAnZJXdjauPrtWgeGCHcNjjmWWtc9S3mQmSwLYs64VmfNujr35",
  "key31": "29s7a8V6nW353CbpXL1FTsjBDwg6B582Rz5xyVJQT8sWB9AqGHKwDDZSeeFWVdXyys8BTfPRfdhBPy6Uva2TjEpE",
  "key32": "3ngZ8VCg76csTD6EPTk57NQ4wAAYYXvfz55V93ZugF1768REcH8T29vkBqKZzMdCRA7vNUnZZF9Sz1sUyE74BMyT"
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
