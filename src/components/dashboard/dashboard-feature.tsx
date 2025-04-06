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
    "65HwCAbF5HxH4EW6gGiY2UxmXGof79oSYka1yTXRCdE7PJSbGEUHUL26Di15pXQTD3p16TxDQvbzBEnwQYTfqynN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNW4iQMe7kbikdR1o4i4ksPgm5SCBR9325EQtFSMrJNaQsMMvQ7FVXpkDxv9gAHbsStZJe9cJPRCbp7x4BrzphS",
  "key1": "5gwmny9CFeCjtuCm3ADnsGKyiKeT95d6VR8ba8NnfnxmYoBG9BCKD9KmyLHkBwGJaXeqYd35cYS13UGrwyETmysu",
  "key2": "4dZ7knm627gCaNjaiUyhs3mYhsEvupnUtELyo8TTc3dFs5UBBTdxftZuFYtasjJ5dKifNZ1r8aHyukhtCkyWffZn",
  "key3": "4kb5Q6qz61nker5MpMQMaGXNpsvLcyitoCg5HaL7K6CAdGmz86c4L4J1zCDKSwWh75Q2acHEwuuomkC9CArtmFS1",
  "key4": "4vyGXrPvymAkgAYqrR54iBwWAQyuUbKmgbx9b9crT8k3Ya2E5gvwbNqYxagHLsuCc5mFP2aznbET3yDzq7RceWN9",
  "key5": "5E2HwBNWcHuYxQV6ErT9rTsMR3XNG49vYUHng3J2vLvwFaJnupg2XeW2H3gHkbHUvCw8RhpLMA7VqGkjAs6jScJx",
  "key6": "nQfMVjrnh1Z3UVEJJtNo3j3g5meHpnbMg1Ai4KreeANAiZp4DWTZyeyoaXgWVVAymTK6cmwVnkBLuJx9cc7wSd9",
  "key7": "4ktkbucXGqqucDuN9maw7ithQD7KEH72qP14bPgLrGkYPjx2XC1vegmKZ5M6U1WTrCgKBJy6Zp4E5xKkN9LwAvmc",
  "key8": "2z1pnHDh2QiKFBD6FzxGnjrbYtCy5wxNp8BU2JwZ4scsRP8ir81g4QUN84EKYi4h9EUcbeuc4PKgL7gWXGiHc7nV",
  "key9": "U7mWuorDBPtjebqqRLRzRPNjp7F9ncVNqwQw62ev5RWFBpXXptZSzetimNgaNBeQ97AgvsradN1qBzWD2ZnouQz",
  "key10": "4e7immwb6NTU4icwRbSVXU1UybyRzTMDnbWoVQWSSxGzXCpJotv28kMembftQj8BeTPrio6XhS4aF32w9oq9yXA7",
  "key11": "5mwVeSUhhRqgZUFz1Bo2icwC4Cdr83Pa3WXuqNtd7EgKJiapYMjrEfjANEenev9TEndyyYPPuUi5eDYnVEJgp1jC",
  "key12": "FyNHf23hx9qnYMLZjxNeftZFN7k5E292JXrftmSbx5JYTTHaEoivnt9MwSMYkc4TUwzu8Nm97XMADjVf1DBAmiv",
  "key13": "5ZTez6WdAV1h2xzFTVKq6qSg7mpKo4VrQf7fUqoVz4YrTftQuH7xm2q27qRvT8g2vi1muz4taydzDRsMuZbk3EFx",
  "key14": "3dSWZ43RZe9A4Hux2s3XFK45gyGBxo6NWSrZYGX76yqHDGWBJJ4Z8u9biV1Hzt9hp9o8WMuPcpPCXGkjenv3jQVP",
  "key15": "4xko9wQVA4VpHEVvvJvrNZQRE8ob3xxW8oKACoYth8E4rgTcuSns8Ko2hY5bewKK8BVPddQSZ5Cd3Ep7rNZMDKpA",
  "key16": "34xqurU1i4QVHHtYk3JV868y1nFEJcGwYKMesC4opUQa7RpWj5dypA81ec5U521eVVuFmHeUNeEG23SrY2SZFeei",
  "key17": "64MpYUnz3dcucevvts21qNjYtG8bjwoegbE9DXs3wfLfPWdKnAEH5ifPqDz78Tdh6jW6NazFGvVSotRRtHHJA7RX",
  "key18": "3DHgmoyMi9DYr3r4HF3tjcqLFxouSYbaCNFHL3tufb6zmfda2B38AA3eG5Ua4336NnpKAV5me7h1x1VSc4YdUoe3",
  "key19": "2vQsVLU9rgfXepq4Uu9wAyCQgaVbdG651b2zwrfVc8fh6Z1ZB3N7o8qwrrTM7XnYVLKc6WLN6EX5wL9ECLtUKEfC",
  "key20": "415KLQXL6hc35RoaXJ9qGYAPB6g2nLtfEibVoRDRW6ZGozD6G4TCZSd7YiJ1awboUAyLehiK1dtKu3pPWf145ohN",
  "key21": "4jZCX9F1mezEfAztV4eZg6ZJuV2Ya3bGQdxts5Bp1uc8iSCr8ftxcepF1Mqj4XzTj52XpqtJ38P5jQdYzgKSbqR4",
  "key22": "2PVCiEWguuB2hae5cLWsX2hTw5xRrKHK4sFrquYJjUcBLdso2ih6tYvFu6W8jgEqf2wTvo4oySipFsKtQVb5yHyd",
  "key23": "3wFjn8XdnGc3wfhu7iPeREUJsS6DHTSPdXyQZHMZTu7amykPh1HwfQFhxQshPeXP1hq5H4Jid5VrqnJTBGvPbmAz",
  "key24": "4yDp4UPsk7pE8vUL4NXFevDSbgE1qf81GJvws8Tk4EHvckRDMwMe7TSEUQLMg4ftR35sMicQCH5FF2yeaFku2Ena",
  "key25": "3zZ2mG4M7wy1E4t9sha7iGvFkUDFwVG4RC3rGUFBvT9eeH2wiWsERxH1c5h6acpAydbxyRS9tRtjxeXcLxYcrkGA",
  "key26": "TChy1JXK8skPerq6Z2GKXfcwVw49xkxWQ2wyTtMKgxfvHj78HU91jsjwAns8aYYpEr4htBebKiZ8S2AYWgfvM5y",
  "key27": "2DrxcEghRFYFsSFpUttJiDHtaeN2QSCnJJwhZKCYuTgdDrKSTp9xVMRKAoD4P4B3faKiFHDF6fEksrc6VgyMGodT",
  "key28": "3q7mesRnt6UcRo4GMT7FnLNpX5CjhaDPBRxnJ47B2BEpHCqCWMKjaRtnrn7GHKAUGTvfC6P46CV5oRmjMYFAR5TL",
  "key29": "XhZvDHkYJMCuBArkxZxFnrNseBv7ZvYipPyoX2aSkCDmPedhHqyasGWER15VoGgRausi77TsYjEYGom23EuBmpc",
  "key30": "5YXDLbN2BZqWbpAsLVuMVonWTAWgBUMSF5zUjdDnxzP6obYuZJd3mgVGMeV3F4ALJRM7uPpMFaw86Np6bPqxwcaX",
  "key31": "2imCTWj9h36wGnc7H8jUX5cxfhopMYYEAZU8WqMTisaL6UWYK1Ra4p7Abgf4UeXCTWexnPAm1ScRx8tDWUPt4hR6",
  "key32": "3NLhFSS6oz82sRZqpTWn5RpiSZ43XTbxahYuUjgQazeYzA2YtR67feeK54rRKa94rFCQPYSkvddkFTucKPs5Kb3m",
  "key33": "3qxGQwzwi2zLRQYoRfs2CA3PNeCz716dSmAd6Fs3L9UV7ScZrkd55HEdwh6CioeJUyvRVVaehWDokFwsAdzrdMd4",
  "key34": "pFU7fkGjczwWraHYGCU7tV1tWBBvg4BfnaQQGb1aBnpGkiZo7M7QMwWF5mY6St9Vz3FyvSRiKQgCpnjx36Z2iVM",
  "key35": "KFYFqgDYsxUxV5p6ijonnzCfWVR2euuyDj1HHapt1fdw4CU92nMSpXVPUTNVM3CHs294i4yFRhXePQcE6c2hYF1",
  "key36": "4YyZbfdx5XiEvoPQmiqkzhir8qsC4Xi6w4oXvoQWTcHf9hLk15FSYToErNa2p8LEtp7VWzqBLY7jb7DPza7PkBdh"
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
