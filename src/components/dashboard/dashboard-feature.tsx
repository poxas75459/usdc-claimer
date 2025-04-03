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
    "4sAUGa5kiKoUocrD9mqStyCWD6F3LMAbuC2D5UZrn1ggxSFoEZgQXc5RG6eHyA3XgS9bbtpEx5JtTejgAUDT6fdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTVvxgTBh3aWCasV2mG4Hgi3DDoiBMY11V5LWG2phdU2uA2YFYQ9HHZTWv4ph6DCrPTrhWgAPHPZdjSVRfhT63u",
  "key1": "2bZtKZtVMDHnhrGKh7YEev1EpYEapYma3XGaFTDCb3Qdrj14rC3XSmseKJ7uaAXYpkzc6EsSBCdbJrFg7kotJAGN",
  "key2": "3onLY8tK8qAAKWx15vzAHAjCagbLMmgYvuQxBfJJgv249i1iU1GpY1mYaHiQeWqu3GcipKpEfN46SvtWg2Em33HJ",
  "key3": "2RKVaeV1PQuGFhouheoGkZnh362xx5JMxAYRmoaQ9iTXnTt819apBDcbJMBRex8rMNc8Xkytzcss5AzBwgenKYJ8",
  "key4": "3arRcfzRL3k5F3Ls5ZnqQSqzuJWMdCUvLTeMyusyqKwpxjMqQ1bwhSSNaFMVDLEHzd6HQVqUumd9XQUcw2ZAYGHH",
  "key5": "49hz2F8BZKGLmjgppXU7nc7mAinSX63EtCY5VnDMK9EB5tUE5s1cFg5xcZeEfQASMQb1xcRwegSgPWd4oNW4awXS",
  "key6": "WND1T2HPv8GTdSRsTAHvo7jdEZPP6rmeWEGkaps5idQFPbtLAcQZkfbu8QXYHP88FcGN9Fk8P7Ahbx4itzMQELz",
  "key7": "568F3VfnTvscgZf6ioYrmnwQxirwPsgMpVbKC5LXdYdF9kWpgy4ojUBTPDTYHuhbW4MAo63WPG3MWCnofmHQgUpa",
  "key8": "2KTAoSt8nyCSqGFb9nPTAYZB1dGHLv65Ruf1t6me89PTh52BdL1seTADkSBv598aJdEZ4LuLbuwoqbJFNZSbnHiK",
  "key9": "z6iKuWEYBCA9jhmtLLZgqz1mANko5meMsuQ4U8587NNdaCtt8JvzFGBx9zpAs2RBHRr6MrMfgCcAn8kF5zTVP2i",
  "key10": "y2aKsasMfg6uU4MPeonBQZ7vB2dQmuvofP2aDnbqoNcRaK8mMcec6BWi6FL1y3RQU9JkQUmBBN9ghMrUwHNG2bQ",
  "key11": "3Uy1zRNj2akV6fcPuExpetw2nygNj2TSFd1W3R6ehippM6mXaGR16Whr4Bue82DfpcdGc5vhjEueQPpJir7YVs7S",
  "key12": "3YFzofe43GY3HNbVb3F4Dz9Vzk9qL6Hm6X9GCpa9xQ5Rzow7mLwqv9dNHwNZgGuAfHwTjWkRfJFzDbseYyHDkgnS",
  "key13": "494fW67rsBzhqpywP1eLZzTPSFXHhcKS83hdseCRq2jarNUaEUgpf4ErRRKUAyehB51nbTzdtZ6i44mjnvnRwo6o",
  "key14": "4BExvZFcME5GgGUp5dBTUg3dzQ9iXvQqfKjkcWaggQoTr9oJ4bRDhk1bH8BKUBYHUJdWeCPLCqsfFxvFLKEg5Qyb",
  "key15": "4quMuTSBwx6uEYkXwnjpyt8TMw3fjhGE3QCWogfsudG8Raj2jugurPLeNM8qBTQhud5n1Vg4PVkGPMdPqCFAh136",
  "key16": "LFQw5XUozQy1gpjr2SyewyP9CKpuVC4ADv82PXHDGeXwSGbsZYpfbNeXucynNwT6Fs5Wrn6ZHu2YFLSjw6ekYa2",
  "key17": "wNK8HCAHVyvT3oZMA5GxUC6ysQEaAqrcAKFw6KAGbQviRNo5fBDLFNMBzcmLkPe5GfJfQFDqGjjafwAEzxJD9Fn",
  "key18": "3Nz1Vj1eLhSo6TxQohxwGHvnL3y7JFn6EN6F6jPsXtCBwGqmow4YSS8UmDVtTVCTtdd7LaMMrc4BBPJuYQyT2Rkm",
  "key19": "TVvUJ238KLncPFKraNiVNkhaMvXDaLdm75r3RKXnM4PQJsA4nW8K7U2mmn9C51aNUnxpNEoCoibYUyixf3P9mww",
  "key20": "NUYuq1i5yPXqYNhXpYKMUucb9v8LTZcYTAyD9qSNsqSF3PaxjZiGPUT2tWFT5kePwEXh5HtDa9HtoM2Qyf2vLV4",
  "key21": "5WFRVeuvcc6tYLAZr6ffPVdrCBxNY2A3gC5Jz4MDvLiaqSn5VjcNR8QF7tyq5sDwBtSiv9L1AmN5yyiikjy8XCTV",
  "key22": "LfQgSjb9a18AX2kjaPZbmcFzFWbofoXgugCoG1q8ZLindgZJ2WJz6tenYkLyh4p3fp4tS52BthGVQa7ZNZsX7a5",
  "key23": "3VDDEP1urNCS6hVvVL8BuD3H6EVDRaTeBvD1HZeFNtFGJfNNA1xH5gsdNonNqVfpUSdexjsXdg6K2er23MBeXBqV",
  "key24": "4ayTHsF74uniQgLiL8FBvobstJMxg9VEFMCUeR8oQw8yyNAvsJEXhZrEKX8RMtE1MFqhPwpAkhF6gWeWQpGWjNTD",
  "key25": "FV3arkGcdNDBe58wEnKFntXmMQPaAP2MPfsBwowoQWaeM2iBWr7BREzVtpQeN3ZvyhsggCvXDUzX48moEGvmzsE",
  "key26": "34asfZZMppxEkD8ZEJ4jboBM1S968b78vESFPkZpxTP8XNWVTaf1C3vyAT7u3P9jBAHoh5CGrSkmTzcTF3pwjv21",
  "key27": "2joThSrnRLZm5UeMQo7HCDfHR7xR5Wzx2jcSry7dnsiLaPUUJQiqzQrTGHSJrXWHxPSicE3ghcRG1BtxqpeMxpD9",
  "key28": "47sQkf3CRhf5nxSHfMLPbXv2Am5Kbe8XKBD3LJeSAYc6YoPW2L9tz1gLKbECsfqrre4nnWhwm5fbeVH6d3Q5QeBe",
  "key29": "43iDpNSi3uT8Jioork3jG2k7A1sGnCq7GssB2t41UqGq5X5cYMriNTWzQHKgKf257fvXuHtQdcaJ3DZMvMBw7ykw",
  "key30": "2pqsccjbB8NGoWfBnsXjbKdxYDK9Sa8cfcmrh4znrfY9obT76N2KppPwvqVSE9ZHuxN9z8QhVT4t6nsGirpjHL1d",
  "key31": "4DCDvRh76CfcRxjkPRSEcViBEBfijkVYNG2TYNJiKnxNqE7xwed8SqP6YJFBbs9WAMwJHDc41mm3hNYBLuwV1RtA",
  "key32": "54aTU1mePW8PkMTjqgAWHPzFXF2y3wHRpuv6NgFb62mUafbYGtBBCZfFgXmaBFpb2nqBpsdMsR1XUT7nYoqoQShZ",
  "key33": "67Dqhy9csZa5SshhzXmBCHCgVM8XmHYHnGsbC5b4fyRoogpfnFngx9cwnciCck4sgQ8fYxjRd7hLifxzcA2afX5C",
  "key34": "49kHX3XUUsKWo6HA1ZLrCviS78E1S6KRKGijehm5c28xVaevnX5vuUMKamiySRN5xPfi5733PptygT5iNyeEjRNi",
  "key35": "3rAL2yQjJ2KT4i6yPa9UrTt1PzADPFGRkaY6h92CRkkDZ8LxQYzHPaZj4hXknWmBLQeQFHCmeveVi7VVXhZr2DTG",
  "key36": "BbBh8Rtn3NA7HA5fc3ms88tLEEUDHdtbZWtuwhZZqY4iNF8YoubGb9LCRpiSnUutGr16Nk5BkhRn2HMPhPJG85n"
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
