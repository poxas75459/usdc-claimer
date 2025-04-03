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
    "3KMCRzTvgCuu1tYUjcvLakT6DR3cKKyrcVqxUyq5ti73fAYns7v9AER2WSkWRZ5t9nzq4r2QgJpcM1w8n1mA578q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xDZcfZjcWopqGLKqXz9fPAPEM6w64KXiFBv2kjXKj6GRmtz11X7f7EtCDohB5SLdZkra2jQEdoFN65T9ed8mV34",
  "key1": "4ktWFthrUJPUu3NwZdAg6hG212pZaqwNdUxtitP3weifh9JmAZxgkvDoKkTkmfasP3FTwCCz3AWaD7wcxoByXHrn",
  "key2": "2oKJ8PZnp2LeCAEQytSX9y2UDMYuA9GLQS4Skqo52PmdqqUacdLbhrjFh9c5RkjuYTMCAVz4UM9jnqS1LLHw935g",
  "key3": "5mADCPGytsVS97DNAijp1BE9FSvLbpYeue1F8b527yfNuu8ErkwJepNSJJt9VUxPtxmkUE4MjNfZcBudB7xRFJ7Z",
  "key4": "5jCrrsvRr8bRCvaQCWHL6mJEj2zphqRGKTJ9Ee1DKHkE1bSMdiiiTSavu2thf9evad5jdTY7ip3mWH2RwWFNbDi5",
  "key5": "281GR61zReQr8B5gqQYkjtAzoGVuVWqbosLU8FcRRi27LEXsqkHacnGrY9Q4iNigQC8ikKqHPALhEQw9oH5obsxB",
  "key6": "tPSrJNTir6Rx4NKwEuPNo9bMAgaLaSgLERdv5KajWqpaFhTDQbokUmdNWva58JAmC8ZgqJ5cF91Pex1AXqnKpaU",
  "key7": "QH8x6US6zqtTmqVp7NG3aR2oS2DuvVcyvLE1niP6metPiVJUVvYeG6ncXQArHXPZVg8w1shsAtYBVCfFXj5KF68",
  "key8": "4gSYWz7LgPxQLfjdGD4LCR3w6ZtA6XgM9QWCcwDfvp4qnxrUzo3rzhhAH5xbFrBtnzskPkQmqHqHpe2dM5HoRA67",
  "key9": "4Xp3VhEtQpnBGcDSWwCeRKzABULSGWtNXfoWyPpa7LeuP14KisvFaCvkX9QxLmAvG2etXAZvHsGLNnYeyxZs6ga2",
  "key10": "3ySt3a7QfvFLwosVG9vmE32LcLzgnrozkL1KV95xqv6t92CUxTFUqjWTUM3abCzrZQ7N3YKJ3zUqDnnWxnaRpt9s",
  "key11": "22FnWDhXFoSCkrGYyjJBomsrW3YfG1zA5oRe4LpuLcrxogupjcJ7UyefbfAZ2jHwxnSjQFQLNqfrDX3bwM8auHzH",
  "key12": "3N1rxbcD9qUcxi1Mnsa2pYMXKcoxmVrW13hHhkxFx9cqjkaTR6EHCj8cKzu4PY4uXmY8G4RYeAdUWtR6DCYpwVUb",
  "key13": "3LfLZ9kWb2b6atMmkj6wseUQMmJeobZGUmMHRKCiMhR38aZ4vk9S7yyG2B7EEXVgN9qy5jhF4nJFkthUgfDG1xmG",
  "key14": "4YMb4RRnT3USd4ZeimiQ8p3UAMnsLNivURkMYaxApUZMETa4MAxYoyiXmV1epbmZMLp3GMJxVEpuTWNCSzNsYdPH",
  "key15": "5NXHMdvDvH2VbLRpReYpLZrty7hxPFaDhFojg9AqMG9y3QPjJQer7UYWYUbknA4gj7VK1RBVRzJpK5qfugsvJ1Gs",
  "key16": "qbSZ9WkZUdm1k6E8q3ZKdjJPHkBPh6e8QL4yskigddwVBguKGtXBdTJ5Dyjrqh5bL1qoHVHrSptAAuAMVG18eqh",
  "key17": "37jrubtB67CUNuyMM7x2kirY7yna2Su2L8YpQcVBomZmjCJaJdR8HnjsHPqZXLuG6KcU3MhzpWos7oQoTW5eJtBd",
  "key18": "47cj63Wg3LsbpEV96Xwu7NSJDLhoA3aBhD9aicE7tHKfJ5MmRyjmputtiU7LF1RA9CjUA5yAtJ4iVGLwBpa2EzZC",
  "key19": "2YXWoBj1WrxdAyjMi29Ci1UmGPAoiDgGfFcby7ExqWj4PSxL39KUEoDnMAu9JjtHGUD61hRFW4dEadrtcoWkFXC5",
  "key20": "2wh9KgptX7z9zfBfogJJKvWVseBvNsEkSETJmuqPMWTHx1p3ojfKXN5dbe3NnKKng1ZEA8wRo2eCUDPLeUJzoC56",
  "key21": "5Vco2w5j4JzBd3mT4gf9ZmAA4MrLzzm7J3TFPZoTH1DimXvmpVUjTrJf5x4V7ghp2fKnDeNvR115V5Zp8QkJF3Fk",
  "key22": "5uCFPuNffor2prXAizyggPqxy485KqqxPGWTygrBceDicTNNajnBQ4Zj3DJHashC2VicnvhEMbeHXBTKNFRLAYyT",
  "key23": "rC2cmxqfXKRVhMWnKwPdvVPwYew5T6gS3X8ryVeiXvbfcPqgYjKxTLe4vdh5u8EgAGHNGCEYgNCeJtuFcDnrun8",
  "key24": "4yhTYfg1jKqu3qotN2BoQEYMp1jmfGYiGS6a6d85oY2GUzDRYjDSxpToJ1f6EVKqPVwn7wJxtUL8umjqHEtiEuFx",
  "key25": "3z1MrZKdLUx9Us3PPymwM9fvxKDhrNq2uQRLsTKfkE3Rz3PurYZ4gPguKvXVyA2atV7QodHWjd6MBm4QqcccQTGu",
  "key26": "2mDjcVeA3NmR3zKxSXfDNZ6tPZzAbo6KDeTkwPJJmPi2Roxz741dsooDEshPCiCRcBT5TThXopZqX8VdRV9Ajrew",
  "key27": "jAxZVVxmqhWfdjLHXxCrdWWpcnEwWQF8Vcr226p6RvBgsdcj5RaE1mQMGDWmV3saeT2gGJdxhsith1rQq2PzW6N",
  "key28": "4MF5SKFqDn8zYYSwaNwRJBMgN848Sv1poUKb2FHwnGzdtLyXfPux262XGdQo3RqutxsUnwZcPT8x7ei45721SJF4",
  "key29": "5Kd5fztJ4CdNMiBDGPVvgXVRzTDBoR1B7g4xcPVgnE5mriS1vbha7qYxjvsvhU1UuHLiKyyoFCGBbkF7LmvkkWJe",
  "key30": "2bF4mf3Y7y4hoxTsXW9EormVifRKd1q5YtwwPrZBqgDatu6mi7qVrxAG9jA9HNXbe5nPMGHkXsBgAe75eALC93GU",
  "key31": "2DUAk7hVFewN2vyvLAnXgoRBTW9Hq6vXm51bmiFK42YGcLJCKkqdKxwyBYcBR36gZRcANzMc3oxhqsDyj7mkNHBr",
  "key32": "1T6cDJZZLVvwmovdaSGgzytEfFiN3LBe8nSZc7czL4Nk5RJPd7ppfdT1GtcgbRfrJgphgdD1KPncGPKkZSgJjnb",
  "key33": "2gZ4GepCeJF9625RCDiNWUAWFc4P3NGPjGyY9cXSGC4w4kxJtHbGRrSenYRMCmg5Hwidxsk9r4gXPsWuKxei6VVt"
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
