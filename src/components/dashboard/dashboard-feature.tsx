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
    "2YmA544WBMu3UXZvQTsnrwJqAgDKqRa5L6tPoNxdfdNARcSutK2ZthSW727GvdgY4J8HJiYfRChn9ZgLLFozUvSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Xs3RE6BTRm4ETB8xVrPCLK8ubVpci9oToJJuphuJ5U6tHzq852MbPbsexuea7xSGuaaL4zazVdrGE8iY7jcGJk",
  "key1": "UYB24h3yiz3i5iP25kYDHWeWimca7Xuhwek4BKQQvpDHgZGem9upduN9d9CG1RNGbEp91a246b4mEx5q6NTGWBG",
  "key2": "5K4mmiZmoo6DiVhY5TaHy9cbF15pPkcMzUzEyvedVuE4Fhoa9tLU9JtYxQTsF7w9VvC77viLyd8YrtZ9tzausXzx",
  "key3": "2LwRh2PZu3H5yEN6h1aYH8xGq3EKUBtPnx572akzb9F6q155Tjfk6dHNuwqqK9i9jpUDXq95S93NcDVRLBi3dGn1",
  "key4": "3vhjoeBCK27ZmpDBBZYufLD9ygh3j2JGh1aZkgHHqGnX3WnmJj5mmZzp6QPSijp54WT7Z2nvWwi1hfqQXQJGv1vD",
  "key5": "2ASBhLkTZaSTUFppWM1pHg16KB2r5arzo6N6h3kz1CwBFScjgFLaQh7q1SDKDt1nkqF4x7fCeC62QBVCkPWkyrcW",
  "key6": "32korHsrrZMYBfeGgwQrTreSBR6RTUJ42ffdyoMYgp9vHumFarVti57o8VDacspcs1zi4vWCkHPrR1STTkJ2n6FQ",
  "key7": "PhzeanJSWnv2F7SVibDurQYUsdpkqALG3YjoeWMUyoQW7RWoBiBKZNrgsb1onGjxQEFv9kgTPhYQzgxHQpGYAE2",
  "key8": "kTqENLcvTyDhYdRy19k97Tsxwbsnx3aeqA53eU8bxqhe3m6Rd9WxhF4fBB71GgMGSStxMsMn9hm2n65m4mzXpzh",
  "key9": "NigggpBB3wpenH1EC7yuj2ydbLnj3VNoj5JGkJzMwYQLi2QpScTeUhe5N44iqFhYbYKzWcQojZGfZPAo3nLXQXX",
  "key10": "YdiEfdb5hG2gX2y4Q5sGwKnuaRff7owNaNPXFydWegpKwfya38eiXjhaBiph5qvSxf9iRaAYhztRHP31emZg7QL",
  "key11": "ArVcHXVFDMEWQHZvEb4Ays6oVehsytaKYV48yD8LBHPr5r8myuSrhXk3rLzamCdgthfbb6ytHwbKYtY1YVozkX8",
  "key12": "4nQp95dp6iKKcEusdhWeTDLK1QBVHDzvYdSTSdXEVkcJkDfLnPG5f8VquAxTYq2oEWjWFWbgPfpRcJfAmNhbgnG6",
  "key13": "Pk7QAP4KSsuWq6QTqfDv6489DViX21r4zuD2ZbhYWt8rsbCLG6BKyDAcjS4HiE6pjdeQkYh2ufcvjJBPziZJGfP",
  "key14": "3wehiBrf4wVz1eCLDfS7rmbf534JHcqJHfLEYpkPAgBJTLL4WAzx4q7ZhAMCZZ4RUffgaE51Z8g54kYCShDyusQX",
  "key15": "4hRk2mcyLNhuHrFurUvipkVxR3gZzjfFJdcRyNrgcc3arL1kFzL5acm5aQHbvpyr5fujfrzjHe2Fe8eRJBgYbjXt",
  "key16": "3fSmCvN5qcvvPsuF6qkGWCBdXkmb3fGxpBefr9pBta1Y5qW5ZH3ECNm9dJx26zt55zEW1gD4NkiLcS3CgTEhnYy1",
  "key17": "5MT4N4Ujz8TEwdpXJTTsi4oydArk3LK2sSg81fRcoUJq5iWQYpcgKzmvJwAXqXTfKb3uYpTma5H5ur93FNbjLAiM",
  "key18": "65iHMPFveYSc1vgMEDg3mFEnYfddskGhM1MSZmq2gkba5wuxNi18aBjJ9Q5pScStr7BBqg1GrFs4WnPdnPcjQSZQ",
  "key19": "4jZw29yQ1es7uv9Gp1KRR5XUiif1oXb5CaCtf1JtSViRPkCNcDWmjrZxemmkwjNnKSGqpc5DTzFNvS3vTN2JzF83",
  "key20": "4JGAGYweGVZe4LoBDbi7voPRgQ74GWU2c3ZGnvBbCpXyyPHNaEQmW5tCy1J6e7WVkVcQVw8uaFQRWJ82tpaygCHJ",
  "key21": "ENoc8dCWghPWvBMQHt4g9fkhQVwhHUChxUL39gQ5RSGAnCSCitnnqjLU5rEw2QZsBjYApksK38PFYoUhmSRoN9y",
  "key22": "2ti3bZt3rUDY3mk3zfwmgz7FehLzsc198vJESbcH5Www8voTkkgodjJXi496xejL3sY5Y9nzcmZMMkj8Ge12UwTg",
  "key23": "3SVfAkD5bEouVwqLHgo421r2bJ2wMZFSykizdmpbPqq54SckpQzzFg4XBQb2gszxg7e7KvhEUZauGBBXwSUxkVkE",
  "key24": "Y4cpdzaiuF7uHbEyMzWLer2TTduK5GVNMcGjoWNWhqqmq8yW6ja5KuuYSHHYXDQF89X4o43KWNURVsYYnz8eNJ6",
  "key25": "58E7q6wuPAJT4trYZAWaDUc31xLz6nxm3xnTQX1Hye1WtGWVXzoSLcBFukLMWeJknBef4VPLShXKqR5zADBGcLmr",
  "key26": "5Deem1BXybYpqgJCgpdj7Wm7cV8jJ1Kp56WJohnwrYxscSA1FhnzfEMvDLeBPuZyM4emEB8iMh97yAFUaQim7YvV",
  "key27": "3394V2Xt75L1tgCz98oeq5myLZev2By1kqZNKT4W2Xyi8YgZsbDVyEo6CzNFPDm4bfUUhBHNAbet8v3ZtVvGZW4v",
  "key28": "2U6CUoRMVDwLSVqmsVpRURW7vJEaCMWwdGLVW3YbJeu8Ltjb44oeTAw3wZ22SeLPQ21ToQpYCcvbqLYSuizEf4AR",
  "key29": "2Fj1utYDqwXcKbQ2c6ELa3djLhhb15cyid9c9a9xQoJBy68tMDHUnhgjApdbALMedutJnCjPHYb5iT7Egd6JcT9M",
  "key30": "rcR2Wq2BKH6dLH63kNbUDJKMU1NU5uB6Rf3QM9qTHZotde76E9HGumE56PakQwBkruAa2YjQmdh1U27GW4CH1Zb",
  "key31": "2iXVp73j1uciD94svKM9KtScyuGwqJv5nSQfCZx175ZLQe3724kLay5MGH4xYX28ySN7c6juSeX2kjL5JZf2vQuB",
  "key32": "22f499L18z84Ekd44nzv7YNg1mi5AEVBY3zv8VXnASy2ypSJ5BHn6gs9nyqrV1j7ndVC5uooLSSaiS2i6kh1KagU",
  "key33": "4uZdEUQTZg9uh4zUX8YqmmwScamcEJfbSA4TWCLChJBTpKwk5uDu1AJPDqjHFkxPoQvFCGvLcEGbepkhKADGiipg",
  "key34": "5LBhwcYTQv7AWLYCCzJkTq7aCF99XQLUAfAwNeAiPQ6DoBDvRxoEyg8UXosviSEtYSnKPwUDBByKFn67CDNg15L",
  "key35": "a61kCjokWGi9rVEbJRbHg1KZo8extR1JLPrf72bKcJsGGor9Uzyo3mfqAatPr2MwNYSGC9PJX4iEicVc9WqWu9w"
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
