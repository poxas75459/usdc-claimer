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
    "2nXZrKhQ2rAfpEnn4cqEx9sPFTdQHJkQ26fHGRzYx95tPD3P33KwvmNNRdF9YKEUbxtqViYQms7e2iZrJpvMWsNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r1PdzUX7iTxRd5T431zmCGk8V8sLsDhCpyZHPPRVkFFqYNQNrFARZiJGedPpH3rN9bFWhxDXKJPD469wKN9GAQ9",
  "key1": "5pXN2ztdfmMVf1QWxmrNEYoRKnofqKzGBbU574dFeCQiAnG7Y8C8HMaJBGdzDKZv47cypRdBkWkdpciLR58fWfUo",
  "key2": "4RsLqCp9xDiLAprzHombo8PKVnh2U5SQtY95tnurxv5ayNhTGB9ctHNWHmdDm5o7aUPrk6hQCsZ2qjwVLE8YiXvh",
  "key3": "5r2zM3vNPWZL116UVVXyCaTXD2oUR3ZHmP66fspQNS2EszGb1PYxQ4ps4DjtVt5z1itZLCaJuZ6hF11YeGsa8mPv",
  "key4": "NGePNory1y2z7zAQtxdvGugSL4zy4PsUyZ77V5qqfcGE6SGkdWXXgtjx9VZPV7mXppsj5ZbNh44Wk8B98m3YtpP",
  "key5": "4nHc5c6UmomzvjpMwdkNm6x8gmwxUZwFnqa7yfXPeFCnQmK811eqFczURtpzTcFPm9Sybn4p1U7GQkLawwnu4WDS",
  "key6": "2p2dgAJZr6CSzmmfiioc9jUw7TBg1CK5kiGgLYNMXBgMPJpJuc5cAdYhN6Y1AGpRi8RKvYQRQqKxekKPqYnigGuk",
  "key7": "E5P1QvacgHuUbWidq1m6BBBkPgDr5hcfGn5wjjnf4PMjdFC48UdTdww6Xnte9gviDqkXvuJ2EF3cD6wqAiSjF2m",
  "key8": "TJHza7fmJtCWngqEdikXMQu1GagY7XdX9m4Fopy3VQSnEJLXrgrCB2J5PrTa6YMvAHwXeAR6jXHZRde1ZVw3LKh",
  "key9": "4GDkcjUauzXu8fQ7Yz7EnYH7b4tZYUuxoUXMRnDrqtGoUrpHMZUgm8P4Q49iWnr9WPqd7njqvTsrsuWvZco8t84Z",
  "key10": "LUQhvcr77urMHShuUuEUb3XBJA9KMjQ1gY5Wk2WjJsmUnjNGWKnDzmJXvqDXi87fZCAhbu8nTMhAPw5uFBA95e9",
  "key11": "oH4FnbdfmQ3MhP7XgjYt4ULQ12kE61tmPgEM3YGyjaCTUqzYyP24Xd8VQN5nQ98PRewApftFgFtYg1kpqhKPM66",
  "key12": "56qB694t2FMnhUHqAgfx5M6EUqBmMXEZtt482j5fRn6WtUd9knUNBWFGs7NFn7Gb2wHJmm3DgQjRbTukkeD8LRRb",
  "key13": "2XcPiKPsH9SDThwmhNeqoJ45yfGfkkc7xH6bnnAWHTUVRpazayLQKdeVwWtS1nntyRHzsV1LJjadPF6ydd9vzgnv",
  "key14": "5TusP1xkLnxHgJcDcAM4iDKZiSGH9G63Bc3sBjCCw4Kur7LfufxpPgffE12jVtyVaz6FZ5RGENwTS9an39QbTDqQ",
  "key15": "NhYcH4zAy6vYvV37HJdSGBNJj1GYp1v456P6gjbMz6HRCdigvzjsDqL1fQ1Re68x2YiSz4VzfiDjMUHBvsxJQzJ",
  "key16": "5KjyX8UFCTxJpay7qts1TVB9aLrwQ3nqwkbapkQgEoN81JjyyrSRc8jfgoZbNgiGQeMjTkjxnKS1NDYi9d75iK54",
  "key17": "4H3msyYBdavDtf3gr4SLcjpaia1kj5b3HbzN5wtg8UytXbf4kZvajVe1amNxeB8UBAhLvECaHV8NczYsJ4NMUihq",
  "key18": "UZyZsj5J2gCVXkLTwMAonjkxZZxgnz1J3TdkAgHTpweVc4SWKAoXWAJkhfL82JEmb6fUi4iSx2n9MLRiDP2Wzps",
  "key19": "4eEsaAg3eu5U4rwCA6wbz5AzLw6fMtLVjr9yE92SV21YTfur6hJPVCnLedwc5n95SG9XRrrxGjRoXmRE2fvTKpfS",
  "key20": "2ixi6ht8Eqnb1ebZQLHMoFU4dNWTLdx6qoX6ENfyZmeHegXYqe4yrTfFQom3yZkFwVwHPhRr7mk2THLzBARfSn2Z",
  "key21": "3uDdak4tgtakZCfHmcEJgNvCfHUoEmsRrYQKZRpquoQ6AXWyxcsfa9oHmSHGhxVT8ZtPXxTof4mvEmhUeFLnGGJd",
  "key22": "52zdm7G3pJsooQgXNW7oBB3Hy3fxENutvUGJc5ykg1eiFDSYsDvwDKufyGxkAMTPPN1Gjr3pZ97pcm7XddAJGjyK",
  "key23": "idNTS5VH2kM6Wv2S2ZZQpZGPzHgW3jS718xDme5MZbjccYVMxsjYtqqHgvknzDzxUjeqiE2TqoqoS6xM9Sf6Eyz",
  "key24": "yMwJmxcSV1sDTYmmyAoFLoWEUP7vhjuYyMvS5BDM6sPwW2tYx9cVhWysq9vMaSKu5FXYqkrV9MHvkSXTWjC821W",
  "key25": "4Hp1LD6dbmLpRtVsGircwRUt3da1Xjbvec4SfEHtAKwSsDHKLWFA1c18yftJiUXdo59o68ZTnzy52njsmYJs3G8c",
  "key26": "3Rq1XhmvKHQrwqKTZPrwQQVJpYSx7ehQ5wfyJ7RNDoafQwub9wAhAyHcnv5h9X56vmyfp3hnyXiuknJKzrjZhUhw",
  "key27": "3YGxC4gpfYzvv7Mu7DUcV67tWyGa6czHQrAdBs2hqdoK3gfCisN1mDWxCn6Mv2cbz6fBChcnPShnz4mxQBahJEj2",
  "key28": "YBhX58G3E2hVVYASExkvn3rzrEJjsDbfp5fiAEaixhfUL3X4jiWHEFYrGTaLWt9WZggHGsKiBHpmHLHPyaXBoTR",
  "key29": "67aC9TCGbKjFpgcRf14AEVd92JAYP924dcNJzeR9xNVfXBRPeHHKESWgYiBUb4HYNWJKT5D9HiPZTn5Tp4VmWSkN",
  "key30": "5XwTXEZ6WVVv5r8u2n9nhcV9LHjWMGFQxfGZ4EHjMjqja9EbyMUNqYVEzxXLDNtPPJACYQSd8ZWPmQwSDr9wqsNB",
  "key31": "4j198RSZ2HvnQCEJ3EzBqHXE6UvmXDPEy1J4BuQSMHZRUV2N5D5t9FY5q1zEghmCSjFmr3khSFykMHFb8yXqmQcV",
  "key32": "2cqZyAmKfimDSA1B7XV8nr5XLBENUiSbrgWseDMLwEebiVPNJfSamEEVMhVm5Npgkxjzepu3GxYSfmmoYNNHAiJS",
  "key33": "ckJKWE1PKTzDapMbrUAk6ZnbgMRm2GEBMvfsMHdzpZ1mmDPK6dXsLouNakq4bvDC8pd1a95diLV9ePxb9gnB85K",
  "key34": "2BKCDUNQFe7DNT9KDHRZierqXWcfs7fAPUqL7wzALsJYsUjgwjt1B83oCx3wkzMGUEuozBa5yY4JM6EH4d4zhiYg",
  "key35": "5niWL7cXY8kSNZo7qqDthKN6WRdibKTnyu7UJ7dUxii4mwPBN7kLLg3kFEdMZC2QnudiqahNh3tCfMtXh1ka1xb6",
  "key36": "3CtppXPZkb8LTWtspVGcuGHCBMRNnstd3jwBYzRG8hPSGJniNCfMdzvZjVszFtB3crFiTXR7NkZqfCQqfDWLzD9Q",
  "key37": "2oaG1wAF5pzhp6NRkwhgBfJTtfMsWLySwJpdGUUpmqqKjDSPpmNk9YpDPtqCj4GxEAb1RpVFJmXc4swiQPu2jBuy",
  "key38": "23qN47Ht8okqX3umC1yZ7ckKiQD4fJCuojUUMkaJQMpXaUWsqVs7ysVxeoeXSqxYGHanu16Tf7hTfh9qXQ8ya2Av"
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
