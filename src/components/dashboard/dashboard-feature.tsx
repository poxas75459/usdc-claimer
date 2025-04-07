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
    "5s65i2NhNEptiLbLw1rnu9pS6aJ3zp2BPizu3yM4CV2hWoA9MsBmyPougGy3abap5WqFPqramMu1a3F6KLdHccay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJAehAbkEHDDoSKbMaXYta2Ra95dBiw8tG9HpPZvwNd5gadT6FSSCNkiXV95iSLAXByXDK6x5YwcWVFFfXANDxW",
  "key1": "21yom7YdDmdsyaXeNwCFBD3nU64zhokAu2gs84ZAK2nbsFY8JPjc5JcFzmCjQDa9KBfMCuyM9YJWsw8uKyavApyc",
  "key2": "2CbpvWL7h81JAksEDbQsK94A5dYCjFBxyTVv75zksh9hT84FDtDHFE5iZyyi8Jzi7zmVTxrEG2CvSgaeto3TfBiV",
  "key3": "3Kfziax4mXGZ5u5hhvoFqhhLLMqAzNYxc8mTXzavLhAUjcep7U2ZtYCUQfntGetbnaXQvqM1jaxu2QwuhsVkBiog",
  "key4": "qBFtZmcrQUFHq28fUpBQdwb9yrj6WWvAYTjwbto1h793S5MVyjca2KwgybLuJgKZccYPYAXRhxLzVSQF6xzYdFN",
  "key5": "2gN9uc697QLVGmf9tj9NM4xTwqte4HBVmzuVKyEfQYsXRwte5kCVyzRrybwEhkVFyAwWVqveTXLgh5gJMXLoH3s3",
  "key6": "5BAswTX6KJKy4FBAMuxsohJqKtWja2vdWctHTB52nKo8vesZbQK2aykzpF9wUP5cdUN4Q7Q5bTNK4doc9Cykv215",
  "key7": "3sw9DKZmn9HbF37xL5PhDrQirRDjrRnK63MSdqr6hdSqnukQ8pxPLWtUakrNGVEqYLbfg2UVYaExbkzWPrgQpABw",
  "key8": "2dZYbC1zeCmN2FTb8Lp8UnbuCB2mZvxBHtFDxxGKYfANdyri9bXasdcGEo4Ew6Jnm2gvaMvwEmqGpNhHgCQXyQpB",
  "key9": "4Pf5j5WGAFjbjSgQniomamYyTAVdgsstqAZArKevAnqNqXt1ppwiUBq5kykcWkcQCmkemJzdG2ksPb5TgnYaM1AA",
  "key10": "2EvdG2GKVWr1Du6J1acoxiobxTfYLPaC6GmSKUipXkxvZbQUokxDx8XCYZd2Vn7se5KU5NJNd1A2A8Ms6t8tmCxi",
  "key11": "2u4phVQuGCyB75Yw3Em2ENi9AMvJeZ5pBEsiosxeKNSLqpcC2ySayNiQokr7MKkHGmX4dQitHcrSM3kddCqPqywD",
  "key12": "23qfmFMWP8KK9fv5MPbnfX8sTPmEyGyZHVQaqTYWSuLL5PiR6tLJg1TkADBCpM7W3vUNa74X9Ywm7A8dxiYfnsJu",
  "key13": "395iM3Ymrvdc49sa4iBk42jnBcViKn9CZzmNaKVHbzaxHe3s4SzEwt8gf1joQzEtTXyhXWoLSV43Qj9iv5usHvxo",
  "key14": "fu1xkQLGkg4vvJu3CLNhxLaSUC2iBNmMUvfqDbtgDvb5RiHccxcCoczXnwH38vq7xCh2SFWn37VbZ6HEwahv8Po",
  "key15": "37Q6ZPr497CZGdkVo8BDtyTvEgfwXDVpR1GDy53DeDQiBDPiHwSin5e4Pk3ifesh3nH2aWgCotkW35yyfjsMT7MG",
  "key16": "5MrfZHGdQR9meDYu7RQmi9dmL8eekS14wwnqq927zgs428YruTMZWN4e2HEX99NMUt4HFr6hpgN1Qdrv72hstBsa",
  "key17": "5qqxBb2FQnGGtRoqrsrEPTX8ZuJGz6ZN5gQUKG1243KuvrtEqt8fW9krQXz98FVG6ScvLaYXoD6zYbUcML4fRf76",
  "key18": "4DV79Cri63VKkXc2kwprzTeMfMre2ScpDMGDQbhaRmMXxnTZx54z7kioAy38dY7xmEp9YzWayqfk8wy7w7z8a5yz",
  "key19": "4qhinLviVD9qDPi1oyUouovQAFW3sWy1DtAeUXTr94RYZPYpEVrhTnZdK41pxMBbuRH4AHBqEEAkXURB7cyYpWCe",
  "key20": "4Nd8ZJMghRRXC6HuBWpaEpt2qivQyzUVtGGDU2p2gj2CuzJC8Wikn3C44MAEfH2KSjgYYVxxh7oFh6s1wiWxi91m",
  "key21": "45tmVxmHPr6fsJ4xAhyCroAFDjQng83q5oy3r1FifszbfCZAX8YVH6BAVm2t1xc14pRmGQio1NPRuVsjXfDiM3UM",
  "key22": "2Tj1Gu1sA2Guec92uWS9AHgMrCgdP3omEKoCF6C53YPQaZL7StXFvPMn6wsQshwFVbSXxsrumaykAK1MGAPa2khf",
  "key23": "4M5hWmbb6Di1doPo6aJ5D9B2Dfsy3XtN78ZLZtY351MxRqZ21eVETpQnQyQpJFR4z81rchnbYoFzeZhZLRp9A3Nx",
  "key24": "4GGWzrdNZSAXyrtt6MSL9sZ2NBjsYsL3oUrCuLDRahKmrKvp99K6arZyCwdizHdxZ3uHdC4AYgLq6LdN9VEBtos3",
  "key25": "wp4CU5P6gB8FTyNEzMSeHSg77Sk1CfVWPP9GWcLKyJXWghMWDEThZDmTYSCmJbRA6Vpu4EdgE2pGa1aGiLESZBz",
  "key26": "4KMztAgqyyBrzcczfzyGoK5hSbyUbQSCNEFv2E3njNFp1GhY1UfrKNxSQsswqawDsCh85UV6rHkdRvbeDS1DP4RT",
  "key27": "2uyYM37tAN7jvRXkecU97LZECcbMoHmG2ud5f87iJiNcjgJqeQzgoA9yH7A3euvH8nahUXMb6ZVb7Z7XfHYNhTFf",
  "key28": "259JkHoKHiZR1Tvm5azLxmFeogADCGnpBGoGxNRrhgWN5pbBpJan4HZ846NXsNNeYLGNDxruMdvdmNwbsfvfRDU4",
  "key29": "h83xcDYevSVvajSHMysJjYHYDzyVoNfee43MBnPbScnPff1Mrte75vT9wD6ig3XgRVwhXzEdjHkGYib1UeFuR8d",
  "key30": "3VEmHJzAjJcrxbCLQnQUvkFP3ewJKrpbwJtFDK4EcF1uHE9kB3N6fxg8PQz7Vj6B7fVoiRAo5jiNLS2xYRjmecGx",
  "key31": "65YaQasgQ4xavzqhkaeEKm2UpiTurbRWKhzbRcVYmZxuGLdnUoryY7m8TqN2Aer1cNQi1p9LgLTaWNNFdNbDdpEP",
  "key32": "WfxHQXGcukQC9AseTQrZf2dWWqxkjEo3RNGUfkGmTxduVHc6fpCATJUU8bgsKA9eu7H6zRwXDrTA2bnyFPT2wr2",
  "key33": "3fydq7kzsumbCPuDo5yiHy5WTYS5UxgAKwYpLG5bntBjKFH98cH8we1mELXjyepN3agkD1uyn3pXAjGCTm819xNo",
  "key34": "4Uvmw8JAV8sVvEXRSDeN5AXCbQEuBFNUKc6vG79qzQv6YukNF77KL1Ews1KRjqU7r2zypCpdZqddvb4mWBosbTQP",
  "key35": "4wzX6cXmvZau3n8X39apapDy8Q4AFSzngLZcndEgbsBAy5zqhEecnYs41J8c2axTvNhHRwfnShaP8yoq9vjWQoMX",
  "key36": "3k2ZVYiRkdt15uvQwHE9juiXRgrJPjT6o14GyZrjcbFuZYhUjKe64MbURQNhM6JzB9mtowERvxuuikFsTLnVJffU",
  "key37": "21FFekonQZ1JfS2zdPhQdksxqf9W8Th2H8yzijsX55NMLPReZRKD9njBWjTr3kDK8b36PtdMgRscogimgk8mkKzW",
  "key38": "5UE8uRUBTVghjrkiGHbB6tYx4ttZjRHdgu2QPd4dLH564g4Nb1sxJGsb4H3xvUy3CzW3BzrQCZBLvELrCxQA8bj1",
  "key39": "29Atj7rdk6N4dFEExtMAiN5gxx7KLMZYDXFoWe3dSsLF8kXzSm71fWbxo7SNuFYJKHMfuZ2W5qJCKUYZ1dYq98zF",
  "key40": "3KH2KdW47dkMmA4CZsK2m3ZYrjHsd8W4pUmSr3Ua4YSam3kjPRZqYtJqHtSrfrYuMvjNiJcusb1ee5b8q4gF5AcU",
  "key41": "2CoUNizBvURr7FvYAKUUiBKVK86MEbovoEbiwqT94WZqTwpqxGinbfeEDghKBKxgU2ahFAGgxPb7bm6xoZAQVprt",
  "key42": "2HbU4RebgmJ9sftdmHQycfzNoitHVS6pqFM7wGeqh1B5KXxvDd1nSMdEqE5tX3vtPhfmRRew7bZjJsbAyTDYZ3p8",
  "key43": "3j4HSHrThsabtaJxCiBPFH4xzgrSe3BgBMbcqeKCx351VR4JSm3xCEPdKkUogGbrr9URq5aST7gaGM3eoN6wYNAT",
  "key44": "2ArDrR4a6ZMNHdtCkA9T23R8xwFicdmQC9mCu8y4ZLdwqmSKuWdQZFKB8VvJAQs28WVHmDbLyhrMovCFPtofABUY"
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
