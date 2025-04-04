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
    "31dWcNPxYRTeTEwawJ45qgBD6kuSMrM4Gd5D9BbSuii7QjUFuTger3CR5T5jVeAReQeKfLjdshbWoXbH8S1RYKYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjJpBMa4JE8urYNsRcS48Sde7d6g9BtpRqqr8aVZT2EGm8GBafHaHMUpcdcXGKuQrbQcFVXVAvF1TU1XJk9hft1",
  "key1": "3zxAYQkNQG6Bmp2yVkyfMZMBTj6KRein4K9yKVmhke8Q1HUQAksxijupfnCMoEDq23veQmDnVEkjMbrJfGuZ2uCF",
  "key2": "4ELk2Nr6rd5JB7oY7pxpgsL5gZR67RNnttMJcUku5XC7ZAZaadDmFqeFeoxTDk2HSY5G36Sy92RJ1LQiubeYF5FB",
  "key3": "3MgbvzLb9U9diinHZTynFqS16o8uAXV6Bi9vJPrq7biuWtxK11oF4UF5Qf7BgYeebJsG7gdyU8Q2jKuBBabKZ7Qu",
  "key4": "4EVDH9UAUMZSNpyYUVubuHHYfQrSWMCGbGm6uqRiU9LPgEHHRTo8pBtVCsvh2d3MVuGR89NgdfpRWHxyJSMXoMtP",
  "key5": "3AXxiuSx1MtMPquqa4A2ijUj3Na2zwipby3dskh2ftp5MR1tK8i52AoiTfKEFMLpF8u2xydXKHSfq1KczLvabmDz",
  "key6": "3sXkGJWWybSAHeU1V25jBhFLqCH7Mn7m9wPJG5mrRecBeLQfknU1hq2e6G1SeK95L4w98tEwmwFpw3BskfambHg",
  "key7": "5stNe7FojmEbvCVTy6XjLDpV4ep4v4f8BkTMPLes6TTAkSunEm5M7JKPytLzVqR1if3Sr6BtLoKtgtrtUTJegKP4",
  "key8": "3et6x9KLvkkfPaf8eFdRiX8nokywff766t9RXfz5gEW6xfAs9ByJ75Hf7fU39tWEWTGqeYjmpsGCojpYGqrGdho4",
  "key9": "j7WgRAHYKLiEMZ1JaSQNKAzgsRkK5b4xRqucaU2rm9gxCerCvhjLzxnmySQU9VH1sYaA7i7SFQdi5WaZqmvR5Tz",
  "key10": "4DhV3yf2vH4uRrhmyFHuNecdj5g9So6VKtXR8XVNcMmgF86mDTnWRza6bYv2vwM8hiRE8T7poJuk4VmRCTfnz63T",
  "key11": "3RgyVjhEiaJg5rS9bdgHonAj31SQYp2MxvREF91dKJqrgyJ3b95ZKbMFh78BtybsTySJLnWcFBgjkvjBJcfvtpJB",
  "key12": "5JozHk2knLaxFpyF6esfmMpdMyGfepiYrzWcH6fs74QKLvHvzxZYGxsJoceRAHXQvGVPGLN6YXo2warjetkJ4QXU",
  "key13": "5ss22qK79eXTNsf9CWVGL4k5iZ1SwBnKNFeZxW2p9GYdmWFuYVzDdGYuTE5NRKfRys4BVbFLRrrYXYVXpK1Wz68X",
  "key14": "2jFEjmgoZA2MWWbZd7GGEhyKcUxuLsmgJu2XNfyrcT62qbP3mCe4rtT7tcauqdF1yAJ1MTQCMVwZthQ5XmX42WyZ",
  "key15": "4r1xSVqrcXb7Q7uo7edCeaqXg3KK7kNHq69xFrGqiCs2LpQ1X9xFUtUyg9LtwdZGHTPinRfhiDxFB4efXUKGDAp6",
  "key16": "5xcaNDe8ytFR1qXW5VokWMEpYkfjW6XwMV4iNQPDy5M1cSEn4NJatqcjeapMDNGXK8NTDJWfsy6qNpJBAc2fQQNL",
  "key17": "35Q98pCemg8hy79UjX3L1jj5959SsR3oCH86YhMMcxFHCc8CL7Bc5sz5bHiPtWdUyindbYadtW1tt7sFNPBdQsfv",
  "key18": "3r9iXTWRhsqYSTSE4gapX3JovJ93p3aeVk3niVvRi6pLvnkQvUWj2s6cgftxux99wkx3zHHBx8qm7bmWGvRdGtJ2",
  "key19": "2wQWf4Duj9JvZ4QAwfQJuMBEo25McNhETXv7ea8ZzatD9vH2u4Qf2C425uXCgMW8pSkKwJY5znr2UYTiTLsvhJVi",
  "key20": "3NiMHbGXHUWwoH3CZ7CPynHMc1CX2vBMuEMMQzvbnw1LrNoobCEjnTU5xpVn3XkMNPxTXY3G29R2jWrsJVojin4p",
  "key21": "5GK9smEADoUzaNUAhQBHnQSULgi9om92cvq1swN78Syki52kEuKB22brCXu5eqxktuoyrjjy7EReoa6YnzxSetLC",
  "key22": "4vT3KRScUduEv5CBrgxvsPumiSZsgUzCyJEpeyxvvG6yr7HJZrxmQhudRZSWQLWa72hW3NnTUM3KRMY6m4iufEje",
  "key23": "5dTq71k4WKUDDXAGkS7gRZhSknrqfCK5gnUPXZjVbtCcFaStwzJgrnFpPyrXZtqzs6N8Pi1vzzewJAxhiPhjxFYF",
  "key24": "PyFHvwTPUcNZY4LeMCfYNHjiSrqRkGVXkAJAfwZdzoUKWtTHNVbS1LgVBTtwvii97kBhwfxBQSAwTUhtymXgARj",
  "key25": "xjWMaz87AJHvEDSK51uYARkyF5SCwWJ4LUJjeB8M4JCDvdyaFCdBm3tHbY2RwdL5tjkyyiW42Hpb5wbXg2QZ4M1",
  "key26": "5Nd2L9J5y9qcxqr6JRHF9BLCFnZwmDpiE1b56J5uZ37AM7xZB13wRCgfqqjVY9AW6reRHPh5z8PDhmcfUizoy48n",
  "key27": "5XfVcncCr5kZorEaVr2egZ1WkcniWenSMzezhMnpMEiCppioRivg8mR93JPA3TvKHH2WDATPNucCWkjHHpp3BiZa",
  "key28": "3hCjWm2xG1r4gDJX87CnAEm4V4bsMjDBoSgVzKTbKwaBhjpueWshJusK8vHuEcvWvSeZxAwAFiwwgk3esYwL1MUr",
  "key29": "3UFjZygBGXNJuNhHggJ2HWqEgXuuWJM5L2Jio4EjsGGKXGCTKwEkeMMrNLDYDSgKfqLdwPCMPWxJmehxnxjCj5YA",
  "key30": "3yYb2SH7D9v8fjYCLzNeHNGZhbJQGAYgDNsta3qsFizY2ueXUqwU6YWgC1VzcvRJWxJZKJezQ2DoNfxxqCUR3rRq",
  "key31": "4QYBddqKagRUkcqbgczhmBt6odRX6jKj2seBXa2KxUpMBgFJrJ8HNq9aDue39hr2vatbMUf1ZQWxyUCc6JjyGu5E",
  "key32": "XEXtPEmX1hqkXTubfowQnNxkeKLtXtSh196ntWZkHYUutkm9qjqZPBUCrUEFN3nwPc65ZSHGsXDZRwsnamy6G7J",
  "key33": "5M8949sgpk6b2Ux8buhs7jSgssiTw8AfpUFcGiuTXs2g5VcXUX7SDvwjkvYuQdoTDVnm1cqoN5hcGcAHf1yYZSEv",
  "key34": "61f57w1VjERweEohF9WiXrYwGkNKEszPszH17zJsLyYUopNShUjNNiWAckmQMDrtokM2GVyoQgCwW2tt2iQU6W6z",
  "key35": "5ni1f9PKD3hUAUmD6XyuGginQcWrQG51H9yF9VqNHoDjPbFGi3W6FGoQUR1VLnuVbLAu9PQBvXSEg7WdmxmwakAs",
  "key36": "34MxtGzy8wWoFsyKHATHnsNrzvKiVpa2sSwgQLaoZLrhg5u3UQUTAeFefkHthcxzXcGuhYhiTEszzdxXq6iSqdNq",
  "key37": "3Jpnqj4U8xBLYb3BPTdVaUq52JPhMJdoVoV9pcvHiUJuDDaAGwxWW9sPkdFBRi3TdDEhr2nGbFKucmhGxeSuB9eZ",
  "key38": "4qrEyXHBccxtPqG78WcLbNyVA8zyyKPCLuf4JSAhseSxEtxF7upBwjUxdwAGLeTaWw6XDEtwDvASWiZgQoFXcmXF",
  "key39": "4apib2vDpRwpz9H2tDePH5QQFGGgv5U6pR4VcfcX1HfJp3VGM8faSNZPogi5b3RAHw6xH2BFuVHKsaJRFMCkj6dC",
  "key40": "4RegXHENZ4YAqnAnH9kKFMBj8aWpAucrtR4kRnZVhZCBZvz3cSooV3R7JzoEhf3S19Er35iK5SirNBoRGUN51Gyc"
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
