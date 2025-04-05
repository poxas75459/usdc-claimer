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
    "3Max1cXB9SW8qSwygWdWhiNdfZkYMNkQqiUHoNKPqdFJuzZFKFzZQuemDk62umGfMhUZM5EMCun6e9BHxausDKT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQbGBhfMZTLSXX9MJPBCvJRVAK9hxnE5KCiRGHRDtcEA24LtA6qWBApcjWt3MMvaDX4hGWi5Xs8J4VRp7auQys5",
  "key1": "66xJWP1oLcGLA2Qv45fTLX985mHSMkFnfd3rEgaxxzd4J5uLCstoqREjxJ5BvZzNrVgU4yhixZABA8QuoDLb3yFo",
  "key2": "5Fh5RMjBb83qVktgMhUwBWQJb84b7uQz6bPTP7P1AzokDtPT2Gnqaxh4Lr1hSnjEqZG6Xa9EqKqRCqgo6kyLmiVt",
  "key3": "4jfVQUxidWAhJpDav4vkJL2GG5UTegCpvZKtKzzKc6bpEqbKD8KDxBpKf44sVaT3UJMj3q7JQn4zAVQMbH3EiaSV",
  "key4": "5GjXeMmK8sLi163kapcZpxERfHqDGqPUyoCQ3gt1SCXUJowz4zrGXqQSm2b7ZEipf3XiFRAAdjAtqrSxVyiV5ezT",
  "key5": "4rurNEgCLCDgDiSipZApKhF16P92xiqG5R3itBCx2VgJbPtGgWesoSF5F2FVXZrqnL9WPUJz3ktD2c76cM32a8RS",
  "key6": "5VNhY3vt3C23XQksis4VN3Xf99sWJxUW8RcR8SdN4kEeRQoVuiQx9NYVJGTg8jWNEgFf6hSCCh8kyv3QLuiRxpn6",
  "key7": "39dW4WLYpzvhNrT5EZxW58X92CvAv8Euai3UN8THsrBCXqGX23ACyorv5KPg7CdempzVdnBtYQ55wcZnTyQrTqVj",
  "key8": "3sbTFjPCXaaJQFY5MZg38TZa3jCpmLgd3Ps9C93ZTQ5qjF3BdxqAiyVdnLQYEPLRfXtk4eNRU413F8RFhmSHqKZL",
  "key9": "5ES7e7cwFuqUN7c87NonpQqTzEQCsMt1w3b9qLeSAfeu5DRE6h4wEGFWk9ne2o7xiyDvFxHNSaWqKTy313oxyCgK",
  "key10": "2fe4MwuzMkiG6Rya3hvVvdq8XGxGgSB7nKTL1Yo1FmCw4daaJ7GJJ6sTDM5StBbmXbpqXGmohZCDbjNViRYEFHRC",
  "key11": "63njBrApduH7sMtS2r9mrTx3JXLrd1xD5gkRPDCroExWuqXKFZ4FuAtZ8fBNaxvqm8PSfE7ZdNnFVid1oRiWrbam",
  "key12": "2hCdbR7tFL1pMd6DjPnqgb3xkZAybndoM4QE36HSpS5sh1aqkHGTz7AsistDCv8vm4x9odbiCMUpeL66EC99CUhE",
  "key13": "5ArAscsFJbHkeB2KNfYNznBWStUmRBD7Bw8FVjBC7Havgj9T1357GkEpRiHY9GEZsFvpMAqR76YCMSmT5Ppzq17e",
  "key14": "25Qs2mSeVtCGUoMBy5Dpkcxg9oSij9hhs56Zds1doM2qSSfvQ7m7Q4XjDcnt9BWy1YGfQTiCYm4KN2Lt7T7VVcR9",
  "key15": "4exifC7UEgvEBpUGV6UJtvXj359pBMWpmiNXVXrofdz3krQJeCHmNvuYmXPRNmEQ4HoSWW62ypjg5ap2ih8UNF7j",
  "key16": "NJaMRWdQ1UX4DBE1hK1KAq5F9foQQprfj32RcZjNY7j5hGvNY8bkWUcSQAavMUufeDrq6cUusPa5SKBacPdRvUi",
  "key17": "57CpBEAj7EN7RhySckpauZUQGUpdYYSfhTfiKDYvwbk4iUmrSpeCfcju6V46P6yzSv87bs9hBA68qsSgM6dSZCsT",
  "key18": "3hMK93z6CkRfgZhQ6nzEdrKUCbJEm3oSUawJmAgw3fUbVqhfaxyGFAiXSQKDxenCKediSqQbLhXvWtYFJyfFDjKy",
  "key19": "3wfNGNfJsoSdLkAqHoRaU57FxwqKcp1nTihDZpBKBzfY5vkQvW8q6ZxdQFNKc6gXTD9qVaPsD7zqk6XmpYFxPsXm",
  "key20": "NBenGTMviF7CfpfjkFvkxaLQ6kSzwQTDmaoENPeF1gK5cNBAtEHZmuHRdjLoqBh4Un4yPZzj8ZKwih1Z3FTJTss",
  "key21": "2fq83iBwvXfT6BouZvXwzNB76MRdpSfsdNKZnjhVkeXvHVaDRcvS5RX48y2YKguLBPTPLXY7ReeaCvE1CqrBVsQa",
  "key22": "x4MuQkhbGTt36d4x9L88c8d3P5MrVJsDRCXacr8wGs3N6aFi2o6DWebPjSqiZLXJw9fC5DvrKeAcDLQzA2Zpw7W",
  "key23": "HZwKYAbiQ1pfFUNpL9dihyvgWxixU1W1WpUKMA4HBDNsPyk1kZNBNQx8PLKoUfC6RFtxy86afQrJ8fRk4GqxeoU",
  "key24": "5N13oGZBqvKAcLTMQMAGNLzKxudp8DfyUJE9K8FsEdEJrndyt1KtQAPzVG2ReC2U4kd4cHUNWJsVkCiTdE37fyNm",
  "key25": "4rpKsh58apyBRRQamJBzZJv8PmbUpDPrhywSqFMMfabTac4LB8u8VrPQXnbiDVaoehJogHxTj2ZdohyFjPTYb3ei",
  "key26": "5y9pEnc9GU3BYHrn9KL4jCYPscXDj4PY867p4t5i4V55iLQFxaNvUhkfxh6NGNAgmZ213R4WE6dBYu2Xu8yAg4M",
  "key27": "5MoZAnQEq8UQvmmzywGVu468XUsEs9MiWyUcywpKhepsXbcUYH4R6h1ZpwwXTppFABMQxhupgC4Wqgx6tX5c3kBj",
  "key28": "5wzZxLgUAgGHh3pM5Brpb6VhrbUsRbTBfWt5rwaxRiBEiznpjQa8XWbYgBvoduiJc6sWTbSTixeHegZp7g5QJiBA",
  "key29": "3ndWkQCmW45g8sbG5VH2thMmp6xqD43yERrAp4PjBjisqCdWDg94JCXpReUwvYryoNbRjP26D8YqX2BPdMxpYVyb"
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
