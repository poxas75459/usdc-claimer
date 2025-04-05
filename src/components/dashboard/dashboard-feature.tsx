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
    "52qH1VgtRyP8FnJTU5CcPaVpsozdCfsbHEiiZir5271bTNGn7zj13Uge9TKB3TWN1rv6WoUpswyN6YgbvXztwCgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iLAA6B5hs77dDSAMUBSepq6m8m5v7nCCCP2fc54RkzxLAd9UskBR7fygeq8PtFwzD7Zvnm9YL4xMq8RMX4qP3os",
  "key1": "33rmea6gbHgCfemSYeyLYth3hzAAi4ACVadJfdwXJGZSUGfsKbR3SugWgFH3WeBnJe6RuLQ8E1sDaMvBD95NxkcC",
  "key2": "4oC4FRc2MTF9meX9MDvraCdKzoMuVsAJYaLdiw2tKWnW9QSXVTggKsQskD77DWEN4vt2g9L6At4G3Vd3sTMydhf7",
  "key3": "4vtxc33JLUSFq4JNgFsZ65Dkq6kDEYUJoAfbzicrQs9F12ebhL2JQ91HCMYd8ZTx9oFveKD7ZM5uhqzovEYhPen7",
  "key4": "3ejEd2k6LFKoHNruD5EvzbtFgPN5KcrDHfiZKkf8U2oPmTzJXNrmucDCBKNSyu9sEp5CUw2eu965GVVMx2KbajGS",
  "key5": "3E7hPeBVQ4YCfr6DwUZ8qFzQf9T2tR2hXwbyw7CikJRrWqoyZV2fd9rRS1BqCVZEJESpZALs2Q1cnjvaJsxvzXEj",
  "key6": "5hhzEE6oNMwxv5SdsH4m643ev1RBxHAijFGoN56RXk2xnxZM4vA8xohB3sJUU8jJtcenD8xGjiPWb6sA9tpJsPym",
  "key7": "fzrLCPJk3QhNC32xyYriyMJpR1mDzU2RHSPAdPhjnMp1ZbxGuwuXntNsBoNnRf1RiomLpYW9ZBRYW69gE4NBpqC",
  "key8": "4zzmhoFsEzZPUbv8uucNTCv3QMR5cBuT4wm6cpCu8W2uUPutHWSTMeGpisBzkJRqV3X2DiZ3KjDuPjHLubed3ezt",
  "key9": "42agRiULHoqMkXiWyrrfqdKSGu6iaqfiFnh11NGfJfcXuNKcraryQoGPbU46KK28VKEeQGbY3juzjciKAaCASDAd",
  "key10": "3fhJk27BVNpqhpsDL4yJhhTJvsebwrmthBELveHMRBFM9CNk56Q4WNKhioN8UayFAPGkQmwd2cX6ui8uwYvAdg9c",
  "key11": "nTDSP2FAqv48SfFA9LrNTpm1WxEPASjSyd4LEDpoLKUM2biqKXRugnVCrqmQnfCbvCPiaiWb5UmGY7Xp2XCrLXB",
  "key12": "Yg3qaccS8reVWoeZsVjrXnjRfXsvAU3oqj9EARfQkaj9QXWv9Cyft5sBV8nKPD5sUV3ReWuJBvaCJmASghAdqFX",
  "key13": "5DECThRR9fHJu2FfgsvmVeQyW1ocNiiaJQ7Rt6LMfH173wF6LHRRSTUz9EbnKtFw984uJhpwHGJxpiKjBwRmTH32",
  "key14": "4gkNqmNFhPKzXzS4SdMsXNeB3JEB1LQpNca41XUB9tMKoifqo5d7wyT8MZkmXgYhegY8HDeCqM4yFSgXFdZ6KHYS",
  "key15": "4xNocMFGoswGj74qD89TSQ91SmQeiH2pBK8GSWJkXANm9bad8nnKnZ5SHw3kSaRb7PmNpvTQMg5UgmV7w8cd8FZ8",
  "key16": "EcEcMZqwTumsnTWZ3VqWSnMHHecEg2KcM6PhLR5C9f3fyYgSvRcTnurJt57PJkYQTADLW9mttc1eqjhZndPNeeM",
  "key17": "3duXdT7z5eMQpC2C2o4RHtbozPQR83gvaNDKGtFeLWBbMvWbiLwgYHQQp9C4LNnmKw1x1vmrZ6KqFoVBiuMXimA",
  "key18": "5LRgkWCt3CDXUZ5KEh4p6vJvTvCwC3PmBtTampsRf36W6NSE98GeDNgeLubpvyxcFsE1mRfxCoGGk6mp3wt9TuA",
  "key19": "5ZxUJtqEwKjpcRFEf1JENnLZbtrX1h19QP8LEZuDZr2X7TrVseYktzpzjVSHVUL5QYFAdpQ9mC6n9ThkUK47rtVA",
  "key20": "4FhJtRD2u68ubU1oNJMz77afNCJN128uUP8dguLs31KVPTSmTAUdiY62wMPzziBrKM7gd4UGM85EMtVRNrodHX2A",
  "key21": "4dADggSHcyu9icWaEvyTS7pJHi5YmtVGCz6aiAANF1xGqy5s4zzttcrS8DrGhdDEzpvH55zBRJD9m6vQPvL3kSbU",
  "key22": "2ppVS3nomySsP5qpJEL37zTvf1CNKoQt2iYLnpdmwNV89fzUKCjfc86C1LxxD7Vdi1a3DTcum6Zqf7C5qSMj8fWK",
  "key23": "5mJLt8qrtonbuY3BX9G5fnBiK2FNrK8vNGAQxSHk7bdzbwb7TSgQedgrL5Qq4RMXYpYi7kN8axHBeaJk8ij4usyV",
  "key24": "sB6ZCv96sWEPEzkhcwVYEpqSBysJYuidPsA7d8FDC5Pz1trxtTtd23asgHuncTHr3McJQJHrSv1vjezgsiVeZ3Y"
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
