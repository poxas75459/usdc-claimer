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
    "44iRZ6T9G8tFVoXq6TASKVWYheVAj3ByHAYTgFK4eJF4Y7dUbDQr7bUayeWEe2QDVay3RSSJA1DcpForAwToJ6PZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PtCYAURe57Ex3yfhjYoXMT9hLuY4DG7v47zStELfACYtP5j8Cq2a9UPinv6nCDf2oCzsMPAQcq4bmKFKFZh7gqM",
  "key1": "u2k4dH8X1KFRrcUduJfNdKXzgF7mUtzXzvgwCdyRP6JFkobrpik5pPyXatRZS2MT8gVzdcd4LUXPuJxvKnJ3x4R",
  "key2": "4uSNBbuzZT3a82QFcQAK4meFZmfUTrDsLStUrbeDxzwNjdFnLxGReMNAZ2FwPP9uwqKrmPNYwb7TipdTYvqoon4Y",
  "key3": "USCcFSSgC8VzSXikBYCob3itoG9144T5JgrpBGfifSLxUzDKMq8TrtNuAAbnuBSVcEsxEP968W1Cdg5WCYmDXZe",
  "key4": "3ihzVF3JiNkFdQWr5CBrRddjBXQ5LA88nzDLScrWLc8xQnWLM8seyLvooCWYHEfEs1dzhAPp3FCKpr5MUxLoNJKQ",
  "key5": "4f9XjZqr9A89AbzRFarQeDCypXA9YtjpGMPzwMr4tzDLpB4Ua2e9kbJbrV3jQAdaD3mXi3JgaSMxbPCoASJcFYuj",
  "key6": "2CuNGQiaJD59k4Q3k9pCJPYTsQ8S2tMTXM6TiKXCozBc5UhsGknCwRVmNqaDxzww82niUnpFqFUL9yavaq6Y8jJf",
  "key7": "5sRwfRJ1Z1v95ezTUgmrBgT9zQE2HM225SXgPeceJ2wR1hNobGA9GGYePvQDGdBco1ecGuiNTHZ93vM1Sm4umDqZ",
  "key8": "2BP7YTLhE2DQ1ZUBVRbN1emr3vEdv1NhqfkUYoq8W48wxt1xtuR4SWC6xUgWy4ZcfS1Yk7QrnffX3btPehpuTnuk",
  "key9": "3wRBzb2GSCkaVtYeNyu2wdDT8h6DZ3XXKfEWEKgnL4dbu1VaTbYq1YP8CiLvcaktRSV9f7598zWjhfDwrsDhqTss",
  "key10": "3f1bna1GpGkhSpqAQc6ZzjgJj4MH3h77V2qh1AwbZBGew1zgRL2fGjWvm3bSBZF5A3mAwCSoKQc5Z2gAd7aaga6h",
  "key11": "YFoeXtDRMP9r8EgmxqjNYboim1uMyD51tLCUDtftDjKLpCkxaFC4w4Mokum8n3aEkrEaSopAJAKVR5ue6SqBNfi",
  "key12": "3nSKuyJ8dBveMToHTByHHLbyLbXY5YifJRHFt2Ts9ksAwMdoKaKV42bdb5zbjn96DgayvMr2pqVyGHupHAJ5SM9C",
  "key13": "nrigKaXFaQai32LMAAxQUzGLTzYV4BCjLB4z6cYwepLkeqiDi8Er3ZrfLUy6PvpKmeoiaegu3qZZ5RFy97MFGP2",
  "key14": "5d9Ata8ARWsWd59meGUSgVEjGk71PhthWVfUiWZHnNSgFZY4P1MDsvbNEfdrj17agchURmYqWD9E5QovDY3LVWni",
  "key15": "4Z9vDVccxE22qe1CvSvtVQjU8F66ZWJqwXUh2wYmpXMdNqgJD7rWq6K9fDGxbv2MWke9vyLRQWK71aKi2ezLMoBS",
  "key16": "4FQ1vM3a2VmcEczFUzD1Z5Fww3nqBwnKRjdNT3sbdxd9gzVitcotxNQRoq7ZY6H9nm5vMuDJYFJHix5kjEXWx3Gh",
  "key17": "5SHK3zpP93sFQ2HdNC1eKYnEyNb9cUc14XRHF4yPPeHBMmYcfXgJFmo6K3CVjABAxD4nusL1d9bv7QSt4Vi7CARc",
  "key18": "3vs1uyS439QFgdqTSnNWzSjqn24fQ3YMkupctLPLQdZsjV1xhbebPvT97EBKkTDvA1Y4M7HPX7nig5r8sYa6ZUxM",
  "key19": "29yZ3pBAycLSVDj6sPZ5YkUv5c5QyXjbh6VGAmic8FGsvYNz34r2E8ntuceqtGAQJM7S57TJ8iUGWqrpFJGQTkvx",
  "key20": "pcNRSGqszHPPWpsKWcoVyfoYu6ME1rxmBazsCkNgmig4geHUU9gigr5dyRc7T4RMfPM8YDk55HZcH8aVGGH2Kd5",
  "key21": "X3CiXviWEGWompxe1ec5SMv8RT9jiRviwNagGBYpfw7A6RY6SdcrTnkpgH2sRAjP6SmL1FboG8hsuXrBsMsDJWZ",
  "key22": "23omVBxHWyeMUvFDCti583q8U2uTyKdSHSMokNC8YXV2W4RikTwEGrYfyis8qzCiy7tx6LpVwPgSrzyj7JisD1TC",
  "key23": "3hAnwMoWwMHuYjr9qAd6fTM5RwTrMV2dJsqNQbAAYzFWLQT8QUdEZJkhLFBvMFRtNL1jebsxsvbhKp6FN7PWC6RE",
  "key24": "3TYpgzRQwyo7DquFT1Mmwyuj5Y15os3kWyV9obfbK7YNFaGLWEYtorBq5jAHMmJUDKULYVfrWgN8cu4k5fhmUKFp",
  "key25": "255c84Fumtv8eKEypMZS1owhJEckCqT3JkzTb6VDr1nNPwBra9hCrHtWhhgMEL3JmmiGE9s6B2iPxQK7yturQiWo",
  "key26": "EdGVf4jV8FEenBr6UkcmYqPmPyCr1z5xK7Akb2qAjeX4FWNcmN55srgx5BiqjTa1zVrY8PvXnsF3B8Ur3PqoA1e",
  "key27": "65FYMTdcUixddf9Nv8e1suH7YGuNKbcdozbQth5PTqf6DTAMsDZzv8jQgXgzvMs5hJpX31pr1DTi4bDiWiV4WKL5",
  "key28": "3ptJjMNDasPkj1ZqCqHE42w8FkNpyW4vE6Qb2tTvGGwZYvEcW8FAPjpKwsvp6TMvPG1fmXwD8nD2FpBAzbWmTQeU",
  "key29": "E9xUD5DjZUp1UzvDhKf686zhhixbWXiGuQCnQACs8pnepxXbF3uayZNzwXCz3wJvthfxMrhxpDaTe4Yr39Fjwfj",
  "key30": "fhV6BK8vbQnTaz51MSM5bYhunZtetGG5qw1pWfFhAj6R48c6b2t1ftF5vMKg32NSxhScKL8KYEuzQwu7FLg6h2E",
  "key31": "59BwCAzoYQgSM1M64v2ZQBkCVgcvw2j8Mr3pRFzTgnyZh2YsvdQWB1cGZXDggUrtb4NwQaukPPwN8csLMGr3eMP4",
  "key32": "3tVkcVs1cXcUCGP8SfYe3FXf4P1rL56q4QuruRP6CKp9TfizdajpGbyjWQHrnhbJrqSTFjLpAfWcqoxdKpA9c5gk",
  "key33": "4KHixSH92wpUK23zxcxCgvZe2ZEYgxrmnqcK7KHyBz4t6d6a8DcQSHryM2gnYrY1oKXM6HX7okxoMcRMK1zuL9f7"
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
