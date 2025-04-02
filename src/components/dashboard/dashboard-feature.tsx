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
    "dE9vv5eNqPuR8ft8evy11L7G9xAqASZYjFe5bAh8uTQj2kgaS28neQNnGSAzxcBbF9sqXCnvd1vu7QLCmWGszSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZT2gr6EXZtz5jXE86XkTf2eE5reBUXDXQpNQb1hHUCbxuRpC6MqtruUfTz7WBL6eYDMZxy4CWXDhsdv9jNaAtX",
  "key1": "3kNtDv2jkxnwYhNVjK459UwX1aJN9qLGwCSVQ8ag2bx8iwMLDCL612mXYkL75JKfXHznyAYEBarDBV9i4imT9YrZ",
  "key2": "yBsX7CuNQNrecywzq1w1zfowZGVedbJe52Rg25ovwz7QPRFcp3AUwGcsSHCvtCAFacyHgVHrCZpFGjX489J5UAe",
  "key3": "5C78wSoSysXwrAvoVi2Gip3squKCuQvdJwDkaNWZxFBhh12zRhmL1JAPqqLgUBcuFFeRMoPPkAekRN8GUmakVCka",
  "key4": "3oGHraxXAfjQcDay5YwmSs8zvkRdW1vkWtAtiM6eT974apUnAxRdxkcUHePg7uGLDpoc2HgRkDgLmaQmnkqQEfhp",
  "key5": "4rcxMFbnmApmtvQd8vX524jDm3RjLD6KT3HLNRXQykFoBwHAPuTNAwKpkoEatzofvefzgfPkwMP42t1h3qV8DVtL",
  "key6": "3cUgE7rDx4xyM34J5ewGFGxJssNvGzjhssjZf6Za1pHdadmiJFWaHCRLZ3AAHKqwJsTsZUGHzje8XAW2jEi4wDVb",
  "key7": "3npRX85RfbokJBiidtpX319U4TdhEJs3Z3vXoUcame7FphQZ75Fa2zmAd5QMossNdWhmMpiQjEjnuJNvMfmhLien",
  "key8": "n1hrPP4A7qTHMqHpe36i55YQ8WSCFyF3NnHi5uPMBtygz88aQthSrRU8rWqxzuzgXWPX7oKLQBpmGszfoYPuzzH",
  "key9": "2Pf2uLTjdLBqrn9ZCegBjAgtVV1NV28nAhPf9JgekiCnVw3gLo2miCYQaqA9L59RNWArJ1oAwH9jJin1hq9cWuQ1",
  "key10": "UTS4seh9wdmagaYtgkBkBXFQ8ooifF7Ata1xxzPDMduUppUYviTVPPawAjRC6wRut3ATLVvRnpsAf87rWxVECBj",
  "key11": "2xycsEpH7L3FyaAGqg8frmy5A3LEcCiob1wyJ7qYDajVJ96hbbHhwAuF2xCxBPs1TvHi9mbKQXhS1an2N8Btbwaw",
  "key12": "46tNy74rE4SrGCTbs2HJ2zEKt9iX6t2Hi178jyMi3rzY2A8tMsUa6Y4neeAiSQcQf6fN4jSBYGAFPM7bEAaiRSer",
  "key13": "39DkQSgtS6VvsDUC3uFo7HRAiUqEXU3nNHtAcKZk74QdipS2B6R1E7wpq1qoCL64AEVdpVmbu2aQg47u5hzJAB8N",
  "key14": "4jqfzgJR4kBjhbqkZNDpRv9GTae9QDnPMShuVNE1wfxDP4qQdaC7nvfoAgrjmU2BZU58JRHTiqT3ySKNrVJDPbBJ",
  "key15": "5m1y4QrM4uPQuMvWjJ1VNBZ9CwLmSH4fQnd1S2FCroDTweshUxYV7oSt3NyZEZhzZYGgeEoXu23PfyLGfc7mH4d7",
  "key16": "394zW9GiEcyfPRX123XCE12MHARmZ1UoJevPssXdKPvqT2mZKWUAcwLSTUA1rev9mg1eBWGx3FUiEdfUv3JzJmwB",
  "key17": "2zCBC3NG8XEpFoBCFWVxQU1FXggvVsdsnQoUAmrNM3dXaYma5YWdqUjgWf9CJgJjcewjTGG8GpFHsSLJWUTyJ2pg",
  "key18": "4rbBQfuTnq8uWd3Lryu1Mw9XK6PTkZtTT9X9vNZpFiDXL4z6UDRtkukF2c8umk3fEnixFHx5R8SceWuYMoiURgTR",
  "key19": "3iRdMbGGTebVrj5hdqakQ6AwCrL2mnkSEY52ytVUY4wed12tJV9hX6Dr6f4dd5dyqyQAAY1vwuYSnj69TFhiRdvY",
  "key20": "2Pm1PKZ3wTXdF8osPXruxBTSSzpmiKKsdftzHTY9sx1Z2KNcbfwMG3rJTJtu1cXuddPjsWF1mwAwfK76LLwmRoQs",
  "key21": "5K7BvwjurzkZweyeN5YGU4evGGu2V2dMWC1sZZv9tVeNj8pnJ9DZzNFue1UeZVkf2k7cFiTqcZAV7LzFpoEMS41i",
  "key22": "3Txd3vCrB2cnDBkDnUsCqx4NGQL6RQiGETUVzaJDw1HZhDm2C6HjELnSQTTUC3iP4Gy1b56b3xxGeGCM6Fe23ajJ",
  "key23": "hmSnKzpmsf6DpdQ2NRZX65RkFtJ6LDs4Qa9m1Gzj9wj98S52TkVThogLKpY7PUER7L4wHeZweE4m1N4mfHZ3qHA",
  "key24": "TBveupzsGVPJ6tz6JCVEe1vUjDVBG6xXVurRXFaar9kE9Ag4uWKr27Cta5digfdujwKEBeo99bemVjGvbxUv6BW",
  "key25": "64fN1vGniYebJzAynTapTsNn6bgyC6S4cXj4TNDWGX8pu54adcwCuJFFwFQoMMP8GCSmC8rYQvQSnWA21XAvGJzP",
  "key26": "4SbojiGSZsDKqxhQicCYRB8UnDRJK3gEmvgZHQW86Pi4zhbvs3cDgPDCqWzyJPLS9cbvWfmx2jfY8ydnFwx1smLq",
  "key27": "3RB2VJBZvidq1mSjG5HXHWtKnZ8pNvp3zQsBeyHLSikZgGg47AAL2JRbunrgPPZRFp8d5dnGqCFchQAAYXcLCGC5",
  "key28": "p9vMYbD8nS8RETegMJNch1Z6cWMEcbkvFZR8svN9qQidur4cRjpZm4npr8aDCF1ma7uQjnRT2eFv33xbALG2FhQ"
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
