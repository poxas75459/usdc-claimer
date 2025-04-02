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
    "3tPKcZ1kkSqanqMxdoHuNHz1r3xa183Zkef8UxCVe2kN6rco7n5XR8Ssy8sABVK7hhUeK6pVioYJBzJWTSaqeDfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eY1gGLDj45X2jSTnkt8jFb4eNFeeH8r5sjMv3uJRFUxhz8hTizjsGoC7HZ7FbqX7Qf6BJ2DBsz8g4DneE1739X8",
  "key1": "59cSVXU5St6aKHyipdzGERWnVyTueyJAHGj6h87Z76pMq1nfGMStFwWm8Mu6ke1bjVH2hjioLhogj18o6ytBgWJk",
  "key2": "4Pi22ZkjnVncU8YuyuxZ9wfky2CcAE4eqkh7FLAjJTEcz8rwLscmtr4HykSk4LSYtRfrFf9N9DyqeZb3nwKv8WQh",
  "key3": "24R5YkJaFX6DztrQwWRnxEtoRynY5pbbWrZu1j5CERWPp9yHLzV8ZPXRXCbwjjkk7mdaFaELfhgJQBSxJJvFVDyi",
  "key4": "77CznD7vKzT1SY5x8sZd2tFb9iyNU2ZmuGUQaGWY3tuYcJB9ShqoSR6zUBVR14mFW6MbWSPEVCELoxhAfov39iJ",
  "key5": "3VRpdD3AEZS49bzM7dmF8swxs7pK1uraevxDUTTxR8LoVERxQGhzZZv66C2QXnNMNQ3DyXbke19LXZUXzoMSqHF",
  "key6": "STwWrCjSyzp5VtbZb8DYfdBtBj4KakfJpJijMgsEGv1Jr1VFxjHdxvbUBwMmvC8vBYRwfiXURRSkA1E2QnHionR",
  "key7": "2d48rhErUisk5Eu9R2oTRc113ZmSBYtwPn3UXhN4ddejZcRC742MMFPMw2FjDYTPAwEe1WRFPdHUHH5EYRpE2h3j",
  "key8": "2F7BkpxqDnTfhKsPWKmx4uoEFMpMpcUHDWq6Y7xBVtbnhSfBPm5TeW5yyJFXkppMmHbNa9xfMFW2XQzmkTTJGNDx",
  "key9": "2pNzfRPMxc4Zsy2w8cpdssTWV8BTd3KP8Gvja7SFuXcRJMdKFJeoT6YosF4WLn2fToRDkvnZ7VQn1ade83Vda2F8",
  "key10": "4BVzCJs4JuVGFjZTEWkqZwzxN2JcMQzVJKirEtyijBcxLfPChJW14zm37M5qdxoAepxm9vS9Pc1KC3rnkKnkXq79",
  "key11": "5VBqWTwoc9csfDqfErMtwcfv9w9FjedCgJXzU4HW9sVqiLNJNSQ6hGZSqs2XFJt4ypqsMDAZQeB8Z8sfm62j2UYF",
  "key12": "SmTVjzQ9B5qLbYJiPMWCYX6Q9zLGZ7o17ibGaV6E1Uy5kjHZqu85GyqA2i6YV2nx24ce6W4vqZJX1SF9xp2ZjeD",
  "key13": "3ka3G1aEVKMt1wWHjpg8oFUcGTCQm1YHk1E4W8zchfXBRXnVNia87Wta7Me1AUkF8BuJJ7GdD1ZARvsg3dPSSfsT",
  "key14": "2Wpr2smhJhiLiKDcK5ebvtq2UsTPSNCTxq7m4nNuQ9PWMxD8dhZRccjgKScWF2z8ok9V4pjJKMa7F5BEaJkxV9U5",
  "key15": "FnprcPa5ge2m7DnhkYyfx1cKbGFdSAMxT1DASuhFs5BsK4bwdQG9h22dbryv1oJwJ9dfPRazfTvyYyU2rwPJrds",
  "key16": "2ZwMqno6m1mQM5xp8mQQXnK4dbS2VBnSjq6HFrWiEawLTsm7AbJVJJi2ieTRKJZnwcQsRvtrL97JsYdG6tLHorop",
  "key17": "2LEA4cxb5tgGCATgnbH5FWgAn49ESEbkQ4VmH45E96Tr5bcTMSXnYB9XSJB3SWbh8WedM94CFzvQ6RDSGoNj14kL",
  "key18": "4GrKtrnHn8bPCExo1xfQYSsEEUeLie1NzAcS3v85w3aySHHS1zZBTmK3rJtMMS4CQ2tdRzDpRL8BeMpHec91J3xF",
  "key19": "3PXHwiGFECgKXEudVhb2MxLoB6swifoeNRJi4FVp8NZjdt88kxKcuUrs51aWu3hhCQAcQDNbQSKiYjQowvAFozja",
  "key20": "dxGcmdECQtEvhjUyVLerurXRp1yVhdiqqvpQjc67VDtRyM8EToeYBGuCDLmMCThPJksKjciGGPFjUdDXbQRYjKy",
  "key21": "2oJBta5nRH5uGDK2HdEyfQzn6s8PzzfKtpRp4kC1HoMwL48rxVGstTUXs5ZF4Kviozcd7WCN5kx1Rsv8S73hHrgp",
  "key22": "5Rx1d948JaStCQLkBBz18ouDPFpf7mLzmr5tQSHdQYkM9MGKNLzaPJNhugLv1EirZ9ciJ8qEg6VU3G3sEaLb5KcL",
  "key23": "3y8hZiHcGhSLkuYTaJ5EcKX9uSmHCJpRoUQeBDgUJxdMpRv4N6oXAuT93Xio4LntHfoSY9LFD8wKqHHDTawpHdXG",
  "key24": "2fUTTdumN7YJAHfoEyCwnHQXjeTRT2r4qCPWpCJbuNydjqoUXFv45war1x9Qy8cSvTWVZojGZ9i5oRd1HqamBgcM",
  "key25": "4m9EBhywvBtBiu3K7PvEBUMJPRs59iCognDL9xLF5qnmAf5War8G9vGk6onNHPEaCdrowq7fVBqPFpLLsyo1XtRv",
  "key26": "TqJKHPt8sXr23fgRBgqkmdDgLat4umcQeDnbXq3t47LFiqe9jjuXTSz6X5CnvXNy8yURDuSinYpF1XBe8SLLsd3",
  "key27": "4cApbvX6nRDfgs5HsosQ3QrJYANN1Uq6LgSDFHqGmdVUuvV52NccqGztAcT6rAmUoKaPncHSr63Tsru593C1dvYD",
  "key28": "6Abc8anzhyv3P5RaSq8UaAbmufwKvuJL8vMi687xjZVYq2LX2CB8KwkWJWqKqHup9PTa7grFofD8sT17TmYSQw8",
  "key29": "4Wo5Wr9cJ6hpUxd3fEnWtivdueEUZzcNnagTbf7eTBnEwaBdxAJeWQQU4YqBt3f5yt5ajY9R8Nm9aodFqjAQZdiC",
  "key30": "4sgEjiB4LRc3oYkezciWQAPQQvFJt18ERzQgMcJ73jQa31NCrNh9X1pMLQHPDmJPc2hVdcZ56BFTGxfvMMjiiUhp",
  "key31": "4BcsZNKcBnk9dcucvHdhbWsGZcrrF3yNJEv4v4qr8w8qMTVVadsgWFq1JWsFyWK1rjRzu5UoKq7vZ4wkziTTM9wR",
  "key32": "2Dr67k2LAWQzt2VknpBYhKjQ8YsB81UhXNan8p1wZRsf9QrRdTen5tHBxgbYyMPr3of1z3MK5bPck2FHz6uxKxDA",
  "key33": "5Z9GrmfBjgxghjA3R6duffALmecrDA3CcsB2aQgHeuC1msndoY3J4FaU2NcBMFA4kpcwmucxNLFWt81yiwpsfWMj",
  "key34": "Gf4tzSoULLfsw5ZaqU13EFguZT7D8YSDvAWPNDBzGwQZwVAVZLJXGh4ANNUhnprrQaJmc7FXqcci37CvMExAURt",
  "key35": "34GhYsMytoKW4sYSTKhHxYbAKqqhsofDpziZKKJtCVY5JcH3jMgWvXcdKDmFsV4rBqfwRmuLEjyr51yYFdY8L4tE",
  "key36": "1C8bHzgFY9jaxdxD8cyd8C2mcTu2itxmihLWzBvaP7k92C246Vc6Rh8THV5jCC29jHCMDQRspYvqinb3vRRo6Uw",
  "key37": "3BLTUCJ3ngu2cFhaDgaEqu2eULo1iQwaaSQU4wRU4oY1rp5TG9tVMVn8JJGbHi5vpAeNHk1Qn3k42WqTyCym7oeR",
  "key38": "2AenQ3T8ETXo5d5pTnLFNuW5yHa2RJWNab2nn8mg2qmKRCWBZVsdSp8x1FtKD21KgPgF5sf9xuD5WxRwkGLhpfvS"
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
