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
    "NDTkn4uawBo45Ync3VPgpxCN5nd3qMaULem7gcoxKtZ8PbPk2NN4rA2xomiFshiZ9wAqgbpBymY3FBQcSHF2eTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDZQZeZgqrQk6gMhQT544WHhD49gtwBWrGeDZqpy9RCFEh3eDHxLGxFShGd9S6GfpxxfYc7eKR1B6AHZUyN1GZs",
  "key1": "5XxVDrygh3GT2PPJErxFgA1hH1VzZaHC4uV7RaMzELnv5QDNWRGHYWb9M2uEQhpmuyPBg4Cmjb7gW4kdjBzqduga",
  "key2": "3nWxk1izriNjPvzJDoJ8gewhMrjMgDKJJTKsv8q27w2ZeZGmQA9kGg4WCDaoySPMv1mhp2m1NPxnjxCAPdbScwxf",
  "key3": "4oCa1zFB9AhNp9Kfvk7xkCzBnRVopP5Vbuit37Pc8Mo771AvurUZCTF8FmgRWThBj6RyXUDbFNQ4NJ4CbhbiA4qF",
  "key4": "3y3H37VeTfHWX8FVsL81WFW2CqmGkfJEsFFoSmp4J4iuEu6gHSiK4gF2euwYc4p3D27cXTMiKRUAVzUAggTTGv77",
  "key5": "NGVico89faPHy9syXJYihPFu7LQSQWtvafiV2RzeqNuvKRgpeibKtygkg8XgDf5qC2EcFJbLSYeQ9oo7gfB4NJS",
  "key6": "5wKiAfGs22iQ8qwpLVh1LBisC5yohx2K66RtnUH3tq9nGoJXri28o6PZXrqspcPPzM3GEGXRq5LxCYz2n6WommQL",
  "key7": "5c8QWKv8pRSAgaRcUNN2nhrdCji8Ana6CeQuEDb7sn3CbTvCF8x3NnFjzAJdEz1QDTTa7zXomGJFnj2q2UQ6fgbd",
  "key8": "Y26yhRX37FWPqXZCuEWqVUXZ2KxEQSGk4vWDvENfARCGztLGx7tacR8j6P8FfqytsSowdLDYML6vDc127EaxqB5",
  "key9": "5KLzVzM7XUxefNVLU8JtRqi4FRrppJbthZFvG56KRmNmf75TiH1uNxy1MGqYvYinXYRJVKb5C3kFbkW6Qm1CqwEp",
  "key10": "2rqPvtVkMEe1ts2A27Rgv7D8kBPVcD8nMQsqgWV782zfN7f1ktcATcUCkUw3Xn3pVb9nNrgmmssBf8QQV7gj7tGj",
  "key11": "ZuYeF42Ts5uHG42hq4ax1PkkAvRA7KCHjnmc6d8TDSurfsKoG16XFguVnfB45sCWd22szWjud8yqQnfrGz6QnHt",
  "key12": "4Jn7SrHxEbJfSj2QWHwPEWduyRL1HLta9FgpGZGK3AMnTR3LSaQZUTrtn6Cywt52vzzspF9KAkiu4YVJWYYJJugF",
  "key13": "43nPHdm2DwfySVLLiLTPBQPJS4ddGgNz5agkGsj6hKXra9XyyUPaTvmxkQNi4vKvivZhT25v9PFEtxg4tEqKDb4y",
  "key14": "38w9Woaer1JUiJkhqy9gY8hvFKKTE3RgD6fX7no6xhtyapfxFCbUnemBadPa2pSjpixzdULqYB3YBckNto5c1d7B",
  "key15": "3hPqFRmVpJc1R1hwg1Fh8MNEyoriE6MA57jP1WMCnPvkyBYqAc1zNe9MBpQ67N7PevWFKjiJECnYdASbPehmYWSC",
  "key16": "2h5SYuH8vAY2a6bpEHd6paNZrVz49T2Sp2W2gCwbR2qRfBvrri8f8zutf7JA8vaZFW9teo6qWeY39H6uk6Ak3EFi",
  "key17": "4NVmKxKYGZANzBa6gWxXk5oMieTNRAUZ3kBBtLUDkt78chQH1mamBAFXhmXRC1EcWPE4WTiKjNkMHJEx3sNaiush",
  "key18": "35dTrHuhGcpT8kvQQtPajXQjxvWiHFJk8g81XzPMHF3myfnYgB9gSrgNvBkNhYG4WAKcZTPvSrrDzDAXvbAZWoDt",
  "key19": "5XZT9Ch1CrRHj2R4yjjAsSZH8jdZ2YtFTPFHsRVzJNYpXs3PHJxU8spNsDa9USqW1TuGX9CoxAiLreBcr2CGjN5A",
  "key20": "4N8M3rXDr7T2r3qnELSsYeg8LHsEcD6T4CXFdwymxHFBzkngZGptnj1Y1RB14GryinB9PvyDr1SGz8kx6p6pQ84n",
  "key21": "3vE8CLNFBJCrbUXXyVvdrpsuB2v9T6tzwhh3mtLSPa9Q5VF4FoWv7Dr9rb5Hpu78W7FENroVhcZbdHEwrwBmUHET",
  "key22": "56NUKbMMMMeDtWtLiEhm6nZvcLj3kX558tvJurFQrZiKyrpAQcbAtQYy4o7hyjoy4gW6rF5JzBntgN3WFAQUKY7i",
  "key23": "D7uN6imne7TGPK9SFzmgMW6RVVPd5DETppqs2C1x9ynx5SCnvgfdyeG6JkdKN7FZvuVTYm8jXrvp5CKRC5cgejZ",
  "key24": "3V9aFaSTUH44KUV4bNcPBKgLH4j6AwbFSEBqof3USvWX2JJbxnj4x2e2ZjeaSuckKzz1tKJw8JqEYSH5Uf1cmmkP",
  "key25": "2nMHNCbMaD8pPhvhnegsCHNzHPgRy3pV44RP9viCZCfbnNZAvXrwzHKqujVFKC6TDxGQ4Zzks5ffKF4SbhH7mZ2C",
  "key26": "SoBCKvv5MHTM6FgqECcSRdZCkCAx9SegBugQRn4rnZpvjhZJ5cQr3sd51kGET75TjsFCvMXFPYNwYK8dRW8bNiq",
  "key27": "ttSbo7eEF1zKQWsTWSXqqQ53HxmBdJ2LJLDSjHYmM4yrrn8grF7ixFEavvA21Dyhr387fZMM1DESs1461LTGeq5",
  "key28": "3zM3sP34kHw7xrumLteu8AMBXGExvqxSEPDfCKfgVyoCG3kvCHFuswKz865xvNKHqKLLm1Y9sqaXLRxkfBRJc6DW",
  "key29": "kjybNnVjcKXZg11m1XB94wqrFhoXF1vBLYD52j1HMRmCLtUuq9gQEHrFfJWySqvnpHiaw4TmXdJ1BW95nsLGDTq"
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
