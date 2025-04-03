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
    "2VuXc8hetTfYiG6GdSrMFY2nsPwttnEq3omXj8QdUEuoM9NpheXLN8ArbAzUCB8cjw8VMC5GaUZJRgWfjd983qCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q4QqHxtNcDzYVuTRtMeoZ5qtY6QJWJzbZQGtDNy1WGeWKxAUyB38Zj8yAikyxKvNTNzQcyoZaNE4KYudK3Qqf8T",
  "key1": "4m2VHVFpsyvvuRR11AXPPoFLoDXtDDTWNSZsNnNbDECSSgSy6LiosRQkyX43MbPCJZLWqwb9YjE6vdVdEe9r1jsR",
  "key2": "37k7bURh2zeZmD67t52tUQM9GEuDVBfr47qWWpAQKQWD9o2v6Kq7xaUNuoTB8t8h7K6YXdvSkoK1VgqCWSjqdXQo",
  "key3": "EefBBtEZjdUQ7dZLh7RZntJV9wNeqSrfCXCjk8QQ6gwiZycQbUch51T4EfLvqR97XtuC6JUGwpBpEUqW7TrC6MH",
  "key4": "Mvy4PRhWeydBUY5vSUr1Zhjm27D2DuitGmcocUfAZ3ie3k9eF5jryMuKWTWGQTzRtejH3g8XsKzQ2U1FQFtACmT",
  "key5": "2gTU2UXFqPCjSG1pSPqwGuZXYZqbSG3UjEcHQNL5LDHdLg3YQEBGe5YTJ5zJaq71BLToMvKaHn2EPywnqwHfVu3k",
  "key6": "2iE6bNZL2d8K46oyzzRN4EMgj1Lh79gri3P4oHPjXPttYDZat6AneDRKGB19Hbhwr8CYLs7JfV9gHYFkVFRMECq4",
  "key7": "44BiEpXTBuLaUkzXKuwMKXJD1tZpx3BrppAqzBGaZWAkWrJknjhAUnk726Qr6gbyMptXFBHk2e8gKYbRwe1oXzDq",
  "key8": "4J9TEmKLTcAi6gBKoPk6rAr3o3Rb3ZsqFFySLMcCEfCzV8AuhmJdHy5KXdVA3fkYCd5UxbQKKcawreWJ6q5NTBdZ",
  "key9": "2sjGo4Kq1srQP46qorP5YUDLZwZHtzpHYry8aiq2nA8VS3F6T95HyQFFAXcSqKuJ1jy16BBXk3d6EB6eFuzz4wBP",
  "key10": "xQ2GQEuvASzvHhiPUizSKZH6qPzgUZyfe9mfrvRChC2qot4YtTREZqZKuRxpZqGkMMZU4Ci5K1TRSg8K1cLhkYB",
  "key11": "3s7yKWvkejLomgWd5bEqctzKGh78Jcq7sERqzATrFJuNVa2bu8LPKuAwARoRrxgHvGBBWoYx4EkmYUPq8pjEYdqb",
  "key12": "676ssCdaDjNJDSbqAfhGjvGDCJknU3uzxwpZAwKvsHS6Xrp3QeyjzbnEyw9gZ16FoLPbiauKNhNPYAiEjbvGSXgB",
  "key13": "2wVZBLfTfotWsaGDMGHgPH66TkuHtBLHupUHj7xm54Jfrd4eFpoXLa6PJUnSS4H3BZYGA5uAXMJkmyGqmfMh9YJ",
  "key14": "2wfSoB5PNkJphFzxnixpkVqCrYVoiubEmoT3Kc8JNsdvmemQbsMsBjzs9CAzngJWhMYrhe36E8hCudfK74hu6Cda",
  "key15": "3RxYqdPgKRkdxikqpwzcd5XSU14SRGGshbU2NFKVrApPaKabXQSnMr4rnHuWhgCuLo3XKD64iWZEYSbpKme1qJQY",
  "key16": "5ehAyS1HcSsJJuPVA2myg6zGWu5yTDWP4JtwsoPZmw5h7eWkKr8hkoiVgSDAsqCNX4GJ6Udu1kKv7CqkiEHbpsqZ",
  "key17": "5sskwKrdSk8AaCfCVMv1tfFGjgHBJrL6jHNnyxwwV1stHJaaHV6YbmqZ3tGivJoHgrkWhYEnj1q7RWjhG452JatK",
  "key18": "3RbZVZK9fJVgLu9vsguQBtGYcfn52vQtenvB8ezhSSUof6bRFLN1CV6P12u8GnrEtCeasqmHo56F7Fpdw9jxx6P7",
  "key19": "2EhoVR1k6ixN6ddcCTc3qgut2EZmf97Cu4UCfk3k3KjxSxs5AvUdE63UsdkmYeNTgnabHVXJ6MB1qWdvjghzES3q",
  "key20": "5SzixzsnFHgdQRUv5Tauu4bnsGxbUsUANDfPpukQbKfKNhUiPvvd8KfpHtF2m8K32kWczqypVsmTnS4n4HzT7BdC",
  "key21": "2ufWggYjkthUAUYpkbxTcPpMMTEW49HMS9wusBiV1MPJejtXF5HqRdspcwZVqfx6Q2uWHRAoi4qdbB8ar4J6UC3h",
  "key22": "2QiJBrGLxswgNG31C82zTJbFqeW4fnLYEMCQ1t2cmG1KEhTSJRCDCQqkDu7RDhQCJhhrMWj4tQHdxPzgf9JokCYm",
  "key23": "4DL9r1K82LEmcn5LQZFLWDrUsC2oW4yRwwHPEZd8n1k1c64Fj9HanN5GKeGULG4AgHpfoVQbPCL711ja4NvkrLTg",
  "key24": "3ojGcnCrY851E5mzRkAJ96MQGTUa3VHGbnEPqW11vsbxLTpno9NFJk2rJwEemT6bufDm2tBZTUmNMgx2W4uD4nrd",
  "key25": "5JAiERirupWQEynNvJqecmpYwZRzbMWQzZRw9fs5J8NpVHwmMV3vzzwSTbdUkHSVJWqpLSgdcLRWow4BkXQMzBUg",
  "key26": "48mfB5Xn5vezUykjr8KDvYByhg9JpnUSegAxVFYZFnRHZRWP45dE3Cywwrm3oeyQ4QuuBrxU3vGcgGPkHdKKjDdf",
  "key27": "5DxeWsxbyB9a5HqWfTrHQYXaGDRdARq1HScGwKjK4heTWz1AHeoWjYRGEXCyY5wizwbkwi9RCKQUdUV97xYMxx8Z",
  "key28": "25dMW17xP5MqpHoeewUzvJ8gzdSU1H1Gq3x4dXBxo1FjmVrNSM8eLz1NFUKKFFvWoW7n7JqqYrZmD87gK8yxuGeL",
  "key29": "4N9QAXSDLNW8YZjHHK1tz6iLXfqH4QbUbwHiKkMACxAGRiuEy9aJYcGvoJX98qBW5nrXJNbED7yTR2Xz5gPDgfjB",
  "key30": "3ueqQT6NWDaeDuqXXRGAQJrCTFqbMJguxkBk8hi1MX79V8fmwKJDFszUcJZdqcviqSUjCjjir6NTMfXLpU4HEqK7",
  "key31": "2LoUTJSR4tuJe8JiZRag64EGMr67HEob9nAv69vgmjvEhfDGibPpPQdY4z8d4Qz4MhjJ1DXhdp8Z52YryKSLrX4J",
  "key32": "TRAYSJAVjXcvHjGj42GUUgZB11kiBZAEf8X2q1Q9LA7bj3Sy6Z4iGhv9AdcE5tArSzZSgJwW8DCwnq8xFxuHCJ3",
  "key33": "FSDVrnaprfid2SZsNb8BRWJ4Y5ZEMa7XHXLz6yTLK6aPf7uZoqJv2auB716KZKsby7XQVz3qyTLtjf2toDCdb9f",
  "key34": "619UZVyriyeTiX6DcWxaqKbHWw64uQVmyoNT9XsfDxnv6UZozAvWXXP5ekLvCBeiHtxCz6jyyKzq7paniVzBKnPg",
  "key35": "4DFV4HiamoBC96Soyt5pFH9cF8oqhD25igtuMfrzuzd6H1tkuHtqGJpqnHYQmQ8zgrjvztH8mB5eL2YENYVnJXDS",
  "key36": "3vomkBUbsMLEK6CTkNe51ByFg6qWZMgpxzvQTZr27WnU2C5jJoHgowgiXjMPa38EgtKc7ftfYDL6oUvtj55jsryw",
  "key37": "2xoYd3xZyph9m6516mrmi4gDiPS2nMNHu4hqVLFgChGfmpjDtSwSLsBUBHG3Ro7ZrGSqcTQn8U1S3HejaR8BqeZj",
  "key38": "4hhTPjtqKqpLschXrCs7SwkCc7bJTFKjgPTeceLvpG6HE7CASwNA9pkdV98kT4EeaTZ2Kiuoknqaf3B48YXJepjF",
  "key39": "5gS3ACaBQVGNBgEBkkPiS54uRuFVJLTXNiSDJtUWM4TeFgo2iZs1QtiLwFLLK8Q6QADZxHXGjYFzSTx8yAd56XyV",
  "key40": "5e3CUp2FjwnWUuLfCmoMyXCibYbqJEypcNU5ELSjkos2i39ChxsBHZtcT1Db3SwUFTVNPyRWrpCg73dpPzamUDmt",
  "key41": "2zeQPweRYkRjfFopHpiuLZEECBv3HVWnRabavpNJPrBBnN4jegPDJ5YXfYTyDKs2182TexTagz2uMMexjeoDigN",
  "key42": "2vASpc9t1stReFz8Pe4GzPmzNrt2y2iN3E8HmTnN6WrZXUJ4WHA5huWcKLSdMkmJEYhQyBdDaQuE6QbL7Uv1tFsF"
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
