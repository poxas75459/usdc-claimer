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
    "54XZ8s2D3BqmXZjT1uJ2zupL9gKMprMu112sbYHaZ317mUcj9PQ44VtwPH8BMpYTRTYog2Bioco7F14PCsJAbBS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibX9xbw3LjkaK5QLTZU5Aeg7kQcoksd5idNwJwVUDC4a1488xNeNTs99t7ZK5ceJfyW7tbnEvCeenNaZSaonedS",
  "key1": "2QCN9gKn6822eUjHehywsyozYC3MXiFjR7USZgswjEQDFcFXe7hpwApZNKwoTcq6eDPGQcwxRpS4EjhnkkWa61wh",
  "key2": "7B4xS7umuoLGSCxUg3EntME1qzJsXeohdQ8smvjbsxkQugepijuMaZCwuXRiWKvQevoya75b8ZzkiAgaQg6rr6j",
  "key3": "4vS9S2DTMfGeAggLhEAbDEP2QG7NnzZT61oJTVKtzhGErHYZAgcwQCDJg7xEETqrKVtwCSSN4a4ehbSjBPXCFRJx",
  "key4": "41Yhm8BjVc78aThFz7bgje4MKAKXYTAHiygip5gwgngfMtmFodCmomYiZX4QAURCYd63CYPWLuWv4Rt8wTYzr7Cv",
  "key5": "5X1PheF99HGJ4tkcAxtRFH4Mn34X4fvK9wphcW9r3ngHjzbMNkCiMCopKEHPS7gwzpo9i47rPbo99KzBemKpsiM5",
  "key6": "4tL2eKAhNvPPAucpM6VRwG8Q59onvtZvey3bAjbjus226Apo2DhAq4Co4Lngs8wtTQKk6eaAx5jaT72857JPfAMo",
  "key7": "66QfdgDzvNRQ3joQ44r51KmkqfHe8gexuMBQ4xzzaDyFj9kW2pRJhHKUsq7joqckkYjusQCrQouSEtwtMEmv5Ba7",
  "key8": "3wjMU3ZLv8nSxdQW74b8rHpssFGjoa4rEk9ryX8TBhauQ7GMN48CpTSRYpQ9RBKenMCo2g1VwAAAvo6u76rKWJD4",
  "key9": "anudbxVR8eb2uibpiSets4XbHFZPDKoev5UGb11napGa9Si1kxuWckMCn2bSjGcvo515Sa1ZDqxPFZvQL99hDMZ",
  "key10": "2jh8qsDzDxjMLpgZ6P7pSpJoT2cTjQkNR4mVzYd6VqqhEb6rR3dbaUBqVqiyTy7heaZo92xR4NQJURMxkPgwWAr8",
  "key11": "26VRYCfknxhwWwGUFfehFogbVWpxx7ETbT5sX9DCVETwtT4GF6uJBpkexUJaHY4Y2BCE2v2Gc76VGShkVKnvzzid",
  "key12": "4rJLmYSScp2Pb2E8Mad18Xrcm62gE1zuPVH4Qgt4MAQtg9ZVqv4f9JsMA2Z2PUDZcJFBdqufFpNJdLHg1pUsbsr5",
  "key13": "2D3vUPAa8PGWfBQC1zrNCnraWsviU5WW7Ba48SZY9TFLGKTqdFVNGP3UjvBhiE1ABp8JGnogSmosdpVVQqCyn4F6",
  "key14": "3uX2ff9vhMQf8KHbXsKonUDYdEDHeu23fKuY8oKKZTc4s9ghGXftt53a4tNrvYkxxDNd1VETNodpqbHFQ6s371av",
  "key15": "3QAFYQUHzjJwiX6VCTcrgqgsWvZfq6kJkGtfNHD6eiXVfA5iNLtpWBHR3hj8Jwu2pUu1VzU2BfMsJAN8iiQAbNZk",
  "key16": "uKCAVfsgbFFhT9vcDCAxmwFJ8oKZjfNqUZdWepHwezdrA2wEi8zQxoqxDEiPHXCagrK9tj3gmuyybVaJxBoo8xf",
  "key17": "5WMf1HTBQTphwuXXNFeZEaaS8aD5iVYBQrvsfBqHLFFZHFQ4sa2p36UfuYgVoERTyGhSnBeqWmaLSFrSFpaFhCS5",
  "key18": "4CntvYRZYzFJ5k764b2JB3uCgfQQg7jXrhtSkxgihNM4bx7E8pGgyTDBrxZ3u5wpCsmyk6KSW2x9ACuMi63yosAz",
  "key19": "3eZoZBHE6yomARsJrrXuYZeyDHJKr51em1yMjUWpuhzXGAVSMU6t3hnPN1yyWHc1k85xkNEpNiXCCnAQWdoMwbfF",
  "key20": "3PebrcNtR58cQGr6eKhqCUF6FQGYBc7rvVzeZEcAndhZYcw2gKMp1UtNRywnS7LThmjCce1t9eQXu8yTiRBzZEAc",
  "key21": "3x5Gj36nqsXP11fzRHt7ToYrk1LQMBTBcGdKP8BVZw3P5Jqu6DEQDB1wkemVXdGjQNp6u22hQdYTMPEScywSfMDu",
  "key22": "ET11wWrgNiFR5H5WbrkyaPix7XZ2GsuRCBNnzZoqLKTDcK59rwKBhTmQV6LsEHqctibjDcBa3DGJeUk2WjFwCxk",
  "key23": "5hk16QDfEmPsTY72zVcHvRwffz7hbXE1MjaT9T1crxrPSGeeZMp72BCy48QQ3nu7cJ5jjPcP341hCVKizRcZpLTH",
  "key24": "rTaQ3Zkao22MSV2GSttDUnfictEPbG2QYoermebfvsVqfyHZwH35WpMvSmz35SgtQhctYbz8FQejYUaUiazvssx",
  "key25": "3FDvabMKw2UE74qYHyixQfcoNYVDUyXAnuPLuuzcLjG38t3mPXW7iDyi7b1mySUSCkbVMoqRusWPEadUfBbJEzjb",
  "key26": "25JwYH3GXBKVo8dXKGnqs3YDtxnMTWd5PTuA9UyPAzPyEvYfoFEbM7qhxTWz5dsXM7het7hWG9hChxM268Y59j3V",
  "key27": "4b9bFdmn2BwYnbvuezzHDwTCoPFaqgPKZNempMG1B7RkBgDzgF5BzxoVUURxGw1MDPGCL7dngfaiE6VjwGDitq9f",
  "key28": "5C5bsbpAhJmUvvkuS8mgEjsSgRikn7TEjQyv49iy1DjC1KU3opvyEEoiGjSqyTZMH4JK2mdZJnhWcUiNtapxXzkf",
  "key29": "qMFy4e9UYv9GLAGBwE3p6oNqEmNEVaMjH4W2du94rvmsKDPmroX9K7TiVV86YQteD185E19vxdReVUrcQkTe3Zy",
  "key30": "5NwKf5A5S3Gyy2zXa6wngL4wkmubyaVc4aJfuaadBGfNSDR5ur5apgAnMjGCjjfkWTMeH4L21j9iU6ERQPNQLa79",
  "key31": "5oA8pUW6KnTXvqXpLVyj66EtYjhKKVDrQwSXSbUHAZVhCcEDmLii1uCMLmXcA2t51piDcMxyanhLiLFxJiHGXkug",
  "key32": "66LirusZzoVt9pkpiTyjA5g8F2fqCjzGfp4pPU527H3XfK4TifZnSGjYmWsfYJns4MajFeRo1AC6imXDgsfTpXPa",
  "key33": "5AMhQCa7fPfhorsUimTR1Vtp3twE9TTgr6RGa1AGxSLoafJ4XpZXQ6d4cvoJxWjFy3VjqdZ6VA9XY2rzxSwpJMwG",
  "key34": "4NK24U7zdtXJRnGgiJKUoQTwueDszYEWjABYs7m3x9x77dGZiLgCDJeJNsrkSobAn1pWYfh5q13Y1DzjqqHEAkPv",
  "key35": "3WGVtrgwiNz4ezw9tvYB9Qc3w1hEHvbmYXYRfvNfvB9iH14VgktE9nqQs9zh5BHLcvrUHutmMaWd4w1vaW2X6FpL",
  "key36": "2VjDmA3daeoTxiCzkmzTexajeC6SSkVoNmdtGvYmSMpAay4zgb3Cb5orfmEihHnAr9WgENnMkacwe3RHmSHvRHxT"
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
