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
    "2JPDRyykrEiyBWzFoJjQ2SpwMTckdgAi3zGQ6rf8Hsx74z9s23D4KZQepotbC1NC4ErYwLDixiCSymGiZ72EHZcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiRkhNfiWhKEtGs8tvYxXVk8SQRgQb1f8uo45k1jQcwHWsqby2iGPagjNrHWcSsHk5rpuav5E8hEPJBWV1yyPwP",
  "key1": "3kkdhEXTSoX6LLpMFaC7wP8twVFUJafccEr4zRZqmn1MXMUgLkVqc1jSqQaakNnk9WmYt69wF1B2KUyyDS5tyPWx",
  "key2": "zYQFjgN9aLimSgC4BAydxe49M1EKgZseHu3yqpox2PWfhtwrDkPTBcGZ29hcm25W7WBKncPCBz5wjy3kGGpX4e1",
  "key3": "2sik4gkq4DP3KMrdE6JtdxAQVz51e5DZxZr5812vxKgSoLtTBpVa7J86AbDANyiAuQTHWe1ryPuWi6qwFAz23XMU",
  "key4": "5u3QeU4pFTFJoLotXgeLmDKEdrgVtsnZyCsroPwRn6uYGSGreWbj77yMG8YqzZdaktEc7fS2up8hKXJrcCX8zzNL",
  "key5": "3UDi55YnjUB4QsAZ8418K145Ny9iYZrgnZNu3QTGsEuLDzAAkQgKsg4DUyRQvh7xD5WM4MWcxG5TNxNDR2mMU2Vz",
  "key6": "2esqoUyhCf1zBGbC29fvhjYvoaVXR4MckdLrpkuy6RXCc1JosyVhmKRfP86oPM3RKdUr9pVGLPMZU2SkUksxcvsX",
  "key7": "2X3FoXrvWLXFyVJZQQwVgCdL7MEL7CWT3JAUjuvZi7WspfmEL2DsMbhmFQZYTuA5bYWEeZExRXwEMv9WdS8W8grz",
  "key8": "3dUderTbudZ5HwSXoQ7PhVrY8okSuBkyKgRHr79br9nPwqo162f9WuyiUC59kkZn83ACRsvQwFDs6NWCPTff8sJn",
  "key9": "5FTfY1xrP7e7G3i72TzsrPJ8HQJsFE9NsKKZZWSyVJZPx9JxbQ9uz8H6guyEN1dyvwjAGVokaH9U1CLkMqcXagFA",
  "key10": "2N81MBUAepfsxRGE6F3tPwFUT7krWUbMo8E914Usv3DUuDbwRphJkjd64CqmQFKMvy2vWJ3GkFEmKwXsypLs8GjP",
  "key11": "3y2eX981sVVox27ZoxknfRVK4s54ergRjr9pEknoedNiNwuUjUCiaKUK5bZDRjvc9cnyHuq4ZRHzkGMbCszwFgaP",
  "key12": "hsqeBe5jEvyoSr7mt6sAFSYMcemkRtN8jkRp1G3q2QY8ZXmL3HAPvu9Ktg2znbgtdHXu55Bz99NzPJnCWZqmht5",
  "key13": "4HVK2Bmgn4vHTnvdjfX186LBNipYfRfHRB7DY7Kk5rk8aczh8j3uisDRav3rcCbhKfiR4ZkNsJyAV8hYAvRWU4PH",
  "key14": "2FboysVvyVorn2cEkK7ZCDHHEkERGMmXD8HceaA1UZZg9P7vRc4hxQivUHez4ZvoU2qBZhzdp6EnzJo9bK3crrjT",
  "key15": "2LAk64BAEpxVfEqjMFmZRo4xFGkRmBh4kbhxVmoTjU6XttN1kDJRHVkFptDsnrMdBNZTBvW8dznZKMhhi96ZfsTn",
  "key16": "33LTnFc8fV2GjvyuJopvVFe34YTpPMFsR33ubhAq76eu89H8WsgmuFZynUC8jFnP9VFGnyPi3LF1Vj8GiDuMqsWF",
  "key17": "5FPE5tGUTjs7RwtVjYm4jJzjwTfThMzLD4SjtVWEcd4e7DQRdTgZJyVEzfmj73gLBq1y6ouJoCzbH2fWZj1GzrvM",
  "key18": "4nJima5s8upVvVgdjpFnr3peLdBLb5CjNjECwGH2gn6RGhThTooqZPp7QwVzouc3NjaRgi1mF7oZh5dzWZarBsLw",
  "key19": "XX6xb8dG1vEsxA19Bmd9F6UWqGUWnrevK4Ydf3JVLjjUrKwM5cCX5pAZq7xcyZZaenGevKXreG1rQe36nddpwwh",
  "key20": "51PRAgFSSUvxNyDw6GzJT4uvBqg4m9qj6HT6o5zGMvBBpgvKC1X2jFKtCzPMeAHK8CeCm9Lxhxuz3rABBsPKPyRL",
  "key21": "4FNygw2x3vgCAp73WPnUHyy9jeVP4b4wPNpJKdYDoZQ7y9ptqsRXc4fknGJjZ1YJa5UYDJW8Laoavz7BbpsPq5BQ",
  "key22": "3Xjvroqpy8tkoemsJEXARP6AviEtKBms1pmQa5q6pZ2M1oRrhWh1YKRdVyy3K2mP5wRq8TSRE2m9tyLKKNGXy5zk",
  "key23": "26SsGiuuUykPsTRr6mAp3EVPakAzWa67irU7h2WZ2Hc5pByryUs6VqfE8MqdcpEN7FK4JrhJiqxoLehj7ghtAndM",
  "key24": "qHsydqgkZwgjA6omoDAvBPX7m7oEQyjnT49wMuagwRrruHaCgoqrAGEgBUQK7d7W5YQ9XkTSkRX3db3VpDFBmEK",
  "key25": "52zbERUQynAX2s3UUzhyPqHJ3mq2SQYNu6eZ696y7NmNuZjjhxXXqJbDQQvs4iMWq5g4FVaTZhHv42e4cxXqZaWd",
  "key26": "473RE7onojB4Tyrw4KVm3B16gCLHdTCVsgVWzM8w7TTG6hA8AMrDe3iKbQHSxEuSuHcyzgyRyDcNdssq6LF9Lczg",
  "key27": "41EXwrrBssLiFxugXmj4127yohxeDGUquHE8mCtcaLYVkvMQU62BboJG5VMfqevykcdcjyr5zPVYzUGuZQ4kgTmz",
  "key28": "aU8b6LvDbJa9ouAb1dKCmRq6mF2oa1s3hZkNyHCKecF8txMCTChFiNTTnpx1icNqdusNVtmJghwUywU1Dzkpf5P",
  "key29": "2qvA62UXzZjH3g5ZmsSx4mvmkdo12SjbKK1oEjWusKpD6Gg7vTcRcZmQPKWXDxKKRK8so4F9n75LWLR1KrqE4n36",
  "key30": "5hB5u3PWb4m1JHSXmMaAT82MJE78RguMy4VHJ8skpjGoCsjd6B6tFeFEcgo3dd69mhH7A6nNeeYDa6PPYrJCDPNi",
  "key31": "4khxGCwHv4ZHtipcYwwsDVtDJpX8zEpmHEbBDEnS13xKL4x8kkes5zCiUrp9mWyPURhLvPYMSo8DVvxAywUKKWmz",
  "key32": "5eNrSzPLnS2K5kxZdn5cvAucG88wRh23a99yNQ26XejTp44i1ASYBkMZjeRRxhQMCBugTQhX8kGs7fUmu72jtKQK",
  "key33": "3hx952TvADU6eBq42S62sTd7Y9jz1Vhh4jAVQwSNNkyzBZ821zGjb4eqqg2T7Qm2sjcvZqYecAjRWFpRLEMixtHY",
  "key34": "5cvLMBTbJ6DgruyvcqCD6PXtRaSmPi6GvsbNu9JHmJY3bUMQu2ThyZw2oJviF6gApwb3ZxzRh1BJFYBxVi6XLCrw",
  "key35": "3PqBDAdZ7JUA8cA3GjRENEMBLLinQuLE7hPYcVUupLCrfzEm2FsWeWT5NFDyVRaq2DrP1v4JAXjG32uNpbJfzhCx",
  "key36": "5x99xnhgZvzfQLzaDDRaqr6orQ1MzGPWQeq5xVZukukA3K5XXqXwnjzHrY42uz8dPgR9FkyL1RxYkAiZ3L8hn3UY",
  "key37": "5Li6osU2e7mFFV2Xqm7oE9TvgWmxGMkM1v9KbK4CkB3GvNvKBaYc5yDADhu4ffXXEkdH4m9koYjkZQovmdYUB25q",
  "key38": "4LY7JxvtisSiJ2KBYtBRPYEmctehs92rFdv6TsNEZJkm6YckCEyhdjQioi3NSzR3DDvbTZkBuywnLL8g3YU4bXSH",
  "key39": "D71K2wbCEPCXh8a6sC94x1EW5BVasM2hTsQeQAafKbvPxuUHWrGgHRR2N3czVrbARKKqEWrKXZjxb8iPARN6MGq",
  "key40": "5iLYNaweSXHo2kicke6RFV5k9FMb9FudM5k3T7yLbAGnJZLjg7SBjitSBGRASmdrkV5g8uepFYWjujRHwX2D3G83",
  "key41": "4gbTnpp6nv4KbTyTFPCKKJmMhpSMD6ACfV1CFgc7m7SJsKe3RLeEbF8moY6GCpnLnahHNpAFoPuY8sPGGbJkbchP",
  "key42": "vJNo1vCbhuK7iUP5oXVYFn9DfyKxNBiEJQmP6yjQa9fvUiXuEnC8GN5c24g9rrzvrihjUN1srAVonVBusJgcZgB",
  "key43": "g2hZRR7K6GJx9LV4b614yT9uPxtb7hKJgj6UEtzgMxUagZGJ9e4BDm2YAci12QSsnpFmY8wRGTswooCRW4oSYLK"
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
