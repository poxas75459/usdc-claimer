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
    "4iYnoZCAqUqzj7Y99qjEFtrjrGGhqs8wxbJRXtxvW9i3fcwQeJi1ND68d84Vod2c7RUnmPRa9FwQrn9fVa5bWPbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TyDrHF8d8fX28UHnHjGFRU7FiGUnFwkfcgdH4s1RAQqse1MqZXpagPQZnvSjTJyAEFKA6r78pwiCo8zQ3WQPuN",
  "key1": "37qtXRN4vXRquVEkqGjx6gnVGx68TTAjzbnTKi7neufwFnykqZ4tGUkwtEAuc3Y9HzpYyh8e5AJWDj4nwVWCXYGK",
  "key2": "3YsPGkVdRq43aacFYvaByA5jqvzuhfQsREomZRApGussmhDfbCzMz42tNVWmZw6oHUK3vToo4rvPdaiHt9oF8zi4",
  "key3": "2BCy3jCEd3hGsQhL9guxsZBwF44EbfNHpJKka4suSRH3zzPXSuhQybp4xK2nWw5NEGYhwntwRFamCPbHkvkntcak",
  "key4": "4nEunLuY6mfL1S3tEPzve4PVoJJ4PtEtBiyEcZh8Ghiv7fjwPfmnRng5zztjS9zdG2MFtRFdHFJ5XfEPQvwFUbe7",
  "key5": "57DtBxDcdDgSDP2Sx8uBF3NoQtviAk8bsyWbLHMWLce49D7nMWuRuXNGPoyoqSoQ5prPoTffofu1oFTJZ35xC4nC",
  "key6": "kLjEp2CjNc6omHfAM5mciuCW84j3kVZe4iyyqwPKEqfEXMabMdeNNwUb2hj6kDP7UGN89V1WzDoxQG6EoZNp1kb",
  "key7": "5ApHd4n8cbFxmcMeez6CWtvhnESaBQG7A4GVjAzdzLWxv7ew8gzqdxAz7Kzmra22wsDwkKGTddyTWBWJESVYngnD",
  "key8": "352NkrVfHT8F2zaDwEjM9mi32Qw6LNzS7NDy6Mtwz92HtQwo1PwfBAG6L33DezpQdZFdNxzaTTqFAMAdvCqNUiEg",
  "key9": "2zUTpv4wmpsEEbMb4LbnwTvEN93bGqFo2vUffoHaX9NMftfsPvr8oP3dYejupWukB7cLDEGANtsw91SBTtr1izvK",
  "key10": "2ujS2ZfCR9oqQGescLG6KJSASvnAs32La7SisbdJYhwiHzhFzHzQ6TvnGQQ1uEH7gsXaY6ThFFr47dxn2hZDtXfM",
  "key11": "61nAcoG8G6N1469XWyu6xxXCxNXcHfHcxqow3Xgo1A3tQGp6neY26TjZknPeN1Yqc8agc7MrPkTP4YWorck9ne1X",
  "key12": "E9UhGC6EQhZUodMegkRTgCDb7gT4vjkrNrMpNrF1K2Pd5KpreeKoaF23zJe8eiF2gRoJYxfsP5Tgho4Ek5tqpPv",
  "key13": "66fRBq3eDCR2D7AxWYE3VCMx7sFU8oXMMDPLN4eSrpjCq13MjeVM6T41wTLKfxE5vBgKoyz5DHVQQHusoCRCFg7q",
  "key14": "64Rq1jzvxUav9ykE5rePRTM8Gd5irVroG5gchCzLfZiUhfC5Uvu7cJBorFQsFEtNRqtw5TtH3sS9iktzYSSyyP7e",
  "key15": "2GGH4Pamg1JdF9TKBqZNbwBquvLVxyna12QjS3pRbHbZtNjCQXQaR1z1dyMoUrRPmX2M7XGFr24yHmPCrR7DRD8x",
  "key16": "2VDzH8MQcwJoyJfVE5kbnUCj6w9mKDGVc7Zs5751tYpUZmikEW9qT66M9Weqv1BYhh8qwMkczHLJiFEnj2AMjZH9",
  "key17": "43rt78WiUga3CTRvrdE74SqHznYtB4BjQn86HVEcVy96JGAa4kRsxekxpHD9ZBAdk66tGd3qH8P6u2ZvtAoSb8s6",
  "key18": "4wWPNqP7bSbuZ1Nk5s9Bwbs21gj8TFW9aB3wUEBvK79gejoEer2KNZkv1bUV1nRbRG5heqHc946yR3d9cmHmDZzv",
  "key19": "AN2Ry9QN44Fytrd6Ywtr22wCEmFyA2WEsoDMGyKqwNqAPRZ8XCV3uU1yy7sNL1hUAoJmmoE7cPS166dtD77L3KC",
  "key20": "64mHgjj56QUyvzNQC7jA9PikRrsafffgFT5VbvXNZkwcG8YK6FLNUURxZ79cYfKw55keay9G7vqygui2X93JvuZS",
  "key21": "5e5g2TKeK5v2STuDh37WUxBgs98fL2XZfXwMBBqmvqz9mQe6kFw9WM1jeyZwR1YV8dJczEE3kd2KbcXpZwNXzSyJ",
  "key22": "zyYD56zFJeQfJyeNMYw4LsAMJdHbEAFCTZDgByx4htJWJ6QVMjKN1VHXoqBHuwDPKR6b1yeRMwmGEqWYQWNPec5",
  "key23": "37WpQpNuTho9E627BVXtL92fLXTF3aRmgACmaVK9mJ3ro5UgSf52jEur3PB9wTP2W61WdFaUx2B7GcS6KsnN74MT",
  "key24": "3qpUYhsu2DxCPtKk2XZ7XDJp47iWVRBE6yubhvTh5RBb2PV15EuQXE391KjeifdVZZpCs3ng65vcaxqvYXRpog7u",
  "key25": "4CZGm4FD2zgNtZoCKkmBQKqfeuvxDBKEcySEMPn1e3J7HWJoj28p8SCgSin9svPbkFTMG3CgK8zNnN1y5nD9HWHz",
  "key26": "qaB6UG7AzYYLnCRc16UX4vEckvakJo7unuXxWQtisx5Q2j7DEXQyQxMTd9bxjs1463CDZSQaNZNFKjesm1rcGX5",
  "key27": "3ew7ZZT1pc5Zp6ukkKJVbm8ovX91rEPEaw8D6TDPnSihmJQvGujytJKQNb1vTHRQ1JVexnKDtzwfPHh4p6yYDKDm",
  "key28": "5eTYBevAsbjva4fLn9q77d6ux26wAxg3Riin36hCJubCzde3v3Wmx8jN6s5oo8siyXKTSK3H7eK87w3wqa8DNvrf",
  "key29": "3qpn6MDkZatjnpcsu4RugKDKMrLx6UiYzLJBcKxLw6nHmj9oRcwWvNJJszd6K6ahqTbjenhFzvv76cKcZL6SYqbE",
  "key30": "HS3YjVgpZSUs44jc4LXxp3LzbqWGevFQnxYSGwEx1LXVEbwRFVChCNuuKq4AqiegtAbn7T29CvtwM7MPpQbvc2V",
  "key31": "3mSVWiR4WSSzDehjDf2HZb74mUsCcjRjGN1DQftJw8GQyvemuW7deA83FcZeQJPNvTRENswUVXgdWJLxZGV79K9G",
  "key32": "nMZdzWpUZMD5JygrpHRRHbKbfZ54VFZEs3hxMvX28WKv76DUopJm73Pqo58KGTgdc32FyjKhUtVLBzKEuXvR5mC",
  "key33": "2FmQndJZ3wCAcbXek8vWuDDdVKrrtwsLPxnszg2V6b9zXzojYxdHMKo1Fni2nr2UvD8J3cABusejfkNNYFopGX7D",
  "key34": "4ThnYmSZYEw7MBsEfMALyKTNJxzsg2TqmzpgotvQPuMDbpmkFMeT95UTFXVFy21vxmavE7jupAgmanwS8ikxSPbS",
  "key35": "45X7Am1Htv77pHwDczyDHLogCR9wefjuHtrymv9mKtZhPHJ9fbcHY9eBm4LerLdf5Hf1PNbXCNTFmaeBFnD7wGM2",
  "key36": "S5WmpqU48C1k9xVQVFfY72W9joMvtE4Bh8cR19S6tnCLoserT2drKsHg4GPwetUYDmyPHxneRN8fyPJsUEVhuGB",
  "key37": "34hxyrWwi3rm1z5W3GPzvvJVPynQ8L5RyrQe89BLLAU7cbwPGo1PcasK6hQKKT26mdKJ2KubtysoKgcXAZeUYEJd",
  "key38": "gstjXL6WgvPjVuNuKzFhe7fF5KePegrCPiFrHcCzt1WhESdTtWd19RTzgmFb1goXYvS4j6sSEABTqZ7YufYGV6C",
  "key39": "2DNXwmH35ZjUuuh5WkpzLzHPo8rke923fcMhHiDsR4MUhx4HytkwQoHTAgHv7LLpnrUGzEXWwJR84XqnQunCNYHe",
  "key40": "2R4be3mGVKqsqtRVrQq6cSNXxmGzRivkCTxPaaunePL7xqXxWkom5rKTMPQ3XUK9VATGpBYgbwnrbyE2TX9jBerg",
  "key41": "aZQsFoLP2vKARbCC45sDJnD4b3kML354XDkLs9QxFh7ZnQdSXMALYRuvzCZGajWHxk2Tc7Hu8rSkRyUjaCcEQdt"
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
