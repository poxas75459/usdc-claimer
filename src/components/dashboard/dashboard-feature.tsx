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
    "4ji1opbnF6m8gUoeJsFLRqxhmNVA3QhUjKecfEa5eVc535Y6CsVGzixKctsd6c8MTDkuJAGhznwJQiVwGXV2Drqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rePfYknTT77wrRiYqnMp7L7VJtjAGeqPgQ2V7hKfv36X7NKfrr9jxMKQEBZc7psAWSvcaKceYAATULjnJqdhj7X",
  "key1": "7BwVhBtmEcW3NaW7MmpyqZeTPaXXrVpYVQCiPMnRcXQrSQHqq9t4EYyRSLdM7iRPuJGbVuKNRthNmhd7iHtLwyC",
  "key2": "7YH5SepvKsRN8j9EXVwTj8jCjQBbCMPS7nBPq62K1huJ2NqgRsqPgtvcFVZW2o4XTpfQhS6AEfYMuzAPU9nfuQf",
  "key3": "4MxGLrJi2puyCJSbqpkpe9G8Ai3v8x2rzyUXGPGJcfCAUPkrGjxSMPsSDMBa662baBwpVioMEdApnmKpswUD1Y4r",
  "key4": "31dnG94Qn7QV33JzUxYWUj2ZZMCGbMDau8z7mfZ5oHcrYhmMfJG58EJdWQUMqFbroySAfjer8MqqHNuGQoPM6B1J",
  "key5": "5aPjFAhen1iHDEQwxX9HvTALTV3CTkhuSre2gqECJ3nDnuprEdnJZeUFCmhssntLmDinEhmWvkG2i4P9v2jPbyNv",
  "key6": "4jzKniiGHjYWyHQsyRFWRbLUxn4hFHGbFvtd2b3EYJw1cS5M3vfUMKvM2HZtiYhhxTYtjkNJy284911NkUMH9B9J",
  "key7": "3bKzqc1FK9apQocaaXeGs9v72EVQ7D7WQPPxr4AsSLLQ1piSGtey3sz4NMjABWvQfbpiDYDHNBtJ6KJ8KqUDWUAi",
  "key8": "2Tv3171RZ1RgEFPThkTY58ijTt95i1yVEumM9CyLbWsCqZzUmg8Tq4tWx5UvUSxvT9aFiUEV1GkpPYjZU1h7rVgu",
  "key9": "dtZofvPAJhnfUUGuMaDfRjdAeaTTTo9p3Z8Lesa8nxmHzrfoYVd1dMZwD4zHJP2dnns7gDHon8zna817bPJR5BG",
  "key10": "4xRn5BmR7QYkXaY177ze1bwiEe95ugFqQrSAvwFawT4aftHJfkwvH5TcSK7aw1PiErZPMa81YSjdHNxty7ugGmrV",
  "key11": "2Yy9GrLYMzwJRdSyrKpnFtA6xoXWWLrdrKRYtBq93BCcHgoeVHcNyQhuqQHVUe3DJsHjezf7UMsbU5MvDbcSozNw",
  "key12": "2pDjLueBkwA2g1pWXCrS4X6J45kkaC2GtroUoEuggLpCYh99WRaUANESLT3NNs6PzUpYzM9DZzrekaWVQ6GE1yCT",
  "key13": "3ZsE7ud4qKL4s1a1MeNktRTrmaCPDkmNvbWZYAoVbBGNSPWvsvxjuXqmDMQ8z45rd6dYeNroAyKUWrwFxecD5Lda",
  "key14": "riF4m4fuo9th2kbuLkQFQZ6rbcMWc1UzABnicdLDsxWKpbqBRLkmiUgGZYW5vukJaoWuCgwRnAwzcfbzGYhQzXC",
  "key15": "8YtrxzA1RAywfXSVhE8wVcgmu6ETETWuMCsP1N4rCSe9ebykpori4otB36oAp2YjFDJXWEBgn12xeZqypbFZcU3",
  "key16": "5QvFGDA4BzHcadB43TBBZ78sY3GenD88qxdkvn1B3UF64ZhWvtVweyFXRRtwKntqo4iuuQc51L4PYNY8Yn6cd6E2",
  "key17": "57yEXAo2FQ6WTZLYJXqCiCKdgjfmLVVG3xpqfAnYw9nPC4BFWsHydb1cdjfnbrknYejSw9uBg9QshngBDcjQiiM4",
  "key18": "4h7gAPgZn4JTCaPAf47Y5oq6j5iKV5komVE7nu6fTceGVKNu9sCzD128hp9PtvxXv5CgkMf2r6VWXNL3UZzhdvni",
  "key19": "471miHKhSsUn9nK7jmZFJfdsyD2mv85Qhn9zurFK2UXoW8xUEfrv1x8eALWTgH2vA9eLqopnzeibXHnZ7YHCszwv",
  "key20": "53pLwwoaAtDQLUHAzRVbSqnXJGSp6QsGXEjUiVDrTjGB69tN6xwusZgAzRrVqMg8uBz6KnkBiuwNQADvvTktGh3P",
  "key21": "TpeGmZx1MC6WGsCABTKgB8uzpt6Dm1VwYXkuEDDWC2sHjR6NKYhA3yg5gVSQWGx78Pfutp4SgyGpdUaqELepUeL",
  "key22": "5Ntr3d6YaigsVTqYFNAKWtr5QQfaL1DME9A4BYCAd26Coz9tZWSBuQ4ChMKGQAGLWpfDyS4eqnkRDRm9k6rJbSkH",
  "key23": "5diqCXxPUjVd4XFFWkHcT6y2TGF3ry8zDF6CZrFMC1J1CogQQncSU1E7xG64Lfs9VWiLVb8G9HHLbmYxVaNfnpCx",
  "key24": "2jbrZLQ7EwzapUYGXeZGTf1f2D3ZgBsh3o458QuBkRy7ypWAC7raDC6QMsvRNQudVH5wTzrHQc9fAU5zZ8ULhB3H",
  "key25": "2ZLXEL7yA71PPkHj41ygENs2XvxkEPbdcuAkoJg3GJ5hP9Z5ptPVZqKFmyqrj4WekYiEvKEj6brv4zSUj7jN73oT",
  "key26": "s31QDQ7wNCeeW12kWkvZWrNUrEPTuKCmaNWiWHNPNFqjSXfSJmAqncyHkyPckyovZusmVfMzLRk6jSVAMxTCV8Q",
  "key27": "dUGFByS2CEsMoyKKMjQksxSpL7VwtJn9cvdTmLKV59eM4yiPufCeQLZGjfVBr51eHHo3uAmQpDwiMv4TH7T1krB",
  "key28": "obV8wzCV54vaURXsQKMxyDUwXystWZRfvVxDksFdT117H6j3oggqwj7UsmoNWaaRmMVR3mj8vjWKGiUxSjof612",
  "key29": "5Hu2FC6T5DjTTbipFvApMaLZheMpb7RxAR82XwRfwwXQbYgEBCH3mdqde5FYU7uPPmPeJD8bkY2yAC125HEEbufr",
  "key30": "4Yi1aXF7mgSrP5RuV6ED5tp1FKK3e3skW4XeMAUmGz69SmjDnLWRjXwXsqso731abxPTT2DT2TCe6C92f4VJCgEQ",
  "key31": "2dkbFa4WQbMegtm67eAhS4p37wq5ijfLVFXXggiDmqTQs1rhW4BpcKUdyBoybVoFrmFTm7CzmGZfqRsxenQhfVtM",
  "key32": "4EFwMJLUa2K831TboiJq39W8pUvz72WCyKnJbYGZYqF46wn9vCKNyZKXqKrMtC8CmvUMVKtnq9kEu5W6Z8tJDz16",
  "key33": "4iXxdpPxmGztGWf8ZTLdQbSvJAdmsro15ttevcjVsewToxSYaTc9s9H5KumwGeL8iabT7bZbSbzNQyDeE82jVRqz",
  "key34": "2yUsj6hVfzMM3aNwbbJqWmiqDxS6TMkFshSCBiEqeHeNKpC2GSu5qUM5ahrEds6RkkGBucW6jmTonMZYQaJymZ2V",
  "key35": "ZVTEu4NAcjM1HcvLqhS2KFhd1fs7FDYNEYGcBCQsL3Zp3Pqt9tTFXi72MAXkRHGdL375DqST3zrL3w8fvm9QRxo",
  "key36": "5dqNmAkFNX64JAFrHZVvQD5APkKnTWMidvwvXzCLURnRHGvCEznP7LhBSXiJGTyttrDfhs8VjYNbdZfPuCXENf1H",
  "key37": "5qCTBANj7WPeDhcDJKSFmfVTkxDhecz2kUGLqr75mm6HiSiPJVnCaxXWfUQNyykCYwtAsJ5T2qPjuq3rvmVQn3a3",
  "key38": "wdUiiJz9Vj9MiwqGZrJFPMtvWR2PvBAA46tjrQd1PWSXjQRZhszT3Qwz5SR7hMptZcjkwdkNFfTUtJH1vBtrHFZ",
  "key39": "3kGBuz5pPpcnywcJPs8x4LV676RJfQEah2RUfhrRfbdEr8bWgfUCikKj2rHW9b9ZvVzr2TJasz436aRFmZqz9x5H",
  "key40": "631Q5J44FDjyghSqH4ajPSHvsU4vVhZYMnWtcrkrt4BD8sX42Jk48LpGMfxzc8FTaR3VVraRsDDMVdWgqsUP3CtX",
  "key41": "3ShYEVqkZZVSbKCyWKA1E1yRmiYbjn9NUwTn8yzhZDdc3D6HdDhRf5SUVpTe36EkDD9Wehn5ch9uPLMDLSBNzUhY",
  "key42": "3Xnh1sT9ca76K6wye9SnQ1mhXjtPfkJ8uvRo6weYP8rpe4dj5P8iBULE1LuhweQhuKfnejty9wMKmZianUvJsj3n",
  "key43": "2QDd5gKinDCTopjSv5nemvqk6Tm4gXSrVrQvYKjSKb5pZucQUg8MeWTv5yaFv5gzzA5Aojzb1A8xmTdfbUC7u38e",
  "key44": "2DQsbc3B3ZFK99SZeN9D7qqL5WZgBLXSjPwFnReQFET5XPQiF1dJBAjgPG3mNjL2j8MJhFtpYRHYRwY2AYm9PuUD"
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
