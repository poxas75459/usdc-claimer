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
    "2MhkxzQBrtwyrpHgBTnDAkwVNCn1HzZ222Pr88DdtAVTtUbr9FZD9ZKq6ztWoSxgyJAsjcqzGTgL7uXyiSuqFuhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eG7w4nzR5AoyWaiaM6yRKArbnwHd1KTfir5uEN7F9jXLCb44VVFHVSgRRugaoEVjikygiqz7hSNm8veLnLNHPXo",
  "key1": "UrXHgJ4CzvLNribJH1c3pZ8fcu2gZFRop8RUKAb6mqzRVycQM5FdpKSVX1eMP7rzQLf4TTygqHqk1NNfMVWm6fY",
  "key2": "3agFX8ivJtZZJZKKKBxZLYMC3rPcDQRLKtxSZ4voFisJhVPZHFhTDxHQErW8RbdgqhJsdoqB1G72Y7BQSwMBcrk9",
  "key3": "21amyjRoNTgJvBWbLkj5tCv2dmBNs4sNttxKPKENbydLn15YuNrupwePaznkuwWUQHqjfuWuFgkGDH3u8VZmfJcW",
  "key4": "4cqJng1Jdfuc3rHrk6BuMjHVNsUZEEzFf28LohaKhydUtdSm8pHa3xpTyjPoSzsCywWUqNcLfMYNKT4NyQdXv5N9",
  "key5": "2TAqYzWXdmjmk8WrYmsvcU7Xg2NEY1miKgoSvTQ6GHtAYZyey1t5CKzw2YdWutMy4SrZ4C45w6Ej7cYgbvbWsa4Q",
  "key6": "5JrCES5ZFfeV7xYmqP4PRQHpwRrx6rSQgmuuXA5u3FL4faXUSXBEBLw2J4Y7MbNQANSExTqKbnFXjBhBiSkg2ePX",
  "key7": "4mzFekYyhfZ1NJ3BBnUiHWb6E1enFwZURrrXJ85UVWAFk3uLue6QouFdY1fAiK6H97bPGCC3PerrPA7cbVz4FnEx",
  "key8": "D7AYfFd4s9NH9WuJFJ82tFe6F3irNRF8rdEyggR4p4i6LKPJTJBzZMhzJv7oM4AUpPnWxkqgyaT9qBaMHqxEL4P",
  "key9": "ureUmY9PdcPD2k3BpdnTvfVyLhABvXfrTfFQc1uRav2ApDAHMyq9kLwCPhwgWeKb9nfMMrUygboMFUny5BrFrVs",
  "key10": "2Z2dEpbr3VXuU9bgtm8eeNvz4Hd3TnfmGqVEgSctDS9qV917K2zV7Tu6ePYqAKgpYCkQn2Ddd9pDwUug3c8qfNG6",
  "key11": "ghhCx7hPqSpGoLtkoVLCCvzieqxGrzpJT3CBpZqwbm1G1axTd4Xgiiowmx9mG9kdw8poms9VBuJyHFm69FjLEVy",
  "key12": "qh2if224WDVMQ6FWXNsE3FViv7tcwjvSau5dur3JPQdscmVgsGkHsRfDv3TAR8ub9r8MKkC9SBh5C8tkSuiMA7c",
  "key13": "2BAwmfkY6qq9DbWbZNp93vwHR8nFeJYR7ookgVmrjgT4VDSkU4qo4YeewBfZPugE5ZLoEaRgwHxrVFmxmC94scS5",
  "key14": "3ZFDdGgKByatS8QayuBkeYNfhSJnUCb5B3jjZGZbtdifsrA1PNid1N1Qk8mwuwbvnW1spGy8R2WRxybgGZpCPFU9",
  "key15": "2m1M63yGaTmnaU91q34czVou8H6nGM6tbsZLUjnxQF88sYcnBr3eqTfufEfEJQnezkaMJUhk7PpCF2VeyrAcf29a",
  "key16": "HEn6cQ5emwsmhrQi1tRweLdJRVV9Sk7jNi8FLhGRAoBM8tjXFKyPAsHTMCoVPnPhKxUhJjipBxftmZVsUkSSZvP",
  "key17": "5zGKnfCYT5QiDEig2EQfXo7s58caWvotyF7q45Z5YK22QkdxBtb9UXGrw3YpHrcn6t6ArWdoidysJweGjy736zXu",
  "key18": "hpBhhRzzYjpxMt3Q4PsUEXRa2g7gnqvhKYnkKvgtWs9MLciTh9trKutrneDLQsovD7nHAob5GHB164MbWsZLcNY",
  "key19": "5oYBK7HaPvPjeoBSt4XPJLKNbvGeh49WECuZ96g51ti8qS4qZRbN7Jd7FWTgyY3h8KH3qGFXm3Wx4Tv9pKdLWfDB",
  "key20": "4frb5ieiXs1FuUx6pZiwcPt7Rs7ZDTcfKyTkUwwB61bYwJoSe1D2VZDJD5v4tcFcpRHjJgZMY74r8xRd7z8NUJkB",
  "key21": "4LjXf33dGV1NCAqWwrqhTZR9hLoELVMvfxPYfiRtaqt4bA9m35duyoUg7Pj1vf4vb2ihZhEHSb4kN7YsEgfqsmi7",
  "key22": "56ELsSgaGoapvjJD1isXtcsiEKfjCD9ev3718xsvnmiCsG9YTwtHSZq3Cn6jWWTQrG8CGHUUZTFnmCmavh4mSnzR",
  "key23": "3LYSzdf2uBbB8ihNRSuYTZBj5D812496uj6qr4qRJARhcr3eAEXRg2i7ZreZcU1DhoTtFb4r8V4KEaaVuqvE29m6",
  "key24": "4nWaeqEuvUkzx1XFvpQXNdeZRCzXY9dts32VqFE4Q5Ac9RLr5hXocTEY3GBCarGEcoQwHa3kYBLVg4ENr6HHkHh7",
  "key25": "4jFfmBLeeLSMQ9QL7rnxFW5cfjQHUa5ftz8SnyPw4axS82bv9CrrdEG785YrmvSVWqpENdnPXnwkwbnwaEYGY49d",
  "key26": "2Jai17uxUwHjUv4DYBcPMsNrnYwgV7n7kU1x3pKt7hwSgUgmzYSVVhwARCxT8fBN2dR47hq57worfXtjpRdXE9c",
  "key27": "3FYgELnXnMxgt58iKMSPh5ypJxa5Vfrm6gGmiz4AnVqi2CBfvjDRXT4uVV4uDsgGcg3w6sZfe9LkYxQXdgERmic2",
  "key28": "YuhJ5VTZUAnH1QZxkQxDwWr4nYorm15RKy1u9rMfcAxpKuHtxT93HCgDHehdE9acrajFsa1qqhJRG2c9DzWLQ2q",
  "key29": "53g3WicWAFjXcw6Rs7zPmCiqqkVEHeFDBFVoqkY91nzqXVtSeQZrBDvg8Rc7tNqAeVPaLPNcXJUJw177c1DFy8cQ",
  "key30": "2p7z2LrZVPVvwrBm8jV7vFPr7VGfaenme47xWWGpuWvQkCUJCzqn2jbnrPx2Wvj52DzHa6cSjgAH3zU6yHyhM4HM",
  "key31": "4CoFAgHJbgSJAUQ1MBt6kiWLnorVHVEYAck3AUoaSzNMZHnCXsEx88hMLqhLZdfKH3daa7FjeDoAUJnnTm2VABJw",
  "key32": "k5jtFcc1zxrUeBvYeQMsBTqSZrB4qPC3dvVhUyaRmsyup3Bfnk7ujc63L1c87LZeZdpDEyhYnTKqbk6JkGcEjhd",
  "key33": "5zqu1ZiXkaMwvq1VWg3j6mxiNTXLT7qGiMA8B2QxsdHmSjRwn9ibkL7vwsg8iNzMYoFtNhoBTo7HsDRDoDgY6HVq",
  "key34": "2DeStU5M5qUySyyGsjtCF7a8LorL4sRmG7sQCQRuPXZJf1dtDsrTaS79zPGuaGcrDud8dxQgxmz5efwtEQRUXDpe",
  "key35": "3vWKYztsJNHs1LaX9tZYWbdHBSxiWMd3WFm9XNbWhM1dY6YgZwFTJav7rNHCB7VHs4ZrmezRDprB4jrqpLfNqFd9",
  "key36": "5hkJdrZrryfLase9bgcmaLYj28yB15FEN7vCy1GJMjCRPLq6Nq1AL2T95LHLce6ZNPRTFMSu2XywFY6n7HMgJ4YH",
  "key37": "52izicdDQCz9129CTCxNuBsw6azTsGBGLs347W7BPj6dh6sQEhR2qh6jPaSXT6a5cp9QJPU3JPLEatQgrByHRiXG",
  "key38": "sWrqZUc3bURyhWtjmKHPQQtsvz66LuFZjBbtzPqqHtaFXXLAP76BUJ2rtiWCW89AeTJ5N3vndpaGhkkUmuh4EcR",
  "key39": "47NSLkQPkMuDtR7LgkZ4U5SPjg9DXTRZUTvKGUEykPWQ893FYSPgbkrNcNGRuuTywKmv2v5F2enov14dS3hzyxjH",
  "key40": "pMC7xuUuu7D3TGi9vkChCGypwCxegoP3eCZNa4VjNbTcxRnyyjfbZ97TqW5jdWhc2KKH7Rt6fygy8VhzXAspwrX",
  "key41": "NdXCtC5dpJH8u226wBhaQ5Cs1yHmq8BqTHfMPNBNhF4kqmDdgxr7dEfkjRLZUWUHBrQyAditCyJzABVdKMCjPqZ"
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
