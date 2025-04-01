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
    "4HrvLMKowMjZXZeQKG1Ap274KTNtMDCUafsSqEX21bXU9iCwckNiT7A8kUb6ZSHkVazMDmzngVKX7ZySFnbgvxsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ze8kFUoUzA3RnybHTMgyZz1ZHGGPydeDkJoQ2oHhjSaWkeNjVEFNr7rihAjejJgrg4aCfMooEazSZB7KKhUXZHx",
  "key1": "52Qpg8Ti3SbadfeoD45Y4DkkNJEkE62faKyuUUZFe9wMzMttpGYnsFoy5ZyWVNUdr4CenJAaFqrTd9aJueJByvtA",
  "key2": "3X1BPpE93EnuK6PY8NkBr73UBRZavJv6ARnh4F9qJNdUjNhA8A3ZYwhvm64HtjN6ftaw9ixoSnGMbkQKWjwk6b22",
  "key3": "5an7ZZShtStDW8UG1obdQWSBZAa5gPwGaUX26Siv6LU9ieBtsyRnipSxUAD5RgrxT29krMwXihTdqS4Na4tb8SN2",
  "key4": "67XBYoyQXFEk1xMZVmYnToFqy5MD4uQHrrhwgMdTNwW7eRfXoomr9shsc7xrR5PzfLeC8vHGcz2QJwoFFoqAQegA",
  "key5": "5qPAys5T18VqcxLSrYnHNSx896gyxhj9GK1jteMym9NyqU1qQRD9cuJSGQiUcDcwyZz42qhnagcCfrkk8A6BLoFU",
  "key6": "2Kw9zEhyRwXE13j4T6WG9GLB5pjmEpux4TdDqPXbsUwGGkNSGDxVeZ5HHDkxqNCmwcxXqMQdGQ8HEPYbgPzuGjVG",
  "key7": "7fEj8qoMHasKZrt2qg6iKGMWxKCmHkXgQy2jCeSPw5EcmNTxcJ2jchVZpn9s4zm8bPa3bVSDqdtqMV8cFqzVCmz",
  "key8": "3qDKBCzLEbRQ85o3rVuVkPkQ4amP8AWWUPJMwck4CDDU655Srz7Xr7vJaE5xY6pjMqUi3G5GnEtLupBvgbNSRLyT",
  "key9": "5g7tDwiX44xYfXuWEDzHb1uaXjDbbcsqhhgRsB58dW4s2Ho7ur2d1ofaTVNvrDaQVz3ZMGHfkxytaAgKwqtX8Jy5",
  "key10": "NYEz7k52jBaHZsBj2PL3Tnpbj1dvwLLD97BU84TnSUGgt86iUv421d7H1GwATXukMTLRHwtttxV3A3wnegoFT6g",
  "key11": "4iJq1zzn6b7Gkrx2G1CuMdojKQ4PMcUB2fTkmhWqp272cAdW1yi3hYwbPZQZgy6QpCuDKymqRh1iwZ8kncxuzAfF",
  "key12": "4oday1nke7pqipcEAaAFLykkzv5ffxLXwbysPZqRNK7Hog993PF4XiReTHQCwdZCNC7vVfejkgseQW9yEpRdSuEn",
  "key13": "FoRTLJFNK2vtd9g68Fy1AjqegV5a5DCyrNkwZ9hbWvsbtRnzcpF6YUoYy4UAo6utTY4UzZF6jyD27omnHgUa2Fx",
  "key14": "2QqD6TBeU53jQhoLqDi7c5VyBsL4UBa4VkYXbwYPr8RKBw1WPf5CiPTwAhgnoVEFNDkV6EdZ9ntmAfimmGSZTUq2",
  "key15": "3shehF3ETNvoUwAdb1nCyAE2pzehFdqokHiS62pK6v1bvz7Ph4JwP4brTtenyw9izEGkmUazaa8NDemp8rbu75Mq",
  "key16": "4FujKRMSVtUQ2GZZJrHc5AcatSWACVqr4mV93xKViNfd6NCzM6J3KZ1959NYJXdfRD95ABU1jNjSeqipYV1v1Mwp",
  "key17": "4mCpd4VDRHpmqpQ9eRa8pMwLeWUwr4BtSWkrPqtHGt29mk1fAZnpMp7159bfiqRcBohYj5TDDEyjYiQpaEekKbFV",
  "key18": "4xrJQ7pTD6mge1LhdHB4vwtyEon6hWVmDenLBTAmKxNY7P52VuxySchJgqMnsxGWoTBD99Ac2scePJ94YgPGvmA2",
  "key19": "3PhYHRyx7JqrCVap8F9PcfLJ9AAiLsqhXq7H82fGq19V927PPmDqk8hQfTcxdchL3tVdHCZUazaRRAFBwK4pXctD",
  "key20": "4fy2HjEKrDqs11ikL8dcRVAHWAdLSPnBYTPAk4YTR3n7xUAMJpaLUiEMRi6vmQ7thW68Xu6yMMNgXxkji48Vioo7",
  "key21": "2JZv8Qj2z77WHPBViuBkWGcKiGdbDBjXtSCrpXrPttMV3gf8TWMWH64sufTCX1ZZBKRzcdjgTVPMeUgjkWsnhJ6v",
  "key22": "3Qr9YCPBaZ9CREBLMvQTbsSRf1cRWFNYiGXap4gPntoLRrtBuoBmct6sLPdzQxjoPqc7oDE4tR4ubgjsgYCVwkRF",
  "key23": "zgKuDbtM5o8ob5c3VNgN4jJopZMKDYYjfz6qVjNQvacoF5FiuYzu7t1uqb67wCwdozLgmoT8xawP1w11nrcotEC",
  "key24": "39wbBfTPaWDMUjMp3naUn35E9CcV3U5chaaXReFZoYhsTzYmJvDrP3RQviDDxWmGtyKtxcxbPG2hUNLtqh23VcjK",
  "key25": "4xCPAymUca1hSWSJfPEzkdiVy91bGy6Gy6dEr4Puux7McYjnLd6rAnQacTrPsBCt3K9BpYXtaVynyDp49dPHYXfY",
  "key26": "5oAWB9HLy95hHSSiy7jZt24vY9jURzPNdGDMGcyamKWMXkpHBKr4BaVApLFN1swNBZit9VuMAe9VWwGTVUxUSxVY",
  "key27": "DAeZDydJRZpUoFq8sjjtYyWz7wGZHnTYoV1TnxXH6Nxn2PjBKNEj3iB9W2fxE9bHZKyi3ps9YeLZaWgVH6wQi34",
  "key28": "4NjpHbTrJkzwBuhU6BbWiPN6u6TvZd2nsf1c7NVVQTTjJYFHRHFaLGgfAYpCwBG767z8qb9Xsh1VaiARM4g9UJda",
  "key29": "5cpdEn2J5W5rbk22vxFadrqyhWpL6CJmKYSS8qwrK2xUcmmiBMyqCVU5kTJxvZGD3rWSVidspu3RoLz6tCrVgw1Q",
  "key30": "3UDsYqB6p68ZKpSJP85wMtNtAjVKvs6fv7NEf66h3dEHedNNufDypCd8FobWYg5V3PW41Q9EVBcomb1srgPkc4U9",
  "key31": "4F8tU6T4CRDkHQL9yCCaPGsh8vsVPZ6BVVgHKWdpqWkqPBFp5J7ANSoWZ8dzGHBLbDr2mZ6r5FBBNKGpPvsEueve",
  "key32": "3PSxZPLpS2rxNqimT5EAcRDbuxoBK6poYaaYVsrMXnsPxR6rryMANeQ55P7VjySqNkpRgjxNkL56kNoS3abhYUc7",
  "key33": "5dwf7axDhCi7sWV8EFi3EdgyTcQC2guDfX9U3Wv83RtKZBDATKEHv4RrAzinBPqshqs21rDbz8do3rY8VgUcmvk1",
  "key34": "54VRA6hb3jUjSZ63RCTxp2SPGh4KhueyTkL1y6hhXqL2UQu7PbyB2a8zSsJtrLRza9WxM53Le2CRtBqB1hGu196d",
  "key35": "xXSEM2oSpcuAbm3FzSJz8TtMe7Ycqa9wfJbCpVj1QzmSb2sZNAHyrCyYGz6q9984tMyfkfW4NqNEnwVhxwAqyTg",
  "key36": "2EHDXvUXkUmpmHWq8QByb3q5uypYb2Ubb38bTVc1Eai2zDFRpD2G32t4CQnjJQe57bmAHJ91j2B7QzJxNmMJA6CW",
  "key37": "5PkysUhLVUN9RZ9zveZuFVjvQGbeNsB4L4EZz4WhWgdPgSk7Ct1yGXDodeoRc9tNw31WpjnEzaTehcjaLE4Gzvdf",
  "key38": "5iWZ62HGyfVaPS14kApJw1nh54VbCJpCkDgiuDyquUpLL9zzdpCTTZwE5nSurWyfP5x3ZrzrjQXsbL4vYrbGvAZL",
  "key39": "5TS4Br4cDPj239bgpiMzfuNEACTCE7NGLSMBr6nvfvWcL2XQZaXXFFjTSRYPvazNVtgGA9AahcRfPGy8i6U1jQNx"
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
