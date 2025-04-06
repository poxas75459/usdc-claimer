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
    "vEKm3Upuf2svdhydPHtfEApVekc3e8D8kbriZR8FuQja3oXw873hPdvpj3ixJXiXmFyR2nQRy4DF7YYkS7YmMwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onshjNhjLbE1H9NwZN7TWoSSF22cAw2y9ZiGWYBUBV7JJSqg83pZsCbdTW2P1zwUfUixpTmRhhcgVQMo2FrGbvc",
  "key1": "5vgr8eEc2SXthNMWmL9GWjGZxw1BsAo2tm7uFge4G1HLTrapcX9X5JsvZsRmPVdpdkT4s168oPjT2JrJSqmr7aPw",
  "key2": "315LYXW4pk6hJB9aLXD9LnM3zWTomWsHv4ZwgKRDSxW5HaDvLpqWZzUSmsux9hChghcih2Mh6Xm8NweSkoTFKU5y",
  "key3": "4LEQxRUaiJvPJ98BLJBoZLfDvuMM3sZaJ1mpa2grhVppUtw5rjnxmh9eipH9Vz9HHu9vzsoiUMXcFsjfXU9c8xKP",
  "key4": "tj1ytV8t1eSJCDPM5VojNQmG58c9pqMbZ7T22MdCj21PGDhc1qsypep2VdzZqK7dxeHuUzimoBR5YTiZhryGSCu",
  "key5": "3tDZZ9ujud6eS9EUAaTiMiYoQFJEfeD5FEYJ4faQ4BPRUQmCfNj6qVDkpN5YWV5Dq6uyFdw8XzTaxcv1h16kb9z6",
  "key6": "2dydRMFfX5BMEHcZ8PNUBVWCicRwKPwU29W4WpDB4EQLDfzhP8NofW4YXCFgpxNJiARqNhDJQmg3ethqnNTTMV1g",
  "key7": "3wU7b84iqyoxcoPUB4rh2yAu97WPJKJnYQRCb2E2LxcFDrPvvBUDtphECSTDMGZijievDqvRfLxMnxvqQW3uXapU",
  "key8": "4heJLmqiAopE9mxSdnLSNRhUYrZPBH4DBU4356bD1AdRDQD5Emk5iLRLuDZPpGZz7qhfp6nCXofS4sqa53tdxmae",
  "key9": "39qcbXJF1Eb2GySofyCY6FgK3yZ4QsD5ETjw6M81NHAk3rrFteQu4TYAAQVwH1KY6pT9MHFiE8CkbPTHqxmRX1tD",
  "key10": "2nZWU74eRp8CqvmBZGyS3ha53Bp1ARMUWdXh3vkxmf1pfDXjiw7HxqsEL1qSpZ3zshmoHAqN9sayh1RHyLLCJh2f",
  "key11": "e6aV27DGi6HYhAqNuieY8g5H35sWWWfjSeC7f4vGWFzYeyuZ9guiwuR5dW1av7rGGisLJUi81Af4emh42ETUPzK",
  "key12": "3eWT8Rit7Wj7jkJh1FrPqubFPQjkp8G9g58jcFrkmwvcLedwn6FazjeAwL367qUQHbJuBBuVh6Bv2QwnaLFv577D",
  "key13": "thVtVfAB9ykzbh262gGeXj21qfBXwDfrrScCM7QWMe5NNPoMcKHXZMT324SNph5xWd81VdRpD3f7iZmiadsvrxQ",
  "key14": "5fHUkfduHzLaFd6hwwmTNRDSJ7RUXNNvEumg26a5QeUe7QKyk5nY8SBQFvBC7Hsw3KoMRTxvZEHCgs6RWvpmgMbi",
  "key15": "5Sshat2DwTyxvYTNKLVijKn4bVjC1FHqkbeT6HaqSLk3mRDAhJojNnv95bc7H6J1iviCD1YSEf8dwdbFF7EaLkb5",
  "key16": "2irctq3Bj7rDoAf2AuRXuXwFrYajdak9yjNoCFnijwUvNbPuXXgx3yRHsKuJ5ti1FQKRi7tuvXPhTZNzuk5TZzWz",
  "key17": "V5LKxbnRc7MJf9zrQz3eQzus53xrKZyFsmhEhKrhGu1qRLL1C9tcwFCk7CkQuwdxNS3Ma64nmMWhg33oc4CPQvY",
  "key18": "3eK2VU5JPnogKLS2yoBTaDvAU1C4p9mGM6Q2zg9fb3MFVAYXhVBript3zDAdgNJs2fvnwC9U55mjKiQZtpXYkpuU",
  "key19": "qhLdXDTMDbpb1gJYDnCssLCZ8kRiuavu8q8dp498VJE5mWvPvCovFPcYqMudd6dyUoHnYmdRtaD57HTQeWE7Jz7",
  "key20": "3J7H63WVaWeHVWQCSM2VNE4sQbrifJXQhEhp1ypprvbj79b2XkHyiTxbKjRY3GEfdFQBjMXqYtid9BjFigNSLeq3",
  "key21": "2JjgQuixqkbwsdztX1akKJcsuMjwq2skLvVrbYhKGvCKNdN2wFa8ML7uoAxS55VRQfhkmqXAGWwzzqHgjzTgxN4H",
  "key22": "ogQBQmf2tVmWxtvwPzqARkGiqLtp6oxxV9WpdAGT5EYms5x8o6C6pkiZkJu5vRYgU9WWytDSPtza4fMxaJpBGwz",
  "key23": "65DpM9R5H2T8QcSEwha4evQKnLt3nQGcLAXxdce6JyHUZnrBA6zYkT7FNDo84TbzJwEhWbFZZ46scTVgZPkMDAux",
  "key24": "3geQbLvTLyEh2fSc1s1R2MPDzAY7YYv1KCeTsv16YobdubPdB8Nq9XXtL5uk8V1dJxif1XzaMJiCEqkN9TsR6LQ3",
  "key25": "5Dgj5Y2w6dpcuPNv4JjDzgqrbA1fR3kWJcrUSyH6y6oPkzTucsWayF3DqTijhWXBSUNWodBkKDX2w8moeRNoEHC6",
  "key26": "3Q6Tft5HASUdssFy1BswHHijjqAXbHE4wuctX1bH9oPpHmdAAB68NjNnnkTNmV8Rh5D88nC5TQU4fVxzmU3CsS18",
  "key27": "41canBRRwZXkSvMgXN9ge1hv7gdHV9TV973FFJJH4dHukwaHd1Hxq4qyVCvhZb9A5auLb9JnogTqxvQ6mKUZB2FP",
  "key28": "62wdBVNF2Zv3FYQ3tKr8QtX2uAPWkyMafTPJVC2efjdnAA6whxCbVBPZLR8Wk1StdJ69ExRWBuH132cXbaQ5dFi1",
  "key29": "59hEL2PnMaZuAdSQLkTgqZhZSjVUqCHjnWfKtjtXwdf5JucNg8jgZVw6kDEcSxetyjHnX4xmh9nfSWGo4marYxmP",
  "key30": "54k1mJ6M3B7CQWEhnCVUoqjikEcZ78RqmH5xyCZe5Pzc6yUtmrkxDCuCmt8zT65jnGLbHKGowN3fn4BDgE9dkFCv",
  "key31": "Rm4AvRiKCPo3XgPky37nekY7mLPt6Fe6rKnSPgPonggXHAMGgwaooYvsEZ66UxcCL1krL54qGGZyCswHa1qVehU",
  "key32": "zGCBmX8tgEubcMTtLt4BKYcCLfZ2XgKDd4ss5Me3UmyxeJg4Sq3aXnfEGpvFVfZMAxdrM87H7WYvZPzz3NqtZ6G",
  "key33": "4BDccqBwTEhV22ZVXKGHji33JujzQamdfdbQfSYYdVraeBYpyamTzjLt25xfDs5uH8NqSDemS6TgAFWLby6p6qkn",
  "key34": "3Xj8FQxxRaoktmKeU2D9BZ7mR3pcnzbGPy6NZrzD3cByn3bFdLopJK6MxTrSXWgJe8nMR7svZDNWyBE5CpvrQuyK",
  "key35": "oNbJRSW4cy6i7zpU3iKixGzfSUUVWSzKCd3D5s7XNKHgcNP5rUDksDQyNgorbe9fvHnBa1GbDA8CP6ye1uR8xN4",
  "key36": "4NeaY8HNzzdRHcvQYdnPvK2ZXagAZJEe5Mzg9PjzJMgvdzASUQtZwAv25MRVSAQPpFt9FT1ygsKTWhkvqLKtTteE",
  "key37": "cNYjjmCSicCZRLNsHU67jJ7uMnBXdqmYoJixHU6gmtNSAXw5fRPJ9R2swbim4WmMtASSkyWxVeLn9S9nLy6bRsK",
  "key38": "3rGDxWKHaWwXJEmVMepHiwA7AVae2erCxxde9y5wUyMMbdENvWttaJeqGCSX6BbYYX2ejrtu1SCuhrQxweeoq7RZ",
  "key39": "5sWwU4A5M53QfsttYjtQcLNeiyhxxTXDwFGHwUAgMaTqug6mfothnBzL9ZyqRFsoU7DrRRNSBQ5eBoa35Ub7bw4B",
  "key40": "3YYoYHfMQqPjRhbURwynt9RoUtTrV47x1DmyWyoq5PthUxbXeqwxHTvmcZnWrGFhvhHkwmFYpQB2pFNeRD3DVX6W",
  "key41": "2NK2ujXJ2HrX9RaxGBpbkmMD7m1z5RBSAQfa2yM3TtaZQw2dgNA7ZPcp4GxwNJG8RtkzKiw4p4kAgoCUPktUQGYD",
  "key42": "EEa1bzjr4QWt1B3Mngmxo9v3wRn1gtV8PCKRHihrp5BCvjPnDaaPGpwGbWUtzbKKifh1uNMLSpsEUcSWA7E5xHx",
  "key43": "Hy6Xf2wDp5jxcwAkfkPZENyNgMCamBmevyD6zxYKg8LjcBp5pnU2gctt8KMNsa7SKCVNtCeWbYzS1y7ptm7vgMj",
  "key44": "4w3PSo2KtxxscJur84aV8oKM9yGDaxA3kVbVHsy3hZRPduX1T5vESFfgzk7upGQBD9UJzAe9TsYzZTpb8fRHFFCD",
  "key45": "4MP6YgcsgfTz441273Qh9xBr5fDU8NxPPj6vPbzU7cRF9dtDR4E2McUQ8Yum8pDJvpBXDnpxYC9E6j6Z1JQ4ukAq",
  "key46": "KGxm5msTMw9JqMvwofTLJCWpi1Ajim5aYUJHVzMsnS1evjTNiMKApF6NT3zRvBYyzXcGghJ3rw2sE6pxosDaYJ5",
  "key47": "jNM48ruezvwWJoVwfssqT9EomxXDH323maZK31Uti4fnTTaBjW3V5knpNWBaDrqZQ8nyqkTCgCGvHVKxo4vfmkW",
  "key48": "2gnkXN7DXd3FJvuN7NeSti4ifYV5xreqqCnJfBwufYsejWUXr2MnKfEPx1UHjFoNE4bcTGT7VTHu4Y7ap3YCzZJu"
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
