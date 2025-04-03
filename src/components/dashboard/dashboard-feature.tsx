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
    "3xNgaX37GN8riFw6bNLeXa8f2W8R3tYGwyMkhvDR9dHzn87yiy9V6ET92GJ6y3YxSaFTuiREVV82b6U82cou7qLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X8b5Yyx9hgxHrfvY543Csb31h7kqoHuJdgZn9e7Yw6ot3R7ZKhEhrkbJZRK8bacB6Tc88FrGqbEKFKfAr9LGkP5",
  "key1": "eiimdZxpDVVZ6wk92cVNNex41o9kdztL6ZFwE1XM3dp3fd3QDLmBkvdKRHSvRNhcAmQW2w3VPYSAvod4295Ygrs",
  "key2": "d9qbuRm6GbC5YVz46Ym8o6curnkRMqy7W7Ab6Ao9UHM7R1Ukr4sceU2NjZJjaoFfUv7v9QrXhxYFpwepkTNCFkF",
  "key3": "4Evy4jEu4tvKxffM1jZj9MRW8z5sghiJghRXSvAb5DjeFkY38wMpogmrESLLrADrPmjcETBEPkYfuPbPZNazf8pi",
  "key4": "5TQzu5jCtxoA2HpzTapFdchZMNU5hj6GfiCsK9w1dkoh9cFBVgXSYX4ZDteVckJnTNU8dByvUs1zxFRQB95mAJ5g",
  "key5": "4k2V3c2Wg7wnLca94PJvbeayF3Ty6F2va8vxUesoS9kFguW8BQr7q2w79jBdLWsVSEGKYKNuWPGAYcEumJDMzT4S",
  "key6": "2GRKDFimZPYQYawkhHe6BDCpqsHyzxs6Zzm9D26zyKAMqc4yhwTdCYsCAY7e4vWcRGSzM8T3M7LvrYBUxV37fQXb",
  "key7": "2wjSpTS3CyJGiDWgNGkRBmHagwyjrR8xLN12yGbcehGtxrz9N4JUFVfME4i42YjZkago8r53AnHYqPiU9dg68AnK",
  "key8": "4u3CPRpiESJVhP71gy4WRycb5ozJ9V17EKQjWT8oFnAdnKNoE7ExTmKcGYeK2jpcnr7wvGPBZ8cZLhjMgvqx83hr",
  "key9": "XHZ3GVqBBknnYiquDBHCfa3MJy3isRHdhUbyQYE111HyfuX17E5K35G4Fep6ncnjPz8BhgBHXzPoPqqAGWHyshr",
  "key10": "3ZYrb1vXp8RdjHyc5hEvtET8KKjrMWF1zHuGPxtSjkJeSCdPZwKhHzwm2bqcqVwRV7tdwX7kJiT6dFrjk2yifa33",
  "key11": "2rQ3RMKnaLXm7gnaq78gu6UVfR2Ydc3ADiEfiTYg4fQbebeu6Cwwk6EY4btZKSztKn5VaLBLiWxo5xP1QRgtCGej",
  "key12": "67G8udV3WfeVUFCsHUUpZPuGakiZFMyXq6YypqgiwNk7YdG89nCe4ZZofX8Ucp32sDbenQPnxDZJGRjWU9dYdgDi",
  "key13": "3rbc2jCEMG16FGWmPxRneqmbii1nPAWzuiBAxnXTGcPCJeWKv2Kq3UWyweNE7rxNvXgJ7nkqrcyoDPkvv1y3oHM5",
  "key14": "xnENn64hWBgRdesx1rtj68Rf7xA3C5bXtcntw4tGQ6K8DdZh6G43NDMVtXJk4f9BxfyPkKZKHXK2Uk64jtWPSvH",
  "key15": "K6KJWmiN6Bk5Aeqv6PMQ2Tpizbjp1cquUiiaSPAycRW6m2vPeFnLB8Y8tH6WpL4imBwy5gKGN2D4bZy1eEBRPs5",
  "key16": "5i1XWvUCNYVkuAeMbtWKcKVFHoAmCG3FghvNAUpqEk7Eso9c9ikYUCVgPaHAYUTpXdQcZBpKomf7WVA473GnJqV7",
  "key17": "3cE1DHsEuAx3t5hGQGUQBg522YDvpupzsyhtsrWDU5hHihaM1DxDTymfM7D8z9nheeAG3p8ESHDSXAnWcNDFdeFF",
  "key18": "3axJdndgZ39TeWbhsgNygqofNWWoQEoTFNLvoFjAANBirG1CNfYrYJqjHWnNA5sLVujKzrU91fAbsADvi73U7WPM",
  "key19": "3iL3mndBNobGZrx8i3vBgyA9rx5dyfm1uCD1sVUKSCnGdnCTzKfyviAXw3WNrdRmyxL2XBUx13aqeCaqxnV8SA66",
  "key20": "52fuJ798CBqHeRaQgJQPbNtfK9v59AiFLZ8hVcZjvYuuavuzAFVTEHiBvwARiQYnMrmTQF6BwBT4DcYj4DN3vPgX",
  "key21": "4n2hDoUfJ7HsxsmidXvWP8pqodzCv6wTPK9BZWf6ufSLiRFcFpbCVBq2eERP7gyXKb3218bMbkTSDTYKddEJueXS",
  "key22": "4cfbNgXaADZSGqP99dVKwHUi5RGTEQPgMXZArt4bW43orXU9NT2fkzFbNZhqW8M2Uj9U43WGJcQA5baMyo5DAdE9",
  "key23": "3X8jmJHuQQzaNKbH2wCr9Y4GJUnAbmjTRXT98968ZS3UoYfQSia6VRHR3Dwe6nPj66vDw4ijHfQeP8jzHay87fEz",
  "key24": "5pwSSJp5qJjEFwy4aWrqapaCeQ1VWFN37xVcoJKbSxFj26SeJSBAL6AKAg9dkLLMRQy5aC8v9KtsPgT7fMUbdqPv"
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
