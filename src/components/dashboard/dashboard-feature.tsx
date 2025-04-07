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
    "nvwSHBhsxNYTgLzxhYQADKc7qFr8UtsUaFGSFxCbnDrH7x6qfjTDcxEXf2J9HVLeRQYWEm54zgpfjZsbDHYHQLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1Zka3g6b6e1JVJUpXGFLgDDoA3YeAR8FR6YCp8RakDBMQURmmahD9CcydCtaWxTi8eZ4QPPQRmr2V5dFNdccM8",
  "key1": "4B51KuZ5T3J4emVWchRY8nmDtNLQ5jTnFPfibrGACid31d8ntcCtb7mTdmB7J3zxUWTGvFfBXvgyzGdLLdm4QJ3D",
  "key2": "DiHzBqrAZF4VA2xjngZaEjzQmCWKGpiUucKFcAi89AVP9v7ysrTVwxupKxMTzxPCoUDFhdiJt1yL8ayUKEoi9dt",
  "key3": "5eWuDjZeQcnguP3ztfABVtgjVyN9ewvYBNbyp58F2qt3fDKj6ER16c7BBaJ6ixsYKKdTQEHHDubqUTPwpx9aogmf",
  "key4": "4WMPeQ655x3iq8Fvbofc8hBiD1FMYWQP52kGXLJfgQXUjvwxXGCzByAZxFcuXX6bGftbPjKXuDXbwPAhq8MiBqBo",
  "key5": "3AmsZRRKrUNq1yM8YnMr3qx4hjwLHVqoH26tVExXpEnk8zmR6F5tYPGN4QEonv3YEoPC6kniE6fZ5cR8sxX5kHmQ",
  "key6": "4hdj2CbL2DifUADc59QTZh7LgneLEiHcdd2aXXUgTHd9Civvf6z2kbvM4CxinoNcPu8gLs8NbWgkVQyq1xcxo6JP",
  "key7": "3toRr49rK6n9w6zXPimxEZ1NocfRLnEvm4pA9KJnPQUuAsXCjo8YHx5xkiBQYMuYjNQ1W12e21ZvT3xwWt8JujZE",
  "key8": "2UYA9D1Cy1s3d5VFp7d8hVxxS2ER27VQ1a9icZaahrv3cLxyizMA1Spzs8QCvTfQUge4xkUfwzFf5yKmjpz8Y8Vs",
  "key9": "5C6nbVeLkkX8hwPNTBRkDq7vBA1hAESYQjNAFzxyUHUv9Yy6tCf6SyBjPBhufL5a4Q6bXYS5q7NKRfGK2nxULr32",
  "key10": "wG8GXnrWq572EdGj8J4b5ev997rThcZVDai3HRwJmHNLaG6YNd8WPvQqu1MQvJ3JBY3pr7Ks1vc5UgjvkizrDyi",
  "key11": "2p1x3RZDX3DcMfWdKphLp59mSQXmJw5JghPhoHvzBJTDqWz1uqvSweNNFYFhoY2EbBJDgZec6Ese7UKyT7TZRqpY",
  "key12": "Nfk1Q8TAMN83mBhbNZwhHMp19VAN8qgbBnFSafkzHVKfM4Nct2Ca9BhuNpxk3GC5vXJ7befBGY79dCpu8FK9jcA",
  "key13": "2Kg9Sd1rfyDgE75WKvf5TsSHr2zgxM4FpDWKDF499XZVUTuMDhcBLGzMfksdn8tVAuzzzUFPJko3YdfLNeMZ2jxT",
  "key14": "erf57QMetUaRqwfrtdPMkxRG41aHnBmTbeWcVzk9E3VQQQ53fFQ3HYrXzuJNjGuUXBFVUB2q2PeYWPzT4RiKrEg",
  "key15": "2bPxWmzM6QccfjAaPJewtMN1uJu1j87ZdbLBJPHu2jFPWui6vibk54iDFpSyyhooAmNdycaePK33orfnaDUWd595",
  "key16": "5RXu1mhgKfb7Kj4rZjDXahWva8Qu6abZ1YF8v94k62cn9uRDDP2qp5cXmArNtvbk6w6dBsReDmWx6mdcV38FnRU2",
  "key17": "22dCkTvf8csKBzZ8mMGeso8dwi15KkwibDumE43NWz747Aty1NDPNcb9nVHc1o9NNhDZYbGWHoPpXDbo4vqZdH91",
  "key18": "FZ6ckV7HHX1qKptLksgrH1Vf2Ja8PemifreasqVJm2PUPHEygMZv5c6fKSUxBTEhZczYVAYVWoNbSWf5Q1pzjen",
  "key19": "3ZYf32TecBV8ZgQKdALiWapyjgUazturji5P6zJEqufGTmfS9qXstzzuFkkEVdQx8qeqq3oG7SUHLnpg35NuDMid",
  "key20": "3wuocXGQSCDBBTPz8tZpZPpbpHeH8mRzwnviFoSN8Ge8FpB4zZLf51C5Xwg3NZ8i7WWWCFZwXDVbPF6MXNoDEMqr",
  "key21": "2GWcdmUrRGmjbr74kfUEwFLrU6An1TWkTB8PwQt8NUXdgUv2NufLQoZqzh8DRrHrHV1cqrTm6rmh3TQeKVdohu2V",
  "key22": "4GJX9NG2DYCuR2yUnSUWoysFSBZxGmS2B6VDBpbMewYs6nPokNiQPrVRzVuq24R5z5z8tK4LefCbmg64Ru4MZaQq",
  "key23": "3xMsjgYuM3RVrRpN2nLwgy79nCKvHibqhowVbHKjRy6itUpvaDmtNQvVczBPCfMonnmMuPJzYxaNG1g18tVAZkfi",
  "key24": "E4TnRRNdTMyhJRmYk4BcTKnP9ueiimapQxmbwoHwBuRxCmoUUYYyAMZ6V5BMmzsLLemcmyQPrX6pus2mC6jy45K",
  "key25": "57Q5bsFBXuYjez2XLKJJ3BAQgwuz1opnzxym66Fb67r9s3HheNxz371Phvy7x4oG7UqL73CHzeyRpjngU1fJ8CRh",
  "key26": "2pDeM7ASBT9EA3YBR8MDHKPPuCeeiXWea7QxqcAam3R8MsiuW7ZeHmnEHBTjcqdEvEzNGVGexJwSQnZEUGZsYpuQ",
  "key27": "56CqdweMtabVJBEChXA1FvsyJ8YGNZbvnm9ypgMo59PEAdfLegfUBDtif77xKJbUNLF8gqM81h2nYQQmNekmevbn",
  "key28": "4TTAN92QJiv9ycHFMe8uPiyB4ZCZtfEmxZJ49fFK5fUgYd1rN9T1twWpToGwRUpiMHTecFmaW2wt7Y76JxQSRLKx",
  "key29": "Zahavp39SLTubL1UxKmimAxHBJ2a2hDxQdnBX17odPaH6PLFdfdpsqgvo9HeLr3YXRueugKmykqTCjg8eyK97bL",
  "key30": "nbY6ED7Q1iJuS9xP5cDhua77xy3TM3vXxcs9yikucGnrAh9aNissQDp11t9sX2qFEEe6orYtTYEhKduXRajBKS9",
  "key31": "b1dwSxML7KA9KBderkcDaded38iv12RsoCPHG3bBK1N9Wnu7mubgshtqogmUXQM5vxDV3rrPaqPhbAtB2QSjNBP",
  "key32": "u7RmhS8Szppv3GQvi4YrncTX7MwSa33WRiyXpzM24NtnnRqBx9HFzZuS5y26fJqFYhL3habuc6zp2yjC9ooGsKs",
  "key33": "2dNicQNsNjoPM664Pqgt9dr2Rfvb3YtZVmt1Dw8SjFvvhKoNRsJwgqBe6Z8vy1pYLKiRaHoUdopBMnKWwn96t5dk"
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
