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
    "2nn7GXFSzaBNkfQrEeZKjL4KL2ZCkrz5a9UfvLD4eKPWZY44wdCJnBo2V6rdJqTb4A6Bt3g1PdeW3fh2e7qHPDRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BmBc4FAZueWxbj1GUhoU94bHdATizKNCgYuHm2ZWbRSbLJuGPg9WMGcXzdjgbGVzGtFoUV4DRQTDoKWm8L6eRhD",
  "key1": "3gUjD4WvejgwUBi5KCpEZcTsuvqEU3cRQAjfiX9tbix1huraRmaVsrEfQvtugn9L5jEaCgQFqy9g3WLRWZpwfy7G",
  "key2": "5g2RGGGwN3DRhhF1oRxB82gRES7JwJLUW1xCV9NLJGK7xbs74Q5jTXREQAEnKq2c7yPXC1ycXgRY6EoxRxHVU9mz",
  "key3": "YACWZFY9snHkx55pBUYyosUcsykBZi2BHpveMb5TRWucr5SpfoaVawoz4cniTfyRwLDwGTY9XVJ2wJhHUjSNNFK",
  "key4": "2BaGnSCzjVRvXwcCHLYVLdDmJ4uNwKuWGz1kV2WNYQz87Sj6zkGYjCmFrF4v6w9AmSrAvrs4t32xmhcH8PsUvbYM",
  "key5": "2sXsHaTHhQ5pfm96y23YuaTD6MU57QfgwrKxCE8owFHyHn8M7xqscugNBK4AgwmvKTwrTVnmS7ih7j1t4VcCvcHT",
  "key6": "2fhEwxri8BPiZ9DkxVrTUbrng7bwPxYpWP2PcXkD1AMsCUv1iRMU6Tfv4f6kpvAnXwQtiX99UZpPfHUt9B6pXU73",
  "key7": "3QjKTM8ATPFWUtznGp5XJnnDAp3iZPFsDz4uo1gA7z9tThN1ro6z3NwPkhkrzZxFC1gbWVBV1GRkTKRu9L5YaABH",
  "key8": "4Lg3ENHBxNGCxuLJQAtf7fo24oi43Q8wbkMkKzz3uyNcUFvMneuh6pU6fpHgfkNeGgQBMgXTp3KTtBkSMK9M3xSE",
  "key9": "3hhtZQ6wLFuvLAG2TjfMfr4nqM3KuNpsauKgp4vdqKzbTu8tLnQyPZ57MkXz7T6TxVhMZa8j7r7FjbRDwRkDpSQz",
  "key10": "o1aVFueRHygFEkxdSDbU4WYSKgyH4jUB8f7AkXa6TCCttmrhZpfgH4ZFHV2HT9h3jh8MvEMBaYd9c29pRV9Qef1",
  "key11": "3B87sabcgR2LDmoDBXdkhGWmDwUMrG2zg8cgRvazta3sXM7mTozEcfH91KCvpDbz2KE9vpvoYrqtedpzLYJgbv6J",
  "key12": "n5bGkEKNRLFAoyfwEAy5SWwvvUER5viiTbURu8PEZBqhJ6uSLtfi8tw4rR2w7c4z7kWotM3QY66LPfABfb8HMwZ",
  "key13": "4vbz1iTwkHHFnn2wqBSLDQpHWS9b66qPypmigZuxnSbz1Xqj1upcM51BXWejx9pnfWqXrPL2JtpXhu8Vt7QNKEnJ",
  "key14": "3AJHTYxorbdz8vqAdq1HunLsdrZXF1LiuX735fR9U3DV1RrYCpVeHqKRzzZKvkDxzb8KxEnhYHby6P1zezP5mbKi",
  "key15": "2j3zk8Ab3r6Ctcw7w7yRGCZywHBM98g7MzifgWK3VbuumNbz7GBUxXwxGtZU7X4z3WQfYQwgTqXCTDnyfwyp99Ey",
  "key16": "54rkQdi4d3cA5kAqUEyALbQyQ41t3jL3xTdLieN9928PoNBRBNpF16of9zoaPUCoTh3CSQQt3k8iLwHmmW8wDcGV",
  "key17": "5jNU9R4NLfU447jGouAKNjJdH35ftG8JoDjZtz2dPwqyKv43HdwaRAitgbNwSYLVmwYXWuNvtPz8e7BdEMrBUnKc",
  "key18": "5qJCJTHSL9XNQ9iqah7u24yJ2qFdYpGKg5LGiD9XhXcZzjPorNy2huhwjHbEijP7ipMrTm7RuK8TSdNqr6GHYZAA",
  "key19": "136j53H6FixcY5zrC9gXB75YWTQdKEHwyhz4uo1yfadrbiy7YPQjaKvd2f8YTwGhxTHvRrkDmAzq6A5B6arbJpn",
  "key20": "5mDfxSG6C7DeHig9z289rQUzk4xLLzfuNqR4ja9Kja8gDgzGGfb1K5BD17DWehoYmoAGepcxQV2q5qCJHc1YK7NM",
  "key21": "C3uytGCHx36UmZRqs6S6bT57NRBZ4kJpeLQ4PuhQt9TbeKocydNEzSJbwaZBZTYtq9LRS5iAHJxPdvTDFXtanXf",
  "key22": "5gR1zRKTwj2ewLKKdag414FetyZzkq8HBi2TCENcEMah7MH7b7TySo32HG8eUDTdfHoegVc7seyU155LtFWbadY7",
  "key23": "4xQ2sNVmbJ33ByWnuRmj1PJkYHV4Uep2re4xYkEmSm2sTuH5UNfdt6f7bnwxaS7bVsQE4Uxo1ciUJwRX4vGtEk6e",
  "key24": "4Cu81fc6iT8pQGKRLvDVSJA4b7fRuhazm7anZh4RErU8YqPpUhN9gtEasf6HxBpkAXfY3ppGbx5SysgoJiy8xzHY",
  "key25": "4SQL7MgkY2CLcVEntNPFcFLVkYTFi3F6Xkz7VhSo6vEDbVbLwQ7nNvaLxTvrHXQuwF2tEtdPG5QajcNQvA9qdNZR",
  "key26": "88jVTmypxJT8pvytxYT714tvUgrgrtq6s9CC7Pr3xQ9fYT5KxrybNKq6TwVufb5QUHgjXev3dcRDcSBUZdgmqLC",
  "key27": "3jdpJTm1n1LCwuNq7SPQSqVS5bRSZG97oJjYspHaV7qLCkTDRZ3m3bwVeuvPwgi573H5dGqezhdKJ41vqDyKTdaE",
  "key28": "2auHUG5B4RrWGBUi3rFkPSheNLr9DW67QWCnBDkW9as8wd4b6jNXg8XYhqqfMWrNN7ZKmzpoq13fnuJqexXqr71E",
  "key29": "22YjPpWmYBtpZvPA2GbZ2sDKkMPafCQAH197SyCicAt92UxzmAdpFA1rLMYF56MfYhezYLqPmDGhSR1cxZoHaPvr",
  "key30": "2c9dweJpMe8aixDK5yuL7g2NXNjVR8KHvusXQYoR8fqa8jXL8quziayktJSRzeGr3s2JdEStsPex4SBHW4NhDqAQ",
  "key31": "xhKp5dxqawGYJZHwnUd9Ams5dtsqiJW74xA4rYMK4L4dHtAYU6dwJLPZdkDpDVPgD61bdnM9v97NnF8uR4Zf2nz",
  "key32": "NACBbRzXUqHZsk54cXMz9yyRLs3fNHMg9JTSC4Tg4PnGPpDYasCi2gx8cvAvhsG4RvyDRgAUcgDsAbVenB5aFEd",
  "key33": "35QfKBz77ENiGLbouiiDotZbBLnqKiGtuBSu3eYDfdaegStjBhcxqFhKBLpeGuYJ4da5HGKCXgT4t9gqpLfrWw5Q",
  "key34": "nEsdrE8G6YZ2cKjaxKSfDhNzL5A8qWjTvZGDobifVPvmUzfumZSzaBU7ih7FxMZBKMQFHnuFgYuJyPHL9QYxULy",
  "key35": "2C1c6c39LHWmB6E6pHywnnpaNhJS2qSra6x3J5fjMDyxDuUUnPvqWWh1AwP1PiGZnHtG666CLjjNgotnHwYqR3pi",
  "key36": "xs1igupzmhEbPNkp8bxskYuR9xdBw3b1d6Y2FjKJ2eQ5ZDnVdn7z2bNSCj4gEz1PNbTzPVTyjjjXvCubMzijQ8i",
  "key37": "5sZ2tGJqkKPTkxi2kKUo9bN36qT4LoLZPEqeTVPT6VM2tAYqTbnqeLC9YRKxw5stmcdQjgbp7npfMh4H8DhjbBQR",
  "key38": "5vHdTjd7SdizC41RKFdHMVwR4J3eUyX38LZtRKUagdrF3kn5ys25q7UnzoUwRYHAdRit6Sywhb1H5Ek3d4v7szTS",
  "key39": "2iSiKS7mDTUhFUXmU8ZXQqh5QCiTM9rvGuvnM1BvVqLuAn7m2xL7zJz76R9Um3RFHghp5hLFWB21xPEHZDyfb2Hb",
  "key40": "2ucPSuueM87B8CC9R6g9arytP8aydtVMcGnf6KdjgiWKJMXLUS9grfqHrFg94Q3o4dLxm3u51NTY2FjUwgG1XW4P",
  "key41": "23aU3dXmSu6oRcZfwnPGuM6AoeBvVRTXeg8SUUN5MoZ3o7zw1zHmXNFaomn7CBgUsqLk2wG5NKLWdK7X9aH3ZCXg",
  "key42": "5h3fxMJek5zUSJEbTm7HfXUBgTUPmiYEgoyLpzfnESDcK5RJa2sMCaUPMkkbNg2KrQFxWPFGvLd6enX622UM3k1k",
  "key43": "3x4YoAt8PjUFWaGgt31P5LZZ15o5fg1DWFkf4iHdxgsNmohMbTVL9Pt8SMjMFkt8tfdD8MvcWuaEW7avVUdcAd3K",
  "key44": "3RNtrcSpGGYDSvZX9H3Cupc3NYPDx8Z1jHtdpFR1Jkynk2DGj9a4BUf6YMyN1Dwwk4zqWJEN7TnWTGQFJdYpvozA",
  "key45": "4tH8DTN47hpodehvfU5xeeHEWFVUror319EvNY3r3QWyNSGHivs5R3F1SBrb3hdhTM16GniVQyNXRb3NGCiaJaC4",
  "key46": "gyNAkmxzcNk478ktyCWrBWbRmxE1ZA8PckgR4eyokRnf1D6VvRr8SHPWyQv1jpT6HQJVDr5G5Ee2yz6MaCE1Qy6"
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
