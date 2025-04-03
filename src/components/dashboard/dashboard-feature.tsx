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
    "4yaDmm5JhZn26BZDMdA5bYww8R7gTFwvo6uthMFw8RxG6HoPQEx2QFhuHwK9fXA2ReGRw4EbVDvfT18fVxFtko4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sPX31YkTwEt1gEo166LyfVXdxGGwbDhvc9iRwb4eJwYiPxND6CTGDYZSysJfRyTWFeJEfBxpWdhioU5ycZi7AP",
  "key1": "4QNPz6dWrfZzEfWvbN1spTSVBSkpfL1ad8QtYeMNjXEVhWfU6uayccK1N7qtXzTP9p8PdvueXH3d1Eyh4u49xwVY",
  "key2": "DSzj7xsmbGoBMc5Dz4xTS21qE4dCsxLvyG2yQvdVQugCHbU28gyvNSz5MRzDLeT9fbe6DSjSuR4H4QkfRAYxR8a",
  "key3": "21Uo9KZkzhP4CzWg6WDehfuMumPjhtFWExe9yzAyRAJCC5kz2vrsuEx2rNxS7vRghv36iVkKTjLyrD9c5x3sCk6P",
  "key4": "3YLa2DuJAhCDpUbh5UCHZ3TqNg983P4QNc3FtvpmFbbqifQ9aBLdL8WtnwakRmsBUSXCR2XRpkoxQ5vzP1yapopJ",
  "key5": "5WtjVcwiTQ7U3E1qhrK8LMR7LdagHE72Z4zFKLGUPqN6LMUyHJcEb7CAvvtXP5qA84GC1fmkUhqugjT4DZzGNb6a",
  "key6": "6mYTBad111ybZ7cdzK2XMoroD4zpeGPwrqrHB53JtHZUHWdxPwwPAndbKeJajLpBaqqJyhEzd7pS8YN7GGBnbYj",
  "key7": "2LqD8eVXpiv79Qvh1t1TaToFGfHjNktmccfvZK9v7E6dLvB4Ag8hA17mToy4R1EXeJvdCSUASS7n2aH9xx6X9ytL",
  "key8": "4jetcHEP91UnbHu23tMhMjXJ1yoUqh4gPAi3d4qJKtoPATHpN8EEL3MFEZZWQZk9ydPiQ1pwnTCeDJdESoSJP5nU",
  "key9": "2Q25zbP3r8xSGnUftk9DmgcUrRXVgN8KAU43MRc2bxJXv4HeVCmxEwMLrRAKuZxjB9ooNdfXsP9u8THpzeVJBtQP",
  "key10": "5c3SUEk1nJK5ovTw41yfSEMFpW4qdxvjbfnJqFSeNjeXABjqDXC6PaVb1pm5bEyZqandSaHfVqzwzV9sVDCDLNDP",
  "key11": "2p1o6pg8H18qMa8fg58J6sJ7F1hjQY1kK7q4KCJxzgRVj7qjaVku3yAXJdDH9gnJXxktZtaixifMwDCiFCyqbAoT",
  "key12": "4nFgMMyeiMPaaA7A8v67davhwzaTAYHiP2LRVaxd4C7qYauV9j9tTCSNJKxhcG9LoBdKaYokH3nbXeWMLXd2zBWp",
  "key13": "j1zRY7DjKg92NZxzVDZitMGy3YZEsTTVqArY3gpVB5tCxMMHWjx4PjxYfSjcYR3sDLGjPsq4z3EJ6a3xTkon6sN",
  "key14": "mx7Zv5zgEs8L6fxXwQEAaQCftCGG6SXPNddR1DRziTTWWc5AGoZmbi4EPrauHJoq4teSREsikhmtSECv9fvzRFa",
  "key15": "4Z9gvzX47eCf9GvYmDZ6wu3QZkXDkjTJVECRcNVipPg3wzYzQVBrbGQo82wVUECXeN99ZNoxLceWTJzBWHbKXswk",
  "key16": "5BqGYoX1tjcfn9Wh5fsZQPaZR5T15Pwcocs7uRsac5p8oa43nXxPcS11h7Fi7aNAF7zGhuqrPJenoo2aU9gtARRB",
  "key17": "4cY8JLpuxWPrht4Q4jQ5N76AHvdSDWnsr81oEtRL233AcRXr3sQZkL9tAivVWHVMZPEntscBDDwvsodKh51i19Xp",
  "key18": "34eoPLtRFacUepQeUuBJcEqaXG48WAt5mn1bc6D2WsP1oziuTfHRiNxpxhKBWNxKvg1jdzNajfngVzNKk4DpMVRk",
  "key19": "3wdxuTwTcxnwnFJiihkeRXF2UShAa9xpNmcwDBVFu7yZDUhh2sLuBFMahp17axRvRauLQ9exfyN3xPYtRDxx7WsU",
  "key20": "4YwsZP9hN8YqWdNgRRu27nfRZuRpNCZaVXTzfDEGKHChGtUrXmScEnpJCuqUUPNJ48FXk68gjtmXCRs3cu4sypTH",
  "key21": "5cVUunh4gNjxjfeh5orkqtjXi8NB85MVnzCqVcoSHgZDSVPmLCtVAXovDVFyFhgWSdh2iEUS8brHsRca4dHv26iY",
  "key22": "MeQ3Y1ca1cBpRPM8g64ENGxjBDpzQxhk6fv7Hhkdx47kk2e674oWDnPypcKTCCmr7U5iCGfmrMVFWh3QC6opmW4",
  "key23": "51KTJgxGrTWtKMCzjyPFfcBzkKqBXsbNJX3rhqABKguyXoEMDNscErciqWz5LXx6rnTKUqyBYCPMByDVhaessyn2",
  "key24": "2wxSmojqEjYxcFqoGckCWBeqHJ5TECobHMyaSuNgqRC9P7qfAT6S9ycYxq6ZJURUc163tSqxXMEXFtyvQAp8xYpZ",
  "key25": "4UgXCcZU79UYavBx9fgBRgsZPPvgrtzq5Gp4uw2KGNE8mRDYuzqMNStNqR8ed4MUNi2PxSdrEpinWYSMQejkEpX2",
  "key26": "5LokFbXJQ1kZoYoqBJSzm4cs97WffUUXqb46V7WdRYLgmm6fALcrA8C8ctCSGXcbP4sPRpntLYrGsLfMSy9LGcpp",
  "key27": "2WosYxPvLKmw1cAcjLnXPWgUnJvbaEdkEhusM1yTecciNiVdMyNPZ7MjKxNLj8d6ZGQ13jvChzsFPA6sx7fmfMJp",
  "key28": "5PYWpX4MPa8L8xNZyf5kcjFkgbA2YbpeMFeD4r5RH7mJacUAbu5GU1jURASTHySwkrDKHbzyFoD8JS3dsjWGTMhV",
  "key29": "4L9gjecRSB65QVgAq3E9J4fjbWGwJsPSUn2FCKUAcjQRXQm8imcJWXATUqosQnSf7MeETYCMdw4qB5NZ4ideZ73x",
  "key30": "4NzXiqP9XRuH62izxRibqS3yaQhGbWttiyENpNmniatbRpS3WzFxZw4sgiQAkW4EmTZ9TZ6xCppwsYy9WD1YmNgR",
  "key31": "5UiJy2iMgm5rquLaecRkKUW3LVvP2Fw31XyT7Jnw9ZVHU8s7ugxcy3DGZ8Hdv76g36sqo7bjRb2er6rTfxsg59RW",
  "key32": "3bt2v4v8YVF9TNatEGKt3oMZuCZqxk8U67nws15nvHmgA6crjC1KSGzo3FFid4nfUT1XrWH2wBbmRNmianhPDydB",
  "key33": "3J3Aqpgu7JnvWVFuyxuEtqjEyszFD4QjArGshX8yvGsbtrz7V6TqqnUgwyKn1Ms3WPDex99SfmYAbtcPUHcyzQLd",
  "key34": "3XvRQksr5iT8P8iddWk5XW4FoSSgWYmZQ7U3FDLCEHtk5mHXo1bTBU9DCS6AqS7wwqpHn9rbSAxc4sw4gxFWwj7h",
  "key35": "5ddJpfpqADvWcCApcJExi6rmVqcQPC2D5J1MoC6ZMqxAtckSz8cnQwf4dRxHAC5TsQgrSQn8ZuuY8nhzHBPiwbdc",
  "key36": "4Uzwxay7T7m7QPoPcggh5sUFvomxb5yuHrPwXQWpPyyHDdbJFEhmNgM8btoowzWL9FGRSQUZ9vueF59VReGXLbuW",
  "key37": "3PRg6CJTHj8ZsgZMrbw4RF1hXexsRGz57cgHGMDQ5zzkX6yJgCoshJtHkc88wiMib7Y3Xb721RS1QBVWzBTeGaKM",
  "key38": "5G8RhUHKZMoGBr5pcm5VLL1GjqyPT11bVZdwdNYbkVhr1VoVUjvPgeDGmuAWsaPZM2NUxa4tLQnRMRfc6YaeFGks",
  "key39": "2YSDiniBFbp8JF1Et5p92TCcnLU4Mqry5fRumXRrZWYvcHawkxa7g324jHPLsA3et4ZC5vmKRTiTx1jRob9vNJqQ",
  "key40": "5AVQFs9yYBuV3Y54Gmjqs6xhhngmAWMfsUUPSAGAxwFtBLvB66rTZMx8EFEoerFTgQKkQn8RjBu1S6PVysNsw9pt",
  "key41": "X1o3KWVCwuqwWL2T6y1QFAuL6cMKkDyvvVqXbuVmzUBxvsoZorsXmTAgBUxYeRJb1o5KDvJxBgDx95JyDiHTocX",
  "key42": "EjXAPvscVkfvMivJrhLhNaAiJrLbsWRVDrwC1zZbSLKL8yjTymcJAG4pZ4339mNSH4TfvwutZ4HyuNUvBtsnfNG",
  "key43": "4TXvK1WwBL2Cm9R77CPp7mfXHfDuXXsEqmaQ5UqVqBYb2KFvEk97GnxSubm1FdfQoxonnynAznc2xpxHFqkwgdZs",
  "key44": "QRnzDV974iL6Akg85oVpxUTh1XGqfXGoF65yaLXkbtWLatKRq9fVyTp3UW1FzpGocGpddRqWneavaMtnBTKZ3nG",
  "key45": "3q9LSPLZvSpwQrzqrC8E6FpLZHLaMfzm4CyQVy3e9TKHgYSj3Kan3P8cfFxdhL1PLZxLnZLyj7MKBpFkdvvvLdWV",
  "key46": "5ucRGvtvUZhkJTGhVSKoP1yBY5i7CpCRMxVEAWWfpMs7PqWWrX6yu3FGuJKkfx2Hk31SRP8rJusVyKVKimoCvMk6"
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
