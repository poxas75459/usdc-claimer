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
    "5ScXe43iqB4oadicPmqKmvFaESVBMyUNgHhACPuKzxXUnU2FiMdELkqR4X5bt7v8Qs6oVEktxRmZfgUhzVF3CMzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YDXG2MnEueYyGdNGHr5Y9Znb1wwsDHxayZjZP8SP8MeNGtfangbjFFBbpEUPpE4QzNjGFhYMBjR7suuyaeyxwhe",
  "key1": "3sZtdFZQQ2PRpR9qzXdCY3feqNWiCUNBqRQRs6h3WYzUESPsJFLuj86PphaZq789Fnsm64FdxA1xW1xcHWMFVHBv",
  "key2": "23esZAcYSRrzW4DxcZKzq8xAQnW9ETYbBbxEhFYcTR5MoSCisH66MnKxDnEvdmFqid2XZxVfoZ8usbupVMTSum2s",
  "key3": "59bTB1uv7wSdVgFNL54rFZhdwob1DiXwR93HXWHv14RFW12X9HVVzGZP5ySAxtKc3NugLZkwMwhhYcyyr1FcBSsU",
  "key4": "49f8B89iZcaFfcy2ScoiadANdeh5SFUq629JpNwd6U4bRKMwYB324eYN42digv3jJWE8kS4MrTqYnKyN14GLzeZt",
  "key5": "4cgSGe3dAcVoZgu3bXiGGjYUDXcvpgQvvYVN4J4LXKR1fxtZ95idTzpRe4jVEP4W9384UC51H4124znCfg7RVoNy",
  "key6": "2tfSyQjcVb7Foq33Dvf2jBeNENe1jyAqbXMYAsXBqFjGUGpCX7sAFD4HXY8rejzn8XNvaV4WX9AFi7JDZoBasGMT",
  "key7": "4inLDhzYPiwuG9wwACnsdB34pcYYGD79LhZCiV7P5RSNjd1ByFQdN5oQjX8XGF1GiqVBxyKvuYYXxwFj4ophgos7",
  "key8": "34FJCn9UwhgA4h9RFTC7ibTxG7ApuN6g4w7qtGoayL97nhe7zarYXHWFDmU2kDrWzcAMgRE6nj24gvHmUSaoYmLq",
  "key9": "2JSZrshHFZkXtDe24QZrft1o356XCUL7Hffp4yQeNevPFt6TyzindKyyWSyNeW1YQfBV8G6y51BBrrVdutX9VNWP",
  "key10": "41mvSYnYBbQDUnvL1nh95b3PruuSaHAtJNmz9bvBeeG7dmbfkGMDMjYnTofVbkDjMHUxQagyojbsrg1LxeqdnWry",
  "key11": "SUN6u2WdA3JPZiyY1oPUtCdjLuj8rJkKqSc6cRUP2htqFgDx86HkAysnFbp8AJSTHEPzrytDBLdtDgykEPCmcfJ",
  "key12": "57xakbJEVbX41U4JQJHhSZ9kSejwoGgaKfxwRYKLMhJzMQ28YX6ojKxBVeYL6hsfLMUyyiksQQy7Sh7TSLzwPtWu",
  "key13": "59xubQucPYL3P6LxVzS4VLeGqU1BzqGpEoTXchu9aihdF7dLpSDRzka6WLSMZiMaPrJLgUsT5NTs5SqkjDq7xCyk",
  "key14": "37hqwJx92iNFcnhqRdET5fmTzM1KXAi5j98nwCFEPZkjcp1uKmyhqpzBvvwK6nyiKJdmQbDRBkfmAuLnzkDR8d2q",
  "key15": "N5TxQw3JuuK6AAmsVEUYtv2TgKTXkVpqVxqFkdb6WUgSHguxjNxDyYz64pL7Lzu968ezPTBhotcQBivL2WB8up7",
  "key16": "4bQky9yn7nbq1F4JRH8KSHiXg1gvBRPxH7wBffihYfp7g61zvJL3hP9MonsFBKQnYywdVVWfE8Su5htDzq3zjpHq",
  "key17": "2Fs5xJcghqiFWCufHzo4Mt1crLcRZULMsNXYdCrc1rf5j4x8TAmey6ejbXyKFoyEFJXsHWZyzqyePgYE2CuqKXab",
  "key18": "2pzyzHhhqKLqgLTEBew76AnpiBZv518UgqwyKtWabnjq5FM8cQxLNr1yYdcp5Ah9YxpwUrc3U56AencbfadGPjYB",
  "key19": "4koBEz1HcRg639QXDrDE8atMa6XXD3aEuwd9qyPWdc4ABjMvUMAdPZMMKXwcG2ctyoL25Jk218RyfV6Q1wtjUQbi",
  "key20": "23GGgtCtnwBb3ZHSDJcnTfrkt4ZXTRDXPz3tkN12eCmtzTC7bt5gRHfzTh2Uj3qBFL5W2qppB8TUgUwz6vXURAtQ",
  "key21": "2dt168GHTKA4Ekgh3UzFw1U2fdg5VbfbANZK8zGA6v4oURXrYrB9id9zcE9ByPHXQPy1hqWvWS4B7VoUjMhePt9e",
  "key22": "2RbQuz4iQX2MsW5RapevXjy3vvoXz5vqu1jy5szA3cuLrgo17TaYZjWQPASSqfBf7ukgn4tkED1bP8dq7nevrnFX",
  "key23": "2axWVZf62q2X6mUcKiEjpP8nDX9H6Bwvfik74YDfkBY1rfeqjah3MVi4E6GTM6P9iH53R7wkvT62Wju8hRAFLrMz",
  "key24": "2NJmbJnm9AWvcTFNFAHx8viGXS5QFQiRuDkqxZgwfA5CdMF5JCcVpSebs9fqYsh5qJ8sXpdn86B1MjqaGrLLPjwD",
  "key25": "61Y26hg4NTP7S6PrZ9nJUkt4Y2FRUmERB72P6GrgkvZamDgqDEKuqBfQn2oUyCrJTYLY7MFzjFnjuD4QzDBvLccp",
  "key26": "3RWMxsFzDZez2yZjEj2qun4f6t8qsHFpRAMkY9qhe7UDpZoBweJhEvqxd9eQui7rGXHP7SertdGwTShu4MYCLtz9",
  "key27": "4ik55Xgo8gm4ZXorTpaW2YHKDQLadZ2d92UpuV3otsAcD5LCdx79P2A8m5ViY8ajm4CNkcw2TpStGX5CLp1ZYQcv",
  "key28": "5EpUwqwyRGTs6nS4Urtn6VdTtiW6fxgMKURf5nYfGf9s5d7UmuAGLkVRK4Bpk6U2MYSDJDrkTgpHicH554Mzo5rg",
  "key29": "3f5gDCsaD8PSuMNXENDpCuH1NM4ZF6dptU5XQwajQZo9hb1uDiRi157zNVRiXMgfzYNyQeY4gs4RUQGwMj3Bh52n",
  "key30": "3QahFVbTDqqud6xKzTjKVoe6drxH4Tx8D48Z6yZhbd3sTG2w17xYUfbq6LVz7xoJSBH6f3vHzntwNKPXLpCPBoTC",
  "key31": "vMoNS1UifLgfCjWz6sy73sZxwhPwTKtV75aHs6gD2VgeyQEFLZ2CGSD8EAMu7BafR8cqnTJnBr8FzuE8BS9stPW",
  "key32": "47rYZzeFfKB1kZEzkpny7Uavv1ULk7Fikieg93JFWMDc5FrbVnYA3fHuTTEgcNEzVA1xBX8GPmFepsCWVwzQjUgG",
  "key33": "2oqrCBAuPcQXJ6wdDwBfkC4TdCbhktkhECgxnJpvgTENEqJ8FnHX6vcRm7yXZHKo97HPgvYqEC5w1tM6ZYdwS7dX",
  "key34": "4MCSu6PPepchAanKZJp2DifYbUDMoqZJfGeVajjfcf1sbHvmqGPWN361tMf3h5jBg8HDdsqjhjd65UpLdRLUigyb",
  "key35": "543rZRmDTEqNJSChdLmqMEsxuQAcdjkCuxK9rpSqGbetGkWPe6Z37ibdyndp7THH3SWPvh7sfyyss3Zh5R9WE8Ho",
  "key36": "2oEArSp4Hza4iVqw2gbPYJQMqFnwsfhvAHtuYKFGvqbuKSnFVVkjAvkvLAi79xc9dBqMnvYKzsFFdhdvahTnZso3",
  "key37": "KX7ChBvydfDQ9Ui6nZxwcNw11kkn8qHxdygbpkQv4YnDfGijKkUVh7yGKcNDXK8r2vCKgqL4nVjP7jotmViG8tC",
  "key38": "59KTXrgiSJaiCckvjw3C4SbHQAhHwS8e8fpsSuLyH2ESDZD8orc4Hp1iPus8tYHaAzNhAjHfD3cKaTd8JreuZkDp",
  "key39": "3AuuEPTm9aGJfWvuW3dQv4dbps9V7f4rVRiDWeVVj6z7KejSC63a2FRDPPTmtBJYMM3JXzkC1rCymvaQsbja57Ys",
  "key40": "2ML4Wuvys8TpEhAFYsMEHk4fSpgxyY2GS76w5PKwwuPobCGjbLuXvrTRPxtdzASR2HfbpAH4jf1NWmgSH1WHpNBL",
  "key41": "2Pc5YnJVtaBv13fj59JKv6K8Yf8879s1FR22eYVh1GhNCtVFMnrgFEdUrhXjpyWVTNxdpTJWxuwMoW32xYpHZKkh",
  "key42": "3sxf842h1aBeTcxMrK9jcBaHPonVwF4Z9UutEMNP6VQqC6fZWSMCg8S3bsuWQLDXmmezx8zZQPbEYy1ARKum3QRx",
  "key43": "2zfYFyf91aK8E3jkLQNUsewkRxfHUNaYjo148nRXWcDjJzrCuGkGM47TjTgqWHopRacrb9BpohMvyW7BMpkFjWVF",
  "key44": "4j6d6i2jxaRJk5gXr13HricGChQ8iQPsDpJv7xrzLcsm2KEZbGDEdLjKoXiZxZCnA7JqgPM7bz9v1nyryFyoyP8X",
  "key45": "2S5YqPxuwVhou6AcFTnNt96QnYdgNX4b6eWtrCsxuKimy6iWaW3rrLCxHYFZ5PASA3DdpLZ2fdpxh2xEmX3CucRG",
  "key46": "51k7mNDGedashKXZUw9xQE15TE5iTJTTFHwmXYnZi33QqnN9HZmWrBpfzWCuQxgbYEcQ1ZyjadMWyozthFCNAneT",
  "key47": "cpJeAqwbJqvnAsdRnoAnQRJga2oe7hF55Sy5D8Q3N5rKmLsoVoqMX83V3gwUcwS2iMWeCJ9VLqxmrPopj7ohYeb",
  "key48": "4jctaxd3cZ9G2ss4yAPzCpb8RVZB1KNKQDrwJZmDyyQgfAjWKAoDrxD4R8jaUpPEJUeVFyqMLH4DjJrcQKxJTHsF"
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
