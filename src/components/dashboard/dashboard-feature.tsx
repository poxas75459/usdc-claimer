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
    "cr9w81dCqz8pSjD8jm2yi1MyqzvQKLmsyCYQRzGiES13dKoUztoahTW4v2AXZfgxdDb4PwN7pryBp9YSbgVVR4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUK1bXsjpchCyGgJRF4BoDvkXdDjVaw2sH8QxNWCSsMLfk45KcFFCeTSvSAe5CSjupWTZ4fhqVxV1Szn9BLbYjb",
  "key1": "4d9Tvx4whp1WMmQnEjk9qzEA4MFQNoogVBmc2eadNePbP23qWGcuu513tdunp1UcxywXiNNkYmc3CMwjLygDWe8u",
  "key2": "2XYaPLm3E3oiE1tA73HK9hDpXoHPTKsAErwTrYvsBS1fy5QNLTnEy8BfsamK8117ckWQmwqkDgb7upk5yUWZUym5",
  "key3": "313CRLvdFaeGyGDAndj6A4yq4RWYiifNBpgRiPZNHNSxvsx6UXjLDiRHjxhiWRiV92Pr4788gsdfXzPMdA5FSgoU",
  "key4": "5XT5y8dfZav36sFz4Eak6iLbfNrPVpb5V3MjkkSE17X9ViqqcKStgfgEgwbdmxZC2s9VgqwEvS2weRfubxT993H5",
  "key5": "4RqUnv7hj9ytq21k326PMiBwDHVCSjgxv5qgvTQykZbxTE73jVQaJ1CnFF6FNTMvQ23AyL36hF7eKK6dgDj1APWX",
  "key6": "nqavnhotUssTvtoCZZQuohpkLc3rfEPSmvuKHbCxGaW74JrSDXYMqwofc8PKhVgNcR4b3f2BGLB3hf2B95WWoUA",
  "key7": "4vGXuLANDDAWJB94WGLcH5MA49mEsnmGJSA3qQyjVYsVkL9UhqVxcQBLBeJP7Y12h5rDgfiXPmxPC37bheGXLpHD",
  "key8": "4dhyLh2G5B4o2Lf3FGdvcQe1JWfdJF5cFBmSGrYmWUBCHaUY9azVdgAK3FtLcC1isqmmMv82SfPE9VibyFsh7qxX",
  "key9": "5yPYyzhq11t1VUBnZVbSUARc3LXzLbtcYq5zxd28BsZoMhq6UxdzBQYdkXcTAmVcgksHzdDsybBVTDqNduhmj59h",
  "key10": "4CDUzNkYrr8DwkrTeA94e8ZSLtxWH5QtHKUptBC3xq4dojH7Dw2npU6uizJ5vP9GSPfXPvFUGDrB85DWfTUnJxNv",
  "key11": "3ngzaxX5eHZaVgHTyYFjwJfkHtFgHGyvvXphLigRNKbgSiS7B7pitRd8DLG7ECT72xYKmfbRBWEm8XckTs1VwHND",
  "key12": "XMm2SBdEHHT47sn34ekjjX5iNT1asPm8xgAUP1JaNJAj1jXxhPnQ4WQceSJA42tvAi74Bv7Mezt3bSPS7gSTJs8",
  "key13": "5DXmxceC7ZJgHH3X9AVjGAxAqtWmh4kn5hHsEPD6chNtDSZwin2XYvsyXv5NnLyTgJmPPBMHuBnzEeGvJuqWubPz",
  "key14": "28dkneqMr3CkXtnGATcNzkfBkfFgCQUU2Jj3Kdjx89nzosytZccn71b1e7AW18sLfamf81YS8YS372CFHSzqh1iK",
  "key15": "2P6DiHq8mRn9iZFpRuNRj6jToGKEU256k92kui4N1cofgp7gCqRbSchzdqmeLtWesoWM9ZeWiR4bVLiRkAsSw9kh",
  "key16": "SVZNBqpDSyb4SYzAdZpTYuypAvkZYjz6b56qQgQiwxGYRRaahzfWfS1RynQ16De6pCdhUU2R7e1pDAN3jz7mMBd",
  "key17": "4FwZ2dApVMcFoyv2hDuHE7FtHyXKJH2TUDh4pQQfcriKuMhyo58F6xRCPbABehUojHZ9Zx1hKj5ShKT1ncc5NYY4",
  "key18": "3CzHhj8bpmKGzszM9kT1m6urDFqu3BD5m2m7kLrBYBBgQLcSSdpsXJTNMPmnBTNGL4gTZXrneYfoszRm9JoLTrM5",
  "key19": "2DxW3G2RFkhNCzAQdKnjPp28GdTHNTYfzwLaamjbfyJSk5q8TPv7UqSAwDEZs4DYXncmatGmL559918765d2RK2y",
  "key20": "3BkUzTusdgt5A7CHNa2QWY5hUfnnnfz5Fo37NSwmuEvtL1Ayb1d7j5G8zKisQt1sPatXqvqTzgU5nCEyMUg6AS5J",
  "key21": "2RH9jhvtLwH5LHbaVar2wmvtGdUEjyG1StCwfNQfpE1EKp5SHxfJXYHhtLdBwrJnjpAKQwNmmEFAd33d3mEBBYMW",
  "key22": "2pnm7LgPUy4pMDESLfD729ngkBuZ8Jj7DXkGRpacPomzA1f8nAyDRAN4mBGE6HuRM5cRmG45UDGY4iiRdEyLLLE7",
  "key23": "5PCcPs4q1tRhbQb5VgWDmCXYdrJ5bDGg2Z3yQtDFWdvyg77YumbxguN3vqVpChQ3gz9MEjqyqSGSBQSoECGvJ4FK",
  "key24": "GdTPqwtRXYVoFQSGCyB7bE6aKpZpi3ovDL8m3ZbE5UHjrQk54DRJwY5MpABTFp3KvCVnQvwizphtGDb9kM4Fi9A",
  "key25": "3Jq5rJAWudrALDTNXXkSTG8djHZLJMyRrJoLkryL4TXZmMyZnLCBz4JptfH3F2g1CcDbVq3AHUrByfSeY5QZ83Ke",
  "key26": "67RnBhnF5Y1xQeRjHGVqTgDB3GeQM8P2GxQRSsa6AaeRpjsFUhyKj1RsDyyKbKqRbQ9Sa1YyUKioLxbjRACLQrP5",
  "key27": "2Yd2tbyMnkWnwxkncc3VRt5ZwckK98qo3RSPnJ4NQ3VeQ7HpnLcmVQRgJHSZxfm6YSZwHtrvspqBpm32mQG9agpe"
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
