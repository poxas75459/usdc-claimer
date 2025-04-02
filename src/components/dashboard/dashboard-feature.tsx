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
    "4SM2wEMntpN7ZNLj33H854RqU3WKsZ9gR9ZZe2QtN1jLjprCB7jv9JWyHmJH5U3mfEjVmxS7DnCieEdA3gSugfUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "237kXQAg8HF3E2BWjJQgsNnMLNsEgT4cMJYJzzJDBXnMXHvKGkuyQvFR1wyiFUScJH5yFeXr2jUqcKuP35tXgm6K",
  "key1": "2u92CjPEzi6o8YpC5yao3KQaEuL2v9ZzHRXMiLLm49wpxGGTueGqU4wdaxm6MQcLtBGQP7ZNJKyP8Kz4H9CtDtWr",
  "key2": "3ByZcKNCYJy2qCj8BpAm63XQignHnHDYtYs3NizFmyhfavMZaNX6uJ9rFKrE8XGRAwUBKdxgH1H69dYbUHZus1PD",
  "key3": "57QcAMsE8LcyJeX94E7CUrpfmAFvhMFmwTriYJLZrTV8VH4aRAZEUWWwmT5Y9feJbGSE3BfDpbxZ8wUH4TW7uLeq",
  "key4": "QmBMEfJdxhSWgxzCQvYHFDPT5hw638hN3YAg3CNHL5ZQMdvsY1xCd2BRtDN2Z6SxWu54JVxF5arDFT3uRsVEsQh",
  "key5": "5BBeQRNsgRMto5jX2YnPE7vNyrPgx9amesHMYNpvqDPFu9S7yRP1873WmNH3sgYfC21zjqhTSQJR1vD8SjbSRRfa",
  "key6": "3jybYCsUg1tQYtK9o7NfjqrHZEHJFphg1Bm23wHkcMZF5cDbkyznDM53j2Wgvdc8VoAEFXVQT47RncmsxAWMMuYx",
  "key7": "2ZVDgjKXMW43exRwPFmsN3bgLbPoUbpCKB6vV7vZtmSwum5g2D4fNWUCRXwtiSh5mid38quXyuryQN3mQEJNeLLj",
  "key8": "4AMCiTBGCCraH9kKRfXGvP5xmfLkdq95o1n7grEDh7njC8K1ZWmpoSwHLi9EVy9TUrEixFJm8Cug4aPLsMDZNwxR",
  "key9": "MmhwZiBUUzLbZgKRmVtjNjKfrggCNo9cSF8UDPQQ4jHDwShA4nQphkt2XVsfrrRhLyiguHKzhV8u7gsy59VDR9a",
  "key10": "4CKGbHyJKfEHsRynuQ1Br3dYucU2ZhezQ5duoxbHkn1J3XWmTHtnMX6NvRCoQ51LCa8bzYWznJKJEshy2KL2boj1",
  "key11": "5otkMdeqe2ek33GTKQ2JQRX6CKwAKj5rRXYvRpesB9y8Wi9gFCRXsXyTnnuisvz8jAdKmbsyzShQw16HngkdzdX4",
  "key12": "4m9QPyM5e4dogCX6daLwHR7x2C2oGSikhsnEBV2fpfnSK6CTNGjzouCunHcKWRRRJWeh4QDT8J8adzawLqgab4eP",
  "key13": "2a2fBpGuX61YQgp4vySshDeDEz1Xi4fDqqXR5k8YBGixEWZYBT1GFQ8Rnry5UhAVERRygcd5GYCqEo6SVtQG23mE",
  "key14": "36WaHKZ5M8TMcKMRj7Kx2pHqQJwdBCf5Q2UCKjBKHi9jAdvduLVcoAvy61Xwf7aLzCa3pK8oPKaQ9arZZzb4vgDp",
  "key15": "2K1wbH5Cv3nGhR7YCLTgC7p4WxjLaWpABj7WAts1Nbw8gCq5fnQZJLjYUTEyAuxP8TwrHw8wmwX72URQ5dvSWD9d",
  "key16": "2xcLCUogHgRwa7KrdVboYCWdrmxbdjxGLGcWwWcc396cBedFV1PjDHconN5iWkPfuYxf1PpHYoveFsZCrYVtEgiD",
  "key17": "5SbYZgJLX7eM7LKDcjw8PWhsXmfQsJKjAYgDkTSP3CuK9Bp8zNKzabZ9SMbpcfEMTuTR5ujT7fK2fjHXR9SSnf5R",
  "key18": "5FQHLrSCFEYiYc8Svzr6C6wopMRarUpw6jR3p1Ja7U1uUC75rd2GxznmNohEcZXSQ7AaAQ6a4fYdFy45DjqFijeV",
  "key19": "2ueSwMQzmR4TTXn1rhtRT7U48UVCwvcguPCYPMGpHBwQkoqt47Fimi66bmxvYTgMjadUDgUgtrkjk9Q6aa3W9oz3",
  "key20": "J9QdpvxGKQeNrY7s1ixpP2CpKyJxmkeXmmNZzjMVQnHNr32HyARC4zozQyXhxG46XeYYvqaPVj6uTLWeJ8VTkxU",
  "key21": "3MZh3km364Ynd8EPDv3BAcQtn2iVFNKdCZwLVLpqQubtSrwTtMQdDEWQJfi9VACPKtUnASBUpMscWSnWpEjRYShr",
  "key22": "2HoE2Aoj5GHTp5fVfPNLSJbJushfGs1c612SthkGp8bFAogbfHGAYMKZoTQ7E9iKTj6gcHQmdDzB9fdqM5L5ydVb",
  "key23": "RhHFL9vEBovink254EB7jUUS8YQDABkbtvMTmpCrpeZbv7x4Qp9XCTzAvscqwgh6BRDHW26mbY81sruYyrB51Z6",
  "key24": "NdiqvQeL2hVxSrurpwrTs2UMx9erThwxGjtm4sZYVWi9A94UZoty2cqspUqr8hW44h4ZhcWAk6184149PNYtFEY",
  "key25": "5aHRMixLt2xf44uoM1FjPijwpMQ8y6E5vVqrFA6pu1Q4Ffc5yciJFLN3PmhDJLDEiHioFdhboXXxeDLGPGCM9ptV",
  "key26": "66MsTPjQ4dTqyxKDmFYD6LZEca1nPRGTxwQiGqghCSuJdngsNEZ85cULTJA4VJpY7WgJcQFq2CzFL8AtNy1ZUDNY"
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
