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
    "2q3JqunNyvJT9A9bk75VbsZ8jCYkXHBEsY4zVUNfbSJ2pPqDzA4RooMR4zzbqqDoT6h4bCdjQ7tmViaUHsPTmVh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4whTZYeaCWZY4wEk2z2kL2bzUYuGZhttpNLcuQg1kxvGL6mo9U1SQTAWn1RN4KUD1Z4CBwNQs7PZhyPu3LXUEx",
  "key1": "yS9xuL6v4sTpvANSjxz5dLTqz1A4MuuCfGRenwxsXxDce9GS5EwjbhmvnN56hBLzBym1uNRLgzJDqcCGB223XKV",
  "key2": "3r19NbioqyzzzdAU4gRGxM87MQv7JrXxGMHJXhUVntu5WBSnKGL2PRjwZmVfhkRnDJNuR1cMVB2cxf7P6xQvkyci",
  "key3": "4nT9rnHc6wtJWmWYPeP8oJTvzg8ANgeN96ohTK4hp5vG6JZW8HjrKN7xyG4pnZF765kVgJMqrdHf1gXBZKG6oerZ",
  "key4": "2Qdu6sRTzaW5QSmRxpCnxfGxh9gU71Nq4NxFDJKo8N38FKSCWJMRoAvSA6p4LyGfMyi7VsQ1TSCDFbnWcUHsHkAb",
  "key5": "2SFGesY5Yzcrb3QiJoBidQLWAaZWEVNeaZnAQKDNtnQrdh4qLQhNyPkQXg7i1MkcP4H6wBuUimvizRbAU5ZvbUNa",
  "key6": "5R7AiDWLsVU2fCHEDTsXK8YM7vDfDU4wvpQRLQFbtq3ydt1MiMojjnPfs5Ja8UscENirgVb1SMZvBRZFkT5xcSF4",
  "key7": "3VNji75zgUmkewWu6MXaZcdEEBuUrZkHiqovQoBXhgjKoZfcd165LyV4hCDKoWmPHVFTwAya1D2xgkyhkwNJk3Wf",
  "key8": "2Q8MYmMHFWUHdLnRHvBU34sSNfxZMP4XeRFzsBq8UDksZDYJauMTwJsKmFg7SLfFyNiL4jt8i1L312TdnyFPFPjN",
  "key9": "4FCFvcHgg8nbn3dfdb5d7D1MUKPQPjJaLxj9mzZ7yLDGQqrLtZo2K7ge22VA3J4nenDGre28orgMKGPtxUsputNE",
  "key10": "LTkFfcCpFuzkL3UjUdbkkE8e59rCcSJPWzWysiBvm644cSpuyjXUBduFqVwsY3XTJPu9sYjVQmi9fPJtzH3fSg8",
  "key11": "2CyeaYAZRvSVtkXBVsfLtpyx3q5zTwteHYyeHrsRhEFiBrTjqdADePqbmRGJw75QiLucLm1ffM3N5yfEn928Ydvp",
  "key12": "38KFuWs7i5MmTymytYJoLC6ioJr8SyYZyBcPQY1GMf2qo2QxybkJCbSteRAjH6DKdRpDae8W2CiVdWZBZgcN8XYi",
  "key13": "31yFqsPBk749fsKEoy5HoU2jERYwPXex6HThbAwLDad592tJkVY2UygKnGi5w8SKv888YcxS5D7bUpPhnt7LQWiZ",
  "key14": "4QznVuSKHxV2u4XCjMJ4b3vU2q3pWe1TTbvSCyenyqN5h8uM2fGFxEekfUJiNfdGLWHQVV9apH9Hje2JxcHxjFm2",
  "key15": "7F1TMV7s4ojR6AH2KNwU5p6HMit6HLS73Yt8gobkGf8RNm9N6EydgbVo3DvZ3bffFNfuuafv6ibSpgQpQgFeDL1",
  "key16": "2oMLM6tzcd4m79SasF1NYniCwdgRU5sZWGiQnwmGTiFsXdE5NDnvAJyma69TpP5HkaRrma3EeW4iRoNoiEydzHce",
  "key17": "4m3N8L34TuLX4jKSQnoZJGtwcvm8WR7obadUp1ksab4mV8NN2ywDxbbUVZAjrbFXNXFES3Rp166ZUZn5YnwWrVDg",
  "key18": "4yjj2aGrpt56Rhy7JW5CgWCxRd9KkTq3iPxAdudV2S6DMnv1yUk3E9c3nDZfG1vTzzMFxXWQ5z6U1CNiiu5u67Hm",
  "key19": "4erqbWUmmRJwUdnq4LHL5MH9kPSbSSdWBaD1PE4HPMgF2jDTndbk8mRz9q8HcqTTL3REDxJuMbfTmJBxLNrJg9ow",
  "key20": "49scwBtL7XQK2a749whARDW2PrtCgiipxCS7VYGYejbiieYP68Wh1EHeJGvoJ33nuwzb4gBi1PLsrqcw2ucLnchL",
  "key21": "833EH41N51mUV4M2qEUXvqQj85f28yWtGiWHGrb2Cbiu2h9zkw7xz65SjjPwSRg3gyhjjM3nP2uK2Ed5AKuzfwc",
  "key22": "2F3J9wn9GP4BKHGnMuwdHUf1r7Yp8ny3QeuspA8gMuVHRkWfaRrpMo5xyYfCcacKwiMhCMM4JmBRReDnEC4WJSfk",
  "key23": "5Ehj7rDRrZYMBwVs1MRqLZ1Q5GuzSzj2G88kRngqzkTrxiP7NKZkogNa7XJ1tKctVSAex23X9u8iWpqSSmz51fZT",
  "key24": "4Uqk8nDVzT12VQLniE4FfC7kmUZPZoSqp5twt1fHBMJ3SmL3LK2PfyVuimvTBU3hDtnqZd6kkJySmuajj17PjGov",
  "key25": "2wR4KzvqXzP4nmUsLrH1enS8PXHDVWGNPNYoBqSqVLUrGagNSTCDviDskiHaCj4DX175yeQPBvdfzBJR2BZ3xoZ3",
  "key26": "3h5FDvLv9YMCSDVfzD9dPm96eVySDjZuh5cw17wY6qLQQHrJXuKYAP9msHPDxyFcQ49FohfTR3qX7gd48gTNLAXJ",
  "key27": "2wpnc1z5Zzi7T6yKvaSCEPvtXTg8KMk3SdbhozFRDzKY33tDM4N9wSzBNeJYWczAJu9TpVz9x69UCMyfB8tJbnej",
  "key28": "4Ttt2Avk93DRb2MRdLH9oPU3Kk9Zsh92XzooYzYjsi2eiK3RBfGag6oXGyzGt6ji1fr77D7pnZSxhAjjJZ52sJVP",
  "key29": "3Z5f1U6RhnMiyqEnCR1jjfFihgybmZr2XKrL3cy2SeSGPEbZGmjrpM7NDCvidq3YUrwDT3oRkp9BrZt7kkw7Pd4q"
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
