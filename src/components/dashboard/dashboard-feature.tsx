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
    "2GKtdBQMpZ1RYGqE2go23iwkbD42FSrthX4dBrdjxyxhbw12HU23jS4p2XfL13KzUvWgS3Upkz9UuYSUyH5t8JDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DeV6CSNHM4HQLBtftv1tEMKNi7hHfg57G5jsHDEPpigzvJbp7aRs4VbCBJrT7Kj8EJkkJceCf1GM991YPxCmWWC",
  "key1": "2vCNBT6XU6aSLk5u6PGf5gstw6DFyhNVkqrV3z2UASynCAFxpesotdpJvqiaA5k9erETQSpLcmLXDPR8KEsNHGho",
  "key2": "2aonq3VDLfbpxv8wQU6GaeiaWkvoEk7vVrvrXxv5GVj9AzM8zjbTRN9nZVmQGeSbVtAMsyxcmYSTiDsHM2o6b7FZ",
  "key3": "4KPfmDkK5XovKfz7yZxgRD2r3xbirCvziDz9S7M5QdzY1T2Uy3FPiHtsvZvCd6RotyVF8aUEvWB1YNppo9d6u1x3",
  "key4": "56QnEL4jCP9q9LMddxyWvD43Ykm8Ac1pmfKaW6kXS1yLuavMWX84WZ5ifCarFAKraVu8MkLVMjFqmGYXgcFFKR9g",
  "key5": "4MuunB6UKtL459zyZ9aryHLvPyJamDYTMYivaEVCPyf8R7XYuDHfbhwxZrzG3Q3F42a8gscfsm6entq13UVi7puQ",
  "key6": "5VP2J5FVXdy42oUCkbSVasK4xPocUTXy3YUfnygi2vCRrNMgkHCnQCQEkFm5CXryvGg5ENi3nk7a4NkuVdfup2WN",
  "key7": "2Nh3FnoHhQHddYTaUwRpxupmoQSj5zepERrqMUhqo3BokSUXfSYXHZB318diH5R6RhLbKLtqh1gRpqTEajUtPSS2",
  "key8": "5LBN8WC9yxRmNShgqAGwuVe2FZLgttMBQzqMoreRYS1tYqVvbz6pXgMU794PwcRTcHybCJTz9KL77x2LwW6rE28D",
  "key9": "2PQAiLwnhBkYnk71SmBspCxgcEKdrET4QmgQ5KZ5T4YLa3u6GCEYAHpqiq3E95mkNVM8MZKL54t1n9ZvTLHcsWkV",
  "key10": "Fj9QLC6QLSaahHg9ireUFwzNi39sAoETKunqFijTs313Y1pSq36PLr4sh2iceKKvbnuduBgSsjKUz7oVmYWyk3H",
  "key11": "3Tokrr9eNJXhrSGExZ5B2ToZMknsMqPd8entccZRhrADRGvV46L5fWaH78opLVZVS6jBgXaFvgbBAu3atzfMoJTF",
  "key12": "2crMSmVfRaCDExXXvJMCcUaKh93hEby6zFBTVUabxg4kBAYthtxkfuFgZYwhLQLE4ycQ413zn9HN6SgRbFv5MGQB",
  "key13": "5t9wq9UUn6RNaiJ8dvxhfjpdpCqeYR7gHnt8Aup3KyBUB1QFdtqs1FsTiXFgMuNd876QtFCyKuxFSBquzMGbZXH7",
  "key14": "QRisU9xKEGo9T34CFWVNZRcs2SxDR6RinHrp2sLjuJCNFXqiN4vugVbtei98vmstKg36NMBgTx1orVqnCx9kNJz",
  "key15": "pBqyiMrQUJCSqL4qJvwSLBhbReQBMNM89vEwfLLmC8akyvV358jEY3HHcA5jbdMuzhjekiHufEByaMyJL9D4Fmx",
  "key16": "SjoAaiUHS8BZnqhyFV5E6G5fmE8ebwxviaQgqDF9VF2uTWGdMs9Xaxyiei522UeY72n1ywo4Si9GUVNDX5PLCSR",
  "key17": "4ut7Jow5SGcmi2pXQG6XqfSw4dr8Amz4wkGEewPzcHxFs4Fv66vrbToQg68KdcVaHcSsrVBEFa97umrgPUhvrVQQ",
  "key18": "bCCE5ugg9eCbfM9mrNj2vKjmJaMubpWwuuxkDXbKUbTm4vVrpgKCbW67n9CpqBgLD2HT7DGgEZbonsupyYChFWi",
  "key19": "47W9dchMwe1oV2zSwf8TuAKpC9yoA6x4bdhSo9c7Tsriz9NyjzNUF5U5y7Vn1yVGR5D4wCkVe4TZZuiyA42ZFCmX",
  "key20": "5xojhitbvSdbEPJCWaVDXk4jJBPi8eJHZQcJQjWuusgPyqPkkAYA6T92z1YdChHNWPRCtCCDABnHRXgmbr8hVWjE",
  "key21": "E91X3dE9k5GTg4GYWB931tW4pTMkMXkVK125io3ESBUgUikh2HgGNbs124s8SjUgMscpGLVoApUW7Rk78ZamaaC",
  "key22": "5173JsEFGxcZY6qDYJHPLn6WVMcrZnWGqj628tFB6BCZ3GMxYsuXyhLwp4mwJjQsXAJhtG4FSjN2YPiK46qRcXw2",
  "key23": "4sHLMKg8nRE2JjCF3knuS6Cbi74xq85PPLxXfaB9Mq8Fuegwq4oqgCLPniz3C8mXtWbxuw9CyhCPg5MaC3MQUjNu",
  "key24": "61NRdbGWSPY6wFAKEQh6sTuGFB64fGBQrGAuA7eqxG4Dq9q43bqa8M4M5CUW9UCL4xRGDD8BRF4gqyDxZeS7G9EW",
  "key25": "UJd9upHH7fzUadCuYW8wwHMoByX4JCsGuYSNn7np7nYbjiwpzESYdYjD7BUYHP5YWo1PNBpv5HU9ioSFFxM2j7F",
  "key26": "3TSN7YDKf5vPJhZTyh14Y4kTUoA7RKJZwKDXsYzBn3vs88EvUn6uB3x9Z1jAt1RhVnSV3cPGHGhyWCBxKs8YUcs9",
  "key27": "434D89d2LPoQLm1SpjUeReV7upFiNsvAZXvWB4EcaU1tWUhMYkTD3xZKy2QTFMWZfbSScHd2NUouUDyb6ErPJSEa",
  "key28": "3BXbRdjKmG4fcCLsNxTFBiUCiY5YjDMzwWXpsmA1vJq5W1tSNoZLetHCCszBGaFFaiZyLKbeCgZTfHRqgzkdhx2M",
  "key29": "3oxSwWk3yCzVteNQ165MNvDw3QgXok6UmfwcmU9WwesFpTmsp5b8voUrkcohZcKyRJj9vjx3YY7Hi87Xdx6uERdE",
  "key30": "3oDejCe8nY2nGNFHDaVEMgco5GWq7CERhBenupMaUKwwrXXouY5fucMTEnVHSnWd39QRXPnvpZbZT4MspMGdAgrX",
  "key31": "4nkFyASSZ5oy1Nt4UYFMcYs2KKdC7FkAuMCXKRZjpWwEZVzwb8pEhpPbY2rQSCgttJT3MQDpdinYzXri4kwu6sY5",
  "key32": "Qw2efzRVcDq3rEKuBHWaMJfarJBo1h2YBoAWrCw9F9G5YjTnXHrdDa3opAdWr3VneNLovU1mkpDMnntFkjHLwpz",
  "key33": "2Ep1RftSCQdcYnXMDPtHUm3Lz9vG1fvqs2dBfW2M1d9Rnvzzotvq42YiX1qhPnhbqF1QgBwoVqv8EGVmvgWUrSsU",
  "key34": "5AMZA5pTtVkddHRM61tvagWPQhpvGfNnS64vcVQurWf2pf7ZY6rFgz2hcywqNgwPQDXtpNUBPNibFd1DchEuJZ2k",
  "key35": "5WNLgnh1ALj4864kviHh1vUFcQQTNSeZ5kX5haXjxgSbuizovLo5GcKC8Fgi6coCeFJo1Ha4C96L4xCKmsvP2A56",
  "key36": "W6rzmWzU3a5ynKB9Mer4V8UcciVrjt4QNqNsrMSAsjGB8bE6Zc5WjP8NGjtpQAn6vDM7P6pdmrZfA5yhzPXAjWS",
  "key37": "v5i3fjcXTMGRnsWpoxLbB6ko4neBDRakz2hovo3v6U94uK4YEkLX6XrLoo7mfdfvf34cfsd2Ww1a7JaQgAKExk3",
  "key38": "4roq8W2nCgGLic49Zx8DGztnQGKvLNdUFREuK838TcMPsWpTVADKZehKqN7qMPK5P6bdco199rA1wxFkscuCnzbj",
  "key39": "5da2najRMrTi8FDFe6cvdybzYzJ1YMZe8PqqgwrxXwnjPe94HvvpPgvXjFxwz8VEDi25TuWkD3sRcqBvEc82GCPY",
  "key40": "3DMongG6E4ZcJ9UxKz5aEfgTRqUiCFRFC6yjzdd3mpjJi6rs574ezu4T7Pjj5joN9romiyY8GkonU5rpDYeRihy3",
  "key41": "3bMfyQdB95EPoHL5ywnk5uPBXAXq5MwCLR2Zc9EAyCYzd6PgfhiPS4nqmneAiegNd5ep2BLNvZYeT7NMkt19xgrW",
  "key42": "3M81B6oja9dE3bKtxgVy9PK6DzHbhim17DvvjBR1ySi9oT6Dvvdf6hsF6NisrZucfujBMmgPDUYPwWxPDwH2qbSX",
  "key43": "5nffKHCpD6AS3cP8h4FahZARNYDBQWD8GvdpQGotMB6e23UkmLfKSzAecKXWqZYnCfyBbM5NvWWyyCpLAYHjWRFF"
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
