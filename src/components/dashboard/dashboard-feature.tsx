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
    "3gkUj7WV5jRaBDxrMzDCvzP9U4T5Po4SKQ3NCHuK3qEcLsaT3nAZoVsHbsrmRpwVRpQvunYiBKUctAmE8hbRyvW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3WnD7iiWpNJ7P3fh6GWbiZy75qUL5E2HsrbZgp8y1BeNYx85Niit4GGvygdULnF6TW4eKwdUudumGquobdTReU",
  "key1": "oy2dB5NwRJPgrLNcJPF9FAXkdC2sucuQbT6uHq22mXSfZs6MNvNGRky8yMLeScfWYGawQdyC2ByYdXMcu3diNsh",
  "key2": "3Yg345VoH2ATXWYGciPpvA2izV6qkw6gvRM8LDxGd1nSRHkm9WdhY4kbv9tinBfcyW2NPZHh3CYzbvqn68AVAsMD",
  "key3": "2Vg2f3Hafp1pDK7oxQoYHhjYJYFcf9QGxua2f1YUHLFFxaLDW6gfejX4XCG4wcYoPxvyLWcuxeaQY9aDK6j2pfXY",
  "key4": "FUSxwNxty4XkQBqhfTnbMc7mhgMgWYvqt9sstW9jN4RcrgArLLx6H3foK6L2Woe7AdNn2UoBnZABjP91QemDDwM",
  "key5": "49rViY32Ty8At3twHryae3reeMo1y93PDiUaV1oR4q5UC484TfbCuJSbTLirNkyzUgBCvbUvwSXN77GacM7z9w4j",
  "key6": "5ypyNzXFppGzMEnAdeciSgKPNn71rvyBPLHxLySN43PXX1zBYhwjYL8Y7nM44eUYhtC37EMYydXiNKMYM5DPT37L",
  "key7": "4sS6dX2buJStrU34eeqhM5NV6AFtRio3uWsBSyqb1ewhWyx4U2kPiRwyqM7UtBkPow1nuyfhgj6sCbV1JnZARpGC",
  "key8": "4zrBkXA3VsmU3VBUc4iwQHQWyLVD1QgcNYQ6oZBxXDbuyp5KUdgtSaYhKdaUfcMVQPXTuDRzpUPd7DPmvbQsEtGf",
  "key9": "62NgA6EgYX3wkmKrm2mCRRiQZnvfG3YBGeBDrLVYMhtvuu1ZeUupMC3LvXf3bNCQTjMsEoUpiAMmxjRrCYykzzRb",
  "key10": "3bHm7FFQyc5ko9cTb1pafTmsncZTc4gJXQwBad2iF1JrNRTH2chnCGUvdyBdT7tRqgWQD5ZmNxayoYHywADsHz1v",
  "key11": "5rCmo3tp11jn2KW61GRXMEv5FDitYvUACrV7dukz68nER2kxxJNiXG9aXXbgQznrqAjVKty1bX2ATo4Peya35Ymv",
  "key12": "2xxQhJkWAL5XLhuZxwugHVs6FhqypapERGa3YkbX1oxVZFknW5axM5FN7MSqRibRgUHxrFiQm8TRsFbbN8VEhWdt",
  "key13": "46WghgJ83DaikB4uvEXxQRFYNT5biEZMf1KMtg1Y7QryYZ1K5ntg8WL68rf9rpzLvDSBkraheUMozV1cxyqueCTj",
  "key14": "7mTcecJr182CCLkPb9MfEHJBUmWwbhqysfJ7gHTPrMRHUuWFfE5ck6FXGiXZLyxKEYvKQ9M8eibcC3yRyz35XPo",
  "key15": "5gH5yvTxELmHL3xxnoSCibF4c9bzUscbTsB9Jkp7XX6cbMPk1TUriL5zQm8ErPRnEkGoGAL7eW7rbqsvvkDXUhJ1",
  "key16": "35nxrv9MxCqUL65uhA8C7yrs7KUJ2fex3CwtY9qd7hjjQ8HGDmy7hcYFSVvyzd4iQubQyL4GNYJ441r3c7xa83dk",
  "key17": "4wr83ZCcNvDkyRdrSxAnghXWzxMESHGAFvAowqX2qTKtAuj4q73hWsCrKG8J26DPMGomtcvatVeuHPSRrMY7Xvux",
  "key18": "4iNiUkkqSchSmE78jL4GMyh8WwGXKNByhbS4wNrVoxBpBtjWopq6mWU8VzYgEM7iFC9hyCumnvmGaNoPH4sWvhky",
  "key19": "5XrWkLBSwc8s2GMToeDUkQnEwFt1mxhVoQ9ge9yrFW3nyGsXV7SaRwbkMrwRGAvAYreopjQ92xLZrmeaUyEexgNx",
  "key20": "3wFKiWg3Vus7pNw2SzrjnhUta9UTypJzvx7qwMn1z27tZuLJNyZNFJPAVhhTfV3u9VLjvCmdXBMbbcvj2exUCwPN",
  "key21": "5EL4GuKE397nD7DZN8QvueNDyUWqthpgfDEDTL62spaaJve6akUTQL1BrTTS9ayYTqxyQRQFg8xh6NGx9nW4RjfH",
  "key22": "2ygY9y4i9Hd8GuUdN7fUoSXb2qyguoyQAWkubRyfQzN6rmf7Z9n5FAJGvHtLokif9TMWRKbwcYzGnLDQdmKd52AF",
  "key23": "4xArL2aSh9BjC1AJrviyVBfXkAbz5rh7SYbhVinzNUcp8ei6bndumBZhMWroz2hntmcRGXLZijCo3xn9nFDn4yYY",
  "key24": "2grbziu9d4Uo6mGvcoWNsJBGkx6omGBB5KbJppLcTYveWCEsuMymgb2jF8EzozNmur4xeVXzHQUqiktm2nnDFUNz",
  "key25": "2m6i2pigaXVbvCVba71eiE1DezEyvYQ4HLWZbSAinSmaUCEo818XuWNrWdYES6jVXUSjVA3MhLwdwFgr6JYroqYj",
  "key26": "4GSX1a9fYdjRq1tkY5GyobP6AXMoSMvNnhfZmEs1SqYdjJvf9ahVdiEhwviK2Z8tkvirgcJkR1FGnzjkKFEbRGdE",
  "key27": "dXTQYRFYTD2v9cgsqXXS4AR1zTHwHsqMWd8YiSJFLBWxEYAaqso7i91cp6kroA7s4DRWioqEu8BbUnU1yUjcPmD",
  "key28": "askBoScfiTiYf6hHxNEKKmEZGH1efkZ3zTxwzEb2NXJAdvQMkUDHmFkUjZYwuHTnrGxRuA2D86V9waPaMN8mujZ",
  "key29": "WPSEksanU96mXkAwLjZSkYz1ZWVDK4NDVZ6gzAhFyX8bGw4uLFG4UZqjke4yqfHESvt8xpoBHuMnB3Fs5kgER7M",
  "key30": "3qDiMR1A1pvSaqqaJWgzhiMntmuMM7jsesocKYXTuwUQgkF7XsZDUe399Utpf7xAwqhLpamcLb7BghsK83tx3mMs",
  "key31": "4J9QKwwufsofoV6PNYU1sKcH21xCgt9LVXCvpoUWLixXY2djcNub8sKhcHEkYZuzZwvASo369nHvTTYJ8HjK4T3a",
  "key32": "5UUb8R8FMYoeDyYdLhR3jNdmdGiRUAKHxkRZ9apSacq1NKrJB4bCNJ1y54EC376x3Pp6h6nM4ej8AJwDaejEcPS",
  "key33": "53JSbcL4SEN1dSNy1yR4MQhzuuUYDAbQmSW6U9sQpoVTwoaJScv9gKLa6SK36eBi2WTg6t8xA2DPgoSpqG2rBH8m",
  "key34": "2rpEbXRzcU4wiRsaZPm92xfuY2z61PPL5NeSahEZB19kpYysGpGetcYXBuxxUb6x8QVRizY2fu8iS5zkNhuDZJZf",
  "key35": "4EKKbxjBhTG2fabQs4dpVwNMvJnTmfk1e55SFYCWKcxhT7siPV5B1r31PJxipqNjnL7uSrv962fJjof2KcS5eEMV",
  "key36": "4mi3MxoKvg76AfYSeJKGteddQVPuYVZmQ7qCLnh5p1xpoGVvYKJpjiRvsRbbqj13Gq5GjgagMKBqeRxNF7CTn59C",
  "key37": "3j4jRKZDmAh1uqr6LbkmERKg7BoN1rNfi9bhufMfx9GsCTRxW1RoXg7DK3GQzSp4rr8jue1UizEVCCjvWv6ypW2e",
  "key38": "2RYJsSSk33xebge5TCmUEW8sicC3KuNeEtpP75LK68nW7eJZ7MpWmBdCMkHufsNrjczaDfxnnxwWWrUmFbXPo8eA",
  "key39": "2bcGF8hYDZ1sH7ubEnNeQLQHfWdFhf1sp5vAHA9FoeqNMEXZUdkJhRfLMxXkASkeKnSZ7pxVJ96mr2MAXDRMop9h",
  "key40": "3bHos1CqhJUkzjX61FRSHXP9a1HPnSXu1FCdJbd6Nd3SaTkCkkZDKQevCrfBL1pfGN8pPgK1xBhfsp4QQm1rgN4"
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
