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
    "NJvSmP7rMHmtPbfsyTFnhcRZymNwb78NYtoJ9Ykkfiw14NNjVCs4eRFk8SLuk2wTqKLViqdFZJcTUTPTfbNqj9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSAab5U5AyZDfdeGVQMTxuWFvt6W8C8YwnP9fL27y8gFWPVtosZnLSE5mX95XJRvkEQpbbZAabUzPXayh7MvTcr",
  "key1": "2urCkWLGbRQmedBazzG2Bm1RbhRwQjii2om1vzTsTmcndvyKcJmPrucVThqvDGkkknSkiW5CHfNVantWy9GfCj6S",
  "key2": "3Mgvat6XYy3cD4F1Uxd9THarrtyHoS468Bqdit7n7V3ZXsDBGdP3Zz19m318zDyvYDuqNyn69Qab9qG7BL5viQhW",
  "key3": "TyQ6HKziRB6drHHnpYQRHSz8qvzNh1nXDQME4q26kA1KVy8giQGk1k5XWUHcWK43i8eXUXeWq92wMRn1NSm9gLs",
  "key4": "35B1eu7Qqv7M9uFWJ7K3xopkwiDTy1B5i9mRb27i5NCNCyhL6x513cyKWi7BAThWNBx6qsV9LHjYFgmzrEebS1TT",
  "key5": "giyFy8fmV5ijb3i1VWirHYKjiYXLDtoLv9X8buzAj6DnQTG8xXcN6xTovqB27piN4LMdt7rSLsUrrvHnNTus6Nf",
  "key6": "2dzncKXGAewrXEnPnH7RnC8X5ByEreEV4RYBWbpot1DDhztAQdzUFWMopE5KLxSbtbvwLTEikvgdKLyNumh4RnNZ",
  "key7": "5QFg1b75wg44DFQvmmPkba4zaWj1dMDQJwE2pB2gHZNRtGMNcKiXL6vUUzByNJ3Ctn3ezgLqQnFy4TuYZFufkGFJ",
  "key8": "3adjYvZz5KToJCrQTJm26uQR9EbPfJoCqT7aUyJkttzcgMfJC4tFHZNEYSSHm4TBrN5RwVZAjpi2ZhLHUhHChAiY",
  "key9": "4aCzje6SEGbk9Z9u1nM6JdY8QQVHhg6sEdP1u2Mcm8xoQevbzW5ZSwgQ6uBSYQDefYZKTWYsyRHNXf6MEjSQNCVh",
  "key10": "5gqcz3Avqgz2eDGiTA9ajSBgf2V2PcDRp69NTLFiMYG8GwpxCkiRT3z1wYfiZTWrHbhGmPtJ7vsFznVbNdkviWPK",
  "key11": "Rc6VANFQsH9Ei8W511thwH4ZtYVXfGRqfq4G1VuNnkLhP9qzbghaU2Xko8hD3ax29TuRXMXvNG9UTnEx17ux4R4",
  "key12": "2hdQ91Xfv6fKCcpo9H3BkQQny7yTCeBAVPiRap25p9Gb3JimuSUFFZFLSHCjd7pYT79WM3BevLmNFjWxeBXKoKJE",
  "key13": "3VLbBWK8ygx5Ty2mwud4yvZfkAYCM2Vs4X1mJ1tPwz8go5aMnHTdZEEw7A3PVwBokMYBzbthLkVbgUSVDCnQAe9L",
  "key14": "4s69rzBgpMg4tsHWt7doWgUddQ3MjYJqAmWWC35bxu2u4xrejR2CJuPbBNBVPGWVpFbrQo2cgm7EV8fRLpRtTLMk",
  "key15": "2S3dW1JetPz5XriFT5BnNP68Ytvw69XyyTpYF134UqPiaQ66CFxYiHM6VhCvFnP98QFpJCQRQWBG5ihw4KHQvz4Z",
  "key16": "3vSqTU6FxizALCuVgqVh9NptESjj7YFWvkfboN6RRHX6UDpMZg5dNBMkoCMjMER3XiygSDC8Y2Rtzgphcg6gS4nF",
  "key17": "5RVEVGLkMkE2c9HM6rRJrAcg73sDBXUiKpTkPeJ5y2BPR4nF2qZn7mvywJJPWj54HHZXMdVNFZfT5Aj8tTHpxUVz",
  "key18": "xVhihqXoa8XrRP6KYJkvvfWfanp336kr4vyHwT7MY5XGF1fdL3y2Cq87EPZivX3hcrqxiqVki7PDg7R2TC4BRtb",
  "key19": "2eaSXmt4NDHrSTDqJSnctazzA7uuHAxtm3CFKc9fAqGaJhRy8CWx14dERtVpRXrHQ3yVRHYAmXiinL2whaxc7YB3",
  "key20": "4vBzLMZe9aqw2NJhFivHQ5fbZzNKEzs4NkWiVcdLPjgC5occpS8sKrt9Jp6okEUbjsfD9Js8yt96xZdbyqDmugt9",
  "key21": "2RFNJsQqGUfCVKQmSzTXhLuvwChwqwCzKuCzmCRXN7dUQ8aRCnEHYrwJAHF4cmwvtQTypi8vteqz6FyU5ktmpuPK",
  "key22": "5R2kdQWDEBSi8XyRoEyF1LtXKU83RscwQvtP8u7VkBvJr6Gfb1QxWyj7KLHLRywPKHxYCySK5dombYKyCz2j583W",
  "key23": "4VkJR9msmqZbbA5dUtg16NWX8ohdLXdSuATrv2S82xtR7bFVrVC6du7ks3QSoFZnHureRqUJkphwjcX4BbAKrNW3",
  "key24": "4Qo6HvgESemnqQ3J5CwdSAkCWjZb4h47ssg74VVsQL7fgXKzXCWFELTruBPJe2UBDevgaqHyy83U1k9yvV2WXcuJ",
  "key25": "2uyRV5VtYqGesRi8WT7CvXbps3HJdiXQeRwxySvAZLmSyMVQwNDbBstD4qhrEx7qfknBAAKidMvy1rkorBAJJ3QZ",
  "key26": "4ht7HTL9t5anMNajx5BfYLZzbo1ueNanC1aTyY26mkm1yVhMCVquxp76dwb5WeATE7xd4qg74axsr1WUo2n46frH",
  "key27": "3gqtRrnKQHqyk12d2QjXdyk7a47twwb2B92fP4ZL54vfXpP9RM2YBKT2mZrPprtQoandvNmdvUEWUFNRrjWQ2KP1",
  "key28": "2UfwepZAAyPrpBo1dZkZPYUPkzRmPHk7mMCgs1dDgTyyJ5SFNsVjSsJSYpFkCkpFYegQV9s9HESaHiMvb4yURaWb",
  "key29": "2azU6Bf8i7BieUCfi1Q8JDBTaC1rYdybF6d34vTPoHCEoLY4ee6ojeFgRvR1BNoQbaEjTAQQb9Sx4hre1tSBp4R",
  "key30": "2no12raWmRX3ayAB3duLRwwZRHocZAMUFBphU3kjz9PWMdCK86wP1eYj7vikZUYkZrXCR2usB3KxYpirvFhQ9AWB",
  "key31": "h3edkZkDPHAmCv8FvcirCM59oF4zStEjyUvkUcqBwevW1wGzadGhMgUWYymHkT4PHuw3Xrc1kH8X72cP4shAovR",
  "key32": "2kFTPPASjjPutKmwWPj8gopEvoYy6X2UfWtu5Ed1eV7JkZDeL3W11MUKrYRpAKXfh8zC1BqjD5rQ7BngiQGRrS6N",
  "key33": "3NqubS37tRwHg7CLB7VEStxYATxvTf42Duj7XBNq2ejvEMM5g7XAwJZCiAGXfHWNnFtaZj74ybRTBzuEvt64mtfw",
  "key34": "2S1Z9wueAhdKUA8dxtkAG4ttU6ZSQxbjr6sHrZ7hSYdr5kwbW9BWgENCjwxFF5G7WsowEv8UMTbXF2MknQU7UC5s",
  "key35": "427UPcFgmQVGep3FWVDpPADnQ4BXdQkCMey9LH3NWZ9TtF3KKZeEpBWDRDFM9siRFAhm7zUGLQK4UL9H7w8qRNcu",
  "key36": "4t3VdRvZZVmicGDcxf8nsgQZHJozaeAzLMYxLb9KASCCuo7SZRiM5CbfJ1a4kVYU7sKtPKtAVPobJeRdMzgXLJ9j",
  "key37": "a17LbbBZtGYvCRjySX3b5Je2nBmcJVfLn5Fufk2WCX1n4WMHidpfYbNrDrpH6d8SCs4Tf3h1eddr5psjhqPUXSB",
  "key38": "3QHKGzEfsbNPeutPiQa7TXsYb3wamcgBzKavn1jQ6jvGMYg1fvue5N8JTynDfDzHdkVQ7w8789pbWS1aqGx58uBm",
  "key39": "5kVnQU8dpnDYzWEwvXkKTJErcb2ACrKV8uS6bPGdLuxGYZPABuDg6unFunQnRaY3qL9wwfJbutk4qn2HyMrcU2W3",
  "key40": "5Nvby7Ygtu2ZYfGq2JB8nbPp4P8JkobVPNQvkdZ54d9fs9y4Gdc6544BgLkfeMAicnbeBGq2nVc1NZGnG8chdEHf",
  "key41": "65GUhXeZpsxSRtUTTMWShLbaEhBzaxAvNXvv8NKw5kCbH1B5U1xrr7fbAZR2xAskN1Ux4H4AAFJFnFoj8UALerBU",
  "key42": "5Lmmq1sA4JpPg7McyQxuiBFNNvsnTuk8CxJkUjcWoHiP96gpNswrzAC7QUVJ4sPwTyPxAbwx7fKEJyRN5byTqXx4",
  "key43": "2ydocVtRFZ334X2SMt3P8aaYQot9ewDeaLEYVF8sd5Z7je8bKYsmH6vMcaD7e7zVTEXfXTtU3pMfx5MejPjuHdUn",
  "key44": "3cBKFKw489gDuF1tHiZnSQkXFm5woGb3T6gzAN3pkrvkzskgY61YEVyGGGco9j5pLLJvRihxjkjFQfshhRsit5oa",
  "key45": "5k9ZM82vKJ21JZ6ZPs79ViL6zhTxf6o3vRyuifRMAaB9aheQkA3qJYXMMSRujQWvYbMfT9nTNvJ5FDNneqnuunje",
  "key46": "5iJJQPFBrkfd7kkEmsB1y3sCmK4yF8hy4nvXi9tjA8V3afrR6FNkhbrEAMx3UJrnJ7wjNffiNQELxNBtjc4TNAwU",
  "key47": "4rQWSaRJcTCpsuiuEVJVsiD8xzmU2xkA9zZNZ3mxBXHA76kez3YRkiSnAya1w2F6JjjMm27JoHjtcmxDb6k2MsuX"
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
