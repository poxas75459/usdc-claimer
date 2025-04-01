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
    "4Eu8grWxkvPY8AxUqxWdGbB6NaHctM7BsrjGi6Xb2voaF8qkK1Av5d78d7V52v6C87yhE17GJdBNKGXuKqCHDtCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYXm8ZoxBYHyCkzFtRETf2P7pCbcUYj8sQdMf7Ypp1gSjcFKbvraMd389HvHWpvPU4qDVtHx6SEpAwLCwzwjpy7",
  "key1": "3CZNKvyeU1zoxaF1YLNe3RE7n6aHBAULsTSnkHxd4DmY41D2S6DD85D3QKDwyNG2Mj2MYfgVs69qjVFMoC3JzrsA",
  "key2": "35vBw8pniiSjmdU9NzRGHnXw8RHhEEdsYB6uqxWC6Q5vCDGDM7xh9Ngd2nhdhBk6W4VCK4Xt4AkyUbCqLWbBps9u",
  "key3": "3qYQNwp9XDJPYTKNsuMsNq9xszREhMaXqEZWpDDzVLvjVsJVtNvvEJ3abFYZVz22oyA1BhJ6tnXy7yyEXTrmv7nX",
  "key4": "4CbCYUqnt1AsgcMj14CGp8wRp1JCRPFQ6tEmRSDU7YoPEyMFwQnGHNoHWDQmhMXEUzGtjHxVNAtewXK41bCbo856",
  "key5": "61WBi5knGfrHHFcmQEmvY7XNu1nsSqNJ11Pbr4vzxtUbifNvaUtX1vdRvVaAvE54hAG8guPo4ZutDF2EvDTs12mW",
  "key6": "4bdSYBEsX2yK6N4HYBTejPb5JfncA5DaYyQUXz3Wg2LTs15MFWxFZRkLHATpxyMJT2YAbj6JUVrk2MUhz2rVvx3b",
  "key7": "4A1dekQDCyHmRxo5H2Up6Qps5dy7v8xFcUwkY71GobLBzHL9QWusiGGyAk4UYjmtJdhn8cMzuMekRLaxYL8bixjP",
  "key8": "3ZmNum1Hf6fQ4eFJ16jqtGDwUyuVFxD1hoiwWYugQyqMiRaGicPiT7GNie3AkZvmKYUdM6ndib9PqKBwZboWaRwA",
  "key9": "3uzPpfgEK138wpNMnFekcQrHNRH4oh5kgfmmGsQR1zVWMeK5Kk9hfy5uzM6XKRbgYXmGQ5GbZu9oZxFvsgZs7THf",
  "key10": "2SZ9AvCY99Jmv1tc65wyUjnnHr1BqnHDmvKPZAtbLf8qviAn2ete8V5WS5sNFAYoNGshS3gLwzKFTJbuZnY5uXn1",
  "key11": "ZyReP6mBjHMBZfYR9xiTYxe6jXNczbCfDC3ojSLpuvPH8USmo2WtMkiWD6JfauZjdtz6mKyoCP4mWBUcqfQiDXm",
  "key12": "4LSjHKgWvpXA8k8pr75Lu58jyyLLemX8JsVokdtSspTuorZ2nZfAamxBc6saQv41PdNZbKLUShSrbDSsBgocPs9k",
  "key13": "3UQX2gYR2tGgPa4mD82QmRkUyw4iKiVU34EjGKDTuzVke9pES5svJoKHcaLUXMUbHQQD3kY2EuvCqwAMrtrKNTyH",
  "key14": "AAtaSNMmSVcDxT97jcqFUSNSrvhLzNDNvaMaxhBRCWMQJSbWj16kVDErJy1p1ZivG5TmawLBSoZAoq4XK3TNgXh",
  "key15": "5SjBJmRvDbxfqRgQdeHFvNqnLuYGrtRJs1nSHAssyoaQFpmJDuhjPqccv36Vz6PhsiDRQjBSZUHnmUc3RKj8NxM5",
  "key16": "4XKXuZRFzPjsDCRFdNZfffo1qHLjwpiwdVFPHrzd6aAtTFb8k65vqEmchC38Ayn1GbFBC8QNGXYc8VdpUK6JyuJJ",
  "key17": "4rejRhsgcVYAJrTJUc9nYnQ236i3KBYL1F6o3rYkm2uN19MFftZNcr4RYs5uFBqcSGmsweoPDC5tUqqcZs2RcxUi",
  "key18": "2D4veNY5rJimLQ9BqWHSMPFt89vtzNFNgihAAPm1tVjUM9vmsgDLHGbt6nePAAh7QwmWsqQWMRFRVGgiiQjA72Wc",
  "key19": "GG6NWKu95rN9DbFy6Cd6pT9cwQuH5YuTGFnYcXyizyxVsT8NMNKXaqS3SK6KPA4i5H6P9EtHPBE3jbD7QXzCcSd",
  "key20": "3DS7AmD8M84CYU9SBmuTipSCYGSnFtsV8PkH6KTEzGBvCyXDDqSTYLjRY4b78JJTzwgYPLJRQA4VWTfbkXqVvtdo",
  "key21": "3FhchwV4Nf9FrUtqyxsDiV74pBbyLUpVRJHSLaKDgw84QpAe6nQ34XWx2zXpiSC7ZiuU1K2UL13XEFoHur2ESfam",
  "key22": "5LhcVkn9NE9VjjQaLwX1c2DjDEcfaF4vBaqhAoAyFtSxdmKQYc94Pvg5Ujh64pEUpN66E15zjzBCoGDRtQMbqxiQ",
  "key23": "5yVLZ6xSLs32vLMi3ta8QXvECbMXEHzst2yxy3YAnfq18NWrByd2XwkMjWBnHsMCfYGM8ncR3nFy6gyzCCguwa1",
  "key24": "8RRXp22bdubQHuBk7diDgtPLALPWhBJtBgvvgmxRY2DC5zpBL9u7HfJNJXM8Dc2D83VJWRCQ8mzx9yXzhwS8hi5",
  "key25": "5y5LA2w8fApuj7zQcoiiMcckNy2onvuFdXDnLYXTdi5YU9JEVSoeYgEsmcZ8QdjTHxjriLZW62Rww3abR3kUY3Hp",
  "key26": "3ws1tPAXfdZX4DBKLHUjBqpZJtfDnM3GzgGSN6kqmNCUES5FZdFxKwPuCfkepnyjKsrZPJvUfTBFPHGdUJnzqQAy",
  "key27": "4ttJYrtvGtjAatiS6NgDaxCYoZ8pnwNVfXdiaH7P327R7wPFSSytfnjP5mkmg3xXXVvwCcyfiBNow11R4UtX44qL",
  "key28": "3ZgS7RPXCcxr7JpvVFGCLCLA9WSLfJSHt1oLD3Y75kaHR6yTN9EDj4ZYN6rgDUZpShXNkUWftBacxHTQiCi5AboT",
  "key29": "w4caGYbBNmpfGNRSLMZTrBqcXbpohin9hjhc7X6kRe7JkuD1MbZqpxdRdGBw6wUmVUNsmvxCy83RRc6vGyo98Sm",
  "key30": "4rk3L5kWTDML7acxHUYGL5iLBecPz2ouDeGxXpWr7tFEKfEc5jDqbjoun1AbB4Y7B9dY6XDscmiA2LGPZdjuF1Cf",
  "key31": "5pqMAqHMtJKg2cBt9VLmj4ZED5xBcdBvHy1u57Cv64ukh4JSHXz3uuRATUNjZvtGNyWeF8imdPoM515VSceD6kZy",
  "key32": "4xMvKvpmZZp1iGdzje9hf1vnr1hp5qiZ4chnX2xdqucNZmpmkwjUzX4br9R8A6m3ehMgrsgWZvvk1D2dQcaMu29b",
  "key33": "2jyEkwcab91vQqu8noJrb3cWyxE6cKrFwHcdK8KExkPg88jjMEwQRntsat2rnWnHDJTtyNk9281mwk3qfR8SHpH2",
  "key34": "4PAQ5ua67ezTBMMPpRMfr2Y6dzffyfbpXcVTGQVHWgeLCSrdxViMU8fwSu5zjvL9BrrnSrdwMu5ekT3TDw79rcTR",
  "key35": "2PS6cy942PYSTKrbGpnm5ornpmmPxkcmPBrrVDrHBnZiNMbezbpKrt9fA2QaJ4bCDYSDAQwce4pRfFzjHMro9SYh",
  "key36": "2p1ovAiCU85PjZfNnsYvjaP9qYvXtFiPF1a3YNti6R4Re2NGrayS6RtYdJZDDZUdn7vzXBGMo16HJDncgm74vuKM",
  "key37": "2TdPTHFaDWK7Rxm7Rmcng6GM2oHRCJ6HQEPBCvYKZ9ALeJhtR4q2L3tr1GUxXwwDLENrjNYbaTPkRVs2a9e1kk6V",
  "key38": "3DLqhpvdzbRRanatoUgDCaUuc3vrurpjsKqWHUig9JvvqUousVSQvdGoS97eYWAjknEPSQoNVoJ9BsYdsdMUrTNE",
  "key39": "2XdDiZqyEz7Vx2CK7NuKw7YaaUfSGt53riQBV3Y2HGvZ9sHJN7q6H7JC6sXyes9699wwFAMBRREZMdEXngQHjwhz",
  "key40": "2tDakEna12ccZdVrGLcMkMYp3LtQWPxAJhpEF3NKbKmQqptBRidr9PWETkbwgt7DHGDngNYW7XxLCUW3VsX4PSM6",
  "key41": "5EjoHKKpCg6QXDSfSzjEMbWQTijmNZx7DQRgodc25GU7jqHVv6RcgfxSzwYqA3R3jveeiUHyv6MRWiurD9DiaAcp",
  "key42": "2dcjs2oc4DHM5MJd9t58NfgFaUq7PBrM2d5yWyGNGMeKc2ognuRAmNdmnNpJQSx2SJPReizswUxJSUN1WQSVFnPw",
  "key43": "2CJ4cAxycYuoHy5TdHusuiKpeqcSXSi1S9s9YQ1ZkfxsESNj9Yf2w95SiE2MqMo4R399ZvCVdkJyzRkhaJWNHD3n",
  "key44": "xivP2YU66LMKFiNpCLw1eqdNeNMqPJhbHCqkoJk7ohsj9d331zUuG4aAU84zJQsnMMr8c1yy2NmGUMJKFutwCRK",
  "key45": "4NeiWtDgQovQ54459NFUihW2M2hwvzZU3x1z9Hh3rqwn3wAaXqHKSLJhkHdDUcdZU78MXGwNagjJ1dbqo3Qp4GoF"
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
